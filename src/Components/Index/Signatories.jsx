import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import {
  SignatoryList,
  SignatorySearch,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { MDBDataTable } from "mdbreact";
import ViewUser from "./ViewUser";
import { Checkbox } from "rsuite";

const Signatories = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [userId, setUserId] = useState();
  const [signatories, setSignatories] = useState({
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Emp Id",
        field: "empId",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Last Logged In",
        field: "login",
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
    getSignatoriesData();
  }, []);

  const getSignatoriesData = async () => {
    let id = await localStorage.getItem("myot_admin_id")
    let { data } = await SignatoryList(id);
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.signatory;
      console.log(values);
      values?.map((list, index) => {
        let returnData = {};
        returnData.name = list?.name;
        returnData.department = list?.department_Id[0]?.departmentName;
        returnData.empId = list?.employId;
        returnData.login =
          (list?.login && moment(list?.login).format("L")) || "NA";
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
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={() => setUserId(list?._id)}
                >
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
      setSignatories({ ...signatories, rows: newRows });
    }
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...signatories.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setSignatories({ ...signatories, selectedColumns: updatedSelectedColumns });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...signatories.hiddenColumns,
      ...signatories.selectedColumns,
    ];
    setSignatories({
      ...signatories,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = signatories.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={signatories.selectedColumns.includes(column.field)}
          onChange={() => handleCheckboxChange(column.field)}
          defaultChecked>
          {" "}
          {column.label}
        </Checkbox>
      </div>
    ),
  }));

  const visibleColumns = columnsWithCheckboxes.filter(
    (column) => !signatories.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setSignatories({ ...signatories, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
  };

  const toggleSortOrder = () => {
    const currentSortType = signatories.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...signatories.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setSignatories({
      ...signatories,
      rows: sortedRows,
      sortType: currentSortType,
    });
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
                  <a className="nav-link fw-bold">Signatories</a>
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

            <div className="position-relative">
              <p className="table-name mb-2">Signatories</p>
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
                      onClick={toggleSortOrder}
                      src="/images/dashboard/ArrowsDownUp.png"
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
                      {signatories?.selectedColumns &&
                        signatories?.selectedColumns.length}
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
                      src={require("../../assets/logo/search.png")}
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
                    data={{ ...signatories, columns: visibleColumns }}
                    // data={signatories}
                    noBottomColumns
                    // paging={signatories?.length < 5 ? true: false}
                    paginationLabel={"«»"}
                    sortable={false}
                  />
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <ViewUser userId={userId} />
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

export default Signatories;
