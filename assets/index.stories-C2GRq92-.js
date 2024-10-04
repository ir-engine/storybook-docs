import{r as S,R as o}from"./index-CBqU2yxZ.js";import{d as b}from"./index-DKYRyQTk.js";import{f as C,h as d}from"./index-_wFD3GG2.js";import{c as i,u as l}from"./Util-CG5_y5Pm.js";import{S as x,E as D}from"./EditorControlFunctions-DO7c3hDV.js";import{P as t}from"./PositionalAudioComponent-CGM_4wyN.js";import{M as u}from"./MediaComponent-BbvQujMt.js";import{V as A}from"./VolumetricComponent-ByPzRWY2.js";import{S as M}from"./index-B1iViPMx.js";import{I as n}from"./index-DZ02_pf3.js";import{N as m}from"./index-Cb0NQbVM.js";import{S as O}from"./index-CmJ8aZaS.js";import{N as F}from"./index-BXX5lIfA.js";import{u as I}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-vdkxwKJc.js";import"./ActionFunctions-CxzuxLxN.js";import"./index-DaaykCGs.js";import"./v4-Dz_GI0CC.js";import"./three.module-D2RMN07C.js";import"./EditorServices-BJKHmurs.js";import"./AssetType-LSGL9ANY.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DJX7trsF.js";import"./XRState-BS8ja_cl.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./client-DMi1NERe.js";import"./iframe-BwaUBtZe.js";import"../sb-preview/runtime.js";import"./meshUtils-uAuBfJNJ.js";import"./tw-merge-Ds6tgvmq.js";import"./index-DWVs1sLR.js";import"./index-CqRG3f1I.js";import"./index-6-YOBPgK.js";/* empty css                */import"./miscUtils-D11F-TOL.js";import"./index-ChWBCYBM.js";import"./index-CXvzSdoX.js";import"./useClickOutside-D1hZxvBu.js";import"./index-Dn0AHKmy.js";import"./index-vJCBmx79.js";import"./index-DVAwpzAq.js";import"./index-BqFAen_F.js";import"./index-DGVNGK2X.js";import"./index-CGhkeU3i.js";import"./nonIterableRest-Y-KoC6Zs.js";const a={Linear:"linear",Inverse:"inverse",Exponential:"exponential"},R=[{label:"Linear",value:a.Linear},{label:"Inverse",value:a.Inverse},{label:"Exponential",value:a.Exponential}],c=p=>{const{t:e}=I(),r=C(p.entity,t);return S.useEffect(()=>{if(!d(p.entity,u)&&!d(p.entity,A)){const v=x.getSelectedEntities();D.addOrRemoveComponent(v,u,!0)}},[]),o.createElement(F,{...p,name:e("editor:properties.audio.name"),description:e("editor:properties.audio.description"),icon:o.createElement(c.iconComponent,null)},o.createElement(n,{name:"Distance Model",label:e("editor:properties.audio.lbl-distanceModel"),info:e("editor:properties.audio.info-distanceModel")},o.createElement(O,{key:p.entity,options:R,value:r.distanceModel.value,onChange:i(t,"distanceModel")})),r.distanceModel.value===a.Linear?o.createElement(n,{name:"Rolloff Factor",label:e("editor:properties.audio.lbl-rolloffFactor"),info:e("editor:properties.audio.info-rolloffFactor")},o.createElement(m,{min:0,max:1,smallStep:.001,mediumStep:.01,largeStep:.1,value:r.rolloffFactor.value,onChange:l(t,"rolloffFactor"),onRelease:i(t,"rolloffFactor")})):o.createElement(n,{name:"Rolloff Factor",label:e("editor:properties.audio.lbl-rolloffFactor"),info:e("editor:properties.audio.info-rfInfinity")},o.createElement(m,{min:0,smallStep:.1,mediumStep:1,largeStep:10,value:r.rolloffFactor.value,onChange:l(t,"rolloffFactor"),onRelease:i(t,"rolloffFactor")})),o.createElement(n,{name:"Ref Distance",label:e("editor:properties.audio.lbl-refDistance"),info:e("editor:properties.audio.info-refDistance")},o.createElement(m,{min:0,smallStep:.1,mediumStep:1,largeStep:10,value:r.refDistance.value,onChange:l(t,"refDistance"),onRelease:i(t,"refDistance"),unit:"m"})),o.createElement(n,{name:"Max Distance",disabled:r.distanceModel.value!==a.Linear,label:e("editor:properties.audio.lbl-maxDistance"),info:r.distanceModel.value!==a.Linear?e("editor:properties.audio.info-maxDistanceDisabled"):e("editor:properties.audio.info-maxDistance")},o.createElement(m,{min:1e-5,disabled:r.distanceModel.value!==a.Linear,style:r.distanceModel.value!==a.Linear?{backgroundColor:"#FF0000"}:{},smallStep:.1,mediumStep:1,largeStep:10,value:r.maxDistance.value,onChange:l(t,"maxDistance"),onRelease:i(t,"maxDistance"),unit:"m"})),o.createElement(n,{name:"Cone Inner Angle",label:e("editor:properties.audio.lbl-coneInnerAngle"),info:e("editor:properties.audio.info-coneInnerAngle")},o.createElement(m,{min:0,max:360,smallStep:.1,mediumStep:1,largeStep:10,value:r.coneInnerAngle.value,onChange:l(t,"coneInnerAngle"),onRelease:i(t,"coneInnerAngle"),unit:"°"})),o.createElement(n,{name:"Cone Outer Angle",label:e("editor:properties.audio.lbl-coneOuterAngle"),info:e("editor:properties.audio.info-coneOuterAngle")},o.createElement(m,{min:0,max:360,smallStep:.1,mediumStep:1,largeStep:10,value:r.coneOuterAngle.value,onChange:l(t,"coneOuterAngle"),onRelease:i(t,"coneOuterAngle"),unit:"°"})),o.createElement(n,{name:"Cone Outer Gain",label:e("editor:properties.audio.lbl-coreOuterGain"),info:e("editor:properties.audio.info-coreOuterGain"),className:"w-auto"},o.createElement(M,{min:0,max:1,step:.01,value:r.coneOuterGain.value,onChange:l(t,"coneOuterGain"),onRelease:i(t,"coneOuterGain")})))};c.iconComponent=b;const h={},Oe={title:"Editor/Properties/PositionalAudio",component:c,parameters:{componentSubtitle:"PositionalAudioNodeEditor",jest:"positionalAudioNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:h},s={args:{}};var f,g,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {}
}`,...(E=(g=s.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const Fe=["Default"];export{s as Default,Fe as __namedExportsOrder,Oe as default};