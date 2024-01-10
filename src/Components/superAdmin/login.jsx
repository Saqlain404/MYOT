import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { mainAdminLogin } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import Swal from "sweetalert2";

const Login = () => {
  const [passVisible, setPassVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token-main-admin")) {
      navigate("/main/home");
    } else {
      navigate("/main/login");
    }
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    const response = await mainAdminLogin(data);

    if (!response.data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Logged in successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

      navigate("/main/home");
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

              <div className="d-flex justify-content-between remember">
                <div className=" mb-1" onClick={togglePassword}>
                  <input
                    type="checkbox"
                    className="cursor_pointer"
                    {...register("passwordToggle")}
                  />
                  <span className="cursor_pointer mx-2 remember-me">
                    Show Password
                  </span>
                </div>
                <Link
                  to="/main/forgot-password"
                  className=" fw-medium reset-password mb-1"
                >
                  Forgot Password?
                </Link>
              </div>

              <button className="btn py-8 mb-1  rounded-2" type="submit">
                Log In
              </button>
            </form>
          </div>
          <div className="col-8 m-auto d-flex justify-content-center ">
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

export default Login;
