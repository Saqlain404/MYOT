import React, { useEffect, useState } from "react";
import { SignatoryAwaitListing } from "../../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import {
  AddCommentForTask,
  TemplateReject,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { Button, Checkbox } from "rsuite";
import ViewTemp from "../ViewTemplate/ViewTemp";

const CommonListing = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [templete_Id, setTemplateId] = useState();
  const [comment, setComment] = useState("");
  const [viewTemplateId, setViewTemplateId] = useState();
  const [rejectReason, setRejectReason] = useState("");
  const [loader, setLoader] = useState(false);

  const [awaitListing, setAwaitListing] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: "asc",
        width: 50,
      },
      {
        label: "Requester Name",
        field: "requester",
        sort: "asc",
        width: 50,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        searchable: true,
      },
      {
        label: "Request Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Comments",
        field: "comments",
        sort: "asc",
        width: 100,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
  });

  useEffect(() => {
    getAwaitListingData();
  }, []);

  const getAwaitListingData = async () => {
    let id = localStorage.getItem("myot_admin_id");
    let { data } = await SignatoryAwaitListing(id);
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.templete;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.requester = (
          <>
            <img
              className="w_20_h_20"
              src={list?.manager[0]?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">
              {list?.manager[0]?.name}
            </span>
          </>
        );
        returnData.date = moment(list?.createdAt).format("L");
        returnData.department =
          list?.manager[0]?.department[0]?.departmentName || "NA";
        returnData.status = (
          <span
            className={`"td-text status" ${
              list?.status === "Pending"
                ? "text-info"
                : list?.status === "Approved"
                ? "text-warning"
                : "text-danger"
            }`}
          >
            {list?.status}
          </span>
        );
        returnData.actions = (
          <div class="text-center">
            <a type="" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="/images/sidebar/ThreeDots.svg"
                className="w-auto cursor_pointer"
              />
            </a>
            <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
              {/* <li>
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
              </li> */}
              <li>
                <Link
                  class="dropdown-item"
                  to={`/Signatory/Home/Comments/${list?._id}`}
                >
                  <img src="/images/dashboard/Comment.png" className="me-2" />
                  Comments
                </Link>
              </li>
              <li
                onClick={() => setViewTemplateId(list?._id)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
              >
                <Link class="dropdown-item">
                  <img src="/images/users/AddressBook.svg" className="me-2" />
                  View Template Details
                </Link>
              </li>
              <li>
                <Link class="dropdown-item">
                  <img src="/images/users/PencilLine.svg" className="me-2" />
                  Sign Template
                </Link>
              </li>

              <li
                onClick={() => setViewTemplateId(list?._id)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                <a class="dropdown-item text-danger" href="#">
                  <img src="/images/XCircle.svg" alt="" className="me-2" />
                  Reject
                </a>
              </li>
              {/* <li>
                <a class="dropdown-item text-danger" href="#">
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete Template
                </a>
              </li> */}
            </ul>
          </div>
        );
        returnData.comments = (
          <div className="text-center">
            <a
              onClick={() => setTemplateId(list?._id)}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src="/images/dashboard/Comment.png"
                className="mx-auto d-block"
              />
            </a>
          </div>
        );

        newRows.push(returnData);
      });
      setAwaitListing({ ...awaitListing, rows: newRows });
    }
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...awaitListing.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setAwaitListing({
      ...awaitListing,
      selectedColumns: updatedSelectedColumns,
    });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...awaitListing.hiddenColumns,
      ...awaitListing.selectedColumns,
    ];
    setAwaitListing({
      ...awaitListing,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = awaitListing.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={awaitListing.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          defaultChecked
        >
          {" "}
          {column.label}
        </Checkbox>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !awaitListing.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setAwaitListing({
      ...awaitListing,
      hiddenColumns: [],
      selectedColumns: [],
    });
    setShowClearButton(false);
  };

  const toggleSortOrder = () => {
    const currentSortType = awaitListing.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...awaitListing.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setAwaitListing({
      ...awaitListing,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("myot_admin_id");
    // console.log(creator_Id, comment, templete_Id);
    try {
      let { data } = await AddCommentForTask({
        comment,
        templete_Id,
        creator_Id,
      });
      console.log(data);
      if (!data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "New comment added",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        document.getElementById("close").click();
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (e) => {
    e.preventDefault();
    console.log(viewTemplateId, rejectReason);
    if (rejectReason?.trim().length <= 0) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Please enter a reason",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    let { data } = await TemplateReject(viewTemplateId, {
      reasons: rejectReason,
    });
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Template Rejected",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setRejectReason("");
      getAwaitListingData();
      document.getElementById("closeReject").click();
    }
  };
  return (
    <div className="position-relative mt-5">
      <p className="table-name mb-2">Awaiting Templates</p>
      <div className=" col-12 d-flex align-items-center table-searchbar">
        <div className="d-flex ">
          <div className="col-md-3 table-searchbar-imgs">
            {/* <img
              src="/images/dashboard/Plus-icon.png"
              className="p-2 table-searchbar-img"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            /> */}
            <img
              onClick={toggleSortOrder}
              src="/images/dashboard/ArrowsDownUp.png"
              className="p-2 table-searchbar-img border-end cursor_pointer"
            />
          </div>
          <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
            <p className="m-0 text-nowrap">
              {awaitListing?.selectedColumns &&
                awaitListing?.selectedColumns.length}
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
            <img
              width={20}
              src={require("../../../assets/logo/search.png")}
            ></img>
          </div>
        </div>
        <form className="d-flex me-2" role="search">
          {/* <input
        className="form-control table-search-bar"
        type="search"
        placeholder="Search"
        aria-label="Search"
      /> */}
        </form>
      </div>

      {/* <div className="col-12 table_comman mt-3 "> */}
      <div className="col-12 mdb_table mt-3 ">
        <div className="table-responsive">
          <MDBDataTable
            bordered
            displayEntries={false}
            entries={10}
            className="text-nowrap"
            hover
            // data={awaitListing}
            data={{ ...awaitListing, columns: visibleColumns }}
            noBottomColumns
            sortable={false}
            paginationLabel={"«»"}
          />
        </div>
      </div>

      {/* modal */}
      <div
        class="modal fade"
        id="exampleModal"
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
                id="close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="rounded" onSubmit={handleSubmit}>
                <div className="mb-3 border-bottom">
                  <label className="form-label th-text">Comment or type</label>
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
                    <button type="submit" className="comment-btn btn-primary">
                      Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Template Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <ViewTemp viewTemplateId={viewTemplateId} />
          </div>
        </div>
      </div>

      {/* Reject Modal */}
      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Reject Template
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeReject"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="td-text w-100 py-2 rounded ps-2"
                placeholder="Reject Reason..."
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
              />
              <div className="text-end mt-4">
                <Button
                  style={{ width: "100px" }}
                  loading={loader}
                  color="red"
                  appearance="primary"
                  className={`btn mb-3 me-2 rounded-2`}
                  type="submit"
                  onClick={(e) => handleReject(e)}
                >
                  Reject
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonListing;
