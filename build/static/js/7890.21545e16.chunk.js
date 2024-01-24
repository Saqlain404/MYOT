"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[7890],{1967:(a,e,s)=>{s.d(e,{Z:()=>o});var i=s(2791),n=s(7689),l=s(1087),r=s(9434),t=s(4581),d=s(1830),c=s.n(d),m=s(184);const o=()=>{var a,e,s;const[d,o]=(0,i.useState)(),[x,g]=(0,i.useState)([]),h=(0,r.v9)(t.tT),j=(0,n.TH)(),p=(0,n.s0)();(0,i.useEffect)((()=>{const a=j.pathname.split("/");o(a[1])}),[j]),(0,i.useEffect)((()=>{let a=j.pathname.startsWith("/Admin"),e=j.pathname.startsWith("/Signatory"),s=j.pathname.startsWith("/Employee"),i=j.pathname.startsWith("/Approver"),n=j.pathname.startsWith("/Department"),l=localStorage.getItem("token-company"),r=null===h||void 0===h?void 0:h.employRole;null!==r&&void 0!==r&&r.includes("Admin")||!a||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==r&&void 0!==r&&r.includes("Signatory")||!e||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==r&&void 0!==r&&r.includes("Department Manager")||!n||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==r&&void 0!==r&&r.includes("Approver")||!i||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==r&&void 0!==r&&r.includes("Employee")||!s||l||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login"))}),[j]),(0,i.useEffect)((()=>{v()}),[]);const v=async()=>{const a=null===h||void 0===h?void 0:h.employRole.flat(1/0);g(a)},N=["Admin","Department Manager","Signatory","Employee","Approver"];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("a",{className:"text-decoration-none pb-2 bg-white w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,m.jsxs)("div",{className:"profile",children:[(0,m.jsx)("div",{children:null!==h&&void 0!==h&&h.profile_Pic?(0,m.jsx)("img",{className:"w_50_h_50",src:null===h||void 0===h?void 0:h.profile_Pic,alt:"Profile"}):(0,m.jsx)("img",{className:"w_50_h_50",src:"/images/icons/user.jpg",alt:"Profile"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"text-dark text-capitalize",children:(null===h||void 0===h||null===(a=h.name)||void 0===a||null===(e=a.split(" "))||void 0===e||null===(s=e.slice(0,2))||void 0===s?void 0:s.join(" "))||(null===h||void 0===h?void 0:h.companyName)}),(0,m.jsx)("p",{className:"th-text",children:d&&"Department"===d?"Department Manager":d})]}),(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"/images/sidebar/ArrowLineDown2.svg",alt:"hh"})})]})}),(0,m.jsx)("ul",{className:"dropdown-menu",children:null===N||void 0===N?void 0:N.map((a=>{if(null!==x&&void 0!==x&&x.includes(a)){const e="Department Manager"===a?"Department":a;return(0,m.jsx)(l.rU,{to:"/".concat(e,"/Home"),className:"text-decoration-none",children:(0,m.jsx)("li",{children:(0,m.jsx)("a",{className:"dropdown-item",children:a})})},a)}return null}))})]})}},9040:(a,e,s)=>{s.d(e,{Z:()=>n});s(2791);var i=s(184);const n=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container right-sidebar",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start ",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Notifications"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 ",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"New user registered"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"New user recentlu added by a.."})]})})]}),(0,i.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start  mt-4",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Activities"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 mt-4",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Edited the details of Project X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar2.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Changed the status of Project X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar3.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Submitted a bug"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Modified A data in Page X"})]})}),(0,i.jsx)("li",{className:"nav-item text-dark",children:(0,i.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,i.jsx)("span",{children:(0,i.jsx)("img",{src:"/images/sidebar/Avatar4.png"})}),(0,i.jsx)("span",{className:"right-sidebar-item",children:"Deleted a page in Project X"})]})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col float-start mt-4",children:(0,i.jsx)("h4",{className:"text-align-left float-start current-day",children:"Calendar"})}),(0,i.jsx)("div",{className:"col float-end",children:(0,i.jsx)("div",{className:" float-end me-1 mt-4",children:(0,i.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 09.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex",children:(0,i.jsx)("div",{className:"event-9am right-cal-event",children:(0,i.jsx)("p",{children:"Onboarding"})})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 10.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3 ",children:(0,i.jsx)("p",{className:"day-time",children:" 11.00 AM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 12.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex",children:(0,i.jsx)("div",{className:"event-12pm right-cal-event",children:(0,i.jsx)("p",{children:"Onboarding"})})})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 01.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom"})]}),(0,i.jsxs)("div",{className:"row bg-white",children:[(0,i.jsx)("div",{className:"col-3",children:(0,i.jsx)("p",{className:"day-time",children:" 02.00 PM"})}),(0,i.jsx)("div",{className:"col border-bottom d-flex "})]})]})]})})})})},4347:(a,e,s)=>{s.d(e,{Z:()=>x});var i=s(2791),n=s(7689),l=s(1087),r=s(9434),t=(s(8709),s(8113)),d=(s(9655),s(1967)),c=s(1830),m=s.n(c),o=(s(4581),s(184));const x=()=>{const a=(0,n.s0)(),e=((0,r.I0)(),(0,n.TH)());(0,i.useEffect)((()=>{localStorage.getItem("token-company")||a("/Login")}),[]);return(0,o.jsx)("div",{className:"container-fluid  sidebar",children:(0,o.jsxs)("div",{className:"row position-relative",children:[(0,o.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,o.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,o.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,o.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,o.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,o.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,o.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,o.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,o.jsx)("div",{className:"col-auto col-mg-3 pb-5 mb-5",children:(0,o.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Home/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Home",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Admin/Dashboard"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Dashboard",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Tasks/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Tasks",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/tasks.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Tasks"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Templates/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Templates",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/tasks.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Templates"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Calendar/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Calendar",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/ic_calendar.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Users/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Users",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Users"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Departments"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Departments",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/departments.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Departments"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Approvers"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Approvers",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/approvers.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Approvers"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Signatories"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Signatories",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/signatories.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Signatories"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Requests/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Requests",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Announcements"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Announcements",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Analytics"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Analytics",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/analytics.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Analytics"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Profile/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Profile/My-profile",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat("/Admin/Settings"===e.pathname?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Settings",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})})}),(0,o.jsx)("li",{className:' "nav-item text-dark" '.concat(e.pathname.match(/^\/Admin\/Help/)?"nav_active":""),children:(0,o.jsx)(l.rU,{to:"/Admin/Help",className:"text-decoration-none",children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,o.jsx)("li",{className:"nav-item text-dark",onClick:async e=>{e.preventDefault();let s=await localStorage.getItem("myot_admin_id"),{data:i}=await(0,t.HS)(s);console.log(i),m().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),localStorage.removeItem("myot_admin_id"),localStorage.removeItem("user_id"),localStorage.removeItem("token-company"),a("/Login")},children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,o.jsx)("div",{style:{width:"14rem"},class:"dropdown position-fixed bottom-0",children:(0,o.jsx)(d.Z,{})})]})})}},82:(a,e,s)=>{s.d(e,{Z:()=>m});s(2791);var i=s(7689),n=s(1087),l=s(8113),r=(s(9655),s(1967)),t=s(1830),d=s.n(t),c=s(184);const m=()=>{const a=(0,i.TH)(),e=(0,i.s0)();return(0,c.jsx)("div",{className:"container-fluid  sidebar",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,c.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,c.jsxs)("defs",{children:[(0,c.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,c.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,c.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,c.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,c.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,c.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,c.jsx)("div",{className:"col-auto col-mg-3 min-vh-100 mb-4",children:(0,c.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Home"===a.pathname?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Home",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Dashboard"===a.pathname?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Dashboard",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat(a.pathname.match(/^\/Signatory\/Awaiting-sig/)?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Awaiting-sig",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/awaiting-sig.svg",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Awaiting Sig."})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/History-log-approved"===a.pathname?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/History-log-approved",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/history-log.svg",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"History Log"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Calendar"===a.pathname?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Calendar",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Requests"===a.pathname?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Requests",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Announcements"===a.pathname?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Announcements",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat(a.pathname.match(/^\/Signatory\/Profile/)?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Profile/My-Profile",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Settings"===a.pathname?"nav_active":""),children:(0,c.jsxs)(n.rU,{to:"/Signatory/Settings",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat(a.pathname.match(/^\/Signatory\/Help/)?"nav_active":""),children:(0,c.jsx)(n.rU,{to:"/Signatory/Help",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark",onClick:async()=>{let a=localStorage.getItem("myot_admin_id");const{data:s}=await(0,l.HS)(a);console.log(s),!s||null!==s&&void 0!==s&&s.error||(localStorage.removeItem("myot_admin_id"),d().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successful",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),e("/Login"))},children:(0,c.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,c.jsx)("div",{style:{width:"14rem"},class:"dropdown position-fixed bottom-0 bg-white",children:(0,c.jsx)(r.Z,{})})]})})}},7890:(a,e,s)=>{s.r(e),s.d(e,{default:()=>t});s(2791);var i=s(9040),n=(s(4347),s(1087)),l=s(82),r=s(184);const t=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-2 sidebar",children:(0,r.jsx)(l.Z,{})}),(0,r.jsxs)("div",{className:"col-7 middle-content  p-0 min-vh-100",children:[(0,r.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,r.jsxs)("nav",{className:"row header bg-white  ",children:[(0,r.jsx)("ul",{className:"col align-items-center mt-3",children:(0,r.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,r.jsx)("a",{className:"nav-link ms-2",href:"app-email.html",children:"My Profile / View"})})}),(0,r.jsxs)("div",{className:"col-7 d-flex align-items-center  justify-content-end",children:[(0,r.jsx)("form",{className:"",role:"search",children:(0,r.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,r.jsx)(n.rU,{to:"/Signatory/Chat",children:(0,r.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,r.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,r.jsx)("div",{className:"container px-4 text-center min-vh-100 ",children:(0,r.jsxs)("div",{className:"row rounded",children:[(0,r.jsx)("div",{className:" d-flex justify-content-between",children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(n.rU,{to:"/Signatory/My-Profile",className:"text-decoration-none",children:(0,r.jsx)("p",{className:"th-text  me-3",children:"Profile"})}),(0,r.jsx)(n.rU,{to:"/Signatory/Signature-management",className:"text-decoration-none",children:(0,r.jsx)("p",{className:"td-text border-bottom",children:"Signature Management"})})]})}),(0,r.jsxs)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:[(0,r.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Signature Version"}),(0,r.jsxs)("div",{className:"col-12 d-flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img1.svg",alt:"",className:"signature-img"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img2.svg",alt:"",className:"signature-img"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img3.svg",alt:"",className:"signature-img"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img4.svg",alt:"",className:"signature-img"})})]}),(0,r.jsxs)("div",{className:"col-12 d-flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img5.svg",alt:"",className:"signature-img"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img6.svg",alt:"",className:"signature-img"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img7.svg",alt:"",className:"signature-img"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/images/dashboard/sign-img8.svg",alt:"",className:"signature-img"})})]})]}),(0,r.jsxs)("div",{className:"col-12 bg-white rounded mb-4 p-4 ",children:[(0,r.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Upload Signature"}),(0,r.jsxs)("div",{className:"bg-body-tertiary rounded p-4 import-img-card",children:[(0,r.jsx)("img",{src:"/images/dashboard/import-img.svg",alt:""}),(0,r.jsx)("p",{className:"th-text m-1",children:"Drag and drop logo here, or click add image"}),(0,r.jsx)("button",{className:"add-img-btn mt-4",children:"Add Image"})]}),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsx)("button",{className:"notify-admin-btn",children:"Notify Admin"})})]})]})}),(0,r.jsxs)("div",{className:"footer bg-white",children:[(0,r.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,r.jsxs)("div",{className:"d-flex ",children:[(0,r.jsx)("p",{className:"ms-3",children:"About"}),(0,r.jsx)("p",{className:"ms-3",children:"Support"}),(0,r.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(i.Z,{})})]})})})}}]);
//# sourceMappingURL=7890.21545e16.chunk.js.map