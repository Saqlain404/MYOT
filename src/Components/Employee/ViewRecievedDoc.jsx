import React from 'react'
import SideBarEmpl from './SideBarEmpl'
import { Link } from 'react-router-dom'
import RightSidebar from '../RightSidebar'

const ViewReceivedDoc = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-2 sidebar">
        <SideBarEmpl />
      </div>
      <div className="col-8 middle-content">
        <div className="container-fluid border-bottom mb-4">
          <nav className="row header bg-white  ">
            <ul className="col align-items-center mt-3">
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link ms-2" href="app-email.html">
                Received Document & Retrieval Management / View
                </a>
              </li>
            </ul>
            <div className="col d-flex align-items-center  justify-content-end">
              <form  role="search">
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
                <Link to={"/Employee/Chat"}>
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

        <div className='received-docs'>
        <div className='d-flex align-items-center justify-content-between mx-3 mt-5'>
        <h1 className='received-docs-title'>Received Documents</h1>
       <a href='/txt.pdf' download>
       <button className="download-btn">Download</button>
       </a>
    </div> 
          <div className='docs-info'>
          <h2 className='received-docs-title'>Document Information</h2> 
          <div className='d-flex docs-data'>
          <div>
            <p className='head-data'>Document Name</p>
            <p  className='body-data'>Salary Slip</p>
          </div>
          <div>
            <p className='head-data'>Date of Issued</p>
            <p className='body-data'>01/10/2023</p>
          </div>
          <div>
            <p className='head-data'>Version</p>
            <p className='body-data'>1.0</p>
          </div>
          <div>
            <p className='head-data'>Department</p>
            <p className='body-data'>Human Resources</p>
          </div>
          </div>
         <div>
          <p className='comment'>Comments</p>
          <p className='body-data'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, soluta?</p>
         </div>
      
          </div>

          <div className='docs-info'>
          <h2 className='received-docs-title'>Signatory Information</h2> 
          <div className='d-flex docs-data'>
          <div>
            <p className='head-data'>Signatory Name</p>
            <p  className='body-data'>Ava Wright</p>
          </div>
          <div>
            <p className='head-data'>Role</p>
            <p className='body-data'>Signatory</p>
          </div>
          <div>
            <p className='head-data'>Department</p>
            <p className='body-data'>Human Resources</p>
          </div>
          <div>
            <p className='head-data'>Department</p>
            <p className='body-data'>Human Resources</p>
          </div>
          
          </div>

          <div className='d-flex docs-data'>
          <div>
            <p className='head-data'>Last Login</p>
            <p  className='body-data'>10/10/2023</p>
          </div>
          <div>
            <p className='head-data'>Date of Issued</p>
            <p className='body-data'>20/10/2023</p>
          </div>
          <div>
            <p className='head-data'>Department</p>
            <p className='body-data'>Human Resources</p>
          </div>
          <div>
            <p className='head-data'>Department</p>
            <p className='body-data'>Human Resources</p>
          </div>
          
          </div>
          
          </div>

        </div>

       
      </div>
      <RightSidebar/>
    </div>

  </div>
  )
}

export default ViewReceivedDoc