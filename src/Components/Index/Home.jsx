import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AddCommentForTask,
  AdminDashboardCount,
  GetTaskData,
  SearchTask,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import Document from "./DocumentRequests/Document";
import { MDBDataTable } from "mdbreact";
// import "../../dist/css/style.min.css"

const Home = () => {
  const [template, setTemplate] = useState();
  const [adminCount, setAdminCount] = useState();
  const [templateSearch, setTemplateSearch] = useState("");
  const [comment, setComment] = useState("");

  const [checkedCheckboxes, setCheckedCheckboxes] = useState({
    templateName: false,
    assignedTo: false,
    version: false,
    status: false,
    department: false,
    actions: false,
    comment: false,
  });
  const [hiddenColumns, setHiddenColumns] = useState({
    templateName: false,
    assignedTo: false,
    version: false,
    status: false,
    department: false,
    actions: false,
    comment: false,
  });
  const handleCheckboxChange = (checkboxName) => {
    setCheckedCheckboxes({
      ...checkedCheckboxes,
      [checkboxName]: !checkedCheckboxes[checkboxName],
    });
  };
  const countCheckedCheckboxes = () => {
    let count = 0;
    for (const checkbox in checkedCheckboxes) {
      if (checkedCheckboxes[checkbox]) {
        count++;
      }
    }
    return count;
  };

  const handleHideSelected = () => {
    const updatedHiddenColumns = { ...hiddenColumns };
    for (const checkbox in checkedCheckboxes) {
      if (checkedCheckboxes[checkbox]) {
        updatedHiddenColumns[checkbox] = true;
      }
    }
    setHiddenColumns(updatedHiddenColumns);
    setCheckedCheckboxes({
      templateName: false,
      assignedTo: false,
      version: false,
      status: false,
      department: false,
      actions: false,
      comment: false,
    });
  };

  useEffect(() => {
    getTaskData();
    getAdminCount();
  }, []);

  const getAdminCount = async () => {
    let { data } = await AdminDashboardCount();
    if (!data?.error) {
      setAdminCount(data?.results);
    }
  };

  const getTaskData = async () => {
    const { data } = await GetTaskData();
    if (!data?.error) {
      const templates = data?.results?.templete;
      setTemplate(templates);
      console.log(templates);
    }
  };

  const handleTemplateSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setTemplateSearch(value);
    if (value.length > 0) {
      let { data } = await SearchTask({ search: value });
      if (!data?.error) {
        setTemplate(data?.results?.Template);
      }
    } else {
      getTaskData();
    }
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
                <div className="col-lg-3 col-md-6 mb-md-2">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">Total Employees</h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {adminCount?.totalEmployee[0]?.count}
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
                <div className="col-lg-3 col-md-6 mb-md-2 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">
                        Total Departments
                      </h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {adminCount?.countDepartment}
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
                <div className="col-lg-3 col-md-6 mb-md-2 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">
                        Total Active Users
                      </h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {adminCount?.totalActiveUser[0]?.count || 0}
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
                <div className="col-lg-3 col-md-6 mb-md-2 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left text-center">
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7 ">
                        {adminCount?.totalTempleted}
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
              <p className="table-name mb-2">Home</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="row d-flex  col">
                  <div className="col-md-3 table-searchbar-imgs">
                    <img
                      src="/images/dashboard/Plus-icon.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    />
                    <img
                      src="/images/dashboard/FunnelSimple.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    />
                    <img
                      src="/images/dashboard/ArrowsDownUp.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    />
                    <img
                      src="/images/dashboard/DotsThreeOutlineVertical2.png"
                      alt=""
                      className="p-2 table-searchbar-img border-end"
                    />
                  </div>
                  {/* <div className="col-4 d-flex align-items-center justify-content-around table-searchbar-txt">
            <p className="m-0 text-nowrap">
              {requests?.selectedColumns && requests?.selectedColumns.length}
              <span> Selected</span>
            </p>
            {showClearButton ? (
              <p
                className="hide-selected m-0 text-nowrap cursor_pointer "
                onClick={showAllColumns}
              >
                Clear Selection
              </p>
            ) : (
              <p
                className="hide-selected m-0 text-nowrap cursor_pointer "
                onClick={hideSelectedColumns}
              >
                Hide Selected
              </p>
            )}
          </div> */}
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
                    // data={{ ...requests, columns: visibleColumns }}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                  />
                </div>
              </div>
            </div>
            {/* <p className="table-name mb-2">Home</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-lg-3 col-md-6 mb-md-2  table-searchbar-imgs">
                  <img
                    src="/images/dashboard/Plus-icon.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
                  <img
                    src="/images/dashboard/FunnelSimple.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
                  <img
                    src="/images/dashboard/ArrowsDownUp.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
                  <img
                    src="/images/dashboard/DotsThreeOutlineVertical2.png"
                    alt=""
                    className="p-2 table-searchbar-img border-end"
                  />
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around table-searchbar-txt">
                  <p className="m-0 text-nowrap">
                    {countCheckedCheckboxes()} Selected
                  </p>
                  <p
                    className="hide-selected m-0 text-nowrap cursor_pointer"
                    onClick={handleHideSelected}
                  >
                    Hide Selected
                  </p>
                </div>
              </div>
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control table-search-bar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={templateSearch}
                  onChange={handleTemplateSearch}
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text">
                      <th
                        className={`th-text ${
                          hiddenColumns.templateName ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.templateName}
                          onChange={() => handleCheckboxChange("templateName")}
                        />
                        Template name
                      </th>

                      <th
                        className={`th-text ${
                          hiddenColumns.assignedTo ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.assignedTo}
                          onChange={() => handleCheckboxChange("assignedTo")}
                        />
                        Assigned To
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.version ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.version}
                          onChange={() => handleCheckboxChange("version")}
                        />
                        Version
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.status ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.status}
                          onChange={() => handleCheckboxChange("status")}
                        />
                        Status
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.department ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.department}
                          onChange={() => handleCheckboxChange("department")}
                        />
                        Department
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.comment}
                          onChange={() => handleCheckboxChange("comment")}
                        />
                        Comment
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.actions ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.actions}
                          onChange={() => handleCheckboxChange("actions")}
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="task_table">
                    {template?.map((template) => (
                      <tr className="tr" key={template?._id}>
                        <td
                          className={`td-text ${
                            hiddenColumns.templateName ? "d-none" : "table-cell"
                          }`}
                        >
                          {template?.templeteName}
                        </td>
                        <td
                          className={`td-text ${
                            hiddenColumns.assignedTo ? "d-none" : "table-cell"
                          }`}
                        >
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                            }}
                            src={template?.manager?.profile_Pic}
                            alt={template?.manager?.name}
                          />
                          <span className="ms-3">
                            {template?.manager?.name.charAt(0).toUpperCase() +
                              template?.manager?.name.slice(1).toLowerCase()}
                          </span>
                        </td>
                        <td
                          className={`td-text ${
                            hiddenColumns.version ? "d-none" : "table-cell"
                          }`}
                        >
                          {template?.templeteVersion &&
                          template?.templeteVersion?.length > 0
                            ? ` ${
                                template?.templeteVersion[
                                  template?.templeteVersion.length - 1
                                ]?.version
                              }`
                            : "No versions found"}
                        </td>
                        <td
                          className={`"td-text" ${
                            hiddenColumns.status ? "d-none" : "table-cell"
                          } ${
                            template?.status === "Pending"
                              ? "text-warning"
                              : template?.status === "Approved"
                              ? "text-success"
                              : template?.status === "In Progress"
                              ? "text-primary"
                              : template?.status === "Rejected"
                              ? "text-danger"
                              : template?.status === "Completed"
                              ? "text-success"
                              : "text-muted"
                          }`}
                        >
                          {template?.status}
                        </td>
                        <td className={`td-text ${
                            hiddenColumns.department ? "d-none" : "table-cell"
                          }`}>
                          {template?.manager?.department_Id?.departmentName}
                        </td>
                        <td className={`td-text ${
                            hiddenColumns.comment ? "d-none" : "table-cell"
                          }`}>
                          <div className="">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src="/images/dashboard/Comment.png"
                                className="mx-auto d-block"
                              />
                            </a>
                            <form
                              className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
                              onSubmit={(e) => handleSubmit(e, template?._id)}
                            >
                              <div className="mb-3 border-bottom">
                                <label className="form-label th-text">
                                  Comment or type
                                </label>

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
                        </td>
                        <td className={`td-text ${
                            hiddenColumns.actions ? "d-none" : "table-cell"
                          }`}>
                          <div class="">
                            <a
                              className="cursor_pointer"
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src="/images/sidebar/ThreeDots.svg"
                                className="w-auto p-3"
                              />
                            </a>
                            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                              <li>
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
                              </li>
                              <li>
                                <Link class="dropdown-item" to={`/Admin/Tasks/Comments/${template?._id}`}>
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
                                  <img
                                    src="/images/users/Trash.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Delete User
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-end page-navigation mt-3"
              >
                <ul className="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      1
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      2
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      3
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div> */}

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

export default Home;
