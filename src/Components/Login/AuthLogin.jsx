import React from "react";
import { Link } from "react-router-dom";


const AuthLogin = () => {
  return (
    <>

      <div className="container-fluid login-bg" >
        <div className="row flex-nowrap">
        
          <div className="col-4 login-form p-4">
          <div className="form-login mt-4">
          <img src="/images/Myot-logo.png" className="logo" />
                    <h2 className="mb-3 fs-7 fw-bolder myot">Myot</h2>
                    <p className="login-desc">
                      Please fill your detail to access your account.
                    </p>

                    </div>
                    <form className="form-login">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="example@gmail.com"
                          autoComplete="off"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          autoComplete="off"
                        />
                      </div>
                      <div className="d-flex  justify-content-between mb-4 remember">
                        <div className="form-check">
                          <input
                            className="form-check-input primary"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                          />
                         <label
                            className="form-check-label text-dark remember-me"
                            htmlFor="flexCheckChecked"
                          >
                            Remember me
                          </label>
                        </div>
                        <Link 
                      to={"/Admin/Forgot-password"}>
                        <a
                          className=" fw-medium reset-password"
                          href="authentication-forgot-password.html"
                        >
                          Reset Password?
                        </a>
                        </Link>
                      </div>
                      <Link 
                      to={"/Admin/Home"}>
                      
                      <a href="index.html" className="btn  py-8 mb-4 rounded-2">
                        Log In
                      </a>
                      </Link>
                    </form>
          </div>
          <div className="col-8 m-auto ">
          <img src="/images/Login.png" alt="" className="mx-auto d-block img-fluid p-inherit" />
          </div>
          </div>
        </div>
      
      {/*  Import Js Files */}
      {/*  core files */}
      {/* Mirrored from demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/main/authentication-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Oct 2023 06:44:20 GMT */}
    </>
  );
};

export default AuthLogin;
