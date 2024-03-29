import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { UpdateNewPassword } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import Swal from "sweetalert2";
import { Button } from "rsuite";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passVal, setPassVal] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleUpdatePass = async (e) => {
    setLoader(true);
    e.preventDefault();
    if (!validatePassword(password)) {
      setPassVal(true);
      setLoader(false);
      return false;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Password must be same",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      setLoader(false);
      return false;
    }
    try {
      let { data } = await UpdateNewPassword({
        email: state.email,
        password,
        confirmPassword,
      });
      console.log(data);
      if (data && !data?.error) {
        setLoader(false);
        setConfirmPassword("");
        setPassword("");
        navigate("/Forgot-success");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
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
                    <form onSubmit={handleUpdatePass}>
                      <div className="col-12 input_icon_container">
                        <div
                          className={
                            !validatePassword(password)
                              ? "text-danger input_icons input_icons2"
                              : "input_icons2"
                          }
                        >
                          <FontAwesomeIcon icon={faLock} />
                        </div>
                        <p className=" d-flex justify-content-start profile-card-title">
                          Password
                        </p>
                        <input
                          type={passVisible ? "text" : "password"}
                          value={password}
                          placeholder="Password"
                          className="col-12 password-update-input p-2 rounded w-100 text-dark"
                          name="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setPassVal(false);
                          }}
                        />
                        <div
                          className="eye_container eye_container2 mt-1"
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
                        {passVal && (
                          <p className="text-danger">
                            * Password must contain at least 1 special
                            character, 1 uppercase letter, 1 lowercase letter,
                            and be at least 8 characters long
                          </p>
                        )}
                      </div>
                      <div className="col-12 mt-4 input_icon_container">
                        <div
                          className={
                            !validatePassword(password) ||
                            password !== confirmPassword
                              ? "text-danger input_icons input_icons2"
                              : "input_icons2"
                          }
                        >
                          <FontAwesomeIcon icon={faLock} />
                        </div>
                        <p className=" d-flex justify-content-start profile-card-title">
                          Confirm Password
                        </p>
                        <input
                          type={confirmPassVisible ? "text" : "password"}
                          value={confirmPassword}
                          placeholder="Confirm Password"
                          className="col-12 password-update-input p-2 rounded w-100 text-dark"
                          name="confirmPassword"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div
                          className="eye_container eye_container2 mt-1"
                          onClick={() =>
                            setConfirmPassVisible(!confirmPassVisible)
                          }
                        >
                          {confirmPassVisible ? (
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
                      </div>

                      <div className="mt-4 d-flex justify-content-center">
                        <Button
                          loading={loader}
                          appearance="primary"
                          className="btn py-8 my-3 form-reset"
                          type="submit"
                          disabled={
                            !validatePassword(password) ||
                            password !== confirmPassword
                          }
                        >
                          Submit
                        </Button>
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

export default UpdatePassword;
