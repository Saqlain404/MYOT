"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[3701],{5839:(e,a,r)=>{r.d(a,{$g:()=>m,AA:()=>h,Jx:()=>p,Tk:()=>f,WZ:()=>g,Z7:()=>u,cA:()=>d,gF:()=>i,qD:()=>l});var o=r(42611),s=r(29655),t=r(2477),n=r(21830),c=r.n(n);async function m(e){try{const{data:c,headers:m}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/login"),e);var a,r,t,n;if(null===c||void 0===c||!c.error)return localStorage.setItem("myot_admin_id",null===c||void 0===c||null===(a=c.results)||void 0===a||null===(r=a.employee)||void 0===r?void 0:r._id),await localStorage.removeItem("token-company"),await localStorage.setItem("token-company",m["x-auth-token-company"]),await localStorage.setItem("user_id",null===c||void 0===c||null===(t=c.results)||void 0===t||null===(n=t.employee)||void 0===n?void 0:n._id),{data:c};s.Am.error(c.message)}catch(c){return c.response&&s.Am.error(c.response.data.message),{error:c}}}async function i(e){try{const{data:a}=await o.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/forgotPassword"),e);if(console.log(a),a.error?s.Am.error(a.message):await localStorage.removeItem("token-admin"),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function l(e){try{const{data:a}=await o.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/verifyOTP"),e);if(console.log(a),a.error?s.Am.error(a.message):s.Am.success(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function d(e){try{const{data:a}=await o.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/updatePassword"),e);if(console.log(a),a.error?s.Am.error(a.message):s.Am.success(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function p(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/signup  "),e);return null!==a&&void 0!==a&&a.error?(c().fire({toast:!0,icon:"error",position:"top-end",title:null===a||void 0===a?void 0:a.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:a}):{data:a}}catch(a){return a.response&&c().fire({toast:!0,icon:"error",position:"top-end",title:a.response.data.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{error:a}}}async function u(e){try{const{data:a,headers:r}=await t.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/login"),e);return console.log("login Data",a),a.error?(s.Am.error(a.message),{data:a}):(await localStorage.removeItem("token-main-admin"),await localStorage.setItem("token-main-admin",r["x-auth-token-admin"]),{data:a})}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function g(e){try{const{data:a}=await t.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/forgotPassword"),e);if(console.log(a),a.error?s.Am.error(a.message):await localStorage.removeItem("token-main-admin"),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function f(e){try{const{data:a}=await t.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/verifyOTP"),e);if(console.log(a),a.error&&s.Am.error(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function h(e){try{const{data:a}=await t.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/updatePassword"),e);if(console.log(a),a.error&&s.Am.error(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}},13701:(e,a,r)=>{r.r(a),r.d(a,{default:()=>d});var o=r(72791),s=r(11087),t=r(61134),n=r(57689),c=r(5839),m=r(21830),i=r.n(m),l=r(80184);const d=()=>{var e;const[a,r]=(0,o.useState)(!1),{register:m,handleSubmit:d,formState:{errors:p}}=(0,t.cI)({mode:"onChange"}),u=(0,n.s0)();(0,o.useEffect)((()=>{localStorage.getItem("token-main-admin")?u("/main/home"):u("/main/login")}),[]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container-fluid login-bg",children:(0,l.jsxs)("div",{className:"row flex-nowrap",children:[(0,l.jsxs)("div",{className:"col-4 login-form p-4",children:[(0,l.jsxs)("div",{className:"form-login mt-4",children:[(0,l.jsx)("img",{src:"/images/Myot-logo.png",className:"logo"}),(0,l.jsx)("h2",{className:"mb-3 fs-7 fw-bolder myot",children:"Myot"}),(0,l.jsx)("p",{className:"login-desc",children:"Please fill your detail to access your account."})]}),(0,l.jsxs)("form",{className:"form-login",onSubmit:d((async e=>{console.log(e);(await(0,c.Z7)(e)).data.error||(i().fire({toast:!0,icon:"success",position:"top-end",title:"Logged in successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),u("/main/home"))})),children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{for:"",className:"form-label",children:"Email Address"}),(0,l.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email","aria-describedby":"emailHelp",placeholder:"example@gmail.com",autoComplete:"off",...m("email",{required:"This field is required",pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address"}})}),(null===p||void 0===p?void 0:p.email)&&(0,l.jsx)("small",{className:"errorText mt-1",children:p.email.message})]}),(0,l.jsxs)("div",{className:"mb-1 position-relative",children:[(0,l.jsx)("label",{for:"",className:"form-label",children:"Password"}),(0,l.jsx)("input",{type:a?"text":"password",className:"form-control",name:"password",id:"password",autoComplete:"off",...m("password",{required:"* Please Enter Your Password",pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"* Minimun 8 characters, One Uppercase, One Lowercase & A Special Character Allowed"}})}),(0,l.jsx)("div",{className:"eye_container",onClick:()=>r(!a),children:a?(0,l.jsx)("img",{className:"eye_icon",src:"/images/icons/view.png",alt:""}):(0,l.jsx)("img",{className:"eye_icon",src:"/images/icons/hide.png",alt:""})}),p.password&&(0,l.jsx)("small",{className:"errorText ",children:null===(e=p.password)||void 0===e?void 0:e.message})]}),(0,l.jsxs)("div",{className:"d-flex justify-content-between remember",children:[(0,l.jsx)("div",{className:" mb-1"}),(0,l.jsx)(s.rU,{to:"/main/forgot-password",className:" fw-medium reset-password mb-1",children:"Forgot Password?"})]}),(0,l.jsx)("button",{className:"btn py-8 mb-1 mt-3 rounded-2",type:"submit",children:"Log In"})]})]}),(0,l.jsx)("div",{className:"col-8 m-auto d-flex justify-content-center ",children:(0,l.jsx)("img",{src:"/images/Login.png",alt:"",className:" text-center d-block img-fluid p-inherit"})})]})})})}}}]);
//# sourceMappingURL=3701.dc2c2938.chunk.js.map