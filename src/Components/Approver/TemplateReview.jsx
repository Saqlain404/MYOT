import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import {
  AddCommentApprv,
  approvedTemplete,
  approverTempleteList,
  rejectedTemplete,
  searchTemplete,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";
import { MDBDataTable } from "mdbreact";
import { Checkbox } from "antd";
import Swal from "sweetalert2";
import { Button } from "rsuite";

const TemplateReview = () => {
  const [searchData, setSearchData] = useState("");
  const [documentRequests, setDocumentRequests] = useState([]);
  const [templeteId, setTempleteId] = useState();
  const [comment, setComment] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState();
  const [showClearButton, setShowClearButton] = useState(false);
  const [templete_Id, setTemplete_Id] = useState();
  const [reasons, setReason] = useState();
  const [document_Id, setDocument_Id] = useState();

  const [tasks, setTasks] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Creator",
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
        label: "Date of Creation",
        field: "date",
        sort: "asc",
        width: 100,
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
    let data = await approverTempleteList(ids);
    console.log(data);

    const newRows = [];
    if (!data?.error) {
      let values = data;
      console.log(values);
      values?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
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
        returnData.date = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" />{" "}
            <span className="ms-2">{moment(list?.createdAt).format("L")}</span>
          </>
        );
        returnData.department = list?.manager?.department_Id?.departmentName;
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
                onClick={() => setTemplete_Id(list?._id)}
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
                <Link
                   to={`/Approver/Template-view/${list?._id || "Template not Found"}`}
                  className="text-decoration-none"
                >
                  <a class="dropdown-item border-bottom" href="/">
                    <img
                      src="/images/users/AddressBook.svg"
                      alt=""
                      className="me-2"
                    />
                    View Template
                  </a>
                </Link>{" "}
              </li>
              <li>
                <Link
                  class="dropdown-item"
                  to={`/Approver/Comment/${list?._id}`}
                >
                  <img
                    src="/images/dashboard/Comment.png"
                    alt=""
                    className="me-2"
                  />
                  Comments
                </Link>
              </li>
              {list?.status !== "Approved" && (
              <li>
                <a
                  onClick={() => approved(list?._id)}
                  class="dropdown-item border-bottom"
                  href="#"
                >
                  <img
                    src="/images/users/PencilLine.svg"
                    alt=""
                    className="me-2"
                  />
                  Approved 
                </a>
              </li> 
              )}
                {list?.status !== "Rejected" && (
              <li>
                <a
                  onClick={() => setDocument_Id(list?._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#reasonModal"
                  class="dropdown-item text-danger"
                  href="#"
                >
                  <img src="/images/XCircle.svg" alt="" className="me-2" />
                  Rejected
                </a>
              </li>
                )}
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setTasks({ ...tasks, rows: newRows });
    }
  };

  const approved = async (document_Id) => {
    const approveData = await approvedTemplete(document_Id);
    getTaskData();
  };

  const submitReason = async (e) => {
    e.preventDefault();
    const rejectedData = await rejectedTemplete(document_Id, {
      reasons,
    });
    if(rejectedData){
      setReason("")
    getTaskData();
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
      <div key={column.field} className="">
        <Checkbox
          checked={tasks.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          defaultChecked>
          {" "}
          {column.label}
        </Checkbox>
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

  
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    let creator_Id =
      localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
      let trimmedComment = comment.trim()
    let data = await AddCommentApprv({
      comment: trimmedComment,
      templete_Id,
      creator_Id,
    });
    if (!data?.error) {
      setComment("");
    }else if(trimmedComment===""){
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Please enter a comment",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold ms-2">
                      Template Review
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
                    />
                  </form> */}
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Approver/Chat"}>
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
                  <div class="search_icon">
                  <img width={20} src={require("../../assets/logo/search.png")}></img>
                  </div>
                </div>
                <form className="d-flex me-2" role="search"></form>
              </div>

              <div className="col-12 mdb_table mt-3 mb-4">
                <div className="table-responsive">
                  <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={10}
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

            <div className="footer mt-4">
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
                      <Button
                        style={{width:"100px"}}
                          type="submit"
                          appearance="primary"
                          className="comment-btn"
                          data-bs-dismiss="modal"
                          disabled={!comment || /^\s+$/.test(comment)}
                        >
                          Comment
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Modal close */}

           {/* Comment Modal */}
           <div
            class="modal fade"
            id="reasonModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title th-text fs-6" id="exampleModalLabel">
                    Add Reason
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
                  <form className="rounded" onSubmit={submitReason}>
                    <div className="mb-3">
                      <label className="form-label th-text"></label>
                      <input
                        type="text"
                        className="form-control  w-100"
                        placeholder="Type reason..."
                        value={reasons}
                        onChange={(e) => setReason(e.target.value)}
                      />
                    </div>

                    <div className="d-flex justify-content-end">
                      {/* <div>
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
                      </div> */}
                      <div>
                        <Button
                          style={{ width: "100px" }}
                          type="submit"
                          appearance="primary"
                          color="red"
                          // className="comment-btn"
                          data-bs-dismiss="modal"
                          disabled={!reasons || /^\s+$/.test(reasons)}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateReview;
