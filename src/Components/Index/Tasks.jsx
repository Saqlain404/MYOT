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
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { toast } from "react-toastify";

const Tasks = () => {
  const [documents, setDocuments] = useState();
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = async () => {
    const { data } = await GetTaskData();
    console.log(data);
    if (!data?.error) {
      setDocuments(data?.results?.templete);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchTask({ search: value });
      if (!data?.error) {
        setDocuments(data?.results?.Template);
      }
    } else {
      getTaskData();
    }
  };

  const handleSubmit = async (e, templete_Id) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("user_id");
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

  // const documents = [
  //   {
  //     id: 1,
  //     templateName: "Employment Contract",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-primary m-0">In Progress</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 2,
  //     templateName: "Tax Deduction at Source (TDS)",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-warning m-0"> Approved</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 3,
  //     templateName: "Training Certificates",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-success m-0">Complete</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 4,
  //     templateName: "Software Licenses",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-primary m-0">In Progress</p>,
  //     department: "Information Technologies",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 5,
  //     templateName: "Reference Letter",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-info m-0">Pending</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 6,
  //     templateName: "Annual Tax Statement",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-warning m-0"> Approved</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 7,
  //     templateName: "Leave Application",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-secondary m-0">Rejected</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  //   {
  //     id: 8,
  //     templateName: "Marketing Campaign Reports",
  //     assignedTo: <img src="/images/dashboard/Avatar.png" />,
  //     version: "0.2",
  //     date: "26 Oct, 2023",
  //     status: <p className="text-primary m-0">In Progress</p>,
  //     department: "Human Resources",
  //     comment: (
  //       <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
  //     ),
  //     actions: (
  //       <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //     ),
  //   },
  // ];

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
                      /Tasks
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
                          320
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
                          20
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
                          1,156
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
                          320
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
            <p className="table-name mb-2">Tasks</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3  table-searchbar-imgs">
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
                  <p className="m-0 text-nowrap">2 Selected</p>
                  <p className="hide-selected m-0 text-nowrap ">
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
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text">
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Template name
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Assigned to
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Version
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Date
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Status
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Department
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Comment
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="task_table">
                    {documents?.map((document) => (
                      <tr className="tr" key={document?._id}>
                        <td className="td-text">{document?.templeteName}</td>
                        <td className="">
                          <img
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                            src={document?.manager?.profile_Pic}
                            alt={document?.manager?.name}
                          />
                          <span className="ms-3">
                            {document?.manager?.name.charAt(0).toUpperCase() +
                              document?.manager?.name.slice(1).toLowerCase()}
                          </span>
                        </td>
                        {/* <td className="td-text">{document.version}</td> */}
                        <td className="td-text">
                          {document?.templeteVersion &&
                          document?.templeteVersion?.length > 0
                            ? ` ${
                                document?.templeteVersion[
                                  document?.templeteVersion.length - 1
                                ]?.version
                              }`
                            : "No templete versions found"}
                        </td>

                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {moment(document.createdAt).format("ll")}
                        </td>
                        <td
                          className={`"td-text" ${
                            document.status === "Pending"
                              ? "text-info"
                              : document.status === "Approved"
                              ? "text-warning"
                              : document.status === "In Progress"
                              ? "text-primary"
                              : "text-success"
                          }`}
                        >
                          {document.status}
                        </td>
                        <td className="td-text">
                          {document?.manager?.department_Id?.departmentName}
                        </td>
                        <td className="td-text">
                          <div className="dropdown">
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
                              onSubmit={(e) => handleSubmit(e, document?._id)}
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
                        {/* <td className="td-text"></td> */}
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {/* {document.actions} */}
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
                                <a class="dropdown-item" href="#">
                                  <img
                                    src="/images/dashboard/Comment.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  Comments
                                </a>
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
                                  Delete Template
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
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <button className="page-link" href="#">
                      1
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" href="#">
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" href="#">
                      3
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

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
