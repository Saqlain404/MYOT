import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import { useDispatch } from "react-redux";
// import { Swal } from "sweetalert2/dist/sweetalert2";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { ProfileDeptUpdate } from "../../ApiServices/departmentHttpService/departmentHttpService";
import { updateProfilePic, updateUserName } from "../app/slice/userSlice";
import { Button } from "rsuite";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const EditProfileDept = () => {

  const [files, setFiles] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [passVisible, setPassVisible] = useState(false);
  const [cPassVisible, setCPassVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const { state } = location;

  const id = localStorage.getItem("user_id");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // const getEmployeeList = async () => {
  //   let { data } = await EmployeeLists();
  // };

  const onFileSelection = (e, key) => {
    // console.log(e.target.files, key);
    setFiles({ ...files, [key]: e.target.files[0] });
    const selectedFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfileImgUrl(imageUrl);
  };

  const onSubmit = async (data1) => {
    console.log(files?.profile_img);
    
    if (data1?.password !== data1?.cpassword) {
      toast.error("Password does not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    // if (!files?.profile_img) {
    //   toast.error("Please Select Profile Image", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   return false
    // }
    const formData = new FormData();
    if (data1?.name) {
      formData.append("name", data1?.name);
    }
    // formData.append("email", data1?.email);
    // formData.append("phone_number", data1?.number);
    formData.append("profile_Pic", files?.profile_img);
    // formData.append("DOB", data1?.dob);
    formData.append("password", data1?.password);
    formData.append("confirmPassword", data1?.cpassword);
    formData.append("address", data1?.companyAddress);
    formData.append("companyName", data1?.companyName);

    let { data } = await ProfileDeptUpdate(id, formData);
    console.log(data);
    if (data && data?.error) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Profile update successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setFiles([]);
      dispatch(updateProfilePic(data?.results?.department?.profile_Pic));
      dispatch(updateUserName(data?.results?.department?.name));
      navigate("/Department/My-profile");
      // getEmployeeList();
    }
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment/>
          </div>
          <div className="col-7 middle-content p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      My Profile / Edit
                    </a>
                  </li>
                </ul>
                <div className="col-7 d-flex align-items-center  justify-content-end">
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
                    <Link to={"/Department/Chat"}>
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

            <div className="container px-4 text-center min-vh-100 ">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div className="row rounded">
                  <div className=" d-flex justify-content-between">
                    {/* <p className="profile-txt m-2">Your Profile Picture</p> */}
                    <label htmlFor="img">Your Profile Picture</label>
                  </div>
                  <div className=" d-flex justify-content-start mb-4">
                    <div className="position-relative">
                    <img
                        src={
                          profileImgUrl
                            ? profileImgUrl
                            : state?.profile_Pic || "/images/icons/user.jpg"
                        }
                        alt=""
                        className="w_100_h_100"
                      />
                      <input
                        autoComplete="false"
                        className="ms-5 position-absolute top-50 start-0 translate-middle cursor_pointer"
                        style={{ height: "100%", width: "100%", opacity: 0 }}
                        id="profile_img"
                        name="profile_img"
                        type="file"
                        accept="image/*"
                        defaultValue=""
                        onChange={(e) => onFileSelection(e, "profile_img")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-between mb-2">
                      {/* <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Full Name
                        </p>
                        <input
                          autoComplete="false"
                          type="text"
                          placeholder="Full Name"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.name,
                            }
                          )}
                          name="name"
                          {...register("name", {
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
                      </div> */}
                      {/* <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Email
                        </p>
                        <input
                          autoComplete="off"
                          type="email"
                          placeholder="Email"
                          className={`col-12 profile-edit-input p-2 ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            pattern: {
                              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: "Please enter a valid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div> */}
                    </div>
                    <div className="col-12 d-flex justify-content-between mb-2">
                    <div className="col-12 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Name
                        </p>
                        <input
                          autoComplete="false"
                          type="text"
                          defaultValue={state?.name}
                          placeholder="name"
                          className={classNames(
                            "col-12 profile-edit-input p-2 text-capitalize",
                            {
                              "is-invalid": errors.name,
                            }
                          )}
                          name="name"
                          {...register("name")}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      {/* <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Date of Birth
                        </p>
                        <input
                          autoComplete="false"
                          type="date"
                          placeholder="Date of Birth"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.dob,
                            }
                          )}
                          name="dob"
                          {...register("dob")}
                        />
                      </div> */}
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <div className="col-6 m-2 input_icon_container">
                      <div
                          className={
                            errors?.password
                              ? "text-danger input_icons2"
                              : "input_icons2"
                          }
                        >
                          <FontAwesomeIcon icon={faLock} />
                        </div>
                        <p className=" d-flex justify-content-start profile-card-title">
                          Password
                        </p>
                        <input
                          autoComplete="false"
                          type={passVisible ? "text" : "password"}
                          placeholder="Password"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.password,
                            }
                          )}
                          name="password"
                          {...register("password", {
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "* Minimun 8 characters, One Uppercase, One Lowercase & A Special Character Allowed",
                            },
                          })}
                        />
                        <div
                          className="eye_container eye_container2 pt-1"
                          onClick={() => setPassVisible(!passVisible)}
                        >
                          {passVisible ? (
                            <img
                              className="eye_icon"
                              src="/images/icons/view.png"
                              alt=""
                            />
                          ) : (
                            <img
                              className="eye_icon"
                              src="/images/icons/hide.png"
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
                      <div className="col-6 m-2 input_icon_container">
                      <div
                          className={
                            errors?.cpassword
                              ? "text-danger input_icons2"
                              : "input_icons2"
                          }
                        >
                          <FontAwesomeIcon icon={faLock} />
                        </div>
                        <p className=" d-flex justify-content-start profile-card-title">
                          Confirm Password
                        </p>
                        <input
                          autoComplete="false"
                          type={cPassVisible ? "text" : "password"}
                          placeholder="Confirm Password"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.cpassword,
                            }
                          )}
                          name="cpassword"
                          {...register("cpassword", {
                            // required: "* Please Confirm Your Password",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "* Minimun 8 characters, One Uppercase, One Lowercase & A Special Character Allowed",
                            },
                          })}
                        />
                         <div
                          className="eye_container eye_container2 pt-1"
                          onClick={() => setCPassVisible(!cPassVisible)}
                        >
                          {cPassVisible ? (
                            <img
                              className="eye_icon"
                              src="/images/icons/view.png"
                              alt=""
                            />
                          ) : (
                            <img
                              className="eye_icon"
                              src="/images/icons/hide.png"
                              alt=""
                            />
                          )}
                        </div>
                        {errors.cpassword && (
                          <small className="errorText ">
                            {errors.cpassword?.message}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between mb-2">
                      {/* <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Company Email
                        </p>
                        <input
                          autoComplete="false"
                          type="email"
                          placeholder="Company Email"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.companyEmail,
                            }
                          )}
                          name="companyEmail"
                          {...register("companyEmail")}
                        />
                      </div> */}
                      {/* <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Company Phone Number
                        </p>
                        <input
                          autoComplete="false"
                          type="number"
                          placeholder="Company Phone Number"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.companyNumber,
                            }
                          )}
                          name="companyNumber"
                          {...register("companyNumber")}
                        />
                      </div> */}
                    </div>
                    {/* <div className="col-12 d-flex justify-content-between mb-2">
                      <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Company Name
                        </p>
                        <input
                          autoComplete="false"
                          type="text"
                          placeholder="Company Name"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.companyName,
                            }
                          )}
                          name="companyName"
                          {...register("companyName")}
                        />
                      </div>
                      <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Address
                        </p>
                        <input
                          autoComplete="false"
                          type="text"
                          placeholder="Address"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.companyAddress,
                            }
                          )}
                          name="companyAddress"
                          {...register("companyAddress")}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="text-end">
                <Button
                  style={{ width: "150px" }}
                  // loading={loader}
                  appearance="primary"
                  className="btn mb-3 text-nowrap me-2 rounded-2"
                  type="submit"
                >
                  Update Profile
                </Button>
                </div>
              </form>
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

export default EditProfileDept;
