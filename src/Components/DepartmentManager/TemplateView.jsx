import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";

const TemplateView = () => {

  
 

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Template / Template Version 1.0 / View
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
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
  <div className="row bg-white rounded  p-4 m-4">
    
    <div className="col-12 d-flex justify-content-between mb-4">
      <p className="preview-cert-txt m-2">Preview</p>
      <div>
      <button className="preview-dwld-btn">Download</button>
      <button className="preview-edit-btn ms-3">Edit</button>
      </div>
    </div>
    <div className="col-12 mb-4 ">
      <div className="d-flex justify-content-start mt-4  col-4">
      <img src="/images/template/template-view-logo.svg" alt="" />
      
      </div>
      <p className="col-12 mb-4 text-start mt-4 pb-3">4304 Liberty Avenue <br/> 
92680 Tustin, CA<br/> 
VAT no.: 12345678<br/> <br/> 

Date : 09 Oct, 2023</p>
<p className="col-12 mb-4 text-start mt-4">
  Susan Lewis<br/> 
  4304 Liberty Avenue<br/> 
  92680 Tustin, CA<br/>

  VAT no.: 12345678</p>

  <p className="col-12 mb-4 text-start mt-4">
  Dear Nancy Walker,
  </p>
  <p className="col-12 mb-4 text-start mt-4">
  We are pleased to inform you that, effective from [Effective Date], you have been promoted to the position of [New Position]. This promotion is in recognition of your outstanding performance, dedication, 
and contribution to [Department Name] and TechFusion Corp.. <br/> <br/>

Your new salary will be [New Salary], effective from [Effective Date]. You will also be entitled to [Additional Benefits, if any]. <br/><br/>

[Additional Information or Details] <br/><br/>

Congratulations on your well-deserved promotion. We look forward to your continued dedication and exceptional work. <br/><br/>

Warm regards,<br/><br/>

Susan Lewis <br/>
[Signatory Position]
  </p>
  
  <div className="d-flex justify-content-start mt-4  col-4">
      <img src="/images/template/template-view-signature.svg" alt="" className="pb-4 mb-4" />
      
      </div>
    </div>
  </div>
</div>

          
        </div>
        </div>
      </div>
    </>
  );
};

export default TemplateView;
