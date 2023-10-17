import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from 'antd';


const Dashboard = () => {
  const documents = [
    {
      id: 1,
      activity: "Salary Slip.jpg",
      login: "18 Aug 22,09:23 AM",
      login2: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png"/>,
      action: "...",
    },
    {
      id: 2,
      activity: "Promotion Letter.zip",
      login: "18 Aug 22,09:23 AM",
      login2: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png"/>,
      action: "...",
    },
    {
      id: 3,
      activity: "Create Project Wireframes.xls",
      login: "18 Aug 22,09:23 AM",
      login2: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png"/>,
      action: "...",
    },
    {
      id: 4,
      activity: "Create Project Wireframes.pdf",
      login: "18 Aug 22,09:23 AM",
      login2: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png"/>,
      action: "...",
    },
    {
      id: 5,
      activity: "Project tech requirements.zip",
      login: "18 Aug 22,09:23 AM",
      login2: "18 Aug 22,07:00 PM",
      status: <img src="/images/dashboard/Download-Button.png"/>,
      action: "...",
    },
    // Add more tasks here
  ];

  return (
    <>
      <div className="home-page">
        {/* Body Wrapper */}
        <div
          className="sidebar"
          id="main-wrapper"
          data-layout="vertical"
          data-sidebartype="full"
          data-sidebar-position="fixed"
          data-header-position="fixed"
        >
          {/* Sidebar Start */}
          <Sidebar />
          {/* Sidebar End */}
          {/* Main wrapper */}
          <div className="middle-section">
            <div className="body-wrapper">
              {/* Header Start */}
              <header className="app-header">
              <nav className="d-flex navbar navbar-expand-lg navbar-light justify-content-between">
                  <ul className="navbar-nav quick-links d-none d-lg-flex">
                    <li className="nav-item dropdown-hover d-none d-lg-block">
                      <a className="nav-link ms-2" href="app-email.html">
                        /Dashboard
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex">
                  <form class="d-flex me-2" role="search">
                      <input
                        class="form-control search-bar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                    <div className="ms-2 me-2 d-flex justify-content-around" style={{width: 180}}>
                      <img src="/images/dashboard/announcement.png" alt="" className="ms-4 "/>
                      <img src="/images/dashboard/chat-left-dots-fill.png" alt="" className="ms-4"/>
                      <img src="/images/dashboard/round-notifications.png" alt="" className="ms-4"/>
                    </div>
                  </div>
                </nav>
              </header>
              {/* Header End */}
              <div className="container-fluid">
                <div className="row d-flex flex-direction-row cards-row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-primary shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">Total Users</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">256</h3>
                          <span className="fw-bold ms-4 d-flex">+11.01%
                          <img src="/images/dashboard/ArrowRise.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-danger shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">Total Templates</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">156</h3>
                          <span className="fw-bold ms-4 d-flex">-0.56%
                          <img src="/images/dashboard/ArrowFall.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-success shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">Documents Generated</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">1,320</h3>
                          <span className="fw-bold ms-4 d-flex">-1.48%
                          <img src="/images/dashboard/ArrowFall.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-warning shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">Active Users</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">32</h3>
                          <span className="fw-bold ms-4 d-flex">+9.15%
                          <img src="/images/dashboard/ArrowRise.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex cardss">
                <Card className="col-6 card-1 me-4"
    // title="Card title"
    // bordered={false}
    style={{
      // width: 300,
    }}
  >
    <div className="d-flex justify-content-around">
    <p>Templates </p>
    <p>Documents </p>
    <p>Current Week </p>
    <p>Previous Week</p>
    </div>
    <div className="d-flex justify-content-around">
      <img src="/images/dashboard/circle-analytics.png" alt="" className="m-4" />
    <table className="ms-2">
      <tr>
        <td>Active</td>
        <td>38.6%</td>
      </tr>
      <tr>
        <td>Under Review</td>
        <td>22.5%</td>
      </tr>
      <tr>
        <td>Approved</td>
        <td>30.8%</td>
      </tr>
      <tr>
        <td>Rejected</td>
        <td>8.1%</td>
      </tr>
    </table>
    </div>
    
  </Card>
  <Card className="col-3 card-2 me-4"
    // title="Card title"
    // bordered={false}
    style={{
      // width: 300,
    }}
  >
    <div >
    <p>Open Tickets</p>
    <p className="text-card mt-1 mb-3">20 / 50 </p>
    <p>Profile Completion </p>
    <img src="/images/dashboard/Frame 427318940.png" alt=""  className="pb-3"/>
    <p>Status</p>
    <img src="/images/dashboard/Info/Frame 427318940.png" alt="" />

    </div>
    
    
  </Card>
  <Card className="col-3 card-3"
    // title="Card title"
    // bordered={false}
    style={{
      // width: 300,
    }}
  >
    <div >
    <p className="text-card">Document Request</p>
    <table className="table-card3">
      <tr>
        <td>HR</td>
        <td>
          <img src="/images/dashboard/HR.png"/>
        </td>
      </tr>
      <tr>
        <td>Finance</td>
        <td>
          <img src="/images/dashboard/Finance.png"/>
        </td>
      </tr>
      <tr>
        <td>R&D</td>
        <td>
          <img src="/images/dashboard/R&D.png"/>
        </td>
      </tr>
      <tr>
        <td>Transport</td>
        <td>
          <img src="/images/dashboard/Transport.png"/>
        </td>
      </tr>
      <tr>
        <td>IT</td>
        <td>
          <img src="/images/dashboard/IT.png"/>
        </td>
      </tr>
      <tr>
        <td>Sales</td>
        <td>
          <img src="/images/dashboard/sales.png"/>
        </td>
      </tr>
     
    </table>
    </div>
    
    
  </Card>
  </div>
                <div className="d-flex management">
                  <div className="me-4">
                    <img src="/images/dashboard/search.png" />
                    <p>Manage Users</p>
                  </div>
                  <div className="me-4">
                    <img src="/images/dashboard/image 2.png" />
                    <p>Manage Departments</p>
                  </div>
                  <div className="me-4">
                    <img src="/images/dashboard/manage-reports.png" />
                    <p>Manage Reports</p>
                  </div>
                  <div className="me-4">
                    <img src="/images/dashboard/manage-settings.png" />
                    <p>Manage Settings</p>
                  </div>
                  <div className="me-4">
                    <img src="/images/dashboard/manage-branding.png" />
                    <p>Manage Branding</p>
                  </div>
                </div>

                <table className="container table">
                  <thead className="col table-head-dashboard ">
                    <tr className="d-flex justify-content-between">
                      <th className="col-4">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Activity</th>
                      <th className="col-3">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Login</th>
                      <th className="col-3">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Login</th>
                      <th className="col-1">Status</th>
                      <th className="col-1">Action</th>
                    </tr>
                  </thead>
                  <tbody className="col">
                    {documents.map((document) => (
                      <tr key={document.id} className="d-flex justify-content-between">
                        <td className="col-4 table-body-desc">
                        <input className="form-check-input checkbox-table" type="checkbox" value="" />
                        <img src="/images/dashboard/Featured Icon.png"/>{document.activity}</td>
                        <td className="col-3 table-body-desc"><img src="/images/dashboard/CalendarBlank.png"/>{document.login}</td>
                        <td className="col-3 table-body-desc"><img src="/images/dashboard/CalendarBlank.png"/>{document.login2}</td>
                        <td className="col-1 table-body-desc">{document.status}</td>
                        <td className="col-1 table-body-desc">{document.action}</td>
                        <td>
                          {/* <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="dark-transparent sidebartoggler" />
            <div className="dark-transparent sidebartoggler" />
          </div>
        </div>
        <RightSidebar />
        {/*  Mobilenavbar */}
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex={-1}
          id="mobilenavbar"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <nav className="sidebar-nav scroll-sidebar">
            <div className="offcanvas-header justify-content-between">
              <img
                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico"
                alt=""
                className="img-fluid"
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div
              className="offcanvas-body profile-dropdown mobile-navbar"
              data-simplebar=""
            >
              <ul id="sidebarnav">
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="javascript:void(0)"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-apps" />
                    </span>
                    <span className="hide-menu">Apps</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-chat.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-message-dots" />
                    </span>
                    <span className="hide-menu">Chat</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-calendar.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-calendar" />
                    </span>
                    <span className="hide-menu">Calendar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-email.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-mail" />
                    </span>
                    <span className="hide-menu">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Search Bar */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content rounded-1">
              <div className="modal-header border-bottom">
                <input
                  type="search"
                  className="form-control fs-3"
                  placeholder="Search here"
                  id="search"
                />
                <span data-bs-dismiss="modal" className="lh-1 cursor-pointer">
                  <i className="ti ti-x fs-5 ms-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Customizer */}
      </div>
      {/* Customizer */}
      {/* Import Js Files */}
      {/* core files */}
      {/* current page js files */}
      {/* Mirrored from demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/main/index4.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Oct 2023 06:39:36 GMT */}
    </>
  );
};

export default Dashboard;
