import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarSig";
import SidebarSig from "./SidebarSig";
import CommonListing from "./CommonListAwaiting/CommonListing";

const AwaitingSig = () => {
  const documents = [
    {
      id: 1,
      templateName: "Salary Slip",
      requesterName: [
        <img src="/images/dashboard/avatar3.png" className="me-2" />,
        "Eve Leroy",
      ],
      department: "Human Resources",
      requestDate: "2023-09-16",
      status: <p className="text-warning">High</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 2,
      templateName: "Client Contracts",
      requesterName: [
        <img src="/images/dashboard/avatar2.png" className="me-2" />,
        "Lana Steiner",
      ],
      department: "Sales & Marketing",
      requestDate: "2023-09-16",
      status: <p className="text-warning">High</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 3,
      templateName: "Training Certificate",
      requesterName: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "ByeWind",
      ],
      department: "Training & Development",
      requestDate: "2023-09-16",
      status: <p className="text-danger">Urgent</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 4,
      templateName: "Salary Slip",
      requesterName: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Katherine Moss",
      ],
      department: "Human Resources",
      requestDate: "2023-09-16",
      status: <p className="text-secondary">Low</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 5,
      templateName: "Training Certificate",
      requesterName: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "Natali Craig",
      ],
      department: "Training & Development",
      requestDate: "2023-09-16",
      status: <p className="text-primary">Normal</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 6,
      templateName: "Training Certificate",
      requesterName: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "ByeWind",
      ],
      department: "Training & Development",
      requestDate: "2023-09-16",
      status: <p className="text-danger">Urgent</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 7,
      templateName: "Salary Slip",
      requesterName: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Katherine Moss",
      ],
      department: "Human Resources",
      requestDate: "2023-09-16",
      status: <p className="text-secondary">Low</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 8,
      templateName: "Training Certificate",
      requesterName: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "Natali Craig",
      ],
      department: "Training & Development",
      requestDate: "2023-09-16",
      status: <p className="text-primary">Normal</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 9,
      templateName: "Salary Slip",
      requesterName: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Katherine Moss",
      ],
      department: "Human Resources",
      requestDate: "2023-09-16",
      status: <p className="text-secondary">Low</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      action: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 10,
      templateName: "Training Certificate",
      requesterName: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "Natali Craig",
      ],
      department: "Training & Development",
      requestDate: "2023-09-16",
      status: <p className="text-primary">Normal</p>,
      comments: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
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
                      Awaiting Signatories /
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

            <CommonListing />

            {/* <div className=" col-12 d-flex align-items-center table-searchbar">
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

            <div className="col-12 table_comman mt-3 mb-4">
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
                        Requester Name
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
                        Request Date
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
                        Comments
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
                        <td className="td-text">{document.requesterName}</td>
                        <td className="td-text">{document.department}</td>
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {document.requestDate}
                        </td>
                        <td className="td-text">{document.status}</td>
                        <td className="td-text">{document.comments}</td>
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
                                <Link to={"/"} className="text-decoration-none">
                                  <a
                                    class="dropdown-item border-bottom"
                                    href="#"
                                  >
                                    <img
                                      src="/images/dashboard/eye.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    View Details
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  <img
                                    src="/images/dashboard/XCircle.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Rejected
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
            </div> */}

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
        </div>
      </div>
    </>
  );
};

export default AwaitingSig;
