import{c as h,d as b}from"./ZoomOutSm-DAXDZ42X.js";import{R as t}from"./index-qyj2ZBCg.js";import{t as r}from"./tw-merge-Ds6tgvmq.js";const c={spacings:{md:"gap-x-2",lg:"gap-x-4"},checkboxSizes:{md:"h-4 w-4",lg:"h-5 w-5"},iconSizes:{md:"h-3 w-3",lg:"h-3.5 w-3.5"},textSizes:{md:"text-sm",lg:"text-base"},textLineHeight:{md:"leading-5",lg:"leading-6"},maxDescriptionWidth:{md:"max-w-[220px]",lg:"max-w-[252px]"}},f=({checked:s,disabled:e,indeterminate:n,label:x,description:l,onChange:m,variantSize:o="md",variantTextPlacement:g="right",...i},u)=>{const a=()=>{!e&&m&&m(!s)};return t.createElement("div",{className:r("relative flex cursor-pointer items-center","group/checkbox outline-none",c.spacings[o],g==="left"&&"flex-row-reverse",l&&"items-start"),onKeyDown:p=>{["Enter"," "].includes(p.key)&&a()},tabIndex:0,...i},t.createElement("div",{className:r("relative","grid place-items-center rounded",c.checkboxSizes[o],"border border-[#42454D] bg-[#141619] outline-none",!s&&!n&&!e&&"group-hover/checkbox:border-[#9CA0AA] group-hover/checkbox:bg-[#191B1F]",!s&&!e&&"group-focus/checkbox:border-[#375DAF] group-focus/checkbox:bg-[#212226]",(s||n)&&"border-[#375DAF] bg-[#212226]",e&&"cursor-not-allowed border-[#42454D] bg-[#191B1F]"),onClick:a,ref:u},t.createElement(h,{onClick:a,className:r("absolute transition-transform duration-200 ease-in-out",c.iconSizes[o],e?"cursor-not-allowed text-[#42454D]":"text-[#5F7DBF]",s?"scale-100":"scale-0")}),t.createElement(b,{onClick:a,className:r("absolute transition-transform duration-200 ease-in-out",c.iconSizes[o],e?"cursor-not-allowed text-[#42454D]":"text-[#5F7DBF]",n?"scale-100":"scale-0")})),x&&t.createElement("div",{className:r(c.textSizes[o],"cursor-pointer text-[#D3D5D9]",g==="left"&&"text-right",e&&"cursor-auto text-[#6B6F78]",l&&"grid gap-y-1",c.textLineHeight[o]),onClick:a},t.createElement("p",{className:r(!e&&"group-hover/checkbox:text-[#F5F5F5] group-focus/checkbox:text-[#F5F5F5]")},x),t.createElement("p",{className:r("block text-wrap",c.maxDescriptionWidth[o])},l)))},D=t.forwardRef(f);export{D as C};