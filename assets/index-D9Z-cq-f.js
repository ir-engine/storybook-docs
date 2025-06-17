import{u as z}from"./WebRTCTransportFunctions-mB_FREj1.js";import{r as f,R as r}from"./index-DPzuYzxM.js";import{L as N}from"./index-YWE9xQ_z.js";import{T as E}from"./index-DNUDjAZy.js";const M=({value:e,label:s,info:c,description:V,units:g,min:n=0,max:l=100,step:d=1,onChange:i,onRelease:a,...x})=>{const p=f.useId(),y=f.useRef(null),m=z(e),b=t=>{var k;const o=((k=d.toString().split(".")[1])==null?void 0:k.length)||0;let u=parseFloat(t);isNaN(u)?u=n:u=Math.min(Math.max(u,n),l);const w=+u.toFixed(o);m.set(w),i==null||i(w)},v=t=>{const o=parseFloat(t.target.value);m.set(o),i==null||i(o)},h=Math.round((m.value-n)/(l-n)*100);return r.createElement("div",{ref:y,className:"group/editor-slider grid w-full grid-cols-1 gap-y-4",...x},(s||c)&&r.createElement("div",{className:"flex w-full justify-between"},s&&r.createElement("label",{className:"text-sm text-text-tertiary group-hover/editor-slider:text-text-primary"},s),c&&r.createElement(E,{content:c},r.createElement(N,{className:"h-5 w-5 text-text-inactive group-hover/editor-slider:text-text-primary"}))),r.createElement("div",{className:"flex w-full items-center justify-between gap-x-2"},r.createElement("input",{id:p,min:n,max:l,value:g?`${e} ${g}`:e,onChange:t=>{const o=t.target.value.replace(/[^\d.-]/g,"");b(o)},onKeyDown:t=>{t.key==="ArrowUp"?b(e+d+""):t.key==="ArrowDown"&&b(e-d+"")},onBlur:()=>a==null?void 0:a(e),className:"m-0 h-8 w-14 rounded bg-ui-background text-center text-sm font-normal text-text-tertiary outline-none group-hover/editor-slider:bg-ui-hover-background group-hover/editor-slider:text-text-primary group-focus/editor-slider:bg-ui-select-background group-focus/editor-slider:text-text-primary","data-testid":"slider-text-value-input"}),r.createElement("input",{id:"slider"+p,min:n,max:l,value:e,onChange:v,onPointerUp:()=>a==null?void 0:a(e),step:d,type:"range",style:{background:`linear-gradient(to right, var(--ui-inactive-secondary) ${h}%, var(--ui-background) ${h}%)`},className:`h-8 w-full min-w-20 cursor-pointer appearance-none overflow-hidden rounded bg-ui-background outline-none
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
