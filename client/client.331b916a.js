function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,i){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=a(e,n,r,i);t.p(o,c)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return w(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class N{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)f(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let k;function A(t){k=t}function L(){if(!k)throw new Error("Function called outside component initialization");return k}function R(t){L().$$.on_mount.push(t)}const P=[],j=[],I=[],C=[],T=Promise.resolve();let O=!1;function U(t){I.push(t)}let q=!1;const J=new Set;function K(){if(!q){q=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];A(e),D(e.$$)}for(A(null),P.length=0;j.length;)j.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];J.has(e)||(J.add(e),e())}I.length=0}while(P.length);for(;C.length;)C.pop()();O=!1,q=!1,J.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const B=new Set;let H;function M(){H={r:0,c:[],p:H}}function z(){H.r||o(H.c),H=H.p}function V(t,e){t&&t.i&&(B.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),H.c.push((()=>{B.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,r),U((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(U)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(P.push(t),O||(O=!0,T.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,i,c,a,l=[-1]){const u=k;A(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&tt(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),Q(e,n.target,n.anchor),K()}A(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={};function it(e){let n,r;return{c(){n=p("script"),this.h()},l(t){const e=S('[data-svelte="svelte-a2kvt3"]',document.head);n=b(e,"SCRIPT",{async:!0,src:!0}),y(n).forEach(h),e.forEach(h),this.h()},h(){n.async=!0,n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+e[0])&&v(n,"src",r)},m(t,e){u(document.head,n)},p(t,[e]){1&e&&n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+t[0])&&v(n,"src",r)},i:t,o:t,d(t){h(n)}}}function ct(t,e,n){let r,{stores:o}=e,{id:s}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",s,{send_page_view:!1}));const{page:i}=o();return c(t,i,(t=>n(3,r=t))),t.$$set=t=>{"stores"in t&&n(2,o=t.stores),"id"in t&&n(0,s=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",s,{page_path:r.path})},[s,i,o,r]}class at extends nt{constructor(t){super(),et(this,t,ct,it,i,{stores:2,id:0})}}function lt(e){let n,r,o,s,i,c,a,l,d,$,E;return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),i=m("articles"),a=g(),l=p("li"),d=p("a"),$=m("about"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var c=y(r);o=b(c,"LI",{class:!0});var u=y(o);s=b(u,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var f=y(s);i=w(f,"articles"),f.forEach(h),u.forEach(h),a=_(c),l=b(c,"LI",{class:!0});var p=y(l);d=b(p,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var m=y(d);$=w(m,"about"),m.forEach(h),p.forEach(h),c.forEach(h),e.forEach(h),this.h()},h(){v(s,"rel","prefetch"),v(s,"aria-current",c=void 0===e[0]?"page":void 0),v(s,"href","."),v(s,"class","svelte-1vowuxu"),v(o,"class","svelte-1vowuxu"),v(d,"rel","prefetch"),v(d,"aria-current",E="about"===e[0]?"page":void 0),v(d,"href","about"),v(d,"class","svelte-1vowuxu"),v(l,"class","svelte-1vowuxu"),v(r,"class","svelte-1vowuxu"),v(n,"class","svelte-1vowuxu")},m(t,e){f(t,n,e),u(n,r),u(r,o),u(o,s),u(s,i),u(r,a),u(r,l),u(l,d),u(d,$)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&v(s,"aria-current",c),1&e&&E!==(E="about"===t[0]?"page":void 0)&&v(d,"aria-current",E)},i:t,o:t,d(t){t&&h(n)}}}function ut(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ft extends nt{constructor(t){super(),et(this,t,ut,lt,i,{segment:0})}}const ht={dataRootDir:"../.src",dataGitHubRepo:"kissge/yo.eki.do",host:"https://yo.eki.do",title:"葉月夜堂",twitter:"p_km",googleAnalyticsTrackingID:"UA-45102742-1"};function dt(e){let n,r,o,s,i,c,d,m=function(e){let n,r;return n=new at({props:{stores:fe,id:ht.googleAnalyticsTrackingID}}),{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,e){Q(n,t,e),r=!0},p:t,i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}(),w=function(e){let n,r,o,s,i,c,a,l;return{c(){n=p("link"),o=g(),s=p("link"),c=g(),a=p("link"),this.h()},l(t){n=b(t,"LINK",{href:!0,rel:!0}),o=_(t),s=b(t,"LINK",{rel:!0,href:!0}),c=_(t),a=b(t,"LINK",{rel:!0,href:!0}),this.h()},h(){v(n,"href",r="https://twitter.com/"+ht.twitter),v(n,"rel","me"),v(s,"rel","webmention"),v(s,"href",i="https://webmention.io/"+ht.host.split("//")[1]+"/webmention"),v(a,"rel","pingback"),v(a,"href",l="https://webmention.io/"+ht.host.split("//")[1]+"/xmlrpc")},m(t,e){f(t,n,e),f(t,o,e),f(t,s,e),f(t,c,e),f(t,a,e)},p:t,d(t){t&&h(n),t&&h(o),t&&h(s),t&&h(c),t&&h(a)}}}();s=new ft({props:{segment:e[0]}});const E=e[2].default,x=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(E,e,e[1],null);return{c(){m&&m.c(),n=$(),w&&w.c(),r=$(),o=g(),W(s.$$.fragment),i=g(),c=p("main"),x&&x.c(),this.h()},l(t){const e=S('[data-svelte="svelte-119a9vg"]',document.head);m&&m.l(e),n=$(),w&&w.l(e),r=$(),e.forEach(h),o=_(t),X(s.$$.fragment,t),i=_(t),c=b(t,"MAIN",{class:!0});var a=y(c);x&&x.l(a),a.forEach(h),this.h()},h(){v(c,"class","svelte-gph4rb")},m(t,e){m&&m.m(document.head,null),u(document.head,n),w&&w.m(document.head,null),u(document.head,r),f(t,o,e),Q(s,t,e),f(t,i,e),f(t,c,e),x&&x.m(c,null),d=!0},p(t,[e]){m.p(t,e),w.p(t,e);const n={};1&e&&(n.segment=t[0]),s.$set(n),x&&x.p&&2&e&&l(x,E,t,t[1],e,null,null)},i(t){d||(V(m),V(s.$$.fragment,t),V(x,t),d=!0)},o(t){G(m),G(s.$$.fragment,t),G(x,t),d=!1},d(t){m&&m.d(t),h(n),w&&w.d(t),h(r),t&&h(o),Z(s,t),t&&h(i),t&&h(c),x&&x.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class mt extends nt{constructor(t){super(),et(this,t,pt,dt,i,{segment:0})}}function gt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=m(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=w(o,r),o.forEach(h)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&h(e)}}}function $t(e){let n,r,o,s,i,c,a,l,d,x=e[1].message+"";document.title=n=e[0];let N=e[2]&&e[1].stack&&gt(e);return{c(){r=g(),o=p("h1"),s=m(e[0]),i=g(),c=p("p"),a=m(x),l=g(),N&&N.c(),d=$(),this.h()},l(t){S('[data-svelte="svelte-1moakz"]',document.head).forEach(h),r=_(t),o=b(t,"H1",{class:!0});var n=y(o);s=w(n,e[0]),n.forEach(h),i=_(t),c=b(t,"P",{class:!0});var u=y(c);a=w(u,x),u.forEach(h),l=_(t),N&&N.l(t),d=$(),this.h()},h(){v(o,"class","svelte-63m5hz"),v(c,"class","svelte-63m5hz")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,i,e),f(t,c,e),u(c,a),f(t,l,e),N&&N.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&x!==(x=t[1].message+"")&&E(a,x),t[2]&&t[1].stack?N?N.p(t,e):(N=gt(t),N.c(),N.m(d.parentNode,d)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&h(r),t&&h(o),t&&h(i),t&&h(c),t&&h(l),N&&N.d(t),t&&h(d)}}}function vt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class yt extends nt{constructor(t){super(),et(this,t,vt,$t,i,{status:0,error:1})}}function bt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&W(n.$$.fragment),r=$()},l(t){n&&X(n.$$.fragment,t),r=$()},m(t,e){n&&Q(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[F(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){M();const t=n;G(t.$$.fragment,1,0,(()=>{Z(t,1)})),z()}i?(n=new i(c()),W(n.$$.fragment),V(n.$$.fragment,1),Q(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&V(n.$$.fragment,t),o=!0)},o(t){n&&G(n.$$.fragment,t),o=!1},d(t){t&&h(r),n&&Z(n,t)}}}function wt(t){let e,n;return e=new yt({props:{error:t[0],status:t[1]}}),{c(){W(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Q(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function _t(t){let e,n,r,o;const s=[wt,bt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){i[e].m(t,n),f(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(M(),G(i[a],1,1,(()=>{i[a]=null})),z(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){o||(V(n),o=!0)},o(t){G(n),o=!1},d(t){i[e].d(t),t&&h(r)}}}function Et(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new mt({props:s}),{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,e){Q(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function xt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:l}=e;var u,f,h;return u=l,L().$$.after_update.push(u),f=st,h=r,L().$$.context.set(f,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,i,c,a,r,l]}class St extends nt{constructor(t){super(),et(this,t,xt,Et,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Nt=[/^\/posts\.json$/,/^\/([^/]+?)\/([^/]+?)\.json$/],kt=[{js:()=>Promise.all([import("./index.7a36f9c6.js"),__inject_styles(["client-9e2cfc0b.css","index-ca504894.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.903444f6.js"),__inject_styles(["client-9e2cfc0b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].c9841b62.js"),__inject_styles(["client-9e2cfc0b.css","[slug]-eff9a433.css"])]).then((function(t){return t[0]}))}],At=(Lt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({type:Lt(t[1]),slug:Lt(t[2])})}]}]);var Lt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Rt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Pt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let jt,It=1;const Ct="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Tt={};let Ot,Ut;function qt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ot))return null;let e=t.pathname.slice(Ot.length);if(""===e&&(e="/"),!Nt.some((t=>t.test(e))))for(let n=0;n<At.length;n+=1){const r=At[n],o=r.pattern.exec(e);if(o){const n=qt(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function Kt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Pt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Ht(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Ct.pushState({id:jt},"",o.href)}}function Dt(){return{x:pageXOffset,y:pageYOffset}}function Bt(t){if(Tt[jt]=Dt(),t.state){const e=Jt(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else It=It+1,function(t){jt=t}(It),Ct.replaceState({id:jt},"",location.href)}function Ht(t,e,n,r){return Rt(this,void 0,void 0,(function*(){const o=!!e;if(o)jt=e;else{const t=Dt();Tt[jt]=t,jt=e=++It,Tt[jt]=n?t:{x:0,y:0}}if(yield Ut(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Tt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Tt[jt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Mt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let zt,Vt=null;function Gt(t){const e=Pt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Jt(new URL(t,Mt(document)));if(e)Vt&&t===Vt.href||(Vt={href:t,promise:ue(e)}),Vt.promise}(e.href)}function Yt(t){clearTimeout(zt),zt=setTimeout((()=>{Gt(t)}),20)}function Ft(t,e={noscroll:!1,replaceState:!1}){const n=Jt(new URL(t,Mt(document)));return n?(Ct[e.replaceState?"replaceState":"pushState"]({id:jt},"",t),Ht(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Wt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Xt,Qt,Zt,te=!1,ee=[],ne="{}";const re={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ot(null),session:ot(Wt&&Wt.session)};let oe,se,ie;function ce(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ae(t){return Rt(this,void 0,void 0,(function*(){Xt&&re.preloading.set(!0);const e=function(t){return Vt&&Vt.href===t.href?Vt.promise:ue(t)}(t),n=Qt={},r=yield e,{redirect:o}=r;if(n===Qt)if(o)yield Ft(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield le(n,e,ce(e,t.page))}}))}function le(t,e,n){return Rt(this,void 0,void 0,(function*(){re.page.set(n),re.preloading.set(!1),Xt?Xt.$set(e):(e.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},e.level0={props:yield Zt},e.notify=re.page.notify,Xt=new St({target:ie,props:e,hydrate:!0})),ee=t,ne=JSON.stringify(n.query),te=!0,se=!1}))}function ue(t){return Rt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Zt){const t=()=>({});Zt=Wt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},oe)}let c,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>Rt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==ne)return!0;const o=ee[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[a]=r[c+1],!e)return{segment:f};const h=a++;if(!se&&!u&&ee[c]&&ee[c].part===e.i)return ee[c];u=!1;const{default:d,preload:p}=yield kt[e.i].js();let m;return m=te||!Wt.preloaded[c+1]?p?yield p.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},oe):{}:Wt.preloaded[c+1],s[`level${h}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}re.session.subscribe((t=>Rt(void 0,void 0,void 0,(function*(){if(oe=t,!te)return;se=!0;const e=Jt(new URL(location.href)),n=Qt={},{redirect:r,props:o,branch:s}=yield ue(e);n===Qt&&(r?yield Ft(r.location,{replaceState:!0}):yield le(s,o,ce(o,e.page)))}))));const fe=()=>{return t=st,L().$$.context.get(t);var t};var he,de,pe;he={target:document.querySelector("#sapper")},de=he.target,ie=de,pe=Wt.baseUrl,Ot=pe,Ut=ae,"scrollRestoration"in Ct&&(Ct.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Ct.scrollRestoration="auto"})),addEventListener("load",(()=>{Ct.scrollRestoration="manual"})),addEventListener("click",Kt),addEventListener("popstate",Bt),addEventListener("touchstart",Gt),addEventListener("mousemove",Yt),Wt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Wt;Zt||(Zt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Zt},level1:{props:{status:s,error:i},component:yt},segments:o},a=qt(n);le([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Ct.replaceState({id:It},"",e);const n=Jt(new URL(location.href));if(n)return Ht(n,It,!0,t)}));export{N as H,nt as S,g as a,b,ht as c,y as d,p as e,w as f,h as g,_ as h,et as i,v as j,x as k,f as l,u as m,E as n,d as o,t as p,S as q,R as r,i as s,m as t,$ as u};

import __inject_styles from './inject_styles.5607aec6.js';