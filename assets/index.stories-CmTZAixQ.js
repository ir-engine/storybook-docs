import{r as g,R as t}from"./index-CBqU2yxZ.js";import{b as v}from"./index-DKYRyQTk.js";import{f as b,h as y,b as I,U as N}from"./index-_wFD3GG2.js";import{c as a,u as c}from"./Util-CG5_y5Pm.js";import{E as h}from"./EditorControlFunctions-DO7c3hDV.js";import{D as L,a0 as u,a1 as e,a2 as R}from"./EditorServices-BJKHmurs.js";import{B as x}from"./index-CCAuFDbE.js";import{I as m}from"./index-DZ02_pf3.js";import{C as d}from"./index-OAa3bMdv.js";import{N as D}from"./index-BXX5lIfA.js";import{u as P}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-vdkxwKJc.js";import"./ActionFunctions-CxzuxLxN.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./three.module-D2RMN07C.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./AssetType-LSGL9ANY.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DJX7trsF.js";import"./XRState-BS8ja_cl.js";import"./client-DMi1NERe.js";import"./index-DCS5Ru-F.js";import"./index-vJCBmx79.js";import"./index-CqRG3f1I.js";import"./tw-merge-Ds6tgvmq.js";import"./index-DWVs1sLR.js";import"./index-6-YOBPgK.js";/* empty css                */import"./index-Dn0AHKmy.js";import"./index-DVAwpzAq.js";import"./index-ChWBCYBM.js";import"./index-BqFAen_F.js";import"./index-DGVNGK2X.js";import"./index-CGhkeU3i.js";import"./nonIterableRest-Y-KoC6Zs.js";const p=o=>{const{t:r}=P(),i=b(o.entity,e),l=L(o.entity,e);return g.useEffect(()=>{y(o.entity,u)||h.addOrRemoveComponent([o.entity],u,!0,{label:e.interactMessage,uiInteractable:!1,clickInteract:!0,uiActivationType:R.hover,callbacks:[{callbackID:e.linkCallbackName,target:I(o.entity,N)}]})},[]),t.createElement(D,{...o,name:r("editor:properties.linkComp.title"),description:r("editor:properties.linkComp.description"),icon:t.createElement(p.iconComponent,null)},l?Object.entries(l).map(([s,k])=>t.createElement("div",{key:s,style:{marginTop:2,color:"#FF8C00"}},"Error: "+s+"--"+k)):null,t.createElement(m,{name:"Navigate Path",label:r("editor:properties.linkComp.lbl-navigateScene")},t.createElement(x,{value:i.sceneNav.value,onChange:a(e,"sceneNav")})),i.sceneNav.value?t.createElement(m,{name:"Location",label:r("editor:properties.linkComp.lbl-locaiton")},t.createElement(d,{value:i.location.value,onChange:c(e,"location"),onRelease:a(e,"location")})):t.createElement(m,{name:"LinkUrl",label:r("editor:properties.linkComp.lbl-url")},t.createElement(d,{value:i.url.value,onChange:c(e,"url"),onRelease:a(e,"url")})))};p.iconComponent=v;const T={},kt={title:"Editor/Properties/Link",component:p,parameters:{componentSubtitle:"LinkNodeEditor",jest:"linkNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:T},n={args:{}};var C,E,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {}
}`,...(f=(E=n.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const gt=["Default"];export{n as Default,gt as __namedExportsOrder,kt as default};
