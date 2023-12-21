import React from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarAprv from "./SidebarAprv";

const AnnouncementsAprv = () => {
  const documents = [
    {
      id: 1,
      document: "Employment Contract",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 2,
      document: "Tax Deduction at Source (TDS)",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-warning m-0"> Approved</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 3,
      document: "Training Certificates",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-success m-0">Complete</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 4,
      document: "Software Licenses",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-primary m-0">In Progress</p>,
      department: "Information Technologies",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },
    {
      id: 5,
      document: "Reference Letter",
      requester: [<img src="/images/dashboard/Avatar.png" className="me-2" />],
      assignedTo: <img src="/images/dashboard/Avatar2.png" className="me-2" />,
      lastLoggedIn: "26 Oct, 2023 18:02:55",
      status: <p className="text-info m-0">Pending</p>,
      department: "Human Resources",
      comment: (
        <img src="/images/dashboard/Comment.png" className="mx-auto d-block" />
      ),
      actions: (
        <img src="/images/sidebar/ThreeDots.svg" className="w-auto p-3" />
      ),
    },

    // Add more tasks here
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
          </div>
          <div className="col-7 middle-content">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link th-text ms-2" href="app-email.html">
                      Announcements / Report Management
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
            <div className="d-flex justify-content-between">
            <p className="table-name mb-2">Broadcast Announcement</p>
              <div className="d-flex justify-content-center th-text">
                <div
                  className="d-flex whitespace-nowrap"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="/images/tasks/Add.svg" alt="" className="pb-3" />
                  <p className="pt-1 text-nowrap">Add Announcement</p>
                </div>
                <img
                  src="/images/sidebar/ThreeDots.svg"
                  alt=""
                  className="pb-3 ms-2 text-secondary"
                />
              </div>
            </div>
                 {/* <!-- Modal --> */}
                 <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-department">
                <div class="modal-content border-0">
                  <div class="d-flex modal-header border-bottom">
                    <p class="" id="exampleModalLabel">
                    Create New Announcement
                    </p>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <form action="" 
                  // onSubmit={handleSubmit}
                  >
                    <div className="row p-3">
                      <div className="col-12 mb-3 d-flex">
                        <div className="col-6 pe-3">
                        <input
                          type="text"
                          placeholder="Announcement Category"
                          className="col-12 modal-input td-text  p-2"
                          name="departmentname"
                          // value={departmentInfo.departmentname}
                          // onChange={handleChange}
                        />
                      </div>
                      <div className="col-6 ps-3">
                        <input
                          type=""
                          placeholder="Date & Time"
                          className="col-12 modal-input td-text  p-2"
                          name="departmentname"
                          // value={departmentInfo.departmentname}
                          // onChange={handleChange}
                        />
                      </div>
                      </div>
                      <p className="d-flex" id="exampleModalLabel">
                      Document Upload
                    </p>
                      <div className="col-12 mb-3 ">
                        <input
                          type="file"
                          placeholder="File Format: JPG, JPEG, PNG or PDF Size: Upto 500KB"
                          className="col-12 modal-input td-text p-2 display-none"
                          name="description"
                          // value={departmentInfo.description}
                          // onChange={handleChange}
                        ></input>
                        {/* <input type="text" placeholder="Phone Number" className="col-6 modal-input th-text p-2"/> */}
                      </div>
                      <p className="d-flex" id="exampleModalLabel">
                    Enter text here
                    </p>
                      <div className="col-12 mb-3 ">
                        <textarea
                          type="text"
                          placeholder=""
                          className="col-12 modal-input td-text p-2"
                          name="description"
                          // value={departmentInfo.description}
                          // onChange={handleChange}
                        ></textarea>
                        {/* <input type="text" placeholder="Phone Number" className="col-6 modal-input th-text p-2"/> */}
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                      <button
                        type="submit"
                        class="user-modal-btn"
                        // onClick={AddDepartment}
                      >
                        Send
                      </button>
                      <button type="button" class="user-modal-btn2">
                        Cancle
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}

            <div className="container bg-body-tertiary rounded mb-3">
              <div className="row">
                <p className="templates-leave mt-3 ms-2 mb-0 ">
                  Templates {">"} leave
                </p>
                <div className="col-12">
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                </div>
                
              </div>
            </div>

            <div className="container bg-body-tertiary rounded mb-4">
              <div className="row">
                <p className="templates-leave mt-3 ms-2 mb-0 ">
                  Templates {">"} leave
                </p>
                <div className="col-12">
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                <div className="col rounded bg-white d-flex m-3 p-2">
                  <div className="ps-2 pe-3">
                    <div className="d-flex">
                      <img
                        src="/images/dashboard/user (2) 1.svg"
                        alt=""
                        className="me-2"
                      />
                      <p className="anouncement-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="d-flex ms-4 mt-1">
                      <img src="/images/dashboard/bookmark 1.svg" alt="" className="m-1 "/>
                      <p className="new-feedback">
                      New feedback added
                      </p>
                    </div>
                  </div>
                  <p className="announcement-time">Yesterday at 4:17 Pm</p>
                </div>
                </div>
                
              </div>
            </div>

            <div className="footer">
              <div>© 2023 MYOT</div>
              <div className="d-flex ">
                <p className="ms-3">About</p>
                <p className="ms-3">Support</p>
                <p className="ms-3">Contact Us</p>
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

export default AnnouncementsAprv;
