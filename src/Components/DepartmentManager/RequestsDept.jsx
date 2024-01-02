import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import { RequestsList } from "../../ApiServices/departmentHttpService/departmentHttpService";
import { useEffect } from "react";

const RequestsDept = () => {
  const documents = [
    {
      id: 1,
      document: "Employment Contract",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        
      ],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block"  alt=""/>
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"  alt=""/>
      ),
    },
    {
      id: 2,
      document: "Tax Deduction at Source (TDS)",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        
      ],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block"  alt=""/>
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"  alt=""/>
      ),
    },
    {
      id: 3,
      document: "Training Certificates",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        
      ],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-success m-0">Complete</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block"  alt=""/>
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"  alt=""/>
      ),
    },
    {
      id: 4,
      document: "Software Licenses",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        
      ],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Information Technologies",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block"  alt=""/>
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"  alt=""/>
      ),
    },
    {
      id: 5,
      document: "Reference Letter",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2"  alt=""/>,
        
      ],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2"  alt=""/>,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block"  alt=""/>
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"  alt=""/>
      ),
    },
   
    // Add more tasks here
  ];

  const [listItems, setListItems] = useState([]);

  const getRequestsLists = async (key) => {
    const { data } = await RequestsList ({search: key});
    if (!data?.error) {
      setListItems(data?.results?.list);
    }
  };
  console.log(listItems);

  useEffect(() => {
    getRequestsLists()
  }, [])
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Requests
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
                    <Link to={"/Department/Chat"}>
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
            <p className="table-name mb-2">Document Request</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3  table-searchbar-imgs">
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
                      <th className="th-text">
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
                       Requester Name
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
                       Comment
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
                    {listItems.map((requests) => (
                      <tr key={requests._id}>
                        <td className="td-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />{requests?.templete_Id?.templeteName}</td>
                        <td className="td-text"><img src={requests?.templete_Id?.manager?.profile_Pic} alt="" className="list-profile-pic" />{requests?.templete_Id?.manager?.name}</td>
                        <td className="td-text"> <img src="/images/dashboard/CalendarBlank.png" alt=""/>{requests?.createdAt}</td>
                        
                        <td className="td-text"><img src="/images/dashboard/Comment.png" className="mx-auto d-block" /></td>
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false" href="/"
                            >
                            <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3"  alt=""/>
                            </a>
                            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                              <li>
                                <a class="dropdown-item border-bottom" href="/">
                                  <img
                                    src="/images/users/AddressBook.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  View Users Details
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item border-bottom" href="/">
                                  <img
                                    src="/images/users/PencilLine.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Edit User Details
                                </a>
                              </li>
                              <li>
                              <Link to={"/Department/Comments"} className="text-decoration-none">
      <a class="dropdown-item" href="/"><img src="/images/dashboard/Comment.png" alt="" className="me-2"/>Comments</a>
      </Link>
                              </li>
                              <li>
                                <a class="dropdown-item border-bottom" href="/">
                                  <img
                                    src="/images/users/TextAlignLeft.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Wrap Column
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item text-danger" href="/">
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
                    <a className="page-link" href="/" aria-label="Previous">
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

            <div className="footer">
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
        </div>
      </div>
    </>
  );
};

export default RequestsDept;
