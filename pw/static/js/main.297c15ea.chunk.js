(this["webpackJsonppython-weekend"]=this["webpackJsonppython-weekend"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(14),i=n.n(a),s=(n(55),n(6)),o=(n(56),n(57),n(85)),l=n(87),j=n(83),d=n(86),u=n(88),b=n(1),h="backendUrl";function O(){var e=Object(c.useState)(window.localStorage.getItem(h)||""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{variant:"primary",onClick:function(){return l(!0)},style:{marginRight:"15px"},children:"Settings"}),Object(b.jsxs)(d.a,{show:o,onHide:function(){return l(!1)},children:[Object(b.jsx)(d.a.Header,{closeButton:!0,children:Object(b.jsx)(d.a.Title,{children:"Settings"})}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(u.a.Group,{className:"mb-3",controlId:"origin",children:[Object(b.jsx)(u.a.Label,{children:"Backend URL"}),Object(b.jsx)(u.a.Control,{type:"text",placeholder:"Origin",value:n,onChange:function(e){return r(e.target.value)}})]})})}),Object(b.jsxs)(d.a.Footer,{children:[Object(b.jsx)(j.a,{variant:"secondary",onClick:function(){return l(!1)},children:"Close"}),Object(b.jsx)(j.a,{variant:"primary",onClick:function(){!function(e){window.localStorage.setItem(h,e)}(n),l(!1)},children:"Save Changes"})]})]})]})}var g=n(47),x=n.n(g);var f=n(84),p=n(46);function m(e){var t=e.onSubmit,n=e.origin,c=e.setOrigin,r=e.destination,a=e.setDestination,i=e.departure,s=e.setDeparture,o=e.fetchInProgress,l=o?"Fetching...":"Search",d=o?"outline-success":"success";return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(f.a,{children:Object(b.jsxs)(u.a.Group,{className:"mb-3",controlId:"origin",children:[Object(b.jsx)(p.a,{children:Object(b.jsx)(u.a.Label,{children:"Origin"})}),Object(b.jsx)(p.a,{children:Object(b.jsx)(u.a.Control,{type:"text",placeholder:"Origin",value:n,onChange:function(e){return c(e.target.value)}})})]})}),Object(b.jsxs)(u.a.Group,{className:"mb-3",controlId:"destination",children:[Object(b.jsx)(u.a.Label,{children:"Destination"}),Object(b.jsx)(u.a.Control,{type:"text",placeholder:"Destination",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)(u.a.Group,{className:"mb-3",controlId:"departure",children:[Object(b.jsx)(u.a.Label,{children:"Departure"}),Object(b.jsx)(u.a.Control,{type:"datetime-local",placeholder:"Departure",value:i,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsx)(j.a,{variant:d,type:"button",onClick:function(){return t(n,r,i)},children:l})]})}function v(e){var t=e.offer;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:"delimiter.png",alt:"_",className:"center",style:{marginTop:20,marginBottom:20}}),Object(b.jsxs)("h1",{children:[t.origin," - ",t.destination]}),"(",t.departure," - ",t.arrival,")"]})}function y(e){var t=e.offers;if(null==t)return Object(b.jsx)("div",{children:'"Nothing there yet"'});var n=t.map((function(e){return Object(b.jsx)(v,{offer:e})}));return Object(b.jsx)("div",{children:n})}var S=n(48);function C(){return Object(b.jsx)(S.DepthOfFieldSnowfall,{count:150,style:{color:"#fff",position:"absolute",width:"95%",height:"95%",zIndex:"-1",backgroundColor:"235E6F"}})}var k=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),d=i[0],u=i[1];d?(document.body.style.backgroundImage="url(http://localhost:3000/dedove.jpg)",document.body.style.backgroundSize="100% auto"):(document.body.style.backgroundImage="",document.body.style.backgroundColor="#fff");var g=Object(c.useState)(""),f=Object(s.a)(g,2),p=f[0],v=f[1],S=Object(c.useState)(""),k=Object(s.a)(S,2),w=k[0],I=k[1],N=Object(c.useState)(""),D=Object(s.a)(N,2),F=D[0],L=D[1],B=Object(c.useState)("not-started"),P=Object(s.a)(B,2),G=P[0],T=P[1],J=Object(c.useState)(""),z=Object(s.a)(J,2),E=z[0],H=z[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"bg"}),Object(b.jsx)(C,{}),Object(b.jsx)("div",{className:"kiwi-color-top"}),Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"content-wrapper",children:[Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("h1",{children:"Python weekend search"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)("img",{src:"cube.png",className:"tree-btn",onClick:function(){return u(!d)}})]})]}),Object(b.jsxs)(l.a,{variant:"danger",style:{display:"failed"===G?"block":"none"},children:[Object(b.jsx)(j.a,{variant:"danger",style:{float:"right"},onClick:function(){return T("not-started")},children:"Close"}),Object(b.jsx)("pre",{children:E})]}),Object(b.jsxs)("div",{className:"container-content",children:[Object(b.jsx)(m,{onSubmit:function(e,t,n){T("fetching"),function(e,t,n,c,r){var a={origin:e,destination:t,departure:n},i=window.localStorage.getItem(h);x.a.get("".concat(i,"/search"),{headers:{accept:"application/json"},params:a}).then((function(e){return c(e.data)})).catch((function(e){return r(e)}))}(e,t,n,(function(e){r(e),T("success")}),(function(e){H(JSON.stringify(e,null,2)),T("failed")}))},origin:p,setOrigin:v,destination:w,setDestination:I,departure:F,setDeparture:L,fetchInProgress:"fetching"===G}),Object(b.jsx)(y,{offers:n})]})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),w()}},[[81,1,2]]]);
//# sourceMappingURL=main.297c15ea.chunk.js.map