import{f as r}from"./three.module-D2RMN07C.js";import{c as a,S as t,e as l,f as i,j as h}from"./index-_wFD3GG2.js";import"./ActionFunctions-CxzuxLxN.js";import"./index-CBqU2yxZ.js";import{e as s,f as u}from"./EditorServices-BJKHmurs.js";const p=a({name:"ArrowHelperComponent",schema:t.Object({name:t.String("arrow-helper"),dir:t.Vec3({x:0,y:0,z:1}),origin:t.Vec3({x:0,y:0,z:0}),length:t.Number(.5),color:t.Color(16777215),headLength:t.Optional(t.Number()),headWidth:t.Optional(t.Number()),entity:t.Optional(t.Entity())}),reactor:function(){const n=l(),e=i(n,p),[o]=s(r,n,e.dir.value,e.origin.value,e.length.value,e.color.value,e.headLength.value,e.headWidth.value);return u(n,e,o),h(()=>{o.setDirection(e.dir.value),o.setColor(e.color.value),o.setLength(e.length.value,e.headLength.value,e.headWidth.value)},[e.dir,e.length,e.color,e.headLength,e.headWidth]),null}});export{p as A};
