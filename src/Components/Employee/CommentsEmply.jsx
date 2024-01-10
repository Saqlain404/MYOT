import React, { useEffect, useState } from "react";
import RightSidebar from "../RightSidebar";
import SideBarEmpl from "../Employee/SideBarEmpl" 
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { AddCommentEmply, CommentViewEmply, DeleteCommentEmpl } from "../../ApiServices/EmployeeHttpService/employeeLoginHttpService";

const CommentsEmply = () => {
  const [commentList, setCommentList] = useState([]);
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState("");

  const { id } = useParams();
  console.log(id)
  

  useEffect(() => {
    getCommentLists(); 
  }, []);

  const getCommentLists = async () => {
    try {
      let data = await CommentViewEmply(id);
        setCommentList(data?.commentData?.commentView);
        console.log(data?.commentData?.commentView);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async(comment_id) => {
    const deleteComment = DeleteCommentEmpl(comment_id)
    setTimeout(()=>{
      getCommentLists()
    },200)
   }


  const toggleReply = (index) => {
    setReply((prevState) => ({
      ...prevState, 
      [index]: !prevState[index],
    }));
  };




  const handleSubmitComment = async (e) => {
    e.preventDefault();
    let creator_Id = localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
    let data = await AddCommentEmply({
      comment,
      document_Id:id,
      creator_Id,
    });
    if (!data?.error) {
      setComment("");
      getCommentLists()
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SideBarEmpl/>
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
                    <Link to={"/Employee/Chat"}>
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
                        <Link className="text-danger text-decoration-none" onClick={()=>handleDelete(comments?._id)}>Delete</Link>
                        </div>
                      </div>
                      <p className="comment-txt p-2 mb-0">
                        {comments?.comment}
                      </p>
                      {reply[index] && (
                        <div className="bg-white rounded p-2 my-3 task_reply">
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
                            />
                            <button className="reply-btn">Reply</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ))}

              <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
               
                  <form onSubmit={(e) => handleSubmitComment(e)} className="d-flex justify-content-between">
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
                    <button type="submit" className="reply-btn">Send</button>
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

export default CommentsEmply;