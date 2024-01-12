import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminSignUp } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import Swal from "sweetalert2";
import classNames from "classnames";
import { Button } from "rsuite";

const AuthSignUp = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoader(true);
    const response = await adminSignUp(data);
    if (!response.data.error) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: response.data.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setLoader(false);
    } else {
      setLoader(false);
    }
    setTimeout(() => {
      setTimeout(false);
    }, [6000]);
  };

  const togglePassword = () => {
    setPassVisible(!passVisible);
  };

  return (
    <>
      <div className="container-fluid login-bg">
        <div className="row flex-nowrap">
          <div className="col-5 login-form signup-form  p-4">
            <div className="form-login py-0">
              <img src="/images/Myot-logo.png" className="logo" />
              <h2 className="mb-3 fs-7 fw-bolder myot">Myot</h2>
              <p className="login-desc pb-4">
                Please fill your detail to create new account.
              </p>
            </div>
            <form className="form-login row" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 col-6">
                <label for="" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className={classNames("form-control", {
                    "is-invalid": errors.companyName,
                  })}
                  id="companyName"
                  name="companyName"
                  placeholder="Enter Your Company Name"
                  autoComplete="off"
                  {...register("companyName", { required: true })}
                />
                {errors.companyName && (
                  <small className="errorText mt-1 ">
                    This field is required
                  </small>
                )}
              </div>
              <div className="mb-3 col-6">
                <label for="" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className={classNames("form-control", {
                    "is-invalid": errors.email,
                  })}
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
              <div className="mb-4 col-6 password_field">
                <label for="" className="form-label">
                  Password
                </label>
                <input
                  type={passVisible ? "text" : "password"}
                  className={classNames("form-control", {
                    "is-invalid": errors.password,
                  })}
                  name="password"
                  placeholder="********"
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
                <div
                  className="eye_container_signUp"
                  onClick={() => setPassVisible(!passVisible)}
                >
                  {passVisible ? (
                    <img
                      className="eye_icon"
                      src="/images/icons/view.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="eye_icon"
                      src="/images/icons/hide.png"
                      alt=""
                    />
                  )}
                </div>
                {errors.password && (
                  <small className="errorText ">
                    {errors.password?.message}
                  </small>
                )}
              </div>
              <div className="mb-3 col-6">
                <label className="form-label" htmlFor="">
                  Mobile Number
                </label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.mobileNumber,
                  })}
                  type="number"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Enter Your Mobile Number"
                  {...register("mobileNumber", {
                    required: true,
                    maxLength: 9,
                    minLength: 9,
                  })}
                />

                {errors.mobileNumber &&
                  errors.mobileNumber.type === "required" && (
                    <p className="errorText mt-1">This field is required</p>
                  )}

                {errors.mobileNumber &&
                  errors.mobileNumber.type === "maxLength" && (
                    <p className="errorText mt-1">
                      Please enter 9 digit number
                    </p>
                  )}
                {errors.mobileNumber &&
                  errors.mobileNumber.type === "minLength" && (
                    <p className="errorText mt-1">
                      Please enter 9 digit number
                    </p>
                  )}
              </div>

              <div className="mb-3 col-12">
                <label for="" className="form-label">
                  Address
                </label>
                <textarea
                  type="text"
                  className="form-control text-area"
                  id="address"
                  name="address"
                  placeholder="Please Enter Your Current Address"
                  autoComplete="off"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <small className="errorText mt-1">
                    This field is required
                  </small>
                )}
              </div>

              <div className="col-12">
                <Button
                  loading={loader}
                  appearance="primary"
                  className="btn py-8 mb-3  rounded-2"
                  type="submit"
                >
                  SIGN UP
                </Button>
              </div>

              <label className="form-check-label text-dark text-center mt-2 remember-me mb-4">
                Already have an account?{" "}
                <Link
                  className=" fw-medium reset-password ms-2 fw-bold"
                  to="/Admin/Login"
                >
                  Sign In
                </Link>
              </label>
            </form>
          </div>
          <div className="col-7 d-flex justify-content-center align-items-center">
            <div>
              <img
                src="/images/Login.png"
                alt=""
                className=" text-center d-block img-fluid p-inherit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSignUp;
