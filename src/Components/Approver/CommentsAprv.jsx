import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import {
  AddCommentApprv,
  AddReplyCommentApprv,
  CommentViewApprv,
  DeleteCommentAprv,
} from "../../ApiServices/aprroverHttpServices/aprproverHttpService";
import SidebarAprv from "./SidebarAprv";
import { ToastContainer } from "react-toastify";

const CommentsAprv = () => {
  const [commentList, setCommentList] = useState([]);
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState("");
  const [replyMsg, setReplyMsg] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getCommentLists();
  }, []);

  const getCommentLists = async () => {
    try {
      let data = await CommentViewApprv(id);
      setCommentList(data?.commentData);
      console.log(data?.commentData);
    } catch (error) {
      console.log(error);
    }
  };

   const handleDelete = async(comment_id) => {
    const deleteComment = DeleteCommentAprv(comment_id)
    setTimeout(()=>{
      getCommentLists()
    },200)
   }
  
   let creator_Id =
   localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
   const toggleReply = (comment_Id) => {
    setReply((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((key) => {
        newState[key] = false;
      });
      newState[comment_Id] = !prevState[comment_Id];
      return newState;
    });
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    let creator_Id =
      localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
    let data = await AddCommentApprv({
      comment,
      templete_Id: id,
      creator_Id,
    });
    if (!data?.error) {
      setComment("");
      getCommentLists();
    }
  };

  const handleReply = async (e, comment_Id) => {
    e.preventDefault();
    let replyData = await AddReplyCommentApprv({
      text: replyMsg,
      comment_Id,
      creator_Id,
    });
    console.log(replyData);
    setReplyMsg("");
    document.getElementById("reset").click();
    getCommentLists();
    toggleReply(comment_Id)
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarAprv />
          </div>
          <div className="col-7 middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2">
                      Tasks / Comments
                    </a>
                  </li> 
                </ul>
                <div className="col-7 d-flex align-items-center  justify-content-end">
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
              <p className="templates-leave mt-3  d-flex ">Comments</p>
              {commentList &&
                commentList?.map((comments, index) => (
                  <>
                    <div className="bg-white rounded p-2 mb-3">
                      <div className="d-flex  justify-content-between">
                        <div className="d-flex justify-content-between">
                          <img
                            src={comments?.creator_Id?.profile_Pic}
                            alt=""
                            className="m-2 w_20_h_20"
                          />
                          <p className="commenter-name m-auto">
                            {comments?.creator_Id?.name}
                          </p>
                          <p className="comment-time m-auto">
                            {moment(comments?.createdAt).format(
                              "MMM Do YY, h:mm a"
                            )}
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
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
                               <div className="align-items-center me-2">
                               <img
                                  src="/images/dashboard/reply-arrow.svg"
                                  className="me-1"
                                />
                                <Link className="ticket-link mt-3 text-decoration-none">
                                  Reply
                                </Link>
                               </div>
                              </>
                            )}
                          </div>
                          <div
                            onClick={(e) => handleDelete(comments?._id)}
                            className="ms-2"
                          >
                            <img
                              src="/images/icons/delete_icon.png"
                              className="me-1"
                            />
                            <Link className="ticket-link text-decoration-none text-danger">
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
                                      className="w_20_h_20 me-3"
                                      src={reply?.creator_Id?.profile_Pic}
                                      alt=""
                                    />
                                    <p className="commenter-name m-auto">
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
                          <form onSubmit={(e) => handleReply(e, comments?._id)}>
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
                ))}

              <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                  <form
                    onSubmit={(e) => handleSubmitComment(e)}
                    className="d-flex justify-content-between"
                  >
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
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="comment-inbox m-2 p-2"
                    ></textarea>
                    <button type="submit" className="reply-btn">
                      Send
                    </button>
                  </form>
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

export default CommentsAprv;
