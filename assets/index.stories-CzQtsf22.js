import{r as a,R as e}from"./index-qyj2ZBCg.js";import{d as N,e as y}from"./index-ChBN-cH4.js";import{B as d}from"./index-CrXUOXRH.js";import{I as p}from"./index-DghNV7Qu.js";import{ay as S}from"./ZoomOutSm-3KI82Oqa.js";import{t as s}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-DbqO1Qqb.js";import"./index-BOJ3mZG7.js";import"./isMobile-BLmM03m4.js";import"./index-BJS_cBqw.js";import"./index-DEsV4xCt.js";const P=a.forwardRef(({title:g,subtitle:i,children:n,className:I,open:c,...v},E)=>{const[t,m]=a.useState(!1),[w,u]=a.useState("0px"),o=a.useRef(null);return a.useEffect(()=>{m(!!c)},[c]),a.useEffect(()=>{if(o.current){const l=o.current;if(t){const h=l.scrollHeight;u(`${h}px`)}else u("0px")}},[t,n]),e.createElement("div",{className:"w-full",...v,ref:E},e.createElement("div",{className:s("flex w-full cursor-pointer flex-col items-center justify-between gap-y-2 border-[0.5px] border-ui-outline bg-surface-3 p-2",t?"rounded-t-md":""),"data-testid":"accordion-header",onClick:()=>{m(l=>!l)}},e.createElement("div",{className:"flex w-full items-center justify-between p-4"},e.createElement("h2",{className:"flex-1 truncate text-base font-semibold leading-4 text-text-primary"},g),e.createElement(S,{className:s("h-5 w-5 text-text-primary duration-300",t?"rotate-180":""),"data-testid":t?"close-accordion-icon":"open-accordion-icon"})),i&&e.createElement("p",{className:"w-full text-base text-text-secondary"},i)),e.createElement("div",{className:s("w-full origin-top overflow-hidden border-[0.5px] border-ui-outline bg-surface-1 transition-[max-height] duration-300 ease-in-out",t?"rounded-b-md border-t-0":"border-none"),style:{maxHeight:w},ref:o},e.createElement("div",{className:"p-2"},n)))}),F={title:"Primitives/Tailwind/Accordion",component:P,parameters:{componentSubtitle:"Accordion",design:{type:"figma",url:""}}},r={args:{title:"Task Server",subtitle:"Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec",expandIcon:e.createElement(y,null),shrinkIcon:e.createElement(N,null),children:e.createElement(e.Fragment,null,e.createElement("div",{className:"flex w-full justify-between gap-4"},e.createElement(p,{labelProps:{text:"Port",position:"top"},value:"3030"}),e.createElement(p,{labelProps:{text:"Process Interval",position:"top"},value:"30"})),e.createElement("div",{className:"flex w-3/12 justify-between gap-4"},e.createElement(d,{fullWidth:!0,className:""},"Cancel"),e.createElement(d,{fullWidth:!0,variant:"primary"},"Submit")))}};var f,x,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,F as default};
