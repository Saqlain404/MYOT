import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import {
  DepartmentHomeCount,
  RequestsList,
  SearchRequests,
  TemplateList,
} from "../../ApiServices/departmentHttpService/departmentHttpService";
import { toast } from "react-toastify";
import { AddCommentForTask } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { MDBDataTable } from "mdbreact";
import Document from "./DocumentRequests/Document";
import { useSelector } from "react-redux";
import { selectUserData } from "../app/slice/userSlice";
// import "../../dist/css/style.min.css"

const HomeDept = () => {
 

  const [homeCount, setHomeCount] = useState();
  const userData = useSelector(selectUserData);
  const [listItems, setListItems] = useState([]);
  const [templateItems, setTemplateItems] = useState();
  const [search, setSearch] = useState("");

  const [showClearButton, setShowClearButton] = useState(false);
  const [comment, setComment] = useState("");

  const [templates, setTemplates] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: false,
        width: 50,
        selected: false,
      },
      {
        label: "Assigned To",
        field: "assigned",
        width: 50,
        selected: false,
      },
      {
        label: "Version",
        field: "version",
        width: 100,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
        width: 100,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        width: 100,
        searchable: true,
        selected: false,
      },
    
      {
        label: "Actions",
        field: "actions",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
    sortColumnName: "name",
    sortType: "asc",
  });

 


  const getTemplateData = async () => {
    let { data } = await TemplateList();
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.templete;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.assigned = (
          <>
            <img
              className="w_20_h_20"
              src={list?.signatory?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">{list?.signatory?.name}</span>
          </>
        );
        returnData.version = (
          <>
            {list?.templeteVersion && list?.templeteVersion?.length > 0
              ? ` ${
                  list?.templeteVersion[list?.templeteVersion.length - 1]
                    ?.version
                }`
              : "No versions found"}
          </>
        );
        returnData.department = list?.manager?.department_Id?.departmentName || "NA";
        returnData.status = (
          <span
            className={`"td-text status" ${
              list?.status === "Pending"
                ? "text-info"
                : list?.status === "Approved"
                ? "text-warning"
                : list?.status === "In Progress"
                ? "text-primary"
                : "text-success"
            }`}
          >
            {list?.status}
          </span>
        );
        returnData.comments = (
          <>
            <div className="text-center">
              <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src="/images/dashboard/Comment.png"
                  className="mx-auto d-block"
                />
              </a>
              <form
                className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
                onSubmit={(e) => handleSubmit(e, list?._id)}
              >
                <div className="mb-3 border-bottom">
                  <label className="form-label th-text">Comment or type</label>

                  <input
                    type="text"
                    className="form-control border-0"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <div>
                    <img
                      src="/images/tasks/assign comments.svg"
                      alt=""
                      className="comment-img"
                    />
                    <img
                      src="/images/tasks/mention.svg"
                      alt=""
                      className="comment-img"
                    />
                    <img
                      src="/images/tasks/task.svg"
                      alt=""
                      className="comment-img"
                    />
                    <img
                      src="/images/tasks/emoji.svg"
                      alt=""
                      className="comment-img"
                    />
                    <img
                      src="/images/tasks/attach_attachment.svg"
                      alt=""
                      className="comment-img"
                    />
                  </div>
                  <div>
                    <button type="submit" className="comment-btn btn-primary">
                      Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        );
        returnData.actions = (
          <div className="text-center">
            <img src="/images/sidebar/ThreeDots.svg" className="w-auto mx-auto" />
          </div>
        );

        newRows.push(returnData);
      });
      setTemplates({ ...templates, rows: newRows });
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = templates.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...templates.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name < b.name) {
        comparison = -1;
      } else if (a.name > b.name) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });

    setTemplates({
      ...templates,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  console.log(userData);

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...templates.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setTemplates({ ...templates, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...templates.hiddenColumns,
      ...templates.selectedColumns,
    ];
    setTemplates({
      ...templates,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = templates.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field}>
        <input
          type="checkbox"
          checked={templates.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
        />
        <label>{column.label}</label>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !templates.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setTemplates({ ...templates, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  const handleSubmit = async (e, templete_Id) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("myot_admin_id");
    console.log(creator_Id, comment, templete_Id);
    let { data } = await AddCommentForTask({
      comment,
      templete_Id,
      creator_Id,
    });
    console.log(data);
    if (!data?.error) {
      toast("Comment added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setComment("");
    }
  };

 

  useEffect(() => {
    // getRequestsLists();
    getTemplateData();
    getHomeCount();
  }, []);

  const getRequestsLists = async (key) => {
    const { data } = await RequestsList();
    if (!data?.error) {
      setListItems(data?.results?.list);
    }
  };
  console.log(listItems);

  const getTemplateLists = async (key) => {
    const { data } = await TemplateList();
    if (!data?.error) {
      setTemplateItems(data?.results?.templete);
    }
  };
  console.log(templateItems);

  const getHomeCount = async () => {
    let { data } = await DepartmentHomeCount();
    if (!data?.error) {
      setHomeCount(data?.results);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchRequests({ search: value });
      if (!data?.error) {
        setListItems(data?.results?.document);
      }
    } else {
      getRequestsLists();
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Home
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Department/Chat"}>
                      <img
                        src="/images/dashboard/chat-left-dots-fill.png"
                        alt=""
                        className="ms-4"
                      />
                    </Link>
                    <img
                      src="/images/dashboard/round-notifications.png"
                      alt=""
                      className="ms-4"
                    />
                  </div>
                </div>
              </nav>
            </div>

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        My Department
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-5">
                        {/* {homeCount?.totalDepartment || 0} */}
                        HR 
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="statics_box card-clr-2-4 ">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Employees</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalEmployee?.[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Active Users
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalActiveUser?.[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalTemplete?.[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-relative">
            <p className="table-name mb-2">Templates</p>
           
            
            <div className=" col-12 d-flex align-items-center table-searchbar">
        <div className="d-flex ">
          <div className="col-md-3 table-searchbar-imgs me-4">
            {/* <img
              src="/images/dashboard/Plus-icon.png"
              alt=""
              className="p-2 table-searchbar-img"
            /> */}
            <img
              src="/images/dashboard/ArrowsDownUp.png"
              onClick={toggleSortOrder}
              className="p-2 table-searchbar-img  cursor_pointer"
            />
            <img
                    src="/images/dashboard/DotsThreeOutlineVertical2.png"
                    alt=""
                    className="p-2 table-searchbar-img border-end "
                  />
          </div>
          <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
          <p className="m-0 text-nowrap">
                      {templates?.selectedColumns &&
                        templates?.selectedColumns.length}
                      <span> Selected</span>
                    </p>
            {showClearButton ? (
              <p
                className="hide-selected ms-2 m-0 text-nowrap cursor_pointer "
                onClick={showAllColumns}
              >
                Clear Selection
              </p>
            ) : (
              <p
                className="hide-selected m-0 ms-2 text-nowrap cursor_pointer "
                onClick={hideSelectedColumns}
              >
                Hide Selected
              </p>
            )}
          </div>
          <div class="search_icon">
                  <img width={20} src={require("../../assets/logo/search.png")}></img>
                  </div>
        </div>
        <form className="d-flex me-2" role="search"></form>
      </div>
            <div className="col-12 mdb_table mt-3 ">
              <div className="table-responsive">
              <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={5}
                    className="text-nowrap"
                    hover
                    data={{ ...templates, columns: visibleColumns }}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                  />
              </div>
            </div>
            </div>
            <Document />

          

            <div className="footer">
              <div>© 2023 MYOT</div>
              <div className="d-flex ">
                <p className="ms-3">About</p>
                <p className="ms-3">Support</p>
                <p className="ms-3">Contact Us</p>
              </div>
            </div>
          </div>
          <div className="col">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDept;


// disabled={
//   !departmentInfo?.departmentname ||
//   !departmentInfo?.description
// }