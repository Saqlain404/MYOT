import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarAprv";
import {
  AddCommentApprv,
  HistoryLogRejectedList,
  RejectedTempeleteSearch,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";

const HistoryLogReject = () => {
  const [documentRequests, setDocumentRequests] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [comment, setComment] = useState("");

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  useEffect(() => {
    const fetchData = async () => {
      if (!searchData || searchData === "") {
        const data = await HistoryLogRejectedList(ids);

        const requests = data?.map((doc) => ({
          documentName: doc?.templeteName,
          document_id: doc?._id,
          version: doc?.templeteVersion?.[0]?.version,
          assignedTo: [doc?.manager?.[0]?.name],
          img: [doc?.manager?.[0]?.profile_Pic],
          action: (
            <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
          ),
          department: [doc?.manager?.[0]?.department?.[0]?.departmentName],
          dateofSigning: [moment(doc?.createdAt).format("L")],
          comments: (
            <img
              src="/images/dashboard/Comment.png"
              className="mx-auto d-block"
            />
          ),
          commentID: doc?._id,
          status: [doc?.status],
        }));

        setDocumentRequests(requests);
      }
    };
    // console.log(documentRequests);

    fetchData();
  }, [searchData]);

  const handleSearch = async () => {
    const result = await RejectedTempeleteSearch(searchData, ids);
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
        dateofSigning: [moment(document?.createdAt).format("L")],
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

  const handleSubmitComment = async (e, templete_Id) => {
    e.preventDefault();
    let creator_Id =
      localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
    let data = await AddCommentApprv({
      comment,
      templete_Id,
      creator_Id,
    });
    if (!data?.error) {
      setComment("");
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
                      History Log / Rejected
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

            <div className="d-flex">
              <Link
                to={"/Approver/History-log-approved"}
                className="text-decoration-none"
              >
                <p className="th-text me-3">Approved</p>
              </Link>
              <Link
                to={"/Approver/History-log-rejected"}
                className="text-decoration-none"
              >
                <p className="td-text border-bottom ">Rejected</p>
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
                        Comments
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
                      <tr key={document.commentID}>
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
                        <td className="td-text">
                          <div className="">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src="/images/dashboard/Comment.png"
                                className="mx-auto d-block"
                              />
                            </a>
                            <form
                              className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
                              onSubmit={(e) =>
                                handleSubmitComment(e, document?.commentID)
                              }
                            >
                              <div className="mb-3 border-bottom">
                                <label className="form-label th-text">
                                  Comment or type
                                </label>

                                <input
                                  type="text"
                                  className="form-control border-0"
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                />
                              </div>

                              <div className="d-flex justify-content-between">
                                <div>
                                  <img
                                    src="/images/tasks/assign comments.svg"
                                    alt=""
                                    className="comment-img"
                                  />
                                  <img
                                    src="/images/tasks/mention.svg"
                                    alt=""
                                    className="comment-img"
                                  />
                                  <img
                                    src="/images/tasks/task.svg"
                                    alt=""
                                    className="comment-img"
                                  />
                                  <img
                                    src="/images/tasks/emoji.svg"
                                    alt=""
                                    className="comment-img"
                                  />
                                  <img
                                    src="/images/tasks/attach_attachment.svg"
                                    alt=""
                                    className="comment-img"
                                  />
                                </div>
                                <div>
                                  <button
                                    type="submit"
                                    className="comment-btn btn-primary"
                                  >
                                    Comment
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </td>
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
                                <Link
                                  class="dropdown-item"
                                  to={`/Approver/Comment/${document?.document_id}`}
                                >
                                  <img
                                    src="/images/dashboard/Comment.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  Comments
                                </Link>
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

export default HistoryLogReject;
