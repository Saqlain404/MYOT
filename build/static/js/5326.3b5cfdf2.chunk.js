"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[5326],{55326:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var l=s(72791),t=s(11087),i=s(23773),d=s(78709),c=(s(29655),s(72426)),n=s.n(c),o=s(81161),r=s(80184);const m=()=>{var e,a,s,c,m,x;const[h,p]=(0,l.useState)(),[b,u]=(0,l.useState)(),[v,j]=(0,l.useState)("All"),[g,N]=(0,l.useState)(""),[f,k]=(0,l.useState)(""),[y,w]=(0,l.useState)([]),[C,A]=(0,l.useState)(null),S=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id"),_=e=>{switch(j(e),e){case"New":(async()=>{let e=await(0,d.$q)(S);null===e||void 0===e||e.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),console.log(e),null!==e&&void 0!==e&&e.error||p(e)})();break;case"Ongoing":(async()=>{let e=await(0,d.tZ)(S);null===e||void 0===e||e.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),console.log(e),null!==e&&void 0!==e&&e.error||p(e)})();break;case"Resolved":(async()=>{let e=await(0,d.JB)(S);null===e||void 0===e||e.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),console.log(e),null!==e&&void 0!==e&&e.error||p(e)})();break;default:T()}},T=async()=>{var e;let a=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id");u(a);const s=await(0,d.kZ)(a);null===(e=s[0])||void 0===e||e.sort(((e,a)=>new Date(null===a||void 0===a?void 0:a.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),p(s),console.log(s[0])};return(0,l.useEffect)((()=>{T()}),[]),(0,l.useEffect)((()=>{}),[h]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-2 sidebar",children:(0,r.jsx)(i.Z,{})}),(0,r.jsxs)("div",{className:"col middle-content bg-body-tertiary p-0 min-vh-100",children:[(0,r.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,r.jsxs)("nav",{className:"row header bg-white  ",children:[(0,r.jsx)("ul",{className:"col align-items-center mt-3",children:(0,r.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,r.jsx)("a",{className:"nav-link fw-bold ms-2",children:"Help / Help & Support"})})}),(0,r.jsx)("div",{className:"col d-flex align-items-center  justify-content-end",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,r.jsx)(t.rU,{to:"/Employee/Chat",children:(0,r.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,r.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})})]})}),(0,r.jsx)("div",{className:"container px-4 text-center min-vh-100 ",children:(0,r.jsxs)("div",{className:"row bg-white rounded  p-4 m-4",children:[(0,r.jsxs)("div",{className:"col-12 d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex mt-2",children:[(0,r.jsx)(t.rU,{to:"/Employee/Help",className:"text-decoration-none",children:(0,r.jsx)("p",{className:"th-text  me-3",children:"Template Guidelines"})}),(0,r.jsx)(t.rU,{to:"/Employee/Help&Support",className:"text-decoration-none",children:(0,r.jsx)("p",{className:"td-text border-bottom me-3",children:"Help & Support"})}),(0,r.jsx)(t.rU,{to:"/Employee/Contact",className:"text-decoration-none",children:(0,r.jsx)("p",{className:"th-text",children:"Contact Us"})})]}),(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,r.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-department",children:(0,r.jsxs)("div",{class:"modal-content border-0",children:[(0,r.jsxs)("div",{class:"d-flex modal-header border-bottom",children:[(0,r.jsx)("p",{class:"",id:"exampleModalLabel",children:"Create New Ticket"}),(0,r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,r.jsxs)("form",{action:"",onSubmit:async e=>{e.preventDefault();let a=localStorage.getItem("myot_admin_id"),s=new FormData;s.append("ticketType",g),s.append("ticketIssue",f),s.append("creator_Id",a),s.append("document",null===y||void 0===y?void 0:y.attachment);const l=await(0,d._2)(s);null!==l&&void 0!==l&&l.error||(e.target.reset(),N(""),w([]),k(""),T())},children:[(0,r.jsxs)("div",{className:"row p-3",children:[(0,r.jsx)("div",{className:"col-12 mb-3 d-flex",children:(0,r.jsxs)("div",{className:"col-12 ps-2",children:[(0,r.jsx)("p",{className:"d-flex ms-1",id:"exampleModalLabel",children:"Title"}),(0,r.jsx)("input",{type:"text",placeholder:"Title *",className:"col-12 modal-input td-text w-100 p-2",name:"request type",value:g,onChange:e=>N(e.target.value)})]})}),(0,r.jsx)("p",{className:"d-flex ms-2",id:"exampleModalLabel",children:"Description"}),(0,r.jsx)("div",{className:"col-12 mb-3",children:(0,r.jsx)("textarea",{style:{minHeight:"100px"},type:"text",placeholder:"Type ticket issue here...",className:"col-12 modal-input td-text p-2",name:"message",value:f,onChange:e=>k(e.target.value)})}),(0,r.jsx)("p",{className:"d-flex ms-2 mb-1",children:"Attachment ( if Any )"}),(0,r.jsx)("div",{className:"col-12 mb-3",children:(0,r.jsx)("input",{type:"file",className:"col-12 modal-input td-text p-2",name:"attachment",accept:".pdf, .png, .jpg, .jpeg",defaultValue:"",onChange:e=>(async(e,a)=>{w({...y,[a]:e.target.files[0]})})(e,"attachment")})})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-end mb-3",children:[(0,r.jsx)(o.Z,{style:{width:"100px"},appearance:"primary",type:"submit",className:"btn mb-3 me-2 rounded-2","data-bs-dismiss":"modal",disabled:!g||!f,children:"Send"}),(0,r.jsx)(o.Z,{style:{width:"100px"},type:"button","data-bs-dismiss":"modal","aria-label":"Close",className:"btn mb-3 me-2 rounded-2",children:"Cancel"})]})]})]})})}),(0,r.jsx)(t.rU,{className:"text-decoration-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,r.jsx)("button",{className:"help-support-btn",children:"New Ticket"})})]})]}),(0,r.jsx)("p",{className:"help-support-heading mt-3",children:"Get in Touch"}),(0,r.jsx)("p",{className:"help-support-text mb-2",children:"Please get in touch and we will be happy to help you. Create New tickets"}),(0,r.jsx)("div",{className:"col-12 d-flex",children:(0,r.jsxs)("ul",{className:"nav nav-tabs mb-5",id:"ex1",role:"tablist",children:[(0,r.jsx)("li",{className:"nav-item",role:"presentation",children:(0,r.jsx)("a",{className:"nav-link ".concat("All"===v?"active":""),id:"ex1-tab-1","data-bs-toggle":"tab",href:"#ex1-tabs-1",role:"tab","aria-controls":"ex1-tabs-1","aria-selected":"true",onClick:()=>_("All"),children:"All Tickets"})}),(0,r.jsx)("li",{className:"nav-item",role:"presentation",children:(0,r.jsx)("a",{className:"nav-link ".concat("New"===v?"active":""),id:"ex1-tab-2","data-bs-toggle":"tab",href:"#ex1-tabs-2",role:"tab","aria-controls":"ex1-tabs-2","aria-selected":"false",onClick:()=>_("New"),children:"New Tickets"})}),(0,r.jsx)("li",{className:"nav-item",role:"presentation",children:(0,r.jsx)("a",{className:"nav-link ".concat("Ongoing"===v?"active":""),id:"ex1-tab-3","data-bs-toggle":"tab",href:"#ex1-tabs-3",role:"tab","aria-controls":"ex1-tabs-3","aria-selected":"false",onClick:()=>_("Ongoing"),children:"Ongoing Tickets"})}),(0,r.jsx)("li",{className:"nav-item",role:"presentation",children:(0,r.jsx)("a",{className:"nav-link ".concat("Resolved"===v?"active":""),id:"ex1-tab-4","data-bs-toggle":"tab",href:"#ex1-tabs-4",role:"tab","aria-controls":"ex1-tabs-4","aria-selected":"false",onClick:()=>_("Resolved"),children:"Resolved Tickets"})})]})}),(0,r.jsx)("div",{className:"col-12",children:null!==h&&void 0!==h&&h[0]&&null!==h&&void 0!==h&&null!==(e=h[0])&&void 0!==e&&e.length?null===h||void 0===h||null===(a=h[0])||void 0===a?void 0:a.map(((e,a)=>(0,r.jsxs)("div",{className:"col rounded border bg-white mb-3 p-2",children:[(0,r.jsxs)("div",{className:"d-flex border-bottom d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"ps-2 pe-4",children:[(0,r.jsxs)("div",{className:"d-flex mb-3",children:["In Progress"===(null===e||void 0===e?void 0:e.status)?(0,r.jsx)("img",{src:"/images/dashboard/orange-ticket-ball.svg",alt:"",className:"me-2"}):"Pending"===(null===e||void 0===e?void 0:e.status)?(0,r.jsx)("img",{src:"/images/dashboard/blue-ticket-ball.svg",alt:"",className:"me-2"}):"Completed"===e.status?(0,r.jsx)("img",{src:"/images/dashboard/green-ticket-ball.svg",alt:"",className:"me-2"}):null,(0,r.jsx)("p",{className:"ticket-number m-1",children:e.ticketType})]}),(0,r.jsx)("div",{className:" mt-1",children:(0,r.jsx)("p",{className:"ticket-question mb-2 ms-5",children:e.ticketIssue})})]}),(0,r.jsxs)("p",{className:"ticket-post-time mt-2",children:["Posted At ",(0,r.jsx)("br",{}),n()(e.createdAt).calendar()]})]}),(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("img",{src:e.creator_Id.profile_Pic,alt:"",className:"m-2 img_profile"}),(0,r.jsx)("p",{className:"th-text m-auto text-capitalize",children:e.creator_Id.name})]}),(0,r.jsxs)("div",{className:"d-flex align-items-center",children:[(null===e||void 0===e?void 0:e.document)&&(0,r.jsx)("a",{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",className:"ticket-link mt-3 mx-2 cursor_pointer",onClick:()=>(e=>{A(e),console.log(h)})(a),children:"See Attachement"}),(0,r.jsx)("a",{className:"ticket-link mt-3 me-1 cursor_pointer",children:"Open Ticket"})]})]})]},e._id))):(0,r.jsx)("p",{className:"fs-5",children:"Yay! no tickets"})}),(0,r.jsx)("div",{class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,r.jsx)("div",{class:"modal-dialog",children:(0,r.jsxs)("div",{class:"modal-content",children:[(0,r.jsxs)("div",{class:"modal-header",children:[(0,r.jsx)("p",{className:"fs-6",children:"Attachment"}),(0,r.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,r.jsx)("div",{class:"modal-body",children:(0,r.jsx)("div",{children:null!==C&&null!==(s=h[0])&&void 0!==s&&null!==(c=s[C])&&void 0!==c&&c.document?(0,r.jsx)("img",{src:null===(m=h[0])||void 0===m||null===(x=m[C])||void 0===x?void 0:x.document,alt:"Attachment",style:{width:"100%",objectFit:"cover"}}):null})})]})})})]})})]})]})})})}}}]);
//# sourceMappingURL=5326.3b5cfdf2.chunk.js.map