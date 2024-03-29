import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import {
  EmployeeNewTicket,
  EmployeeNewTicketList,
  EmployeeOngoingTicketList,
  EmployeeResolvedTicketList,
  EmployeeTicketList,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";
import moment from "moment";
import { Button } from "rsuite";
import Swal from "sweetalert2";

const HelpSupport = () => {
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState();
  const [ticketList, setTicketList] = useState();
  const [loader, setLoader] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getTicketList();
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('This Month');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    filterTickets(option); // Call filterTickets with the selected option
  };
  const getTicketList = async () => {
    let emp_id = localStorage.getItem("myot_admin_id");
    setId(emp_id);
    let { data } = await EmployeeTicketList(emp_id);
    console.log(data);
    if (!data?.error) {
      setTicketList(data?.results?.ticketList);
    }
  };

  const showOngoingTickets = async () => {
    let { data } = await EmployeeOngoingTicketList();
    if (!data?.error) {
      setTicketList(data?.results?.ticketList);
    }
  };
  const showNewTickets = async () => {
    let { data } = await EmployeeNewTicketList();
    console.log(data);
    if (!data?.error) {
      setTicketList(data?.results?.ticketList);
      console.log(data?.results);
    }
  };
  const showResolvedTickets = async () => {
    let { data } = await EmployeeResolvedTicketList();
    console.log(data);
    if (!data?.error) {
      setTicketList(data?.results?.ticketList);
    }
  };

  const handleFileSelection = async (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleAttachmentClick = (index) => {
    setSelectedTicketIndex(index);
  };
  const [filteredTickets, setFilteredTickets] = useState([]);

  const filterTickets = (option) => {
    const now = moment();
    let filteredList = [];

    if (ticketList) {  // Check if ticketList is defined
      switch (option) {
        case "This Week":
          filteredList = ticketList.filter(
            (ticket) =>
              moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("week")) &&
              moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("week"))
          );
          break;

        case "This Month":
          filteredList = ticketList.filter(
            (ticket) =>
              moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("month")) &&
              moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("month"))
          );
          break;

        case "This Year":
          filteredList = ticketList.filter(
            (ticket) =>
              moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("year")) &&
              moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("year"))
          );
          break;

        default:
          // No filter, display all tickets
          filteredList = ticketList;
          break;
      }
      filteredList = filteredList.filter((ticket) =>
      ticket.ticketType.toLowerCase().includes(searchInput.toLowerCase())
    );
    }

    setFilteredTickets(filteredList);
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
      getTicketList();
    }
  };
  useEffect(() => {
    filterTickets(selectedOption);
  }, [selectedOption, ticketList,searchInput]);
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
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
                      value={searchInput}
                      onChange={handleSearchInputChange}
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
                    <Link to={"/Admin/Help"} className="text-decoration-none">
                      <p className="th-text  me-3">Template Guidelines</p>
                    </Link>
                    <Link
                      to={"/Admin/Help/Help-Support"}
                      className="text-decoration-none"
                    >
                      <p className="td-text border-bottom me-3">
                        Help & Support
                      </p>
                    </Link>
                    <Link
                      to={"/Admin/Help/Contact-us"}
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
                    <div className="ms-auto"> {/* Add the ms-auto class here for right alignment */}
                      <Link className="text-decoration-none">
                        <button className="help-support-btn1 me-2" onClick={toggleDropdown}>
                          {selectedOption}
                          <img src="/images/dashboard/DownArrowBtn.svg" alt="" />
                        </button>
                      </Link>
                      {isDropdownOpen && (
                        <div className="dropdown-content">
                          <div onClick={() => handleOptionClick('This Week')}>This Week</div>
                          <div onClick={() => handleOptionClick('This Month')}>This Month</div>
                          <div onClick={() => handleOptionClick('This Year')}>This Year</div>
                        </div>
                      )}
                    </div>

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
                <div className="tickets">
                  <ul className="nav nav-tabs mb-5" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="ex1-tab-1"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected="true"
                        onClick={getTicketList}
                      >
                        All Tickets
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-2"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected="false"
                        onClick={showNewTickets}
                      >
                        New Tickets
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-3"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected="false"
                        onClick={showOngoingTickets}
                      >
                        Ongoing Tickets
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="ex1-tab-4"
                        data-bs-toggle="tab"
                        href="#ex1-tabs-4"
                        role="tab"
                        aria-controls="ex1-tabs-4"
                        aria-selected="false"
                        onClick={showResolvedTickets}
                      >
                        Resolved Tickets
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-tabs-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <div className="col-12">
                        {filteredTickets && filteredTickets.length > 0 ? (
                          filteredTickets.map((ticket, index) => (
                            <div className="rounded border bg-white mb-3 p-2">
                              <div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="/images/dashboard/orange-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="ticket-post-time text-end">
                                      {moment(ticket.createdAt).calendar()}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-start mt-3 ms-5">
                                  <p>{ticket?.ticketIssue}</p>
                                  {/* <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas veritatis,
                                    ratione officiis voluptate nostrum ipsum eos
                                    iste mollitia aliquid accusamus?
                                  </p> */}
                                </div>
                                <hr />
                              </div>

                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      borderRadius: "50%",
                                    }}
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar.png"
                                    }
                                    alt=""
                                    className="m-2 object-fit-cover"
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
                                  <a className="ticket-link mt-3 me-1 cursor_pointer" data-bs-toggle="modal"
                                    data-bs-target="#exampleModals"
                                    onClick={() => setSelectedTicket(ticket)} >
                                    Open Ticket
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3 className="my-5 text-black-50 th-text">
                            {`Yay! No Tickets ${selectedOption === 'This Week' ? 'This Week' : selectedOption}`}

                          </h3>
                        )}
                      </div>
                    </div>
                    <div class="modal fade" id="exampleModals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ticket Issue</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <p>{selectedTicket && selectedTicket.ticketIssue}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-2"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-2"
                    >
                      <div className="col-12">
                        {filteredTickets && filteredTickets.length > 0 ? (
                          filteredTickets.map((ticket, index) => (
                            <div className="rounded border bg-white mb-3 p-2">
                              <div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="/images/dashboard/orange-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="ticket-post-time text-end">
                                      {moment(ticket.createdAt).calendar()}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-start mt-3 ms-5">
                                  <p>{ticket?.ticketIssue}</p>
                                  {/* <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas veritatis,
                                    ratione officiis voluptate nostrum ipsum eos
                                    iste mollitia aliquid accusamus?
                                  </p> */}
                                </div>
                                <hr />
                              </div>

                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      borderRadius: "50%",
                                    }}
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar.png"
                                    }
                                    alt=""
                                    className="m-2 object-fit-cover"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1" data-bs-toggle="modal"
                                  data-bs-target="#exampleModals"
                                  onClick={() => setSelectedTicket(ticket)}>
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3 className="my-5 text-black-50 th-text">
                            {`Yay! No Tickets ${selectedOption === 'This Week' ? 'This Week' : selectedOption}`}

                          </h3>
                        )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-3"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-3"
                    >
                      <div className="col-12">
                        {filteredTickets && filteredTickets.length > 0 ? (
                          filteredTickets.map((ticket, index) => (
                            <div className="rounded border bg-white mb-3 p-2">
                              <div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="/images/dashboard/orange-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="ticket-post-time text-end">
                                      {moment(ticket.createdAt).calendar()}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-start mt-3 ms-5">
                                  <p>{ticket?.ticketIssue}</p>
                                  {/* <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas veritatis,
                                    ratione officiis voluptate nostrum ipsum eos
                                    iste mollitia aliquid accusamus?
                                  </p> */}
                                </div>
                                <hr />
                              </div>

                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      borderRadius: "50%",
                                    }}
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar.png"
                                    }
                                    alt=""
                                    className="m-2 object-fit-cover"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1" data-bs-toggle="modal"
                                  data-bs-target="#exampleModals"
                                  onClick={() => setSelectedTicket(ticket)}>
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3 className="my-5 text-black-50 th-text">
                            {`Yay! No Tickets ${selectedOption === 'This Week' ? 'This Week' : selectedOption}`}

                          </h3>
                        )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="ex1-tabs-4"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-4"
                    >
                      <div className="col-12">
                        {ticketList && ticketList?.length > 0 ? (
                          ticketList?.map((ticket) => (
                            <div className="rounded border bg-white mb-3 p-2">
                              <div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    <img
                                      src="/images/dashboard/orange-ticket-ball.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    <p className="ticket-number m-1">
                                      {ticket?.ticketType}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="ticket-post-time text-end">
                                      {moment(ticket.createdAt).calendar()}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-start mt-3 ms-5">
                                  <p>{ticket?.ticketIssue}</p>
                                  {/* <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptas veritatis,
                                    ratione officiis voluptate nostrum ipsum eos
                                    iste mollitia aliquid accusamus?
                                  </p> */}
                                </div>
                                <hr />
                              </div>

                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <img
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      borderRadius: "50%",
                                    }}
                                    src={
                                      ticket?.creator_Id?.profile_Pic
                                        ? ticket?.creator_Id?.profile_Pic
                                        : "/images/dashboard/Avatar.png"
                                    }
                                    alt=""
                                    className="m-2 object-fit-cover"
                                  />
                                  <p className="th-text m-auto text-capitalize">
                                    {ticket?.creator_Id?.name}
                                  </p>
                                </div>
                                <a className="ticket-link mt-3 me-1" data-bs-toggle="modal"
                                  data-bs-target="#exampleModals"
                                  onClick={() => setSelectedTicket(ticket)}>
                                  Open Ticket
                                </a>
                              </div>
                            </div>
                          ))
                        ) : (
                          <h3 className="my-5 text-black-50 th-text">
                            {`Yay! No Tickets ${selectedOption === 'This Week' ? 'This Week' : selectedOption}`}

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
      </div>
    </>
  );
};

export default HelpSupport;
