import{R as c}from"./index-qyj2ZBCg.js";import{c as u}from"./NotificationService-Ccxuyqtj.js";import{u as y,A as n}from"./useUpload-BlR1fzz9.js";import{u as D,I as F}from"./useDrop-D5Vgs9Yu.js";import{C as I}from"./index-UVsiwcak.js";function O({onRelease:t,value:r,acceptFileTypes:m,acceptDropItems:s,...e}){const f=y({multiple:!1,accepts:m});r&&!(r!=null&&r.includes(u.client.fileServer))&&r.includes("blob:https://");const[{canDrop:g,isOver:A},d]=D({accept:[...s,F.File],async drop(p,l){if(s.find(i=>i===p.type))t==null||t(p.url);else{const i=l.getItem(),a=Array.from(i.items).map(o=>o.webkitGetAsEntry());f(a).then(o=>{o&&(t==null||t(o[0]))})}},collect:p=>({canDrop:p.canDrop(),isOver:p.isOver()})});return c.createElement(c.Fragment,null,c.createElement(I,{ref:d,value:r,onRelease:t,...e}))}O.defaultProps={acceptFileTypes:n,acceptDropItems:n};export{O as F};