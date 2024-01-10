import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  mainForgotPassword,
  mainVerifyOTP,
} from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import OtpInput from "react-otp-input";
import Swal from "sweetalert2";

const MainForgotPass = () => {
  const [formToShow, setFormToShow] = useState("EmailForm");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      let { data } = await mainForgotPassword({ email });
      console.log(data);
      if (!data.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "OTP sent successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });

        setFormToShow("OTPform");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTPsubmit = async (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "OTP must be 4 digits",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

      return false;
    }
    try {
      let { data } = await mainVerifyOTP({ email, otp });
      if (!data.error) {
        navigate("/main/update-password", { state: { email } });
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
                    {formToShow === "EmailForm" ? (
                      <>
                        <div className="">
                          <h2 className=" mb-3 d-flex justify-content-center recover-text">
                            Recover
                          </h2>
                          <p className="reset-pass-desc">
                            No worries, we’ll send you reset instructions.
                          </p>
                        </div>
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              placeholder="Enter your email address"
                              className="form-control w-100"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <button
                            className="btn py-8 mb-3 form-reset"
                            type="submit"
                            onClick={(e) => onSubmitEmail(e)}
                          >
                            Submit
                          </button>
                        </form>
                      </>
                    ) : (
                      <>
                        <div className="">
                          <h2 className=" mb-3 d-flex justify-content-center recover-text">
                            OTP Verification
                          </h2>
                          <p className="reset-pass-desc">
                            Enter OTP Code sent to {email}
                          </p>
                        </div>
                        <form onSubmit={(e) => handleOTPsubmit(e)}>
                          <div className="otp-input-box">
                            <OtpInput
                              inputType="tel"
                              value={otp}
                              onChange={setOtp}
                              numInputs={4}
                              onChangeRegex={/^([0-9]{0,})$/}
                              renderSeparator={
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              }
                              isInputNum
                              inputStyle="otp-field__input"
                              containerStyle="form-group"
                              renderInput={(props) => <input {...props} />}
                            />
                          </div>
                          <button
                            className="btn py-8 my-3 form-reset"
                            type="submit"
                          >
                            Verify OTP
                          </button>
                        </form>
                        <p>
                          Don’t received OTP code?{" "}
                          <a
                            type="button"
                            onClick={(e) => onSubmitEmail(e)}
                            className="text-primary text-decoration-none"
                          >
                            Resend Code
                          </a>
                        </p>
                      </>
                    )}
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

export default MainForgotPass;
