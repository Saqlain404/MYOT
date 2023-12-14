import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";

const HelpSupport = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl/>
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Template / Template Version 1.0 / View
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
                    <Link to={"/Employee/Chat"}>
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

            <div className="container px-4 text-center min-vh-100 ">
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12 d-flex justify-content-between">
                  <div className="d-flex mt-2">
                  <Link
                    to={"/Employee/Help"}
                    className="text-decoration-none"
                  >
                    <p className="th-text  me-3">Template Guidelines</p>
                  </Link>
                  <Link
                    to={"/"}
                    className="text-decoration-none"
                  >
                    <p className="td-text border-bottom me-3">Help & Support</p>
                  </Link>
                  <Link
                    to={"/Employee/Contact"}
                    className="text-decoration-none"
                  >
                    <p className="th-text">Contact Us</p>
                  </Link>
                  </div>
                  <div className="d-flex">
                  <Link to={"/"} className="text-decoration-none ">
      <button className="help-support-btn1 me-2">Select Priority
      <img src="/images/dashboard/DownArrowBtn.svg" alt="" /></button>
      </Link>
      <Link to={"/"} className="text-decoration-none">
      <button className="help-support-btn1 me-2">This Week
      <img src="/images/dashboard/DownArrowBtn.svg" alt="" /> 
      </button>
      </Link>
                  <Link to={"/"} className="text-decoration-none">
      <button className="help-support-btn">New Ticket</button>
      </Link>
                  </div>
                </div>

                <p className="help-support-heading">Get in Touch</p>
                <p className="help-support-text">Please get in touch and we will be happy to help you. Create New tickets</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSupport;