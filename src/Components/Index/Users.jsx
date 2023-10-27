import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Space, Table, Tag } from "antd";

const Users = () => {
  const photo = <img src="/images/dashboard/Avatar.png" />;

  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
    },
    {
      title: "Last Logged In",
      key: "lastLoggedIn",
      dataIndex: "lastLoggedIn",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>...</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      userId: "111125",
      // image: "./images/dashboard/Avatar.png",
      name: ['Aliah Lane'],
      department: "Finance",
      roles: `Employee
      Approver 
      Signatory
      DTM`,
      lastLoggedIn: "2021-04-16 18:02:55",
      status: "New York No. 1 Lake Park",
      tags: ["online"],
    },
    {
      key: "2",
      userId: "101346",
      name: "Andi Lane",
      department: "Sales and Marketing",
      roles: `Admin
      Employee
      Approver
      Signatory
      DTM`,
      lastLoggedIn: "2021-04-16 18:02:55",
      status: "London No. 1 Lake Park",
      tags: ["offline"],
    },
    {
      key: "3",
      userId: "101127",
      name: "Joe Black",
      department: "Research & Development",
      roles: `Admin
      Employee
      Approver
      Signatory
      DTM`,
      lastLoggedIn: "2021-04-16 18:02:55",
      status: "Sydney No. 1 Lake Park",
      tags: ["offline"],
    },
    {
      key: "4",
      userId: "101128",
      name: "Drew Cano",
      department: "Human Resourses",
      roles: `Admin
      Employee
      Approver
      Signatory
      DTM`,
      lastLoggedIn: "2021-04-16 18:02:55",
      status: "Sydney No. 1 Lake Park",
      tags: ["online"],
    },
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
                        /Users
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
                <div className="row d-flex flex-direction-row cards-row"></div>
                <div className="d-flex mt-4 mb-4 ms-2">
                  <p className="me-3">Overview</p>
                  <p className="me-3">Targets</p>
                  <p className="me-3">Budget</p>
                  <p className="me-3">Users</p>
                  <p className="me-3">Files</p>
                  <p className="me-3">Activity</p>
                  <p className="me-3">Settings</p>
                </div>

                <Table
                  columns={columns}
                  dataSource={data}
                  className="users-table table table-body-desc"
                />
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

export default Users;
