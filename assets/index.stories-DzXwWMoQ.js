import{r as t,R as e}from"./index-qyj2ZBCg.js";import{l as N,m as y}from"./index-09YcDLq7.js";import{B as p}from"./index-CrXUOXRH.js";import{I as d}from"./index-CW8IKZXE.js";import{aK as S}from"./ZoomOutSm-SpxWHcTr.js";import{t as s}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-DbqO1Qqb.js";import"./index-B8XEpAJ0.js";import"./index-B-4XyK_m.js";import"./index-DEsV4xCt.js";const P=t.forwardRef(({title:g,subtitle:i,children:n,className:I,open:c,...v},E)=>{const[a,m]=t.useState(!1),[w,u]=t.useState("0px"),l=t.useRef(null);return t.useEffect(()=>{m(!!c)},[c]),t.useEffect(()=>{if(l.current){const o=l.current;if(a){const h=o.scrollHeight;u(`${h}px`)}else u("0px")}},[a,n]),e.createElement("div",{className:"w-full",...v,ref:E},e.createElement("div",{className:s("flex w-full cursor-pointer flex-col items-center justify-between gap-y-2 border-[0.5px] border-ui-outline bg-surface-3 p-2",a?"rounded-t-md":""),onClick:()=>{m(o=>!o)}},e.createElement("div",{className:"flex w-full items-center justify-between p-4"},e.createElement("h2",{className:"flex-1 truncate text-base font-semibold leading-4 text-text-primary"},g),e.createElement(S,{className:s("h-5 w-5 text-text-primary duration-300",a?"rotate-180":"")})),i&&e.createElement("p",{className:"w-full text-base text-text-secondary"},i)),e.createElement("div",{className:s("w-full origin-top overflow-hidden border-[0.5px] border-ui-outline bg-surface-1 transition-[max-height] duration-300 ease-in-out",a?"rounded-b-md":""),style:{maxHeight:w},ref:l},e.createElement("div",{className:"p-2"},n)))}),D={title:"Primitives/Tailwind/Accordion",component:P,parameters:{componentSubtitle:"Accordion",design:{type:"figma",url:""}}},r={args:{title:"Task Server",subtitle:"Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec",expandIcon:e.createElement(y,null),shrinkIcon:e.createElement(N,null),children:e.createElement(e.Fragment,null,e.createElement("div",{className:"flex w-full justify-between gap-4"},e.createElement(d,{labelProps:{text:"Port",position:"top"},value:"3030"}),e.createElement(d,{labelProps:{text:"Process Interval",position:"top"},value:"30"})),e.createElement("div",{className:"flex w-3/12 justify-between gap-4"},e.createElement(p,{fullWidth:!0,className:""},"Cancel"),e.createElement(p,{fullWidth:!0,variant:"primary"},"Submit")))}};var f,x,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Task Server',
    subtitle: 'Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec',
    expandIcon: <HiPlusSmall />,
    shrinkIcon: <HiMinus />,
    children: <>
        <div className="flex w-full justify-between gap-4">
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
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,D as default};
