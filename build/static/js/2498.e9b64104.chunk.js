"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[2498],{2498:(e,s,l)=>{l.r(s),l.d(s,{default:()=>u});var a=l(2791),t=l(9040),d=l(1087),i=l(82),c=l(4675),o=l(1888),n=l(4041),r=l(8113),m=l(1830),h=l.n(m),x=l(2994),v=l(184);const u=()=>{var e,s,m;const[u,j]=(0,a.useState)(),[p,g]=(0,a.useState)(""),[b,N]=(0,a.useState)(!1),[f,w]=(0,a.useState)(""),[C,y]=(0,a.useState)(),[_,k]=(0,a.useState)({columns:[{label:"Template Name",field:"name",sort:"asc",width:50},{label:"Assigned To",field:"assigned",sort:"asc",width:50},{label:"Version",field:"version",sort:"asc",width:100},{label:"Status",field:"status",sort:"asc",width:100},{label:"Department",field:"department",sort:"asc",width:100,searchable:!0},{label:"Comment",field:"comment",sort:"asc",width:100},{label:"Actions",field:"actions",sort:"asc",width:100}],rows:[],hiddenColumns:[],selectedColumns:[]});(0,a.useEffect)((()=>{S(),A(),T()}),[]);const S=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,c.i1)(e);null!==s&&void 0!==s&&s.error||j(null===s||void 0===s?void 0:s.results)},T=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,c.W5)(e);var l,a,t;(console.log(s),null!==s&&void 0!==s&&s.error)||y(null===s||void 0===s||null===(l=s.results)||void 0===l||null===(a=l.singnatory)||void 0===a||null===(t=a.department_Id)||void 0===t?void 0:t.departmentName)},A=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,c.TJ)(e);const l=[];if(null===s||void 0===s||!s.error){var a;let e=null===s||void 0===s||null===(a=s.results)||void 0===a?void 0:a.template;console.log(e),null===e||void 0===e||e.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),null===e||void 0===e||e.map(((e,s)=>{var a,t,i,c,o;const n={};n.name=null===e||void 0===e?void 0:e.templeteName,n.assigned=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{className:"w_20_h_20",src:null===e||void 0===e||null===(a=e.manager)||void 0===a?void 0:a.profile_Pic,alt:""}),(0,v.jsx)("span",{className:"ms-2 text-capitalize",children:null===e||void 0===e||null===(t=e.manager)||void 0===t?void 0:t.name})]}),n.version=(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("span",{children:(null===e||void 0===e?void 0:e.templeteVersion)&&e.templeteVersion.length>0&&(null===(i=e.templeteVersion[e.templeteVersion.length-1])||void 0===i?void 0:i.version)})}),n.department=(null===e||void 0===e||null===(c=e.manager)||void 0===c||null===(o=c.department_Id)||void 0===o?void 0:o.departmentName)||"NA",n.status=(0,v.jsx)("span",{className:'"td-text status" '.concat("Pending"===(null===e||void 0===e?void 0:e.status)?"text-info":"Approved"===(null===e||void 0===e?void 0:e.status)?"text-success":"In Progress"===(null===e||void 0===e?void 0:e.status)?"text-primary":"Rejected"===(null===e||void 0===e?void 0:e.status)?"text-danger":(null===e||void 0===e||e.status,"text-success")),children:null===e||void 0===e?void 0:e.status}),n.actions=(0,v.jsxs)("div",{class:"text-center",children:[(0,v.jsx)("a",{type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,v.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto cursor_pointer"})}),(0,v.jsx)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:(0,v.jsx)("li",{children:(0,v.jsxs)(d.rU,{class:"dropdown-item",to:"/Signatory/Home/Comments/".concat(null===e||void 0===e?void 0:e._id),children:[(0,v.jsx)("img",{src:"/images/dashboard/Comment.png",className:"me-2"}),"Comments"]})})})]}),n.comment=(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"text-center",children:(0,v.jsx)("a",{onClick:()=>w(null===e||void 0===e?void 0:e._id),type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal1",children:(0,v.jsx)("img",{src:"/images/dashboard/Comment.png",className:"mx-auto d-block"})})})}),l.push(n)})),k({..._,rows:l})}},I=_.columns.map((e=>({...e,label:(0,v.jsx)("div",{className:"",children:(0,v.jsxs)(x.Z,{checked:null===_||void 0===_?void 0:_.selectedColumns.includes(e.field),onChange:()=>(e=>{let s=[..._.selectedColumns];const l=s.indexOf(e);l>-1?s.splice(l,1):s.push(e),k({..._,selectedColumns:s})})(e.field),defaultChecked:!0,children:[" ",e.label]})},e.field)}))).filter((e=>!_.hiddenColumns.includes(e.field)));return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"container-fluid",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-2 sidebar",children:(0,v.jsx)(i.Z,{})}),(0,v.jsxs)("div",{className:"col-7 middle-content",children:[(0,v.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,v.jsxs)("nav",{className:"row header bg-white  ",children:[(0,v.jsx)("ul",{className:"col align-items-center mt-3",children:(0,v.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,v.jsx)("a",{className:"nav-link fw-bold",children:" Home"})})}),(0,v.jsxs)("div",{className:"col d-flex align-items-center  justify-content-end",children:[(0,v.jsx)("form",{className:"",role:"search",children:(0,v.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,v.jsx)(d.rU,{to:"/Admin/Chat",children:(0,v.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,v.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,v.jsx)("div",{className:"col-12 mb-4",children:(0,v.jsxs)("div",{className:"row statics_part",children:[(0,v.jsx)("div",{className:"col-md-3 ",children:(0,v.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"My Department"})}),(0,v.jsx)("div",{className:"d-flex  mt-4",children:(0,v.jsx)("p",{style:{fontSize:"14px"},className:"card-text-count mb-0 fw-semibold",children:C&&C||"Admin"})})]})}),(0,v.jsx)("div",{className:"col-md-3",children:(0,v.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Employees"})}),(0,v.jsx)("div",{className:"d-flex  mt-4",children:(0,v.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===u||void 0===u?void 0:u.totalEmployee)&&(null===u||void 0===u||null===(e=u.totalEmployee[0])||void 0===e?void 0:e.count)||0})})]})}),(0,v.jsx)("div",{className:"col-md-3 ",children:(0,v.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Active Users"})}),(0,v.jsx)("div",{className:"d-flex  mt-4",children:(0,v.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===u||void 0===u?void 0:u.totalActiveUser)&&(null===u||void 0===u||null===(s=u.totalActiveUser[0])||void 0===s?void 0:s.count)||0})})]})}),(0,v.jsx)("div",{className:"col-md-3 ",children:(0,v.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Templates"})}),(0,v.jsx)("div",{className:"d-flex mt-4",children:(0,v.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===u||void 0===u?void 0:u.totalTempleted)&&(null===u||void 0===u||null===(m=u.totalTempleted[0])||void 0===m?void 0:m.count)||0})})]})})]})}),(0,v.jsxs)("div",{className:"position-relative",children:[(0,v.jsx)("p",{className:"table-name mb-2",children:"Templates"}),(0,v.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("div",{className:"col-md-3 table-searchbar-imgs",children:(0,v.jsx)("img",{onClick:()=>{const e="asc"===_.sortType?"desc":"asc",s=[..._.rows].sort(((s,l)=>{let a=0;return s.name.toLowerCase()<l.name.toLowerCase()?a=-1:s.name.toLowerCase()>l.name.toLowerCase()&&(a=1),"asc"===e?a:-1*a}));console.log(s),k({..._,rows:s,sortType:e})},src:"/images/dashboard/ArrowsDownUp.png",className:"p-2 table-searchbar-img border-end cursor_pointer"})}),(0,v.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,v.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===_||void 0===_?void 0:_.selectedColumns)&&(null===_||void 0===_?void 0:_.selectedColumns.length),(0,v.jsx)("span",{children:" Selected"})]}),b?(0,v.jsx)("p",{className:"hide-selected ms-2 m-0 text-nowrap cursor_pointer ",onClick:()=>{k({..._,hiddenColumns:[],selectedColumns:[]}),N(!1)},children:"Clear Selection"}):(0,v.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[..._.hiddenColumns,..._.selectedColumns];k({..._,hiddenColumns:e,selectedColumns:[]}),N(!0)},children:"Hide Selected"})]}),(0,v.jsx)("div",{class:"search_icon",children:(0,v.jsx)("img",{width:20,src:l(8879)})})]}),(0,v.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,v.jsx)("div",{className:"col-12 mdb_table mt-3 ",children:(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsx)(o.g0K,{bordered:!0,displayEntries:!1,entries:5,className:"text-nowrap",hover:!0,data:{..._,columns:I},noBottomColumns:!0,sortable:!1,paginationLabel:"\xab\xbb"})})})]}),(0,v.jsx)(n.Z,{}),(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("p",{className:"ms-3",children:"About"}),(0,v.jsx)("p",{className:"ms-3",children:"Support"}),(0,v.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,v.jsx)("div",{class:"modal fade",id:"exampleModal1",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,v.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,v.jsxs)("div",{class:"modal-content",children:[(0,v.jsxs)("div",{class:"modal-header",children:[(0,v.jsx)("h5",{class:"modal-title th-text",id:"exampleModalLabel",children:"Add comment"}),(0,v.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"closeForm"})]}),(0,v.jsx)("div",{class:"modal-body",children:(0,v.jsxs)("form",{className:"rounded",onSubmit:async e=>{e.preventDefault();let s=localStorage.getItem("myot_admin_id");console.log(s,p,f);let{data:l}=await(0,r.SK)({comment:p,templete_Id:f,creator_Id:s});console.log(l),null!==l&&void 0!==l&&l.error||(h().fire({toast:!0,icon:"success",position:"top-end",title:"New comment added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),document.getElementById("closeForm").click(),g(""))},children:[(0,v.jsxs)("div",{className:"mb-3 border-bottom",children:[(0,v.jsx)("label",{className:"form-label th-text",children:"Comment or type"}),(0,v.jsx)("input",{type:"text",className:"form-control border-0 w-100",placeholder:"Type comment...",value:p,onChange:e=>g(e.target.value)})]}),(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:"/images/tasks/assign comments.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/mention.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/task.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/emoji.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/attach_attachment.svg",alt:"",className:"comment-img"})]}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{type:"submit",className:"comment-btn btn-primary",children:"Comment"})})]})]})})]})})}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(t.Z,{})})]})})})}}}]);
//# sourceMappingURL=2498.e9b64104.chunk.js.map