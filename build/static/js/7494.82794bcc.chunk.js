"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[7494],{2611:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5294);a.Z.defaults.headers.common["x-auth-token-company"]=localStorage.getItem("token-company"),a.Z.interceptors.request.use((async e=>(e.headers["x-auth-token-company"]=await localStorage.getItem("token-company"),e.headers["x-auth-token-admin"]=await localStorage.getItem("token-main-admin"),e))),a.Z.interceptors.response.use(null,(e=>{e.response&&e.response.status>=400&&e.response.status;return Promise.reject(e)}));const o={get:a.Z.get,post:a.Z.post,put:a.Z.put,delete:a.Z.delete}},5839:(e,t,r)=>{r.d(t,{$g:()=>i,AA:()=>h,Jx:()=>d,Tk:()=>g,WZ:()=>f,Z7:()=>p,cA:()=>m,gF:()=>l,qD:()=>u});var a=r(2611),o=r(9655),n=r(2477),s=r(1830),c=r.n(s);async function i(e){try{const{data:c,headers:i}=await a.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/login"),e);var t,r,n,s;if(null===c||void 0===c||!c.error)return localStorage.setItem("myot_admin_id",null===c||void 0===c||null===(t=c.results)||void 0===t||null===(r=t.employee)||void 0===r?void 0:r._id),await localStorage.removeItem("token-company"),await localStorage.setItem("token-company",i["x-auth-token-company"]),await localStorage.setItem("user_id",null===c||void 0===c||null===(n=c.results)||void 0===n||null===(s=n.employee)||void 0===s?void 0:s._id),{data:c};o.Am.error(c.message)}catch(c){return c.response&&o.Am.error(c.response.data.message),{error:c}}}async function l(e){try{const{data:t}=await a.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/forgotPassword"),e);if(console.log(t),t.error?o.Am.error(t.message):await localStorage.removeItem("token-admin"),!t.error)return{data:t}}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}async function u(e){try{const{data:t}=await a.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/verifyOTP"),e);if(console.log(t),t.error?o.Am.error(t.message):o.Am.success(t.message),!t.error)return{data:t}}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}async function m(e){try{const{data:t}=await a.Z.put("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/updatePassword"),e);if(console.log(t),t.error?o.Am.error(t.message):o.Am.success(t.message),!t.error)return{data:t}}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}async function d(e){try{const{data:t}=await a.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/signup  "),e);return null!==t&&void 0!==t&&t.error?(c().fire({toast:!0,icon:"error",position:"top-end",title:null===t||void 0===t?void 0:t.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:t}):{data:t}}catch(t){return t.response&&c().fire({toast:!0,icon:"error",position:"top-end",title:t.response.data.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{error:t}}}async function p(e){try{const{data:t,headers:r}=await n.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/login"),e);return console.log("login Data",t),t.error?(o.Am.error(t.message),{data:t}):(await localStorage.removeItem("token-main-admin"),await localStorage.setItem("token-main-admin",r["x-auth-token-admin"]),{data:t})}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}async function f(e){try{const{data:t}=await n.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/forgotPassword"),e);if(console.log(t),t.error?o.Am.error(t.message):await localStorage.removeItem("token-main-admin"),!t.error)return{data:t}}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}async function g(e){try{const{data:t}=await n.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/verifyOTP"),e);if(console.log(t),t.error&&o.Am.error(t.message),!t.error)return{data:t}}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}async function h(e){try{const{data:t}=await n.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/admin/updatePassword"),e);if(console.log(t),t.error&&o.Am.error(t.message),!t.error)return{data:t}}catch(t){return t.response&&o.Am.error(t.response.data.message),{error:t}}}},2477:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5294);a.Z.defaults.headers.common["x-auth-token-admin"]=localStorage.getItem("token-main-admin"),a.Z.interceptors.request.use((async e=>(e.headers["x-auth-token-admin"]=await localStorage.getItem("token-main-admin"),e))),a.Z.interceptors.response.use(null,(e=>{e.response&&e.response.status>=400&&e.response.status;return Promise.reject(e)}));const o={get:a.Z.get,post:a.Z.post,put:a.Z.put,delete:a.Z.delete}},4872:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(2791),o=r(7689),n=r(5839),s=r(6645),c=r(1830),i=r.n(c),l=r(184);const u=()=>{const[e,t]=(0,a.useState)("EmailForm"),[r,c]=(0,a.useState)(""),[u,m]=(0,a.useState)(""),d=(0,o.s0)(),p=async e=>{e.preventDefault();try{let{data:e}=await(0,n.WZ)({email:r});console.log(e),e.error||(i().fire({toast:!0,icon:"success",position:"top-end",title:"OTP sent successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),t("OTPform"))}catch(a){console.log(a)}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed",children:(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"",children:(0,l.jsx)("div",{className:"",children:(0,l.jsx)("div",{className:"reset-pass-body",children:(0,l.jsxs)("div",{className:"card-forgot",children:[(0,l.jsx)("img",{src:"/images/Ellipse-forgot-pass.png",alt:""}),"EmailForm"===e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h2",{className:" mb-3 d-flex justify-content-center recover-text",children:"Recover"}),(0,l.jsx)("p",{className:"reset-pass-desc",children:"No worries, we\u2019ll send you reset instructions."})]}),(0,l.jsxs)("form",{children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),(0,l.jsx)("input",{type:"email",placeholder:"Enter your email address",className:"form-control w-100",required:!0,value:r,onChange:e=>c(e.target.value)})]}),(0,l.jsx)("button",{className:"btn py-8 mb-3 form-reset",type:"submit",onClick:e=>p(e),children:"Submit"})]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h2",{className:" mb-3 d-flex justify-content-center recover-text",children:"OTP Verification"}),(0,l.jsxs)("p",{className:"reset-pass-desc",children:["Enter OTP Code sent to ",r]})]}),(0,l.jsxs)("form",{onSubmit:e=>(async e=>{if(e.preventDefault(),u.length<4)return i().fire({toast:!0,icon:"warning",position:"top-end",title:"OTP must be 4 digits",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;try{let{data:e}=await(0,n.Tk)({email:r,otp:u});e.error||d("/main/update-password",{state:{email:r}})}catch(t){console.log(t)}})(e),children:[(0,l.jsx)("div",{className:"otp-input-box",children:(0,l.jsx)(s.Z,{inputType:"tel",value:u,onChange:m,numInputs:4,onChangeRegex:/^([0-9]{0,})$/,renderSeparator:(0,l.jsx)("span",{children:"\xa0\xa0\xa0\xa0"}),isInputNum:!0,inputStyle:"otp-field__input",containerStyle:"form-group",renderInput:e=>(0,l.jsx)("input",{...e})})}),(0,l.jsx)("button",{className:"btn py-8 my-3 form-reset",type:"submit",children:"Verify OTP"})]}),(0,l.jsxs)("p",{children:["Don\u2019t received OTP code?"," ",(0,l.jsx)("a",{type:"button",onClick:e=>p(e),className:"text-primary text-decoration-none",children:"Resend Code"})]})]})]})})})})})})})})}},6645:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(2791),o=function(e){return"object"===typeof e&&null!==e},n=function(e){var t=e.value,r=void 0===t?"":t,n=e.numInputs,s=void 0===n?4:n,c=e.onChange,i=e.onPaste,l=e.renderInput,u=e.shouldAutoFocus,m=void 0!==u&&u,d=e.inputType,p=void 0===d?"text":d,f=e.renderSeparator,g=e.placeholder,h=e.containerStyle,v=e.inputStyle,y=e.skipDefaultStyles,w=void 0!==y&&y,x=a.useState(0),j=x[0],b=x[1],k=a.useRef([]),Z=function(){return r?r.toString().split(""):[]},S="number"===p||"tel"===p;a.useEffect((function(){k.current=k.current.slice(0,s)}),[s]),a.useEffect((function(){var e;m&&(null===(e=k.current[0])||void 0===e||e.focus())}),[m]);var A=function(){if("string"===typeof g){if(g.length===s)return g;g.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},N=function(e){return(S?!isNaN(Number(e)):"string"===typeof e)&&1===e.trim().length},P=function(e){var t=e.target.value;N(t)&&(E(t),T(j+1))},I=function(e){var t=e.nativeEvent,r=e.target.value;if(!N(r)){if(r.length===s)r.split("").some((function(e){return!N(e)}))||(O(r.split("")),T(s-1));null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),E(""),T(j-1)),e.target.value=""}},D=function(){b(j-1)},C=function(e){var t=Z();[e.code,e.key].includes("Backspace")?(e.preventDefault(),E(""),T(j-1)):"Delete"===e.code?(e.preventDefault(),E("")):"ArrowLeft"===e.code?(e.preventDefault(),T(j-1)):"ArrowRight"===e.code||e.key===t[j]?(e.preventDefault(),T(j+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},T=function(e){var t,r,a=Math.max(Math.min(s-1,e),0);k.current[a]&&(null===(t=k.current[a])||void 0===t||t.focus(),null===(r=k.current[a])||void 0===r||r.select(),b(a))},E=function(e){var t=Z();t[j]=e[0],O(t)},O=function(e){var t=e.join("");c(t)},B=function(e){var t;e.preventDefault();var r=Z(),a=j,o=e.clipboardData.getData("text/plain").slice(0,s-j).split("");if(!S||!o.some((function(e){return isNaN(Number(e))}))){for(var n=0;n<s;++n)n>=j&&o.length>0&&(r[n]=null!==(t=o.shift())&&void 0!==t?t:"",a++);T(a),O(r)}};return a.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},o(h)&&h),className:"string"===typeof h?h:void 0,onPaste:i},Array.from({length:s},(function(e,t){return t})).map((function(e){var t,r,n;return a.createElement(a.Fragment,{key:e},l({value:null!==(t=Z()[e])&&void 0!==t?t:"",placeholder:null!==(n=null===(r=A())||void 0===r?void 0:r[e])&&void 0!==n?n:void 0,ref:function(t){return k.current[e]=t},onChange:P,onFocus:function(t){return function(e){return function(t){b(t),e.target.select()}}(t)(e)},onBlur:D,onKeyDown:C,onPaste:B,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(w?{}:{width:"1em",textAlign:"center"},o(v)?v:{}),className:"string"===typeof v?v:void 0,type:p,inputMode:S?"numeric":"text",onInput:I},e),e<s-1&&("function"===typeof f?f(e):f))})))}}}]);
//# sourceMappingURL=7494.82794bcc.chunk.js.map