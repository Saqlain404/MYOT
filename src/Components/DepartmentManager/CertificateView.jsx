import React from "react";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";

const CertificateView = () => {
 

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
                    <a className="nav-link ms-2" href="app-email.html">
                      Certificate / View
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
  <div className="row bg-white rounded  p-4 m-4">
    
    <div className="col-12 d-flex justify-content-between mb-4">
      <p className="preview-cert-txt m-2">Preview</p>
      <button className="preview-dwld-btn">Download</button>
    </div>
    <div className="col-12 mb-4">
      <img src="/images/dashboard/certificate-download.svg" alt="" className="certificate-img"/>
    </div>
  </div>
</div>

          
        </div>
        </div>
      </div>
    </>
  );
};

export default CertificateView;
