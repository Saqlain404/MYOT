"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[5820,6477],{5839:(e,a,r)=>{r.d(a,{$g:()=>i,AA:()=>g,Jx:()=>p,Tk:()=>x,WZ:()=>h,Z7:()=>u,cA:()=>m,gF:()=>d,qD:()=>l});var t=r(42611),s=r(29655),o=r(2477),n=r(21830),c=r.n(n);async function i(e){try{const{data:c,headers:i}=await t.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/login"),e);var a,r,o,n;if(null===c||void 0===c||!c.error)return localStorage.setItem("myot_admin_id",null===c||void 0===c||null===(a=c.results)||void 0===a||null===(r=a.employee)||void 0===r?void 0:r._id),await localStorage.removeItem("token-company"),await localStorage.setItem("token-company",i["x-auth-token-company"]),await localStorage.setItem("user_id",null===c||void 0===c||null===(o=c.results)||void 0===o||null===(n=o.employee)||void 0===n?void 0:n._id),{data:c};s.Am.error(c.message)}catch(c){return c.response&&s.Am.error(c.response.data.message),{error:c}}}async function d(e){try{const{data:a}=await t.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/forgotPassword"),e);if(console.log(a),a.error?s.Am.error(a.message):await localStorage.removeItem("token-admin"),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function l(e){try{const{data:a}=await t.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/verifyOTP"),e);if(console.log(a),a.error?s.Am.error(a.message):s.Am.success(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function m(e){try{const{data:a}=await t.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/updatePassword"),e);if(console.log(a),a.error?s.Am.error(a.message):s.Am.success(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function p(e){try{const{data:a}=await t.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/signup  "),e);return null!==a&&void 0!==a&&a.error?(c().fire({toast:!0,icon:"error",position:"top-end",title:null===a||void 0===a?void 0:a.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:a}):{data:a}}catch(a){return a.response&&c().fire({toast:!0,icon:"error",position:"top-end",title:a.response.data.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{error:a}}}async function u(e){try{const{data:a,headers:r}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/login"),e);return console.log("login Data",a),a.error?(s.Am.error(a.message),{data:a}):(await localStorage.removeItem("token-main-admin"),await localStorage.setItem("token-main-admin",r["x-auth-token-admin"]),{data:a})}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function h(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/forgotPassword"),e);if(console.log(a),a.error?s.Am.error(a.message):await localStorage.removeItem("token-main-admin"),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function x(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/verifyOTP"),e);if(console.log(a),a.error&&s.Am.error(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function g(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/updatePassword"),e);if(console.log(a),a.error&&s.Am.error(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}},27494:(e,a,r)=>{r.r(a),r.d(a,{default:()=>i});r(72791);var t=r(61134),s=r(57689),o=(r(5839),r(29655)),n=r(78709),c=(r(76477),r(80184));const i=()=>{var e;const{register:a,handleSubmit:r}=(0,t.cI)({mode:"onChange"}),i=(0,s.s0)(),d=null===(e=(0,s.TH)().state)||void 0===e?void 0:e.email;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed",children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"",children:(0,c.jsx)("div",{className:"",children:(0,c.jsx)("div",{className:"reset-pass-body",children:(0,c.jsxs)("div",{className:"card-forgot",children:[(0,c.jsx)("img",{src:"/images/Ellipse-forgot-pass.png",alt:""}),(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("h2",{className:" mb-3 d-flex justify-content-center recover-text",children:"OTP Verification"}),(0,c.jsxs)("p",{className:"reset-pass-desc",children:["Enter OTP Code sent to ",d]})]}),(0,c.jsxs)("form",{onSubmit:r((async e=>{try{const a="".concat(e["otp-1"]).concat(e["otp-2"]).concat(e["otp-3"]).concat(e["otp-4"]),r=await(0,n.Xx)({email:d,otp:a});localStorage.setItem("email",d),console.log(d),console.log(e);let t=!0;r.data.error?o.Am.error("Incorrect OTP. Please try again."):setTimeout((()=>{t&&i("/Employee/reset-update-password")}),2e3)}catch(a){console.error("Error verifying OTP:",a)}})),children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"col-12 inputs d-flex pe-0 mb-4 mt-4",children:[(0,c.jsx)("div",{className:"col-3",children:(0,c.jsx)("input",{type:"text",name:"otp-1",placeholder:"",maxLength:"1",pattern:"^[0-9\\b]+$",id:"otp-1",...a("otp-1",{required:!0}),className:"otp-input"})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsx)("input",{type:"text",name:"otp-2",placeholder:"",pattern:"^[0-9\\b]+$",id:"otp-2",maxLength:"1",...a("otp-2",{required:!0}),className:"otp-input"})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsx)("input",{type:"text",name:"otp-3",placeholder:"",maxLength:"1",pattern:"^[0-9\\b]+$",id:"otp-3",...a("otp-3",{required:!0}),className:"otp-input"})}),(0,c.jsx)("div",{className:"col-3",children:(0,c.jsx)("input",{type:"text",name:"otp-4",placeholder:"",pattern:"^[0-9\\b]+$",maxLength:"1",id:"otp-4",...a("otp-4",{required:!0}),className:"otp-input"})})]}),(0,c.jsx)(o.Ix,{})]}),(0,c.jsx)("button",{className:"btn  py-8 mb-3 form-reset",type:"submit",children:"Reset Your Password"}),(0,c.jsxs)("div",{className:"d-flex justify-content-center mt-2",children:[(0,c.jsx)("p",{className:"not-recive-otp me-1",children:"Don\u2019t received OTP code?"}),(0,c.jsx)("p",{className:"resend-otp",children:"Resend Code"})]})]})]})})})})})})})})}},76477:(e,a,r)=>{r.r(a),r.d(a,{default:()=>c});var t=r(72791),s=r(58400),o=r(57689),n=r(80184);const c=()=>{const[e,a]=(0,t.useState)({password:"",confirmPassword:"",email:""}),[r,c]=(0,t.useState)({}),i=localStorage.getItem("email"),d=(0,o.s0)(),l=r=>{a({...e,[r.target.name]:r.target.value})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed",children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"reset-pass-body",children:(0,n.jsxs)("div",{className:"card-forgot",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)("h2",{className:" mb-3 d-flex justify-content-center recover-text",children:"Update Password"})}),(0,n.jsxs)("form",{onSubmit:async a=>{var r;if(a.preventDefault(),!(()=>{const a={};return(!e.password.trim()||e.password.length<6)&&(a.password="Please enter valid password "),e.confirmPassword!==e.password&&(a.confirmPassword="Passwords do not match"),c(a),0===Object.keys(a).length})())return;d("/Employee/Forgot-Success");const t={password:e.password,confirmPassword:e.confirmPassword,email:i};null!==(r=(await(0,s.qr)(t)).data)&&void 0!==r&&r.error||d("/Employee/Login")},children:[(0,n.jsxs)("div",{className:"col-12 m-2",children:[(0,n.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Password"}),(0,n.jsx)("input",{type:"text",value:e.password,placeholder:"Password",className:"col-12 password-update-input p-2",name:"password",onChange:l}),r.password&&(0,n.jsx)("p",{className:"text-danger",children:r.password})]}),(0,n.jsxs)("div",{className:"col-12 m-2 mt-4",children:[(0,n.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Confirm Password"}),(0,n.jsx)("input",{type:"text",value:e.confirmPassword,placeholder:"Confirm Password",className:"col-12 password-update-input p-2",name:"confirmPassword",onChange:l}),r.confirmPassword&&(0,n.jsx)("p",{className:"text-danger",children:r.confirmPassword})]}),(0,n.jsx)("div",{className:" d-flex justify-content-center",children:(0,n.jsx)("button",{className:"password-update-submit",to:"",type:"submit",children:"Submit"})}),(0,n.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,n.jsx)("p",{className:"not-recive-otp me-1",children:"Don\u2019t received OTP code?"}),(0,n.jsx)("p",{className:"resend-otp",children:"Resend Code"})]})]})]})})})})})})})})}}}]);
//# sourceMappingURL=5820.2d1ad00b.chunk.js.map