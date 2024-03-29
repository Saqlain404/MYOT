import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarSig";
import SidebarSig from "./SidebarSig";
import Siging from "./HistoryListings/Siging";
import DocsAccess from "./HistoryListings/DocsAccess";

const HistoryLogSig = () => {
  const [topTitle, setTopTitle] = useState("Signing");
  const [admin_id, setAdminId] = useState();

  useEffect(() => {
    let id = localStorage.getItem("myot_admin_id");
    setAdminId(id);
  }, []);

  console.log("admin_id", admin_id);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                  <a className="nav-link fw-bold"> History / {topTitle}</a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form class="" role="search">
                    <input
                      class="form-control search-bar"
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

            {/* <div className="d-flex">
              <Link
                to={"/Signatory/History-log-sig"}
                className="text-decoration-none"
              >
                <p className="td-text border-bottom me-3">Signing</p>
              </Link>
              <Link
                to={"/Signatory/History-log-doc"}
                className="text-decoration-none"
              >
                <p className="th-text">Document Access Log</p>
              </Link>
            </div> */}

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
                  onClick={() => setTopTitle("Signing")}
                >
                  Signing
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
                  onClick={() => setTopTitle("Document Access Log")}
                >
                  Document Access Log
                </a>
              </li>
            </ul>
            <div class="tab-content" id="ex1-content">
              <div
                class="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <Siging admin_id={admin_id} />
              </div>
              <div
                class="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <DocsAccess admin_id={admin_id} />
                {/* <div className=" col-12 d-flex align-items-center table-searchbar">
                  <div className="row d-flex  col ">
                    <div className="col-md-3 table-searchbar-imgs">
                      <img
                        src="/images/dashboard/FunnelSimple.png"
                        alt=""
                        className="p-2 table-searchbar-img"
                      />
                      <img
                        src="/images/dashboard/ArrowsDownUp.png"
                        alt=""
                        className="p-2 table-searchbar-img"
                      />
                      <img
                        src="/images/dashboard/DotsThreeOutlineVertical2.png"
                        alt=""
                        className="p-2 table-searchbar-img border-end"
                      />
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-around table-searchbar-txt">
                      <p className="m-0 text-nowrap">2 Selected</p>
                      <p className="hide-selected m-0 text-nowrap ">
                        Clear Selection
                      </p>
                    </div>
                  </div>
                  <form className="d-flex me-2" role="search">
                    <input
                      className="form-control table-search-bar"
                      type="search"
                      placeholder="Type Something!"
                      aria-label="Search"
                    />
                  </form>
                </div>

                <div className="col-12 table_comman mt-3 mb-4">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr className="th-text">
                          <th className="th-text ">
                            <input
                              className="form-check-input checkbox-table"
                              type="checkbox"
                              value=""
                            />
                            Template Name
                          </th>
                          <th className="th-text">
                            <input
                              className="form-check-input checkbox-table"
                              type="checkbox"
                              value=""
                            />
                            Requester's Name
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
                            Date of Signing
                          </th>
                          <th className="th-text">
                            <input
                              className="form-check-input checkbox-table"
                              type="checkbox"
                              value=""
                            />
                            Comments
                          </th>
                          <th className="th-text">
                            <input
                              className="form-check-input checkbox-table"
                              type="checkbox"
                              value=""
                            />
                            Version
                          </th>
                          <th className="th-text">
                            <input
                              className="form-check-input checkbox-table"
                              type="checkbox"
                              value=""
                            />
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {documents.map((document) => (
                          <tr key={document.id}>
                            <td className="td-text">
                              <input
                                className="form-check-input checkbox-table me-4"
                                type="checkbox"
                                value=""
                              />
                              {document.documentName}
                            </td>
                            <td className="td-text">{document.creator}</td>
                            <td className="td-text">{document.department}</td>
                            <td className="td-text">
                              <img src="/images/dashboard/CalendarBlank.png" />
                              {document.dateOfSigning}
                            </td>
                            <td className="td-text">{document.comments}</td>
                            <td className="td-text">{document.version}</td>
                            <td className="td-text">
                              <div class="dropdown">
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
                                      href="#"
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
                                    <a
                                      class="dropdown-item border-bottom"
                                      href="#"
                                    >
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
                                    <a
                                      class="dropdown-item border-bottom"
                                      href="#"
                                    >
                                      <img
                                        src="/images/users/TextAlignLeft.svg"
                                        alt=""
                                        className="me-2"
                                      />
                                      Wrap Column
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item text-danger"
                                      href="#"
                                    >
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
                  <nav
                    aria-label="Page navigation"
                    className="d-flex justify-content-end page-navigation mt-3"
                  >
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <button className="page-link" href="#">
                          1
                        </button>
                      </li>
                      <li className="page-item">
                        <button className="page-link" href="#">
                          2
                        </button>
                      </li>
                      <li className="page-item">
                        <button className="page-link" href="#">
                          3
                        </button>
                      </li>
                      <li className="page-item">
                        <button
                          className="page-link"
                          href="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div> */}
              </div>
            </div>

            <div className="footer mt-4">
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

export default HistoryLogSig;
