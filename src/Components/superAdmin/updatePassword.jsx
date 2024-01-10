import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { mainUpdateNewPassword } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import { useForm } from "react-hook-form";

const MainUpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleUpdatePass = async (d) => {
    console.log(d);
    if (d.password !== d.confirmPassword) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Password must be same",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

      return false;
    }
    console.log(state.email, password, confirmPassword);
    d.email = state.email;
    try {
      let { data } = await mainUpdateNewPassword(d);
      console.log(data);
      if (!data.error) {
        setConfirmPassword("");
        setPassword("");
        navigate("/main/success");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <div>
          <div>
            <div className="">
              <div className="">
                <div className="reset-pass-body">
                  <div className="card-forgot">
                    {/* <img
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      src="/images/Myot-logo.png"
                      alt=""
                    /> */}
                    <img src="/images/Ellipse-forgot-pass.png" alt="" />
                    <div className="">
                      <h2 className=" mb-3 d-flex justify-content-center recover-text">
                        Update Password
                      </h2>
                    </div>
                    <form onSubmit={handleSubmit(handleUpdatePass)}>
                      <div className="col-12">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Password
                        </p>
                        <input
                          type="text"
                          placeholder="Password"
                          className="col-12 password-update-input p-2 rounded w-100"
                          name="password"
                          id="password"
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
                      <div className="col-12 mt-4">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Confirm Password
                        </p>
                        <input
                          type="text"
                          placeholder="Confirm Password"
                          className="col-12 password-update-input p-2 rounded w-100"
                          name="confirmPassword"
                          id="confirmPassword"
                          {...register("confirmPassword", {
                            required: "* Please Enter Your Password",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "* Minimun 8 characters, One Uppercase, One Lowercase & A Special Character Allowed",
                            },
                          })}
                        />
                        {errors.confirmPassword && (
                          <small className="errorText ">
                            {errors.confirmPassword?.message}
                          </small>
                        )}
                      </div>

                      <div className="mt-4 d-flex justify-content-center">
                        <button
                          className="btn py-8 mb-3 form-reset"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                      {/* <div className="d-flex justify-content-center">
                        <p className="not-recive-otp me-1">
                          Don’t received OTP code?
                        </p>
                        <p className="text-primary">Resend Code</p>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainUpdatePassword;
