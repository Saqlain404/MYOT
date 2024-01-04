import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarAprv";
import SidebarAprv from "./SidebarAprv";
import {
  approverTempleteList,
  dashCount,
  searchTemplete,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";

const DashboardAprv = () => {
  const [searchData, setSearchData] = useState("");
  const [documentRequests, setDocumentRequests] = useState([]);

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  const handleSearch = async () => {
    const result = await searchTemplete(searchData, ids);
    const searchResult = result?.data?.results?.templete;
    console.log(searchResult);

    if (searchResult && Array.isArray(searchResult)) {
      const mappedResult = searchResult?.map((document) => ({
        documentName: document?.templeteName,
        img: [document?.manager?.[0]?.profile_Pic],
        version: document?.templeteVersion?.[0]?.version,
        assignedTo: [document?.manager?.[0]?.name],
        department: [document?.manager?.[0]?.department?.[0]?.departmentName],
        action: (
          <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
        ),
        dateofSigning: [document?.createdAt],
        comments: (
          <img
            src="/images/dashboard/Comment.png"
            className="mx-auto d-block"
          />
        ),
        status: [document?.status],
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
        const names = await approverTempleteList(ids);

        const requests = names?.map((name) => ({
          documentName: name?.templeteName,
          document_id: name?._id,
          version: name?.templeteVersion?.[0]?.version,
          assignedTo: [name?.manager?.name],
          img: [name?.manager?.profile_Pic],
          action: (
            <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
          ),
          department: [name?.manager?.department_Id?.departmentName],
          dateofSigning: [name?.createdAt],
          comments: (
            <img
              src="/images/dashboard/Comment.png"
              className="mx-auto d-block"
            />
          ),
          commentID: name?._id,
          status: [name?.status],
        }));

        setDocumentRequests(requests);
      }
    };
    // console.log(documentRequests);

    fetchData();
  }, [searchData]);

  const [countData, setCountData] = useState();

  const count = async () => {
    const data = await dashCount();
    setCountData(data);
  };

  useEffect(() => {
    count();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Users</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {countData?.totalUser}
                      </h3>
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
                        {countData?.totalTemplete}
                      </h3>
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
                        {countData?.totalDocument}
                      </h3>
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
                        {countData?.totalActiveUser}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-9 ">
                  <img
                    src="/images/dashboard/Block.svg"
                    alt=""
                    className="dashboard-graph"
                  />
                  {/* <div className="dashboard-card bg-light ">
                    <div className="d-flex justify-content-around dashboard-card-text">
                      <p>Templates </p>
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
                          <td style={{paddingRight: 70}} className="text-nowrap">
                            <img src="/images/dashboard/active-dot.svg" alt="" /> Active</td>
                          <td>38.6%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/under-review-dot.svg" alt="" />Under Review</td>
                          <td>22.5%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/approve-dot.svg" alt="" />Approved</td>
                          <td>30.8%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/rejected-dot.svg" alt="" />Rejected</td>
                          <td>8.1%</td>
                        </tr>
                      </table>
                    </div>
                  </div> */}
                </div>

                <div className="col-md-3 ">
                  <div className="dashboard-card3 bg-light ">
                    <p className="text-card">Document Request</p>
                    <table className="table-card3 dashboard-card3-text">
                      <tr className="pb-2">
                        <td
                          style={{ paddingRight: 40 }}
                          className="text-nowrap"
                        >
                          HR
                        </td>
                        <td>
                          <img src="/images/dashboard/HR.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>Finance</td>
                        <td>
                          <img src="/images/dashboard/Finance.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>R&D</td>
                        <td>
                          <img src="/images/dashboard/R&D.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>Transport</td>
                        <td>
                          <img src="/images/dashboard/Transport.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>IT</td>
                        <td>
                          <img src="/images/dashboard/IT.png" />
                        </td>
                      </tr>
                      <tr>
                        <td>Sales</td>
                        <td>
                          <img src="/images/dashboard/sales.png" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <p className="table-name mb-2 mt-4">Templates</p>
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
                  onChange={(e) => {
                    setSearchData(e.target.value);
                    //  handleSearch();
                  }}
                  value={searchData.searchTerm}
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
                        Creator
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
                        Date of Creation
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentRequests?.map((document) => (
                      <tr key={document.id}>
                        <td className="td-text">
                          <input
                            className="form-check-input checkbox-table me-4"
                            type="checkbox"
                            value=""
                          />
                          {document.documentName}
                        </td>
                        <td className="td-text">
                          <img className="img_profile" src={document.img} />
                          {document.assignedTo}
                        </td>
                        <td className="td-text">{document.department}</td>
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {moment(document.dateofSigning).calendar()}
                        </td>
                        <td
                          className={`td-text ${
                            document?.status == "Completed"
                              ? "text-success"
                              : document.status == "Pending"
                              ? "text-info"
                              : document.status == "Rejected"
                              ? "text-danger"
                              : "text-warning"
                          }`}
                        >
                          {document.status}
                        </td>
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

export default DashboardAprv;
