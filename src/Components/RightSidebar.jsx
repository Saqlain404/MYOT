import React from 'react'

const RightSidebar = () => {
  return (
    <>
     <div className="container right-sidebar">
    <div className='row'>
     
      <div className="col">

      <ul className="nav nav-pills flex-column  ">
      <span className="right-sidebar-heading mt-2 mb-1">Notifications</span>

        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
          <span>
                <img src="/images/sidebar/featured Icon.png"/>
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
                <img src="/images/sidebar/featured Icon.png"/>
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
      <span className="right-sidebar-heading mt-3 mb-3">Activities</span>

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
        {/* <ul id="sidebarnav">
         
          <li className="">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Notifications</span>
          </li>
          
          <li className="sidebar-item">
            <a
             
            >
              <span>
                <img src="/images/sidebar/featured Icon.png"/>
              </span>
              <span className="">You have a bug that need to...</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              
            >
              <span>
              <img src="/images/sidebar/Featured Icon user.png"/>
              </span>
              <span className="hide-menu">New user registered</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              
            >
              <span>
              <img src="/images/sidebar/Avatar-Text-Time.png"/>
              </span>
              
            </a>
          </li>
          <li className="sidebar-item">
            <a
              
            >
              <span>
              <img src="/images/sidebar/Featured Icon user.png"/>

              </span>
              <span className="hide-menu">New user recentlu added by a..</span>
            </a>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">OTHER</span>
          </li>
          <li className="sidebar-item">
            <a
              
            >
              <span>
              <img src="/images/sidebar/Avatar1.png"/>

              </span>
              <span className="hide-menu">Edited the details of Project X</span>
            </a>
          </li>
          <li className="sidebar-item">
            
              <span>
              <img src="/images/sidebar/Avatar2.png"/>

              </span>
              <span className="hide-menu">Changed the status of Project X</span>
            
          </li>
          <li className="sidebar-item">
            
              <span>
              <img src="/images/sidebar/Avatar3.png"/>

              </span>
              <span className="hide-menu">Submitted a bug</span>
            
          </li>
          <li className="sidebar-item">
            <a
              
            >
              <span>
              <img src="/images/sidebar/Avatar1.png"/>

              </span>
              <span className="hide-menu">Modified A data in Page X</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              
            >
              <span>
              <img src="/images/sidebar/Avatar4.png"/>

              </span>
              <span className="hide-menu">Deleted a page in Project X</span>
            </a>
          </li>
        </ul> */}
        
      </div>
     
    </div>
  </div>
    </>
  )
}

export default RightSidebar;