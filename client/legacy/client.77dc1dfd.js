function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=h;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",m={};function g(){}function y(){}function b(){}var w={};w[a]=function(){return this};var $=Object.getPrototypeOf,x=$&&$($(O([])));x&&x!==r&&o.call(x,a)&&(w=x);var _=b.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(i,a,c,u){var f=l(e[i],e,a);if("throw"!==f.type){var s=f.arg,h=s.value;return h&&"object"===t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=_.constructor=b,b.constructor=y,y.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),f(_,u,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function p(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(y)}function $(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n){t.$$.on_destroy.push(function(t){if(null==t)return m;for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=t.subscribe.apply(t,n);return o.unsubscribe?function(){return o.unsubscribe()}:o}(e,n))}function E(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function S(e,n,r,o,i,a,c){var u=function(e,n,r,o){if(e[2]&&o){var i=e[2](o(r));if(void 0===n.dirty)return i;if("object"===t(i)){for(var a=[],c=Math.max(n.dirty.length,i.length),u=0;u<c;u+=1)a[u]=n.dirty[u]|i[u];return a}return n.dirty|i}return n.dirty}(n,o,i,a);if(u){var f=E(n,r,o,c);e.p(f,u)}}function k(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function A(){return P(" ")}function N(){return P("")}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,c=[];a<i.attributes.length;){var u=i.attributes[a++];n[u.name]||c.push(u.name)}for(var f=0;f<c.length;f++)i.removeAttribute(c[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):O(e)}function D(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return P(e)}function U(t){return D(t," ")}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e,n){t.classList[n?"add":"remove"](e)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function J(t){r=t}function K(){if(!r)throw new Error("Function called outside component initialization");return r}function z(t){K().$$.on_mount.push(t)}var B=[],M=[],V=[],Y=[],H=Promise.resolve(),W=!1;function X(t){V.push(t)}var Q=!1,Z=new Set;function tt(){if(!Q){Q=!0;do{for(var t=0;t<B.length;t+=1){var e=B[t];J(e),et(e.$$)}for(J(null),B.length=0;M.length;)M.pop()();for(var n=0;n<V.length;n+=1){var r=V[n];Z.has(r)||(Z.add(r),r())}V.length=0}while(B.length);for(;Y.length;)Y.pop()();W=!1,Q=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}var nt,rt=new Set;function ot(){nt={r:0,c:[],p:nt}}function it(){nt.r||w(nt.c),nt=nt.p}function at(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(rt.has(t))return;rt.add(t),nt.c.push((function(){rt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ut(t,e){for(var n={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],c=e[i];if(c){for(var u in a)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[i]=c}else for(var s in a)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ft(e){return"object"===t(e)&&null!==e?e:{}}function st(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function ht(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,c=r.after_update;o&&o.m(e,n),X((function(){var e=i.map(y).filter($);a?a.push.apply(a,p(e)):w(e),t.$$.on_mount=[]})),c.forEach(X)}function pt(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(B.push(t),W||(W=!0,H.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,n,o,i,a){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=r;J(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:i,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&i(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),l&&dt(t,e)),n})):[],s.update(),l=!0,w(s.before_update),s.fragment=!!o&&o(s.ctx),e.target){if(e.hydrate){var h=T(e.target);s.fragment&&s.fragment.l(h),h.forEach(L)}else s.fragment&&s.fragment.c();e.intro&&at(t.$$.fragment),ht(t,e.target,e.anchor),tt()}J(u)}var mt=function(){function t(){d(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){pt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&v(e.prototype,n),r&&v(e,r),t}(),gt=[];function yt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!gt.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),gt.push(a,t)}if(o){for(var c=0;c<gt.length;c+=2)gt[c][0](gt[c+1]);gt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[i,a];return r.push(c),1===r.length&&(e=n(o)||m),i(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var bt={};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function $t(t){var e,n;return{c:function(){e=O("script"),this.h()},l:function(t){var n=F('[data-svelte="svelte-a2kvt3"]',document.head);T(e=C(n,"SCRIPT",{async:!0,src:!0})).forEach(L),n.forEach(L),this.h()},h:function(){e.async=!0,e.src!==(n="https://www.googletagmanager.com/gtag/js?id="+t[0])&&I(e,"src",n)},m:function(t,n){k(document.head,e)},p:function(t,r){1&c(r,1)[0]&&e.src!==(n="https://www.googletagmanager.com/gtag/js?id="+t[0])&&I(e,"src",n)},i:m,o:m,d:function(t){L(e)}}}function xt(t,e,n){var r,o=e.stores,i=e.id;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",i,{send_page_view:!1}));var a=o().page;return _(t,a,(function(t){return n(3,r=t)})),t.$$set=function(t){"stores"in t&&n(2,o=t.stores),"id"in t&&n(0,i=t.id)},t.$$.update=function(){9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",i,{page_path:r.path})},[i,a,o,r]}var _t=function(t){s(n,mt);var e=wt(n);function n(t){var r;return d(this,n),vt(l(r=e.call(this)),t,xt,$t,x,{stores:2,id:0}),r}return n}();function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function St(t){var e,n,r,o,i,a,u,f,s,l,h;return{c:function(){e=O("nav"),n=O("ul"),r=O("li"),o=O("a"),i=P("articles"),u=A(),f=O("li"),s=O("a"),l=P("about"),this.h()},l:function(t){var a=T(e=C(t,"NAV",{class:!0})),c=T(n=C(a,"UL",{class:!0})),h=T(r=C(c,"LI",{class:!0})),p=T(o=C(h,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));i=D(p,"articles"),p.forEach(L),h.forEach(L),u=U(c);var d=T(f=C(c,"LI",{class:!0})),v=T(s=C(d,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));l=D(v,"about"),v.forEach(L),d.forEach(L),c.forEach(L),a.forEach(L),this.h()},h:function(){I(o,"rel","prefetch"),I(o,"aria-current",a=void 0===t[0]?"page":void 0),I(o,"href","."),I(o,"class","svelte-1vowuxu"),I(r,"class","svelte-1vowuxu"),I(s,"rel","prefetch"),I(s,"aria-current",h="about"===t[0]?"page":void 0),I(s,"href","about"),I(s,"class","svelte-1vowuxu"),I(f,"class","svelte-1vowuxu"),I(n,"class","svelte-1vowuxu"),I(e,"class","svelte-1vowuxu")},m:function(t,a){R(t,e,a),k(e,n),k(n,r),k(r,o),k(o,i),k(n,u),k(n,f),k(f,s),k(s,l)},p:function(t,e){var n=c(e,1)[0];1&n&&a!==(a=void 0===t[0]?"page":void 0)&&I(o,"aria-current",a),1&n&&h!==(h="about"===t[0]?"page":void 0)&&I(s,"aria-current",h)},i:m,o:m,d:function(t){t&&L(e)}}}function kt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var Rt=function(t){s(n,mt);var e=Et(n);function n(t){var r;return d(this,n),vt(l(r=e.call(this)),t,kt,St,x,{segment:0}),r}return n}();const Lt={dataRootDir:"../.src",dataGitHubRepo:"kissge/yo.eki.do",host:"https://yo.eki.do",title:"葉月夜堂",twitter:"p_km",googleAnalyticsTrackingID:"UA-45102742-1"};function jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Ot(t){var e,n,r,o,i,a,u,f=function(t){var e,n;return e=new _t({props:{stores:Te,id:Lt.googleAnalyticsTrackingID}}),{c:function(){st(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:m,i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){ct(e.$$.fragment,t),n=!1},d:function(t){pt(e,t)}}}(),s=function(t){var e,n,r,o,i;return{c:function(){e=O("link"),n=A(),r=O("link"),o=A(),i=O("link"),this.h()},l:function(t){e=C(t,"LINK",{href:!0,rel:!0}),n=U(t),r=C(t,"LINK",{rel:!0,href:!0}),o=U(t),i=C(t,"LINK",{rel:!0,href:!0}),this.h()},h:function(){I(e,"href","https://twitter.com/"+Lt.twitter),I(e,"rel","me"),I(r,"rel","webmention"),I(r,"href","https://webmention.io/"+Lt.host.split("//")[1]+"/webmention"),I(i,"rel","pingback"),I(i,"href","https://webmention.io/"+Lt.host.split("//")[1]+"/xmlrpc")},m:function(t,a){R(t,e,a),R(t,n,a),R(t,r,a),R(t,o,a),R(t,i,a)},p:m,d:function(t){t&&L(e),t&&L(n),t&&L(r),t&&L(o),t&&L(i)}}}();o=new Rt({props:{segment:t[0]}});var l=t[2].default,h=function(t,e,n,r){if(t){var o=E(t,e,n,r);return t[0](o)}}(l,t,t[1],null);return{c:function(){f&&f.c(),e=N(),s&&s.c(),n=N(),r=A(),st(o.$$.fragment),i=A(),a=O("main"),h&&h.c(),this.h()},l:function(t){var c=F('[data-svelte="svelte-119a9vg"]',document.head);f&&f.l(c),e=N(),s&&s.l(c),n=N(),c.forEach(L),r=U(t),lt(o.$$.fragment,t),i=U(t);var u=T(a=C(t,"MAIN",{class:!0}));h&&h.l(u),u.forEach(L),this.h()},h:function(){I(a,"class","svelte-gph4rb")},m:function(t,c){f&&f.m(document.head,null),k(document.head,e),s&&s.m(document.head,null),k(document.head,n),R(t,r,c),ht(o,t,c),R(t,i,c),R(t,a,c),h&&h.m(a,null),u=!0},p:function(t,e){var n=c(e,1)[0];f.p(t,n),s.p(t,n);var r={};1&n&&(r.segment=t[0]),o.$set(r),h&&h.p&&2&n&&S(h,l,t,t[1],n,null,null)},i:function(t){u||(at(f),at(o.$$.fragment,t),at(h,t),u=!0)},o:function(t){ct(f),ct(o.$$.fragment,t),ct(h,t),u=!1},d:function(t){f&&f.d(t),L(e),s&&s.d(t),L(n),t&&L(r),pt(o,t),t&&L(i),t&&L(a),h&&h.d(t)}}}function Pt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,i=e.$$scope,a=e.segment;return t.$$set=function(t){"segment"in t&&n(0,a=t.segment),"$$scope"in t&&n(1,i=t.$$scope)},[a,i,o]}var At=function(t){s(n,mt);var e=jt(n);function n(t){var r;return d(this,n),vt(l(r=e.call(this)),t,Pt,Ot,x,{segment:0}),r}return n}();function Nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function It(t){var e,n,r=t[1].stack+"";return{c:function(){e=O("pre"),n=P(r)},l:function(t){var o=T(e=C(t,"PRE",{}));n=D(o,r),o.forEach(L)},m:function(t,r){R(t,e,r),k(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&q(n,r)},d:function(t){t&&L(e)}}}function Tt(t){var e,n,r,o,i,a,u,f,s,l=t[1].message+"";document.title=e=t[0];var h=t[2]&&t[1].stack&&It(t);return{c:function(){n=A(),r=O("h1"),o=P(t[0]),i=A(),a=O("p"),u=P(l),f=A(),h&&h.c(),s=N(),this.h()},l:function(e){F('[data-svelte="svelte-1moakz"]',document.head).forEach(L),n=U(e);var c=T(r=C(e,"H1",{class:!0}));o=D(c,t[0]),c.forEach(L),i=U(e);var p=T(a=C(e,"P",{class:!0}));u=D(p,l),p.forEach(L),f=U(e),h&&h.l(e),s=N(),this.h()},h:function(){I(r,"class","svelte-63m5hz"),I(a,"class","svelte-63m5hz")},m:function(t,e){R(t,n,e),R(t,r,e),k(r,o),R(t,i,e),R(t,a,e),k(a,u),R(t,f,e),h&&h.m(t,e),R(t,s,e)},p:function(t,n){var r=c(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&q(o,t[0]),2&r&&l!==(l=t[1].message+"")&&q(u,l),t[2]&&t[1].stack?h?h.p(t,r):((h=It(t)).c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i:m,o:m,d:function(t){t&&L(n),t&&L(r),t&&L(i),t&&L(a),t&&L(f),h&&h.d(t),t&&L(s)}}}function Ct(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Dt=function(t){s(n,mt);var e=Nt(n);function n(t){var r;return d(this,n),vt(l(r=e.call(this)),t,Ct,Tt,x,{status:0,error:1}),r}return n}();function Ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function qt(t){var e,n,r,o=[t[4].props],i=t[4].component;function a(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&st(e.$$.fragment),n=N()},l:function(t){e&&lt(e.$$.fragment,t),n=N()},m:function(t,o){e&&ht(e,t,o),R(t,n,o),r=!0},p:function(t,r){var c=16&r?ut(o,[ft(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){ot();var u=e;ct(u.$$.fragment,1,0,(function(){pt(u,1)})),it()}i?(st((e=new i(a())).$$.fragment),at(e.$$.fragment,1),ht(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i:function(t){r||(e&&at(e.$$.fragment,t),r=!0)},o:function(t){e&&ct(e.$$.fragment,t),r=!1},d:function(t){t&&L(n),e&&pt(e,t)}}}function Gt(t){var e,n;return e=new Dt({props:{error:t[0],status:t[1]}}),{c:function(){st(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){ct(e.$$.fragment,t),n=!1},d:function(t){pt(e,t)}}}function Ft(t){var e,n,r,o,i=[Gt,qt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=i[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){a[e].m(t,n),R(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?a[e].p(t,o):(ot(),ct(a[u],1,1,(function(){a[u]=null})),it(),(n=a[e])?n.p(t,o):(n=a[e]=i[e](t)).c(),at(n,1),n.m(r.parentNode,r))},i:function(t){o||(at(n),o=!0)},o:function(t){ct(n),o=!1},d:function(t){a[e].d(t),t&&L(r)}}}function Jt(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Ft]},$$scope:{ctx:t}},i=0;i<r.length;i+=1)o=g(o,r[i]);return e=new At({props:o}),{c:function(){st(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,r){ht(e,t,r),n=!0},p:function(t,n){var o=c(n,1)[0],i=12&o?ut(r,[4&o&&{segment:t[2][0]},8&o&&ft(t[3].props)]):{};147&o&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){ct(e.$$.fragment,t),n=!1},d:function(t){pt(e,t)}}}function Kt(t,e,n){var r,o,i=e.stores,a=e.error,c=e.status,u=e.segments,f=e.level0,s=e.level1,l=void 0===s?null:s,h=e.notify;return function(t){K().$$.after_update.push(t)}(h),r=bt,o=i,K().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,a=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,h=t.notify)},[a,c,u,f,l,i,h]}var zt,Bt=function(t){s(n,mt);var e=Ut(n);function n(t){var r;return d(this,n),vt(l(r=e.call(this)),t,Kt,Jt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Mt=[/^\/posts\.json$/,/^\/([^/]+?)\/([^/]+?)\.json$/],Vt=[{js:function(){return Promise.all([import("./index.28f8e0c9.js"),__inject_styles(["client-9e2cfc0b.css","index-ca504894.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.f372818b.js"),__inject_styles(["client-9e2cfc0b.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].04d1efc7.js"),__inject_styles(["client-9e2cfc0b.css","[slug]-2cd54688.css"])]).then((function(t){return t[0]}))}}],Yt=(zt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/([^/]+?)\/?$/,parts:[null,{i:2,params:function(t){return{type:zt(t[1]),slug:zt(t[2])}}}]}]);
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
function Ht(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function c(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))}function Wt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Xt,Qt=1;var Zt,te,ee="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},ne={};function re(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],i=r[2],a=void 0===i?"":i;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(a):n[o]=a})),n}function oe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Zt))return null;var e=t.pathname.slice(Zt.length);if(""===e&&(e="/"),!Mt.some((function(t){return t.test(e)})))for(var n=0;n<Yt.length;n+=1){var r=Yt[n],o=r.pattern.exec(e);if(o){var i=re(t.search),a=r.parts[r.parts.length-1],c=a.params?a.params(o):{},u={host:location.host,path:e,query:i,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ie(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Wt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=oe(i);if(a)ue(a,null,n.hasAttribute("sapper:noscroll"),i.hash),e.preventDefault(),ee.pushState({id:Xt},"",i.href)}}}else location.hash||e.preventDefault()}}}function ae(){return{x:pageXOffset,y:pageYOffset}}function ce(t){if(ne[Xt]=ae(),t.state){var e=oe(new URL(location.href));e?ue(e,t.state.id):location.href=location.href}else(function(t){Xt=t})(Qt=Qt+1),ee.replaceState({id:Xt},"",location.href)}function ue(t,e,n,r){return Ht(this,void 0,void 0,o.mark((function i(){var a,c,u,f;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(a=!!e)?Xt=e:(c=ae(),ne[Xt]=c,Xt=e=++Qt,ne[Xt]=n?c:{x:0,y:0}),o.next=4,te(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=ne[e],r&&(f=document.getElementById(r.slice(1)))&&(u={x:0,y:f.getBoundingClientRect().top+scrollY}),ne[Xt]=u,a||f?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),i)})))}function fe(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var se,le=null;function he(t){return le&&le.href===t.href?le.promise:Pe(t)}function pe(t){var e=Wt(t.target);e&&"prefetch"===e.rel&&function(t){var e=oe(new URL(t,fe(document)));if(e)le&&t===le.href||(le={href:t,promise:Pe(e)}),le.promise}(e.href)}function de(t){clearTimeout(se),se=setTimeout((function(){pe(t)}),20)}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=oe(new URL(t,fe(document)));return n?(ee[e.replaceState?"replaceState":"pushState"]({id:Xt},"",t),ue(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var me,ge,ye,be,we,$e,xe="undefined"!=typeof __SAPPER__&&__SAPPER__,_e=!1,Ee=[],Se="{}",ke={page:function(t){var e=yt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:yt(null),session:yt(xe&&xe.session)};function Re(t,e){var n=t.error;return Object.assign({error:n},e)}function Le(t){return Ht(this,void 0,void 0,o.mark((function e(){var n,r,i,a,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me&&ke.preloading.set(!0),n=he(t),r=ge={},e.next=5,n;case 5:if(i=e.sent,a=i.redirect,r===ge){e.next=9;break}return e.abrupt("return");case 9:if(!a){e.next=14;break}return e.next=12,ve(a.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=i.props,u=i.branch,e.next=17,je(u,c,Re(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function je(t,e,n){return Ht(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ke.page.set(n),ke.preloading.set(!1),!me){r.next=6;break}me.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},r.next=9,ye;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ke.page.notify,me=new Bt({target:$e,props:e,hydrate:!0});case 13:Ee=t,Se=JSON.stringify(n.query),_e=!0,we=!1;case 17:case"end":return r.stop()}}),r)})))}function Oe(t,e,n,r){if(r!==Se)return!0;var o=Ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Pe(t){return Ht(this,void 0,void 0,o.mark((function e(){var n,r,i,a,c,u,f,s,l,h,p,d,v=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,i=r.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[i[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},ye||(f=function(){return{}},ye=xe.preloaded[0]||f.call(u,{host:r.host,path:r.path,query:r.query,params:{}},be)),l=1,e.prev=7,h=JSON.stringify(r.query),p=n.pattern.exec(r.path),d=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Ht(v,void 0,void 0,o.mark((function a(){var f,s,v,m,g,y;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=i[n],Oe(n,f,p,h)&&(d=!0),c.segments[l]=i[n+1],e){o.next=5;break}return o.abrupt("return",{segment:f});case 5:if(s=l++,we||d||!Ee[n]||Ee[n].part!==e.i){o.next=8;break}return o.abrupt("return",Ee[n]);case 8:return d=!1,o.next=11,Vt[e.i].js();case 11:if(v=o.sent,m=v.default,g=v.preload,!_e&&xe.preloaded[n+1]){o.next=25;break}if(!g){o.next=21;break}return o.next=18,g.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},be);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:y=o.t0,o.next=26;break;case 25:y=xe.preloaded[n+1];case 26:return o.abrupt("return",c["level".concat(s)]={component:m,props:y,segment:f,match:p,part:e.i});case 27:case"end":return o.stop()}}),a)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,s=[];case 21:return e.abrupt("return",{redirect:a,props:c,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}ke.session.subscribe((function(t){return Ht(void 0,void 0,void 0,o.mark((function e(){var n,r,i,a,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be=t,_e){e.next=3;break}return e.abrupt("return");case 3:return we=!0,n=oe(new URL(location.href)),r=ge={},e.next=8,Pe(n);case 8:if(i=e.sent,a=i.redirect,c=i.props,u=i.branch,r===ge){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,ve(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,je(u,c,Re(c,n.page));case 21:case"end":return e.stop()}}),e)})))}));var Ae,Ne,Ie,Te=function(){return t=bt,K().$$.context.get(t);var t};Ae={target:document.querySelector("#sapper")},Ne=Ae.target,$e=Ne,Ie=xe.baseUrl,Zt=Ie,te=Le,"scrollRestoration"in ee&&(ee.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ee.scrollRestoration="auto"})),addEventListener("load",(function(){ee.scrollRestoration="manual"})),addEventListener("click",ie),addEventListener("popstate",ce),addEventListener("touchstart",pe),addEventListener("mousemove",de),xe.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=xe.session,i=xe.preloaded,a=xe.status,c=xe.error;ye||(ye=i&&i[0]);var u={error:c,status:a,session:o,level0:{props:ye},level1:{props:{status:a,error:c},component:Dt},segments:i},f=re(r);je([],u,{host:e,path:n,query:f,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;ee.replaceState({id:Qt},"",n);var r=oe(new URL(location.href));if(r)return ue(r,Qt,!0,e)}));export{N as A,mt as S,s as _,u as a,h as b,d as c,l as d,Lt as e,O as f,A as g,C as h,vt as i,T as j,D as k,L as l,U as m,I as n,G as o,R as p,k as q,q as r,x as s,P as t,j as u,F as v,c as w,m as x,o as y,z};

import __inject_styles from './inject_styles.fe622066.js';