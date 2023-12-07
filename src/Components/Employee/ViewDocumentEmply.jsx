import React from 'react'
import SideBarEmpl from './SideBarEmpl'
import { Link } from 'react-router-dom'

const ViewDocumentEmply = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-2 sidebar">
        <SideBarEmpl />
      </div>
      <div className="col-10 middle-content">
        <div className="container-fluid border-bottom mb-4">
          <nav className="row header bg-white  ">
            <ul className="col align-items-center mt-3">
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link ms-2" href="app-email.html">
                    Documents Requests Management / View
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
       <div className='view-details'>
       <div className='d-flex align-items-center justify-content-between m-5'>
        <h1 className='preview'>Preview</h1>
       <a href='/txt.pdf' download>
       <button className="download-btn">Download</button>
       </a>
    </div>  
    <img className='jLogo' src='../images/jLogo.png'/>
    <h1 className='view-text-1'>
    4304 Liberty Avenue 92680 Tustin, CA <br/>
    VAT no.: 12345678 <br/>
    Date : 09/10/2023
    </h1>
    <h1 className='view-text-1'>
    Susan Lewis <br/>
    4304 Liberty Avenue <br/>
    92680 Tustin, CA <br/>
    VAT no.: 12345678
    </h1>
    <h1 className='view-text-1 mt-5'>Dear Nancy Walker,</h1>

    <p className='view-text-2'>
    We are pleased to inform you that, effective from [Effective Date], you have been promoted to the position of [New Position]. This promotion is in recognition of your outstanding performance, dedication, <br/>
    and contribution to [Department Name] and TechFusion Corp.. <br/> <br/>

    Your new salary will be [New Salary], effective from [Effective Date]. You will also be entitled to [Additional Benefits, if any]. <br/>

    [Additional Information or Details] <br/> <br/>

    Congratulations on your well-deserved promotion. We look forward to your continued dedication and exceptional work. <br/><br/>

    Warm regards, <br/><br />

    Susan Lewis <br/>
    [Signatory Position]
    </p>
    <img className='sign' src='../images/sign.png'/>
  <div className='sign-2'>
  <p>Nancy Walker</p> <br/>
  <img className='sign' src='../images/sign.png'/>
  </div>
   </div>
      </div>
    </div>

  </div>
  )
}

export default ViewDocumentEmply