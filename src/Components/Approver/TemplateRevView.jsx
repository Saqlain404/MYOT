

import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
// import "assets/css/style.min.css"
import { Card } from "antd";

import { Link, useParams } from "react-router-dom";
import SidebarDepartment from "./SidebarAprv";
import { templeteViewDetails } from "../../ApiServices/aprroverHttpServices/aprproverHttpService";

const TemplateRevView = () => {
  const[viewData, setViewData] = useState()

  const { id } = useParams();

  useEffect(()=>{
    const templeteView = async()=>{
      const viewDetail = await templeteViewDetails(id)
      console.log(viewDetail)
      setViewData(viewDetail?.templete)
    }
    templeteView()
  },[])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold ms-2">
                      Template / View
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
  <div className="row bg-white rounded  p-4 m-4">
    
    <div className="col-12 d-flex justify-content-between mb-4">
      <p className="preview-cert-txt m-2">Preview</p>
      <div>
      <button className="preview-dwld-btn">Download</button>
      {/* <button className="preview-edit-btn ms-3">Edit</button> */}
      </div>
    </div>
    <div className="col-12 mb-4 ">
      <div className="d-flex justify-content-start mt-4  col-4">
      <img src="/images/template/template-view-logo.svg" alt="" />
      
      </div>
      <p className="col-12 mb-4 text-start mt-4 pb-3">{viewData?.templeteName} <br/> 
{/* 92680 Tustin, CA<br/> 
VAT no.: 12345678<br/> <br/>  */}

Date : {viewData?.createdAt}</p>


  <div>
    <img className=" object-fit-cover" src={viewData?.templete[0]}/>
  </div>

  
  <div className="d-flex justify-content-start mt-4  col-4">
      <img src="/images/template/template-view-signature.svg" alt="" className="pb-4 mb-4" />
      
      </div>
    </div>
  </div>
</div>

<div className="container px-4 ">
<div className="row bg-white rounded  p-4 m-4">
  <div className="col-12">
<p>Select Action</p>
<div class="input-group mb-3">
  
  <select className="form-select template-action" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option value="1">Approved</option>
    <option value="2">Rejected</option>
  </select>
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

export default TemplateRevView;
