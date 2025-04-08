import{R as r}from"./index-qyj2ZBCg.js";import{fY as f,j3 as b}from"./ZoomOutSm-DY0G4COk.js";import{L as h}from"./index-CfKxW7Xz.js";import{t}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";const k={sm:"w-9 h-5 after:w-4 after:h-4",md:"w-11 h-6 after:w-5 after:h-5"},w=({size:u,label:s,value:e,onChange:i,disabled:n})=>r.createElement("div",{className:t("flex items-center gap-4",n?"cursor-not-allowed":"cursor-pointer"),"data-testid":"toggle-input-container"},r.createElement("input",{"data-testid":"toggle-input",disabled:n,type:"checkbox",className:"peer sr-only",checked:e,onChange:()=>i(!e)}),r.createElement("div",{className:t("peer relative rounded-full border border-ui-outline after:absolute after:left-[0.0625rem] after:top-1/2 after:-translate-y-1/2  after:rounded-full after:transition-all after:content-['']","peer-checked:border-ui-inactive-primary peer-checked:after:translate-x-full peer-checked:after:border-ui-outline","peer-disabled:ui-inactive-background peer-disabled:pointer-events-none",k[u??"md"],n?"bg-ui-inactive-background after:bg-text-inactive peer-checked:bg-ui-inactive-primary":"bg-ui-background after:bg-text-primary peer-checked:bg-ui-primary"),onClick:()=>i(!e)},e?r.createElement(f,{className:t("absolute top-1/2 z-50 h-4 w-4 -translate-y-1/2 text-black",e?"right-[0.1875rem]":"left-[0.1875rem]")}):r.createElement(b,{className:t("absolute top-1/2 z-50 h-4 w-4 -translate-y-1/2 text-ui-warning",e?"right-[0.1875rem]":"left-[0.1875rem]")})),s&&r.createElement(h,{"data-testid":"toggle-input-label"},s)),T={title:"Primitives/Tailwind/ThemeToggle",component:w,parameters:{componentSubtitle:"ThemeToggle",design:{type:"figma",url:""}}},a={args:{label:"Light Mode",value:!1,onChange:()=>{},disabled:!1}},o={args:{label:"Dark Mode",value:!0,onChange:()=>{},disabled:!1}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Light Mode',
    value: false,
    onChange: () => {},
    disabled: false
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Dark Mode',
    value: true,
    onChange: () => {},
    disabled: false
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const L=["LightMode","DarkMode"];export{o as DarkMode,a as LightMode,L as __namedExportsOrder,T as default};
