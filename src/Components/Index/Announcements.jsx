import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";

const Announcements = () => {
  const documents = [
    {
      id: 1,
      document: "Employment Contract",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        
      ],
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
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        
      ],
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
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        
      ],
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
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        
      ],
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
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        
      ],
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
            <Sidebar />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Announcements
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
            
            <div className="container bg-body-tertiary rounded ">
<div className="row">
<p className="">Templates {'>'} leave</p>
  <div className="col rounded bg-white m-2">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

export default Announcements;
