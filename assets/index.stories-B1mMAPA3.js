import{r as C,R as A}from"./index-qyj2ZBCg.js";import{j as b}from"./jsx-runtime-xkaXTYnY.js";import{C as $}from"./three.module-Bzl3_Dr8.js";import{T as de}from"./index-FGFUspbx.js";import{t as X}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";function S(e,t){if(e==null)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;r[a]=e[a]}return r}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(null,arguments)}var B=255,N=100,D=e=>{var{r:t,g:r,b:a,a:l}=e,o=Math.max(t,r,a),i=o-Math.min(t,r,a),n=i?o===t?(r-a)/i:o===r?2+(a-t)/i:4+(t-r)/i:0;return{h:60*(n<0?n+6:n),s:o?i/o*N:0,v:o/B*N,a:l}},ee=e=>{var{h:t,s:r,l:a,a:l}=re(e);return"hsla("+t+", "+r+"%, "+a+"%, "+l+")"},re=e=>{var{h:t,s:r,v:a,a:l}=e,o=(200-r)*a/N;return{h:t,s:o>0&&o<200?r*a/N/(o<=N?o:200-o)*N:0,l:o/2,a:l}},ae=e=>{var{r:t,g:r,b:a}=e,l=t<<16|r<<8|a;return"#"+(o=>new Array(7-o.length).join("0")+o)(l.toString(16))},he=e=>{var{r:t,g:r,b:a,a:l}=e,o=typeof l=="number"&&(l*255|256).toString(16).slice(1);return""+ae({r:t,g:r,b:a})+(o||"")},M=e=>D(ue(e)),ue=e=>{var t=e.replace("#","");/^#?/.test(e)&&t.length===3&&(e="#"+t.charAt(0)+t.charAt(0)+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2));var r=new RegExp("[A-Za-z0-9]{2}","g"),[a,l,o=0,i]=e.match(r).map(n=>parseInt(n,16));return{r:a,g:l,b:o,a:(i??255)/B}},H=e=>{var{h:t,s:r,v:a,a:l}=e,o=t/60,i=r/N,n=a/N,p=Math.floor(o)%6,h=o-Math.floor(o),x=B*n*(1-i),m=B*n*(1-i*h),g=B*n*(1-i*(1-h));n*=B;var s={};switch(p){case 0:s.r=n,s.g=g,s.b=x;break;case 1:s.r=m,s.g=n,s.b=x;break;case 2:s.r=x,s.g=n,s.b=g;break;case 3:s.r=x,s.g=m,s.b=n;break;case 4:s.r=g,s.g=x,s.b=n;break;case 5:s.r=n,s.g=x,s.b=m;break}return s.r=Math.round(s.r),s.g=Math.round(s.g),s.b=Math.round(s.b),c({},s,{a:l})},pe=e=>{var{r:t,g:r,b:a,a:l}=H(e);return"rgba("+t+", "+r+", "+a+", "+l+")"},ve=e=>{var{r:t,g:r,b:a}=e;return{r:t,g:r,b:a}},ge=e=>{var{h:t,s:r,l:a}=e;return{h:t,s:r,l:a}},F=e=>ae(H(e)),fe=e=>{var{h:t,s:r,v:a}=e;return{h:t,s:r,v:a}},be=e=>{var{r:t,g:r,b:a}=e,l=function(x){return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)},o=l(t/255),i=l(r/255),n=l(a/255),p={};return p.x=o*.4124+i*.3576+n*.1805,p.y=o*.2126+i*.7152+n*.0722,p.bri=o*.0193+i*.1192+n*.9505,p},P=e=>{var t,r,a,l,o,i,n,p,h;return typeof e=="string"&&G(e)?(i=M(e),p=e):typeof e!="string"&&(i=e),i&&(a=fe(i),o=re(i),l=H(i),h=he(l),p=F(i),r=ge(o),t=ve(l),n=be(t)),{rgb:t,hsl:r,hsv:a,rgba:l,hsla:o,hsva:i,hex:p,hexa:h,xy:n}},G=e=>/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e);function U(e){var t=C.useRef(e);return C.useEffect(()=>{t.current=e}),C.useCallback((r,a)=>t.current&&t.current(r,a),[])}var L=e=>"touches"in e,W=e=>{!L(e)&&e.preventDefault&&e.preventDefault()},z=function(t,r,a){return r===void 0&&(r=0),a===void 0&&(a=1),t>a?a:t<r?r:t},Q=(e,t)=>{var r=e.getBoundingClientRect(),a=L(t)?t.touches[0]:t;return{left:z((a.pageX-(r.left+window.pageXOffset))/r.width),top:z((a.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:a.pageX-(r.left+window.pageXOffset),y:a.pageY-(r.top+window.pageYOffset)}},xe=["prefixCls","className","onMove","onDown"],Y=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-interactive",className:a,onMove:l,onDown:o}=e,i=S(e,xe),n=C.useRef(null),p=C.useRef(!1),[h,x]=C.useState(!1),m=U(l),g=U(o),s=v=>p.current&&!L(v)?!1:(p.current=L(v),!0),w=C.useCallback(v=>{if(W(v),!!n.current){var k=L(v)?v.touches.length>0:v.buttons>0;if(!k){x(!1);return}m==null||m(Q(n.current,v),v)}},[m]),f=C.useCallback(()=>x(!1),[]),d=C.useCallback(v=>{v?(window.addEventListener(p.current?"touchmove":"mousemove",w),window.addEventListener(p.current?"touchend":"mouseup",f)):(window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",f),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",f))},[w,f]);C.useEffect(()=>(d(h),()=>{d(!1)}),[h,w,f,d]);var u=C.useCallback(v=>{W(v.nativeEvent),s(v.nativeEvent)&&n.current&&(g==null||g(Q(n.current,v.nativeEvent),v.nativeEvent),x(!0))},[g]);return b.jsx("div",c({},i,{className:[r,a||""].filter(Boolean).join(" "),style:c({},i.style,{touchAction:"none"}),ref:n,tabIndex:0,onMouseDown:u,onTouchStart:u}))});Y.displayName="Interactive";var me=e=>{var{className:t,color:r,left:a,top:l,prefixCls:o}=e,i={position:"absolute",top:l,left:a},n={"--saturation-pointer-box-shadow":"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"var(--saturation-pointer-box-shadow)",borderRadius:"50%",backgroundColor:r};return C.useMemo(()=>b.jsx("div",{className:o+"-pointer "+(t||""),style:i,children:b.jsx("div",{className:o+"-fill",style:n})}),[l,a,r,t,o])},we=["prefixCls","radius","pointer","className","hue","style","hsva","onChange"],te=A.forwardRef((e,t)=>{var r,{prefixCls:a="w-color-saturation",radius:l=0,pointer:o,className:i,hue:n=0,style:p,hsva:h,onChange:x}=e,m=S(e,we),g=c({width:200,height:200,borderRadius:l},p,{position:"relative"}),[s,w]=C.useState({left:0,top:0,x:0,y:0,width:0,height:0}),f=(u,v)=>{w(u),x&&h&&x({h:h.h,s:u.left*100,v:(1-u.top)*100,a:h.a})},d=C.useMemo(()=>{if(!h)return null;var u=z(s.x,0,s.width)+"px",v=z(s.y,0,s.height)+"px";(s.width===0||s.height===0)&&(u=h.s+"%",v=100-h.v+"%");var k={top:v,left:u,color:ee(h)};return o&&typeof o=="function"?o(c({prefixCls:a},k)):b.jsx(me,c({prefixCls:a},k))},[h,s,o,a]);return b.jsx(Y,c({className:[a,i||""].filter(Boolean).join(" ")},m,{style:c({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+((r=h==null?void 0:h.h)!=null?r:n)+", 100%, 50%))"},g),ref:t,onMove:f,onDown:f,children:d}))});te.displayName="Saturation";var ye=["className","prefixCls","left","top","style","fillProps"],Ce=e=>{var{className:t,prefixCls:r,left:a,top:l,style:o,fillProps:i}=e,n=S(e,ye),p=c({},o,{position:"absolute",left:a,top:l}),h=c({width:18,height:18,boxShadow:"var(--alpha-pointer-box-shadow)",borderRadius:"50%",backgroundColor:"var(--alpha-pointer-background-color)"},i==null?void 0:i.style,{transform:a?"translate(-9px, -1px)":"translate(-1px, -9px)"});return b.jsx("div",c({className:r+"-pointer "+(t||""),style:p},n,{children:b.jsx("div",c({className:r+"-fill"},i,{style:h}))}))},Ae=["prefixCls","className","hsva","background","bgProps","innerProps","pointerProps","radius","width","height","direction","style","onChange","pointer"],ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==",O=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-alpha",className:a,hsva:l,background:o,bgProps:i={},innerProps:n={},pointerProps:p={},radius:h=0,width:x,height:m=16,direction:g="horizontal",style:s,onChange:w,pointer:f}=e,d=S(e,Ae),u=R=>{w&&w(c({},l,{a:g==="horizontal"?R.left:R.top}),R)},v=ee(Object.assign({},l,{a:1})),k="linear-gradient(to "+(g==="horizontal"?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+v+" 100%)",j={};g==="horizontal"?j.left=l.a*100+"%":j.top=l.a*100+"%";var E=c({"--alpha-background-color":"#fff","--alpha-pointer-background-color":"rgb(248, 248, 248)","--alpha-pointer-box-shadow":"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:h,background:"url("+ke+") left center",backgroundColor:"var(--alpha-background-color)"},{width:x,height:m},s,{position:"relative"}),y=f&&typeof f=="function"?f(c({prefixCls:r},p,j)):b.jsx(Ce,c({},p,{prefixCls:r},j));return b.jsxs("div",c({},d,{className:[r,r+"-"+g,a||""].filter(Boolean).join(" "),style:E,ref:t,children:[b.jsx("div",c({},i,{style:c({inset:0,position:"absolute",background:o||k,borderRadius:h},i.style)})),b.jsx(Y,c({},n,{style:c({},n.style,{inset:0,zIndex:1,position:"absolute"}),onMove:u,onDown:u,children:y}))]}))});O.displayName="Alpha";var Re=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur","renderInput"],je=e=>/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e),Se=e=>Number(String(e).replace(/%/g,"")),T=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-editable-input",placement:a="bottom",label:l,value:o,className:i,style:n,labelStyle:p,inputStyle:h,onChange:x,onBlur:m,renderInput:g}=e,s=S(e,Re),[w,f]=C.useState(o),d=C.useRef(!1);C.useEffect(()=>{e.value!==w&&(d.current||f(e.value))},[e.value]);function u(R,ce){var _=(ce||R.target.value).trim().replace(/^#/,"");je(_)&&x&&x(R,_);var V=Se(_);isNaN(V)||x&&x(R,V),f(_)}function v(R){d.current=!1,f(e.value),m&&m(R)}var k={};a==="bottom"&&(k.flexDirection="column"),a==="top"&&(k.flexDirection="column-reverse"),a==="left"&&(k.flexDirection="row-reverse");var j=c({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},k,n),E=c({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},h),y=c({value:w,onChange:u,onBlur:v,autoComplete:"off",onFocus:()=>d.current=!0},s,{style:E});return b.jsxs("div",{className:[r,i||""].filter(Boolean).join(" "),style:j,children:[g?g(y,t):b.jsx("input",c({ref:t},y)),l&&b.jsx("span",{style:c({color:"var(--editable-input-label-color)",textTransform:"capitalize"},p),children:l})]})});T.displayName="EditableInput";var Ne=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],oe=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-editable-input-rgba",hsva:a,placement:l="bottom",rProps:o={},gProps:i={},bProps:n={},aProps:p={},className:h,style:x,onChange:m}=e,g=S(e,Ne),s=a?H(a):{};function w(d){var u=Number(d.target.value);u&&u>255&&(d.target.value="255"),u&&u<0&&(d.target.value="0")}var f=(d,u,v)=>{typeof d=="number"&&(u==="a"&&(d<0&&(d=0),d>100&&(d=100),m&&m(P(D(c({},s,{a:d/100}))))),d>255&&(d=255,v.target.value="255"),d<0&&(d=0,v.target.value="0"),u==="r"&&m&&m(P(D(c({},s,{r:d})))),u==="g"&&m&&m(P(D(c({},s,{g:d})))),u==="b"&&m&&m(P(D(c({},s,{b:d})))))};return b.jsxs("div",c({ref:t,className:[r,h||""].filter(Boolean).join(" ")},g,{style:c({fontSize:11,display:"flex"},x),children:[b.jsx(T,c({label:"R",value:s.r||0,onBlur:w,placement:l,onChange:(d,u)=>f(u,"r",d)},o,{style:c({},o.style)})),b.jsx(T,c({label:"G",value:s.g||0,onBlur:w,placement:l,onChange:(d,u)=>f(u,"g",d)},i,{style:c({marginLeft:5},o.style)})),b.jsx(T,c({label:"B",value:s.b||0,onBlur:w,placement:l,onChange:(d,u)=>f(u,"b",d)},n,{style:c({marginLeft:5},n.style)})),p&&b.jsx(T,c({label:"A",value:s.a?parseInt(String(s.a*100),10):0,onBlur:w,placement:l,onChange:(d,u)=>f(u,"a",d)},p,{style:c({marginLeft:5},p.style)}))]}))});oe.displayName="EditableInputRGBA";var Ee=["prefixCls","className","hue","onChange","direction"],ne=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-hue",className:a,hue:l=0,onChange:o,direction:i="horizontal"}=e,n=S(e,Ee);return b.jsx(O,c({ref:t,className:r+" "+(a||"")},n,{direction:i,background:"linear-gradient(to "+(i==="horizontal"?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:l,s:100,v:100,a:l/360},onChange:(p,h)=>{o&&o({h:i==="horizontal"?360*h.left:360*h.top})}}))});ne.displayName="Hue";var Be=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],le=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-swatch",className:a,color:l,colors:o=[],style:i,rectProps:n={},onChange:p,addonAfter:h,addonBefore:x,rectRender:m}=e,g=S(e,Be),s=c({"--swatch-background-color":"rgb(144, 19, 254)",background:"var(--swatch-background-color)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},n.style),w=(f,d)=>{p&&p(M(f),P(M(f)),d)};return b.jsxs("div",c({ref:t},g,{className:[r,a||""].filter(Boolean).join(" "),style:c({display:"flex",flexWrap:"wrap",position:"relative"},i),children:[x&&A.isValidElement(x)&&x,o&&Array.isArray(o)&&o.map((f,d)=>{var u="",v="";typeof f=="string"&&(u=f,v=f),typeof f=="object"&&f.color&&(u=f.title||f.color,v=f.color);var k=l&&l.toLocaleLowerCase()===v.toLocaleLowerCase(),j=m&&m({title:u,color:v,checked:!!k,style:c({},s,{background:v}),onClick:y=>w(v,y)});if(j)return b.jsx(C.Fragment,{children:j},d);var E=n.children&&A.isValidElement(n.children)?A.cloneElement(n.children,{color:v,checked:k}):null;return b.jsx("div",c({tabIndex:0,title:u,onClick:y=>w(v,y)},n,{children:E,style:c({},s,{background:v})}),d)}),h&&A.isValidElement(h)&&h]}))});le.displayName="Swatch";var Pe=["prefixCls","className","onChange","width","presetColors","color","editableDisable","disableAlpha","style"],Te=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],J=e=>b.jsx("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}}),se=A.forwardRef((e,t)=>{var{prefixCls:r="w-color-sketch",className:a,onChange:l,width:o=218,presetColors:i=Te,color:n,editableDisable:p=!0,disableAlpha:h=!1,style:x}=e,m=S(e,Pe),[g,s]=C.useState({h:209,s:36,v:90,a:1});C.useEffect(()=>{typeof n=="string"&&G(n)&&s(M(n)),typeof n=="object"&&s(n)},[n]);var w=y=>{s(y),l&&l(P(y))},f=(y,R)=>{typeof y=="string"&&G(y)&&/(3|6)/.test(String(y.length))&&w(M(y))},d=y=>w(c({},g,{a:y.a})),u=y=>w(c({},g,y,{a:g.a})),v=c({"--sketch-background":"rgb(255, 255, 255)","--sketch-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px","--sketch-swatch-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset","--sketch-alpha-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset","--sketch-swatch-border-top":"1px solid rgb(238, 238, 238)",background:"var(--sketch-background)",borderRadius:4,boxShadow:"var(--sketch-box-shadow)",width:o},x),k={borderRadius:2,background:pe(g),boxShadow:"var(--sketch-alpha-box-shadow)"},j={borderTop:"var(--sketch-swatch-border-top)",paddingTop:10,paddingLeft:10},E={marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"var(--sketch-swatch-box-shadow)"};return b.jsxs("div",c({},m,{className:r+" "+(a||""),ref:t,style:v,children:[b.jsxs("div",{style:{padding:"10px 10px 8px"},children:[b.jsx(te,{hsva:g,style:{width:"auto",height:150},onChange:u}),b.jsxs("div",{style:{display:"flex",marginTop:4},children:[b.jsxs("div",{style:{flex:1},children:[b.jsx(ne,{width:"auto",height:10,hue:g.h,pointer:J,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:y=>w(c({},g,y))}),!h&&b.jsx(O,{width:"auto",height:10,hsva:g,pointer:J,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:d})]}),!h&&b.jsx(O,{width:24,height:24,hsva:g,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:k},pointer:()=>b.jsx(C.Fragment,{})})]})]}),p&&b.jsxs("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[b.jsx(T,{label:"Hex",value:F(g).replace(/^#/,"").toLocaleUpperCase(),onChange:(y,R)=>f(R),style:{minWidth:58}}),b.jsx(oe,{hsva:g,style:{marginLeft:6},aProps:h?!1:{},onChange:y=>w(y.hsva)})]}),i&&i.length>0&&b.jsx(le,{style:j,colors:i,color:F(g),onChange:y=>w(y),rectProps:{style:E}})]}))});se.displayName="Sketch";function ie({value:e,onChange:t,onRelease:r,disabled:a,className:l,textClassName:o,sketchPickerClassName:i}){let n=new $(e);const p="#"+n.getHexString(),[h,x]=C.useState(!1),m=C.useRef(null),g=C.useRef(null),s=()=>{h||x(!0),w()},w=()=>{r&&r(n)},f=d=>{n=new $(d.hex),t(n)};return C.useEffect(()=>{const d=u=>{g.current&&!g.current.contains(u.target)&&m.current&&!m.current.contains(u.target)&&(x(!1),w())};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[p,r]),A.createElement("div",{tabIndex:0,ref:g,className:X("relative flex h-9 items-center gap-1 rounded-lg border-none bg-[#1A1A1A] px-2 text-xs text-[#8B8B8D]",a&&"cursor-not-allowed",l),onClick:s},A.createElement("div",{className:"focus: group h-5 w-5 cursor-pointer rounded border border-black",style:{backgroundColor:p}},h&&A.createElement("div",{ref:m},A.createElement(se,{className:X("absolute right-4 z-10 mt-5 ",i),color:p,onChange:f,disableAlpha:!0,onPointerLeave:()=>{w()}}))),A.createElement(de,{fontSize:"xs",className:o},p.toUpperCase()))}ie.defaultProps={value:new $,onChange:()=>{}};const Oe={title:"Primitives/Tailwind/Color",component:ie,parameters:{componentSubtitle:"Color",jest:"Color.test.tsx",design:{type:"figma",url:""}}},I={args:{}};var K,Z,q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {}
}`,...(q=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};const He=["Default"];export{I as Default,He as __namedExportsOrder,Oe as default};
