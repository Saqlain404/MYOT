import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const EmplForgotSuccess = () => {
  return (
<>
  <div
    className="page-wrapper"
    id="main-wrapper"
    data-layout="vertical"
    data-sidebartype="full"
    data-sidebar-position="fixed"
    data-header-position="fixed"
  >
 <div className="reset-pass-body">             
                <div className="card-forgot">
                  <img src='/images/Forgot-success.png'/>
                  <div className="">
                    <h2 className=" mb-4 d-flex justify-content-center recover-text">
                      Successfully Recover
                    </h2>
                    <p className="reset-pass-desc">
                    Your password successfully recover, Enjoy!
                    </p>
                  </div>
                  <Link 
                      to={"/Employee/Login"}>
                    <button
                      className="btn  py-8 mb-3 reset-success"
                    >
                      Go Back Home
                    </button>
                    </Link>
              </div>
            </div>
            </div>
            </>

)
}

export default EmplForgotSuccess;