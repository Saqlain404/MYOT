import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/free-regular-svg-icons";
// import "assets/css/style.min.css"

const Home = () => {
  const tasks = [
    {
      id: 1,
      template: "Non-Objection Certificate",
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.0",
      status: (
        <p className="text-primary">
          {" "}
          {/* <img src="/images/dashboard/Text-dot.svg" /> */}
          In Progress
        </p>
      ),
      department: "Human Resources",
      action: "...",
    },
    {
      id: 2,
      template: "Expense Report",
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "2.0",
      status: <p className="text-warning"> Approved</p>,
      department: "Finance",
      action: "...",
    },
    {
      id: 3,
      template: "Salary Slip",
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.5",
      status: <p className="text-info">Pending</p>,
      department: "Human Resources",
      action: "...",
    },
    {
      id: 3,
      template: "Research Proposal",
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.5",
      status: <p className="text-success"> Active</p>,
      department: "R&D",
      action: "...",
    },
    {
      id: 3,
      template: "Conference Attendance",
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.5",
      status: <p className="text-secondary">Rejected</p>,
      department: "Human Resources",
      action: "...",
    },
    // Add more tasks here
  ];

  const documents = [
    {
      id: 1,
      document: "To Whom It May Concern",
      requester: <img src="/images/dashboard/Avatar1.png" />,
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.0",
      status: <p className="text-primary">In Progress</p>,
      department: "Human Resources",
      action: "...",
    },
    {
      id: 2,
      document: "Salary Certificate",
      requester: <img src="/images/dashboard/Avatar2.png" />,
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "2.0",
      status: <p className="text-warning">Approved</p>,
      department: "Finance",
      action: "...",
    },
    {
      id: 3,
      document: "Maternity Leave",
      requester: <img src="/images/dashboard/Avatar3.png" />,
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.5",
      status: <p className="text-info">Pending</p>,
      department: "Human Resources",
      action: "...",
    },
    {
      id: 4,
      document: "Promotion",
      requester: <img src="/images/dashboard/Avatar.png" />,
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.5",
      status: <p className="text-success">Active</p>,
      department: "R&D",
      action: "...",
    },
    {
      id: 5,
      document: "Sales Report",
      requester: <img src="/images/dashboard/Avatar2.png" />,
      assignedTo: <img src="/images/dashboard/Avatar2.png" />,
      version: "1.5",
      status: <p className="text-secondary">Rejected</p>,
      department: "Human Resources",
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
                        /Home
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
                          <h6 className="mb-0 header-card-text">
                            Total Employes
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">123</h3>
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
                          <h6 className="mb-0 header-card-text">
                            Total Department
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">20</h3>
                          <span className="fw-bold ms-4 d-flex">+9.15%
                          <img src="/images/dashboard/ArrowRise.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-success shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">
                            Total Active Users
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">1,156</h3>
                          <span className="fw-bold ms-4 d-flex">-0.56%
                          <img src="/images/dashboard/ArrowFall.png" alt="" className="ps-1" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="card bg-light-warning shadow-none">
                      <div className="card-body p-4 card-content">
                        <div className="card-content d-flex align-items-center">
                          <h6 className="mb-0 header-card-text">
                            Total Templates
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                          <h3 className="mb-0 fw-semibold fs-7">320</h3>
                          <span className="fw-bold ms-4 d-flex">-1.48%
                          <img src="/images/dashboard/ArrowFall.png" alt="" className="ps-1" /></span>
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
                <table className="container table mb-4">
                  <thead className="col table-head">
                    <tr className="d-flex justify-content-between">
                      <th className="col-3 th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Template name
                      </th>

                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Assigned To
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Version
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Status
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Department
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="col">
                    {tasks.map((task) => (
                      <tr
                        key={task.id}
                        className="d-flex justify-content-between"
                      >
                        <td className="col-3 table-body-desc">
                          {task.template}
                        </td>
                        <td className="col-2 table-body-desc">
                          {task.assignedTo}
                        </td>
                        <td className="col-2 table-body-desc">
                          {task.version}
                        </td>
                        <td className="col-2 table-body-desc">{task.status}</td>
                        <td className="col-2 table-body-desc">
                          {task.department}
                        </td>
                        <td className="col-2 table-body-desc">{task.action}</td>
                        <td>
                          {/* <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button> */}
                        </td>
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

                <p className="table-name mb-2">Document Requests</p>

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
                  <thead className="col table-head">
                    <tr className="d-flex justify-content-between">
                      <th className="col-3">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Document
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Requester
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Assigned To
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Status
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Department
                      </th>
                      <th className="col-2">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="col">
                    {documents.map((document) => (
                      <tr
                        key={document.id}
                        className="d-flex justify-content-between"
                      >
                        <td className="col-3 table-body-desc">
                          {document.document}
                        </td>
                        <td className="col-2 table-body-desc">
                          {document.requester}
                        </td>
                        <td className="col-2 table-body-desc">
                          {document.assignedTo}
                        </td>
                        <td className="col-2 table-body-desc">
                          {document.status}
                        </td>
                        <td className="col-2 table-body-desc">
                          {document.department}
                        </td>
                        <td className="col-2 table-body-desc">
                          {document.action}
                        </td>
                        <td>
                          {/* <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <nav aria-label="Page navigation example" className="d-flex justify-content-end page-navigation">
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

export default Home;
