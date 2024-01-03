import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import { EmployeeContactUs } from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";

const ContactUsSig = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileNumber, setNumber] = useState("");
  // const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const containsOnlySpaces = (str) => {
      return str.trim().length === 0;
    };
    if (
      containsOnlySpaces(name) ||
      containsOnlySpaces(email) ||
      containsOnlySpaces(message) ||
      containsOnlySpaces(mobileNumber)
    ) {
      toast.error("Please fill out all the fields.");
      return false;
    }
    let { data } = await EmployeeContactUs({
      name,
      email,
      message,
      mobileNumber,
    });
    if (!data?.error) {
      setName("");
      setEmail("");
      setMessage("");
      setNumber("");
      toast.success("Your query is submitted");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Help / Contact Us
                    </a>
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

            <div className="container px-4 text-center min-vh-100 ">
              <div className="row bg-white rounded  p-4 m-4">
                <div className="col-12 d-flex">
                  <Link to={"/Signatory/Help"} className="text-decoration-none">
                    <p className="th-text me-3">Template Guidelines</p>
                  </Link>
                  <Link
                    to={"/Signatory/Help/Help-Support"}
                    className="text-decoration-none"
                  >
                    <p className="th-text me-3">Help & Support</p>
                  </Link>
                  <Link
                    to={"/Signatory/Help/Contact-us"}
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
                    <form id="contactForm" onSubmit={handleSubmit}>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Name*
                        </p>
                        <input
                          type="text"
                          placeholder="Name"
                          className="col-12 profile-edit-input p-2"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Email*
                        </p>
                        <input
                          type="email"
                          placeholder="Email"
                          className="col-12 profile-edit-input p-2"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Phone Number*
                        </p>
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="col-12 profile-edit-input p-2"
                          value={mobileNumber}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div className="col mb-3">
                        <p className=" d-flex justify-content-start profile-card-title">
                          Message
                        </p>
                        <textarea
                          name="message"
                          placeholder="Type your message..."
                          className="col-12 profile-edit-input p-2 textarea_h_100px"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <button className="contact-form-btn w-100" type="submit">
                        Submit
                      </button>
                      <button className="d-none" id="reset" type="reset">
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

export default ContactUsSig;
