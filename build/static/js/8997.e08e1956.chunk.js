"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[8997],{38997:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var l=a(72791),i=a(39040),d=a(11087),t=a(89542),o=a(58400),n=a(81161),c=a(80184);const r=()=>{const[e,s]=(0,l.useState)(),[a,r]=(0,l.useState)({logo:null});console.log(a);const m=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id"),g=async()=>{var e,a;const l=await(0,o.YR)(m);s(null===l||void 0===l||null===(e=l[0])||void 0===e||null===(a=e.results)||void 0===a?void 0:a.logoList)};return(0,l.useEffect)((()=>{g()}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-2 sidebar",children:(0,c.jsx)(t.Z,{})}),(0,c.jsxs)("div",{className:"col-7 middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,c.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,c.jsxs)("nav",{className:"row header bg-white  ",children:[(0,c.jsx)("ul",{className:"col align-items-center mt-3",children:(0,c.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,c.jsx)("a",{className:"nav-link fw-bold ms-2",children:"Settings"})})}),(0,c.jsx)("div",{className:"col-7 d-flex align-items-center  justify-content-end",children:(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,c.jsx)(d.rU,{to:"/Approver/Chat",children:(0,c.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,c.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})})]})}),(0,c.jsx)("form",{onSubmit:async e=>{var s;e.preventDefault(),console.log("Form submitted!");const l=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id"),i=new FormData;i.append("logo",a.logo),i.append("creator_Id",l);const d=await(0,o.X$)(i);r(null),g(),null!==(s=d.data)&&void 0!==s&&s.error||console.log(d)},children:(0,c.jsx)("div",{className:"container px-4 text-center min-vh-100 ",children:(0,c.jsxs)("div",{className:"row rounded",children:[(0,c.jsxs)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:[(0,c.jsx)("div",{className:"d-flex",children:(0,c.jsx)("p",{className:"td-text border-bottom mt-2 me-3",children:"Business Assets"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"d-flex mt-2 flex-wrap",children:null===e||void 0===e?void 0:e.map((e=>(0,c.jsx)("img",{className:"settingLogo mb-3 me-2 mt-1",alt:"logo",src:null===e||void 0===e?void 0:e.logo})))}),(0,c.jsx)("p",{className:"settings-txt mt-3 mb-2",children:"Upload Logo"}),(0,c.jsxs)("div",{className:"bg-body-tertiary rounded  p-4 mb-2 import-img-card",children:[(0,c.jsx)("img",{src:"/images/dashboard/import-img.svg",alt:""}),(0,c.jsx)("p",{className:"th-text m-1",children:"Drag and drop logo here, or click add image"}),(0,c.jsx)("label",{htmlFor:"logo",className:"add-img-btn cursor_pointer  mt-4",children:"Add Image"}),(0,c.jsx)("input",{type:"file",style:{display:"none"},id:"logo",name:"logo",accept:"image/*",onChange:e=>{r({...a,logo:e.target.files[0]})}})]})]})]}),(0,c.jsx)("div",{className:"bg-white rounded mb-4 pb-2",children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"d-flex justify-content-end",children:(0,c.jsx)(n.Z,{appearance:"primary",type:"submit",className:"  notify-admin-btn btn mt-4 m-2",disabled:!(null!==a&&void 0!==a&&a.logo),children:"Save"})})})})]})})}),(0,c.jsxs)("div",{className:"footer bg-white",children:[(0,c.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,c.jsxs)("div",{className:"d-flex ",children:[(0,c.jsx)("p",{className:"ms-3",children:"About"}),(0,c.jsx)("p",{className:"ms-3",children:"Support"}),(0,c.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,c.jsx)("div",{className:"col",children:(0,c.jsx)(i.Z,{})})]})})})}}}]);
//# sourceMappingURL=8997.e08e1956.chunk.js.map