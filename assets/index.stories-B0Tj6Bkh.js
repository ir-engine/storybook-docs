import{R as e}from"./index-DPzuYzxM.js";import{F as c}from"./ZoomOutSm-BKYTao-C.js";import{S}from"./index-DSz74nmS.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./tw-merge-Ds6tgvmq.js";const f=["xs","sm","l","xl"],x={disabled:{control:"boolean"},startIcon:{control:"boolean",name:"Start Icon"},endIcon:{control:"boolean",name:"End Icon"},variant:{table:{disable:!0}},rounded:{control:"boolean"}},L={title:"Components/Editor/StudioButton",component:S,parameters:{componentSubtitle:"StudioButton",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=3550-14509&node-type=symbol&m=dev"}},argTypes:x},s=r=>e.createElement("div",{className:"flex items-center gap-3"},f.map(o=>e.createElement("div",{className:"flex grow flex-col items-center"},e.createElement("span",{className:"mb-2 text-sm text-sky-600"},o),e.createElement(S,{key:o,size:o,...r},r.startIcon&&e.createElement(c,null),r.children,r.endIcon&&e.createElement(c,null))))),n={name:"Primary",args:{children:"Label",variant:"primary"},render:s},t={args:{children:"Label",variant:"secondary"},render:s},a={name:"Tertiary",args:{children:"Label",variant:"tertiary"},render:s};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    children: 'Label',
    variant: 'primary'
  },
  render: StudioButtonRenderer
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'secondary'
  },
  render: StudioButtonRenderer
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,b,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Tertiary',
  args: {
    children: 'Label',
    variant: 'tertiary'
  },
  render: StudioButtonRenderer
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const w=["Default","Secondary","Tertiary"];export{n as Default,t as Secondary,a as Tertiary,w as __namedExportsOrder,L as default};
