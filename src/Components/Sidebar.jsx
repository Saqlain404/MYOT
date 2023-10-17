import React from 'react'

const Sidebar = () => {
  return (
    <div>
         <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <div
          className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
        </div>
      </div>
      <div>
      <img src='/images/Myot-logo.png' className="logo pb-1"/>

      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          {/* ============================= */}
          {/* Home */}
          {/* ============================= */}
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">MAIN MENU</span>
          </li>
          {/* =================== */}
          {/* Dashboard */}
          {/* =================== */}
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index.html"
              aria-expanded="false"
            >
              <span>
                <img src="/images/sidebar/home2.png"/>
              </span>
              <span className="hide-menu">Home</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/dashboard.png"/>
              </span>
              <span className="hide-menu">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index2.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/tasks.png"/>
              </span>
              <span className="hide-menu">Tasks</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index3.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/ic_calendar.png"/>

              </span>
              <span className="hide-menu">Calender</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index4.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/user.png"/>

              </span>
              <span className="hide-menu">Users</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index5.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/departments.png"/>

              </span>
              <span className="hide-menu">Departments</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index6.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/approvers.png"/>

              </span>
              <span className="hide-menu">Approvers</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index6.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/signatories.png"/>

              </span>
              <span className="hide-menu">Signatories</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index6.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/request.png"/>

              </span>
              <span className="hide-menu">Requests</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index6.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/announcement.png"/>

              </span>
              <span className="hide-menu">Announcements</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index6.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/files.png"/>

              </span>
              <span className="hide-menu">Files</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index6.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/analytics.png"/>

              </span>
              <span className="hide-menu">Analytics</span>
            </a>
          </li>
          {/* ============================= */}
          {/* Apps */}
          {/* ============================= */}
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">OTHER</span>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="app-calendar.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/my-profile.png"/>

              </span>
              <span className="hide-menu">My Profile</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="apps-kanban.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/settings.png"/>

              </span>
              <span className="hide-menu">Settings</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="app-chat.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/help.png"/>

              </span>
              <span className="hide-menu">Help</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="app-email.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/logout.png"/>

              </span>
              <span className="hide-menu">Logout</span>
            </a>
          </li>
        </ul>
       
      </nav>
      
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside></div>
  )
}

export default Sidebar;