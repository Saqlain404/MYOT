import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import { ToastContainer, toast } from "react-toastify";
import { EmplforgotPassword, OTPverifyEmply } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import UpdatePassEmply from "./UpdatePassEmply";

const OTPauthEmply = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const location = useLocation();
    const email = location.state?.email;

    const onSubmit = async (data) => {
      try {
        
        const otp = `${data["otp-1"]}${data["otp-2"]}${data["otp-3"]}${data["otp-4"]}`;
    
        const response = await OTPverifyEmply({ email, otp });
        localStorage.setItem("email", email)
        console.log(email)
      
        console.log(data)
        let isMounted = true;
        if (response.data.error) {
          toast.error("Incorrect OTP. Please try again.");
        } else {
          //   toast.success("OTP Verified!");
      
          
          
          setTimeout(()=>{
            if(isMounted){
              navigate("/Employee/reset-update-password");
            }
          },2000)
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        // toast.error("An error occurred while verifying OTP. Please try again.");
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
    <div >
      <div >
        <div className="">
          <div className="">
            <div className="reset-pass-body">             
                <div className="card-forgot">
                  <img src='/images/Ellipse-forgot-pass.png' alt=''/>
                  <div className="">
                    <h2 className=" mb-3 d-flex justify-content-center recover-text">
                    OTP Verification
                    </h2>
                    <p className="reset-pass-desc">
                    Enter OTP Code sent to {email}
                    </p>
                  </div>
                  <form 
                  onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="row">
                      <div className="col-12 inputs d-flex pe-0 mb-4 mt-4">
                        <div className="col-3">
                        <input
                              type="text"
                              name="otp-1"
                              placeholder=""
                              maxLength="1" 
                              pattern="^[0-9\b]+$"
                              id="otp-1"
                              {...register("otp-1", { required: true})}
                              className="otp-input"
                            />
                        </div>
                        <div className="col-3">
                            <input
                              type="text"
                              name="otp-2"
                              placeholder=""
                              pattern="^[0-9\b]+$"
                              id="otp-2"
                              maxLength="1"
                              {...register("otp-2", { required: true})}
                              className="otp-input"
                              
                            />
                        </div>
                        <div className="col-3">
                        <input
                              type="text"
                              name="otp-3"
                              placeholder=""
                              maxLength="1"
                              pattern="^[0-9\b]+$"
                              id="otp-3"
                              {...register("otp-3", { required: true })}
                              className="otp-input"
                            />
                        </div>
                        <div className="col-3">
                        <input
                              type="text"
                              name="otp-4"
                              placeholder=""
                              pattern="^[0-9\b]+$"
                              maxLength="1"
                              id="otp-4"
                              {...register("otp-4", { required: true })}
                              className="otp-input"
                            />
                        </div>
                      </div>
                      <ToastContainer/>
                    </div>
                    {/* <Link to={"/Employee/OTP-verification"}> */}
                    <button
                      className="btn  py-8 mb-3 form-reset"
                      type='submit'
                    >
                      Reset Your Password
                    </button>
                    {/* </Link> */}
                    <div className='d-flex justify-content-center mt-2'>
                    <p className="not-recive-otp me-1">
                    Don’t received OTP code?
                    </p>
                    <p className="resend-otp">
                     Resend Code
                    </p>
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

export default OTPauthEmply;