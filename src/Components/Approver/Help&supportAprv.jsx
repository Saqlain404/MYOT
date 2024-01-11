import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import {
  CreateEmplyTicket,
  OnGoingAprv,
  TicketListAprv,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";
import { ToastContainer } from "react-toastify";
import {
  NewTicketEmply,
  ResolveListEmpl,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";

const HelpSupportAprv = () => {
  const [ticketList, setTicketList] = useState();
  const [id, setId] = useState();
  const [selectedDropdown, setSelectedDropdown] = useState("All");

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  // Add Ticket
  const [contactData, setContactData] = useState({
    email: "",
    ticketType: "",
    ticketIssue: "",
  });
  const handleInput = (event) => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: contactData.email,
      ticketType: contactData.ticketType,
      ticketIssue: contactData.ticketIssue,
    };
    const response = await CreateEmplyTicket({
      creator_Id:
        localStorage.getItem("user_id") ||
        localStorage.getItem("myot_admin_id"),
      email: data.email,
      ticketType: data.ticketType,
      ticketIssue: data.ticketIssue,
    });
    setContactData({
      email: "",
      ticketType: "",
      ticketIssue: "",
    });
    AllData()
  };

  const OnGoingList = async () => {
    let data = await OnGoingAprv(ids);
    console.log(data);
    if (!data?.error) {
      setTicketList(data);
    }
  };
  const resolveList = async () => {
    let data = await ResolveListEmpl(ids);
    console.log(data);
    if (!data?.error) {
      setTicketList(data);
    }
  };
  const NewTickets = async () => {
    let data = await NewTicketEmply(ids);
    if (!data?.error) {
      setTicketList(data);
    }
  };

  const onDropdownChange = (selectedItem) => {
    setSelectedDropdown(selectedItem);
    switch (selectedItem) {
      case "New":
        NewTickets();
        break;
      case "Ongoing":
        OnGoingList();
        break;
      case "Resolved":
        resolveList();
        break;
      default:
        AllData();
    }
  };

  // Ticket List
  const AllData = async () => {
    let emp_id = localStorage.getItem("user_id");
    setId(emp_id);
    const getData = await TicketListAprv(ids);
    setTicketList(getData);
    console.log(ticketList);
  };
  useEffect(() => {
    AllData();
  }, []);
  useEffect(() => {
    // AllData();
  }, [ticketList]);

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
                  {/* <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form> */}
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Approver/Chat"}>
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
                      <p className="td-text border-bottom me-3">
                        Help & Support
                      </p>
                    </Link>
                    <Link
                      to={"/Approver/Contact-us"}
                      className="text-decoration-none"
                    >
                      <p className="th-text">Contact Us</p>
                    </Link>
                  </div>
                  <div className="d-flex">
                    {/* <div class="dropdown">
                      <a
                        type=""
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        href="/"
                      >
                        <button className="help-support-btn1 me-2">
                          Select Priority
                          <img
                            src="/images/dashboard/DownArrowBtn.svg"
                            alt=""
                          />
                        </button>
                      </a> */}
                      {/* <ul class="dropdown-menu border-0 shadow mt-3  rounded"> */}
                        {/* <li>
                          <div
                            className="d-flex whitespace-nowrap"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <a class="dropdown-item border-bottom" href="/">
                              <img
                                src="/images/dashboard/blue-ticket-ball.svg"
                                alt=""
                                className="help-support-dd-img"
                              />
                              New Tickets
                            </a>
                          </div>
                        </li> */}
                        {/* <li>
                          <a class="dropdown-item border-bottom" href="/">
                            <img
                              src="/images/dashboard/orange-ticket-ball.svg"
                              alt=""
                              className="help-support-dd-img"
                            />
                            On-Going Tickets
                          </a>
                        </li> */}
                        {/* <li>
                          <a class="dropdown-item" href="/">
                            <img
                              src="/images/dashboard/green-ticket-ball.svg"
                              alt=""
                              className="help-support-dd-img"
                            />
                          </a>
                        </li> */}
                      {/* </ul> */}
                    {/* </div> */}
                    <div class="dropdown">
                      <a
                        type=""
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <button className="help-support-btn1 me-2">
                          Select Priority
                          <img
                            src="/images/dashboard/DownArrowBtn.svg"
                            alt=""
                          />
                        </button>
                      </a>
                      <ul class="dropdown-menu border-0 shadow mt-3  rounded">
                        <li>
                          {/* <div
                            className="d-flex whitespace-nowrap"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          > */}
                          <a
                            class={`dropdown-item border-bottom ${
                              selectedDropdown === "New" ? "active" : ""
                            }`}
                            href="#"
                            onClick={() => onDropdownChange("New")}
                          >
                            <img
                              src="/images/dashboard/blue-ticket-ball.svg"
                              alt=""
                              className="help-support-dd-img"
                            />
                            New Tickets
                          </a>
                          {/* </div> */}
                        </li>
                        <li>
                          <a
                            class={`dropdown-item border-bottom ${
                              selectedDropdown === "Ongoing" ? "active" : ""
                            }`}
                            href="#"
                            onClick={() => onDropdownChange("Ongoing")}
                            aria-selected="false"
                          >
                            <img
                              src="/images/dashboard/orange-ticket-ball.svg"
                              alt=""
                              className="help-support-dd-img"
                            />
                            On-Going Tickets
                          </a>
                        </li>
                        <li>
                          <a
                            class={`dropdown-item ${
                              selectedDropdown === "Resolved" ? "active" : ""
                            }`}
                            href="#"
                            onClick={() => onDropdownChange("Resolved")}
                          >
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
                    {/* <!-- Modal --> */}
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                        <div class="modal-content border-0">
                          <div class="d-flex modal-header border-bottom">
                            <p class="" id="exampleModalLabel">
                              Create New Ticket
                            </p>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <form action="" onSubmit={onSubmit}>
                            <div className="row p-3">
                              <div className="col-12 mb-3 d-flex">
                                <div className="col-6 pe-3">
                                  <input
                                    type="text"
                                    placeholder="Email *"
                                    className="col-12 modal-input td-text  p-2"
                                    name="email"
                                    value={contactData.email}
                                    onChange={handleInput}
                                  />
                                </div>
                                <div className="col-6 ps-3">
                                  <input
                                    type=""
                                    placeholder="Request Ticket Type *"
                                    className="col-12 modal-input td-text  p-2"
                                    name="ticketType"
                                    value={contactData.ticketType}
                                    onChange={handleInput}
                                  />
                                </div>
                              </div>
                              <p className="d-flex" id="exampleModalLabel">
                                Enter text here
                              </p>
                              <div className="col-12 mb-3 ">
                                <textarea
                                  type="text"
                                  placeholder="Type ticket issue here..."
                                  className="col-12 modal-input td-text p-2"
                                  name="ticketIssue"
                                  value={contactData.ticketIssue}
                                  onChange={handleInput}
                                ></textarea>
                              </div>
                            </div>
                            <ToastContainer />
                            <div className="d-flex justify-content-end mb-3">
                              <button type="submit" class="user-modal-btn" data-bs-dismiss="modal">
                                Send
                              </button>
                              <button
                                type="button"
                                class="user-modal-btn2"
                                data-bs-dismiss="modal"
                              >
                                Cancle
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal End--> */}
                    {/* <Link to={"/"} className="text-decoration-none">
                      <button className="help-support-btn1 me-2">
                        This Week
                        <img src="/images/dashboard/DownArrowBtn.svg" alt="" />
                      </button>
                    </Link> */}
                    <Link
                      className="text-decoration-none"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <button className="help-support-btn">New Ticket</button>
                    </Link>
                  </div>
                </div>

                <p className="help-support-heading">Get in Touch</p>
                <p className="help-support-text">
                  Please get in touch and we will be happy to help you. Create
                  New tickets
                </p>
                <div className="col-12 d-flex">
                  <ul className="nav nav-tabs mb-5" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          selectedDropdown === "All" ? "active" : ""
                        }`}
                        id="ex1-tab-1"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                        // onClick={AllData}
                        onClick={() => onDropdownChange("All")}
                      >
                        All Tickets
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          selectedDropdown === "New" ? "active" : ""
                        }`}
                        id="ex1-tab-2"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                        // onClick={NewTickets}
                        onClick={() => onDropdownChange("New")}
                      >
                        New Tickets
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          selectedDropdown === "Ongoing" ? "active" : ""
                        }`}
                        id="ex1-tab-3"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        // onClick={OnGoingList}
                        onClick={() => onDropdownChange("Ongoing")}
                      >
                        Ongoing Tickets
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          selectedDropdown === "Resolved" ? "active" : ""
                        }`}
                        id="ex1-tab-4"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-4"
                        role="tab"
                        aria-controls="ex1-tabs-4"
                        aria-selected="false"
                        // onClick={resolveList}
                        onClick={() => onDropdownChange("Resolved")}
                      >
                        Resolved Tickets
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  {!ticketList && ticketList?.length
                    ? "No Ticket Available"
                    : ticketList?.[0]?.map((ticket) => (
                        <div
                          className="col rounded border bg-white mb-3 p-2"
                          key={ticket._id}
                        >
                          <div className="d-flex border-bottom">
                            <div className="ps-2 pe-4">
                              <div className="d-flex mb-3">
                                {ticket?.status === "In Progress" ? (
                                  <img
                                    src="/images/dashboard/orange-ticket-ball.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                ) : ticket?.status === "Pending" ? (
                                  <img
                                    src="/images/dashboard/blue-ticket-ball.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                ) : ticket.status === "Completed" ? (
                                  <img
                                    src="/images/dashboard/green-ticket-ball.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                ) : null}
                                <p className="ticket-number m-1">
                                  {ticket.ticketType}
                                </p>
                              </div>
                              <div className=" mt-1">
                                <p className="ticket-question mb-1">
                                  {ticket.ticketIssue}
                                </p>
                                <p className="td-text mt-0">
                                  Impressive! Though it seems the drag feature
                                  could be improved. But overall it looks
                                  incredible. You’ve nailed the design and the
                                  responsiveness at various breakpoints works
                                  really well.
                                </p>
                              </div>
                            </div>
                            <p className="ticket-post-time mt-2">
                              Posted At <br />
                              {moment(ticket.createdAt).calendar()}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <img
                                src={ticket.creator_Id.profile_Pic}
                                alt=""
                                className="m-2 img_profile"
                              />
                              <p className="th-text m-auto">
                                {ticket.creator_Id.name}
                              </p>
                            </div>
                            <a href="/" className="ticket-link mt-3 me-1">
                              Open Ticket
                            </a>
                          </div>
                        </div>
                      ))}
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
