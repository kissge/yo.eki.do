import{S as t,i as e,s as l,c as s,e as n,t as r,a as o,b as a,d as c,f as h,g as f,h as i,j as u,k as d,l as g,m,n as p,o as v,q as j,p as E}from"./client.8de13ae4.js";function L(t,e,l){const s=t.slice();return s[1]=e[l],s}function x(t,e,l){const s=t.slice();return s[4]=e[l],s}function A(t){let e;return{c(){e=r("⚠️")},l(t){e=h(t,"⚠️")},m(t,l){g(t,e,l)},d(t){t&&f(e)}}}function S(t){let e,l,s,o=t[4]+"";return{c(){e=n("span"),l=r("#"),s=r(o),this.h()},l(t){e=a(t,"SPAN",{class:!0});var n=c(e);l=h(n,"#"),s=h(n,o),n.forEach(f),this.h()},h(){u(e,"class","tag svelte-132v4j5")},m(t,n){g(t,e,n),m(e,l),m(e,s)},p(t,e){1&e&&o!==(o=t[4]+"")&&p(s,o)},d(t){t&&f(e)}}}function y(t){let e,l,s,j,E,L,y,z,$,b,k=(t[1].date||"????-??-??").slice(0,10)+"",q=t[1].title+"",I=t[1].from&&A(),M=t[1].tags||[],N=[];for(let e=0;e<M.length;e+=1)N[e]=S(x(t,M,e));return{c(){e=n("li"),l=n("small"),s=r(k),j=o(),I&&I.c(),E=o(),L=n("a"),y=r(q),$=o();for(let t=0;t<N.length;t+=1)N[t].c();b=o(),this.h()},l(t){e=a(t,"LI",{class:!0});var n=c(e);l=a(n,"SMALL",{class:!0});var r=c(l);s=h(r,k),r.forEach(f),j=i(n),I&&I.l(n),E=i(n),L=a(n,"A",{rel:!0,href:!0});var o=c(L);y=h(o,q),o.forEach(f),$=i(n);for(let t=0;t<N.length;t+=1)N[t].l(n);b=i(n),n.forEach(f),this.h()},h(){u(l,"class","svelte-132v4j5"),u(L,"rel","prefetch"),u(L,"href",z=t[1].type+"/"+t[1].slug),u(e,"class","svelte-132v4j5"),d(e,"old",t[1].from)},m(t,n){g(t,e,n),m(e,l),m(l,s),m(e,j),I&&I.m(e,null),m(e,E),m(e,L),m(L,y),m(e,$);for(let t=0;t<N.length;t+=1)N[t].m(e,null);m(e,b)},p(t,l){if(1&l&&k!==(k=(t[1].date||"????-??-??").slice(0,10)+"")&&p(s,k),t[1].from?I||(I=A(),I.c(),I.m(e,E)):I&&(I.d(1),I=null),1&l&&q!==(q=t[1].title+"")&&p(y,q),1&l&&z!==(z=t[1].type+"/"+t[1].slug)&&u(L,"href",z),1&l){let s;for(M=t[1].tags||[],s=0;s<M.length;s+=1){const n=x(t,M,s);N[s]?N[s].p(n,l):(N[s]=S(n),N[s].c(),N[s].m(e,b))}for(;s<N.length;s+=1)N[s].d(1);N.length=M.length}1&l&&d(e,"old",t[1].from)},d(t){t&&f(e),I&&I.d(),v(N,t)}}}function z(t){let e,l,r;document.title=e=s.title;let h=t[0],d=[];for(let e=0;e<h.length;e+=1)d[e]=y(L(t,h,e));return{c(){l=o(),r=n("ul");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){j('[data-svelte="svelte-2zzrdj"]',document.head).forEach(f),l=i(t),r=a(t,"UL",{class:!0});var e=c(r);for(let t=0;t<d.length;t+=1)d[t].l(e);e.forEach(f),this.h()},h(){u(r,"class","svelte-132v4j5")},m(t,e){g(t,l,e),g(t,r,e);for(let t=0;t<d.length;t+=1)d[t].m(r,null)},p(t,[l]){if(0&l&&e!==(e=s.title)&&(document.title=e),1&l){let e;for(h=t[0],e=0;e<h.length;e+=1){const s=L(t,h,e);d[e]?d[e].p(s,l):(d[e]=y(s),d[e].c(),d[e].m(r,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=h.length}},i:E,o:E,d(t){t&&f(l),t&&f(r),v(d,t)}}}function $(){return this.fetch("posts.json").then((t=>t.json())).then((t=>({posts:t})))}function b(t,e,l){let{posts:s}=e;return t.$$set=t=>{"posts"in t&&l(0,s=t.posts)},[s]}export default class extends t{constructor(t){super(),e(this,t,b,z,l,{posts:0})}}export{$ as preload};
