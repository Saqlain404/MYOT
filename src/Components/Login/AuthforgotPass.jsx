import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../ApiServices/adminHttpServices/adminLoginHttpService";

const AuthforgotPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await forgotPassword(data);
    if (!response.data.error) {
      navigate("/Admin/Forgot-success", { state: { email: data.email } });
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
                    Enter OTP Code sent to emaple*******gmail.com
                    </p>
                  </div>
                  <form 
                  onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="row">
                      <div className="col-12 d-flex pe-0 mb-4 mt-4">
                        <div className="col-2">
                          <input type="text" name="" placeholder='5' id="" className='otp-input'/>
                        </div>
                        <div className="col-2">
                          <input type="text" name="" placeholder='' id="" className='otp-input'/>
                        </div>
                        <div className="col-2">
                          <input type="text" name="" placeholder='' id="" className='otp-input'/>
                        </div>
                        <div className="col-2">
                          <input type="text" name="" placeholder='' id="" className='otp-input'/>
                        </div>
                        <div className="col-2">
                          <input type="text" name="" placeholder='' id="" className='otp-input'/>
                        </div>
                        <div className="col-2">
                          <input type="text" name="" placeholder='' id="" className='otp-input'/>
                        </div>
                      </div>
                    </div>
                    <Link to={"/Admin/Forgot-success"}>
                    <button
                      className="btn  py-8 mb-3 form-reset"
                      type='submit'
                    >
                      Reset Your Password
                    </button>
                    </Link>
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

export default AuthforgotPass;
