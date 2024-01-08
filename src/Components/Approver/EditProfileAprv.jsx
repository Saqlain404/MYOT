import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";


import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import { ToastContainer } from "react-toastify";
import { updateProfile } from "../../ApiServices/aprroverHttpServices/aprproverHttpService";

const EditProfileAprv = () => {
  const [validationErrors, setValidationErrors] = useState({});

  const ids = localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id")

  const [post, setPost] = useState({
    // name: "",
    // email: "",
    // mobileNumber: "",
    password: "",
    confirmPassword: "",
    // DOB:'',
    profile_Pic: null,
  });

  const onFileSelection = (event) => {
    setPost({ ...post, profile_Pic: event.target.files[0] });
  };


  const validateForm = () => {
    const errors = {};

    // // Name validation
    // if (!post.name.trim()) {
    //   errors.name = 'Name is required';
    // }

    // // Email validation
    // const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!post.email.trim() || !emailRegex.test(post.email)) {
    //   errors.email = 'Invalid email address';
    // }

    // Password validation
    if (!post.password.trim() || post.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // ConfirmPassword validation
    if (post.confirmPassword !== post.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const navigate = useNavigate();
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (!localStorage.getItem("token-company")) {
      navigate("/Employee/edit-profile");
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
 
    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    // formData.append("name", post.name);
    // formData.append("email", post.email);
    // formData.append("mobileNumber", post.mobileNumber);
    formData.append("password", post.password);
    formData.append("confirmPassword", post.confirmPassword);
    formData.append("profile_Pic", post.profile_Pic);
    // formData.append("DOB", post.DOB);

    const response = await updateProfile(formData);

    if (!response.data?.error) {
      navigate("/Approver/My-profile");
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
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="/Employee/profile">
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
                  <div className=" d-flex justify-content-start mb-4">
                   <label htmlFor="new_img">
                   <img
                      src="/images/tasks/modal-profile-photo.svg"
                      alt=""
                      className=""
                      style={{cursor:"pointer"}}
                    />
                   </label>
                    <input
                      className="file-upload"
                      style={{display: 'none'}}
                      type="file"
                      id="new_img"
                      accept="image/*"
                      name="profile_Pic"
                      // onChange={(e) => onFileSelection(e, "image")}
                      onChange={onFileSelection}
                    />
                  </div>
                  {/* <div className="col-12 d-flex justify-content-between mb-2"> */}
                    {/* <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Full Name
                      </p>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="col-12 profile-edit-input p-2"
                        name="name"
                        value={post.name}
                        onChange={handleInput}
                        />
                        {validationErrors.name && <p>{validationErrors.name}</p>}
                    </div> */}
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
                  <div className="col-12 d-flex justify-content-between border-bottom mb-2 pb-4">
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Password
                      </p>
                      <input
                        type="text"
                        value={post.password}
                        placeholder="Password"
                        className="col-12 profile-edit-input p-2"
                        name="password"
                        onChange={handleInput}
                      />
                         {validationErrors.password && <p>{validationErrors.password}</p>}
                    </div>
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Confirm Password
                      </p>
                      <input
                        type="text"
                        value={post.confirmPassword}
                        placeholder="Confirm Password"
                        className="col-12 profile-edit-input p-2"
                        name="confirmPassword"
                        onChange={handleInput}
                      />
                      {validationErrors.confirmPassword && <p>{validationErrors.confirmPassword}</p>}
                    </div>
                  </div>

                  <div className=" d-flex justify-content-end">
                    <button className="profile-edit-submit" to="" type="submit">
                      <ToastContainer/>
                      Submit
                    </button>
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
