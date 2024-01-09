import React, { useEffect, useState } from "react";

import {
  DepartmentList,
  EmployeeView,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const EditUserProfile = ({ userId }) => {
  const [userDetails, setUserDetails] = useState();
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: userDetails?.name || "", // Set default value for name
      employTitle: userDetails?.employTitle || "", // Set default value for employTitle
      email: userDetails?.email || "", // Set default value for email
      mobileNumber: userDetails?.mobileNumber || "", // Set default value for mobileNumber
      salary: userDetails?.salary || "", // Set default value for salary
      employId: userDetails?.employId || "", // Set default value for employid
      department_id: userDetails?.department_Id?._id || "", // Set default value for department_id
      gender: userDetails?.gender || "", // Set default value for gender
    },
  });

  useEffect(() => {
    getViewUserData(userId);
    getDepartmentList();
  }, [userId]);

  useEffect(() => {
    // Update the form values when userDetails changes
    setValue("name", userDetails?.name || "");
    setValue("employTitle", userDetails?.employTitle || "");
    setValue("email", userDetails?.email || "");
    setValue("mobileNumber", userDetails?.mobileNumber || "");
    setValue("salary", userDetails?.salary || "");
    setValue("employId", userDetails?.employId || "");
  }, [userDetails, setValue]);

  const getViewUserData = async (id) => {
    try {
      if (id) {
        let { data } = await EmployeeView(id);
        console.log(data);
        if (!data?.error) {
          setUserDetails(data?.results?.employee);
          let values = data?.results?.employee;
          console.log(values);
          let defaultValue = {};
          defaultValue.name = values?.name;
          defaultValue.employTitle = values?.employTitle;
          defaultValue.email = values?.email;
          defaultValue.mobileNumber = values?.mobileNumber;
          defaultValue.salary = values?.salary;

          //   reset({ ...defaultValue });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDepartmentList = async () => {
    try {
      let { data } = await DepartmentList();
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.department;
        setDepartmentOptions(values);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const defaultChecked = (roleName) => {
    return userDetails?.employRole?.flat()?.includes(roleName);
  };

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    if (key === "profile_img") {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImgUrl(imageUrl);
    }
  };

  const onSubmit = async (data) => {
    console.log(files);
    console.log(data);
  };

  return (
    <>
      <div class="modal-dialog modal-dialog-users">
        <div class="modal-content border-0">
          <div class="d-flex modal-header border-bottom">
            <p class="mb-0" id="exampleModalLabel">
              Edit Employee
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
                      profileImgUrl ? profileImgUrl : userDetails?.profile_Pic
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
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    name="name"
                    // defaultValue={userDetails?.name}
                    className={classNames("col-12 modal-input td-text  p-2", {
                      "is-invalid": errors.name,
                    })}
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
                <div className="col-md-4">
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
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                <div className="col-md-4">
                  <input
                    type="number"
                    placeholder="Mobile No"
                    name="mobileNumber"
                    className={classNames(
                      "col-4 modal-input td-text w-100 p-2",
                      {
                        "is-invalid": errors.mobileNumber,
                      }
                    )}
                    {...register("mobileNumber", {
                      required: "* Please enter mobile number",
                    })}
                  />
                  {errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {errors.mobileNumber.message}
                    </div>
                  )}
                </div>
                <div className="col-12 mb-3">
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        placeholder="Employee Title"
                        name="employTitle"
                        defaultValue={userDetails?.employTitle}
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
                    <div className="col-4">
                      <input
                        type="text"
                        placeholder="Employee Id"
                        // className="col-4 modal-input td-text w-100 p-2"
                        name="employId"
                        className={classNames(
                          "col-12 modal-input td-text w-100 p-2",
                          {
                            "is-invalid": errors.employId,
                          }
                        )}
                        {...register("employId", {
                          required: "Please enter employee id",
                        })}
                      />
                      {errors.employId && (
                        <div className="invalid-feedback">
                          {errors.employId.message}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mt-3">
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
                        {departmentOptions &&
                          departmentOptions.map((options) => (
                            <option
                              className="w-100"
                              key={options?._id}
                              value={options?._id}
                              selected={
                                options?.departmentName ===
                                userDetails?.department_Id?.departmentName
                              }
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
                    <div className="col-md-6 mt-3">
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
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="th-text">Assigned Role</th>
                        <th className="th-text">Permissions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Approver</td>
                        <td>
                          <input
                            type="checkbox"
                            name="Approver"
                            defaultChecked={defaultChecked("Approver")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Admin</td>
                        <td>
                          <input
                            type="checkbox"
                            name="Admin"
                            defaultChecked={defaultChecked("Admin")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Signatory</td>
                        <td>
                          <input
                            type="checkbox"
                            name="Signatory"
                            defaultChecked={defaultChecked("Signatory")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Department Manager</td>
                        <td>
                          <input
                            type="checkbox"
                            name="Department Manager"
                            defaultChecked={defaultChecked(
                              "Department Manager"
                            )}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Employee</td>
                        <td>
                          <input
                            type="checkbox"
                            name="Department Manager"
                            defaultChecked={defaultChecked("Employee")}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    </>
  );
};

export default EditUserProfile;
