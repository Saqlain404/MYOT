import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";

const SignManagement = () => {
 

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig/>
          </div>
          <div className="col-7 middle-content  p-0 min-vh-100">
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
                    <Link to={"/Signatory/Chat"}>
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
              <p className="th-text  me-3">Profile</p>
              </Link>
              <Link to={"/Signatory/Signature-management"} className="text-decoration-none">
              <p className="td-text border-bottom">Signature Management</p>
              </Link>
            </div>
    </div>
   
   <div className="bg-white rounded mb-4 p-4 pb-2">
    <p className=" d-flex justify-content-start profile-card-title">Signature Version</p>
    <div className="col-12 d-flex">
      <div>
        <img src="/images/dashboard/sign-img1.svg" alt="" className="signature-img" />
      </div>
      <div>
      <img src="/images/dashboard/sign-img2.svg" alt="" className="signature-img"  />
      </div>
      <div>
      <img src="/images/dashboard/sign-img3.svg" alt="" className="signature-img"  />
      </div>
      <div>
      <img src="/images/dashboard/sign-img4.svg" alt="" className="signature-img"  />
      </div>
    </div>
    <div className="col-12 d-flex">
      <div>
        <img src="/images/dashboard/sign-img5.svg" alt="" className="signature-img" />
      </div>
      <div>
      <img src="/images/dashboard/sign-img6.svg" alt="" className="signature-img"  />
      </div>
      <div>
      <img src="/images/dashboard/sign-img7.svg" alt="" className="signature-img"  />
      </div>
      <div>
      <img src="/images/dashboard/sign-img8.svg" alt="" className="signature-img"  />
      </div>
    </div>
   </div>
   <div className="col-12 bg-white rounded mb-4 p-4 ">
    <p className=" d-flex justify-content-start profile-card-title">Upload Signature</p>
      <div className="bg-body-tertiary rounded p-4 import-img-card">
<img src="/images/dashboard/import-img.svg" alt="" />
<p className="th-text m-1">Drag and drop logo here, or click add image</p>
<button className="add-img-btn mt-4">Add Image</button>
      </div>
      <div className="d-flex justify-content-end">
      <button className="notify-admin-btn">Notify Admin</button>
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

export default SignManagement;
