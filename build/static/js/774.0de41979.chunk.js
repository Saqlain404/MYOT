/*! For license information please see 774.0de41979.chunk.js.LICENSE.txt */
(self.webpackChunkmyot=self.webpackChunkmyot||[]).push([[774],{16456:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var l=t(72791),n=t(39040),a=t(57689),r=t(11087),o=t(23773),i=t(78709),c=t(72426),d=t.n(c),m=t(81888),u=t(7497),v=t(13496),h=t(80184);const p=e=>{let{docCount:s}=e;const[t,n]=(0,l.useState)({series:[],options:{chart:{width:380,type:"donut"},plotOptions:{pie:{startAngle:-90,endAngle:270,stroke:{show:!0,width:40,colors:["transparent"],lineCap:"round"}}},dataLabels:{enabled:!1},fill:{type:"gradient"},legend:{formatter:function(e,s){return e+" - "+s.w.globals.series[s.seriesIndex]}},responsive:[{breakpoint:480,options:{chart:{width:100},legend:{position:"bottom"}}}],colors:["#000000","#95A4FC","#BAEDBD","#00FF00"]}});return(0,l.useEffect)((()=>{if(console.log(s),s){const e=[],t=[];Object.keys(s).forEach((l=>{const n=s[l]||0;e.push(n);const a="approvedPresent"===l?"Approved":"completePresent"===l?"Complete":"rejectedPresent"===l?"Rejected":"pendingPresent"===l?"Active":"Other";t.push(a)})),n((s=>({...s,series:e,options:{...s.options,labels:t}})))}}),[s]),(0,h.jsx)("div",{className:"d-flex justify-content-around mt-2",children:(0,h.jsxs)("div",{className:"dashboard_graph",children:[(0,h.jsx)("div",{id:"chart",children:(0,h.jsx)(v.Z,{options:t.options,series:t.series,type:"donut",width:320})}),(0,h.jsx)("div",{id:"html-dist"})]})})},x=()=>{var e;(0,a.s0)();const[s,c]=(0,l.useState)(""),[v,x]=(0,l.useState)(null),[f,b]=(0,l.useState)([]),[j,g]=(0,l.useState)(!1),[N,w]=(0,l.useState)({columns:[{label:"Document Name",field:"name",sort:"asc",width:50,selected:!1},{label:"Department",field:"department",sort:"asc",width:100,searchable:!0,selected:!1},{label:"Status",field:"status",sort:"asc",width:100,selected:!1},{label:"Actions",field:"actions",sort:"asc",width:100,selected:!1}],rows:[],hiddenColumns:[],selectedColumns:[]}),y=localStorage.getItem("user_id")||localStorage.getItem("myot_admin_id");(0,l.useEffect)((()=>{A()}),[]);const A=async()=>{let e=await(0,i.zO)(y);console.log(e);const s=[];if(null===e||void 0===e||!e.error){let t=e[0];console.log(t),null===t||void 0===t||t.sort(((e,s)=>new Date(null===s||void 0===s?void 0:s.createdAt)-new Date(null===e||void 0===e?void 0:e.createdAt))),null===t||void 0===t||t.map(((e,t)=>{var l,n,a,o,i,c,m;const u={};u.name=null===e||void 0===e||null===(l=e.templete_Id)||void 0===l?void 0:l.templeteName,u.version=(0,h.jsx)(h.Fragment,{children:null!==e&&void 0!==e&&null!==(n=e.templete_Id)&&void 0!==n&&n.templeteVersion?" ".concat(null===e||void 0===e||null===(a=e.templete_Id)||void 0===a||null===(o=a.templeteVersion[0])||void 0===o?void 0:o.version):"No versions found"}),u.date=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:"/images/dashboard/CalendarBlank.png"})," ",(0,h.jsx)("span",{className:"ms-2",children:d()(null===e||void 0===e?void 0:e.createdAt).format("L")})]}),u.department=null===e||void 0===e||null===(i=e.templete_Id)||void 0===i||null===(c=i.manager)||void 0===c||null===(m=c.department_Id)||void 0===m?void 0:m.departmentName,u.status=(0,h.jsx)("span",{className:'"td-text status" '.concat("Pending"===(null===e||void 0===e?void 0:e.status)?"text-info":"Approved"===(null===e||void 0===e?void 0:e.status)?"text-warning":"In Progress"===(null===e||void 0===e?void 0:e.status)?"text-primary":"Completed"==(null===e||void 0===e?void 0:e.status)?"text-success":"text-danger"),children:null===e||void 0===e?void 0:e.status}),u.actions=(0,h.jsxs)("div",{class:"text-center",children:[(0,h.jsx)("a",{className:"cursor_pointer",type:"","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,h.jsx)("img",{src:"/images/sidebar/ThreeDots.svg",className:"w-auto"})}),(0,h.jsxs)("ul",{class:"dropdown-menu border-0 shadow p-3 mb-5 rounded",children:[(0,h.jsx)("li",{children:(0,h.jsxs)(r.rU,{class:"dropdown-item border-bottom",to:"/Employee/view-details/".concat(null===e||void 0===e?void 0:e._id),children:[(0,h.jsx)("img",{src:"/images/users/AddressBook.svg",alt:"",className:"me-2"}),"View Document"]})}),(0,h.jsx)("li",{children:(0,h.jsxs)(r.rU,{class:"dropdown-item",to:"/Employee/Comment/".concat(null===e||void 0===e?void 0:e._id),children:[(0,h.jsx)("img",{src:"/images/dashboard/Comment.png",alt:"",className:"me-2"}),"Comments"]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("a",{class:"dropdown-item border-bottom",href:"#",children:[(0,h.jsx)("img",{src:"/images/DownloadSimple.svg",alt:"",className:"me-2"}),"Download"]})})]})]}),s.push(u)})),w({...N,rows:s})}},C=N.columns.map((e=>({...e,label:(0,h.jsx)("div",{className:"",children:(0,h.jsxs)(u.Z,{checked:N.selectedColumns.includes(e.field),onChange:()=>(e=>{let s=[...N.selectedColumns];const t=s.indexOf(e);t>-1?s.splice(t,1):s.push(e),w({...N,selectedColumns:s})})(e.field),defaultChecked:!0,children:[" ",e.label]})},e.field)}))).filter((e=>!N.hiddenColumns.includes(e.field))),[O,k]=(0,l.useState)(null),[Z,S]=(0,l.useState)(null);(0,l.useEffect)((()=>{(async()=>{const e=await(0,i.jP)();if((null===e||void 0===e||!e.error)&&null!==e&&void 0!==e&&e.data){var s,t,l;const n=null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.results.totalDocument,a=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(l=t.results)||void 0===l?void 0:l.pendingDocument;k(n),S(a)}})()}),[]);const[V,B]=(0,l.useState)();(0,l.useEffect)((()=>{(async()=>{var e,s;const t=await(0,i.hg)(y);B(null===t||void 0===t||null===(e=t[0])||void 0===e?void 0:e.results),console.log(null===t||void 0===t||null===(s=t[0])||void 0===s?void 0:s.results)})()}),[]);const[E,P]=(0,l.useState)();(0,l.useEffect)((()=>{(async()=>{var e,s;const t=await(0,i.Do)(y);P(null===t||void 0===t||null===(e=t[0])||void 0===e?void 0:e.results),console.log(null===t||void 0===t||null===(s=t[0])||void 0===s?void 0:s.results)})()}),[]);const[T,_]=(0,l.useState)();return(0,l.useEffect)((()=>{(async()=>{var e;const s=await(0,i.c$)();_(null===s||void 0===s||null===(e=s[0])||void 0===e?void 0:e.document)})()}),[]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-2 sidebar",children:(0,h.jsx)(o.Z,{})}),(0,h.jsxs)("div",{className:"col-7 middle-content",children:[(0,h.jsx)("div",{className:"container-fluid border-bottom mb-4",children:(0,h.jsxs)("nav",{className:"row header bg-white  ",children:[(0,h.jsx)("ul",{className:"col align-items-center mt-3",children:(0,h.jsx)("li",{className:"nav-item dropdown-hover d-none d-lg-block",children:(0,h.jsx)("a",{className:"nav-link  fw-bold ms-2",children:"Dashboard"})})}),(0,h.jsx)("div",{className:"col d-flex align-items-center  justify-content-end",children:(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("img",{src:"/images/dashboard/announcement.png",alt:"",className:"ms-4 "}),(0,h.jsx)(r.rU,{to:"/Employee/Chat",children:(0,h.jsx)("img",{src:"/images/dashboard/chat-left-dots-fill.png",alt:"",className:"ms-4"})}),(0,h.jsx)("img",{src:"/images/dashboard/round-notifications.png",alt:"",className:"ms-4"})]})})]})}),(0,h.jsx)("div",{className:"col-12 mb-4",children:(0,h.jsxs)("div",{className:"row statics_part",children:[(0,h.jsx)("div",{className:"col-md-4",children:(0,h.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,h.jsx)("div",{className:"statics_left",children:(0,h.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Document"})}),(0,h.jsx)("div",{className:"d-flex  mt-4",children:(0,h.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:null!==O?O:0})})]})}),(0,h.jsx)("div",{className:"col-md-4 ",children:(0,h.jsxs)("div",{className:"statics_box card-clr-2-4",children:[(0,h.jsx)("div",{className:"statics_left",children:(0,h.jsx)("h6",{className:"mb-0 header-card-text",children:"Total Pending Request"})}),(0,h.jsx)("div",{className:"d-flex  mt-4",children:(0,h.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:null!==Z?Z:0})})]})}),(0,h.jsx)("div",{className:"col-md-4 ",children:(0,h.jsxs)("div",{className:"statics_box card-clr-1-3",children:[(0,h.jsx)("div",{className:"statics_left",children:(0,h.jsx)("h6",{className:"mb-0 header-card-text",children:"Recent Documents"})}),(0,h.jsx)("div",{className:"d-flex  mt-4",children:(0,h.jsx)("h3",{className:"card-text-count mb-0 fw-semibold fs-7",children:null!==Z?Z:0})})]})})]})}),(0,h.jsx)("div",{className:"col-12",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-6 ",children:(0,h.jsxs)("div",{className:"dashboard-card bg-light",style:{height:"100%"},children:[(0,h.jsx)("div",{className:"d-flex  dashboard-card-text",children:(0,h.jsx)("p",{className:"fs-6 fw-normal",children:"Templates "})}),(0,h.jsx)(p,{docCount:V})]})}),(0,h.jsx)("div",{className:"col-md-3 ",children:(0,h.jsxs)("div",{className:"dashboard-card2 ",children:[(0,h.jsx)("p",{className:"dashboard-card2-text",children:"Open Tickets"}),(0,h.jsxs)("p",{className:"text-card mt-3 mb-3",children:[null===E||void 0===E?void 0:E.totalComplete," / ",null===E||void 0===E?void 0:E.totalTicket]}),(0,h.jsx)("p",{className:" mb-1 dashboard-card2-text",children:"Profile Completion"}),(0,h.jsx)("div",{className:"progress-bar",children:(0,h.jsxs)("div",{className:"progress-container",children:[(0,h.jsx)("div",{className:"progress",style:{width:"".concat(null===E||void 0===E?void 0:E.completepresent,"%")}}),(0,h.jsx)("span",{className:"progress-label",children:"".concat(null===E||void 0===E?void 0:E.completepresent,"%")})]})}),(0,h.jsx)("p",{className:" mb-1 dashboard-card2-text",children:"Status"}),(0,h.jsx)("div",{className:"progress-bar",children:(0,h.jsxs)("div",{className:"progress-container",children:[(0,h.jsx)("div",{className:"progress",style:{width:"".concat(null===E||void 0===E?void 0:E.InprogressPresent,"%")}}),(0,h.jsx)("span",{className:"progress-label",children:"In Progress / ".concat(null===E||void 0===E||null===(e=E.InprogressPresent)||void 0===e?void 0:e.toFixed(2),"%")})]})})]})}),(0,h.jsx)("div",{className:"col-md-3 ",children:(0,h.jsxs)("div",{className:"dashboard-card3 bg-light ",style:{maxHeight:"400px",overflowY:"auto"},children:[(0,h.jsx)("p",{className:"text-card mb-3",children:"Document Request"}),(0,h.jsx)("div",{className:"table-card3 dashboard-card3-text",children:null===T||void 0===T?void 0:T.map((e=>{var s,t,l,n;return(0,h.jsxs)("div",{className:"pb-2 row align-items-center ",children:[(0,h.jsx)("div",{className:"doc-req-text col-6",children:(null===e||void 0===e||null===(s=e._id)||void 0===s||null===(t=s[0])||void 0===t||null===(l=t[0])||void 0===l||null===(n=l[0])||void 0===n?void 0:n.departmentName)&&e._id[0][0][0].departmentName.split(" ")[0]||"NA"}),(0,h.jsx)("div",{className:"doc-req-bar col-6",style:{width:"".concat(null===e||void 0===e?void 0:e.count,"%")}})]})}))})]})})]})}),(0,h.jsxs)("div",{className:"position-relative mt-5",children:[(0,h.jsx)("p",{className:"table-name mb-2",children:"Documents"}),(0,h.jsxs)("div",{className:" col-12 d-flex align-items-center table-searchbar",children:[(0,h.jsxs)("div",{className:"d-flex ",children:[(0,h.jsx)("div",{className:"col-md-3 table-searchbar-imgs",children:(0,h.jsx)("img",{src:"/images/dashboard/ArrowsDownUp.png",onClick:()=>{const e="asc"===N.sortType?"desc":"asc",s=[...N.rows].sort(((s,t)=>{let l=0;return s.name.toLowerCase()<t.name.toLowerCase()?l=-1:s.name.toLowerCase()>t.name.toLowerCase()&&(l=1),"asc"===e?l:-1*l}));console.log(s),w({...N,rows:s,sortType:e})},className:"p-2 table-searchbar-img border-end cursor_pointer"})}),(0,h.jsxs)("div",{className:"d-flex ms-2 align-items-center justify-content-around table-searchbar-txt",children:[(0,h.jsxs)("p",{className:"m-0 text-nowrap",children:[(null===N||void 0===N?void 0:N.selectedColumns)&&(null===N||void 0===N?void 0:N.selectedColumns.length),(0,h.jsx)("span",{children:" Selected"})]}),j?(0,h.jsx)("p",{className:"hide-selected ms-2 m-0 text-nowrap cursor_pointer ",onClick:()=>{w({...N,hiddenColumns:[],selectedColumns:[]}),g(!1)},children:"Clear Selection"}):(0,h.jsx)("p",{className:"hide-selected m-0 ms-2 text-nowrap cursor_pointer ",onClick:()=>{const e=[...N.hiddenColumns,...N.selectedColumns];w({...N,hiddenColumns:e,selectedColumns:[]}),g(!0)},children:"Hide Selected"})]}),(0,h.jsx)("div",{class:"search_icon",children:(0,h.jsx)("img",{width:20,src:t(28879)})})]}),(0,h.jsx)("form",{className:"d-flex me-2",role:"search"})]}),(0,h.jsx)("div",{className:"col-12 mdb_table mt-3 mb-4",children:(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsx)(m.g0K,{bordered:!0,displayEntries:!1,entries:10,className:"text-nowrap",hover:!0,data:{...N,columns:C},noBottomColumns:!0,paginationLabel:"\xab\xbb",sortable:!1})})})]})]}),(0,h.jsx)("div",{className:"col",children:(0,h.jsx)(n.Z,{})})]})})})}},28879:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD7UlEQVRYR8WWXYhUZRiAn/cM/qQlZtbumbOGUlkq0V1BFEFt1JVQSwtChBmVZj904UVbO+c7s6b9IRaUuhe53cVWG11EQZCSBCoRIZZlQgt2zigutGBZ7c956ztzVmZnZ2bn7IC+d2fm/Xnen+/7XuEyi1zm+GQGWGd0/gh05KA9htGFEA0bGZ1rIk0BXL9Tr54Y41GBLoV7agQ7hfIxOQaiXvklC0xDgGW+LlngUBDYAixqxrHAJyg9oZGTTerXVstv1xVM8iWwtkJjGPhchOOx8htwncBNwP3A7YCT6p5XpbtkxNo3lJoVaOvTVbmYo8Bya63CQWL8kpFv6nmzwDpBjwibUx1V6Cr58mkjghkAtuwLHb6jnJmVPVGBrYjobNnY/11fHxaHD4F5wN+i3Bka+aGe7QwAz+g+FZ5KMlf2lozY/meSvNH1CDZz25KTkbIGI3EtJ9MA2o2udYQfU8VvowJ3N5t5tXM30O0CLye/C09EBXl/VoB8oO9Rnngk5r4wkK8zpV6hvNLo0jHhNHAlcCzy5bZZAdxAIwEXGI58WTXX4FN2eaP7ETba71yMdzqQqNrnxRZ0GL0xFn5NFJS3IiPbWgVwA31IYKjcBTaGvnxQF8D19S5xOJQoC1vCguxtFSDfpzcT83OaVDEy4tcFSCf3s3RoNkQFsUepJenYpVfE57mQOtkf+bKpEUAnwldpuTaHvuxrKTrg7dBrdJyR1M+eyJdn6gK0F3WdoxxPFUzkS9AqQEdRb42VY2lSr4S+vFoXoO1NXZy7wB/pDXYg8uXeVgHcQF8Q2J3MdUxXKZBkICtl2kWUL+oXKA8C8bjinTNyphUIN9AjUn6kxseVZeeM/NkYINDHgfKNpQxERuz3nMQL9BGFwaT8wlBYkK5ajqa/BYOay5/gFLAy7Vt36MtHWQk8o6tVOAIstak4yurfjVi/M2TGY+QG+oCQ7AFWJgU2ZIFw+3SNxMlp8pIklN2hkRfrJVFzH/AC7VUoXjRSipOLeePsNvmrbjWMOnmHbhR7fJckXRQOlm6hk26ZzARgld1AdwlUktsT0p+LeafyTl/+ul417x/sBfOcwA0VgQ7NV9bPtrA23Am9QJ9WeBtYkGUOROkPYStGJqxdPlBfhX9LBXmt4SmoFaR9h16bG6NHy6+aHap6MoYyFEPfGSM/TSm5RX1eNEnCtuSlaoim1vLE2aDm3BN0OnYtV1ao0AaMihLGwvfxIoZqzYgb6JMC/VNACj0lX3ZOfTcPkKUHVbrVEMCzkS/vJqekBb+ZTL2iPqbKwP/BRyYd7jjbK3atv3QAyTAWdVMcc7hyRi5ZBTLfA5nq24LyfxJhZTC25f8ZAAAAAElFTkSuQmCC"},41418:(e,s)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=r(e,a(t)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)l.call(e,t)&&e[t]&&(s=r(s,t));return s}function r(e,s){return s?e?e+" "+s:e+s:e}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(s,[]))||(e.exports=t)}()},30907:(e,s,t)=>{"use strict";function l(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,l=new Array(s);t<s;t++)l[t]=e[t];return l}t.d(s,{Z:()=>l})},97326:(e,s,t)=>{"use strict";function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(s,{Z:()=>l})},15671:(e,s,t)=>{"use strict";function l(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}t.d(s,{Z:()=>l})},43144:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var l=t(49142);function n(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(0,l.Z)(n.key),n)}}function a(e,s,t){return s&&n(e.prototype,s),t&&n(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}},98557:(e,s,t)=>{"use strict";function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function n(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(n=function(){return!!e})()}t.d(s,{Z:()=>o});var a=t(71002),r=t(97326);function o(e){var s=n();return function(){var t,n=l(e);if(s){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return function(e,s){if(s&&("object"===(0,a.Z)(s)||"function"===typeof s))return s;if(void 0!==s)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}(this,t)}}},87462:(e,s,t)=>{"use strict";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},l.apply(this,arguments)}t.d(s,{Z:()=>l})},60136:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var l=t(89611);function n(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),s&&(0,l.Z)(e,s)}},94578:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var l=t(89611);function n(e,s){e.prototype=Object.create(s.prototype),e.prototype.constructor=e,(0,l.Z)(e,s)}},63366:(e,s,t)=>{"use strict";function l(e,s){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],s.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(s,{Z:()=>l})},89611:(e,s,t)=>{"use strict";function l(e,s){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,s){return e.__proto__=s,e},l(e,s)}t.d(s,{Z:()=>l})},40181:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var l=t(30907);function n(e,s){if(e){if("string"===typeof e)return(0,l.Z)(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,l.Z)(e,s):void 0}}}}]);
//# sourceMappingURL=774.0de41979.chunk.js.map