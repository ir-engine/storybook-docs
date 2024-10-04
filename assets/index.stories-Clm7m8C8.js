import{r as s,R as e}from"./index-CBqU2yxZ.js";import{i as y,j as P}from"./index-DGVNGK2X.js";import{B as o}from"./index-CGhkeU3i.js";import{I as n}from"./index-Dn0AHKmy.js";import{c as T}from"./ActionFunctions-CxzuxLxN.js";import{T as m}from"./index-ChWBCYBM.js";import{t as c}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-vdkxwKJc.js";import"./index-vJCBmx79.js";import"./index-CqRG3f1I.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";const W=s.forwardRef(({title:f,subtitle:l,expandIcon:h,shrinkIcon:g,prefixIcon:r,children:v,className:b,titleClassName:E,titleFontSize:w="xl",open:i,...x},N)=>{const S=c("w-full rounded-2xl bg-theme-surface-main p-6 ",b),A=c("flex flex-row items-center",E),t=T(!1);return s.useEffect(()=>{t.set(!!i)},[i]),e.createElement("div",{className:S,...x,ref:N},e.createElement("div",{className:"flex w-full cursor-pointer items-center justify-between hover:bg-theme-highlight",onClick:()=>{t.set(I=>!I)}},e.createElement("div",{className:A},r&&e.createElement("div",{className:"mr-2"},r),e.createElement(m,{component:"h2",fontSize:w,fontWeight:"semibold"},f)),t.value?g:h),!t.value&&l&&e.createElement(m,{component:"h3",fontSize:"base",fontWeight:"light",className:"mt-2 w-full dark:text-[#A3A3A3]"},l),t.value&&v)}),O={title:"Primitives/Tailwind/Accordion",component:W,parameters:{componentSubtitle:"Accordion",design:{type:"figma",url:""}}},a={args:{title:"Task Server",subtitle:"Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec",expandIcon:e.createElement(y,null),shrinkIcon:e.createElement(P,null),children:e.createElement(e.Fragment,null,e.createElement("div",{className:"my-6 flex w-full justify-between gap-4"},e.createElement(n,{label:"Port",value:"3030"}),e.createElement(n,{label:"Process Interval",value:"30"})),e.createElement("div",{className:"flex w-3/12 justify-between gap-4"},e.createElement(o,{fullWidth:!0,className:"bg-theme-highlight"},"Cancel"),e.createElement(o,{fullWidth:!0,variant:"primary"},"Submit")))}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Task Server',
    subtitle: 'Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec',
    expandIcon: <HiPlusSmall />,
    shrinkIcon: <HiMinus />,
    children: <>
        <div className="my-6 flex w-full justify-between gap-4">
          <Input label="Port" value="3030" />
          <Input label="Process Interval" value="30" />
        </div>
        <div className="flex w-3/12 justify-between gap-4">
          <Button fullWidth className="bg-theme-highlight">
            Cancel
          </Button>
          <Button fullWidth variant="primary">
            Submit
          </Button>
        </div>
      </>
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,O as default};
