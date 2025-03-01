import{c as w}from"./ActionFunctions-Ddl3k8rS.js";import{r as N,R as e}from"./index-qyj2ZBCg.js";import{jX as l}from"./ZoomOutSm-SpxWHcTr.js";import{t as i}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DEsV4xCt.js";import"./v4-BOvFkHkt.js";const y=({labels:r,displayMode:t="justify-start",currentTabIndex:a,onChange:o,...x})=>(N.useEffect(()=>{console.log("currentTabIndex: ",a)},[]),e.createElement("div",{className:i("flex items-center gap-x-9",t==="justify-between"?"justify-between":"justify-start"),...x},r.map((E,c)=>e.createElement("button",{key:c,className:i("flex items-center justify-start gap-x-1 border-text-secondary pb-4 font-medium text-text-secondary hover:border-b-2",c===a?"border-b-2 border-ui-select-primary text-ui-select-primary":""),onClick:()=>o(c)},E)))),h={displayMode:{control:"inline-radio",options:["justify-start","justify-between"]}},I={title:"Primitives/Tailwind/SidebarNavigation",component:y,parameters:{componentSubtitle:"SidebarNavigation",design:{type:"figma",url:""}},argTypes:h},g=r=>{const t=w(0),a=o=>{t.set(o)};return e.createElement(y,{labels:r.labels,currentTabIndex:t.value,onChange:a,displayMode:r.displayMode})},s={args:{labels:["Profile","My Account"]},render:g},n={args:{labels:[e.createElement(e.Fragment,null,e.createElement(l,{className:"h-6 w-6"}),e.createElement("span",null,"Profile")),e.createElement(e.Fragment,null,e.createElement(l,{className:"h-6 w-6"}),e.createElement("span",null,"My Account"))]},render:g};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    labels: ['Profile', 'My Account']
  },
  render: Renderer
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,f,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const T=["Default","WithIcons"];export{s as Default,n as WithIcons,T as __namedExportsOrder,I as default};
