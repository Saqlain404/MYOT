import React, { useState } from "react";
import { updateResetPassword } from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatePassEmply = () => {
  const [post, setPost] = useState({
    password: "",
    confirmPassword: "",
    email: "",
  });

  const newEmail = localStorage.getItem("email");

  const navigate = useNavigate();
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // if (!validateForm()) {
    //   return;
    // }

    navigate("/Employee/Forgot-Success");

    // const formData = new FormData();
    // formData.append("password", post.password);
    // formData.append("confirmPassword", post.confirmPassword);
    // const response = await updateResetPassword({formData,email});

    const formData = {
      password: post.password,
      confirmPassword: post.confirmPassword,
      email: newEmail,
    };
    const response = await updateResetPassword(formData);

    if (!response.data?.error) {
      navigate("/Employee/Login");
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
                    {/* <img src="/images/Ellipse-forgot-pass.png" alt="" /> */}
                    <div className="">
                      <h2 className=" mb-3 d-flex justify-content-center recover-text">
                        Update Password
                      </h2>
                    </div>
                    <form onSubmit={onSubmit}>
                      {/* <div className="col-12  border-bottom mb-2 pb-4"> */}
                        <div className="col-12 m-2">
                          <p className=" d-flex justify-content-start profile-card-title">
                            Password
                          </p>
                          <input
                            type="text"
                            value={post.password}
                            placeholder="Password"
                            className="col-12 profile-edit-input p-2"
                            name="password"
                            onChange={handleInput}
                          />
                          {/* {validationErrors.password && <p>{validationErrors.password}</p>} */}
                        </div>
                        <div className="col-12 m-2">
                          <p className=" d-flex justify-content-start profile-card-title">
                            Confirm Password
                          </p>
                          <input
                            type="text"
                            value={post.confirmPassword}
                            placeholder="Confirm Password"
                            className="col-12 profile-edit-input p-2"
                            name="confirmPassword"
                            onChange={handleInput}
                          />
                          {/* {validationErrors.confirmPassword && <p>{validationErrors.confirmPassword}</p>} */}
                        </div>
                      {/* </div> */}

                      <div className=" d-flex justify-content-end">
                        <button
                          className="profile-edit-submit"
                          to=""
                          type="submit"
                        >
                          {/* <ToastContainer/> */}
                          Submit
                        </button>
                      </div>
                      <div className="d-flex justify-content-center">
                        <p className="not-recive-otp me-1">
                          Don’t received OTP code?
                        </p>
                        <p className="resend-otp">Resend Code</p>
                      </div>
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

export default UpdatePassEmply;
