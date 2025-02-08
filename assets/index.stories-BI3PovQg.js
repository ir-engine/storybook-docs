import{j as D}from"./ZoomOutSm-DgwQoYeN.js";import{R as d,r as M}from"./index-qyj2ZBCg.js";import{S as I}from"./index-CP42Oxqx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useClickOutside-S5C10oqi.js";import"./fuse-Ch1WBRTM.js";import"./index-BMp40tex.js";import"./index-Ev8kyWCq.js";import"./iconBase-DbqO1Qqb.js";import"./tw-merge-Ds6tgvmq.js";import"./index-DNSflMhH.js";import"./index-CktFvGY6.js";import"./index-CJ_Bqan9.js";import"./index-DEsV4xCt.js";const $={numberOfListItems:{control:"number",name:"Number of List Items"},width:{control:"select",options:["sm","md","lg","full"]},inputHeight:{control:"select",options:["xs","l","xl"]},labelText:{control:{type:"text"}},labelPosition:{control:{type:"select"},options:["top","left"]},showCheckmark:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},helperText:{control:{type:"text"}},state:{control:{type:"select"},options:["success","error"]},searchMode:{control:{type:"select"},options:["prefix","fuzzy"]}},K={title:"Primitives/Tailwind/Select",component:I,parameters:{componentSubtitle:"Select",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2508-3421&t=XJmPDraRXGrLFAp3-4"}},argTypes:$,args:{numberOfListItems:5}},s=({numberOfListItems:e,labelText:l,labelPosition:i,generateItem:u,items:p,...C})=>{const c=p||[];for(let r=0;r<e;r++)u?c.push(u(r)):p||c.push({value:r,label:`Account Settings ${r}`});const[R,E]=d.useState(-1),F=r=>{E(r)},[L,m]=d.useState(void 0);return M.useEffect(()=>{m(l&&i?{text:l,position:i}:void 0)},[l,i]),d.createElement(I,{options:c,value:R,onChange:F,labelProps:L,...C})},t={render:s},n={render:s,args:{generateItem:e=>({value:e,label:`Account Settings ${e}`,secondaryText:"secondary"}),showCheckmark:!1}},a={render:s,args:{generateItem:e=>({value:e,label:`Account Settings ${e}`,secondaryText:"secondary",Icon:D}),showCheckmark:!1}},o={render:s,args:{items:[{value:1,label:"Apple",secondaryText:"A sweet red fruit rich in fiber and vitamins"},{value:2,label:"Banana",secondaryText:"A tropical fruit high in potassium"},{value:3,label:"Carrot",secondaryText:"A root vegetable great for vision health"},{value:4,label:"Dragon Fruit",secondaryText:"An exotic fruit with a vibrant pink skin"},{value:5,label:"Eggplant",secondaryText:"A versatile vegetable commonly used in cooking"},{value:6,label:"Fig",secondaryText:"A small fruit with a unique, sweet flavor"},{value:7,label:"Grape",secondaryText:"A juicy fruit used to make wine"},{value:8,label:"Honeydew Melon",secondaryText:"A refreshing melon with a pale green flesh"},{value:9,label:"Iceberg Lettuce",secondaryText:"A crisp, leafy vegetable often used in salads"},{value:10,label:"Jackfruit",secondaryText:"A large fruit with a sweet and distinctive flavor"}],width:"lg",showCheckmark:!1,searchMode:"prefix"}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Renderer
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,b,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    generateItem: (i: number) => ({
      value: i,
      label: \`Account Settings \${i}\`,
      secondaryText: 'secondary'
    }),
    showCheckmark: false
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,w,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var A,k,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    items: [{
      value: 1,
      label: 'Apple',
      secondaryText: 'A sweet red fruit rich in fiber and vitamins'
    }, {
      value: 2,
      label: 'Banana',
      secondaryText: 'A tropical fruit high in potassium'
    }, {
      value: 3,
      label: 'Carrot',
      secondaryText: 'A root vegetable great for vision health'
    }, {
      value: 4,
      label: 'Dragon Fruit',
      secondaryText: 'An exotic fruit with a vibrant pink skin'
    }, {
      value: 5,
      label: 'Eggplant',
      secondaryText: 'A versatile vegetable commonly used in cooking'
    }, {
      value: 6,
      label: 'Fig',
      secondaryText: 'A small fruit with a unique, sweet flavor'
    }, {
      value: 7,
      label: 'Grape',
      secondaryText: 'A juicy fruit used to make wine'
    }, {
      value: 8,
      label: 'Honeydew Melon',
      secondaryText: 'A refreshing melon with a pale green flesh'
    }, {
      value: 9,
      label: 'Iceberg Lettuce',
      secondaryText: 'A crisp, leafy vegetable often used in salads'
    }, {
      value: 10,
      label: 'Jackfruit',
      secondaryText: 'A large fruit with a sweet and distinctive flavor'
    }],
    width: 'lg',
    showCheckmark: false,
    searchMode: 'prefix'
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const Q=["Default","SecondaryText","SecondaryTextWithIcon","Searchable"];export{t as Default,o as Searchable,n as SecondaryText,a as SecondaryTextWithIcon,Q as __namedExportsOrder,K as default};
