import{h as a}from"./three.module-GtcjrW6H.js";import{d as l,S as t,u as i,c as h,n as s}from"./index-BAucurbO.js";import"./ActionFunctions-CGJ8cJXE.js";import"./index-qyj2ZBCg.js";import{v as r,w as u,d as p}from"./resourceLoaderHooks-CGFdCkMf.js";const d=l({name:"ArrowHelperComponent",schema:t.Object({name:t.String("arrow-helper"),dir:r.Vec3({x:0,y:0,z:1}),origin:r.Vec3({x:0,y:0,z:0}),length:t.Number(.5),color:r.Color(16777215),headLength:t.Optional(t.Number()),headWidth:t.Optional(t.Number()),entity:t.Optional(t.Entity())}),reactor:function(){const n=i(),e=h(n,d),[o]=u(a,n,e.dir.value,e.origin.value,e.length.value,e.color.value,e.headLength.value,e.headWidth.value);return p(n,e,o),s(()=>{o.setDirection(e.dir.value),o.setColor(e.color.value),o.setLength(e.length.value,e.headLength.value,e.headWidth.value)},[e.dir,e.length,e.color,e.headLength,e.headWidth]),null}});export{d as A};