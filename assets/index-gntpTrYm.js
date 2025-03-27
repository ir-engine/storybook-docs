import{c as v}from"./ActionFunctions-YlXH-jZf.js";import{r as k,R as t}from"./index-qyj2ZBCg.js";import{L as z}from"./index-DnzKDCCs.js";import{T as N}from"./index-CRosTSeg.js";const M=({value:r,label:s,info:c,description:E,min:n=0,max:u=100,step:l=1,onChange:i,onRelease:a,...f})=>{const g=k.useId(),x=k.useRef(null),m=v(r),b=e=>{var w;const d=((w=l.toString().split(".")[1])==null?void 0:w.length)||0;let o=parseFloat(e);isNaN(o)?o=n:o=Math.min(Math.max(o,n),u);const h=+o.toFixed(d);m.set(h),i==null||i(h)},y=e=>{const d=parseFloat(e.target.value);m.set(d),i==null||i(d)},p=Math.round((m.value-n)/(u-n)*100);return t.createElement("div",{ref:x,className:"group/editor-slider grid w-full grid-cols-1 gap-y-4",...f},(s||c)&&t.createElement("div",{className:"flex w-full justify-between"},s&&t.createElement("label",{className:"text-sm text-text-tertiary group-hover/editor-slider:text-text-primary"},s),c&&t.createElement(N,{content:c},t.createElement(z,{className:"h-5 w-5 text-text-inactive group-hover/editor-slider:text-text-primary"}))),t.createElement("div",{className:"flex w-full items-center justify-between gap-x-2"},t.createElement("input",{id:g,min:n,max:u,value:r,onChange:e=>b(e.target.value),onKeyDown:e=>{e.key==="ArrowUp"?b(r+l+""):e.key==="ArrowDown"&&b(r-l+"")},onBlur:()=>a==null?void 0:a(r),className:"m-0 h-8 w-14 rounded bg-ui-background text-center text-sm font-normal text-text-tertiary outline-none group-hover/editor-slider:bg-ui-hover-background group-hover/editor-slider:text-text-primary group-focus/editor-slider:bg-ui-select-background group-focus/editor-slider:text-text-primary","data-testid":"slider-text-value-input"}),t.createElement("input",{id:"slider"+g,min:n,max:u,value:r,onChange:y,onPointerUp:()=>a==null?void 0:a(r),step:l,type:"range",style:{background:`linear-gradient(to right, var(--ui-inactive-secondary) ${p}%, var(--ui-background) ${p}%)`},className:`h-8 w-full min-w-20 cursor-pointer appearance-none overflow-hidden rounded bg-ui-background outline-none
          disabled:pointer-events-none disabled:bg-ui-inactive-background
          [&::-moz-range-progress]:bg-ui-primary

          [&::-moz-range-thumb]:h-full
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:appearance-none
          [&::-moz-range-thumb]:rounded
          [&::-moz-range-thumb]:bg-ui-primary
          [&::-moz-range-thumb]:transition-all
          [&::-moz-range-thumb]:duration-150
          [&::-moz-range-thumb]:ease-in-out
          group-hover/editor-slider:[&::-moz-range-thumb]:bg-ui-hover-primary
          [&::-moz-range-track]:h-full
          [&::-moz-range-track]:w-full
          [&::-moz-range-track]:rounded
          [&::-moz-range-track]:bg-ui-background
          [&::-webkit-slider-runnable-track]:h-full
          [&::-webkit-slider-runnable-track]:w-full
          [&::-webkit-slider-runnable-track]:rounded
          [&::-webkit-slider-thumb]:h-full
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded
          [&::-webkit-slider-thumb]:bg-ui-primary
          [&::-webkit-slider-thumb]:transition-colors
          [&::-webkit-slider-thumb]:duration-150
          [&::-webkit-slider-thumb]:ease-in-out
          group-hover/editor-slider:[&::-webkit-slider-thumb]:bg-ui-hover-primary
        `,"data-testid":"slider-draggable-value-input"})))};export{M as S};
