function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-B_VyfN0X.js","./chunk-NUUEMKO5-BDlIKcJM.js","./iframe-BwaUBtZe.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./jsx-runtime-CKrituN3.js","./index-DfU-XIjm.js","./index-DaaykCGs.js","./index-D-8MO0q_.js","./extends-CF3RwP-h.js","./setPrototypeOf-NYsvoNVB.js","./inheritsLoose-CdQPfY07.js","./getPrototypeOf-BYVhAdwF.js","./index-DF3CPj03.js","./index-DrFu-skq.js","./react-18-Cju2K6b2.js","./client-DMi1NERe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-BwaUBtZe.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-B_VyfN0X.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
