var ft=Object.defineProperty;var je=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var qe=(r,e,t)=>e in r?ft(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ge=(r,e)=>{for(var t in e||(e={}))ct.call(e,t)&&qe(r,t,e[t]);if(je)for(var t of je(e))ut.call(e,t)&&qe(r,t,e[t]);return r};import{_ as ht}from"../chunks/preload-helper-60cab3ee.js";import{S as Me,i as Ae,s as Le,l as Ie,g as A,e as g,k as P,t as H,c as p,a as E,m as U,h as N,d as u,P as de,b as n,F as c,j as te,M as st,I as ce,n as ve,f as ue,G as mt,J as _t,K as dt,L as gt,r as x,p as ne,Q as pt,w as it,v as vt,E as bt,x as be,y as ke,z as Ee,C as we,R as kt,T as rt,U as Et,H as wt,q as Se,V as Tt,N as yt,W as It,o as He}from"../chunks/index-ec00db2f.js";import{p as Mt}from"../chunks/stores-b892512b.js";import{c as At,t as Lt,s as ye,b as St}from"../chunks/time.svelte_svelte_type_style_lang-6415c217.js";import{d as Ne,a as Ht,r as ge,T as Nt,L as Ct}from"../chunks/tags-318ef311.js";import"../chunks/singletons-d1fb5791.js";var at="/_app/immutable/assets/heart-1cc6a2fc.svg",Ce="/_app/immutable/assets/message-circle-c0b45d48.svg",nt="/_app/immutable/assets/arrows-double-sw-ne-80dcf001.svg";function Ve(r,e,t){const i=r.slice();return i[5]=e[t],i}function Ot(r){let e,t,i,l,s,a,o,_=`url(${Ce})`;return{c(){e=g("a"),t=g("small"),i=H("Twitter\u3067"),l=P(),s=g("span"),a=H("\u30B3\u30E1\u30F3\u30C8\u3059\u308B"),this.h()},l(m){e=p(m,"A",{href:!0,class:!0});var f=E(e);t=p(f,"SMALL",{class:!0});var b=E(t);i=N(b,"Twitter\u3067"),b.forEach(u),l=U(f),s=p(f,"SPAN",{class:!0});var d=E(s);a=N(d,"\u30B3\u30E1\u30F3\u30C8\u3059\u308B"),d.forEach(u),f.forEach(u),this.h()},h(){n(t,"class","svelte-19gm1ik"),n(s,"class","svelte-19gm1ik"),n(e,"href",o="https://twitter.com/intent/tweet?url="+r[1]),n(e,"class","svelte-19gm1ik"),ue(e,"background-image",_,!1),ue(e,"color","#3579d1",!1)},m(m,f){A(m,e,f),c(e,t),c(t,i),c(e,l),c(e,s),c(s,a)},p(m,f){f&2&&o!==(o="https://twitter.com/intent/tweet?url="+m[1])&&n(e,"href",o)},d(m){m&&u(e)}}}function Rt(r){let e,t,i,l,s,a,o,_=`url(${at})`,m,f,b,d,v,k,C,M,y=`url(${nt})`,O,D,L,$,le,X,Q,se,fe=`url(${Ce})`;return{c(){e=g("a"),t=g("small"),i=H("Twitter\u3067"),l=P(),s=g("span"),a=H("\u3044\u3044\u306D\u3059\u308B"),m=P(),f=g("a"),b=g("small"),d=H("Twitter\u3067"),v=P(),k=g("span"),C=H("RT\u3059\u308B"),O=P(),D=g("a"),L=g("small"),$=H("Twitter\u3067"),le=P(),X=g("span"),Q=H("\u30B3\u30E1\u30F3\u30C8\u3059\u308B"),this.h()},l(I){e=p(I,"A",{href:!0,class:!0});var q=E(e);t=p(q,"SMALL",{class:!0});var G=E(t);i=N(G,"Twitter\u3067"),G.forEach(u),l=U(q),s=p(q,"SPAN",{class:!0});var V=E(s);a=N(V,"\u3044\u3044\u306D\u3059\u308B"),V.forEach(u),q.forEach(u),m=U(I),f=p(I,"A",{href:!0,class:!0});var ie=E(f);b=p(ie,"SMALL",{class:!0});var T=E(b);d=N(T,"Twitter\u3067"),T.forEach(u),v=U(ie),k=p(ie,"SPAN",{class:!0});var S=E(k);C=N(S,"RT\u3059\u308B"),S.forEach(u),ie.forEach(u),O=U(I),D=p(I,"A",{href:!0,class:!0});var j=E(D);L=p(j,"SMALL",{class:!0});var re=E(L);$=N(re,"Twitter\u3067"),re.forEach(u),le=U(j),X=p(j,"SPAN",{class:!0});var W=E(X);Q=N(W,"\u30B3\u30E1\u30F3\u30C8\u3059\u308B"),W.forEach(u),j.forEach(u),this.h()},h(){n(t,"class","svelte-19gm1ik"),n(s,"class","svelte-19gm1ik"),n(e,"href",o="https://twitter.com/intent/like?tweet_id="+r[2]),n(e,"class","svelte-19gm1ik"),ue(e,"background-image",_,!1),ue(e,"color","#b80b4d",!1),n(b,"class","svelte-19gm1ik"),n(k,"class","svelte-19gm1ik"),n(f,"href",M="https://twitter.com/intent/retweet?tweet_id="+r[2]),n(f,"class","svelte-19gm1ik"),ue(f,"background-image",y,!1),ue(f,"color","#009988",!1),n(L,"class","svelte-19gm1ik"),n(X,"class","svelte-19gm1ik"),n(D,"href",se="https://twitter.com/intent/tweet?in_reply_to="+r[2]),n(D,"class","svelte-19gm1ik"),ue(D,"background-image",fe,!1),ue(D,"color","#3579d1",!1)},m(I,q){A(I,e,q),c(e,t),c(t,i),c(e,l),c(e,s),c(s,a),A(I,m,q),A(I,f,q),c(f,b),c(b,d),c(f,v),c(f,k),c(k,C),A(I,O,q),A(I,D,q),c(D,L),c(L,$),c(D,le),c(D,X),c(X,Q)},p(I,q){q&4&&o!==(o="https://twitter.com/intent/like?tweet_id="+I[2])&&n(e,"href",o),q&4&&M!==(M="https://twitter.com/intent/retweet?tweet_id="+I[2])&&n(f,"href",M),q&4&&se!==(se="https://twitter.com/intent/tweet?in_reply_to="+I[2])&&n(D,"href",se)},d(I){I&&u(e),I&&u(m),I&&u(f),I&&u(O),I&&u(D)}}}function We(r){let e,t=r[0],i=[];for(let s=0;s<t.length;s+=1)i[s]=Qe(Ve(r,t,s));let l=null;return t.length||(l=ze()),{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Ie(),l&&l.c()},l(s){for(let a=0;a<i.length;a+=1)i[a].l(s);e=Ie(),l&&l.l(s)},m(s,a){for(let o=0;o<i.length;o+=1)i[o].m(s,a);A(s,e,a),l&&l.m(s,a)},p(s,a){if(a&25){t=s[0];let o;for(o=0;o<t.length;o+=1){const _=Ve(s,t,o);i[o]?i[o].p(_,a):(i[o]=Qe(_),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length,t.length?l&&(l.d(1),l=null):l||(l=ze(),l.c(),l.m(e.parentNode,e))}},d(s){st(i,s),s&&u(e),l&&l.d(s)}}}function ze(r){let e;return{c(){e=H("Twitter\u3067\u8A00\u53CA\u3057\u3066\u3044\u305F\u3060\u3051\u308B\u3068\u81EA\u52D5\u7684\u306B\u3053\u3053\u306B\u53CE\u96C6\u3055\u308C\u307E\u3059\u3002")},l(t){e=N(t,"Twitter\u3067\u8A00\u53CA\u3057\u3066\u3044\u305F\u3060\u3051\u308B\u3068\u81EA\u52D5\u7684\u306B\u3053\u3053\u306B\u53CE\u96C6\u3055\u308C\u307E\u3059\u3002")},m(t,i){A(t,e,i)},d(t){t&&u(e)}}}function Be(r){let e,t,i=r[5].author.url.split("/")[3]+"",l,s;return{c(){e=g("small"),t=H("(@"),l=H(i),s=H(")"),this.h()},l(a){e=p(a,"SMALL",{class:!0});var o=E(e);t=N(o,"(@"),l=N(o,i),s=N(o,")"),o.forEach(u),this.h()},h(){n(e,"class","svelte-19gm1ik")},m(a,o){A(a,e,o),c(e,t),c(e,l),c(e,s)},p(a,o){o&1&&i!==(i=a[5].author.url.split("/")[3]+"")&&te(l,i)},d(a){a&&u(e)}}}function Ke(r){let e,t=r[5].content.text+"",i;return{c(){e=g("blockquote"),i=H(t),this.h()},l(l){e=p(l,"BLOCKQUOTE",{class:!0});var s=E(e);i=N(s,t),s.forEach(u),this.h()},h(){n(e,"class","svelte-19gm1ik")},m(l,s){A(l,e,s),c(e,i)},p(l,s){s&1&&t!==(t=l[5].content.text+"")&&te(i,t)},d(l){l&&u(e)}}}function Qe(r){var ie;let e,t,i,l,s,a,o,_=Ne(r[5].published||r[5]["wm-received"])+"",m,f,b,d,v,k,C,M,y=r[5].author.name+"",O,D,L=/^https:\/\/twitter.com\/[^/]+\/?$/.test(r[5].author.url),$,le,X=r[3][r[5]["wm-property"]]+"",Q,se,fe,I,q,G=L&&Be(r),V=((ie=r[5].content)==null?void 0:ie.text)&&Ke(r);return{c(){e=g("li"),t=g("img"),l=P(),s=g("a"),a=g("small"),o=g("time"),m=H(_),b=P(),d=g("span"),v=g("a"),k=g("img"),O=H(y),D=P(),G&&G.c(),le=P(),Q=H(X),se=H("."),I=P(),V&&V.c(),q=P(),this.h()},l(T){e=p(T,"LI",{class:!0});var S=E(e);t=p(S,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),l=U(S),s=p(S,"A",{href:!0,rel:!0,class:!0});var j=E(s);a=p(j,"SMALL",{title:!0,class:!0});var re=E(a);o=p(re,"TIME",{});var W=E(o);m=N(W,_),W.forEach(u),re.forEach(u),b=U(j),d=p(j,"SPAN",{class:!0});var z=E(d);v=p(z,"A",{href:!0,rel:!0,class:!0});var R=E(v);k=p(R,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),O=N(R,y),D=U(R),G&&G.l(R),R.forEach(u),le=U(z),Q=N(z,X),se=N(z,"."),z.forEach(u),j.forEach(u),I=U(S),V&&V.l(S),q=U(S),S.forEach(u),this.h()},h(){de(t.src,i=r[4][r[3][r[5]["wm-property"]]])||n(t,"src",i),n(t,"alt",""),n(t,"width","16"),n(t,"height","16"),n(t,"class","svelte-19gm1ik"),n(a,"title",f=r[5].published||r[5]["wm-received"]),n(a,"class","svelte-19gm1ik"),de(k.src,C=r[5].author.photo)||n(k,"src",C),n(k,"alt",M=r[5].author.name),n(k,"width","16"),n(k,"height","16"),n(k,"class","svelte-19gm1ik"),n(v,"href",$=r[5].author.url),n(v,"rel","external"),n(v,"class","svelte-19gm1ik"),n(d,"class","svelte-19gm1ik"),n(s,"href",fe=r[5].url),n(s,"rel","external"),n(s,"class","no-color svelte-19gm1ik"),n(e,"class","svelte-19gm1ik")},m(T,S){A(T,e,S),c(e,t),c(e,l),c(e,s),c(s,a),c(a,o),c(o,m),c(s,b),c(s,d),c(d,v),c(v,k),c(v,O),c(v,D),G&&G.m(v,null),c(d,le),c(d,Q),c(d,se),c(e,I),V&&V.m(e,null),c(e,q)},p(T,S){var j;S&1&&!de(t.src,i=T[4][T[3][T[5]["wm-property"]]])&&n(t,"src",i),S&1&&_!==(_=Ne(T[5].published||T[5]["wm-received"])+"")&&te(m,_),S&1&&f!==(f=T[5].published||T[5]["wm-received"])&&n(a,"title",f),S&1&&!de(k.src,C=T[5].author.photo)&&n(k,"src",C),S&1&&M!==(M=T[5].author.name)&&n(k,"alt",M),S&1&&y!==(y=T[5].author.name+"")&&te(O,y),S&1&&(L=/^https:\/\/twitter.com\/[^/]+\/?$/.test(T[5].author.url)),L?G?G.p(T,S):(G=Be(T),G.c(),G.m(v,null)):G&&(G.d(1),G=null),S&1&&$!==($=T[5].author.url)&&n(v,"href",$),S&1&&X!==(X=T[3][T[5]["wm-property"]]+"")&&te(Q,X),S&1&&fe!==(fe=T[5].url)&&n(s,"href",fe),(j=T[5].content)!=null&&j.text?V?V.p(T,S):(V=Ke(T),V.c(),V.m(e,q)):V&&(V.d(1),V=null)},d(T){T&&u(e),G&&G.d(),V&&V.d()}}}function Pt(r){let e,t,i,l,s,a,o;function _(d,v){return d[2]?Rt:Ot}let m=_(r),f=m(r),b=r[0]&&We(r);return{c(){e=g("section"),t=g("section"),f.c(),i=P(),l=g("h1"),s=H("Mentions"),a=P(),o=g("ol"),b&&b.c(),this.h()},l(d){e=p(d,"SECTION",{class:!0});var v=E(e);t=p(v,"SECTION",{class:!0});var k=E(t);f.l(k),k.forEach(u),i=U(v),l=p(v,"H1",{class:!0});var C=E(l);s=N(C,"Mentions"),C.forEach(u),a=U(v),o=p(v,"OL",{class:!0});var M=E(o);b&&b.l(M),M.forEach(u),v.forEach(u),this.h()},h(){n(t,"class","reaction svelte-19gm1ik"),n(l,"class","svelte-19gm1ik"),o.reversed=!0,n(o,"class","svelte-19gm1ik"),ce(o,"loading",!r[0]),n(e,"class","mentions svelte-19gm1ik")},m(d,v){A(d,e,v),c(e,t),f.m(t,null),c(e,i),c(e,l),c(l,s),c(e,a),c(e,o),b&&b.m(o,null)},p(d,[v]){m===(m=_(d))&&f?f.p(d,v):(f.d(1),f=m(d),f&&(f.c(),f.m(t,null))),d[0]?b?b.p(d,v):(b=We(d),b.c(),b.m(o,null)):b&&(b.d(1),b=null),v&1&&ce(o,"loading",!d[0])},i:ve,o:ve,d(d){d&&u(e),f.d(),b&&b.d()}}}function Ut(r,e,t){let i,l,s="";const a={"in-reply-to":"mentioned","like-of":"liked","repost-of":"retweeted","bookmark-of":"liked","mention-of":"mentioned",rsvp:"mentioned"},o={liked:at,retweeted:nt,mentioned:Ce};return At(async()=>{{t(0,l=void 0);const m=await(await fetch("https://webmention.io/api/mentions.jf2?target="+encodeURIComponent(location.href.replace(/[#?].*/,"").replace(/\/+$/,"")+"/"))).json();m.children.sort((f,b)=>(b.published||b["wm-received"]).localeCompare(f.published||f["wm-received"])),t(0,l=m.children)}t(1,s=encodeURIComponent(location.href))}),r.$$.update=()=>{var _,m;r.$$.dirty&1&&t(2,i=(m=(_=l==null?void 0:l.find(f=>f["wm-property"]==="like-of"&&f.url.startsWith(`https://twitter.com/${Lt}/status/`)))==null?void 0:_.url.match(/status\/(\d+)/))==null?void 0:m[1])},[l,s,i,a,o]}class Dt extends Me{constructor(e){super(),Ae(this,e,Ut,Pt,Le,{})}}function jt(r){let e,t,i;return{c(){e=g("time"),t=H(r[2]),this.h()},l(l){e=p(l,"TIME",{title:!0,class:!0});var s=E(e);t=N(s,r[2]),s.forEach(u),this.h()},h(){n(e,"title",i=ge(r[0])),n(e,"class","svelte-5ni4x2")},m(l,s){A(l,e,s),c(e,t)},p(l,s){s&4&&te(t,l[2]),s&1&&i!==(i=ge(l[0]))&&n(e,"title",i)},d(l){l&&u(e)}}}function qt(r){let e,t,i,l,s,a,o,_;return{c(){e=g("time"),t=H(r[2]),i=g("span"),l=H("T"),s=H(r[1]),a=g("span"),o=H("+09:00"),this.h()},l(m){e=p(m,"TIME",{title:!0,class:!0});var f=E(e);t=N(f,r[2]),i=p(f,"SPAN",{class:!0});var b=E(i);l=N(b,"T"),b.forEach(u),s=N(f,r[1]),a=p(f,"SPAN",{class:!0});var d=E(a);o=N(d,"+09:00"),d.forEach(u),f.forEach(u),this.h()},h(){n(i,"class","svelte-5ni4x2"),n(a,"class","svelte-5ni4x2"),n(e,"title",_=ge(r[0])),n(e,"class","svelte-5ni4x2")},m(m,f){A(m,e,f),c(e,t),c(e,i),c(i,l),c(e,s),c(e,a),c(a,o)},p(m,f){f&4&&te(t,m[2]),f&2&&te(s,m[1]),f&1&&_!==(_=ge(m[0]))&&n(e,"title",_)},d(m){m&&u(e)}}}function Gt(r){let e;function t(s,a){return s[1]?qt:jt}let i=t(r),l=i(r);return{c(){l.c(),e=Ie()},l(s){l.l(s),e=Ie()},m(s,a){l.m(s,a),A(s,e,a)},p(s,[a]){i===(i=t(s))&&l?l.p(s,a):(l.d(1),l=i(s),l&&(l.c(),l.m(e.parentNode,e)))},i:ve,o:ve,d(s){l.d(s),s&&u(e)}}}function Vt(r,e,t){let i,l,{date:s}=e;return r.$$set=a=>{"date"in a&&t(0,s=a.date)},r.$$.update=()=>{r.$$.dirty&1&&t(2,[i,l]=s&&/[0-9+-]+T[0-9:.]+[0-9:Z+-]+/.test(s)?Ht(s).split(" "):[s],i,(t(1,l),t(0,s)))},[s,l,i]}class Wt extends Me{constructor(e){super(),Ae(this,e,Vt,Gt,Le,{date:0})}}const zt=()=>{class r extends HTMLElement{connectedCallback(){const t=document.createElement("script");Array.from(this.attributes).forEach(l=>t.setAttribute(l.name,l.value));const i=document.createElement("iframe");i.style.border="0",i.style.width="100%",i.style.height="0",i.style.maxHeight="100vh",i.srcdoc='<body injected style="margin: 0">'+this.innerHTML+t.outerHTML,this.innerHTML="",this.appendChild(i),setTimeout(function l(){var s,a;if((a=(s=i.contentDocument)==null?void 0:s.body)!=null&&a.hasAttribute("injected")){const o=()=>{var _,m;(m=(_=i.contentDocument)==null?void 0:_.body)!=null&&m.parentElement&&(i.style.height=`${i.contentDocument.body.parentElement.offsetHeight}px`)};new ResizeObserver(o).observe(i.contentDocument.body),o()}else setTimeout(l,250)},1)}}customElements.get("x-script")||customElements.define("x-script",r)},Bt=r=>({intersecting:r&1,entry:r&2,observer:r&4}),Xe=r=>({intersecting:r[0],entry:r[1],observer:r[2]});function Kt(r){let e;const t=r[9].default,i=mt(t,r,r[8],Xe);return{c(){i&&i.c()},l(l){i&&i.l(l)},m(l,s){i&&i.m(l,s),e=!0},p(l,[s]){i&&i.p&&(!e||s&263)&&_t(i,t,l,l[8],e?gt(t,l[8],s,Bt):dt(l[8]),Xe)},i(l){e||(x(i,l),e=!0)},o(l){ne(i,l),e=!1},d(l){i&&i.d(l)}}}function Qt(r,e,t){let{$$slots:i={},$$scope:l}=e,{element:s=null}=e,{once:a=!1}=e,{intersecting:o=!1}=e,{root:_=null}=e,{rootMargin:m="0px"}=e,{threshold:f=0}=e,{entry:b=null}=e,{observer:d=null}=e;const v=pt();let k=null,C=null;const M=()=>{t(2,d=new IntersectionObserver(y=>{y.forEach(O=>{t(1,b=O),t(0,o=O.isIntersecting)})},{root:_,rootMargin:m,threshold:f}))};return it(()=>(M(),()=>{d&&(d.disconnect(),t(2,d=null))})),vt(async()=>{b!==null&&(v("observe",b),b.isIntersecting&&(v("intersect",b),a&&d.unobserve(s))),await bt(),s!==null&&s!==C&&(d.observe(s),C!==null&&d.unobserve(C),C=s),k&&m!==k&&(d.disconnect(),C=null,M()),k=m}),r.$$set=y=>{"element"in y&&t(3,s=y.element),"once"in y&&t(4,a=y.once),"intersecting"in y&&t(0,o=y.intersecting),"root"in y&&t(5,_=y.root),"rootMargin"in y&&t(6,m=y.rootMargin),"threshold"in y&&t(7,f=y.threshold),"entry"in y&&t(1,b=y.entry),"observer"in y&&t(2,d=y.observer),"$$scope"in y&&t(8,l=y.$$scope)},[o,b,d,s,a,_,m,f,l,i]}class Xt extends Me{constructor(e){super(),Ae(this,e,Qt,Kt,Le,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}var Ft="/_app/immutable/assets/brand-github-a6e3cad2.svg",Jt="/_app/immutable/assets/presentation-c41ec3dd.svg";const{document:me}=It;function Fe(r,e,t){const i=r.slice();return i[13]=e[t],i[15]=t,i}function Zt(r){let e;return{c(){e=g("wbr")},l(t){e=p(t,"WBR",{})},m(t,i){A(t,e,i)},d(t){t&&u(e)}}}function Je(r){let e=r[13]+"",t,i=r[15]>0&&Zt();return{c(){i&&i.c(),t=H(e)},l(l){i&&i.l(l),t=N(l,e)},m(l,s){i&&i.m(l,s),A(l,t,s)},p(l,s){s&1&&e!==(e=l[13]+"")&&te(t,e)},d(l){i&&i.d(l),l&&u(t)}}}function Ze(r){let e,t=r[0].attributes.definition+"",i;return{c(){e=g("h2"),i=H(t),this.h()},l(l){e=p(l,"H2",{class:!0});var s=E(e);i=N(s,t),s.forEach(u),this.h()},h(){n(e,"class","svelte-1askvef")},m(l,s){A(l,e,s),c(e,i)},p(l,s){s&1&&t!==(t=l[0].attributes.definition+"")&&te(i,t)},d(l){l&&u(e)}}}function Ye(r){let e,t,i;return t=new Wt({props:{date:r[0].attributes.date}}),{c(){e=g("p"),be(t.$$.fragment),this.h()},l(l){e=p(l,"P",{class:!0});var s=E(e);ke(t.$$.fragment,s),s.forEach(u),this.h()},h(){n(e,"class","svelte-1askvef")},m(l,s){A(l,e,s),Ee(t,e,null),i=!0},p(l,s){const a={};s&1&&(a.date=l[0].attributes.date),t.$set(a)},i(l){i||(x(t.$$.fragment,l),i=!0)},o(l){ne(t.$$.fragment,l),i=!1},d(l){l&&u(e),we(t)}}}function $e(r){let e,t,i,l=ge(r[0].lastModified)+"",s,a,o;return{c(){e=g("p"),t=g("a"),i=H("\u6700\u7D42\u66F4\u65B0\uFF1A"),s=H(l),this.h()},l(_){e=p(_,"P",{class:!0});var m=E(e);t=p(m,"A",{href:!0,title:!0,class:!0});var f=E(t);i=N(f,"\u6700\u7D42\u66F4\u65B0\uFF1A"),s=N(f,l),f.forEach(u),m.forEach(u),this.h()},h(){n(t,"href",a=r[0].historyURL),n(t,"title",o=r[0].lastModified),n(t,"class","svelte-1askvef"),n(e,"class","svelte-1askvef")},m(_,m){A(_,e,m),c(e,t),c(t,i),c(t,s)},p(_,m){m&1&&l!==(l=ge(_[0].lastModified)+"")&&te(s,l),m&1&&a!==(a=_[0].historyURL)&&n(t,"href",a),m&1&&o!==(o=_[0].lastModified)&&n(t,"title",o)},d(_){_&&u(e)}}}function xe(r){let e;function t(s,a){return s[1].type==="github"?$t:Yt}let i=t(r),l=i(r);return{c(){e=g("section"),l.c(),this.h()},l(s){e=p(s,"SECTION",{class:!0});var a=E(e);l.l(a),a.forEach(u),this.h()},h(){n(e,"class","url svelte-1askvef")},m(s,a){A(s,e,a),l.m(e,null)},p(s,a){i===(i=t(s))&&l?l.p(s,a):(l.d(1),l=i(s),l&&(l.c(),l.m(e,null)))},d(s){s&&u(e),l.d()}}}function Yt(r){let e,t=r[1].text+"",i,l;return{c(){e=g("a"),i=H(t),this.h()},l(s){e=p(s,"A",{href:!0,rel:!0,class:!0});var a=E(e);i=N(a,t),a.forEach(u),this.h()},h(){n(e,"href",l=r[1].url),n(e,"rel","external"),n(e,"class","svelte-1askvef")},m(s,a){A(s,e,a),c(e,i)},p(s,a){a&2&&t!==(t=s[1].text+"")&&te(i,t),a&2&&l!==(l=s[1].url)&&n(e,"href",l)},d(s){s&&u(e)}}}function $t(r){let e,t,i,l=r[1].text+"",s,a;return{c(){e=g("a"),t=g("img"),s=H(l),this.h()},l(o){e=p(o,"A",{href:!0,class:!0});var _=E(e);t=p(_,"IMG",{src:!0,alt:!0,rel:!0,class:!0,width:!0,height:!0}),s=N(_,l),_.forEach(u),this.h()},h(){de(t.src,i=Ft)||n(t,"src",i),n(t,"alt","GitHub"),n(t,"rel","external"),n(t,"class","link-icon"),n(t,"width","16"),n(t,"height","13"),n(e,"href",a=r[1].url),n(e,"class","svelte-1askvef")},m(o,_){A(o,e,_),c(e,t),c(e,s)},p(o,_){_&2&&l!==(l=o[1].text+"")&&te(s,l),_&2&&a!==(a=o[1].url)&&n(e,"href",a)},d(o){o&&u(e)}}}function et(r){let e,t,i;return t=new Nt({props:{tags:r[0].tags,large:!0}}),{c(){e=g("section"),be(t.$$.fragment),this.h()},l(l){e=p(l,"SECTION",{class:!0});var s=E(e);ke(t.$$.fragment,s),s.forEach(u),this.h()},h(){n(e,"class","svelte-1askvef")},m(l,s){A(l,e,s),Ee(t,e,null),i=!0},p(l,s){const a={};s&1&&(a.tags=l[0].tags),t.$set(a)},i(l){i||(x(t.$$.fragment,l),i=!0)},o(l){ne(t.$$.fragment,l),i=!1},d(l){l&&u(e),we(t)}}}function tt(r){let e,t,i,l,s,a,o;return{c(){e=g("section"),t=g("button"),i=g("img"),s=H(`
            \u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B`),this.h()},l(_){e=p(_,"SECTION",{class:!0});var m=E(e);t=p(m,"BUTTON",{class:!0});var f=E(t);i=p(f,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),s=N(f,`
            \u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B`),f.forEach(u),m.forEach(u),this.h()},h(){de(i.src,l=Jt)||n(i,"src",l),n(i,"alt","Presentation"),n(i,"class","link-icon"),n(i,"width","24"),n(i,"height","19.5"),n(t,"class","svelte-1askvef"),n(e,"class","toolbar svelte-1askvef")},m(_,m){A(_,e,m),c(e,t),c(t,i),c(t,s),a||(o=kt(t,"click",r[8]),a=!0)},p:ve,d(_){_&&u(e),a=!1,o()}}}function xt(r){let e,t;return{c(){e=g("section"),this.h()},l(i){e=p(i,"SECTION",{class:!0,style:!0}),E(e).forEach(u),this.h()},h(){var i;n(e,"class","header-image svelte-1askvef"),n(e,"style",t=(i=r[0].attributes)!=null&&i.header?`background-image: url(${r[0].attributes.header})`:""),ce(e,"noHeaderImage",r[4])},m(i,l){A(i,e,l),r[11](e)},p(i,l){var s;l&1&&t!==(t=(s=i[0].attributes)!=null&&s.header?`background-image: url(${i[0].attributes.header})`:"")&&n(e,"style",t),l&16&&ce(e,"noHeaderImage",i[4])},d(i){i&&u(e),r[11](null)}}}function lt(r){let e,t,i,l;return i=new Ct({props:{links:r[5]}}),{c(){e=g("section"),t=g("ul"),be(i.$$.fragment),this.h()},l(s){e=p(s,"SECTION",{class:!0});var a=E(e);t=p(a,"UL",{class:!0});var o=E(t);ke(i.$$.fragment,o),o.forEach(u),a.forEach(u),this.h()},h(){n(t,"class","links"),n(e,"class","links-section svelte-1askvef")},m(s,a){A(s,e,a),c(e,t),Ee(i,t,null),l=!0},p(s,a){const o={};a&32&&(o.links=s[5]),i.$set(o)},i(s){l||(x(i.$$.fragment,s),l=!0)},o(s){ne(i.$$.fragment,s),l=!1},d(s){s&&u(e),we(i)}}}function el(r){var Re,Pe,Ue;let e,t,i,l,s,a,o,_,m,f,b,d,v,k,C,M,y,O,D,L,$,le,X,Q,se,fe,I,q=r[0].body+"",G,V,ie,T,S,j;me.title=e=r[7];let re=r[0].nameSegmented,W=[];for(let h=0;h<re.length;h+=1)W[h]=Je(Fe(r,re,h));let z=((Re=r[0].attributes)==null?void 0:Re.definition)&&Ze(r),R=((Pe=r[0].attributes)==null?void 0:Pe.date)&&Ye(r),J=r[0].historyURL&&$e(r),Z=r[1]&&xe(r),B=r[0].tags.length>0&&et(r),Y=((Ue=r[0].attributes)==null?void 0:Ue.slides)&&tt(r);function ot(h){r[12](h)}let Oe={element:r[2],rootMargin:"-64px",$$slots:{default:[xt]},$$scope:{ctx:r}};r[3]!==void 0&&(Oe.intersecting=r[3]),Q=new Xt({props:Oe}),rt.push(()=>Et(Q,"intersecting",ot));let K=r[6]&&lt(r);return T=new Dt({}),{c(){t=g("meta"),i=g("meta"),l=g("meta"),a=g("meta"),_=P(),m=g("div"),b=P(),d=g("main"),v=g("article"),k=g("header"),C=g("h1");for(let h=0;h<W.length;h+=1)W[h].c();M=P(),z&&z.c(),y=P(),O=g("section"),R&&R.c(),D=P(),J&&J.c(),L=P(),Z&&Z.c(),$=P(),B&&B.c(),le=P(),Y&&Y.c(),X=P(),be(Q.$$.fragment),fe=P(),I=g("section"),V=P(),K&&K.c(),ie=P(),be(T.$$.fragment),this.h()},l(h){const w=wt('[data-svelte="svelte-a8kw7e"]',me.head);t=p(w,"META",{property:!0,content:!0}),i=p(w,"META",{property:!0,content:!0}),l=p(w,"META",{property:!0,content:!0}),a=p(w,"META",{property:!0,content:!0}),w.forEach(u),_=U(h),m=p(h,"DIV",{class:!0,style:!0}),E(m).forEach(u),b=U(h),d=p(h,"MAIN",{});var ee=E(d);v=p(ee,"ARTICLE",{"data-kind":!0,class:!0});var oe=E(v);k=p(oe,"HEADER",{class:!0});var F=E(k);C=p(F,"H1",{class:!0});var pe=E(C);for(let _e=0;_e<W.length;_e+=1)W[_e].l(pe);pe.forEach(u),M=U(F),z&&z.l(F),y=U(F),O=p(F,"SECTION",{class:!0});var he=E(O);R&&R.l(he),D=U(he),J&&J.l(he),he.forEach(u),L=U(F),Z&&Z.l(F),$=U(F),B&&B.l(F),le=U(F),Y&&Y.l(F),X=U(F),ke(Q.$$.fragment,F),F.forEach(u),fe=U(oe),I=p(oe,"SECTION",{class:!0,lang:!0});var Te=E(I);Te.forEach(u),V=U(oe),K&&K.l(oe),ie=U(oe),ke(T.$$.fragment,oe),oe.forEach(u),ee.forEach(u),this.h()},h(){var h,w,ee;n(t,"property","og:type"),n(t,"content","article"),n(i,"property","og:title"),n(i,"content",r[7]),n(l,"property","og:description"),n(l,"content",s=r[0].headline),n(a,"property","og:image"),n(a,"content",o=(h=r[0].attributes)!=null&&h.header?/^\.{0,2}\//.test(r[0].attributes.header)?"https://"+ye+"/"+r[0].attributes.header:r[0].attributes.header:"https://"+ye+"/images/favicon.svg"),n(m,"class","nav-background svelte-1askvef"),n(m,"style",f=(w=r[0].attributes)!=null&&w.header?`background-image: url(${r[0].attributes.header})`:""),ce(m,"isHeaderInView",r[3]),n(C,"class","svelte-1askvef"),n(O,"class","meta svelte-1askvef"),n(k,"class","viewer-header svelte-1askvef"),ce(k,"noHeaderImage",r[4]),n(I,"class","body svelte-1askvef"),n(I,"lang",G=(ee=r[0].attributes)==null?void 0:ee.lang),n(v,"data-kind",S=r[0].kind),n(v,"class","svelte-1askvef"),ce(v,"empty",r[0].isEmpty)},m(h,w){c(me.head,t),c(me.head,i),c(me.head,l),c(me.head,a),A(h,_,w),A(h,m,w),A(h,b,w),A(h,d,w),c(d,v),c(v,k),c(k,C);for(let ee=0;ee<W.length;ee+=1)W[ee].m(C,null);c(k,M),z&&z.m(k,null),c(k,y),c(k,O),R&&R.m(O,null),c(O,D),J&&J.m(O,null),c(k,L),Z&&Z.m(k,null),c(k,$),B&&B.m(k,null),c(k,le),Y&&Y.m(k,null),c(k,X),Ee(Q,k,null),c(v,fe),c(v,I),I.innerHTML=q,c(v,V),K&&K.m(v,null),c(v,ie),Ee(T,v,null),j=!0},p(h,[w]){var oe,F,pe,he,Te,_e;if((!j||w&128)&&e!==(e=h[7])&&(me.title=e),(!j||w&128)&&n(i,"content",h[7]),(!j||w&1&&s!==(s=h[0].headline))&&n(l,"content",s),(!j||w&1&&o!==(o=(oe=h[0].attributes)!=null&&oe.header?/^\.{0,2}\//.test(h[0].attributes.header)?"https://"+ye+"/"+h[0].attributes.header:h[0].attributes.header:"https://"+ye+"/images/favicon.svg"))&&n(a,"content",o),(!j||w&1&&f!==(f=(F=h[0].attributes)!=null&&F.header?`background-image: url(${h[0].attributes.header})`:""))&&n(m,"style",f),w&8&&ce(m,"isHeaderInView",h[3]),w&1){re=h[0].nameSegmented;let ae;for(ae=0;ae<re.length;ae+=1){const De=Fe(h,re,ae);W[ae]?W[ae].p(De,w):(W[ae]=Je(De),W[ae].c(),W[ae].m(C,null))}for(;ae<W.length;ae+=1)W[ae].d(1);W.length=re.length}(pe=h[0].attributes)!=null&&pe.definition?z?z.p(h,w):(z=Ze(h),z.c(),z.m(k,y)):z&&(z.d(1),z=null),(he=h[0].attributes)!=null&&he.date?R?(R.p(h,w),w&1&&x(R,1)):(R=Ye(h),R.c(),x(R,1),R.m(O,D)):R&&(He(),ne(R,1,1,()=>{R=null}),Se()),h[0].historyURL?J?J.p(h,w):(J=$e(h),J.c(),J.m(O,null)):J&&(J.d(1),J=null),h[1]?Z?Z.p(h,w):(Z=xe(h),Z.c(),Z.m(k,$)):Z&&(Z.d(1),Z=null),h[0].tags.length>0?B?(B.p(h,w),w&1&&x(B,1)):(B=et(h),B.c(),x(B,1),B.m(k,le)):B&&(He(),ne(B,1,1,()=>{B=null}),Se()),(Te=h[0].attributes)!=null&&Te.slides?Y?Y.p(h,w):(Y=tt(h),Y.c(),Y.m(k,X)):Y&&(Y.d(1),Y=null);const ee={};w&4&&(ee.element=h[2]),w&65557&&(ee.$$scope={dirty:w,ctx:h}),!se&&w&8&&(se=!0,ee.intersecting=h[3],Tt(()=>se=!1)),Q.$set(ee),w&16&&ce(k,"noHeaderImage",h[4]),(!j||w&1)&&q!==(q=h[0].body+"")&&(I.innerHTML=q),(!j||w&1&&G!==(G=(_e=h[0].attributes)==null?void 0:_e.lang))&&n(I,"lang",G),h[6]?K?(K.p(h,w),w&64&&x(K,1)):(K=lt(h),K.c(),x(K,1),K.m(v,ie)):K&&(He(),ne(K,1,1,()=>{K=null}),Se()),(!j||w&1&&S!==(S=h[0].kind))&&n(v,"data-kind",S),w&1&&ce(v,"empty",h[0].isEmpty)},i(h){j||(x(R),x(B),x(Q.$$.fragment,h),x(K),x(T.$$.fragment,h),j=!0)},o(h){ne(R),ne(B),ne(Q.$$.fragment,h),ne(K),ne(T.$$.fragment,h),j=!1},d(h){u(t),u(i),u(l),u(a),h&&u(_),h&&u(m),h&&u(b),h&&u(d),st(W,h),z&&z.d(),R&&R.d(),J&&J.d(),Z&&Z.d(),B&&B.d(),Y&&Y.d(),we(Q),K&&K.d(),we(T)}}}const fl=({props:r})=>{var e;return((e=r.entity.attributes)==null?void 0:e.header)&&typeof document!="undefined"&&(new Image().src=r.entity.attributes.header),{props:r}};function tl(r,e,t){let i,l,s,a,o,_,m;yt(r,Mt,M=>t(10,m=M));let{entity:f}=e,b,d=!0;it(()=>{zt()});async function v(){(await ht(()=>import("../chunks/slideshow-2309e86f.js"),["chunks/slideshow-2309e86f.js","assets/slideshow-46ae8450.css"])).default(f.body)}function k(M){rt[M?"unshift":"push"](()=>{b=M,t(2,b)})}function C(M){d=M,t(3,d)}return r.$$set=M=>{"entity"in M&&t(0,f=M.entity)},r.$$.update=()=>{var M,y,O,D;r.$$.dirty&1&&t(7,i=f.name+((M=f.attributes)!=null&&M.date?" - "+Ne(f.attributes.date):"")+" | "+St),r.$$.dirty&1025&&t(9,l=m.url.pathname.startsWith("/mono/")?f.name:"\u3053\u306E\u8A18\u4E8B"),r.$$.dirty&1&&t(6,s=Object.values(f.links).some(({entities:L})=>L.length>0)),r.$$.dirty&513&&t(5,a=[{id:"to",name:l+"\u304C\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u3082\u306E"},{id:"from",name:l+"\u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u3082\u306E"},{id:"kind",name:f.kind?"\u307B\u304B\u306E"+f.kind:""},...Object.entries(f.links).filter(([L])=>L.startsWith("one_hop_")).map(([L])=>({id:L,name:L.replace(/^one_hop_/,"")+"\u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u3082\u306E"}))].map(({id:L,name:$})=>Ge({name:$},f.links[L]))),r.$$.dirty&1&&t(4,o=((y=f.attributes)==null?void 0:y.header)===!1||f.kind!=="note"&&!((O=f.attributes)!=null&&O.header)),r.$$.dirty&1&&t(1,_=(L=>{if(!!L)return L.startsWith("https://github.com/")?{type:"github",url:L,text:L.split("/").slice(3,5).join("/")}:{type:null,url:L,text:L.replace(/^https?:\/\/(?:www\.)?/,"")}})((D=f.attributes)==null?void 0:D.url))},[f,_,b,d,o,a,s,i,v,l,m,k,C]}class cl extends Me{constructor(e){super(),Ae(this,e,tl,el,Le,{entity:0})}}export{cl as default,fl as load};
