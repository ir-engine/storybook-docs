var Gt=Object.defineProperty;var Xt=(e,t,r)=>t in e?Gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var U=(e,t,r)=>(Xt(e,typeof t!="symbol"?t+"":t,r),r);import{c as ee,A as Zt,E as er,H as m,N as tr,j as z,R as rr,k as nr,S as sr,l as or,P as ir,_ as ar,o as cr,p as ur,q as lr,r as fr,t as pr,v as yr,w as mr,x as ct,y as dr,z as Sr,d as hr,B as gr,a as Le,C as br,e as Er,D as vr,F as Cr,b as fe,f as ut,g as A,G as te,I as Ar,J as Mr,K as _r,L as xr,i as lt,M as ft,O as Tr,Q as Rr,T as pt,U as Ur,m as Qe,V as Or,W as wr,n as me,X as Ir,Y as Nr,Z as $r,h as Me,$ as Dr,a0 as jr,s as zr,a1 as kr,a2 as Fr,a3 as Pr,a4 as Lr,a5 as Qr,a6 as Br,u as Vr,a7 as qr}from"./ActionFunctions-CxzuxLxN.js";import{r as S,R as d}from"./index-CBqU2yxZ.js";import{v as Be}from"./v4-Dz_GI0CC.js";import{V as Hr,a as Jr,Q as Kr,k as Wr,F as J}from"./three.module-D2RMN07C.js";class Yr{constructor(){U(this,"_listeners");this._listeners={}}reset(){Object.keys(this._listeners).forEach(t=>{delete this._listeners[t]})}once(t,r,...n){const o=s=>{this.removeEventListener(t,o),r(s)};this.addEventListener(t,o)}addEventListener(t,r,...n){const o=this._listeners;o[t]===void 0&&(o[t]=[]),o[t].indexOf(r)===-1&&o[t].push(r)}hasEventListener(t,r,...n){return this._listeners[t]!==void 0&&this._listeners[t].indexOf(r)!==-1}removeEventListener(t,r,...n){const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(r);s!==-1&&o.splice(s,1)}}removeAllListenersForEvent(t,r,...n){r?delete this._listeners[t]:this._listeners[t]=[]}dispatchEvent(t,...r){const n=this._listeners[t.type];if(n!==void 0){const o=n.slice(0);for(let s=0;s<o.length;s++)o[s].call(this,t,...r)}}}const Gr=(e,t=[])=>{const r=S.useRef(!1);S.useEffect(()=>{let n;return r.current?n=e():r.current=!0,n},t)};function yt(){const[e,t]=S.useState(0);return()=>t(r=>r+1)}function Xr(e,t){return!(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((r,n)=>Object.is(r,t[n])))}function Ve(e,t){const r=S.useRef(),n=S.useRef();(!n.current||Xr(n.current,t))&&(n.current=t,r.current&&r.current(),r.current=e()),S.useLayoutEffect(()=>()=>{r.current&&r.current()},[])}const Zr=e=>{const t=S.useRef(null);return S.useEffect(()=>{t.current=e.value},[e]),t.current},en=()=>{const e=ee({current:null}),t=S.useCallback(r=>{e.current.set(r)},[]);return[e.value,t]},tn=Object.freeze(Object.defineProperty({__proto__:null,ActionDefinitions:Zt,ErrorBoundary:er,EventDispatcher:Yr,HyperFlux:m,NO_PROXY:tr,NO_PROXY_STEALTH:z,ReactorErrorBoundary:rr,ReactorReconciler:nr,StateDefinitions:sr,StateFragment:or,Validator:ir,__state:ar,addOutgoingTopicIfNecessary:cr,applyIncomingActions:ur,clearOutgoingActions:lr,configure:fr,createActionQueue:pr,createErrorBoundary:yr,createHookableFunction:mr,createHyperStore:ct,createState:dr,deepEqual:Sr,defineAction:hr,defineActionQueue:gr,defineState:Le,destroy:br,dispatchAction:Er,disposeStore:vr,extend:Cr,getMutableState:fe,getNestedObject:ut,getState:A,hookstate:te,hookstateMemo:Ar,identifiable:Mr,isActionReceptor:_r,isBrowser:xr,isClient:lt,isDev:ft,isHookstate:Tr,isHookstateValue:Rr,isTest:pt,isWebWorker:Ur,matches:Qe,matchesPeerID:Or,matchesWithDefault:wr,none:me,removeActionQueue:Ir,resolveObject:Nr,setInitialState:$r,startReactor:Me,stateNamespaceKey:Dr,suspend:jr,syncStateWithLocalStorage:zr,useDidMount:Gr,useForceUpdate:yt,useHookstate:ee,useHookstateCallback:kr,useHookstateEffect:Fr,useHookstateImperativeHandle:Pr,useHookstateInsertionEffect:Lr,useHookstateLayoutEffect:Qr,useHookstateMemo:Br,useImmediateEffect:Ve,useMutableState:Vr,usePrevious:Zr,useReactiveRef:en,useReactorRootContext:qr,useState:ee},Symbol.toStringTag,{value:"Module"}));var Y={i8:"i8",ui8:"ui8",ui8c:"ui8c",i16:"i16",ui16:"ui16",i32:"i32",ui32:"ui32",f32:"f32",f64:"f64",eid:"eid"},tt={i8:"Int8",ui8:"Uint8",ui8c:"Uint8Clamped",i16:"Int16",ui16:"Uint16",i32:"Int32",ui32:"Uint32",eid:"Uint32",f32:"Float32",f64:"Float64"},L={i8:Int8Array,ui8:Uint8Array,ui8c:Uint8ClampedArray,i16:Int16Array,ui16:Uint16Array,i32:Int32Array,ui32:Uint32Array,f32:Float32Array,f64:Float64Array,eid:Uint32Array},rt={uint8:2**8,uint16:2**16,uint32:2**32},rn=e=>t=>Math.ceil(t/e)*e,nn=rn(4),sn=Symbol("storeRef"),De=Symbol("storeSize"),on=Symbol("storeMaps"),B=Symbol("storeFlattened"),Se=Symbol("storeBase"),an=Symbol("storeType"),mt=Symbol("storeArrayElementCounts"),he=Symbol("storeSubarrays"),dt=Symbol("subarrayCursors"),cn=Symbol("subarray"),je=Symbol("parentArray"),St=Symbol("tagStore"),nt=Symbol("indexType"),st=Symbol("indexBytes"),ht=Symbol("isEidType"),I={},un=(e,t)=>{const r=new ArrayBuffer(t*e.BYTES_PER_ELEMENT),n=new e.constructor(r);return n.set(e,0),n},ln=(e,t)=>{if(ArrayBuffer.isView(e))e[t]=e.slice(0);else{const r=e[je].slice(0);e[t]=e.map((n,o)=>{const{length:s}=e[o],i=s*o,a=i+s;return r.subarray(i,a)})}},gt=(e,t)=>{e[B]&&e[B].forEach(r=>{ArrayBuffer.isView(r)?r[t]=0:r[t].fill(0)})},fn=(e,t)=>{const r=t*L[e].BYTES_PER_ELEMENT,n=new ArrayBuffer(r),o=new L[e](n);return o[ht]=e===Y.eid,o},pn=(e,t,r)=>{const n=e[De],o=Array(n).fill(0);o[an]=t,o[ht]=t===Y.eid;const s=e[dt],i=r<=rt.uint8?Y.ui8:r<=rt.uint16?Y.ui16:Y.ui32;if(!r)throw new Error("bitECS - Must define component array length");if(!L[t])throw new Error(`bitECS - Invalid component array property type ${t}`);if(!e[he][t]){const u=e[mt][t],f=new L[t](nn(u*n));f[nt]=tt[i],f[st]=L[i].BYTES_PER_ELEMENT,e[he][t]=f}const a=s[t],c=a+n*r;s[t]=c,o[je]=e[he][t].subarray(a,c);for(let u=0;u<n;u++){const f=r*u,x=f+r;o[u]=o[je].subarray(f,x),o[u][nt]=tt[i],o[u][st]=L[i].BYTES_PER_ELEMENT,o[u][cn]=!0}return o},ot=e=>Array.isArray(e)&&typeof e[0]=="string"&&typeof e[1]=="number",yn=(e,t)=>{const r=Symbol("store");if(!e||!Object.keys(e).length)return I[r]={[De]:t,[St]:!0,[Se]:()=>I[r]},I[r];e=JSON.parse(JSON.stringify(e));const n={},o=i=>{const a=Object.keys(i);for(const c of a)ot(i[c])?(n[i[c][0]]||(n[i[c][0]]=0),n[i[c][0]]+=i[c][1]):i[c]instanceof Object&&o(i[c])};o(e);const s={[De]:t,[on]:{},[he]:{},[sn]:r,[dt]:Object.keys(L).reduce((i,a)=>({...i,[a]:0}),{}),[B]:[],[mt]:n};if(e instanceof Object&&Object.keys(e).length){const i=(a,c)=>{if(typeof a[c]=="string")a[c]=fn(a[c],t),a[c][Se]=()=>I[r],s[B].push(a[c]);else if(ot(a[c])){const[u,f]=a[c];a[c]=pn(s,u,f),a[c][Se]=()=>I[r],s[B].push(a[c])}else a[c]instanceof Object&&(a[c]=Object.keys(a[c]).reduce(i,a[c]));return a};return I[r]=Object.assign(Object.keys(e).reduce(i,e),s),I[r][Se]=()=>I[r],I[r]}},ne=()=>{const e=[],t=[];e.sort=function(i){const a=Array.prototype.sort.call(this,i);for(let c=0;c<e.length;c++)t[e[c]]=c;return a};const r=i=>e[t[i]]===i;return{add:i=>{r(i)||(t[i]=e.push(i)-1)},remove:i=>{if(!r(i))return;const a=t[i],c=e.pop();c!==i&&(e[a]=c,t[c]=a)},has:r,sparse:t,dense:e,reset:()=>{e.length=0,t.length=0}}},_=Symbol("entityMasks"),re=Symbol("entityComponents"),R=Symbol("entitySparseSet"),ae=Symbol("entityArray"),qe=1e5,Ce=0,_e=qe,He=()=>_e,G=[],bt=.01,Et=bt,mn=()=>{_e=qe,Ce=0,Et=bt,G.length=0},dn=e=>{qe=e,mn(),_e=e,jn(e)},Sn=()=>Ce,hn=new Map,vt=e=>{const t=e[Ge]?G.length?G.shift():Ce++:G.length>Math.round(_e*Et)?G.shift():Ce++;if(t>e[Z])throw new Error("bitECS - max entities reached");return e[R].add(t),hn.set(t,e),e[Ke].forEach(r=>{xe(e,r,t)&&Te(r,t)}),e[re].set(t,new Set),t},Ct=(e,t)=>{if(e[R].has(t)){e[de].forEach(r=>{Ye(e,r,t)}),e[Ge]||G.push(t),e[R].remove(t),e[re].delete(t),e[Tt].delete(e[ke].get(t)),e[ke].delete(t);for(let r=0;r<e[_].length;r++)e[_][r][t]=0}},At=(e,t)=>{if(t===void 0)throw new Error("bitECS - entity is undefined.");if(!e[R].has(t))throw new Error("bitECS - entity does not exist in the world.");return Array.from(e[re].get(t))},Je=(e,t)=>e[R].has(t),Mt=Symbol("$modifier");function gn(e,t){const r=()=>[e,t];return r[Mt]=!0,r}var bn=e=>gn(e,"not"),de=Symbol("queries"),Ke=Symbol("notQueries"),En=Symbol("queryAny"),vn=Symbol("queryAll"),Cn=Symbol("queryNone"),w=Symbol("queryMap"),ce=Symbol("$dirtyQueries"),_t=Symbol("queryComponents"),xt=Object.freeze([]),An=e=>t=>{t[w].has(e)||We(t,e);const r=t[w].get(e);if(r.entered.dense.length===0)return xt;{const n=r.entered.dense.slice();return r.entered.reset(),n}},Mn=e=>t=>{t[w].has(e)||We(t,e);const r=t[w].get(e);if(r.exited.dense.length===0)return xt;{const n=r.exited.dense.slice();return r.exited.reset(),n}},We=(e,t)=>{const r=[],n=[],o=[];t[_t].forEach(l=>{if(typeof l=="function"&&l[Mt]){const[g,et]=l();e[O].has(g)||ze(e,g),et==="not"&&n.push(g),et==="changed"&&(o.push(g),r.push(g))}else e[O].has(l)||ze(e,l),r.push(l)});const s=l=>e[O].get(l),i=r.concat(n).map(s),a=ne(),c=[],u=[],f=ne(),x=ne(),F=ne(),q=i.map(l=>l.generationId).reduce((l,g)=>(l.includes(g)||l.push(g),l),[]),h=(l,g)=>(l[g.generationId]||(l[g.generationId]=0),l[g.generationId]|=g.bitflag,l),b=r.map(s).reduce(h,{}),Oe=n.map(s).reduce(h,{}),we=i.reduce(h,{}),Yt=r.filter(l=>!l[St]).map(l=>Object.getOwnPropertySymbols(l).includes(B)?l[B]:[l]).reduce((l,g)=>l.concat(g),[]),H=Object.assign(a,{archetypes:c,changed:u,components:r,notComponents:n,changedComponents:o,allComponents:i,masks:b,notMasks:Oe,hasMasks:we,generations:q,flatProps:Yt,toRemove:f,entered:x,exited:F,shadows:[]});e[w].set(t,H),e[de].add(H),i.forEach(l=>{l.queries.add(H)}),n.length&&e[Ke].add(H);for(let l=0;l<Sn();l++){if(!e[R].has(l))continue;xe(e,H,l)&&Te(H,l)}},_n=(e,t)=>{const r=Symbol(),n=e.flatProps[t];return ln(n,r),e.shadows[t]=n[r],n[r]},xn=(e,t)=>{t&&(e.changed=[]);const{flatProps:r,shadows:n}=e;for(let o=0;o<e.dense.length;o++){const s=e.dense[o];let i=!1;for(let a=0;a<r.length;a++){const c=r[a],u=n[a]||_n(e,a);if(ArrayBuffer.isView(c[s])){for(let f=0;f<c[s].length;f++)if(c[s][f]!==u[s][f]){i=!0;break}u[s].set(c[s])}else c[s]!==u[s]&&(i=!0,u[s]=c[s])}i&&e.changed.push(s)}return e.changed},Tn=(...e)=>{let t,r,n,o;if(Array.isArray(e[0])&&(t=e[0]),t===void 0||t[O]!==void 0)return i=>i?i[ae]:t[ae];const s=function(i,a=!0){i[w].has(s)||We(i,s);const c=i[w].get(s);return Un(i),c.changedComponents.length?xn(c,a):c.dense};return s[_t]=t,s[En]=r,s[vn]=n,s[Cn]=o,s},xe=(e,t,r)=>{const{masks:n,notMasks:o,generations:s}=t;for(let i=0;i<s.length;i++){const a=s[i],c=n[a],u=o[a],f=e[_][a][r];if(u&&f&u||c&&(f&c)!==c)return!1}return!0},Te=(e,t)=>{e.toRemove.remove(t),e.entered.add(t),e.add(t)},Rn=e=>{for(let t=e.toRemove.dense.length-1;t>=0;t--){const r=e.toRemove.dense[t];e.toRemove.remove(r),e.remove(r)}},Un=e=>{e[ce].size&&(e[ce].forEach(Rn),e[ce].clear())},Ye=(e,t,r)=>{!t.has(r)||t.toRemove.has(r)||(t.toRemove.add(r),e[ce].add(t),t.exited.add(r))},Ie=(e,t)=>{const r=e[w].get(t);e[de].delete(r),e[w].delete(t)},O=Symbol("componentMap"),On=(e,t)=>{const r=yn(e,t||He());return e&&Object.keys(e).length,r},wn=e=>{e[ue]*=2,e[ue]>=2**31&&(e[ue]=1,e[_].push(new Uint32Array(e[Z])))},ze=(e,t)=>{if(!t)throw new Error("bitECS - Cannot register null or undefined component");const r=new Set,n=new Set,o=new Set;e[de].forEach(s=>{s.allComponents.includes(t)&&r.add(s)}),e[O].set(t,{generationId:e[_].length-1,bitflag:e[ue],store:t,queries:r,notQueries:n,changedQueries:o}),wn(e)},Re=(e,t,r)=>{const n=e[O].get(t);if(!n)return!1;const{generationId:o,bitflag:s}=n;return(e[_][o][r]&s)===s},In=(e,t,r,n=!1)=>{if(r===void 0)throw new Error("bitECS - entity is undefined.");if(!e[R].has(r))throw new Error("bitECS - entity does not exist in the world.");if(e[O].has(t)||ze(e,t),Re(e,t,r))return;const o=e[O].get(t),{generationId:s,bitflag:i,queries:a,notQueries:c}=o;e[_][s][r]|=i,a.forEach(u=>{u.toRemove.remove(r);const f=xe(e,u,r);f&&(u.exited.remove(r),Te(u,r)),f||(u.entered.remove(r),Ye(e,u,r))}),e[re].get(r).add(t),n&&gt(t,r)},Nn=(e,t,r,n=!0)=>{if(r===void 0)throw new Error("bitECS - entity is undefined.");if(!e[R].has(r))throw new Error("bitECS - entity does not exist in the world.");if(!Re(e,t,r))return;const o=e[O].get(t),{generationId:s,bitflag:i,queries:a}=o;e[_][s][r]&=~i,a.forEach(c=>{c.toRemove.remove(r);const u=xe(e,c,r);u&&(c.exited.remove(r),Te(c,r)),u||(c.entered.remove(r),Ye(e,c,r))}),e[re].get(r).delete(t),n&&gt(t,r)},Z=Symbol("size"),$n=Symbol("resizeThreshold"),ue=Symbol("bitflag"),Dn=Symbol("archetypes"),Tt=Symbol("localEntities"),ke=Symbol("localEntityLookup"),Ge=Symbol("manualEntityRecycling"),Rt=[],jn=e=>{Rt.forEach(t=>{t[Z]=e;for(let r=0;r<t[_].length;r++){const n=t[_][r];t[_][r]=un(n,e)}t[$n]=t[Z]-t[Z]/5})},zn=(...e)=>{const t=typeof e[0]=="object"?e[0]:{},r=typeof e[0]=="number"?e[0]:typeof e[1]=="number"?e[1]:He();return kn(t,r),Rt.push(t),t},kn=(e,t=He())=>(e[Z]=t,e[ae]&&e[ae].forEach(r=>Ct(e,r)),e[_]=[new Uint32Array(t)],e[re]=new Map,e[Dn]=[],e[R]=ne(),e[ae]=e[R].dense,e[ue]=1,e[O]=new Map,e[w]=new Map,e[de]=new Set,e[Ke]=new Set,e[ce]=new Set,e[Tt]=new Map,e[ke]=new Map,e[Ge]=!1,e),Fn=e=>e[R].dense.slice(0),T=Y;const N=0;Qe.number;const _s=Qe.string,Ut=()=>vt(m.store),Pn=e=>{if(!e||!Ot(e))return[];Jt(e),Ct(m.store,e)},Ot=e=>Je(m.store,e),Xe=d.createContext(N),Ln=()=>d.useContext(Xe),xs=()=>Be(),M=Le({name:"ee.meta.SystemState",initial:()=>({performanceProfilingEnabled:ft,activeSystemReactors:new Map,currentSystemUUID:"__null__",reactiveQueryStates:new Set})}),it=lt?window.performance:require("perf_hooks").performance,v=it.now.bind(it),Qn=1e4;function Ts(){const e=v();return()=>v()-e}function Rs(e,t=60){const r="requestAnimationFrame"in self?qn():Vn(t);r.setContext(self);let n=0;const o={fixed:0,net:0,update:0,render:0},s={fixed:0,net:0,update:0,render:0};function i(h,b){c("update"),e(h,b),u("update")}const a=new Map;function c(h){let b;a.has(h)?b=a.get(h):(b={time:0,ticks:0},a.set(h,b)),b.ticks=n,b.time=v()}function u(h){const b=a.get(h);o[h]+=n-b.ticks,s[h]+=v()-b.time}function f(){v(),v(),v()+Qn}function x(){r.setAnimationLoop(i),r.start(),f()}function F(){r.setAnimationLoop(null),r.stop()}function q(){F()}return{animation:r,start:x,stop:F,clear:q}}class Bn{constructor(t=()=>{},r=10,n){U(this,"_update");U(this,"_lastFrameTime");U(this,"_running");U(this,"_step");U(this,"_deltas");this._times=r,this._option=n,this._update=t,this._running=!1,this._step=1e3/this._times,this._lastFrameTime=this._time(),this._deltas=Array()}_nano(){const t=process.hrtime();return+t[0]*1e9+ +t[1]}_ConvertSecondsToNano(t){return t*1e9}_ConvertNanoToSeconds(t){return t*(1/1e9)}_ConvertNanoToMs(t){return this._ConvertNanoToSeconds(t)*1e3}_ConvertMsToNano(t){return t*1e6}now_ms(){return this._ConvertNanoToMs(this._time())}_time(){var t,r;return((r=(t=this._option)==null?void 0:t.time_fn)==null?void 0:r.call(t))??this._nano()}start(){this._running=!0,this._lastFrameTime=this._time(),this._deltas=Array();const t=this._ConvertMsToNano(this._step),r=Math.max(Math.floor(this._step-1),16),n=3,o=Math.ceil(1/this._step*1e3/2)+1,s=this;let i=this._time();function a(){var F,q,h,b;if(!s._running)return;const c=s._time(),u=c-s._lastFrameTime;if(c<=i)return setImmediate(a);s._deltas.length>=o&&s._deltas.shift(),s._deltas.push(u);const f=s._deltas.reduce((Oe,we)=>Oe+we,0)/(s._deltas.length||1);return s._lastFrameTime=c,i=c+t,s._ConvertNanoToMs(Math.abs(t-f))>=n&&(((F=s._option)!=null&&F.logs||(q=s._option)!=null&&q.dif_log)&&console.log(s._ConvertNanoToMs(t-f)),i+=t-f),s._update(s._ConvertNanoToMs(u)/1e3),((h=s._option)!=null&&h.logs||(b=s._option)!=null&&b.delta_log)&&console.log(`${s._ConvertNanoToMs(u)} ms`),i-s._time()>t?setTimeout(a,r):setImmediate(a)}return setTimeout(a,r),this}stop(){return this._running=!1,this}}function Vn(e){let t=null,r=null;return{start:function(){const n=()=>{r&&r(v(),null)};t=new Bn(n,e).start()},stop:function(){t==null||t.stop()},setAnimationLoop:function(n){r=n},setContext:function(){}}}function qn(){let e=null,t=!1,r=null,n=null;function o(s,i){n=e.requestAnimationFrame(o),r(s,i)}return{start:function(){t!==!0&&r!==null&&(n=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){r=s},setContext:function(s){e=s}}}const C=new Map;globalThis.SystemDefinitions=C;const at=new Map,Hn=1e3*10;function k(e){const t=C.get(e);if(!t){console.warn(`System ${e} does not exist.`);return}for(let s=0;s<t.preSystems.length;s++)k(t.preSystems[s]);if(t.reactor&&!A(M).activeSystemReactors.has(t.uuid)){const s=Me(t.reactor);A(M).activeSystemReactors.set(t.uuid,s)}const r=v();try{fe(M).currentSystemUUID.set(e),t.execute()}catch(s){const i=m.store.logger("ecs:SystemFunctions");i.error(`Failed to execute system ${t.uuid}`),i.error(s)}finally{fe(M).currentSystemUUID.set("__null__")}const n=v(),o=n-r;t.systemDuration=o,t.systemDuration!=0&&(t.avgSystemDuration=(o+t.avgSystemDuration)*.5),A(M).performanceProfilingEnabled&&o>50&&(at.get(e)??0)<n-Hn&&(at.set(e,n),m.store.logger("ecs:SystemFunctions").warn(`Long system execution detected. System: ${t.uuid} 
 Duration: ${o}`));for(let s=0;s<t.subSystems.length;s++)k(t.subSystems[s]);for(let s=0;s<t.postSystems.length;s++)k(t.postSystems[s])}function V(e){if(C.has(e.uuid))throw new Error(`System ${e.uuid} already exists.`);const t={preSystems:[],subSystems:[],postSystems:[],sceneSystem:!1,execute:()=>{},...e,uuid:e.uuid,enabled:!1,systemDuration:0,avgSystemDuration:0};C.set(t.uuid,t);const r=t.insert;if("before"in r&&typeof r.before>"u")throw console.log(t),new Error("System insert.before is undefined");if("with"in r&&typeof r.with>"u")throw console.log(t),new Error("System insert.with is undefined");if("after"in r&&typeof r.after>"u")throw console.log(t),new Error("System insert.after is undefined");if(r!=null&&r.before){const n=C.get(r.before);if(!n)throw new Error(`System ${r.before} does not exist.`);n.preSystems.push(t.uuid),console.log(`Registered system ${e.uuid} before ${r.before}`)}if(r!=null&&r.with){const n=C.get(r.with);if(!n)throw new Error(`System ${r.with} does not exist.`);n.subSystems.push(t.uuid),console.log(`Registered system ${e.uuid} with ${r.with}`)}if(r!=null&&r.after){const n=C.get(r.after);if(!n)throw new Error(`System ${r.after} does not exist.`);n.postSystems.push(t.uuid),console.log(`Registered system ${e.uuid} after ${r.after}`)}return e.uuid}const Jn=(e,t)=>{Ve(()=>{const r=V({uuid:Be(),execute:e,insert:t});return()=>{le(r)}},[])},le=e=>{const t=C.get(e);if(!t)throw new Error(`System ${e} does not exist.`);for(const o of t.subSystems)le(o);const r=A(M).activeSystemReactors.get(t.uuid);r&&(A(M).activeSystemReactors.delete(t.uuid),r.stop());for(const o of t.postSystems)le(o);for(const o of t.preSystems)le(o);const n=t.insert;if(n!=null&&n.before){const o=C.get(n.before);o.preSystems.splice(o.preSystems.indexOf(t.uuid),1)}if(n!=null&&n.with){const o=C.get(n.with);o.subSystems.splice(o.subSystems.indexOf(t.uuid),1)}if(n!=null&&n.after){const o=C.get(n.after);o.postSystems.splice(o.postSystems.indexOf(t.uuid),1)}C.delete(e)},wt=V({uuid:"ee.engine.input-group",insert:{}}),It=V({uuid:"ee.engine.simulation-group",insert:{}}),Nt=V({uuid:"ee.engine.animation-group",insert:{}}),Ze=V({uuid:"ee.engine.presentation-group",insert:{}}),Kn=[wt,It,Nt,Ze];function Fe(e){const t=Tn(e),r=An(t),n=Mn(t),o=()=>t(m.store);return o.enter=()=>r(m.store),o.exit=()=>n(m.store),o._query=t,o._enterQuery=r,o._exitQuery=n,o}function Pe(e){Ie(m.store,e._query),Ie(m.store,e._enterQuery),Ie(m.store,e._exitQuery)}V({uuid:"ee.hyperflux.ReactiveQuerySystem",insert:{after:Ze},execute:()=>{for(const{query:e,forceUpdate:t}of A(M).reactiveQueryStates){const r=e.enter().length,n=e.exit().length;(r||n)&&t()}}});function $t(e){const t=Fe(e),r=t();Pe(t);const n=yt();return S.useLayoutEffect(()=>{const o=Fe(e),s={query:o,forceUpdate:n,components:e};return A(M).reactiveQueryStates.add(s),()=>{Pe(o),A(M).reactiveQueryStates.delete(s)}},[]),Ve(()=>{function o({entity:a}){return d.createElement(d.Fragment,null,e.map(c=>{const u="isComponent"in c?c:c()[0];return d.createElement(s,{entity:a,key:u.name,Component:u})}))}function s(a){return Kt(a.entity,a.Component),n(),null}const i=Me(function(){return d.createElement(d.Fragment,null,r.map(c=>d.createElement(o,{key:c,entity:c})))});return()=>{i.stop()}},[JSON.stringify(r)]),r}const Wn=S.memo(e=>d.createElement(d.Fragment,null,d.createElement(Gn,null,d.createElement(S.Suspense,{fallback:null},d.createElement(Xe.Provider,{value:e.entity},d.createElement(e.ChildEntityReactor,{...e.props})))))),Yn=S.memo(e=>{const t=$t(e.Components),r=S.useMemo(()=>S.memo(e.ChildEntityReactor),[e.ChildEntityReactor]);return d.createElement(d.Fragment,null,t.map(n=>d.createElement(Wn,{key:n,entity:n,ChildEntityReactor:r,props:e.props})))});class Gn extends d.Component{constructor(){super(...arguments);U(this,"state",{error:null})}static getDerivedStateFromError(r){return{error:r}}componentDidCatch(r,n){console.error("Uncaught error:",r,n)}render(){return this.state.error?null:this.props.children}}const p=Symbol("Kind"),Ne=Symbol("NonSerializable"),Xn=e=>typeof e=="function"?e():structuredClone(e),Zn=e=>{const t={};for(const r in e)t[r]=X(e[r]);return t},se=e=>{var t;if((t=e.options)!=null&&t.deserialize)return!0;switch(e[p]){case"Object":case"Class":{const r=e.properties,n=Object.keys(r);for(const o of n)if(se(r[o]))return!0;return!1}case"Partial":{const r=e.properties;return se(r)}case"NonSerialized":{const r=e.properties;return se(r)}case"Required":{const r=e.properties;return se(r)}default:return!1}},$e=e=>e!=null,oe=(e,t,r)=>{var n,o,s,i;if($e(r)&&((n=e.options)!=null&&n.deserialize))return(o=e.options)==null?void 0:o.deserialize(t,r);switch(e[p]){case"Object":case"Class":{if(!$e(r))return r;if((s=e.options)!=null&&s.deserialize)return(i=e.options)==null?void 0:i.deserialize(t,r);const a=e.properties,c=Object.keys(a);for(const u of c)$e(r[u])&&(r[u]=oe(a[u],t[u],r[u]));break}case"Partial":{const a=e.properties;return oe(a,t,r)}case"NonSerialized":{const a=e.properties;return oe(a,t,r)}case"Required":{const a=e.properties;return oe(a,t,r)}}return r},ge=e=>{switch(e[p]){case"Object":case"Class":{const t=e.properties,r=Object.keys(t);for(const n of r)if(ge(t[n]))return!0;return!1}case"Partial":{const t=e.properties;return ge(t)}case"NonSerialized":{const t=e.properties;return ge(t)}case"Required":return!0;default:return!1}},be=(e,t,r="")=>{switch(e[p]){case"Object":case"Class":{const n=e.properties,o=Object.keys(n);for(const s of o){const[i,a]=be(n[s],t==null?void 0:t[s],s);if(!i)return[i,a]}return[!0,""]}case"Partial":{const n=e.properties;return be(n,t)}case"NonSerialized":{const n=e.properties;return be(n,t)}case"Required":return[t!=null,r];default:return[!0,""]}},Ee=e=>{if(!e||!e[p])return!1;switch(e[p]){case"Null":case"Undefined":case"Void":case"Number":case"Bool":case"String":case"Enum":case"Literal":case"Class":case"Array":case"Tuple":case"Func":return!0;case"Any":case"Object":case"Record":case"Partial":return!1;case"Union":{const t=e.properties;if(!t.length)return!1;for(const r of t)if(!Ee(r))return!1;return!0}case"Required":{const t=e.properties;return Ee(t)}case"NonSerialized":{const t=e.properties;return Ee(t)}default:return!1}},X=e=>{if(e.options&&"default"in e.options)return Xn(e.options.default);switch(e[p]){case"Null":return null;case"Undefined":return;case"Void":return;case"Number":return 0;case"Bool":return!1;case"String":return"";case"Enum":return Object.values(e.properties)[0];case"Literal":return e.properties;case"Object":case"Class":{const t=e.properties;return Zn(t)}case"Any":case"Record":case"Partial":return{};case"Array":case"Tuple":return[];case"Union":{const t=e.properties;return t.length?X(t[0]):null}case"Func":{const t=e.properties;return()=>X(t.return)}case"Required":{const t=e.properties;return X(t)}case"NonSerialized":{const t=e.properties;return X(t)}default:return}},es=e=>ArrayBuffer.isView(e),ts=e=>e instanceof Set,rs=e=>e instanceof Map,ns=e=>e==="bigint"||e==="boolean"||e==="number"||e==="string"||e==="symbol"||e==="undefined",ie=e=>{var r;const t=typeof e;if(ns(t)||e===null)return e;if(es(e))return e.slice(0);if(Array.isArray(e))return(r=e.map(n=>ie(n)))==null?void 0:r.filter(n=>n!==Ne);if(ts(e))return new Set(ie([...e.entries()]));if(rs(e))return new Map(ie([...e.entries()]));if(t==="object"){const n={};for(const o in e){const s=ie(e[o]);s!==Ne&&(n[o]=s)}return n}return Ne},j=e=>{const t=e[p];return t!=="Func"&&t!=="NonSerialized"},$=(e,t)=>{switch(e[p]){case"Null":return t===null;case"Undefined":return t===void 0;case"Number":return typeof t=="number";case"Bool":return typeof t=="boolean";case"String":return typeof t=="string";case"Enum":return Object.values(e.properties).includes(t);case"Literal":return t===e.properties;case"Object":case"Class":{const r=e.properties;for(const n in r)if(j(r[n])&&!$(r[n],t[n]))return!1;return!0}case"Any":return!0;case"Record":{const r=e.properties,n=r.key,o=r.value;if(!j(o))return!0;if(t&&typeof t=="object")for(const[s,i]of Object.entries(t)){const a=$(n,s),c=$(o,i);if(!a||!c)return!1}return!0}case"Partial":return!0;case"Array":{const r=e.properties;if(!j(r))return!0;if(Array.isArray(t)){if(t.length===0)return!0;for(const n of t)if(!$(r,n))return!1;return!0}else return!1}case"Tuple":{const r=e.properties;if(!Array.isArray(t))return!1;for(let n=0;n<r.length;n++)if(!$(r[n],t[n]))return!1;return!0}case"Union":{const r=e.properties;if(r.length){let n=!0;for(const o of r){if(j(o))n=!1;else continue;if($(o,t))return!0}return n}else return!1}case"Required":{const r=e.properties;return $(r,t)}case"Func":case"NonSerialized":return!0;default:return!1}},D=(e,t)=>{var r,n;if((r=e.options)!=null&&r.serialize)return(n=e.options)==null?void 0:n.serialize(t);switch(e[p]){case"Null":case"Undefined":case"Void":case"Number":case"Bool":case"String":case"Enum":case"Literal":case"Any":return t;case"Object":case"Class":{const o=e.properties,s=Object.keys(o);return s.length&&t&&typeof t=="object"?Object.entries(t).reduce((i,[a,c])=>(s.includes(a)&&j(o[a])&&(i[a]=D(o[a],c)),i),{}):e[p]==="Class"?null:t}case"Record":{const o=e.properties,s=o.key,i=o.value;return j(i)?t&&typeof t=="object"?Object.entries(t).reduce((a,[c,u])=>{const f=D(s,c),x=D(i,u);return f!=null&&(a[f]=x),a},{}):t:null}case"Array":{const o=e.properties;return j(o)?Array.isArray(t)?t.map(s=>D(o,s)):t:null}case"Tuple":{const o=e.properties;return Array.isArray(t)?t.map((s,i)=>D(o[i],s)):t}case"Union":{const o=e.properties;if(!o.length)return null;for(const s of o){if(!j(s))continue;const i=D(s,t);if($(s,i))return i}return null}case"Partial":case"Required":{const o=e.properties;return D(o,t)}default:return null}},ss=(e,t)=>{const r=D(e,t);return ie(r)},Dt=pt?1e5:5e3;dn(Dt);const jt=new Map,zt=new Map;globalThis.ComponentMap=jt;globalThis.ComponentJSONIDMap=zt;const W=e=>!!(e!=null&&e[p]),kt=e=>!!(e&&e[p]===void 0),Ft=e=>{const t=kt(e.schema)?On(e.schema,Dt):{};t.isComponent=!0;const r=W(e.schema)&&se(e.schema),n=W(e.schema)&&ge(e.schema),o=W(e.schema)&&Ee(e.schema);return t.onSet=(s,i,a)=>{if(W(e.schema)||e.onInit){if(n){const[c,u]=be(e.schema,a);if(!c)throw new Error(`${e.name}:OnSet Missing required value for key ${u}`)}if(a==null)return;r&&(a=oe(e.schema,i.get(z),typeof a=="object"?{...a}:a)),Array.isArray(a)||typeof a!="object"||o?i.set(a):i.merge(a)}},t.onRemove=()=>{},t.toJSON=s=>W(e.schema)?ss(e.schema,s):s,t.errors=[],Object.assign(t,e),t.reactor&&Object.defineProperty(t.reactor,"name",{value:`Internal${t.name}Reactor`}),t.reactorMap=new Map,t.stateMap={},t.jsonID?(zt.set(t.jsonID,t),console.log(`Registered component ${t.name} with jsonID ${t.jsonID}`)):e.toJSON&&console.warn(`Component ${t.name} has toJson defined, but no jsonID defined. This will cause serialization issues.`),jt.set(t.name,t),t},Pt=(e,t)=>{t.stateMap[e]||(t.stateMap[e]=te(me));const r=t.stateMap[e];return r.promised?void 0:r},Lt=(e,t)=>{const r=Pt(e,t);if(!r||r.promised){console.warn(`[getMutableComponent]: entity ${e} does not have ${t.name}. This will be an error in the future. Use getOptionalMutableComponent if there is uncertainty over whether or not an entity has the specified component.`);return}return r},os=(e,t)=>{const r=t.stateMap[e];return r!=null&&r.promised||r==null?void 0:r.get(z)},pe=(e,t)=>{if(!Re(m.store,t,e)){console.warn(`[getComponent]: entity ${e} does not have ${t.name}. This will be an error in the future. Use getOptionalComponent if there is uncertainty over whether or not an entity has the specified component.`);return}return t.stateMap[e].get(z)};T.i8+"",T.ui8+"",T.ui8c+"",T.i16+"",T.ui16+"",T.i32+"",T.ui32+"",T.f32+"",T.f64+"",T.eid+"";const is=Symbol("proxied"),as=(e,t,r)=>new Proxy(e,{get(o,s,i){return typeof t[r][s]=="function"?t[r][s].bind(t[r]):s==="entity"?r:t[r][s]},set(o,s,i){return t[r][s]=i,!0}}),cs=(e,t,r)=>new Proxy(e,{get(o,s,i){var a;return typeof o[s]=="object"?o[s]:s==="entity"?r:(a=t[s])==null?void 0:a[r]},set(o,s,i){if(typeof i=="object"){for(const a in i)o[s][a]=i[a];return!0}return t[s][r]=i,!0}}),Qt=(e,t,r)=>{const n=Object.entries(e).reduce((o,[s,i])=>{const a=Array.isArray(i);return!a&&typeof i=="object"?o[s]=Qt(i,t,r[s]):a&&i.length===2?o[s]=as([],r[s],t):o[s]=is,o},{});return cs(n,r,t)},us=(e,t)=>Qt(t.schema,e,t),Bt=(e,t)=>{if(W(t.schema)){const r=X(t.schema);return t.onInit?t.onInit(r):r}else if(kt(t.schema)){const r=us(e,t);return t.onInit?t.onInit(r):r}else return t.onInit?t.onInit(void 0):null},Vt=(e,t,r=void 0)=>{if(!e)throw new Error("[setComponent]: entity is undefined");if(!Je(m.store,e))throw new Error("[setComponent]: entity does not exist");const n=Ue(e,t);if(!n){const s=Bt(e,t);t.stateMap[e]?t.stateMap[e].set(s):t.stateMap[e]=te(s),In(m.store,t,e,!1)}if(t.onSet(e,t.stateMap[e],r),!n&&t.reactor&&!t.reactorMap.has(e)){const s=Me(()=>d.createElement(Xe.Provider,{value:e},d.createElement(t.reactor,{})));return s.entity=e,s.component=t.name,t.reactorMap.set(e,s),pe(e,t)}const o=t.reactorMap.get(e);return o==null||o.run(),pe(e,t)},ls=(e,t,r)=>{if(typeof r>"u")return;const n=Lt(e,t);if(!n)throw new Error("[updateComponent]: component does not exist "+t.name);S.startTransition(()=>{if(typeof r!="object")n.set(r);else for(const s of Object.keys(r)){const i=r[s],{result:a,finalProp:c}=ut(n,s);typeof i<"u"&&typeof a[c]=="object"&&typeof a[c].set=="function"?a[c].set(i):a[c]=i}const o=t.reactorMap.get(e);o!=null&&o.isRunning||o==null||o.run()})},Ue=(e,t)=>{if(!t)throw new Error("[hasComponent]: component is undefined");return e?Re(m.store,t,e):!1};function Us(e,t){if(!t)throw new Error("[hasComponent]: component is undefined");if(t.length<1||!e)return!1;for(const r of t)if(!Ue(e,r))return!1;return!0}const qt=(e,t)=>{var n;if(!Ue(e,t))return;t.onRemove(e,t.stateMap[e]),Nn(m.store,t,e,!1);const r=t.reactorMap.get(e);t.reactorMap.delete(e),r!=null&&r.isRunning&&r.stop(),(n=t.stateMap[e])==null||n.set(me)},Os=e=>{const t=Bt(N,e);return e.toJSON(t)},Ht=e=>Je(m.store,e)?At(m.store,e):[],fs=e=>Object.fromEntries(Ht(e).map(t=>[t.name,pe(e,t)])),Jt=e=>{try{for(const t of At(m.store,e))try{qt(e,t)}catch(r){console.error(r)}}catch(t){console.error(t)}},ps=(e,t)=>{const r=pe(e,t);return JSON.parse(JSON.stringify(t.toJSON(r)))};function ys(e){if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status==="pending"||(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})),e)}function ms(e,t){if(e===N)throw new Error("InvalidUsage: useComponent called with UndefinedEntity");t.stateMap[e]||(t.stateMap[e]=te(me));const r=t.stateMap[e];return r.promise&&(S.use??ys)(r.promise),ee(r)}function Kt(e,t){t.stateMap[e]||(t.stateMap[e]=te(me));const r=ee(t.stateMap[e]);return r.promised?void 0:r}const Ae=Le({name:"ECSState",initial:{timer:null,periodicUpdateFrequency:5*1e3,simulationTimestep:1e3/60,frameTime:Date.now(),simulationTime:Date.now(),deltaSeconds:0,elapsedSeconds:0,lastSystemExecutionDuration:0}}),ds={MAX_DELTA_SECONDS:1/10},Ss=e=>{const t=fe(Ae);t.frameTime.set(performance.timeOrigin+e);const r=v(),n=[...m.store.actions.incoming],o=e/1e3;t.deltaSeconds.set(Math.max(.001,Math.min(ds.MAX_DELTA_SECONDS,o-t.elapsedSeconds.value))),t.elapsedSeconds.set(o),k(wt),Wt(It),k(Nt),k(Ze);const i=v()-r;i>150&&m.store.logger("ecs:execute").warn(`Long frame execution detected. Duration: ${i}. 
 Incoming actions: %o`,n),t.lastSystemExecutionDuration.set(i)},Wt=e=>{const t=v();let r=0;const n=fe(Ae),{frameTime:o,simulationTime:s,simulationTimestep:i}=A(Ae);let a=o-s;const c=8,u=5e3;if(a<i){n.simulationTime.set(Math.floor(o/i)*i);return}let f=r>c;for(;a>i&&!f;)if(n.simulationTime.set(x=>Math.floor((x+i)/i)*i),k(e),a-=i,r=v()-t,f=r>c,a>=u){n.simulationTime.set(x=>Math.floor(o/i)*i);break}},ve=(e=Kn,t=0)=>{for(const r of e){const n=C.get(r);if(!n)return;for(const o of n.preSystems)ve([o],t+1);console.log("-".repeat(t),n.uuid.split(".").pop());for(const o of n.subSystems)ve([o],t+1);for(const o of n.postSystems)ve([o],t+1)}},E=(e,t)=>e!==void 0?{default:e,...t}:t,hs=e=>e!==void 0&&e.r!==void 0,y={Null:e=>({[p]:"Null",options:e}),Undefined:e=>({[p]:"Undefined",options:e}),Void:e=>({[p]:"Void",options:e}),Number:(e,t)=>({[p]:"Number",options:E(e??0,t)}),Bool:(e,t)=>({[p]:"Bool",options:E(e??!1,t)}),String:(e,t)=>({[p]:"String",options:E(e??"",t)}),Enum:(e,t,r)=>({[p]:"Enum",options:E(t,r),properties:e}),Literal:(e,t,r)=>({[p]:"Literal",options:E(t,r),properties:e}),Object:(e,t,r)=>({[p]:"Object",options:E(t,r),properties:e}),Record:(e,t,r,n)=>({[p]:"Record",options:E(r,n),properties:{key:e,value:t}}),Partial:(e,t,r)=>({[p]:"Partial",options:E(t,r),properties:e}),Array:(e,t,r)=>({[p]:"Array",options:E(t??[],r),properties:e}),Tuple:(e,t,r)=>({[p]:"Tuple",options:E(t??[],r),properties:e}),Union:(e,t,r)=>({[p]:"Union",options:E(t,r),properties:e}),LiteralUnion:(e,t,r)=>y.Union([...e.map(n=>y.Literal(n))],t,r),Class:(e,t)=>({[p]:"Class",options:{default:e},properties:{}}),SerializedClass:(e,t,r)=>({[p]:"Class",options:{...r,default:e},properties:t}),Func:(e,t,r,n)=>({[p]:"Func",options:E(()=>r,n),properties:{params:e,return:t}}),Call:(e,t)=>y.Func([],y.Void(),e,t),Nullable:(e,t,r)=>y.Union([e,y.Null()],t??null,r),Optional:(e,t,r)=>y.Union([e,y.Undefined()],t??null,r),Required:(e,t,r)=>({[p]:"Required",options:E(t,r),properties:e}),NonSerialized:(e,t,r)=>({[p]:"NonSerialized",options:E(t,r),properties:e}),Entity:e=>y.Number(e??N,{$id:"Entity"}),EntityUUID:e=>y.String("",{id:"EntityUUID"}),UserID:e=>y.String("",{id:"UserUUID"}),Vec3:(e={x:0,y:0,z:0},t)=>y.SerializedClass(()=>new Hr(e.x,e.y,e.z),{x:y.Number(),y:y.Number(),z:y.Number()},{deserialize:(r,n)=>r.copy(n),...t,id:"Vec3"}),Vec2:(e={x:0,y:0},t)=>y.SerializedClass(()=>new Jr(e.x,e.y),{x:y.Number(),y:y.Number()},{deserialize:(r,n)=>r.copy(n),...t,id:"Vec2"}),Quaternion:(e={x:0,y:0,z:0,w:1},t)=>y.SerializedClass(()=>new Kr(e.x,e.y,e.z,e.w),{x:y.Number(),y:y.Number(),z:y.Number(),w:y.Number()},{deserialize:(r,n)=>r.copy(n),...t,id:"Quaternion"}),Mat4:(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t)=>y.SerializedClass(()=>new Wr().fromArray(e),{elements:y.Array(y.Number(),void 0,{maxItems:16,minItems:16})},{deserialize:(r,n)=>r.copy(n),...t,id:"Mat4"}),Color:(e,t)=>y.SerializedClass(()=>hs(e)?new J(e.r,e.g,e.b):new J(e),{r:y.Number(),g:y.Number(),b:y.Number()},{deserialize:(r,n)=>r instanceof J?r.set(n):new J(n),serialize:r=>r instanceof J?r.getHex():new J(r).getHex(),...t,id:"Color"}),Type:(e,t,r)=>y.SerializedClass(e,t??{},r??{}),Any:()=>({[p]:"Any"})},ye=Ft({name:"UUIDComponent",jsonID:"EE_uuid",schema:y.EntityUUID(),onSet:(e,t,r)=>{if(!r)throw new Error("UUID cannot be empty");if(t.value===r)return;const n=ye.getEntityByUUID(r);if(n!==N&&n!==e)throw new Error(`UUID ${r} is already in use`);if(t.value){const o=t.value;K(o).set(N)}t.set(r),K(r).set(e)},onRemove:(e,t)=>{const r=t.value;K(r).set(N)},entitiesByUUIDState:{},useEntityByUUID(e){return ee(K(e)).value},getEntityByUUID(e){return K(e).get(z)},getOrCreateEntityByUUID(e){const t=K(e);if(!t.value){const r=Ut();Vt(r,ye,e)}return t.value},generateUUID(){return Be()}});function K(e){let t=ye.entitiesByUUIDState[e];return t||(t=te(N),ye.entitiesByUUIDState[e]=t),t}const P=class P{constructor(){U(this,"store")}get userID(){return P.instance.store.userID}get localFloorEntity(){return P.instance.store.stateMap.EngineState.get(z).localFloorEntity}get originEntity(){return P.instance.store.stateMap.EngineState.get(z).originEntity}get viewerEntity(){return P.instance.store.stateMap.EngineState.get(z).viewerEntity}get cameraEntity(){return this.viewerEntity}};U(P,"instance");let Q=P;globalThis.Engine=Q;globalThis.Hyperflux=tn;function ws(e=ct()){if(Q.instance)throw new Error("Store already exists");Q.instance=new Q,e.getCurrentReactorRoot=()=>A(M).activeSystemReactors.get(A(M).currentSystemUUID),e.getDispatchTime=()=>A(Ae).simulationTime,Q.instance.store=zn(e),vt(e)}const gs={defineComponent:Ft,getOptionalMutableComponent:Pt,getMutableComponent:Lt,getOptionalComponent:os,getComponent:pe,setComponent:Vt,updateComponent:ls,hasComponent:Ue,removeComponent:qt,getAllComponents:Ht,getAllComponentData:fs,removeAllComponents:Jt,serializeComponent:ps,useComponent:ms,useOptionalComponent:Kt,UUIDComponent:ye,createEntity:Ut,removeEntity:Pn,entityExists:Ot,useEntityContext:Ln,UndefinedEntity:N,executeSystem:k,defineSystem:V,useExecute:Jn,destroySystem:le,defineQuery:Fe,removeQuery:Pe,useQuery:$t,QueryReactor:Yn,executeSystems:Ss,executeFixedSystem:Wt,getDAG:ve,Not:bn,Types:T,getAllEntities:Fn};globalThis.ECS=gs;export{ws as A,Os as B,zt as C,Ht as D,Ae as E,ps as F,Pt as G,Nt as H,Zr as I,It as J,wt as K,le as L,Pe as M,bn as N,C as O,Ze as P,Yn as Q,jt as R,y as S,T,ye as U,Bt as V,Us as W,yt as X,gs as Y,Ts as Z,Xe as _,V as a,pe as b,Ft as c,Fe as d,Ln as e,ms as f,Lt as g,Ue as h,Kt as i,Gr as j,N as k,Ut as l,Pn as m,Jn as n,os as o,Q as p,$t as q,qt as r,Vt as s,xs as t,ls as u,Ot as v,Ve as w,_s as x,Rs as y,Ss as z};
