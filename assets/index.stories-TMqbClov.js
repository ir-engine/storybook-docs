import{R as e}from"./index-CBqU2yxZ.js";import{L as y}from"./index-CqRG3f1I.js";import{t as n}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";const T={sm:"w-8 h-5 after:w-4 after:h-4 after:top-[2px] after:start-[2px]",md:"w-11 h-6 after:w-5 after:h-5 after:top-[2px] after:start-[2px]",lg:"w-16 h-9 after:w-7 after:h-7 after:top-[4px] after:start-[5px]"},k=({containerClassName:i,className:d,labelClassName:u,size:b,label:s,value:t,onChange:o,disabled:h})=>{const x=n("peer relative cursor-pointer rounded-full bg-gray-200 after:absolute after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']","peer-checked:bg-blue-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:bg-blue-primary peer-focus:ring-4 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:bg-blue-primary","peer-disabled:pointer-events-none peer-disabled:opacity-50",d,T[b??"md"]),w=n("flex items-center gap-4",i);return e.createElement("div",{className:w},e.createElement("input",{disabled:h,type:"checkbox",className:"peer sr-only",checked:t,onChange:()=>o(!t)}),e.createElement("div",{className:x,onClick:()=>o(!t)}),s&&e.createElement(y,{className:u},s))},N={title:"Primitives/Tailwind/Toggle",component:k,parameters:{componentSubtitle:"Toggle",jest:"Toggle.test.tsx",design:{type:"figma",url:""}}},r={args:{label:"Toggle Off Example",value:!1,onChange:()=>{}}},a={args:{label:"Toggle On Example",value:!0,onChange:()=>{}}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Toggle Off Example',
    value: false,
    onChange: () => {}
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,g,m;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Toggle On Example',
    value: true,
    onChange: () => {}
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const S=["Off","On"];export{r as Off,a as On,S as __namedExportsOrder,N as default};
