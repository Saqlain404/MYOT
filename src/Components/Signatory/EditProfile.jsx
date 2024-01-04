import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { toast } from "react-toastify";
import { SignatoryUpdateProfile } from "../../ApiServices/SignatoryHttpServices/signatoryHttpServices";

const EditProfileSig = () => {
  const [files, setFiles] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFileSelection = (e, key) => {
    // console.log(e.target.files, key);
    setFiles({ ...files, [key]: e.target.files[0] });
    const selectedFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfileImgUrl(imageUrl);
  };

  const onSubmit = async (data1) => {
    // e.preventDefault();
    console.log(files?.profile_img);
    console.log(data1);
    let emp_id = localStorage.getItem("myot_admin_id");
    if (data1?.password !== data1?.cpassword) {
      toast("Password does not match", {
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
    if (!files?.profile_img) {
      toast.error("Please provide profile image", {
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
    const formData = new FormData();
    formData.append("name", data1?.name);
    formData.append("email", data1?.email);
    formData.append("mobileNumber", data1?.number);
    formData.append("profile_Pic", files?.profile_img);
    formData.append("DOB", data1?.dob);
    formData.append("password", data1?.password);
    formData.append("confirmPassword", data1?.cpassword);
    // formData.append("address", data1?.companyAddress);
    // formData.append("companyName", data1?.companyName);

    let { data } = await SignatoryUpdateProfile(emp_id, formData);
    console.log(data);
    if (data?.error) {
      toast.error(data?.message, {
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
    if (!data?.error) {
      toast("Profile Updated Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFiles([]);
      // navigate("/Signatory/My-Profile");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
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

            <div className="container px-4 text-center min-vh-100 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row rounded">
                  <div className=" d-flex justify-content-start align-items-start flex-column mb-4">
                    <label className="cursor_pointer" htmlFor="profile_img">
                      Your Profile Picture
                      <div>
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
                          className="d-none"
                          id="profile_img"
                          name="profile_img"
                          type="file"
                          accept="image/*"
                          defaultValue=""
                          onChange={(e) => onFileSelection(e, "profile_img")}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="row">
                    {/* <div className="col-12 d-flex justify-content-between mb-2">
                      <div className="col-6 m-2">
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
                      </div>
                      <div className="col-6 m-2">
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
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between mb-2">
                      <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Phone Number
                        </p>
                        <input
                          autoComplete="false"
                          type="number"
                          placeholder="Phone Number"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.number,
                            }
                          )}
                          name="number"
                          {...register("number")}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="col-6 m-2">
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
                      </div>
                    </div> */}
                    <div className="col-12 d-flex justify-content-between border-bottom mb-2 pb-4">
                      <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Password
                        </p>
                        <input
                          autoComplete="false"
                          type="password"
                          placeholder="Password"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.password,
                            }
                          )}
                          name="password"
                          {...register("password")}
                        />
                      </div>
                      <div className="col-6 m-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Confirm Password
                        </p>
                        <input
                          autoComplete="false"
                          type="text"
                          placeholder="Confirm Password"
                          className={classNames(
                            "col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.cpassword,
                            }
                          )}
                          name="cpassword"
                          {...register("cpassword")}
                        />
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

                  <div className=" d-flex justify-content-end">
                    {/* <p className="profile-txt m-2">Profile</p> */}
                    <button type="submit" className="profile-edit-submit">
                      Update Profile
                    </button>
                    <button type="reset" id="reset" className="d-none">
                      reset
                    </button>
                  </div>
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

export default EditProfileSig;
