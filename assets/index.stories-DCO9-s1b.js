import{R as d}from"./index-CBqU2yxZ.js";import{u as D,I as g}from"./useDrop-DvNNwWYR.js";import{C as y}from"./index-OAa3bMdv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AssetType-LSGL9ANY.js";import"./index--lohHrd2.js";import"./index-Dn0AHKmy.js";import"./index-vJCBmx79.js";import"./iconBase-vdkxwKJc.js";import"./index-CqRG3f1I.js";import"./tw-merge-Ds6tgvmq.js";function o({value:a,onChange:p,...m}){function c(t,M){let r=t.value;typeof r>"u"||(Array.isArray(a)&&(r=r[0]),typeof r=="string"&&p(r))}const[{canDrop:u,isOver:l},f]=D({accept:[g.Material],drop:c,collect:t=>({canDrop:t.canDrop(),isOver:t.isOver()})});return d.createElement(y,{ref:f,onChange:p,canDrop:l&&u,value:""+a,...m})}o.defaultProps={};const I={},b={title:"Editor/Input/Material",component:o,parameters:{componentSubtitle:"MaterialInput",jest:"Material.test.tsx",design:{type:"figma",url:""}},argTypes:I},e={args:o.defaultProps};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: Component.defaultProps
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,b as default};