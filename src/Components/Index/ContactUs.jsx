import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { EmployeeContactUs } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";
import { Button } from "rsuite";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (datas) => {
    setLoader(true);
    let formData = {
      name: datas?.name,
      email: datas?.email,
      message: datas?.message,
      mobileNumber: datas?.phoneNumber,
    };

    let { data } = await EmployeeContactUs(formData);
    if (!data?.error) {
      setLoader(false);
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Your query is submitted, we will respond you soon",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("resetForm").click();
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link fw-bold"> Help / Contact Us</a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
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
                    <Link to={"/Admin/Chat"}>
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

            <div className="container px-4 text-center min-vh-100">
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12 d-flex">
                  <Link to={"/Admin/Help"} className="text-decoration-none">
                    <p className="th-text me-3">Template Guidelines</p>
                  </Link>
                  <Link
                    to={"/Admin/Help/Help-Support"}
                    className="text-decoration-none"
                  >
                    <p className="th-text me-3">Help & Support</p>
                  </Link>
                  <Link
                    to={"/Admin/Help/Contact-us"}
                    className="text-decoration-none"
                  >
                    <p className="td-text border-bottom">Contact Us</p>
                  </Link>
                </div>
                <div className="col-12 d-flex mb-4 pb-4">
                  <div className="col-6">
                    <p className="help-support-heading mt-2">Get in Touch</p>
                    <p className="help-support-text">
                      Have any questions? We’d love to hear from you.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Name*
                        </p>
                        <input
                          type="text"
                          placeholder="Name"
                          className={classNames(
                            "form-control col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.name,
                            }
                          )}
                          {...register("name", {
                            required: "* Name is required",
                            pattern: {
                              value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                              message:
                                "Spaces at the start & numbers are not allowed",
                            },
                          })}
                        />
                        {errors.name && (
                          <div className="invalid-feedback text-start">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Email*
                        </p>
                        <input
                          type="email"
                          placeholder="Email"
                          className={classNames(
                            "form-control col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.email,
                            }
                          )}
                          {...register("email", {
                            required: "* Email is required",
                            pattern: {
                              value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                              message:
                                "Spaces at the start & numbers are not allowed",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback text-start">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Phone Number*
                        </p>
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className={classNames(
                            "form-control col-12 profile-edit-input p-2",
                            {
                              "is-invalid": errors.phoneNumber,
                            }
                          )}
                          {...register("phoneNumber", {
                            required: "* Phone Number is required",
                          })}
                        />
                        {errors.phoneNumber && (
                          <div className="invalid-feedback text-start">
                            {errors.phoneNumber.message}
                          </div>
                        )}
                      </div>
                      <div className="col mb-3">
                        <p className="d-flex justify-content-start profile-card-title">
                          Message *
                        </p>
                        <textarea
                          {...register("message", {
                            required: "* Message is required",
                            pattern: {
                              value: /^(?!\s)[^\d]*(?:\s[^\d]+)*$/,
                              message:
                                "Spaces at the start & numbers are not allowed",
                            },
                          })}
                          name="message"
                          id="message"
                          placeholder="Type your message..."
                          className={classNames(
                            "form-control col-12 profile-edit-input p-2 text-area",
                            {
                              "is-invalid": errors.message,
                            }
                          )}
                        ></textarea>
                        {errors.message && (
                          <div className="invalid-feedback text-start">
                            {errors.message.message}
                          </div>
                        )}
                      </div>

                      <Button
                        loading={loader}
                        appearance="primary"
                        className="btn mb-3 text-nowrap me-2 rounded-2"
                        type="submit"
                        disabled={!isValid}
                      >
                        Submit
                      </Button>
                      <button type="reset" id="resetForm" className="d-none">
                        reset
                      </button>
                    </form>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/dashboard/contact-us.svg"
                      alt=""
                      className="contact-img"
                    />
                    <div className="d-flex justify-content-around mt-4">
                      <div className="d-flex">
                        <img
                          src="/images/dashboard/phone-contact.svg"
                          alt=""
                          className="contact-mini-logo m-2"
                        />
                        <div>
                          <p className="contact-txt mb-0">PHONE</p>
                          <p className="contact-txt1">03 5432 1234</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <img
                          src="/images/dashboard/email-contact.svg"
                          alt=""
                          className="contact-mini-logo m-2"
                        />
                        <div>
                          <p className="contact-txt mb-0">EMAIL</p>
                          <p className="contact-txt1">info@marcc.com.au</p>
                        </div>
                      </div>
                    </div>
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

export default ContactUs;
