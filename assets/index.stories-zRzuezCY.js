import{b as nt,kO as ot,aA as at,hA as st}from"./ZoomOutSm-3KI82Oqa.js";import{r as s,R as l}from"./index-qyj2ZBCg.js";import{u as it}from"./ActionFunctions-C6TpUFTu.js";import{F as Ie}from"./fuse-Ch1WBRTM.js";import{h as lt}from"./index-BJS_cBqw.js";import{D as ct}from"./index-CUe_xol8.js";import{h as ut}from"./index-D38_hTY9.js";import{T as ft}from"./index-BOJ3mZG7.js";import{t as _}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DEsV4xCt.js";import"./v4-BOvFkHkt.js";import"./index-ChBN-cH4.js";import"./iconBase-DbqO1Qqb.js";import"./isMobile-BLmM03m4.js";function se(){return se=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},se.apply(this,arguments)}var dt=function(e,o){o===void 0&&(o=!0),s.useEffect(function(){if(o){var n=function(d){d.key==="Escape"&&e(d)};return document.addEventListener("keyup",n),function(){o&&document.removeEventListener("keyup",n)}}},[e,o])},pt=function(e,o){o===void 0&&(o=!0),s.useEffect(function(){if(o){var n=function(){e()};return window.addEventListener("resize",n),function(){o&&window.removeEventListener("resize",n)}}},[e,o])},vt=function(e,o,n){n===void 0&&(n=!0),s.useEffect(function(){if(n){var y=function(p){var c=Array.isArray(e)?e:[e],v=!1;c.forEach(function(h){if(!h.current||h.current.contains(p.target)){v=!0;return}}),p.stopPropagation(),v||o(p)};return document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),function(){n&&(document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y))}}},[e,o,n])},mt=function(e,o){o===void 0&&(o=!0),s.useEffect(function(){if(o){var n=function(d){if(d.keyCode===9){var p,c=e==null||(p=e.current)===null||p===void 0?void 0:p.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),v=Array.prototype.slice.call(c);if(v.length===1){d.preventDefault();return}var h=v[0],T=v[v.length-1];d.shiftKey&&document.activeElement===h?(d.preventDefault(),T.focus()):document.activeElement===T&&(d.preventDefault(),h.focus())}};return document.addEventListener("keydown",n),function(){o&&document.removeEventListener("keydown",n)}}},[e,o])},ht=typeof window<"u"?s.useLayoutEffect:s.useEffect,ae={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},gt=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],yt=function(e,o,n,y,d){var p=d.offsetX,c=d.offsetY,v=y?8:0,h=n.split(" "),T=e.top+e.height/2,f=e.left+e.width/2,u=o.height,x=o.width,C=T-u/2,A=f-x/2,D="",k="0%",I="0%";switch(h[0]){case"top":C-=u/2+e.height/2+v,D="rotate(180deg)  translateX(50%)",k="100%",I="50%";break;case"bottom":C+=u/2+e.height/2+v,D="rotate(0deg) translateY(-100%) translateX(-50%)",I="50%";break;case"left":A-=x/2+e.width/2+v,D=" rotate(90deg)  translateY(50%) translateX(-25%)",I="100%",k="50%";break;case"right":A+=x/2+e.width/2+v,D="rotate(-90deg)  translateY(-150%) translateX(25%)",k="50%";break}switch(h[1]){case"top":C=e.top,k=e.height/2+"px";break;case"bottom":C=e.top-u+e.height,k=u-e.height/2+"px";break;case"left":A=e.left,I=e.width/2+"px";break;case"right":A=e.left-x+e.width,I=x-e.width/2+"px";break}return C=h[0]==="top"?C-c:C+c,A=h[0]==="left"?A-p:A+p,{top:C,left:A,transform:D,arrowLeft:I,arrowTop:k}},xt=function(e){var o={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof e=="string"){var n=document.querySelector(e);n!==null&&(o=n.getBoundingClientRect())}return o},wt=function(e,o,n,y,d,p){var c=d.offsetX,v=d.offsetY,h={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},T=0,f=xt(p),u=Array.isArray(n)?n:[n];for((p||Array.isArray(n))&&(u=[].concat(u,gt));T<u.length;){h=yt(e,o,u[T],y,{offsetX:c,offsetY:v});var x={top:h.top,left:h.left,width:o.width,height:o.height};if(x.top<=f.top||x.left<=f.left||x.top+x.height>=f.top+f.height||x.left+x.width>=f.left+f.width)T++;else break}return h},bt=0,Et=function(){var e=document.getElementById("popup-root");return e===null&&(e=document.createElement("div"),e.setAttribute("id","popup-root"),document.body.appendChild(e)),e},kt=s.forwardRef(function(t,e){var o=t.trigger,n=o===void 0?null:o,y=t.onOpen,d=y===void 0?function(){}:y,p=t.onClose,c=p===void 0?function(){}:p,v=t.defaultOpen,h=v===void 0?!1:v,T=t.open,f=T===void 0?void 0:T,u=t.disabled,x=u===void 0?!1:u,C=t.nested,A=C===void 0?!1:C,D=t.closeOnDocumentClick,k=D===void 0?!0:D,I=t.repositionOnResize,z=I===void 0?!0:I,Q=t.closeOnEscape,J=Q===void 0?!0:Q,X=t.on,M=X===void 0?["click"]:X,U=t.contentStyle,be=U===void 0?{}:U,Z=t.arrowStyle,W=Z===void 0?{}:Z,B=t.overlayStyle,Y=B===void 0?{}:B,le=t.className,F=le===void 0?"":le,R=t.position,ce=R===void 0?"bottom center":R,ue=t.modal,fe=ue===void 0?!1:ue,$=t.lockScroll,g=$===void 0?!1:$,V=t.arrow,K=V===void 0?!0:V,q=t.offsetX,ee=q===void 0?0:q,de=t.offsetY,Ee=de===void 0?0:de,a=t.mouseEnterDelay,r=a===void 0?100:a,m=t.mouseLeaveDelay,b=m===void 0?100:m,te=t.keepTooltipInside,pe=te===void 0?!1:te,re=t.children,ve=s.useState(f||h),N=ve[0],Se=ve[1],H=s.useRef(null),L=s.useRef(null),P=s.useRef(null),Ce=s.useRef(null),Re=s.useRef("popup-"+ ++bt),O=fe?!0:!n,ne=s.useRef(0);ht(function(){return N?(Ce.current=document.activeElement,Le(),Ze(),_e()):Qe(),function(){clearTimeout(ne.current)}},[N]),s.useEffect(function(){typeof f=="boolean"&&(f?me():j())},[f,x]);var me=function(i){N||x||(Se(!0),setTimeout(function(){return d(i)},0))},j=function(i){var S;!N||x||(Se(!1),O&&((S=Ce.current)===null||S===void 0||S.focus()),setTimeout(function(){return c(i)},0))},ke=function(i){i==null||i.stopPropagation(),N?j(i):me(i)},Te=function(i){clearTimeout(ne.current),ne.current=setTimeout(function(){return me(i)},r)},Ke=function(i){i==null||i.preventDefault(),ke()},Ae=function(i){clearTimeout(ne.current),ne.current=setTimeout(function(){return j(i)},b)},_e=function(){O&&g&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},Qe=function(){O&&g&&(document.getElementsByTagName("body")[0].style.overflow="auto")},Ze=function(){var i,S=L==null||(i=L.current)===null||i===void 0?void 0:i.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),w=Array.prototype.slice.call(S)[0];w==null||w.focus()};s.useImperativeHandle(e,function(){return{open:function(){me()},close:function(){j()},toggle:function(){ke()}}});var Le=function(){if(!(O||!N)&&!(!(H!=null&&H.current)||!(H!=null&&H.current)||!(L!=null&&L.current))){var i=H.current.getBoundingClientRect(),S=L.current.getBoundingClientRect(),w=wt(i,S,ce,K,{offsetX:ee,offsetY:Ee},pe);if(L.current.style.top=w.top+window.scrollY+"px",L.current.style.left=w.left+window.scrollX+"px",K&&P.current){var G,oe;P.current.style.transform=w.transform,P.current.style.setProperty("-ms-transform",w.transform),P.current.style.setProperty("-webkit-transform",w.transform),P.current.style.top=((G=W.top)===null||G===void 0?void 0:G.toString())||w.arrowTop,P.current.style.left=((oe=W.left)===null||oe===void 0?void 0:oe.toString())||w.arrowLeft}}};dt(j,J),mt(L,N&&O),pt(Le,z),vt(n?[L,H]:[L],j,k&&!A);var Be=function(){for(var i={key:"T",ref:H,"aria-describedby":Re.current},S=Array.isArray(M)?M:[M],w=0,G=S.length;w<G;w++)switch(S[w]){case"click":i.onClick=ke;break;case"right-click":i.onContextMenu=Ke;break;case"hover":i.onMouseEnter=Te,i.onMouseLeave=Ae;break;case"focus":i.onFocus=Te,i.onBlur=Ae;break}if(typeof n=="function"){var oe=n(N);return!!n&&l.cloneElement(oe,i)}return!!n&&l.cloneElement(n,i)},Ve=function(){var i=O?ae.popupContent.modal:ae.popupContent.tooltip,S={className:"popup-content "+(F!==""?F.split(" ").map(function(w){return w+"-content"}).join(" "):""),style:se({},i,be,{pointerEvents:"auto"}),ref:L,onClick:function(G){G.stopPropagation()}};return!fe&&M.indexOf("hover")>=0&&(S.onMouseEnter=Te,S.onMouseLeave=Ae),S},Oe=function(){return l.createElement("div",Object.assign({},Ve(),{key:"C",role:O?"dialog":"tooltip",id:Re.current}),K&&!O&&l.createElement("div",{ref:P,style:ae.popupArrow},l.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(F!==""?F.split(" ").map(function(i){return i+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:se({position:"absolute"},W)},l.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),re&&typeof re=="function"?re(j,N):re)},et=!(M.indexOf("hover")>=0),tt=O?ae.overlay.modal:ae.overlay.tooltip,rt=[et&&l.createElement("div",{key:"O","data-testid":"overlay","data-popup":O?"modal":"tooltip",className:"popup-overlay "+(F!==""?F.split(" ").map(function(E){return E+"-overlay"}).join(" "):""),style:se({},tt,Y,{pointerEvents:k&&A||O?"auto":"none"}),onClick:k&&A?j:void 0,tabIndex:-1},O&&Oe()),!O&&Oe()];return l.createElement(l.Fragment,null,Be(),N&&lt.createPortal(rt,Et()))});const Tt={sm:"240px",md:"320px",lg:"520px",full:"100%"},Ue=({options:t,width:e="md",inputHeight:o="l",onChange:n,onInputChange:y,onOpen:d,value:p,labelProps:c,state:v,helperText:h,required:T,disabled:f,searchMode:u,positioning:x,showClearButton:C=!1})=>{const[A,D]=s.useState({maxHeight:"0px",...x}),k=s.useRef(null),[I,z]=s.useState(""),[Q,J]=s.useState(-1),[X,M]=s.useState(-1),U=s.useRef(null),[be,Z]=s.useState(""),[W,B]=s.useState(""),Y=s.useRef(null),[le,F]=s.useState(!1),R=it(p),ce=s.useId(),[ue,fe]=s.useState(0),$=s.useRef(null),g=s.useMemo(()=>{if(W==="")return t;const a=W.toLowerCase();switch(u){case"prefix":return t.filter(r=>{var m,b;return((m=r==null?void 0:r.label)==null?void 0:m.toLowerCase().startsWith(a))||((b=r==null?void 0:r.secondaryText)==null?void 0:b.toLowerCase().startsWith(a))});case"substring":return t.filter(r=>{var m,b;return((m=r==null?void 0:r.label)==null?void 0:m.toLowerCase().includes(a))||((b=r==null?void 0:r.secondaryText)==null?void 0:b.toLowerCase().includes(a))});case"fuzzy":return Y.current||(Y.current=new Ie(t,{keys:["label","secondaryText"]})),Y.current.search(W).map(({item:m})=>m);default:return t}},[t,W,u]);s.useEffect(()=>{u==="fuzzy"&&Y.current!==null&&(Y.current=new Ie(t,{keys:["label","secondaryText"]}))},[u]),s.useEffect(()=>{R.set(p)},[p]),s.useLayoutEffect(()=>{const a=()=>{if(k.current&&x===void 0){const{top:r,bottom:m}=k.current.getBoundingClientRect(),b=window.innerHeight,te=r,pe=b-m,ve=(pe>=te?"down":"up")==="down"?.8*pe:.8*te;D({...A,maxHeight:`${ve}px`})}};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]),s.useLayoutEffect(()=>{const a=()=>{(c==null?void 0:c.position)==="left"&&U.current?Z(`${U.current.offsetWidth+8}px`):Z("")};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[c]),s.useEffect(()=>{B("")},[Q]),s.useEffect(()=>{if(g.length>0&&g.findIndex(r=>r.value===R.value)===-1&&u===void 0){console.warn("No corresponding option found. Defaulting to null."),z("");return}},[p,R,Q,g]),s.useEffect(()=>{if(g.length){const a=g.findIndex(r=>r.value===R.value);a!==-1&&z(g[a].label)}},[R,g]),s.useEffect(()=>{const a=document.getElementById(ce),r=()=>{a&&fe(a.offsetWidth)},m=new ResizeObserver(r);return a&&m.observe(a),r(),()=>{m.disconnect()}},[]);const V=s.useRef(null),K=()=>{$.current&&$.current.toggle()},q=()=>{$.current&&$.current.close()},ee=s.useRef(null),[de,Ee]=s.useState({});return s.useEffect(()=>{if(k.current&&ee.current){const a=k.current.getBoundingClientRect().top,r=ee.current.getBoundingClientRect().height;Ee({top:`${a-r-10}px`})}},[g]),l.createElement(kt,{trigger:a=>l.createElement("div",{id:ce,className:_("flex flex-col gap-y-2",e==="full"?"w-full":"w-fit")},l.createElement("div",{className:_("flex",e==="full"?"w-full":"w-fit",(c==null?void 0:c.position)==="top"&&"flex-col gap-y-2",(c==null?void 0:c.position)==="left"&&"flex-row items-center gap-x-2")},(c==null?void 0:c.text)&&l.createElement("label",{className:"block text-xs font-medium",ref:U},l.createElement("div",{className:"flex flex-row items-center gap-x-1.5"},l.createElement("div",{className:"flex flex-row items-center gap-x-0.5"},T&&l.createElement("span",{className:"text-sm text-ui-error"},"*"),l.createElement("span",{className:"text-xs text-text-secondary"},c.text)),(c==null?void 0:c.infoText)&&l.createElement(ft,{content:c.infoText},l.createElement(nt,{className:"text-text-tertiary"})))),l.createElement("div",{ref:k,className:"relative",style:{width:Tt[e]}},l.createElement("div",{tabIndex:0,className:_(`relative flex w-full items-center gap-x-2 rounded-md bg-ui-background text-text-tertiary ${ut[o]} border-[0.5px] border-ui-outline transition-colors duration-300`,f?"cursor-not-allowed bg-ui-inactive-background text-ui-inactive-outline":"hover:text-text-primary",v==="success"?"border-ui-success":"",v==="error"?"border-ui-error":"")},l.createElement("input",{ref:V,onClick:()=>{f||(K(),setTimeout(()=>{var r;return(r=V.current)==null?void 0:r.focus()},0))},type:"text",className:_("w-full bg-inherit text-text-secondary focus:border-transparent focus:outline-none focus:ring-0",f?"cursor-not-allowed":u===void 0?"cursor-pointer":"cursor-text"),"data-testid":"select-input",value:I,readOnly:u===void 0,onChange:r=>{$.current&&$.current.open(),z(r.target.value),B(r.target.value),y&&y(r.target.value)}}),C&&!f&&l.createElement(ot,{onClick:()=>{n("")},className:_(f?"cursor-not-allowed":"cursor-pointer","text-text-secondary")}),l.createElement(at,{onClick:()=>{f||K()},className:_(f?"cursor-not-allowed":"cursor-pointer",`${a&&!f&&"rotate-180"} text-text-secondary duration-300`)})))),h&&!a&&l.createElement("span",{className:`text-xs ${v==="success"&&"text-ui-success"} ${v==="error"&&"text-ui-error"}`,style:{translate:be}},h)),on:"click",closeOnDocumentClick:!0,arrow:!1,ref:$,position:["bottom center","top center"],repositionOnResize:!0,contentStyle:{padding:"0px",border:"none",...de},onOpen:()=>d==null?void 0:d(!0),onClose:()=>d==null?void 0:d(!1)},l.createElement("div",{ref:ee,className:"z-50 flex flex-col overflow-y-auto overflow-x-hidden rounded-lg",style:{width:ue,maxHeight:A.maxHeight},onKeyUp:a=>{if(f||!open)return;let r=X;X===-1?a.code==="ArrowUp"?r=g.length-1:a.code==="ArrowDown"&&(r=0):a.code==="ArrowUp"?r=(X-1+g.length)%g.length:a.code==="ArrowDown"&&(r=(X+1)%g.length),M(r),["Enter"," "].includes(a.code)&&(q(),R.set(g[r].value),J(r),z(g[r].label),n(g[r].value))}},g.length>0&&!f&&g.map(({value:a,...r},m)=>l.createElement(ct,{key:m,...r,selected:R.value===a,active:m===X,onMouseDown:b=>{b.stopPropagation(),b.preventDefault(),q(),R.set(a),J(m),z(r.label),n(a)},onMouseEnter:()=>{M(m)},onMouseLeave:()=>{M(-1)},onTouchStart:b=>{b.stopPropagation(),b.preventDefault()},onTouchMove:()=>F(!0),onTouchEnd:()=>{le||(q(),R.set(a),J(m),z(r.label),n(a)),F(!1)},onKeyUp:b=>{b.code==="Enter"&&(q(),R.set(a),J(m),z(r.label),n(a))}})),g.length===0&&!f&&l.createElement("div",{className:"flex h-12 items-center justify-center bg-ui-background text-text-secondary"},"No options available")))},At={numberOfListItems:{control:"number",name:"Number of List Items"},width:{control:"select",options:["sm","md","lg","full"]},inputHeight:{control:"select",options:["xs","l","xl"]},labelText:{control:{type:"text"}},labelPosition:{control:{type:"select"},options:["top","left"]},showCheckmark:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},helperText:{control:{type:"text"}},state:{control:{type:"select"},options:["success","error"]},searchMode:{control:{type:"select"},options:["prefix","fuzzy"]}},jt={title:"Primitives/Tailwind/Select",component:Ue,parameters:{componentSubtitle:"Select",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2508-3421&t=XJmPDraRXGrLFAp3-4"}},argTypes:At,args:{numberOfListItems:5}},ie=({numberOfListItems:t,labelText:e,labelPosition:o,generateItem:n,items:y,...d})=>{const p=y||[];for(let u=0;u<t;u++)n?p.push(n(u)):y||p.push({value:u,label:`Account Settings ${u}`});const[c,v]=l.useState(-1),h=u=>{v(u)},[T,f]=l.useState(void 0);return s.useEffect(()=>{f(e&&o?{text:e,position:o}:void 0)},[e,o]),l.createElement(Ue,{options:p,value:c,onChange:h,labelProps:T,...d})},he={render:ie},ge={render:ie,args:{generateItem:t=>({value:t,label:`Account Settings ${t}`,secondaryText:"secondary"}),showCheckmark:!1}},ye={render:ie,args:{generateItem:t=>({value:t,label:`Account Settings ${t}`,secondaryText:"secondary",Icon:st}),showCheckmark:!1}},xe={render:ie,args:{items:[{value:1,label:"Apple",secondaryText:"A sweet red fruit rich in fiber and vitamins"},{value:2,label:"Banana",secondaryText:"A tropical fruit high in potassium"},{value:3,label:"Carrot",secondaryText:"A root vegetable great for vision health"},{value:4,label:"Dragon Fruit",secondaryText:"An exotic fruit with a vibrant pink skin"},{value:5,label:"Eggplant",secondaryText:"A versatile vegetable commonly used in cooking"},{value:6,label:"Fig",secondaryText:"A small fruit with a unique, sweet flavor"},{value:7,label:"Grape",secondaryText:"A juicy fruit used to make wine"},{value:8,label:"Honeydew Melon",secondaryText:"A refreshing melon with a pale green flesh"},{value:9,label:"Iceberg Lettuce",secondaryText:"A crisp, leafy vegetable often used in salads"},{value:10,label:"Jackfruit",secondaryText:"A large fruit with a sweet and distinctive flavor"}],width:"lg",showCheckmark:!1,searchMode:"prefix"}},we={render:ie,args:{items:[{value:1,label:"Apple",secondaryText:"A sweet red fruit rich in fiber and vitamins"},{value:2,label:"Banana",secondaryText:"A tropical fruit high in potassium"},{value:3,label:"Carrot",secondaryText:"A root vegetable great for vision health"},{value:4,label:"Dragon Fruit",secondaryText:"An exotic fruit with a vibrant pink skin"},{value:5,label:"Eggplant",secondaryText:"A versatile vegetable commonly used in cooking"},{value:6,label:"Fig",secondaryText:"A small fruit with a unique, sweet flavor"},{value:7,label:"Grape",secondaryText:"A juicy fruit used to make wine"},{value:8,label:"Honeydew Melon",secondaryText:"A refreshing melon with a pale green flesh"},{value:9,label:"Iceberg Lettuce",secondaryText:"A crisp, leafy vegetable often used in salads"},{value:10,label:"Jackfruit",secondaryText:"A large fruit with a sweet and distinctive flavor"}],width:"lg",showCheckmark:!1,startComponent:l.createElement("span",{className:"text-xs text-text-inactive"},"X"),searchMode:"prefix"}};var De,$e,Ne;he.parameters={...he.parameters,docs:{...(De=he.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: Renderer
}`,...(Ne=($e=he.parameters)==null?void 0:$e.docs)==null?void 0:Ne.source}}};var ze,Me,Fe;ge.parameters={...ge.parameters,docs:{...(ze=ge.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    generateItem: (i: number) => ({
      value: i,
      label: \`Account Settings \${i}\`,
      secondaryText: 'secondary'
    }),
    showCheckmark: false
  }
}`,...(Fe=(Me=ge.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var He,Xe,We;ye.parameters={...ye.parameters,docs:{...(He=ye.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    generateItem: (i: number) => ({
      value: i,
      label: \`Account Settings \${i}\`,
      secondaryText: 'secondary',
      Icon: Rows01Md
    }),
    showCheckmark: false
  }
}`,...(We=(Xe=ye.parameters)==null?void 0:Xe.docs)==null?void 0:We.source}}};var je,Ye,qe;xe.parameters={...xe.parameters,docs:{...(je=xe.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    items: [{
      value: 1,
      label: 'Apple',
      secondaryText: 'A sweet red fruit rich in fiber and vitamins'
    }, {
      value: 2,
      label: 'Banana',
      secondaryText: 'A tropical fruit high in potassium'
    }, {
      value: 3,
      label: 'Carrot',
      secondaryText: 'A root vegetable great for vision health'
    }, {
      value: 4,
      label: 'Dragon Fruit',
      secondaryText: 'An exotic fruit with a vibrant pink skin'
    }, {
      value: 5,
      label: 'Eggplant',
      secondaryText: 'A versatile vegetable commonly used in cooking'
    }, {
      value: 6,
      label: 'Fig',
      secondaryText: 'A small fruit with a unique, sweet flavor'
    }, {
      value: 7,
      label: 'Grape',
      secondaryText: 'A juicy fruit used to make wine'
    }, {
      value: 8,
      label: 'Honeydew Melon',
      secondaryText: 'A refreshing melon with a pale green flesh'
    }, {
      value: 9,
      label: 'Iceberg Lettuce',
      secondaryText: 'A crisp, leafy vegetable often used in salads'
    }, {
      value: 10,
      label: 'Jackfruit',
      secondaryText: 'A large fruit with a sweet and distinctive flavor'
    }],
    width: 'lg',
    showCheckmark: false,
    searchMode: 'prefix'
  }
}`,...(qe=(Ye=xe.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Pe,Ge,Je;we.parameters={...we.parameters,docs:{...(Pe=we.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: Renderer,
  args: {
    items: [{
      value: 1,
      label: 'Apple',
      secondaryText: 'A sweet red fruit rich in fiber and vitamins'
    }, {
      value: 2,
      label: 'Banana',
      secondaryText: 'A tropical fruit high in potassium'
    }, {
      value: 3,
      label: 'Carrot',
      secondaryText: 'A root vegetable great for vision health'
    }, {
      value: 4,
      label: 'Dragon Fruit',
      secondaryText: 'An exotic fruit with a vibrant pink skin'
    }, {
      value: 5,
      label: 'Eggplant',
      secondaryText: 'A versatile vegetable commonly used in cooking'
    }, {
      value: 6,
      label: 'Fig',
      secondaryText: 'A small fruit with a unique, sweet flavor'
    }, {
      value: 7,
      label: 'Grape',
      secondaryText: 'A juicy fruit used to make wine'
    }, {
      value: 8,
      label: 'Honeydew Melon',
      secondaryText: 'A refreshing melon with a pale green flesh'
    }, {
      value: 9,
      label: 'Iceberg Lettuce',
      secondaryText: 'A crisp, leafy vegetable often used in salads'
    }, {
      value: 10,
      label: 'Jackfruit',
      secondaryText: 'A large fruit with a sweet and distinctive flavor'
    }],
    width: 'lg',
    showCheckmark: false,
    startComponent: <span className="text-xs text-text-inactive">X</span>,
    searchMode: 'prefix'
  }
}`,...(Je=(Ge=we.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};const Yt=["Default","SecondaryText","SecondaryTextWithIcon","Searchable","WithStartComponent"];export{he as Default,xe as Searchable,ge as SecondaryText,ye as SecondaryTextWithIcon,we as WithStartComponent,Yt as __namedExportsOrder,jt as default};
