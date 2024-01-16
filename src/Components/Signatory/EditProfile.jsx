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

const EditProfileSig = () => {
  const [files, setFiles] = useState([]);
  const [profileImgUrl, setProfileImgUrl] = useState();
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
    console.log(files?.profile_img);
    let emp_id = localStorage.getItem("myot_admin_id");
    if (data1?.password !== data1?.cpassword) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Password not changed",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    // if (!files?.profile_img) {
    //   toast.error("Please provide profile image", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   return false;
    // }
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
        title: "Profile Updated",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
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
                    <div className="col-12">
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
                    <div className="col-6 mt-4">
                      <p className="text-start profile-card-title">Password</p>
                      <input
                        autoComplete="false"
                        type="password"
                        placeholder="Password"
                        className={classNames("w-100 profile-edit-input p-2", {
                          "is-invalid": errors.password,
                        })}
                        name="password"
                        {...register("password")}
                      />
                    </div>
                    <div className="col-6 mt-4">
                      <p className="text-start profile-card-title">
                        Confirm Password
                      </p>
                      <input
                        autoComplete="false"
                        type="text"
                        placeholder="Confirm Password"
                        className={classNames("w-100 profile-edit-input p-2", {
                          "is-invalid": errors.cpassword,
                        })}
                        name="cpassword"
                        {...register("cpassword")}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-end mt-4">
                  <button type="submit" className="profile-edit-submit m-0">
                    Update Profile
                  </button>
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
