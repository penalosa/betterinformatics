function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function x(t){return E(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let A,L;function R(){if(void 0===A){A=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){A=!0}}return A}function j(t,e){const n=getComputedStyle(t),r=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const o=h("iframe");o.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${r};`),o.setAttribute("aria-hidden","true"),o.tabIndex=-1;const s=R();let a;return s?(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=$(window,"message",t=>{t.source===o.contentWindow&&e()})):(o.src="about:blank",o.onload=()=>{a=$(o.contentWindow,"resize",e)}),u(t,o),()=>{(s||a&&o.contentWindow)&&a(),p(o)}}function I(t,e,n){t.classList[n?"add":"remove"](e)}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}class C{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=h(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)f(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}function N(t){L=t}function k(){if(!L)throw new Error("Function called outside component initialization");return L}function q(t){k().$$.on_mount.push(t)}function T(){const t=k();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}function U(t,e){k().$$.context.set(t,e)}function O(t){return k().$$.context.get(t)}const B=[],M=[],D=[],z=[],H=Promise.resolve();let K=!1;function V(t){D.push(t)}let J=!1;const W=new Set;function F(){if(!J){J=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];N(e),G(e.$$)}for(B.length=0;M.length;)M.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];W.has(e)||(W.add(e),e())}D.length=0}while(B.length);for(;z.length;)z.pop()();K=!1,J=!1,W.clear()}}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const Y=new Set;let X;function Q(){X={r:0,c:[],p:X}}function Z(){X.r||o(X.c),X=X.p}function tt(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(Y.has(t))return;Y.add(t),X.c.push(()=>{Y.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function nt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function rt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function st(t,e){t&&t.l(e)}function at(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),V(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(V)}function ct(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(B.push(t),K||(K=!0,H.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,s,a,c,i,l=[-1]){const u=L;N(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&it(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&tt(e.$$.fragment),at(e,n.target,n.anchor),F()}N(u)}class ut{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ft=[];function pt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ft.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const dt={},ht=Symbol();function mt(t){let e,n,r,o,s,a,c,d,y,$,S,A,L,R,j,I,C,N,k;const q=t[2].default,T=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(q,t,t[1],null);return{c(){e=h("meta"),n=h("meta"),r=h("meta"),o=h("meta"),s=h("meta"),a=h("link"),c=h("link"),d=g(),y=h("a"),$=h("div"),S=h("h1"),A=m("Better Informatics"),L=g(),R=h("div"),T&&T.c(),j=g(),I=h("div"),C=h("a"),N=m("Send feedback"),this.h()},l(t){const i=P('[data-svelte="svelte-12fqgge"]',document.head);e=w(i,"META",{name:!0,content:!0}),n=w(i,"META",{property:!0,content:!0}),r=w(i,"META",{property:!0,content:!0}),o=w(i,"META",{property:!0,content:!0}),s=w(i,"META",{property:!0,content:!0}),a=w(i,"LINK",{rel:!0,href:!0,type:!0}),c=w(i,"LINK",{rel:!0,href:!0}),i.forEach(p),d=x(t),y=w(t,"A",{href:!0});var l=v(y);$=w(l,"DIV",{id:!0,class:!0});var u=v($);S=w(u,"H1",{});var f=v(S);A=E(f,"Better Informatics"),f.forEach(p),u.forEach(p),l.forEach(p),L=x(t),R=w(t,"DIV",{id:!0});var h=v(R);T&&T.l(h),j=x(h),I=w(h,"DIV",{style:!0});var m=v(I);C=w(m,"A",{href:!0});var g=v(C);N=E(g,"Send feedback"),g.forEach(p),m.forEach(p),h.forEach(p),this.h()},h(){b(e,"name","description"),b(e,"content",yt),b(n,"property","og:title"),b(n,"content","Better Informatics"),b(r,"property","og:description"),b(r,"content",yt),b(o,"property","og:type"),b(o,"content","website"),b(s,"property","og:image"),b(s,"content","/img/camel-white.png"),b(a,"rel","icon"),b(a,"href","/img/favicon.ico"),b(a,"type","image/png"),document.title="Better Informatics",b(c,"rel","stylesheet"),b(c,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),b($,"id","title"),b($,"class","ir hide-on-small"),b(y,"href","/"),b(C,"href","mailto:admin@betterinformatics.com"),_(I,"display","flex"),_(I,"flex-direction","column"),_(I,"justify-content","center"),_(I,"align-items","center"),_(I,"margin-top","4em"),b(R,"id","content")},m(t,i){u(document.head,e),u(document.head,n),u(document.head,r),u(document.head,o),u(document.head,s),u(document.head,a),u(document.head,c),f(t,d,i),f(t,y,i),u(y,$),u($,S),u(S,A),f(t,L,i),f(t,R,i),T&&T.m(R,null),u(R,j),u(R,I),u(I,C),u(C,N),k=!0},p(t,[e]){T&&T.p&&2&e&&l(T,q,t,t[1],e,null,null)},i(t){k||(tt(T,t),k=!0)},o(t){et(T,t),k=!1},d(t){p(e),p(n),p(r),p(o),p(s),p(a),p(c),t&&p(d),t&&p(y),t&&p(L),t&&p(R),T&&T.d(t)}}}async function gt({params:t,query:e}){const n=await this.fetch("data.json"),r=await n.json();if(200===n.status)return{data:r};this.error(n.status,r.message)}const yt="Welcome to Better Informatics. The student run website for students in the School of Informatics.";function $t(t,e,n){let{data:r}=e;U(ht,{data:r});let{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"data"in t&&n(0,r=t.data),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class bt extends ut{constructor(t){super(),lt(this,t,$t,mt,a,{data:0})}}function vt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=w(t,"PRE",{});var o=v(e);n=E(o,r),o.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&p(e)}}}function wt(e){let n,r,o,s,a,c,i,l,d,$=e[1].message+"";document.title=n=e[0];let _=e[2]&&e[1].stack&&vt(e);return{c(){r=g(),o=h("h1"),s=m(e[0]),a=g(),c=h("p"),i=m($),l=g(),_&&_.c(),d=y(),this.h()},l(t){P('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=x(t),o=w(t,"H1",{class:!0});var n=v(o);s=E(n,e[0]),n.forEach(p),a=x(t),c=w(t,"P",{class:!0});var u=v(c);i=E(u,$),u.forEach(p),l=x(t),_&&_.l(t),d=y(),this.h()},h(){b(o,"class","svelte-u4e356"),b(c,"class","svelte-u4e356")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,a,e),f(t,c,e),u(c,i),f(t,l,e),_&&_.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&$!==($=t[1].message+"")&&S(i,$),t[2]&&t[1].stack?_?_.p(t,e):(_=vt(t),_.c(),_.m(d.parentNode,d)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(a),t&&p(c),t&&p(l),_&&_.d(t),t&&p(d)}}}function Et(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class xt extends ut{constructor(t){super(),lt(this,t,Et,wt,a,{status:0,error:1})}}function St(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&ot(n.$$.fragment),r=y()},l(t){n&&st(n.$$.fragment,t),r=y()},m(t,e){n&&at(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?nt(s,[rt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){Q();const t=n;et(t.$$.fragment,1,0,()=>{ct(t,1)}),Z()}a?(n=new a(c()),ot(n.$$.fragment),tt(n.$$.fragment,1),at(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&tt(n.$$.fragment,t),o=!0)},o(t){n&&et(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&ct(n,t)}}}function _t(t){let e,n;return e=new xt({props:{error:t[0],status:t[1]}}),{c(){ot(e.$$.fragment)},l(t){st(e.$$.fragment,t)},m(t,r){at(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){ct(e,t)}}}function At(t){let e,n,r,o;const s=[_t,St],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){a[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(Q(),et(a[i],1,1,()=>{a[i]=null}),Z(),n=a[e],n||(n=a[e]=s[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){a[e].d(t),t&&p(r)}}}function Lt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[At]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new bt({props:s}),{c(){ot(n.$$.fragment)},l(t){st(n.$$.fragment,t)},m(t,e){at(n,t,e),r=!0},p(t,[e]){const r=12&e?nt(o,[4&e&&{segment:t[2][0]},8&e&&rt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){ct(n,t)}}}function Rt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u;return u=l,k().$$.after_update.push(u),U(dt,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class jt extends ut{constructor(t){super(),lt(this,t,Rt,Lt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const It=[/^\/data\.json$/,/^\/([^\/]+?)\.json$/],Pt=[{js:()=>import("./index.23fe499f.js"),css:[]},{js:()=>import("./[slug].f26f535f.js"),css:[]}],Ct=(Nt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:1,params:t=>({slug:Nt(t[1])})}]}]);var Nt;const kt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,Tt,Ut,Ot=!1,Bt=[],Mt="{}";const Dt={page:function(t){const e=pt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:pt(null),session:pt(kt&&kt.session)};let zt,Ht;Dt.session.subscribe(async t=>{if(zt=t,!Ot)return;Ht=!0;const e=Xt(new URL(location.href)),n=Tt={},{redirect:r,props:o,branch:s}=await ee(e);n===Tt&&await te(r,s,o,e.page)});let Kt,Vt=null;let Jt,Wt=1;const Ft="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Gt={};function Yt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Xt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(kt.baseUrl))return null;let e=t.pathname.slice(kt.baseUrl.length);if(""===e&&(e="/"),!It.some(t=>t.test(e)))for(let n=0;n<Ct.length;n+=1){const r=Ct[n],o=r.pattern.exec(e);if(o){const n=Yt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Qt(){return{x:pageXOffset,y:pageYOffset}}async function Zt(t,e,n,r){if(e)Jt=e;else{const t=Qt();Gt[Jt]=t,e=Jt=++Wt,Gt[Jt]=n?t:{x:0,y:0}}Jt=e,qt&&Dt.preloading.set(!0);const o=Vt&&Vt.href===t.href?Vt.promise:ee(t);Vt=null;const s=Tt={},{redirect:a,props:c,branch:i}=await o;if(s===Tt&&(await te(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Gt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Gt[Jt]=t,t&&scrollTo(t.x,t.y)}}async function te(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Xt(new URL(t,document.baseURI));return n?(Ft[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Zt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Dt.page.set(r),Dt.preloading.set(!1),qt)qt.$set(n);else{n.stores={page:{subscribe:Dt.page.subscribe},preloading:{subscribe:Dt.preloading.subscribe},session:Dt.session},n.level0={props:await Ut},n.notify=Dt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)re(t.nextSibling);re(t),re(e)}qt=new jt({target:Kt,props:n,hydrate:!0})}Bt=e,Mt=JSON.stringify(r.query),Ot=!0,Ht=!1}async function ee(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ut||(Ut=kt.preloaded[0]||gt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},zt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Mt)return!0;const o=Bt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ht&&!u&&Bt[c]&&Bt[c].part===e.i)return Bt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ne);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Pt[e.i]);let m;return m=Ot||!kt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},zt):{}:kt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function ne(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function re(t){t.parentNode.removeChild(t)}function oe(t){const e=Xt(new URL(t,document.baseURI));if(e)return Vt&&t===Vt.href||function(t,e){Vt={href:t,promise:e}}(t,ee(e)),Vt.promise}let se;function ae(t){clearTimeout(se),se=setTimeout(()=>{ce(t)},20)}function ce(t){const e=le(t.target);e&&"prefetch"===e.rel&&oe(e.href)}function ie(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Xt(o);if(s){Zt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ft.pushState({id:Jt},"",o.href)}}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ue(t){if(Gt[Jt]=Qt(),t.state){const e=Xt(new URL(location.href));e?Zt(e,t.state.id):location.href=location.href}else Wt=Wt+1,function(t){Jt=t}(Wt),Ft.replaceState({id:Jt},"",location.href)}const fe=()=>O(dt);var pe;pe={target:document.querySelector("#sapper")},"scrollRestoration"in Ft&&(Ft.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ft.scrollRestoration="auto"}),addEventListener("load",()=>{Ft.scrollRestoration="manual"}),function(t){Kt=t}(pe.target),addEventListener("click",ie),addEventListener("popstate",ue),addEventListener("touchstart",ce),addEventListener("mousemove",ae),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ft.replaceState({id:Wt},"",e);const n=new URL(location.href);if(kt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=kt;Ut||(Ut=s&&s[0]),te(null,[],{error:c,status:a,session:o,level0:{props:Ut},level1:{props:{status:a,error:c},component:xt},segments:s},{host:e,path:n,query:Yt(r),params:{}})}();const r=Xt(n);return r?Zt(r,Wt,!0,t):void 0});export{S as A,t as B,fe as C,c as D,V as E,I as F,j as G,C as H,T as I,q as J,M as K,$ as L,ut as S,g as a,y as b,w as c,v as d,h as e,E as f,p as g,x as h,lt as i,b as j,f as k,u as l,tt as m,ot as n,st as o,at as p,et as q,ct as r,a as s,m as t,Z as u,_ as v,d as w,O as x,Q as y,ht as z};