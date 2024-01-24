"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[5213],{35213:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var l=a(72791),t=a(39040),d=a(57689),o=a(11087),n=a(23773),i=a(78709),c=(a(29655),a(5462),a(72426)),m=a.n(c),r=a(81888),x=a(7497),u=a(81161),h=a(80184);const g=()=>{const e=(0,d.s0)(),[s,c]=(0,l.useState)(""),[g,p]=(0,l.useState)(null),[v,b]=(0,l.useState)([]),[j,N]=(0,l.useState)(!1),[f,w]=(0,l.useState)([]),[C,A]=(0,l.useState)(""),[y,k]=(0,l.useState)(),[S,I]=(0,l.useState)({documentName:"",templateId:""}),[V,_]=(0,l.useState)(!1),[B,Z]=(0,l.useState)({columns:[{label:"Document Name",field:"name",sort:"asc",width:50,selected:!1},{label:"Department",field:"department",sort:"asc",width:100,searchable:!0,selected:!1},{label:"Version",field:"version",sort:"asc",width:100,selected:!1},{label:"Date of Request",field:"date",sort:"asc",width:100,selected:!1},{label:"Status",field:"status",sort:"asc",width:100,selected:!1},{label:"Comments",field:"comments",sort:"asc",width:100,selected:!1},{label:"Actions",field:"actions",sort:"asc",width:100,selected:!1}],rows:[],hiddenColumns:[],selectedColumns:[]}),M=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id");(0,l.useEffect)((()=>{F()}),[]);const F=async()=>{let e=await(0,i.PR)(M);console.log(e);const s=[];if(null===e||void 0===e||!e.error){let a=e;console.log(a),null===a||void 0===a||a.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),null===a||void 0===a||a.map(((e,a)=>{var l,t,d,n,i,c,r,x,u,g,p;const v={};v.name=null===e||void 0===e||null===(l=e.templete_Id)||void 0===l?void 0:l.templeteName,v.assigned=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{className:"w_20_h_20",src:null===e||void 0===e||null===(t=e.templete_Id)||void 0===t||null===(d=t.manager)||void 0===d?void 0:d.profile_Pic,alt:""}),(0,h.jsx)("span",{className:"ms-2 text-capitalize",children:null===e||void 0===e||null===(n=e.templete_Id)||void 0===n||null===(i=n.manager)||void 0===i?void 0:i.name})]}),v.version=(0,h.jsx)(h.Fragment,{children:null!==e&&void 0!==e&&null!==(c=e.templete_Id)&&void 0!==c&&c.templeteVersion?" ".concat(null===e||void 0===e||null===(r=e.templete_Id)||void 0===r||null===(x=r.templeteVersion[0])||void 0===x?void 0:x.version):"No versions found"}),v.date=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:"/images/dashboard/CalendarBlank.png"})," ",(0,h.jsx)("span",{className:"ms-2",children:m()(null===e||void 0===e?void 0:e.createdAt).format("L")})]}),v.department=(null===e||void 0===e||null===(u=e.templete_Id)||void 0===u||null===(g=u.manager)||void 0===g||null===(p=g.department_Id)||void 0===p?void 0:p.departmentName)||"NA",v.status=(0,h.jsx)("span",{className:'"td-text status" '.concat("Pending"===(null===e||void 0===e?void 0:e.status)?"text-info":"Approved"===(null===e||void 0===e?void 0:e.status)?"text-warning":"In Progress"===(null===e||void 0===e?void 0:e.status)?"text-primary":"Completed"==(null===e||void 0===e?void 0:e.status)?"text-success":"text-danger"),children:null===e||void 0===e?void 0:e.status}),v.comments=(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)("a",{onClick:()=>k(null===e||void 0===e?void 0:e._id),type:"button","data-bs-toggle":"modal","data-bs-target":"#commentModal",children:(0,h.jsx)("img",{src:"/images/dashboard/Comment.png",className:"mx-auto d-block"})})})}),v.actions=(0,h.jsxs)("div",{class:"text-center",children:[(0,h.jsx)("a",{className:"cursor_pointer",type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,h.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto"})}),(0,h.jsxs)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:[(0,h.jsx)("li",{children:(0,h.jsxs)(o.rU,{class:"dropdown-item border-bottom",to:"/Employee/view-details/".concat(null===e||void 0===e?void 0:e._id),children:[(0,h.jsx)("img",{src:"/images/users/AddressBook.svg",alt:"",className:"me-2"}),"View Document"]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(o.rU,{class:"dropdown-item",to:"/Employee/Comment/".concat(null===e||void 0===e?void 0:e._id),children:[(0,h.jsx)("img",{src:"/images/dashboard/Comment.png",alt:"",className:"me-2"}),"Comments"]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("a",{class:"dropdown-item border-bottom",href:"#",children:[(0,h.jsx)("img",{src:"/images/DownloadSimple.svg",alt:"",className:"me-2"}),"Download"]})})]})]}),s.push(v)})),Z({...B,rows:s})}},T=B.columns.map((e=>({...e,label:(0,h.jsx)("div",{className:"",children:(0,h.jsxs)(x.Z,{checked:B.selectedColumns.includes(e.field),onChange:()=>(e=>{let s=[...B.selectedColumns];const a=s.indexOf(e);a>-1?s.splice(a,1):s.push(e),Z({...B,selectedColumns:s})})(e.field),defaultChecked:!0,children:[" ",e.label]})},e.field)}))).filter((e=>!B.hiddenColumns.includes(e.field)));console.log(S),(0,l.useEffect)((()=>{(async()=>{const[e]=await(0,i.WL)();e&&w(e)})()}),[]);const D=async s=>{const a={...S,user:localStorage.getItem("user_id")};await(0,i.RZ)({documentName:a.documentName,templete_Id:a.templateId,creator_Id:localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id")}).then((s=>{var a;null!==(a=s.data)&&void 0!==a&&a.error||(N(!j),console.log("Success"),e(""))})),I({documentName:"",templateId:""}),F()};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-2 sidebar",children:(0,h.jsx)(n.Z,{})}),(0,h.jsxs)("div",{className:"col-7 middle-content",children:[(0,h.jsx)("div",{className:"container-fluid border-bottom mb-4",children:(0,h.jsxs)("nav",{className:"row header bg-white  ",children:[(0,h.jsx)("ul",{className:"col align-items-center mt-3",children:(0,h.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,h.jsx)("a",{className:"nav-link fw-bold ms-2",children:"Document Requests Management"})})}),(0,h.jsx)("div",{className:"col d-flex align-items-center  justify-content-end",children:(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,h.jsx)(o.rU,{to:"/Employee/Chat",children:(0,h.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,h.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})})]})}),(0,h.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,h.jsx)("p",{className:"table-name mb-2",children:"Document Requests Management"}),(0,h.jsxs)("div",{className:"d-flex justify-content-center th-text",children:[(0,h.jsxs)("div",{className:"d-flex whitespace-nowrap",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:[(0,h.jsx)("img",{src:"/images/tasks/Add.svg",alt:"",className:"pb-3"}),(0,h.jsx)("p",{className:"pt-1 text-nowrap",children:"Document Request"})]}),(0,h.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",alt:"",className:"pb-3 ms-2 text-secondary"})]})]}),(0,h.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,h.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-department",children:(0,h.jsxs)("div",{class:"modal-content border-0",children:[(0,h.jsxs)("div",{class:"d-flex modal-header border-bottom",children:[(0,h.jsx)("p",{class:"",id:"exampleModalLabel",children:"New Document"}),(0,h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,h.jsx)("form",{action:"",onSubmit:D,children:(0,h.jsx)("div",{className:"row p-3",children:(0,h.jsx)("div",{className:"col-12 mb-3 ",children:(0,h.jsxs)("select",{className:"col-12 modal-input  p-2",name:"templateId",onChange:e=>{const s=e.target.name,a=e.target.value;console.log(s,a),I({...S,[s]:a})},value:S.templateId,children:[(0,h.jsx)("option",{value:"",disabled:!0,children:"Select Document Type *"}),null===f||void 0===f?void 0:f.map((e=>(0,h.jsx)("option",{value:e._id,children:e.templeteName},e._id)))]})})})}),(0,h.jsxs)("div",{className:"d-flex justify-content-end mb-3",children:[(0,h.jsx)(u.Z,{style:{width:"100px"},appearance:"primary",type:"submit",className:"btn mb-1 mt-2 me-2 rounded-2","data-bs-dismiss":"modal",onClick:()=>D(),disabled:!S.templateId,children:"Request"}),(0,h.jsx)(u.Z,{style:{width:"100px"},type:"button","data-bs-dismiss":"modal","aria-label":"Close",className:"btn mb-1 mt-2 me-2 rounded-2",children:"Cancel"})]})]})})}),(0,h.jsxs)("div",{className:"position-relative mt-2",children:[(0,h.jsx)("p",{className:"table-name mb-2",children:"Documents"}),(0,h.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,h.jsxs)("div",{className:"d-flex ",children:[(0,h.jsxs)("div",{className:"col-md-3 table-searchbar-imgs",children:[(0,h.jsx)("img",{src:"/images/dashboard/Plus-icon.png",className:"p-2 table-searchbar-img",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}),(0,h.jsx)("img",{src:"/images/dashboard/ArrowsDownUp.png",onClick:()=>{const e="asc"===B.sortType?"desc":"asc",s=[...B.rows].sort(((s,a)=>{var l,t,d,o;let n=0;return(null===(l=s.name)||void 0===l?void 0:l.toLowerCase())<(null===(t=a.name)||void 0===t?void 0:t.toLowerCase())?n=-1:(null===(d=s.name)||void 0===d?void 0:d.toLowerCase())>(null===(o=a.name)||void 0===o?void 0:o.toLowerCase())&&(n=1),"asc"===e?n:-1*n}));console.log(s),Z({...B,rows:s,sortType:e})},className:"p-2 table-searchbar-img border-end cursor_pointer"})]}),(0,h.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,h.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===B||void 0===B?void 0:B.selectedColumns)&&(null===B||void 0===B?void 0:B.selectedColumns.length),(0,h.jsx)("span",{children:" Selected"})]}),V?(0,h.jsx)("p",{className:"hide-selected ms-2 m-0 text-nowrap cursor_pointer ",onClick:()=>{Z({...B,hiddenColumns:[],selectedColumns:[]}),_(!1)},children:"Clear Selection"}):(0,h.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[...B.hiddenColumns,...B.selectedColumns];Z({...B,hiddenColumns:e,selectedColumns:[]}),_(!0)},children:"Hide Selected"})]}),(0,h.jsx)("div",{class:"search_icon",children:(0,h.jsx)("img",{width:20,src:a(28879)})})]}),(0,h.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,h.jsx)("div",{className:"col-12 mdb_table mt-3 mb-4",children:(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsx)(r.g0K,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:{...B,columns:T},noBottomColumns:!0,paginationLabel:"\xab\xbb",sortable:!1})})})]}),(0,h.jsxs)("div",{className:"footer employ-footer",children:[(0,h.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,h.jsxs)("div",{className:"d-flex ",children:[(0,h.jsx)("p",{className:"ms-3",children:"About"}),(0,h.jsx)("p",{className:"ms-3",children:"Support"}),(0,h.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,h.jsx)("div",{className:"col",children:(0,h.jsx)(t.Z,{})}),(0,h.jsx)("div",{class:"modal fade",id:"commentModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,h.jsx)("div",{class:"modal-dialog modal-dialog-centered",children:(0,h.jsxs)("div",{class:"modal-content",children:[(0,h.jsxs)("div",{class:"modal-header",children:[(0,h.jsx)("h5",{class:"modal-title th-text",id:"exampleModalLabel",children:"Add comment"}),(0,h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",id:"closeForm"})]}),(0,h.jsx)("div",{class:"modal-body",children:(0,h.jsxs)("form",{className:"rounded",onSubmit:async e=>{e.preventDefault();let s=localStorage.getItem("user_id"),a=await(0,i._r)({comment:C,document_Id:y,creator_Id:s});null!==a&&void 0!==a&&a.error||A("")},children:[(0,h.jsxs)("div",{className:"mb-3 border-bottom",children:[(0,h.jsx)("label",{className:"form-label th-text",children:"Comment or type"}),(0,h.jsx)("input",{type:"text",className:"form-control border-0 w-100",placeholder:"Type comment...",value:C,onChange:e=>A(e.target.value)})]}),(0,h.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"/images/tasks/assign comments.svg",alt:"",className:"comment-img"}),(0,h.jsx)("img",{src:"/images/tasks/mention.svg",alt:"",className:"comment-img"}),(0,h.jsx)("img",{src:"/images/tasks/task.svg",alt:"",className:"comment-img"}),(0,h.jsx)("img",{src:"/images/tasks/emoji.svg",alt:"",className:"comment-img"}),(0,h.jsx)("img",{src:"/images/tasks/attach_attachment.svg",alt:"",className:"comment-img"})]}),(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{style:{width:"100px"},type:"submit",appearance:"primary",className:"comment-btn","data-bs-dismiss":"modal",disabled:!C||/^\s+$/.test(C),children:"Comment"})})]})]})})]})})})]})})})}},28879:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD7UlEQVRYR8WWXYhUZRiAn/cM/qQlZtbumbOGUlkq0V1BFEFt1JVQSwtChBmVZj904UVbO+c7s6b9IRaUuhe53cVWG11EQZCSBCoRIZZlQgt2zigutGBZ7c956ztzVmZnZ2bn7IC+d2fm/Xnen+/7XuEyi1zm+GQGWGd0/gh05KA9htGFEA0bGZ1rIk0BXL9Tr54Y41GBLoV7agQ7hfIxOQaiXvklC0xDgGW+LlngUBDYAixqxrHAJyg9oZGTTerXVstv1xVM8iWwtkJjGPhchOOx8htwncBNwP3A7YCT6p5XpbtkxNo3lJoVaOvTVbmYo8Bya63CQWL8kpFv6nmzwDpBjwibUx1V6Cr58mkjghkAtuwLHb6jnJmVPVGBrYjobNnY/11fHxaHD4F5wN+i3Bka+aGe7QwAz+g+FZ5KMlf2lozY/meSvNH1CDZz25KTkbIGI3EtJ9MA2o2udYQfU8VvowJ3N5t5tXM30O0CLye/C09EBXl/VoB8oO9Rnngk5r4wkK8zpV6hvNLo0jHhNHAlcCzy5bZZAdxAIwEXGI58WTXX4FN2eaP7ETba71yMdzqQqNrnxRZ0GL0xFn5NFJS3IiPbWgVwA31IYKjcBTaGvnxQF8D19S5xOJQoC1vCguxtFSDfpzcT83OaVDEy4tcFSCf3s3RoNkQFsUepJenYpVfE57mQOtkf+bKpEUAnwldpuTaHvuxrKTrg7dBrdJyR1M+eyJdn6gK0F3WdoxxPFUzkS9AqQEdRb42VY2lSr4S+vFoXoO1NXZy7wB/pDXYg8uXeVgHcQF8Q2J3MdUxXKZBkICtl2kWUL+oXKA8C8bjinTNyphUIN9AjUn6kxseVZeeM/NkYINDHgfKNpQxERuz3nMQL9BGFwaT8wlBYkK5ajqa/BYOay5/gFLAy7Vt36MtHWQk8o6tVOAIstak4yurfjVi/M2TGY+QG+oCQ7AFWJgU2ZIFw+3SNxMlp8pIklN2hkRfrJVFzH/AC7VUoXjRSipOLeePsNvmrbjWMOnmHbhR7fJckXRQOlm6hk26ZzARgld1AdwlUktsT0p+LeafyTl/+ul417x/sBfOcwA0VgQ7NV9bPtrA23Am9QJ9WeBtYkGUOROkPYStGJqxdPlBfhX9LBXmt4SmoFaR9h16bG6NHy6+aHap6MoYyFEPfGSM/TSm5RX1eNEnCtuSlaoim1vLE2aDm3BN0OnYtV1ao0AaMihLGwvfxIoZqzYgb6JMC/VNACj0lX3ZOfTcPkKUHVbrVEMCzkS/vJqekBb+ZTL2iPqbKwP/BRyYd7jjbK3atv3QAyTAWdVMcc7hyRi5ZBTLfA5nq24LyfxJhZTC25f8ZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=5213.4a5d2cef.chunk.js.map