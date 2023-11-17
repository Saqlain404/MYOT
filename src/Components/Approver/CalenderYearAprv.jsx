import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import MiniCalendar from "./MiniCalendar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";

const CalendarYearAprv = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar pe-0">
            <SidebarAprv />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom mb-4">
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

            <div className="d-flex ps-3 ">
            <Link to={"/Approver/Calendar"} className="text-decoration-none">
              <p className="p-2 th-text">Day</p>
              </Link>
              <p className="p-2 th-text ">Week</p>
              <Link to={"/Approver/Calendar-month"} className="text-decoration-none">
              <p className="p-2 th-text">Month</p>
              </Link>
              <p className="p-2  text-decoration-underline td-text">Year</p>
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
      <div className="row mb-4">
   
      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">January 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">February 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">March 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>
      
      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">April 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">May 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">June 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">July 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">August 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">September 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">October 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">November 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

      <div className="col-4  gx-5">
    <div className="row bg-white">
        <div className="col float-start ms-2 mt-4">
      <h4 className="text-align-left float-start current-day">December 2023</h4>
        </div>
      </div>
      <div className="row bg-white">

          <div className="col day-year p-2">S</div>
          <div className="col day-year p-2">M</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">W</div>
          <div className="col day-year p-2">T</div>
          <div className="col day-year p-2">F</div>
          <div className="col day-year p-2">S</div>
      </div>
    <div className="row bg-white">
        <div className="col p-2 prev-day-year">29</div>
        <div className="col p-2 prev-day-year">30</div>
        <div className="col p-2 day-year">01</div>
        <div className="col p-2 day-year">02</div>
        <div className="col p-2 day-year">03</div>
        <div className="col p-2 day-year">04</div>
        <div className="col p-2 day-year">05</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">06</div>
        <div className="col p-2 day-year">07</div>
        <div className="col p-2 day-year">08</div>
        <div className="col p-2 day-year">09</div>
        <div className="col p-2 day-year">10</div>
        <div className="col p-2 day-year">11</div>
        <div className="col p-2 day-year">12</div>
      </div> 
      <div className="row bg-white">
        <div className="col p-2 day-year">13</div>
        <div className="col p-2 day-year">14</div>
        <div className="col p-2 day-year">15</div>
        <div className="col p-2 day-year">16</div>
        <div className="col p-2 day-year">17</div>
        <div className="col p-2 day-year">18</div>
        <div className="col p-2 day-year">19</div>
      </div>
      <div className="row bg-white">
        <div className="col p-2 day-year">20</div>
        <div className="col p-2 day-year">21</div>
        <div className="col p-2 day-year">22</div>
        <div className="col p-2 day-year">23</div>
        <div className="col p-2 day-year">24</div>
        <div className="col p-2 day-year">25
       
        </div>
        <div className="col p-2 day-year">26</div>
      </div>
      <div className="row bg-white" >
        <div className="col p-2 day-year">27</div>
        <div className="col p-2 day-year">28</div>
        <div className="col p-2 day-year">29</div>
        <div className="col p-2 day-year">30</div>
        <div className="col p-2 day-year">31</div>
        <div className="col p-2 prev-day-year">01</div>
        <div className="col p-2 prev-day-year">02</div>
      </div>
      </div>

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

export default CalendarYearAprv;
