import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from 'antd';


const Tasks = () => {
  const documents = [
    {
      id: 1,
      templateName: "Employment Contract",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 2,
      templateName: "Tax Deduction at Source (TDS)",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 3,
      templateName: "Training Certificates",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 4,
      templateName: "Software Licenses",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 5,
      templateName: "Reference Letter",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 6,
      templateName: "Annual Tax Statement",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 7,
      templateName: "Leave Application",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
    },
    {
      id: 8,
      templateName: "Marketing Campaign Reports",
      assignedTo: <img src="/images/dashboard/Avatar.png"/>,
      version: "0.2",
      date: "26 Oct, 2023",
      status: "In Progress",
      department: "Human Resources",
      comment: <img src="/images/dashboard/Comment.png"/>,
      actions: "...",
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
                        /Tasks
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
                          <h6 className="mb-0 header-card-text">Total Template Create</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7 d-flex">123</h3>
                          <span className="fw-bold ms-4">+11.01%
                          <img src="/images/dashboard/ArrowRise.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-danger shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">Templates Awaiting</h6>
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
                          <h6 className="mb-0 header-card-text">Recently Approved</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7 d-flex">1,320</h3>
                          <span className="fw-bold ms-4">-1.48%
                          <img src="/images/dashboard/ArrowFall.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-warning shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">Active Signatories</h6>
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
                <p className="table-name mb-2">Templates</p>
                <div className="d-flex align-items-center col table-searchbar">
                  <div className="d-flex  col table-searchbar">
                    <div className="col-3">
                      <img
                        src="/images/dashboard/Plus-icon.png"
                        alt=""
                        className="p-2"
                      />
                      <img
                        src="/images/dashboard/FunnelSimple.png"
                        alt=""
                        className="p-2"
                      />
                      <img
                        src="/images/dashboard/ArrowsDownUp.png"
                        alt=""
                        className="p-2"
                      />
                      <img
                        src="/images/dashboard/DotsThreeOutlineVertical2.png"
                        alt=""
                        className="p-2"
                      />
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-around ">
                      <p>2 Selected</p>
                      <p className="hide-selected">Hide Selected</p>
                    </div>
                    
                  </div>
                  <form class="d-flex me-2" role="search">
                      <input
                        class="form-control search-bar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                </div>
                <table className="container table">
                  <thead className="col table-head-dashboard">
                    <tr className="d-flex  justify-content-between ">
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Template name</th>
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Assigned to</th>
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Version</th>
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Date</th>  
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Status</th>
                      <th className=" d-flex ">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Department</th>
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Comment</th>
                      <th className=" d-flex">
                      <input className="form-check-input checkbox-table" type="checkbox" value="" />Actions</th>
                    </tr>
                  </thead>
                  <tbody className=" table">
                    {documents.map((document) => (
                      <tr key={document.id} className="d-flex justify-content-between">
                        <td className=" table-body-desc">{document.templateName}</td>
                        <td className=" table-body-desc">{document.assignedTo}</td>
                        <td className=" table-body-desc">{document.version}</td>
                        <td className=" table-body-desc">{document.date}</td>
                        <td className=" table-body-desc">{document.status}</td>
                        <td className=" table-body-desc">{document.department}</td>
                        <td className=" table-body-desc">{document.comment}</td>
                        <td className=" table-body-desc">{document.actions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <nav aria-label="Page navigation" className="d-flex justify-content-end page-navigation">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
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

export default Tasks;
