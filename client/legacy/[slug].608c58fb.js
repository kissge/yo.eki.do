import{y as t,_ as e,a as n,b as a,c as r,i as c,d as s,S as o,e as i,s as l,f as u,t as h,h as f,j as d,k as p,l as v,n as m,p as g,q as y,r as E,g as x,v as D,m as R,w as S,x as w,u as I}from"./client.a96fd353.js";const T=t=>((t=new Date(t)).setTime(t.getTime()+324e5),t.toISOString().replace(/\..+/,"+09:00"));function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=n(t);if(e){var s=n(this).constructor;r=Reflect.construct(c,arguments,s)}else r=c.apply(this,arguments);return a(this,r)}}function b(t,e,n){var a=t.slice();return a[2]=e[n],a}function A(t){var e,n,a=T(t[0].date)+"";return{c:function(){e=u("time"),n=h(a),this.h()},l:function(t){e=f(t,"TIME",{class:!0});var r=d(e);n=p(r,a),r.forEach(v),this.h()},h:function(){m(e,"class","svelte-1xsha26")},m:function(t,a){g(t,e,a),y(e,n)},p:function(t,e){1&e&&a!==(a=T(t[0].date)+"")&&E(n,a)},d:function(t){t&&v(e)}}}function L(t){var e,n,a,r=t[2]+"";return{c:function(){e=u("div"),n=h("#"),a=h(r),this.h()},l:function(t){e=f(t,"DIV",{class:!0});var c=d(e);n=p(c,"#"),a=p(c,r),c.forEach(v),this.h()},h:function(){m(e,"class","tag svelte-1xsha26")},m:function(t,r){g(t,e,r),y(e,n),y(e,a)},p:function(t,e){1&e&&r!==(r=t[2]+"")&&E(a,r)},d:function(t){t&&v(e)}}}function k(t){var e,n;return{c:function(){e=u("div"),n=h("この記事は以前別のところにあったものを移してきたものです。完璧に移植できておらず、表示が崩れているかもしれません。"),this.h()},l:function(t){e=f(t,"DIV",{class:!0});var a=d(e);n=p(a,"この記事は以前別のところにあったものを移してきたものです。完璧に移植できておらず、表示が崩れているかもしれません。"),a.forEach(v),this.h()},h:function(){m(e,"class","callout svelte-1xsha26")},m:function(t,a){g(t,e,a),y(e,n)},d:function(t){t&&v(e)}}}function H(t){var e,n,a,r,c,s,o,l,T,M,H,O,U,V,j,P,$,_,q,z,G,N,B,C,F,J,K=t[0].title+"",Q=t[0].html+"";document.title=e=t[0].title+" - "+new Date(t[0].date).toISOString().slice(0,10)+" | "+i.title;for(var W=t[0].date&&A(t),X=t[0].tags||[],Y=[],Z=0;Z<X.length;Z+=1)Y[Z]=L(b(t,X,Z));var tt=t[0].from&&k();return{c:function(){n=u("meta"),a=u("meta"),c=u("meta"),o=u("meta"),l=u("meta"),M=x(),H=u("header"),O=u("div"),V=x(),j=u("h1"),P=h(K),$=x(),W&&W.c(),_=x(),q=u("div");for(var t=0;t<Y.length;t+=1)Y[t].c();z=x(),G=u("p"),N=u("a"),B=h("更新履歴"),C=x(),tt&&tt.c(),F=x(),J=u("div"),this.h()},l:function(t){var e=D('[data-svelte="svelte-14mnzgr"]',document.head);n=f(e,"META",{property:!0,content:!0}),a=f(e,"META",{property:!0,content:!0}),c=f(e,"META",{property:!0,content:!0}),o=f(e,"META",{property:!0,content:!0}),l=f(e,"META",{property:!0,content:!0}),e.forEach(v),M=R(t),H=f(t,"HEADER",{class:!0});var r=d(H);O=f(r,"DIV",{class:!0,style:!0}),d(O).forEach(v),V=R(r),j=f(r,"H1",{class:!0});var s=d(j);P=p(s,K),s.forEach(v),$=R(r),W&&W.l(r),_=R(r),q=f(r,"DIV",{class:!0});for(var i=d(q),u=0;u<Y.length;u+=1)Y[u].l(i);i.forEach(v),z=R(r),G=f(r,"P",{class:!0});var h=d(G);N=f(h,"A",{href:!0});var m=d(N);B=p(m,"更新履歴"),m.forEach(v),h.forEach(v),r.forEach(v),C=R(t),tt&&tt.l(t),F=R(t),J=f(t,"DIV",{class:!0}),d(J).forEach(v),this.h()},h:function(){m(n,"property","og:type"),m(n,"content","article"),m(a,"property","og:title"),m(a,"content",r=t[0].title+" - "+new Date(t[0].date).toISOString().slice(0,10)+" | "+i.title),m(c,"property","og:description"),m(c,"content",s=t[0].headline),m(o,"property","og:site_name"),m(o,"content",i.title),m(l,"property","og:image"),m(l,"content",T=t[0].header?/^\.{0,2}\//.test(t[0].header)?i.host+"/"+t[0].header:t[0].header:i.host+"/images/default.png"),m(O,"class","img-header svelte-1xsha26"),m(O,"style",U=t[0].header?"background-image: url(".concat(t[0].header,")"):""),m(j,"class","svelte-1xsha26"),m(q,"class","tags"),m(N,"href",t[1]),m(G,"class","history svelte-1xsha26"),m(H,"class","svelte-1xsha26"),m(J,"class","content svelte-1xsha26")},m:function(t,e){y(document.head,n),y(document.head,a),y(document.head,c),y(document.head,o),y(document.head,l),g(t,M,e),g(t,H,e),y(H,O),y(H,V),y(H,j),y(j,P),y(H,$),W&&W.m(H,null),y(H,_),y(H,q);for(var r=0;r<Y.length;r+=1)Y[r].m(q,null);y(H,z),y(H,G),y(G,N),y(N,B),g(t,C,e),tt&&tt.m(t,e),g(t,F,e),g(t,J,e),J.innerHTML=Q},p:function(t,n){var o=S(n,1)[0];if(1&o&&e!==(e=t[0].title+" - "+new Date(t[0].date).toISOString().slice(0,10)+" | "+i.title)&&(document.title=e),1&o&&r!==(r=t[0].title+" - "+new Date(t[0].date).toISOString().slice(0,10)+" | "+i.title)&&m(a,"content",r),1&o&&s!==(s=t[0].headline)&&m(c,"content",s),1&o&&T!==(T=t[0].header?/^\.{0,2}\//.test(t[0].header)?i.host+"/"+t[0].header:t[0].header:i.host+"/images/default.png")&&m(l,"content",T),1&o&&U!==(U=t[0].header?"background-image: url(".concat(t[0].header,")"):"")&&m(O,"style",U),1&o&&K!==(K=t[0].title+"")&&E(P,K),t[0].date?W?W.p(t,o):((W=A(t)).c(),W.m(H,_)):W&&(W.d(1),W=null),1&o){var u;for(X=t[0].tags||[],u=0;u<X.length;u+=1){var h=b(t,X,u);Y[u]?Y[u].p(h,o):(Y[u]=L(h),Y[u].c(),Y[u].m(q,null))}for(;u<Y.length;u+=1)Y[u].d(1);Y.length=X.length}2&o&&m(N,"href",t[1]),t[0].from?tt||((tt=k()).c(),tt.m(F.parentNode,F)):tt&&(tt.d(1),tt=null),1&o&&Q!==(Q=t[0].html+"")&&(J.innerHTML=Q)},i:w,o:w,d:function(t){v(n),v(a),v(c),v(o),v(l),t&&v(M),t&&v(H),W&&W.d(),I(Y,t),t&&v(C),tt&&tt.d(t),t&&v(F),t&&v(J)}}}var O=function(t,e,n,a){return new(n||(n=Promise))((function(r,c){function s(t){try{i(a.next(t))}catch(t){c(t)}}function o(t){try{i(a.throw(t))}catch(t){c(t)}}function i(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}i((a=a.apply(t,e||[])).next())}))};function U(e){var n=e.params;return O(this,void 0,void 0,t.mark((function e(){var a,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("".concat(n.type,"/").concat(n.slug,".json"));case 2:return a=t.sent,t.next=5,a.json();case 5:if(r=t.sent,200!==a.status){t.next=10;break}return t.abrupt("return",{post:r,historyURL:"https://github.com/".concat(i.dataGitHubRepo,"/commits/master/").concat(n.type,"/").concat(n.slug,".md")});case 10:this.error(a.status,r.message);case 11:case"end":return t.stop()}}),e,this)})))}function V(t,e,n){var a=e.post,r=e.historyURL;return t.$$set=function(t){"post"in t&&n(0,a=t.post),"historyURL"in t&&n(1,r=t.historyURL)},[a,r]}var j=function(t){e(a,o);var n=M(a);function a(t){var e;return r(this,a),e=n.call(this),c(s(e),t,V,H,l,{post:0,historyURL:1}),e}return a}();export default j;export{U as preload};
