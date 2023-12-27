import React from "react";
import MiniCalendar from "./MiniCalendar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";

const CalendarMonthDept = () => {
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
                <Link to={"/Department/Calendar"} className="text-decoration-none">
              <p className="p-2 th-text">Day</p>
              </Link>
              <p className="p-2 th-text ">Week</p>
              <p className="p-2 text-decoration-underline td-text">Month</p>
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
      <div className="row">

          <div className="col weekdays p-4">Sun</div>
          <div className="col weekdays p-4">Mon</div>
          <div className="col weekdays p-4">Tue</div>
          <div className="col weekdays p-4">Wed</div>
          <div className="col weekdays p-4">Thu</div>
          <div className="col weekdays p-4">Fri</div>
          <div className="col weekdays p-4">Sat</div>
      </div>
      <div className="row bg-white border-top">
        <div className="col prev-day border-start">29</div>
        <div className="col prev-day">30</div>
        <div className="col day">01</div>
        <div className="col day">02</div>
        <div className="col today active">03
        <p className="event-1">Offer Letter</p>
        <p className="event-2">Salary slip</p>
        <p className="event-more">More</p>

        </div>
        <div className="col day">04</div>
        <div className="col day">05</div>
      </div>
      <div className="row bg-white border-top">
        <div className="col day border-start">06</div>
        <div className="col day">07</div>
        <div className="col day">08</div>
        <div className="col day">09</div>
        <div className="col day">10</div>
        <div className="col day">11</div>
        <div className="col day">12</div>
      </div> 
      <div className="row bg-white border-top">
        <div className="col day border-start">13</div>
        <div className="col day">14
        <p className="event-3">Contract</p>
        </div>
        <div className="col day">15</div>
        <div className="col day">16</div>
        <div className="col day">17</div>
        <div className="col day">18</div>
        <div className="col day">19</div>
      </div>
      <div className="row bg-white border-top">
        <div className="col day border-start">20</div>
        <div className="col day">21</div>
        <div className="col day">22
        <p className="event-2">Promotion Letter</p>
        </div>
        <div className="col day">23</div>
        <div className="col day">24</div>
        <div className="col day">25
        <p className="event-1">Annual Performance</p>
        </div>
        <div className="col day">26</div>
      </div>
      <div className="row bg-white border-top border-bottom mb-4" >
        <div className="col day border-start">27</div>
        <div className="col day">28</div>
        <div className="col day">29</div>
        <div className="col day">30</div>
        <div className="col day">31</div>
        <div className="col next-day">01</div>
        <div className="col next-day">02</div>
      </div>
      <div>
        
      
    
        <div className="col border-bottom"></div>
      </div>
      </div>
    </div>
  </div>
</div>

          
        </div>
      </div>
      </>
  )
}

export default CalendarMonthDept;