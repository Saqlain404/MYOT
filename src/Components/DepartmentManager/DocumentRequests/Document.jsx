import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import {
  DocumentComment,
  RequestorList,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";
import { RequestsList } from "../../../ApiServices/departmentHttpService/departmentHttpService";
import moment from "moment";

const Document = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState("");
  const [document_Id, setDocument_Id] = useState();

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
          <div className="text-center">
            <img
              src="/images/dashboard/Comment.png"
              className="mx-auto d-block"
            />
          </div>
          // <>
          //   <div className="text-center">
          //     <a type="button" data-bs-toggle="dropdown" aria-expanded="false">

          //     </a>
          //     <form
          //       className="dropdown-menu p-4 border-0 shadow p-3 mb-5 rounded"
          //       // onSubmit={(e) => handleSubmit(e, list?._id)}
          //     >
          //       <div className="mb-3 border-bottom">
          //         <label className="form-label th-text">Comment or type</label>

          //         <input
          //           type="text"
          //           className="form-control border-0"
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
          // </>
        );
        returnData.actions = (
          <img src="/images/sidebar/ThreeDots.svg" className="w-auto" />
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
    try {
      let id = localStorage.getItem("myot_admin_id");
      let formData = {
        creator_Id: id,
        document_Id,
        comment,
      };
      console.log(formData);
      let { data } = await DocumentComment(formData);
      console.log(data);
      if (!data?.error) {
        toast("Comment added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        document.getElementById("resetComment").click();
        getRequestorList();
      }
    } catch (error) {}
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
    </div>
  );
};

export default Document;
