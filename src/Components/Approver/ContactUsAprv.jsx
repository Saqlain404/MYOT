
// import React from "react";

import React, { useState } from "react";
import Sidebar from "../Sidebar";

import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";
import { ToastContainer } from "react-toastify";
import { contactUsAprv } from "../../ApiServices/aprroverHttpServices/aprproverHttpService";

const ContactUsAprv = () => {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "", 
  });

  const handleInput = (event) => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name:  contactData.name,
      email:  contactData.email,
      mobileNumber:  contactData.mobileNumber,
      message:  contactData.message,
    };
    // setContactData("")

    setContactData({
      name: '',
      email: '',
      mobileNumber: '',
      message: '',
    });

    const response = await contactUsAprv(data);

    console.log(response);
    
  }
  return (
    <> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Template / Template Version 1.0 / View
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  {/* <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form> */}
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Approver/Chat"}>
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
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12 d-flex">
                  <Link to={"/Approver/Help"} className="text-decoration-none">
                    <p className="th-text me-3">Template Guidelines</p>
                  </Link>
                  <Link
                    to={"/Approver/Help-Support"}
                    className="text-decoration-none"
                  >
                    <p className="th-text me-3">Help & Support</p>
                  </Link>
                  <Link
                    to={"/Approver/Contact-us"}
                    className="text-decoration-none"
                  >
                    <p className="td-text border-bottom">Contact Us</p>
                  </Link>
                </div>
                <div className="col-12 d-flex mb-4 pb-4">
                  <div className="col-6">
                    <p className="help-support-heading">Get in Touch</p>
                    <p className="help-support-text">
                      Have any questions? We’d love to hear from you.
                    </p>
                    <form onSubmit={onSubmit}>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Name*
                        </p>
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          value={contactData.name}
                          name="name"
                          onChange={handleInput}
                          className="col-12 profile-edit-input p-2"
                        />
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Email*
                        </p>
                        <input
                          type="text"
                          value={contactData.email}
                          id="email"
                          placeholder="Email"
                          name="email"
                          onChange={handleInput}
                          className="col-12 profile-edit-input p-2"
                        />
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Phone Number*
                        </p>
                        <input
                          type="text"
                          id="mobileNumber"
                          placeholder="Phone Number"
                          value={contactData.mobileNumber}
                          name="mobileNumber"
                          onChange={handleInput}
                          className="col-12 profile-edit-input p-2"
                        />
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Message
                        </p>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          value={contactData.message}
                          onChange={handleInput}
                          placeholder="Type your message..."
                          className="col-12 profile-edit-input p-2"
                        ></textarea>
                      </div>
                      <button className="contact-form-btn" type="submit">
                        Submit
                      </button>
                      <ToastContainer/>
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

export default ContactUsAprv;
