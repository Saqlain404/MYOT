"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[1975],{2611:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(5294);r.Z.defaults.headers.common["x-auth-token-company"]=localStorage.getItem("token-company"),r.Z.interceptors.request.use((async e=>(e.headers["x-auth-token-company"]=await localStorage.getItem("token-company"),e.headers["x-auth-token-admin"]=await localStorage.getItem("token-main-admin"),e))),r.Z.interceptors.response.use(null,(e=>{e.response&&e.response.status>=400&&e.response.status;return Promise.reject(e)}));const s={get:r.Z.get,post:r.Z.post,put:r.Z.put,delete:r.Z.delete}},5839:(e,a,t)=>{t.d(a,{$g:()=>i,AA:()=>y,Jx:()=>p,Tk:()=>h,WZ:()=>g,Z7:()=>u,cA:()=>d,gF:()=>m,qD:()=>l});var r=t(2611),s=t(9655),o=t(2477),n=t(1830),c=t.n(n);async function i(e){try{const{data:c,headers:i}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/login"),e);var a,t,o,n;if(null===c||void 0===c||!c.error)return localStorage.setItem("myot_admin_id",null===c||void 0===c||null===(a=c.results)||void 0===a||null===(t=a.employee)||void 0===t?void 0:t._id),await localStorage.removeItem("token-company"),await localStorage.setItem("token-company",i["x-auth-token-company"]),await localStorage.setItem("user_id",null===c||void 0===c||null===(o=c.results)||void 0===o||null===(n=o.employee)||void 0===n?void 0:n._id),{data:c};s.Am.error(c.message)}catch(c){return c.response&&s.Am.error(c.response.data.message),{error:c}}}async function m(e){try{const{data:a}=await r.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/forgotPassword"),e);if(console.log(a),a.error?s.Am.error(a.message):await localStorage.removeItem("token-admin"),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function l(e){try{const{data:a}=await r.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/verifyOTP"),e);if(console.log(a),a.error?s.Am.error(a.message):s.Am.success(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function d(e){try{const{data:a}=await r.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/updatePassword"),e);if(console.log(a),a.error?s.Am.error(a.message):s.Am.success(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function p(e){try{const{data:a}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/signup  "),e);return null!==a&&void 0!==a&&a.error?(c().fire({toast:!0,icon:"error",position:"top-end",title:null===a||void 0===a?void 0:a.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:a}):{data:a}}catch(a){return a.response&&c().fire({toast:!0,icon:"error",position:"top-end",title:a.response.data.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{error:a}}}async function u(e){try{const{data:a,headers:t}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/login"),e);return console.log("login Data",a),a.error?(s.Am.error(a.message),{data:a}):(await localStorage.removeItem("token-main-admin"),await localStorage.setItem("token-main-admin",t["x-auth-token-admin"]),{data:a})}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function g(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/forgotPassword"),e);if(console.log(a),a.error?s.Am.error(a.message):await localStorage.removeItem("token-main-admin"),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function h(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/verifyOTP"),e);if(console.log(a),a.error&&s.Am.error(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}async function y(e){try{const{data:a}=await o.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/updatePassword"),e);if(console.log(a),a.error&&s.Am.error(a.message),!a.error)return{data:a}}catch(a){return a.response&&s.Am.error(a.response.data.message),{error:a}}}},2477:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(5294);r.Z.defaults.headers.common["x-auth-token-admin"]=localStorage.getItem("token-main-admin"),r.Z.interceptors.request.use((async e=>(e.headers["x-auth-token-admin"]=await localStorage.getItem("token-main-admin"),e))),r.Z.interceptors.response.use(null,(e=>{e.response&&e.response.status>=400&&e.response.status;return Promise.reject(e)}));const s={get:r.Z.get,post:r.Z.post,put:r.Z.put,delete:r.Z.delete}},1975:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var r=t(2791),s=t(7689),o=t(5839),n=t(1830),c=t.n(n),i=t(1161),m=t(1632),l=t(9806),d=t(184);const p=()=>{const[e,a]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[p,u]=(0,r.useState)(!1),[g,h]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[f,x]=(0,r.useState)(!1),v=(0,s.s0)(),j=(0,s.TH)(),{state:Z}=j,k=e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed",children:(0,d.jsx)("div",{children:(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"",children:(0,d.jsx)("div",{className:"",children:(0,d.jsx)("div",{className:"reset-pass-body",children:(0,d.jsxs)("div",{className:"card-forgot",children:[(0,d.jsx)("img",{src:"/images/Ellipse-forgot-pass.png",alt:""}),(0,d.jsx)("div",{className:"",children:(0,d.jsx)("h2",{className:" mb-3 d-flex justify-content-center recover-text",children:"Update Password"})}),(0,d.jsxs)("form",{onSubmit:async r=>{if(x(!0),r.preventDefault(),!k(e))return u(!0),x(!1),!1;if(e!==t)return c().fire({toast:!0,icon:"error",position:"top-end",title:"Password must be same",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),x(!1),!1;try{let{data:r}=await(0,o.cA)({email:Z.email,password:e,confirmPassword:t});console.log(r),!r||null!==r&&void 0!==r&&r.error||(x(!1),n(""),a(""),v("/Forgot-success"))}catch(s){console.log(s)}finally{x(!1)}},children:[(0,d.jsxs)("div",{className:"col-12 input_icon_container",children:[(0,d.jsx)("div",{className:k(e)?"input_icons2":"text-danger input_icons input_icons2",children:(0,d.jsx)(l.G,{icon:m.byT})}),(0,d.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Password"}),(0,d.jsx)("input",{type:g?"text":"password",value:e,placeholder:"Password",className:"col-12 password-update-input p-2 rounded w-100 text-dark",name:"password",onChange:e=>{a(e.target.value),u(!1)}}),(0,d.jsx)("div",{className:"eye_container eye_container2 mt-1",onClick:()=>h(!g),children:g?(0,d.jsx)("img",{className:"eye_icon",src:"/images/icons/view.png",alt:""}):(0,d.jsx)("img",{className:"eye_icon",src:"/images/icons/hide.png",alt:""})}),p&&(0,d.jsx)("p",{className:"text-danger",children:"* Password must contain at least 1 special character, 1 uppercase letter, 1 lowercase letter, and be at least 8 characters long"})]}),(0,d.jsxs)("div",{className:"col-12 mt-4 input_icon_container",children:[(0,d.jsx)("div",{className:k(e)&&e===t?"input_icons2":"text-danger input_icons input_icons2",children:(0,d.jsx)(l.G,{icon:m.byT})}),(0,d.jsx)("p",{className:" d-flex justify-content-start profile-card-title",children:"Confirm Password"}),(0,d.jsx)("input",{type:y?"text":"password",value:t,placeholder:"Confirm Password",className:"col-12 password-update-input p-2 rounded w-100 text-dark",name:"confirmPassword",onChange:e=>n(e.target.value)}),(0,d.jsx)("div",{className:"eye_container eye_container2 mt-1",onClick:()=>w(!y),children:y?(0,d.jsx)("img",{className:"eye_icon",src:"/images/icons/view.png",alt:""}):(0,d.jsx)("img",{className:"eye_icon",src:"/images/icons/hide.png",alt:""})})]}),(0,d.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:(0,d.jsx)(i.Z,{loading:f,appearance:"primary",className:"btn py-8 my-3 form-reset",type:"submit",disabled:!k(e)||e!==t,children:"Submit"})})]})]})})})})})})})})}}}]);
//# sourceMappingURL=1975.583f7f6f.chunk.js.map