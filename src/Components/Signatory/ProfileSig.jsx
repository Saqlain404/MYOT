import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import { SignatoryProfileDetails } from "../../ApiServices/SignatoryHttpServices/signatoryHttpServices";
import moment from "moment";
import SignatureManag from "./Signature/SignatureManag";

const ProfileSig = () => {
  const [profileData, setProfileData] = useState();
  const [topTitle, setTopTitle] = useState("Profile");
  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    let emp_id = localStorage.getItem("myot_admin_id");
    let { data } = await SignatoryProfileDetails(emp_id);
    console.log(data);
    if (!data?.error) {
      setProfileData(data?.results?.singnatory);
    }
  };
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
          </div>
          <div className="col-7 middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2">
                      My Profile / {topTitle}
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

            <div>
              <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active bg-transparent"
                    id="ex1-tab-1"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                    onClick={() => setTopTitle("Profile")}
                  >
                    Profile
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link bg-transparent"
                    id="ex1-tab-2"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                    onClick={() => setTopTitle("Signature")}
                  >
                    Signature
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="ex1-content">
                <div
                  class="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div className="container px-4 text-center min-vh-100 ">
                    <div className="row rounded">
                      <div className=" d-flex justify-content-between">
                        <p className="profile-txt m-2">Profile</p>
                        <Link
                          to={"/Signatory/Edit-profile"}
                          className="text-decoration-none"
                        >
                          <button className="profile-edit-btn">Edit</button>
                        </Link>
                      </div>
                      <div className=" d-flex justify-content-start mb-4">
                        <img
                          className="w_100_h_100"
                          src={profileData?.profile_Pic}
                          alt=""
                        />
                      </div>
                      <div className="bg-white rounded mb-4 p-4 pb-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Details
                        </p>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="profile-info">Full Name</p>
                            <p className="profile-data">{profileData?.name}</p>
                          </div>
                          <div>
                            <p className="profile-info">Email</p>
                            <p className="profile-data">{profileData?.email}</p>
                          </div>
                          <div>
                            <p className="profile-info">Phone Number</p>
                            <p className="profile-data">
                              +97 {profileData?.mobileNumber}
                            </p>
                          </div>
                          <div>
                            <p className="profile-info">Date of Birth</p>
                            <p className="profile-data">
                              {moment(profileData?.DOB).format("L")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded mb-4 p-4 ">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Document
                        </p>
                        <div className=" d-flex ">
                          <img src="/images/dashboard/pdf-icon.svg" alt="" />
                          <p className="profile-salary-slip m-2">
                            Salaryslip.Pdf
                          </p>
                        </div>
                        <div className=" d-flex ">
                          <img src="/images/dashboard/pdf-icon.svg" alt="" />
                          <p className="profile-salary-slip m-2">
                            Salaryslip.Pdf
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded mb-4 p-4 pb-2">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Company Information
                        </p>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="profile-info">Company Name</p>
                            <p className="profile-data">
                              {profileData?.companyName}
                            </p>
                          </div>
                          <div>
                            <p className="profile-info">Company Email</p>
                            <p className="profile-data">{profileData?.email}</p>
                          </div>
                          <div>
                            <p className="profile-info">Phone Number</p>
                            <p className="profile-data">
                              +97 {profileData?.mobileNumber}
                            </p>
                          </div>
                          <div>
                            <p className="profile-info">Address</p>
                            <p className="profile-data">
                              {profileData?.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <SignatureManag />
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
