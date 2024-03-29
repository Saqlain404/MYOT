import React, { useEffect, useState } from "react";
import {
  approvedDocumentRequest,
  approvedTemplete,
  rejectedDocumentRequest,
  rejectedTemplete,
  requestDocAprv,
  templeteDocList,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import { Button } from "rsuite";

const DocumentRequestHome = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [documents, setDocuments] = useState();
  const [updatedStatus, setUpdatedStatus] = useState();
  const [reasons, setReason] = useState();
  const [document_Id, setDocument_Id] = useState();

  const [tasks, setTasks] = useState({
    columns: [
      {
        label: "Document Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Creator",
        field: "assigned",
        sort: "asc",
        width: 50,
        selected: false,
      },
      // {
      //   label: "Version",
      //   field: "version",
      //   sort: "asc",
      //   width: 100,
      //   selected: false,
      // },
      {
        label: "Date of Creation",
        field: "date",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        searchable: true,
        selected: false,
      },
      // {
      //   label: "Comments",
      //   field: "comments",
      //   sort: "asc",
      //   width: 100,
      //   selected: false,
      // },
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
  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  useEffect(() => {
    getDocTaskData();
  }, []);



  const getDocTaskData = async () => {
    let data = await templeteDocList(ids);
    console.log(data);
    const newRows = [];
    if (!data?.error) {
      let values = data;
      console.log(values);
      values?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templete[0]?.templeteName;
        returnData.assigned = (
          <>
            <img
              className="w_20_h_20"
              src={list?.creator_Id?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">
              {list?.creator_Id?.name}
            </span>
          </>
        );
        returnData.version = (
          <>
            {list?.templete_Id?.templeteVersion
              ? ` ${list?.templete_Id?.templeteVersion[0]?.version}`
              : "No versions found"}
          </>
        );
        returnData.date = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" />{" "}
            <span className="ms-2">{moment(list?.createdAt).format("L")}</span>
          </>
        );
        returnData.department =
          list?.templete[0]?.manager[0]?.department[0]?.departmentName || "Admin";
        returnData.status = (
          <span
            className={`"td-text status" ${
              list?.status === "Pending"
                ? "text-info"
                : list?.status === "Approved"
                ? "text-warning"
                : list?.status === "In Progress"
                ? "text-primary"
                : list?.status == "Completed"
                ? "text-success"
                : "text-danger"
            }`}
          >
            {list?.status}
          </span>
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
                  to={`/Approver/Template-view/${list?.templete[0]?._id}`}
                  className="text-decoration-none"
                >
                  <a class="dropdown-item border-bottom" href="/">
                    <img
                      src="/images/users/AddressBook.svg"
                      alt=""
                      className="me-2"
                    />
                    View Document
                  </a>
                </Link>{" "}
              </li>
              {list?.status !== "Approved" && (
              <li>
                <a
                  onClick={() => approveDocumentRequest(list?._id)}
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
              )}
                {list?.status !== "Rejected" && (
              <li>
                <a
                  onClick={() => setDocument_Id(list?._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#commentModal"
                  class="dropdown-item text-danger"
                  href="#"
                >
                  <img src="/images/XCircle.svg" alt="" className="me-2" />
                  Rejected
                </a>
              </li>
                )}
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setTasks({ ...tasks, rows: newRows });
    }
  };

  const handleDocCheckboxChange = (field) => {
    let updatedSelectedColumns = [...tasks.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setTasks({ ...tasks, selectedColumns: updatedSelectedColumns });
  };

  const columnsWithCheckboxes = tasks.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={tasks.selectedColumns.includes(column.field)}
          onChange={() => handleDocCheckboxChange(column.field)}
          defaultChecked
        >
          {" "}
          {column.label}
        </Checkbox>
      </div>
    ),
  }));

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...tasks.hiddenColumns,
      ...tasks.selectedColumns,
    ];
    setTasks({
      ...tasks,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !tasks.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setTasks({ ...tasks, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  const toggleSortOrder = () => {
    const currentSortType = tasks.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...tasks.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name?.toLowerCase() < b.name?.toLowerCase()) {
        comparison = -1;
      } else if (a.name?.toLowerCase() > b.name?.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });

    setTasks({
      ...tasks,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const approveDocumentRequest = async (document_Id) => {
    const approveData = await approvedDocumentRequest(document_Id);
    getDocTaskData();
  };

  const submitReason = async (e) => {
    e.preventDefault();
    const rejectedData = await rejectedDocumentRequest(document_Id, {
      reasons,
    });
    if(rejectedData){
      setReason("")
    getDocTaskData();
    }
  };

  return (
    <div className="position-relative">
      <p className="table-name mb-2">Document Request</p>
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
            {/* <img
            src="/images/dashboard/FunnelSimple.png"
            alt=""
            className="p-2 table-searchbar-img"
          /> */}
            <img
              src="/images/dashboard/ArrowsDownUp.png"
              onClick={toggleSortOrder}
              className="p-2 table-searchbar-img border-end cursor_pointer"
            />
            {/* <img
            src="/images/dashboard/DotsThreeOutlineVertical2.png"
            alt=""
            className="p-2 table-searchbar-img border-end"
          /> */}
          </div>
          <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
            <p className="m-0 text-nowrap">
              {tasks?.selectedColumns && tasks?.selectedColumns.length}
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
            <img width={20} src={require("../../assets/logo/search.png")}></img>
          </div>
        </div>
        <form className="d-flex me-2" role="search"></form>
      </div>

      <div className="col-12 mdb_table mt-3 mb-4">
        <div className="table-responsive">
          <MDBDataTable
            bordered
            displayEntries={false}
            entries={10}
            className="text-nowrap"
            hover
            data={{ ...tasks, columns: visibleColumns }}
            // data={tasks}
            noBottomColumns
            paginationLabel={"«»"}
            sortable={false}
          />
        </div>
      </div>
       {/* Comment Modal */}
       <div
            class="modal fade"
            id="commentModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title th-text fs-6" id="exampleModalLabel">
                    Add Reason
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
                  <form className="rounded" onSubmit={submitReason}>
                    <div className="mb-3">
                      <label className="form-label th-text"></label>
                      <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Type reason..."
                        value={reasons}
                        onChange={(e) => setReason(e.target.value)}
                      />
                    </div>

                    <div className="d-flex justify-content-end">
                      {/* <div>
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
                      </div> */}
                      <div>
                        <Button
                          style={{ width: "100px" }}
                          type="submit"
                          appearance="primary"
                          color="red"
                          // className="comment-btn"
                          data-bs-dismiss="modal"
                          disabled={!reasons || /^\s+$/.test(reasons)}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default DocumentRequestHome;
