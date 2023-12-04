"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[284],{9284:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(4165),o=n(5861),i=n(9439),a=n(8374),s=n(6106),c=n(914),u=n(1095),l=n(940),p=n(3734),d=n(881),f=n(7309),h=n(2791),v=n(3433),y=n(4055),g=n(8130),m=n(8965),x=n(2007),Z=n.n(x);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=(0,h.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,a=j(e,["color","size"]);return h.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),h.createElement("polyline",{points:"18 15 12 9 6 15"}))}));w.propTypes={color:Z().string,size:Z().oneOfType([Z().string,Z().number])},w.displayName="ChevronUp";var O=w;function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var z=(0,h.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,a=P(e,["color","size"]);return h.createElement("svg",k({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),h.createElement("polyline",{points:"6 9 12 15 18 9"}))}));z.propTypes={color:Z().string,size:Z().oneOfType([Z().string,Z().number])},z.displayName="ChevronDown";var C=z,S=n(1469),T=n(9786),E=n(8177),L=n(577),R=n(184),A=(l.Z.Search,function(e){var t=e.selectedData,n=void 0===t?[]:t,a=e.setSelectedData,s=(0,h.useState)([]),c=(0,i.Z)(s,2),u=c[0],d=c[1],x=(0,h.useState)(0),Z=(0,i.Z)(x,2),b=Z[0],j=Z[1],w=(0,h.useState)(10),k=(0,i.Z)(w,2),P=k[0],z=(k[1],(0,h.useState)(1)),A=(0,i.Z)(z,2),B=A[0],N=A[1],I=(0,h.useState)(!1),_=(0,i.Z)(I,2),U=_[0],W=_[1],F=(0,h.useState)(""),V=(0,i.Z)(F,2),q=V[0],D=V[1],H=(0,h.useState)(""),K=(0,i.Z)(H,2),M=K[0],J=K[1],$=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,o,i,a,s,c,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},o=l.length>1&&void 0!==l[1]&&l[1],W(!0),e.prev=3,e.next=6,(0,E.Kz)({perPage:P,page:B,query:t,exclude:n.map((function(e){return e.id})),getCount:1});case 6:i=e.sent,a=i.data,o?(j(null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.count),d(null===a||void 0===a?void 0:a.data.data)):(j(null===a||void 0===a||null===(s=a.data)||void 0===s?void 0:s.count),d([].concat((0,v.Z)(u),(0,v.Z)(null===a||void 0===a?void 0:a.data.data)))),W(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),(0,L.Z)(e.t0,(function(){return W(!1)}));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){var e={title:q,status:q};M&&(e.type=M),$(e,!0)}),[]);return(0,R.jsxs)("div",{children:[(0,R.jsxs)("div",{className:"search-box animated bounceIn",children:[(0,R.jsx)(l.Z,{placeholder:"Search...",size:"default",value:q,onChange:function(e){D(e.target.value)},style:{maxWidth:"200px",marginBottom:"20px"}}),(0,R.jsx)(p.Z,{style:{minWidth:"200px"},options:[{label:"All",value:""},{label:"Slider",value:"slider"},{value:"post",label:"Post"},{value:"package",label:"Package"},{value:"client",label:"Client"}],onChange:function(e){return J(e)},value:M}),(0,R.jsx)(f.Z,{onClick:function(){N(1);var e={title:q,status:q};M&&(e.type=M),$(e,!0)},children:(0,R.jsx)(y.Z,{size:14,color:"#949494"})}),(0,R.jsx)(f.Z,{style:{width:"35px",padding:"0px"},onClick:function(){D(""),J("");var e={title:"",status:""};M&&(e.type=""),N(1),$(e,!0)},children:(0,R.jsx)(g.Z,{size:14,color:"#949494"})})]}),(0,R.jsxs)("div",{className:"section-and-content-select",children:[(0,R.jsx)("div",{className:"selected-options",style:{maxHeight:"400px",overflow:"auto"},children:n.map((function(e,t){return(0,R.jsxs)("div",{className:"animated bounceIn",style:{display:"flex",gap:5,borderBottom:"1px solid lightgray",marginTop:"10px"},children:[(0,R.jsxs)("div",{style:{width:"120px"},children:[(0,R.jsxs)(f.Z,{type:"danger",style:{paddingTop:"3px",marginRight:"5px"},size:"small",onClick:function(){return function(e){var t=n;d([].concat((0,v.Z)(u),[n[e]])),t.splice(e,1),a((0,v.Z)(t))}(t)},children:[" ",(0,R.jsx)(m.Z,{size:16})," "]}),t>0&&(0,R.jsxs)(f.Z,{type:"danger",style:{paddingTop:"3px",marginRight:"5px"},size:"small",onClick:function(){return function(e){var t=n,r=t[e-1];t[e-1]=t[e],t[e]=r,a((0,v.Z)(t))}(t)},children:[" ",(0,R.jsx)(O,{size:16})," "]}),t<n.length-1&&(0,R.jsxs)(f.Z,{type:"danger",style:{paddingTop:"3px",marginRight:"5px"},size:"small",onClick:function(){return function(e){var t=n,r=t[e+1];t[e+1]=t[e],t[e]=r,a((0,v.Z)(t))}(t)},children:[" ",(0,R.jsx)(C,{size:16})," "]})]}),(0,R.jsx)("div",{style:{flex:1,textAlign:"left"},children:(0,R.jsx)("p",{children:e.title},t)})]},"section-op-"+t)}))}),(0,R.jsxs)("div",{className:"loaded-options",style:{maxHeight:"400px",overflow:"auto"},children:[u.map((function(e,t){return(0,R.jsxs)("div",{className:"animated fadeIn",style:{display:"flex",gap:5,borderBottom:"1px solid lightgray",marginTop:"10px"},children:[(0,R.jsx)("div",{style:{width:"60px"},children:(0,R.jsxs)(f.Z,{type:"primary",style:{paddingTop:"3px"},size:"small",onClick:function(){return function(e){var t=u;a([].concat((0,v.Z)(n),[u[e]])),t.splice(e,1),d((0,v.Z)(t))}(t)},children:[" ",(0,R.jsx)(S.Z,{size:16})," "]})}),(0,R.jsx)("div",{style:{flex:1,textAlign:"left"},children:(0,R.jsx)("p",{children:e.title},t)})]},"loaded-op-"+t)})),u.length<b&&(0,R.jsx)("div",{style:{textAlign:"center",marginTop:"10px"},children:(0,R.jsxs)(f.Z,{disabled:U,onClick:function(){console.log(B),N(B+1),console.log(B),$({title:q,type:M,status:q},!1)},children:[" ",(0,R.jsx)(S.Z,{size:14})," More"]})}),U&&(0,R.jsx)(T.Z,{})]})]})]})}),B=n(7689),N=n(9136),I=n(9085),_=n(3365),U=[{label:"Slider",value:"slider"},{value:"post",label:"Section Block"},{value:"address",label:"Feature"},{value:"package",label:"Package"},{value:"popular-package",label:"Popular Package"},{value:"client",label:"Client"},{value:"section-title",label:"Section Title"},{value:"section-title-with-content",label:"Section Title With Content"},{value:"page-title-section",label:"Page Title Section"},{value:"details-only",label:"Details Only"}],W=function(){var e=(0,B.UO)().id,t=(0,h.useRef)(),n=(0,h.useState)(!1),v=(0,i.Z)(n,2),y=v[0],g=v[1],m=(0,h.useState)(""),x=(0,i.Z)(m,2),Z=x[0],b=x[1],j=(0,B.s0)(),w=(0,h.useState)([]),O=(0,i.Z)(w,2),k=O[0],P=O[1],z=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var o,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.status=n.status?1:0,g(!0),t.prev=2,!e){t.next=9;break}return t.next=6,(0,N.Vx)(e,n);case 6:o=t.sent,t.next=12;break;case 9:return t.next=11,(0,N.Ue)(n);case 11:o=t.sent;case 12:return i=o.data,t.next=15,(0,N.ii)(e);case 15:if(I.Am.success(null===i||void 0===i?void 0:i.message,{position:"top-right",theme:"dark"}),!k.length){t.next=19;break}return t.next=19,(0,N.Fo)(k.map((function(t){var n;return{section_id:null!==(n=i.data.id)&&void 0!==n?n:e,content_id:t.id}})));case 19:g(!1),j("/sections"),t.next=26;break;case 23:t.prev=23,t.t0=t.catch(2),(0,L.Z)(t.t0,(function(){return g(!1)}));case 26:case"end":return t.stop()}}),t,null,[[2,23]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var o,i,a,s,c,u,l,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,(0,N.U2)(e);case 4:return s=n.sent,c=s.data,n.next=8,(0,N.id)(e);case 8:u=n.sent,t.current.setFieldsValue(c.data),b(c.data.type),P(null!==(o=null===u||void 0===u||null===(i=u.data)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.data)&&void 0!==o?o:[]),I.Am.success(null===c||void 0===c?void 0:c.message,{position:"top-right",theme:"dark"}),g(!1),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(1),(p=null===n.t0||void 0===n.t0||null===(l=n.t0.response)||void 0===l?void 0:l.data)&&I.Am.error(p.message,{position:"top-right",theme:"dark"}),g(!1);case 21:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(){return n.apply(this,arguments)}}();return(0,h.useEffect)((function(){e&&C()}),[]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a.Z,{className:"site-page-header",title:"".concat(e?"Update":"Create"," Section")}),(0,R.jsx)(s.Z,{children:(0,R.jsx)(c.Z,{lg:12,md:24,sm:24,xs:24,children:(0,R.jsxs)(u.Z,{className:"animated fadeIn",ref:t,disabled:y,name:"basic",layout:"vertical",onFinish:z,onFinishFailed:function(e){I.Am.warn("Please provide all the information currectly",{position:"top-right",theme:"dark"})},autoComplete:"off",children:[(0,R.jsx)(u.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name"}],children:(0,R.jsx)(l.Z,{})}),(0,R.jsx)(u.Z.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input your title"}],children:(0,R.jsx)(l.Z,{})}),(0,R.jsx)(u.Z.Item,{label:"Type",name:"type",rules:[{required:!0,message:"Please input your type"}],children:(0,R.jsx)(p.Z,{style:{width:220},options:U,onChange:function(e){t.current.setFieldValue("type",e),b(e)}})}),(0,R.jsx)(u.Z.Item,{name:"status",children:(0,R.jsxs)(d.ZP.Group,{children:[(0,R.jsx)(d.ZP,{value:1,children:"Active"}),(0,R.jsx)(d.ZP,{value:0,children:"Inactive"})]})}),!y&&"section-title"!=Z&&(0,R.jsxs)("div",{style:{paddingBottom:"25px"},children:[(0,R.jsx)("h3",{children:"Select Content"}),(0,R.jsx)(A,{selectedData:k,setSelectedData:function(e){P(e)}})]}),(0,R.jsx)(u.Z.Item,{children:(0,R.jsxs)(f.Z,{type:"primary",htmlType:"submit",children:[(0,R.jsx)(_.Z,{size:14})," ",(0,R.jsxs)("span",{style:{paddingLeft:"5px"},children:[" ",e?"Update":"Create"]})]})})]})})})]})}},577:function(e,t,n){var r=n(9085);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("ERR_NETWORK"==e.code)r.Am.error(e.message,{position:"top-right",theme:"dark"});else{var n,o=null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.data;o&&r.Am.error(o.message,{position:"top-right",theme:"dark"})}t&&t()}},5570:function(e,t){t.Z={apiRoute:"http://localhost:4000/api/v1/",host:"http://localhost:4000"}},8177:function(e,t,n){n.d(t,{Kz:function(){return u},Od:function(){return f},U2:function(){return p},Ue:function(){return l},Vx:function(){return d}});var r=n(4165),o=n(5861),i=n(1044),a=n(5570),s=n(1070),c="content",u=function(e){var t=e.query,n=void 0===t?{}:t,r=e.perPage,o=void 0===r?20:r,u=e.page,l=void 0===u?1:u,p=e.getCount,d=void 0===p?1:p,f=e.exclude,h=void 0===f?[]:f,v=new URLSearchParams;return Object.keys(n).forEach((function(e){v.append(e,n[e])})),v.append("perPage",o),v.append("page",l),v.append("getCount",d),h.length&&v.append("exclude",JSON.stringify(h)),new Promise((function(e,t){i.ZP.get(a.Z.apiRoute+c+"?"+v.toString(),{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(e){t(e)}))}))},l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,u,l,p,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,o=t.type,u=t.caption,l=t.content_body,p=t.status,d=t.file_id,e.next=3,i.ZP.put(a.Z.apiRoute+c,{title:n,type:o,caption:u,content_body:l,status:p,file_id:d},{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get(a.Z.apiRoute+c+"/"+t,{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,u,l,p,d,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.title,u=n.type,l=n.caption,p=n.content_body,d=n.status,f=n.file_id,e.next=3,i.ZP.patch(a.Z.apiRoute+c+"/"+t,{title:o,type:u,caption:l,content_body:p,status:d,file_id:f},{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(e){return new Promise((function(t,n){i.ZP.delete(a.Z.apiRoute+c+"/"+e,{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}},9136:function(e,t,n){n.d(t,{$6:function(){return l},$T:function(){return v},Fo:function(){return d},Kz:function(){return u},Od:function(){return x},U2:function(){return g},Ue:function(){return h},Vx:function(){return m},id:function(){return p},ii:function(){return f},ku:function(){return y}});var r=n(4165),o=n(5861),i=n(1044),a=n(5570),s=n(1070),c="section",u=function(e){var t=e.query,n=void 0===t?{}:t,r=e.perPage,o=void 0===r?20:r,u=e.page,l=void 0===u?1:u,p=e.getCount,d=void 0===p?1:p,f=new URLSearchParams;return Object.keys(n).forEach((function(e){f.append(e,n[e])})),f.append("perPage",o),f.append("page",l),f.append("getCount",d),new Promise((function(e,t){i.ZP.get(a.Z.apiRoute+c+"?"+f.toString(),{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(e){t(e)}))}))},l=function(){return new Promise((function(e,t){i.ZP.get(a.Z.apiRoute+c+"/all",{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(e){t(e)}))}))},p=function(e){return new Promise((function(t,n){i.ZP.get(a.Z.apiRoute+"section-content?section_id="+e,{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(e){t(e)})).catch((function(e){n(e)}))}))},d=function(e){return new Promise((function(t,n){i.ZP.put(a.Z.apiRoute+"section-content/bulk",{contents:JSON.stringify(e)},{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(e){t(e)})).catch((function(e){n(e)}))}))},f=function(e){return new Promise((function(t,n){i.ZP.delete(a.Z.apiRoute+"section-content?section_id="+e,{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(e){t(e)})).catch((function(e){n(e)}))}))},h=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,o=t.status,u=t.type,l=t.name,e.next=3,i.ZP.put(a.Z.apiRoute+c,{title:n,status:o,type:u,name:l},{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.put(a.Z.apiRoute+"page-section/bulk",{contents:t},{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page_id,o=t.section_id,c=new URLSearchParams,n&&c.append("page_id",n),o&&c.append("section_id",o),e.next=6,i.ZP.delete(a.Z.apiRoute+"page-section?"+c.toString(),{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get(a.Z.apiRoute+c+"/"+t,{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var o,u,l,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.title,u=n.status,l=n.type,p=n.name,e.next=3,i.ZP.patch(a.Z.apiRoute+c+"/"+t,{title:o,status:u,type:l,name:p},{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e){return new Promise((function(t,n){i.ZP.delete(a.Z.apiRoute+c+"/"+e,{headers:{Authorization:"Bearer "+(0,s.L)(),"Content-Type":"application/json"}}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}},1070:function(e,t,n){n.d(t,{L:function(){return r}});var r=function(){return localStorage.getItem("token")}},1469:function(e,t,n){var r=n(2791),o=n(2007),i=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,u=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Plus",t.Z=c},8130:function(e,t,n){var r=n(2791),o=n(2007),i=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,u=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"1 4 1 10 7 10"}),r.createElement("polyline",{points:"23 20 23 14 17 14"}),r.createElement("path",{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="RefreshCcw",t.Z=c},3365:function(e,t,n){var r=n(2791),o=n(2007),i=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,u=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),r.createElement("polyline",{points:"17 21 17 13 7 13 7 21"}),r.createElement("polyline",{points:"7 3 7 8 15 8"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Save",t.Z=c},4055:function(e,t,n){var r=n(2791),o=n(2007),i=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,u=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Search",t.Z=c},8965:function(e,t,n){var r=n(2791),o=n(2007),i=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,u=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"3 6 5 6 21 6"}),r.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),r.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),r.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Trash2",t.Z=c}}]);
//# sourceMappingURL=284.06b7a03b.chunk.js.map