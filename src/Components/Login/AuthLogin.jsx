import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { setUserData } from "../app/slice/userSlice";

const AuthLogin = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token-admin")) {
      navigate("/Login");
    }
  }, []);

  let loginCreds = JSON.parse(localStorage.getItem("myot_login_save"));

  const rememberMe = (data) => {
    localStorage.setItem("myot_login_save", JSON.stringify(data));
  };

  const onSubmit = async (data) => {
    console.log(data);

    rememberCheck && rememberMe(data);
    const response = await adminLogin(data);
    // console.log("login Data", response);

    if (!response?.data?.error) {
      toast("Logged in successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(setUserData(response?.data?.results?.employee));
      navigate("/Admin/Home");
    }
  };
  const togglePassword = () => {
    setPassVisible(!passVisible);
  };

  const getPasswordValue = (value) => {
    console.log(value);
    setPassword(value);
  };
  return (
    <>
      <div className="container-fluid login-bg">
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
                <label for="" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  defaultValue={loginCreds?.email}
                  // value={}
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
                  <small className="errorText mt-1">
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className="mb-4">
                <label for="" className="form-label">
                  Password
                </label>
                <input
                  type={passVisible ? "text" : "password"}
                  className="form-control"
                  name="password"
                  id="password"
                  autoComplete="off"
                  defaultValue={loginCreds?.password}
                  {...register("password", {
                    required: "* Please Enter Your Password",
                    // pattern: {
                    //   value:
                    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    //   message:
                    //     "* Minimun 8 characters, One Uppercase, One Lowercase & A Special Character Allowed",
                    // },
                  })}
                />
                {errors.password && (
                  <small className="errorText ">
                    {errors.password?.message}
                  </small>
                )}
              </div>
              <div className="text-center mb-2" onClick={togglePassword}>
                <input
                  type="checkbox"
                  className="cursor_pointer"
                  {...register("passwordToggle")}
                />
                <span className="cursor_pointer mx-2 remember-me">
                  Show Password
                </span>
              </div>
              <div className="d-flex justify-content-between mb-4 remember">
                <div className="form-check">
                  <input
                    className="form-check-input primary"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckChecked"
                    defaultChecked=""
                    value={rememberCheck}
                    onChange={(e) => setRememberCheck(!rememberCheck)}
                  />
                  <label
                    className="form-check-label text-dark remember-me"
                    htmlFor="flexCheckChecked"
                  >
                    Remember me
                  </label>
                </div>
                <Link to={"/Forgot-password"}>
                  <a
                    className=" fw-medium reset-password"
                    href="authentication-forgot-password.html"
                  >
                    Reset Password?
                  </a>
                </Link>
              </div>

              <button className="btn py-8 mb-4 rounded-2" type="submit">
                Log In
              </button>
            </form>
          </div>
          <div className="col-8 m-auto ">
            <img
              src="/images/Login.png"
              alt=""
              className=" text-center d-block img-fluid p-inherit"
            />
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
