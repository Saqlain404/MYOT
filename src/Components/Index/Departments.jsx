import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AddDepartment,
  DepartmentDelete,
  DepartmentDetails,
  DepartmentList,
  DepartmentSearch,
  EditDepartment,
  ViewDepartment,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import Swal from "sweetalert2";
import { Button } from "rsuite";

const Departments = () => {
  const [listItems, setListItems] = useState([]);
  const [search, setSearch] = useState("");
  const [viewDepartmentDetails, setViewDepartmentDetails] = useState();
  const [loader, setLoader] = useState(false);
  const [deptId, setDeptId] = useState(null);

  const [departmentInfo, setDepartmentInfo] = useState({
    departmentname: "",
    description: "",
  });

  const [department, setDepartment] = useState({
    columns: [
      {
        label: "Department Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
        width: 50,
        selected: false,
      },
    ],
  });

  useEffect(() => {
    DepartmentLists();
  }, []);

  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  const DepartmentLists = async (key) => {
    const { data } = await DepartmentList(userId, { search: key });
    const newRows = [];
    if (!data?.error) {
      // setListItems(data?.results?.department);
      let values = data?.results?.department;
      values?.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
      values?.map((data) => {
        let returnData = {};
        returnData.name = data?.departmentName;
        returnData.description = (
          <>
            <span
              style={{ maxWidth: "250px" }}
              className="d-inline-block text-truncate"
            >
              {data?.description}
            </span>
          </>
        );
        returnData.actions = (
          <>
            <div class="">
              <a
                type=""
                className="mx-auto"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/sidebar/ThreeDots.svg"
                  className="w-auto cursor_pointer"
                />
              </a>
              <ul class="dropdown-menu border-0 shadow p-3 rounded">
                <li onClick={() => departmentDetails(data?._id)}>
                  <a
                    class="dropdown-item"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    <img
                      src="/images/users/AddressBook.svg"
                      alt=""
                      className="me-2"
                    />
                    View Department
                  </a>
                </li>
                <li
                  onClick={() => {
                    setDeptId(data?._id);
                    departmentDetails(data?._id);
                  }}
                >
                  <a
                    class="dropdown-item"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <img
                      src="/images/users/PencilLine.svg"
                      alt=""
                      className="me-2"
                    />
                    Edit Department
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
                <li
                  className="cursor_pointer"
                  onClick={() => deleteDepartment(data?._id)}
                >
                  <a class="dropdown-item text-danger">
                    <img
                      src="/images/users/Trash.svg"
                      alt=""
                      className="me-2"
                    />
                    Delete Department
                  </a>
                </li>
              </ul>
            </div>
          </>
        );
        newRows.push(returnData);
      });
      setDepartment({ ...department, rows: newRows });
    }
  };

  const departmentDetails = async (id) => {
    try {
      let { data } = await ViewDepartment(id);
      if (!data?.error) {
        setViewDepartmentDetails(data?.results?.department);
        // console.log(data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDepartment = async (id) => {
    let { data } = await DepartmentDelete(id);
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Deleted successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

      DepartmentLists();
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setDepartmentInfo({ ...departmentInfo, [name]: value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(departmentInfo, deptId);
    try {
      let formData = {
        departmentName: departmentInfo.departmentname,
        description: departmentInfo.description,
      };
      let { data } = await EditDepartment(deptId, formData);
      if (data && !data?.error) {
        console.log(data);
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Department Updated",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setDepartmentInfo({
          departmentname: "",
          description: "",
        });
        document.getElementById("editmodalclose").click();
        DepartmentLists();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    let creator_Id = localStorage.getItem("myot_admin_id");
    if (!departmentInfo?.departmentname || !departmentInfo?.description) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Fill all fields",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setLoader(false);
      return false;
    }
    try {
      let { data } = await AddDepartment({
        departmentName: departmentInfo?.departmentname,
        description: departmentInfo?.description,
        creator_Id,
      });
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "New Department Added",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setLoader(false);
        setDepartmentInfo({
          departmentname: "",
          description: "",
        });
        document.getElementById("closeModal").click();
        DepartmentLists();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const toggleSortOrder = () => {
    const currentSortType = department.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...department.rows].sort((a, b) => {
      let comparison = 0;
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        comparison = -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });
    console.log(sortedRows);

    setDepartment({
      ...department,
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
                    <a className="nav-link fw-bold">Departments</a>
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

            <div className="d-flex justify-content-between ">
              <p className="table-name mb-2"></p>
              <div className="d-flex justify-content-center th-text">
                <div
                  className="d-flex whitespace-nowrap"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/images/tasks/Add.svg" alt="" className="pb-3" />
                  <p className="pt-1 text-nowrap">Add Department</p>
                </div>
                {/* <img
                  src="/images/sidebar/ThreeDots.svg"
                  alt=""
                  className="pb-3 ms-2 text-secondary"
                /> */}
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                <div class="modal-content border-0">
                  <div class="d-flex modal-header border-bottom">
                    <p class="" id="exampleModalLabel">
                      Add Departments
                    </p>
                    <button
                      type="reset"
                      class="btn-close "
                      id="closeModal"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() =>
                        document.getElementById("formReset").click()
                      }
                    ></button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row p-3">
                      <div className="col-12 mb-3 ">
                        <input
                          type="text"
                          placeholder="Department Name *"
                          className="col-12 modal-input td-text  p-2"
                          name="departmentname"
                          value={departmentInfo.departmentname}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 mb-3 ">
                        <textarea
                          type="text"
                          placeholder="Description"
                          className="col-12 modal-input td-text p-2"
                          name="description"
                          value={departmentInfo.description}
                          onChange={handleChange}
                        ></textarea>
                        {/* <input type="text" placeholder="Phone Number" className="col-6 modal-input th-text p-2"/> */}
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                      <Button
                        style={{ width: "150px" }}
                        loading={loader}
                        appearance="primary"
                        className="btn mb-3 me-2 rounded-2"
                        type="submit"
                        disabled={
                          !departmentInfo?.departmentname ||
                          !departmentInfo?.description
                        }
                      >
                        Add New
                      </Button>
                      <Button
                        style={{ width: "100px" }}
                        type="reset"
                        className="btn mb-3 mx-2 rounded-2 bg-light text-dark border-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </Button>
                      <button
                        type="reset"
                        class="d-none"
                        data-bs-dismiss="modal"
                        id="formReset"
                      >
                        reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* View Modal */}
            <div
              class="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                <div class="modal-content border-0">
                  <div class="d-flex modal-header border-bottom">
                    <p class="" id="exampleModalLabel">
                      View Departments
                    </p>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <form action="">
                    <div className="row p-3">
                      <div className="text-end">
                        <p>
                          {" "}
                          <span>Created At </span>
                          {moment(viewDepartmentDetails?.createdAt).format("L")}
                        </p>
                      </div>
                      <div className="col-12 mb-3 ">
                        <input
                          type="text"
                          placeholder="Department Name *"
                          className="col-12 modal-input td-text  p-2"
                          name="departmentname"
                          value={viewDepartmentDetails?.departmentName}
                          onChange={handleChange}
                          disabled
                        />
                      </div>
                      <div className="col-12 mb-3 ">
                        <textarea
                          style={{ minHeight: "120px" }}
                          type="text"
                          placeholder="Description"
                          className="col-12 modal-input td-text p-2"
                          name="description"
                          value={viewDepartmentDetails?.description}
                          onChange={handleChange}
                          disabled
                        ></textarea>
                      </div>
                    </div>
                    {/* <div className="d-flex justify-content-end mb-3">
                      <button
                        type="submit"
                        class="user-modal-btn"
                        onClick={AddDepartment}
                      >
                        Add New
                      </button>
                      <button type="button" class="user-modal-btn2">
                        Cancle
                      </button>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}

            {/* Edit Modal */}

            <div
              class="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                <div class="modal-content border-0">
                  <div class="d-flex modal-header border-bottom">
                    <p class="" id="exampleModalLabel">
                      Edit Departments
                    </p>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      id="editmodalclose"
                    ></button>
                  </div>

                  <form onSubmit={handleEdit}>
                    <div className="row p-3">
                      <div className="text-end">
                        <p>
                          {" "}
                          <span>Created At </span>
                          {moment(viewDepartmentDetails?.createdAt).format("L")}
                        </p>
                      </div>
                      <div className="col-12 mb-3 ">
                        <input
                          type="text"
                          placeholder="Department Name *"
                          className="col-12 modal-input td-text  p-2"
                          name="departmentname"
                          defaultValue={viewDepartmentDetails?.departmentName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 mb-3 ">
                        <textarea
                          style={{ minHeight: "120px" }}
                          type="text"
                          placeholder="Description"
                          className="col-12 modal-input td-text p-2"
                          name="description"
                          defaultValue={viewDepartmentDetails?.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                      <Button
                        style={{ width: "150px" }}
                        loading={loader}
                        appearance="primary"
                        className="btn mb-3 me-2 rounded-2"
                        type="submit"
                        disabled={
                          !departmentInfo?.departmentname &&
                          !departmentInfo?.description
                        }
                      >
                        Update
                      </Button>
                      <Button
                        style={{ width: "100px" }}
                        type="reset"
                        className="btn mb-3 mx-2 rounded-2 bg-light text-dark border-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </Button>
                      <button
                        type="reset"
                        class="d-none"
                        data-bs-dismiss="modal"
                        id="formReset"
                      >
                        reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Edit Modal End */}

            <div className="position-relative">
              <p className="table-name mb-2">Departments</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    <img
                      src="/images/dashboard/Plus-icon.png"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="p-2 table-searchbar-img"
                    />
                    {/* <img
                      src="/images/dashboard/FunnelSimple.png"
                      alt=""
                      className="p-2 table-searchbar-img"
                    /> */}
                    <img
                      onClick={toggleSortOrder}
                      src="/images/dashboard/ArrowsDownUp.png"
                      alt=""
                      className="p-2 table-searchbar-img border-end cursor_pointer"
                    />
                  </div>
                  {/* <div className="d-flex ms-2 align-items-center justify-content-around table-searchbar-txt">
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
                  </div> */}
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
                    // data={{ ...tasks, columns: visibleColumns }}
                    data={department}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
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
        </div>
      </div>{" "}
    </>
  );
};

export default Departments;
