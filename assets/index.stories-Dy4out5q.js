import{R as t}from"./index-CBqU2yxZ.js";import{Z as e}from"./EditorServices-BJKHmurs.js";import{a as g}from"./index-D4NSpkDQ.js";import{f as h}from"./index-_wFD3GG2.js";import{u as a,c as n}from"./Util-CG5_y5Pm.js";import{C as f}from"./index-CrO4saqk.js";import{I as p}from"./index-DZ02_pf3.js";import{N as l}from"./index-Cb0NQbVM.js";import{N as E}from"./index-BXX5lIfA.js";import{L}from"./index-DsxNWZ-Q.js";import{u as y}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./three.module-D2RMN07C.js";import"./ActionFunctions-CxzuxLxN.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./AssetType-LSGL9ANY.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DJX7trsF.js";import"./iconBase-vdkxwKJc.js";import"./XRState-BS8ja_cl.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./client-DMi1NERe.js";import"./EditorControlFunctions-DO7c3hDV.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./jsx-runtime-CKrituN3.js";import"./index-ChWBCYBM.js";import"./tw-merge-Ds6tgvmq.js";import"./index-DWVs1sLR.js";import"./index-CqRG3f1I.js";import"./index-6-YOBPgK.js";/* empty css                */import"./miscUtils-D11F-TOL.js";import"./index-DVAwpzAq.js";import"./index-BqFAen_F.js";import"./index-vJCBmx79.js";import"./index-DGVNGK2X.js";import"./index-CGhkeU3i.js";import"./index-CCAuFDbE.js";import"./index-DCS5Ru-F.js";import"./nonIterableRest-Y-KoC6Zs.js";const s=i=>{const{t:r}=y(),m=h(i.entity,e).value;return t.createElement(E,{...i,name:r("editor:properties.directionalLight.name"),description:r("editor:properties.directionalLight.description"),icon:t.createElement(s.iconComponent,null)},t.createElement(p,{name:"Color",label:r("editor:properties.directionalLight.lbl-color")},t.createElement(f,{className:"bg-[#1A1A1A]",value:m.color,onChange:a(e,"color"),onRelease:n(e,"color")})),t.createElement(p,{name:"Intensity",label:r("editor:properties.directionalLight.lbl-intensity")},t.createElement(l,{min:0,smallStep:.001,mediumStep:.01,largeStep:.1,value:m.intensity,onChange:a(e,"intensity"),onRelease:n(e,"intensity"),unit:"cd"})),t.createElement(L,{entity:i.entity,component:e}),t.createElement(p,{name:"Camera Near",label:r("editor:properties.directionalLight.lbl-cameraNear")},t.createElement(l,{min:0,smallStep:.01,mediumStep:.1,largeStep:1,value:m.cameraFar,onChange:a(e,"cameraFar"),onRelease:n(e,"cameraFar")})))};s.iconComponent=g;const C={},dt={title:"Editor/Properties/Light/Directional",component:s,parameters:{componentSubtitle:"DirectionalLightNodeEditor",jest:"directionalLightNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:C},o={args:{}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ut=["Default"];export{o as Default,ut as __namedExportsOrder,dt as default};