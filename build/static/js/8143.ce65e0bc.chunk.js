"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[8143],{54675:(e,a,s)=>{s.d(a,{Cl:()=>n,FY:()=>u,Gp:()=>x,HW:()=>v,Hl:()=>h,Ot:()=>c,Ov:()=>g,Pt:()=>d,TJ:()=>o,W5:()=>t,_d:()=>m,i1:()=>l,zt:()=>p});var r=s(29655),i=s(42611);async function t(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/profile-details/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function n(e,a){try{const{data:s}=await i.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/update-profile/").concat(e),a);if(null===s||void 0===s||!s.error)return{data:s};throw s.error}catch(n){var s,t;return r.Am.error((null===n||void 0===n||null===(s=n.response)||void 0===s||null===(t=s.data)||void 0===t?void 0:t.message)||"An error occurred while fetching signatory profile details."),{error:n}}}async function l(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/home-templete-count/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function o(e){try{const{data:a}=await i.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/templete-list/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function c(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/requests-list/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function d(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/count-templete/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function m(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/awaiting-templete/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function g(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/complete-templete/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function h(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/ticket-list/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function p(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/onGoing-ticket/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function u(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/signature-list/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function x(e){try{const{data:a}=await i.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/add-signature"),e);if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}async function v(e){try{const{data:a}=await i.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/signatory/total-ticket-count/").concat(e));if(null===a||void 0===a||!a.error)return{data:a};throw a.error}catch(t){var a,s;return r.Am.error(null===t||void 0===t||null===(a=t.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.message),{error:t}}}},48143:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var r=s(72791),i=s(39040),t=(s(54347),s(11087)),n=s(82),l=s(54675),o=s(72426),c=s.n(o),d=(s(29655),s(21830)),m=s.n(d),g=s(80184);const h=()=>{const[e,a]=(0,r.useState)([]),[i,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(),[c,d]=(0,r.useState)();(0,r.useEffect)((()=>{h()}),[]);const h=async()=>{let e=localStorage.getItem("myot_admin_id");o(e);let{data:s}=await(0,l.FY)(e);var r;(console.log(s),null!==s&&void 0!==s&&s.error)||a(null===s||void 0===s||null===(r=s.results)||void 0===r?void 0:r.signatureList)};return(0,g.jsx)("div",{className:"container px-4 text-center min-vh-100 ",children:(0,g.jsx)("div",{className:"row rounded",children:(0,g.jsx)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"settings-txt fw-bold",children:"Signature Version"}),(0,g.jsx)("div",{className:"row",children:e&&(null===e||void 0===e?void 0:e.map((e=>(0,g.jsx)("div",{className:"col-3 my-2 signature_logos",children:(0,g.jsx)("img",{className:"w-100 border border-1 border-secondary rounded h-100 object-fit-contain",src:null===e||void 0===e?void 0:e.signature,alt:"logo"})}))))}),(0,g.jsx)("div",{className:"my-4",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"settings-txt my-3",children:"Upload Signature"}),(0,g.jsxs)("label",{htmlFor:"logo",className:"w-100",children:[(0,g.jsx)("input",{type:"file",defaultValue:"",id:"logo",name:"logo",className:"d-none",onChange:e=>(async(e,a)=>{t({...i,[a]:e.target.files[0]});const s=e.target.files[0],r=URL.createObjectURL(s);d(r)})(e,"logo")}),(0,g.jsxs)("div",{className:"dashed_border w-100 py-5 position-relative",children:[c&&(0,g.jsxs)("div",{className:"position-absolute top-0 end-0",children:[(0,g.jsx)("p",{children:"Selected Image"}),(0,g.jsx)("img",{className:"w_100_h_100",src:c})]}),(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:s(71498),alt:""})}),(0,g.jsx)("p",{className:"py-3",children:"Drag and drop logo here, or click add image"}),null!==i&&void 0!==i&&i.logo&&null!==i&&void 0!==i&&i.logo?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("button",{onClick:async()=>{if(null===i||void 0===i||!i.logo)return m().fire({toast:!0,icon:"error",position:"top-end",title:"Please select an image",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;const e=new FormData;e.append("signature",null===i||void 0===i?void 0:i.logo),e.append("creator_Id",n);let{data:a}=await(0,l.Gp)(e);console.log(a),null!==a&&void 0!==a&&a.error||(m().fire({toast:!0,icon:"success",position:"top-end",title:"Signature added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),document.getElementById("reset").click(),t([]),d(""),h())},className:"blue_btn",children:"Upload Image"})}):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("label",{htmlFor:"logo",className:"text-center cursor_pointer blue_btn",children:"Select Image"})}),(0,g.jsx)("button",{id:"reset",type:"reset",className:"d-none",children:"reset"})]})]})]})})]})})})})},p=()=>{const[e,a]=(0,r.useState)(),[s,o]=(0,r.useState)("Profile");(0,r.useEffect)((()=>{d()}),[]);const d=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,l.W5)(e);var r;(console.log(s),null!==s&&void 0!==s&&s.error)||a(null===s||void 0===s||null===(r=s.results)||void 0===r?void 0:r.singnatory)};return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-2 sidebar",children:(0,g.jsx)(n.Z,{})}),(0,g.jsxs)("div",{className:"col-7 middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,g.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,g.jsxs)("nav",{className:"row header bg-white  ",children:[(0,g.jsx)("ul",{className:"col align-items-center mt-3",children:(0,g.jsxs)("a",{className:"nav-link fw-bold",children:[" My Profile / ",s]})}),(0,g.jsxs)("div",{className:"col-7 d-flex align-items-center  justify-content-end",children:[(0,g.jsx)("form",{className:"",role:"search",children:(0,g.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,g.jsxs)("div",{className:"",children:[(0,g.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,g.jsx)(t.rU,{to:"/Signatory/Chat",children:(0,g.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,g.jsx)(t.rU,{to:"/Admin/Chat",children:(0,g.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,g.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("ul",{class:"nav nav-tabs mb-3",id:"ex1",role:"tablist",children:[(0,g.jsx)("li",{class:"nav-item",role:"presentation",children:(0,g.jsx)("a",{class:"nav-link active bg-transparent",id:"ex1-tab-1","data-bs-toggle":"tab",href:"#ex1-tabs-1",role:"tab","aria-controls":"ex1-tabs-1","aria-selected":"true",onClick:()=>o("Profile"),children:"Profile"})}),(0,g.jsx)("li",{class:"nav-item",role:"presentation",children:(0,g.jsx)("a",{class:"nav-link bg-transparent",id:"ex1-tab-2","data-bs-toggle":"tab",href:"#ex1-tabs-2",role:"tab","aria-controls":"ex1-tabs-2","aria-selected":"false",onClick:()=>o("Signature"),children:"Signature"})})]}),(0,g.jsxs)("div",{class:"tab-content",id:"ex1-content",children:[(0,g.jsx)("div",{class:"tab-pane fade show active",id:"ex1-tabs-1",role:"tabpanel","aria-labelledby":"ex1-tab-1",children:(0,g.jsx)("div",{className:"container px-4 text-center min-vh-100 ",children:(0,g.jsxs)("div",{className:"row rounded",children:[(0,g.jsxs)("div",{className:" d-flex justify-content-between",children:[(0,g.jsx)("p",{className:"profile-txt m-2",children:"Profile"}),(0,g.jsx)(t.rU,{to:"/Signatory/Profile/Edit-profile",className:"text-decoration-none",state:e,children:(0,g.jsx)("button",{className:"profile-edit-btn",children:"Edit"})})]}),(0,g.jsx)("div",{className:" d-flex justify-content-start mb-4",children:(0,g.jsx)("img",{className:"w_100_h_100",src:null!==e&&void 0!==e&&e.profile_Pic?null===e||void 0===e?void 0:e.profile_Pic:"/images/icons/user.jpg",alt:""})}),(0,g.jsxs)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:[(0,g.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Details"}),(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Full Name"}),(0,g.jsx)("p",{className:"profile-data text-capitalize",children:null===e||void 0===e?void 0:e.name})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Email"}),(0,g.jsx)("p",{className:"profile-data",children:null===e||void 0===e?void 0:e.email})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Phone Number"}),(0,g.jsxs)("p",{className:"profile-data",children:["+97 ",null===e||void 0===e?void 0:e.mobileNumber]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Creation Date"}),(0,g.jsx)("p",{className:"profile-data",children:c()(null===e||void 0===e?void 0:e.DOB).format("L")})]})]})]}),(0,g.jsxs)("div",{className:"bg-white rounded mb-4 p-4 pb-2",children:[(0,g.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Company Information"}),(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Company Name"}),(0,g.jsx)("p",{className:"profile-data text-capitalize",children:null===e||void 0===e?void 0:e.companyName})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Company Email"}),(0,g.jsx)("p",{className:"profile-data",children:null===e||void 0===e?void 0:e.email})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Phone Number"}),(0,g.jsxs)("p",{className:"profile-data",children:["+97 ",null===e||void 0===e?void 0:e.mobileNumber]})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"profile-info",children:"Address"}),(0,g.jsx)("p",{className:"profile-data text-capitalize",children:null===e||void 0===e?void 0:e.address})]})]})]})]})})}),(0,g.jsx)("div",{class:"tab-pane fade",id:"ex1-tabs-2",role:"tabpanel","aria-labelledby":"ex1-tab-2",children:(0,g.jsx)(h,{})})]})]}),(0,g.jsxs)("div",{className:"footer bg-white",children:[(0,g.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,g.jsxs)("div",{className:"d-flex ",children:[(0,g.jsx)("p",{className:"ms-3",children:"About"}),(0,g.jsx)("p",{className:"ms-3",children:"Support"}),(0,g.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,g.jsx)("div",{className:"col",children:(0,g.jsx)(i.Z,{})})]})})})}},82:(e,a,s)=>{s.d(a,{Z:()=>d});s(72791);var r=s(57689),i=s(11087),t=s(28113),n=(s(29655),s(31967)),l=s(21830),o=s.n(l),c=s(80184);const d=()=>{const e=(0,r.TH)(),a=(0,r.s0)();return(0,c.jsx)("div",{className:"container-fluid  sidebar",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"mb-4 sticky-top bg-white",children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,c.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,c.jsxs)("defs",{children:[(0,c.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,c.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,c.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,c.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,c.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,c.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,c.jsx)("div",{className:"col-auto col-mg-3 min-vh-100 mb-4",children:(0,c.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Home"===e.pathname?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Home",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Dashboard"===e.pathname?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Dashboard",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Awaiting-sig/)?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Awaiting-sig",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/awaiting-sig.svg",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Awaiting Sig."})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/History-log-approved"===e.pathname?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/History-log-approved",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/history-log.svg",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"History Log"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Calendar"===e.pathname?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Calendar",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/user.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Requests"===e.pathname?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Requests",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/request.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Requests"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Announcements"===e.pathname?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Announcements",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/announcement.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn ",children:"Announcements"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Profile/)?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Profile/My-Profile",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat("/Signatory/Settings"===e.pathname?"nav_active":""),children:(0,c.jsxs)(i.rU,{to:"/Signatory/Settings",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})}),(0,c.jsx)("li",{className:"nav-item text-dark ".concat(e.pathname.match(/^\/Signatory\/Help/)?"nav_active":""),children:(0,c.jsx)(i.rU,{to:"/Signatory/Help",className:"text-decoration-none",children:(0,c.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})})}),(0,c.jsx)("li",{className:"nav-item text-dark",onClick:async()=>{let e=localStorage.getItem("myot_admin_id");const{data:s}=await(0,t.HS)(e);console.log(s),!s||null!==s&&void 0!==s&&s.error||(localStorage.removeItem("myot_admin_id"),o().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successful",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),a("/Login"))},children:(0,c.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle cursor_pointer","aria-current":"page",children:[(0,c.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,c.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,c.jsx)("div",{style:{width:"14rem"},class:"dropdown position-fixed bottom-0 bg-white",children:(0,c.jsx)(n.Z,{})})]})})}},71498:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgB7VbLUeNAEH2t3dorzgBtBJjr1uISEaxgA8BEgIkAEwEmA4jAIgK7gKK4AREgMvCZzzSvZZmSYIxcSL7xDpr/PHXP654BvtEw5H1HFGvLAQcqaKMOBOmTw+F1Imm5u0wWOsGI1RDNIA0U6+NEJrOOn8VRpWVvZIpjfif4GkKasmMlvdVn2fMS0rrQTKY7Ty6G0kMNdGKdkHSPe60V+wPfZHF4QH14vROgAiaiv7FGaAhBBZmJ6D6gkDa2dIRlE76Qk0XL6jzbyKzFMgl/AGMWqdWp4HFR3kshJIHF0eYzY4mq3fTNsfPtbOnNRqwx6hLmmFwlcusb6GzrQTBNFG0RDK1dsVc5Dj9s+F/3nEOfgrl9UuzO0pSd5QsJ6OeotEA5d1vbTGn78/b0WqgB1jJVOgzYbJlgfgnMbb0/sbap3BtBTqY4pdt/W2lNUcScO+Ieq1jUQltUaJo7w4xYcFRcoIr9i0QGebPL7JJSzll65B5dLGphjtRRMOdDWbcErFPFlsYKZBnOE+mbwJAre2FC5r/ESC4TGVvb1GoqNYts7JFks7H3MIGZsjH1zAf4Xepw54u53KIBKmA/SPeewXOnLhIWjWIeYe0URhVXq5TKuuPMyO4xxtNKjWtqhWfdzZnTuYQ0t88b+h9mshbURfauKXb4HlHZs4B/uIoaMG+ZAU0k/G98ilf78M7JBr/w9wAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=8143.ce65e0bc.chunk.js.map