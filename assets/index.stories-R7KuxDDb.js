import{R as e}from"./index-DPzuYzxM.js";import{H as d}from"./index-CkoKGIuM.js";import{B as S}from"./index-Dls6AtJn.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./iconBase-qHBVS_PM.js";import"./tw-merge-Ds6tgvmq.js";const w=["xs","sm","l","xl"],I={disabled:{control:"boolean"},startIcon:{control:"boolean",name:"Start Icon"},endIcon:{control:"boolean",name:"End Icon"},variant:{table:{disable:!0}}},_={title:"Primitives/Tailwind/Button",component:S,parameters:{componentSubtitle:"Button",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2035-16950"}},argTypes:I},r=n=>e.createElement("div",{className:"flex items-center gap-3"},w.map(i=>e.createElement("div",{className:"flex grow flex-col items-center"},e.createElement("span",{className:"mb-2 text-sm text-blue-400"},i),e.createElement(S,{key:i,size:i,...n},n.startIcon&&e.createElement(d,null),n.children,n.endIcon&&e.createElement(d,null))))),a={name:"Primary",args:{children:"Label",variant:"primary"},render:r},t={args:{children:"Label",variant:"secondary"},render:r},o={name:"Tertiary",args:{children:"Label",variant:"tertiary"},render:r},s={args:{children:"Label",variant:"green"},render:r},c={args:{children:"Label",variant:"red"},render:r};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    children: 'Label',
    variant: 'primary'
  },
  render: ButtonRenderer
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'secondary'
  },
  render: ButtonRenderer
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,v,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Tertiary',
  args: {
    children: 'Label',
    variant: 'tertiary'
  },
  render: ButtonRenderer
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,x,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'green'
  },
  render: ButtonRenderer
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var R,B,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'red'
  },
  render: ButtonRenderer
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const F=["Default","Secondary","Tertiary","Green","Red"];export{a as Default,s as Green,c as Red,t as Secondary,o as Tertiary,F as __namedExportsOrder,_ as default};
