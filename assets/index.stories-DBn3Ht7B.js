import{R as d}from"./index-qyj2ZBCg.js";import{u as D,I as g}from"./useDrop-D5Vgs9Yu.js";import{C as y}from"./index-UVsiwcak.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AssetType-UUzlsI5F.js";import"./index-CYTG6cBK.js";import"./index-eUpTpYJY.js";import"./ZoomOutSm-DAXDZ42X.js";import"./index-CDAcq9gd.js";import"./index-D-MhP2gL.js";import"./index-DaaykCGs.js";import"./tw-merge-Ds6tgvmq.js";function o({value:a,onChange:p,...m}){function c(t,M){let r=t.value;typeof r>"u"||(Array.isArray(a)&&(r=r[0]),typeof r=="string"&&p(r))}const[{canDrop:u,isOver:l},f]=D({accept:[g.Material],drop:c,collect:t=>({canDrop:t.canDrop(),isOver:t.isOver()})});return d.createElement(y,{ref:f,onChange:p,canDrop:l&&u,value:""+a,...m})}o.defaultProps={};const I={},j={title:"Editor/Input/Material",component:o,parameters:{componentSubtitle:"MaterialInput",jest:"Material.test.tsx",design:{type:"figma",url:""}},argTypes:I},e={args:o.defaultProps};var s,i,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: Component.defaultProps
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,j as default};