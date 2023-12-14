import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { employeeLogin } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const EmplAuthLogin = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token-company")) {
      navigate("/Employee/Login");
    }
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    const response = await employeeLogin(data);
    if (!response.data?.error) {
      navigate("/Employee/Dashboard");
      console.log(response)
    }
  };

  const typeChange = () => {
    if (type === "password") setType("text");
    else {
      setType("password");
    }
  };

  const getPasswordValue = (value) => {
    console.log(value);
    setPassword(value);
  };

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
                    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label
                          for=""
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          name="email"
                          placeholder="example@gmail.com"
                          autoComplete="off"
                          {...register("email", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                         {errors?.email && (
                            <p className="form-error mt-1">
                              {errors.email.message}
                            </p>
                          )}
                          <ToastContainer/>
                      </div>
                      <div className="mb-4">
                        <label
                          for=""
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          autoComplete="off"
                          {...register("password", {
                            required: true,
                            onChange: (e) => {
                              getPasswordValue(e.target.value);
                            },
                          })}
                        />
                        {password ? (
                            <i
                              className={`fa eyepassword fa-eye${
                                type === "password" ? "" : "-slash"
                              }`}
                              onClick={() => typeChange()}
                            ></i>
                          ) : (
                            ""
                          )}
                          
                          {errors?.password && (
                            <p className="form-error mt-1">
                              This field is required
                            </p>
                          )}
                          
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
                      to={"/Employee/Forgot-password"}>
                        <a
                          className=" fw-medium reset-password"
                          href="authentication-forgot-password.html"
                        >
                          Reset Password? 
                        </a>
                        </Link>
                      </div>
                      <button className="btn  py-8 mb-4 rounded-2" to="" type="submit">
                            Submit
                          </button>
                    </form>
          </div>
          <div className="col-8 m-auto ">
          <img src="/images/Login.png" alt="" className=" text-center d-block img-fluid p-inherit" />
          </div>
          </div>
        </div>
      
      {/*  Import Js Files */}
      {/*  core files */}
      {/* Mirrored from demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/main/authentication-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Oct 2023 06:44:20 GMT */}
    </>
  );
};

export default EmplAuthLogin;