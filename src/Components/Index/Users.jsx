import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, Navigate } from "react-router-dom";
import classNames from "classnames";
import {
  AddEmployee,
  DepartmentList,
  EmployeeDelete,
  EmployeeLists,
  EmployeeSearch,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ViewUser from "./ViewUser";
import { MDBDataTable } from "mdbreact";
import EditUserProfile from "./EditUserProfile";
import Swal from "sweetalert2";
import { Button, Checkbox } from "rsuite";

const Users = () => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [userId, setUserId] = useState();
  const [loader, setLoader] = useState(false);
  const [docsName, setDocsName] = useState("");

  const [documents, setDocuments] = useState([{ file: null, name: "" }]);

  let id = localStorage.getItem("myot_admin_id");

  const [users, setUsers] = useState({
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "User Id",
        field: "id",
        sort: "asc",
        width: 50,
        selected: false,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Role",
        field: "role",
        sort: "asc",
        width: 100,
        selected: false,
      },
      {
        label: "Salary",
        field: "salary",
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

  const {
    register,
    handleSubmit,
    // formState: { errors },
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    getEmployeeList();
    getDepartmentList();
  }, []);

  const getDepartmentList = async () => {
    try {
      let { data } = await DepartmentList(id, { search: "" });
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.department;
        setDepartmentOptions(values);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEmployeeList = async () => {
    let { data } = await EmployeeLists(id);
    console.log(data);
    const newRows = [];
    if (!data?.error) {
      let values = data?.results?.list;
      values?.map((list, index) => {
        const returnData = {};
        returnData.id = list?.employId;
        returnData.name = list?.name;
        returnData.department = list?.department_Id[0]?.departmentName || "NA";
        returnData.role = (
          <>
            {list?.employRole?.map((role, index) => (
              <span className="d-flex align-items-start py-1" key={index}>
                • {role}
                {index !== list.employRole?.length - 1}
              </span>
            ))}
          </>
        );
        returnData.salary = list?.salary;
        returnData.login = (
          <>
            <img src="/images/dashboard/CalendarBlank.png" className="w-auto" />{" "}
            <span className="ms-2">
              {(list?.logIn &&
                moment(list?.logIn).format("MMM Do YY, h:mm A")) ||
                "NA"}
            </span>
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
              <li className="border-bottom">
                <Link
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  onClick={() => setUserId(list?._id)}
                >
                  <img
                    src="/images/users/PencilLine.svg"
                    alt=""
                    className="me-2"
                  />
                  Edit User Details
                </Link>
              </li>
              <li>
                <Link
                  class="dropdown-item text-danger"
                  onClick={() => {
                    handleDeleteUser(list?._id);
                  }}
                >
                  <img src="/images/users/Trash.svg" alt="" className="me-2" />
                  Delete User
                </Link>
              </li>
              {/* <li>
                <Link
                  class="dropdown-item"
                  to={`/Admin/Requests/Comments/${list?._id}`}
                >
                  <img
                    src="/images/dashboard/Comment.png"
                    alt=""
                    className="me-2"
                  />
                  Comments
                </Link>
              </li> */}
              {/* <li>
                <a class="dropdown-item border-bottom" href="#">
                  <img
                    src="/images/users/TextAlignLeft.svg"
                    alt=""
                    className="me-2"
                  />
                  Wrap Column
                </a>
              </li> */}
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
      setUsers({ ...users, rows: newRows });
    }
  };

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    if (key === "profile_img") {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImgUrl(imageUrl);
    }
  };

  const onDocsSelection = (e, index) => {
    const newDocuments = [...documents];
    newDocuments[index].file = e.target.files[0];
    setDocuments(newDocuments);
  };

  const addMoreDocument = () => {
    setDocuments([...documents, { file: null, name: "" }]);
  };

  const handleDocumentNameChange = (e, index) => {
    const newDocuments = [...documents];
    newDocuments[index].name = e.target.value;
    setDocuments(newDocuments);
  };

  const docsSubmit = (e) => {
    e.preventDefault();
    console.log(files);
    console.log(docsName);

  };

  const handleDeleteUser = async (id) => {
    try {
      let { data } = await EmployeeDelete(id);
      console.log(data);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "User Data Deleted successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getEmployeeList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (datas) => {
    setLoader(true);
    let id = localStorage.getItem("myot_admin_id");
    let selectedRoles = [];
    selectedRoles.push("Employee");
    const roles = [
      "employrole_admin",
      "employrole_approver",
      "employrole_department",
      "employrole_signatory",
    ];
    roles.forEach((role) => {
      if (datas[role]) {
        switch (role) {
          case "employrole_admin":
            selectedRoles.push("Admin");
            break;
          case "employrole_approver":
            selectedRoles.push("Approver");
            break;
          case "employrole_department":
            selectedRoles.push("Department Manager");
            break;
          case "employrole_signatory":
            selectedRoles.push("Signatory");
            break;
          default:
            break;
        }
      }
    });

    if (!files?.profile_img) {
      toast.error("Please select profile image", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoader(false);
      return false;
    }

    const formData = new FormData();
    formData.append("name", datas?.name);
    formData.append("email", datas?.email);
    formData.append("password", datas?.password);
    formData.append("employTitle", datas?.employTitle);
    formData.append("department_Id", datas?.department_id);
    formData.append("mobileNumber", datas?.mobilenumber);
    formData.append("salary", datas?.salary);
    formData.append("gender", datas?.gender);
    formData.append("employId", datas?.employid);
    formData.append("employRole", JSON.stringify(selectedRoles));
    // formData.append("document_Img", docs);
    formData.append("profile_Pic", files?.profile_img);
    formData.append("document", files?.docs);
    formData.append("documentName", docsName);

    // let docImg = [];
    // documents.forEach((doc) => {
    //   if (doc?.file) {
    //     docImg.push(doc.file);
    //     docImg.push(doc.name);
    //   }
    // });
    // formData.append("document_Img", docImg);

    try {
      let { data } = await AddEmployee(id, formData);
      console.log(data);
      setFiles([]);
      if (data && !data?.error) {
        setLoader(false);
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "New Employee Added",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setLoader(false);
        setFiles([]);
        setProfileImgUrl(null);
        document.getElementById("closeFormModal").click();
        getEmployeeList();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleCheckboxChange = (field) => {
    let updatedSelectedColumns = [...users.selectedColumns];
    const index = updatedSelectedColumns.indexOf(field);
    if (index > -1) {
      updatedSelectedColumns.splice(index, 1);
    } else {
      updatedSelectedColumns.push(field);
    }
    setUsers({ ...users, selectedColumns: updatedSelectedColumns });
  };

  const toggleSortOrder = () => {
    const currentSortType = users.sortType === "asc" ? "desc" : "asc";

    const sortedRows = [...users.rows].sort((a, b) => {
      let comparison = 0;
      if (a?.name?.toLowerCase() < b?.name?.toLowerCase()) {
        comparison = -1;
      } else if (a?.name?.toLowerCase() > b?.name?.toLowerCase()) {
        comparison = 1;
      }
      return currentSortType === "asc" ? comparison : comparison * -1;
    });

    setUsers({
      ...users,
      rows: sortedRows,
      sortType: currentSortType,
    });
  };

  const hideSelectedColumns = () => {
    const updatedHiddenColumns = [
      ...users.hiddenColumns,
      ...users.selectedColumns,
    ];
    setUsers({
      ...users,
      hiddenColumns: updatedHiddenColumns,
      selectedColumns: [],
    });
    setShowClearButton(true);
  };

  const columnsWithCheckboxes = users.columns.map((column) => ({
    ...column,
    label: (
      <div key={column.field} className="">
        <Checkbox
          checked={users.selectedColumns.includes(column.field)}
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
    (column) => !users.hiddenColumns.includes(column.field)
  );

  const showAllColumns = () => {
    setUsers({ ...users, hiddenColumns: [], selectedColumns: [] });
    setShowClearButton(false);
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
                    <a className="nav-link fw-bold"> Users</a>
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

            <div className="d-flex justify-content-between">
              <p className="table-name mb-2"></p>
              <div className="d-flex justify-content-center th-text">
                <div
                  className="d-flex whitespace-nowrap"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/images/tasks/Add.svg" alt="" className="pb-3" />
                  <p className="pt-1 text-nowrap">Add Employee</p>
                </div>
                {/* <img
                  src="/images/sidebar/ThreeDots.svg"
                  alt=""
                  className="pb-3 ms-2 text-secondary"
                /> */}
              </div>
            </div>

            <div className="position-relative">
              <p className="table-name mb-2">All Users</p>
              <div className=" col-12 d-flex align-items-center table-searchbar">
                <div className="d-flex ">
                  <div className="col-md-3 table-searchbar-imgs">
                    <img
                      src="/images/dashboard/Plus-icon.png"
                      className="p-2 table-searchbar-img"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
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
                      {users?.selectedColumns && users?.selectedColumns.length}
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
                    data={{ ...users, columns: visibleColumns }}
                    // data={users}
                    noBottomColumns
                    paginationLabel={"«»"}
                    sortable={false}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-users">
                <div class="modal-content border-0">
                  <div class="d-flex modal-header border-bottom">
                    <p class="" id="exampleModalLabel">
                      Add New Employee
                    </p>
                    <button
                      class="btn-close"
                      data-bs-dismiss="modal"
                      id="closeFormModal"
                      aria-label="Closebtn"
                      type="reset"
                      onClick={() => {
                        document.getElementById("formReset").click();
                        setProfileImgUrl(null);
                        setFiles([]);
                      }}
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <label className="my-3" htmlFor="img">
                        Upload Profile Picture
                      </label>
                      <div className=" d-flex justify-content-start mb-4">
                        <div className="position-relative">
                          <img
                            src={
                              profileImgUrl
                                ? profileImgUrl
                                : "/images/tasks/modal-profile-photo.svg"
                            }
                            alt=""
                            className="w_100_h_100"
                          />
                          <input
                            autoComplete="false"
                            className="ms-5 position-absolute top-50 start-0 translate-middle cursor_pointer"
                            style={{
                              height: "100%",
                              width: "100%",
                              opacity: 0,
                            }}
                            id="profile_img"
                            name="profile_img"
                            type="file"
                            accept="image/*"
                            defaultValue=""
                            onChange={(e) => onFileSelection(e, "profile_img")}
                          />
                        </div>
                      </div>

                      <div className="row p-3">
                        <div className="col-4 mb-3">
                          <input
                            type="text"
                            placeholder="Full Name*"
                            name="name"
                            className={classNames(
                              "form-control col-12 modal-input td-text  p-2",
                              {
                                "is-invalid": errors.name,
                              }
                            )}
                            {...register("name", {
                              required: "* Name is required",
                              pattern: {
                                value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                                message:
                                  "Spaces at the start & numbers are not allowed",
                              },
                            })}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name.message}
                            </div>
                          )}
                        </div>
                        <div className="col-4">
                          <input
                            type="email"
                            placeholder="Email ID "
                            name="email"
                            className={classNames(
                              "form-control col-12 modal-input td-text  p-2",
                              {
                                "is-invalid": errors.email,
                              }
                            )}
                            {...register("email", {
                              required: "* Please enter a email",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            })}
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                        <div className="col-4">
                          <input
                            type="number"
                            placeholder="Mobile No"
                            name="mobilenumber"
                            className={classNames(
                              "form-control col-12 modal-input td-text  p-2",
                              {
                                "is-invalid": errors.mobilenumber,
                              }
                            )}
                            {...register("mobilenumber", {
                              required: "* Please enter mobile number",
                              minLength: {
                                value: 9,
                                message:
                                  "Mobile number must be exactly 9 digits",
                              },
                              maxLength: {
                                value: 9,
                                message:
                                  "Mobile number must be exactly 9 digits",
                              },
                            })}
                          />
                          {errors.mobilenumber && (
                            <div className="invalid-feedback">
                              {errors.mobilenumber.message}
                            </div>
                          )}
                        </div>
                        <div className="col-12 mb-3">
                          <div className="row">
                            <div className="col-4">
                              <input
                                type="text"
                                placeholder="Employee Tittle"
                                name="employTitle"
                                className={classNames(
                                  "form-control col-12 modal-input td-text  p-2",
                                  {
                                    "is-invalid": errors.employTitle,
                                  }
                                )}
                                {...register("employTitle", {
                                  required: "* Employee title is required",
                                  pattern: {
                                    value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                                    message:
                                      "Spaces at the start & numbers are not allowed",
                                  },
                                })}
                              />
                              {errors.employTitle && (
                                <div className="invalid-feedback">
                                  {errors.employTitle.message}
                                </div>
                              )}
                            </div>

                            <div className="col-4">
                              <input
                                type="number"
                                placeholder="Salary"
                                name="salary"
                                className={classNames(
                                  "form-control col-12 modal-input td-text  p-2",
                                  {
                                    "is-invalid": errors.salary,
                                  }
                                )}
                                {...register("salary", {
                                  required: "* Please enter salary",
                                })}
                              />
                              {errors.salary && (
                                <div className="invalid-feedback">
                                  {errors.salary.message}
                                </div>
                              )}
                            </div>
                            <div className="col-4">
                              <input
                                type="text"
                                placeholder="Employee Id"
                                // className="col-4 modal-input td-text w-100 p-2"
                                name="employid"
                                className={classNames(
                                  "form-control col-12 modal-input td-text  p-2",
                                  {
                                    "is-invalid": errors.employid,
                                  }
                                )}
                                {...register("employid", {
                                  required: "Please enter employee id",
                                })}
                              />
                              {errors.employid && (
                                <div className="invalid-feedback">
                                  {errors.employid.message}
                                </div>
                              )}
                            </div>
                            <div className="col-4 mt-3">
                              <select
                                name="department_id"
                                className={classNames(
                                  "form-control col-12 modal-input td-text  p-2",
                                  {
                                    "is-invalid": errors.department_id,
                                  }
                                )}
                                {...register("department_id", {
                                  required: "* Please select a department",
                                })}
                              >
                                <option value="">Select Department</option>
                                {departmentOptions &&
                                  departmentOptions?.map((options) => (
                                    <option
                                      key={options?._id}
                                      value={options?._id}
                                    >
                                      {options?.departmentName}
                                    </option>
                                  ))}
                              </select>
                              {errors.department_id && (
                                <div className="invalid-feedback">
                                  {errors.department_id.message}
                                </div>
                              )}
                            </div>
                            <div className="col-4 mt-3">
                              <select
                                className={classNames(
                                  "form-control col-12 modal-input td-text  p-2",
                                  {
                                    "is-invalid": errors.gender,
                                  }
                                )}
                                {...register("gender", {
                                  required: "* Please select a gender",
                                })}
                                name="gender"
                              >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              {errors.gender && (
                                <div className="invalid-feedback">
                                  {errors.gender.message}
                                </div>
                              )}
                            </div>
                            <div className="col-4 position-relative mt-3">
                              <input
                                type={passVisible ? "text" : "password"}
                                placeholder="Password *"
                                // className="col-4 modal-input td-text w-100 p-2"
                                name="password"
                                className={classNames(
                                  "form-control col-12 modal-input td-text  p-2",
                                  {
                                    "is-invalid": errors.password,
                                  }
                                )}
                                {...register("password", {
                                  required: "* Please Enter Your Password",
                                  pattern: {
                                    value:
                                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                      "* Minimun 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                                  },
                                })}
                              />
                              <div
                                style={{ top: "6px" }}
                                className="eye_container"
                                onClick={() => setPassVisible(!passVisible)}
                              >
                                {passVisible ? (
                                  <img
                                    className="eye_icon"
                                    src="/images/icons/hide.png"
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    className="eye_icon"
                                    src="/images/icons/view.png"
                                    alt=""
                                  />
                                )}
                              </div>
                              {errors.password && (
                                <small className="errorText ">
                                  {errors.password?.message}
                                </small>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr className="bg-primary-subtle">
                                <th className="th-text">Select Role</th>
                                <th className="th-text">Select</th>
                                {/* <th className="th-text">Add</th>
                                <th className="th-text">Delete</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="ms-0">
                                <td className="td-text">Approver</td>
                                <td>
                                  {/* <Checkbox
                                    name="employrole_approver"
                                    {...register("employrole_approver")}
                                  ></Checkbox> */}
                                  <input
                                    type="checkbox"
                                    name="employrole_approver"
                                    {...register("employrole_approver")}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Department Manager</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole_department"
                                    {...register("employrole_department")}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Signatory</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole_signatory"
                                    {...register("employrole_signatory")}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Admin</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole_admin"
                                    {...register("employrole_admin")}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Employee</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole_admin"
                                    {...register("employrole_employee")}
                                    selected
                                    checked
                                    disabled
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* <p className="text-danger th-text">Add New Field</p> */}
                        </div>

                        <div className="col-12 mb-3">
                          <div className="d-flex align-items-center">
                            <p>Document Upload</p>
                          </div>
                          <div className="row">
                            <div className="col-6 mb-3">
                              <input
                                type="file"
                                name="docs"
                                onChange={(e) => onFileSelection(e, "docs")}
                                className="col-12 modal-input th-text p-2"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                type="text"
                                placeholder="Document name ex. Passport..."
                                value={document.name}
                                onChange={(e) => setDocsName(e.target.value)}
                                className="form-control col-12 modal-input td-text  p-2"
                              />
                            </div>
                          </div>
                          {/* {documents.map((document, index) => (
                            <div className="row" key={index}>
                              <div className="col-6 mb-3">
                                <input
                                  type="file"
                                  name={`document_img_${index}`}
                                  onChange={(e) => onDocsSelection(e, index)}
                                  className="col-12 modal-input th-text p-2"
                                />
                              </div>
                              <div className="col-6">
                                <input
                                  type="text"
                                  placeholder="Document name ex. Passport..."
                                  value={document.name}
                                  onChange={(e) =>
                                    handleDocumentNameChange(e, index)
                                  }
                                  className="form-control col-12 modal-input td-text  p-2"
                                />
                              </div>
                            </div>
                          ))} */}
                          <button
                            type="button"
                            className="comment-btn btn-primary"
                            onClick={addMoreDocument}
                          >
                            Add More
                          </button>
                          <button
                            type="button"
                            className="comment-btn btn-primary ms-4"
                            onClick={docsSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        {/* <button type="submit" class="user-modal-btn">
                          Save
                        </button> */}
                        <Button
                          style={{ width: "100px" }}
                          loading={loader}
                          appearance="primary"
                          className="btn mb-3 me-2 rounded-2"
                          type="submit"
                          disabled={!isValid}
                        >
                          Save
                        </Button>
                        <Button
                          style={{ width: "100px" }}
                          type="reset"
                          className="btn mb-3 ms-2rounded-2 bg-light text-dark border-0"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </Button>
                        {/* <button
                          type="reset"
                          class="user-modal-btn2"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Cancel
                        </button> */}
                        <button type="reset" id="formReset" className="d-none">
                          reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}

            {/* View User Modal */}
            <div
              class="modal fade"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <ViewUser userId={userId} />
            </div>
            {/* View User Modal Ends*/}

            {/* Edit User Modal */}
            <div
              class="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <EditUserProfile userId={userId} />
            </div>
            {/* Edit User Modal Ends*/}

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

export default Users;
