import{r as E,R as e}from"./index-CBqU2yxZ.js";import{f as P,h as C,b as p,U as b}from"./index-_wFD3GG2.js";import{c as s,u as g}from"./Util-CG5_y5Pm.js";import{E as O}from"./EditorControlFunctions-DO7c3hDV.js";import{a0 as u}from"./EditorServices-BJKHmurs.js";import{M as o,a as I}from"./MountPointComponent-DF1pgIm2.js";import{N as M}from"./ActionFunctions-CxzuxLxN.js";import{e as N}from"./index-DWVs1sLR.js";import{I as c}from"./index-DZ02_pf3.js";import{S as x}from"./index-CmJ8aZaS.js";import{a as D}from"./index-fFxXVS77.js";import{N as R}from"./index-BXX5lIfA.js";import{u as h}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-Dz_GI0CC.js";import"./three.module-D2RMN07C.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./AssetType-LSGL9ANY.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DaaykCGs.js";import"./index-DJX7trsF.js";import"./iconBase-vdkxwKJc.js";import"./XRState-BS8ja_cl.js";import"./client-DMi1NERe.js";import"./ArrowHelperComponent-C9MpZgBb.js";import"./index-CqRG3f1I.js";import"./tw-merge-Ds6tgvmq.js";import"./index-6-YOBPgK.js";/* empty css                */import"./index-CXvzSdoX.js";import"./useClickOutside-D1hZxvBu.js";import"./index-Dn0AHKmy.js";import"./index-vJCBmx79.js";import"./index-CGhkeU3i.js";import"./index-Cb0NQbVM.js";import"./miscUtils-D11F-TOL.js";import"./index-ChWBCYBM.js";import"./index-DVAwpzAq.js";import"./index-BqFAen_F.js";import"./index-DGVNGK2X.js";import"./nonIterableRest-Y-KoC6Zs.js";const i=t=>{const{t:r}=h(),a=P(t.entity,o);return E.useEffect(()=>{if(!C(t.entity,u)){const m=p(t.entity,o);O.addOrRemoveComponent([t.entity],u,!0,{label:o.mountPointInteractMessages[m.type],callbacks:[{callbackID:o.mountCallbackName,target:p(t.entity,b)}]})}},[]),e.createElement(R,{...t,name:r("editor:properties.mountPoint.name"),description:r("editor:properties.mountPoint.description"),icon:e.createElement(i.iconComponent,null)},e.createElement(c,{name:"Mount Type",label:r("editor:properties.mountPoint.lbl-type")},e.createElement(x,{key:t.entity,value:a.type.value,options:Object.entries(I).map(([m,y])=>({label:m,value:y})),onChange:s(o,"type")})),e.createElement(c,{name:"Dismount Offset",label:r("editor:properties.mountPoint.lbl-dismount")},e.createElement(D,{value:a.dismountOffset.get(M),onChange:g(o,"dismountOffset"),onRelease:s(o,"dismountOffset")})))};i.iconComponent=N;const k={},gt={title:"Editor/Properties/MountPoint",component:i,parameters:{componentSubtitle:"MountPointNodeEditor",jest:"mountPointNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:k},n={args:{}};var l,d,f;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const Ot=["Default"];export{n as Default,Ot as __namedExportsOrder,gt as default};
