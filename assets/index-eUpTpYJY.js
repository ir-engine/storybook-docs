import{R as t,r}from"./index-qyj2ZBCg.js";import{b as w}from"./ZoomOutSm-DAXDZ42X.js";import{T as v}from"./index-CDAcq9gd.js";import{t as N}from"./tw-merge-Ds6tgvmq.js";const p={xs:"h-6 py-0.5 px-2",l:"h-8 py-1.5 px-2",xl:"h-10 py-2.5 px-2"},D=({height:o="l",startComponent:i,endComponent:a,state:s,helperText:f,labelProps:e,required:d,id:u,fullWidth:l,...E},h)=>{const A=r.useId(),x=u||A,c=r.useRef(null),[g,m]=r.useState("");return r.useLayoutEffect(()=>{const n=()=>{(e==null?void 0:e.position)==="left"&&c.current?m(`${c.current.offsetWidth+8}px`):m("")};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[e]),t.createElement("div",{className:`flex flex-col gap-y-2 ${l?"w-full":"w-fit"}`},t.createElement("div",{className:`flex ${(e==null?void 0:e.position)==="top"&&"flex-col gap-y-2"} ${(e==null?void 0:e.position)==="left"&&"flex-row items-center gap-x-2"}`},(e==null?void 0:e.text)&&t.createElement("label",{htmlFor:x,className:"block text-xs font-medium",ref:c},t.createElement("div",{className:"flex flex-row items-center gap-x-1.5"},t.createElement("div",{className:"flex flex-row items-center gap-x-0.5"},d&&t.createElement("span",{className:"text-sm text-[#E11D48]"},"*"),t.createElement("span",{className:"text-xs text-[#D3D5D9]"},e.text)),(e==null?void 0:e.infoText)&&t.createElement(v,{content:e.infoText},t.createElement(w,{className:"text-[#9CA0AA]"})))),t.createElement("div",{className:N("flex w-full items-center gap-x-2 rounded-md border-[0.5px] border-[#42454D] bg-[#141619] transition-colors duration-300",p[o],"hover:border-[#9CA0AA] hover:bg-[#191B1F]","has-[:focus]:border-[#375DAF] has-[:focus]:outline-none","has-[:disabled]:border-[#42454D] has-[:disabled]:bg-[#191B1F]",s==="success"&&"border-[#10B981]",s==="error"&&"border-[#C3324B]")},t.createElement("input",{spellCheck:!1,className:"peer order-2 h-full w-full bg-[#141619] text-[#9CA0AA] outline-none autofill:bg-red-500 focus:bg-[#141619] focus:text-[#F5F5F5] focus-visible:bg-[#141619] disabled:text-[#6B6F78]",ref:h,id:x,...E}),i&&t.createElement("div",{className:"order-1 flex items-center justify-center text-[#9CA0AA] peer-disabled:text-[#42454D]"},i),a&&t.createElement("div",{className:"order-3 flex items-center justify-center text-[#9CA0AA] peer-disabled:text-[#42454D]"},a))),f&&t.createElement("span",{className:`text-xs ${s==="success"&&"text-[#0D9467]"} ${s==="error"&&"text-[#C3324B]"}`,style:{translate:g}},f))},C=t.forwardRef(D);export{C as I,p as h};