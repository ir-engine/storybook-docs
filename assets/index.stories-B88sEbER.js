import{R as e}from"./index-CBqU2yxZ.js";import{G as w}from"./index-0LPTT8t9.js";import{t as l}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-vdkxwKJc.js";const i={success:{containerClass:"bg-theme-tagGreen",iconColor:"#15803d",textClass:"text-green-900 dark:text-white"},successLight:{containerClass:"bg-theme-tagLime",iconColor:"#9ACD32",textClass:"text-[#9ACD32]-900 dark:text-white"},danger:{containerClass:"bg-theme-tagRed",iconColor:"#f43f5e",textClass:"text-white"},neutral:{containerClass:"bg-stone-200 dark:bg-gray-800",iconColor:"black",textClass:"text-black dark:text-white"},warning:{containerClass:"bg-theme-tagYellow",iconColor:"#d6a407",textClass:"text-yellow-900 dark:text-white"}},b=({label:d,className:C,textClassName:p,icon:t,variant:s})=>{let r=l("flex h-fit items-center justify-around gap-x-1.5	rounded-full px-2.5 py-0.5",C),o=p,n=null;if(s&&i[s]){const{containerClass:x,iconColor:u,textClass:f}=i[s];r=l(x,r),o=l(f,o),n=u}return e.createElement("div",{className:r},n&&e.isValidElement(t)?e.cloneElement(t,{...t.props,color:n}):t,e.createElement("span",{className:o},d))},B={title:"Primitives/Tailwind/Badge",component:b,parameters:{componentSubtitle:"Badge",design:{type:"figma",url:""}}},a={args:{label:"Badge",variant:"warning",icon:e.createElement(w,null)}};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Badge',
    variant: 'warning',
    icon: <GoDotFill />
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,B as default};
