import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
// import "../../dist/css/style.min.css"

const ReceivedDocEmpl = () => {
  const tasks = [
    {
      id: 1,
      template: "Non-Objection Certificate",
      assignedTo: [
        <img src="/images/dashboard/avatar2.png" className="me-2" />,
        "Katherine Ross",
      ],
      dateofSigning: "2023-09-15",
      comments:<img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      status: 
        <p className="text-primary m-0">
          In Progress
        </p>,
      department: "Human Resources",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 2,
      template: "Expense Report",
      assignedTo: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "Eve Leroy",
      ],
      dateofSigning: "2023-09-15",
      comments:<img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Finance",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 3,
      template: "Salary Slip",
      assignedTo: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Drew Cano",
      ],
      dateofSigning: "2023-09-15",
      comments:<img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 4,
      template: "Research Proposal",assignedTo: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Andi Lane",
      ],
      dateofSigning: "2023-09-15",
      comments:<img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      status: <p className="text-success m-0"> Active</p>,
      department: "R&D",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    {
      id: 5,
      template: "Conference Attendance",
      assignedTo: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" />,
        "Natali Craig",
      ],
      dateofSigning: "2023-09-15",
      comments:<img src="/images/dashboard/Comment.png" className="mx-auto d-block"/>,
      status: <p className="text-secondary m-0">Rejected</p>,
      department: "Human Resources",
      action: <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"/>,
    },
    // Add more tasks here
  ];

  
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
                    Received Document & Retrieval Management
                    </a>
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

            <p className="table-name mb-2">Received Document & Retrieval Management</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3 border-end">
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
                    className="p-2 table-searchbar-img"
                  />
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around ">
                  <p className="m-0 text-nowrap">1 Selected</p>
                  <p className="hide-selected m-0 text-nowrap ">
                    Clear Selection
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
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Document name
                      </th>

                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Requestor's Name
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
                        Status
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task) => (
                      <tr key={task.id}>
                        <td className="td-text">{task.template}</td>
                        <td className="td-text">{task.assignedTo}</td>
                        <td className="td-text">{task.department}</td>
                        <td className="td-text"><img src="/images/dashboard/CalendarBlank.png" />{task.dateofSigning}</td>
                        <td className="td-text">{task.comments}</td>
                        <td className="td-text">{task.status}</td>
                        <td className="td-text"><div class="dropdown">
  <a type="" data-bs-toggle="dropdown" aria-expanded="false">
  {task.action}
  </a>
  <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
    <li ><a class="dropdown-item border-bottom" href="/Employee/received-doc/view-details"><img src="/images/users/AddressBook.svg" alt="" className="me-2"/>View Details</a></li>
    <li><a class="dropdown-item" href="#"><img src="/images/dashboard/Download-Button.png" alt="" className="me-2"/>Download</a></li>
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
                <ul className="pagination employe-pageination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      1
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      2
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      3
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="footer employ-footer">
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
        </div>
      </div>
    </>
  );
};

export default ReceivedDocEmpl;
