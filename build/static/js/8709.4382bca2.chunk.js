"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[8709],{8709:(t,o,e)=>{e.d(o,{$q:()=>h,BU:()=>Z,Do:()=>k,Fc:()=>S,Gk:()=>m,JB:()=>B,Ki:()=>p,Os:()=>l,PR:()=>q,RZ:()=>L,UO:()=>z,Ud:()=>_,WH:()=>b,WL:()=>v,Xx:()=>u,YR:()=>I,_2:()=>D,_3:()=>U,_r:()=>d,bW:()=>g,c$:()=>P,ck:()=>A,dv:()=>x,eW:()=>c,hg:()=>C,jP:()=>W,kZ:()=>y,tZ:()=>w,zO:()=>f});e(2791);var r=e(8337),n=e(9655),a=e(1830),i=e.n(a);const s=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id");async function c(t){try{const{data:e,headers:n}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/employee-login"),t);var o;if(console.log(e),e.error)i().fire({toast:!0,icon:"error",position:"top-end",title:null===e||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3});else await localStorage.removeItem("token-company"),await localStorage.setItem("token-company",n["x-auth-token-company"]),await localStorage.setItem("user_id",null===e||void 0===e||null===(o=e.results)||void 0===o?void 0:o.employee._id),i().fire({toast:!0,icon:"Success",position:"top-end",title:"Login Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3});return console.log("error"+e.message),{data:e}}catch(e){if(null!==e&&void 0!==e&&e.response)return{error:e}}}async function l(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/send-email"),t);if(console.log(o),o.error?n.Am.error(o.message):(await localStorage.removeItem("token-company"),n.Am.success(o.message)),!o.error)return{data:o}}catch(o){return null!==o&&void 0!==o&&o.response&&n.Am.error(o.response.data.message),{error:o}}}async function u(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/verify-otp"),t);if(console.log(o),o.error?n.Am.error(o.message):(await localStorage.removeItem("token-company"),n.Am.success(o.message)),!o.error)return{data:o}}catch(o){return null!==o&&void 0!==o&&o.response&&n.Am.error(o.response.data.message),{error:o}}}async function m(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/contact-us"),t);if(console.log(o),o.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===o||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):i().fire({toast:!0,icon:"success",position:"top-end",title:"Create Contact Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!o.error)return{data:o}}catch(o){if(null!==o&&void 0!==o&&o.response)return{error:o}}}async function d(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/add-comment"),t);if(console.log(o),o.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===o||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):i().fire({toast:!0,icon:"success",position:"top-end",title:"Add Comment Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!o.error)return{data:o}}catch(o){if(null!==o&&void 0!==o&&o.response)return{error:o}}}async function p(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/document-comment-reply"),t);if(console.log(o),o.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===o||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):i().fire({toast:!0,icon:"success",position:"top-end",title:"Add Comment Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!o.error)return{data:o}}catch(o){if(null!==o&&void 0!==o&&o.response)return{error:o}}}async function v(){try{var t;const a=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/templete-list/").concat(s));var o;if(null!==(t=a.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===a||void 0===a||null===(o=a.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{var e,n;const t=null===a||void 0===a||null===(e=a.data)||void 0===e||null===(n=e.results)||void 0===n?void 0:n.TempleteList;return console.log(t),[t]}}catch(a){return a.response,null}}async function f(t){try{var o;const s=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/complete-document/").concat(t));var e;if(null!==(o=s.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{var n,a;const t=null===s||void 0===s||null===(n=s.data)||void 0===n||null===(a=n.results)||void 0===a?void 0:a.completeDocument;return console.log(t),[t]}}catch(s){return s.response,null}}async function g(t){try{var o;const s=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/document-details/").concat(t));var e;if(null!==(o=s.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;var n,a;return[null===s||void 0===s||null===(n=s.data)||void 0===n||null===(a=n.results)||void 0===a?void 0:a.document]}catch(s){return s.response,null}}async function y(){try{var t;const e=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/ticket-list/").concat(s));var o;if(null!==(t=e.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=e.data.results.ticketList;return console.log(t),[t]}}catch(e){return e.response,null}}async function w(){try{var t;const e=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/onGoing-ticket/").concat(s));var o;if(null!==(t=e.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=e.data.results.onGoingTicket;return console.log(t),[t]}}catch(e){return e.response,null}}async function h(){try{var t;const n=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/new-ticket/").concat(s));var o;if(null!==(t=n.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{var e;const t=null===(e=n.data.results)||void 0===e?void 0:e.ticket;return console.log(t),[t]}}catch(n){return n.response,null}}async function B(t){try{var o;const n=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/complete-ticket/").concat(t));var e;if(null!==(o=n.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=n.data.results.ticket;return console.log(t),[t]}}catch(n){return n.response,null}}async function C(t){try{var o;const n=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/total-document-present/").concat(t));var e;if(null!==(o=n.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=n.data;return console.log(t),[t]}}catch(n){return n.response,null}}async function P(){try{var t;const n=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/total-document-request/").concat(s));var o;if(null!==(t=n.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{var e;const t=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.results;return console.log(t),[t]}}catch(n){return n.response,null}}async function Z(t){try{var o;const a=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/comment-view/").concat(t));var e;if(null!==(o=a.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{var n;const t=null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.results;return console.log(t),{commentData:t}}}catch(a){return a.response,null}}async function z(t){try{var o;const n=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/delete-comment/").concat(t));var e;if(null!==(o=n.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=null===n||void 0===n?void 0:n.data.message;return console.log(t),i().fire({toast:!0,icon:"success",position:"top-end",title:"Comment Deleted",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{commentData:t}}}catch(n){return n.response,null}}async function k(t){try{var o;const n=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/total-ticket-count/").concat(t));var e;if(null!==(o=n.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=n.data;return console.log(t),[t]}}catch(n){return n.response,null}}async function S(){try{var t;const e=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/employee-details/").concat(s));var o;if(null!==(t=e.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=null===e||void 0===e?void 0:e.data;return console.log(t),[t]}}catch(e){return e.response,null}}async function I(){try{var t;const e=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/logo-list/").concat(s));var o;if(null!==(t=e.data)&&void 0!==t&&t.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=null===e||void 0===e?void 0:e.data;return console.log(t),[t]}}catch(e){return e.response,null}}async function A(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/edit-profile/").concat(s),t);if(console.log(o),!o.error){i().fire({toast:!0,icon:"success",title:"Profile Updated",position:"top-end",showConfirmButton:!1,timerProgressBar:!0,timer:3e3});return{data:o,templateId:null===o||void 0===o?void 0:o.results}}return i().fire({toast:!0,icon:"error",position:"top-end",title:null===o||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:o}}catch(o){if(o.response)return{error:o}}}async function _(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/company/add-logo"),t);if(console.log(o),!o.error){i().fire({toast:!0,icon:"success",position:"top-end",title:"New Logo Added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3});return{data:o,templateId:null===o||void 0===o?void 0:o.results}}return n.Am.error(o.message),i().fire({toast:!0,icon:"error",position:"top-end",title:null===o||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:o}}catch(o){if(o.response)return{error:o}}}async function L(t){try{const{data:o}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/add-document"),t);return o.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===o||void 0===o?void 0:o.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):i().fire({toast:!0,icon:"success",position:"top-end",title:"New Document Added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:o}}catch(o){if(o.response)return{error:o}}}async function D(t){try{const{data:e}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/create-ticket"),t);if(!e.error){var o;i().fire({toast:!0,icon:"success",position:"top-end",title:"Ticket Created Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3});return{data:e,templateId:null===e||void 0===e||null===(o=e.results)||void 0===o?void 0:o.document.templete_Id}}return i().fire({toast:!0,icon:"error",position:"top-end",title:null===e||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),{data:e}}catch(e){if(e.response)return{error:e}}}async function q(t){try{var o;const s=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/document-list/").concat(t));var e;if(null!==(o=s.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{var n,a;const t=null===s||void 0===s||null===(n=s.data)||void 0===n||null===(a=n.results)||void 0===a?void 0:a.documentList;console.log(t);null===t||void 0===t||t.map((t=>t));return t}}catch(s){return s.response,null}}async function x(t){try{var o;const n=await r.Z.get("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/pendning-document/").concat(t));var e;if(null!==(o=n.data)&&void 0!==o&&o.error)return i().fire({toast:!0,icon:"error",position:"top-end",title:null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),null;{const t=null===n||void 0===n?void 0:n.data;return console.log(t),[t]}}catch(n){return n.response,null}}async function U(){try{const{data:t}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/document-count/").concat(s));if(console.log(t),null!==t&&void 0!==t&&t.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===t||void 0===t?void 0:t.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):console.log(t.message),null===t||void 0===t||!t.error)return{data:t}}catch(t){if(null!==t&&void 0!==t&&t.response)return{error:t}}}async function W(){try{const{data:t}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/pending-request-count/").concat(s));if(console.log(t),null!==t&&void 0!==t&&t.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===t||void 0===t?void 0:t.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):console.log(t.message),null===t||void 0===t||!t.error)return{data:t}}catch(t){if(null!==t&&void 0!==t&&t.response)return{error:t}}}async function b(){try{const{data:t}=await r.Z.post("".concat("http://ec2-51-112-25-93.me-central-1.compute.amazonaws.com:2053","/api/employee/employee-logout/").concat(s));if(console.log(t),null!==t&&void 0!==t&&t.error?i().fire({toast:!0,icon:"error",position:"top-end",title:null===t||void 0===t?void 0:t.message,showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):(i().fire({toast:!0,icon:"success",position:"top-end",title:"Logout Successfully",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),console.log(t.message)),null===t||void 0===t||!t.error)return{data:t}}catch(t){if(null!==t&&void 0!==t&&t.response)return{error:t}}}console.log("id: ",s)},8337:(t,o,e)=>{e.d(o,{Z:()=>n});var r=e(5294);r.Z.defaults.headers.common["x-auth-token-company"]=localStorage.getItem("token-company"),r.Z.interceptors.request.use((async t=>(t.headers["x-auth-token-company"]=await localStorage.getItem("token-company"),t))),r.Z.interceptors.response.use(null,(t=>{t.response&&t.response.status>=400&&t.response.status;return Promise.reject(t)}));const n={get:r.Z.get,post:r.Z.post,put:r.Z.put,delete:r.Z.delete}}}]);
//# sourceMappingURL=8709.4382bca2.chunk.js.map