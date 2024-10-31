import{R as t}from"./index-qyj2ZBCg.js";import{e as x,r as u}from"./index-D_k1Zdq5.js";import{t as m}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-ErHAcE3a.js";function w({title:n,disabled:e,Icon:a,selected:o,secondaryText:s,className:l,...d}){return t.createElement("div",{tabIndex:0,className:m("h-[38px] w-full cursor-pointer bg-[#141619] px-4 py-2.5 text-xs text-[#9CA0AA] outline-none","flex items-center",!e&&"hover:text-[#F5F5F5] focus:text-[#F5F5F5]",!e&&o&&"bg-[#191B1F] text-[#375DAF]",e&&"cursor-not-allowed bg-[#191B1F] text-[#42454D]",l),...d},t.createElement("span",{className:"flex items-center gap-2"},a&&t.createElement(a,{className:m("h-3 w-3",o&&"text-[#F5F5F5]")}),n),s&&t.createElement("span",{className:"ml-auto"},s),!s&&o&&t.createElement(x,{className:"ml-auto h-3 w-3 stroke-2"}))}const y={title:"Components/Editor/DropdownList",parameters:{componentSubtitle:"Dropdown",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2511-3503&node-type=frame&t=B0cD28zTLRN51Vxd-0"}}},g=n=>{let e;return n.Icon||(e=u,delete n.Icon),t.createElement(w,{Icon:e,...n})},r={name:"Dropdown Item",render:g,args:{title:"Account settings",selected:!1},argTypes:{secondaryText:{control:"text"}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Dropdown Item',
  render: DropdownItemRenderer,
  args: {
    title: 'Account settings',
    selected: false
  },
  argTypes: {
    secondaryText: {
      control: 'text'
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const h=["DropdownItemStory"];export{r as DropdownItemStory,h as __namedExportsOrder,y as default};
