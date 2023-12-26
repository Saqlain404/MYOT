import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
// import "../../dist/css/style.min.css"
import {
  AddCommentEmply,
  AddDocument,
  DocumentCount,
  employeDocumentList,
  fetchTemplateData,
  searchDoc,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import { ToastContainer, toast } from "react-toastify";

const HomeEmpl = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [templateNames, setTemplateNames] = useState(null);
  const [documentRequests, setDocumentRequests] = useState([]);
  const [docCount, setDocCount] = useState(null);
  const [receivedCount, setReceivedCount] = useState(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const count = async () => {
      const documentCountResult = await DocumentCount();
      if (!documentCountResult?.error && documentCountResult?.data) {
        const count = documentCountResult?.data?.results.count;
        const receivedDocCount =
          documentCountResult?.data?.results?.countRecivedDocument;
        console.log(documentCountResult);
        setDocCount(count);
        setReceivedCount(receivedDocCount);
      }
    };
    count();
  }, [shouldRender]);

  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const toggleCommentVisibility = () => {
    setIsCommentVisible(!isCommentVisible);
  };

  const handleSearch = async () => {
    const result = await searchDoc(searchData);
    console.log(result);
    const searchResult = result?.data?.results?.document;

    if (searchResult && Array.isArray(searchResult)) {
      const mappedResult = searchResult?.map((document) => ({
        documentName: document?.templete?.templeteName,
        img: [document?.templete?.manager?.[0]?.profile_Pic],
        assignedTo: [document?.templete?.manager?.[0]?.name],
        department: [
          document?.templete?.manager?.[0]?.department?.[0]?.departmentName,
        ],
        dateofSigning: [document?.createdAt],
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

  const [documentInfo, setDocumentInfo] = useState({
    documentName: "",
    templateId: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setDocumentInfo({ ...documentInfo, [name]: value });
  };
  console.log(documentRequests);

  const [templateIdList, setTemplateIdList] = useState([]);

  useEffect(() => {
    const fetchTemplateIdsData = async () => {
      const [templateList] = await fetchTemplateData();
      if (templateList) {
        setTemplateIdList(templateList);
      }
    };

    fetchTemplateIdsData();
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const documentData = {
      ...documentInfo,
      user: localStorage.getItem("user_id"),
    };
    await AddDocument({
      documentName: documentData.documentName,
      templete_Id: documentData.templateId,
      creator_Id: localStorage.getItem("user_id"),
    }).then((res) => {
      if (!res.data?.error) {
        setShouldRender(!shouldRender);
        console.log("Success");
        navigate("");
      }
    });
    setDocumentInfo({
      documentName: "",
      templateId: "",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searchData || searchData === "") {
        const names = await employeDocumentList();
        if (names) {
          setTemplateNames(names);
        }

        const requests = names?.map((name) => ({
          documentName: name?.templete_Id?.templeteName,
          assignedTo: [name?.templete_Id?.manager?.name],
          img: [name?.templete_Id?.manager?.profile_Pic],
          department: [
            name?.templete_Id?.manager?.department_Id?.departmentName,
          ],
          dateofSigning: [name?.createdAt],
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

    fetchData();
  }, [searchData, shouldRender]);

  const handleSubmitComment = async (e, document_Id) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("user_id");
    let data = await AddCommentEmply({
      comment,
      document_Id,
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
            <SideBarEmpl />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom mb-4">
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
                      New Document
                    </p>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <form action="" onSubmit={handleSubmit}>
                    <div className="row p-3">
                      <div className="col-12 mb-3 ">
                        <select
                          className="col-12 modal-input  p-2"
                          name="templateId"
                          onChange={handleChange}
                          value={documentInfo.templateId}
                        >
                          <option value="" disabled>
                            Select Document Type *
                          </option>
                          {templateIdList?.map((template) => (
                            <option key={template._id} value={template._id}>
                              {template.templeteName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </form>
                  <div className="d-flex justify-content-end mb-3">
                    <button
                      type="submit"
                      className="user-modal-btn"
                      onClick={() => handleSubmit()}
                    >
                      Request <ToastContainer />
                    </button>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="user-modal-btn2"
                    >
                      Cancle
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-6">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Document Requests
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {docCount !== null && docCount}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Recieved Documents
                      </h6>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {receivedCount !== null && receivedCount}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 table-searchbar">
              <div className="row d-flex align-items-center col ">
                <div className="col-md-3 align-items-center d-flex border-end">
                  <div
                    className=""
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
                  type="text"
                  onChange={(e) => {
                    setSearchData(e.target.value);
                    //  handleSearch();
                  }}
                  value={searchData.searchTerm}
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
                    {documentRequests?.map((request, index) => (
                      <tr key={index}>
                        <td className="td-text">{request.documentName}</td>
                        <td className="td-text">
                          <img className="img_profile" src={request.img} />
                          {request.assignedTo}
                        </td>
                        <td className="td-text">{request.department}</td>
                        <td className="td-text">
                          <img src="/images/dashboard/CalendarBlank.png" />
                          {request.dateofSigning}
                        </td>
                        <td className="td-text">
                          <div className="dropdown">
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
                                handleSubmitComment(e, request?.commentID)
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
                        <td className="td-text text-info m-0">
                          {request.status}
                        </td>
                        <td className="td-text">
                          <div class="dropdown">
                            <a
                              type=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src="/images/sidebar/ThreeDots.svg"
                                className="w-auto p-3"
                              />
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
                                  View Details
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  <img
                                    src="/images/dashboard/Download-Button.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  Download
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
              {/* {isCommentVisible && (
              <div className='comment-section'>
              <div  className='comment-input'>
                  <input type='text' value={commentInput} onChange={handleCommentChange} placeholder='Comment or type'/>
              </div>
              <div className='comment-line'></div>
              <div className='d-flex comment-footer justify-content-between p-4'> 
                  <div className='comment-icons'>
                      <img src='../images/comment-icon-4.svg' alt='img'/>
                      <img src='../images/comment-icon-3.svg' alt='img'/>
                      <img src='../images/smileyy.svg' alt='img'/>
                      <img src='../images/comment-icon-2.svg' alt='img'/>
                      <img src='../images/comment-icon-1.svg' alt='img'/>
                  </div>
                  <div>
                      <button className='comment-btn' onClick={handleCommentSubmit}>Comment</button>
                  </div>
              </div>
          </div>
              )} */}
              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-end page-navigation mt-3 position-relative"
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
      </div>
    </>
  );
};

export default HomeEmpl;
