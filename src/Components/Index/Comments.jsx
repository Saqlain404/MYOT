import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link, useParams } from "react-router-dom";
import {
  AddCommentForTask,
  TasksCommentDelete,
  TasksCommentList,
} from "../../ApiServices/dashboardHttpService/dashboardHttpServices";
import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Comments = () => {
  const [commentList, setCommentList] = useState([]);
  const [reply, setReply] = useState(false);
  const [replyMsg, setReplyMsg] = useState("");

  const { id } = useParams();
  console.log(id);

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
          position: "bottom",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (replyMsg === "") {
      Swal.fire({
        toast: true,
        icon: "success",
        position: "bottom",
        title: "Please enter reply",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return false;
    }
    let creator_Id = localStorage.getItem("myot_admin_id");
    let { data } = await AddCommentForTask({
      comment: replyMsg,
      templete_Id: id,
      creator_Id,
    });
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
      setReplyMsg("");
      document.getElementById("reset").click();
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
                                  className=""
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
                              className=""
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

export default Comments;
