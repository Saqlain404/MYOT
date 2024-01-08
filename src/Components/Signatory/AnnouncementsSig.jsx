import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link } from "react-router-dom";
import SidebarSig from "./SidebarSig";
import {
  AnnouncementLists,
  CreateAnnouncement,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { toast } from "react-toastify";

const AnnouncementsSig = () => {
  const [documents, setDocuments] = useState([]);
  const [announcementType, setAnnouncementType] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = async () => {
    let id = localStorage.getItem("myot_admin_id");
    let { data } = await AnnouncementLists(id);
    console.log(data);
    if (!data?.error) {
      setDocuments(data?.results?.announcementList);
    }
  };

  const handleImgChange = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = localStorage.getItem("myot_admin_id");
    let formData = new FormData();
    formData.append("categoryName", announcementType);
    formData.append("document", files?.doc_img);
    formData.append("text", description);
    formData.append("creator_Id", id);

    try {
      let { data } = await CreateAnnouncement(formData);
      console.log(data);
      if (data && !data?.error) {
        toast("New Announcement Created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setAnnouncementType("");
        setDescription("");
        setFiles([]);
        document.getElementById("resetForm").click();
        document.getElementById("modalClose").click();
        getAnnouncements();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarSig />
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
                    <Link to={"/Signatory/Chat"}>
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
                  <form onSubmit={handleSubmit}>
                    <div class="d-flex modal-header border-bottom">
                      <p class="mb-0" id="exampleModalLabel">
                        Create New Announcement
                      </p>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id="modalClose"
                      ></button>
                    </div>

                    <div className="row p-3">
                      <div className="col-12 mb-3 d-flex">
                        <div className="col-6 pe-3">
                          <label htmlFor="announcementType" className="mb-3">
                            Announcement Category
                          </label>
                          <input
                            type="text"
                            placeholder="Announcement Category"
                            className="col-12 modal-input td-text  p-2"
                            name="announcementType"
                            id="announcementType"
                            value={announcementType}
                            onChange={(e) =>
                              setAnnouncementType(e.target.value)
                            }
                          />
                        </div>
                        <div className="col-6 mb-3 ">
                          <label htmlFor="doc_file" className="mb-3">
                            Document Upload
                          </label>
                          <input
                            type="file"
                            placeholder="File Format: JPG, JPEG, PNG or PDF Size: Upto 500KB"
                            className="col-12 modal-input td-text p-2 display-none"
                            name="doc_file"
                            id="doc_file"
                            onChange={(e) => handleImgChange(e, "doc_img")}
                            accept=".png, .jpg, .jpeg, .pdf"
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-3 ">
                        <label htmlFor="description" className="mb-3">
                          Description
                        </label>
                        <textarea
                          type="text"
                          placeholder=""
                          className="col-12 modal-input td-text p-2"
                          name="description"
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          style={{ minHeight: "150px" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3 me-3">
                      <button type="submit" class="user-modal-btn">
                        Send
                      </button>
                      <button type="reset" id="resetForm" className="d-none">
                        reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Modal End--> */}

            <div className="container rounded mb-3">
              {documents &&
                documents?.map((document) => (
                  <>
                    <div className="row my-4 bg-body-tertiary">
                      <p className="templates-leave mt-3 ms-2 mb-0 ">
                        {`Announcement > ${document?.categoryName}`}
                      </p>
                      <div className="col-12">
                        <div className="col rounded bg-white d-flex m-3 p-2 algin-items-center justify-content-between">
                          <div className="ps-2 pe-3">
                            <div className="d-flex">
                              <img
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                }}
                                src={
                                  document?.document
                                    ? document?.document
                                    : "/images/dashboard/user (2) 1.svg"
                                }
                                alt=""
                                className="me-2"
                              />
                              <p className="anouncement-text">
                                {document?.text}
                              </p>
                            </div>
                            <div className="d-flex ms-4 mt-1">
                              <img
                                src="/images/dashboard/bookmark 1.svg"
                                alt=""
                                className="m-1 "
                              />
                              <p className="new-feedback">New feedback added</p>
                            </div>
                          </div>
                          <p className="announcement-time">
                            {moment(document?.createdAt).calendar()}
                          </p>
                        </div>
                        {/* <div className="col rounded bg-white d-flex m-3 p-2">
                        <div className="ps-2 pe-3">
                          <div className="d-flex">
                            <img
                              src="/images/dashboard/user (2) 1.svg"
                              alt=""
                              className="me-2"
                            />
                            <p className="anouncement-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                          <div className="d-flex ms-4 mt-1">
                            <img
                              src="/images/dashboard/bookmark 1.svg"
                              alt=""
                              className="m-1 "
                            />
                            <p className="new-feedback">New feedback added</p>
                          </div>
                        </div>
                        <p className="announcement-time">
                          Yesterday at 4:17 Pm
                        </p>
                      </div> */}
                      </div>
                    </div>
                  </>
                ))}
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

export default AnnouncementsSig;
