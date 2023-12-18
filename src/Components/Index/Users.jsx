import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, Navigate } from "react-router-dom";
import classNames from "classnames";
import {
  AddEmployee,
  DepartmentList,
  EmployeeLists,
  EmployeeSearch,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Users = () => {
  const [employeeData, setEmployeeData] = useState();
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getEmployeeList();
    getDepartmentList();
  }, []);

  const getEmployeeList = async () => {
    let { data } = await EmployeeLists();
    console.log(data);
    if (!data?.error) {
      setEmployeeData(data?.results?.list);
    }
  };

  const getDepartmentList = async () => {
    let { data } = await DepartmentList();
    console.log(data);
    if (!data?.error) {
      let values = data?.results?.department;
      setDepartmentOptions(values);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    setSearch(value);
    if (value.length > 0) {
      let { data } = await EmployeeSearch({ search: value });
      console.log(data);
      if (!data?.error) {
        setEmployeeData(data?.results?.employee);
      }
    } else {
      getEmployeeList();
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

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);

  //   setEmployeeInfo({ ...employeeInfo, [name]: value });
  // };

  const onSubmit = async (datas) => {
    console.log(datas);
    console.log(files?.profile_img);
    const formData = new FormData();
    formData.append("name", datas?.name);
    formData.append("email", datas?.email);
    formData.append("password", datas?.password);
    formData.append("employTitle", datas?.employTitle);
    formData.append("department_Id", datas?.department_id);
    formData.append("mobileNumber", datas?.mobileNumber);
    formData.append("salary", datas?.salary);
    formData.append("gender", datas?.gender);
    formData.append("employId", datas?.employid);
    formData.append("employRole", "Admin");
    formData.append("document_Img", datas?.document_img[0]);
    formData.append("profile_Img", files?.profile_img);

    let { data } = await AddEmployee(formData);
    console.log(data);
    if (!data?.error) {
      toast("New employee added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      document.getElementById("formReset").click();
      document.getElementById("closeFormModal").click();
      getEmployeeList();
    }
  };

  // const handleSubmit1 = async (e) => {
  //   e.preventDefault();
  //   const employeeData = {
  //     ...employeeInfo,
  //     user: localStorage.getItem("user_id"),
  //   };
  //   console.log(employeeData);

  //   await AddEmployee({
  //     name: employeeData.name,
  //     email: employeeData.email,
  //     password: employeeData.password,
  //     employTitle: employeeData.employtitle,
  //     department_Id: employeeData.department_id,
  //     mobileNumber: employeeData.mobilenumber,
  //     salary: employeeData.salary,
  //     gender: employeeData.gender,
  //     employId: employeeData.employid,
  //     employRole: employeeData.employrole,
  //     profile_Pic: employeeData.profile_pic,
  //     document_Img: employeeData.document_img,
  //   })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .then((res) => {
  //       if (!res.data?.error) {
  //         console.log("Success");
  //       }
  //     });
  // };

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
                    <Link className="nav-link ms-2">/Users</Link>
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
              <p className="table-name mb-2">Templates</p>
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
                <img
                  src="/images/sidebar/ThreeDots.svg"
                  alt=""
                  className="pb-3 ms-2 text-secondary"
                />
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
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      id="closeFormModal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <label htmlFor="img">Upload Profile Picture</label>
                      <div className=" d-flex justify-content-start mb-4">
                        <div className="position-relative">
                          <img
                            src={
                              profileImgUrl
                                ? profileImgUrl
                                : "/images/tasks/modal-profile-photo.svg"
                            }
                            alt=""
                            className="object-fit-cover"
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                            }}
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
                        <div className="col-12 mb-3">
                          <input
                            type="text"
                            placeholder="Full Name*"
                            name="name"
                            className={classNames(
                              "col-12 modal-input td-text  p-2",
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
                        <div className="col-12 mb-3">
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="text"
                                placeholder="Employee Tittle"
                                name="employTitle"
                                className={classNames(
                                  "col-12 modal-input td-text  p-2",
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
                            <div className="col-6">
                              <select
                                name="department_id"
                                className={classNames(
                                  "col-12 modal-input td-text w-100 p-2",
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
                          </div>
                        </div>
                        <div className="col-12 mb-3 ">
                          <div className="row">
                            <div className="col-4">
                              <input
                                type="email"
                                placeholder="Email ID "
                                name="email"
                                className={classNames(
                                  "col-12 modal-input td-text w-100 p-2",
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
                                  "col-4 modal-input td-text w-100 p-2",
                                  {
                                    "is-invalid": errors.mobilenumber,
                                  }
                                )}
                                {...register("mobilenumber", {
                                  required: "* Please enter mobile number",
                                })}
                              />
                              {errors.mobilenumber && (
                                <div className="invalid-feedback">
                                  {errors.mobilenumber.message}
                                </div>
                              )}
                            </div>
                            <div className="col-4">
                              <input
                                type="number"
                                placeholder="Salary"
                                name="salary"
                                className={classNames(
                                  "col-12 modal-input td-text w-100 p-2",
                                  {
                                    "is-invalid": errors.salary,
                                  }
                                )}
                                {...register("salary")}
                              />
                              {errors.salary && (
                                <div className="invalid-feedback">
                                  {errors.salary.message}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-3 ">
                          <div className="row">
                            <div className="col-4">
                              <select
                                className={classNames(
                                  "col-12 modal-input td-text w-100 p-2",
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

                            <div className="col-4">
                              <input
                                type="text"
                                placeholder="Employee Id"
                                // className="col-4 modal-input td-text w-100 p-2"
                                name="employid"
                                className={classNames(
                                  "col-12 modal-input td-text w-100 p-2",
                                  {
                                    "is-invalid": errors.employid,
                                  }
                                )}
                                {...register("employid", {
                                  // required:"Please enter employee id"
                                })}
                              />
                              {errors.employid && (
                                <div className="invalid-feedback">
                                  {errors.employid.message}
                                </div>
                              )}
                            </div>
                            <div className="col-4">
                              <input
                                type="password"
                                placeholder="Password *"
                                // className="col-4 modal-input td-text w-100 p-2"
                                name="password"
                                className={classNames(
                                  "col-12 modal-input td-text w-100 p-2",
                                  {
                                    "is-invalid": errors.password,
                                  }
                                )}
                                {...register("password", {
                                  required: "Please enter password",
                                })}
                              />
                              {errors.password && (
                                <div className="invalid-feedback">
                                  {errors.password.message}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <p>Document Upload</p>
                        <div className="col-12 mb-3">
                          <input
                            type="file"
                            border="dotted"
                            name="document_img"
                            onChange={(e) => onFileSelection(e, "document_img")}
                            className={classNames(
                              "col-12 modal-input th-text  p-2",
                              {
                                "is-invalid": errors.document_img,
                              }
                            )}
                            {...register("document_img", {
                              pattern: {
                                value: /\.(jpg|jpeg|png|pdf)$/i,
                                message:
                                  "File Format: JPG, JPEG, PNG, or PDF. Size: Up to 500KB",
                              },
                            })}
                          />
                          {errors.document_img && (
                            <div className="invalid-feedback">
                              {errors.document_img.message}
                            </div>
                          )}
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr className="bg-primary-subtle">
                                <th className="th-text">Assign Permission</th>
                                <th className="th-text">Edit</th>
                                <th className="th-text">Add</th>
                                <th className="th-text">Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="ms-0">
                                <td className="td-text">Approver</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    // name="document_img"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                    {...register("employrole_edit")}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    // name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                    {...register("employrole_add")}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    // name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                    {...register("employrole_delete")}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Department Manager</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Signatory</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                              </tr>
                              <tr className="ms-0">
                                <td className="td-text">Admin</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    name="employrole"
                                    // value={employeeInfo.employrole}
                                    // onChange={handleChange}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="text-danger th-text">Add New Field</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="submit" class="user-modal-btn">
                          Save
                        </button>
                        <button type="button" class="user-modal-btn2">
                          Cancel
                        </button>
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

            <div className=" col-12 d-flex align-items-center table-searchbar">
              <div className="row d-flex  col ">
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
                  <p className="hide-selected m-0 text-nowrap ">
                    Hide Selected
                  </p>
                </div>
              </div>
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control table-search-bar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
              </form>
            </div>

            <div className="col-12 table_comman mt-3 ">
              <div className="table-responsive">
                <table className="table table-borderless users-table">
                  <thead>
                    <tr className="th-text">
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        User ID
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Name
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
                        Role
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Salary
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Last Logged In
                      </th>
                      <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Status
                      </th>
                      {/* <th className="th-text">
                        <input
                          className="form-check-input checkbox-table"
                          type="checkbox"
                          value=""
                        />
                        Actions
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData &&
                      employeeData?.map((document, i) => (
                        <tr key={i} className="ms-0 user_table_row">
                          <td className="td-text">
                            <input
                              className="form-check-input checkbox-table"
                              type="checkbox"
                              value=""
                            />
                            {document?.employId}
                          </td>
                          <td className="td-text">{document?.name}</td>
                          <td className="td-text">
                            {document?.department_Id?.departmentName
                              ? document?.department_Id?.departmentName
                              : "Not Available"}
                          </td>
                          <td className="td-text">{document?.employRole}</td>
                          <td className="td-text">{document?.salary}</td>
                          <td className="td-text">
                            <img src="/images/dashboard/CalendarBlank.png" />
                            <span className="ms-2">
                              {document?.logIn &&
                                moment(document?.logIn).format(
                                  "MMM Do YY, h:mm:ss a"
                                )}
                            </span>
                          </td>
                          <td className="td-text">
                            {document?.status ? "True" : "False"}
                          </td>
                          <td className="td-text">
                            <div class="dropdown">
                              <Link
                                type=""
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {document.actions}
                              </Link>
                              <ul class="dropdown-menu border-0 shadow p-3 mb-5 rounded">
                                <li>
                                  <Link
                                    class="dropdown-item border-bottom"
                                    href="#"
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
                                  <Link
                                    class="dropdown-item border-bottom"
                                    href="#"
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
                                  <Link class="dropdown-item" href="#">
                                    <img
                                      src="/images/dashboard/Comment.png"
                                      alt=""
                                      className="me-2"
                                    />
                                    Comments
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    class="dropdown-item border-bottom"
                                    href="#"
                                  >
                                    <img
                                      src="/images/users/TextAlignLeft.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    Wrap Column
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    class="dropdown-item text-danger"
                                    href="#"
                                  >
                                    <img
                                      src="/images/users/Trash.svg"
                                      alt=""
                                      className="me-2"
                                    />
                                    Delete User
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-end page-navigation mt-3"
              >
                <ul className="pagination">
                  <li class="page-item">
                    <Link class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      1
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      2
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#">
                      3
                    </button>
                  </li>
                  <li class="page-item">
                    <button class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
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

export default Users;
