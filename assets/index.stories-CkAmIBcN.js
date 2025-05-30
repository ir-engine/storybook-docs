import{R as a}from"./index-DPzuYzxM.js";import{C as g}from"./index-PchlGXp2.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./ZoomOutSm-BKYTao-C.js";import"./tw-merge-Ds6tgvmq.js";const{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,k={checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text",if:{arg:"label",exists:!0}},description:{control:"text",if:{arg:"description",exists:!0}},variantSize:{name:"size",control:"inline-radio",options:["md","lg"]},variantTextPlacement:{name:"Text Placement",control:"inline-radio",options:["left","right"]}},S={title:"Primitives/Tailwind/Checkbox",component:g,parameters:{componentSubtitle:"Checkbox",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2786-21102&node-type=frame&t=TlQtKBH49KjD5Efr-0"}},argTypes:k,args:{variantSize:"md",variantTextPlacement:"right"}},n=x=>{const[,h]=f();return a.createElement("div",{className:"flex items-center gap-3"},a.createElement(g,{...x,onChange:u=>h({checked:u})}))},e={name:"Default",render:n},r={name:"With Label",render:n,args:{label:"Checkbox label"}},t={name:"With Description",render:n,args:{label:"Checkbox label",description:"Save my login details for next time."}};var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Default',
  render: CheckboxRenderer
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'With Label',
  render: CheckboxRenderer,
  args: {
    label: 'Checkbox label'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'With Description',
  render: CheckboxRenderer,
  args: {
    label: 'Checkbox label',
    description: 'Save my login details for next time.'
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const W=["Default","WithLabel","WithDescription"];export{e as Default,t as WithDescription,r as WithLabel,W as __namedExportsOrder,S as default};
