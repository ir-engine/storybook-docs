import{c as E}from"./ActionFunctions-D2GN_MFW.js";import{R as e}from"./index-CeGdYiXw.js";import{k0 as l}from"./ZoomOutSm-DgG-oJGq.js";import{t as i}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DEsV4xCt.js";import"./v4-BOvFkHkt.js";const y=({labels:r,displayMode:t="justify-start",currentTabIndex:n,onChange:o,...x})=>e.createElement("div",{className:i("flex items-center gap-x-9",t==="justify-between"?"justify-between":"justify-start"),...x},r.map((w,c)=>e.createElement("button",{key:c,className:i("flex items-center justify-start gap-x-1 border-text-secondary pb-4 font-medium text-text-secondary hover:border-b-2",c===n?"border-b-2 border-ui-select-primary text-ui-select-primary":""),onClick:()=>o(c)},w))),N={displayMode:{control:"inline-radio",options:["justify-start","justify-between"]}},k={title:"Primitives/Tailwind/SidebarNavigation",component:y,parameters:{componentSubtitle:"SidebarNavigation",design:{type:"figma",url:""}},argTypes:N},g=r=>{const t=E(0),n=o=>{t.set(o)};return e.createElement(y,{labels:r.labels,currentTabIndex:t.value,onChange:n,displayMode:r.displayMode})},a={args:{labels:["Profile","My Account"]},render:g},s={args:{labels:[e.createElement(e.Fragment,null,e.createElement(l,{className:"h-6 w-6"}),e.createElement("span",null,"Profile")),e.createElement(e.Fragment,null,e.createElement(l,{className:"h-6 w-6"}),e.createElement("span",null,"My Account"))]},render:g};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    labels: ['Profile', 'My Account']
  },
  render: Renderer
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,b,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labels: [<>
        <User01Lg className="h-6 w-6" />
        <span>Profile</span>
      </>, <>
        <User01Lg className="h-6 w-6" />
        <span>My Account</span>
      </>]
  },
  render: Renderer
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["Default","WithIcons"];export{a as Default,s as WithIcons,A as __namedExportsOrder,k as default};
