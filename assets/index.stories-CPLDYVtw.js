import{R as e}from"./index-qyj2ZBCg.js";import{L as T}from"./index-CfKxW7Xz.js";import{t as s}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";const E={sm:"w-8 h-5 after:w-4 after:h-4 after:top-[2px] after:start-[2px]",md:"w-11 h-6 after:w-5 after:h-5 after:top-[2px] after:start-[2px]",lg:"w-16 h-9 after:w-7 after:h-7 after:top-[4px] after:start-[5px]"},O=({containerClassName:m,className:d,labelClassName:u,size:b,label:o,value:r,onChange:n,disabled:x})=>{const h=s("peer relative cursor-pointer rounded-full bg-ui-background after:absolute after:rounded-full after:border after:border-ui-outline after:bg-text-primary after:transition-all after:content-['']","peer-checked:after:translate-x-full peer-checked:after:border-ui-outline  peer-focus:bg-ui-primary peer-focus:ring-4","peer-disabled:ui-inactive-background peer-disabled:pointer-events-none",d,E[b??"md"]),w=s("flex items-center gap-4",m);return e.createElement("div",{className:w,"data-testid":"toggle-input-container"},e.createElement("input",{"data-testid":"toggle-input",disabled:x,type:"checkbox",className:"peer sr-only",checked:r,onChange:()=>n(!r)}),e.createElement("div",{className:h,onClick:()=>n(!r)}),o&&e.createElement(T,{className:u,"data-testid":"toggle-input-label"},o))},y={title:"Primitives/Tailwind/Toggle",component:O,parameters:{componentSubtitle:"Toggle",jest:"Toggle.test.tsx",design:{type:"figma",url:""}}},t={args:{label:"Toggle Off Example",value:!1,onChange:()=>{}}},a={args:{label:"Toggle On Example",value:!0,onChange:()=>{}}};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Toggle Off Example',
    value: false,
    onChange: () => {}
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Toggle On Example',
    value: true,
    onChange: () => {}
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const S=["Off","On"];export{t as Off,a as On,S as __namedExportsOrder,y as default};
