import{U as n,u as d}from"./index-_wFD3GG2.js";import{b as i}from"./ActionFunctions-CxzuxLxN.js";import"./index-CBqU2yxZ.js";import{S as c,E as m}from"./EditorControlFunctions-DO7c3hDV.js";import{E as p}from"./EditorServices-BJKHmurs.js";const g=(e,o,r)=>t=>{u(e,{[o]:t})},u=(e,o,r)=>{const t=i(p),s=t.lockPropertiesPanel.value?[n.getEntityByUUID(t.lockPropertiesPanel.value)]:c.getSelectedEntities();for(let a=0;a<s.length;a++){const l=s[a];d(l,e,o)}},k=(e,o,r)=>t=>{P(e,{[o]:t},r)},P=(e,o,r)=>{const t=i(p),s=r||(t.lockPropertiesPanel.value?[n.getEntityByUUID(t.lockPropertiesPanel.value)]:c.getSelectedEntities());m.modifyProperty(s,e,o)};export{P as a,u as b,k as c,g as u};