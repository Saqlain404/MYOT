import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import {
  DepartmentTemplateCount,
  SearchTemplates,
  TemplateList,
} from "../../ApiServices/departmentHttpService/departmentHttpService";

const Template = () => {
  const documents = [
    {
      id: 1,
      templateName: "Employment Contract",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 2,
      templateName: "Tax Deduction at Source (TDS)",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 3,
      templateName: "Training Certificates",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-success m-0">Complete</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 4,
      templateName: "Software Licenses",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Information Technologies",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 5,
      templateName: "Reference Letter",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 6,
      templateName: "Annual Tax Statement",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 7,
      templateName: "Leave Application",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-secondary m-0">Rejected</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 8,
      templateName: "Marketing Campaign Reports",
      assignedTo: <img src="/images/dashboard/Avatar.png" />,
      version: "0.2",
      date: "26 Oct, 2023",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    // Add more tasks here
  ];


  const [templateCount, setTemplateCount] = useState();
  const [search, setSearch] = useState("");
  const [listItems, setListItems] = useState();

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

  const handleCheckboxChange = (checkboxName) => {
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

  const handleHideSelected = () => {
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

  const getTemplateLists = async (key) => {
    const { data } = await TemplateList();
    if (!data?.error) {
      setListItems(data?.results?.templete);
    }
  };
  console.log(listItems);

  const getTemplateCount = async () => {
    let { data } = await DepartmentTemplateCount();
    if (!data?.error) {
      setTemplateCount(data?.results);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchTemplates({ search: value });
      if (!data?.error) {
        setListItems(data?.results?.document);
      }
    } else {
      getTemplateLists();
    }
  };

  useEffect(() => {
    getTemplateCount();
    getTemplateLists();
  }, []);

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
                      /Template
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
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Template Create
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.totalTempleted}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Template Awaiting
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.totalAwaiting?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Recently Approved
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.totalApproved?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Active Signatories
                      </h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {templateCount?.aciveSignatory?.[0]?.count}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="table-name mb-2">Templates</p>
            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
                <div className="col-md-3 d-flex table-searchbar-imgs">
                  <div
                    className="mt-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img
                      src="/images/dashboard/Plus-icon.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    />
                  </div>
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
                            Add Templates
                          </p>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <form action="">
                          <div className="row p-3">
                            <div className="col-12 mb-3 ">
                              <input
                                type="number"
                                placeholder="Select Template"
                                className="col-12 modal-input td-text  p-2"
                              />
                            </div>
                            <div className="col-12 mb-3 ">
                              <p className="bg-primary-subtle th-text ps-4 p-2">
                                Assign
                              </p>
                            </div>
                            <div className="col-12 border-bottom border-light mb-3 ">
                              <div className="row">
                                <p className="col-4 td-text p-2">
                                  <input
                                    className=" form-check-input checkbox-table ms-4 me-4"
                                    type="checkbox"
                                    value=""
                                  />
                                  Approver
                                </p>
                                <input
                                  type="number"
                                  placeholder="Select Name"
                                  className="col modal-input th-text p-2 me-3"
                                />
                              </div>
                            </div>
                            <div className="col-12 border-bottom border-light mb-3 ">
                              <div className="row">
                                <p className="col-4 td-text p-2">
                                  <input
                                    className=" form-check-input checkbox-table ms-4 me-4"
                                    type="checkbox"
                                    value=""
                                  />
                                  Signatory
                                </p>
                                <input
                                  type="number"
                                  placeholder="Select Name"
                                  className="col modal-input th-text p-2 me-3"
                                />
                              </div>
                            </div>
                            <div className="col-12 border-bottom border-light mb-3">
                              <div className="row">
                                <p className="col-4 td-text p-2">
                                  <input
                                    className=" form-check-input checkbox-table ms-4 me-4"
                                    type="checkbox"
                                    value=""
                                  />
                                  Admin
                                </p>
                                <input
                                  type="number"
                                  placeholder="Select Name"
                                  className="col modal-input th-text p-2 me-3"
                                />
                              </div>
                            </div>
                            <div className="col-12  mb-3 ">
                              <div className="row">
                                <p className="col-4 td-text p-2">
                                  <input
                                    className=" form-check-input checkbox-table ms-4 me-4"
                                    type="checkbox"
                                    value=""
                                  />
                                  Department Manger
                                </p>
                                <input
                                  type="number"
                                  placeholder="Select Name"
                                  className="col modal-input th-text p-2 me-3"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="d-flex justify-content-end mb-3">
                          <button type="button" class="user-modal-btn">
                            Add New
                          </button>
                          <button type="button" class="user-modal-btn2">
                            Cancle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="/images/dashboard/FunnelSimple.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/dashboard/ArrowsDownUp.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/dashboard/DotsThreeOutlineVertical2.png"
                      alt=""
                      className="p-2 table-searchbar-img border-end"
                    />
                  </div>
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
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="th-text"
                    >
                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Template name
                      </th>
                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Assigned to
                      </th>
                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Version
                      </th>
                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Date
                      </th>
                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Status
                      </th>
                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Department
                      </th>

                      <th className={`th-text ${
                          hiddenColumns.comment ? "d-none" : "table-cell"
                        }`}>
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
                    {listItems?.map((template) => (
                      <tr key={template.id}>
                        <td className="td-text">{template}</td>
                        <td className="td-text">{template.assignedTo}</td>
                        <td className="td-text">{template.version}</td>
                        <td className="td-text">
                          <img
                            src="/images/dashboard/CalendarBlank.png"
                            alt=""
                          />
                          {template.date}
                        </td>
                        <td className="td-text">{template.status}</td>
                        <td className="td-text">{template.department}</td>

                        {/* <td className="td-text"></td> */}
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              href="/"
                            >
                              {template.actions}
                            </a>
                            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                              <li>
                                <Link
                                  to={"/Department/Template-view"}
                                  className="text-decoration-none"
                                >
                                  <a
                                    class="dropdown-item border-bottom"
                                    href="/"
                                  >
                                    <img
                                      src="/images/users/AddressBook.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    View Template
                                  </a>
                                </Link>
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

export default Template;
