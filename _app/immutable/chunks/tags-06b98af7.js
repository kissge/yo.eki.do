import{S as te,i as le,s as ae,l as A,g as L,r as S,e as v,t as y,k as w,c as E,a as P,h as B,d as m,m as M,b as d,F as k,j as N,x as ne,y as re,z as ie,p as D,C as se,o as C,q as Z,M as j,P as oe,I as U,n as W}from"./index-7416df8b.js";import"./time.svelte_svelte_type_style_lang-2ab901cd.js";var fe="/_app/immutable/assets/external-link-e5d24e06.svg";const ue="\u2009";function J(r){return r?new Date(r).toLocaleString("sv",{timeZone:"Asia/Tokyo",dateStyle:"short"}):"????-??-??"}function Ee(r){return r?new Date(r).toLocaleString("sv",{timeZone:"Asia/Tokyo",dateStyle:"short",timeStyle:"medium"}):"????-??-?? ??:??:??"}function Le(r){if(!r)return"";const e=(new Date().getTime()-new Date(r).getTime())/1e3;if(e<0)return"\u672A\u6765";for(const{unit:n,by:t}of[{unit:"\u5E74",by:365.2425*24*60*60},{unit:"\u304B\u6708",by:30.4*24*60*60},{unit:"\u65E5",by:24*60*60},{unit:"\u6642\u9593",by:60*60}])if(e>=t){const l=Math.round(e/t*2)/2;return`${Math.floor(l)}${ue}${n}${l>Math.floor(l)?"\u534A":""}\u524D`}return"\u3064\u3044\u3055\u3063\u304D"}function K(r,e,n){const t=r.slice();return t[2]=e[n].name,t[3]=e[n].urlPath,t[4]=e[n].entities,t}function O(r,e,n){const t=r.slice();return t[7]=e[n],t}function Q(r){let e,n,t=r[2]+"",l,i,a,s,o,u=r[4],f=[];for(let h=0;h<u.length;h+=1)f[h]=X(O(r,u,h));const T=h=>D(f[h],1,1,()=>{f[h]=null});return{c(){e=v("li"),n=v("h1"),l=y(t),i=w(),a=v("ul");for(let h=0;h<f.length;h+=1)f[h].c();s=w(),this.h()},l(h){e=E(h,"LI",{class:!0});var _=P(e);n=E(_,"H1",{class:!0});var c=P(n);l=B(c,t),c.forEach(m),i=M(_),a=E(_,"UL",{class:!0});var g=P(a);for(let I=0;I<f.length;I+=1)f[I].l(g);g.forEach(m),s=M(_),_.forEach(m),this.h()},h(){d(n,"class","link-group-title"),d(a,"class","link-group-links"),d(e,"class","link-group")},m(h,_){L(h,e,_),k(e,n),k(n,l),k(e,i),k(e,a);for(let c=0;c<f.length;c+=1)f[c].m(a,null);k(e,s),o=!0},p(h,_){if((!o||_&1)&&t!==(t=h[2]+"")&&N(l,t),_&1){u=h[4];let c;for(c=0;c<u.length;c+=1){const g=O(h,u,c);f[c]?(f[c].p(g,_),S(f[c],1)):(f[c]=X(g),f[c].c(),S(f[c],1),f[c].m(a,null))}for(C(),c=u.length;c<f.length;c+=1)T(c);Z()}},i(h){if(!o){for(let _=0;_<u.length;_+=1)S(f[_]);o=!0}},o(h){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)D(f[_]);o=!1},d(h){h&&m(e),j(f,h)}}}function ce(r){let e,n=r[7].name+"",t,l;return{c(){e=v("a"),t=y(n),this.h()},l(i){e=E(i,"A",{"sveltekit:prefetch":!0,href:!0});var a=P(e);t=B(a,n),a.forEach(m),this.h()},h(){d(e,"sveltekit:prefetch",""),d(e,"href",l=r[7].urlPath)},m(i,a){L(i,e,a),k(e,t)},p(i,a){a&1&&n!==(n=i[7].name+"")&&N(t,n),a&1&&l!==(l=i[7].urlPath)&&d(e,"href",l)},d(i){i&&m(e)}}}function he(r){let e,n,t,l=r[7].name+"",i,a;return{c(){e=v("a"),n=v("img"),i=y(l),this.h()},l(s){e=E(s,"A",{href:!0,rel:!0});var o=P(e);n=E(o,"IMG",{src:!0,alt:!0,class:!0}),i=B(o,l),o.forEach(m),this.h()},h(){oe(n.src,t=fe)||d(n,"src",t),d(n,"alt","\u5916\u90E8\u30EA\u30F3\u30AF"),d(n,"class","link-icon"),d(e,"href",a=r[7].urlPath),d(e,"rel","external")},m(s,o){L(s,e,o),k(e,n),k(e,i)},p(s,o){o&1&&l!==(l=s[7].name+"")&&N(i,l),o&1&&a!==(a=s[7].urlPath)&&d(e,"href",a)},d(s){s&&m(e)}}}function V(r){let e,n,t=J(r[7].attributes.date)+"",l,i;return{c(){e=v("small"),n=v("time"),l=y(t),this.h()},l(a){e=E(a,"SMALL",{title:!0});var s=P(e);n=E(s,"TIME",{});var o=P(n);l=B(o,t),o.forEach(m),s.forEach(m),this.h()},h(){d(e,"title",i=r[7].attributes.date)},m(a,s){L(a,e,s),k(e,n),k(n,l)},p(a,s){s&1&&t!==(t=J(a[7].attributes.date)+"")&&N(l,t),s&1&&i!==(i=a[7].attributes.date)&&d(e,"title",i)},d(a){a&&m(e)}}}function X(r){var z,F,G;let e,n,t,l,i,a,s,o=((F=(z=r[7].attributes)==null?void 0:z.definition)!=null?F:"")+"",u,f,T;function h(b,p){var $;return($=b[7].attributes)!=null&&$.external?he:ce}let _=h(r),c=_(r),g=((G=r[7].attributes)==null?void 0:G.date)&&V(r);function I(...b){return r[1](r[2],r[3],...b)}return i=new pe({props:{tags:r[7].tags.filter(I)}}),{c(){e=v("li"),c.c(),n=w(),g&&g.c(),t=w(),l=v("span"),ne(i.$$.fragment),a=w(),s=v("p"),u=y(o),f=w(),this.h()},l(b){e=E(b,"LI",{class:!0});var p=P(e);c.l(p),n=M(p),g&&g.l(p),t=M(p),l=E(p,"SPAN",{class:!0});var $=P(l);re(i.$$.fragment,$),$.forEach(m),a=M(p),s=E(p,"P",{});var q=P(s);u=B(q,o),q.forEach(m),f=M(p),p.forEach(m),this.h()},h(){d(l,"class","tags"),d(e,"class","link")},m(b,p){L(b,e,p),c.m(e,null),k(e,n),g&&g.m(e,null),k(e,t),k(e,l),ie(i,l,null),k(e,a),k(e,s),k(s,u),k(e,f),T=!0},p(b,p){var q,H,R;r=b,_===(_=h(r))&&c?c.p(r,p):(c.d(1),c=_(r),c&&(c.c(),c.m(e,n))),(q=r[7].attributes)!=null&&q.date?g?g.p(r,p):(g=V(r),g.c(),g.m(e,t)):g&&(g.d(1),g=null);const $={};p&1&&($.tags=r[7].tags.filter(I)),i.$set($),(!T||p&1)&&o!==(o=((R=(H=r[7].attributes)==null?void 0:H.definition)!=null?R:"")+"")&&N(u,o)},i(b){T||(S(i.$$.fragment,b),T=!0)},o(b){D(i.$$.fragment,b),T=!1},d(b){b&&m(e),c.d(),g&&g.d(),se(i)}}}function Y(r){let e,n,t=r[4].length>0&&Q(r);return{c(){t&&t.c(),e=A()},l(l){t&&t.l(l),e=A()},m(l,i){t&&t.m(l,i),L(l,e,i),n=!0},p(l,i){l[4].length>0?t?(t.p(l,i),i&1&&S(t,1)):(t=Q(l),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(C(),D(t,1,1,()=>{t=null}),Z())},i(l){n||(S(t),n=!0)},o(l){D(t),n=!1},d(l){t&&t.d(l),l&&m(e)}}}function _e(r){let e,n,t=r[0],l=[];for(let a=0;a<t.length;a+=1)l[a]=Y(K(r,t,a));const i=a=>D(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=A()},l(a){for(let s=0;s<l.length;s+=1)l[s].l(a);e=A()},m(a,s){for(let o=0;o<l.length;o+=1)l[o].m(a,s);L(a,e,s),n=!0},p(a,[s]){if(s&1){t=a[0];let o;for(o=0;o<t.length;o+=1){const u=K(a,t,o);l[o]?(l[o].p(u,s),S(l[o],1)):(l[o]=Y(u),l[o].c(),S(l[o],1),l[o].m(e.parentNode,e))}for(C(),o=t.length;o<l.length;o+=1)i(o);Z()}},i(a){if(!n){for(let s=0;s<t.length;s+=1)S(l[s]);n=!0}},o(a){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)D(l[s]);n=!1},d(a){j(l,a),a&&m(e)}}}function me(r,e,n){let{links:t}=e;const l=(i,a,s)=>s.name!==i&&s.urlPath!==a;return r.$$set=i=>{"links"in i&&n(0,t=i.links)},[t,l]}class Pe extends te{constructor(e){super(),le(this,e,me,_e,ae,{links:0})}}function x(r,e,n){const t=r.slice();return t[2]=e[n].name,t[3]=e[n].kind,t[4]=e[n].urlPath,t[6]=n,t}function ge(r){let e;return{c(){e=v("wbr")},l(n){e=E(n,"WBR",{})},m(n,t){L(n,e,t)},d(n){n&&m(e)}}}function ee(r){let e,n=r[2]+"",t,l,i,a,s,o=r[6]>=2&&ge();return{c(){e=v("a"),t=y(n),a=w(),o&&o.c(),s=A(),this.h()},l(u){e=E(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0,"data-kind":!0});var f=P(e);t=B(f,n),f.forEach(m),a=M(u),o&&o.l(u),s=A(),this.h()},h(){d(e,"sveltekit:prefetch",""),d(e,"href",l=r[4]),d(e,"class","tag svelte-k4uca"),d(e,"data-kind",i=r[3]),U(e,"large",r[1])},m(u,f){L(u,e,f),k(e,t),L(u,a,f),o&&o.m(u,f),L(u,s,f)},p(u,f){f&1&&n!==(n=u[2]+"")&&N(t,n),f&1&&l!==(l=u[4])&&d(e,"href",l),f&1&&i!==(i=u[3])&&d(e,"data-kind",i),f&2&&U(e,"large",u[1])},d(u){u&&m(e),u&&m(a),o&&o.d(u),u&&m(s)}}}function de(r){let e,n=r[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=ee(x(r,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=A()},l(l){for(let i=0;i<t.length;i+=1)t[i].l(l);e=A()},m(l,i){for(let a=0;a<t.length;a+=1)t[a].m(l,i);L(l,e,i)},p(l,[i]){if(i&3){n=l[0];let a;for(a=0;a<n.length;a+=1){const s=x(l,n,a);t[a]?t[a].p(s,i):(t[a]=ee(s),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:W,o:W,d(l){j(t,l),l&&m(e)}}}function ke(r,e,n){let{tags:t}=e,{large:l=!1}=e;return r.$$set=i=>{"tags"in i&&n(0,t=i.tags),"large"in i&&n(1,l=i.large)},[t,l]}class pe extends te{constructor(e){super(),le(this,e,ke,de,ae,{tags:0,large:1})}}export{fe as E,Pe as L,pe as T,Ee as a,J as d,Le as r};
