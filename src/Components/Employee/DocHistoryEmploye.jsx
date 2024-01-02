import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import {
  EmployeeDashList,
  searchDash,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import moment from "moment";

const DocHistoryEmploye = () => {
  // const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [templateNames, setTemplateNames] = useState(null);
  const [documentRequests, setDocumentRequests] = useState([]);

  const handleSearch = async () => {
    const result = await searchDash(searchData);
    console.log(result);
    const searchResult = result?.data?.results?.document;

    if (searchResult && Array.isArray(searchResult)) {
      const mappedResult = searchResult?.map((document) => ({
        documentName: document?.templete?.templeteName,
        img: [document?.templete?.manager?.[0]?.profile_Pic],
        assignTo: [document?.templete?.manager?.[0]?.name],
        department: [
          document?.templete?.manager?.[0]?.department?.[0]?.departmentName,
        ],
        createdAt: [document?.createdAt],
        comments: (
          <img
            src="/images/dashboard/Comment.png"
            className="mx-auto d-block"
          />
        ),
        // status:[document?.status],
        version: "0.1",
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
        const names = await EmployeeDashList();
        if (names) {
          setTemplateNames(names);
          // console.log(names)
        }

        const requests = names?.[0]?.map((name) => ({
          documentName: name?.templete_Id?.templeteName,
          assignTo: [name?.templete_Id?.manager?.name],
          img: [name?.templete_Id?.manager?.profile_Pic],
          department: [
            name?.templete_Id?.manager?.department_Id?.departmentName,
          ],
          createdAt: [name?.createdAt],
          comments: (
            <img
              src="/images/dashboard/Comment.png"
              className="mx-auto d-block"
            />
          ),
          // status:[name?.status],
          version: "0.1",
          action: (
            <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
          ),
        }));

        setDocumentRequests(requests);
      }
    };

    fetchData();
  }, [searchData]);

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
                      History Log / Document Access Log
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

            <div className="d-flex">
              <Link
                to={"/Employee/history-log-request"}
                className="text-decoration-none"
              >
                <p className="th-text me-3">Request History</p>
              </Link>
              <Link
                to={"/Employee/history-log-access"}
                className="text-decoration-none"
              >
                <p className="td-text border-bottom ">Document Access Log</p>
              </Link>
            </div>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3 border-end">
                  {/* <img
                    src="/images/dashboard/Plus-icon.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  /> */}
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
                    className="p-2 table-searchbar-img"
                  />
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around ">
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
                  onChange={(e) => {
                    setSearchData(e.target.value);
                    //  handleSearch();
                  }}
                  value={searchData.searchTerm}
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
                        Document Name
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
                        Login
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        IP Address{" "}
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
                    {documentRequests?.map((document) => (
                      <tr key={document._id}>
                        <td className="td-text">
                          <input
                            className="form-check-input checkbox-table me-4"
                            type="checkbox"
                            value=""
                          />
                          {document.documentName}
                        </td>
                        <td className="td-text">
                          <img
                            className="img_profile"
                            alt="profile-pic"
                            src={document.img}
                          />
                          {document.assignTo}
                        </td>
                        <td className="td-text">{document.department}</td>
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {moment(document.createdAt).calendar()}
                        </td>
                        <td className="td-text">{document.IP}</td>
                        <td className="td-text">{document.version}</td>
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
                                  IP{" "}
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

export default DocHistoryEmploye;
