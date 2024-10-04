import{r as c}from"./index-CBqU2yxZ.js";import{r as d,P as b}from"./three.module-D2RMN07C.js";import{c as v,S as t,e as E,f as s,p as C,b as i,n as w,s as S,r as T}from"./index-_wFD3GG2.js";import{c as g,b as H}from"./ActionFunctions-CxzuxLxN.js";import{e as h,f as x,R as O,n as P,o as _,z as o,Q as D}from"./EditorServices-BJKHmurs.js";const p=v({name:"CameraHelperComponent",schema:t.Object({name:t.String("camera-helper"),camera:t.Type(null),entity:t.Optional(t.Entity())}),onSet:(e,r,a)=>{if(a){if(!a.camera||!a.camera.isCamera)throw new Error("CameraHelperComponent: Valid Camera required");r.camera.set(a.camera),typeof a.name=="string"&&r.name.set(a.name)}},reactor:function(){const e=E(),r=s(e,p),[a]=h(d,e,r.camera.value);return x(e,r,a),a.update(),null}}),y=v({name:"EE_scenePreviewCamera",jsonID:"EE_scene_preview_camera",schema:t.Object({camera:t.Class(()=>new b(80,16/9,.2,8e3))}),reactor:function(){const e=E(),r=g(H(O).nodeHelperVisibility),a=s(e,y),m=s(e,o),u=s(C.instance.cameraEntity,o);return c.useLayoutEffect(()=>{const n=i(e,o),l=i(C.instance.cameraEntity,o);l.position.copy(n.position),l.rotation.copy(n.rotation);const f=a.camera.value;return P(e,f),()=>{_(e,f)}},[]),w(()=>{if(!o.dirtyTransforms[e])return;const n=i(e,y).camera;n.matrixWorldInverse.copy(n.matrixWorld).invert()},{before:D}),c.useLayoutEffect(()=>{u.position.value.copy(m.position.value),u.rotation.value.copy(m.rotation.value)},[m]),c.useLayoutEffect(()=>(r.value&&S(e,p,{name:"scene-preview-helper",camera:a.camera.value}),()=>{T(e,p)}),[r]),null}});export{y as S};
