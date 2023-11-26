import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarSig";
import SidebarSig from "./SidebarSig";

const DashboardSig = () => {
  const documents = [
    {
      id: 1,
      templateName: "Reimbursement Forms",
      assignedTo: [
        <img src="/images/dashboard/avatar3.png" className="me-2" />,
      ],
      version: "0.2",
      department: "Human Resources",
      date: "26 Oct, 2023",
      status: <p className="text-primary">In Progress</p>,
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 2,
      templateName: "Client Contracts",
      assignedTo: [
        <img src="/images/dashboard/avatar2.png" className="me-2" />,
      ],
      version: "0.2",
      department: "Sales & Marketing",
      date: "26 Oct, 2023",
      status: <p className="text-warning">Approved</p>,
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 3,
      templateName: "Skill Assessment Reports",
      assignedTo: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
      ],
      version: "0.2",
      department: "Training & Development",
      date: "26 Oct, 2023",
      status: <p className="text-success">Complete</p>,
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 4,
      templateName: "Incident Reports",
      assignedTo: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      version: "0.2",
      department: "Human Resources",
      date: "26 Oct, 2023",
      status: <p className="text-primary">In Progress</p>,
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 5,
      templateName: "Employment Contract",
      assignedTo: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
      ],
      version: "0.2",
      department: "Training & Development",
      date: "26 Oct, 2023",
      status: <p className="text-info">Pending</p>,
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },

    // Add more tasks here
  ];

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
                      /Dashboard
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form class="" role="search">
                    <input
                      class="form-control search-bar"
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
                      <h6 className="mb-0 header-card-text">Total Users</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        256
                      </h3>
                      <span className="card-insights fw-bold m-auto">
                        +11.01%
                        <img
                          src="/images/dashboard/ArrowRise.png"
                          alt=""
                          className="ps-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        156
                      </h3>
                      <span className="card-insights fw-bold m-auto">
                        -0.56%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Documents Generated
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        1,320
                      </h3>
                      <span className="card-insights fw-bold m-auto">
                        -1.48%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Active Users</h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        32
                      </h3>
                      <span className="card-insights fw-bold m-auto">
                        +9.15%
                        <img
                          src="/images/dashboard/ArrowRise.png"
                          alt=""
                          className="ps-1"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 ">
                  <img
                    src="/images/dashboard/Block1.svg"
                    alt=""
                    className="dashboard-graph"
                  />
                </div>

                <div className="col-md-6 ">
                  <img
                    src="/images/dashboard/Block2.svg"
                    alt=""
                    className="dashboard-graph"
                  />
                </div>
              </div>
            </div>

            <p className="table-name mb-2 mt-4">Templates</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
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
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text">
                      <th className="th-text ">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Template Name
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((document) => (
                      <tr key={document.id}>
                        <td className="td-text">
                          <input
                            className="form-check-input checkbox-table me-4"
                            type="checkbox"
                            value=""
                          />
                          {document.templateName}
                        </td>
                        <td className="td-text">{document.assignedTo}</td>
                        <td className="td-text">{document.version}</td>
                        
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {document.date}
                        </td>
                        <td className="td-text">{document.status}</td>
                        <td className="td-text">{document.department}</td>
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {document.action}
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
                        <td></td>
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
          </div>
          <div className="col">
            <RightSidebar />
          </div>

          <div className="middle-section">
            <div className="body-wrapper">
              <div className="container-fluid">
                <div className="row d-flex flex-direction-row cards-row"></div>
                <div className="d-flex cardss"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSig;
