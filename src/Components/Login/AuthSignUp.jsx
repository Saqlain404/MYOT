import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../ApiServices/adminHttpServices/adminLoginHttpService";
import { toast } from "react-toastify";

const AuthSignUp = () => {
  // const [type, setType] = useState("password");
  // const [password, setPassword] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem("token-admin")) {
  //     navigate("/Admin/Login");
  //   }
  // }, []);

  // const onSubmit = async (data) => {
  //   console.log(data);

  //   const response = await adminLogin(data);
  //   if (!response?.data?.error) {
  //     toast("Logged in successfully", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     navigate("/Admin/Dashboard");
  //   }
  // };

  // const typeChange = () => {
  //   if (type === "password") setType("text");
  //   else {
  //     setType("password");
  //   }
  // };

  // const getPasswordValue = (value) => {
  //   console.log(value);
  //   setPassword(value);
  // };
  return (
    <>
      <div className="container-fluid login-bg">
        <div className="row flex-nowrap">
          <div className="col-4 login-form p-4">
            <div className="form-login mt-1">
              <img src="/images/Myot-logo.png" className="logo" />
              <h2 className="mb-3 fs-7 fw-bolder myot">Myot</h2>
              <p className="login-desc mb-1">
                Please fill your detail to access your account.
              </p>
            </div>
            <form className="form-login" >
            <div className="mb-3">
                <label for="" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name=""
                  aria-describedby=""
                  placeholder="Company name"
                  autoComplete="off"
                 
                />
                
              </div>
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
                 
                />
               
              </div>
              <div className="mb-4">
                <label for="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  autoComplete="off"
                 
                />
                
              </div>
             

              <button className="btn py-8 mb-4 rounded-2" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-8 m-auto ">
            <img
              src="/images/Login.png"
              alt=""
              className=" text-center d-block img-fluid p-inherit"
            />
          </div>
        </div>
      </div>

      {/*  Import Js Files */}
      {/*  core files */}
      {/* Mirrored from demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/main/authentication-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Oct 2023 06:44:20 GMT */}
    </>
  );
};

export default AuthSignUp;
