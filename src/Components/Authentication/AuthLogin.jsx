import React from "react";

const AuthLogin = () => {
  return (
    <>
      {/*  Body Wrapper */}
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100">
          <div className="position-relative z-index-5">
            <div className="row">
              <div className="col-xl-5 col-xxl-4">
                <div className="authentication-login bg-body row justify-content-center align-items-center ">
                  <div className="col-sm-8 col-md-6 col-xl-9">
                    <img src="/images/Myot-logo.png" className="logo" />
                    <h2 className="mb-3 fs-7 fw-bolder myot">Myot</h2>
                    <p className="login-desc">
                      Please fill your detail to access your account.
                    </p>

                    <div className="position-relative text-center my-4"></div>
                    <form>
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
                      <div className="d-flex align-items-center justify-content-between mb-4">
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
                        <a
                          className=" fw-medium reset-password"
                          href="authentication-forgot-password.html"
                        >
                          Reset Password?
                        </a>
                      </div>
                      <a href="index.html" className="btn  py-8 mb-4 rounded-2">
                        Log In
                      </a>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-xxl-8">
                <a
                  href="index.html"
                  className="text-nowrap logo-img d-block px-4 py-9 w-100"
                >
                  <img
                    // src="/images/Login.png"
                    width={180}
                    alt=""
                  />
                </a>
                <div
                  className="d-none d-xl-flex align-items-center justify-content-center"
                  style={{ height: "calc(100vh - 80px)" }}
                >
                  <img src="/images/Login.png" alt="" className="img-login" />
                </div>
              </div>
            </div>
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
