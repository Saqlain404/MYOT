import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Calendar, theme, Badge } from 'antd';
// import "assets/css/style.min.css"
import { Card } from 'antd';
import MiniCalendar from "./MiniCalendar";
// import CalenderYear from "./CalenderYear";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";




const CalenderDept = () => {
  

  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar pe-0">
            <SidebarDepartment />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Calendar
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

            <div className="d-flex ps-3 ">
              <p className="p-2 text-decoration-underline td-text">Day</p>
              <p className="p-2 th-text ">Week</p>
              <Link to={"/Department/Calendar-month"} className="text-decoration-none">
              <p className="p-2 th-text">Month</p>
              </Link>
              <Link to={"/Department/Calendar-year"} className="text-decoration-none">
              <p className="p-2 th-text">Year</p>
              </Link>
            </div>
            <div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col-3  ">
     <div className=" bg-white min-vh-100 p-4 ">
      <button className="create-task-btn ">
         +{" "}Create Task
      </button>
      <MiniCalendar className="mini-calendar"/>
     </div>
    </div>
    <div className="col-9 ">
      <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">September 03, 2023</h4>
        </div>
        <div className="col float-end">
          <div className=" float-end me-3 mt-4">
          <img src="/images/calendar/Arrow-down.svg" alt="" className="me-2" />
          <img src="/images/calendar/Arrow-forward.svg" alt="" className="ms-2" />
          </div>
        </div>
      </div>
   
      <div>
      
      
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 09.00 AM</p>
          </div>
        <div className="col border-bottom d-flex">
          <div className="event-9am">
          
            <p>Invited by HR </p>
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 10.00 AM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1 ">
          <p className="day-time"> 11.00 AM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 12.00 PM</p>
          </div>
        <div className="col border-bottom d-flex">
        <div className="event-12pm">
          <p>Promotion Letter</p>
        </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 01.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 02.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 03.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 04.00 PM</p>
          </div>
        <div className="col border-bottom d-flex">
        <div className="event1-4pm">
          <p>Onboarding Process</p>
        </div>
        <div className="event2-4pm">
          <p>Offer Letter</p>
        </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 05.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 06.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 07.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 08.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 09.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 10.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 11.00 PM</p>
          </div>
        <div className="col border-bottom d-flex">
        <div className="event-11pm">
          <p>Salary Credit</p>
        </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 12.00 AM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-1">
          <p className="day-time"> 01.00 AM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
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

export default CalenderDept;
