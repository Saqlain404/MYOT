import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Sidebar from "../../Sidebar";
import RightSidebar from "../../RightSidebar";
import {
  DocumentComment,
  DocumentCommentLists,
  DocumentCommentReply,
  RequestCommentDelete,
} from "../../../ApiServices/dashboardHttpService/dashboardHttpServices";
import Swal from "sweetalert2";
import { selectUserData } from "../../app/slice/userSlice";
import { useSelector } from "react-redux";

const DocComments = () => {
  const [commentList, setCommentList] = useState([]);
  const [reply, setReply] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [comment, setComment] = useState("");
  const [replyMsg, setReplyMsg] = useState("");
  const [localId, setLocalId] = useState();
  const userData = useSelector(selectUserData);

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

  const handleDeleteComment = async (e, id) => {
    e.preventDefault();
    try {
      let { data } = await RequestCommentDelete(id);
      if (!data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Comment deleted successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        getCommentLists();
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

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    if (replyMsg === "") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Please enter a reply",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    let formData = {
      creator_Id: localId,
      comment_Id: id,
      text: replyMsg,
    };
    console.log(formData);
    let { data } = await DocumentCommentReply(formData);
    console.log(data);
    if (!data?.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "New comment added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      document.getElementById("reset").click();
      setNewReply("");
      setReply(false);
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
                    <a className="nav-link fw-bold"> Requests / Comments</a>
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
              {commentList && commentList?.length > 0 ? (
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
                          <p className="commenter-name m-auto text-capitalize">
                            {comments?.creator_Id?.name}
                          </p>
                          <p className="comment-time m-auto">
                            {moment(comments?.createdAt).calendar()}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          <div
                            className="cursor_pointer d-flex align-items-center"
                            onClick={() => toggleReply(index)}
                          >
                            {reply[index] ? (
                              <Link className="ticket-link me-1 text-decoration-none">
                                Cancel
                              </Link>
                            ) : (
                              <>
                                <img
                                  src="/images/dashboard/reply-arrow.svg"
                                  className="me-1"
                                />
                                <Link className="ticket-link me-1 text-decoration-none">
                                  Reply
                                </Link>
                              </>
                            )}
                          </div>
                          <div
                            onClick={(e) =>
                              handleDeleteComment(e, comments?._id)
                            }
                            className="ms-2"
                          >
                            <img
                              src="/images/icons/delete_icon.png"
                              className="me-1"
                            />
                            <Link className="ticket-link me-1 text-decoration-none text-danger">
                              Delete
                            </Link>
                          </div>
                        </div>
                      </div>
                      <p className="comment-txt p-2 mb-0">
                        {comments?.comment}
                      </p>

                      {comments?.replyText && (
                        <div
                          style={{ borderLeft: "2px solid #f8f9fa" }}
                          className="text-start ms-5"
                        >
                          {comments?.replyText.map((reply) => (
                            <div className="bg-white p-2 mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <div className="d-flex align-items-center">
                                    <img
                                      className="w_20_h_20 me-1"
                                      src={reply?.creator_Id?.profile_Pic}
                                      alt=""
                                    />
                                    <p className="commenter-name my-auto text-capitalize">
                                      {reply?.creator_Id?.name}
                                    </p>
                                    {/* <p className="comment-time m-auto">
                                      {moment(reply?.createdAt).calendar()}
                                    </p> */}
                                  </div>
                                  <p className="comment-txt p-2 mb-0">
                                    {reply?.text}
                                  </p>
                                </div>
                                <div></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {reply[index] && (
                        <div className="bg-white rounded p-2 my-3 task_reply">
                          <form
                            onSubmit={(e) => handleSubmit(e, comments?._id)}
                          >
                            <div className="d-flex justify-content-between">
                              <img
                                src={userData?.profile_Pic}
                                alt=""
                                className="comment-avatar m-auto mt-2 w_20_h_20"
                              />
                              <textarea
                                type="text"
                                className="p-2 w-100 mx-2 comment-txt"
                                name="reply"
                                placeholder="Reply..."
                                defaultValue=""
                                onChange={(e) => setReplyMsg(e.target.value)}
                              />
                              <button type="submit" className="reply-btn">
                                Reply
                              </button>
                              <button
                                type="reset"
                                id="reset"
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
                ))
              ) : (
                <>
                  <h3 className="bg-white rounded p-2 py-4 mb-3">
                    No Comments Found
                  </h3>
                </>
              )}

              <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                  <div className="d-flex justify-content-between">
                    <img
                      src={userData?.profile_Pic}
                      alt=""
                      className="comment-avatar m-auto mt-2 w_50_h_50"
                    />
                    <textarea
                      name="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment…"
                      id=""
                      className="comment-inbox m-2 p-2"
                    ></textarea>
                    {/* <button onClick={addComment} className="reply-btn">
                      Send
                    </button> */}
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
