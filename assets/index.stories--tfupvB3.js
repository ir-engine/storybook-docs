import{r as s,R as e}from"./index-qyj2ZBCg.js";import{m as I,n as y}from"./index-Ev8kyWCq.js";import{B as i}from"./index-CrXUOXRH.js";import{I as n}from"./index-DNSflMhH.js";import{c as T}from"./ActionFunctions-YsspZ-nA.js";import{T as m}from"./index-FGFUspbx.js";import{t as c}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-DbqO1Qqb.js";import"./ZoomOutSm-DgwQoYeN.js";import"./index-CktFvGY6.js";import"./index-CJ_Bqan9.js";import"./index-DEsV4xCt.js";import"./v4-BOvFkHkt.js";const W=s.forwardRef(({title:f,subtitle:l,expandIcon:v,shrinkIcon:x,prefixIcon:o,children:E,className:w,titleClassName:b,titleFontSize:g="xl",open:r,...N},h)=>{const P=c("w-full rounded-2xl  p-6 ",w),S=c("flex flex-row items-center",b),t=T(!1);return s.useEffect(()=>{t.set(!!r)},[r]),e.createElement("div",{className:P,...N,ref:h},e.createElement("div",{className:"hover: flex w-full cursor-pointer items-center justify-between",onClick:()=>{t.set(A=>!A)}},e.createElement("div",{className:S},o&&e.createElement("div",{className:"mr-2"},o),e.createElement(m,{component:"h2",fontSize:g,fontWeight:"semibold"},f)),t.value?x:v),!t.value&&l&&e.createElement(m,{component:"h3",fontSize:"base",fontWeight:"light",className:"mt-2 w-full dark:text-[#A3A3A3]"},l),t.value&&E)}),q={title:"Primitives/Tailwind/Accordion",component:W,parameters:{componentSubtitle:"Accordion",design:{type:"figma",url:""}}},a={args:{title:"Task Server",subtitle:"Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec",expandIcon:e.createElement(y,null),shrinkIcon:e.createElement(I,null),children:e.createElement(e.Fragment,null,e.createElement("div",{className:"my-6 flex w-full justify-between gap-4"},e.createElement(n,{labelProps:{text:"Port",position:"top"},value:"3030"}),e.createElement(n,{labelProps:{text:"Process Interval",position:"top"},value:"30"})),e.createElement("div",{className:"flex w-3/12 justify-between gap-4"},e.createElement(i,{fullWidth:!0,className:""},"Cancel"),e.createElement(i,{fullWidth:!0,variant:"primary"},"Submit")))}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <Button fullWidth className="">
            Cancel
          </Button>
          <Button fullWidth variant="primary">
            Submit
          </Button>
        </div>
      </>
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,q as default};
