import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  AdminDashboardGraph,
  AdminTicketCount,
  DashboardCount,
  DashboardTotalDocument,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import DashboardListing from "./DashboardListing/DashboardListing";
import DashboardTemplateGraph from "./DashboardListing/DashboardTemplateGraph";

const Dashboard = () => {
  const [dataCount, setDataCount] = useState();
  const [totalDocument, setTotalDocument] = useState([]);
  const [ticketCount, setTicketCount] = useState();
  const [dashGraphData, setDashGraphData] = useState()

  useEffect(() => {
    getDashboardDataCount();
    getDashboardTotalDocument();
    getTicketCount();
    getDashboardGraph();
  }, []);

  const getDashboardGraph = async () => {
    let { data } = await AdminDashboardGraph();
    if (!data?.error) {
      setDashGraphData(data?.results);
    }
  };

  const getDashboardDataCount = async () => {
    let id = localStorage.getItem("myot_admin_id");
    try {
      let { data } = await DashboardCount(id);
      if (!data?.error) {
        setDataCount(data?.results);
        console.log(data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTicketCount = async () => {
    let id = await localStorage.getItem("myot_admin_id");
    console.log(id);
    let { data } = await AdminTicketCount(id);
    console.log(data);
    if (!data?.error) {
      setTicketCount(data?.results);
    }
  };

  const getDashboardTotalDocument = async () => {
    try {
      let { data } = await DashboardTotalDocument();
      console.log(data);
      if (!data?.error) {
        setTotalDocument(data?.results?.document);
      }
    } catch (error) {
      console.log(error);
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
                    <a className="nav-link fw-bold">Dashboard</a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center justify-content-end ">
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
                        className="ms-4 "
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
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Users</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {(dataCount?.employee &&
                          dataCount?.employee[0]?.count) ||
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
                <div className="col-lg-3 col-md-6 mb-md-2 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {(dataCount?.totalTempleted &&
                          dataCount?.totalTempleted[0]?.count) ||
                          0}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        -0.56%
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
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Documents Generated
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {(dataCount?.totalDocument &&
                          dataCount?.totalDocument[0]?.count) ||
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
                <div className="col-lg-3 col-md-6 mb-md-2 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Active Users</h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {(dataCount?.totalActiveUser &&
                          dataCount?.totalActiveUser[0]?.count) ||
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
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 bg-light rounded">
                  <div className="dashboard-card bg-light ">
                    <div className="d-flex dashboard-card-text">
                      <p className="text-start">Templates </p>
                      {/* <p>Documents </p>
                      <p>Current Week </p>
                      <p>Previous Week</p> */}
                    </div>
                    <DashboardTemplateGraph dashGraphData={dashGraphData} />
                    {/* <div className="d-flex justify-content-around">
                      <img
                        src="/images/dashboard/circle-analytics.png"
                        alt=""
                        className="m-4 dashboard-card-img"
                      />
                      <table className="ms-2 dashboard-card-text">
                        <tr>
                          <td
                            style={{ paddingRight: 70 }}
                            className="text-nowrap"
                          >
                            <img
                              src="/images/dashboard/active-dot.svg"
                              alt=""
                            />{" "}
                            Active
                          </td>
                          <td>38.6%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/under-review-dot.svg"
                              alt=""
                            />
                            Under Review
                          </td>
                          <td>22.5%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/approve-dot.svg"
                              alt=""
                            />
                            Approved
                          </td>
                          <td>30.8%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/rejected-dot.svg"
                              alt=""
                            />
                            Rejected
                          </td>
                          <td>8.1%</td>
                        </tr>
                      </table>
                    </div> */}
                  </div>
                </div>

                {ticketCount && (
                  <div className="col-md-3 ">
                    <div className="dashboard-card2 ">
                      <p className="dashboard-card2-text">Open Tickets</p>
                      <p className="text-card mt-2 mb-3">
                        {ticketCount?.totalComplete} /{" "}
                        {ticketCount?.totalTicket}
                      </p>
                      <p className=" mb-1 dashboard-card2-text">
                        Profile Completion
                      </p>

                      <div className="progress-bar w-100">
                        <div className="progress-container">
                          <div
                            className="progress"
                            style={{
                              width: `${ticketCount?.completepresent}%`,
                            }}
                          ></div>
                          <span className="progress-label">{`${ticketCount?.completepresent}%`}</span>
                        </div>
                      </div>
                      <p className=" mb-1 dashboard-card2-text">Status</p>
                      <div className="progress-bar w-100">
                        <div className="progress-container">
                          <div
                            className="progress"
                            style={{
                              width: `${ticketCount?.InprogressPresent}%`,
                            }}
                          ></div>
                          <span className="progress-label">{`In Progress / ${ticketCount?.InprogressPresent}%`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="col-lg-3 col-md-6 mb-md-2 ">
                  <div className="dashboard-card2 bg-danger-subtle">
                    <p className="dashboard-card2-text">Open Tickets</p>
                    <p className="text-card  mb-3">20 / 50 </p>
                    <p className=" mb-1 dashboard-card2-text">
                      Profile Completion{" "}
                    </p>
                    <img
                      src="/images/dashboard/Frame 427318940.png"
                      alt=""
                      className="pb-3 dashboard-card-img"
                    />
                    <p className=" mb-1 dashboard-card2-text">Status</p>
                    <img
                      src="/images/dashboard/Info/Frame 427318940.png"
                      alt=""
                      className=" mb-4 dashboard-card-img"
                    />
                  </div>
                </div> */}

                <div className="col-lg-3 col-md-6 mb-md-2 bg-light rounded">
                  <div className="dashboard-card3 bg-light table-card3 dashboard-card3-text">
                    <p className="text-card">Document Request</p>

                    {totalDocument && totalDocument?.length > 0 ? (
                      totalDocument?.map((count, i) => (
                        <>
                          <div key={i} className="row">
                            {/* <div className="my-1 col-6"> */}
                            <span className="col-6">
                              {
                                count?._id
                                  .flat(Infinity)[0]
                                  ?.departmentName.split(" ")[0] || "Admin"
                              }
                            </span>
                            <span className="fw-bold col-6 m-0 p-0">
                              <progress
                                className="w-100 custom-progress"
                                id="file"
                                value={count?.count}
                                max="100"
                              />
                            </span>
                            {/* </div> */}
                          </div>
                        </>
                      ))
                    ) : (
                      <p className="th-text text-center mt-3">No Requests</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4">
              <div className="row bg-light management">
                <Link to={"/Admin/Users"} className="col">
                  <img src="/images/dashboard/search.png" />
                  <p className="management-text">Manage Users</p>
                </Link>
                <Link to={"/Admin/Departments"} className="col ">
                  <img src="/images/dashboard/image 2.png" />
                  <p className="management-text">Manage Departments</p>
                </Link>
                <Link to={"/Admin/Requests"} className="col ">
                  <img src="/images/dashboard/manage-reports.png" />
                  <p className="management-text">Manage Requests</p>
                </Link>
                <Link to={"/Admin/Settings"} className="col ">
                  <img src="/images/dashboard/manage-settings.png" />
                  <p className="management-text">Manage Settings</p>
                </Link>
                <Link to={"/Admin/My-profile"} className="col  ">
                  <img src="/images/dashboard/manage-branding.png" />
                  <p className="management-text">Manage Profile</p>
                </Link>
              </div>
            </div>

            <DashboardListing />
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

export default Dashboard;
