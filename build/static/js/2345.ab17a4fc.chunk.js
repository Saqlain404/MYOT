"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[2345],{22345:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var i=s(72791),n=s(57689),t=s(11087),l=s(72426),r=s.n(l),c=s(39040),d=s(21830),o=s.n(d),m=s(59434),x=s(64581),h=s(28113),g=s(82),v=s(80184);const j=()=>{const[e,a]=(0,i.useState)([]),[s,l]=(0,i.useState)(!1),[d,j]=(0,i.useState)(""),[p,u]=(0,i.useState)(""),[N,f]=(0,i.useState)(""),[b,y]=(0,i.useState)(),C=(0,m.v9)(x.tT),{id:_}=(0,n.UO)();(0,i.useEffect)((()=>{k()}),[]);const k=async()=>{try{let s=localStorage.getItem("myot_admin_id");y(s);let{data:i}=await(0,h.Uv)(_);var e;if(null===i||void 0===i||!i.error)a(null===i||void 0===i||null===(e=i.results)||void 0===e?void 0:e.commentDetailsList),console.log(null===i||void 0===i?void 0:i.results)}catch(s){console.log(s)}};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"container-fluid",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-2 sidebar",children:(0,v.jsx)(g.Z,{})}),(0,v.jsxs)("div",{className:"col-7 middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,v.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,v.jsxs)("nav",{className:"row header bg-white  ",children:[(0,v.jsx)("ul",{className:"col align-items-center mt-3",children:(0,v.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,v.jsx)("a",{className:"nav-link ms-2",href:"app-email.html",children:"/ Requests / Comments"})})}),(0,v.jsxs)("div",{className:"col-7 d-flex align-items-center  justify-content-end",children:[(0,v.jsx)("form",{className:"",role:"search",children:(0,v.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,v.jsx)(t.rU,{to:"/Admin/Chat",children:(0,v.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,v.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,v.jsxs)("div",{className:"container px-4 text-center min-vh-100 ",children:[(0,v.jsx)("p",{className:"templates-leave mt-3  d-flex ",children:"Comments"}),e&&(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map(((e,a)=>{var i,n,c;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"bg-white rounded p-2 mb-3",children:[(0,v.jsxs)("div",{className:"d-flex  justify-content-between",children:[(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsx)("img",{src:null!==e&&void 0!==e&&null!==(i=e.creator_Id)&&void 0!==i&&i.profile_Pic?null===e||void 0===e||null===(n=e.creator_Id)||void 0===n?void 0:n.profile_Pic:"/images/dashboard/Avatar.png",alt:"",className:"m-2 w_20_h_20"}),(0,v.jsx)("p",{className:"commenter-name m-auto",children:null===e||void 0===e||null===(c=e.creator_Id)||void 0===c?void 0:c.name}),(0,v.jsx)("p",{className:"comment-time m-auto",children:r()(null===e||void 0===e?void 0:e.createdAt).calendar()})]}),(0,v.jsxs)("div",{className:"d-flex align-items-center justify-content-end",children:[(0,v.jsx)("div",{className:"cursor_pointer d-flex align-items-center",onClick:()=>(e=>{l((a=>({...Object.fromEntries(Object.entries(a).map((e=>{let[a]=e;return[a,!1]}))),[e]:!a[e]})))})(a),children:s[a]?(0,v.jsx)(t.rU,{className:"ticket-link me-1 text-decoration-none",children:"Cancel"}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:"/images/dashboard/reply-arrow.svg",className:"me-1"}),(0,v.jsx)(t.rU,{className:"ticket-link me-1 text-decoration-none",children:"Reply"})]})}),(0,v.jsxs)("div",{onClick:a=>(async(e,a)=>{e.preventDefault();try{let{data:e}=await(0,h.ki)(a);null!==e&&void 0!==e&&e.error||(o().fire({toast:!0,icon:"success",position:"top-end",title:"Comment deleted successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),k())}catch(s){console.log(s)}})(a,null===e||void 0===e?void 0:e._id),className:"ms-2",children:[(0,v.jsx)("img",{src:"/images/icons/delete_icon.png",className:"me-1"}),(0,v.jsx)(t.rU,{className:"ticket-link me-1 text-decoration-none text-danger",children:"Delete"})]})]})]}),(0,v.jsx)("p",{className:"comment-txt p-2 mb-0",children:null===e||void 0===e?void 0:e.comment}),(null===e||void 0===e?void 0:e.replyText)&&(0,v.jsx)("div",{style:{borderLeft:"2px solid #f8f9fa"},className:"text-start ms-5",children:null===e||void 0===e?void 0:e.replyText.map((e=>{var a,s;return(0,v.jsx)("div",{className:"bg-white p-2 mb-3",children:(0,v.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)("img",{className:"w_20_h_20 me-1",src:null===e||void 0===e||null===(a=e.creator_Id)||void 0===a?void 0:a.profile_Pic,alt:""}),(0,v.jsx)("p",{className:"commenter-name my-auto",children:null===e||void 0===e||null===(s=e.creator_Id)||void 0===s?void 0:s.name})]}),(0,v.jsx)("p",{className:"comment-txt p-2 mb-0",children:null===e||void 0===e?void 0:e.text})]}),(0,v.jsx)("div",{})]})})}))}),s[a]&&(0,v.jsx)("div",{className:"bg-white rounded p-2 my-3 task_reply",children:(0,v.jsx)("form",{onSubmit:a=>(async(e,a)=>{if(e.preventDefault(),""===N)return o().fire({toast:!0,icon:"success",position:"top-end",title:"Please enter a reply",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;let s={creator_Id:b,comment_Id:a,text:N};console.log(s);let{data:i}=await(0,h.uT)(s);console.log(i),null!==i&&void 0!==i&&i.error||(o().fire({toast:!0,icon:"success",position:"top-end",title:"New comment added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),document.getElementById("reset").click(),j(""),l(!1),k())})(a,null===e||void 0===e?void 0:e._id),children:(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsx)("img",{src:null===C||void 0===C?void 0:C.profile_Pic,alt:"",className:"comment-avatar m-auto mt-2 w_20_h_20"}),(0,v.jsx)("textarea",{type:"text",className:"p-2 w-100 mx-2 comment-txt",name:"reply",placeholder:"Reply...",defaultValue:"",onChange:e=>f(e.target.value)}),(0,v.jsx)("button",{type:"submit",className:"reply-btn",children:"Reply"}),(0,v.jsx)("button",{type:"reset",id:"reset",className:"d-none",children:"reset"})]})})})]})})})):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("h3",{className:"bg-white rounded p-2 py-4 mb-3",children:"No Comments Found"})}),(0,v.jsx)("div",{className:"bg-white rounded p-2 mb-3",children:(0,v.jsx)("div",{className:"d-flex  justify-content-between",children:(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsx)("img",{src:null===C||void 0===C?void 0:C.profile_Pic,alt:"",className:"comment-avatar m-auto mt-2 w_50_h_50"}),(0,v.jsx)("textarea",{name:"comment",value:p,onChange:e=>u(e.target.value),placeholder:"Add a comment\u2026",id:"",className:"comment-inbox m-2 p-2"})]})})})]}),(0,v.jsxs)("div",{className:"footer bg-white",children:[(0,v.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("p",{className:"ms-3",children:"About"}),(0,v.jsx)("p",{className:"ms-3",children:"Support"}),(0,v.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(c.Z,{})})]})})})}},82:(e,a,s)=>{s.d(a,{Z:()=>o});s(72791);var i=s(57689),n=s(11087),t=s(28113),l=(s(29655),s(31967)),r=s(21830),c=s.n(r),d=s(80184);const o=()=>{const e=(0,i.TH)(),a=(0,i.s0)();return(0,d.jsx)("div",{className:"container-fluid  sidebar",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,d.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,d.jsxs)("defs",{children:[(0,d.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,d.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,d.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,d.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,d.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,d.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,d.jsx)("div",{className:"col-auto col-mg-3 min-vh-100 mb-4",children:(0,d.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Home"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Home",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Dashboard"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Dashboard",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Awaiting-sig/)?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Awaiting-sig",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/awaiting-sig.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Awaiting Sig."})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/History-log-approved"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/History-log-approved",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/history-log.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"History Log"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Calendar"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Calendar",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Requests"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Requests",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Announcements"===e.pathname?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Announcements",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Profile/)?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Profile/My-Profile",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Settings"===e.pathname?"nav_active":""),children:(0,d.jsxs)(n.rU,{to:"/Signatory/Settings",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})}),(0,d.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Help/)?"nav_active":""),children:(0,d.jsx)(n.rU,{to:"/Signatory/Help",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,d.jsx)("li",{className:"nav-item text-dark",onClick:async()=>{let e=localStorage.getItem("myot_admin_id");const{data:s}=await(0,t.HS)(e);console.log(s),!s||null!==s&&void 0!==s&&s.error||(localStorage.removeItem("myot_admin_id"),c().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successful",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),a("/Login"))},children:(0,d.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,d.jsx)("div",{style:{width:"14rem"},class:"dropdown position-fixed bottom-0 bg-white",children:(0,d.jsx)(l.Z,{})})]})})}}}]);
//# sourceMappingURL=2345.ab17a4fc.chunk.js.map