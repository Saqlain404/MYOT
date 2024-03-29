import React, { useEffect, useState } from "react";

import "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import { MDBDataTable } from "mdbreact";
import Swal from "sweetalert2";
import { Checkbox } from "rsuite";
import {
  AddCommentForTask,
  GetAllTemplateList,
  TemplateCount,
  TemplateDelete,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import RightSidebar from "../../RightSidebar";
import Sidebar from "../../Sidebar";
import ViewTemp from "../../Signatory/ViewTemplate/ViewTemp";

const TemplateList = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [adminCount, setAdminCount] = useState();
  const [comment, setComment] = useState("");
  const [totalCount, setTotalCount] = useState("");
  const [templete_Id, setTemplete_Id] = useState();
  const [viewTemplateId, setViewTemplateId] = useState();

  const [templates, setTemplates] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: false,
        width: 50,
        selected: false,
      },
      {
        label: "Assigned To",
        field: "assigned",
        width: 50,
        selected: false,
      },
      {
        label: "Version",
        field: "version",
        width: 100,
        selected: false,
      },
      {
        label: "Status",
        field: "status",
        width: 100,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        width: 100,
        searchable: true,
        selected: false,
      },
      {
        label: "Comments",
        field: "comments",
        width: 100,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        width: 100,
        selected: false,
      },
    ],
    rows: [],
    hiddenColumns: [],
    selectedColumns: [],
    sortColumnName: "name",
    sortType: "asc",
  });

  const searchLabelHtml = `
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="fa fa-search"></i>
      </span>
    </div>
  Search..
  </div>
`;

  useEffect(() => {
    getAllTemplates();
    getTotalCount();
  }, []);

  const getTotalCount = async () => {
    let id = await localStorage.getItem("myot_admin_id");
    try {
      let { data } = await TemplateCount(id);
      console.log(data);
      setTotalCount(data?.results);
    } catch (error) {}
  };

  //   const getAdminCount = async () => {
  //     let id = localStorage.getItem("myot_admin_id");
  //     let { data } = await AdminDashboardCount(id);
  //     if (!data?.error) {
  //       setAdminCount(data?.results);
  //       console.log(data?.results);
  //     }
  //   };

  const getAllTemplates = async () => {
    let id = localStorage.getItem("myot_admin_id");
    let { data } = await GetAllTemplateList(id);
    console.log(data);
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.templete;
      values?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.updatedAt));
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.assigned = (
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
        returnData.version = (
          <>
            {list?.templeteVersion && list?.templeteVersion?.length > 0
              ? ` ${
                  list?.templeteVersion[list?.templeteVersion.length - 1]
                    ?.version
                }`
              : "No versions found"}
          </>
        );
        returnData.department =
          list?.manager[0]?.department[0]?.departmentName || "NA";
        returnData.status = (
          <span
            className={`"td-text status" ${
              list?.status === "Pending"
                ? "text-info"
                : list?.status === "Approved"
                ? "text-warning"
                : list?.status === "In Progress"
                ? "text-primary"
                : list?.status === "Rejected"
                ? "text-danger"
                : "text-success"
            }`}
          >
            {list?.status}
          </span>
        );
        returnData.comments = (
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
                  to={`/Admin/Home/Comments/${list?._id}`}
                >
                  <img
                    src="/images/dashboard/Comment.png"
                    alt=""
                    className="me-2"
                  />
                  Comments
                </Link>
              </li>
              <li
                onClick={() => setViewTemplateId(list?._id)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
              >
                <a class="dropdown-item border-bottom" href="#">
                  <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  />
                  View Template Details
                </a>
              </li>
              <li
                className="cursor_pointer"
                onClick={() => deleteTemplate(list?._id)}
              >
                <a class="dropdown-item text-danger">
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete Template
                </a>
              </li>
            </ul>
          </div>
        );

        newRows.push(returnData);
      });
      setTemplates({ ...templates, rows: newRows });
    }
  };

  const deleteTemplate = async (id) => {
    try {
      let { data } = await TemplateDelete(id);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Templates deleted successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getAllTemplates();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = templates.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...templates.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name < b.name) {
        comparison = -1;
      } else if (a.name > b.name) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });

    setTemplates({
      ...templates,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...templates.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setTemplates({ ...templates, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...templates.hiddenColumns,
      ...templates.selectedColumns,
    ];
    setTemplates({
      ...templates,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = templates.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={templates.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
          defaultChecked
        >
          {" "}
          {column.label}
        </Checkbox>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !templates.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setTemplates({ ...templates, hiddenColumns: [], selectedColumns: [] });
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
    let { data } = await AddCommentForTask({
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
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold">Templates</a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Admin/Chat"}>
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

            <div className="row">
              <div className="col-12 mb-4">
                <div className="row statics_part">
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-1-3">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Total Template Create
                        </h6>
                      </div>
                      <div className="d-flex  mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalTemplete &&
                            totalCount?.totalTemplete[0]?.count) ||
                            0}
                        </h3>
                        {/* <span className="card-insights fw-bold m-auto">
                          +11.01%
                          <img
                            src="/images/dashboard/ArrowRise.png"
                            alt=""
                            className="ps-1"
                          />
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-2-4">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Template Awaiting
                        </h6>
                      </div>
                      <div className="d-flex  mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalAwaitingTemplete &&
                            totalCount?.totalAwaitingTemplete[0]?.count) ||
                            0}
                        </h3>
                        {/* <span className="card-insights fw-bold m-auto">
                          +9.15%
                          <img
                            src="/images/dashboard/ArrowRise.png"
                            alt=""
                            className="ps-1"
                          />
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-1-3">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Recently Approved
                        </h6>
                      </div>
                      <div className="d-flex  mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalApprovedTemplete &&
                            totalCount?.totalApprovedTemplete[0]?.count) ||
                            0}
                        </h3>
                        {/* <span className="card-insights fw-bold m-auto">
                          -0.65%
                          <img
                            src="/images/dashboard/ArrowFall.png"
                            alt=""
                            className="ps-1"
                          />
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-md-2">
                    <div className="statics_box card-clr-2-4">
                      <div className="statics_left">
                        <h6 className="mb-0 header-card-text">
                          Total Pending Templates
                        </h6>
                      </div>
                      <div className="d-flex mt-4">
                        <h3 className="card-text-count mb-0 fw-semibold fs-7">
                          {(totalCount?.totalPendingTemplete &&
                            totalCount?.totalPendingTemplete[0]?.count) ||
                            0}
                        </h3>
                        {/* <span className="card-insights fw-bold m-auto">
                          -1.48%
                          <img
                            src="/images/dashboard/ArrowFall.png"
                            alt=""
                            className="ps-1"
                          />
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-relative mb-3">
              <p className="table-name mb-2">All Templates</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    {/* <img
                      src="/images/dashboard/Plus-icon.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    /> */}
                    <img
                      onClick={toggleSortOrder}
                      src="/images/dashboard/ArrowsDownUp.png"
                      className="p-2 table-searchbar-img border-end cursor_pointer"
                    />
                  </div>
                  <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
                    <p className="m-0 text-nowrap">
                      {templates?.selectedColumns &&
                        templates?.selectedColumns.length}
                      <span> Selected</span>
                    </p>
                    {showClearButton ? (
                      <p
                        className="hide-selected m-0 text-nowrap cursor_pointer "
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
                    data={{ ...templates, columns: visibleColumns }}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                    searching
                  />
                </div>
              </div>
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
        </div>
      </div>
    </>
  );
};

export default TemplateList;
