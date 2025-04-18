import{j as ye}from"./jsx-runtime-xkaXTYnY.js";import{r as M}from"./index-qyj2ZBCg.js";const Te=M.createContext({dragDropManager:void 0});function T(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var V=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),z=function(){return Math.random().toString(36).substring(7).split("").join(".")},W={INIT:"@@redux/INIT"+z(),REPLACE:"@@redux/REPLACE"+z()};function Ee(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ie(t,e,r){var i;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(T(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(T(1));return r(ie)(t,e)}if(typeof t!="function")throw new Error(T(2));var n=t,s=e,a=[],o=a,c=!1;function d(){o===a&&(o=a.slice())}function g(){if(c)throw new Error(T(3));return s}function v(f){if(typeof f!="function")throw new Error(T(4));if(c)throw new Error(T(5));var p=!0;return d(),o.push(f),function(){if(p){if(c)throw new Error(T(6));p=!1,d();var y=o.indexOf(f);o.splice(y,1),a=null}}}function h(f){if(!Ee(f))throw new Error(T(7));if(typeof f.type>"u")throw new Error(T(8));if(c)throw new Error(T(9));try{c=!0,s=n(s,f)}finally{c=!1}for(var p=a=o,D=0;D<p.length;D++){var y=p[D];y()}return f}function u(f){if(typeof f!="function")throw new Error(T(10));n=f,h({type:W.REPLACE})}function m(){var f,p=v;return f={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(T(11));function S(){y.next&&y.next(g())}S();var _=p(S);return{unsubscribe:_}}},f[V]=function(){return this},f}return h({type:W.INIT}),i={dispatch:h,subscribe:v,getState:g,replaceReducer:u},i[V]=m,i}function l(t,e,...r){if(Se()&&e===void 0)throw new Error("invariant requires an error message argument");if(!t){let i;if(e===void 0)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let n=0;i=new Error(e.replace(/%s/g,function(){return r[n++]})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}function Se(){return typeof process<"u"&&!0}function Oe(t,e,r){return e.split(".").reduce((i,n)=>i&&i[n]?i[n]:r||null,t)}function be(t,e){return t.filter(r=>r!==e)}function se(t){return typeof t=="object"}function Ie(t,e){const r=new Map,i=s=>{r.set(s,r.has(s)?r.get(s)+1:1)};t.forEach(i),e.forEach(i);const n=[];return r.forEach((s,a)=>{s===1&&n.push(a)}),n}function we(t,e){return t.filter(r=>e.indexOf(r)>-1)}const U="dnd-core/INIT_COORDS",C="dnd-core/BEGIN_DRAG",F="dnd-core/PUBLISH_DRAG_SOURCE",N="dnd-core/HOVER",x="dnd-core/DROP",P="dnd-core/END_DRAG";function Y(t,e){return{type:U,payload:{sourceClientOffset:e||null,clientOffset:t||null}}}const Ce={type:U,payload:{clientOffset:null,sourceClientOffset:null}};function Ne(t){return function(r=[],i={publishSource:!0}){const{publishSource:n=!0,clientOffset:s,getSourceClientOffset:a}=i,o=t.getMonitor(),c=t.getRegistry();t.dispatch(Y(s)),xe(r,o,c);const d=_e(r,o);if(d==null){t.dispatch(Ce);return}let g=null;if(s){if(!a)throw new Error("getSourceClientOffset must be defined");Pe(a),g=a(d)}t.dispatch(Y(s,g));const h=c.getSource(d).beginDrag(o,d);if(h==null)return;Re(h),c.pinSource(d);const u=c.getSourceType(d);return{type:C,payload:{itemType:u,item:h,sourceId:d,clientOffset:s||null,sourceClientOffset:g||null,isSourcePublic:!!n}}}}function xe(t,e,r){l(!e.isDragging(),"Cannot call beginDrag while dragging."),t.forEach(function(i){l(r.getSource(i),"Expected sourceIds to be registered.")})}function Pe(t){l(typeof t=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function Re(t){l(se(t),"Item must be an object.")}function _e(t,e){let r=null;for(let i=t.length-1;i>=0;i--)if(e.canDragSource(t[i])){r=t[i];break}return r}function Le(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ae(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),i.forEach(function(n){Le(t,n,r[n])})}return t}function Me(t){return function(r={}){const i=t.getMonitor(),n=t.getRegistry();je(i),Ue(i).forEach((a,o)=>{const c=He(a,o,n,i),d={type:x,payload:{dropResult:Ae({},r,c)}};t.dispatch(d)})}}function je(t){l(t.isDragging(),"Cannot call drop while not dragging."),l(!t.didDrop(),"Cannot call drop twice during one drag operation.")}function He(t,e,r,i){const n=r.getTarget(t);let s=n?n.drop(i,t):void 0;return ke(s),typeof s>"u"&&(s=e===0?{}:i.getDropResult()),s}function ke(t){l(typeof t>"u"||se(t),"Drop result must either be an object or undefined.")}function Ue(t){const e=t.getTargetIds().filter(t.canDropOnTarget,t);return e.reverse(),e}function Fe(t){return function(){const r=t.getMonitor(),i=t.getRegistry();$e(r);const n=r.getSourceId();return n!=null&&(i.getSource(n,!0).endDrag(r,n),i.unpinSource()),{type:P}}}function $e(t){l(t.isDragging(),"Cannot call endDrag while not dragging.")}function j(t,e){return e===null?t===null:Array.isArray(t)?t.some(r=>r===e):t===e}function qe(t){return function(r,{clientOffset:i}={}){Ge(r);const n=r.slice(0),s=t.getMonitor(),a=t.getRegistry(),o=s.getItemType();return Xe(n,a,o),Be(n,s,a),Ve(n,s,a),{type:N,payload:{targetIds:n,clientOffset:i||null}}}}function Ge(t){l(Array.isArray(t),"Expected targetIds to be an array.")}function Be(t,e,r){l(e.isDragging(),"Cannot call hover while not dragging."),l(!e.didDrop(),"Cannot call hover after drop.");for(let i=0;i<t.length;i++){const n=t[i];l(t.lastIndexOf(n)===i,"Expected targetIds to be unique in the passed array.");const s=r.getTarget(n);l(s,"Expected targetIds to be registered.")}}function Xe(t,e,r){for(let i=t.length-1;i>=0;i--){const n=t[i],s=e.getTargetType(n);j(s,r)||t.splice(i,1)}}function Ve(t,e,r){t.forEach(function(i){r.getTarget(i).hover(e,i)})}function ze(t){return function(){if(t.getMonitor().isDragging())return{type:F}}}function We(t){return{beginDrag:Ne(t),publishDragSource:ze(t),hover:qe(t),drop:Me(t),endDrag:Fe(t)}}class Ye{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:r}=this.store;function i(s){return(...a)=>{const o=s.apply(e,a);typeof o<"u"&&r(o)}}const n=We(this);return Object.keys(n).reduce((s,a)=>{const o=n[a];return s[a]=i(o),s},{})}dispatch(e){this.store.dispatch(e)}constructor(e,r){this.isSetUp=!1,this.handleRefCountChange=()=>{const i=this.store.getState().refCount>0;this.backend&&(i&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!i&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=r,e.subscribe(this.handleRefCountChange)}}function Qe(t,e){return{x:t.x+e.x,y:t.y+e.y}}function oe(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Je(t){const{clientOffset:e,initialClientOffset:r,initialSourceClientOffset:i}=t;return!e||!r||!i?null:oe(Qe(e,i),r)}function Ze(t){const{clientOffset:e,initialClientOffset:r}=t;return!e||!r?null:oe(e,r)}const b=[],$=[];b.__IS_NONE__=!0;$.__IS_ALL__=!0;function Ke(t,e){return t===b?!1:t===$||typeof e>"u"?!0:we(e,t).length>0}class et{subscribeToStateChange(e,r={}){const{handlerIds:i}=r;l(typeof e=="function","listener must be a function."),l(typeof i>"u"||Array.isArray(i),"handlerIds, when specified, must be an array of strings.");let n=this.store.getState().stateId;const s=()=>{const a=this.store.getState(),o=a.stateId;try{o===n||o===n+1&&!Ke(a.dirtyHandlerIds,i)||e()}finally{n=o}};return this.store.subscribe(s)}subscribeToOffsetChange(e){l(typeof e=="function","listener must be a function.");let r=this.store.getState().dragOffset;const i=()=>{const n=this.store.getState().dragOffset;n!==r&&(r=n,e())};return this.store.subscribe(i)}canDragSource(e){if(!e)return!1;const r=this.registry.getSource(e);return l(r,`Expected to find a valid source. sourceId=${e}`),this.isDragging()?!1:r.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const r=this.registry.getTarget(e);if(l(r,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;const i=this.registry.getTargetType(e),n=this.getItemType();return j(i,n)&&r.canDrop(this,e)}isDragging(){return!!this.getItemType()}isDraggingSource(e){if(!e)return!1;const r=this.registry.getSource(e,!0);if(l(r,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;const i=this.registry.getSourceType(e),n=this.getItemType();return i!==n?!1:r.isDragging(this,e)}isOverTarget(e,r={shallow:!1}){if(!e)return!1;const{shallow:i}=r;if(!this.isDragging())return!1;const n=this.registry.getTargetType(e),s=this.getItemType();if(s&&!j(n,s))return!1;const a=this.getTargetIds();if(!a.length)return!1;const o=a.indexOf(e);return i?o===a.length-1:o>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return Je(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return Ze(this.store.getState().dragOffset)}constructor(e,r){this.store=e,this.registry=r}}const Q=typeof global<"u"?global:self,ae=Q.MutationObserver||Q.WebKitMutationObserver;function ue(t){return function(){const r=setTimeout(n,0),i=setInterval(n,50);function n(){clearTimeout(r),clearInterval(i),t()}}}function tt(t){let e=1;const r=new ae(t),i=document.createTextNode("");return r.observe(i,{characterData:!0}),function(){e=-e,i.data=e}}const rt=typeof ae=="function"?tt:ue;class nt{enqueueTask(e){const{queue:r,requestFlush:i}=this;r.length||(i(),this.flushing=!0),r[r.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const r=this.index;if(this.index++,e[r].call(),this.index>this.capacity){for(let i=0,n=e.length-this.index;i<n;i++)e[i]=e[i+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=rt(this.flush),this.requestErrorThrow=ue(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class it{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,r){this.onError=e,this.release=r,this.task=null}}class st{create(e){const r=this.freeTasks,i=r.length?r.pop():new it(this.onError,n=>r[r.length]=n);return i.task=e,i}constructor(e){this.onError=e,this.freeTasks=[]}}const ce=new nt,ot=new st(ce.registerPendingError);function at(t){ce.enqueueTask(ot.create(t))}const q="dnd-core/ADD_SOURCE",G="dnd-core/ADD_TARGET",B="dnd-core/REMOVE_SOURCE",R="dnd-core/REMOVE_TARGET";function ut(t){return{type:q,payload:{sourceId:t}}}function ct(t){return{type:G,payload:{targetId:t}}}function lt(t){return{type:B,payload:{sourceId:t}}}function dt(t){return{type:R,payload:{targetId:t}}}function ft(t){l(typeof t.canDrag=="function","Expected canDrag to be a function."),l(typeof t.beginDrag=="function","Expected beginDrag to be a function."),l(typeof t.endDrag=="function","Expected endDrag to be a function.")}function gt(t){l(typeof t.canDrop=="function","Expected canDrop to be a function."),l(typeof t.hover=="function","Expected hover to be a function."),l(typeof t.drop=="function","Expected beginDrag to be a function.")}function H(t,e){if(e&&Array.isArray(t)){t.forEach(r=>H(r,!1));return}l(typeof t=="string"||typeof t=="symbol",e?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var E;(function(t){t.SOURCE="SOURCE",t.TARGET="TARGET"})(E||(E={}));let ht=0;function pt(){return ht++}function vt(t){const e=pt().toString();switch(t){case E.SOURCE:return`S${e}`;case E.TARGET:return`T${e}`;default:throw new Error(`Unknown Handler Role: ${t}`)}}function J(t){switch(t[0]){case"S":return E.SOURCE;case"T":return E.TARGET;default:throw new Error(`Cannot parse handler ID: ${t}`)}}function Z(t,e){const r=t.entries();let i=!1;do{const{done:n,value:[,s]}=r.next();if(s===e)return!0;i=!!n}while(!i);return!1}class mt{addSource(e,r){H(e),ft(r);const i=this.addHandler(E.SOURCE,e,r);return this.store.dispatch(ut(i)),i}addTarget(e,r){H(e,!0),gt(r);const i=this.addHandler(E.TARGET,e,r);return this.store.dispatch(ct(i)),i}containsHandler(e){return Z(this.dragSources,e)||Z(this.dropTargets,e)}getSource(e,r=!1){return l(this.isSourceId(e),"Expected a valid source ID."),r&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return l(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return l(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return l(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return J(e)===E.SOURCE}isTargetId(e){return J(e)===E.TARGET}removeSource(e){l(this.getSource(e),"Expected an existing source."),this.store.dispatch(lt(e)),at(()=>{this.dragSources.delete(e),this.types.delete(e)})}removeTarget(e){l(this.getTarget(e),"Expected an existing target."),this.store.dispatch(dt(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const r=this.getSource(e);l(r,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=r}unpinSource(){l(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,r,i){const n=vt(e);return this.types.set(n,r),e===E.SOURCE?this.dragSources.set(n,i):e===E.TARGET&&this.dropTargets.set(n,i),n}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const Dt=(t,e)=>t===e;function yt(t,e){return!t&&!e?!0:!t||!e?!1:t.x===e.x&&t.y===e.y}function Tt(t,e,r=Dt){if(t.length!==e.length)return!1;for(let i=0;i<t.length;++i)if(!r(t[i],e[i]))return!1;return!0}function Et(t=b,e){switch(e.type){case N:break;case q:case G:case R:case B:return b;case C:case F:case P:case x:default:return $}const{targetIds:r=[],prevTargetIds:i=[]}=e.payload,n=Ie(r,i);if(!(n.length>0||!Tt(r,i)))return b;const a=i[i.length-1],o=r[r.length-1];return a!==o&&(a&&n.push(a),o&&n.push(o)),n}function St(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ot(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),i.forEach(function(n){St(t,n,r[n])})}return t}const K={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function bt(t=K,e){const{payload:r}=e;switch(e.type){case U:case C:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case N:return yt(t.clientOffset,r.clientOffset)?t:Ot({},t,{clientOffset:r.clientOffset});case P:case x:return K;default:return t}}function It(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),i.forEach(function(n){It(t,n,r[n])})}return t}const wt={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Ct(t=wt,e){const{payload:r}=e;switch(e.type){case C:return O({},t,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case F:return O({},t,{isSourcePublic:!0});case N:return O({},t,{targetIds:r.targetIds});case R:return t.targetIds.indexOf(r.targetId)===-1?t:O({},t,{targetIds:be(t.targetIds,r.targetId)});case x:return O({},t,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case P:return O({},t,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return t}}function Nt(t=0,e){switch(e.type){case q:case G:return t+1;case B:case R:return t-1;default:return t}}function xt(t=0){return t+1}function Pt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Rt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),i.forEach(function(n){Pt(t,n,r[n])})}return t}function _t(t={},e){return{dirtyHandlerIds:Et(t.dirtyHandlerIds,{type:e.type,payload:Rt({},e.payload,{prevTargetIds:Oe(t,"dragOperation.targetIds",[])})}),dragOffset:bt(t.dragOffset,e),refCount:Nt(t.refCount,e),dragOperation:Ct(t.dragOperation,e),stateId:xt(t.stateId)}}function Lt(t,e=void 0,r={},i=!1){const n=At(i),s=new et(n,new mt(n)),a=new Ye(n,s),o=t(a,e,r);return a.receiveBackend(o),a}function At(t){const e=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return ie(_t,t&&e&&e({name:"dnd-core",instanceId:"dnd-core"}))}function Mt(t,e){if(t==null)return{};var r=jt(t,e),i,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)i=s[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function jt(t,e){if(t==null)return{};var r={},i=Object.keys(t),n,s;for(s=0;s<i.length;s++)n=i[s],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}let ee=0;const w=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var er=M.memo(function(e){var{children:r}=e,i=Mt(e,["children"]);const[n,s]=Ht(i);return M.useEffect(()=>{if(s){const a=le();return++ee,()=>{--ee===0&&(a[w]=null)}}},[]),ye.jsx(Te.Provider,{value:n,children:r})});function Ht(t){if("manager"in t)return[{dragDropManager:t.manager},!1];const e=kt(t.backend,t.context,t.options,t.debugMode),r=!t.context;return[e,r]}function kt(t,e=le(),r,i){const n=e;return n[w]||(n[w]={dragDropManager:Lt(t,e,r,i)}),n[w]}function le(){return typeof global<"u"?global:window}function de(t){let e=null;return()=>(e==null&&(e=t()),e)}function Ut(t,e){return t.filter(r=>r!==e)}function Ft(t,e){const r=new Set,i=s=>r.add(s);t.forEach(i),e.forEach(i);const n=[];return r.forEach(s=>n.push(s)),n}class $t{enter(e){const r=this.entered.length,i=n=>this.isNodeInDocument(n)&&(!n.contains||n.contains(e));return this.entered=Ft(this.entered.filter(i),[e]),r===0&&this.entered.length>0}leave(e){const r=this.entered.length;return this.entered=Ut(this.entered.filter(this.isNodeInDocument),e),r>0&&this.entered.length===0}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class qt{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null}})})}loadDataTransfer(e){if(e){const r={};Object.keys(this.config.exposeProperties).forEach(i=>{const n=this.config.exposeProperties[i];n!=null&&(r[i]={value:n(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,r)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,r){return r===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const fe="__NATIVE_FILE__",ge="__NATIVE_URL__",he="__NATIVE_TEXT__",pe="__NATIVE_HTML__",te=Object.freeze(Object.defineProperty({__proto__:null,FILE:fe,HTML:pe,TEXT:he,URL:ge},Symbol.toStringTag,{value:"Module"}));function L(t,e,r){const i=e.reduce((n,s)=>n||t.getData(s),"");return i??r}const k={[fe]:{exposeProperties:{files:t=>Array.prototype.slice.call(t.files),items:t=>t.items,dataTransfer:t=>t},matchesTypes:["Files"]},[pe]:{exposeProperties:{html:(t,e)=>L(t,e,""),dataTransfer:t=>t},matchesTypes:["Html","text/html"]},[ge]:{exposeProperties:{urls:(t,e)=>L(t,e,"").split(`
`),dataTransfer:t=>t},matchesTypes:["Url","text/uri-list"]},[he]:{exposeProperties:{text:(t,e)=>L(t,e,""),dataTransfer:t=>t},matchesTypes:["Text","text/plain"]}};function Gt(t,e){const r=k[t];if(!r)throw new Error(`native type ${t} has no configuration`);const i=new qt(r);return i.loadDataTransfer(e),i}function A(t){if(!t)return null;const e=Array.prototype.slice.call(t.types||[]);return Object.keys(k).filter(r=>{const i=k[r];return i!=null&&i.matchesTypes?i.matchesTypes.some(n=>e.indexOf(n)>-1):!1})[0]||null}const Bt=de(()=>/firefox/i.test(navigator.userAgent)),ve=de(()=>!!window.safari);class re{interpolate(e){const{xs:r,ys:i,c1s:n,c2s:s,c3s:a}=this;let o=r.length-1;if(e===r[o])return i[o];let c=0,d=a.length-1,g;for(;c<=d;){g=Math.floor(.5*(c+d));const u=r[g];if(u<e)c=g+1;else if(u>e)d=g-1;else return i[g]}o=Math.max(0,d);const v=e-r[o],h=v*v;return i[o]+n[o]*v+s[o]*h+a[o]*v*h}constructor(e,r){const{length:i}=e,n=[];for(let u=0;u<i;u++)n.push(u);n.sort((u,m)=>e[u]<e[m]?-1:1);const s=[],a=[];let o,c;for(let u=0;u<i-1;u++)o=e[u+1]-e[u],c=r[u+1]-r[u],s.push(o),a.push(c/o);const d=[a[0]];for(let u=0;u<s.length-1;u++){const m=a[u],f=a[u+1];if(m*f<=0)d.push(0);else{o=s[u];const p=s[u+1],D=o+p;d.push(3*D/((D+p)/m+(D+o)/f))}}d.push(a[a.length-1]);const g=[],v=[];let h;for(let u=0;u<d.length-1;u++){h=a[u];const m=d[u],f=1/s[u],p=m+d[u+1]-h-h;g.push((h-m-p)*f),v.push(p*f*f)}this.xs=e,this.ys=r,this.c1s=d,this.c2s=g,this.c3s=v}}const Xt=1;function me(t){const e=t.nodeType===Xt?t:t.parentElement;if(!e)return null;const{top:r,left:i}=e.getBoundingClientRect();return{x:i,y:r}}function I(t){return{x:t.clientX,y:t.clientY}}function Vt(t){var e;return t.nodeName==="IMG"&&(Bt()||!(!((e=document.documentElement)===null||e===void 0)&&e.contains(t)))}function zt(t,e,r,i){let n=t?e.width:r,s=t?e.height:i;return ve()&&t&&(s/=window.devicePixelRatio,n/=window.devicePixelRatio),{dragPreviewWidth:n,dragPreviewHeight:s}}function Wt(t,e,r,i,n){const s=Vt(e),o=me(s?t:e),c={x:r.x-o.x,y:r.y-o.y},{offsetWidth:d,offsetHeight:g}=t,{anchorX:v,anchorY:h}=i,{dragPreviewWidth:u,dragPreviewHeight:m}=zt(s,e,d,g),f=()=>{let X=new re([0,.5,1],[c.y,c.y/g*m,c.y+m-g]).interpolate(h);return ve()&&s&&(X+=(window.devicePixelRatio-1)*m),X},p=()=>new re([0,.5,1],[c.x,c.x/d*u,c.x+u-d]).interpolate(v),{offsetX:D,offsetY:y}=n,S=D===0||D,_=y===0||y;return{x:S?D:p(),y:_?y:f()}}class Yt{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var e;return!((e=this.globalContext)===null||e===void 0)&&e.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return((e=this.optionsArgs)===null||e===void 0?void 0:e.rootElement)||this.window}constructor(e,r){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=r}}function Qt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ne(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),i.forEach(function(n){Qt(t,n,r[n])})}return t}class Jt{profile(){var e,r;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((e=this.dragStartSourceIds)===null||e===void 0?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((r=this.dragOverTargetIds)===null||r===void 0?void 0:r.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(e!==void 0){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;if(e!==void 0&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var r;(r=this.window)===null||r===void 0||r.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(e,r,i){return this.sourcePreviewNodeOptions.set(e,i),this.sourcePreviewNodes.set(e,r),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,r,i){this.sourceNodes.set(e,r),this.sourceNodeOptions.set(e,i);const n=a=>this.handleDragStart(a,e),s=a=>this.handleSelectStart(a);return r.setAttribute("draggable","true"),r.addEventListener("dragstart",n),r.addEventListener("selectstart",s),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),r.removeEventListener("dragstart",n),r.removeEventListener("selectstart",s),r.setAttribute("draggable","false")}}connectDropTarget(e,r){const i=a=>this.handleDragEnter(a,e),n=a=>this.handleDragOver(a,e),s=a=>this.handleDrop(a,e);return r.addEventListener("dragenter",i),r.addEventListener("dragover",n),r.addEventListener("drop",s),()=>{r.removeEventListener("dragenter",i),r.removeEventListener("dragover",n),r.removeEventListener("drop",s)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),r=this.sourceNodeOptions.get(e);return ne({dropEffect:this.altKeyPressed?"copy":"move"},r||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId(),r=this.sourcePreviewNodeOptions.get(e);return ne({anchorX:.5,anchorY:.5,captureDraggingState:!1},r||{})}isDraggingNativeItem(){const e=this.monitor.getItemType();return Object.keys(te).some(r=>te[r]===e)}beginDragNativeItem(e,r){this.clearCurrentDragSourceNode(),this.currentNativeSource=Gt(e,r),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;const r=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var i;return(i=this.rootElement)===null||i===void 0?void 0:i.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},r)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var e;(e=this.window)===null||e===void 0||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,r){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(r))}handleDragEnter(e,r){this.dragEnterTargetIds.unshift(r)}handleDragOver(e,r){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(r)}handleDrop(e,r){this.dropTargetIds.unshift(r)}constructor(e,r,i){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=n=>{const s=this.sourceNodes.get(n);return s&&me(s)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=n=>!!(n&&this.document&&this.document.body&&this.document.body.contains(n)),this.endDragIfSourceWasRemovedFromDOM=()=>{const n=this.currentDragSourceNode;n==null||this.isNodeInDocument(n)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=n=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(n||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=n=>{if(n.defaultPrevented)return;const{dragStartSourceIds:s}=this;this.dragStartSourceIds=null;const a=I(n);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(s||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:o}=n,c=A(o);if(this.monitor.isDragging()){if(o&&typeof o.setDragImage=="function"){const g=this.monitor.getSourceId(),v=this.sourceNodes.get(g),h=this.sourcePreviewNodes.get(g)||v;if(h){const{anchorX:u,anchorY:m,offsetX:f,offsetY:p}=this.getCurrentSourcePreviewNodeOptions(),S=Wt(v,h,a,{anchorX:u,anchorY:m},{offsetX:f,offsetY:p});o.setDragImage(h,S.x,S.y)}}try{o==null||o.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(n.target);const{captureDraggingState:d}=this.getCurrentSourcePreviewNodeOptions();d?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(c)this.beginDragNativeItem(c);else{if(o&&!o.types&&(n.target&&!n.target.hasAttribute||!n.target.hasAttribute("draggable")))return;n.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=n=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(n.dataTransfer)}if(!this.enterLeaveCounter.enter(n.target)||this.monitor.isDragging())return;const{dataTransfer:o}=n,c=A(o);c&&this.beginDragNativeItem(c,o)},this.handleTopDragEnter=n=>{const{dragEnterTargetIds:s}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=n.altKey,s.length>0&&this.actions.hover(s,{clientOffset:I(n)}),s.some(o=>this.monitor.canDropOnTarget(o))&&(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=n=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var s;(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(n.dataTransfer)}},this.handleTopDragOver=n=>{const{dragOverTargetIds:s}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none");return}this.altKeyPressed=n.altKey,this.lastClientOffset=I(n),this.scheduleHover(s),(s||[]).some(o=>this.monitor.canDropOnTarget(o))?(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?n.preventDefault():(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=n=>{this.isDraggingNativeItem()&&n.preventDefault(),this.enterLeaveCounter.leave(n.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=n=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var s;n.preventDefault(),(s=this.currentNativeSource)===null||s===void 0||s.loadDataTransfer(n.dataTransfer)}else A(n.dataTransfer)&&n.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=n=>{const{dropTargetIds:s}=this;this.dropTargetIds=[],this.actions.hover(s,{clientOffset:I(n)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=n=>{const s=n.target;typeof s.dragDrop=="function"&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA"||s.isContentEditable||(n.preventDefault(),s.dragDrop()))},this.options=new Yt(r,i),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new $t(this.isNodeInDocument)}}const tr=function(e,r,i){return new Jt(e,r,i)};export{er as D,fe as F,tr as H,Te as a,l as i};
