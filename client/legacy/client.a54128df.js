function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function g(){}function y(){}function b(){}var w={};w[i]=function(){return this};var $=Object.getPrototypeOf,x=$&&$($(O([])));x&&x!==r&&o.call(x,i)&&(w=x);var _=b.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var f=l(e[a],e,i);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(f.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=_.constructor=b,b.constructor=y,y.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),f(_,u,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),f=o.call(i,"finallyLoc");if(u&&f){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(y)}function $(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n){t.$$.on_destroy.push(function(t){if(null==t)return m;for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=t.subscribe.apply(t,n);return o.unsubscribe?function(){return o.unsubscribe()}:o}(e,n))}function E(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function S(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var f=E(n,r,o,c);e.p(f,u)}}function k(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function A(){return P(" ")}function N(){return P("")}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var f=0;f<c.length;f++)a.removeAttribute(c[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):O(e)}function D(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return P(e)}function U(t){return D(t," ")}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e,n){t.classList[n?"add":"remove"](e)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function J(t){r=t}function B(){if(!r)throw new Error("Function called outside component initialization");return r}var M=[],z=[],K=[],V=[],Y=Promise.resolve(),H=!1;function W(t){K.push(t)}var X=!1,Q=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<M.length;t+=1){var e=M[t];J(e),tt(e.$$)}for(J(null),M.length=0;z.length;)z.pop()();for(var n=0;n<K.length;n+=1){var r=K[n];Q.has(r)||(Q.add(r),r())}K.length=0}while(M.length);for(;V.length;)V.pop()();H=!1,X=!1,Q.clear()}}function tt(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}var et,nt=new Set;function rt(){et={r:0,c:[],p:et}}function ot(){et.r||w(et.c),et=et.p}function at(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function it(t,e,n,r){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((function(){nt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ct(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var f in c)o[f]||(n[f]=c[f],o[f]=1);t[a]=c}else for(var s in i)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ut(e){return"object"===t(e)&&null!==e?e:{}}function ft(t){t&&t.c()}function st(t,e){t&&t.l(e)}function lt(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),W((function(){var e=a.map(y).filter($);i?i.push.apply(i,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(W)}function pt(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(M.push(t),H||(H=!0,Y.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,n,o,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=r;J(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&a(s.ctx[e],s.ctx[e]=r)&&(!s.skip_bound&&s.bound[e]&&s.bound[e](r),l&&ht(t,e)),n})):[],s.update(),l=!0,w(s.before_update),s.fragment=!!o&&o(s.ctx),e.target){if(e.hydrate){var p=T(e.target);s.fragment&&s.fragment.l(p),p.forEach(L)}else s.fragment&&s.fragment.c();e.intro&&at(t.$$.fragment),lt(t,e.target,e.anchor),Z()}J(u)}var dt=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){pt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),mt=[];function gt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!mt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),mt.push(i,t)}if(o){for(var c=0;c<mt.length;c+=2)mt[c][0](mt[c+1]);mt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var yt={};function bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function wt(t){var e,n;return{c:function(){e=O("script"),this.h()},l:function(t){var n=F('[data-svelte="svelte-a2kvt3"]',document.head);T(e=C(n,"SCRIPT",{async:!0,src:!0})).forEach(L),n.forEach(L),this.h()},h:function(){e.async=!0,e.src!==(n="https://www.googletagmanager.com/gtag/js?id="+t[0])&&I(e,"src",n)},m:function(t,n){k(document.head,e)},p:function(t,r){1&c(r,1)[0]&&e.src!==(n="https://www.googletagmanager.com/gtag/js?id="+t[0])&&I(e,"src",n)},i:m,o:m,d:function(t){L(e)}}}function $t(t,e,n){var r,o=e.stores,a=e.id;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",a,{send_page_view:!1}));var i=o().page;return _(t,i,(function(t){return n(3,r=t)})),t.$$set=function(t){"stores"in t&&n(2,o=t.stores),"id"in t&&n(0,a=t.id)},t.$$.update=function(){9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",a,{page_path:r.path})},[a,i,o,r]}var xt=function(t){s(n,dt);var e=bt(n);function n(t){var r;return v(this,n),vt(l(r=e.call(this)),t,$t,wt,x,{stores:2,id:0}),r}return n}();function _t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Et(t){var e,n,r,o,a,i,u,f,s,l,p;return{c:function(){e=O("nav"),n=O("ul"),r=O("li"),o=O("a"),a=P("articles"),u=A(),f=O("li"),s=O("a"),l=P("about"),this.h()},l:function(t){var i=T(e=C(t,"NAV",{class:!0})),c=T(n=C(i,"UL",{class:!0})),p=T(r=C(c,"LI",{class:!0})),h=T(o=C(p,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));a=D(h,"articles"),h.forEach(L),p.forEach(L),u=U(c);var v=T(f=C(c,"LI",{class:!0})),d=T(s=C(v,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));l=D(d,"about"),d.forEach(L),v.forEach(L),c.forEach(L),i.forEach(L),this.h()},h:function(){I(o,"rel","prefetch"),I(o,"aria-current",i=void 0===t[0]?"page":void 0),I(o,"href","."),I(o,"class","svelte-1vowuxu"),I(r,"class","svelte-1vowuxu"),I(s,"rel","prefetch"),I(s,"aria-current",p="about"===t[0]?"page":void 0),I(s,"href","about"),I(s,"class","svelte-1vowuxu"),I(f,"class","svelte-1vowuxu"),I(n,"class","svelte-1vowuxu"),I(e,"class","svelte-1vowuxu")},m:function(t,i){R(t,e,i),k(e,n),k(n,r),k(r,o),k(o,a),k(n,u),k(n,f),k(f,s),k(s,l)},p:function(t,e){var n=c(e,1)[0];1&n&&i!==(i=void 0===t[0]?"page":void 0)&&I(o,"aria-current",i),1&n&&p!==(p="about"===t[0]?"page":void 0)&&I(s,"aria-current",p)},i:m,o:m,d:function(t){t&&L(e)}}}function St(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var kt=function(t){s(n,dt);var e=_t(n);function n(t){var r;return v(this,n),vt(l(r=e.call(this)),t,St,Et,x,{segment:0}),r}return n}();const Rt={dataRootDir:"../.src",dataGitHubRepo:"kissge/yo.eki.do",title:"葉月夜堂",googleAnalyticsTrackingID:"UA-45102742-1"};function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function jt(t){var e,n,r,o,a,i=function(t){var e,n;return e=new xt({props:{stores:Ie,id:Rt.googleAnalyticsTrackingID}}),{c:function(){ft(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){lt(e,t,r),n=!0},p:m,i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){it(e.$$.fragment,t),n=!1},d:function(t){pt(e,t)}}}();n=new kt({props:{segment:t[0]}});var u=t[2].default,f=function(t,e,n,r){if(t){var o=E(t,e,n,r);return t[0](o)}}(u,t,t[1],null);return{c:function(){i&&i.c(),e=A(),ft(n.$$.fragment),r=A(),o=O("main"),f&&f.c(),this.h()},l:function(t){i&&i.l(t),e=U(t),st(n.$$.fragment,t),r=U(t);var a=T(o=C(t,"MAIN",{class:!0}));f&&f.l(a),a.forEach(L),this.h()},h:function(){I(o,"class","svelte-gph4rb")},m:function(t,c){i&&i.m(t,c),R(t,e,c),lt(n,t,c),R(t,r,c),R(t,o,c),f&&f.m(o,null),a=!0},p:function(t,e){var r=c(e,1)[0];i.p(t,r);var o={};1&r&&(o.segment=t[0]),n.$set(o),f&&f.p&&2&r&&S(f,u,t,t[1],r,null,null)},i:function(t){a||(at(i),at(n.$$.fragment,t),at(f,t),a=!0)},o:function(t){it(i),it(n.$$.fragment,t),it(f,t),a=!1},d:function(t){i&&i.d(t),t&&L(e),pt(n,t),t&&L(r),t&&L(o),f&&f.d(t)}}}function Ot(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Pt=function(t){s(n,dt);var e=Lt(n);function n(t){var r;return v(this,n),vt(l(r=e.call(this)),t,Ot,jt,x,{segment:0}),r}return n}();function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Nt(t){var e,n,r=t[1].stack+"";return{c:function(){e=O("pre"),n=P(r)},l:function(t){var o=T(e=C(t,"PRE",{}));n=D(o,r),o.forEach(L)},m:function(t,r){R(t,e,r),k(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&q(n,r)},d:function(t){t&&L(e)}}}function It(t){var e,n,r,o,a,i,u,f,s,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Nt(t);return{c:function(){n=A(),r=O("h1"),o=P(t[0]),a=A(),i=O("p"),u=P(l),f=A(),p&&p.c(),s=N(),this.h()},l:function(e){F('[data-svelte="svelte-1moakz"]',document.head).forEach(L),n=U(e);var c=T(r=C(e,"H1",{class:!0}));o=D(c,t[0]),c.forEach(L),a=U(e);var h=T(i=C(e,"P",{class:!0}));u=D(h,l),h.forEach(L),f=U(e),p&&p.l(e),s=N(),this.h()},h:function(){I(r,"class","svelte-63m5hz"),I(i,"class","svelte-63m5hz")},m:function(t,e){R(t,n,e),R(t,r,e),k(r,o),R(t,a,e),R(t,i,e),k(i,u),R(t,f,e),p&&p.m(t,e),R(t,s,e)},p:function(t,n){var r=c(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&q(o,t[0]),2&r&&l!==(l=t[1].message+"")&&q(u,l),t[2]&&t[1].stack?p?p.p(t,r):((p=Nt(t)).c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&L(n),t&&L(r),t&&L(a),t&&L(i),t&&L(f),p&&p.d(t),t&&L(s)}}}function Tt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Ct=function(t){s(n,dt);var e=At(n);function n(t){var r;return v(this,n),vt(l(r=e.call(this)),t,Tt,It,x,{status:0,error:1}),r}return n}();function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Ut(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ft(e.$$.fragment),n=N()},l:function(t){e&&st(e.$$.fragment,t),n=N()},m:function(t,o){e&&lt(e,t,o),R(t,n,o),r=!0},p:function(t,r){var c=16&r?ct(o,[ut(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){rt();var u=e;it(u.$$.fragment,1,0,(function(){pt(u,1)})),ot()}a?(ft((e=new a(i())).$$.fragment),at(e.$$.fragment,1),lt(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&at(e.$$.fragment,t),r=!0)},o:function(t){e&&it(e.$$.fragment,t),r=!1},d:function(t){t&&L(n),e&&pt(e,t)}}}function qt(t){var e,n;return e=new Ct({props:{error:t[0],status:t[1]}}),{c:function(){ft(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){lt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){it(e.$$.fragment,t),n=!1},d:function(t){pt(e,t)}}}function Gt(t){var e,n,r,o,a=[qt,Ut],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){i[e].m(t,n),R(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(rt(),it(i[u],1,1,(function(){i[u]=null})),ot(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),at(n,1),n.m(r.parentNode,r))},i:function(t){o||(at(n),o=!0)},o:function(t){it(n),o=!1},d:function(t){i[e].d(t),t&&L(r)}}}function Ft(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Gt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=g(o,r[a]);return e=new Pt({props:o}),{c:function(){ft(e.$$.fragment)},l:function(t){st(e.$$.fragment,t)},m:function(t,r){lt(e,t,r),n=!0},p:function(t,n){var o=c(n,1)[0],a=12&o?ct(r,[4&o&&{segment:t[2][0]},8&o&&ut(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){it(e.$$.fragment,t),n=!1},d:function(t){pt(e,t)}}}function Jt(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,f=e.level0,s=e.level1,l=void 0===s?null:s,p=e.notify;return function(t){B().$$.after_update.push(t)}(p),r=yt,o=a,B().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,p=t.notify)},[i,c,u,f,l,a,p]}var Bt,Mt=function(t){s(n,dt);var e=Dt(n);function n(t){var r;return v(this,n),vt(l(r=e.call(this)),t,Jt,Ft,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),zt=[/^\/posts\.json$/,/^\/([^/]+?)\/([^/]+?)\.json$/],Kt=[{js:function(){return Promise.all([import("./index.066cfc6f.js"),__inject_styles(["client-9e2cfc0b.css","index-ca504894.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.e9feae54.js"),__inject_styles(["client-9e2cfc0b.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].149823bc.js"),__inject_styles(["client-9e2cfc0b.css","[slug]-cf2c2a67.css"])]).then((function(t){return t[0]}))}}],Vt=(Bt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/([^/]+?)\/?$/,parts:[null,{i:2,params:function(t){return{type:Bt(t[1]),slug:Bt(t[2])}}}]}]);
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
function Yt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Ht(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Wt,Xt=1;var Qt,Zt,te="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},ee={};function ne(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(i):n[o]=i})),n}function re(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Qt))return null;var e=t.pathname.slice(Qt.length);if(""===e&&(e="/"),!zt.some((function(t){return t.test(e)})))for(var n=0;n<Vt.length;n+=1){var r=Vt[n],o=r.pattern.exec(e);if(o){var a=ne(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function oe(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Ht(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=re(a);if(i)ce(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),te.pushState({id:Wt},"",a.href)}}}else location.hash||e.preventDefault()}}}function ae(){return{x:pageXOffset,y:pageYOffset}}function ie(t){if(ee[Wt]=ae(),t.state){var e=re(new URL(location.href));e?ce(e,t.state.id):location.href=location.href}else(function(t){Wt=t})(Xt=Xt+1),te.replaceState({id:Wt},"",location.href)}function ce(t,e,n,r){return Yt(this,void 0,void 0,o.mark((function a(){var i,c,u,f;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Wt=e:(c=ae(),ee[Wt]=c,Wt=e=++Xt,ee[Wt]=n?c:{x:0,y:0}),o.next=4,Zt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=ee[e],r&&(f=document.getElementById(r.slice(1)))&&(u={x:0,y:f.getBoundingClientRect().top+scrollY}),ee[Wt]=u,i||f?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function ue(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var fe,se=null;function le(t){return se&&se.href===t.href?se.promise:Oe(t)}function pe(t){var e=Ht(t.target);e&&"prefetch"===e.rel&&function(t){var e=re(new URL(t,ue(document)));if(e)se&&t===se.href||(se={href:t,promise:Oe(e)}),se.promise}(e.href)}function he(t){clearTimeout(fe),fe=setTimeout((function(){pe(t)}),20)}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=re(new URL(t,ue(document)));return n?(te[e.replaceState?"replaceState":"pushState"]({id:Wt},"",t),ce(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var de,me,ge,ye,be,we,$e="undefined"!=typeof __SAPPER__&&__SAPPER__,xe=!1,_e=[],Ee="{}",Se={page:function(t){var e=gt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:gt(null),session:gt($e&&$e.session)};function ke(t,e){var n=t.error;return Object.assign({error:n},e)}function Re(t){return Yt(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return de&&Se.preloading.set(!0),n=le(t),r=me={},e.next=5,n;case 5:if(a=e.sent,i=a.redirect,r===me){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ve(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Le(u,c,ke(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Le(t,e,n){return Yt(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Se.page.set(n),Se.preloading.set(!1),!de){r.next=6;break}de.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:Se.page.subscribe},preloading:{subscribe:Se.preloading.subscribe},session:Se.session},r.next=9,ge;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=Se.page.notify,de=new Mt({target:we,props:e,hydrate:!0});case 13:_e=t,Ee=JSON.stringify(n.query),xe=!0,be=!1;case 17:case"end":return r.stop()}}),r)})))}function je(t,e,n,r){if(r!==Ee)return!0;var o=_e[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Oe(t){return Yt(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u,f,s,l,p,h,v,d=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},ge||(f=function(){return{}},ge=$e.preloaded[0]||f.call(u,{host:r.host,path:r.path,query:r.query,params:{}},ye)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Yt(d,void 0,void 0,o.mark((function i(){var f,s,d,m,g,y;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=a[n],je(n,f,h,p)&&(v=!0),c.segments[l]=a[n+1],e){o.next=5;break}return o.abrupt("return",{segment:f});case 5:if(s=l++,be||v||!_e[n]||_e[n].part!==e.i){o.next=8;break}return o.abrupt("return",_e[n]);case 8:return v=!1,o.next=11,Kt[e.i].js();case 11:if(d=o.sent,m=d.default,g=d.preload,!xe&&$e.preloaded[n+1]){o.next=25;break}if(!g){o.next=21;break}return o.next=18,g.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},ye);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:y=o.t0,o.next=26;break;case 25:y=$e.preloaded[n+1];case 26:return o.abrupt("return",c["level".concat(s)]={component:m,props:y,segment:f,match:h,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:s=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,s=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:s});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}Se.session.subscribe((function(t){return Yt(void 0,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ye=t,xe){e.next=3;break}return e.abrupt("return");case 3:return be=!0,n=re(new URL(location.href)),r=me={},e.next=8,Oe(n);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,r===me){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ve(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Le(u,c,ke(c,n.page));case 21:case"end":return e.stop()}}),e)})))}));var Pe,Ae,Ne,Ie=function(){return t=yt,B().$$.context.get(t);var t};Pe={target:document.querySelector("#sapper")},Ae=Pe.target,we=Ae,Ne=$e.baseUrl,Qt=Ne,Zt=Re,"scrollRestoration"in te&&(te.scrollRestoration="manual"),addEventListener("beforeunload",(function(){te.scrollRestoration="auto"})),addEventListener("load",(function(){te.scrollRestoration="manual"})),addEventListener("click",oe),addEventListener("popstate",ie),addEventListener("touchstart",pe),addEventListener("mousemove",he),$e.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=$e.session,a=$e.preloaded,i=$e.status,c=$e.error;ge||(ge=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:ge},level1:{props:{status:i,error:c},component:Ct},segments:a},f=ne(r);Le([],u,{host:e,path:n,query:f,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;te.replaceState({id:Xt},"",n);var r=re(new URL(location.href));if(r)return ce(r,Xt,!0,e)}));export{dt as S,s as _,u as a,p as b,v as c,l as d,Rt as e,O as f,A as g,C as h,vt as i,T as j,D as k,L as l,U as m,I as n,G as o,R as p,k as q,q as r,x as s,P as t,j as u,F as v,c as w,m as x,o as y};

import __inject_styles from './inject_styles.fe622066.js';