function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function $(){return g("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function _(t){return w(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function A(t){R=t}function N(){if(!R)throw new Error("Function called outside component initialization");return R}const P=[],j=[],L=[],k=[],C=Promise.resolve();let I=!1;function O(t){L.push(t)}let T=!1;const U=new Set;function q(){if(!T){T=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];A(e),J(e.$$)}for(A(null),P.length=0;j.length;)j.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(P.length);for(;k.length;)k.pop()();I=!1,T=!1,U.clear()}}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const D=new Set;let B;function z(){B={r:0,c:[],p:B}}function K(){B.r||o(B.c),B=B.p}function M(t,e){t&&t.i&&(D.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),B.c.push((()=>{D.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function H(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function F(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),O((()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(O)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(P.push(t),I||(I=!0,C.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,a,i,l=[-1]){const u=R;A(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&Q(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&M(e.$$.fragment),W(e,n.target,n.anchor),q()}A(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={};function ot(e){let n,r;return{c(){n=h("script"),this.h()},l(t){const e=S('[data-svelte="svelte-a2kvt3"]',document.head);n=b(e,"SCRIPT",{async:!0,src:!0}),y(n).forEach(p),e.forEach(p),this.h()},h(){n.async=!0,n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+e[0])&&v(n,"src",r)},m(t,e){u(document.head,n)},p(t,[e]){1&e&&n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+t[0])&&v(n,"src",r)},i:t,o:t,d(t){p(n)}}}function st(t,e,n){let r,{stores:o}=e,{id:s}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",s,{send_page_view:!1}));const{page:c}=o();return a(t,c,(t=>n(3,r=t))),t.$$set=t=>{"stores"in t&&n(2,o=t.stores),"id"in t&&n(0,s=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",s,{page_path:r.path})},[s,c,o,r]}class ct extends tt{constructor(t){super(),Z(this,t,st,ot,c,{stores:2,id:0})}}function at(e){let n,r,o,s,c,a,i,l,d,$,x;return{c(){n=h("nav"),r=h("ul"),o=h("li"),s=h("a"),c=g("articles"),i=m(),l=h("li"),d=h("a"),$=g("about"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var a=y(r);o=b(a,"LI",{class:!0});var u=y(o);s=b(u,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var f=y(s);c=w(f,"articles"),f.forEach(p),u.forEach(p),i=_(a),l=b(a,"LI",{class:!0});var h=y(l);d=b(h,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var g=y(d);$=w(g,"about"),g.forEach(p),h.forEach(p),a.forEach(p),e.forEach(p),this.h()},h(){v(s,"rel","prefetch"),v(s,"aria-current",a=void 0===e[0]?"page":void 0),v(s,"href","."),v(s,"class","svelte-1vowuxu"),v(o,"class","svelte-1vowuxu"),v(d,"rel","prefetch"),v(d,"aria-current",x="about"===e[0]?"page":void 0),v(d,"href","about"),v(d,"class","svelte-1vowuxu"),v(l,"class","svelte-1vowuxu"),v(r,"class","svelte-1vowuxu"),v(n,"class","svelte-1vowuxu")},m(t,e){f(t,n,e),u(n,r),u(r,o),u(o,s),u(s,c),u(r,i),u(r,l),u(l,d),u(d,$)},p(t,[e]){1&e&&a!==(a=void 0===t[0]?"page":void 0)&&v(s,"aria-current",a),1&e&&x!==(x="about"===t[0]?"page":void 0)&&v(d,"aria-current",x)},i:t,o:t,d(t){t&&p(n)}}}function it(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class lt extends tt{constructor(t){super(),Z(this,t,it,at,c,{segment:0})}}const ut={dataRootDir:"../.src",dataGitHubRepo:"kissge/yo.eki.do",title:"葉月夜堂",googleAnalyticsTrackingID:"UA-45102742-1"};function ft(e){let n,r,o,s,c,a=function(e){let n,r;return n=new ct({props:{stores:le,id:ut.googleAnalyticsTrackingID}}),{c(){Y(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p:t,i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}();r=new lt({props:{segment:e[0]}});const u=e[2].default,d=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(u,e,e[1],null);return{c(){a&&a.c(),n=m(),Y(r.$$.fragment),o=m(),s=h("main"),d&&d.c(),this.h()},l(t){a&&a.l(t),n=_(t),F(r.$$.fragment,t),o=_(t),s=b(t,"MAIN",{class:!0});var e=y(s);d&&d.l(e),e.forEach(p),this.h()},h(){v(s,"class","svelte-gph4rb")},m(t,e){a&&a.m(t,e),f(t,n,e),W(r,t,e),f(t,o,e),f(t,s,e),d&&d.m(s,null),c=!0},p(t,[e]){a.p(t,e);const n={};1&e&&(n.segment=t[0]),r.$set(n),d&&d.p&&2&e&&l(d,u,t,t[1],e,null,null)},i(t){c||(M(a),M(r.$$.fragment,t),M(d,t),c=!0)},o(t){V(a),V(r.$$.fragment,t),V(d,t),c=!1},d(t){a&&a.d(t),t&&p(n),X(r,t),t&&p(o),t&&p(s),d&&d.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class dt extends tt{constructor(t){super(),Z(this,t,pt,ft,c,{segment:0})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=g(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=w(o,r),o.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function gt(e){let n,r,o,s,c,a,i,l,d,E=e[1].message+"";document.title=n=e[0];let R=e[2]&&e[1].stack&&ht(e);return{c(){r=m(),o=h("h1"),s=g(e[0]),c=m(),a=h("p"),i=g(E),l=m(),R&&R.c(),d=$(),this.h()},l(t){S('[data-svelte="svelte-1moakz"]',document.head).forEach(p),r=_(t),o=b(t,"H1",{class:!0});var n=y(o);s=w(n,e[0]),n.forEach(p),c=_(t),a=b(t,"P",{class:!0});var u=y(a);i=w(u,E),u.forEach(p),l=_(t),R&&R.l(t),d=$(),this.h()},h(){v(o,"class","svelte-63m5hz"),v(a,"class","svelte-63m5hz")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,c,e),f(t,a,e),u(a,i),f(t,l,e),R&&R.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&E!==(E=t[1].message+"")&&x(i,E),t[2]&&t[1].stack?R?R.p(t,e):(R=ht(t),R.c(),R.m(d.parentNode,d)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(c),t&&p(a),t&&p(l),R&&R.d(t),t&&p(d)}}}function mt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class $t extends tt{constructor(t){super(),Z(this,t,mt,gt,c,{status:0,error:1})}}function vt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=$()},l(t){n&&F(n.$$.fragment,t),r=$()},m(t,e){n&&W(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?H(s,[G(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){z();const t=n;V(t.$$.fragment,1,0,(()=>{X(t,1)})),K()}c?(n=new c(a()),Y(n.$$.fragment),M(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&X(n,t)}}}function yt(t){let e,n;return e=new $t({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function bt(t){let e,n,r,o;const s=[yt,vt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(z(),V(c[i],1,1,(()=>{c[i]=null})),K(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&p(r)}}}function wt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new dt({props:s}),{c(){Y(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?H(o,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,N().$$.after_update.push(u),f=rt,p=r,N().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class xt extends tt{constructor(t){super(),Z(this,t,_t,wt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/posts\.json$/,/^\/([^/]+?)\/([^/]+?)\.json$/],St=[{js:()=>Promise.all([import("./index.29f3344f.js"),__inject_styles(["client-9e2cfc0b.css","index-ca504894.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.ca0aef02.js"),__inject_styles(["client-9e2cfc0b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].4ded5bfc.js"),__inject_styles(["client-9e2cfc0b.css","[slug]-cf2c2a67.css"])]).then((function(t){return t[0]}))}],Rt=(At=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({type:At(t[1]),slug:At(t[2])})}]}]);var At;
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
function Nt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function Pt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let jt,Lt=1;const kt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ct={};let It,Ot;function Tt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Ut(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(It))return null;let e=t.pathname.slice(It.length);if(""===e&&(e="/"),!Et.some((t=>t.test(e))))for(let n=0;n<Rt.length;n+=1){const r=Rt[n],o=r.pattern.exec(e);if(o){const n=Tt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function qt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Pt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ut(o);if(s){Bt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),kt.pushState({id:jt},"",o.href)}}function Jt(){return{x:pageXOffset,y:pageYOffset}}function Dt(t){if(Ct[jt]=Jt(),t.state){const e=Ut(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else Lt=Lt+1,function(t){jt=t}(Lt),kt.replaceState({id:jt},"",location.href)}function Bt(t,e,n,r){return Nt(this,void 0,void 0,(function*(){const o=!!e;if(o)jt=e;else{const t=Jt();Ct[jt]=t,jt=e=++Lt,Ct[jt]=n?t:{x:0,y:0}}if(yield Ot(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ct[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ct[jt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function zt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Kt,Mt=null;function Vt(t){const e=Pt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ut(new URL(t,zt(document)));if(e)Mt&&t===Mt.href||(Mt={href:t,promise:ie(e)}),Mt.promise}(e.href)}function Ht(t){clearTimeout(Kt),Kt=setTimeout((()=>{Vt(t)}),20)}function Gt(t,e={noscroll:!1,replaceState:!1}){const n=Ut(new URL(t,zt(document)));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:jt},"",t),Bt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ft,Wt,Xt,Qt=!1,Zt=[],te="{}";const ee={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:nt(null),session:nt(Yt&&Yt.session)};let ne,re,oe;function se(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ce(t){return Nt(this,void 0,void 0,(function*(){Ft&&ee.preloading.set(!0);const e=function(t){return Mt&&Mt.href===t.href?Mt.promise:ie(t)}(t),n=Wt={},r=yield e,{redirect:o}=r;if(n===Wt)if(o)yield Gt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ae(n,e,se(e,t.page))}}))}function ae(t,e,n){return Nt(this,void 0,void 0,(function*(){ee.page.set(n),ee.preloading.set(!1),Ft?Ft.$set(e):(e.stores={page:{subscribe:ee.page.subscribe},preloading:{subscribe:ee.preloading.subscribe},session:ee.session},e.level0={props:yield Xt},e.notify=ee.page.notify,Ft=new xt({target:oe,props:e,hydrate:!0})),Zt=t,te=JSON.stringify(n.query),Qt=!0,re=!1}))}function ie(t){return Nt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Xt){const t=()=>({});Xt=Yt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},ne)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>Nt(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==te)return!0;const o=Zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!re&&!u&&Zt[a]&&Zt[a].part===e.i)return Zt[a];u=!1;const{default:d,preload:h}=yield St[e.i].js();let g;return g=Qt||!Yt.preloaded[a+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ne):{}:Yt.preloaded[a+1],s[`level${p}`]={component:d,props:g,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}ee.session.subscribe((t=>Nt(void 0,void 0,void 0,(function*(){if(ne=t,!Qt)return;re=!0;const e=Ut(new URL(location.href)),n=Wt={},{redirect:r,props:o,branch:s}=yield ie(e);n===Wt&&(r?yield Gt(r.location,{replaceState:!0}):yield ae(s,o,se(o,e.page)))}))));const le=()=>{return t=rt,N().$$.context.get(t);var t};var ue,fe,pe;ue={target:document.querySelector("#sapper")},fe=ue.target,oe=fe,pe=Yt.baseUrl,It=pe,Ot=ce,"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{kt.scrollRestoration="auto"})),addEventListener("load",(()=>{kt.scrollRestoration="manual"})),addEventListener("click",qt),addEventListener("popstate",Dt),addEventListener("touchstart",Vt),addEventListener("mousemove",Ht),Yt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Yt;Xt||(Xt=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:Xt},level1:{props:{status:s,error:c},component:$t},segments:o},i=Tt(n);ae([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;kt.replaceState({id:Lt},"",e);const n=Ut(new URL(location.href));if(n)return Bt(n,Lt,!0,t)}));export{tt as S,m as a,b,ut as c,y as d,h as e,w as f,p as g,_ as h,Z as i,v as j,E as k,f as l,u as m,x as n,d as o,t as p,S as q,c as s,g as t};

import __inject_styles from './inject_styles.5607aec6.js';