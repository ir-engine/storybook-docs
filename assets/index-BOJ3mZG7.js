import{i as H}from"./isMobile-BLmM03m4.js";import{R as o,r as n}from"./index-qyj2ZBCg.js";import{h as I}from"./index-BJS_cBqw.js";import{t as $}from"./tw-merge-Ds6tgvmq.js";function W({title:m,content:g,children:w,fullWidth:L=!1,position:h="auto",isControlled:b=!1,...s},T){const[S,N]=n.useState("bottom"),[k,P]=n.useState({top:0,left:0}),[i,c]=n.useState("hidden"),f=n.useRef(null),u=n.useRef(null);n.useImperativeHandle(T,()=>({showTooltip:v,hideTooltip:x}),[]);const p=()=>{if(!f.current||!u.current)return null;const t=u.current.getBoundingClientRect();let r=h,a=0,l=0;const e=f.current.getBoundingClientRect(),z=window.innerWidth,B=window.innerHeight,E=e.top,R=B-e.bottom,M=e.left,y=z-e.right;if(h==="auto"){const d=Math.max(E,R,M,y);d===E?r="top":d===R?r="bottom":d===M?r="left":d===y&&(r="right")}switch(N(r),r){case"top":a=e.top-t.height-8,l=e.left+e.width/2-t.width/2;break;case"bottom":a=e.bottom+6,l=e.left+e.width/2-t.width/2;break;case"left":a=e.top+e.height/2-t.height/2,l=e.left-t.width-6;break;case"right":a=e.top+e.height/2-t.height/2,l=e.right+6;break;default:a=e.bottom+6,l=e.left+e.width/2-t.width/2;break}P({top:a,left:l})},v=()=>{b?"onMouseEnter"in s&&s.onMouseEnter&&s.onMouseEnter()&&c("calculating"):i==="hidden"&&c("calculating")},x=()=>{b?"onMouseLeave"in s&&s.onMouseLeave&&!s.onMouseLeave()&&c("hidden"):i!=="hidden"&&c("hidden")};return n.useEffect(()=>{const t=()=>{i&&p()};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[i]),n.useEffect(()=>{i&&p()},[h]),n.useEffect(()=>{i==="calculating"&&f.current&&u.current&&(p(),c("visible"))},[i,m,g]),H?o.createElement(o.Fragment,null,w):o.createElement("div",{ref:f,className:$(L?"w-full":"max-w-max","group relative flex flex-col items-center justify-center"),onMouseEnter:v,onMouseLeave:x},w,i!=="hidden"&&I.createPortal(o.createElement("div",{ref:u,className:`tooltip ${i==="visible"?"tooltip-visible":""} absolute min-w-max transition-transform duration-150`,style:{...k,zIndex:9999,position:"absolute"}},o.createElement("div",{className:"relative flex max-w-xs flex-col items-center shadow-lg"},o.createElement("div",{className:`tooltip-arrow absolute tooltip-arrow-${S} h-3 w-3 rotate-45 transform bg-surface-4`}),o.createElement("div",{className:"rounded border border-ui-outline bg-surface-4 px-4 py-2 text-center text-xs text-text-primary"},m&&o.createElement("div",{className:"mb-1 text-sm font-semibold text-text-primary"},m),o.createElement("div",null,g)))),document.body))}const q=o.forwardRef(W);export{q as T};
