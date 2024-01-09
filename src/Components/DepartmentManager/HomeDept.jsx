import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import {
  DepartmentHomeCount,
  RequestsList,
  SearchRequests,
  TemplateList,
} from "../../ApiServices/departmentHttpService/departmentHttpService";
// import "../../dist/css/style.min.css"

const HomeDept = () => {
  const tasks = [
    {
      id: 1,
      template: "Non-Objection Certificate",
      assignedTo: <img src="/images/dashboard/Avatar2.png" alt="" />,
      version: "1.0",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 2,
      template: "Expense Report",
      assignedTo: <img src="/images/dashboard/Avatar2.png" alt="" />,
      version: "2.0",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Finance",
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 3,
      template: "Salary Slip",
      assignedTo: <img src="/images/dashboard/Avatar2.png" alt="" />,
      version: "1.5",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 3,
      template: "Research Proposal",
      assignedTo: <img src="/images/dashboard/Avatar2.png" alt="" />,
      version: "1.5",
      status: <p className="text-success m-0"> Active</p>,
      department: "R&D",
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 3,
      template: "Conference Attendance",
      assignedTo: <img src="/images/dashboard/Avatar2.png" alt="" />,
      version: "1.5",
      status: <p className="text-secondary m-0">Rejected</p>,
      department: "Human Resources",
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    // Add more tasks here
  ];

  const [homeCount, setHomeCount] = useState();

  const [listItems, setListItems] = useState([]);
  const [templateItems, setTemplateItems] = useState();
  const [search, setSearch] = useState("");
  const [checkedCheckboxes, setCheckedCheckboxes] = useState({
    templateName: false,
    requesterName: false,
    date: false,
    actions: false,
    comment: false,
  });
  const [hiddenColumns, setHiddenColumns] = useState({
    templateName: false,
    requesterName: false,
    date: false,
    actions: false,
    comment: false,
  });
  const [checkedCheckbox, setCheckedCheckbox] = useState({
    templateName: false,
    assignedTo: false,
    version: false,
    status: false,
    department: false,
    actions: false,
  });
  const [hideColumns, setHideColumns] = useState({
    templateName: false,
    assignedTo: false,
    version: false,
    status: false,
    department: false,
    actions: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckedCheckbox({
      ...checkedCheckbox,
      [checkboxName]: !checkedCheckbox[checkboxName],
    });
  };
  const handleCheckboxesChange = (checkboxName) => {
    setCheckedCheckboxes({
      ...checkedCheckboxes,
      [checkboxName]: !checkedCheckboxes[checkboxName],
    });
  };
  const countCheckedCheckboxes = () => {
    let count = 0;
    for (const checkbox in checkedCheckboxes) {
      if (checkedCheckboxes[checkbox]) {
        count++;
      }
    }
    return count;
  };
  const countCheckedCheckbox = () => {
    let count = 0;
    for (const checkbox in checkedCheckbox) {
      if (checkedCheckbox[checkbox]) {
        count++;
      }
    }
    return count;
  };

  const handleHideSelected = () => {
    const updatedHideColumns = { ...hideColumns };
    for (const checkbox in checkedCheckbox) {
      if (checkedCheckbox[checkbox]) {
        updatedHideColumns[checkbox] = true;
      }
    }
    setHideColumns(updatedHideColumns);
    setCheckedCheckbox({
      templateName: false,
      assignedTo: false,
      version: false,
      status: false,
      department: false,
      actions: false,
    });
  };

  const handleHiddenSelected = () => {
    const updatedHiddenColumns = { ...hiddenColumns };
    for (const checkbox in checkedCheckboxes) {
      if (checkedCheckboxes[checkbox]) {
        updatedHiddenColumns[checkbox] = true;
      }
    }
    setHiddenColumns(updatedHiddenColumns);
    setCheckedCheckboxes({
      templateName: false,
      requesterName: false,
      date: false,
      actions: false,
      comment: false,
    });
  };

  useEffect(() => {
    getRequestsLists();
    getTemplateLists();
    getHomeCount();
  }, []);

  const getRequestsLists = async (key) => {
    const { data } = await RequestsList();
    if (!data?.error) {
      setListItems(data?.results?.list);
    }
  };
  console.log(listItems);

  const getTemplateLists = async (key) => {
    const { data } = await TemplateList();
    if (!data?.error) {
      setTemplateItems(data?.results?.templete);
    }
  };
  console.log(templateItems);

  const getHomeCount = async () => {
    let { data } = await DepartmentHomeCount();
    if (!data?.error) {
      setHomeCount(data?.results);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchRequests({ search: value });
      if (!data?.error) {
        setListItems(data?.results?.document);
      }
    } else {
      getRequestsLists();
    }
  };

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
                      /Home
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Departments
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalDepartment}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="statics_box card-clr-2-4 ">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Employees</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalEmployee?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Active Users
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalActiveUser?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {homeCount?.totalTemplete}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="table-name mb-2">Templates</p>
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
                  <p className="m-0 text-nowrap">
                    {countCheckedCheckbox()} Selected
                  </p>
                  <p
                    className="hide-selected m-0 text-nowrap "
                    onClick={handleHideSelected}
                  >
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
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text">
                      <th
                        className={`th-text ${
                          hideColumns.templateName ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckbox.templateName}
                          onChange={() => handleCheckboxChange("templateName")}
                        />
                        Template name
                      </th>

                      <th
                        className={`th-text ${
                          hideColumns.assignedTo ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckbox.assignedTo}
                          onChange={() => handleCheckboxChange("assignedTo")}
                        />
                        Assigned To
                      </th>
                      <th
                        className={`th-text ${
                          hideColumns.version ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckbox.version}
                          onChange={() => handleCheckboxChange("version")}
                        />
                        Version
                      </th>
                      <th
                        className={`th-text ${
                          hideColumns.status ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckbox.status}
                          onChange={() => handleCheckboxChange("status")}
                        />
                        Status
                      </th>
                      <th
                        className={`th-text ${
                          hideColumns.department ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckbox.department}
                          onChange={() => handleCheckboxChange("department")}
                        />
                        Department
                      </th>
                      <th
                        className={`th-text ${
                          hideColumns.action ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckbox.action}
                          onChange={() => handleCheckboxChange("action")}
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {templateItems?.map((template) => (
                      <tr key={template.id}>
                        <td
                          className={`th-text ${
                            hideColumns.templateName ? "d-none" : "table-cell"
                          }`}
                        >
                          {template.template}
                        </td>
                        <td className={`th-text ${
                            hideColumns.assignedTo ? "d-none" : "table-cell"
                          }`}
                          >{template.assignedTo}</td>
                        <td
                          className={`th-text ${
                            hideColumns.version ? "d-none" : "table-cell"
                          }`}
                        >
                          {template.version}
                        </td>
                        <td
                          className={`th-text ${
                            hideColumns.status ? "d-none" : "table-cell"
                          }`}
                        >
                          {template.status}
                        </td>
                        <td
                          className={`th-text ${
                            hideColumns.department ? "d-none" : "table-cell"
                          }`}
                        >
                          {template.department}
                        </td>
                        <td
                          className={`th-text ${
                            hideColumns.action ? "d-none" : "table-cell"
                          }`}
                        >
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              href="/"
                            >
                              {template.action}
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
                                <Link
                                  to={"/Department/Comments"}
                                  className="text-decoration-none"
                                >
                                  <a class="dropdown-item" href="/">
                                    <img
                                      src="/images/dashboard/Comment.png"
                                      alt=""
                                      className="me-2"
                                    />
                                    Comments
                                  </a>
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
                                  Delete User
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
                  <li class="page-item">
                    <a class="page-link" href="/" aria-label="Previous">
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

            <p className="table-name mb-2">Document Requests</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col">
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
                  <p className="m-0 text-nowrap">
                    {countCheckedCheckboxes()} Selected
                  </p>
                  <p
                    className="hide-selected m-0 text-nowrap "
                    onClick={handleHiddenSelected}
                  >
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
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text">
                      <th
                        className={`th-text ${
                          hiddenColumns.templateName ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.templateName}
                          onChange={() => handleCheckboxesChange("templateName")}
                        />
                        Template Name
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.requesterName ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.requesterName}
                          onChange={() => handleCheckboxesChange("requesterName")}
                        />
                        Requester Name
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.date ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.date}
                          onChange={() => handleCheckboxesChange("date")}
                        />
                        Date
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.comment}
                          onChange={() => handleCheckboxesChange("comment")}
                        />
                        Comment
                      </th>
                      <th
                        className={`th-text ${
                          hiddenColumns.actions ? "d-none" : "table-cell"
                        }`}
                      >
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                          checked={checkedCheckboxes.actions}
                          onChange={() => handleCheckboxesChange("actions")}
                        />
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listItems?.map((requests) => (
                      <tr key={requests._id}>
                        <td
                          className={`th-text ${
                            hiddenColumns.templateName ? "d-none" : "table-cell"
                          }`}
                        >
                          <input
                            className="form-check-input checkbox-table"
                            type="checkbox"
                            value=""
                          />
                          {requests?.templete?.[0]?.templeteName}
                        </td>
                        <td
                          className={`th-text ${
                            hiddenColumns.requesterName
                              ? "d-none"
                              : "table-cell"
                          }`}
                        >
                          <img
                            src={
                              requests?.templete?.[0]?.manager?.[0]?.profile_Pic
                            }
                            alt=""
                            className="list-profile-pic"
                          />
                          {requests?.templete?.[0]?.manager?.[0]?.name}
                        </td>
                        <td
                          className={`th-text ${
                            hiddenColumns.date ? "d-none" : "table-cell"
                          }`}
                        >
                          <img
                            src="/images/dashboard/CalendarBlank.png"
                            alt=""
                          />
                          {requests?.createdAt}
                        </td>

                        <td
                          className={`th-text ${
                            hiddenColumns.comment ? "d-none" : "table-cell"
                          }`}
                        >
                          <img
                            src="/images/dashboard/Comment.png"
                            className="mx-auto d-block"
                            alt=""
                          />
                        </td>
                        <td
                          className={`th-text ${
                            hiddenColumns.actions ? "d-none" : "table-cell"
                          }`}
                        >
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              href="/"
                            >
                              <img
                                src="/images/sidebar/ThreeDots.svg"
                                className="w-auto p-3"
                                alt=""
                              />
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
                                <Link
                                  to={"/Department/Comments"}
                                  className="text-decoration-none"
                                >
                                  <a class="dropdown-item" href="/">
                                    <img
                                      src="/images/dashboard/Comment.png"
                                      alt=""
                                      className="me-2"
                                    />
                                    Comments
                                  </a>
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

export default HomeDept;
