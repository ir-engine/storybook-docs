import{r as i,R as e}from"./index-BVKeUVk_.js";import{n as I,o as y}from"./index-DKpYho_B.js";import{B as s}from"./index-BrpOYLvx.js";import{I as n}from"./index-Bd-npBBQ.js";import{c as T}from"./ActionFunctions-QRRLR__x.js";import{T as m}from"./index-B8VDihNl.js";import{t as c}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-VQY1ILqU.js";import"./ZoomOutSm-DogtkUk_.js";import"./index-CsmDKC_Z.js";import"./index-x_sFgN1b.js";import"./index-Bt1r4wR5.js";import"./v4-Dz_GI0CC.js";const W=i.forwardRef(({title:f,subtitle:l,expandIcon:h,shrinkIcon:g,prefixIcon:o,children:v,className:b,titleClassName:x,titleFontSize:E="xl",open:r,...w},N)=>{const P=c("w-full rounded-2xl bg-theme-surface-main p-6 ",b),S=c("flex flex-row items-center",x),t=T(!1);return i.useEffect(()=>{t.set(!!r)},[r]),e.createElement("div",{className:P,...w,ref:N},e.createElement("div",{className:"flex w-full cursor-pointer items-center justify-between hover:bg-theme-highlight",onClick:()=>{t.set(A=>!A)}},e.createElement("div",{className:S},o&&e.createElement("div",{className:"mr-2"},o),e.createElement(m,{component:"h2",fontSize:E,fontWeight:"semibold"},f)),t.value?g:h),!t.value&&l&&e.createElement(m,{component:"h3",fontSize:"base",fontWeight:"light",className:"mt-2 w-full dark:text-[#A3A3A3]"},l),t.value&&v)}),q={title:"Primitives/Tailwind/Accordion",component:W,parameters:{componentSubtitle:"Accordion",design:{type:"figma",url:""}}},a={args:{title:"Task Server",subtitle:"Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec",expandIcon:e.createElement(y,null),shrinkIcon:e.createElement(I,null),children:e.createElement(e.Fragment,null,e.createElement("div",{className:"my-6 flex w-full justify-between gap-4"},e.createElement(n,{labelProps:{text:"Port",position:"top"},value:"3030"}),e.createElement(n,{labelProps:{text:"Process Interval",position:"top"},value:"30"})),e.createElement("div",{className:"flex w-3/12 justify-between gap-4"},e.createElement(s,{fullWidth:!0,className:"bg-theme-highlight"},"Cancel"),e.createElement(s,{fullWidth:!0,variant:"primary"},"Submit")))}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Task Server',
    subtitle: 'Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec',
    expandIcon: <HiPlusSmall />,
    shrinkIcon: <HiMinus />,
    children: <>
        <div className="my-6 flex w-full justify-between gap-4">
          <Input labelProps={{
          text: 'Port',
          position: 'top'
        }} value="3030" />
          <Input labelProps={{
          text: 'Process Interval',
          position: 'top'
        }} value="30" />
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,q as default};
