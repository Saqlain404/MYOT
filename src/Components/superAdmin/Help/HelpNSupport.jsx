import MainSidebar from "../sidebar";
import { Link } from "react-router-dom";
import { SuperAdminTicketList } from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
const HelpNSupport = () => {
  const [ticketList, setticketList] = useState([]);
  const [ongoing, setongoing] = useState([])
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
  const [newTicket, setnewTicket] = useState([])
  const [resolve, setresolve] = useState([])
  const [searchInput, setSearchInput] = useState("");
  const [selectedTicket, setSelectedTicket] = useState("");
  const [selectedTickets, setSelectedTickets] = useState("");
  

  const handleAttachmentClick = (index) => {
    setSelectedTicketIndex(index);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('This Month');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const authToken = localStorage.getItem('token-main-admin');
  const headers = {
    'x-auth-token-admin': authToken,
  };

  const SuperAdminTicketList = async () => {
    try {
      if (!authToken) {
        console.warn('Authentication token not found');
      }
      const response = await axios.get(`${process.env.REACT_APP_APIENDPOINT}/api/admin/all-tickets-list`, {
        headers,
      });

      const ticketData = response.data.results.ticketList;
      setticketList(ticketData)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const SuperAdminOngoingTicketList = async () => {
    try {
      if (!authToken) {
        console.warn('Authentication token not found');
      }
      const response = await axios.get(`${process.env.REACT_APP_APIENDPOINT}/api/admin/on-going-ticket`, {
        headers,
      });

      const ticketData = response.data.results.ticketList;
      setongoing(ticketData)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  const SuperAdminNewTicketList = async () => {
    try {
      if (!authToken) {
        console.warn('Authentication token not found');
      }
      const response = await axios.get(`${process.env.REACT_APP_APIENDPOINT}/api/admin/new-tickets`, {
        headers,
      });

      const ticketData = response.data.results.ticketList;
      setnewTicket(ticketData)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const SuperAdminResolveTicketList = async () => {
    try {
      const authToken = localStorage.getItem('token-main-admin');
      if (!authToken) {
        console.warn('Authentication token not found');
      }
      const headers = {
        'x-auth-token-admin': authToken,
      };

      const response = await axios.get(`${process.env.REACT_APP_APIENDPOINT}/api/admin/solve-ticktes`, {
        headers,
      });

      const ticketData = response.data.results.ticketList;
      setresolve(ticketData)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  const [filteredTickets, setFilteredTickets] = useState([]);

  const filterTickets = (option) => {
    const now = moment();
    let filteredList = [];

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

    setFilteredTickets(filteredList);
  };
  const filterOngoingTickets = (option) => {
    const now = moment();
    let filteredList = [];

    switch (option) {
      case "This Week":
        filteredList = ongoing.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("week")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("week"))
        );
        break;

      case "This Month":
        filteredList = ongoing.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("month")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("month"))
        );
        break;

      case "This Year":
        filteredList = ongoing.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("year")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("year"))
        );
        break;

      default:
        // No filter, display all ongoing tickets
        filteredList = ongoing;
        break;
    }

    setFilteredOngoingTickets(filteredList);
  };

  // Function to filter new tickets based on option
  const filterNewTickets = (option) => {
    const now = moment();
    let filteredList = [];

    switch (option) {
      case "This Week":
        filteredList = newTicket.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("week")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("week"))
        );
        break;

      case "This Month":
        filteredList = newTicket.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("month")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("month"))
        );
        break;

      case "This Year":
        filteredList = newTicket.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("year")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("year"))
        );
        break;

      default:
        // No filter, display all new tickets
        filteredList = newTicket;
        break;
    }

    setFilteredNewTickets(filteredList);
  };

  // Function to filter resolved tickets based on option
  const filterResolveTickets = (option) => {
    const now = moment();
    let filteredList = [];

    switch (option) {
      case "This Week":
        filteredList = resolve.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("week")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("week"))
        );
        break;

      case "This Month":
        filteredList = resolve.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("month")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("month"))
        );
        break;

      case "This Year":
        filteredList = resolve.filter(
          (ticket) =>
            moment(ticket.createdAt).isSameOrAfter(now.clone().startOf("year")) &&
            moment(ticket.createdAt).isSameOrBefore(now.clone().endOf("year"))
        );
        break;

      default:
        // No filter, display all resolved tickets
        filteredList = resolve;
        break;
    }
    filteredList = filteredList.filter((ticket) =>
      ticket.ticketType.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredResolveTickets(filteredList);
  };

  // State for filtered ongoing, newTicket, and resolve tickets
  const [filteredOngoingTickets, setFilteredOngoingTickets] = useState([]);
  const [filteredNewTickets, setFilteredNewTickets] = useState([]);
  const [filteredResolveTickets, setFilteredResolveTickets] = useState([]);
  useEffect(() => {
    // Apply search filter to the ticketList
    const filteredTickets = ticketList.filter((ticket) =>
      ticket.ticketType.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredTickets(filteredTickets);
  }, [selectedOption, ticketList, searchInput]);
  useEffect(() => {
    const filteredOngoingTickets = ongoing.filter((ticket) =>
      ticket.ticketType.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredOngoingTickets(filteredOngoingTickets);
  }, [selectedOption, ongoing, searchInput]);

  useEffect(() => {
    const filteredNewTickets = newTicket.filter((ticket) =>
      ticket.ticketType.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredNewTickets(filteredNewTickets);
  }, [selectedOption, newTicket, searchInput]);
  useEffect(() => {
    filterOngoingTickets(selectedOption);
  }, [selectedOption, ongoing]);

  useEffect(() => {
    filterNewTickets(selectedOption);
  }, [selectedOption, newTicket]);

  useEffect(() => {
    filterResolveTickets(selectedOption);
  }, [selectedOption, resolve]);
  useEffect(() => {
    filterTickets(selectedOption);
  }, [selectedOption, ticketList]);
  useEffect(() => {
    const filteredResolveTickets = resolve.filter((ticket) =>
      ticket.ticketType.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredResolveTickets(filteredResolveTickets);
  }, [selectedOption, resolve, searchInput]);
  useEffect(() => {
    SuperAdminTicketList();
    SuperAdminOngoingTicketList();
    SuperAdminNewTicketList();
    SuperAdminResolveTicketList();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <MainSidebar />
          </div>
          <div className="col middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold">Help & Support</a>
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
                >
                  New Tickets
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
                >
                  On Going
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
                >
                  Resolved
                </a>
              </li>
              <div className="ms-auto"> {/* Add the ms-auto class here for right alignment */}
                <Link className="text-decoration-none">
                  <button className="help-support-btn1 me-2" onClick={toggleDropdown}>
                    {selectedOption}
                    <img src="/images/dashboard/DownArrowBtn.svg" alt="" />
                  </button>
                </Link>
                {isDropdownOpen && (
                  <div className="dropdown-content z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li className="hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => handleOptionClick('This Week')}>This Week</li>
                      <li className="hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => handleOptionClick('This Month')}>This Month</li>
                      <li className="hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => handleOptionClick('This Year')}>This Year</li>
                    </ul>
                  </div>
                )}
              </div>

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
                            <p>{ticket?.ticketType}</p>
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
                              {ticket?.creator_Id[0]?.name}
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
                            <a className="ticket-link mt-3 me-1 cursor_pointer" data-bs-toggle="modal" onClick={() => setSelectedTicket(ticket)} data-bs-target="#exampleModal">
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
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Ticket Issue</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p>{selectedTicket && selectedTicket?.ticketType}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="modal fade" id="exampleModalss" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Ticket Status</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p>{selectedTickets && selectedTickets?.ticketType}</p>
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
                  {filteredNewTickets && filteredNewTickets.length > 0 ? (
                    filteredNewTickets.map((ticket) => (
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
                            <p>{ticket?.ticketType}</p>
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
                              {ticket?.creator_Id[0]?.name}
                            </p>
                          </div>
                          <a className="ticket-link mt-3 me-1" data-bs-toggle="modal" onClick={() => setSelectedTicket(ticket)} data-bs-target="#exampleModal">
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
                  {filteredOngoingTickets && filteredOngoingTickets.length > 0 ? (
                    filteredOngoingTickets.map((ticket) => (
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
                            <p>{ticket?.ticketType}</p>
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
                              {ticket?.creator_Id[0]?.name}
                            </p>
                          </div>
                          <a className="ticket-link mt-3 me-1" data-bs-toggle="modal" onClick={() => setSelectedTicket(ticket)} data-bs-target="#exampleModal">
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
                  {filteredResolveTickets && filteredResolveTickets.length > 0 ? (
                    filteredResolveTickets.map((ticket) => (
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
                            <p>{ticket?.ticketType}</p>
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
                          <a className="ticket-link mt-3 me-1" data-bs-toggle="modal" onClick={() => setSelectedTicket(ticket)} data-bs-target="#exampleModal">
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
    </>
  );
};

export default HelpNSupport;
