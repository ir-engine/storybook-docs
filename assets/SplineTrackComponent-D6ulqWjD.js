import{r as b}from"./index-qyj2ZBCg.js";import{E as k,V as B,n as _,Q as w}from"./three.module-GtcjrW6H.js";import{d as F,S as o,u as P,c as Q,p as q,U as h,a as u,E as z,g as f}from"./index-BAucurbO.js";import{g as S}from"./ActionFunctions-CGJ8cJXE.js";import{E as M}from"./EngineState-DaL1AnLu.js";import{W as N,T as E,E as V}from"./resourceLoaderHooks-CGFdCkMf.js";import{S as x}from"./SplineComponent-DW2EI2d6.js";const r=new k,C=new w,d=new B,j=F({name:"SplineTrackComponent",jsonID:"EE_spline_track",schema:o.Object({splineEntityUUID:o.EntityUUID(),velocity:o.Number(1),enableRotation:o.Bool(!1),lockToXZPlane:o.Bool(!0),loop:o.Bool(!0),alpha:o.NonSerialized(o.Number(0))}),reactor:function(R){const p=P(),e=Q(p,j);return q(()=>{const{isEditor:i}=S(M),{deltaSeconds:s}=S(z);if(i||!e.splineEntityUUID.value)return;const c=h.getEntityByUUID(e.splineEntityUUID.value);if(!c)return;const l=u(c,x);if(!l)return;const t=u(p,E);if(!t)return;const a=l.elements;if(a.length<1)return;if(Math.floor(e.alpha.value)>a.length-1){if(!e.loop.value)return;e.alpha.set(0)}e.alpha.set(D=>D+s*e.velocity.value/l.curve.getLength());const m=e.alpha.value,n=Math.floor(e.alpha.value),y=n+1>a.length-1?0:n+1;if(!e.loop.value&&n>y)return;const I=f(c,E);l.curve.getPointAt(m-n,d),t.position.copy(d);const v=a[n].rotation,U=a[y].rotation;e.enableRotation.value&&(e.lockToXZPlane.value?(r.setFromQuaternion(v),r.z=0,t.rotation.setFromEuler(r),r.setFromQuaternion(U),r.z=0,C.setFromEuler(r),t.rotation.fastSlerp(C,m-n)):t.rotation.copy(v).fastSlerp(U,m-n)),t.matrix.compose(t.position,t.rotation,t.scale),t.matrix.premultiply(I.matrix),t.matrix.decompose(t.position,t.rotation,t.scale);const g=f(p,V).parentEntity;if(!g)return;const T=f(g,E);t.matrix.premultiply(O.copy(T.matrixWorld).invert()).decompose(t.position,t.rotation,t.scale)},{before:N}),b.useEffect(()=>{if(!e.splineEntityUUID.value)return;const i=h.getEntityByUUID(e.splineEntityUUID.value);if(!i)return;const s=u(i,x);s&&(s.curve.closed=e.loop.value)},[e.loop]),null}}),O=new _;export{j as S};