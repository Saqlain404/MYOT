import { MDBDataTable } from "mdbreact";
import React, { useEffect, useState } from "react";
import { SignatoryDocsAccessLog } from "../../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import moment from "moment";
import { Link } from "react-router-dom";

const Signing = ({ admin_id }) => {
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
  });

  useEffect(() => {
    if (admin_id) {
      console.log(admin_id);
      getDocsAccessLog();
    }
  }, [admin_id]);

  const getDocsAccessLog = async () => {
    let { data } = await SignatoryDocsAccessLog(admin_id);
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
  return (
    <div className="position-relative">
      <p className="table-name mb-2">Document Requests</p>
      <div className=" col-12 d-flex align-items-center table-searchbar">
        <div className="row d-flex  col">
          <div className="col-md-3 table-searchbar-imgs">
            <img
              src="/images/dashboard/Plus-icon.png"
              alt=""
              className="p-2 table-searchbar-img"
            />
            <img
              src="/images/dashboard/FunnelSimple.png"
              alt=""
              className="p-2 table-searchbar-img"
            />
            <img
              src="/images/dashboard/ArrowsDownUp.png"
              alt=""
              className="p-2 table-searchbar-img"
            />
            <img
              src="/images/dashboard/DotsThreeOutlineVertical2.png"
              alt=""
              className="p-2 table-searchbar-img border-end"
            />
          </div>
          <div className="col-4 d-flex align-items-center justify-content-around table-searchbar-txt">
            <p className="m-0 text-nowrap">2 Selected</p>
            <p className="hide-selected m-0 text-nowrap ">Hide Selected</p>
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
            entries={5}
            className=""
            hover
            data={completedDocs}
            noBottomColumns
            sortable
            paginationLabel={"«»"}
          />
          {/* <table className="table table-borderless">
      <thead>
        <tr className="th-text">
          <th className="th-text">
            <input
              className="form-check-input checkbox-table"
              type="checkbox"
              value=""
            />
            Template name
          </th>

          <th className="th-text">
            <input
              className="form-check-input checkbox-table"
              type="checkbox"
              value=""
            />
            Assigned To
          </th>
          <th className="th-text">
            <input
              className="form-check-input checkbox-table"
              type="checkbox"
              value=""
            />
            Version
          </th>
          <th className="th-text">
            <input
              className="form-check-input checkbox-table"
              type="checkbox"
              value=""
            />
            Status
          </th>
          <th className="th-text">
            <input
              className="form-check-input checkbox-table"
              type="checkbox"
              value=""
            />
            Department
          </th>
          <th className="th-text">
            <input
              className="form-check-input checkbox-table"
              type="checkbox"
              value=""
            />
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="td-text">{task.template}</td>
            <td>{task.assignedTo}</td>
            <td className="td-text">{task.version}</td>
            <td className="td-text">{task.status}</td>
            <td className="td-text">{task.department}</td>
            <td className="td-text">
              <div class="dropdown">
                <a
                  type=""
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {task.action}
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
                    <a class="dropdown-item" href="#">
                      <img
                        src="/images/dashboard/Comment.png"
                        alt=""
                        className="me-2"
                      />
                      Comments
                    </a>
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
                      <img
                        src="/images/users/Trash.svg"
                        alt=""
                        className="me-2"
                      />
                      Delete User
                    </a>
                  </li>
                </ul>
              </div>
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table> */}
        </div>
        {/* <nav
    aria-label="Page navigation"
    className="d-flex justify-content-end page-navigation mt-3"
  >
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li className="page-item">
        <button className="page-link" href="#">
          1
        </button>
      </li>
      <li className="page-item">
        <button className="page-link" href="#">
          2
        </button>
      </li>
      <li className="page-item">
        <button className="page-link" href="#">
          3
        </button>
      </li>
      <li className="page-item">
        <button className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav> */}
      </div>
    </div>
  );
};

export default Signing;
