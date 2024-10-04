import{R as o}from"./index-CBqU2yxZ.js";import{t as c}from"./tw-merge-Ds6tgvmq.js";const p=({value:r,min:t=0,max:a=100,step:d=1,width:s=200,onChange:i,onRelease:n,className:b})=>{const m=l=>{let e=parseFloat(l.target.value);isNaN(e)?e=t:e=Math.min(Math.max(e,t),a),i(e)},g=l=>{const e=parseFloat(l.target.value);i(e)},u=Math.round((r-t)/(a-t)*100),h={background:`linear-gradient(to right, #214AA6 ${u}%, #191B1F ${u}%)`};return o.createElement("div",{className:"flex flex-nowrap items-center gap-2"},o.createElement("input",{min:t,max:a,value:r,onChange:m,onBlur:()=>n&&n(r),className:"h-8 w-14 rounded bg-neutral-900 text-center text-sm font-normal leading-[21px] text-neutral-400","data-testid":"slider-text-value-input"}),o.createElement("input",{id:"slider",min:t,max:a,value:r,onChange:g,onPointerUp:()=>n&&n(r),step:d,type:"range",style:h,className:c(`w-[${s}px] h-8 cursor-pointer appearance-none overflow-hidden rounded bg-[#111113] focus:outline-none
          disabled:pointer-events-none disabled:opacity-50
          [&::-moz-range-progress]:bg-[#214AA6]
          [&::-moz-range-thumb]:h-full
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:rounded
          [&::-moz-range-thumb]:bg-[#849ED6]
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:duration-150
          [&::-moz-range-thumb]:ease-in-out
          [&::-moz-range-track]:h-full
          [&::-moz-range-track]:w-full
          [&::-moz-range-track]:rounded
          [&::-moz-range-track]:bg-[#111113]
          [&::-webkit-slider-runnable-track]:h-full
          [&::-webkit-slider-runnable-track]:w-full
          [&::-webkit-slider-runnable-track]:rounded
          [&::-webkit-slider-thumb]:h-full
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded
          [&::-webkit-slider-thumb]:bg-[#849ED6]
          [&::-webkit-slider-thumb]:transition-all
          [&::-webkit-slider-thumb]:duration-150
          [&::-webkit-slider-thumb]:ease-in-out`,b),"data-testid":"slider-draggable-value-input"}))};p.defaultProps={min:0,max:100,step:1,value:60};export{p as S};
