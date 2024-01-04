import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarSig";
import SidebarSig from "./SidebarSig";
import {
  SignatoryDashboardCount,
  SignatoryProfileCompletion,
} from "../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { DashboardTotalDocument } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import CommonListing from "./CommonListAwaiting/CommonListing";

const DashboardSig = () => {
  const [count, setCount] = useState([]);
  const [totalDocument, setTotalDocument] = useState([]);
  const [profileCompleteData, setProfileCompleteData] = useState([]);

  useEffect(() => {
    getTotalCount();
    getDashboardTotalDocument();
    getProfileCompletion();
  }, []);

  const getProfileCompletion = async () => {
    let id = localStorage.getItem("myot_admin_id");

    let { data } = await SignatoryProfileCompletion(id);
    if (!data?.error) {
      setProfileCompleteData(data?.results);
    }
  };

  const getTotalCount = async () => {
    try {
      let { data } = await SignatoryDashboardCount();
      if (!data?.error) {
        setCount(data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDashboardTotalDocument = async () => {
    try {
      let { data } = await DashboardTotalDocument();
      console.log(data);
      if (!data?.error) {
        setTotalDocument(data?.results?.document);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Users</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {count?.totalUser || 0}
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
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {count?.totalTemplete || 0}
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
                        Documents Generated
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {count?.totalDocument || 0}
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
                      <h6 className="mb-0 header-card-text">Active Users</h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {count?.totalActiveUser &&
                          count?.totalActiveUser[0]?.count}
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
                  <div className="dashboard-card3 bg-light table-card3 dashboard-card3-text">
                    <p className="text-card">Document Request</p>

                    {totalDocument &&
                      totalDocument.map((count) => (
                        <>
                          <div className="row">
                            {/* <div className="my-1 col-6"> */}
                            <span className="col-6">
                              {
                                count?._id
                                  .flat(Infinity)[0]
                                  ?.departmentName.split(" ")[0]
                              }
                            </span>
                            <span className="fw-bold col-6">
                              <progress
                                className="w-100 custom-progress"
                                id="file"
                                value={count?.count * 10}
                                max="100"
                              />
                            </span>
                            {/* </div> */}
                          </div>
                        </>
                      ))}
                  </div>
                </div>

                <div className="col-md-6 mb-md-2 ">
                  <div className="dashboard-card2 bg-danger-subtle">
                    <div>
                      <p className="dashboard-card2-text">Open Tickets</p>
                      <p className="text-card  mb-3">
                        {`${profileCompleteData?.totalComplete} / ${profileCompleteData?.totalTicket}`}{" "}
                      </p>
                    </div>
                    <div>
                      <p className=" mb-1 dashboard-card2-text">
                        Completed
                      </p>
                      <progress
                        className="w-100 custom-progress2"
                        id="file"
                        // value={50}
                        value={profileCompleteData?.completepresent}
                        max="100"
                      />
                    </div>

                    <div>
                      <p className=" mb-1 dashboard-card2-text">Pending</p>
                      <progress
                        className="w-100 custom-progress2"
                        id="file"
                        // value={50}
                        value={profileCompleteData?.InprogressPresent}
                        max="100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CommonListing />

            {/* <p className="table-name mb-2 mt-4">Templates</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3 table-searchbar-imgs">
                  <img
                    src="/images/dashboard/Plus-icon.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  />
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
                    Hide Selected
                  </p>
                </div>
              </div>
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control table-search-bar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
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
                        Assigned to
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
                        Date
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Status
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
                          {document.templateName}
                        </td>
                        <td className="td-text">{document.assignedTo}</td>
                        <td className="td-text">{document.version}</td>

                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {document.date}
                        </td>
                        <td className="td-text">{document.status}</td>
                        <td className="td-text">{document.department}</td>
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
                                <a class="dropdown-item border-bottom" href="#">
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
                    <button className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div> */}
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

export default DashboardSig;
