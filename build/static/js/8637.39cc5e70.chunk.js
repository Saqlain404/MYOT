"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[8637],{8637:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var l=a(2791),i=a(9040),t=a(7689),n=a(1087),d=a(3773),r=a(8709),c=(a(9655),a(2426)),o=a.n(c),m=a(1888),x=a(7497),h=a(1161),v=a(184);const g=()=>{var e;const s=(0,t.s0)(),[c,g]=(0,l.useState)(null),[p,j]=(0,l.useState)(null),[u,N]=(0,l.useState)(""),[b,f]=(0,l.useState)([]),[w,C]=(0,l.useState)(),[y,k]=(0,l.useState)(!1),[A,_]=(0,l.useState)({columns:[{label:"Document",field:"name",sort:"asc",width:50,selected:!1},{label:"Department",field:"department",sort:"asc",width:100,searchable:!0,selected:!1},{label:"Date of Request",field:"date",sort:"asc",width:100,selected:!1},{label:"Status",field:"status",sort:"asc",width:100,selected:!1},{label:"Comments",field:"comments",sort:"asc",width:100,selected:!1},{label:"Actions",field:"actions",sort:"asc",width:100,selected:!1}],rows:[],hiddenColumns:[],selectedColumns:[]}),S=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id");(0,l.useEffect)((()=>{E()}),[]);const E=async()=>{let e=await(0,r.PR)(S);null===e||void 0===e||e.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),console.log(e);const s=[];if(null===e||void 0===e||!e.error){let a=e;console.log(a),null===a||void 0===a||a.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),null===a||void 0===a||a.map(((e,a)=>{var l,i,t,d,r,c,m,x,h,g,p;const j={};j.name=null===e||void 0===e||null===(l=e.templete_Id)||void 0===l?void 0:l.templeteName,j.assigned=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{className:"w_20_h_20",src:null===e||void 0===e||null===(i=e.templete_Id)||void 0===i||null===(t=i.manager)||void 0===t?void 0:t.profile_Pic,alt:""}),(0,v.jsx)("span",{className:"ms-2 text-capitalize",children:null===e||void 0===e||null===(d=e.templete_Id)||void 0===d||null===(r=d.manager)||void 0===r?void 0:r.name})]}),j.version=(0,v.jsx)(v.Fragment,{children:null!==e&&void 0!==e&&null!==(c=e.templete_Id)&&void 0!==c&&c.templeteVersion?" ".concat(null===e||void 0===e||null===(m=e.templete_Id)||void 0===m||null===(x=m.templeteVersion[0])||void 0===x?void 0:x.version):"No versions found"}),j.date=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:"/images/dashboard/CalendarBlank.png"}),(0,v.jsx)("span",{className:"ms-2",children:o()(null===e||void 0===e?void 0:e.createdAt).format("L")})]}),j.department=(null===e||void 0===e||null===(h=e.templete_Id)||void 0===h||null===(g=h.manager)||void 0===g||null===(p=g.department_Id)||void 0===p?void 0:p.departmentName)||"NA",j.status=(0,v.jsx)("span",{className:'"td-text status" '.concat("Pending"===(null===e||void 0===e?void 0:e.status)?"text-info":"Approved"===(null===e||void 0===e?void 0:e.status)?"text-warning":"In Progress"===(null===e||void 0===e?void 0:e.status)?"text-primary":"Completed"==(null===e||void 0===e?void 0:e.status)?"text-success":"text-danger"),children:null===e||void 0===e?void 0:e.status}),j.comments=(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"text-center",children:(0,v.jsx)("a",{onClick:()=>C(null===e||void 0===e?void 0:e._id),type:"button","data-bs-toggle":"modal","data-bs-target":"#commentModal",children:(0,v.jsx)("img",{src:"/images/dashboard/Comment.png",className:"mx-auto d-block"})})})}),j.actions=(0,v.jsxs)("div",{class:"text-center",children:[(0,v.jsx)("a",{className:"cursor_pointer",type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,v.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto"})}),(0,v.jsxs)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:[(0,v.jsx)("li",{children:(0,v.jsxs)(n.rU,{class:"dropdown-item border-bottom",to:"/Employee/view-details/".concat(null===e||void 0===e?void 0:e._id),children:[(0,v.jsx)("img",{src:"/images/users/AddressBook.svg",alt:"",className:"me-2"}),"View Document"]})}),(0,v.jsx)("li",{children:(0,v.jsxs)(n.rU,{class:"dropdown-item",to:"/Employee/Comment/".concat(null===e||void 0===e?void 0:e._id),children:[(0,v.jsx)("img",{src:"/images/dashboard/Comment.png",alt:"",className:"me-2"}),"Comments"]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("a",{class:"dropdown-item border-bottom",href:"#",children:[(0,v.jsx)("img",{src:"/images/DownloadSimple.svg",alt:"",className:"me-2"}),"Download"]})})]})]}),s.push(j)})),_({...A,rows:s})}},I=A.columns.map((e=>({...e,label:(0,v.jsx)("div",{className:"",children:(0,v.jsxs)(x.Z,{checked:A.selectedColumns.includes(e.field),onChange:()=>(e=>{let s=[...A.selectedColumns];const a=s.indexOf(e);a>-1?s.splice(a,1):s.push(e),_({...A,selectedColumns:s})})(e.field),defaultChecked:!0,children:[" ",e.label]})},e.field)})));(0,l.useEffect)((()=>{(async()=>{const[e]=await(0,r.WL)();e&&(f(e),console.log(e))})()}),[]);const D=async e=>{const a={...L,user:localStorage.getItem("user_id")};await(0,r.RZ)({documentName:a.documentName,templete_Id:a.templateId,creator_Id:localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id")}).then((e=>{var a;null!==(a=e.data)&&void 0!==a&&a.error||(console.log("Success"),s(""))})),V({documentName:"",templateId:""}),E()},F=I.filter((e=>!A.hiddenColumns.includes(e.field)));(0,l.useEffect)((()=>{(async()=>{const e=await(0,r._3)();if((null===e||void 0===e||!e.error)&&null!==e&&void 0!==e&&e.data){var s,a,l;const i=null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.results.count,t=null===e||void 0===e||null===(a=e.data)||void 0===a||null===(l=a.results)||void 0===l?void 0:l.countRecivedDocument;console.log(e),g(i),j(t)}})()}),[]);const[B,M]=(0,l.useState)(!1),[L,V]=(0,l.useState)({documentName:"",templateId:""}),[U,Z]=(0,l.useState)(null);(0,l.useEffect)((()=>{(async()=>{var e,s;const a=await(0,r.Fc)(),l=null===a||void 0===a||null===(e=a[0])||void 0===e||null===(s=e.results)||void 0===s?void 0:s.employee;Z(l)})()}),[]),console.log(U);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"container-fluid",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-2 sidebar",children:(0,v.jsx)(d.Z,{})}),(0,v.jsxs)("div",{className:"col-7 middle-content",children:[(0,v.jsx)("div",{className:"container-fluid border-bottom mb-4",children:(0,v.jsxs)("nav",{className:"row header bg-white  ",children:[(0,v.jsx)("ul",{className:"col align-items-center mt-3",children:(0,v.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,v.jsx)("a",{className:"nav-link fw-bold ms-2",children:"Home"})})}),(0,v.jsx)("div",{className:"col d-flex align-items-center  justify-content-end",children:(0,v.jsxs)("div",{className:"",children:[(0,v.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,v.jsx)(n.rU,{to:"/Employee/Chat",children:(0,v.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,v.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})})]})}),(0,v.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,v.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-department",children:(0,v.jsxs)("div",{class:"modal-content border-0",children:[(0,v.jsxs)("div",{class:"d-flex modal-header border-bottom",children:[(0,v.jsx)("p",{class:"",id:"exampleModalLabel",children:"New Document"}),(0,v.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,v.jsx)("form",{action:"",onSubmit:D,children:(0,v.jsx)("div",{className:"row p-3",children:(0,v.jsx)("div",{className:"col-12 mb-3 ",children:(0,v.jsxs)("select",{className:"col-12 modal-input  p-2",name:"templateId",onChange:e=>{const s=e.target.name,a=e.target.value;V({...L,[s]:a})},value:L.templateId,children:[(0,v.jsx)("option",{value:"",disabled:!0,children:"Select Document Type *"}),null===b||void 0===b?void 0:b.map((e=>(0,v.jsx)("option",{value:e._id,children:e.templeteName},e._id)))]})})})}),(0,v.jsxs)("div",{className:"d-flex justify-content-end mb-3",children:[(0,v.jsx)(h.Z,{style:{width:"100px"},appearance:"primary",type:"submit",className:"btn mb-1 mt-2 me-2 rounded-2","data-bs-dismiss":"modal",onClick:()=>D(),disabled:!L.templateId,children:"Request"}),(0,v.jsx)(h.Z,{type:"button",style:{width:"100px"},"data-bs-dismiss":"modal","aria-label":"Close",className:"btn mb-1 mt-2 me-2 rounded-2",children:"Cancel"})]})]})})}),(0,v.jsx)("div",{className:"col-12 mb-4",children:(0,v.jsxs)("div",{className:"row statics_part",children:[(0,v.jsx)("div",{className:"col-md-4 ",children:(0,v.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"My Department"})}),(0,v.jsx)("div",{className:"d-flex  mt-4",children:(0,v.jsx)("h3",{className:"department-name mb-0 fw-semibold fs-7",children:null!==U&&void 0!==U&&U.department_Id?null===U||void 0===U||null===(e=U.department_Id)||void 0===e?void 0:e.departmentName:"Admin"})})]})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"Document Requests"})}),(0,v.jsx)("div",{className:"d-flex  mt-4",children:(0,v.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:null!==c?c:0})})]})}),(0,v.jsx)("div",{className:"col-md-4",children:(0,v.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,v.jsx)("div",{className:"statics_left",children:(0,v.jsx)("h6",{className:"mb-0 header-card-text",children:"Recieved Documents"})}),(0,v.jsx)("div",{className:"d-flex justify-content-between mt-4",children:(0,v.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:null!==p?p:0})})]})})]})}),(0,v.jsxs)("div",{className:"position-relative",children:[(0,v.jsx)("p",{className:"table-name mb-2",children:"Documents"}),(0,v.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsxs)("div",{className:"col-md-3 table-searchbar-imgs",children:[(0,v.jsx)("img",{src:"/images/dashboard/Plus-icon.png",className:"p-2 table-searchbar-img",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}),(0,v.jsx)("img",{src:"/images/dashboard/ArrowsDownUp.png",onClick:()=>{const e="asc"===A.sortType?"desc":"asc",s=[...A.rows].sort(((s,a)=>{var l,i,t,n;let d=0;return(null===(l=s.name)||void 0===l?void 0:l.toLowerCase())<(null===(i=a.name)||void 0===i?void 0:i.toLowerCase())?d=-1:(null===(t=s.name)||void 0===t?void 0:t.toLowerCase())>(null===(n=a.name)||void 0===n?void 0:n.toLowerCase())&&(d=1),"asc"===e?d:-1*d}));console.log(s),_({...A,rows:s,sortType:e})},className:"p-2 table-searchbar-img border-end cursor_pointer"})]}),(0,v.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,v.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===A||void 0===A?void 0:A.selectedColumns)&&(null===A||void 0===A?void 0:A.selectedColumns.length),(0,v.jsx)("span",{children:" Selected"})]}),y?(0,v.jsx)("p",{className:"hide-selected ms-2 m-0 text-nowrap cursor_pointer ",onClick:()=>{_({...A,hiddenColumns:[],selectedColumns:[]}),k(!1)},children:"Clear Selection"}):(0,v.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[...A.hiddenColumns,...A.selectedColumns];_({...A,hiddenColumns:e,selectedColumns:[]}),k(!0)},children:"Hide Selected"})]}),(0,v.jsx)("div",{class:"search_icon",children:(0,v.jsx)("img",{width:20,src:a(8879)})})]}),(0,v.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,v.jsx)("div",{className:"col-12 mdb_table mt-3 mb-4",children:(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsx)(m.g0K,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:{...A,columns:F},noBottomColumns:!0,paginationLabel:"\xab\xbb",sortable:!1})})})]}),(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("p",{className:"ms-3",children:"About"}),(0,v.jsx)("p",{className:"ms-3",children:"Support"}),(0,v.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(i.Z,{})}),(0,v.jsx)("div",{class:"modal fade",id:"commentModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,v.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,v.jsxs)("div",{class:"modal-content",children:[(0,v.jsxs)("div",{class:"modal-header",children:[(0,v.jsx)("h5",{class:"modal-title th-text",id:"exampleModalLabel",children:"Add comment"}),(0,v.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"closeForm"})]}),(0,v.jsx)("div",{class:"modal-body",children:(0,v.jsxs)("form",{className:"rounded",onSubmit:async e=>{e.preventDefault();let s=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id"),a=await(0,r._r)({comment:u,document_Id:w,creator_Id:s});null!==a&&void 0!==a&&a.error||N("")},children:[(0,v.jsxs)("div",{className:"mb-3 border-bottom",children:[(0,v.jsx)("label",{className:"form-label th-text",children:"Comment or type"}),(0,v.jsx)("input",{type:"text",className:"form-control border-0 w-100",placeholder:"Type comment...",value:u,onChange:e=>N(e.target.value)})]}),(0,v.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:"/images/tasks/assign comments.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/mention.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/task.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/emoji.svg",alt:"",className:"comment-img"}),(0,v.jsx)("img",{src:"/images/tasks/attach_attachment.svg",alt:"",className:"comment-img"})]}),(0,v.jsx)("div",{children:(0,v.jsx)(h.Z,{style:{width:"100px"},type:"submit",appearance:"primary",className:"comment-btn","data-bs-dismiss":"modal",disabled:!u||/^\s+$/.test(u),children:"Comment"})})]})]})})]})})})]})})})}},3773:(e,s,a)=>{a.d(s,{Z:()=>r});a(2791);var l=a(7689),i=a(1087),t=a(8709),n=a(1967),d=a(184);const r=()=>{const e=(0,l.s0)(),s=(0,l.TH)();return(0,d.jsx)("div",{className:"container-fluid  sidebar",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"mb-4",children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"28",viewBox:"0 0 35 28",fill:"none",className:"logo ",children:[(0,d.jsx)("path",{d:"M12.5935 2.38856C11.5079 2.46075 10.4909 2.93234 9.74802 3.70798C9.00516 4.48363 8.59188 5.50548 8.59174 6.56697V23.7398C8.60114 24.2959 8.49698 24.8483 8.28532 25.3647C8.07367 25.8811 7.75876 26.3513 7.35895 26.7478C6.95914 27.1443 6.48242 27.4592 5.95658 27.6742C5.43074 27.8892 4.8663 27.9999 4.29616 27.9999C3.72602 27.9999 3.16158 27.8892 2.63574 27.6742C2.10991 27.4592 1.63319 27.1443 1.23337 26.7478C0.833561 26.3513 0.51865 25.8811 0.306997 25.3647C0.0953446 24.8483 -0.00881665 24.2959 0.00058408 23.7398V7.01364C0.000837593 5.58774 0.446624 4.19579 1.27852 3.02334C2.11041 1.8509 3.28888 0.953664 4.65684 0.451247C6.0248 -0.0511689 7.51724 -0.134896 8.93523 0.211228C10.3532 0.557351 11.6294 1.31688 12.5935 2.38856Z",fill:"url(#paint0_linear_417_9559)"}),(0,d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M34.9993 23.7396V7.01347C34.9994 5.58732 34.5537 4.19505 33.7217 3.02233C32.8898 1.84961 31.7111 0.952175 30.3429 0.449708C28.9747 -0.0527583 27.4819 -0.136379 26.0637 0.209998C24.6455 0.556375 23.3693 1.31629 22.4052 2.3884C23.4912 2.45978 24.5089 2.93108 25.2521 3.70687C25.7166 4.19174 26.0522 4.77291 26.2385 5.39983C26.0522 4.77294 25.7166 4.19181 25.2521 3.70696C24.5089 2.93117 23.4913 2.45987 22.4052 2.38848C22.2498 2.56023 22.1035 2.73975 21.9672 2.92631C21.9298 2.97759 21.8936 3.02886 21.8586 3.08128L17.4993 9.6104L13.1413 3.08128C13.1062 3.02886 13.07 2.97759 13.0326 2.92631C12.8962 2.73947 12.7496 2.55993 12.5934 2.38848C11.5091 2.46233 10.4937 2.93464 9.75235 3.71011C9.01095 4.48558 8.59866 5.5065 8.59863 6.56689V11.6227L11.5562 16.0529C11.5912 16.1053 11.6274 16.1589 11.666 16.2102C12.3318 17.1145 13.2088 17.8513 14.2244 18.3595C15.2399 18.8677 16.3649 19.1327 17.5063 19.1327C18.6477 19.1327 19.7727 18.8677 20.7883 18.3595C21.8039 17.8513 22.6808 17.1145 23.3467 16.2102C23.3852 16.1589 23.4214 16.1053 23.4565 16.0529L26.4082 11.6227V23.7396C26.3988 24.2957 26.5029 24.8481 26.7146 25.3645C26.9262 25.881 27.2412 26.3512 27.641 26.7477C28.0408 27.1442 28.5175 27.4591 29.0433 27.674C29.5692 27.889 30.1336 27.9997 30.7038 27.9997C31.2739 27.9997 31.8383 27.889 32.3642 27.674C32.89 27.4591 33.3667 27.1442 33.7665 26.7477C34.1664 26.3512 34.4813 25.881 34.6929 25.3645C34.9046 24.8481 35.0087 24.2957 34.9993 23.7396Z",fill:"url(#paint1_linear_417_9559)"}),(0,d.jsxs)("defs",{children:[(0,d.jsxs)("linearGradient",{id:"paint0_linear_417_9559",x1:"6.29648",y1:"28.0629",x2:"6.27893",y2:"-1.63298",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{"stop-color":"#FF3FA6"}),(0,d.jsx)("stop",{offset:"0.704777","stop-color":"#FE8F45"}),(0,d.jsx)("stop",{offset:"0.9999","stop-color":"#FE8F46"})]}),(0,d.jsxs)("linearGradient",{id:"paint1_linear_417_9559",x1:"28.7747",y1:"0.738455",x2:"28.6235",y2:"27.8976",gradientUnits:"userSpaceOnUse",children:[(0,d.jsx)("stop",{offset:"0.03","stop-color":"#76B3FB"}),(0,d.jsx)("stop",{offset:"0.51","stop-color":"#4261F8"}),(0,d.jsx)("stop",{offset:"1","stop-color":"#8762DD"})]})]})]})}),(0,d.jsx)("div",{className:"col-auto col-mg-3 min-vh-100",children:(0,d.jsxs)("ul",{className:"nav nav-pills flex-column",children:[(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/Home"===s.pathname?"nav_active":""," "),children:(0,d.jsx)(i.rU,{to:"/Employee/Home",className:"text-decoration-none",children:(0,d.jsxs)("a",{className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/home2.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Home"})]})})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/Dashboard"===s.pathname?"nav_active":""," "),children:(0,d.jsx)(i.rU,{to:"/Employee/Dashboard",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/Employee/Dashboard",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/dashboard.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Dashboard"})]})})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/document"===s.pathname?"nav_active":""," "),children:(0,d.jsx)(i.rU,{to:"/Employee/document",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/File.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Document"})]})})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/history-log-request"===s.pathname?"nav_active":""," "),children:(0,d.jsx)(i.rU,{to:"/Employee/history-log-request",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/history-log.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"History Logs"})]})})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/received-doc"===s.pathname?"nav_active":""," "),children:(0,d.jsx)(i.rU,{to:"/Employee/received-doc",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/FileArrowDown.svg",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Recived Doc."})]})})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/Calender"===s.pathname?"nav_active":""," "),children:(0,d.jsx)(i.rU,{to:"/Employee/Calender",className:"text-decoration-none",children:(0,d.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/ic_calendar.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Calendar"})]})})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/profile"===s.pathname?"nav_active":""," "),children:(0,d.jsxs)(i.rU,{to:"/Employee/profile",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/my-profile.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"My Profile"})]})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/Settings"===s.pathname?"nav_active":""," "),children:(0,d.jsxs)(i.rU,{to:"/Employee/Settings",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/settings.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Settings"})]})}),(0,d.jsx)("li",{className:'"nav-item text-dark" '.concat("/Employee/Help"===s.pathname?"nav_active":""," "),children:(0,d.jsxs)(i.rU,{to:"/Employee/Help",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/help.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Help"})]})}),(0,d.jsx)("li",{onClick:async s=>{s.preventDefault();let a=localStorage.getItem("user_id"),{data:l}=await(0,t.WH)(a);localStorage.removeItem("token-company"),localStorage.removeItem("user_id"),localStorage.removeItem("myot_admin_id"),e("/Login")},className:'"nav-item text-dark" '.concat("/Employee/Login"===s.pathname?"nav_active":""," "),children:(0,d.jsxs)(i.rU,{to:"/Login",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,d.jsx)("img",{src:"/images/sidebar/logout.png",className:"align-middle sidebar-icon"}),(0,d.jsx)("span",{className:"ms-3 align-middle sidebar-btn",children:"Logout"})]})})]})}),(0,d.jsx)("div",{class:"dropdown position-fixed bottom-0 bg-white",children:(0,d.jsx)(n.Z,{})})]})})}},1967:(e,s,a)=>{a.d(s,{Z:()=>m});var l=a(2791),i=a(7689),t=a(1087),n=a(9434),d=a(4581),r=a(1830),c=a.n(r),o=a(184);const m=()=>{var e,s,a;const[r,m]=(0,l.useState)(),[x,h]=(0,l.useState)([]),v=(0,n.v9)(d.tT),g=(0,i.TH)(),p=(0,i.s0)();(0,l.useEffect)((()=>{const e=g.pathname.split("/");m(e[1])}),[g]),(0,l.useEffect)((()=>{let e=g.pathname.startsWith("/Admin"),s=g.pathname.startsWith("/Signatory"),a=g.pathname.startsWith("/Employee"),l=g.pathname.startsWith("/Approver"),i=g.pathname.startsWith("/Department"),t=localStorage.getItem("token-company"),n=null===v||void 0===v?void 0:v.employRole;null!==n&&void 0!==n&&n.includes("Admin")||!e||t||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==n&&void 0!==n&&n.includes("Signatory")||!s||t||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==n&&void 0!==n&&n.includes("Department Manager")||!i||t||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==n&&void 0!==n&&n.includes("Approver")||!l||t||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login")),null!==n&&void 0!==n&&n.includes("Employee")||!a||t||(c().fire({toast:!0,icon:"error",position:"top-end",title:"You may not have permission to access",showConfirmButton:!1,timerProgressBar:!0,timer:7e3}),p("/Login"))}),[g]),(0,l.useEffect)((()=>{j()}),[]);const j=async()=>{const e=null===v||void 0===v?void 0:v.employRole.flat(1/0);h(e)},u=["Admin","Department Manager","Signatory","Employee","Approver"];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("a",{className:"text-decoration-none pb-2 bg-white w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,o.jsxs)("div",{className:"profile",children:[(0,o.jsx)("div",{children:null!==v&&void 0!==v&&v.profile_Pic?(0,o.jsx)("img",{className:"w_50_h_50",src:null===v||void 0===v?void 0:v.profile_Pic,alt:"Profile"}):(0,o.jsx)("img",{className:"w_50_h_50",src:"/images/icons/user.jpg",alt:"Profile"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"text-dark text-capitalize",children:(null===v||void 0===v||null===(e=v.name)||void 0===e||null===(s=e.split(" "))||void 0===s||null===(a=s.slice(0,2))||void 0===a?void 0:a.join(" "))||(null===v||void 0===v?void 0:v.companyName)}),(0,o.jsx)("p",{className:"th-text",children:r&&"Department"===r?"Department Manager":r})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/images/sidebar/ArrowLineDown2.svg",alt:"hh"})})]})}),(0,o.jsx)("ul",{className:"dropdown-menu",children:null===u||void 0===u?void 0:u.map((e=>{if(null!==x&&void 0!==x&&x.includes(e)){const s="Department Manager"===e?"Department":e;return(0,o.jsx)(t.rU,{to:"/".concat(s,"/Home"),className:"text-decoration-none",children:(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"dropdown-item",children:e})})},e)}return null}))})]})}},9040:(e,s,a)=>{a.d(s,{Z:()=>i});a(2791);var l=a(184);const i=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container right-sidebar",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col",children:[(0,l.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col float-start ",children:(0,l.jsx)("h4",{className:"text-align-left float-start current-day",children:"Notifications"})}),(0,l.jsx)("div",{className:"col float-end",children:(0,l.jsx)("div",{className:" float-end me-1 ",children:(0,l.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"New user registered"})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Featured Icon.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"You have a bug that need to..."})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Featured Icon user.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"New user recentlu added by a.."})]})})]}),(0,l.jsxs)("ul",{className:"nav nav-pills flex-column  ",children:[(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col float-start  mt-4",children:(0,l.jsx)("h4",{className:"text-align-left float-start current-day",children:"Activities"})}),(0,l.jsx)("div",{className:"col float-end",children:(0,l.jsx)("div",{className:" float-end me-1 mt-4",children:(0,l.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"Edited the details of Project X"})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Avatar2.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"Changed the status of Project X"})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Avatar3.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"Submitted a bug"})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Avatar1.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"Modified A data in Page X"})]})}),(0,l.jsx)("li",{className:"nav-item text-dark",children:(0,l.jsxs)("a",{href:"/",className:"nav-link text-dark fs-5 align-middle ","aria-current":"page",children:[(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"/images/sidebar/Avatar4.png"})}),(0,l.jsx)("span",{className:"right-sidebar-item",children:"Deleted a page in Project X"})]})})]}),(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col float-start mt-4",children:(0,l.jsx)("h4",{className:"text-align-left float-start current-day",children:"Calendar"})}),(0,l.jsx)("div",{className:"col float-end",children:(0,l.jsx)("div",{className:" float-end me-1 mt-4",children:(0,l.jsx)("img",{src:"/images/chatbox/More-dots.svg",alt:"",className:"me-2"})})})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("p",{className:"day-time",children:" 09.00 AM"})}),(0,l.jsx)("div",{className:"col border-bottom d-flex",children:(0,l.jsx)("div",{className:"event-9am right-cal-event",children:(0,l.jsx)("p",{children:"Onboarding"})})})]}),(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("p",{className:"day-time",children:" 10.00 AM"})}),(0,l.jsx)("div",{className:"col border-bottom"})]}),(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col-3 ",children:(0,l.jsx)("p",{className:"day-time",children:" 11.00 AM"})}),(0,l.jsx)("div",{className:"col border-bottom"})]}),(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("p",{className:"day-time",children:" 12.00 PM"})}),(0,l.jsx)("div",{className:"col border-bottom d-flex",children:(0,l.jsx)("div",{className:"event-12pm right-cal-event",children:(0,l.jsx)("p",{children:"Onboarding"})})})]}),(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("p",{className:"day-time",children:" 01.00 PM"})}),(0,l.jsx)("div",{className:"col border-bottom"})]}),(0,l.jsxs)("div",{className:"row bg-white",children:[(0,l.jsx)("div",{className:"col-3",children:(0,l.jsx)("p",{className:"day-time",children:" 02.00 PM"})}),(0,l.jsx)("div",{className:"col border-bottom d-flex "})]})]})]})})})})},8879:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD7UlEQVRYR8WWXYhUZRiAn/cM/qQlZtbumbOGUlkq0V1BFEFt1JVQSwtChBmVZj904UVbO+c7s6b9IRaUuhe53cVWG11EQZCSBCoRIZZlQgt2zigutGBZ7c956ztzVmZnZ2bn7IC+d2fm/Xnen+/7XuEyi1zm+GQGWGd0/gh05KA9htGFEA0bGZ1rIk0BXL9Tr54Y41GBLoV7agQ7hfIxOQaiXvklC0xDgGW+LlngUBDYAixqxrHAJyg9oZGTTerXVstv1xVM8iWwtkJjGPhchOOx8htwncBNwP3A7YCT6p5XpbtkxNo3lJoVaOvTVbmYo8Bya63CQWL8kpFv6nmzwDpBjwibUx1V6Cr58mkjghkAtuwLHb6jnJmVPVGBrYjobNnY/11fHxaHD4F5wN+i3Bka+aGe7QwAz+g+FZ5KMlf2lozY/meSvNH1CDZz25KTkbIGI3EtJ9MA2o2udYQfU8VvowJ3N5t5tXM30O0CLye/C09EBXl/VoB8oO9Rnngk5r4wkK8zpV6hvNLo0jHhNHAlcCzy5bZZAdxAIwEXGI58WTXX4FN2eaP7ETba71yMdzqQqNrnxRZ0GL0xFn5NFJS3IiPbWgVwA31IYKjcBTaGvnxQF8D19S5xOJQoC1vCguxtFSDfpzcT83OaVDEy4tcFSCf3s3RoNkQFsUepJenYpVfE57mQOtkf+bKpEUAnwldpuTaHvuxrKTrg7dBrdJyR1M+eyJdn6gK0F3WdoxxPFUzkS9AqQEdRb42VY2lSr4S+vFoXoO1NXZy7wB/pDXYg8uXeVgHcQF8Q2J3MdUxXKZBkICtl2kWUL+oXKA8C8bjinTNyphUIN9AjUn6kxseVZeeM/NkYINDHgfKNpQxERuz3nMQL9BGFwaT8wlBYkK5ajqa/BYOay5/gFLAy7Vt36MtHWQk8o6tVOAIstak4yurfjVi/M2TGY+QG+oCQ7AFWJgU2ZIFw+3SNxMlp8pIklN2hkRfrJVFzH/AC7VUoXjRSipOLeePsNvmrbjWMOnmHbhR7fJckXRQOlm6hk26ZzARgld1AdwlUktsT0p+LeafyTl/+ul417x/sBfOcwA0VgQ7NV9bPtrA23Am9QJ9WeBtYkGUOROkPYStGJqxdPlBfhX9LBXmt4SmoFaR9h16bG6NHy6+aHap6MoYyFEPfGSM/TSm5RX1eNEnCtuSlaoim1vLE2aDm3BN0OnYtV1ao0AaMihLGwvfxIoZqzYgb6JMC/VNACj0lX3ZOfTcPkKUHVbrVEMCzkS/vJqekBb+ZTL2iPqbKwP/BRyYd7jjbK3atv3QAyTAWdVMcc7hyRi5ZBTLfA5nq24LyfxJhZTC25f8ZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=8637.39cc5e70.chunk.js.map