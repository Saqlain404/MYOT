import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";

import Sidebar from "../Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import { ToastContainer } from "react-toastify";
import { updateProfile } from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import Swal from "sweetalert2";
import { updateProfilePic, updateUserName } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "rsuite";

const EditProfileAprv = () => {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [error, setError] = useState();
  const [cError, setCError] = useState();
  const [passVisible, setPassVisible] = useState(false);
  const [cPassVisible, setCPassVisible] = useState(false);

  const ids =
    localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");

    const dispatch = useDispatch()

    const location = useLocation();
  const { state } = location;

  const [post, setPost] = useState({
    name: "",
    // email: "",
    // mobileNumber: "",
    password: "",
    confirmPassword: "",
    // DOB:'',
    profile_Pic: null,
  });

  const onFileSelection = (event) => {
    setPost({ ...post, profile_Pic: event.target.files[0] });
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    setProfileImgUrl(imageUrl);
  };

  const navigate = useNavigate();
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    setError("")
  };

  useEffect(() => {
    if (!localStorage.getItem("token-company")) {
      navigate("/Employee/edit-profile");
    }
  }, []);

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if  (post.password && !passwordRegex.test(post.password)) {
      setError(
        "Password must be at least 8 characters long, contain one uppercase letter, and one special character"
      );
      return false;
    }

    if (post.confirmPassword !== post.password) {
      setCError("Passwords do not match");
      return false;
    }
    const formData = new FormData();
    formData.append("name", post.name);
    // formData.append("email", post.email);
    // formData.append("mobileNumber", post.mobileNumber);
    formData.append("password", post.password);
    formData.append("confirmPassword", post.confirmPassword);
    formData.append("profile_Pic", post.profile_Pic);
    // formData.append("DOB", post.DOB);

    const response = await updateProfile(formData);

    if (!response.data?.error) {
      navigate("/Approver/My-profile");
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Profile Updated",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      dispatch(updateProfilePic(response?.data?.results?.approver?.profile_Pic));
      dispatch(updateUserName(response?.data?.results?.approver?.name));
      console.log(response);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
          </div>
          <div className="col-7 middle-content p-0 min-vh-100">
            <div className="container-fluid sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold ms-2">
                      My Profile / Edit
                    </a>
                  </li>
                </ul>
                <div className="col-7 d-flex align-items-center  justify-content-end">
                  {/* <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form> */}
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Approver/Chat"}>
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
              <div className="row rounded">
                <div className=" d-flex justify-content-between">
                  <p className="profile-txt m-2">Your Profile Picture</p>
                </div>

                <form className="row" onSubmit={onSubmit}>
                  <div className="d-flex flex-column align-items-start mb-4">
                    <label htmlFor="new_img">
                      <img
                        src={
                          profileImgUrl
                            ? profileImgUrl
                            : state?.profile_Pic
                        }
                        alt=""
                        className="w_100_h_100"
                        style={{ cursor: "pointer" }}
                      />
                    </label>
                    <input
                      className="file-upload"
                      style={{ display: "none" }}
                      type="file"
                      id="new_img"
                      accept="image/*"
                      name="profile_Pic"
                      // onChange={(e) => onFileSelection(e, "image")}
                      onChange={onFileSelection}
                    />
                    {/* {validationErrors.profile_Pic && <p className=" d-flex align-items-end text-danger ms-2 mt-2">{validationErrors.profile_Pic}</p>} */}
                  </div>
                   <div className="col-12 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Full Name
                      </p>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="col-12 profile-edit-input p-2"
                        name="name"
                        // value={post.name}
                        defaultValue={state?.name}
                        onChange={handleInput}
                        />
                    </div>
                  {/* <div className="col-12 d-flex justify-content-between mb-2"> */}
                  {/* <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Email
                      </p>
                      <input
                        type="text"
                        value={post.email}
                        placeholder="Email"
                        className="col-12 profile-edit-input p-2"
                        name="email"
                        onChange={handleInput}
                        />
                        {validationErrors.email && <p>{validationErrors.email}</p>}
                    </div> */}
                  {/* </div> */}
                  {/* <div className="col-12 d-flex justify-content-between mb-2">
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Phone Number
                      </p>
                      <input
                        type="text"
                        value={post.mobileNumber}
                        placeholder="Phone Number"
                        className="col-12 profile-edit-input p-2"
                        name="mobileNumber"
                        onChange={handleInput}
                      />
                    </div>
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">Date of Birth</p>
                       <input type="text" 
                       placeholder="Date of Birth"
                       value={post.DOB}
                       onChange={handleInput} 
                       name="DOB"
                       className="col-12 profile-edit-input p-2" />
                     </div>
                  </div> */}
                  <div className="col-12 d-flex justify-content-between mt-3 ">
                    <div className="col-6 m-2 position-relative">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Password
                      </p>
                      <input
                        type={passVisible ? "text" : "password"}
                        value={post.password}
                        placeholder="Password"
                        className="col-12 profile-edit-input p-2"
                        name="password"
                        onChange={handleInput}
                      />
                      {error && (
                        <p className=" errorText  ">
                          {error}
                        </p>
                      )}
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
                    </div>
                    <div className="col-6 m-2 position-relative">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Confirm Password
                      </p>
                      <input
                         type={cPassVisible ? 'text' : "password"}
                        value={post.confirmPassword}
                        placeholder="Confirm Password"
                        className="col-12 profile-edit-input p-2"
                        name="confirmPassword"
                        onChange={handleInput}
                      />
                      {cError && (
                        <p className="d-flex errorText ms-2 justify-content-start">
                          {cError}
                        </p>
                      )}
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
                    </div>
                  </div>
 
                  <div className="text-end  ms-4 mt-1 ">
                    <Button appearance="primary" className="profile-edit-submit btn  rounded-2 m-0" type="submit">
                      Update Profile
                    </Button>
                  </div>
                </form>
              </div>
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

export default EditProfileAprv;
