import React from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";

const AnnouncementsSig = () => {
  const documents = [
    {
      id: 1,
      document: "Employment Contract",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 2,
      document: "Tax Deduction at Source (TDS)",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 3,
      document: "Training Certificates",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-success m-0">Complete</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 4,
      document: "Software Licenses",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Information Technologies",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 5,
      document: "Reference Letter",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
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
                    <a className="nav-link th-text ms-2" href="app-email.html">
                      Announcements / Report Management
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
            <p className="table-name mb-2">Broadcast Announcement</p>

            <div className="container bg-body-tertiary rounded mb-3">
              <div className="row">
                <p className="templates-leave mt-3 ms-2 mb-0 ">
                  Templates {">"} leave
                </p>
                <div className="col-12">
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                </div>
                
              </div>
            </div>

            <div className="container bg-body-tertiary rounded mb-4">
              <div className="row">
                <p className="templates-leave mt-3 ms-2 mb-0 ">
                  Templates {">"} leave
                </p>
                <div className="col-12">
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                </div>
                
              </div>
            </div>

            <div className="footer">
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

export default AnnouncementsSig;
