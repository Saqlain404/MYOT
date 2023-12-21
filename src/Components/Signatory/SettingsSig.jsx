import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";

const SettingsSig = () => {
 

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
                      Settings /
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
   
   
   <div className="bg-white rounded mb-4 p-4 pb-2">
   <div className="d-flex">
              
              <p className="td-text border-bottom me-3">Business Assets</p>
              <p className="th-text  ">System Setting</p>
            </div>
            <div>
              <p className="settings-txt">Select Logo</p>
              <div className="d-flex">
                <img src="/images/settings/facebook-logo.svg" alt="" className="me-3"/>
                <img src="/images/settings/Facebook.svg" alt="" />
              </div>
              <p className="settings-txt mt-3 mb-2">Upload Logo</p>
              <div className="bg-body-tertiary rounded p-4 mb-2 import-img-card">
<img src="/images/dashboard/import-img.svg" alt="" />
<p className="th-text m-1">Drag and drop logo here, or click add image</p>
<button className="add-img-btn mt-4">Add Image</button>
      </div>
            </div>
   </div>

   <div className="bg-white rounded mb-4 pb-2">
  
            <div>
             
              
             
      <p className="settings-txt mt-3 mb-2">Select Colors</p>
      <img src="/images/dashboard/color-palete.svg" alt="" className="color-palete"/>
      <div className="d-flex justify-content-end">
      <button className="notify-admin-btn mt-4 m-2">Save</button>
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

export default SettingsSig;
