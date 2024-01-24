"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[1619],{31619:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var i=s(72791),n=(s(11166),s(11087)),t=s(98726),l=s(42376),r=s(90575),c=s(38217),d=s(52720),m=s(49704),o=s(80184);const x=()=>{const[e,a]=(0,i.useState)("day"),s=[{title:"Event 1",start:"2024-01-11T10:00:00"},{title:"Event 2",start:"2024-01-22T14:30:00"}];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-2 sidebar pe-0",children:(0,o.jsx)(t.Z,{})}),(0,o.jsxs)("div",{className:"col middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,o.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,o.jsxs)("nav",{className:"row header bg-white  ",children:[(0,o.jsx)("ul",{className:"col align-items-center mt-3",children:(0,o.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,o.jsx)("a",{className:"nav-link ms-2",href:"app-email.html",children:"/Calendar"})})}),(0,o.jsxs)("div",{className:"col d-flex align-items-center  justify-content-end",children:[(0,o.jsx)("form",{className:"",role:"search",children:(0,o.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,o.jsx)(n.rU,{to:"/Department/Chat",children:(0,o.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,o.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,o.jsxs)("div",{className:"d-flex ps-3 ",children:[(0,o.jsx)("p",{onClick:()=>a("day"),className:"day"===e?"active_tab th-text p-2":"p-2 th-text cal_tab",children:"Day"}),(0,o.jsx)("p",{onClick:()=>a("week"),className:"week"===e?"active_tab th-text p-2":"p-2 th-text cal_tab",children:"Week"}),(0,o.jsx)("p",{onClick:()=>a("month"),className:"month"===e?"active_tab th-text p-2":"p-2 th-text cal_tab",children:"Month"}),(0,o.jsx)("p",{onClick:()=>a("year"),className:"year"===e?"active_tab th-text p-2":"p-2 th-text cal_tab",children:"Year"})]}),(0,o.jsx)("div",{className:"container px-4 text-center",children:(0,o.jsxs)("div",{className:"row gx-5",children:[(0,o.jsx)("div",{className:"col-3  ",children:(0,o.jsxs)("div",{className:" bg-white min-vh-100 p-4 ",children:[(0,o.jsx)("button",{className:"create-task-btn ",children:"+ Create Task"}),"day"===e&&(0,o.jsx)(l.ZP,{className:"mini-calendar"})||"week"===e&&(0,o.jsx)(l.ZP,{className:"mini-calendar"})||"month"===e&&(0,o.jsx)(l.ZP,{defaultView:"year",className:"mini-calendar"})||"year"===e&&(0,o.jsx)(l.ZP,{className:"mini-calendar"})]})}),"day"===e&&(0,o.jsx)("div",{className:"col-9 bg-white shadow",children:(0,o.jsx)(r.Z,{plugins:[c.Z,d.Z,m.Z],initialView:"timeGridDay",events:s})},e)||"week"===e&&(0,o.jsx)("div",{className:"col-9 bg-white shadow",children:(0,o.jsx)(r.Z,{plugins:[c.Z,d.Z,m.Z],initialView:"listWeek",events:s})},e)||"month"===e&&(0,o.jsx)("div",{className:"col-9 bg-white shadow",children:(0,o.jsx)(r.Z,{plugins:[c.Z,d.Z,m.Z],initialView:"dayGridMonth",events:s})},e)||"year"===e&&(0,o.jsx)("div",{className:"col-9 bg-white shadow",children:(0,o.jsx)(r.Z,{plugins:[c.Z,d.Z,m.Z],initialView:"dayGridYear",events:s})},e)]})})]})]})})})}},11166:(e,a,s)=>{s.d(a,{Z:()=>t});s(72791);var i=s(42376),n=s(80184);const t=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.ZP,{className:"mini-calendar"})})},98726:(e,a,s)=>{s.d(a,{Z:()=>x});var i=s(72791),n=s(59434),t=s(57689),l=s(11087),r=s(21830),c=s.n(r),d=s(28113),m=s(31967),o=s(80184);const x=()=>{const e=(0,t.TH)(),a=(0,t.s0)();(0,n.I0)();(0,i.useEffect)((()=>{localStorage.getItem("token-company")||a("/Admin/Login")}),[]);return(0,o.jsx)("div",{className:"container-fluid  sidebar",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,o.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,o.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,o.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,o.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,o.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,o.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,o.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,o.jsx)("div",{className:"col-auto col-mg-3 min-vh-100  mb-4",children:(0,o.jsxs)("ul",{className:"nav nav-pills flex-column logout-margin",children:[(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Home"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Home",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Dashboard"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Dashboard",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Template"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Template",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/dashboard/templates.svg",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Template"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Certificate"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Certificate",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/dashboard/certificate.svg",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Certificate Issued"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Calendar"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Calendar",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Requests"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Requests",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Announcements"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Announcements",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,o.jsx)("li",{}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/My-profile"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/My-profile",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Settings"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Settings",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})})}),(0,o.jsx)("li",{className:'"nav-item text-dark" '.concat("/Department/Help"===e.pathname?"nav_active":""," "),children:(0,o.jsx)(l.rU,{to:"/Department/Help",className:"text-decoration-none",children:(0,o.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,o.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,o.jsx)("li",{className:"nav-item text-dark",onClick:async e=>{e.preventDefault();let s=await localStorage.getItem("myot_admin_id"),{data:i}=await(0,d.HS)(s);console.log(i),c().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),localStorage.removeItem("myot_admin_id"),localStorage.removeItem("user_id"),localStorage.removeItem("token-company"),a("/Login")},children:(0,o.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",href:"/",children:[(0,o.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon",alt:""}),(0,o.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,o.jsx)("div",{style:{width:"14rem"},className:"dropdown position-fixed bottom-0 bg-white",children:(0,o.jsx)(m.Z,{})})]})})}}}]);
//# sourceMappingURL=1619.104d1fbd.chunk.js.map