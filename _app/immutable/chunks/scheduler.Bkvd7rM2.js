var D=Object.defineProperty;var q=(t,e,n)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);function B(){}function O(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function it(){return Object.create(null)}function R(t){t.forEach(G)}function lt(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function rt(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function st(t){return Object.keys(t).length===0}function z(t,...e){if(t==null){for(const i of e)i(void 0);return B}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(z(e,n))}function ut(t,e,n,i){if(t){const l=L(t,e,n,i);return t[0](l)}}function L(t,e,n,i){return t[1]&&i?O(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(e.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function ft(t,e,n,i,l,s){if(l){const c=L(e,n,i,s);t.p(c,l)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let y=!1;function ht(){y=!0}function dt(){y=!1}function F(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:F(1,l,C=>e[n[C]].claim_order,u))-1;i[r]=n[a]+1;const A=a+1;n[A]=r,l=Math.max(A,l)}const s=[],c=[];let o=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<s.length&&c[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[r],a)}}function U(t,e){if(y){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function J(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function pt(){return v(" ")}function yt(){return v("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return t.dataset.svelteH}function Et(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,l=!1){S(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Q(t,e,n,i){return j(t,l=>l.nodeName===e,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(e))}function Tt(t,e,n){return Q(t,e,n,M)}function V(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Nt(t){return V(t," ")}function k(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function vt(t,e){const n=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);S(t);const l=t.splice(n,i-n+1);E(l[0]),E(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(e);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,s)}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ht(t,e){const n=[];let i=0;for(const l of e.childNodes)if(l.nodeType===8){const s=l.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(l)):s===`HEAD_${t}_START`&&(i+=1,n.push(l))}else i>0&&n.push(l);return n}class Y{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=M(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)W(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class b extends Y{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)J(this.t,this.n[i],n)}}function Lt(t,e){return new t(e)}let p;function g(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){w().$$.on_mount.push(t)}function St(t){w().$$.after_update.push(t)}function jt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=X(e,n,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],H=[];let h=[];const T=[],P=Promise.resolve();let N=!1;function Z(){N||(N=!0,P.then(tt))}function Pt(){return Z(),P}function $(t){h.push(t)}function Ct(t){T.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,g(e),et(e.$$)}}catch(e){throw d.length=0,_=0,e}for(g(null),d.length=0,_=0;H.length;)H.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(d.length);for(;T.length;)T.pop()();N=!1,x.clear(),g(t)}function et(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Dt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{kt as A,ft as B,_t as C,at as D,R as E,it as F,tt as G,lt as H,st as I,$ as J,Dt as K,p as L,g as M,G as N,d as O,Z as P,ht as Q,dt as R,rt as S,jt as T,b as U,vt as V,bt as W,Ct as X,pt as a,Et as b,Tt as c,V as d,M as e,E as f,Nt as g,U as h,J as i,wt as j,ot as k,mt as l,gt as m,B as n,Ht as o,xt as p,yt as q,St as r,ct as s,v as t,Mt as u,At as v,H as w,Lt as x,Pt as y,ut as z};
