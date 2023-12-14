import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import { updateProfile } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";

const EditProfile = () => {


  useState(()=>{
  const editProfile = async()=>{
    const data = await updateProfile();
    console.log(data)
  }

  editProfile();
  },[])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl/>
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
                    <Link to={"/Employee/Chat"}>
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
   <div className=" d-flex justify-content-start mb-4">
    <img src="/images/tasks/modal-profile-photo.svg" alt="" className="" />
   </div>
   <div className="row">
    <div className="col-12 d-flex justify-content-between mb-2">
      <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Full Name</p>
    <input type="text" placeholder="Full Name" className="col-12 profile-edit-input p-2"/>
      </div>
      <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Email</p>
    <input type="text" placeholder="Email" className="col-12 profile-edit-input p-2"/>
      </div>
    </div>
    <div className="col-12 d-flex justify-content-between mb-2">
      <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Phone Number</p>
    <input type="text" placeholder="Phone Number" className="col-12 profile-edit-input p-2"/>
      </div>
      <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Date of Birth</p>
    <input type="text" placeholder="Date of Birth" className="col-12 profile-edit-input p-2"/>
      </div>
    </div>
    <div className="col-12 d-flex justify-content-between border-bottom mb-2 pb-4">
      <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Password</p>
    <input type="text" placeholder="Password" className="col-12 profile-edit-input p-2"/>
      </div>
      <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Confirm Password</p>
    <input type="text" placeholder="Confirm Password" className="col-12 profile-edit-input p-2"/>
      </div>
    </div>
   </div>

   <div className=" d-flex justify-content-end">
      {/* <p className="profile-txt m-2">Profile</p> */}
      <Link to={"/Employee/profile"} className="text-decoration-none">
      <button className="profile-edit-submit">Update Profile</button>
      </Link>
    </div>
   
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

export default EditProfile;