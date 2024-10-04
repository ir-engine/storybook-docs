import{f as u}from"./index-_wFD3GG2.js";import{c as a}from"./Util-CG5_y5Pm.js";import{j as C,ag as E,l as o}from"./EditorServices-BJKHmurs.js";import{R as e}from"./index-CBqU2yxZ.js";import{a as f}from"./index-BdMblTZd.js";import{I as l}from"./index-DZ02_pf3.js";import{N as n}from"./index-Cb0NQbVM.js";import{S as b}from"./index-CmJ8aZaS.js";import{a as g}from"./index-fFxXVS77.js";import{N as h}from"./index-BXX5lIfA.js";import{u as v}from"./useTranslation-C8TD7CCW.js";import"./ActionFunctions-CxzuxLxN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./three.module-D2RMN07C.js";import"./EditorControlFunctions-DO7c3hDV.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./AssetType-LSGL9ANY.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DJX7trsF.js";import"./iconBase-vdkxwKJc.js";import"./XRState-BS8ja_cl.js";import"./client-DMi1NERe.js";import"./index-DWVs1sLR.js";import"./index-CqRG3f1I.js";import"./tw-merge-Ds6tgvmq.js";import"./index-6-YOBPgK.js";/* empty css                */import"./miscUtils-D11F-TOL.js";import"./index-ChWBCYBM.js";import"./index-CXvzSdoX.js";import"./useClickOutside-D1hZxvBu.js";import"./index-Dn0AHKmy.js";import"./index-vJCBmx79.js";import"./index-CGhkeU3i.js";import"./index-DVAwpzAq.js";import"./index-BqFAen_F.js";import"./index-DGVNGK2X.js";import"./nonIterableRest-Y-KoC6Zs.js";const y=r=>r.replace(/([a-z])([A-Z])/g,"$1 $2"),S=Object.entries(C).filter(([r,t])=>E.includes(t)).map(([r,t])=>({label:y(r),value:t})),s=r=>{const{t}=v(),i=u(r.entity,o);return e.createElement(h,{...r,name:t("editor:properties.collider.name"),description:t("editor:properties.collider.description"),icon:e.createElement(s.iconComponent,null)},e.createElement(l,{name:"Shape",label:t("editor:properties.collider.lbl-shape")},e.createElement(b,{options:S,value:i.shape.value,onChange:a(o,"shape")})),e.createElement(l,{name:"Mass",label:t("editor:properties.collider.lbl-mass")},e.createElement(n,{value:i.mass.value,onChange:a(o,"mass")})),e.createElement(l,{name:"Mass Center",label:t("editor:properties.collider.lbl-massCenter"),className:"w-auto"},e.createElement(g,{value:i.massCenter.value,onChange:a(o,"massCenter")})),e.createElement(l,{name:"Friction",label:t("editor:properties.collider.lbl-friction")},e.createElement(n,{value:i.friction.value,onChange:a(o,"friction")})),e.createElement(l,{name:"Restitution",label:t("editor:properties.collider.lbl-restitution")},e.createElement(n,{value:i.restitution.value,onChange:a(o,"restitution")})),e.createElement(l,{name:"Collision Layer",label:t("editor:properties.collider.lbl-collisionLayer")},e.createElement(n,{value:i.collisionLayer.value,onChange:a(o,"collisionLayer")})),e.createElement(l,{name:"Collision Mask",label:t("editor:properties.collider.lbl-collisionMask")},e.createElement(n,{value:i.collisionMask.value,onChange:a(o,"collisionMask")})))};s.iconComponent=f;const M={},ue={title:"Editor/Properties/Collider",component:s,parameters:{componentSubtitle:"ColliderNodeEditor",jest:"ColliderNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:M},m={args:{}};var p,c,d;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(d=(c=m.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Ce=["Default"];export{m as Default,Ce as __namedExportsOrder,ue as default};
