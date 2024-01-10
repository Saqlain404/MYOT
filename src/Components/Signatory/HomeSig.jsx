import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import {
  SignatoryHomeCount,
  SignatoryRequestsData,
  SignatoryTemplateData,
} from "../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { MDBDataTable } from "mdbreact";
import Document from "./Requests/Document";

const HomeSig = () => {
  const [count, setCount] = useState();
  const [comment, setComment] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const [templates, setTemplates] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: "asc",
        width: 50,
      },
      {
        label: "Assigned To",
        field: "assigned",
        sort: "asc",
        width: 50,
      },
      {
        label: "Version",
        field: "version",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        searchable: true,
      },
      {
        label: "Comment",
        field: "comment",
        sort: "asc",
        width: 100,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
  });

  useEffect(() => {
    getCountData();
    getTemplatesData();
  }, []);

  const getCountData = async () => {
    let { data } = await SignatoryHomeCount();
    if (!data?.error) {
      setCount(data?.results);
    }
  };

  const getTemplatesData = async () => {
    let id = localStorage.getItem("myot_admin_id");
    let { data } = await SignatoryTemplateData("6564816c42ca2ce84e2ed3f2");
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.template;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.assigned = (
          <>
            <img
              className="w_20_h_20"
              src={list?.manager?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">{list?.manager?.name}</span>
          </>
        );
        returnData.version = list?.templeteVersion[0]?.version;
        returnData.department = list?.manager?.department_Id?.departmentName;
        returnData.status = (
          <span
            className={`"td-text status" ${
              list?.status === "Pending"
                ? "text-info"
                : list?.status === "Approved"
                ? "text-success"
                : list?.status === "In Progress"
                ? "text-primary"
                : list?.status === "Rejected"
                ? "text-danger"
                : "text-success"
            }`}
          >
            {list?.status}
          </span>
        );
        returnData.actions = (
          <div class="text-center">
            <a type="" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="/images/sidebar/ThreeDots.svg"
                className="w-auto cursor_pointer"
              />
            </a>
            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
              {/* <li>
                <a class="dropdown-item border-bottom" href="#">
                  <img
                    src="/images/users/AddressBook.svg"
                    alt=""
                    className="me-2"
                  />
                  View Users Details
                </a>
              </li>
              <li>
                <a class="dropdown-item border-bottom" href="#">
                  <img
                    src="/images/users/PencilLine.svg"
                    alt=""
                    className="me-2"
                  />
                  Edit User Details
                </a>
              </li> */}
              <li>
                <Link
                  class="dropdown-item"
                  to={`/Signatory/Home/Comments/${list?._id}`}
                >
                  <img src="/images/dashboard/Comment.png" className="me-2" />
                  Comments
                </Link>
              </li>
              {/* <li>
                <a class="dropdown-item border-bottom" href="#">
                  <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  />
                  Wrap Column
                </a>
              </li>
              <li>
                <a class="dropdown-item text-danger" href="#">
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete Template
                </a>
              </li> */}
            </ul>
          </div>
        );

        returnData.comment = (
          <div className="">
            <a type="" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="/images/dashboard/Comment.png"
                className="mx-auto d-block pt-2"
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
                  placeholder="Enter your comment..."
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
        );

        newRows.push(returnData);
      });
      setTemplates({ ...templates, rows: newRows });
    }
  };

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    let { data } = await SignatoryRequestsData(id, comment);
    if (!data?.error) {
      setComment("");
      getTemplatesData();
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = templates.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...templates.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setTemplates({
      ...templates,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

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

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Home
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
                    <Link to={"/Admin/Chat"}>
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
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Employees</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {(count?.totalEmployee &&
                          count?.totalEmployee[0]?.count) ||
                          0}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        +11.01%
                        <img
                          src="/images/dashboard/ArrowRise.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Departments
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {count?.countDepartment}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        +9.15%
                        <img
                          src="/images/dashboard/ArrowRise.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
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
                        {(count?.totalActiveUser &&
                          count?.totalActiveUser[0]?.count) ||
                          0}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        -0.65%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
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
                        {count?.totalTempleted}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        -1.48%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-relative">
              <p className="table-name mb-2">Templates</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    {/* <img
              src="/images/dashboard/Plus-icon.png"
              className="p-2 table-searchbar-img"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            /> */}
                    <img
                      onClick={toggleSortOrder}
                      src="/images/dashboard/ArrowsDownUp.png"
                      className="p-2 table-searchbar-img border-end cursor_pointer"
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
                </div>
                <form className="d-flex me-2" role="search">
                  {/* <input
                    className="form-control table-search-bar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  /> */}
                </form>
              </div>

              <div className="col-12 mdb_table mt-3 ">
                <div className="table-responsive">
                  <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={5}
                    className="text-nowrap"
                    hover
                    // data={awaitListing}
                    data={{ ...templates, columns: visibleColumns }}
                    noBottomColumns
                    sortable={false}
                    paginationLabel={"«»"}
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

export default HomeSig;
