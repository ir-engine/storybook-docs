var c=Object.defineProperty;var p=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var n=(r,t,e)=>(p(r,typeof t!="symbol"?t+"":t,e),e);import{R as o,r as d}from"./index-CBqU2yxZ.js";import{h as u}from"./index-_wFD3GG2.js";import{S as E,E as f}from"./EditorControlFunctions-DO7c3hDV.js";import{L as h}from"./index-DVAwpzAq.js";import{T as g}from"./index-ChWBCYBM.js";import{P as S}from"./index-BqFAen_F.js";import{u as C}from"./useTranslation-C8TD7CCW.js";class v extends o.Component{constructor(){super(...arguments);n(this,"state",{error:null})}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,a){console.error("Uncaught error:",e,a)}render(){return this.state.error?o.createElement("div",{className:"m-2.5 overflow-auto bg-gray-600 text-red-500"},o.createElement(g,{fontWeight:"bold",component:"h1"},"[",this.props.name,"] ",this.state.error.message,"`"),o.createElement("pre",null,this.state.error.stack)):this.props.children}}const D=({description:r,children:t,name:e,entity:a,component:s,icon:i})=>{const{t:l}=C();return o.createElement(S,{name:e,description:r,icon:i,onClose:s&&u(a,s)?()=>{const m=E.getSelectedEntities();f.addOrRemoveComponent(m,s,!1)}:void 0},o.createElement(d.Suspense,{fallback:o.createElement(h,{fullScreen:!0,className:"block h-12 w-12",title:l("common:loader.loadingApp",{name:e})})},o.createElement(v,{name:e},t)))};export{D as N};
