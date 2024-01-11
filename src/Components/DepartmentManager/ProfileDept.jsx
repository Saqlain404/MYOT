import React, { useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import { ProfileDetails } from "../../ApiServices/departmentHttpService/departmentHttpService";
import { useEffect } from "react";

const ProfileDept = () => {
 
  const[profileDetail, setProfileDetail] = useState();

  const getProfileDetails = async () => {
    let { data } = await ProfileDetails();
    if (!data?.error) {
      setProfileDetail(data?.results?.department);
    }
  };
  console.log(profileDetail)

  useEffect(() => {
    getProfileDetails()
  }, [])
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment/>
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
  <div className="row rounded">
    
    <div className=" d-flex justify-content-between">
      <p className="profile-txt m-2">Profile</p>
      <Link to={"/Department/Edit-profile"} className="text-decoration-none">
      <button className="profile-edit-btn">Edit</button>
      </Link>
    </div>
   <div className=" d-flex justify-content-start mb-4">
   <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={profileDetail?.profile_Pic}
                    alt="profile_image"
                  />
   </div>
   <div className="bg-white rounded mb-4 p-4 pb-2">
    <p className=" d-flex justify-content-start profile-card-title">Details</p>
    <div className="d-flex justify-content-between">
      <div>
        <p className="profile-info">Full Name</p>
        <p className="profile-data">{profileDetail?.name}</p>
      </div>
      <div>
        <p className="profile-info">Email</p>
        <p className="profile-data">{profileDetail?.email}</p>
      </div>
      <div>
        <p className="profile-info">Phone Number</p>
        <p className="profile-data">{profileDetail?.mobileNumber}</p>
      </div>
      <div>
        <p className="profile-info">Department</p>
        <p className="profile-data">{profileDetail?.employRole}</p>
      </div>
    </div>
    <div className="d-flex justify-content-between me-4">
      <div>
        <p className="profile-info me-4">Employee Tittle</p>
        <p className="profile-data">{profileDetail?.employTitle}</p>
      </div>
      <div>
        <p className="profile-info me-4">Employee Id</p>
        <p className="profile-data">{profileDetail?.employId}</p>
      </div>
      <div>
        <p className="profile-info  me-4">Gender</p>
        <p className="profile-data">{profileDetail?.gender}</p>
      </div>
      <div>
        <p className="profile-info me-4">Salary</p>
        <p className="profile-data">{profileDetail?.salary}</p>
      </div>
    </div>
   </div>
   <div className="bg-white rounded mb-4 p-4 ">
    <p className=" d-flex justify-content-start profile-card-title">Doccument</p>
    <div className=" d-flex ">
    <img src="/images/dashboard/pdf-icon.svg" alt="" />
        <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
        <img src={profileDetail?.document_Img} alt="" />
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

export default ProfileDept;
