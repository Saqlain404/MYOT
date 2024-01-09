import React, { useEffect, useState } from "react";
import { SignatoryRequestsData } from "../../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

const Document = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [requests, setRequests] = useState({
    columns: [
      {
        label: "Template Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Assigned To",
        field: "assigned",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Priority",
        field: "priority",
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
    getRequestsData();
  }, []);

  const getRequestsData = async () => {
    let { data } = await SignatoryRequestsData();
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.list;
      // console.log(values)
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templete_Id?.templeteName;
        returnData.assigned = (
          <>
            <img
              className="w_20_h_20"
              src={list?.templete_Id?.manager?.profile_Pic}
              alt=""
            />
            <span className="ms-2 text-capitalize">
              {list?.templete_Id?.manager?.name}
            </span>
          </>
        );
        returnData.priority = list?.priority;
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
                : "text-success"
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
              </li> */}
              {/* <li>
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
                  //   to={`/Admin/Requests/Comments/${document?._id}`}
                >
                  <img src="/images/dashboard/Comment.png" className="me-2" />
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
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete Template
                </a>
              </li>
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
  return (
    <div className="position-relative">
      <p className="table-name mb-2">Document Requests</p>
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
              {requests?.selectedColumns && requests?.selectedColumns.length}
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
      <div className="col-12 mdb_table mt-3 ">
        <div className="table-responsive">
          <MDBDataTable
            bordered
            displayEntries={false}
            entries={5}
            className="text-nowrap"
            hover
            data={{ ...requests, columns: visibleColumns }}
            noBottomColumns
            paginationLabel={"«»"}
            sortable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Document;
