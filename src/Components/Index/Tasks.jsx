import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  CreateTask,
  EditTask,
  GetTaskList,
  TemplateCount,
  UpdateTaskStatus,
  ViewTask,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { Button, Checkbox } from "rsuite";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const Tasks = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [loader, setLoader] = useState(false);
  const [taskEditData, setTaskEditData] = useState();
  const [taskId, setTaskId] = useState();

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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  // const {
  //   register: registerForm2,
  //   handleSubmit: handleSubmitForm2,
  //   formState: { errors: errorsForm2, isValid: isValidForm2},
  // } = useForm({ mode: "onChange" });

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = async () => {
    let id = localStorage.getItem("myot_admin_id");
    let { data } = await GetTaskList(id);

    console.log(data);
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.taskList;
      console.log(values);
      values?.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.taskName;
        returnData.assigned = list?.description;
        returnData.date = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" />{" "}
            <span className="ms-2">{moment.utc(list?.date).format("lll")}</span>
            {/* <span className="ms-2">{moment(list?.date).utc().fromNow()}</span> */}
            {/* <span className="ms-2">{moment.utc(list?.date).endOf('day').fromNow()}</span> */}
            {/* <span className="ms-2">{console.log(moment(list?.date))}</span>
            <span className="ms-2">{moment(list?.date).fromNow()}</span> */}
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
                ? "text-warning"
                : list?.status === "Rejected"
                ? "text-danger"
                : "text-success"
            }`}
          >
            {list?.status === "Rejected"
              ? "Cancelled"
              : list?.status === "Pending"
              ? "Upcoming"
              : list?.status}
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
              <li
                className="cursor_pointer"
                // onClick={() => changeTaskStatus(list?._id, "Completed")}
                onClick={() => taskView(list?._id)}
              >
                <Link
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  class="dropdown-item"
                >
                  <img
                    src="/images/dashboard/PencilLine.svg"
                    alt=""
                    className="ms-2"
                  />
                  Edit
                </Link>
              </li>
              <li
                className="cursor_pointer"
                onClick={() => changeTaskStatus(list?._id, "Completed")}
              >
                <Link class="dropdown-item">
                  {/* <img
                    src="/images/dashboard/Comment.png"
                    alt=""
                    className="me-2"
                  /> */}
                  <span className="text-success fs-10 mx-2">⬤</span>Completed
                </Link>
              </li>
              <li
                className="cursor_pointer"
                onClick={() => changeTaskStatus(list?._id, "Rejected")}
              >
                <a class="dropdown-item">
                  {/* <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  /> */}
                  <span className="text-danger fs-10 mx-2">⬤</span> Cancel
                </a>
              </li>
              <li
                className="cursor_pointer"
                onClick={() => changeTaskStatus(list?._id, "In Progress")}
              >
                <a class="dropdown-item">
                  {/* <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  /> */}
                  <span className="text-warning fs-10 mx-2">⬤</span> In Progress
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

  const taskView = async (id) => {
    setTaskId(id);
    let { data } = await ViewTask(id);

    if (!data?.error) {
      setTaskEditData(data?.results?.task);
      console.log(data?.results?.task);
    }
  };

  const changeTaskStatus = async (id, status) => {
    try {
      console.log(id, status);
      let { data } = await UpdateTaskStatus(id, { status });
      console.log(data);
      if (!data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Status Changed",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getTaskData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (datas) => {
    setLoader(true);
    let creator_Id = localStorage.getItem("myot_admin_id");
    console.log(datas);
    try {
      let { data } = await CreateTask({
        taskName: datas?.name,
        description: datas?.description,
        date: datas?.time,
        creator_Id,
      });
      console.log(data);
      if (!data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Task Added",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        document.getElementById("close").click();
        document.getElementById("reset").click();
        getTaskData();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const onEdit = async (e) => {
    e.preventDefault();
    console.log(taskEditData);
    let formData = {
      taskName: taskEditData?.taskName,
      date: taskEditData?.date,
      description: taskEditData?.description,
    };
    let { data } = await EditTask(taskId, formData);
    console.log(data);
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Task Updated",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("closeEdit").click();
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
                      id="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row pt-3">
                        <div className="col-12 mb-3 ">
                          <input
                            type="text"
                            placeholder="Task Name *"
                            className={classNames(
                              "form-control col-12 modal-input td-text  p-2",
                              {
                                "is-invalid": errors.name,
                              }
                            )}
                            {...register("name", {
                              required: "* Name is required",
                              pattern: {
                                value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                                message:
                                  "Spaces at the start & numbers are not allowed",
                              },
                            })}
                          />
                          {errors.name && (
                            <div className="invalid-feedback text-start">
                              {errors.name.message}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <input
                            type="datetime-local"
                            name="time"
                            min={new Date().toISOString().slice(0, 16)}
                            className={classNames(
                              "form-control col-12 modal-input td-text  p-2",
                              {
                                "is-invalid": errors.time,
                              }
                            )}
                            {...register("time", {
                              required: "*Date & Time is required",
                            })}
                          />
                          {errors.time && (
                            <div className="invalid-feedback text-start">
                              {errors.time.message}
                            </div>
                          )}
                        </div>
                        {/* <div className="col-6">
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
                        </div> */}
                        <div className="col-12 mb-3 ">
                          <label
                            htmlFor=""
                            className="mt-3 text-dark th-text fs-6"
                          >
                            Task Description
                          </label>
                          <input
                            type="text"
                            placeholder="Task Description *"
                            className={classNames(
                              "form-control col-12 modal-input td-text  p-2",
                              {
                                "is-invalid": errors.description,
                              }
                            )}
                            {...register("description", {
                              required: "* Description is required",
                              pattern: {
                                value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                                message:
                                  "Spaces at the start & numbers are not allowed",
                              },
                            })}
                          />
                          {errors.description && (
                            <div className="invalid-feedback text-start">
                              {errors.description.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Button
                          style={{ width: "150px" }}
                          loading={loader}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          type="submit"
                          disabled={!isValid}
                        >
                          Add Tasks
                        </Button>
                        <Button
                          style={{ width: "100px" }}
                          type="reset"
                          id="reset"
                          className="btn mb-3 mx-2 rounded-2 bg-light text-dark border-0"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* TASK MODAL END */}

            <div className="footer">
              <div>© 2023 MYOT</div>
              <div className="d-flex ">
                <p className="ms-3">About</p>
                <p className="ms-3">Support</p>
                <p className="ms-3">Contact Us</p>
              </div>
            </div>
          </div>

          {/* EDIT MODAL */}
          <div
            class="modal fade"
            id="staticBackdrop1"
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
                    Edit Task
                  </h5>
                  <button
                    type="reset"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="closeEdit"
                  ></button>
                </div>
                <div class="modal-body">
                  <form onSubmit={onEdit}>
                    <div className="row pt-3">
                      <div className="col-12 mb-3 ">
                        <input
                          type="text"
                          placeholder="Task Name *"
                          value={taskEditData?.taskName}
                          onChange={(e) =>
                            setTaskEditData({
                              ...taskEditData,
                              taskName: e.target.value,
                            })
                          }
                          className="form-control col-12 modal-input td-text  p-2"
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="datetime-local"
                          name="time"
                          value={moment
                            .utc(`${taskEditData?.date}`)
                            .format("YYYY-MM-DDTHH:mm:ss")}
                          min={new Date().toISOString().slice(0, 16)}
                          onChange={(e) =>
                            setTaskEditData({
                              ...taskEditData,
                              date: e.target.value,
                            })
                          }
                          className="form-control col-12 modal-input td-text  p-2"
                        />
                      </div>

                      <div className="col-12 mb-3 ">
                        <label
                          htmlFor=""
                          className="mt-3 text-dark th-text fs-6"
                        >
                          Task Description
                        </label>
                        <input
                          type="text"
                          placeholder="Task Description *"
                          value={taskEditData?.description}
                          onChange={(e) =>
                            setTaskEditData({
                              ...taskEditData,
                              description: e.target.value,
                            })
                          }
                          className="form-control col-12 modal-input td-text  p-2"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <Button
                        style={{ width: "150px" }}
                        loading={loader}
                        appearance="primary"
                        className="btn mb-3 me-2 rounded-2"
                        type="submit"
                        // disabled={!isValidForm2}
                      >
                        Edit Task
                      </Button>
                      <Button
                        style={{ width: "100px" }}
                        type="reset"
                        id="reset"
                        className="btn mb-3 mx-2 rounded-2 bg-light text-dark border-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* EDIT MODAL END */}
          <div className="col">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
