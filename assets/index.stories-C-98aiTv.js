import{R as r}from"./index-CBqU2yxZ.js";import{D as g,H as D}from"./DndProvider-BtZxGWE_.js";import{u as N,I as y}from"./useDrop-DvNNwWYR.js";import{t as b}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index--lohHrd2.js";import"./jsx-runtime-CKrituN3.js";import"./AssetType-LSGL9ANY.js";const x=({className:s,children:i,externalChildren:p,acceptedDropTypes:m,onDropEvent:n,...t})=>{const d=b("bg-secondary flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4",s),[w,f]=N(()=>({accept:y.File,multiple:!1,canDrop:()=>!!t.acceptInput,drop(e){if(e.files.length!==1)return;const u=e.files[0].name.split(".").pop();m.includes(u)&&n(e.files)},collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})}),[t]);return r.createElement("div",{className:d,...t,ref:f},r.createElement("label",{className:"flex h-full w-full cursor-pointer items-center justify-center"},i,t.acceptInput&&r.createElement("input",{onChange:e=>{e.preventDefault(),e.target.files&&n(Array.from(e.target.files))},type:"file",className:"hidden"})),p)},h=s=>r.createElement(g,{backend:D},r.createElement(x,{...s})),E={},H={title:"Primitives/Tailwind/DragNDrop",component:h,parameters:{componentSubtitle:"DragNDrop",design:{type:"figma",url:""}},argTypes:E},a={args:{className:""}};var o,c,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: ''
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,H as default};
