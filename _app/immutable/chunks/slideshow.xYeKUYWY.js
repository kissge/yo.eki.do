import{_ as n}from"./preload-helper.0HuHagjb.js";function c(l){n(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const r=document.createElement("div");r.classList.add("slideshow-wrapper"),l.split(/(<h1(?:>| [^>]*>)|<hr\s*\/?>)/).flatMap(function(e,t,s){if(t===0&&e.trim())return{html:e};if(t%2===0)return[];const a=s[t+1],o=a.match(/<!--[\s-]*(.+?)[\s-]*-->/);return{html:e+a,classList:o?.[1]}}).forEach(({html:e,classList:t})=>{const s=document.createElement("div");t&&(s.className=t),s.classList.add("slideshow-page-wrapper");const a=document.createElement("div");a.classList.add("slideshow-page"),a.innerHTML=i(e),s.appendChild(a),r.appendChild(s)}),document.body.appendChild(r),r.querySelectorAll("figure").forEach(e=>{e.addEventListener("click",()=>e.classList.toggle("zoom"))})}function i(l){return l.split(/(<[^>]+>)/).map((r,e)=>e%2===1?r:r.replace(/[（(].+?[)）]/g,t=>'<small class="paren">'+t+"</small>")).join("")}export{c as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../assets/slideshow.JHXP0zKf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}