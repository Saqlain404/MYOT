import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { EmplforgotPassword } from '../../ApiServices/EmployeeHttpService/employeeLoginHttpService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EmplAuthforgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await EmplforgotPassword(data);
    if (response?.data.error) {
      navigate("/Employee/Forgot-success", { state: { email: data?.email } });
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
                      Recover
                    </h2>
                    <p className="reset-pass-desc">
                    No worries, we’ll send you reset instructions.
                    </p>
                  </div>
                  <form 
                  onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control form-reset"
                        aria-describedby="emailHelp"
                        placeholder='example@gmail.com' 
                        name="email"
                        id="email"
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
                        <p className="form-error mt-1">
                          {errors.email.message}
                        </p>
                      )}
                      <ToastContainer/>
                    </div>
                    <button
                      className="btn  py-8 mb-3 form-reset"
                      type='submit'
                    >
                      Reset Your Password
                    </button>
                    
                  </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  Import Js Files */}
  {/*  core files */}
  {/* Mirrored from demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/main/authentication-forgot-password.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Oct 2023 06:44:20 GMT */}
</>

)
}

export default EmplAuthforgotPassword;