import{R as t}from"./index-DPzuYzxM.js";import{fZ as u,j4 as b}from"./ZoomOutSm-BKYTao-C.js";import{L as h}from"./index-Bs5DOUC-.js";import{t as r}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-C4iS2aBk.js";const w={sm:"w-9 h-5 after:w-4 after:h-4",md:"w-11 h-6 after:w-5 after:h-5"},k=({size:f,label:s,value:e,onChange:i,disabled:n})=>t.createElement("div",{className:r("flex w-full items-center justify-between gap-4",n?"cursor-not-allowed":"cursor-pointer"),"data-testid":"toggle-input-container"},s&&t.createElement(h,{"data-testid":"toggle-input-label",className:"text-base font-normal"},s),t.createElement("input",{"data-testid":"toggle-input",disabled:n,type:"checkbox",className:"peer sr-only",checked:!e,onChange:()=>i(!e)}),t.createElement("div",{className:r("peer relative rounded-full border border-ui-outline after:absolute after:left-[0.0625rem] after:top-1/2 after:-translate-y-1/2  after:rounded-full after:transition-all after:content-['']","peer-checked:border-ui-inactive-primary peer-checked:after:translate-x-full peer-checked:after:border-ui-outline","peer-disabled:ui-inactive-background peer-disabled:pointer-events-none",w[f??"md"],n?"bg-ui-inactive-background after:bg-text-inactive peer-checked:bg-ui-inactive-primary":"bg-ui-background after:bg-white peer-checked:bg-ui-primary"),onClick:()=>i(!e)},e?t.createElement(u,{className:r("absolute top-1/2 z-50 h-4 w-4 -translate-y-1/2 text-white",e?"right-[0.1875rem]":"left-[0.1875rem]")}):t.createElement(b,{className:r("absolute top-1/2 z-50 h-4 w-4 -translate-y-1/2 text-white",e?"right-[0.1875rem]":"left-[0.1875rem]")}))),T={title:"Primitives/Tailwind/ThemeToggle",component:k,parameters:{componentSubtitle:"ThemeToggle",design:{type:"figma",url:""}}},a={args:{label:"Light Mode",value:!1,onChange:()=>{},disabled:!1}},o={args:{label:"Dark Mode",value:!0,onChange:()=>{},disabled:!1}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
