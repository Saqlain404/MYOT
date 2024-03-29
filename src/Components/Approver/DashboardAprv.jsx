import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import {
  AnalyticsDataAprv,
  approvedTemplete,
  approverTempleteList,
  dashCount,
  rejectedTemplete,
  searchTemplete,
  totalDocRequestAprv,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import moment from "moment";
import GradientLineChartApprv from "./GradientLineChartApprv";
import { MDBDataTable } from "mdbreact";
import { Checkbox } from "antd";
import { Button } from "rsuite";

const DashboardAprv = () => {
  const [searchData, setSearchData] = useState("");
  const [documentRequests, setDocumentRequests] = useState([]);
  const [countData, setCountData] = useState();
  const [updatedStatus, setUpdatedStatus] = useState();
  const [showClearButton, setShowClearButton] = useState(false);
  const [reasons, setReason] = useState();
  const [document_Id, setDocument_Id] = useState();

  const [tasks, setTasks] = useState({
    columns: [
      {
        label: "Template Name",
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
      {
        label: "Version",
        field: "version",
        sort: "asc",
        width: 100,
        selected: false,
      },
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

  useEffect(()=>{
    getTaskData()
  },[])

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

  // const handleSearch = async () => {
  //   const result = await searchTemplete(searchData, ids);
  //   const searchResult = result?.data?.results?.templete;
  //   console.log(searchResult);

  //   if (searchResult && Array.isArray(searchResult)) {
  //     const mappedResult = searchResult?.map((document) => ({
  //       documentName: document?.templeteName,
  //       img: [document?.manager?.[0]?.profile_Pic],
  //       version: document?.templeteVersion?.[0]?.version,
  //       assignedTo: [document?.manager?.[0]?.name],
  //       department: [document?.manager?.[0]?.department?.[0]?.departmentName],
  //       action: (
  //         <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
  //       ),
  //       dateofSigning: [moment(document?.createdAt).format("L")],
  //       comments: (
  //         <img
  //           src="/images/dashboard/Comment.png"
  //           className="mx-auto d-block"
  //         />
  //       ),
  //       status: [document?.status],
  //     }));
  //     setDocumentRequests(mappedResult);
  //   }
  // };

  // useEffect(() => {
  //   getTaskData();
  // }, []);

  const getTaskData = async () => {
    let data = await approverTempleteList(ids);
    console.log(data);

    const newRows = [];
    if (!data?.error) { 
      let values = data;
      console.log(values);
      values?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.assigned = (
          <>
            <img
              className="w_20_h_20"
              src={list?.manager?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">{list?.manager?.name}</span>
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
        returnData.date = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" />{" "}
            <span className="ms-2">{moment(list?.createdAt).format("L")}</span>
          </>
        );
        returnData.department = list?.manager?.department_Id?.departmentName || "NA";
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
        returnData.comments = (
          <>
            <div className="text-center">
              <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src="/images/dashboard/Comment.png"
                  className="mx-auto d-block"
                />
              </a>
              {/* <form
                className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
                onSubmit={(e) => handleSubmit(e, list?._id)}
              >
                <div className="mb-3 border-bottom">
                  <label className="form-label th-text">Comment or type</label>

                  <input
                    type="text"
                    className="form-control border-0"
                    // value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter comment"
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
                  {/* <div>
                    <button type="submit" className="comment-btn btn-primary">
                      Comment
                    </button>
                  </div> */}
              {/* </div>
              </form> */}{" "}
              */
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
                  to={`/Approver/Template-view/${list?._id}`}
                  className="text-decoration-none"
                >
                  <a class="dropdown-item border-bottom" href="/">
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
                <Link
                  class="dropdown-item"
                  to={`/Approver/Comment/${list?._id}`}
                >
                  <img
                    src="/images/dashboard/Comment.png"
                    alt=""
                    className="me-2"
                  />
                  Comments
                </Link>
              </li>
              {list.status !== "Approved" && (
              <li>
                <a
                  onClick={() => approved(list?._id)}
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
                {list.status !== "Rejected" && (
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

  const approved = async (document_Id) => {
    const approveData = await approvedTemplete(document_Id);
    getTaskData()
  };
  const submitReason = async (e) => {
    e.preventDefault();
    const rejectedData = await rejectedTemplete(document_Id, {
      reasons,
    });
    if(rejectedData){
      setReason("")
    getTaskData();
    }
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...tasks.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setTasks({ ...tasks, selectedColumns: updatedSelectedColumns });
  };

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

  const columnsWithCheckboxes = tasks.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={tasks.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          defaultChecked>
          {column.label}
        </Checkbox>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !tasks.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setTasks({ ...tasks, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };
  const count = async () => {
    const data = await dashCount();
    console.log(data)
    setCountData(data);
  };

  useEffect(() => {
    count();
  }, []);

  const [analyticsData, setAnalyticsData] = useState([]);
  const [docTempleteData, setDocTempleteData] = useState([]);

  useEffect(() => {
    getAnalyticsData();
    getTotalDocData();
  }, []);

  const getAnalyticsData = async () => {
    let { data } = await AnalyticsDataAprv();
    console.log(data);
    if (!data?.error) {
      setAnalyticsData(data?.results);
      console.log(analyticsData);
    }
  };
  const getTotalDocData = async () => {
    let { data } = await totalDocRequestAprv();
    if (!data?.error) {
      setDocTempleteData(data?.results?.totalDocument);
      console.log(docTempleteData);
    }
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
    console.log(sortedRows);
    setTasks({
      ...tasks,
      rows: sortedRows,
      sortType: currentSortType,
    });
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
                    <a className="nav-link fw-bold ms-2">
                      Dashboard
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  {/* <form class="" role="search">
                    <input
                      class="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form> */}
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Users</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {countData?.totalUser[0]?.count || 0 }
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Templates</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {countData?.totalTemplete[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Documents Generated
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {countData?.totalDocument[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Active Users</h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {countData?.totalActiveUser[0]?.count || 0}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-9 mt-4 ">
                  <GradientLineChartApprv
                    tempData={analyticsData?.totalTemplete}
                    // activeUserData={analyticsData?.totalActiveUser}
                  />
                  {/* <div className="dashboard-card bg-light ">
                    <div className="d-flex justify-content-around dashboard-card-text">
                      <p>Templates </p>
                      <p>Documents </p>
                      <p>Current Week </p>
                      <p>Previous Week</p>
                    </div>
                    <div className="d-flex justify-content-around">
                      <img
                        src="/images/dashboard/circle-analytics.png"
                        alt=""
                        className="m-4"
                      />
                      <table className="ms-2 dashboard-card-text">
                        <tr>
                          <td style={{paddingRight: 70}} className="text-nowrap">
                            <img src="/images/dashboard/active-dot.svg" alt="" /> Active</td>
                          <td>38.6%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/under-review-dot.svg" alt="" />Under Review</td>
                          <td>22.5%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/approve-dot.svg" alt="" />Approved</td>
                          <td>30.8%</td>
                        </tr>
                        <tr>
                          <td>
                          <img src="/images/dashboard/rejected-dot.svg" alt="" />Rejected</td>
                          <td>8.1%</td>
                        </tr>
                      </table>
                    </div>
                  </div> */}
                </div>

                <div className="col-md-3 mt-4">
                  <div
                    className="dashboard-card3 bg-light "
                    style={{ maxHeight: "320px", overflowY: "auto" }}
                  >
                    <p className="text-card">Document Request</p>
                    <div className="table-card3 dashboard-card3-text mt-3">
                      {docTempleteData?.map((doc,index) => (
                        <div className="pb-2 row align-items-center" key={index}>
                          <div className="doc-req-text col-6 me-2">
                            {doc?._id?.[0]?.[0]?.[0]?.departmentName &&
                              doc._id[0][0][0].departmentName.split(" ")[0] || "NA"}
                          </div>
                          <div
                            className="doc-req-bar col-6 "
                            style={{ width: `${doc?.count}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-relative mt-4">
              <p className="table-name mb-2">Templates</p>
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
            </div>
          </div>
          <div className="col">
            <RightSidebar />
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
      </div>
    </>
  );
};

export default DashboardAprv;
