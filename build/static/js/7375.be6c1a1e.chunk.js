"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[7375],{97375:(e,s,l)=>{l.r(s),l.d(s,{default:()=>h});var i=l(72791),a=l(39040),d=l(54347),n=l(11087),c=l(28113),r=l(72426),o=l.n(r),t=l(81161),m=l(80184);const h=()=>{var e,s,l,r;const[h,p]=(0,i.useState)();(0,i.useEffect)((()=>{x()}),[]);const x=async()=>{let e=localStorage.getItem("myot_admin_id");const{data:s}=await(0,c.FG)(e);var l;null!==s&&void 0!==s&&s.error||p(null===s||void 0===s||null===(l=s.results)||void 0===l?void 0:l.employee)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-2 sidebar",children:(0,m.jsx)(d.Z,{})}),(0,m.jsxs)("div",{className:"col-7 middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,m.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,m.jsxs)("nav",{className:"row header bg-white  ",children:[(0,m.jsx)("ul",{className:"col align-items-center mt-3",children:(0,m.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,m.jsx)("a",{className:"nav-link ms-2",href:"app-email.html",children:"My Profile / View"})})}),(0,m.jsxs)("div",{className:"col-7 d-flex align-items-center  justify-content-end",children:[(0,m.jsx)("form",{className:"",role:"search",children:(0,m.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,m.jsx)(n.rU,{to:"/Admin/Chat",children:(0,m.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,m.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,m.jsx)("div",{className:"container px-4 text-center min-vh-100 ",children:(0,m.jsxs)("div",{className:"row rounded",children:[(0,m.jsxs)("div",{className:" d-flex justify-content-between",children:[(0,m.jsx)("p",{className:"profile-txt m-2",children:"Profile"}),(0,m.jsx)(n.rU,{to:"/Admin/Profile/Edit-profile",state:h,className:"text-decoration-none",children:(0,m.jsx)(t.Z,{style:{width:"70px"},appearance:"primary",className:"btn mb-3 me-2 rounded-2",type:"submit",children:"Edit"})})]}),(0,m.jsx)("div",{className:" d-flex justify-content-start mb-4",children:(0,m.jsx)("img",{style:{width:"100px",height:"100px",borderRadius:"50%",objectFit:"cover"},src:(null===h||void 0===h?void 0:h.profile_Pic)&&h.profile_Pic||"/images/icons/user.jpg"})}),(0,m.jsxs)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:[(0,m.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Details"}),(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Full Name"}),(0,m.jsx)("p",{className:"profile-data text-capitalize",children:null===h||void 0===h?void 0:h.name})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Email"}),(0,m.jsx)("p",{className:"profile-data",children:null===h||void 0===h?void 0:h.email})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Phone Number"}),(0,m.jsxs)("p",{className:"profile-data",children:["+97 ",null===h||void 0===h?void 0:h.mobileNumber]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Creation Date"}),(0,m.jsx)("p",{className:"profile-data",children:o()(null===h||void 0===h?void 0:h.createdAt).format("L")})]})]})]}),(0,m.jsxs)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:[(0,m.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Company Information"}),(0,m.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Company Name"}),(0,m.jsx)("p",{className:"profile-data text-capitalize",children:null===h||void 0===h||null===(e=h.company_Id)||void 0===e?void 0:e.name})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Company Email"}),(0,m.jsx)("p",{className:"profile-data",children:null===h||void 0===h||null===(s=h.company_Id)||void 0===s?void 0:s.email})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Phone Number"}),(0,m.jsxs)("p",{className:"profile-data",children:["+97 ",null===h||void 0===h||null===(l=h.company_Id)||void 0===l?void 0:l.phone_number]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"profile-info",children:"Address"}),(0,m.jsx)("p",{className:"profile-data text-capitalize",children:null===h||void 0===h||null===(r=h.company_Id)||void 0===r?void 0:r.address})]})]})]})]})}),(0,m.jsxs)("div",{className:"footer bg-white",children:[(0,m.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,m.jsxs)("div",{className:"d-flex ",children:[(0,m.jsx)("p",{className:"ms-3",children:"About"}),(0,m.jsx)("p",{className:"ms-3",children:"Support"}),(0,m.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,m.jsx)("div",{className:"col",children:(0,m.jsx)(a.Z,{})})]})})})}}}]);
//# sourceMappingURL=7375.be6c1a1e.chunk.js.map