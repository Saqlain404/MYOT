import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";


const Analytics = () => {
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link th-text ms-2" href="app-email.html">
                      Analytics / Report Management
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form class="" role="search">
                    <input
                      class="form-control search-bar"
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
            <div className="d-flex">
              <Link to={"/"} className="text-decoration-none">
              <p className="td-text border-bottom me-3">Template Usage</p>
              </Link>
              <Link to={"/"} className="text-decoration-none">
              <p className="th-text  ">Employee Activity</p>
              </Link>
            </div>
            <div className="col-12">
              <div className="row">
            
                <div className="col-md-12 ">

                <img src="/images/dashboard/Block.svg" alt="" className="dashboard-graph"/>
                  
                </div>
                <div className="col-md-6 ">

<img src="/images/dashboard/Medium_Traffic.svg" alt="" className="dashboard-graph"/>
  
</div>
<div className="col-md-6 ">

<img src="/images/dashboard/Medium_Pie Chart.svg" alt="" className="dashboard-graph"/>
  
</div>


                

                

               
                
                
              </div>
            </div>

            
           
            <div className="footer">
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

          <div className="middle-section">
            <div className="body-wrapper">
              <div className="container-fluid">
                <div className="row d-flex flex-direction-row cards-row"></div>
                <div className="d-flex cardss"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
