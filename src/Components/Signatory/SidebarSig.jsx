import React from 'react'
import { Link } from 'react-router-dom';

const SidebarSig = () => {
  return (
    <div className='container-fluid  sidebar'>
    {/* Sidebar scroll*/}

    <div className='row'>
    <div className='mb-4 sticky-top bg-white'>
      {/* <img src='/images/Myot-logo.png' className="logo pb-1"/> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 35 28" fill="none" className="logo ">
  <path d="M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z" fill="url(#paint0_linear_417_9559)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z" fill="url(#paint1_linear_417_9559)"/>
  <defs>
    <linearGradient id="paint0_linear_417_9559" x1="6.29648" y1="28.0629" x2="6.27893" y2="-1.63298" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF3FA6"/>
      <stop offset="0.704777" stop-color="#FE8F45"/>
      <stop offset="0.9999" stop-color="#FE8F46"/>
    </linearGradient>
    <linearGradient id="paint1_linear_417_9559" x1="28.7747" y1="0.738455" x2="28.6235" y2="27.8976" gradientUnits="userSpaceOnUse">
      <stop offset="0.03" stop-color="#76B3FB"/>
      <stop offset="0.51" stop-color="#4261F8"/>
      <stop offset="1" stop-color="#8762DD"/>
    </linearGradient>
  </defs>
</svg>
      </div>
      <div className="col-auto col-mg-3 min-vh-100 mb-4">
      <p className="th-text">MAIN MENU</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item text-dark">
          <Link
          to={"/Signatory/Home"}
          className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle" aria-current="page">
        
                <img src="/images/sidebar/home2.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Home</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
          <Link
           to={"/Signatory/Dashboard"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle" aria-current="page">
        
                <img src="/images/sidebar/dashboard.svg" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Dashboard</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
          <Link
          to={"/Signatory/Awaiting-sig"}
          className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle" aria-current="page">
        
                <img src="/images/sidebar/awaiting-sig.svg" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Awaiting Sig.</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
        <Link
           to={"/Signatory/History-log-approved"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/history-log.svg" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn ">History Log</span>
            </a>
            </Link>
        </li>

        <li className="nav-item text-dark">
        <Link
           to={"/Signatory/Calendar"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/user.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Calendar</span>
            </a>
            </Link>
        </li>
       
        <li className="nav-item text-dark">
        <Link
           to={"/Signatory/Requests"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/request.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Requests</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark ">
        <Link
           to={"/Signatory/Announcements"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/announcement.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn ">Announcements</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/files.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Files</span>
            </a>
        </li>
       

        <p className="th-text mt-3">OTHERS</p>

        <li className="nav-item text-dark">
        <Link
           to={"/Signatory/My-Profile"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/my-profile.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">My Profile</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
        <Link
           to={"/Signatory/Settings"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/settings.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Settings</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
        <Link
           to={"/Signatory/Help"}
           className="text-decoration-none">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/help.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Help</span>
            </a>
            </Link>
        </li>
        <li className="nav-item text-dark">
          <a href="/" className="nav-link text-dark fs-5 align-middle " aria-current="page">
        
                <img src="/images/sidebar/logout.png" className='align-middle sidebar-icon'/>
              
              <span className="ms-3 align-middle sidebar-btn">Logout</span>
            </a>
        </li>
        
      </ul>
      </div>

      <div class="dropdown">
  <a class="text-decoration-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <div className="profile">
          <div>
            <img src="/images/sidebar/Profile photo.png" alt="" />
          </div>
          <div>
            <span className="text-dark">Easin Arafat</span>
            <p className="th-text">Signatory</p>
          </div>
          <div>
  <img src="/images/sidebar/ArrowLineDown2.svg" alt="" />
  </div>
  </div>
  </a>
  <ul class="dropdown-menu">
  <Link to={"/Admin/Home"} className="text-decoration-none">
    <li><a class="dropdown-item">Admin</a></li>
    </Link>
    <Link to={"/Approver/Home"} className="text-decoration-none">
    <li><a class="dropdown-item">Approver</a></li>
    </Link>
    <Link to={"/Department/Home"} className="text-decoration-none">
    <li><a class="dropdown-item">Department Manager</a></li>
    </Link>
    
  </ul>
</div>
      
    </div>
 </div>
  )
}

export default SidebarSig;