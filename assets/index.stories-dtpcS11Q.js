import{r as v,R as e}from"./index-qyj2ZBCg.js";import{l as S}from"./index-DGEuJ1jr.js";import{c as A,e as L}from"./index-BAucurbO.js";import{u as M,c as m}from"./Util-kaiJ73V_.js";import{I as h}from"./useDrop-D5Vgs9Yu.js";import{N as R}from"./NodeEditor-CczQomyK.js";import{P as c,M as r,b as O,s as F}from"./MediaComponent-Bu_MiG0N.js";import{B as w}from"./index-CKtEwL62.js";import{C as f}from"./index-DFAV5Hcs.js";import"./index-eUpTpYJY.js";import"./ZoomOutSm-DAXDZ42X.js";import{T as V}from"./index-CDAcq9gd.js";import{S as _}from"./index-CDDdUXMV.js";import"./index-20cIGVlS.js";import"./index-DDmnEZPb.js";import"./index-B6BB6VPO.js";import{A as B}from"./index-B8uethju.js";import{I as l}from"./index-C1cqiOEK.js";import{N as D}from"./index-L4gkb2W1.js";import{S as P}from"./index-ClEh5UaY.js";import{c as T}from"./ActionFunctions-CGJ8cJXE.js";import{L as G}from"./index-DjMMlf6X.js";import{T as H}from"./index-C2kJMnxl.js";import{u as I}from"./useTranslation-V3-FmiHw.js";import{t as j}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-Cq1uYpEy.js";import"./v4-Dz_GI0CC.js";import"./three.module-GtcjrW6H.js";import"./EditorControlFunctions-BzMvWBNn.js";import"./resourceLoaderHooks-CGFdCkMf.js";import"./lodash-BYTxXjAY.js";import"./EngineState-DaL1AnLu.js";import"./XRState-CV4Nd7th.js";import"./AssetType-UUzlsI5F.js";import"./MathLerpFunctions-Fp1JJUGo.js";import"./client-Dp_9VnWk.js";import"./index-D-MhP2gL.js";import"./index-DaaykCGs.js";import"./SkyboxComponent-BNyLWZGx.js";import"./NotificationService-Ccxuyqtj.js";import"./index-Drm08J6t.js";import"./i18next-VFoMQVm4.js";import"./nonIterableRest--eTuPelP.js";import"./ComponentDropdownState-D5ozFa11.js";import"./index-CYTG6cBK.js";import"./index-C016ACLJ.js";import"./index-BxRVEa41.js";import"./iframe-CA8ArbAb.js";import"../sb-preview/runtime.js";import"./DebugMeshComponent-BPTLF_MN.js";import"./index-CDy1rULz.js";import"./index-BEYDssZK.js";import"./index-DMspzKh0.js";import"./miscUtils-D11F-TOL.js";import"./index-BwY-oT7m.js";import"./useClickOutside-S5C10oqi.js";import"./fuse-CrITxDw8.js";import"./index-Djhr6yFr.js";import"./context-DaZIzD-H.js";const U=({resources:a})=>{const{t}=I(),o=a.value,n=o.map(i=>({label:i.split("/").pop().split("?")[0]||i,value:i})),s=v.useRef(null),p=T(o[0]),b=T(g(o[0]));function g(i){var C;const d=(C=i.split(".").pop())==null?void 0:C.toLowerCase().split("?")[0];return["mp4","webm"].includes(d||"")?"video":"audio"}const y=i=>{const d=i;p.set(d),b.set(g(d)),s.current&&s.current.load()};return v.useEffect(()=>{y(o[0]??"")},[a]),e.createElement("div",{id:"media-preview-root-div",className:"flex-grow space-y-1 rounded-md border-2 border-solid border-gray-600 bg-[#1F1F1F] py-1.5"},e.createElement("div",{id:"media-preview-label",className:"flex-column mb-2 flex gap-2"},e.createElement(H,{className:"ml-5"},t("editor:properties.media-preview.lbl-mediaPreview")),e.createElement(V,{content:t("editor:properties.media-preview.info-mediaPreview")},e.createElement(G,{className:j("h-5 w-5","text-[#A0A1A2]")}))),e.createElement(l,{label:t("editor:properties.media-preview.lbl-selected-source")},e.createElement(P,{value:p.value,options:n,onChange:i=>y(i)})),b.value==="video"?e.createElement("video",{ref:s,src:p.value,width:"300",controls:!0,className:"w-full flex-grow p-2.5"}):e.createElement("audio",{ref:s,src:p.value,controls:!0,className:"w-full flex-grow p-2.5"}))},q=[{label:"Single",value:c.single},{label:"Random",value:c.random},{label:"Loop",value:c.loop},{label:"SingleLoop",value:c.singleloop}],E=a=>{const{t}=I(),o=A(a.entity,r),n=L(a.entity,O);v.useEffect(()=>{},[o.resources.value]);const s=()=>{o.paused.set(!o.paused.value)},p=()=>{n&&F(n.element,o.seekTime.value)};return e.createElement(R,{...a,name:t("editor:properties.media.name"),description:t("editor:properties.media.description"),Icon:E.iconComponent},e.createElement(_,{min:0,max:100,step:1,value:o.volume.value,onChange:M(r,"volume"),onRelease:m(r,"volume"),"aria-label":"Volume",label:t("editor:properties.media.lbl-volume")}),e.createElement(l,{name:"Start Time",label:t("editor:properties.media.seektime")},e.createElement(D,{value:o.seekTime.value,onChange:M(r,"seekTime"),onRelease:m(r,"seekTime")})),e.createElement(l,{name:"Is Music",label:t("editor:properties.media.lbl-isMusic"),info:t("editor:properties.media.info-isMusic")},e.createElement(f,{checked:o.isMusic.value,onChange:m(r,"isMusic")})),e.createElement(l,{name:"Controls",label:t("editor:properties.media.lbl-controls"),info:t("editor:properties.media.info-controls")},e.createElement(f,{checked:o.controls.value,onChange:m(r,"controls")})),e.createElement(l,{name:"Auto Play",label:t("editor:properties.media.lbl-autoplay"),info:t("editor:properties.media.info-autoplay")},e.createElement(f,{checked:o.autoplay.value,onChange:m(r,"autoplay")})),e.createElement(B,{label:t("editor:properties.media.paths"),inputLabel:t("editor:properties.media.path"),values:o.resources.value,dropTypes:[...h.Audios,...h.Videos],onChange:m(r,"resources")}),e.createElement(l,{name:"Play Mode",label:t("editor:properties.media.playmode")},e.createElement(P,{key:a.entity,options:q,value:o.playMode.value,onChange:m(r,"playMode")})),o.resources.length>0&&e.createElement("div",null,e.createElement(l,{name:"media-controls",info:t("editor:properties.media.info-mediaControls"),label:t("editor:properties.media.lbl-mediaControls"),className:"mb-2 flex gap-2"},e.createElement(w,{variant:"tertiary",onClick:s},o.paused.value?t("editor:properties.media.playtitle"):t("editor:properties.media.pausetitle")),e.createElement(w,{variant:"tertiary",onClick:p},t("editor:properties.media.resettitle"))),e.createElement(U,{resources:o.resources})))};E.iconComponent=S;const z={},Ze={title:"Editor/Properties/Media",component:E,parameters:{componentSubtitle:"MediaNodeEditor",jest:"",design:{type:"figma",url:""}},argTypes:z},u={args:{}};var x,k,N;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(N=(k=u.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const $e=["Default"];export{u as Default,$e as __namedExportsOrder,Ze as default};