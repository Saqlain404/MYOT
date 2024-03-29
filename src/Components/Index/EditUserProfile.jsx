import React, { useEffect, useState } from "react";

import {
  DepartmentList,
  EmployeeEdit,
  EmployeeView,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Swal from "sweetalert2";
import { Button } from "rsuite";

const EditUserProfile = ({ userId }) => {
  const [userDetails, setUserDetails] = useState();
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
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
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getDepartmentList = async () => {
    let id = await localStorage.getItem("myot_admin_id");
    try {
      let { data } = await DepartmentList(id);
      console.log(data);
      if (!data?.error) {
        let values = data?.results?.department;
        setDepartmentOptions(values);
      }
    } catch (error) {
      console.log(error);
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

  const onSubmit = async (datas) => {
    setLoader(true);
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

    console.log(selectedRoles);
    const formData = new FormData();
    formData.append("name", datas?.name);
    formData.append("email", datas?.email);
    // formData.append("password", datas?.password);
    formData.append("employTitle", datas?.employTitle);
    formData.append("department_Id", datas?.department_id);
    formData.append("mobileNumber", datas?.mobileNumber);
    formData.append("salary", datas?.salary);
    formData.append("gender", datas?.gender);
    formData.append("employId", datas?.employId);
    formData.append("employRole", JSON.stringify(selectedRoles));
    formData.append("profile_Pic", files?.profile_img);
    console.log(datas);
    try {
      let { data } = await EmployeeEdit(userId, formData);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "User data updated successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setLoader(false);
        document.getElementById("modalClose").click();
        document.getElementById("formReset").click();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (roleName) => {
    setUserDetails((prevUserDetails) => {
      const updatedRoles = prevUserDetails?.employRole || [];

      if (updatedRoles.includes(roleName)) {
        return {
          ...prevUserDetails,
          employRole: updatedRoles.filter((role) => role !== roleName),
        };
      } else {
        return {
          ...prevUserDetails,
          employRole: [...updatedRoles, roleName],
        };
      }
    });
  };

  return (
    <>
      <div
        class="modal-dialog modal-dialog-users mb-5"
        style={{ height: "0px" }}
      >
        <div class="modal-content border-0">
          <div class="d-flex modal-header border-bottom">
            <p class="mb-0" id="exampleModalLabel">
              Edit Employee
            </p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              id="modalClose"
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
                <div className="col-md-4">
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
                      "form-control col-12 modal-input td-text  p-2",
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
                        {...register("salary", {required:"Please enter salary"})}
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
                          "form-control col-12 modal-input td-text  p-2",
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
                          "form-control col-12 modal-input td-text  p-2",
                          {
                            "is-invalid": errors.department_id,
                          }
                        )}
                        {...register("department_id")}
                      >
                        {departmentOptions &&
                          departmentOptions.map((options) => (
                            <option
                              className="w-100"
                              key={options?._id}
                              value={options?._id}
                              selected={
                                options?._id === userDetails?.department_Id?._id
                              }
                            >
                              {options?.departmentName}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-6 mt-3">
                      <select
                        className={classNames(
                          "form-control col-12 modal-input td-text  p-2",
                          {
                            "is-invalid": errors.gender,
                          }
                        )}
                        name="gender"
                        {...register("gender")}
                      >
                        <option
                          selected={userDetails?.gender === "male"}
                          value="male"
                        >
                          Male
                        </option>
                        <option
                          selected={userDetails?.gender === "female"}
                          value="female"
                        >
                          Female
                        </option>
                      </select>
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
                            name="employrole_approver"
                            {...register("employrole_approver", {
                              disabled: false,
                            })}
                            checked={userDetails?.employRole.includes(
                              "Approver"
                            )}
                            onChange={() => handleCheckboxChange("Approver")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Admin</td>
                        <td>
                          <input
                            type="checkbox"
                            name="employrole_admin"
                            {...register("employrole_admin", {
                              disabled: false,
                            })}
                            checked={userDetails?.employRole.includes("Admin")}
                            onChange={() => handleCheckboxChange("Admin")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Signatory</td>
                        <td>
                          <input
                            type="checkbox"
                            name="employrole_signatory"
                            {...register("employrole_signatory", {
                              disabled: false,
                            })}
                            checked={userDetails?.employRole.includes(
                              "Signatory"
                            )}
                            onChange={() => handleCheckboxChange("Signatory")}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Department Manager</td>
                        <td>
                          <input
                            type="checkbox"
                            name="employrole_department"
                            {...register("employrole_department", {
                              disabled: false,
                            })}
                            checked={userDetails?.employRole.includes(
                              "Department Manager"
                            )}
                            onChange={() =>
                              handleCheckboxChange("Department Manager")
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  style={{ width: "100px" }}
                  loading={loader}
                  appearance="primary"
                  className="btn mb-3 me-2 rounded-2"
                  type="submit"
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
