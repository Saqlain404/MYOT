import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { toast } from "react-toastify";
import { SignatoryUpdateProfile } from "../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import { updateProfilePic, updateUserName } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Button } from "rsuite";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditProfileSig = () => {
  const [files, setFiles] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [loader, setLoader] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [cPassVisible, setCPassVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onFileSelection = (e, key) => {
    // console.log(e.target.files, key);
    setFiles({ ...files, [key]: e.target.files[0] });
    const selectedFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfileImgUrl(imageUrl);
  };

  const onSubmit = async (data1) => {
    // e.preventDefault();
    setLoader(true);
    let emp_id = localStorage.getItem("myot_admin_id");
    if (data1?.password !== data1?.cpassword) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Password mismatch",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setLoader(false);
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
      setLoader(false);
      return false;
    }
    if (data && !data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Profile Updated",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setLoader(false);
      setFiles([]);
      dispatch(updateProfilePic(data?.results?.signatory?.profile_Pic));
      dispatch(updateUserName(data?.results?.signatory?.name));
      navigate("/Signatory/My-Profile");
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
            <div className="container-fluid sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold"> My Profile / Edit</a>
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
                    <label className="cursor_pointer my-3" htmlFor="profile_img">
                      Your Profile Picture
                      <div className="mt-4">
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
                  <div className="row m-0 p-0">
                    <div className="col-12 mt-4 input_icon_container">
                      <div
                        className={
                          errors?.name
                            ? "text-danger input_icons2 ms-2"
                            : "input_icons2 ms-2"
                        }
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <p className="text-start profile-card-title">Name</p>
                      <input
                        autoComplete="false"
                        type="text"
                        placeholder="Name"
                        defaultValue={state?.name}
                        className={classNames(
                          "w-100 profile-edit-input p-2 text-capitalize",
                          {
                            "is-invalid": errors.name,
                          }
                        )}
                        name="name"
                        {...register("name")}
                      />
                    </div>
                    <div className="col-6 mt-4 input_icon_container">
                      <div
                        className={
                          errors?.password
                            ? "text-danger input_icons2 ps-2"
                            : "input_icons2 ps-2"
                        }
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </div>
                      <p className="text-start profile-card-title">Password</p>
                      <input
                        autoComplete="false"
                        type={passVisible ? "text" : "password"}
                        placeholder="Password"
                        className={classNames("col-12 profile-edit-input p-2", {
                          "is-invalid": errors.password,
                        })}
                        name="password"
                        {...register("password", {
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:
                              "* Minimun 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
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
                    {/* <div className="col-6 mt-4 position-relative"> */}
                    <div className="col-6 mt-4 input_icon_container">
                      <div
                        className={
                          errors?.cpassword
                            ? "text-danger input_icons2 ms-2"
                            : "input_icons2 ms-2"
                        }
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </div>
                      <p className="text-start profile-card-title">
                        Confirm Password
                      </p>
                      <input
                        autoComplete="false"
                        type={cPassVisible ? "text" : "password"}
                        placeholder="Confirm Password"
                        className={classNames("col-12 profile-edit-input p-2", {
                          "is-invalid": errors.cpassword,
                        })}
                        name="cpassword"
                        {...register("cpassword", {
                          // required: "* Please Confirm Your Password",
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:
                              "* Minimun 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
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
                </div>

                <div className="text-end mt-4">
                  <Button
                    type="submit"
                    style={{ width: "150px" }}
                    loading={loader}
                    appearance="primary"
                    className="btn mb-3 me-2 rounded-2"
                  >
                    Update Profile
                  </Button>
                  <button type="reset" id="reset" className="d-none">
                    reset
                  </button>
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
