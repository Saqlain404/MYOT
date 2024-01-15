import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import { employeProfileDetail } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import EmplEditProfile from "./EmplEditProfile";
import moment from "moment";

const ProfileEmpl = () => {
  const [profileDetail, setProfileDetail] = useState(null);

  useEffect(() => {
    const details = async () => {
      const detailResults = await employeProfileDetail();
      const data = detailResults?.[0]?.results?.employee;
      setProfileDetail(data);
    };
    details();
  }, []);
  console.log(profileDetail);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl />
          </div>
          <div className="col-7 middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold ms-2">My Profile / View</a>
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
                  <p className="profile-txt m-2">Profile</p>
                  <Link
                    to={"/Employee/Edit-profile"}
                    state={profileDetail}
                    className="text-decoration-none"
                  >
                    <button className="profile-edit-btn">Edit</button>
                  </Link>
                </div>

                <div className=" d-flex justify-content-start mb-4">
                  {/* <img src="/images/dashboard/AvatarProfile.svg" alt="" /> */}
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
                  <p className=" d-flex justify-content-start profile-card-title mb-1">
                    Details
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="profile-info">Full Name</p>
                      <p className="profile-data text-capitalize">{profileDetail?.name}</p>
                    </div>
                    <div>
                      <p className="profile-info">Email</p>
                      <p className="profile-data">{profileDetail?.email}</p>
                    </div>
                    <div>
                      <p className="profile-info">Phone Number</p>
                      <p className="profile-data">
                        {profileDetail?.mobileNumber}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Date of Creation</p>
                      <p className="profile-data">
                        {moment(profileDetail?.CreatedAT).format("L")}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-white rounded mb-4 p-4 ">
    <p className=" d-flex justify-content-start profile-card-title">Doccument</p>
    <div className=" d-flex ">
        <img src="/images/dashboard/pdf-icon.svg" alt="" />
        <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
    </div>
    <div className=" d-flex ">
        <img src="/images/dashboard/pdf-icon.svg" alt="" />
        <p className="profile-salary-slip m-2">Salaryslip.Pdf</p>
    </div>
   </div> */}
                <div className="bg-white rounded mb-4 p-4 pb-2">
                  <p className=" d-flex justify-content-start profile-card-title mb-1">
                    Company Information
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="profile-info">Company Name</p>
                      <p className="profile-data">
                        {profileDetail?.company_Id?.name}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Company Email</p>
                      <p className="profile-data">
                        {profileDetail?.company_Id?.email}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Phone Number</p>
                      <p className="profile-data">
                        {profileDetail?.company_Id?.phone_number}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Address</p>
                      <p className="profile-data">
                        {profileDetail?.company_Id?.address}
                      </p>
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

export default ProfileEmpl;
