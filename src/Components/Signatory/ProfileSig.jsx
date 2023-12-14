import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";

const ProfileSig = () => {
 

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig/>
          </div>
          <div className="col-7 middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      My Profile / View
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
  <div className="row rounded">
    
    <div className=" d-flex justify-content-between">
    <div className="d-flex">
              <Link to={"/Signatory/My-Profile"} className="text-decoration-none">
              <p className="td-text border-bottom me-3">Profile</p>
              </Link>
              <Link to={"/Signatory/Signature-management"} className="text-decoration-none">
              <p className="th-text">Signature Management</p>
              </Link>
            </div>
      {/* <p className="profile-txt m-2"></p> */}
      <Link to={"/Signatory/Edit-profile"} className="text-decoration-none">
      <button className="profile-edit-btn">Edit</button>
      </Link>
    </div>
   <div className=" d-flex justify-content-start mb-4">
    <img src="/images/dashboard/AvatarProfile.svg" alt="" />
   </div>
   <div className="bg-white rounded mb-4 p-4 pb-2">
    <p className=" d-flex justify-content-start profile-card-title">Details</p>
    <div className="d-flex justify-content-between">
      <div>
        <p className="profile-info">Full Name</p>
        <p className="profile-data">Katherine Moss</p>
      </div>
      <div>
        <p className="profile-info">Email</p>
        <p className="profile-data">Ase@gmail.com</p>
      </div>
      <div>
        <p className="profile-info">Phone Number</p>
        <p className="profile-data">+97 7898788999</p>
      </div>
      <div>
        <p className="profile-info">Date of Birth</p>
        <p className="profile-data">18 Aug 20, 1999</p>
      </div>
    </div>
   </div>
   <div className="bg-white rounded mb-4 p-4 ">
    <p className=" d-flex justify-content-start profile-card-title">Doccument</p>
    <div className=" d-flex ">
        <img src="/images/dashboard/pdf-icon.svg" alt="" />
        <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
    </div>
    <div className=" d-flex ">
        <img src="/images/dashboard/pdf-icon.svg" alt="" />
        <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
    </div>
   </div>
   <div className="bg-white rounded mb-4 p-4 pb-2">
    <p className=" d-flex justify-content-start profile-card-title">Company Information</p>
    <div className="d-flex justify-content-between">
      <div>
        <p className="profile-info">Company Name</p>
        <p className="profile-data">Ava Wright</p>
      </div>
      <div>
        <p className="profile-info">Company Email</p>
        <p className="profile-data">Weight@gmail.com</p>
      </div>
      <div>
        <p className="profile-info">Phone Number</p>
        <p className="profile-data">+97 7898788999</p>
      </div>
      <div>
        <p className="profile-info">Address</p>
        <p className="profile-data">Human Resources</p>
      </div>
    </div>
   </div>
  </div>
</div>

<div className="footer bg-white">
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
      </div>
    </>
  );
};

export default ProfileSig;
