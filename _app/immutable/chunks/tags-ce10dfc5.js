import{S as te,i as le,s as ae,l as w,g as L,r as S,e as v,t as y,k as T,c as E,a as P,h as B,d as g,m as M,b as m,F as k,j as N,x as ne,y as re,z as ie,p as D,C as se,o as C,q as Z,M as j,P as oe,I as U,n as W}from"./index-7416df8b.js";import"./time.svelte_svelte_type_style_lang-2ab901cd.js";var fe="/_app/immutable/assets/external-link-e5d24e06.svg";const ue="\u2009";function J(r){return r?new Date(r).toLocaleString("sv",{timeZone:"Asia/Tokyo",dateStyle:"short"}):"????-??-??"}function Ee(r){return r?new Date(r).toLocaleString("sv",{timeZone:"Asia/Tokyo",dateStyle:"short",timeStyle:"medium"}):"????-??-?? ??:??:??"}function Le(r){if(!r)return"";const e=(new Date().getTime()-new Date(r).getTime())/1e3;if(e<0)return"\u672A\u6765";for(const{unit:n,by:t}of[{unit:"\u5E74",by:365.2425*24*60*60},{unit:"\u304B\u6708",by:30.4*24*60*60},{unit:"\u65E5",by:24*60*60},{unit:"\u6642\u9593",by:60*60}])if(e>=t){const l=Math.round(e/t*2)/2;return`${Math.floor(l)}${ue}${n}${l>Math.floor(l)?"\u534A":""}\u524D`}return"\u3064\u3044\u3055\u3063\u304D"}function K(r,e,n){const t=r.slice();return t[2]=e[n].name,t[3]=e[n].urlPath,t[4]=e[n].entities,t}function O(r,e,n){const t=r.slice();return t[7]=e[n],t}function Q(r){let e,n,t=r[2]+"",l,i,a,s,o,u=r[4],f=[];for(let h=0;h<u.length;h+=1)f[h]=X(O(r,u,h));const A=h=>D(f[h],1,1,()=>{f[h]=null});return{c(){e=v("li"),n=v("h1"),l=y(t),i=T(),a=v("ul");for(let h=0;h<f.length;h+=1)f[h].c();s=T(),this.h()},l(h){e=E(h,"LI",{class:!0});var _=P(e);n=E(_,"H1",{class:!0});var c=P(n);l=B(c,t),c.forEach(g),i=M(_),a=E(_,"UL",{class:!0});var d=P(a);for(let I=0;I<f.length;I+=1)f[I].l(d);d.forEach(g),s=M(_),_.forEach(g),this.h()},h(){m(n,"class","link-group-title"),m(a,"class","link-group-links"),m(e,"class","link-group")},m(h,_){L(h,e,_),k(e,n),k(n,l),k(e,i),k(e,a);for(let c=0;c<f.length;c+=1)f[c].m(a,null);k(e,s),o=!0},p(h,_){if((!o||_&1)&&t!==(t=h[2]+"")&&N(l,t),_&1){u=h[4];let c;for(c=0;c<u.length;c+=1){const d=O(h,u,c);f[c]?(f[c].p(d,_),S(f[c],1)):(f[c]=X(d),f[c].c(),S(f[c],1),f[c].m(a,null))}for(C(),c=u.length;c<f.length;c+=1)A(c);Z()}},i(h){if(!o){for(let _=0;_<u.length;_+=1)S(f[_]);o=!0}},o(h){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)D(f[_]);o=!1},d(h){h&&g(e),j(f,h)}}}function ce(r){let e,n=r[7].name+"",t,l;return{c(){e=v("a"),t=y(n),this.h()},l(i){e=E(i,"A",{"sveltekit:prefetch":!0,href:!0});var a=P(e);t=B(a,n),a.forEach(g),this.h()},h(){m(e,"sveltekit:prefetch",""),m(e,"href",l=r[7].urlPath)},m(i,a){L(i,e,a),k(e,t)},p(i,a){a&1&&n!==(n=i[7].name+"")&&N(t,n),a&1&&l!==(l=i[7].urlPath)&&m(e,"href",l)},d(i){i&&g(e)}}}function he(r){let e,n,t,l=r[7].name+"",i,a;return{c(){e=v("a"),n=v("img"),i=y(l),this.h()},l(s){e=E(s,"A",{href:!0,rel:!0});var o=P(e);n=E(o,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),i=B(o,l),o.forEach(g),this.h()},h(){oe(n.src,t=fe)||m(n,"src",t),m(n,"alt","\u5916\u90E8\u30EA\u30F3\u30AF"),m(n,"class","link-icon"),m(n,"width","16"),m(n,"height","16"),m(e,"href",a=r[7].urlPath),m(e,"rel","external")},m(s,o){L(s,e,o),k(e,n),k(e,i)},p(s,o){o&1&&l!==(l=s[7].name+"")&&N(i,l),o&1&&a!==(a=s[7].urlPath)&&m(e,"href",a)},d(s){s&&g(e)}}}function V(r){let e,n,t=J(r[7].attributes.date)+"",l,i;return{c(){e=v("small"),n=v("time"),l=y(t),this.h()},l(a){e=E(a,"SMALL",{title:!0});var s=P(e);n=E(s,"TIME",{});var o=P(n);l=B(o,t),o.forEach(g),s.forEach(g),this.h()},h(){m(e,"title",i=r[7].attributes.date)},m(a,s){L(a,e,s),k(e,n),k(n,l)},p(a,s){s&1&&t!==(t=J(a[7].attributes.date)+"")&&N(l,t),s&1&&i!==(i=a[7].attributes.date)&&m(e,"title",i)},d(a){a&&g(e)}}}function X(r){var z,F,G;let e,n,t,l,i,a,s,o=((F=(z=r[7].attributes)==null?void 0:z.definition)!=null?F:"")+"",u,f,A;function h(b,p){var $;return($=b[7].attributes)!=null&&$.external?he:ce}let _=h(r),c=_(r),d=((G=r[7].attributes)==null?void 0:G.date)&&V(r);function I(...b){return r[1](r[2],r[3],...b)}return i=new pe({props:{tags:r[7].tags.filter(I)}}),{c(){e=v("li"),c.c(),n=T(),d&&d.c(),t=T(),l=v("span"),ne(i.$$.fragment),a=T(),s=v("p"),u=y(o),f=T(),this.h()},l(b){e=E(b,"LI",{class:!0});var p=P(e);c.l(p),n=M(p),d&&d.l(p),t=M(p),l=E(p,"SPAN",{class:!0});var $=P(l);re(i.$$.fragment,$),$.forEach(g),a=M(p),s=E(p,"P",{});var q=P(s);u=B(q,o),q.forEach(g),f=M(p),p.forEach(g),this.h()},h(){m(l,"class","tags"),m(e,"class","link")},m(b,p){L(b,e,p),c.m(e,null),k(e,n),d&&d.m(e,null),k(e,t),k(e,l),ie(i,l,null),k(e,a),k(e,s),k(s,u),k(e,f),A=!0},p(b,p){var q,H,R;r=b,_===(_=h(r))&&c?c.p(r,p):(c.d(1),c=_(r),c&&(c.c(),c.m(e,n))),(q=r[7].attributes)!=null&&q.date?d?d.p(r,p):(d=V(r),d.c(),d.m(e,t)):d&&(d.d(1),d=null);const $={};p&1&&($.tags=r[7].tags.filter(I)),i.$set($),(!A||p&1)&&o!==(o=((R=(H=r[7].attributes)==null?void 0:H.definition)!=null?R:"")+"")&&N(u,o)},i(b){A||(S(i.$$.fragment,b),A=!0)},o(b){D(i.$$.fragment,b),A=!1},d(b){b&&g(e),c.d(),d&&d.d(),se(i)}}}function Y(r){let e,n,t=r[4].length>0&&Q(r);return{c(){t&&t.c(),e=w()},l(l){t&&t.l(l),e=w()},m(l,i){t&&t.m(l,i),L(l,e,i),n=!0},p(l,i){l[4].length>0?t?(t.p(l,i),i&1&&S(t,1)):(t=Q(l),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(C(),D(t,1,1,()=>{t=null}),Z())},i(l){n||(S(t),n=!0)},o(l){D(t),n=!1},d(l){t&&t.d(l),l&&g(e)}}}function _e(r){let e,n,t=r[0],l=[];for(let a=0;a<t.length;a+=1)l[a]=Y(K(r,t,a));const i=a=>D(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=w()},l(a){for(let s=0;s<l.length;s+=1)l[s].l(a);e=w()},m(a,s){for(let o=0;o<l.length;o+=1)l[o].m(a,s);L(a,e,s),n=!0},p(a,[s]){if(s&1){t=a[0];let o;for(o=0;o<t.length;o+=1){const u=K(a,t,o);l[o]?(l[o].p(u,s),S(l[o],1)):(l[o]=Y(u),l[o].c(),S(l[o],1),l[o].m(e.parentNode,e))}for(C(),o=t.length;o<l.length;o+=1)i(o);Z()}},i(a){if(!n){for(let s=0;s<t.length;s+=1)S(l[s]);n=!0}},o(a){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)D(l[s]);n=!1},d(a){j(l,a),a&&g(e)}}}function me(r,e,n){let{links:t}=e;const l=(i,a,s)=>s.name!==i&&s.urlPath!==a;return r.$$set=i=>{"links"in i&&n(0,t=i.links)},[t,l]}class Pe extends te{constructor(e){super(),le(this,e,me,_e,ae,{links:0})}}function x(r,e,n){const t=r.slice();return t[2]=e[n].name,t[3]=e[n].kind,t[4]=e[n].urlPath,t[6]=n,t}function ge(r){let e;return{c(){e=v("wbr")},l(n){e=E(n,"WBR",{})},m(n,t){L(n,e,t)},d(n){n&&g(e)}}}function ee(r){let e,n=r[2]+"",t,l,i,a,s,o=r[6]>=2&&ge();return{c(){e=v("a"),t=y(n),a=T(),o&&o.c(),s=w(),this.h()},l(u){e=E(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0,"data-kind":!0});var f=P(e);t=B(f,n),f.forEach(g),a=M(u),o&&o.l(u),s=w(),this.h()},h(){m(e,"sveltekit:prefetch",""),m(e,"href",l=r[4]),m(e,"class","tag svelte-1k2aus3"),m(e,"data-kind",i=r[3]),U(e,"large",r[1])},m(u,f){L(u,e,f),k(e,t),L(u,a,f),o&&o.m(u,f),L(u,s,f)},p(u,f){f&1&&n!==(n=u[2]+"")&&N(t,n),f&1&&l!==(l=u[4])&&m(e,"href",l),f&1&&i!==(i=u[3])&&m(e,"data-kind",i),f&2&&U(e,"large",u[1])},d(u){u&&g(e),u&&g(a),o&&o.d(u),u&&g(s)}}}function de(r){let e,n=r[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=ee(x(r,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=w()},l(l){for(let i=0;i<t.length;i+=1)t[i].l(l);e=w()},m(l,i){for(let a=0;a<t.length;a+=1)t[a].m(l,i);L(l,e,i)},p(l,[i]){if(i&3){n=l[0];let a;for(a=0;a<n.length;a+=1){const s=x(l,n,a);t[a]?t[a].p(s,i):(t[a]=ee(s),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:W,o:W,d(l){j(t,l),l&&g(e)}}}function ke(r,e,n){let{tags:t}=e,{large:l=!1}=e;return r.$$set=i=>{"tags"in i&&n(0,t=i.tags),"large"in i&&n(1,l=i.large)},[t,l]}class pe extends te{constructor(e){super(),le(this,e,ke,de,ae,{tags:0,large:1})}}export{fe as E,Pe as L,pe as T,Ee as a,J as d,Le as r};
