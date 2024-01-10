import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
// import "assets/css/style.min.css"
import { Link, useNavigate } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import {
  DasboardCount,
  DocRequestCount,
  EmployeeDashList,
  PresentDocumentDash,
  searchDash,
  totalTicketCount,
} from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import moment from "moment";
import { MDBDataTable } from "mdbreact";

const EmployeeDash = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [templateNames, setTemplateNames] = useState(null);
  const [documentRequests, setDocumentRequests] = useState([]);

  const [showClearButton, setShowClearButton] = useState(false);

  const [tasks, setTasks] = useState({
    columns: [
      {
        label: "Document Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      // {
      //   label: "Assign To",
      //   field: "assigned",
      //   sort: "asc",
      //   width: 50,
      //   selected: false,
      // },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        searchable: true,
        selected: false,
      },

      {
        label: "Login",
        field: "date",
        sort: "asc",
        width: 100,
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
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
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
    // handleSearch
    getTaskData();
  }, []);

  const getTaskData = async () => {
    let data = await EmployeeDashList(ids);
    console.log(data);

    const newRows = [];
    if (!data?.error) {
      let values = data[0];
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templete_Id?.templeteName;
        // returnData.assigned = (
        //   <>
        //     <img
        //       className="w_20_h_20"
        //       src={list?.templete_Id?.manager?.profile_Pic}
        //       alt=""
        //     />
        //     <span className="ms-2 text-capitalize">
        //       {list?.templete_Id?.manager?.name}
        //     </span>
        //   </>
        // );
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
          list?.templete_Id?.manager?.department_Id?.departmentName;
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
        // returnData.comments = (
        //   <>
        //     <div className="text-center">
        //       <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //         <img
        //           src="/images/dashboard/Comment.png"
        //           className="mx-auto d-block"
        //         />
        //       </a>
        //       <form
        //         className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
        //         onSubmit={(e) => handleSubmitComment(e, list?._id)}
        //       >
        //         <div className="mb-3 border-bottom">
        //           <label className="form-label th-text">Comment or type</label>

        //           <input
        //             type="text"
        //             className="form-control border-0"
        //             value={comment}
        //             onChange={(e) => setComment(e.target.value)}
        //             placeholder="Enter comment"
        //           />
        //         </div>

        //         <div className="d-flex justify-content-between">
        //           <div>
        //             <img
        //               src="/images/tasks/assign comments.svg"
        //               alt=""
        //               className="comment-img"
        //             />
        //             <img
        //               src="/images/tasks/mention.svg"
        //               alt=""
        //               className="comment-img"
        //             />
        //             <img
        //               src="/images/tasks/task.svg"
        //               alt=""
        //               className="comment-img"
        //             />
        //             <img
        //               src="/images/tasks/emoji.svg"
        //               alt=""
        //               className="comment-img"
        //             />
        //             <img
        //               src="/images/tasks/attach_attachment.svg"
        //               alt=""
        //               className="comment-img"
        //             />
        //           </div>
        //           <div>
        //             <button type="submit" className="comment-btn btn-primary">
        //               Comment
        //             </button>
        //           </div>
        //         </div>
        //       </form>
        //     </div>
        //   </>
        // );
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
                <Link
                  class="dropdown-item"
                  to={`/Employee/Comment/${list?._id}`}
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
                    src="/images/DownloadSimple.svg"
                    alt=""
                    className="me-2"
                  />
                  Download
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

        newRows.push(returnData);
      });
      setTasks({ ...tasks, rows: newRows });
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
      <div key={column.field}>
        <input
          type="checkbox"
          checked={tasks.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
        />
        <label>{column.label}</label>
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

  const toggleSortOrder = () => {
    const currentSortType = tasks.sortType === "asc" ? "desc" : "asc";
    const sortedRows = [...tasks.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
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

  
  // Dasboard Count API
  const [totalDocument, setTotalDocument] = useState(null);
  const [pendingDocument, setPendingDocument] = useState(null);

  useEffect(() => {
    const count = async () => {
      const dashbaordCountResult = await DasboardCount();
      if (!dashbaordCountResult?.error && dashbaordCountResult?.data) {
        const count = dashbaordCountResult?.data?.results.totalDocument;
        const receivedDocCount =
          dashbaordCountResult?.data?.results?.pendingDocument;
        // console.log(dashbaordCountResult);
        setTotalDocument(count);
        setPendingDocument(receivedDocCount);
      }
    };
    count();
  }, []);

  const [docCount, setDocCount] = useState();
  useEffect(() => {
    const presentDoc = async () => {
      const data = await PresentDocumentDash(ids);
      setDocCount(data?.[0]?.results);
      console.log(data?.[0]?.results);
    };
    presentDoc();
  }, []);

  const [ticketCount, setTotalTicket] = useState();
  useEffect(() => {
    const totalTicket = async () => {
      const data = await totalTicketCount(ids);
      setTotalTicket(data?.[0]?.results);
      console.log(data?.[0]?.results);
    };
    totalTicket();
  }, []);

  // Doc Request Count
  const [docRequestCount, setDocRequestCount] = useState();
  useEffect(() => {
    const requestCount = async () => {
      const data = await DocRequestCount();
      setDocRequestCount(data?.[0]?.document);
    };
    requestCount();
  }, []);
  

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
                      /Dashboard
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
                      onChange={(e) => {
                        setSearchData(e.target.value);
                        //  handleSearch();
                      }}
                      value={searchData.searchTerm}
                    />
                  </form> */}
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

            <div className="col-12 mb-4">
              <div className="row statics_part">
                <div className="col-md-3">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">Total Document</h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {totalDocument !== null && totalDocument}
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
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Total Pending Request
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {pendingDocument !== null && pendingDocument}
                      </h3>
                      {/* <span className="card-insights fw-bold m-auto">
                        -0.56%
                        <img
                          src="/images/dashboard/ArrowFall.png"
                          alt=""
                          className="ps-1"
                        />
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-1-3">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Recently Documents
                      </h6>
                    </div>
                    <div className="d-flex  mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {pendingDocument !== null && pendingDocument}
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
                <div className="col-md-3 ">
                  <div className="statics_box card-clr-2-4">
                    <div className="statics_left">
                      <h6 className="mb-0 header-card-text">
                        Document Request
                      </h6>
                    </div>
                    <div className="d-flex mt-4">
                      <h3 className="card-text-count mb-0 fw-semibold fs-7">
                        {totalDocument !== null && totalDocument}
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
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="dashboard-card bg-light ">
                    <div className="d-flex justify-content-around dashboard-card-text">
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
                          <td
                            style={{ paddingRight: 70 }}
                            className="text-nowrap"
                          >
                            <img
                              src="/images/dashboard/active-dot.svg"
                              alt=""
                            />{" "}
                            Active
                          </td>
                          <td>{docCount?.completePresent}%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/under-review-dot.svg"
                              alt=""
                            />
                            Under Review
                          </td>
                          <td>{docCount?.pendingPresent}%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/approve-dot.svg"
                              alt=""
                            />
                            Approved
                          </td>
                          <td>{docCount?.approvedPresent}%</td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="/images/dashboard/rejected-dot.svg"
                              alt=""
                            />
                            Rejected
                          </td>
                          <td>{docCount?.rejectedPresent}%</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 ">
                  <div className="dashboard-card2 ">
                    <p className="dashboard-card2-text">Open Tickets</p>
                    <p className="text-card  mb-3">
                      {ticketCount?.totalComplete} / {ticketCount?.totalTicket}
                    </p>
                    <p className=" mb-1 dashboard-card2-text">
                      Profile Completion
                    </p>

                    <div className="progress-bar">
                      <div className="progress-container">
                        <div
                          className="progress"
                          style={{ width: `${ticketCount?.completepresent}%` }}
                        ></div>
                        <span className="progress-label">{`${ticketCount?.completepresent}%`}</span>
                      </div>
                    </div>
                    <p className=" mb-1 dashboard-card2-text">Status</p>
                    <div className="progress-bar">
                      <div className="progress-container">
                        <div
                          className="progress"
                          style={{
                            width: `${ticketCount?.InprogressPresent}%`,
                          }}
                        ></div>
                        <span className="progress-label">{`In Progress / ${ticketCount?.InprogressPresent}%`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div
                    className="dashboard-card3 bg-light "
                    style={{ maxHeight: "400px", overflowY: "auto" }}
                  >
                    <p className="text-card">Document Request</p>
                    <div className="table-card3 dashboard-card3-text">
                      {docRequestCount?.map((doc) => (
                        <div className="pb-2 row align-items-center ">
                          <div className="doc-req-text col-6">
                            {doc?._id?.[0]?.[0]?.[0]?.departmentName &&
                              doc._id[0][0][0].departmentName.split(" ")[0]}
                          </div>
                          <div
                            className="doc-req-bar col-6"
                            style={{ width: `${doc?.count * 10}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-relative mt-5">
              <p className="table-name mb-2">Documents</p>
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
                </div>
                <form className="d-flex me-2" role="search"></form>
              </div>

              <div className="col-12 mdb_table mt-3 mb-4">
                <div className="table-responsive">
                  <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={5}
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
        </div>
      </div>
    </>
  );
};

export default EmployeeDash;
