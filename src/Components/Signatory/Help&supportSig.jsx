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
  EmployeeNewTicket,
  EmployeeNewTicketList,
  EmployeeResolvedTicketList,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { Button } from "rsuite";
import Swal from "sweetalert2";

const HelpSupportSig = () => {
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState("");
  const [message, setMessage] = useState("");
  const [adminId, setAdminId] = useState();
  const [ticketList, setTicketList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
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
      values?.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      // console.log(values)
      setTicketList(values);
    }
  };

  const getOngoingTickets = async () => {
    if (adminId) {
      let { data } = await SignatoryOngoingTicketList(adminId);
      let values = data?.results?.onGoingTicket;
      values?.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      setTicketList(values);
    }
  };

  const getNewTickets = async () => {
    if (adminId) {
      let { data } = await EmployeeNewTicketList(adminId);
      console.log(data);
      let values = data?.results?.ticket;
      values?.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      setTicketList(values);
    }
  };

  const getResolvedTickets = async () => {
    let { data } = await EmployeeResolvedTicketList(adminId);
    if (!data?.error) {
      let values = data?.results?.ticket;
      values?.sort((a, b) => new moment(b.createdAt) - new moment(a.createdAt));
      setTicketList(values);
    }
  };

  const handleFileSelection = async (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleAttachmentClick = (index) => {
    setSelectedTicketIndex(index);
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();
    setLoader(true);
    let id = localStorage.getItem("myot_admin_id");
    let formData = new FormData();
    // formData.append("email", email);
    formData.append("ticketType", requestType);
    formData.append("ticketIssue", message);
    formData.append("creator_Id", id);
    formData.append("document", files?.attachment);

    let { data } = await EmployeeNewTicket(formData);
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setLoader(false);
      setRequestType("");
      setFiles([]);
      setMessage("");
      document.getElementById("resetForm").click();
      document.getElementById("closeTicketModal").click();
      getAllTickets();
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
                    <a className="nav-link fw-bold"> Help / Help & Support</a>
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
                    <Link to={"/Signatory/Chat"}>
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
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                        <div class="modal-content border-0">
                          <div class="d-flex modal-header border-bottom">
                            <p class="mb-0" id="exampleModalLabel">
                              Create New Ticket
                            </p>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="closeTicketModal"
                            ></button>
                          </div>
                          <form action="" onSubmit={handleCreateRequest}>
                            <div className="row p-3">
                              <div className="col-12 mb-3 d-flex">
                                {/* <div className="col-6 pe-3">
                                  <input
                                    type="email"
                                    placeholder="Email *"
                                    className="col-12 modal-input td-text  p-2"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div> */}
                                <div className="col-12">
                                  <p
                                    className="pb-2 text-start"
                                    id="exampleModalLabel"
                                  >
                                    Title
                                  </p>
                                  <input
                                    type="text"
                                    placeholder="Title *"
                                    className="col-12 modal-input td-text w-100 p-2"
                                    name="request type"
                                    value={requestType}
                                    onChange={(e) =>
                                      setRequestType(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <p
                                className="pb-2 text-start"
                                id="exampleModalLabel"
                              >
                                Description
                              </p>
                              <div className="col-12 mb-3">
                                <textarea
                                  style={{ minHeight: "100px" }}
                                  type="text"
                                  placeholder="Type ticket issue here..."
                                  className="col-12 modal-input td-text p-2"
                                  name="message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                              </div>
                              <div className="col-12 mb-3">
                                <input
                                  type="file"
                                  className="col-12 modal-input td-text p-2"
                                  name="attachment"
                                  accept=".pdf, .png, .jpg, .jpeg"
                                  defaultValue=""
                                  onChange={(e) =>
                                    handleFileSelection(e, "attachment")
                                  }
                                />
                              </div>
                            </div>
                            <div className="d-flex justify-content-end mb-3">
                              <Button
                                style={{ width: "100px" }}
                                loading={loader}
                                appearance="primary"
                                className="btn mb-3 me-2 rounded-2"
                                type="submit"
                                disabled={!requestType || !message}
                              >
                                Send
                              </Button>
                              <Button
                                style={{ width: "100px" }}
                                className="btn mb-3 me-2 rounded-2"
                                type="reset"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                Cancel
                              </Button>
                              <button
                                type="reset"
                                id="resetForm"
                                class="d-none"
                              >
                                reset
                              </button>
                            </div>
                          </form>
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
                        ticketList?.map((ticket, index) => (
                          <>
                            <div
                              key={ticket?._id}
                              className="col rounded border bg-white my-2 p-2"
                            >
                              <div className="d-flex justify-content-between border-bottom">
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
                                  </div>
                                </div>
                                <p className="ticket-post-time mt-2 text-end">
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
                                <div className="d-flex align-items-center">
                                  {ticket?.document && (
                                    <a
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop"
                                      className="ticket-link mt-3 mx-2 cursor_pointer"
                                      onClick={() =>
                                        handleAttachmentClick(index)
                                      }
                                    >
                                      See Attachement
                                    </a>
                                  )}
                                  <a className="ticket-link mt-3 me-1 cursor_pointer">
                                    Open Ticket
                                  </a>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <h3 className="my-5 text-black-50 th-text">
                          Yay! No Tickets
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
                        <h3 className="my-5 text-black-50 th-text">
                          Yay! No Tickets
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
                        <h3 className="my-5 text-black-50 th-text">
                          Yay! No Tickets
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
                        <h3 className="my-5 text-black-50 th-text">
                          Yay! No Tickets
                        </h3>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div>
                          {selectedTicketIndex !== null &&
                          ticketList[selectedTicketIndex]?.document ? (
                            <img
                              src={ticketList[selectedTicketIndex]?.document}
                              alt="Attachment"
                              style={{ width: "100%", objectFit: "cover" }}
                            />
                          ) : null}
                        </div>
                      </div>
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
