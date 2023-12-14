import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import SideBarEmpl from "./SideBarEmpl";
import { updateProfile } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";
import { useForm } from "react-hook-form";

const EmplEditProfile = () => {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token-company")) {
      navigate("/Employee/edit-profile");
    }
  }, []);

  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Update the form value using setValue from react-hook-form
    setValue("profile_Pic", file.name);
    console.log(file.name)
  };



  const onSubmit = async (data) => {
    console.log(data);

    const response = await updateProfile(data);

    if (!response.data?.error) {
      navigate("/Employee/Dashboard");
      console.log(response);
    }
  };

  const typeChange = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl />
          </div>
          <div className="col-7 middle-content p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      My Profile / Edit
                    </a>
                  </li>
                </ul>
                <div className="col-7 d-flex align-items-center  justify-content-end">
                  <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Employee/Chat"}>
                      <img
                        src="/images/dashboard/chat-left-dots-fill.png"
                        alt=""
                        className="ms-4"
                      />
                    </Link>
                    <img
                      src="/images/dashboard/round-notifications.png"
                      alt=""
                      className="ms-4"
                    />
                  </div>
                </div>
              </nav>
            </div>

            <div className="container px-4 text-center min-vh-100 ">
              <div className="row rounded">
                <div className=" d-flex justify-content-between">
                  <p className="profile-txt m-2">Your Profile Picture</p>
                </div>

                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                  <div className=" d-flex justify-content-start mb-4">
                    <img
                      src="/images/tasks/modal-profile-photo.svg"
                      alt=""
                      className=""
                    />

                    <input
                      type="file"   
                      {...register("profile_Pic", {
                        required: "This field is required",
                      })}
                      name="profile_Pic"
                      id="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-between mb-2">
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Full Name
                      </p>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="col-12 profile-edit-input p-2"
                        {...register("name", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Email
                      </p>
                      <input
                        type="text"
                        placeholder="Email"
                        className="col-12 profile-edit-input p-2"
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-between mb-2">
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Phone Number
                      </p>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="col-12 profile-edit-input p-2"
                        {...register("mobileNumber", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    {/* <div className="col-6 m-2">
    <p className=" d-flex justify-content-start profile-card-title">Date of Birth</p>
    <input type="text" placeholder="Date of Birth" className="col-12 profile-edit-input p-2"
    {...register("dateOfBirth", {
      required: "This field is required",

    })}
    />
      </div> */}
                  </div>
                  <div className="col-12 d-flex justify-content-between border-bottom mb-2 pb-4">
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Password
                      </p>
                      <input
                        type="text"
                        placeholder="Password"
                        className="col-12 profile-edit-input p-2"
                        {...register("password", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="col-6 m-2">
                      <p className=" d-flex justify-content-start profile-card-title">
                        Confirm Password
                      </p>
                      <input
                        type="text"
                        placeholder="Confirm Password"
                        className="col-12 profile-edit-input p-2"
                        {...register("confirmPassword", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                  </div>

                  <div className=" d-flex justify-content-end">
                    <button className="profile-edit-submit" to="" type="submit">
                      Submit{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmplEditProfile;
