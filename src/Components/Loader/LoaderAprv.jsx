import React from "react";
import "../../assets/styles/loader.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import RightSidebar from "../RightSidebar";
import SidebarAprv from "../Approver/SidebarAprv";

const LoaderAprv = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold">Templates</a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
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

            <div className="loader_container">
              <span class="loader"></span>
            </div>
          </div>

          <div>
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoaderAprv;
