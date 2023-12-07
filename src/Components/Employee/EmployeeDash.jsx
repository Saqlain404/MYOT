import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";

const EmployeeDash = () => {
  const documents = [
    {
      id: 1,
      DocumentName: "Leave Certificate",
      Department: "Human Resources",
      login: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png" />,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 2,
      DocumentName: "Salary Certificate",
      Department: "Human Resources",
      login: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png" />,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 3,
      DocumentName: "Employee Contract",
      Department: "Human Resources",
      login: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png" />,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 4,
      DocumentName: "Tax Deduction certificate",
      Department: "Human Resources",
      login: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png" />,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 5,
      DocumentName: "Experiment Report",
      Department: "R&D",
      login: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png" />,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 6,
      DocumentName: "Sale Proposal",
      Department: "Human Resources",
      login: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png" />,
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
   
    // Add more tasks here
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl/>
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom mb-4">
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
                      <h6 className="mb-0 header-card-text">
                        Total Templates
                      </h6>
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
                  <div className="dashboard-card bg-light ">
                    <div className="d-flex justify-content-around dashboard-card-text">
                      <p>Templates </p>
                      <p>Documents </p>
                      <p>Current Week </p>
                      <p>Previous Week</p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <img
                        src="/images/dashboard/circle-analytics.png"
                        alt=""
                        className="m-4"
                      />
                      <table className="ms-2 dashboard-card-text">
                        <tr>
                          <td style={{paddingRight: 70}} className="text-nowrap">
                            <img src="/images/dashboard/active-dot.svg" alt="" /> Active</td>
                          <td>38.6%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/under-review-dot.svg" alt="" />Under Review</td>
                          <td>22.5%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/approve-dot.svg" alt="" />Approved</td>
                          <td>30.8%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/rejected-dot.svg" alt="" />Rejected</td>
                          <td>8.1%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 ">
                <div className="dashboard-card2 bg-danger-subtle">
                    <p className="dashboard-card2-text">Open Tickets</p>
                    <p className="text-card  mb-3">20 / 50 </p>
                    <p className=" mb-1 dashboard-card2-text">Profile Completion </p>
                    <img
                      src="/images/dashboard/Frame 427318940.png"
                      alt=""
                      className="pb-3"
                    />
                    <p className=" mb-1 dashboard-card2-text">Status</p>
                    <img
                      src="/images/dashboard/Info/Frame 427318940.png"
                      alt=""
                      className=" mb-4"
                    />
                  </div>
                </div>

                <div className="col-md-3 ">
                <div className="dashboard-card3 bg-light ">
                    <p className="text-card">Document Request</p>
                    <table className="table-card3 dashboard-card3-text">
                      <tr className="pb-2">
                        <td style={{paddingRight: 40}} className="text-nowrap">HR</td>
                        <td>
                          <img src="/images/dashboard/HR.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>Finance</td>
                        <td>
                          <img src="/images/dashboard/Finance.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>R&D</td>
                        <td>
                          <img src="/images/dashboard/R&D.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>Transport</td>
                        <td>
                          <img src="/images/dashboard/Transport.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>IT</td>
                        <td>
                          <img src="/images/dashboard/IT.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>Sales</td>
                        <td>
                          <img src="/images/dashboard/sales.png" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

               
                
                
              </div>
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
                    Document Name
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
                    Login
                  </th>
                  <th className="th-text">Status</th>
                  <th className="th-text">Action</th>
                </tr>
              </thead>
              <tbody >
                {documents.map((document) => (
                  <tr
                    key={document.id}
                    
                  >
                    <td className="td-text">
                      <input
                        className="form-check-input checkbox-table"
                        type="checkbox"
                        value=""
                      />
                    
                      {document.DocumentName}
                    </td>
                    <td className="td-text">
                      {document.Department}
                    </td>
                    <td className="td-text">
                      <img src="/images/dashboard/CalendarBlank.png" />
                      {document.login}
                    </td>
                    <td className="td-text">{document.status}</td>
                    <td className="td-text"><div class="dropdown">
  <a type="" data-bs-toggle="dropdown" aria-expanded="false">
  {document.action}
  </a>
  <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
    <li ><a class="dropdown-item border-bottom" href="#"><img src="/images/users/AddressBook.svg" alt="" className="me-2"/>View Users Details</a></li>
    <li><a class="dropdown-item border-bottom" href="#"><img src="/images/users/PencilLine.svg" alt="" className="me-2"/>Edit User Details</a></li>
    <li><a class="dropdown-item" href="#"><img src="/images/dashboard/Comment.png" alt="" className="me-2"/>Comments</a></li>
    <li><a class="dropdown-item border-bottom" href="#"><img src="/images/users/TextAlignLeft.svg" alt="" className="me-2"/>Wrap Column</a></li>
    <li><a class="dropdown-item text-danger" href="#"><img src="/images/users/Trash.svg" alt="" className="me-2"/>Delete Template</a></li>
  </ul>
</div>
                          </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
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

export default EmployeeDash;