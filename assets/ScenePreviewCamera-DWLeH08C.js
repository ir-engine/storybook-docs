import{r as m}from"./index-qyj2ZBCg.js";import{v as S,P as T,E as x}from"./three.module-GtcjrW6H.js";import{d as b,S as a,u as g,c as u,e as H,g as c,p as O,s as h,m as j}from"./index-BAucurbO.js";import{i as P,c as C,b as y,g as E}from"./ActionFunctions-CGJ8cJXE.js";import{E as p}from"./EngineState-DaL1AnLu.js";import{w as _,d as D,R as L,T as o,c as R,b as F,a2 as G}from"./resourceLoaderHooks-CGFdCkMf.js";const l=b({name:"CameraHelperComponent",schema:a.Object({name:a.String("camera-helper"),camera:a.Required(a.Type(null)),entity:a.Optional(a.Entity())}),reactor:function(){const e=g(),r=u(e,l),[t]=_(S,e,r.camera.value);return D(e,r,t),t.update(),null}}),d=b({name:"EE_scenePreviewCamera",jsonID:"EE_scene_preview_camera",schema:a.Object({camera:a.Class(()=>new T(80,16/9,.2,8e3))}),reactor:function(){if(!P)return null;const e=g(),r=C(y(L).nodeHelperVisibility),t=u(e,d),s=u(e,o),i=H(E(p).viewerEntity,o),w=C(y(p).isEditing).value;return m.useLayoutEffect(()=>{if(!i||w)return;const n=c(e,o),f=c(E(p).viewerEntity,o);f.position.copy(n.position),f.rotation.copy(n.rotation);const v=t.camera.value;return R(e,v),()=>{F(e,v)}},[i]),O(()=>{if(!o.dirtyTransforms[e])return;const n=c(e,d).camera;n.matrixWorldInverse.copy(n.matrixWorld).invert()},{before:G}),m.useLayoutEffect(()=>{i&&(t.camera.value.position.copy(s.position.value),t.camera.value.rotation.copy(new x().setFromQuaternion(s.rotation.value)))},[s]),m.useLayoutEffect(()=>(r.value&&h(e,l,{name:"scene-preview-helper",camera:t.camera.value}),()=>{j(e,l)}),[r]),null}});export{d as S};