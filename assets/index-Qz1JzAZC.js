import{r as m,R as a}from"./index-qyj2ZBCg.js";import{L as x}from"./index-fQ8IZ7PB.js";import{T as A}from"./index-DRw1CQ1F.js";import{t as E}from"./tw-merge-Ds6tgvmq.js";const M=({value:t,label:g,info:h,description:B,min:r=0,max:s=100,step:l=1,onChange:n,onRelease:i,...f})=>{const b=m.useId(),u=m.useRef(null),[k,F]=m.useState(0),c=e=>{var w;const o=((w=l.toString().split(".")[1])==null?void 0:w.length)||0;let d=parseFloat(e);isNaN(d)?d=r:d=Math.min(Math.max(d,r),s),n==null||n(+d.toFixed(o))},z=e=>{const o=parseFloat(e.target.value);n==null||n(o)},p=Math.round((t-r)/(s-r)*100);return m.useEffect(()=>{const e=new ResizeObserver(()=>{var o;u.current&&F((o=u.current)==null?void 0:o.offsetWidth)});return e.observe(u.current),()=>e.disconnect()},[]),a.createElement("div",{ref:u,className:"group/editor-slider flex flex-nowrap items-center gap-2",...f},g&&a.createElement("label",{className:"mr-2 text-sm text-[#B2B5BD] group-hover/editor-slider:text-[#D3D5D9]",htmlFor:b},g),h&&a.createElement(A,{content:h},a.createElement(x,{className:E("h-5 w-5","text-[#A0A1A2]")})),a.createElement("input",{id:b,min:r,max:s,value:t,onChange:e=>c(e.target.value),onKeyDown:e=>{e.key==="ArrowUp"?c(t+l+""):e.key==="ArrowDown"&&c(t-l+"")},onBlur:()=>i==null?void 0:i(t),className:"m-0 h-8 w-14 rounded bg-[#141619] text-center text-sm font-normal leading-[21px] text-[#9CA0AA] group-hover/editor-slider:bg-[#191B1F] group-hover/editor-slider:text-[#F5F5F5]","data-testid":"slider-text-value-input"}),a.createElement("input",{id:"slider"+b,min:r,max:s,value:t,onChange:z,onPointerUp:()=>i==null?void 0:i(t),step:l,type:"range",style:{width:k+"px",background:`linear-gradient(to right, #375DAF ${p}%, #191B1F ${p}%)`},className:`h-8 min-w-20 cursor-pointer appearance-none overflow-hidden rounded bg-[#191B1F] focus:outline-none
          disabled:pointer-events-none disabled:opacity-50
          [&::-moz-range-progress]:bg-[#375DAF]
          [&::-moz-range-thumb]:h-full
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:rounded
          [&::-moz-range-thumb]:bg-[#879ECF]
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:duration-150
          [&::-moz-range-thumb]:ease-in-out
          group-hover/editor-slider:[&::-moz-range-thumb]:bg-[#AFBEDF]
          [&::-moz-range-track]:h-full
          [&::-moz-range-track]:w-full
          [&::-moz-range-track]:rounded
          [&::-moz-range-track]:bg-[#191B1F]
          [&::-webkit-slider-runnable-track]:h-full
          [&::-webkit-slider-runnable-track]:w-full
          [&::-webkit-slider-runnable-track]:rounded
          [&::-webkit-slider-thumb]:h-full
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded
          [&::-webkit-slider-thumb]:bg-[#879ECF]
          [&::-webkit-slider-thumb]:transition-all
          [&::-webkit-slider-thumb]:duration-150
          [&::-webkit-slider-thumb]:ease-in-out
          group-hover/editor-slider:[&::-webkit-slider-thumb]:bg-[#AFBEDF]
        `,"data-testid":"slider-draggable-value-input"}))};export{M as S};
