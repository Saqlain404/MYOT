import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { AdminProfile } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { Button } from "rsuite";

const Profile = () => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    let emp_id = localStorage.getItem("myot_admin_id");
    const { data } = await AdminProfile(emp_id);
    if (!data?.error) {
      setProfileData(data?.results?.employee);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
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
                  <p className="profile-txt m-2">Profile</p>
                  <Link
                    to={"/Admin/Profile/Edit-profile"}
                    state={profileData}
                    className="text-decoration-none"
                  >
                    <Button
                      style={{ width: "70px" }}
                      // loading={loader}
                      appearance="primary"
                      className="btn mb-3 me-2 rounded-2"
                      type="submit"
                    >
                      Edit
                    </Button>
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
                    src={
                      (profileData?.profile_Pic && profileData.profile_Pic) ||
                      "/images/icons/user.jpg"
                    }
                  />
                </div>
                <div className="bg-white rounded mb-4 p-4 pb-2">
                  <p className=" d-flex justify-content-start profile-card-title">
                    Details
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="profile-info">Full Name</p>
                      <p className="profile-data text-capitalize">
                        {profileData?.name}
                      </p>
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
                      <p className="profile-info">Creation Date</p>
                      <p className="profile-data">
                        {moment(profileData?.createdAt).format("L")}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-white rounded mb-4 p-4 ">
                  <p className=" d-flex justify-content-start profile-card-title">
                    Document
                  </p>
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
                  <p className=" d-flex justify-content-start profile-card-title">
                    Company Information
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="profile-info">Company Name</p>
                      <p className="profile-data text-capitalize">
                        {profileData?.company_Id?.name}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Company Email</p>
                      <p className="profile-data">
                        {profileData?.company_Id?.email}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Phone Number</p>
                      <p className="profile-data">
                        +97 {profileData?.company_Id?.phone_number}
                      </p>
                    </div>
                    <div>
                      <p className="profile-info">Address</p>
                      <p className="profile-data text-capitalize">
                        {profileData?.company_Id?.address}
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

export default Profile;
