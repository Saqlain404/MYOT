(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[7837],{92498:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>p});var a=l(72791),t=l(39040),d=l(11087),i=l(82),o=l(54675),c=l(81888),n=l(14041),r=l(28113),m=l(21830),h=l.n(m),x=l(42994),v=l(81161),u=l(49994),j=l(80184);const p=()=>{var e,s,m;const[p,b]=(0,a.useState)(),[g,N]=(0,a.useState)(""),[f,w]=(0,a.useState)(!1),[y,C]=(0,a.useState)(""),[k,_]=(0,a.useState)(),[S,T]=(0,a.useState)(),[B,A]=(0,a.useState)(""),[R,I]=(0,a.useState)(!1),[L,D]=(0,a.useState)({columns:[{label:"Template Name",field:"name",sort:"asc",width:50},{label:"Assigned To",field:"assigned",sort:"asc",width:50},{label:"Version",field:"version",sort:"asc",width:100},{label:"Status",field:"status",sort:"asc",width:100},{label:"Department",field:"department",sort:"asc",width:100,searchable:!0},{label:"Comment",field:"comment",sort:"asc",width:100},{label:"Actions",field:"actions",sort:"asc",width:100}],rows:[],hiddenColumns:[],selectedColumns:[]});(0,a.useEffect)((()=>{U(),P(),E()}),[]);const U=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,o.i1)(e);null!==s&&void 0!==s&&s.error||b(null===s||void 0===s?void 0:s.results)},E=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,o.W5)(e);var l,a,t;(console.log(s),null!==s&&void 0!==s&&s.error)||_(null===s||void 0===s||null===(l=s.results)||void 0===l||null===(a=l.singnatory)||void 0===a||null===(t=a.department_Id)||void 0===t?void 0:t.departmentName)},P=async()=>{let e=localStorage.getItem("myot_admin_id"),{data:s}=await(0,o.TJ)(e);const l=[];if(null===s||void 0===s||!s.error){var a;let e=null===s||void 0===s||null===(a=s.results)||void 0===a?void 0:a.template;console.log(e),null===e||void 0===e||e.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),null===e||void 0===e||e.map(((e,s)=>{var a,t,i,o,c;const n={};n.name=null===e||void 0===e?void 0:e.templeteName,n.assigned=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("img",{className:"w_20_h_20",src:null===e||void 0===e||null===(a=e.manager[0])||void 0===a?void 0:a.profile_Pic,alt:""}),(0,j.jsx)("span",{className:"ms-2 text-capitalize",children:null===e||void 0===e||null===(t=e.manager[0])||void 0===t?void 0:t.name})]}),n.version=(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("span",{children:(null===e||void 0===e?void 0:e.templeteVersion)&&e.templeteVersion.length>0&&(null===(i=e.templeteVersion[e.templeteVersion.length-1])||void 0===i?void 0:i.version)})}),n.department=(null===e||void 0===e||null===(o=e.manager[0])||void 0===o||null===(c=o.department[0])||void 0===c?void 0:c.departmentName)||"NA",n.status=(0,j.jsx)("span",{className:'"td-text status" '.concat("Pending"===(null===e||void 0===e?void 0:e.status)?"text-info":"Approved"===(null===e||void 0===e?void 0:e.status)?"text-warning":"In Progress"===(null===e||void 0===e?void 0:e.status)?"text-primary":"Rejected"===(null===e||void 0===e?void 0:e.status)?"text-danger":(null===e||void 0===e||e.status,"text-success")),children:null===e||void 0===e?void 0:e.status}),n.actions=(0,j.jsxs)("div",{class:"text-center",children:[(0,j.jsx)("a",{type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,j.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto cursor_pointer"})}),(0,j.jsxs)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:[(0,j.jsx)("li",{onClick:()=>T(null===e||void 0===e?void 0:e._id),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button",children:(0,j.jsxs)(d.rU,{class:"dropdown-item",children:[(0,j.jsx)("img",{src:"/images/users/AddressBook.svg",className:"me-2"}),"View Template Details"]})}),(0,j.jsx)("li",{onClick:()=>T(null===e||void 0===e?void 0:e._id),type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop2",children:(0,j.jsxs)("a",{class:"dropdown-item text-danger",href:"#",children:[(0,j.jsx)("img",{src:"/images/XCircle.svg",alt:"",className:"me-2"}),"Reject"]})}),(0,j.jsx)("li",{children:(0,j.jsxs)(d.rU,{class:"dropdown-item",to:"/Signatory/Home/Comments/".concat(null===e||void 0===e?void 0:e._id),children:[(0,j.jsx)("img",{src:"/images/dashboard/Comment.png",className:"me-2"}),"Comments"]})})]})]}),n.comment=(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"text-center",children:(0,j.jsx)("a",{onClick:()=>C(null===e||void 0===e?void 0:e._id),type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal1",children:(0,j.jsx)("img",{src:"/images/dashboard/Comment.png",className:"mx-auto d-block"})})})}),l.push(n)})),D({...L,rows:l})}},V=L.columns.map((e=>({...e,label:(0,j.jsx)("div",{className:"",children:(0,j.jsxs)(x.Z,{checked:null===L||void 0===L?void 0:L.selectedColumns.includes(e.field),onChange:()=>(e=>{let s=[...L.selectedColumns];const l=s.indexOf(e);l>-1?s.splice(l,1):s.push(e),D({...L,selectedColumns:s})})(e.field),defaultChecked:!0,children:[" ",e.label]})},e.field)}))).filter((e=>!L.hiddenColumns.includes(e.field)));return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"container-fluid",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-2 sidebar",children:(0,j.jsx)(i.Z,{})}),(0,j.jsxs)("div",{className:"col-7 middle-content",children:[(0,j.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,j.jsxs)("nav",{className:"row header bg-white  ",children:[(0,j.jsx)("ul",{className:"col align-items-center mt-3",children:(0,j.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,j.jsx)("a",{className:"nav-link fw-bold",children:" Home"})})}),(0,j.jsxs)("div",{className:"col d-flex align-items-center  justify-content-end",children:[(0,j.jsx)("form",{className:"",role:"search",children:(0,j.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,j.jsx)(d.rU,{to:"/Admin/Chat",children:(0,j.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,j.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,j.jsx)("div",{className:"col-12 mb-4",children:(0,j.jsxs)("div",{className:"row statics_part",children:[(0,j.jsx)("div",{className:"col-md-3 ",children:(0,j.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,j.jsx)("div",{className:"statics_left",children:(0,j.jsx)("h6",{className:"mb-0 header-card-text",children:"My Department"})}),(0,j.jsx)("div",{className:"d-flex  mt-4",children:(0,j.jsx)("p",{style:{fontSize:"14px"},className:"card-text-count mb-0 fw-semibold",children:k&&k||"Admin"})})]})}),(0,j.jsx)("div",{className:"col-md-3",children:(0,j.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,j.jsx)("div",{className:"statics_left",children:(0,j.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Employees"})}),(0,j.jsx)("div",{className:"d-flex  mt-4",children:(0,j.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===p||void 0===p?void 0:p.totalEmployee)&&(null===p||void 0===p||null===(e=p.totalEmployee[0])||void 0===e?void 0:e.count)||0})})]})}),(0,j.jsx)("div",{className:"col-md-3 ",children:(0,j.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,j.jsx)("div",{className:"statics_left",children:(0,j.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Active Users"})}),(0,j.jsx)("div",{className:"d-flex  mt-4",children:(0,j.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===p||void 0===p?void 0:p.totalActiveUser)&&(null===p||void 0===p||null===(s=p.totalActiveUser[0])||void 0===s?void 0:s.count)||0})})]})}),(0,j.jsx)("div",{className:"col-md-3 ",children:(0,j.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,j.jsx)("div",{className:"statics_left",children:(0,j.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Templates"})}),(0,j.jsx)("div",{className:"d-flex mt-4",children:(0,j.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===p||void 0===p?void 0:p.totalTempleted)&&(null===p||void 0===p||null===(m=p.totalTempleted[0])||void 0===m?void 0:m.count)||0})})]})})]})}),(0,j.jsxs)("div",{className:"position-relative",children:[(0,j.jsx)("p",{className:"table-name mb-2",children:"Templates"}),(0,j.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,j.jsxs)("div",{className:"d-flex ",children:[(0,j.jsx)("div",{className:"col-md-3 table-searchbar-imgs",children:(0,j.jsx)("img",{onClick:()=>{const e="asc"===L.sortType?"desc":"asc",s=[...L.rows].sort(((s,l)=>{let a=0;return s.name.toLowerCase()<l.name.toLowerCase()?a=-1:s.name.toLowerCase()>l.name.toLowerCase()&&(a=1),"asc"===e?a:-1*a}));console.log(s),D({...L,rows:s,sortType:e})},src:"/images/dashboard/ArrowsDownUp.png",className:"p-2 table-searchbar-img border-end cursor_pointer"})}),(0,j.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,j.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===L||void 0===L?void 0:L.selectedColumns)&&(null===L||void 0===L?void 0:L.selectedColumns.length),(0,j.jsx)("span",{children:" Selected"})]}),f?(0,j.jsx)("p",{className:"hide-selected ms-2 m-0 text-nowrap cursor_pointer ",onClick:()=>{D({...L,hiddenColumns:[],selectedColumns:[]}),w(!1)},children:"Clear Selection"}):(0,j.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[...L.hiddenColumns,...L.selectedColumns];D({...L,hiddenColumns:e,selectedColumns:[]}),w(!0)},children:"Hide Selected"})]}),(0,j.jsx)("div",{class:"search_icon",children:(0,j.jsx)("img",{width:20,src:l(28879)})})]}),(0,j.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,j.jsx)("div",{className:"col-12 mdb_table mt-3 ",children:(0,j.jsx)("div",{className:"table-responsive",children:(0,j.jsx)(c.g0K,{bordered:!0,displayEntries:!1,entries:5,className:"text-nowrap",hover:!0,data:{...L,columns:V},noBottomColumns:!0,sortable:!1,paginationLabel:"\xab\xbb"})})})]}),(0,j.jsx)(n.Z,{}),(0,j.jsx)("div",{class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,j.jsx)("div",{class:"modal-dialog modal-lg",children:(0,j.jsxs)("div",{class:"modal-content",children:[(0,j.jsxs)("div",{class:"modal-header",children:[(0,j.jsx)("h5",{class:"modal-title",id:"staticBackdropLabel",children:"Template Details"}),(0,j.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,j.jsx)(u.Z,{viewTemplateId:S})]})})}),(0,j.jsx)("div",{class:"modal fade",id:"staticBackdrop2","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,j.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,j.jsxs)("div",{class:"modal-content",children:[(0,j.jsxs)("div",{class:"modal-header",children:[(0,j.jsx)("h5",{class:"modal-title",id:"staticBackdropLabel",children:"Reject Template"}),(0,j.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"closeReject"})]}),(0,j.jsxs)("div",{class:"modal-body",children:[(0,j.jsx)("input",{type:"text",className:"td-text w-100 py-2 rounded ps-2",placeholder:"Reject Reason...",value:B,onChange:e=>A(e.target.value)}),(0,j.jsx)("div",{className:"text-end mt-4",children:(0,j.jsx)(v.Z,{style:{width:"100px"},loading:R,color:"red",appearance:"primary",className:"btn mb-3 me-2 rounded-2",type:"submit",onClick:e=>(async e=>{if(e.preventDefault(),console.log(S,B),(null===B||void 0===B?void 0:B.trim().length)<=0)return h().fire({toast:!0,icon:"error",position:"top-end",title:"Please enter a reason",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),!1;let{data:s}=await(0,r.Q2)(S,{reasons:B});null!==s&&void 0!==s&&s.error||(h().fire({toast:!0,icon:"success",position:"top-end",title:"Template Rejected",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),A(""),P(),document.getElementById("closeReject").click())})(e),children:"Reject"})})]})]})})}),(0,j.jsxs)("div",{className:"footer",children:[(0,j.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,j.jsxs)("div",{className:"d-flex ",children:[(0,j.jsx)("p",{className:"ms-3",children:"About"}),(0,j.jsx)("p",{className:"ms-3",children:"Support"}),(0,j.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,j.jsx)("div",{class:"modal fade",id:"exampleModal1",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,j.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,j.jsxs)("div",{class:"modal-content",children:[(0,j.jsxs)("div",{class:"modal-header",children:[(0,j.jsx)("h5",{class:"modal-title th-text",id:"exampleModalLabel",children:"Add comment"}),(0,j.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"closeForm"})]}),(0,j.jsx)("div",{class:"modal-body",children:(0,j.jsxs)("form",{className:"rounded",onSubmit:async e=>{e.preventDefault();let s=localStorage.getItem("myot_admin_id");console.log(s,g,y);let{data:l}=await(0,r.SK)({comment:g,templete_Id:y,creator_Id:s});console.log(l),null!==l&&void 0!==l&&l.error||(h().fire({toast:!0,icon:"success",position:"top-end",title:"New comment added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),document.getElementById("closeForm").click(),N(""))},children:[(0,j.jsxs)("div",{className:"mb-3 border-bottom",children:[(0,j.jsx)("label",{className:"form-label th-text",children:"Comment or type"}),(0,j.jsx)("input",{type:"text",className:"form-control border-0 w-100",placeholder:"Type comment...",value:g,onChange:e=>N(e.target.value)})]}),(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("img",{src:"/images/tasks/assign comments.svg",alt:"",className:"comment-img"}),(0,j.jsx)("img",{src:"/images/tasks/mention.svg",alt:"",className:"comment-img"}),(0,j.jsx)("img",{src:"/images/tasks/task.svg",alt:"",className:"comment-img"}),(0,j.jsx)("img",{src:"/images/tasks/emoji.svg",alt:"",className:"comment-img"}),(0,j.jsx)("img",{src:"/images/tasks/attach_attachment.svg",alt:"",className:"comment-img"})]}),(0,j.jsx)("div",{children:(0,j.jsx)("button",{type:"submit",className:"comment-btn btn-primary",children:"Comment"})})]})]})})]})})}),(0,j.jsx)("div",{className:"col",children:(0,j.jsx)(t.Z,{})})]})})})}},49994:(e,s,l)=>{"use strict";l.d(s,{Z:()=>c});var a=l(72791),t=(l(44839),l(61044),l(28113)),d=l(79853),i=l(17091),o=l(80184);const c=e=>{let{viewTemplateId:s}=e;const[l,c]=(0,a.useState)(),[n,r]=(0,a.useState)(""),m=(0,i.defaultLayoutPlugin)();(0,a.useEffect)((()=>{s&&h()}),[s]);let h=async()=>{let{data:e}=await(0,t.Sf)(s);var l,a,d;(console.log(e),null!==e&&void 0!==e&&e.error)||(c(null===e||void 0===e||null===(l=e.results)||void 0===l?void 0:l.templete),await r(null===e||void 0===e||null===(a=e.results)||void 0===a||null===(d=a.templete)||void 0===d?void 0:d.templete[0]))};return(0,o.jsx)("div",{class:"modal-body view_temp_modal",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-4",children:(0,o.jsxs)("p",{children:["Template Name : ",null===l||void 0===l?void 0:l.templeteName]})}),(0,o.jsxs)("div",{className:"text-end col-8",children:[(0,o.jsxs)("p",{children:["Status : ",(0,o.jsx)("span",{className:"text-warning",children:null===l||void 0===l?void 0:l.status})]}),(null===l||void 0===l?void 0:l.rejectedReason)&&(0,o.jsx)("div",{children:(0,o.jsxs)("p",{className:"my-4",children:["Rejected Reason :",(0,o.jsxs)("span",{className:"text-warning",children:[" ",null===l||void 0===l?void 0:l.rejectedReason]})]})})]}),(0,o.jsx)("div",{className:"my-4 position-relative",children:n&&(0,o.jsx)(d.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js",children:(0,o.jsx)("div",{children:(0,o.jsx)(d.Viewer,{fileUrl:"".concat(n),plugins:[m]})})})})]})})}},93414:()=>{},70172:()=>{},2001:()=>{},33779:()=>{},66558:()=>{},82258:()=>{}}]);
//# sourceMappingURL=7837.4899fa61.chunk.js.map