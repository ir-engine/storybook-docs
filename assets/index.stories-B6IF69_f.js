import{g as A}from"./ZoomOutSm-DkdUdTbX.js";import{R as i,r as C}from"./index-qyj2ZBCg.js";import{S as w}from"./index-BgfWiF8v.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useClickOutside-S5C10oqi.js";import"./index-Djhr6yFr.js";import"./index-DGEuJ1jr.js";import"./iconBase-Cq1uYpEy.js";import"./tw-merge-Ds6tgvmq.js";import"./index-CBEC9dq1.js";import"./index-B-G2UZfA.js";const E={numberOfListItems:{control:"number",name:"Number of List Items"},width:{control:"select",options:["sm","md","lg","full"]},inputHeight:{control:"select",options:["xs","l","xl"]},labelText:{control:{type:"text"}},labelPosition:{control:{type:"select"},options:["top","left"]},showCheckmark:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},helperText:{control:{type:"text"}},state:{control:{type:"select"},options:["success","error"]}},j={title:"Primitives/Tailwind/Select",component:w,parameters:{componentSubtitle:"Select",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2508-3421&t=XJmPDraRXGrLFAp3-4"}},argTypes:E,args:{numberOfListItems:5}},l=({numberOfListItems:e,labelText:s,labelPosition:a,generateItem:m,...k})=>{const c=[];for(let t=0;t<e;t++)m?c.push(m(t)):c.push({value:t,label:`Account Settings ${t}`});const[I,R]=i.useState(-1),T=t=>{R(t)},[v,p]=i.useState(void 0);return C.useEffect(()=>{p(s&&a?{text:s,position:a}:void 0)},[s,a]),i.createElement(w,{options:c,value:I,onChange:T,labelProps:v,...k})},r={render:l},o={render:l,args:{generateItem:e=>({value:e,label:`Account Settings ${e}`,secondaryText:"secondary"}),showCheckmark:!1}},n={render:l,args:{generateItem:e=>({value:e,label:`Account Settings ${e}`,secondaryText:"secondary",Icon:A}),showCheckmark:!1}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Renderer
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    generateItem: (i: number) => ({
      value: i,
      label: \`Account Settings \${i}\`,
      secondaryText: 'secondary'
    }),
    showCheckmark: false
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,x,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    generateItem: (i: number) => ({
      value: i,
      label: \`Account Settings \${i}\`,
      secondaryText: 'secondary',
      Icon: Rows01Md
    }),
    showCheckmark: false
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const G=["Default","SecondaryText","SecondaryTextWithIcon"];export{r as Default,o as SecondaryText,n as SecondaryTextWithIcon,G as __namedExportsOrder,j as default};
