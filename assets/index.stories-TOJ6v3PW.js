import{u as E}from"./WebRTCTransportFunctions-mB_FREj1.js";import{R as e}from"./index-DPzuYzxM.js";import{k1 as c}from"./ZoomOutSm-BKYTao-C.js";import{t as l}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DYLXRpC5.js";import"./v4-BOvFkHkt.js";const y=({labels:t,displayMode:r="justify-start",currentTabIndex:n,onChange:o,...x})=>e.createElement("div",{className:l("flex items-center gap-x-9",r==="justify-between"?"justify-between":"justify-start"),...x},t.map((w,i)=>e.createElement("button",{key:i,className:l("flex items-center justify-start gap-x-1 border-text-secondary pb-4 font-medium text-text-secondary hover:border-b-2",i===n?"border-b-2 border-ui-select-primary text-ui-select-primary":""),"data-testid":"sidebar-navigation-button",onClick:()=>o(i)},w))),N={displayMode:{control:"inline-radio",options:["justify-start","justify-between"]}},k={title:"Primitives/Tailwind/SidebarNavigation",component:y,parameters:{componentSubtitle:"SidebarNavigation",design:{type:"figma",url:""}},argTypes:N},g=t=>{const r=E(0),n=o=>{r.set(o)};return e.createElement(y,{labels:t.labels,currentTabIndex:r.value,onChange:n,displayMode:t.displayMode})},a={args:{labels:["Profile","My Account"]},render:g},s={args:{labels:[e.createElement(e.Fragment,null,e.createElement(c,{className:"h-6 w-6"}),e.createElement("span",null,"Profile")),e.createElement(e.Fragment,null,e.createElement(c,{className:"h-6 w-6"}),e.createElement("span",null,"My Account"))]},render:g};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
