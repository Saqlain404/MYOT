import React, { useEffect, useState } from "react";
import {
  DocumentComment,
  RequestorList,
  SearchRequestor,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Document = () => {
  const [documents, setDocuments] = useState();
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");
  const [document_Id, setDocument_Id] = useState();
  const [selectedCount, setSelectedCount] = useState(0);
  const [checkBoxes, setCheckBoxes] = useState({
    document: false,
    requestor: false,
    assignedTo: false,
    priority: false,
    status: false,
    department: false,
    comment: false,
    actions: false,
  });

  useEffect(() => {
    getRequestorList();
  }, []);

  useEffect(() => {
    updateSelectedCount();
  }, [checkBoxes]);

  const updateSelectedCount = () => {
    const count = Object.values(checkBoxes).filter((value) => value).length;
    setSelectedCount(count);
  };

  const handleCheckboxClick = (checkboxName) => {
    setCheckBoxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };
  const handleHideSelected = () => {
    for (const key in checkBoxes) {
      if (checkBoxes[key]) {
        const thElement = document.querySelector(`th.${key}`);
        const tdElements = document.querySelectorAll(`td.${key}`);

        if (thElement) {
          thElement.classList.add("d-none");
        }

        tdElements.forEach((td) => {
          td.classList.add("d-none");
        });
      }
    }
  };
  const getRequestorList = async () => {
    try {
      let { data } = await RequestorList();
      if (!data.error) {
        setDocuments(data?.results?.list);
        console.log(data?.results?.list);
      }
    } catch (error) {}
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchRequestor({ search: value });
      console.log(data);
      if (!data?.error) {
        setDocuments(data?.results?.document);
      }
    } else {
      getRequestorList();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let id = localStorage.getItem("myot_admin_id");
      let formData = {
        creator_Id: id,
        document_Id,
        comment,
      };
      console.log(formData);
      let { data } = await DocumentComment(formData);
      console.log(data);
      if (!data?.error) {
        toast("Comment added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        document.getElementById("resetComment").click();
        getRequestorList();
      }
    } catch (error) {}
  };

  return (
    <div>
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
            <p className="m-0 mx-2 text-nowrap">{selectedCount} Selected</p>
            <div>
              <p
                className="hide-selected m-0 text-nowrap cursor_pointer"
                onClick={handleHideSelected}
              >
                Hide Selected
              </p>
            </div>
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
                <th className="th-text document">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("document")}
                    checked={checkBoxes.document}
                  />
                  Document
                </th>
                <th className="th-text requestor">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("requestor")}
                    checked={checkBoxes.requestor}
                  />
                  Requester
                </th>
                <th className="th-text assignedTo">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("assignedTo")}
                    checked={checkBoxes.assignedTo}
                  />
                  Assigned to
                </th>
                <th className="th-text priority">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("priority")}
                    checked={checkBoxes.priority}
                  />
                  Priority
                </th>
                <th className="th-text status">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("status")}
                    checked={checkBoxes.status}
                  />
                  Status
                </th>
                <th className="th-text department">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("department")}
                    checked={checkBoxes.department}
                  />
                  Department
                </th>
                <th className="th-text comment">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("comment")}
                    checked={checkBoxes.comment}
                  />
                  Comment
                </th>
                <th className="th-text actions">
                  <input
                    className="form-check-input checkbox-table"
                    type="checkbox"
                    value=""
                    onClick={() => handleCheckboxClick("actions")}
                    checked={checkBoxes.actions}
                  />
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {documents?.map((document) => (
                <tr key={document.id}>
                  <td className="td-text document">
                    <input
                      className="form-check-input checkbox-table"
                      type="checkbox"
                      value=""
                    />
                    {document?.templete_Id?.templeteName ||
                      document?.templete?.templeteName}
                  </td>
                  <td className="td-text requestor">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                      src={
                        document?.creator_Id?.profile_Pic ||
                        (document?.creator_Id &&
                          document?.creator_Id[0]?.profile_Pic)
                      }
                      // alt={
                      //   document?.creator_Id?.name ||
                      //   document?.creator_Id[0]?.name
                      // }
                    />
                    <span className="ms-3">
                      {document?.creator_Id?.name ||
                        (document?.creator_Id && document?.creator_Id[0]?.name)}
                    </span>
                  </td>
                  <td className="td-text assignedTo">
                    {/* {document?.templete_Id?.manager?.name} */}
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                      src={
                        document?.templete_Id?.manager?.profile_Pic ||
                        document?.templete?.manager[0]?.profile_Pic
                      }
                      alt={
                        document?.templete_Id?.manager?.name ||
                        document?.templete?.manager[0]?.name
                      }
                    />
                    <span className="ms-3 text-capitalize">
                      {document?.templete_Id?.manager?.name ||
                        document?.templete?.manager[0]?.name}
                    </span>
                  </td>
                  <td className="td-text priority">
                    <img
                      // style={{
                      //   width: "20px",
                      //   height: "20px",
                      //   borderRadius: "50%",
                      // }}
                      src={
                        document?.priority === "Urgent"
                          ? require("../../../assets/logo/urgent.png")
                          : document?.priority === "High"
                          ? require("../../../assets/logo/high.png")
                          : document?.priority === "Low"
                          ? require("../../../assets/logo/low.png")
                          : require("../../../assets/logo/normal.png")
                      }
                    />
                    <span className="ms-2">{document?.priority}</span>
                  </td>
                  <td
                    className={`"td-text status" ${
                      document?.status === "Pending"
                      ? "text-warning"
                      : document?.status === "Approved"
                      ? "text-success"
                      : document?.status === "In Progress"
                      ? "text-primary"
                      : document?.status === "Rejected"
                      ? "text-danger"
                      : document?.status === "Completed"
                      ? "text-success"
                      : "text-muted"
                    }`}
                  >
                    {document.status}
                  </td>
                  <td className="td-text department">
                    {document?.templete_Id?.manager?.department_Id
                      ?.departmentName ||
                      document?.templete?.manager[0]?.department[0]
                        ?.departmentName}
                  </td>

                  <td className="td-text comment">
                    <div className="">
                      <a
                        type=""
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="/images/dashboard/Comment.png"
                          className="mx-auto d-block cursor_pointer"
                          onClick={() =>
                            setDocument_Id(document?._id)
                          }
                        />
                      </a>
                      <form
                        className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
                        onSubmit={(e) => handleSubmit(e)}
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
                            <button
                              type="reset"
                              className="d-none"
                              id="resetComment"
                            >
                              reset
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </td>
                  <td className="td-text actions">
                    <div class="">
                      <a
                        type=""
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="/images/sidebar/ThreeDots.svg"
                          className="w-auto p-3 cursor_pointer"
                        />
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
                            to={`/Admin/Requests/Comments/${document?._id}`}
                          >
                            <img
                              src="/images/dashboard/Comment.png"
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
    </div>
  );
};

export default Document;
