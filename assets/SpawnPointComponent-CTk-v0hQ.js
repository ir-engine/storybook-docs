import{r as b}from"./index-qyj2ZBCg.js";import{d,S as i,u as y,f as E,s as o,g as m,r as C,k as w}from"./index-BAucurbO.js";import{c as T,b as g}from"./ActionFunctions-CGJ8cJXE.js";import{R as L,L as S,T as p,E as x,V as A,c as F,Q as c,U as G}from"./resourceLoaderHooks-CGFdCkMf.js";import{B,g as u,l as H,m as U}from"./three.module-GtcjrW6H.js";const V="/static/editor/spawn-point.glb",h=d({name:"SpawnPointComponent",jsonID:"EE_spawn_point",schema:i.Object({permissionedUsers:i.Array(i.UserID())}),reactor:function(){const n=y(),s=T(g(L).nodeHelperVisibility),e=S(s.value?V:"",n);return b.useLayoutEffect(()=>{if(!e||!s.value)return;const t=E();o(t,p),o(t,x,{parentEntity:n}),o(t,A);const r=new B,f=new Float32Array([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5]),l=new Uint16Array([0,1,1,2,2,3,3,0]);return r.setIndex(new u(l,1)),r.setAttribute("position",new u(f,3)),F(t,new H(r,new U({color:"white"}))),c(e,!0),o(e,G,{referenceEntities:[n],computeFunction:()=>{const a=m(n,p).scale;m(e,p).scale.set(1/a.x,1/a.y,1/a.z)}}),()=>{C(t),w(e)&&c(e,!1)}},[e,s]),null}});export{h as S};