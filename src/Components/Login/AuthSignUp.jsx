import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminSignUp } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import { toast } from "react-toastify";

const AuthSignUp = () => {
  const [passVisible, setPassVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await adminSignUp(data);

    if (!response.data.error) {
      console.log(response.data);

      toast(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      if (response.data.results.status) navigate("/Admin/login");
    }
  };
  const togglePassword = () => {
    setPassVisible(!passVisible);
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
                Please fill your detail to create new account.
              </p>
            </div>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for="" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                  placeholder="Company name"
                  autoComplete="off"
                  {...register("companyName", { required: true })}
                />
                {errors.companyName && (
                  <small className="errorText ">This field is required</small>
                )}
              </div>
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
              <div className="mb-1">
                <label for="" className="form-label">
                  Password
                </label>
                <input
                  type={passVisible ? "text" : "password"}
                  className="form-control"
                  name="password"
                  id="password"
                  autoComplete="off"
                  {...register("password", {
                    required: "* Please Enter Your Password",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "* Minimun 8 characters, One Uppercase, One Lowercase & A Special Character Allowed",
                    },
                  })}
                />
                {errors.password && (
                  <small className="errorText ">
                    {errors.password?.message}
                  </small>
                )}
              </div>
              <div className=" mb-4" onClick={togglePassword}>
                <input
                  type="checkbox"
                  className="cursor_pointer"
                  {...register("passwordToggle")}
                />
                <span className="cursor_pointer mx-2 remember-me">
                  Show Password
                </span>
              </div>

              <button className="btn py-8 mb-1  rounded-2" type="submit">
                Sign Up
              </button>
              <label className="form-check-label text-dark remember-me mb-4">
                Already have an account?{" "}
                <Link
                  className=" fw-medium reset-password ms-2"
                  to="/Admin/Login"
                >
                  Sign In
                </Link>
              </label>
            </form>
          </div>
          <div className="col-8 d-flex justify-content-between">
            <img
              src="/images/Login.png"
              alt=""
              className=" text-center d-block img-fluid p-inherit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSignUp;
