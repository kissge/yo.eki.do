import{s as E,f as d,a as w,D as A,g as f,d as r,c as M,h as y,j as c,w as _,i as $}from"../chunks/scheduler.N9Zj5q6v.js";import{S as T,i as L,b,d as x,m as P,a as S,t as j,e as q}from"../chunks/index.Kfwwj60l.js";import{L as z}from"../chunks/time.svelte_svelte_type_style_lang.PZn1Hv4S.js";import"../chunks/paths.Z5E7SFjX.js";import{s as k,a as C}from"../chunks/config.owYZgmSe.js";function D(l){let e,s,a,i,p,m,o,h;return document.title="タイムライン | "+k,o=new z({props:{links:l[0].timeline.map(v)}}),{c(){e=d("meta"),s=d("meta"),a=d("meta"),i=w(),p=d("main"),m=d("ol"),b(o.$$.fragment),this.h()},l(t){const n=A("svelte-wtv54z",document.head);e=f(n,"META",{property:!0,content:!0}),s=f(n,"META",{property:!0,content:!0}),a=f(n,"META",{property:!0,content:!0}),n.forEach(r),i=M(t),p=f(t,"MAIN",{});var u=y(p);m=f(u,"OL",{class:!0});var g=y(m);x(o.$$.fragment,g),g.forEach(r),u.forEach(r),this.h()},h(){c(e,"property","og:type"),c(e,"content","website"),c(s,"property","og:title"),c(s,"content","タイムライン | "+k),c(a,"property","og:image"),c(a,"content","https://"+C+"/images/og.png"),m.reversed=!0,c(m,"class","links")},m(t,n){_(document.head,e),_(document.head,s),_(document.head,a),$(t,i,n),$(t,p,n),_(p,m),P(o,m,null),h=!0},p(t,[n]){const u={};n&1&&(u.links=t[0].timeline.map(v)),o.$set(u)},i(t){h||(S(o.$$.fragment,t),h=!0)},o(t){j(o.$$.fragment,t),h=!1},d(t){t&&(r(i),r(p)),r(e),r(s),r(a),q(o)}}}const v=({age:l,entities:e})=>({name:`${l}歳`,urlPath:"",entities:e});function H(l,e,s){let{data:a}=e;return l.$$set=i=>{"data"in i&&s(0,a=i.data)},[a]}class G extends T{constructor(e){super(),L(this,e,H,D,E,{data:0})}}export{G as component};