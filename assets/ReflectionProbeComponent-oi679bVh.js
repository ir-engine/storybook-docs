import{d as c,S as e,u,c as i}from"./index-BAucurbO.js";import{r as n}from"./index-qyj2ZBCg.js";import{q as f,t as p}from"./resourceLoaderHooks-CGFdCkMf.js";const s=c({name:"ReflectionProbeComponent",jsonID:"IR_reflectionProbe",schema:e.Object({src:e.String(""),texture:e.NonSerialized(e.Nullable(e.Type()))}),errors:["LOADING_ERROR"],reactor:()=>{const t=u(),r=i(t,s),[o,a]=f(r.src.value,t);n.useEffect(()=>{o&&r.texture.set(o)},[o]),n.useEffect(()=>{a&&(r.texture.set(null),p(t,s,"LOADING_ERROR","Failed to load reflection probe texture."))},[])}});export{s as R};