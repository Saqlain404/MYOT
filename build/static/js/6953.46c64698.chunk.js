"use strict";(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[6953],{36953:(e,s,l)=>{l.r(s),l.d(s,{default:()=>j});var a=l(72791),i=l(39040),t=l(11087),d=l(98726),o=l(30059),c=l(61134),n=l(41418),r=l.n(n),m=(l(29655),l(72426)),v=l.n(m),h=l(81888),p=l(21830),x=l.n(p),u=l(81161),b=(l(28113),l(80184));const j=()=>{var e,s,n,m,p,j,g,N,f;const[w,A]=(0,a.useState)(!1),[y,k]=(0,a.useState)(""),[C,S]=(0,a.useState)([]),[T,V]=(0,a.useState)([]),[B,_]=(0,a.useState)([]),[Z,M]=(0,a.useState)([]),[Q,F]=(0,a.useState)([]),U=localStorage.getItem("user_id"),{register:G,handleSubmit:I,formState:{errors:L},setValue:O}=(0,c.cI)();(0,a.useEffect)((()=>{R(),P(),X(),J(),H()}),[]);const[Y,E]=(0,a.useState)({columns:[{label:"Template Name",field:"name",sort:"asc",width:50,selected:!1},{label:"Assigned To",field:"assignTo",sort:"asc",width:50,selected:!1},{label:"Version",field:"version",sort:"asc",width:100,selected:!1},{label:"Date",field:"date",sort:"asc",width:100,searchable:!0,selected:!1},{label:"Status",field:"status",sort:"asc",width:100,selected:!1},{label:"Department",field:"department",sort:"asc",width:100,selected:!1},{label:"Actions",field:"actions",sort:"asc",width:100,selected:!1}],rows:[],hiddenColumns:[],selectedColumns:[]});(0,a.useEffect)((()=>{$(),H()}),[]);const R=async()=>{try{let{data:s}=await(0,o.AC)(U);if(console.log(s),null===s||void 0===s||!s.error){var e;let l=null===s||void 0===s||null===(e=s.results)||void 0===e?void 0:e.approver;S(l)}}catch(s){console.log(s)}},P=async()=>{try{let{data:s}=await(0,o.HA)(U);if(console.log(s),null===s||void 0===s||!s.error){var e;let l=null===s||void 0===s||null===(e=s.results)||void 0===e?void 0:e.approver;V(l)}}catch(s){console.log(s)}},X=async()=>{try{let{data:s}=await(0,o.IJ)(U);if(console.log(s),null===s||void 0===s||!s.error){var e;let l=null===s||void 0===s||null===(e=s.results)||void 0===e?void 0:e.admin;_(l)}}catch(s){console.log(s)}},J=async()=>{try{let{data:s}=await(0,o.vx)(U);if(console.log(s),null===s||void 0===s||!s.error){var e;let l=null===s||void 0===s||null===(e=s.results)||void 0===e?void 0:e.manager;M(l)}}catch(s){console.log(s)}},D=null===Y||void 0===Y||null===(e=Y.columns)||void 0===e?void 0:e.map((e=>({...e,label:(0,b.jsxs)("div",{children:[(0,b.jsx)("input",{type:"checkbox",checked:Y.selectedColumns.includes(e.field),onChange:()=>q(e.field),className:"me-1 mt-1"}),(0,b.jsx)("label",{children:e.label})]},e.field)}))),z=null===D||void 0===D?void 0:D.filter((e=>!Y.hiddenColumns.includes(e.field))),H=async e=>{const{data:s}=await(0,o.HP)(U),l=[];if(null===s||void 0===s||!s.error){var a;let e=null===s||void 0===s||null===(a=s.results)||void 0===a?void 0:a.templete;null===e||void 0===e||e.map(((e,s)=>{var a,i,d,o,c;let n={};n.name=null===e||void 0===e?void 0:e.templeteName,n.assignTo=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("img",{className:"w_20_h_20",src:null===e||void 0===e||null===(a=e.signatory)||void 0===a?void 0:a.profile_Pic,alt:""}),(0,b.jsx)("span",{className:"ms-2 text-capitalize",children:null===e||void 0===e||null===(i=e.signatory)||void 0===i?void 0:i.name})]}),n.version=null===e||void 0===e||null===(d=e.templeteVersion[0])||void 0===d?void 0:d.version,n.date=v()(null===e||void 0===e?void 0:e.createdAt).format("L"),n.status=(0,b.jsx)("span",{className:'"td-text status" '.concat("Pending"===(null===e||void 0===e?void 0:e.status)?"text-info":"Approved"===(null===e||void 0===e?void 0:e.status)?"text-warning":"In Progress"===(null===e||void 0===e?void 0:e.status)?"text-primary":"text-success"),children:null===e||void 0===e?void 0:e.status}),n.department=null===e||void 0===e||null===(o=e.manager)||void 0===o||null===(c=o.department_Id)||void 0===c?void 0:c.departmentName,n.actions=(0,b.jsxs)("div",{class:"text-center",children:[(0,b.jsx)("a",{className:"cursor_pointer",type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,b.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto"})}),(0,b.jsxs)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:[(0,b.jsx)("li",{children:(0,b.jsxs)(t.rU,{class:"dropdown-item",to:"/Department/Template-view",children:[(0,b.jsx)("img",{src:"/images/users/AddressBook.svg",alt:"",className:"me-2"}),"View Temp Details"]})}),(0,b.jsx)("li",{children:(0,b.jsxs)("a",{class:"dropdown-item",children:[(0,b.jsx)("img",{src:"/images/users/TextAlignLeft.svg",alt:"",className:"me-2"}),"Wrap Column"]})})]})]}),l.push(n)})),E({...Y,rows:l})}},q=e=>{let s=[...Y.selectedColumns];const l=s.indexOf(e);l>-1?s.splice(l,1):s.push(e),E({...Y,selectedColumns:s})},[K,W]=(0,a.useState)([]),$=async()=>{let{data:e}=await(0,o.nu)(U);null!==e&&void 0!==e&&e.error||W(null===e||void 0===e?void 0:e.results)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"container-fluid",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:"col-2 sidebar",children:(0,b.jsx)(d.Z,{})}),(0,b.jsxs)("div",{className:"col-7 middle-content",children:[(0,b.jsx)("div",{className:"container-fluid border-bottom sticky-top bg-white mb-4",children:(0,b.jsxs)("nav",{className:"row header bg-white  ",children:[(0,b.jsx)("ul",{className:"col align-items-center mt-3",children:(0,b.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,b.jsx)("a",{className:"nav-link ms-2",href:"app-email.html",children:"/Template"})})}),(0,b.jsxs)("div",{className:"col d-flex align-items-center  justify-content-end",children:[(0,b.jsx)("form",{className:"",role:"search",children:(0,b.jsx)("input",{className:"form-control search-bar",type:"search",placeholder:"Search","aria-label":"Search"})}),(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,b.jsx)(t.rU,{to:"/Department/Chat",children:(0,b.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,b.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})]})]})}),(0,b.jsx)("div",{className:"col-12 mb-4",children:(0,b.jsxs)("div",{className:"row statics_part",children:[(0,b.jsx)("div",{className:"col-md-3",children:(0,b.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,b.jsx)("div",{className:"statics_left",children:(0,b.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Template Create"})}),(0,b.jsx)("div",{className:"d-flex  mt-4",children:(0,b.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===K||void 0===K||null===(s=K.totalTempleted)||void 0===s||null===(n=s[0])||void 0===n?void 0:n.count)||0})})]})}),(0,b.jsx)("div",{className:"col-md-3 ",children:(0,b.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,b.jsx)("div",{className:"statics_left",children:(0,b.jsx)("h6",{className:"mb-0 header-card-text",children:"Template Awaiting"})}),(0,b.jsx)("div",{className:"d-flex  mt-4",children:(0,b.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===K||void 0===K||null===(m=K.totalAwaiting)||void 0===m||null===(p=m[0])||void 0===p?void 0:p.count)||0})})]})}),(0,b.jsx)("div",{className:"col-md-3 ",children:(0,b.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,b.jsx)("div",{className:"statics_left",children:(0,b.jsx)("h6",{className:"mb-0 header-card-text",children:"Recently Approved"})}),(0,b.jsx)("div",{className:"d-flex  mt-4",children:(0,b.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===K||void 0===K||null===(j=K.totalApproved)||void 0===j||null===(g=j[0])||void 0===g?void 0:g.count)||0})})]})}),(0,b.jsx)("div",{className:"col-md-3 ",children:(0,b.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,b.jsx)("div",{className:"statics_left",children:(0,b.jsx)("h6",{className:"mb-0 header-card-text",children:"Active Signatories"})}),(0,b.jsx)("div",{className:"d-flex mt-4",children:(0,b.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:(null===K||void 0===K||null===(N=K.aciveSignatory)||void 0===N||null===(f=N[0])||void 0===f?void 0:f.count)||0})})]})})]})}),(0,b.jsxs)("div",{className:"position-relative",children:[(0,b.jsx)("p",{className:"table-name mb-2",children:"Templates"}),(0,b.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,b.jsxs)("div",{className:"d-flex ",children:[(0,b.jsx)("div",{className:"mt-1",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:(0,b.jsx)("img",{src:"/images/dashboard/Plus-icon.png",alt:"",className:"p-2 table-searchbar-img"})}),(0,b.jsx)("div",{className:"col-md-3 table-searchbar-imgs",children:(0,b.jsx)("img",{onClick:()=>{const e="asc"===Y.sortType?"desc":"asc",s=[...Y.rows].sort(((s,l)=>{let a=0;return s.name<l.name?a=-1:s.name>l.name&&(a=1),"asc"===e?a:-1*a}));E({...Y,rows:s,sortType:e})},src:"/images/dashboard/ArrowsDownUp.png",className:"p-2 table-searchbar-img border-end cursor_pointer"})}),(0,b.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,b.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===Y||void 0===Y?void 0:Y.selectedColumns)&&(null===Y||void 0===Y?void 0:Y.selectedColumns.length),(0,b.jsx)("span",{children:" Selected"})]}),w?(0,b.jsx)("p",{className:"hide-selected m-0 text-nowrap cursor_pointer ",onClick:()=>{E({...Y,hiddenColumns:[],selectedColumns:[]}),A(!1)},children:"Clear Selection"}):(0,b.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[...Y.hiddenColumns,...Y.selectedColumns];E({...Y,hiddenColumns:e,selectedColumns:[]}),A(!0)},children:"Hide Selected"})]}),(0,b.jsx)("div",{class:"search_icon",children:(0,b.jsx)("img",{width:20,src:l(28879)})})]}),(0,b.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,b.jsx)("div",{className:"col-12 mdb_table mdb2 depart_table",children:(0,b.jsx)("div",{className:"table-responsive",children:(0,b.jsx)(h.g0K,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:{...Y,columns:z},noBottomColumns:!0,paginationLabel:"\xab\xbb",sortable:!1},Y)})})]}),(0,b.jsxs)("div",{className:"footer",children:[(0,b.jsx)("div",{children:"\xa9 2023 MYOT"}),(0,b.jsxs)("div",{className:"d-flex ",children:[(0,b.jsx)("p",{className:"ms-3",children:"About"}),(0,b.jsx)("p",{className:"ms-3",children:"Support"}),(0,b.jsx)("p",{className:"ms-3",children:"Contact Us"})]})]})]}),(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(i.Z,{})})]})}),(0,b.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,b.jsx)("div",{class:"modal-dialog modal-dialog-centered modal-dialog-department",children:(0,b.jsxs)("div",{class:"modal-content border-0",children:[(0,b.jsxs)("div",{class:"d-flex modal-header border-bottom",children:[(0,b.jsx)("p",{class:"",id:"exampleModalLabel",children:"Add Templates"}),(0,b.jsx)("button",{type:"button",class:"btn-close",id:"closeModal","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,b.jsxs)("form",{onSubmit:I((async e=>{let s=new FormData;console.log(e),s.append("templeteName",null===e||void 0===e?void 0:e.templeteName),s.append("approver",null===e||void 0===e?void 0:e.approver),s.append("signatory",null===e||void 0===e?void 0:e.signatory),s.append("manager",null===e||void 0===e?void 0:e.manager),s.append("creator_Id",U),s.append("templete",null===Q||void 0===Q?void 0:Q.profile_img);const{data:l}=(0,o.P7)(s);null!==l&&void 0!==l&&l.error||(console.log(l),x().fire({toast:!0,icon:"success",position:"top-end",title:"Template Added",showConfirmButton:!1,timerProgressBar:!0,timer:3e3}),document.getElementById("closeModal").click(),document.getElementById("reset-modal").click(),H())})),action:"",children:[(0,b.jsxs)("div",{className:"row p-3",children:[(0,b.jsxs)("div",{className:"col-md-6 mb-3",children:[(0,b.jsx)("input",{type:"text",placeholder:"Template Title",name:"templeteName",className:r()("col-12 modal-input td-text  p-2",{"is-invalid":L.templeteName}),...G("templeteName",{required:"* Template title is required",pattern:{value:/^(?!\s)[^\d]*(?:\s[^\d]+)*$/,message:"Spaces at the start & numbers are not allowed"}})}),L.templeteName&&(0,b.jsx)("div",{className:"invalid-feedback",children:L.templeteName.message})]}),(0,b.jsx)("div",{className:"col-md-6 mb-3",children:(0,b.jsx)("input",{autoComplete:"false",className:"form-control cursor_pointer",style:{height:"100%",width:"100%"},id:"profile_img",name:"profile_img",type:"file",required:!0,accept:"application/pdf",defaultValue:"",onChange:e=>((e,s)=>{if(F({...Q,[s]:e.target.files[0]}),"profile_img"===s){const s=e.target.files[0];URL.createObjectURL(s)}})(e,"profile_img")})}),(0,b.jsx)("div",{className:"col-12 mb-3 ",children:(0,b.jsx)("p",{className:"bg-primary-subtle th-text ps-4 p-2",children:"Assign"})}),(0,b.jsx)("div",{className:"col-12 border-bottom border-light mb-3 ",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("p",{className:"col-4 td-text p-2",children:[(0,b.jsx)("input",{className:" form-check-input checkbox-table ms-4 me-4",type:"checkbox",value:""}),"Approver"]}),(0,b.jsxs)("select",{name:"approver",className:r()(" col modal-input th-text p-2 me-3",{"is-invalid":L.approver}),...G("approver",{required:"* Please select a Approver"}),children:[(0,b.jsx)("option",{className:"w-100",children:"Select Approver"}),C&&C.map((e=>(0,b.jsx)("option",{className:"w-100",value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id)))]}),L.approver&&(0,b.jsx)("div",{className:"invalid-feedback",children:L.approver.message})]})}),(0,b.jsx)("div",{className:"col-12 border-bottom border-light mb-3 ",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("p",{className:"col-4 td-text p-2",children:[(0,b.jsx)("input",{className:" form-check-input checkbox-table ms-4 me-4",type:"checkbox",value:""}),"Signatory"]}),(0,b.jsxs)("select",{name:"signatory",className:r()(" col modal-input th-text p-2 me-3",{"is-invalid":L.signatory}),...G("signatory",{required:"* Please select a signatory"}),children:[(0,b.jsx)("option",{className:"w-100",children:"Select signatory"}),T&&(null===T||void 0===T?void 0:T.map((e=>(0,b.jsx)("option",{className:"w-100",value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id))))]}),L.signatory&&(0,b.jsx)("div",{className:"invalid-feedback",children:L.signatory.message})]})}),(0,b.jsx)("div",{className:"col-12  mb-3 ",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("p",{className:"col-4 td-text p-2",children:[(0,b.jsx)("input",{className:" form-check-input checkbox-table ms-4 me-4",type:"checkbox",value:""}),"Departments"]}),(0,b.jsxs)("select",{name:"manager",className:r()(" col modal-input th-text p-2 me-3",{"is-invalid":L.manager}),...G("manager",{required:"* Please select a Manager"}),children:[(0,b.jsx)("option",{className:"w-100",children:"Select Manager"}),Z&&(null===Z||void 0===Z?void 0:Z.map((e=>(0,b.jsx)("option",{className:"w-100",value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e._id))))]}),L.manager&&(0,b.jsx)("div",{className:"invalid-feedback",children:L.manager.message})]})})]}),(0,b.jsxs)("div",{className:"d-flex justify-content-end mb-3",children:[(0,b.jsx)(u.Z,{style:{width:"150px"},appearance:"primary",className:"btn mb-3 me-2 rounded-2",type:"submit",children:"Add New"}),(0,b.jsx)(u.Z,{style:{width:"100px"},type:"reset",id:"reset-modal",className:"btn mb-3 mx-2 rounded-2 bg-light text-dark border-0","data-bs-dismiss":"modal","aria-label":"Close",children:"Cancel"})]})]})]})})})]})}},28879:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD7UlEQVRYR8WWXYhUZRiAn/cM/qQlZtbumbOGUlkq0V1BFEFt1JVQSwtChBmVZj904UVbO+c7s6b9IRaUuhe53cVWG11EQZCSBCoRIZZlQgt2zigutGBZ7c956ztzVmZnZ2bn7IC+d2fm/Xnen+/7XuEyi1zm+GQGWGd0/gh05KA9htGFEA0bGZ1rIk0BXL9Tr54Y41GBLoV7agQ7hfIxOQaiXvklC0xDgGW+LlngUBDYAixqxrHAJyg9oZGTTerXVstv1xVM8iWwtkJjGPhchOOx8htwncBNwP3A7YCT6p5XpbtkxNo3lJoVaOvTVbmYo8Bya63CQWL8kpFv6nmzwDpBjwibUx1V6Cr58mkjghkAtuwLHb6jnJmVPVGBrYjobNnY/11fHxaHD4F5wN+i3Bka+aGe7QwAz+g+FZ5KMlf2lozY/meSvNH1CDZz25KTkbIGI3EtJ9MA2o2udYQfU8VvowJ3N5t5tXM30O0CLye/C09EBXl/VoB8oO9Rnngk5r4wkK8zpV6hvNLo0jHhNHAlcCzy5bZZAdxAIwEXGI58WTXX4FN2eaP7ETba71yMdzqQqNrnxRZ0GL0xFn5NFJS3IiPbWgVwA31IYKjcBTaGvnxQF8D19S5xOJQoC1vCguxtFSDfpzcT83OaVDEy4tcFSCf3s3RoNkQFsUepJenYpVfE57mQOtkf+bKpEUAnwldpuTaHvuxrKTrg7dBrdJyR1M+eyJdn6gK0F3WdoxxPFUzkS9AqQEdRb42VY2lSr4S+vFoXoO1NXZy7wB/pDXYg8uXeVgHcQF8Q2J3MdUxXKZBkICtl2kWUL+oXKA8C8bjinTNyphUIN9AjUn6kxseVZeeM/NkYINDHgfKNpQxERuz3nMQL9BGFwaT8wlBYkK5ajqa/BYOay5/gFLAy7Vt36MtHWQk8o6tVOAIstak4yurfjVi/M2TGY+QG+oCQ7AFWJgU2ZIFw+3SNxMlp8pIklN2hkRfrJVFzH/AC7VUoXjRSipOLeePsNvmrbjWMOnmHbhR7fJckXRQOlm6hk26ZzARgld1AdwlUktsT0p+LeafyTl/+ul417x/sBfOcwA0VgQ7NV9bPtrA23Am9QJ9WeBtYkGUOROkPYStGJqxdPlBfhX9LBXmt4SmoFaR9h16bG6NHy6+aHap6MoYyFEPfGSM/TSm5RX1eNEnCtuSlaoim1vLE2aDm3BN0OnYtV1ao0AaMihLGwvfxIoZqzYgb6JMC/VNACj0lX3ZOfTcPkKUHVbrVEMCzkS/vJqekBb+ZTL2iPqbKwP/BRyYd7jjbK3atv3QAyTAWdVMcc7hyRi5ZBTLfA5nq24LyfxJhZTC25f8ZAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=6953.46c64698.chunk.js.map