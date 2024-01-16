import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import {
  RequestsList,
  SearchRequests,
} from "../../ApiServices/departmentHttpService/departmentHttpService";
import { useEffect } from "react";
import moment from "moment";
import { MDBDataTable } from "mdbreact";

const RequestsDept = () => {
  const documents = [
    {
      id: 1,
      document: "Employment Contract",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" alt="" />,
      ],
      assignedTo: (
        <img src="/images/dashboard/Avatar2.png" className="me-2" alt="" />
      ),
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img
          src="/images/dashboard/Comment.png"
          className="mx-auto d-block"
          alt=""
        />
      ),
      actions: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 2,
      document: "Tax Deduction at Source (TDS)",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" alt="" />,
      ],
      assignedTo: (
        <img src="/images/dashboard/Avatar2.png" className="me-2" alt="" />
      ),
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img
          src="/images/dashboard/Comment.png"
          className="mx-auto d-block"
          alt=""
        />
      ),
      actions: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 3,
      document: "Training Certificates",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" alt="" />,
      ],
      assignedTo: (
        <img src="/images/dashboard/Avatar2.png" className="me-2" alt="" />
      ),
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-success m-0">Complete</p>,
      department: "Human Resources",
      comment: (
        <img
          src="/images/dashboard/Comment.png"
          className="mx-auto d-block"
          alt=""
        />
      ),
      actions: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 4,
      document: "Software Licenses",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" alt="" />,
      ],
      assignedTo: (
        <img src="/images/dashboard/Avatar2.png" className="me-2" alt="" />
      ),
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Information Technologies",
      comment: (
        <img
          src="/images/dashboard/Comment.png"
          className="mx-auto d-block"
          alt=""
        />
      ),
      actions: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },
    {
      id: 5,
      document: "Reference Letter",
      requester: [
        <img src="/images/dashboard/Avatar.png" className="me-2" alt="" />,
      ],
      assignedTo: (
        <img src="/images/dashboard/Avatar2.png" className="me-2" alt="" />
      ),
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      comment: (
        <img
          src="/images/dashboard/Comment.png"
          className="mx-auto d-block"
          alt=""
        />
      ),
      actions: (
        <img
          src="/images/sidebar/ThreeDots.svg"
          className="w-auto p-3"
          alt=""
        />
      ),
    },

    // Add more tasks here
  ];

  const [listItems, setListItems] = useState([]);
  const [search, setSearch] = useState("");

  
  // const [checkedCheckboxes, setCheckedCheckboxes] = useState({
  //   templateName: false,
  //   requesterName: false,
  //   date: false,
  //   actions: false,
  //   comment: false,
  // });
  // const [hiddenColumns, setHiddenColumns] = useState({
  //   templateName: false,
  //   requesterName: false,
  //   date: false,
  //   actions: false,
  //   comment: false,
  // });

  // const handleCheckboxChange = (checkboxName) => {
  //   setCheckedCheckboxes({
  //     ...checkedCheckboxes,
  //     [checkboxName]: !checkedCheckboxes[checkboxName],
  //   });
  // };
  // const countCheckedCheckboxes = () => {
  //   let count = 0;
  //   for (const checkbox in checkedCheckboxes) {
  //     if (checkedCheckboxes[checkbox]) {
  //       count++;
  //     }
  //   }
  //   return count;
  // };

  // const handleHideSelected = () => {
  //   const updatedHiddenColumns = { ...hiddenColumns };
  //   for (const checkbox in checkedCheckboxes) {
  //     if (checkedCheckboxes[checkbox]) {
  //       updatedHiddenColumns[checkbox] = true;
  //     }
  //   }
  //   setHiddenColumns(updatedHiddenColumns);
  //   setCheckedCheckboxes({
  //     templateName: false,
  //     requesterName: false,
  //     date: false,
  //     actions: false,
  //     comment: false,
  //   });
  // };

  const [showClearButton, setShowClearButton] = useState(false);

  const [requests, setRequests] = useState({
    columns: [
      {
        label: "Template Name",
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
        width: 100,
        selected: false,
      },
      {
        label: "Comment",
        field: "comment",
        sort: "asc",
        width: 100,
        searchable: true,
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
    getRequestData();
  }, []);

  const getRequestData = async () => {
    let { data } = await RequestsList();
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.list;
      console.log(values);
      values?.map((list, index) => {
        let returnData = {};
        returnData.template = list?.templete?.[0]?.templeteName;
        returnData.requester = (
          <>
            <img
              className="w_20_h_20"
              src={list?.templete?.[0]?.manager?.[0]?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">{list?.templete?.[0]?.manager?.[0]?.name}</span>
          </>
        );;
        returnData.date = (list?.createdAt && moment(list?.createdAt).format("L")) || "NA";
        returnData.comment = (
          <>
            <div className="text-center">
              <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src="/images/dashboard/Comment.png"
                  className="mx-auto d-block"
                />
              </a>
              <form
                className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
                // onSubmit={(e) => handleSubmit(e, list?._id)}
              >
                <div className="mb-3 border-bottom">
                  <label className="form-label th-text">Comment or type</label>

                  <input
                    type="text"
                    className="form-control border-0"
                    // value={comment}
                    // onChange={(e) => setComment(e.target.value)}
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
          </>
        );
        // returnData.login =
        //   (list?.login && moment(list?.login).format("L")) || "NA";
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
                <Link class="dropdown-item">
                  <img
                    src="/images/users/AddressBook.svg"
                    alt=""
                    className="me-2"
                  />
                  View Users Details
                </Link>
              </li>
              <li>
                <a class="dropdown-item">
                  <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  />
                  Wrap Column
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
      setRequests({ ...requests, rows: newRows });
    }
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...requests.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setRequests({ ...requests, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...requests.hiddenColumns,
      ...requests.selectedColumns,
    ];
    setRequests({
      ...requests,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = requests.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field}>
        <input
          type="checkbox"
          checked={requests.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          className="me-1 mt-1"
        />
        <label>{column.label}</label>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !requests.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setRequests({ ...requests, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  const toggleSortOrder = () => {
    const currentSortType = requests.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...requests.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setRequests({
      ...requests,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  useEffect(() => {
    getRequestsLists();
  }, []);

  const getRequestsLists = async (key) => {
    const { data } = await RequestsList();
    if (!data?.error) {
      setListItems(data?.results?.list);
    }
  };
  console.log(listItems);

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value.length > 0) {
      let { data } = await SearchRequests({ search: value });
      if (!data?.error) {
        setListItems(data?.results?.document);
      }
    } else {
      getRequestsLists();
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
                    <Link to={"/Department/Chat"}>
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
                  {/* <img
                    src="/images/dashboard/Plus-icon.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  /> */}
                  {/* <img
                    src="/images/dashboard/FunnelSimple.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                  /> */}
                  <img
                    src="/images/dashboard/ArrowsDownUp.png"
                    alt=""
                    className="p-2 table-searchbar-img"
                    onClick={toggleSortOrder}
                  />
                  <img
                    src="/images/dashboard/DotsThreeOutlineVertical2.png"
                    alt=""
                    className="p-2 table-searchbar-img border-end"
                  />
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around table-searchbar-txt">
                <p className="m-0 text-nowrap">
                      {requests?.selectedColumns &&
                        requests?.selectedColumns.length}
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

            <div className="col-12 mdb_table mdb3 mt-3 ">
              <div className="table-responsive">
              <MDBDataTable
                    bordered
                    displayEntries={false}
                    entries={5}
                    className="text-nowrap"
                    hover
                    data={{ ...requests, columns: visibleColumns }}
                    // data={approvers}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                  />
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
        </div>
      </div>
    </>
  );
};

export default RequestsDept;
