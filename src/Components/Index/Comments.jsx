import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useParams } from "react-router-dom";
import {
  AddCommentForTask,
  TasksCommentDelete,
  TasksCommentList,
  TemplateReply,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectUserData } from "../app/slice/userSlice";

const Comments = () => {
  const [commentList, setCommentList] = useState([]);
  const [reply, setReply] = useState(false);
  const [replyMsg, setReplyMsg] = useState("");
  const [comment, setComment] = useState("");
  const userData = useSelector(selectUserData);

  const { id } = useParams();

  useEffect(() => {
    getCommentLists();
  }, []);

  const getCommentLists = async () => {
    try {
      let { data } = await TasksCommentList(id);
      if (!data?.error) {
        setCommentList(data?.results?.commentDetails);
        console.log(data?.results?.commentDetails);
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

  const handleDeleteComment = async (e, id) => {
    e.preventDefault();
    try {
      let { data } = await TasksCommentDelete(id);
      if (data && !data.error) {
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

  const addComment = async (e) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("myot_admin_id");
    let { data } = await AddCommentForTask({
      comment,
      templete_Id: id,
      creator_Id,
    });
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
      getCommentLists();
      setComment("");
    }
  };

  const handleSubmit = async (e, comment_Id) => {
    e.preventDefault();
    if (replyMsg === "") {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "top-end",
        title: "Please enter reply",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    let creator_Id = localStorage.getItem("myot_admin_id");
    let { data } = await TemplateReply({
      text: replyMsg,
      comment_Id,
      creator_Id,
    });
    console.log(data);
    if (data && !data?.error) {
      toast("Reply added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setReplyMsg("");
      setReply(false);
      // document.getElementById("reset").click();
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
                      Tasks / Comments
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
                          <p className="commenter-name m-auto">
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
                                    <p className="commenter-name my-auto">
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
                    <button onClick={addComment} className="reply-btn">
                      Send
                    </button>
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

export default Comments;
