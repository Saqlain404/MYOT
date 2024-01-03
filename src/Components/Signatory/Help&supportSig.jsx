import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import {
  SignatoryAllTicketList,
  SignatoryCreateHelpNSupportTicket,
  SignatoryOngoingTicketList,
} from "../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { toast } from "react-toastify";
import moment from "moment";
import {
  EmployeeNewTicketList,
  EmployeeResolvedTicketList,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";

const HelpSupportSig = () => {
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [ticketIssue, setTicketIssue] = useState("");
  const [adminId, setAdminId] = useState();
  const [ticketList, setTicketList] = useState([]);
  // const [ongoingTicketList, setOngoingTicketList] = useState([]);
  // const [newTicketList, setNewTicketList] = useState([]);
  // const [resolvedTicketList, setResolvedTicketList] = useState([]);

  useEffect(() => {
    getAllTickets();
  }, []);

  const getAllTickets = async () => {
    let admId = localStorage.getItem("myot_admin_id");
    setAdminId(admId);
    if (admId) {
      let { data } = await SignatoryAllTicketList(admId);
      let values = data?.results?.ticketList;
      values.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      // console.log(values)
      setTicketList(values);
    }
  };

  const getOngoingTickets = async () => {
    if (adminId) {
      let { data } = await SignatoryOngoingTicketList(adminId);
      let values = data?.results?.onGoingTicket;
      values.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      setTicketList(values);
    }
  };

  const getNewTickets = async () => {
    if (adminId) {
      let { data } = await EmployeeNewTicketList(adminId);
      console.log(data);
      let values = data?.results?.ticket;
      values.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      setTicketList(values);
    }
  };

  const getResolvedTickets = async () => {
    let { data } = await EmployeeResolvedTicketList(adminId);
    if (!data?.error) {
      let values = data?.results?.ticket;
      values.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      setTicketList(values);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, ticketIssue, ticketType);
    let { data } = await SignatoryCreateHelpNSupportTicket({
      email,
      ticketIssue,
      ticketType,
      creator_Id: adminId,
    });
    if (!data?.error) {
      toast("Ticket Created Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getAllTickets();
      document.getElementById("reset").click();
      document.getElementById("close").click();
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Help / Help & Support
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
                      to={"/Signatory/Help"}
                      className="text-decoration-none"
                    >
                      <p className="th-text  me-3">Template Guidelines</p>
                    </Link>
                    <Link
                      to={"/Signatory/Help/Help-Support"}
                      className="text-decoration-none"
                    >
                      <p className="td-text border-bottom me-3">
                        Help & Support
                      </p>
                    </Link>
                    <Link
                      to={"/Signatory/Help/Contact-us"}
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
                          <div
                            className="d-flex whitespace-nowrap"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <a class="dropdown-item border-bottom" href="#">
                              <img
                                src="/images/dashboard/blue-ticket-ball.svg"
                                alt=""
                                className="help-support-dd-img"
                              />
                              New Tickets
                            </a>
                          </div>
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
                    </div> */}
                    {/* <!-- create New ticket Modal --> */}
                    <div
                      class="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content border-0">
                          <div class="d-flex modal-header border-bottom">
                            <p class="p-0 m-0" id="exampleModalLabel">
                              Create New Ticket
                            </p>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form onSubmit={handleSubmit}>
                              <div className="row p-3">
                                <div className="col-12 mb-3 d-flex">
                                  <div className="col-6 pe-3">
                                    <input
                                      type="email"
                                      placeholder="Email *"
                                      className="col-12 modal-input td-text  p-2"
                                      name="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>
                                  <div className="col-6 ps-3">
                                    <input
                                      type="text"
                                      placeholder="Request Ticket Type *"
                                      className="col-12 modal-input td-text  p-2"
                                      name="ticket type"
                                      value={ticketType}
                                      onChange={(e) =>
                                        setTicketType(e.target.value)
                                      }
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
                                    className="col-12 modal-input td-text p-2 textarea_h_100px"
                                    name="issue"
                                    value={ticketIssue}
                                    onChange={(e) =>
                                      setTicketIssue(e.target.value)
                                    }
                                  ></textarea>
                                  {/* <input type="text" placeholder="Phone Number" className="col-6 modal-input th-text p-2"/> */}
                                </div>
                              </div>
                              <div className="d-flex justify-content-end mb-3">
                                <button type="submit" class="user-modal-btn">
                                  Send
                                </button>
                                <button id="reset" type="reset" class="d-none">
                                  reset
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal End--> */}
                    <Link className="text-decoration-none">
                      <button className="help-support-btn1 me-2">
                        This Week
                        <img src="/images/dashboard/DownArrowBtn.svg" alt="" />
                      </button>
                    </Link>
                    <button
                      type="button"
                      class="help-support-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      New Ticket
                    </button>
                  </div>
                </div>

                <p className="help-support-heading">Get in Touch</p>
                <p className="help-support-text">
                  Please get in touch and we will be happy to help you. Create
                  New tickets
                </p>

                <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      id="ex1-tab-1"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-1"
                      role="tab"
                      aria-controls="ex1-tabs-1"
                      aria-selected="true"
                      onClick={getAllTickets}
                    >
                      All Tickets
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex1-tab-2"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-2"
                      role="tab"
                      aria-controls="ex1-tabs-2"
                      aria-selected="false"
                      onClick={getNewTickets}
                    >
                      New
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex1-tab-3"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-3"
                      role="tab"
                      aria-controls="ex1-tabs-3"
                      aria-selected="false"
                      onClick={getOngoingTickets}
                    >
                      Ongoing
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex1-tab-4"
                      data-bs-toggle="tab"
                      href="#ex1-tabs-4"
                      role="tab"
                      aria-controls="ex1-tabs-4"
                      aria-selected="false"
                      onClick={getResolvedTickets}
                    >
                      Resolved
                    </a>
                  </li>
                </ul>
                <div class="tab-content p-0 m-0" id="ex1-content">
                  <div
                    class="tab-pane fade show active"
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    <div className="col-12">
                      {ticketList && ticketList.length > 0 ? (
                        ticketList?.map((ticket) => (
                          <>
                            <div
                              key={ticket?._id}
                              className="col rounded border bg-white my-2 p-2"
                            >
                              <div className="d-flex border-bottom">
                                <div className="ps-2 pe-4">
                                  <div className="d-flex mb-3">
                                    <img
                                      src="/images/dashboard/green-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div className=" mt-1">
                                    <p className="ticket-question mb-1">
                                      {ticket?.ticketIssue}
                                    </p>
                                    <p className="td-text mt-0">
                                      Impressive! Though it seems the drag
                                      feature could be improved. But overall it
                                      looks incredible. You’ve nailed the design
                                      and the responsiveness at various
                                      breakpoints works really well.
                                    </p>
                                  </div>
                                </div>
                                <p className="ticket-post-time mt-2">
                                  Posted {moment(ticket?.createdAt).calendar()}
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar2.png"
                                    }
                                    alt=""
                                    className="m-2 w_20_h_20"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1">
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <h3 className="my-5 text-black-50">
                          Sorry No Tickets Found
                        </h3>
                      )}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-2"
                  >
                    <div className="col-12">
                      {ticketList && ticketList.length > 0 ? (
                        ticketList?.map((ticket) => (
                          <>
                            <div
                              key={ticket?._id}
                              className="col rounded border bg-white my-2 p-2"
                            >
                              <div className="d-flex border-bottom">
                                <div className="ps-2 pe-4">
                                  <div className="d-flex mb-3">
                                    <img
                                      src="/images/dashboard/green-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div className=" mt-1">
                                    <p className="ticket-question mb-1">
                                      {ticket?.ticketIssue}
                                    </p>
                                    <p className="td-text mt-0">
                                      Impressive! Though it seems the drag
                                      feature could be improved. But overall it
                                      looks incredible. You’ve nailed the design
                                      and the responsiveness at various
                                      breakpoints works really well.
                                    </p>
                                  </div>
                                </div>
                                <p className="ticket-post-time mt-2">
                                  Posted {moment(ticket?.createdAt).calendar()}
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar2.png"
                                    }
                                    alt=""
                                    className="m-2 w_20_h_20"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1">
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <h3 className="my-5 text-black-50">
                          Sorry No Tickets Found
                        </h3>
                      )}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-3"
                  >
                    <div className="col-12">
                      {ticketList && ticketList.length > 0 ? (
                        ticketList?.map((ticket) => (
                          <>
                            <div
                              key={ticket?._id}
                              className="col rounded border bg-white my-2 p-2"
                            >
                              <div className="d-flex border-bottom">
                                <div className="ps-2 pe-4">
                                  <div className="d-flex mb-3">
                                    <img
                                      src="/images/dashboard/green-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div className=" mt-1">
                                    <p className="ticket-question mb-1">
                                      {ticket?.ticketIssue}
                                    </p>
                                    <p className="td-text mt-0">
                                      Impressive! Though it seems the drag
                                      feature could be improved. But overall it
                                      looks incredible. You’ve nailed the design
                                      and the responsiveness at various
                                      breakpoints works really well.
                                    </p>
                                  </div>
                                </div>
                                <p className="ticket-post-time mt-2">
                                  Posted {moment(ticket?.createdAt).calendar()}
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar2.png"
                                    }
                                    alt=""
                                    className="m-2 w_20_h_20"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1">
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <h3 className="my-5 text-black-50">
                          Sorry No Tickets Found
                        </h3>
                      )}
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex1-tabs-4"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-4"
                  >
                    <div className="col-12">
                      {ticketList && ticketList.length > 0 ? (
                        ticketList?.map((ticket) => (
                          <>
                            <div
                              key={ticket?._id}
                              className="col rounded border bg-white my-2 p-2"
                            >
                              <div className="d-flex border-bottom">
                                <div className="ps-2 pe-4">
                                  <div className="d-flex mb-3">
                                    <img
                                      src="/images/dashboard/green-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div className=" mt-1">
                                    <p className="ticket-question mb-1">
                                      {ticket?.ticketIssue}
                                    </p>
                                    <p className="td-text mt-0">
                                      Impressive! Though it seems the drag
                                      feature could be improved. But overall it
                                      looks incredible. You’ve nailed the design
                                      and the responsiveness at various
                                      breakpoints works really well.
                                    </p>
                                  </div>
                                </div>
                                <p className="ticket-post-time mt-2">
                                  Posted {moment(ticket?.createdAt).calendar()}
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar2.png"
                                    }
                                    alt=""
                                    className="m-2 w_20_h_20"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1">
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <h3 className="my-5 text-black-50">
                          Sorry No Tickets Found
                        </h3>
                      )}
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

export default HelpSupportSig;
