(this["webpackJsonppython-weekend"]=this["webpackJsonppython-weekend"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),o=n.n(r),i=(n(69),n(5)),s=n(7),l=n(9),u=n(22),d=(n(70),n(71),n(104)),j=n(105),b=n(61),h=n(107),O=n(108),g=n(1),f="backendUrl";function m(){var e=Object(c.useState)(window.localStorage.getItem(f)||""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1];return n.toLowerCase().includes("milan")?document.body.style.animationName="move":document.body.style.animationName="",Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{variant:"primary",onClick:function(){return l(!0)},style:{marginRight:"15px"},children:"Settings"}),Object(g.jsxs)(h.a,{show:s,onHide:function(){return l(!1)},children:[Object(g.jsx)(h.a.Header,{closeButton:!0,children:Object(g.jsx)(h.a.Title,{children:"Settings"})}),Object(g.jsx)(h.a.Body,{children:Object(g.jsx)(O.a,{children:Object(g.jsxs)(O.a.Group,{className:"mb-3",controlId:"origin",children:[Object(g.jsx)(O.a.Label,{children:"Backend URL"}),Object(g.jsx)(O.a.Control,{type:"text",placeholder:"for example http://localhost:8080",value:n,onChange:function(e){return a(e.target.value)}})]})})}),Object(g.jsxs)(h.a.Footer,{children:[Object(g.jsx)(b.a,{variant:"secondary",onClick:function(){return l(!1)},children:"Close"}),Object(g.jsx)(b.a,{variant:"primary",onClick:function(){!function(e){window.localStorage.setItem(f,e)}(n),l(!1)},children:"Save Changes"})]})]})]})}var x=n(52),p=n.n(x),v=u.d({origin:u.c,destination:u.c,departure:u.c,arrival:u.c}),y=u.a(v);var k=n(103),S=n(62),w=n(106);function C(e){var t=e.whisperList,n=e.onClick;if(0===t.length)return null;var c=t.map((function(e,t){return Object(g.jsx)(w.a.Item,{eventKey:"2",onClick:function(){return n(e)},children:e},t)}));return Object(g.jsxs)(w.a.Menu,{show:!0,children:[Object(g.jsx)(w.a.Header,{children:"Do you mean"}),c]})}function I(e){var t=e.onChange,n=e.onFail,a=e.value,r=e.placeholder,o=Object(c.useState)([]),s=Object(i.a)(o,2),l=s[0],u=s[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a.Control,{type:"text",placeholder:r,value:a,onChange:function(e){t(e.target.value),""===e.target.value?u([]):function(e,t,n){var c={text:e},a=window.localStorage.getItem(f);p.a.get("".concat(a,"/whisper"),{headers:{accept:"application/json"},params:c}).then((function(e){return t(e.data)})).catch((function(e){return n(e)}))}(e.target.value,(function(e){return u(e)}),(function(e){return n(e)}))},onKeyDown:function(e){"Escape"===e.key&&u([])}}),Object(g.jsx)(C,{whisperList:l,onClick:function(e){u([]),t(e)}})]})}function F(e){var t=e.onSubmit,n=e.origin,c=e.setOrigin,a=e.destination,r=e.setDestination,o=e.departure,i=e.setDeparture,s=e.fetchInProgress,l=e.onWhisperFail,u=s?"Fetching...":"Search",d=s?"outline-success":"success";return Object(g.jsxs)(O.a,{children:[Object(g.jsxs)(O.a.Group,{as:k.a,className:"mb-3",controlId:"origin",children:[Object(g.jsx)(O.a.Label,{column:!0,sm:"2",children:"Origin"}),Object(g.jsx)(S.a,{sm:"10",children:Object(g.jsx)(I,{onFail:l,value:n,onChange:function(e){return c(e)},placeholder:"origin"})})]}),Object(g.jsxs)(O.a.Group,{as:k.a,className:"mb-3",controlId:"destination",children:[Object(g.jsx)(O.a.Label,{column:!0,sm:"2",children:"Destination"}),Object(g.jsx)(S.a,{sm:"10",children:Object(g.jsx)(I,{onFail:l,value:a,onChange:function(e){return r(e)},placeholder:"destination"})})]}),Object(g.jsxs)(O.a.Group,{as:k.a,className:"mb-3",controlId:"departure",children:[Object(g.jsx)(O.a.Label,{column:!0,sm:"2",children:"Departure"}),Object(g.jsx)(S.a,{sm:"10",children:Object(g.jsx)(O.a.Control,{type:"date",placeholder:"Departure",value:o,onChange:function(e){return i(e.target.value)}})})]}),Object(g.jsx)(b.a,{variant:d,type:"button",onClick:function(){return t(n,a,o)},children:u})]})}function N(e){var t=e.offer;return Object(g.jsxs)("div",{className:"offer-block",children:[Object(g.jsxs)("h1",{children:[t.origin," - ",t.destination," (",t.departure,")"]}),Object(g.jsxs)("p",{children:["Departure: ",t.departure," ",Object(g.jsx)("br",{}),"Arrival: ",t.arrival," ",Object(g.jsx)("br",{}),"From: ",t.origin," ",Object(g.jsx)("br",{}),"To: ",t.destination]})]})}function D(e){var t=e.offers;if(null==t)return Object(g.jsx)("div",{children:"Nothing there yet"});var n=t.map((function(e){return Object(g.jsx)(N,{offer:e})}));return Object(g.jsx)("div",{children:n})}var L=n(63);function P(){return Object(g.jsx)(L.DepthOfFieldSnowfall,{count:150,style:{color:"#fff",position:"absolute",width:"95%",height:"95%",zIndex:"-1",backgroundColor:"235E6F"}})}var B={backgroundImage:"url(./cube.png)",backgroundPosition:"0px 0px"},z={backgroundImage:"url(./cube.png)",backgroundPosition:"0px 40px"};var G=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),h=o[0],O=o[1],x=Object(c.useState)(!1),v=Object(i.a)(x,2),k=v[0],S=v[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),I=C[0],N=C[1],L=Object(c.useState)(""),G=Object(i.a)(L,2),H=G[0],J=G[1],T=Object(c.useState)(""),E=Object(i.a)(T,2),W=E[0],K=E[1],M=Object(c.useState)(!1),R=Object(i.a)(M,2),U=R[0],A=R[1],Y=Object(c.useState)("not-started"),q=Object(i.a)(Y,2),Q=q[0],V=q[1],X=Object(c.useState)(""),Z=Object(i.a)(X,2),$=Z[0],_=Z[1];h?(document.body.style.backgroundImage="url(./dedove.jpg)",document.body.style.backgroundSize="100% auto"):U?(document.body.style.backgroundImage="url(./milan.jpg)",document.body.style.backgroundSize="100% auto"):k?(document.body.style.backgroundImage="url(./kun.jpeg)",document.body.style.backgroundSize="100% auto"):(document.body.style.backgroundImage="",document.body.style.backgroundColor="#fff");var ee=h?B:z;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"bg"}),Object(g.jsx)(P,{}),Object(g.jsx)("div",{className:"kiwi-color-top"}),Object(g.jsx)(d.a,{children:Object(g.jsxs)("div",{className:"content-wrapper",children:[Object(g.jsx)("div",{style:{margin:"0 auto"},children:Object(g.jsx)("h1",{children:"Python weekend search"})}),Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsx)("img",{style:{float:"left"},src:"https://images.kiwi.com/common/kiwicom-logo.svg",alt:"kiwi-banner"}),Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsx)(m,{}),Object(g.jsx)("div",{style:ee,className:"cube",onClick:function(){return O(!h)}}),Object(g.jsx)("div",{style:{backgroundImage:"url(./brno-dick.png)",backgroundPosition:"0px 40px"},className:"cube",onClick:function(){return S(!k)}})]})]}),Object(g.jsxs)(j.a,{variant:"danger",style:{maxHeight:300,overflowY:"auto",display:""===$?"none":"block"},children:[Object(g.jsx)(b.a,{variant:"danger",style:{float:"right"},onClick:function(){return _("")},children:"Close"}),Object(g.jsx)("pre",{children:$})]}),Object(g.jsxs)("div",{className:"container-content",children:[Object(g.jsx)(F,{onSubmit:function(e,t,n){V("fetching"),function(e,t,n,c,a){var r={origin:e,destination:t,departure:n},o=window.localStorage.getItem(f);p.a.get("".concat(o,"/search"),{headers:{accept:"application/json"},params:r}).then((function(e){return c(y.decode(e.data))})).catch((function(e){return a(e)}))}(e,t,n,(function(e){Object(s.c)(e,l.j((function(e){a([]),V("failed"),_("Decoding failed: ".concat(u.b(e)))}),(function(e){a(e),V("success")}))),t.toLowerCase().includes("milan")?A(!0):A(!1)}),(function(e){_("Search failed: ".concat(JSON.stringify(e,null,2))),V("failed")}))},origin:I,setOrigin:N,destination:H,setDestination:J,departure:W,setDeparture:K,fetchInProgress:"fetching"===Q,onWhisperFail:function(e){return _("Whisper failed: ".concat(JSON.stringify(e,null,2)))}}),Object(g.jsx)("div",{style:{height:10}}),Object(g.jsx)(D,{offers:n})]})]})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root")),H()}},[[97,1,2]]]);
//# sourceMappingURL=main.4679e49a.chunk.js.map