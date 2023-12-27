import React from "react";
import RightSidebar from "../RightSidebar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import { useState } from "react";
import { CommentsList } from "../../ApiServices/departmentHttpService/departmentHttpService";
import { useEffect } from "react";

const CommentsDept = () => {
 
  const [commentList, setCommentList] = useState([]);

  const getCommentList = async () => {
    const {data} = await CommentsList();
    if (!data?.error) {
      setCommentList(data?.results?.commentDetailsList);
    }
  };

  console.log(commentList);

  useEffect(() => {
    getCommentList()
  }, [])
  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar">
            <SidebarDepartment/>
          </div>
          <div className="col-7 middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      Templates /
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
            {commentList?.map((comments, index) => (
            <div className="container px-4 text-center min-vh-100 ">
            <p className="templates-leave mt-3  d-flex ">
                  Comments
                </p>

                  <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                    <div className="d-flex justify-content-between">
                      <img src={comments?.creator_Id?.profile_Pic} alt="" className="m-2 table-profile-pic"/>
                      <p className="commenter-name m-auto">{comments?.creator_Id?.name}</p>
                      <p className="comment-time m-auto">{comments?.createdAt}</p>
                    </div>
                    <div>
                    <img src="/images/dashboard/reply-arrow.svg" alt="" className="m-2"/>
                    <a href="/" className="ticket-link mt-3 me-1 text-decoration-none">Reply</a>
                    </div>
                   
                  </div>
                  <p className="comment-txt p-2 mb-0">{comments?.comment}</p>
                  </div>
                  

                  <div className="border-start ps-4">
                  <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                    <div className="d-flex justify-content-between">
                      <img src="/images/dashboard/Avatar.png" alt="" className="m-2"/>
                      <p className="commenter-name m-auto">amyrobson</p>
                      <p className="comment-time m-auto">1 month ago</p>
                    </div>
                    <div>
                    <img src="/images/dashboard/reply-arrow.svg" alt="" className="m-2"/>
                    <a href="/" className="ticket-link mt-3 me-1 text-decoration-none">Reply</a>
                    </div>
                   
                  </div>
                  <p className="comment-txt p-2 mb-0">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
                  </div>
                  <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                    <div className="d-flex justify-content-between">
                      <img src="/images/dashboard/Avatar2.png" alt="" className="comment-avatar m-auto mt-2"/>
                      <p className="comment-reply p-2">Impressive! Though it seems the drag feature could be improved. But overall it looks really well.</p>
                     <button className="reply-btn">Reply</button>
                    </div>
                    
                   
                  </div>
                  
                  </div>

                  <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                    <div className="d-flex justify-content-between">
                      <img src="/images/dashboard/Avatar.png" alt="" className="m-2"/>
                      <div className="d-flex">
                      <p className="commenter-name m-auto">amyrobson</p>
                      <button className="you-btn ms-1">You</button>
                      </div>
                      <p className="comment-time m-auto">2 days ago</p>
                    </div>
                    <div className="d-flex">
                      <div>
                    <img src="/images/dashboard/Trash.svg" alt="" className="m-2"/>
                    <a href="/" className="delete-comment-btn mt-3 me-1 text-decoration-none">Delete</a>
                    </div>
                    <div>
                    <img src="/images/dashboard/PencilLine.svg" alt="" className="m-2"/>
                    <a href="/" className="ticket-link mt-3 me-1 text-decoration-none">Edit</a>
                    </div>
                    </div>
                    
                   
                  </div>
                  <p className="comment-write p-2 m-2">Impressive! Though it seems the drag feature could be improved.</p>
                  <div className="d-flex justify-content-end m-2">
                  <button className="update-comment-btn">Update</button>
                  </div>
                  </div>
                  </div>

                  <div className="bg-white rounded p-2 mb-3">
                <div className="d-flex  justify-content-between">
                    <div className="d-flex justify-content-between">
                      <img src="/images/dashboard/Avatar2.png" alt="" className="comment-avatar m-auto mt-2"/>
                     <textarea name="comment" placeholder="Add a comment…" id="" cols="30" rows="10" className="comment-inbox m-2 p-2"></textarea>
                     <button className="reply-btn">Send</button>
                    </div>
                    
                   
                  </div>
                  
                  </div>
                  

  
</div>
))}

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

export default CommentsDept;
