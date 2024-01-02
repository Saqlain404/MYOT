import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
// import "assets/css/style.min.css"
import { Link, useNavigate } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import {
  DasboardCount,
  DocRequestCount,
  EmployeeDashList,
  PresentDocumentDash,
  searchDash,
  totalTicketCount,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";

const EmployeeDash = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [templateNames, setTemplateNames] = useState(null);
  const [documentRequests, setDocumentRequests] = useState([]);

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  const handleSearch = async () => {
    const result = await searchDash(searchData);
    // console.log(result)
    const searchResult = result?.data?.results?.document;

    if (searchResult && Array.isArray(searchResult)) {
      const mappedResult = searchResult?.map((document) => ({
        documentName: document?.templete?.templeteName,
        // assignedTo: [name?.templete_Id?.manager?.name],
        department: [
          document?.templete?.manager?.[0]?.department?.[0]?.departmentName,
        ],
        dateofSigning: [document?.createdAt],
        comments: (
          <img
            src="/images/dashboard/Comment.png"
            className="mx-auto d-block"
          />
        ),
        status: [document?.status],
        action: (
          <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
        ),
      }));
      setDocumentRequests(mappedResult);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchData]);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchData || searchData === "") {
        const names = await EmployeeDashList(ids);
        if (names) {
          setTemplateNames(names);
          // console.log(names)
        }

        const requests = names?.[0]?.map((name) => ({
          documentName: name?.templete_Id?.templeteName,
          // assignedTo: [name?.templete_Id?.manager?.name],
          department: [
            name?.templete_Id?.manager?.department_Id?.departmentName,
          ],
          dateofSigning: [name?.createdAt],
          comments: (
            <img
              src="/images/dashboard/Comment.png"
              className="mx-auto d-block"
            />
          ),
          status: [name?.status],
          action: (
            <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
          ),
        }));

        setDocumentRequests(requests);
      }
    };

    fetchData();
  }, [searchData]);

  // Dasboard Count API
  const [totalDocument, setTotalDocument] = useState(null);
  const [pendingDocument, setPendingDocument] = useState(null);

  useEffect(() => {
    const count = async () => {
      const dashbaordCountResult = await DasboardCount();
      if (!dashbaordCountResult?.error && dashbaordCountResult?.data) {
        const count = dashbaordCountResult?.data?.results.totalDocument;
        const receivedDocCount =
          dashbaordCountResult?.data?.results?.pendingDocument;
        // console.log(dashbaordCountResult);
        setTotalDocument(count);
        setPendingDocument(receivedDocCount);
      }
    };
    count();
  }, []);

  const [docCount, setDocCount] = useState();
  useEffect(() => {
    const presentDoc = async () => {
      const data = await PresentDocumentDash(ids);
      setDocCount(data?.[0]?.results);
      console.log(data?.[0]?.results);
    };
    presentDoc();
  }, []);

  const [ticketCount, setTotalTicket] = useState();
  useEffect(() => {
    const totalTicket = async () => {
      const data = await totalTicketCount(ids);
      setTotalTicket(data?.[0]?.results);
      console.log(data?.[0]?.results);
    };
    totalTicket();
  }, []);

  // Doc Request Count
  const [docRequestCount, setDocRequestCount] = useState();
  useEffect(() => {
    const requestCount = async () => {
      const data = await DocRequestCount();
      setDocRequestCount(data?.[0]?.document);
    };
    requestCount();
  }, []);
  console.log(docRequestCount);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Dashboard
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form class="" role="search">
                    <input
                      class="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => {
                        setSearchData(e.target.value);
                        //  handleSearch();
                      }}
                      value={searchData.searchTerm}
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Document</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {totalDocument !== null && totalDocument}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        +11.01%
                        <img
                          src="/images/dashboard/ArrowRise.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Pending Request
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {pendingDocument !== null && pendingDocument}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        -0.56%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Recently Documents
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {pendingDocument !== null && pendingDocument}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        -1.48%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Document Request
                      </h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {totalDocument !== null && totalDocument}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        +9.15%
                        <img
                          src="/images/dashboard/ArrowRise.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="dashboard-card bg-light ">
                    <div className="d-flex justify-content-around dashboard-card-text">
                      <p>Documents </p>
                      <p>Current Week </p>
                      <p>Previous Week</p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <img
                        src="/images/dashboard/circle-analytics.png"
                        alt=""
                        className="m-4"
                      />
                      <table className="ms-2 dashboard-card-text">
                        <tr>
                          <td
                            style={{ paddingRight: 70 }}
                            className="text-nowrap"
                          >
                            <img
                              src="/images/dashboard/active-dot.svg"
                              alt=""
                            />{" "}
                            Active
                          </td>
                          <td>{docCount?.completePresent}%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/under-review-dot.svg"
                              alt=""
                            />
                            Under Review
                          </td>
                          <td>{docCount?.pendingPresent}%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/approve-dot.svg"
                              alt=""
                            />
                            Approved
                          </td>
                          <td>{docCount?.approvedPresent}%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/rejected-dot.svg"
                              alt=""
                            />
                            Rejected
                          </td>
                          <td>{docCount?.rejectedPresent}%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 ">
                  <div className="dashboard-card2 ">
                    <p className="dashboard-card2-text">Open Tickets</p>
                    <p className="text-card  mb-3">
                      {ticketCount?.totalComplete} / {ticketCount?.totalTicket}
                    </p>
                    <p className=" mb-1 dashboard-card2-text">
                      Profile Completion
                    </p>

                    <div className="progress-bar">
                      <div className="progress-container">
                        <div
                          className="progress"
                          style={{ width: `${ticketCount?.completepresent}%` }}
                        ></div>
                        <span className="progress-label">{`${ticketCount?.completepresent}%`}</span>
                      </div>
                    </div>
                    <p className=" mb-1 dashboard-card2-text">Status</p>
                    <div className="progress-bar">
                      <div className="progress-container">
                        <div
                          className="progress"
                          style={{
                            width: `${ticketCount?.InprogressPresent}%`,
                          }}
                        ></div>
                        <span className="progress-label">{`In Progress / ${ticketCount?.InprogressPresent}%`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div
                    className="dashboard-card3 bg-light "
                    style={{ maxHeight: "400px", overflowY: "auto" }}
                  >
                    <p className="text-card">Document Request</p>
                    <div className="table-card3 dashboard-card3-text">
                      {docRequestCount?.map((doc) => (
                        <div className="pb-2 d-flex align-items-center justify-content-between">
                          <div className="doc-req-text">
                            {doc?._id?.[0]?.[0]?.[0]?.departmentName &&
                              doc._id[0][0][0].departmentName.split(" ")[0]}
                          </div>
                          <div
                            className="doc-req-bar"
                            style={{ width: `${doc?.count * 10}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text">
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Document Name
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Department
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Login
                      </th>
                      <th className="th-text">Status</th>
                      <th className="th-text">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentRequests?.map((document, index) => (
                      <tr key={index}>
                        <td className="td-text">
                          <input
                            className="form-check-input checkbox-table"
                            type="checkbox"
                            value=""
                          />

                          {document.documentName}
                        </td>
                        <td className="td-text">{document.department}</td>
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {document.dateofSigning}
                        </td>
                        <td className="td-text">{document.status}</td>
                        <td className="td-text">
                          <div class="">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {document.action}
                            </a>
                            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                              <li>
                                <a
                                  class="dropdown-item border-bottom"
                                  href="/Employee/view-details"
                                >
                                  <img
                                    src="/images/users/AddressBook.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  View Users Details
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                    src="/images/users/PencilLine.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Edit User Details
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  <img
                                    src="/images/dashboard/Comment.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  Comments
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                    src="/images/users/TextAlignLeft.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Wrap Column
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item text-danger" href="#">
                                  <img
                                    src="/images/users/Trash.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Delete Template
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col">
            <RightSidebar />
          </div>

          <div className="middle-section">
            <div className="body-wrapper">
              <div className="container-fluid">
                <div className="row d-flex flex-direction-row cards-row"></div>
                <div className="d-flex cardss"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDash;
