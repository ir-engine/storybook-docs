import{r as a,R as e}from"./index-DPzuYzxM.js";import{f as N,g as y}from"./index-C0GIA9vz.js";import{B as d}from"./index-Dls6AtJn.js";import{I as p}from"./index-CvvRAf94.js";import{aK as S}from"./ZoomOutSm-BKYTao-C.js";import{t as i}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./iconBase-qHBVS_PM.js";import"./index-DNUDjAZy.js";import"./index-BmZLy_Eh.js";import"./index-DYLXRpC5.js";const P=a.forwardRef(({title:g,subtitle:s,children:n,className:I,open:c,...v},w)=>{const[t,m]=a.useState(!1),[E,u]=a.useState("0px"),o=a.useRef(null);return a.useEffect(()=>{m(!!c)},[c]),a.useEffect(()=>{if(o.current){const l=o.current;if(t){const h=l.scrollHeight;u(`${h}px`)}else u("0px")}},[t,n]),e.createElement("div",{className:"w-full",...v,ref:w},e.createElement("div",{className:i("flex w-full cursor-pointer flex-col items-center justify-between gap-y-2 border-[0.5px] border-ui-outline bg-white p-2 dark:bg-surface-3",t?"rounded-t-md":""),"data-testid":"accordion-header",onClick:()=>{m(l=>!l)}},e.createElement("div",{className:"flex w-full items-center justify-between p-4"},e.createElement("h2",{className:"flex-1 truncate text-base font-semibold leading-4 text-text-primary"},g),e.createElement(S,{className:i("h-5 w-5 text-text-primary duration-300",t?"rotate-180":""),"data-testid":t?"close-accordion-icon":"open-accordion-icon"})),s&&e.createElement("p",{className:"w-full text-base text-text-secondary"},s)),e.createElement("div",{className:i("w-full origin-top overflow-hidden border-[0.5px] border-ui-outline bg-white transition-[max-height] duration-300 ease-in-out dark:bg-surface-1",t?"rounded-b-md border-t-0":"border-none"),style:{maxHeight:E},ref:o},e.createElement("div",{className:"p-2"},n)))}),D={title:"Primitives/Tailwind/Accordion",component:P,parameters:{componentSubtitle:"Accordion",design:{type:"figma",url:""}}},r={args:{title:"Task Server",subtitle:"Edit App Title, Subtitle, PWA, Logo, Icon, Release Name, Audio and Video codec",expandIcon:e.createElement(y,null),shrinkIcon:e.createElement(N,null),children:e.createElement(e.Fragment,null,e.createElement("div",{className:"flex w-full justify-between gap-4"},e.createElement(p,{labelProps:{text:"Port",position:"top"},value:"3030"}),e.createElement(p,{labelProps:{text:"Process Interval",position:"top"},value:"30"})),e.createElement("div",{className:"flex w-3/12 justify-between gap-4"},e.createElement(d,{fullWidth:!0,className:""},"Cancel"),e.createElement(d,{fullWidth:!0,variant:"primary"},"Submit")))}};var f,x,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
