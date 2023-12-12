import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";

const HelpSupportAprv = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
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

            <div className="container px-4 text-center min-vh-100 ">
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12 d-flex justify-content-between">
                  <div className="d-flex mt-2">
                  <Link
                    to={"/Approver/Help"}
                    className="text-decoration-none"
                  >
                    <p className="th-text  me-3">Template Guidelines</p>
                  </Link>
                  <Link
                    to={"/Approver/Help-Support"}
                    className="text-decoration-none"
                  >
                    <p className="td-text border-bottom me-3">Help & Support</p>
                  </Link>
                  <Link
                    to={"/Approver/Contact-us"}
                    className="text-decoration-none"
                  >
                    <p className="th-text">Contact Us</p>
                  </Link>
                  </div>
                  <div className="d-flex">
                  <Link to={"/"} className="text-decoration-none ">
                  <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              
      <button className="help-support-btn1 me-2">Select Priority
      <img src="/images/dashboard/DownArrowBtn.svg" alt="" /></button>
                            </a>
                            <ul class="dropdown-menu border-0 shadow mt-3  rounded">
                              <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                    src="/images/dashboard/blue-ticket-ball.svg"
                                    alt=""
                                    className="help-support-dd-img"
                                  />
                                  New Tickets
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                   src="/images/dashboard/orange-ticket-ball.svg"
                                    alt=""
                                    className="help-support-dd-img"
                                  />
                                  On-Going Tickets
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  <img
                                    src="/images/dashboard/green-ticket-ball.svg"
                                    alt=""
                                    className="help-support-dd-img"
                                  />
                                  Resolved Tickets
                                </a>
                              </li>
                              
                            </ul>
                          </div>
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
                <div className="col-12 d-flex">
                  <Link
                    to={"/"}
                    className="text-decoration-none"
                  >
                    <p className="td-text border-bottom me-3">All Tickets</p>
                  </Link>
                  <Link
                    to={""}
                    className="text-decoration-none"
                  >
                    <p className="th-text me-3">New</p>
                  </Link>
                  <Link
                    to={"/"}
                    className="text-decoration-none"
                  >
                    <p className="th-text me-3">On Going</p>
                  </Link>
                  <Link
                    to={"/"}
                    className="text-decoration-none"
                  >
                    <p className="th-text">Resolved</p>
                  </Link>
                  
                </div>
                <div className="col-12">
                  <div className="col rounded border bg-white mb-3 p-2">
                    <div className="d-flex border-bottom">
                  <div className="ps-2 pe-4">
                    <div className="d-flex mb-3">
                      <img
                        src="/images/dashboard/orange-ticket-ball.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="ticket-number m-1">
                      Ticket# 2023-CS123
                      </p>
                    </div>
                    <div className=" mt-1">
                      <p className="ticket-question mb-1">
                      How to deposit money to my portal?
                      </p>
                      <p className="td-text mt-0">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
                    </div>
                  </div>
                  <p className="ticket-post-time mt-2">Posted at 12:45 AM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src="/images/dashboard/Avatar.png" alt="" className="m-2"/>
                      <p className="th-text m-auto">John snow</p>
                    </div>
                    <a href="/" className="ticket-link mt-3 me-1">Open Ticket</a>
                  </div>
                </div>
                <div className="col rounded border bg-white mb-3 p-2">
                    <div className="d-flex border-bottom">
                  <div className="ps-2 pe-4">
                    <div className="d-flex mb-3">
                      <img
                        src="/images/dashboard/blue-ticket-ball.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="ticket-number m-1">
                      Ticket# 2023-CS123
                      </p>
                    </div>
                    <div className=" mt-1">
                      <p className="ticket-question mb-1">
                      How to deposit money to my portal?
                      </p>
                      <p className="td-text mt-0">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
                    </div>
                  </div>
                  <p className="ticket-post-time mt-2">Posted at 12:45 AM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src="/images/dashboard/Avatar3.png" alt="" className="m-2"/>
                      <p className="th-text m-auto">John snow</p>
                    </div>
                    <a href="/" className="ticket-link mt-3 me-1">Open Ticket</a>
                  </div>
                </div>
                <div className="col rounded border bg-white  p-2">
                    <div className="d-flex border-bottom">
                  <div className="ps-2 pe-4">
                    <div className="d-flex mb-3">
                      <img
                        src="/images/dashboard/green-ticket-ball.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="ticket-number m-1">
                      Ticket# 2023-CS123
                      </p>
                    </div>
                    <div className=" mt-1">
                      <p className="ticket-question mb-1">
                      How to deposit money to my portal?
                      </p>
                      <p className="td-text mt-0">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
                    </div>
                  </div>
                  <p className="ticket-post-time mt-2">Posted at 12:45 AM</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <img src="/images/dashboard/Avatar2.png" alt="" className="m-2"/>
                      <p className="th-text m-auto">John snow</p>
                    </div>
                    <a href="/" className="ticket-link mt-3 me-1">Open Ticket</a>
                  </div>
                </div>
                  </div>
              </div>
             
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpSupportAprv;
