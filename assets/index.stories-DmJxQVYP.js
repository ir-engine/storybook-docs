import{r as A,R as r}from"./index-qyj2ZBCg.js";import{c as b}from"./ActionFunctions-CGJ8cJXE.js";import{a as C}from"./index-Dnd7UoLY.js";import{u as N}from"./useClickOutside-S5C10oqi.js";import{B}from"./index-CKtEwL62.js";import{I as L}from"./index-eUpTpYJY.js";import{L as M}from"./index-DMspzKh0.js";import{u as R}from"./useTranslation-V3-FmiHw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./iconBase-Cq1uYpEy.js";import"./tw-merge-Ds6tgvmq.js";import"./ZoomOutSm-DAXDZ42X.js";import"./index-CDAcq9gd.js";import"./index-D-MhP2gL.js";import"./nonIterableRest--eTuPelP.js";import"./context-DaZIzD-H.js";const f=(t,l)=>l.includes(t),T=t=>/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(t),P=({emailList:t,error:l,label:m,disabled:i})=>{const{t:s}=R(),c=A.useRef(null),a=b({currentEmail:"",errorLabel:""}),u=()=>{const e=a.currentEmail.value.trim();e&&I(e)&&(t.merge([a.currentEmail.value]),a.currentEmail.set(""))},v=e=>{["Enter","Tab",","].includes(e.key)&&(e.preventDefault(),u())},x=e=>{a.merge({currentEmail:e.target.value,errorLabel:""})},y=e=>{t.set(t.value.filter(o=>o!==e))},w=e=>{e.preventDefault();const d=e.clipboardData.getData("text").match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);if(d){const D=d.filter(k=>!f(k,t.value));t.merge(D)}},I=e=>{a.errorLabel.set("");let o="";return f(e,t.value)&&(o=s("common:multiEmailInput.alreadyAdded",{email:e})),T(e)||(o=s("common:multiEmailInput.invalidEmail",{email:e})),o?(a.errorLabel.set(o),!1):!0};N(c,u);let p=a.errorLabel.value||l;return r.createElement(r.Fragment,null,m&&r.createElement(M,{className:"self-stretch"},m),t.length>0&&r.createElement("div",{className:"flex flex-wrap gap-2 rounded-lg border	border-theme-primary bg-theme-surfaceInput px-3.5 py-1.5"},t.value.map(e=>r.createElement("div",{className:"flex w-fit items-center justify-between gap-1 rounded bg-theme-surface-main px-2 py-1 text-black text-theme-primary",key:e},e,r.createElement(B,{disabled:i,className:"button bg-theme-surface-main p-1 text-[#6B7280] disabled:opacity-50 dark:text-[#A3A3A3] [&>*]:m-0",onClick:()=>y(e)},r.createElement(C,null))))),r.createElement(L,{fullWidth:!0,value:a.currentEmail.value,placeholder:s("common:multiEmailInput.placeholder"),onKeyDown:v,onChange:x,onPaste:w,disabled:i,ref:c}),p&&r.createElement("p",{className:"error text-theme-iconRed"},p))},S=()=>{const t=b([]);return r.createElement(P,{emailList:t})},ee={title:"Primitives/Tailwind/MultiEmailInput",component:S,parameters:{componentSubtitle:"MultiEmailInput",design:{type:"figma",url:""}}},n={args:{}};var E,g,h;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const te=["Default"];export{n as Default,te as __namedExportsOrder,ee as default};