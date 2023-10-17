import React from 'react'

const RightSidebar = () => {
  return (
    <>
     <aside className="right-sidebar">
    {/* Sidebar scroll*/}
    <div>
     
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          {/* ============================= */}
          {/* Home */}
          {/* ============================= */}
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Notifications</span>
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
                <img src="/images/sidebar/featured Icon.png"/>
              </span>
              <span className="hide-menu">You have a bug that neet to...</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Featured Icon user.png"/>
              </span>
              <span className="hide-menu">New user registered</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index2.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Avatar-Text-Time.png"/>
              </span>
              {/* <span className="hide-menu">You have a bug that needs to...</span> */}
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="index3.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Featured Icon user.png"/>

              </span>
              <span className="hide-menu">New user recentlu added by a..</span>
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
              <img src="/images/sidebar/Avatar1.png"/>

              </span>
              <span className="hide-menu">Edited the details of Project X</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="apps-kanban.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Avatar2.png"/>

              </span>
              <span className="hide-menu">Changed the status of Project X</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="app-chat.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Avatar3.png"/>

              </span>
              <span className="hide-menu">Submitted a bug</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="app-email.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Avatar1.png"/>

              </span>
              <span className="hide-menu">Modified A data in Page X</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="app-email.html"
              aria-expanded="false"
            >
              <span>
              <img src="/images/sidebar/Avatar4.png"/>

              </span>
              <span className="hide-menu">Deleted a page in Project X</span>
            </a>
          </li>
        </ul>
        
      </nav>
     
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>
    </>
  )
}

export default RightSidebar;