import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AddDepartment,
  DepartmentList,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { useEffect } from "react";

const Departments = () => {
  const photo = <img src="/images/dashboard/Avatar.png" />;
  const data = [
    {
      key: "1",
      userId: "111125",
      // image: "./images/dashboard/Avatar.png",
      name: [
        <img src="/images/dashboard/Avatar.png" className="me-2" />,
        "Katherine Moss",
      ],
      department: "Human Resourses",
      roles: (
        <ul>
          <li>Employee</li>
          <li>Approver</li>
          <li>Signatory</li>
          <li>DTM</li>
        </ul>
      ),
      lastLoggedIn: "2021-04-16 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      key: "2",
      userId: "101346",
      name: [
        <img src="/images/dashboard/Avatar2.png" className="me-2" />,
        "Natali Craig",
      ],
      department: "Human Resourses",
      roles: (
        <ul>
          <li>Employee</li>
          <li>Approver</li>
          <li>Signatory</li>
          <li>DTM</li>
        </ul>
      ),
      lastLoggedIn: "2021-04-16 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      key: "3",
      userId: "101127",
      name: [
        <img src="/images/dashboard/Avatar3.png" className="me-2" />,
        "Orlando Diggs",
      ],
      department: "Human Resourses",
      roles: (
        <ul>
          <li>Employee</li>
          <li>Approver</li>
          <li>Signatory</li>
          <li>DTM</li>
        </ul>
      ),
      lastLoggedIn: "2021-04-16 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      key: "4",
      userId: "101128",
      name: [
        <img src="/images/dashboard/Avatar2.png" className="me-2" />,
        "Katherine Moss",
      ],
      department: "Human Resourses",
      roles: (
        <ul>
          <li>Employee</li>
          <li>Approver</li>
          <li>Signatory</li>
          <li>DTM</li>
        </ul>
      ),
      lastLoggedIn: "2021-04-16 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
  ];

  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  const [listItems, setListItems] = useState([]);

  const DepartmentLists = async () => {
    const { data } = await DepartmentList();
    if (!data.error) {
      setListItems(data.results.department);
    }
  };
  console.log(listItems);

  const [departmentInfo, setDepartmentInfo] = useState({
    departmentname: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setDepartmentInfo({ ...departmentInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log({ e });
    e.preventDefault();
    const departmentData = {
      ...departmentInfo,
      user: localStorage.getItem("user_id"),
    };
    console.log(departmentData);

    await AddDepartment({
      departmentName: departmentData.departmentname,
      description: departmentData.description,
    })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        if (!res.data?.error) {
          console.log("Success");
          navigate("");
        }
      });
    setDepartmentInfo({
      departmentname: "",
      description: "",
    });
  };
  useEffect(() => {
    DepartmentLists();
  }, [handleChange]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Departments
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

            <div className="d-flex justify-content-between">
              <p className="table-name mb-2">Templates</p>
              <div className="d-flex justify-content-center th-text">
                <div
                  className="d-flex whitespace-nowrap"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/images/tasks/Add.svg" alt="" className="pb-3" />
                  <p className="pt-1 text-nowrap">Add Department</p>
                </div>
                <img
                  src="/images/sidebar/ThreeDots.svg"
                  alt=""
                  className="pb-3 ms-2 text-secondary"
                />
              </div>
            </div>

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
                    <p class="" id="exampleModalLabel">
                      Add Departments
                    </p>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <form action="" onSubmit={handleSubmit}>
                    <div className="row p-3">
                      <div className="col-12 mb-3 ">
                        <input
                          type="text"
                          placeholder="Department Name *"
                          className="col-12 modal-input th-text  p-2"
                          name="departmentname"
                          value={departmentInfo.departmentname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 mb-3 ">
                        <textarea
                          type="text"
                          placeholder="Description"
                          className="col-12 modal-input th-text p-2"
                          name="description"
                          value={departmentInfo.description}
                          onChange={handleChange}
                        ></textarea>
                        {/* <input type="text" placeholder="Phone Number" className="col-6 modal-input th-text p-2"/> */}
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                      <button
                        type="submit"
                        class="user-modal-btn"
                        onClick={AddDepartment}
                      >
                        Add New
                      </button>
                      <button type="button" class="user-modal-btn2">
                        Cancle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}
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
                <table className="table table-borderless users-table">
                  <thead>
                    <tr className="th-text">
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
                        Description
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Actions
                      </th>

                      {/* <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Role
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Last Logged In
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
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {listItems.map((item, index) => (
                      <tr className="ms-0">
                        <td className="td-text">
                          <input
                            className="form-check-input checkbox-table"
                            type="checkbox"
                            value=""
                          />
                          {item.departmentName}
                        </td>
                        <td className="td-text">{item.description}</td>
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
                            </a>
                            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                              <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                    src="/images/users/AddressBook.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  View Department Details
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                    src="/images/users/PencilLine.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Edit Department Details
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
                                  Delete Manager
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>

                        {/* <td className="td-text">
                          
                          {document.roles}
                        </td>
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {document.lastLoggedIn}
                        </td>
                        <td className="td-text">{document.status}</td>
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {document.actions}
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
                                  Delete Manager
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td> */}
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
      </div>{" "}
    </>
  );
};

export default Departments;
