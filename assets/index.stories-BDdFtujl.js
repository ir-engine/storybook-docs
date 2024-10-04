import{R as e}from"./index-CBqU2yxZ.js";import{I as d}from"./index-Dn0AHKmy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-vJCBmx79.js";import"./iconBase-vdkxwKJc.js";import"./index-CqRG3f1I.js";import"./tw-merge-Ds6tgvmq.js";const v=({options:a,onSelect:m,placeholder:s,className:c,value:i,onChange:u})=>e.createElement("div",{className:`relative w-full ${c}`},e.createElement(d,{value:i,placeholder:s,onChange:u}),a.length>0&&e.createElement("div",{className:"sticky left-0 z-[60] mt-2 w-full rounded border border-theme-primary bg-theme-surface-main"},e.createElement("ul",{className:"max-h-40 overflow-auto [&>li]:px-4 [&>li]:py-2"},a.map((l,p)=>e.createElement("li",{key:p,className:"cursor-pointer px-4 py-2 text-theme-secondary",onClick:()=>m(l.value)},l.label))))),C={title:"Primitives/Tailwind/Autocomplete",component:v,parameters:{componentSubtitle:"Autocomplete",jest:"Autocomplete.test.tsx",design:{type:"figma",url:""}}},t={args:{value:"a1",options:[{label:"A1",value:"a1"},{label:"B2",value:"b2"},{label:"C3",value:"c3"}],onSelect:()=>{},onChange:()=>{}}};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: 'a1',
    options: [{
      label: 'A1',
      value: 'a1'
    }, {
      label: 'B2',
      value: 'b2'
    }, {
      label: 'C3',
      value: 'c3'
    }],
    onSelect: () => {},
    onChange: () => {}
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,C as default};
