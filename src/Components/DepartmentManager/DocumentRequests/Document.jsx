import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import {
  DocumentComment,
  RequestorList,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";
import { AddComment, RequestsList } from "../../../ApiServices/departmentHttpService/departmentHttpService";
import moment from "moment";
import Swal from "sweetalert2";

const Document = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");
  const [document_Id, setDocument_Id] = useState();
  const [templete_Id, setTemplete_Id] = useState();

  const [documents, setDocuments] = useState({
    columns: [
      {
        label: "Template name",
        field: "template",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Requester Name",
        field: "requester",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Comment",
        field: "comment",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
  });

  useEffect(() => {
    getRequestorList();
  }, []);

  const getRequestorList = async () => {
    let { data } = await RequestsList();

    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.list;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.template = list?.templete?.[0]?.templeteName || "NA";
        returnData.requester = (
          <>
            <img
              className="w_20_h_20"
              src={list?.templete?.[0]?.manager?.[0]?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">
              {list?.templete?.[0]?.manager?.[0]?.name || "NA"}
            </span>
          </>
        );

        returnData.date =
          (list?.createdAt && moment(list?.createdAt).format("L")) || "NA";
        returnData.department =
          list?.templete_Id?.manager?.department_Id?.departmentName;

        returnData.comment = (
          <>
            <div className="text-center">
              <a
                onClick={() => setTemplete_Id(list?._id)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <img
                  src="/images/dashboard/Comment.png"
                  className="mx-auto d-block"
                />
              </a>
            </div>
          </>
        );
        returnData.actions = (
          <div class="text-center">
            <a
              className="cursor_pointer"
              type=""
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/images/sidebar/ThreeDots.svg" className="w-auto" />
            </a>
            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
              <li>
                <Link
                  class="dropdown-item"
                  to={`/Department/Comments/${list?._id}`}
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
              {/* <li
                className="cursor_pointer"
                onClick={() => deleteTemplate(list?._id)}
              >
                <a class="dropdown-item text-danger">
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete Template
                </a>
              </li> */}
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setDocuments({ ...documents, rows: newRows });
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = documents.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...documents.rows].sort((a, b) => {
      let comparison = 0;
      if (a.document < b.document) {
        comparison = -1;
      } else if (a.document > b.document) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setDocuments({
      ...documents,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...documents.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setDocuments({ ...documents, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...documents.hiddenColumns,
      ...documents.selectedColumns,
    ];
    setDocuments({
      ...documents,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = documents.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field}>
        <input
          type="checkbox"
          checked={documents.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
        />
        <label>{column.label}</label>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !documents.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setDocuments({ ...documents, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim().length <= 0) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Please enter a comment",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    let creator_Id = localStorage.getItem("myot_admin_id");
    console.log(creator_Id, comment, templete_Id);
    let { data } = await AddComment({
      comment,
      templete_Id,
      creator_Id,
    });
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Comment added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("closeForm").click();
      setComment("");
    }
  };

  return (
    <div className="position-relative">
      <p className="table-name mb-2">Document Requests</p>
      <div className=" col-12 d-flex align-items-center table-searchbar">
        <div className="d-flex ">
          <div className="col-md-3 table-searchbar-imgs">
            {/* <img
              src="/images/dashboard/Plus-icon.png"
              alt=""
              className="p-2 table-searchbar-img"
            /> */}
            <img
              src="/images/dashboard/ArrowsDownUp.png"
              onClick={toggleSortOrder}
              className="p-2 table-searchbar-img border-end cursor_pointer"
            />
          </div>
          <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
            <p className="m-0 text-nowrap">
              {documents?.selectedColumns && documents?.selectedColumns.length}
              <span> Selected</span>
            </p>
            {showClearButton ? (
              <p
                className="hide-selected ms-2 m-0 text-nowrap cursor_pointer "
                onClick={showAllColumns}
              >
                Clear Selection
              </p>
            ) : (
              <p
                className="hide-selected m-0 ms-2 text-nowrap cursor_pointer "
                onClick={hideSelectedColumns}
              >
                Hide Selected
              </p>
            )}
          </div>
          <div class="search_icon">
                  <img width={20} src={require("../../../assets/logo/search.png")}></img>
                  </div>
        </div>
        <form className="d-flex me-2" role="search"></form>
      </div>
      <div className="col-12 mdb_table mt-3 ">
        <div className="table-responsive">
          <MDBDataTable
            bordered
            displayEntries={false}
            entries={10}
            className="text-nowrap"
            hover
            data={{ ...documents, columns: visibleColumns }}
            noBottomColumns
            paginationLabel={"«»"}
            sortable={false}
          />
        </div>
      </div>
      {/* Comment Modal */}
      <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title th-text" id="exampleModalLabel">
                    Add comment
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="closeForm"
                  ></button>
                </div>
                <div class="modal-body">
                  <form className="rounded" onSubmit={handleSubmit}>
                    <div className="mb-3 border-bottom">
                      <label className="form-label th-text">
                        Comment or type
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 w-100"
                        placeholder="Type comment..."
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
              </div>
            </div>
          </div>

          {/* Comment Modal close */}
    </div>
  );
};

export default Document;
