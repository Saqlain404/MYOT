import React from 'react'

const RightSidebar = () => {
  return (
    <>
     <div className="container right-sidebar">
    <div className='row'>
     
      <div className="col">

      <ul className="nav nav-pills flex-column  ">
      {/* <span className="right-sidebar-heading mt-2 mb-1">Notifications</span> */}
      <div className="row bg-white">
        <div className="col float-start ">
      <h4 className="text-align-left float-start current-day">Notifications</h4>
        </div>
        <div className="col float-end">
          <div className=" float-end me-1 ">
          <img src="/images/chatbox/More-dots.svg" alt="" className="me-2" />
          </div>
        </div>
      </div>

        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
                <img src="/images/sidebar/Featured Icon.png"/>
              </span>
              
              <span className="right-sidebar-item">You have a bug that need to...</span>
              {/* <p className='sidebar-time'>5m ago</p> */}

              
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Featured Icon user.png"/>
              </span>
              <span className="right-sidebar-item">New user registered</span>
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
                <img src="/images/sidebar/Featured Icon.png"/>
              </span>
              <span className="right-sidebar-item">You have a bug that need to...</span>
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Featured Icon user.png"/>

              </span>
              <span className="right-sidebar-item">New user recentlu added by a..</span>
            </a>
        </li>
      </ul>

      <ul className="nav nav-pills flex-column  ">
      {/* <span className="right-sidebar-heading mt-3 mb-3">Activities</span> */}
      <div className="row bg-white">
        <div className="col float-start  mt-4">
      <h4 className="text-align-left float-start current-day">Activities</h4>
        </div>
        <div className="col float-end">
          <div className=" float-end me-1 mt-4">
          <img src="/images/chatbox/More-dots.svg" alt="" className="me-2" />
          </div>
        </div>
      </div>

        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Avatar1.png"/>

              </span>
              <span className="right-sidebar-item">Edited the details of Project X</span>
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Avatar2.png"/>

              </span>
              <span className="right-sidebar-item">Changed the status of Project X</span>
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Avatar3.png"/>

              </span>
              <span className="right-sidebar-item">Submitted a bug</span>
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Avatar1.png"/>

              </span>
              <span className="right-sidebar-item">Modified A data in Page X</span>
            </a>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
              <img src="/images/sidebar/Avatar4.png"/>

              </span>
              <span className="right-sidebar-item">Deleted a page in Project X</span>
            </a>
        </li>
      </ul>
        
      <div className="row bg-white">
        <div className="col float-start mt-4">
      <h4 className="text-align-left float-start current-day">Calendar</h4>
        </div>
        <div className="col float-end">
          <div className=" float-end me-1 mt-4">
          <img src="/images/chatbox/More-dots.svg" alt="" className="me-2" />
          </div>
        </div>
      </div>
<div>
<div className="row bg-white">
        <div className="col-3">
          <p className="day-time"> 09.00 AM</p>
          </div>
        <div className="col border-bottom d-flex">
          <div className="event-9am right-cal-event">
          
            <p>Onboarding</p>
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-3">
          <p className="day-time"> 10.00 AM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-3 ">
          <p className="day-time"> 11.00 AM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-3">
          <p className="day-time"> 12.00 PM</p>
          </div>
        <div className="col border-bottom d-flex">
        <div className="event-12pm right-cal-event">
          <p>Onboarding</p>
        </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-3">
          <p className="day-time"> 01.00 PM</p>
          </div>
        <div className="col border-bottom"></div>
      </div>
      <div className="row bg-white">
        <div className="col-3">
          <p className="day-time"> 02.00 PM</p>
          </div>
        <div className="col border-bottom d-flex ">
        {/* <div className="event-12pm right-cal-event">
          <p>Onboarding</p>
        </div> */}
        </div>
      </div>
      </div>
      </div>
     
    </div>
  </div>
    </>
  )
}

export default RightSidebar;