import{R as t}from"./index-qyj2ZBCg.js";import{a4 as e}from"./resourceLoaderHooks-CGFdCkMf.js";import{a as u}from"./index-C762weeg.js";import{c as h}from"./index-BAucurbO.js";import{u as a,c as n}from"./Util-kaiJ73V_.js";import{N as f}from"./NodeEditor-CczQomyK.js";import{C as E}from"./index-BfdQvl3s.js";import{I as p}from"./index-C1cqiOEK.js";import{N as l}from"./index-L4gkb2W1.js";import{L}from"./index-Dysf1gBt.js";import{u as y}from"./useTranslation-V3-FmiHw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./three.module-GtcjrW6H.js";import"./ActionFunctions-CGJ8cJXE.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./lodash-BYTxXjAY.js";import"./EngineState-DaL1AnLu.js";import"./XRState-CV4Nd7th.js";import"./AssetType-UUzlsI5F.js";import"./MathLerpFunctions-Fp1JJUGo.js";import"./client-Dp_9VnWk.js";import"./index-D-MhP2gL.js";import"./iconBase-Cq1uYpEy.js";import"./EditorControlFunctions-BzMvWBNn.js";import"./SkyboxComponent-BNyLWZGx.js";import"./NotificationService-Ccxuyqtj.js";import"./index-Drm08J6t.js";import"./index-CKtEwL62.js";import"./tw-merge-Ds6tgvmq.js";import"./index-DFAV5Hcs.js";import"./ZoomOutSm-DAXDZ42X.js";import"./index-eUpTpYJY.js";import"./index-CDAcq9gd.js";import"./i18next-VFoMQVm4.js";import"./nonIterableRest--eTuPelP.js";import"./ComponentDropdownState-D5ozFa11.js";import"./index-C016ACLJ.js";import"./index-DGEuJ1jr.js";import"./index-BxRVEa41.js";import"./index-C2kJMnxl.js";import"./extends-CEKvlDHW.js";import"./jsx-runtime-BFLhixH3.js";import"./index-DjMMlf6X.js";import"./index-DMspzKh0.js";import"./miscUtils-D11F-TOL.js";import"./context-DaZIzD-H.js";const s=i=>{const{t:r}=y(),m=h(i.entity,e).value;return t.createElement(f,{...i,name:r("editor:properties.directionalLight.name"),description:r("editor:properties.directionalLight.description"),Icon:s.iconComponent},t.createElement(p,{name:"Color",label:r("editor:properties.directionalLight.lbl-color")},t.createElement(E,{className:"bg-[#1A1A1A]",value:m.color,onChange:a(e,"color"),onRelease:n(e,"color")})),t.createElement(p,{name:"Intensity",label:r("editor:properties.directionalLight.lbl-intensity")},t.createElement(l,{min:0,smallStep:.001,mediumStep:.01,largeStep:.1,value:m.intensity,onChange:a(e,"intensity"),onRelease:n(e,"intensity"),unit:"cd"})),t.createElement(L,{entity:i.entity,component:e}),t.createElement(p,{name:"Camera Near",label:r("editor:properties.directionalLight.lbl-cameraNear")},t.createElement(l,{min:0,smallStep:.01,mediumStep:.1,largeStep:1,value:m.cameraFar,onChange:a(e,"cameraFar"),onRelease:n(e,"cameraFar")})))};s.iconComponent=u;const C={},ut={title:"Editor/Properties/Light/Directional",component:s,parameters:{componentSubtitle:"DirectionalLightNodeEditor",jest:"directionalLightNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:C},o={args:{}};var c,d,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const ht=["Default"];export{o as Default,ht as __namedExportsOrder,ut as default};