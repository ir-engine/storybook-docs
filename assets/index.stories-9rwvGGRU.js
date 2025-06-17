import{r as s,R as t}from"./index-DPzuYzxM.js";import{d as x,e as v}from"./index-CO8llcWC.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./iconBase-qHBVS_PM.js";function d(r){let e="";return r/60<10&&(e+="0"),e+=Math.floor(r/60)+":",r%60<10&&(e+="0"),e+=r%60+"",e}function b({currentSeconds:r,totalSeconds:e,onChange:n,isPaused:u,onPlayButtonClick:f}){const a=s.useRef(null),l=s.useRef(null),[h,k]=s.useState(0),w=o=>{const E=parseFloat(o.target.value);n==null||n(E)},c=Math.round(r/e*100);return s.useEffect(()=>{const o=new ResizeObserver(()=>{a.current&&l.current&&k(a.current.offsetWidth-1.5*l.current.offsetWidth)});return o.observe(a.current),()=>o.disconnect()},[]),t.createElement("div",{ref:a,className:"group/editor-seeker flex flex-nowrap items-center gap-x-2 bg-[#141619] px-2 py-1"},t.createElement("button",{className:"text-[#42454D] group-hover/editor-seeker:text-[#9CA0AA]",onClick:f},u?t.createElement(x,null):t.createElement(v,null)),t.createElement("input",{min:0,max:e,value:r,onChange:w,type:"range",style:{width:h+"px",background:`linear-gradient(to right, #375DAF ${c}%, #42454D ${c}%)`},className:`trasition-all h-1 min-w-20 cursor-pointer appearance-none
          overflow-hidden rounded bg-[#42454D] duration-150
          ease-in-out focus:outline-none
          disabled:pointer-events-none disabled:opacity-50 group-hover/editor-seeker:h-2
          [&::-moz-range-progress]:bg-[#375DAF]
          [&::-moz-range-thumb]:h-full
          [&::-moz-range-thumb]:w-2
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:rounded
          [&::-moz-range-thumb]:bg-[#213869]
          group-hover/editor-seeker:[&::-moz-range-thumb]:bg-[#879ECF]
          [&::-moz-range-track]:h-full
          [&::-moz-range-track]:w-full
          [&::-moz-range-track]:rounded
          [&::-moz-range-track]:bg-[#42454D]
          [&::-webkit-slider-runnable-track]:h-full
          [&::-webkit-slider-runnable-track]:w-full
          [&::-webkit-slider-runnable-track]:rounded
          [&::-webkit-slider-thumb]:h-full
          [&::-webkit-slider-thumb]:w-2
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded
          [&::-webkit-slider-thumb]:bg-[#213869]
          group-hover/editor-seeker:[&::-webkit-slider-thumb]:bg-[#879ECF]
        `}),t.createElement("span",{ref:l,className:"whitespace-nowrap text-sm text-[#B2B5BD] group-hover/editor-seeker:text-[#F5F5F5]"},d(r)," / ",d(e)))}const{useArgs:D}=__STORYBOOK_MODULE_PREVIEW_API__,S={currentSeconds:{control:"number",name:"Starting Seconds"},totalSeconds:{control:"number",name:"Total Seconds"},isPaused:{control:"boolean",name:"Is Paused"}},_={title:"Components/Editor/Seeker",component:b,parameters:{componentSubtitle:"Seeker",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2283-24252&node-type=frame&t=XAGvEGVnphLHTwP3-0"}},argTypes:S,args:{startingSeconds:40,totalSeconds:9960,isPaused:!1}},z=r=>{const[e,n]=D();return t.createElement(b,{...r,currentSeconds:e.startingSeconds,onChange:u=>n({startingSeconds:u})})},i={name:"Default",render:z};var m,p,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  render: SeekerRenderer
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const P=["Default"];export{i as Default,P as __namedExportsOrder,_ as default};
