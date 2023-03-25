var f=Object.defineProperty;var P=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var a=(e,t,n)=>(P(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const d=e=>e==0?1:e*d(e-1),p=(e,t)=>d(e)/(d(t)*d(e-t)),g=(e,t)=>{const n=e.length-1;return e.reduce((i,s,r)=>{const l=p(n,r)*(1-t)**(n-r)*t**r;return[i[0]+s[0]*l,i[1]+s[1]*l]},[0,0])},h=15;class w{constructor(t,n){a(this,"points",[]);a(this,"selectedPoint",null);this.ctx=t,this.canvas=n}drawBezier(t){for(let i=0;i<=1;i+=.001)this.drawPoint(g(t,i),1,"#eee")}drawPoints(){for(const[t,n]of this.points.entries()){const i=this.selectedPoint===t?"#c75804":"white";this.drawPoint(n,h,i);const s=this.selectedPoint===t?"white":"#c75804";this.drawText(n,(t+1).toString(),s)}}redraw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.points.length>1&&this.drawBezier(this.points),this.drawPoints()}drawPoint(t,n,i){this.ctx.beginPath(),this.ctx.arc(...t,n,0,2*Math.PI),this.ctx.fillStyle=i,this.ctx.fill()}drawText(t,n,i){this.ctx.beginPath(),this.ctx.font="11pt Avenir",this.ctx.fillStyle=i,this.ctx.textAlign="center",this.ctx.fillText(n,t[0],t[1]+5)}getTouchedPointIndex(t){for(const[n,i]of this.points.entries())if(Math.sqrt((t[0]-i[0])**2+(t[1]-i[1])**2)<=h)return n;return null}addPoint(t){this.points.push(t),this.redraw()}updatePointAt(t,n){this.points[t]=n,this.redraw()}deleteAt(t){this.points=this.points.filter((n,i)=>i!==t),t===this.selectedPoint&&(this.selectedPoint=null),this.redraw()}setSelectedPoint(t){this.selectedPoint=t,this.redraw()}getSelectedPoint(){return this.selectedPoint}get pointsCount(){return this.points.length}}const c=document.getElementById("canvas"),x=c.getContext("2d"),o=new w(x,c);let u=!1;window.onload=window.onresize=()=>{c.width=c.offsetWidth,c.height=c.offsetHeight,o.redraw()};const y=["Backspace","Delete"];window.onkeydown=e=>{const t=o.getSelectedPoint();if(y.includes(e.key)&&t!==null)o.deleteAt(t),o.setSelectedPoint(null);else if(e.key==="Escape")o.setSelectedPoint(null);else if(e.key==="Tab"){const n=o.pointsCount;if(n===0)return;e.preventDefault(),t===null?o.setSelectedPoint(0):o.setSelectedPoint((t+1)%n)}else console.log(e.key)};c.addEventListener("mousemove",e=>{const t=o.getSelectedPoint();u&&t!==null&&o.updatePointAt(t,[e.x,e.y])});c.addEventListener("mouseup",()=>{u=!1});c.addEventListener("mousedown",e=>{const t=[e.x,e.y],n=o.getSelectedPoint(),i=o.getTouchedPointIndex(t);if(e.button!==0||n!=null&&i===null){o.setSelectedPoint(null);return}i!==null?o.setSelectedPoint(i):(o.setSelectedPoint(null),o.addPoint(t)),u=!0});