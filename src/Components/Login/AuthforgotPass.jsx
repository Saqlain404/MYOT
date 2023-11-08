import React from 'react'
import { Link } from 'react-router-dom';

const AuthforgotPass = () => {
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
    <div >
      <div >
        <div className="">
          <div className="">
            <div className="reset-pass-body">             
                <div className="card-forgot">
                  <img src='/images/Ellipse-forgot-pass.png'/>
                  <div className="">
                    <h2 className=" mb-3 d-flex justify-content-center recover-text">
                      Recover
                    </h2>
                    <p className="reset-pass-desc">
                    No worries, we’ll send you reset instructions.
                    </p>
                  </div>
                  <form >
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control form-reset"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder='example@gmail.com'
                      />
                    </div>
                    <Link
                      to={"/Admin/Forgot-success"}>
                    <a
                      href="javascript:void(0)"
                      className="btn  py-8 mb-3 form-reset"
                    >
                      Reset Your Password
                    </a>
                    </Link>
                  </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  Import Js Files */}
  {/*  core files */}
  {/* Mirrored from demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/main/authentication-forgot-password.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Oct 2023 06:44:20 GMT */}
</>

)
}

export default AuthforgotPass;
