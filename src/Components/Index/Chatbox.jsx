import React from 'react'
import Sidebar from '../Sidebar';

const Chatbox = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar pe-0">
            <Sidebar />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Chat
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
                    <img
                      src="/images/dashboard/chat-left-dots-fill.png"
                      alt=""
                      className="ms-4"
                    />
                    <img
                      src="/images/dashboard/round-notifications.png"
                      alt=""
                      className="ms-4"
                    />
                  </div>
                </div>
              </nav>
            
            </div>
            
            <div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col-4  ">
    <div className=" bg-white rounded min-vh-100 p-4 mb-4">
        <div className="header-chats">
            <p>Messages</p>
            <img src="/images/chatbox/Add baton.svg" alt="" />
        </div>
        <div className="search-box-chats rounded-2">
        <img src="/images/chatbox/Search.svg" alt="" className='p-2' />
        <form className="" role="search">
                    <input
                      className="chats-searchbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
        </div>
        <div className="chat-sections  mt-4">
            <p>All</p>
            <p className='chat-personal'>Personal</p>
            <p>Group</p>
        </div>
        <div className='people-chat d-flex'>
            <img src="/images/chatbox/Avatar2.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>1 min ago</p>
        </div>
        <div className='people-chat d-flex'>
            <img src="/images/chatbox/Avatar3.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>9 min ago</p>
        </div>
        <div className='people-chat d-flex'>
            <img src="/images/chatbox/avatar4.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>14 min ago</p>
        </div>
        <div className='people-chat d-flex bg-primary-subtle ps-1 pe-1 rounded-2'>
            <img src="/images/chatbox/avatar5.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>17 min ago</p>
        </div>
        <div className='people-chat d-flex '>
            <img src="/images/chatbox/avatar6.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>19 min ago</p>
        </div>
        <div className='people-chat d-flex'>
            <img src="/images/chatbox/avatar7.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>24 min ago</p>
        </div>
       
        <div className='people-chat d-flex'>
            <img src="/images/chatbox/Avatar3.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>33 min ago</p>
        </div>
        
        <div className='people-chat d-flex'>
            <img src="/images/chatbox/avatar8.svg" alt="" className='sender-profile'/>
            <div className='ps-2 pe-3'>
                <h5 className='sender-name'>John Carilo</h5>
                <p className='text-recived'>Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <p className='people-chat-time'>1h ago</p>
        </div>
        </div>
    
    </div>
    <div className="col-8 ">
    <div className=" bg-white rounded min-vh-100 p-4 mb-4 ">

        <div className="main-chat-header">
            <div className='d-flex'>
                <img src="/images/chatbox/avatar8.svg" alt="" className='main-chat-profile'/>
                <div className='ps-2 pe-3 '>
                     <h5 className='sender-name'>John Carilo</h5>
                     <p className='text-recived'>Online</p>
                </div>
                
            </div>
            <img src="/images/chatbox/Vertical-dots.svg" alt="" className='main-chat-settings' />
        </div>

        <div className="text1 p-2">
            <p>Lorem Ipsum is simply </p>
        </div>
        <div className='d-flex justify-content-start'>
        <div className="text2 p-2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <h6 className='chat-time'>09:02 PM</h6>
        </div>
        <img src="/images/chatbox/More-dots.svg" alt="" className='m-3'/>
        </div>

        <div className='d-flex justify-content-start'>
            <img src="/images/chatbox/avatar8.svg" alt="" className='main-chat-profile mt-2' />
        </div>

        <div className='d-flex justify-content-end mb-4'>
        <img src="/images/chatbox/More-dots.svg" alt="" className='m-3'/>
            <img src="/images/chatbox/image2.svg" alt="" />
            <img src="/images/chatbox/image1.svg" alt="" className='ms-3'/>

        </div>

        <div className='d-flex justify-content-start'>
        <div className="text2 p-2">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <h6 className='chat-time'>09:02 PM</h6>
        </div>
        <img src="/images/chatbox/More-dots.svg" alt="" className='m-3'/>
        </div>
        <div className='d-flex justify-content-start'>
            <img src="/images/chatbox/avatar8.svg" alt="" className='main-chat-profile mt-2' />
        </div>

        <div className="message-box-chats rounded-2 mt-4 d-flex justify-content-between pt-2 pb-2">
            <div className='d-flex'>
        <img src="/images/chatbox/paperclip.svg" alt="" className='p-2 border-end' />
        <form className=" p-2" role="search">
                    <input
                      className="chats-searchbar"
                      type="search"
                      placeholder="Type a message..."
                      aria-label="Search"
                    />
                  </form>
                  </div>

                  <div className='d-flex'>
                    <img src="/images/chatbox/Smile.svg" alt="" className='p-2' />
                    <img src="/images/chatbox/send icon.svg" alt=""  className='p-2'/>
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
  )
}

export default Chatbox;