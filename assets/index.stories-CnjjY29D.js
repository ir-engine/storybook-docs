import{R as e}from"./index-DPzuYzxM.js";import{L as f}from"./index-Bs5DOUC-.js";import{t as l}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-C4iS2aBk.js";const b={sm:"w-9 h-5 after:w-4 after:h-4",md:"w-11 h-6 after:w-5 after:h-5"},h=({size:u,label:o,value:t,onChange:s,disabled:n})=>e.createElement("div",{className:l("flex items-center gap-4",n?"cursor-not-allowed":"cursor-pointer"),"data-testid":"toggle-input-container"},e.createElement("input",{"data-testid":"toggle-input",disabled:n,type:"checkbox",className:"peer sr-only",checked:t,onChange:()=>s(!t)}),e.createElement("div",{className:l("peer relative rounded-full border border-ui-outline after:absolute after:left-[0.0625rem] after:top-1/2 after:-translate-y-1/2  after:rounded-full after:transition-all after:content-['']","peer-checked:border-ui-inactive-primary peer-checked:after:translate-x-full peer-checked:after:border-ui-outline","peer-disabled:ui-inactive-background after:bg-white peer-disabled:pointer-events-none",b[u??"md"],n?"bg-ui-inactive-background peer-checked:bg-ui-inactive-primary":"bg-ui-background peer-checked:bg-ui-primary"),onClick:()=>s(!t)}),o&&e.createElement(f,{"data-testid":"toggle-input-label"},o)),O={title:"Primitives/Tailwind/Toggle",component:h,parameters:{componentSubtitle:"Toggle",jest:"Toggle.test.tsx",design:{type:"figma",url:""}}},a={args:{label:"Toggle Off Example",value:!1,onChange:()=>{},disabled:!1}},r={args:{label:"Toggle On Example",value:!0,onChange:()=>{},disabled:!1}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Toggle Off Example',
    value: false,
    onChange: () => {},
    disabled: false
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,p,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Toggle On Example',
    value: true,
    onChange: () => {},
    disabled: false
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const T=["Off","On"];export{a as Off,r as On,T as __namedExportsOrder,O as default};
