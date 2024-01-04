import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import {
  searchDocTemplete,
  templeteDocList,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";

const RequestsAprv = () => {
  const [templeteDoc, setTempleteDoc] = useState([]);
  const [searchDocData, setSearchDocData] = useState("");

  const handleDocSearch = async () => {
    const result = await searchDocTemplete(searchDocData);
    const searchDocResult = result?.data?.results?.document;
    console.log(searchDocResult);

    if (searchDocResult && Array.isArray(searchDocResult)) {
      const mappedDocResult = searchDocResult?.map((document) => ({
        documentName: document?.templete?.templeteName,
        img: [document?.templete?.manager?.[0]?.profile_Pic],
        requestor: [document?.requester?.[0]?.name],
        requestor_img: [document?.requester?.[0]?.profile_Pic],
        version: document?.templete_Id?.templeteVersion?.[0]?.version,
        assignedTo: [document?.templete?.manager?.[0]?.name],
        department: [
          document?.templete?.manager?.[0]?.department?.[0]?.departmentName,
        ],
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
      setTempleteDoc(mappedDocResult);
    }
  };

  useEffect(() => {
    handleDocSearch();
  }, [searchDocData]);

  useEffect(() => {
    const fetchDocData = async () => {
      if (!searchDocData || searchDocData === "") {
        const documentData = await templeteDocList();
        // if (names) {
        //   setTemplateNames(names);
        // }

        const docData = documentData?.map((doc) => ({
          documentName: doc?.templete_Id?.templeteName,
          document_id: doc?.templete_Id?._id,
          version: doc?.templete_Id?.templeteVersion?.[0]?.version,
          assignedTo: [doc?.templete_Id?.manager?.name],
          img: [doc?.templete_Id?.manager?.profile_Pic],
          requestor: [doc?.creator_Id?.name],
          requestor_img: [doc?.creator_Id?.profile_Pic],
          action: (
            <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
          ),
          department: [
            doc?.templete_Id?.manager?.department_Id?.departmentName,
          ],
          dateofSigning: [doc?.createdAt],
          comments: (
            <img
              src="/images/dashboard/Comment.png"
              className="mx-auto d-block"
            />
          ),
          commentID: doc?._id,
          status: [doc?.status],
        }));

        setTempleteDoc(docData);
      }
    };
    // console.log(documentRequests);

    fetchDocData();
  }, [searchDocData]);

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
                  onChange={(e) => {
                    setSearchDocData(e.target.value);
                    //  handleSearch();
                  }}
                  value={searchDocData.searchTerm}
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
                        Document
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Requester
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {templeteDoc?.map((document) => (
                      <tr key={document.commentID}>
                        <td className="td-text">
                          <input
                            className="form-check-input checkbox-table"
                            type="checkbox"
                            value=""
                          />
                          {document.documentName}
                        </td>
                        <td className="td-text">
                          <img
                            className="img_profile"
                            src={document.requestor_img}
                          />
                          {document.requestor}
                        </td>
                        <td className="td-text">
                          <img className="img_profile" src={document.img} />
                          {document.assignedTo}
                        </td>
                        <td
                          className={`td-text ${
                            document?.status == "Completed"
                              ? "text-success"
                              : document.status == "Pending"
                              ? "text-info"
                              : "text-warning"
                          }`}
                        >
                          {document.status}
                        </td>
                        <td className="td-text">{document.department}</td>

                        {/* <td className="td-text"></td> */}
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
                                <a class="dropdown-item" href="/">
                                  <img
                                    src="/images/dashboard/Comment.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  Comments
                                </a>
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

export default RequestsAprv;
