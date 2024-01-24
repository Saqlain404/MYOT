"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[3017],{73017:(e,s,l)=>{l.r(s),l.d(s,{default:()=>p});var a=l(72791),t=l(39040),o=l(11087),d=l(89542),i=l(58400),n=l(72426),c=l.n(n),r=l(81888),m=l(7497),h=l(21830),x=l.n(h),v=l(81161),g=l(80184);const p=()=>{const[e,s]=(0,a.useState)([]),[n,h]=(0,a.useState)(""),[p,u]=(0,a.useState)(""),[j,b]=(0,a.useState)(),[N,f]=(0,a.useState)(!1),[C,w]=(0,a.useState)({columns:[{label:"Template Name",field:"name",sort:"asc",width:50,selected:!1},{label:"Creator",field:"assigned",sort:"asc",width:50,selected:!1},{label:"Version",field:"version",sort:"asc",width:100,selected:!1},{label:"Date of Creation",field:"date",sort:"asc",width:100,selected:!1},{label:"Department",field:"department",sort:"asc",width:100,searchable:!0,selected:!1},{label:"Comments",field:"comments",sort:"asc",width:100,selected:!1},{label:"Actions",field:"actions",sort:"asc",width:100,selected:!1}],rows:[],hiddenColumns:[],selectedColumns:[]});(0,a.useEffect)((()=>{k()}),[]);const A=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id"),k=async()=>{let e=await(0,i.IU)(A);console.log(e);const s=[];if(null===e||void 0===e||!e.error){let l=e;console.log(l),null===l||void 0===l||l.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),null===l||void 0===l||l.map(((e,l)=>{var a,t,d,i,n,r,m,h,x;const v={};v.name=null===e||void 0===e?void 0:e.templeteName,v.assigned=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("img",{className:"w_20_h_20",src:null===e||void 0===e||null===(a=e.manager)||void 0===a||null===(t=a[0])||void 0===t?void 0:t.profile_Pic,alt:""}),(0,g.jsx)("span",{className:"ms-2 text-capitalize",children:null===e||void 0===e||null===(d=e.manager)||void 0===d||null===(i=d[0])||void 0===i?void 0:i.name})]}),v.version=(0,g.jsx)(g.Fragment,{children:null!==e&&void 0!==e&&e.templeteVersion&&(null===e||void 0===e||null===(n=e.templeteVersion)||void 0===n?void 0:n.length)>0?" ".concat(null===e||void 0===e||null===(r=e.templeteVersion[(null===e||void 0===e?void 0:e.templeteVersion.length)-1])||void 0===r?void 0:r.version):"No versions found"}),v.date=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("img",{src:"/images/dashboard/CalendarBlank.png"})," ",(0,g.jsx)("span",{className:"ms-2",children:c()(null===e||void 0===e?void 0:e.createdAt).format("L")})]}),v.department=null===e||void 0===e||null===(m=e.manager)||void 0===m||null===(h=m[0])||void 0===h||null===(x=h.department[0])||void 0===x?void 0:x.departmentName,v.comments=(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"text-center",children:(0,g.jsx)("a",{onClick:()=>b(null===e||void 0===e?void 0:e._id),type:"button","data-bs-toggle":"modal","data-bs-target":"#commentModal",children:(0,g.jsx)("img",{src:"/images/dashboard/Comment.png",className:"mx-auto d-block"})})})}),v.actions=(0,g.jsxs)("div",{class:"text-center",children:[(0,g.jsx)("a",{className:"cursor_pointer",type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,g.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto"})}),(0,g.jsxs)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:[(0,g.jsx)("li",{children:(0,g.jsx)(o.rU,{to:"/Approver/Template-view/".concat(null===e||void 0===e?void 0:e._id),className:"text-decoration-none",children:(0,g.jsxs)("a",{class:"dropdown-item border-bottom",href:"/",children:[(0,g.jsx)("img",{src:"/images/users/AddressBook.svg",alt:"",className:"me-2"}),"View Template"]})})}),(0,g.jsx)("li",{children:(0,g.jsxs)(o.rU,{class:"dropdown-item",to:"/Approver/Comment/".concat(null===e||void 0===e?void 0:e._id),children:[(0,g.jsx)("img",{src:"/images/dashboard/Comment.png",alt:"",className:"me-2"}),"Comments"]})})]})]}),s.push(v)})),w({...C,rows:s})}},y=C.columns.map((e=>({...e,label:(0,g.jsx)("div",{className:"",children:(0,g.jsxs)(m.Z,{checked:C.selectedColumns.includes(e.field),onChange:()=>(e=>{let s=[...C.selectedColumns];const l=s.indexOf(e);l>-1?s.splice(l,1):s.push(e),w({...C,selectedColumns:s})})(e.field),defaultChecked:!0,children:[" ",e.label]})},e.field)}))).filter((e=>!C.hiddenColumns.includes(e.field)));return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-2 sidebar",children:(0,g.jsx)(d.Z,{})}),(0,g.jsxs)("div",{className:"col-7 middle-content",children:[(0,g.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,g.jsxs)("nav",{className:"row header bg-white  ",children:[(0,g.jsx)("ul",{className:"col align-items-center mt-3",children:(0,g.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,g.jsx)("a",{className:"nav-link fw-bold ms-2",children:"History Log / Rejected"})})}),(0,g.jsx)("div",{className:"col d-flex align-items-center  justify-content-end",children:(0,g.jsxs)("div",{className:"",children:[(0,g.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,g.jsx)(o.rU,{to:"/Approver/Chat",children:(0,g.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,g.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})})]})}),(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)(o.rU,{to:"/Approver/History-log-approved",className:"text-decoration-none",children:(0,g.jsx)("p",{className:"th-text me-3",children:"Approved"})}),(0,g.jsx)(o.rU,{to:"/Approver/History-log-rejected",className:"text-decoration-none",children:(0,g.jsx)("p",{className:"td-text border-bottom ",children:"Rejected"})})]}),(0,g.jsxs)("div",{className:"position-relative mt-4",children:[(0,g.jsx)("p",{className:"table-name mb-2",children:"Rejected Templates"}),(0,g.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,g.jsxs)("div",{className:"d-flex ",children:[(0,g.jsx)("div",{className:"col-md-3 table-searchbar-imgs",children:(0,g.jsx)("img",{src:"/images/dashboard/ArrowsDownUp.png",onClick:()=>{const e="asc"===C.sortType?"desc":"asc",s=[...C.rows].sort(((s,l)=>{var a,t,o,d;let i=0;return(null===(a=s.name)||void 0===a?void 0:a.toLowerCase())<(null===(t=l.name)||void 0===t?void 0:t.toLowerCase())?i=-1:(null===(o=s.name)||void 0===o?void 0:o.toLowerCase())>(null===(d=l.name)||void 0===d?void 0:d.toLowerCase())&&(i=1),"asc"===e?i:-1*i}));console.log(s),w({...C,rows:s,sortType:e})},className:"p-2 table-searchbar-img border-end cursor_pointer"})}),(0,g.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,g.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===C||void 0===C?void 0:C.selectedColumns)&&(null===C||void 0===C?void 0:C.selectedColumns.length),(0,g.jsx)("span",{children:" Selected"})]}),N?(0,g.jsx)("p",{className:"hide-selected ms-2 m-0 text-nowrap cursor_pointer ",onClick:()=>{w({...C,hiddenColumns:[],selectedColumns:[]}),f(!1)},children:"Clear Selection"}):(0,g.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[...C.hiddenColumns,...C.selectedColumns];w({...C,hiddenColumns:e,selectedColumns:[]}),f(!0)},children:"Hide Selected"})]}),(0,g.jsx)("div",{class:"search_icon",children:(0,g.jsx)("img",{width:20,src:l(28879)})})]}),(0,g.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,g.jsx)("div",{className:"col-12 mdb_table mt-3 mb-4",children:(0,g.jsx)("div",{className:"table-responsive",children:(0,g.jsx)(r.g0K,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:{...C,columns:y},noBottomColumns:!0,paginationLabel:"\xab\xbb",sortable:!1})})})]}),(0,g.jsxs)("div",{className:"footer mt-4",children:[(0,g.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,g.jsxs)("div",{className:"d-flex ",children:[(0,g.jsx)("p",{className:"ms-3",children:"About"}),(0,g.jsx)("p",{className:"ms-3",children:"Support"}),(0,g.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,g.jsx)("div",{className:"col",children:(0,g.jsx)(t.Z,{})}),(0,g.jsx)("div",{class:"modal fade",id:"commentModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,g.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,g.jsxs)("div",{class:"modal-content",children:[(0,g.jsxs)("div",{class:"modal-header",children:[(0,g.jsx)("h5",{class:"modal-title th-text",id:"exampleModalLabel",children:"Add comment"}),(0,g.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"closeForm"})]}),(0,g.jsx)("div",{class:"modal-body",children:(0,g.jsxs)("form",{className:"rounded",onSubmit:async e=>{e.preventDefault();let s=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id"),l=p.trim(),a=await(0,i.DG)({comment:l,templete_Id:j,creator_Id:s});null!==a&&void 0!==a&&a.error?""===l&&x().fire({toast:!0,icon:"error",position:"top-end",title:"Please enter a comment",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}):u("")},children:[(0,g.jsxs)("div",{className:"mb-3 border-bottom",children:[(0,g.jsx)("label",{className:"form-label th-text",children:"Comment or type"}),(0,g.jsx)("input",{type:"text",className:"form-control border-0 w-100",placeholder:"Type comment...",value:p,onChange:e=>u(e.target.value)})]}),(0,g.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:"/images/tasks/assign comments.svg",alt:"",className:"comment-img"}),(0,g.jsx)("img",{src:"/images/tasks/mention.svg",alt:"",className:"comment-img"}),(0,g.jsx)("img",{src:"/images/tasks/task.svg",alt:"",className:"comment-img"}),(0,g.jsx)("img",{src:"/images/tasks/emoji.svg",alt:"",className:"comment-img"}),(0,g.jsx)("img",{src:"/images/tasks/attach_attachment.svg",alt:"",className:"comment-img"})]}),(0,g.jsx)("div",{children:(0,g.jsx)(v.Z,{style:{width:"100px"},type:"submit",appearance:"primary",className:"comment-btn","data-bs-dismiss":"modal",disabled:!p||/^\s+$/.test(p),children:"Comment"})})]})]})})]})})})]})})})}},28879:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD7UlEQVRYR8WWXYhUZRiAn/cM/qQlZtbumbOGUlkq0V1BFEFt1JVQSwtChBmVZj904UVbO+c7s6b9IRaUuhe53cVWG11EQZCSBCoRIZZlQgt2zigutGBZ7c956ztzVmZnZ2bn7IC+d2fm/Xnen+/7XuEyi1zm+GQGWGd0/gh05KA9htGFEA0bGZ1rIk0BXL9Tr54Y41GBLoV7agQ7hfIxOQaiXvklC0xDgGW+LlngUBDYAixqxrHAJyg9oZGTTerXVstv1xVM8iWwtkJjGPhchOOx8htwncBNwP3A7YCT6p5XpbtkxNo3lJoVaOvTVbmYo8Bya63CQWL8kpFv6nmzwDpBjwibUx1V6Cr58mkjghkAtuwLHb6jnJmVPVGBrYjobNnY/11fHxaHD4F5wN+i3Bka+aGe7QwAz+g+FZ5KMlf2lozY/meSvNH1CDZz25KTkbIGI3EtJ9MA2o2udYQfU8VvowJ3N5t5tXM30O0CLye/C09EBXl/VoB8oO9Rnngk5r4wkK8zpV6hvNLo0jHhNHAlcCzy5bZZAdxAIwEXGI58WTXX4FN2eaP7ETba71yMdzqQqNrnxRZ0GL0xFn5NFJS3IiPbWgVwA31IYKjcBTaGvnxQF8D19S5xOJQoC1vCguxtFSDfpzcT83OaVDEy4tcFSCf3s3RoNkQFsUepJenYpVfE57mQOtkf+bKpEUAnwldpuTaHvuxrKTrg7dBrdJyR1M+eyJdn6gK0F3WdoxxPFUzkS9AqQEdRb42VY2lSr4S+vFoXoO1NXZy7wB/pDXYg8uXeVgHcQF8Q2J3MdUxXKZBkICtl2kWUL+oXKA8C8bjinTNyphUIN9AjUn6kxseVZeeM/NkYINDHgfKNpQxERuz3nMQL9BGFwaT8wlBYkK5ajqa/BYOay5/gFLAy7Vt36MtHWQk8o6tVOAIstak4yurfjVi/M2TGY+QG+oCQ7AFWJgU2ZIFw+3SNxMlp8pIklN2hkRfrJVFzH/AC7VUoXjRSipOLeePsNvmrbjWMOnmHbhR7fJckXRQOlm6hk26ZzARgld1AdwlUktsT0p+LeafyTl/+ul417x/sBfOcwA0VgQ7NV9bPtrA23Am9QJ9WeBtYkGUOROkPYStGJqxdPlBfhX9LBXmt4SmoFaR9h16bG6NHy6+aHap6MoYyFEPfGSM/TSm5RX1eNEnCtuSlaoim1vLE2aDm3BN0OnYtV1ao0AaMihLGwvfxIoZqzYgb6JMC/VNACj0lX3ZOfTcPkKUHVbrVEMCzkS/vJqekBb+ZTL2iPqbKwP/BRyYd7jjbK3atv3QAyTAWdVMcc7hyRi5ZBTLfA5nq24LyfxJhZTC25f8ZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=3017.6089b41f.chunk.js.map