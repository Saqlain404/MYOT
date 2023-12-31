import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import {
  approvedTemplete,
  approverTempleteList,
  rejectedTemplete,
  searchTemplete,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";
import { fetchTemplateData } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";

const TemplateReview = () => {
  const documents = [
    {
      id: 1,
      templateName: "Salary Slip.jpg",
      creator: [
        <img src="/images/dashboard/avatar3.png" className="me-2" alt="" />,
        "Eve Leroy",
      ],
      department: "Human Resources",
      dateOfCreation: "2023-09-16",
      status: <p className="text-warning">High</p>,
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
      templateName: "Promotion Letter.zip",
      creator: [
        <img src="/images/dashboard/avatar2.png" className="me-2" alt="" />,
        "Lana Steiner",
      ],
      department: "Sales & Marketing",
      dateOfCreation: "2023-09-16",
      status: <p className="text-warning">High</p>,
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
      templateName: "Create Project Wireframes.xls",
      creator: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" alt="" />,
        "ByeWind",
      ],
      department: "Training & Development",
      dateOfCreation: "2023-09-16",
      status: <p className="text-danger">Urgent</p>,
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 4,
      templateName: "Create Project Wireframes.pdf",
      creator: [
        <img src="/images/dashboard/Avatar.png" className="me-2" alt="" />,
        "Katherine Moss",
      ],
      department: "Human Resources",
      dateOfCreation: "2023-09-16",
      status: <p className="text-secondary">Low</p>,
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 5,
      templateName: "Project tech requirements.zip",
      creator: [
        <img src="/images/dashboard/Avatar1.png" className="me-2" alt="" />,
        "Natali Craig",
      ],
      department: "Training & Development",
      dateOfCreation: "2023-09-16",
      status: <p className="text-primary">Normal</p>,
      action: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
  ];

  const [searchData, setSearchData] = useState("");
  const [documentRequests, setDocumentRequests] = useState([]);
  const [templeteId, setTempleteId] = useState();
  const [updatedStatus, setUpdatedStatus] = useState();

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  const handleSearch = async () => {
    const result = await searchTemplete(searchData, ids);
    const searchResult = result?.data?.results?.templete;
    console.log(searchResult);

    if (searchResult && Array.isArray(searchResult)) {
      const mappedResult = searchResult?.map((document) => ({
        documentName: document?.templeteName,
        document_id: document?._id,
        img: [document?.manager?.[0]?.profile_Pic],
        version: document?.templeteVersion?.[0]?.version,
        assignedTo: [document?.manager?.[0]?.name],
        department: [document?.manager?.[0]?.department?.[0]?.departmentName],
        action: (
          <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
        ),
        dateofSigning: [moment(document?.createdAt).calendar()],
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
          dateofSigning: [moment(name?.createdAt).calendar()],
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
  }, [searchData, updatedStatus]);

  const approved = async (document_Id) => {
    const approveData = await approvedTemplete(document_Id);
    setUpdatedStatus((prev) => !prev);
  };
  const rejected = async (document_Id) => {
    const rejectedData = await rejectedTemplete(document_Id);
    setUpdatedStatus((prev) => !prev);
  };

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
                      Template Review /
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
                      <tr key={document?.commentID}>
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
                          {document.dateofSigning}
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
                              href="/"
                            >
                              {document.action}
                            </a>
                            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                              <li>
                                <Link
                                  to={"/Approver/Template-view"}
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
                                    View Users Details
                                  </a>
                                </Link>
                              </li>
                              <li>
                                <a
                                  onClick={() =>
                                    approved(document?.document_id)
                                  }
                                  class="dropdown-item border-bottom"
                                  href="#"
                                >
                                  <img
                                    src="/images/users/PencilLine.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Approved
                                </a>
                              </li>
                              {/* <li>
                                <a class="dropdown-item" href="#">
                                  <img
                                    src="/images/dashboard/Comment.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  Comments
                                </a>
                              </li> */}
                              {/* <li>
                                <a class="dropdown-item border-bottom" href="#">
                                  <img
                                    src="/images/users/TextAlignLeft.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Wrap Column
                                </a> */}
                              {/* </li> */}
                              <li>
                                <a
                                  onClick={() =>
                                    rejected(document?.document_id)
                                  }
                                  class="dropdown-item text-danger"
                                  href="#"
                                >
                                  <img
                                    src="/images/XCircle.svg"
                                    alt=""
                                    className="me-2"
                                  />
                                  Rejected
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
        </div>
      </div>
    </>
  );
};

export default TemplateReview;
