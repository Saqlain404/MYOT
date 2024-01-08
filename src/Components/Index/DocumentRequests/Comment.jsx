import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Sidebar from "../../Sidebar";
import RightSidebar from "../../RightSidebar";
import {
  DocumentComment,
  DocumentCommentLists,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import { toast } from "react-toastify";

const DocComments = () => {
  const [commentList, setCommentList] = useState([]);
  const [reply, setReply] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [replyText, setReplyText] = useState({});
  const [localId, setLocalId] = useState();

  const { id } = useParams();

  useEffect(() => {
    getCommentLists();
  }, []);

  const getCommentLists = async () => {
    try {
      let lid = localStorage.getItem("myot_admin_id");
      setLocalId(lid);
      let { data } = await DocumentCommentLists(id);
      if (!data?.error) {
        setCommentList(data?.results?.commentDetailsList);
        console.log(data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleReply = (index) => {
    setReply((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  //   const handleReplyChange = (e, index) => {
  //     const { value } = e.target;
  //     setReplyText((prevState) => ({
  //       ...prevState,
  //       [index]: value,
  //     }));
  //   };

  const handleSubmit = async () => {
    if (newReply === "") {
      toast.error("Please enter your reply", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
    let formData = {
      creator_Id: localId,
      document_Id: id,
      comment: newReply,
    };
    console.log(formData);
    let { data } = await DocumentComment(formData);
    console.log(data);
    if (!data?.error) {
      toast("Comment added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      document.getElementById("reset").click();
      setNewReply("");
      getCommentLists();
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-7 middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      / Requests / Comments
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
              <p className="templates-leave mt-3  d-flex ">Comments</p>
              {commentList &&
                commentList?.map((comments, index) => (
                  <>
                    <div className="bg-white rounded p-2 mb-3">
                      <div className="d-flex  justify-content-between">
                        <div className="d-flex justify-content-between">
                          <img
                            src={
                              comments?.creator_Id?.profile_Pic
                                ? comments?.creator_Id?.profile_Pic
                                : "/images/dashboard/Avatar.png"
                            }
                            alt=""
                            className="m-2 w_20_h_20"
                          />
                          <p className="commenter-name m-auto">
                            {comments?.creator_Id?.name}
                          </p>
                          <p className="comment-time m-auto">
                            {moment(comments?.createdAt).calendar()}
                            {/* {moment(comments?.createdAt).format(
                              "MMM Do YY, h:mm a"
                            )} */}
                          </p>
                        </div>
                        <div
                          className="cursor_pointer"
                          // onClick={() => setReply(!reply)}
                          onClick={() => toggleReply(index)}
                        >
                          {reply[index] ? (
                            <Link className="ticket-link mt-3 me-1 text-decoration-none">
                              Cancel
                            </Link>
                          ) : (
                            <>
                              <img
                                src="/images/dashboard/reply-arrow.svg"
                                className="m-2"
                              />
                              <Link className="ticket-link mt-3 me-1 text-decoration-none">
                                Reply
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="comment-txt p-2 mb-0">
                        {comments?.comment}
                      </p>
                      {reply[index] && (
                        <div className="bg-white rounded p-2 my-3 task_reply">
                          <form onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-between">
                              <img
                                src="/images/dashboard/Avatar2.png"
                                alt=""
                                className="comment-avatar m-auto mt-2"
                              />
                              <textarea
                                type="text"
                                className="p-2 w-100 mx-2 comment-txt"
                                name="reply"
                                placeholder="Reply..."
                                //   value={replyText[index] || ""}
                                //   onChange={(e) => handleReplyChange(e, index)}
                                defaultValue=""
                                onChange={(e) => setNewReply(e.target.value)}
                              />
                              <button type="submit" className="reply-btn">
                                Reply
                              </button>
                              <button
                                id="reset"
                                type="reset"
                                className="d-none"
                              >
                                reset
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </>
                ))}

              <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                  <div className="d-flex justify-content-between">
                    <img
                      src="/images/dashboard/Avatar2.png"
                      alt=""
                      className="comment-avatar m-auto mt-2"
                    />
                    <textarea
                      name="comment"
                      placeholder="Add a comment…"
                      id=""
                      cols="30"
                      rows="10"
                      className="comment-inbox m-2 p-2"
                    ></textarea>
                    <button className="reply-btn">Send</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer bg-white">
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

export default DocComments;
