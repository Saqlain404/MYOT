import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import { SignatoryDocsAccessLog } from "../../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import moment from "moment";
import { Link } from "react-router-dom";
import { Checkbox } from "rsuite";

const DocsAccess = ({ admin_id }) => {
  const [showClearButton, setShowClearButton] = useState(false);

  const [completedDocs, setCompletedDocs] = useState({
    columns: [
      {
        label: "Document Name",
        field: "name",
        sort: "asc",
        width: 50,
      },
      {
        label: "Creator Name",
        field: "creator",
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
        label: "Login",
        field: "login",
        sort: "asc",
        width: 100,
      },
      {
        label: "IP Address",
        field: "ip",
        sort: "asc",
        width: 100,
      },
      {
        label: "Version",
        field: "version",
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
    if (admin_id) {
      console.log(admin_id);
      getDocsAccessLog();
    }
  }, [admin_id]);

  const getDocsAccessLog = async () => {
    let { data } = await SignatoryDocsAccessLog("6564816c42ca2ce84e2ed3f2");
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.completTemplete;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.name = list?.templeteName;
        returnData.creator = (
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
        returnData.login = "NA" || moment(list?.createdAt).format("L");
        returnData.department = list?.manager[0]?.department[0]?.departmentName;
        returnData.version = list?.templeteVersion[0]?.version;
        // returnData.status = (
        //   <span
        //     className={`"td-text status" ${
        //       list?.status === "Pending"
        //         ? "text-info"
        //         : list?.status === "Approved"
        //         ? "text-warning"
        //         : list?.status === "In Progress"
        //         ? "text-primary"
        //         : "text-success"
        //     }`}
        //   >
        //     {list?.status}
        //   </span>
        // );
        returnData.actions = (
          <div class="">
            <a type="" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="/images/sidebar/ThreeDots.svg"
                className="w-auto cursor_pointer"
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
        // returnData.comments = (
        //   <div className="">
        //     <a type="" data-bs-toggle="dropdown" aria-expanded="false">
        //       <img
        //         src="/images/dashboard/Comment.png"
        //         className="mx-auto d-block"
        //       />
        //     </a>
        //     <form
        //       className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
        //       // onSubmit={(e) => handleSubmit(e, template?._id)}
        //     >
        //       <div className="mb-3 border-bottom">
        //         <label className="form-label th-text">Comment or type</label>

        //         <input
        //           type="text"
        //           className="form-control border-0"
        //           // value={""}
        //           placeholder="Enter your comment..."
        //           // value={comment}
        //           // onChange={(e) => setComment(e.target.value)}
        //         />
        //       </div>

        //       <div className="d-flex justify-content-between">
        //         <div>
        //           <img
        //             src="/images/tasks/assign comments.svg"
        //             alt=""
        //             className="comment-img"
        //           />
        //           <img
        //             src="/images/tasks/mention.svg"
        //             alt=""
        //             className="comment-img"
        //           />
        //           <img
        //             src="/images/tasks/task.svg"
        //             alt=""
        //             className="comment-img"
        //           />
        //           <img
        //             src="/images/tasks/emoji.svg"
        //             alt=""
        //             className="comment-img"
        //           />
        //           <img
        //             src="/images/tasks/attach_attachment.svg"
        //             alt=""
        //             className="comment-img"
        //           />
        //         </div>
        //         <div>
        //           <button type="submit" className="comment-btn btn-primary">
        //             Comment
        //           </button>
        //         </div>
        //       </div>
        //     </form>
        //   </div>
        // );

        newRows.push(returnData);
      });
      setCompletedDocs({ ...completedDocs, rows: newRows });
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = completedDocs.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...completedDocs.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setCompletedDocs({
      ...completedDocs,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...completedDocs.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setCompletedDocs({
      ...completedDocs,
      selectedColumns: updatedSelectedColumns,
    });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...completedDocs.hiddenColumns,
      ...completedDocs.selectedColumns,
    ];
    setCompletedDocs({
      ...completedDocs,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = completedDocs.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={completedDocs.selectedColumns.includes(column.field)}
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
    (column) => !completedDocs.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setCompletedDocs({
      ...completedDocs,
      hiddenColumns: [],
      selectedColumns: [],
    });
    setShowClearButton(false);
  };

  return (
    <div className="position-relative">
      <p className="table-name mb-2">Completed Documents</p>
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
              {completedDocs?.selectedColumns &&
                completedDocs?.selectedColumns.length}
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

      <div className="col-12 mdb_table mt-3 ">
        <div className="table-responsive">
          <MDBDataTable
            bordered
            displayEntries={false}
            entries={5}
            className="text-nowrap"
            hover
            // data={awaitListing}
            data={{ ...completedDocs, columns: visibleColumns }}
            noBottomColumns
            sortable={false}
            paginationLabel={"«»"}
          />
        </div>
      </div>
    </div>
  );
};

export default DocsAccess;
