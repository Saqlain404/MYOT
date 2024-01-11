import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  forgotPassword,
  verifyOTP,
} from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";

const AuthforgotPass = () => {
  const [formToShow, setFormToShow] = useState("EmailForm");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      let { data } = await forgotPassword({ email });
      console.log(data);
      if (data && !data?.error) {
        toast.success("OTP sent successfully");
        setFormToShow("OTPform");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTPsubmit = async (e) => {
    e.preventDefault();
    console.log(email, otp);
    if (otp.length < 4) {
      toast.error("OTP must be 4 digits", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    try {
      let { data } = await verifyOTP({ email, otp });
      if (data && !data?.error) {
        // toast.success("OTP verified successfully");
        navigate("/Update-password", { state: { email } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ResendOtp = async (e) => {
    onSubmitEmail(e);
    setCounter(60);
    e.preventDefault();
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
                            onClick={onSubmitEmail}
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
                            Enter OTP Code sent to {email.substring(0, 3)}
                            {"*".repeat(email.length - 6)}
                            {email.slice(-3)}
                          </p>
                        </div>
                        <form onSubmit={handleOTPsubmit}>
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
                        {/* <div className="form-group col-12 text-center">
                          {counter ? (
                            <span className="count_Sec"> 00:{counter}</span>
                          ) : null}
                        </div> */}
                        <p>
                          Don’t received OTP code?{" "}
                          {counter ? (
                            <span className="count_Sec">
                              Resend after 00:{counter}
                            </span>
                          ) : (
                            <span
                              className="otp-sec mx-1 text-primary"
                              id="resendOTP"
                              onClick={(e) => ResendOtp(e)}
                              style={{ cursor: "pointer" }}
                            >
                              <b>Request again</b>
                            </span>
                          )}
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

export default AuthforgotPass;
