import{r as N,R as r}from"./index-CBqU2yxZ.js";import{c as h}from"./ActionFunctions-CxzuxLxN.js";import{a as A}from"./index-BzcdSbHf.js";import{u as C}from"./useClickOutside-D1hZxvBu.js";import{B}from"./index-CGhkeU3i.js";import{I as L}from"./index-Dn0AHKmy.js";import{L as M}from"./index-CqRG3f1I.js";import{u as R}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./iconBase-vdkxwKJc.js";import"./tw-merge-Ds6tgvmq.js";import"./index-vJCBmx79.js";import"./nonIterableRest-Y-KoC6Zs.js";const f=(t,l)=>l.includes(t),T=t=>/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(t),P=({emailList:t,error:l,label:m,disabled:c})=>{const{t:s}=R(),u=N.useRef(null),a=h({currentEmail:"",errorLabel:""}),i=()=>{const e=a.currentEmail.value.trim();e&&I(e)&&(t.merge([a.currentEmail.value]),a.currentEmail.set(""))},v=e=>{["Enter","Tab",","].includes(e.key)&&(e.preventDefault(),i())},x=e=>{a.merge({currentEmail:e.target.value,errorLabel:""})},w=e=>{t.set(t.value.filter(o=>o!==e))},y=e=>{e.preventDefault();const d=e.clipboardData.getData("text").match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);if(d){const D=d.filter(k=>!f(k,t.value));t.merge(D)}},I=e=>{a.errorLabel.set("");let o="";return f(e,t.value)&&(o=s("common:multiEmailInput.alreadyAdded",{email:e})),T(e)||(o=s("common:multiEmailInput.invalidEmail",{email:e})),o?(a.errorLabel.set(o),!1):!0};C(u,i);let p=a.errorLabel.value||l;return r.createElement(r.Fragment,null,m&&r.createElement(M,{className:"self-stretch"},m),t.length>0&&r.createElement("div",{className:"flex flex-wrap gap-2 rounded-lg border	border-theme-primary bg-theme-surfaceInput px-3.5 py-1.5"},t.value.map(e=>r.createElement("div",{className:"flex w-fit items-center justify-between gap-1 rounded bg-theme-surface-main px-2 py-1 text-black text-theme-primary",key:e},e,r.createElement(B,{disabled:c,className:"button bg-theme-surface-main p-1 text-[#6B7280] disabled:opacity-50 dark:text-[#A3A3A3] [&>*]:m-0",onClick:()=>w(e)},r.createElement(A,null))))),r.createElement(L,{className:"w-full",value:a.currentEmail.value,placeholder:s("common:multiEmailInput.placeholder"),onKeyDown:v,onChange:x,onPaste:y,disabled:c,ref:u}),p&&r.createElement("p",{className:"error text-theme-iconRed"},p))},S=()=>{const t=h([]);return r.createElement(P,{emailList:t})},Y={title:"Primitives/Tailwind/MultiEmailInput",component:S,parameters:{componentSubtitle:"MultiEmailInput",design:{type:"figma",url:""}}},n={args:{}};var E,g,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,Y as default};
