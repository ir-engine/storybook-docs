import{r as d,R as m}from"./index-CBqU2yxZ.js";import{f as Me}from"./index-DfU-XIjm.js";/* empty css                */import{t as ve}from"./tw-merge-Ds6tgvmq.js";function F(){return F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},F.apply(this,arguments)}var ze=function(e,o){o===void 0&&(o=!0),d.useEffect(function(){if(o){var r=function(i){i.key==="Escape"&&e(i)};return document.addEventListener("keyup",r),function(){o&&document.removeEventListener("keyup",r)}}},[e,o])},De=function(e,o){o===void 0&&(o=!0),d.useEffect(function(){if(o){var r=function(){e()};return window.addEventListener("resize",r),function(){o&&window.removeEventListener("resize",r)}}},[e,o])},Fe=function(e,o,r){r===void 0&&(r=!0),d.useEffect(function(){if(r){var c=function(f){var k=Array.isArray(e)?e:[e],l=!1;k.forEach(function(s){if(!s.current||s.current.contains(f.target)){l=!0;return}}),f.stopPropagation(),l||o(f)};return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),function(){r&&(document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c))}}},[e,o,r])},Ne=function(e,o){o===void 0&&(o=!0),d.useEffect(function(){if(o){var r=function(i){if(i.keyCode===9){var f,k=e==null||(f=e.current)===null||f===void 0?void 0:f.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),l=Array.prototype.slice.call(k);if(l.length===1){i.preventDefault();return}var s=l[0],g=l[l.length-1];i.shiftKey&&document.activeElement===s?(i.preventDefault(),g.focus()):document.activeElement===g&&(i.preventDefault(),s.focus())}};return document.addEventListener("keydown",r),function(){o&&document.removeEventListener("keydown",r)}}},[e,o])},Xe=typeof window<"u"?d.useLayoutEffect:d.useEffect,D={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},Ye=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],je=function(e,o,r,c,i){var f=i.offsetX,k=i.offsetY,l=c?8:0,s=r.split(" "),g=e.top+e.height/2,y=e.left+e.width/2,h=o.height,p=o.width,O=g-h/2,E=y-p/2,S="",x="0%",P="0%";switch(s[0]){case"top":O-=h/2+e.height/2+l,S="rotate(180deg)  translateX(50%)",x="100%",P="50%";break;case"bottom":O+=h/2+e.height/2+l,S="rotate(0deg) translateY(-100%) translateX(-50%)",P="50%";break;case"left":E-=p/2+e.width/2+l,S=" rotate(90deg)  translateY(50%) translateX(-25%)",P="100%",x="50%";break;case"right":E+=p/2+e.width/2+l,S="rotate(-90deg)  translateY(-150%) translateX(25%)",x="50%";break}switch(s[1]){case"top":O=e.top,x=e.height/2+"px";break;case"bottom":O=e.top-h+e.height,x=h-e.height/2+"px";break;case"left":E=e.left,P=e.width/2+"px";break;case"right":E=e.left-p+e.width,P=p-e.width/2+"px";break}return O=s[0]==="top"?O-k:O+k,E=s[0]==="left"?E-f:E+f,{top:O,left:E,transform:S,arrowLeft:P,arrowTop:x}},qe=function(e){var o={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof e=="string"){var r=document.querySelector(e);r!==null&&(o=r.getBoundingClientRect())}return o},He=function(e,o,r,c,i,f){var k=i.offsetX,l=i.offsetY,s={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},g=0,y=qe(f),h=Array.isArray(r)?r:[r];for((f||Array.isArray(r))&&(h=[].concat(h,Ye));g<h.length;){s=je(e,o,h[g],c,{offsetX:k,offsetY:l});var p={top:s.top,left:s.left,width:o.width,height:o.height};if(p.top<=y.top||p.left<=y.left||p.top+p.height>=y.top+y.height||p.left+p.width>=y.left+y.width)g++;else break}return s},We=0,Ke=function(){var e=document.getElementById("popup-root");return e===null&&(e=document.createElement("div"),e.setAttribute("id","popup-root"),document.body.appendChild(e)),e},Ge=d.forwardRef(function(t,e){var o=t.trigger,r=o===void 0?null:o,c=t.onOpen,i=c===void 0?function(){}:c,f=t.onClose,k=f===void 0?function(){}:f,l=t.defaultOpen,s=l===void 0?!1:l,g=t.open,y=g===void 0?void 0:g,h=t.disabled,p=h===void 0?!1:h,O=t.nested,E=O===void 0?!1:O,S=t.closeOnDocumentClick,x=S===void 0?!0:S,P=t.repositionOnResize,me=P===void 0?!0:P,K=t.closeOnEscape,ye=K===void 0?!0:K,G=t.on,I=G===void 0?["click"]:G,J=t.contentStyle,he=J===void 0?{}:J,Q=t.arrowStyle,Y=Q===void 0?{}:Q,U=t.overlayStyle,be=U===void 0?{}:U,V=t.className,A=V===void 0?"":V,Z=t.position,we=Z===void 0?"bottom center":Z,_=t.modal,B=_===void 0?!1:_,ee=t.lockScroll,te=ee===void 0?!1:ee,oe=t.arrow,j=oe===void 0?!0:oe,re=t.offsetX,Ee=re===void 0?0:re,ne=t.offsetY,ge=ne===void 0?0:ne,ie=t.mouseEnterDelay,Oe=ie===void 0?100:ie,ae=t.mouseLeaveDelay,ke=ae===void 0?100:ae,le=t.keepTooltipInside,xe=le===void 0?!1:le,N=t.children,se=d.useState(y||s),C=se[0],ue=se[1],T=d.useRef(null),b=d.useRef(null),R=d.useRef(null),ce=d.useRef(null),fe=d.useRef("popup-"+ ++We),w=B?!0:!r,M=d.useRef(0);Xe(function(){return C?(ce.current=document.activeElement,pe(),Se(),Pe()):Te(),function(){clearTimeout(M.current)}},[C]),d.useEffect(function(){typeof y=="boolean"&&(y?X():L())},[y,p]);var X=function(n){C||p||(ue(!0),setTimeout(function(){return i(n)},0))},L=function(n){var v;!C||p||(ue(!1),w&&((v=ce.current)===null||v===void 0||v.focus()),setTimeout(function(){return k(n)},0))},q=function(n){n==null||n.stopPropagation(),C?L(n):X(n)},H=function(n){clearTimeout(M.current),M.current=setTimeout(function(){return X(n)},Oe)},Ce=function(n){n==null||n.preventDefault(),q()},W=function(n){clearTimeout(M.current),M.current=setTimeout(function(){return L(n)},ke)},Pe=function(){w&&te&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},Te=function(){w&&te&&(document.getElementsByTagName("body")[0].style.overflow="auto")},Se=function(){var n,v=b==null||(n=b.current)===null||n===void 0?void 0:n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),a=Array.prototype.slice.call(v)[0];a==null||a.focus()};d.useImperativeHandle(e,function(){return{open:function(){X()},close:function(){L()},toggle:function(){q()}}});var pe=function(){if(!(w||!C)&&!(!(T!=null&&T.current)||!(T!=null&&T.current)||!(b!=null&&b.current))){var n=T.current.getBoundingClientRect(),v=b.current.getBoundingClientRect(),a=He(n,v,we,j,{offsetX:Ee,offsetY:ge},xe);if(b.current.style.top=a.top+window.scrollY+"px",b.current.style.left=a.left+window.scrollX+"px",j&&R.current){var $,z;R.current.style.transform=a.transform,R.current.style.setProperty("-ms-transform",a.transform),R.current.style.setProperty("-webkit-transform",a.transform),R.current.style.top=(($=Y.top)===null||$===void 0?void 0:$.toString())||a.arrowTop,R.current.style.left=((z=Y.left)===null||z===void 0?void 0:z.toString())||a.arrowLeft}}};ze(L,ye),Ne(b,C&&w),De(pe,me),Fe(r?[b,T]:[b],L,x&&!E);var Le=function(){for(var n={key:"T",ref:T,"aria-describedby":fe.current},v=Array.isArray(I)?I:[I],a=0,$=v.length;a<$;a++)switch(v[a]){case"click":n.onClick=q;break;case"right-click":n.onContextMenu=Ce;break;case"hover":n.onMouseEnter=H,n.onMouseLeave=W;break;case"focus":n.onFocus=H,n.onBlur=W;break}if(typeof r=="function"){var z=r(C);return!!r&&m.cloneElement(z,n)}return!!r&&m.cloneElement(r,n)},Re=function(){var n=w?D.popupContent.modal:D.popupContent.tooltip,v={className:"popup-content "+(A!==""?A.split(" ").map(function(a){return a+"-content"}).join(" "):""),style:F({},n,he,{pointerEvents:"auto"}),ref:b,onClick:function($){$.stopPropagation()}};return!B&&I.indexOf("hover")>=0&&(v.onMouseEnter=H,v.onMouseLeave=W),v},de=function(){return m.createElement("div",Object.assign({},Re(),{key:"C",role:w?"dialog":"tooltip",id:fe.current}),j&&!w&&m.createElement("div",{ref:R,style:D.popupArrow},m.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(A!==""?A.split(" ").map(function(n){return n+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:F({position:"absolute"},Y)},m.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),N&&typeof N=="function"?N(L,C):N)},$e=!(I.indexOf("hover")>=0),Ae=w?D.overlay.modal:D.overlay.tooltip,Ie=[$e&&m.createElement("div",{key:"O","data-testid":"overlay","data-popup":w?"modal":"tooltip",className:"popup-overlay "+(A!==""?A.split(" ").map(function(u){return u+"-overlay"}).join(" "):""),style:F({},Ae,be,{pointerEvents:x&&E||w?"auto":"none"}),onClick:x&&E?L:void 0,tabIndex:-1},w&&de()),!w&&de()];return m.createElement(m.Fragment,null,Le(),C&&Me.createPortal(Ie,Ke()))});const Ze=({title:t,titleClassName:e,content:o,children:r,className:c,...i})=>m.createElement(Ge,{trigger:m.createElement("div",{style:{all:"unset"}},r),on:"hover",keepTooltipInside:!0,repositionOnResize:!0,arrow:!1,contentStyle:{animation:"expandFromCenter 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards",transformOrigin:"center"},...i},m.createElement("div",{className:"-mt-1 grid text-wrap shadow-lg transition-all"},t&&m.createElement("span",{className:ve("block rounded-t border-b border-b-[#212226] bg-[#141619] px-3 py-1.5 text-sm text-[#F5F5F5]",e)},t),m.createElement("div",{className:ve("bg-theme-studio-surface px-3 py-2 text-sm text-[#F5F5F5]",t?"rounded-b":"rounded",c)},o)));export{Ze as T};
