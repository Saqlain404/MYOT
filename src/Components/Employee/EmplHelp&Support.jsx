import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import {
  CreateEmplyTicket,
  NewTicketEmply,
  OnGoingListEmply,
  ResolveListEmpl,
  TicketListEmply,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import { ToastContainer } from "react-toastify";
import moment from "moment";
import { Button } from "rsuite";

const EmplHelpSupport = () => {
  const [ticketList, setTicketList] = useState();
  const [id, setId] = useState();
  const [selectedDropdown, setSelectedDropdown] = useState("All");
  const [requestType, setRequestType] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);

  const ids = localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id")

  // Add Ticket
  // const [contactData, setContactData] = useState({
  //   email: "",
  //   ticketType: "",
  //   ticketIssue: "",
  // });
 

  const handleFileSelection = async (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleAttachmentClick = (index) => {
    setSelectedTicketIndex(index);
    console.log(ticketList);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let id = localStorage.getItem("myot_admin_id");
    let formData = new FormData();
    // formData.append("email", email);
    formData.append("ticketType", requestType);
    formData.append("ticketIssue", message);
    formData.append("creator_Id", id);
    formData.append("document", files?.attachment);

    const response = await CreateEmplyTicket(formData);
    if (!response?.error) {
      event.target.reset()
      setRequestType("");
      setFiles([]);
      setMessage("");
      // document.getElementById("resetForm").click();
      // document.getElementById("closeTicketModal").click();
      AllData();
    }
  };


  const OnGoingList = async () => {
    let data = await OnGoingListEmply(ids);
    data?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    console.log(data);
    if (!data?.error) {
      setTicketList(data);
    }
  };
  const resolveList = async () => {
    let data = await ResolveListEmpl(ids);
    data?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    console.log(data);
    if (!data?.error) {
      setTicketList(data);
    }
  };
  const NewTickets = async () => {
    let data = await NewTicketEmply(ids);
    data?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    console.log(data);
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
    let emp_id =  localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
    setId(emp_id);
    const getData = await TicketListEmply(emp_id);
    getData[0]?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    setTicketList(getData);
    console.log(getData[0])
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
            <SideBarEmpl />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold ms-2">
                      Help / Help & Support
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
                      to={"/Employee/Help&Support"}
                      className="text-decoration-none"
                    >
                      <p className="td-text border-bottom me-3">
                        Help & Support
                      </p>
                    </Link>
                    <Link
                      to={"/Employee/Contact"}
                      className="text-decoration-none"
                    >
                      <p className="th-text">Contact Us</p>
                    </Link>
                  </div>
                  <div className="d-flex">
                    {/* <div class="dropdown"> */}
                      {/* <a
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
                      </a> */}
                      {/* <ul class="dropdown-menu border-0 shadow mt-3  rounded">
                        <li> */}
                          {/* <div
                            className="d-flex whitespace-nowrap"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          > */}
                          {/* <a
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
                          </a> */}
                          {/* </div> */}
                        {/* </li> */}
                        {/* <li>
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
                        </li> */}

                        {/* <li>
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
                      </ul> */}
                    {/* </div> */}
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
                                {/* <div className="col-6 pe-3">
                                  <input
                                    type="text"
                                    placeholder="Email *"
                                    className="col-12 modal-input td-text  p-2"
                                    name="email"
                                    value={contactData.email}
                                    onChange={handleInput}
                                  />
                                </div> */}
                                <div className="col-12 ps-2">
                                  <p
                                    className="d-flex ms-1"
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
                              <p className="d-flex ms-2" id="exampleModalLabel">
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
                                <p className="d-flex ms-2 mb-1">Attachment ( if Any )</p>
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
                            {/* <ToastContainer /> */}
                            <div className="d-flex justify-content-end mb-3">
                              <Button
                                style={{ width: "100px" }}
                                appearance="primary"
                                type="submit"
                                // class="user-modal-btn"
                                className="btn mb-3 me-2 rounded-2"
                                data-bs-dismiss="modal"
                                disabled={!requestType || !message}
                              >
                                Send
                              </Button>
                              <Button
                                style={{ width: "100px" }}
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                // class="user-modal-btn2"
                                // appearance="primary"
                                className="btn mb-3 me-2 rounded-2"
                              >
                                Cancel
                              </Button>
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

                <p className="help-support-heading mt-3">Get in Touch</p>
                <p className="help-support-text mb-2">
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
                  {ticketList?.[0] && ticketList?.[0]?.length
                    ? 
                    ticketList?.[0]?.map((ticket,index) => (
                        <div
                          className="col rounded border bg-white mb-3 p-2"
                          key={ticket._id}
                        >
                          <div className="d-flex border-bottom d-flex justify-content-between">
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
                                ) : ticket.status === "Completed"?(
                                  <img
                                  src="/images/dashboard/green-ticket-ball.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                ): null}
                                <p className="ticket-number m-1">
                                  {ticket.ticketType}
                                </p>
                              </div>
                              <div className=" mt-1">
                                <p className="ticket-question mb-2 ms-5">
                                  {ticket.ticketIssue}
                                </p>
                                {/* <p className="td-text mt-0">
                                  Impressive! Though it seems the drag feature
                                  could be improved. But overall it looks
                                  incredible. You’ve nailed the design and the
                                  responsiveness at various breakpoints works
                                  really well.
                                </p> */}
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
                              <p className="th-text m-auto text-capitalize">
                                {ticket.creator_Id.name}
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                            {ticket?.document && (
                              <a
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                className="ticket-link mt-3 mx-2 cursor_pointer"
                                onClick={() => handleAttachmentClick(index)}
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
                      )) : <p className="fs-5">Yay! no tickets</p>}
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
                        <p className="fs-6">Attachment</p>
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
                          ticketList[0]?.[selectedTicketIndex]?.document ? (
                            <img
                              src={
                                ticketList[0]?.[selectedTicketIndex]?.document
                              }
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

export default EmplHelpSupport;
