import{S as M,i as R,s as U,e as v,t as T,k as A,c as b,a as I,h as C,d as h,m as N,b as d,g,F as k,G as V,l as O,H as z,I as q,J as P,K as Q,L as W,r as X,p as Y,M as Z,N as x}from"../chunks/index-7416df8b.js";import{g as B,a as S,n as F,t as ee,p as te}from"../chunks/time.svelte_svelte_type_style_lang-37f163cc.js";import"../chunks/singletons-d1fb5791.js";function le(){if(typeof document=="undefined"||!B)return;const l=document.createElement("script");l.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${B}`,l.crossOrigin="anonymous",document.head.appendChild(l)}function oe(){var o,n;if(typeof window=="undefined"||typeof document=="undefined"||!S)return;const l=document.createElement("script");l.src=`https://www.googletagmanager.com/gtag/js?id=${S}`,document.head.appendChild(l),(o=window.dataLayer)!=null||(window.dataLayer=[]),(n=window.gtag)!=null||(window.gtag=(...i)=>window.dataLayer.push(i)),window.gtag("js",new Date),window.gtag("config",S)}function H(l,o,n){const i=l.slice();return i[4]=o[n].href,i[5]=o[n].title,i}function ne(l){let o,n,i,f,p,r,s;return{c(){o=v("link"),n=A(),i=v("link"),p=A(),r=v("link"),this.h()},l(t){o=b(t,"LINK",{href:!0,rel:!0}),n=N(t),i=b(t,"LINK",{rel:!0,href:!0}),p=N(t),r=b(t,"LINK",{rel:!0,href:!0}),this.h()},h(){d(o,"href","https://twitter.com/"+ee),d(o,"rel","me"),d(i,"rel","webmention"),d(i,"href",f="https://webmention.io/"+l[0].url.host+"/webmention"),d(r,"rel","pingback"),d(r,"href",s="https://webmention.io/"+l[0].url.host+"/xmlrpc")},m(t,a){g(t,o,a),g(t,n,a),g(t,i,a),g(t,p,a),g(t,r,a)},p(t,a){a&1&&f!==(f="https://webmention.io/"+t[0].url.host+"/webmention")&&d(i,"href",f),a&1&&s!==(s="https://webmention.io/"+t[0].url.host+"/xmlrpc")&&d(r,"href",s)},d(t){t&&h(o),t&&h(n),t&&h(i),t&&h(p),t&&h(r)}}}function J(l){let o,n,i=l[5]+"",f,p,r,s;return{c(){o=v("li"),n=v("a"),f=T(i),s=A(),this.h()},l(t){o=b(t,"LI",{});var a=I(o);n=b(a,"A",{"sveltekit:prefetch":!0,href:!0,"aria-current":!0});var y=I(n);f=C(y,i),y.forEach(h),s=N(a),a.forEach(h),this.h()},h(){d(n,"sveltekit:prefetch",""),d(n,"href",p=l[4]),d(n,"aria-current",r=l[4]===l[0].url.pathname&&!l[1]?"page":void 0)},m(t,a){g(t,o,a),k(o,n),k(n,f),k(o,s)},p(t,a){a&3&&r!==(r=t[4]===t[0].url.pathname&&!t[1]?"page":void 0)&&d(n,"aria-current",r)},d(t){t&&h(o)}}}function ie(l){let o,n,i,f,p,r,s,t,a,y,E,w=ne(l),L=F,c=[];for(let e=0;e<L.length;e+=1)c[e]=J(H(l,L,e));const j=l[3].default,m=V(j,l,l[2],null);return{c(){w&&w.c(),o=O(),n=A(),i=v("nav"),f=v("ul");for(let e=0;e<c.length;e+=1)c[e].c();p=A(),m&&m.c(),r=A(),s=v("footer"),t=T("Built with "),a=v("a"),y=T("monolog"),this.h()},l(e){const _=z('[data-svelte="svelte-10crdf0"]',document.head);w&&w.l(_),o=O(),_.forEach(h),n=N(e),i=b(e,"NAV",{});var u=I(i);f=b(u,"UL",{});var $=I(f);for(let K=0;K<c.length;K+=1)c[K].l($);$.forEach(h),u.forEach(h),p=N(e),m&&m.l(e),r=N(e),s=b(e,"FOOTER",{});var D=I(s);t=C(D,"Built with "),a=b(D,"A",{href:!0});var G=I(a);y=C(G,"monolog"),G.forEach(h),D.forEach(h),this.h()},h(){q(i,"isTop",l[1]),d(a,"href","https://github.com/kissge/monolog")},m(e,_){w&&w.m(document.head,null),k(document.head,o),g(e,n,_),g(e,i,_),k(i,f);for(let u=0;u<c.length;u+=1)c[u].m(f,null);g(e,p,_),m&&m.m(e,_),g(e,r,_),g(e,s,_),k(s,t),k(s,a),k(a,y),E=!0},p(e,[_]){if(w.p(e,_),_&3){L=F;let u;for(u=0;u<L.length;u+=1){const $=H(e,L,u);c[u]?c[u].p($,_):(c[u]=J($),c[u].c(),c[u].m(f,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=L.length}_&2&&q(i,"isTop",e[1]),m&&m.p&&(!E||_&4)&&P(m,j,e,e[2],E?W(j,e[2],_,null):Q(e[2]),null)},i(e){E||(X(m,e),E=!0)},o(e){Y(m,e),E=!1},d(e){w&&w.d(e),h(o),e&&h(n),e&&h(i),Z(c,e),e&&h(p),m&&m.d(e),e&&h(r),e&&h(s)}}}function ae(l,o,n){let i,f;x(l,te,s=>n(0,f=s));let{$$slots:p={},$$scope:r}=o;return le(),oe(),l.$$set=s=>{"$$scope"in s&&n(2,r=s.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&n(1,i=f.url.pathname==="/")},[f,i,r,p]}class ue extends M{constructor(o){super(),R(this,o,ae,ie,U,{})}}export{ue as default};
