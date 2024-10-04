import{r as d,R as a}from"./index-CBqU2yxZ.js";import{a as C,L as I,S as j,D}from"./three.module-D2RMN07C.js";import{A as g}from"./EditorServices-BJKHmurs.js";import{A as r}from"./AssetType-LSGL9ANY.js";import{F as G,I as L,V as P}from"./index-B6RCC45a.js";import{c as l}from"./ActionFunctions-CxzuxLxN.js";import{I as b}from"./useDrop-DvNNwWYR.js";import{B as x}from"./index-CGhkeU3i.js";import{I as V}from"./index-DZ02_pf3.js";import{a as k}from"./index-tYKeBweK.js";import{S as B}from"./index-CmJ8aZaS.js";import{V as F}from"./index-B0IQtwpp.js";function O({...t}){return a.createElement(G,{acceptFileTypes:[...L,...P],acceptDropItems:[...b.Images,...b.Videos],...t})}function _({value:t,onRelease:E,...U}){var h,v,y,T,w;const{preview:o,onModify:c}=U,i=typeof t=="string"&&[r.Image,r.Video].includes(g.getAssetClass(t)),s=l(t),e=s.value,A=s.value,N=o!==void 0||i,S=i?t:o,R=i?t:e!=null&&e.isTexture?((v=(h=e.source)==null?void 0:h.data)==null?void 0:v.src)??((y=e==null?void 0:e.userData)==null?void 0:y.src)??(o?"BLOB":""):A,m=l(typeof((T=e==null?void 0:e.offset)==null?void 0:T.clone)=="function"?e.offset.clone():new C(0,0)),p=l(typeof((w=e==null?void 0:e.repeat)==null?void 0:w.clone)=="function"?e.repeat.clone():new C(1,1)),f=l(e!=null&&e.colorSpace?e==null?void 0:e.colorSpace:new String(I)),u=l((e==null?void 0:e.channel)??0);return d.useEffect(()=>{e!=null&&e.isTexture&&!t?s.set(null):s.value!==t&&s.set(t)},[t]),d.useEffect(()=>{e!=null&&e.isTexture&&!e.isRenderTargetTexture&&(m.set(e.offset),p.set(e.repeat),f.set(e.colorSpace),u.set(e.channel))},[s]),a.createElement(k,null,a.createElement("div",{className:"flex w-full flex-col items-start justify-start gap-1 rounded bg-neutral-800 p-1"},N&&a.createElement("div",{className:"relative h-full max-h-[274px] w-full max-w-[305px]"},a.createElement("div",{className:"flex max-h-[274px] max-w-[305px] justify-center rounded bg-zinc-900"},a.createElement("div",{className:"h-auto w-auto rounded bg-neutral-900"},a.createElement(d.Fragment,null,(typeof o=="string"||typeof t=="string"&&g.getAssetClass(t)===r.Image)&&a.createElement("img",{src:S,className:"h-full w-full rounded object-contain",alt:"",crossOrigin:"anonymous"}),typeof t=="string"&&g.getAssetClass(t)===r.Video&&a.createElement("video",{src:S,className:"h-full w-full rounded object-contain"}))))),a.createElement("div",{className:"inline-flex items-end justify-center gap-2.5 self-stretch rounded bg-neutral-900 px-2 py-1"},a.createElement(O,{value:R,onRelease:E})),(e==null?void 0:e.isTexture)&&!e.isRenderTargetTexture&&a.createElement(a.Fragment,null,a.createElement(F,{value:m.value,onChange:n=>{m.set(n),e.offset.copy(n)},uniformScaling:!1}),a.createElement(F,{value:p.value,onChange:n=>{p.set(n),e.repeat.copy(n)},uniformScaling:!1})),(e==null?void 0:e.isTexture)&&a.createElement(a.Fragment,null,a.createElement(V,{name:"Encoding",label:"Encoding"},a.createElement(B,{value:f.value,options:[{label:"Linear",value:I},{label:"sRGB",value:j},{label:"displayP3",value:D}],onChange:n=>{f.set(n),e.colorSpace=n,e.needsUpdate=!0,console.log("DEBUG changed space",e.colorSpace)}})),a.createElement(V,{name:"UV Channel",label:"UV Channel"},a.createElement(B,{value:u.value,options:[{label:"UV",value:0},{label:"UV2",value:1},{label:"UV3",value:2},{label:"UV4",value:3}],onChange:n=>{u.set(n),e.channel=n,e.needsUpdate=!0,c==null||c()}}))),t&&a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(x,{onClick:()=>{E("")}},"Clear")))))}export{_ as T};
