import{l as _}from"./lodash-BYTxXjAY.js";import{r as D,R}from"./index-qyj2ZBCg.js";import{b as Q}from"./index-CDy1rULz.js";import{h as $,g as h,f as H,s as j,c as W}from"./index-BAucurbO.js";import{ak as X,ae as q,T,c as G,E as J,aq as Y,ar as Z,$ as ee,as as te}from"./resourceLoaderHooks-CGFdCkMf.js";import{E as ae}from"./EditorControlFunctions-BzMvWBNn.js";import{N as ne}from"./NodeEditor-CczQomyK.js";import{b as oe,c as re,a as ie}from"./assetFunctions-BeyUinCv.js";import{E,f as se,A as me,s as le}from"./EngineState-DaL1AnLu.js";import{c as ce}from"./NotificationService-Ccxuyqtj.js";import{i as pe,d as ue,b as F}from"./VideoComponent-IrBXaUxg.js";import{S as P}from"./SceneSettingsComponent-Cyiqs3pJ.js";import{g as l,a as de,b as g,c as ge}from"./ActionFunctions-CGJ8cJXE.js";import{c as O}from"./Util-kaiJ73V_.js";import{b as be,E as fe}from"./three.module-GtcjrW6H.js";import{g as he}from"./utils-Bi-1wOXp.js";import{S as v}from"./ScenePreviewCamera-DWLeH08C.js";import{E as S}from"./SkyboxComponent-BNyLWZGx.js";import{g as Se}from"./uploadEnvMapBake-cnYOYQcU.js";import{I as Le}from"./index-B3FOemWK.js";import"./index-CDAcq9gd.js";import"./index-20cIGVlS.js";import"./index-DDmnEZPb.js";import"./index-B6BB6VPO.js";import{B as z}from"./index-CKtEwL62.js";import{u as ye}from"./useTranslation-V3-FmiHw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-Cq1uYpEy.js";import"./v4-Dz_GI0CC.js";import"./XRState-CV4Nd7th.js";import"./AssetType-UUzlsI5F.js";import"./MathLerpFunctions-Fp1JJUGo.js";import"./client-Dp_9VnWk.js";import"./index-D-MhP2gL.js";import"./index-DaaykCGs.js";import"./ComponentDropdownState-D5ozFa11.js";import"./index-C016ACLJ.js";import"./index-DGEuJ1jr.js";import"./tw-merge-Ds6tgvmq.js";import"./index-BxRVEa41.js";import"./index-C2kJMnxl.js";import"./i18next-VFoMQVm4.js";import"./nonIterableRest--eTuPelP.js";import"./miscUtils-D11F-TOL.js";import"./PopoverState-j2vPJZMZ.js";import"./index-DFAV5Hcs.js";import"./ZoomOutSm-DAXDZ42X.js";import"./index-eUpTpYJY.js";import"./VariantComponent-iNi6O4jh.js";import"./index-Drm08J6t.js";import"./PriorityQueue-AmI8X9YQ.js";import"./MediaComponent-Bu_MiG0N.js";import"./iframe-CA8ArbAb.js";import"../sb-preview/runtime.js";import"./DebugMeshComponent-BPTLF_MN.js";import"./MediaSystem-UIIhdius.js";import"./PositionalAudioComponent-Puq4weW-.js";import"./EnvMapBakeComponent-KWaU0m_i.js";import"./context-DaZIzD-H.js";function Re(a,t,o){const n=document.createElement("canvas");n.width=t,n.height=o;const e=n.getContext("2d");return e&&e.drawImage(a,0,0,a.width,a.height,0,0,t,o),n}const Te=$([v,q]);new X;async function Ee(a,t,o=.9,n="jpeg",e,i=!0){var k;if(!e){for(const u of Te())e=h(u,v).camera;if(!e){const u=H();j(u,v),e=h(u,v).camera;const{position:w,rotation:U}=h(l(E).viewerEntity,T);j(u,T,{position:w,rotation:U}),G(u,e),j(u,J,{parentEntity:l(S).rootEntity}),e.updateMatrixWorld(!0)}}const r=e.aspect,c=e.layers,p=e.layers.mask,s=h(l(E).viewerEntity,Y);e.aspect=a/t,e.updateProjectionMatrix(),e.layers.disableAll(),e.layers.set(Z.Scene);const b=h(l(E).viewerEntity,ee),f=b.renderer,L=b.renderContext,m=b.effectComposer;i&&((k=m.OutlineEffect)==null||k.clearSelection());const x=f.getSize(new be),I=f.getPixelRatio();m.setMainCamera(e),await new Promise((u,w)=>{const U=setInterval(()=>{const B=L.getParameter(L.VIEWPORT);B[2]===Math.round(a)&&B[3]===Math.round(t)&&(console.log("Resized viewport"),clearTimeout(M),clearInterval(U),u())},10),M=setTimeout(()=>{console.warn("Could not resize viewport in time"),clearTimeout(M),clearInterval(U),w()},1e4);m.setMainCamera(e),f.setPixelRatio(1),m.setSize(a,t,!1)}),m.setMainCamera(e),m.render();const y=Re(f.domElement,a,t);return e.layers=c,e.layers.mask=p,e.aspect=r,e.updateProjectionMatrix(),m.setMainCamera(s),f.setPixelRatio(I),m.setSize(x.width,x.height,!1),await he(y,n==="jpeg"?"image/jpeg":"image/png",n==="jpeg"?o:1)}const d=de({name:"ee.editor.SceneThumbnailState",initial:()=>({oldThumbnailURL:null,thumbnailURL:null,thumbnail:null,uploadingThumbnail:!1,oldLoadingScreenURL:null,loadingScreenURL:null,loadingScreenImageData:null,uploadingLoadingScreen:!1,resolution:2048}),createThumbnail:async(a=512,t=320,o=1)=>{const n=await Ee(a,t,o);if(!n)return;const e=l(S).sceneName.split(".").slice(0,-1).join("."),i=new File([n],e+".thumbnail.jpg"),r=g(d);r.merge({oldThumbnailURL:r.thumbnailURL.value,thumbnailURL:URL.createObjectURL(n),thumbnail:i})},uploadThumbnail:async a=>{const t=g(d);if(!t.thumbnail.value)return;t.uploadingThumbnail.set(!0);const o=t.thumbnailURL.value,n=l(S),e=n.projectName,i=n.sceneAssetID,r=n.scenePath;if(!r||!e)return;const c=oe(r,e),p="custom",s=new URL(await re(se,[t.thumbnail.value],{args:[{fileName:t.thumbnail.value.name,project:e,path:"public/thumbnails/"+t.thumbnail.value.name,contentType:t.thumbnail.value.type,type:"thumbnail",thumbnailKey:c,thumbnailMode:p}]}).promise);s.search="",s.hash="";const b=s.href.replace(ce.client.fileServer+"/","");await me.instance.service(le).patch(i,{thumbnailKey:b,thumbnailMode:p,project:e}),a&&O(P,"thumbnailURL",[a])(s.href),t.merge({thumbnailURL:null,oldThumbnailURL:o,thumbnail:null,uploadingThumbnail:!1})},createLoadingScreen:async()=>{const a=g(d),t=Se(a.resolution.value),o=await pe(t),n=g(d);n.merge({oldLoadingScreenURL:n.loadingScreenURL.value,loadingScreenURL:URL.createObjectURL(o),loadingScreenImageData:t})},uploadLoadingScreen:async a=>{const t=g(d),o=t.loadingScreenImageData.value;if(!o)return;t.uploadingLoadingScreen.set(!0);const n=ue(o,2048,2048,6,512),[e,i]=await Promise.all([F(o),F(n)]);if(!e||!i)return null;const r=l(S),c=r.sceneName.split(".").slice(0,-1).join("."),p=r.projectName,s=`${c}.envmap.ktx2`,b=`${c}.loadingscreen.ktx2`,f=t.loadingScreenURL.value,L=l(S).scenePath.split("/").slice(0,-1).join("/"),m=ie(p,[new File([e],s),new File([i],b)],[L,L]),[[x],[I]]=await Promise.all(m.promises),y=new URL(I);y.hash="",y.search="",a&&O(P,"loadingScreenURL",[a])(y.href),t.merge({loadingScreenURL:null,oldLoadingScreenURL:f,loadingScreenImageData:null,uploadingLoadingScreen:!1})},reactor:()=>{const a=ge(g(S));return D.useEffect(()=>{g(d).merge({oldLoadingScreenURL:null,oldThumbnailURL:null,loadingScreenURL:null,thumbnailURL:null,thumbnail:null,loadingScreenImageData:null})},[a.scenePath]),null}}),N=a=>{const{t}=ye(),o=W(l(E).viewerEntity,T),n=g(d),e=()=>{const{position:c,rotation:p}=h(l(E).viewerEntity,T),s=h(a.entity,v);j(a.entity,T,{position:c,rotation:p}),s.camera.position.copy(c),s.camera.rotation.copy(new fe().setFromQuaternion(p)),te(a.entity),ae.commitTransformSave([a.entity])},i=async()=>{await d.createThumbnail(512/2,320/2,1)},r=D.useCallback(_.debounce(i,500),[]);return D.useEffect(()=>(r(),()=>{r.cancel()}),[o.position]),R.createElement(ne,{...a,name:t("editor:properties.sceneCamera.name"),description:t("editor:properties.sceneCamera.description"),Icon:N.iconComponent},R.createElement(Le,{src:n.thumbnailURL.value??void 0}),R.createElement("div",{className:"my-4 flex h-auto flex-row items-center justify-center space-x-4"},R.createElement(z,{onClick:()=>{e(),i()}},t("editor:properties.sceneCamera.lbl-setFromViewPort")),R.createElement(z,{onClick:()=>{d.uploadThumbnail()},disabled:n.thumbnail.value===void 0},t("editor:properties.sceneCamera.lbl-updateThumbnail"))))};N.iconComponent=Q;const ve={},Dt={title:"Editor/Properties/ScenePreviewCamera",component:N,parameters:{componentSubtitle:"ScenePreviewCameraNodeEditor",jest:"scenePreviewCameraNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:ve},C={args:{}};var A,K,V;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {}
}`,...(V=(K=C.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const Nt=["Default"];export{C as Default,Nt as __namedExportsOrder,Dt as default};