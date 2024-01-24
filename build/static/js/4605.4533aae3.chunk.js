"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[4605],{1967:(e,s,a)=>{a.d(s,{Z:()=>m});var i=a(2791),n=a(7689),l=a(1087),t=a(9434),r=a(4581),c=a(1830),d=a.n(c),o=a(184);const m=()=>{var e,s,a;const[c,m]=(0,i.useState)(),[x,h]=(0,i.useState)([]),g=(0,t.v9)(r.tT),v=(0,n.TH)(),j=(0,n.s0)();(0,i.useEffect)((()=>{const e=v.pathname.split("/");m(e[1])}),[v]),(0,i.useEffect)((()=>{let e=v.pathname.startsWith("/Admin"),s=v.pathname.startsWith("/Signatory"),a=v.pathname.startsWith("/Employee"),i=v.pathname.startsWith("/Approver"),n=v.pathname.startsWith("/Department"),l=localStorage.getItem("token-company"),t=null===g||void 0===g?void 0:g.employRole;null!==t&&void 0!==t&&t.includes("Admin")||!e||l||(d().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Signatory")||!s||l||(d().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Department Manager")||!n||l||(d().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Approver")||!i||l||(d().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Employee")||!a||l||(d().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login"))}),[v]),(0,i.useEffect)((()=>{p()}),[]);const p=async()=>{const e=null===g||void 0===g?void 0:g.employRole.flat(1/0);h(e)},u=["Admin","Department Manager","Signatory","Employee","Approver"];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("a",{className:"text-decoration-none pb-2 bg-white w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,o.jsxs)("div",{className:"profile",children:[(0,o.jsx)("div",{children:null!==g&&void 0!==g&&g.profile_Pic?(0,o.jsx)("img",{className:"w_50_h_50",src:null===g||void 0===g?void 0:g.profile_Pic,alt:"Profile"}):(0,o.jsx)("img",{className:"w_50_h_50",src:"/images/icons/user.jpg",alt:"Profile"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"text-dark text-capitalize",children:(null===g||void 0===g||null===(e=g.name)||void 0===e||null===(s=e.split(" "))||void 0===s||null===(a=s.slice(0,2))||void 0===a?void 0:a.join(" "))||(null===g||void 0===g?void 0:g.companyName)}),(0,o.jsx)("p",{className:"th-text",children:c&&"Department"===c?"Department Manager":c})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/images/sidebar/ArrowLineDown2.svg",alt:"hh"})})]})}),(0,o.jsx)("ul",{className:"dropdown-menu",children:null===u||void 0===u?void 0:u.map((e=>{if(null!==x&&void 0!==x&&x.includes(e)){const s="Department Manager"===e?"Department":e;return(0,o.jsx)(l.rU,{to:"/".concat(s,"/Home"),className:"text-decoration-none",children:(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"dropdown-item",children:e})})},e)}return null}))})]})}},9040:(e,s,a)=>{a.d(s,{Z:()=>n});a(2791);var i=a(184);const n=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container right-sidebar",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start ",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Notifications"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 ",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"New user registered"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"New user recentlu added by a.."})]})})]}),(0,i.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start  mt-4",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Activities"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 mt-4",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Edited the details of Project X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar2.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Changed the status of Project X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar3.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Submitted a bug"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Modified A data in Page X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar4.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Deleted a page in Project X"})]})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start mt-4",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Calendar"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 mt-4",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 09.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex",children:(0,i.jsx)("div",{className:"event-9am right-cal-event",children:(0,i.jsx)("p",{children:"Onboarding"})})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 10.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3 ",children:(0,i.jsx)("p",{className:"day-time",children:" 11.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 12.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex",children:(0,i.jsx)("div",{className:"event-12pm right-cal-event",children:(0,i.jsx)("p",{children:"Onboarding"})})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 01.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 02.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex "})]})]})]})})})})},4605:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var i=a(2791),n=a(7689),l=a(1087),t=a(2426),r=a.n(t),c=a(9655),d=a(1830),o=a.n(d),m=a(9434),x=a(82),h=a(4581),g=a(8113),v=a(9040),j=a(184);const p=()=>{const[e,s]=(0,i.useState)([]),[a,t]=(0,i.useState)(!1),[d,p]=(0,i.useState)(""),[u,N]=(0,i.useState)(""),f=(0,m.v9)(h.tT),{id:b}=(0,n.UO)();(0,i.useEffect)((()=>{y()}),[]);const y=async()=>{try{let{data:i}=await(0,g.zf)(b);var e,a;if(null===i||void 0===i||!i.error)s(null===i||void 0===i||null===(e=i.results)||void 0===e?void 0:e.commentDetails),console.log(null===i||void 0===i||null===(a=i.results)||void 0===a?void 0:a.commentDetails)}catch(i){console.log(i)}};return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"container-fluid",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-2 sidebar",children:(0,j.jsx)(x.Z,{})}),(0,j.jsxs)("div",{className:"col-7 middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,j.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,j.jsxs)("nav",{className:"row header bg-white  ",children:[(0,j.jsx)("ul",{className:"col align-items-center mt-3",children:(0,j.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,j.jsx)("a",{className:"nav-link ms-2",href:"app-email.html",children:"Tasks / Comments"})})}),(0,j.jsxs)("div",{className:"col-7 d-flex align-items-center  justify-content-end",children:[(0,j.jsx)("form",{className:"",role:"search",children:(0,j.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,j.jsx)(l.rU,{to:"/Admin/Chat",children:(0,j.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,j.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,j.jsxs)("div",{className:"container px-4 text-center min-vh-100 ",children:[(0,j.jsx)("p",{className:"templates-leave mt-3  d-flex ",children:"Comments"}),e&&(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map(((e,s)=>{var i,n,m;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:"bg-white rounded p-2 mb-3",children:[(0,j.jsxs)("div",{className:"d-flex  justify-content-between",children:[(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsx)("img",{src:null!==e&&void 0!==e&&null!==(i=e.creator_Id)&&void 0!==i&&i.profile_Pic?null===e||void 0===e||null===(n=e.creator_Id)||void 0===n?void 0:n.profile_Pic:"/images/dashboard/Avatar.png",alt:"",className:"m-2 w_20_h_20"}),(0,j.jsx)("p",{className:"commenter-name m-auto",children:null===e||void 0===e||null===(m=e.creator_Id)||void 0===m?void 0:m.name}),(0,j.jsx)("p",{className:"comment-time m-auto",children:r()(null===e||void 0===e?void 0:e.createdAt).calendar()})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[(0,j.jsx)("div",{className:"cursor_pointer d-flex align-items-center",onClick:()=>(e=>{t((s=>({...Object.fromEntries(Object.entries(s).map((e=>{let[s]=e;return[s,!1]}))),[e]:!s[e]})))})(s),children:a[s]?(0,j.jsx)(l.rU,{className:"ticket-link me-1 text-decoration-none",children:"Cancel"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{src:"/images/dashboard/reply-arrow.svg",className:"me-1"}),(0,j.jsx)(l.rU,{className:"ticket-link me-1 text-decoration-none",children:"Reply"})]})}),(0,j.jsxs)("div",{onClick:s=>(async(e,s)=>{e.preventDefault();try{let{data:e}=await(0,g.xz)(s);e&&!e.error&&(o().fire({toast:!0,icon:"success",position:"top-end",title:"Comment deleted successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),y())}catch(a){console.log(a)}})(s,null===e||void 0===e?void 0:e._id),className:"ms-2",children:[(0,j.jsx)("img",{src:"/images/icons/delete_icon.png",className:"me-1"}),(0,j.jsx)(l.rU,{className:"ticket-link me-1 text-decoration-none text-danger",children:"Delete"})]})]})]}),(0,j.jsx)("p",{className:"comment-txt p-2 mb-0",children:null===e||void 0===e?void 0:e.comment}),(null===e||void 0===e?void 0:e.replyText)&&(0,j.jsx)("div",{style:{borderLeft:"2px solid #f8f9fa"},className:"text-start ms-5",children:null===e||void 0===e?void 0:e.replyText.map((e=>{var s,a;return(0,j.jsx)("div",{className:"bg-white p-2 mb-3",children:(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)("img",{className:"w_20_h_20 me-1",src:null===e||void 0===e||null===(s=e.creator_Id)||void 0===s?void 0:s.profile_Pic,alt:""}),(0,j.jsx)("p",{className:"commenter-name my-auto",children:null===e||void 0===e||null===(a=e.creator_Id)||void 0===a?void 0:a.name})]}),(0,j.jsx)("p",{className:"comment-txt p-2 mb-0",children:null===e||void 0===e?void 0:e.text})]}),(0,j.jsx)("div",{})]})})}))}),a[s]&&(0,j.jsx)("div",{className:"bg-white rounded p-2 my-3 task_reply",children:(0,j.jsx)("form",{onSubmit:s=>(async(e,s)=>{if(e.preventDefault(),""===d)return o().fire({toast:!0,icon:"success",position:"top-end",title:"Please enter reply",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;let a=localStorage.getItem("myot_admin_id"),{data:i}=await(0,g.CR)({text:d,comment_Id:s,creator_Id:a});console.log(i),!i||null!==i&&void 0!==i&&i.error||((0,c.Am)("Reply added",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),p(""),t(!1),y())})(s,null===e||void 0===e?void 0:e._id),children:(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsx)("img",{src:null===f||void 0===f?void 0:f.profile_Pic,alt:"",className:"comment-avatar m-auto mt-2 w_20_h_20"}),(0,j.jsx)("textarea",{type:"text",className:"p-2 w-100 mx-2 comment-txt",name:"reply",placeholder:"Reply...",defaultValue:"",onChange:e=>p(e.target.value)}),(0,j.jsx)("button",{type:"submit",className:"reply-btn",children:"Reply"}),(0,j.jsx)("button",{type:"reset",id:"reset",className:"d-none",children:"reset"})]})})})]})})})):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("h3",{className:"bg-white rounded p-2 py-4 mb-3",children:"No Comments Found"})}),(0,j.jsx)("div",{className:"bg-white rounded p-2 mb-3",children:(0,j.jsx)("div",{className:"d-flex  justify-content-between",children:(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsx)("img",{src:null===f||void 0===f?void 0:f.profile_Pic,alt:"",className:"comment-avatar m-auto mt-2 w_50_h_50"}),(0,j.jsx)("textarea",{name:"comment",value:u,onChange:e=>N(e.target.value),placeholder:"Add a comment\u2026",id:"",className:"comment-inbox m-2 p-2"}),(0,j.jsx)("button",{onClick:async e=>{e.preventDefault();let s=localStorage.getItem("myot_admin_id"),{data:a}=await(0,g.SK)({comment:u,templete_Id:b,creator_Id:s});console.log(a),null!==a&&void 0!==a&&a.error||(o().fire({toast:!0,icon:"success",position:"top-end",title:"New comment added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),y(),N(""))},className:"reply-btn",children:"Send"})]})})})]}),(0,j.jsxs)("div",{className:"footer bg-white",children:[(0,j.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,j.jsxs)("div",{className:"d-flex ",children:[(0,j.jsx)("p",{className:"ms-3",children:"About"}),(0,j.jsx)("p",{className:"ms-3",children:"Support"}),(0,j.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,j.jsx)("div",{className:"col",children:(0,j.jsx)(v.Z,{})})]})})})}},82:(e,s,a)=>{a.d(s,{Z:()=>o});a(2791);var i=a(7689),n=a(1087),l=a(8113),t=(a(9655),a(1967)),r=a(1830),c=a.n(r),d=a(184);const o=()=>{const e=(0,i.TH)(),s=(0,i.s0)();return(0,d.jsx)("div",{className:"container-fluid  sidebar",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,d.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,d.jsxs)("defs",{children:[(0,d.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,d.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,d.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,d.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,d.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,d.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,d.jsx)("div",{className:"col-auto col-mg-3 min-vh-100 mb-4",children:(0,d.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Home"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Home",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Dashboard"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Dashboard",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Awaiting-sig/)?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Awaiting-sig",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/awaiting-sig.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Awaiting Sig."})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/History-log-approved"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/History-log-approved",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/history-log.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"History Log"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Calendar"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Calendar",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Requests"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Requests",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Announcements"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Announcements",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Profile/)?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Profile/My-Profile",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Settings"===e.pathname?"nav_active":""),children:(0,d.jsxs)(n.rU,{to:"/Signatory/Settings",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Help/)?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Help",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark",onClick:async()=>{let e=localStorage.getItem("myot_admin_id");const{data:a}=await(0,l.HS)(e);console.log(a),!a||null!==a&&void 0!==a&&a.error||(localStorage.removeItem("myot_admin_id"),c().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successful",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),s("/Login"))},children:(0,d.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,d.jsx)("div",{style:{width:"14rem"},class:"dropdown position-fixed bottom-0 bg-white",children:(0,d.jsx)(t.Z,{})})]})})}}}]);
//# sourceMappingURL=4605.4533aae3.chunk.js.map