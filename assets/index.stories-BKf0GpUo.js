import{R as r}from"./index-qyj2ZBCg.js";import{G as k}from"./iconBase-DbqO1Qqb.js";import{B as S}from"./index-DUiiS1cx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tw-merge-Ds6tgvmq.js";function d(e){return k({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(e)}const w=["xs","sm","l","xl"],I={disabled:{control:"boolean"},startIcon:{control:"boolean",name:"Start Icon"},endIcon:{control:"boolean",name:"End Icon"},variant:{table:{disable:!0}}},N={title:"Primitives/Tailwind/Button",component:S,parameters:{componentSubtitle:"Button",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2035-16950"}},argTypes:I},n=e=>r.createElement("div",{className:"flex items-center gap-3"},w.map(i=>r.createElement("div",{className:"flex grow flex-col items-center"},r.createElement("span",{className:"mb-2 text-sm text-blue-400"},i),r.createElement(S,{key:i,size:i,...e},e.startIcon&&r.createElement(d,null),e.children,e.endIcon&&r.createElement(d,null))))),a={name:"Primary",args:{children:"Label",variant:"primary"},render:n},t={args:{children:"Label",variant:"secondary"},render:n},o={name:"Tertiary",args:{children:"Label",variant:"tertiary"},render:n},s={args:{children:"Label",variant:"green"},render:n},c={args:{children:"Label",variant:"red"},render:n};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    children: 'Label',
    variant: 'primary'
  },
  render: ButtonRenderer
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'secondary'
  },
  render: ButtonRenderer
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Tertiary',
  args: {
    children: 'Label',
    variant: 'tertiary'
  },
  render: ButtonRenderer
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var L,f,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'green'
  },
  render: ButtonRenderer
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var B,R,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'red'
  },
  render: ButtonRenderer
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const P=["Default","Secondary","Tertiary","Green","Red"];export{a as Default,s as Green,c as Red,t as Secondary,o as Tertiary,P as __namedExportsOrder,N as default};
