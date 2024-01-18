import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  AddCommentForTask,
  GetTaskData,
  SearchTask,
  TemplateCount,
  TemplateDelete,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { toast } from "react-toastify";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { Button, Checkbox } from "rsuite";

const Tasks = () => {
  const [showClearButton, setShowClearButton] = useState(false);

  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [templete_Id, setTempleteId] = useState("");
  const [loader, setLoader] = useState(false);

  const [tasks, setTasks] = useState({
    columns: [
      {
        label: "Task Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Task Description",
        field: "assigned",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Start At",
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

  useEffect(() => {
    getTaskData();
    getTotalCount();
  }, []);

  const getTaskData = async () => {
    let id = localStorage.getItem("myot_admin_id");
    let { data } = await GetTaskData(id);

    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.templete;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.date = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" />{" "}
            <span className="ms-2">{moment(list?.createdAt).format("L")}</span>
          </>
        );
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
                  class="dropdown-item"
                  to={`/Admin/Tasks/Comments/${list?._id}`}
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
              {/* <li>
                <a
                  class="dropdown-item text-danger cursor_pointer"
                  onClick={() => handleDelete(list?._id)}
                >
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete Template
                </a>
              </li> */}
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setTasks({ ...tasks, rows: newRows });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("myot_admin_id");
    let { data } = await AddCommentForTask({
      comment,
      templete_Id,
      creator_Id,
    });
    console.log(data);
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "New comment added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("close").click();
      setComment("");
    }
  };

  const handleDelete = async (id) => {
    let { data } = await TemplateDelete(id);
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Template deleted",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("close").click();
      getTaskData();
    }
  };

  const getTotalCount = async () => {
    let id = await localStorage.getItem("myot_admin_id");
    try {
      let { data } = await TemplateCount(id);
      console.log(data);
      setTotalCount(data?.results);
    } catch (error) {}
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
          defaultChecked
        >
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
      if (a.name < b.name) {
        comparison = -1;
      } else if (a.name > b.name) {
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

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold">Tasks</a>
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
            <div className="row">
              <div className="col-12 mb-4">
                <div className="row statics_part">
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-1-3">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Total Template Create
                        </h6>
                      </div>
                      <div className="d-flex  mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {totalCount?.totalTemplete || 0}
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
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-2-4">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Template Awaiting
                        </h6>
                      </div>
                      <div className="d-flex  mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalPendingTemplete &&
                            totalCount?.totalPendingTemplete[0]?.count) ||
                            0}
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
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-1-3">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Recently Approved
                        </h6>
                      </div>
                      <div className="d-flex  mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalPendingTemplete &&
                            totalCount?.totalPendingTemplete[0]?.count) ||
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
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-2-4">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Active Signatories
                        </h6>
                      </div>
                      <div className="d-flex mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalPendingTemplete &&
                            totalCount?.totalPendingTemplete[0]?.count) ||
                            0}
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
            </div>

            <div className="position-relative">
              <div className="d-flex align-items-center justify-content-between">
                <p className="table-name mb-2">Tasks</p>
                <p className="table-name mb-2">
                  <Link
                    type="button"
                    className="text-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <img src="/images/dashboard/Plus-icon.png" alt="" />
                    <span> Add Task</span>
                  </Link>
                </p>
              </div>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    {/* <img
                      src="/images/dashboard/Plus-icon.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    /> */}
                    {/* <img
                      src="/images/dashboard/FunnelSimple.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    /> */}
                    <img
                      onClick={toggleSortOrder}
                      src="/images/dashboard/ArrowsDownUp.png"
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
                    <img
                      width={20}
                      src={require("../../assets/logo/search.png")}
                    ></img>
                  </div>
                </div>
                <form className="d-flex me-2" role="search"></form>
              </div>
              <div className="col-12 mdb_table mt-3 ">
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

            {/* TASK MODAL */}
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      Add Task
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row pt-3">
                        <div className="col-12 mb-3 ">
                          <input
                            type="text"
                            placeholder="Task Name *"
                            className="col-12 modal-input td-text  p-2"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="datetime-local"
                            placeholder="Select start date and time"
                            className="col-12 modal-input td-text  p-2"
                            min={new Date().toISOString().slice(0, 16)}
                          />
                        </div>
                        <div className="col-6">
                          <select
                            className="col-12 modal-input td-text  p-2"
                            name=""
                            id=""
                          >
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Incoming">Incoming</option>
                            <option value="Cancel">Cancel</option>
                          </select>
                        </div>
                        <div className="col-12 my-3 ">
                          <label
                            htmlFor=""
                            className="mb-3 text-dark th-text fs-6"
                          >
                            Task Description
                          </label>
                          <textarea
                            type="text"
                            placeholder="Type task description here..."
                            className="col-12 modal-input td-text p-2 text-area"
                            name="description"
                          ></textarea>
                          {/* <input type="text" placeholder="Phone Number" className="col-6 modal-input th-text p-2"/> */}
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-3">
                        <Button
                          style={{ width: "150px" }}
                          loading={loader}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          type="submit"
                        >
                          Add Tasks
                        </Button>
                        <Button
                          style={{ width: "100px" }}
                          type="reset"
                          className="btn mb-3 mx-2 rounded-2 bg-light text-dark border-0"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </Button>
                        <button
                          type="reset"
                          class="d-none"
                          data-bs-dismiss="modal"
                          id="formReset"
                        >
                          reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* TASK MODAL END */}

            {/* COMMENT MODAL */}

            <div
              class="modal fade"
              id="exampleModal"
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
                      id="close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form className="rounded" onSubmit={handleSubmit}>
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

            {/* COMMENT MODAL CLOSE */}

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

export default Tasks;
