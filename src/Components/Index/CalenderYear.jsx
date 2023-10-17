import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Calendar, theme, Badge } from 'antd';
// import "assets/css/style.min.css"
import { Card } from 'antd';




const Calender = () => {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
          {
            type: 'error',
            content: 'This is error event.',
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event',
          },
          {
            type: 'success',
            content: 'This is very long usual event......',
          },
          {
            type: 'error',
            content: 'This is error event 1.',
          },
          {
            type: 'error',
            content: 'This is error event 2.',
          },
          {
            type: 'error',
            content: 'This is error event 3.',
          },
          {
            type: 'error',
            content: 'This is error event 4.',
          },
        ];
        break;
      default:
    }
    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

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
              {/* <div className="calendar-header"> */}
              <header className="app-header calendar-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <ul className="navbar-nav quick-links d-none d-lg-flex">
                    <li className="nav-item dropdown-hover d-none d-lg-block">
                      <a className="nav-link" href="app-email.html">
                        /Calender
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              {/* </div> */}
             
              {/* Header End */}
              <div className="container-fluid calendar-section">
                <div className="row d-flex flex-direction-row cards-row">

                  <div className="d-flex mt-4 ms-1">
                    <p className="me-3">Day</p>
                    <p className="me-3">Week</p>
                    <p className="me-3">Month</p>
                    <p className="me-3">Year</p>
                  </div>
                 
                </div>
                <div className="d-flex calendar-screen">
                <div style={wrapperStyle} className="me-4 mini-calendar">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>

    <Calendar cellRender={cellRender} />
    </div>
               
              </div>
            </div>
            <div className="dark-transparent sidebartoggler" />
            <div className="dark-transparent sidebartoggler" />
          </div>
        </div>
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

export default Calender;
