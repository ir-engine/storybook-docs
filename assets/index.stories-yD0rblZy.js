import{g as G}from"./ZoomOutSm-BKYTao-C.js";import{R as i,r as J}from"./index-DPzuYzxM.js";import{S as E}from"./index-DFnjDgZz.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./WebRTCTransportFunctions-mB_FREj1.js";import"./index-DYLXRpC5.js";import"./v4-BOvFkHkt.js";import"./fuse-Ch1WBRTM.js";import"./index-BmZLy_Eh.js";import"./index-K3LPJkAj.js";import"./index-C0GIA9vz.js";import"./iconBase-qHBVS_PM.js";import"./index-C53TPVpl.js";import"./index-D9X8Um7J.js";import"./tw-merge-Ds6tgvmq.js";import"./index-CvvRAf94.js";import"./index-DNUDjAZy.js";const $={numberOfListItems:{control:"number",name:"Number of List Items"},width:{control:"select",options:["sm","md","lg","full"]},inputHeight:{control:"select",options:["xs","l","xl"]},labelText:{control:{type:"text"}},labelPosition:{control:{type:"select"},options:["top","left"]},showCheckmark:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},helperText:{control:{type:"text"}},state:{control:{type:"select"},options:["success","error"]},searchMode:{control:{type:"select"},options:["prefix","fuzzy"]}},te={title:"Primitives/Tailwind/Select",component:E,parameters:{componentSubtitle:"Select",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2508-3421&t=XJmPDraRXGrLFAp3-4"}},argTypes:$,args:{numberOfListItems:5}},t=({numberOfListItems:e,labelText:c,labelPosition:u,generateItem:p,items:m,...L})=>{const d=m||[];for(let a=0;a<e;a++)p?d.push(p(a)):m||d.push({value:a,label:`Account Settings ${a}`});const[M,D]=i.useState(-1),H=a=>{D(a)},[j,f]=i.useState(void 0);return J.useEffect(()=>{f(c&&u?{text:c,position:u}:void 0)},[c,u]),i.createElement(E,{options:d,value:M,onChange:H,labelProps:j,...L})},r={render:t},n={render:t,args:{generateItem:e=>({value:e,label:`Account Settings ${e}`,secondaryText:"secondary"}),showCheckmark:!1}},o={render:t,args:{generateItem:e=>({value:e,label:`Account Settings ${e}`,secondaryText:"secondary",Icon:G}),showCheckmark:!1}},s={render:t,args:{items:[{value:1,label:"Apple",secondaryText:"A sweet red fruit rich in fiber and vitamins"},{value:2,label:"Banana",secondaryText:"A tropical fruit high in potassium"},{value:3,label:"Carrot",secondaryText:"A root vegetable great for vision health"},{value:4,label:"Dragon Fruit",secondaryText:"An exotic fruit with a vibrant pink skin"},{value:5,label:"Eggplant",secondaryText:"A versatile vegetable commonly used in cooking"},{value:6,label:"Fig",secondaryText:"A small fruit with a unique, sweet flavor"},{value:7,label:"Grape",secondaryText:"A juicy fruit used to make wine"},{value:8,label:"Honeydew Melon",secondaryText:"A refreshing melon with a pale green flesh"},{value:9,label:"Iceberg Lettuce",secondaryText:"A crisp, leafy vegetable often used in salads"},{value:10,label:"Jackfruit",secondaryText:"A large fruit with a sweet and distinctive flavor"}],width:"lg",showCheckmark:!1,searchMode:"prefix"}},l={render:t,args:{items:[{value:1,label:"Apple",secondaryText:"A sweet red fruit rich in fiber and vitamins"},{value:2,label:"Banana",secondaryText:"A tropical fruit high in potassium"},{value:3,label:"Carrot",secondaryText:"A root vegetable great for vision health"},{value:4,label:"Dragon Fruit",secondaryText:"An exotic fruit with a vibrant pink skin"},{value:5,label:"Eggplant",secondaryText:"A versatile vegetable commonly used in cooking"},{value:6,label:"Fig",secondaryText:"A small fruit with a unique, sweet flavor"},{value:7,label:"Grape",secondaryText:"A juicy fruit used to make wine"},{value:8,label:"Honeydew Melon",secondaryText:"A refreshing melon with a pale green flesh"},{value:9,label:"Iceberg Lettuce",secondaryText:"A crisp, leafy vegetable often used in salads"},{value:10,label:"Jackfruit",secondaryText:"A large fruit with a sweet and distinctive flavor"}],width:"lg",showCheckmark:!1,startComponent:i.createElement("span",{className:"text-xs text-text-inactive"},"X"),searchMode:"prefix"}};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Renderer
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,y,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    generateItem: (i: number) => ({
      value: i,
      label: \`Account Settings \${i}\`,
      secondaryText: 'secondary'
    }),
    showCheckmark: false
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var w,A,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var k,S,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,F,R;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    startComponent: <span className="text-xs text-text-inactive">X</span>,
    searchMode: 'prefix'
  }
}`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const re=["Default","SecondaryText","SecondaryTextWithIcon","Searchable","WithStartComponent"];export{r as Default,s as Searchable,n as SecondaryText,o as SecondaryTextWithIcon,l as WithStartComponent,re as __namedExportsOrder,te as default};
