import React, { useState, useEffect } from "react";
import RightSidebar from "../RightSidebar";
import "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import {
  AddCommentEmply,
  AddDocument,
  employeDocumentList,
  fetchTemplateData,
  searchDoc,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { MDBDataTable } from "mdbreact";

// import "../../dist/css/style.min.css"

const DocumentEmply = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [templateNames, setTemplateNames] = useState(null);
  const [documentRequests, setDocumentRequests] = useState([]);
  const [shouldRender, setShouldRender] = useState(false);
  const [templateIdList, setTemplateIdList] = useState([]);
  const [comment, setComment] = useState("");
  const [document_Id, setDocument_Id] = useState();
  const [documentInfo, setDocumentInfo] = useState({
    documentName: "",
    templateId: "",
  });

  const [showClearButton, setShowClearButton] = useState(false);

  const [tasks, setTasks] = useState({
    columns: [
      {
        label: "Document Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Requester's Name",
        field: "assigned",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        searchable: true,
        selected: false,
      },
      {
        label: "Version",
        field: "version",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Date of Signing",
        field: "date",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
        selected: false,
      },

      {
        label: "Comments",
        field: "comments",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
  });

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  useEffect(() => {
    // handleSearch
    getTaskData();
  }, []);

  const getTaskData = async () => {
    let data = await employeDocumentList(ids);
    console.log(data);

    const newRows = [];
    if (!data?.error) {
      let values = data;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templete_Id?.templeteName;
        returnData.assigned = (
          <>
            <img
              className="w_20_h_20"
              src={list?.templete_Id?.manager?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">
              {list?.templete_Id?.manager?.name}
            </span>
          </>
        );
        returnData.version = (
          <>
            {list?.templete_Id?.templeteVersion
              ? ` ${list?.templete_Id?.templeteVersion[0]?.version}`
              : "No versions found"}
          </>
        );
        returnData.date = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" />{" "}
            <span className="ms-2">{moment(list?.createdAt).format("L")}</span>
          </>
        );
        returnData.department =
          list?.templete_Id?.manager?.department_Id?.departmentName;
        returnData.status = (
          <span
            className={`"td-text status" ${
              list?.status === "Pending"
                ? "text-info"
                : list?.status === "Approved"
                ? "text-warning"
                : list?.status === "In Progress"
                ? "text-primary"
                : list?.status == "Completed"
                ? "text-success"
                : "text-danger"
            }`}
          >
            {list?.status}
          </span>
        );
        returnData.comments = (
          <>
             <div className="text-center">
              <a
                onClick={() => setDocument_Id(list?._id)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#commentModal"
              >
                <img
                  src="/images/dashboard/Comment.png"
                  className="mx-auto d-block"
                />
              </a>
            </div>
          </>
        );
        returnData.actions = (
          <div class="text-center">
            <a
              className="cursor_pointer"
              type=""
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/images/sidebar/ThreeDots.svg" className="w-auto" />
            </a>
            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
              <li>
                <a
                  class="dropdown-item border-bottom"
                  href="/Employee/view-details"
                >
                  <img
                    src="/images/users/AddressBook.svg"
                    alt=""
                    className="me-2"
                  />
                  View Details
                </a>
              </li>
              <li>
                <Link
                  class="dropdown-item"
                  to={`/Employee/Comment/${list?._id}`}
                >
                  <img
                    src="/images/dashboard/Comment.png"
                    alt=""
                    className="me-2"
                  />
                  Comments
                </Link>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setTasks({ ...tasks, rows: newRows });
    }
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...tasks.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setTasks({ ...tasks, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...tasks.hiddenColumns,
      ...tasks.selectedColumns,
    ];
    setTasks({
      ...tasks,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = tasks.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field}>
        <input
          type="checkbox"
          checked={tasks.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
        />
        <label>{column.label}</label>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !tasks.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setTasks({ ...tasks, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  const toggleSortOrder = () => {
    const currentSortType = tasks.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...tasks.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name?.toLowerCase() < b.name?.toLowerCase()) {
        comparison = -1;
      } else if (a.name?.toLowerCase() > b.name?.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);
    setTasks({
      ...tasks,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setDocumentInfo({ ...documentInfo, [name]: value });
  };
  console.log(documentInfo);

  useEffect(() => {
    const fetchTemplateIdsData = async () => {
      const [templateList] = await fetchTemplateData();
      if (templateList) {
        setTemplateIdList(templateList);
        // console.log(templateList);
      }
    };

    fetchTemplateIdsData();
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const documentData = {
      ...documentInfo,
      user: localStorage.getItem("user_id"),
    };
    await AddDocument({
      documentName: documentData.documentName,
      templete_Id: documentData.templateId,
      creator_Id:
        localStorage.getItem("user_id") ||
        localStorage.getItem("myot_admin_id"),
    }).then((res) => {
      if (!res.data?.error) {
        setShouldRender(!shouldRender);
        console.log("Success");
        navigate("");
      }
    });
    setDocumentInfo({
      documentName: "",
      templateId: "",
    });
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("user_id");
    let data = await AddCommentEmply({
      comment,
      document_Id,
      creator_Id,
    });
    if (!data?.error) {
      setComment("");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Document Requests Management
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  {/* <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchData(e.target.value);
                        //  handleSearch();
                      }}
                    />
                  </form> */}
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Employee/Chat"}>
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

            <div className="d-flex justify-content-between">
              <p className="table-name mb-2">Document Requests Management</p>
              <div className="d-flex justify-content-center th-text">
                <div
                  className="d-flex whitespace-nowrap"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/images/tasks/Add.svg" alt="" className="pb-3" />
                  <p className="pt-1 text-nowrap">Document Request</p>
                </div>
                <img
                  src="/images/sidebar/ThreeDots.svg"
                  alt=""
                  className="pb-3 ms-2 text-secondary"
                />
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                <div class="modal-content border-0">
                  <div class="d-flex modal-header border-bottom">
                    <p class="" id="exampleModalLabel">
                      New Document
                    </p>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <form action="" onSubmit={handleSubmit}>
                    <div className="row p-3">
                      <div className="col-12 mb-3 ">
                        <select
                          className="col-12 modal-input  p-2"
                          name="templateId"
                          onChange={handleChange}
                          value={documentInfo.templateId}
                        >
                          <option value="" disabled>
                            Select Document Type *
                          </option>
                          {templateIdList?.map((template) => (
                            <option key={template._id} value={template._id}>
                              {template.templeteName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </form>
                  <div className="d-flex justify-content-end mb-3">
                    <button
                      type="submit"
                      className="user-modal-btn"
                      data-bs-dismiss="modal"
                      onClick={() => handleSubmit()}
                    >
                      Request <ToastContainer />
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="user-modal-btn2"
                    >
                      Cancle
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}

            <div className="position-relative">
              <p className="table-name mb-2">Documents</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    <img
                      src="/images/dashboard/Plus-icon.png"
                      className="p-2 table-searchbar-img"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    {/* <img
                      src="/images/dashboard/FunnelSimple.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    /> */}
                    <img
                      src="/images/dashboard/ArrowsDownUp.png"
                      onClick={toggleSortOrder}
                      className="p-2 table-searchbar-img border-end cursor_pointer"
                    />
                    {/* <img
                      src="/images/dashboard/DotsThreeOutlineVertical2.png"
                      alt=""
                      className="p-2 table-searchbar-img border-end"
                    /> */}
                  </div>
                  <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
                    <p className="m-0 text-nowrap">
                      {tasks?.selectedColumns && tasks?.selectedColumns.length}
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
                <form className="d-flex me-2" role="search"></form>
              </div>

              <div className="col-12 mdb_table mt-3 mb-4">
                <div className="table-responsive">
                  <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={5}
                    className="text-nowrap"
                    hover
                    data={{ ...tasks, columns: visibleColumns }}
                    // data={tasks}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                  />
                </div>
              </div>
            </div>

            <div className="footer employ-footer">
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
             {/* Comment Modal */}
             <div
            class="modal fade"
            id="commentModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title th-text" id="exampleModalLabel">
                    Add comment
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="closeForm"
                  ></button>
                </div>
                <div class="modal-body">
                  <form className="rounded" onSubmit={handleSubmitComment}>
                    <div className="mb-3 border-bottom">
                      <label className="form-label th-text">
                        Comment or type
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 w-100"
                        placeholder="Type comment..."
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
                        <button
                          type="submit"
                          className="comment-btn btn-primary"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Modal close */}
        </div>
      </div>
    </>
  );
};

export default DocumentEmply;
