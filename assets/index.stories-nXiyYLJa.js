import{R as e}from"./index-CBqU2yxZ.js";import{f as C}from"./index-DGVNGK2X.js";import{f as h,i as M}from"./index-_wFD3GG2.js";import{u,c as i}from"./Util-CG5_y5Pm.js";import{I as c}from"./useDrop-DvNNwWYR.js";import{P as l,M as r,b as S,s as T}from"./MediaComponent-BbvQujMt.js";import{B as f}from"./index-CGhkeU3i.js";import{S as I}from"./index-B1iViPMx.js";import{A as k}from"./index-DCENy7tn.js";import{B as n}from"./index-CCAuFDbE.js";import{I as a}from"./index-DZ02_pf3.js";import{N}from"./index-Cb0NQbVM.js";import{S as P}from"./index-CmJ8aZaS.js";import{N as x}from"./index-BXX5lIfA.js";import{u as z}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-vdkxwKJc.js";import"./ActionFunctions-CxzuxLxN.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./three.module-D2RMN07C.js";import"./EditorControlFunctions-DO7c3hDV.js";import"./EditorServices-BJKHmurs.js";import"./AssetType-LSGL9ANY.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DJX7trsF.js";import"./XRState-BS8ja_cl.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./client-DMi1NERe.js";import"./index--lohHrd2.js";import"./iframe-BwaUBtZe.js";import"../sb-preview/runtime.js";import"./tw-merge-Ds6tgvmq.js";import"./index-vJCBmx79.js";import"./index-DKYRyQTk.js";import"./index-Dn0AHKmy.js";import"./index-CqRG3f1I.js";import"./index-ChWBCYBM.js";import"./index-DCS5Ru-F.js";import"./index-DWVs1sLR.js";import"./index-6-YOBPgK.js";/* empty css                */import"./miscUtils-D11F-TOL.js";import"./index-CXvzSdoX.js";import"./useClickOutside-D1hZxvBu.js";import"./index-DVAwpzAq.js";import"./index-BqFAen_F.js";import"./nonIterableRest-Y-KoC6Zs.js";const R=[{label:"Single",value:l.single},{label:"Random",value:l.random},{label:"Loop",value:l.loop},{label:"SingleLoop",value:l.singleloop}],s=m=>{const{t:o}=z(),t=h(m.entity,r),d=M(m.entity,S),b=()=>{t.paused.set(!t.paused.value)},g=()=>{d&&T(d.element,t.seekTime.value)};return e.createElement(x,{...m,name:o("editor:properties.media.name"),description:o("editor:properties.media.description"),icon:e.createElement(s.iconComponent,null)},e.createElement(a,{name:"Volume",label:o("editor:properties.media.lbl-volume"),className:"w-auto"},e.createElement(I,{min:0,max:100,step:1,value:t.volume.value,onChange:u(r,"volume"),onRelease:i(r,"volume")})),e.createElement(a,{name:"Start Time",label:o("editor:properties.media.seektime")},e.createElement(N,{value:t.seekTime.value,onChange:u(r,"seekTime"),onRelease:i(r,"seekTime")})),e.createElement(a,{name:"Is Music",label:o("editor:properties.media.lbl-isMusic")},e.createElement(n,{value:t.isMusic.value,onChange:i(r,"isMusic")})),e.createElement(a,{name:"Controls",label:o("editor:properties.media.lbl-controls"),info:o("editor:properties.media.info-controls")},e.createElement(n,{value:t.controls.value,onChange:i(r,"controls")})),e.createElement(a,{name:"Auto Play",label:o("editor:properties.media.lbl-autoplay"),info:o("editor:properties.media.info-autoplay")},e.createElement(n,{value:t.autoplay.value,onChange:i(r,"autoplay")})),e.createElement(a,{name:"Synchronize",label:o("editor:properties.media.lbl-synchronize"),info:o("editor:properties.media.info-synchronize")},e.createElement(n,{value:t.synchronize.value,onChange:i(r,"synchronize")})),e.createElement(k,{label:o("editor:properties.media.paths"),inputLabel:o("editor:properties.media.path"),values:t.resources.value,dropTypes:[...c.Audios,...c.Videos],onChange:i(r,"resources")}),e.createElement(a,{name:"Play Mode",label:o("editor:properties.media.playmode")},e.createElement(P,{key:m.entity,options:R,value:t.playMode.value,onChange:i(r,"playMode")})),t.resources.length>0&&e.createElement(a,{name:"media-controls",label:o("editor:properties.media.lbl-mediaControls"),className:"flex flex-row gap-2"},e.createElement(f,{variant:"outline",onClick:b},t.paused.value?o("editor:properties.media.playtitle"):o("editor:properties.media.pausetitle")),e.createElement(f,{variant:"outline",onClick:g},o("editor:properties.media.resettitle"))))};s.iconComponent=C;const A={},ze={title:"Editor/Properties/Media",component:s,parameters:{componentSubtitle:"MediaNodeEditor",jest:"",design:{type:"figma",url:""}},argTypes:A},p={args:{}};var v,y,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const Re=["Default"];export{p as Default,Re as __namedExportsOrder,ze as default};