!function(){"use strict";const e=1612056874372,s=`cache${e}`,a=["/client/client.8de13ae4.js","/client/inject_styles.5607aec6.js","/client/index.4bc9ceef.js","/client/about.7104e574.js","/client/[slug].b62fab1c.js"].concat(["/service-worker-index.html","/fonts/KleeOne-Regular.woff2","/fonts/KleeOne-SemiBold.woff2","/global.css","/images/uploads/2014/05/google-group-01-200x200.png","/images/uploads/2014/05/google-group-01.png","/images/uploads/2014/05/google-group-02.png","/images/uploads/2014/05/google-group-03-300x123.png","/images/uploads/2014/05/google-group-03.png","/images/uploads/2014/07/Rplot01-200x200.png","/images/uploads/2014/07/Rplot01-300x293.png","/images/uploads/2014/07/Rplot01.png","/images/uploads/2014/07/git-gutter-200x137.png","/images/uploads/2014/07/git-gutter-300x67.png","/images/uploads/2014/07/git-gutter.png","/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.05.58-PM.2.png","/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.06.07-PM.2-148x300.png","/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.06.07-PM.2.png","/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.14.28-PM.2.png","/images/uploads/2014/12/Screen-Shot-2014-12-19-at-9.44.09-PM-200x200.png","/images/uploads/2014/12/Screen-Shot-2014-12-19-at-9.44.09-PM.png","/images/uploads/2014/12/regex-fig-02.gif","/images/uploads/2014/12/regex-fig-03.gif","/images/uploads/2014/12/regex-fig-04-300x284.gif","/images/uploads/2014/12/regex-fig-04-300x284.png","/images/uploads/2014/12/regex-fig-04.gif","/images/uploads/2015/01/Screen-Shot-2015-01-16-at-7.43.08-PM-200x200.png","/images/uploads/2015/01/Screen-Shot-2015-01-16-at-7.43.08-PM-300x196.png","/images/uploads/2015/01/Screen-Shot-2015-01-16-at-7.43.08-PM-800x800.png","/images/uploads/2015/01/Screen-Shot-2015-01-16-at-7.43.08-PM.png","/images/uploads/2016/07/Screenshot-2016-07-27-05.27.17.png","/images/uploads/2016/09/Screenshot-2016-09-08-23.02.58.png","/images/uploads/2016/10/Screenshot-2016-10-26-23.02.26.png","/images/uploads/2016/10/Screenshot-2016-10-26-23.02.34.png","/images/uploads/2016/10/Untitled.gif","/images/uploads/2017/01/pose_ushiroaruki.png","/images/uploads/2017/12/emacs1.png","/images/uploads/2017/12/emacs2.png","/images/uploads/2017/12/emacs3.png","/images/uploads/2017/12/emacs4.png","/manifest.json"]),t=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const a of e)a!==s&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const a=new URL(s.request.url),o=a.protocol.startsWith("http"),g=a.hostname===self.location.hostname&&a.port!==self.location.port,n=a.host===self.location.host&&t.has(a.pathname),i="only-if-cached"===s.request.cache&&!n;!o||g||i||s.respondWith((async()=>n&&await caches.match(s.request)||async function(s){const a=await caches.open(`offline${e}`);try{const e=await fetch(s);return a.put(s,e.clone()),e}catch(e){const t=await a.match(s);if(t)return t;throw e}}(s.request))())}))}();
