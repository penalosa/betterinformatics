import{S as t,i as n,s as e,b as a,k as o,m as r,n as s,o as l,p as c,q as i,r as f,u as m,g as d,a as g,e as p,h as $,c as u,d as h,v as w,w as k,x as y,z as S,y as v,H as x}from"./client.85f16230.js";import{N as j,O as N,S as C}from"./OtherCourses.42130a32.js";function q(t,n,e){const a=t.slice();return a[8]=n[e],a}function B(t,n,e){const a=t.slice();return a[8]=n[e],a}function O(t){let n,e,s=t[1].levels&&b(t);return{c(){s&&s.c(),n=a()},l(t){s&&s.l(t),n=a()},m(t,a){s&&s.m(t,a),o(t,n,a),e=!0},p(t,e){t[1].levels?s?(s.p(t,e),2&e&&r(s,1)):(s=b(t),s.c(),r(s,1),s.m(n.parentNode,n)):s&&(v(),i(s,1,1,()=>{s=null}),m())},i(t){e||(r(s),e=!0)},o(t){i(s),e=!1},d(t){s&&s.d(t),t&&d(n)}}}function b(t){let n,e;return n=new N({props:{page:t[1],sections:t[4],allSections:t[2]}}),{c(){s(n.$$.fragment)},l(t){l(n.$$.fragment,t)},m(t,a){c(n,t,a),e=!0},p(t,e){const a={};2&e&&(a.page=t[1]),16&e&&(a.sections=t[4]),4&e&&(a.allSections=t[2]),n.$set(a)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function z(t){let n,e;return n=new C({props:{section:t[8].data,content:t[8].content,markdown:t[8].markdown,page:t[1]}}),{c(){s(n.$$.fragment)},l(t){l(n.$$.fragment,t)},m(t,a){c(n,t,a),e=!0},p(t,e){const a={};8&e&&(a.section=t[8].data),8&e&&(a.content=t[8].content),8&e&&(a.markdown=t[8].markdown),2&e&&(a.page=t[1]),n.$set(a)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function D(t){let n,e;return n=new C({props:{section:t[8].data,content:t[8].content,markdown:t[8].markdown,page:t[1]}}),{c(){s(n.$$.fragment)},l(t){l(n.$$.fragment,t)},m(t,a){c(n,t,a),e=!0},p(t,e){const a={};16&e&&(a.section=t[8].data),16&e&&(a.content=t[8].content),16&e&&(a.markdown=t[8].markdown),2&e&&(a.page=t[1]),n.$set(a)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function E(t){let n,e,y,S,N,C,b,E,H,I;n=new j({props:{navigation:t[5].navigation}});let V=t[1].year&&"start"!=t[1].year&&O(t),A=t[3],F=[];for(let n=0;n<A.length;n+=1)F[n]=z(B(t,A,n));const G=t=>i(F[t],1,1,()=>{F[t]=null});let J=t[4],K=[];for(let n=0;n<J.length;n+=1)K[n]=D(q(t,J,n));const L=t=>i(K[t],1,1,()=>{K[t]=null});return{c(){s(n.$$.fragment),e=g(),y=p("div"),S=g(),V&&V.c(),N=g(),b=g();for(let t=0;t<F.length;t+=1)F[t].c();E=g();for(let t=0;t<K.length;t+=1)K[t].c();H=a(),this.h()},l(t){l(n.$$.fragment,t),e=$(t),y=u(t,"DIV",{style:!0}),h(y).forEach(d),S=$(t),V&&V.l(t),N=$(t),b=$(t);for(let n=0;n<F.length;n+=1)F[n].l(t);E=$(t);for(let n=0;n<K.length;n+=1)K[n].l(t);H=a(),this.h()},h(){w(y,"margin","10px"),w(y,"display","flex"),w(y,"justify-content","center"),C=new x(b)},m(a,r){c(n,a,r),o(a,e,r),o(a,y,r),o(a,S,r),V&&V.m(a,r),o(a,N,r),C.m(t[0],a,r),o(a,b,r);for(let t=0;t<F.length;t+=1)F[t].m(a,r);o(a,E,r);for(let t=0;t<K.length;t+=1)K[t].m(a,r);o(a,H,r),I=!0},p(t,[n]){if(t[1].year&&"start"!=t[1].year?V?(V.p(t,n),2&n&&r(V,1)):(V=O(t),V.c(),r(V,1),V.m(N.parentNode,N)):V&&(v(),i(V,1,1,()=>{V=null}),m()),(!I||1&n)&&C.p(t[0]),10&n){let e;for(A=t[3],e=0;e<A.length;e+=1){const a=B(t,A,e);F[e]?(F[e].p(a,n),r(F[e],1)):(F[e]=z(a),F[e].c(),r(F[e],1),F[e].m(E.parentNode,E))}for(v(),e=A.length;e<F.length;e+=1)G(e);m()}if(18&n){let e;for(J=t[4],e=0;e<J.length;e+=1){const a=q(t,J,e);K[e]?(K[e].p(a,n),r(K[e],1)):(K[e]=D(a),K[e].c(),r(K[e],1),K[e].m(H.parentNode,H))}for(v(),e=J.length;e<K.length;e+=1)L(e);m()}},i(t){if(!I){r(n.$$.fragment,t),r(V);for(let t=0;t<A.length;t+=1)r(F[t]);for(let t=0;t<J.length;t+=1)r(K[t]);I=!0}},o(t){i(n.$$.fragment,t),i(V),F=F.filter(Boolean);for(let t=0;t<F.length;t+=1)i(F[t]);K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)i(K[t]);I=!1},d(t){f(n,t),t&&d(e),t&&d(y),t&&d(S),V&&V.d(t),t&&d(N),t&&C.d(),t&&d(b),k(F,t),t&&d(E),k(K,t),t&&d(H)}}}async function H({params:t,query:n}){const e=await this.fetch(t.slug+".json"),a=await e.json();if(200===e.status)return{content:a.content,frontmatter:a.data,sections:a.sections,markdown:a.markdown,allSections:a.allSections};this.error(e.status,a.message)}function I(t,n,e){let{content:a}=n,{frontmatter:o}=n,{sections:r}=n,{markdown:s}=n,{allSections:l}=n;const{data:c}=y(S);let i,f;return t.$set=t=>{"content"in t&&e(0,a=t.content),"frontmatter"in t&&e(1,o=t.frontmatter),"sections"in t&&e(6,r=t.sections),"markdown"in t&&e(7,s=t.markdown),"allSections"in t&&e(2,l=t.allSections)},t.$$.update=()=>{64&t.$$.dirty&&e(3,i=r.filter(t=>!!t.data.year&&!!t.data.pinned).sort((t,n)=>t.data.title.localeCompare(n.data.title))),64&t.$$.dirty&&e(4,f=r.filter(t=>!!t.data.year&&!t.data.pinned).sort((t,n)=>t.data.title.localeCompare(n.data.title)))},[a,o,l,i,f,c,r,s]}export default class extends t{constructor(t){super(),n(this,t,I,E,e,{content:0,frontmatter:1,sections:6,markdown:7,allSections:2})}}export{H as preload};