import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarSig";
import SidebarSig from "./SidebarSig";

const HistoryLogSig = () => {
  const documents = [
    {
      id: 1,
      documentName: "Salary Slip",
      creator: [
        <img src="/images/dashboard/avatar3.png" className="me-2" />,
        "Eve Leroy",
      ],
      department: "Human Resources",
      dateOfSigning: "2023-09-16",
      comments: <img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      version: "0.1",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 2,
      documentName: "Promotion Letter",
      creator: [
        <img src="/images/dashboard/avatar2.png" className="me-2" />,
        "Lana Steiner",
      ],
      department: "Sales & Marketing",
      dateOfSigning: "2023-09-16",
      comments: <img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      version: "0.1",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 3,
      documentName: "Training Certificate",
      creator: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "ByeWind",
      ],
      department: "Training & Development",
      dateOfSigning: "2023-09-16",
        comments: <img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
version: "0.1",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 4,
      documentName: "Salary Slip",
      creator: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfSigning: "2023-09-16",
        comments:<img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
version: "0.1",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 5,
      documentName: "Client Contract",
      creator: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "Natali Craig",
      ],
      department: "Training & Development",
      dateOfSigning: "2023-09-16",
        comments: <img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
        version: "0.1",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    
    // Add more tasks here
  ];

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
                    History Log / Approved
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

            <div className="d-flex">
              <Link to={"/Signatory/History-log-sig"} className="text-decoration-none">
              <p className="td-text border-bottom me-3">Signing</p>
              </Link>
              <Link to={"/signatory/History-log-doc"} className="text-decoration-none">
              <p className="th-text">Document Access Log</p>
              </Link>
            </div>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3 table-searchbar-imgs">
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
                    Comments</th>
                    <th className="th-text">
                  <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Version</th>
                  <th className="th-text">
                  <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    Action</th>
                </tr>
              </thead>
              <tbody >
                {documents.map((document) => (
                  <tr
                    key={document.id}
                    
                  >
                    <td className="td-text">
                      <input
                        className="form-check-input checkbox-table me-4"
                        type="checkbox"
                        value=""
                      />
                      {document.documentName}
                    </td>
                    <td className="td-text">
                      {document.creator}
                    </td>
                    <td className="td-text">
                      {document.department}
                    </td>
                    <td className="td-text">
                      <img src="/images/dashboard/CalendarBlank.png" />
                      {document.dateOfSigning}
                    </td>
                    <td className="td-text">{document.comments}</td>
                    <td className="td-text">{document.version}</td>
                    <td className="td-text"><div class="dropdown">
  <a type="" data-bs-toggle="dropdown" aria-expanded="false">
  {document.action}
  </a>
  <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
    <li ><a class="dropdown-item border-bottom" href="#"><img src="/images/users/AddressBook.svg" alt="" className="me-2"/>View Users Details</a></li>
    <li><a class="dropdown-item border-bottom" href="#"><img src="/images/users/PencilLine.svg" alt="" className="me-2"/>Edit User Details</a></li>
    <li><a class="dropdown-item" href="#"><img src="/images/dashboard/Comment.png" alt="" className="me-2"/>Comments</a></li>
    <li><a class="dropdown-item border-bottom" href="#"><img src="/images/users/TextAlignLeft.svg" alt="" className="me-2"/>Wrap Column</a></li>
    <li><a class="dropdown-item text-danger" href="#"><img src="/images/users/Trash.svg" alt="" className="me-2"/>Delete Template</a></li>
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
              <div>
              © 2023 MYOT
              </div>
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
