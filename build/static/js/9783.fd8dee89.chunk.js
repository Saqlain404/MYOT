"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[9783],{9783:(e,a,s)=>{s.r(a),s.d(a,{default:()=>g});var i=s(2791),n=s(9040),l=s(4347),t=s(1087),r=s(8113),d=s(2426),c=s.n(d),m=s(1161),o=s(1830),x=s.n(o),h=s(184);const g=()=>{const[e,a]=(0,i.useState)([]),[s,d]=(0,i.useState)(""),[o,g]=(0,i.useState)(""),[p,j]=(0,i.useState)([]),[v,N]=(0,i.useState)(!1);(0,i.useEffect)((()=>{u()}),[]);const u=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,r.p7)(e);var i;(console.log(s),null!==s&&void 0!==s&&s.error)||a(null===s||void 0===s||null===(i=s.results)||void 0===i?void 0:i.announcementList)};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-2 sidebar",children:(0,h.jsx)(l.Z,{})}),(0,h.jsxs)("div",{className:"col-7 middle-content",children:[(0,h.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,h.jsxs)("nav",{className:"row header bg-white  ",children:[(0,h.jsx)("ul",{className:"col align-items-center mt-3",children:(0,h.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,h.jsx)("a",{className:"nav-link fw-bold",children:"Announcements"})})}),(0,h.jsxs)("div",{className:"col d-flex align-items-center  justify-content-end",children:[(0,h.jsx)("form",{className:"",role:"search",children:(0,h.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,h.jsx)(t.rU,{to:"/Admin/Chat",children:(0,h.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,h.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,h.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,h.jsx)("p",{className:"table-name mb-2",children:"Broadcast Announcement"}),(0,h.jsx)("div",{className:"d-flex justify-content-center th-text",children:(0,h.jsxs)("div",{className:"d-flex whitespace-nowrap",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:[(0,h.jsx)("img",{src:"/images/tasks/Add.svg",alt:"",className:"pb-3"}),(0,h.jsx)("p",{className:"pt-1 text-nowrap",children:"Add Announcement"})]})})]}),(0,h.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,h.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-department",children:(0,h.jsx)("div",{class:"modal-content border-0",children:(0,h.jsxs)("form",{onSubmit:async e=>{N(!0),e.preventDefault();let a=localStorage.getItem("myot_admin_id"),i=new FormData;i.append("categoryName",s),i.append("document",null===p||void 0===p?void 0:p.doc_img),i.append("text",o),i.append("creator_Id",a);try{let{data:e}=await(0,r.gd)(i);console.log(e),!e||null!==e&&void 0!==e&&e.error||(x().fire({toast:!0,icon:"success",position:"top-end",title:"Announcement created",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),d(""),g(""),j([]),document.getElementById("resetForm").click(),document.getElementById("modalClose").click(),u())}catch(n){console.log(n)}finally{N(!1)}},children:[(0,h.jsxs)("div",{class:"d-flex modal-header border-bottom",children:[(0,h.jsx)("p",{class:"mb-0",id:"exampleModalLabel",children:"Create New Announcement"}),(0,h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"modalClose"})]}),(0,h.jsxs)("div",{className:"row p-3",children:[(0,h.jsxs)("div",{className:"col-12 mb-3 d-flex",children:[(0,h.jsxs)("div",{className:"col-6 pe-3",children:[(0,h.jsx)("label",{htmlFor:"announcementType",className:"mb-3",children:"Announcement Category"}),(0,h.jsx)("input",{type:"text",placeholder:"Announcement Category",className:"col-12 modal-input td-text  p-2",name:"announcementType",id:"announcementType",value:s,onChange:e=>d(e.target.value)})]}),(0,h.jsxs)("div",{className:"col-6 mb-3 ",children:[(0,h.jsx)("label",{htmlFor:"doc_file",className:"mb-3",children:"Document Upload"}),(0,h.jsx)("input",{type:"file",placeholder:"File Format: JPG, JPEG, PNG or PDF Size: Upto 500KB",className:"col-12 modal-input td-text p-2 display-none",name:"doc_file",id:"doc_file",onChange:e=>((e,a)=>{j({...p,[a]:e.target.files[0]})})(e,"doc_img"),accept:".png, .jpg, .jpeg, .pdf"})]})]}),(0,h.jsxs)("div",{className:"col-12 mb-3 ",children:[(0,h.jsx)("label",{htmlFor:"description",className:"mb-3",children:"Description"}),(0,h.jsx)("textarea",{type:"text",placeholder:"",className:"col-12 modal-input td-text p-2 text-area",name:"description",id:"description",value:o,onChange:e=>g(e.target.value)})]})]}),(0,h.jsxs)("div",{className:"d-flex justify-content-end mb-3 me-3",children:[(0,h.jsx)(m.Z,{style:{width:"150px"},loading:v,appearance:"primary",className:"btn mb-3 me-2 rounded-2",type:"submit",disabled:!s||!o,children:"Add New"}),(0,h.jsx)(m.Z,{style:{width:"100px"},type:"reset",className:"btn mb-3 mx-2 rounded-2 bg-light text-dark border-0","data-bs-dismiss":"modal","aria-label":"Close",children:"Cancel"}),(0,h.jsx)("button",{type:"reset",id:"resetForm",className:"d-none",children:"reset"})]})]})})})}),(0,h.jsx)("div",{className:"container rounded mb-3",children:e&&(null===e||void 0===e?void 0:e.map((e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"row my-4 bg-body-tertiary",children:[(0,h.jsx)("p",{className:"templates-leave mt-3 ms-2 mb-0 ",children:"Announcement > ".concat(null===e||void 0===e?void 0:e.categoryName)}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)("div",{className:"col rounded bg-white d-flex m-3 p-2 algin-items-center justify-content-between",children:[(0,h.jsxs)("div",{className:"ps-2 pe-3",children:[(0,h.jsxs)("div",{className:"d-flex",children:[(0,h.jsx)("img",{style:{width:"20px",height:"20px",borderRadius:"50%"},src:null!==e&&void 0!==e&&e.document?null===e||void 0===e?void 0:e.document:"/images/dashboard/user (2) 1.svg",alt:"",className:"me-2"}),(0,h.jsx)("p",{className:"anouncement-text ms-1",children:null===e||void 0===e?void 0:e.text})]}),(0,h.jsxs)("div",{className:"d-flex ms-4 mt-1",children:[(0,h.jsx)("img",{src:"/images/dashboard/bookmark 1.svg",alt:"",className:"m-1 "}),(0,h.jsx)("p",{className:"new-feedback",children:"New feedback added"})]})]}),(0,h.jsx)("p",{className:"announcement-time",children:c()(null===e||void 0===e?void 0:e.createdAt).calendar()})]})})]})}))))}),(0,h.jsxs)("div",{className:"footer",children:[(0,h.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,h.jsxs)("div",{className:"d-flex ",children:[(0,h.jsx)("p",{className:"ms-3",children:"About"}),(0,h.jsx)("p",{className:"ms-3",children:"Support"}),(0,h.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,h.jsx)("div",{className:"col",children:(0,h.jsx)(n.Z,{})})]})})})}},1967:(e,a,s)=>{s.d(a,{Z:()=>o});var i=s(2791),n=s(7689),l=s(1087),t=s(9434),r=s(4581),d=s(1830),c=s.n(d),m=s(184);const o=()=>{var e,a,s;const[d,o]=(0,i.useState)(),[x,h]=(0,i.useState)([]),g=(0,t.v9)(r.tT),p=(0,n.TH)(),j=(0,n.s0)();(0,i.useEffect)((()=>{const e=p.pathname.split("/");o(e[1])}),[p]),(0,i.useEffect)((()=>{let e=p.pathname.startsWith("/Admin"),a=p.pathname.startsWith("/Signatory"),s=p.pathname.startsWith("/Employee"),i=p.pathname.startsWith("/Approver"),n=p.pathname.startsWith("/Department"),l=localStorage.getItem("token-company"),t=null===g||void 0===g?void 0:g.employRole;null!==t&&void 0!==t&&t.includes("Admin")||!e||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Signatory")||!a||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Department Manager")||!n||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Approver")||!i||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login")),null!==t&&void 0!==t&&t.includes("Employee")||!s||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),j("/Login"))}),[p]),(0,i.useEffect)((()=>{v()}),[]);const v=async()=>{const e=null===g||void 0===g?void 0:g.employRole.flat(1/0);h(e)},N=["Admin","Department Manager","Signatory","Employee","Approver"];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("a",{className:"text-decoration-none pb-2 bg-white w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,m.jsxs)("div",{className:"profile",children:[(0,m.jsx)("div",{children:null!==g&&void 0!==g&&g.profile_Pic?(0,m.jsx)("img",{className:"w_50_h_50",src:null===g||void 0===g?void 0:g.profile_Pic,alt:"Profile"}):(0,m.jsx)("img",{className:"w_50_h_50",src:"/images/icons/user.jpg",alt:"Profile"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"text-dark text-capitalize",children:(null===g||void 0===g||null===(e=g.name)||void 0===e||null===(a=e.split(" "))||void 0===a||null===(s=a.slice(0,2))||void 0===s?void 0:s.join(" "))||(null===g||void 0===g?void 0:g.companyName)}),(0,m.jsx)("p",{className:"th-text",children:d&&"Department"===d?"Department Manager":d})]}),(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"/images/sidebar/ArrowLineDown2.svg",alt:"hh"})})]})}),(0,m.jsx)("ul",{className:"dropdown-menu",children:null===N||void 0===N?void 0:N.map((e=>{if(null!==x&&void 0!==x&&x.includes(e)){const a="Department Manager"===e?"Department":e;return(0,m.jsx)(l.rU,{to:"/".concat(a,"/Home"),className:"text-decoration-none",children:(0,m.jsx)("li",{children:(0,m.jsx)("a",{className:"dropdown-item",children:e})})},e)}return null}))})]})}},9040:(e,a,s)=>{s.d(a,{Z:()=>n});s(2791);var i=s(184);const n=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container right-sidebar",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start ",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Notifications"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 ",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"New user registered"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"New user recentlu added by a.."})]})})]}),(0,i.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start  mt-4",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Activities"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 mt-4",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Edited the details of Project X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar2.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Changed the status of Project X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar3.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Submitted a bug"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Modified A data in Page X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar4.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Deleted a page in Project X"})]})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start mt-4",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Calendar"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 mt-4",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 09.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex",children:(0,i.jsx)("div",{className:"event-9am right-cal-event",children:(0,i.jsx)("p",{children:"Onboarding"})})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 10.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3 ",children:(0,i.jsx)("p",{className:"day-time",children:" 11.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 12.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex",children:(0,i.jsx)("div",{className:"event-12pm right-cal-event",children:(0,i.jsx)("p",{children:"Onboarding"})})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 01.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 02.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex "})]})]})]})})})})},4347:(e,a,s)=>{s.d(a,{Z:()=>x});var i=s(2791),n=s(7689),l=s(1087),t=s(9434),r=(s(8709),s(8113)),d=(s(9655),s(1967)),c=s(1830),m=s.n(c),o=(s(4581),s(184));const x=()=>{const e=(0,n.s0)(),a=((0,t.I0)(),(0,n.TH)());(0,i.useEffect)((()=>{localStorage.getItem("token-company")||e("/Login")}),[]);return(0,o.jsx)("div",{className:"container-fluid  sidebar",children:(0,o.jsxs)("div",{className:"row position-relative",children:[(0,o.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,o.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,o.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,o.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,o.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,o.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,o.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,o.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,o.jsx)("div",{className:"col-auto col-mg-3 pb-5 mb-5",children:(0,o.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Home/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Home",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Admin/Dashboard"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Dashboard",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Tasks/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Tasks",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/tasks.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Tasks"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Templates/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Templates",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/tasks.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Templates"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Calendar/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Calendar",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/ic_calendar.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Users/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Users",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Users"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Departments"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Departments",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/departments.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Departments"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Approvers"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Approvers",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/approvers.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Approvers"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Signatories"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Signatories",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/signatories.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Signatories"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Requests/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Requests",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Announcements"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Announcements",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Analytics"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Analytics",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/analytics.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Analytics"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Profile/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Profile/My-profile",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Settings"===a.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Settings",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(a.pathname.match(/^\/Admin\/Help/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Help",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,o.jsx)("li",{className:"nav-item text-dark",onClick:async a=>{a.preventDefault();let s=await localStorage.getItem("myot_admin_id"),{data:i}=await(0,r.HS)(s);console.log(i),m().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),localStorage.removeItem("myot_admin_id"),localStorage.removeItem("user_id"),localStorage.removeItem("token-company"),e("/Login")},children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,o.jsx)("div",{style:{width:"14rem"},class:"dropdown position-fixed bottom-0",children:(0,o.jsx)(d.Z,{})})]})})}}}]);
//# sourceMappingURL=9783.fd8dee89.chunk.js.map