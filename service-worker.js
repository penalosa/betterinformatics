!function(){"use strict";const e=["client/client.85f16230.js","client/index.d8e6514e.js","client/OtherCourses.42130a32.js","client/[slug].a0d4e6cd.js","client/codemirror.f378765f.js"].concat(["service-worker-index.html","2764-1.svg","2764.svg","CNAME","avatar.svg","compsoc-icon.png","compsoc-profile-white-nomargin.png","fonts/CascadiaCode.woff2","global.css","img/betterinf-title.png","img/camel-transparent.png","img/camel-white.png","img/color.png","img/compsoc-horizontal.png","img/favicon.ico","img/favicon.png","img/grey.png","img/tower.png","manifest.json","social.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1600717761353").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1600717761353"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1600717761353").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
