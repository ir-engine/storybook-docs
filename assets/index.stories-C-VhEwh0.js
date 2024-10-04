import{r as c,R as e}from"./index-CBqU2yxZ.js";import{F as le,V as k,a as se,X as oe,w as ie,Y as me,Z as ce,_ as ue,K as pe}from"./three.module-D2RMN07C.js";import{C as ve,V as de,R as Ee,B as ye,P as N,a as L,b as be,S as ge,c as fe,D as he,M as Se}from"./ParticleSystemComponent-DGK1fC-S.js";import{f as Ce,b as Pe}from"./index-_wFD3GG2.js";import{h as Oe}from"./index-vJCBmx79.js";import{c as A,a as Ne}from"./Util-CG5_y5Pm.js";import{B as O}from"./index-CGhkeU3i.js";import{ay as ke,az as Fe}from"./EditorServices-BJKHmurs.js";import{B as T}from"./index-CCAuFDbE.js";import{C as xe}from"./index-CrO4saqk.js";import{T as V}from"./index-ChWBCYBM.js";import{I as a}from"./index-DZ02_pf3.js";import{N as b}from"./index-Cb0NQbVM.js";import{S as I}from"./index-CmJ8aZaS.js";import{a as F}from"./index-fFxXVS77.js";import{i as Ie,j as Ae}from"./index-DJX7trsF.js";import{c as U}from"./ActionFunctions-CxzuxLxN.js";import{M as Y}from"./index-CpMA0FRk.js";import{T as Te}from"./index-DDX_yEg0.js";import{N as we}from"./index-BXX5lIfA.js";import{u as Le}from"./useTranslation-C8TD7CCW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./AssetType-LSGL9ANY.js";import"./meshUtils-uAuBfJNJ.js";import"./v4-Dz_GI0CC.js";import"./iconBase-vdkxwKJc.js";import"./EditorControlFunctions-DO7c3hDV.js";import"./MathLerpFunctions-CYXVD2J2.js";import"./tw-merge-Ds6tgvmq.js";import"./WebContainer3D-CgDOwl0k.js";import"./lodash-BYTxXjAY.js";import"./NotificationService-BtHCxsFA.js";import"./index-DfU-XIjm.js";import"./index-DaaykCGs.js";import"./XRState-BS8ja_cl.js";import"./client-DMi1NERe.js";import"./index-DCS5Ru-F.js";import"./index-CqRG3f1I.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./jsx-runtime-CKrituN3.js";import"./index-DWVs1sLR.js";import"./index-6-YOBPgK.js";/* empty css                */import"./miscUtils-D11F-TOL.js";import"./index-CXvzSdoX.js";import"./useClickOutside-D1hZxvBu.js";import"./index-Dn0AHKmy.js";import"./useDrop-DvNNwWYR.js";import"./index--lohHrd2.js";import"./index-B6RCC45a.js";import"./assetFunctions-Bvb93VNm.js";import"./i18next-ntfi3Ha_.js";import"./nonIterableRest-Y-KoC6Zs.js";import"./setPrototypeOf-NYsvoNVB.js";import"./getPrototypeOf-BYVhAdwF.js";import"./utils-DTErvVTk.js";import"./MediaSystem-C5w1lrFL.js";import"./MediaComponent-BbvQujMt.js";import"./iframe-BwaUBtZe.js";import"../sb-preview/runtime.js";import"./VideoComponent-TZ9Icu9Q.js";import"./PositionalAudioComponent-CGM_4wyN.js";import"./index-OAa3bMdv.js";import"./index-tYKeBweK.js";import"./index-B-xzzier.js";import"./index-B0IQtwpp.js";import"./index-DVAwpzAq.js";import"./index-BqFAen_F.js";import"./index-DGVNGK2X.js";function x({value:t,onChange:n}){return e.createElement(e.Fragment,null,e.createElement(a,{name:"color",label:"Color"},e.createElement(xe,{value:new le(t.r,t.g,t.b),onChange:l=>{n({r:l.r,g:l.g,b:l.b,a:t.a})}})),e.createElement(a,{name:"opacity",label:"Opacity"},e.createElement(b,{value:t.a,onChange:l=>n({r:t.r,g:t.g,b:t.b,a:l})})))}function Q({scope:t,value:n,onChange:l}){const p=c.useCallback(()=>{const o=l(t.type);return m=>{t.set(ve[m]),o(m)}},[]),r=c.useCallback(()=>{const o=t,m=o.value;return e.createElement(x,{value:m.color,onChange:l(o.color)})},[t]),g=c.useCallback(()=>{const o=t,m=o.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"A",label:"A"},e.createElement(x,{value:m.a,onChange:l(o.a)})),e.createElement(a,{name:"B",label:"B"},e.createElement(x,{value:m.b,onChange:l(o.b)})))},[t]),S=c.useCallback(()=>{const o=t,m=o.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"A",label:"A"},e.createElement(x,{value:m.a,onChange:l(o.a)})),e.createElement(a,{name:"B",label:"B"},e.createElement(x,{value:m.b,onChange:l(o.b)})))},[t]),E=c.useCallback(o=>{const m=t,C=m.value,i=l(m.functions);return()=>{const y=C.functions.filter(P=>P!==o.value);i(JSON.parse(JSON.stringify(y)))}},[]),d=c.useCallback(()=>{const o=t,m=o.value;return e.createElement("div",null,e.createElement(O,{onClick:()=>{t.functions.set([...JSON.parse(JSON.stringify(m.functions)),{start:0,function:{type:"ColorRange",a:{r:1,g:1,b:1,a:1},b:{r:1,g:1,b:1,a:1}}}])}},"+"),m.functions.map((C,i)=>e.createElement("div",{key:i,style:{border:"1px solid white",borderRadius:"0.5rem",margin:"1rem",padding:"1.5rem",overflow:"auto"}},e.createElement("div",{className:"flex flex-col"},e.createElement("div",{className:"flex items-center gap-x-1"},e.createElement(V,{fontSize:"xs"},"Start"),e.createElement(b,{value:C.start,onChange:l(o.functions[i].start)})),e.createElement("div",{className:"flex items-center gap-x-1"},e.createElement(V,{fontSize:"xs"},"A"),e.createElement("div",{className:"col-span-1 grid"},e.createElement(x,{value:C.function.a,onChange:l(o.functions[i].function.a)}))),e.createElement("div",{className:"flex items-center gap-x-1"},e.createElement(V,{fontSize:"xs"},"B"),e.createElement("div",{className:"col-span-1 grid"},e.createElement(x,{value:C.function.b,onChange:l(o.functions[i].function.b)})))),e.createElement(O,{onClick:E(o.functions[i])},"Remove"))))},[t]),f={ConstantColor:r,ColorRange:g,RandomColor:S,Gradient:d};return e.createElement("div",null,e.createElement(a,{name:"type",label:"Type"},e.createElement(I,{value:n.type,options:[{label:"Constant",value:"ConstantColor"},{label:"Range",value:"ColorRange"},{label:"Random",value:"RandomColor"},{label:"Gradient",value:"Gradient"}],onChange:p()})),f[n.type]())}const G={width:"90%",overflow:"hidden",textOverflow:"ellipsis",padding:"5%"};function j({list:t,element:n,options:l}){const p=(l==null?void 0:l.countPerPage)??7,r=U(0);function g(){const E=p*r.value;return[E,Math.min(E+p,t.length)]}const S=U(g());return c.useEffect(()=>{S.set(g())},[r,t.length]),e.createElement(e.Fragment,null,e.createElement("div",{className:"m-2 flex flex-col overflow-hidden rounded-md p-1"},(t==null?void 0:t.length)>0&&e.createElement("div",{className:"grid grid-cols-7 gap-4"},e.createElement("div",{className:"col-span-1 flex justify-center"},e.createElement(O,{variant:"outline",size:"small",className:"justify-center",onClick:()=>r.set(Math.min(t.length/p,Math.max(0,r.value-1))),style:G},e.createElement(Ie,{className:"inline-block shrink-0 text-2xl"}))),[-2,-1,0,1,2].map(E=>{const d=`paginatedButton-${E}`;return r.value+E<0||r.value+E>=t.length/p?e.createElement("div",{className:"col-span-1 flex justify-center",key:d},e.createElement("div",{className:"w-[90%] overflow-hidden truncate p-[5%]"})):e.createElement("div",{className:"col-span-1 flex justify-center",key:d},e.createElement(O,{variant:"outline",size:"small",className:"justify-center",disabled:E===0,onClick:()=>r.set(r.value+E),style:G},r.value+E))}),e.createElement("div",{className:"col-span-1 flex justify-center"},e.createElement(O,{variant:"outline",size:"small",className:"justify-center",onClick:()=>r.set(Math.min(Math.floor((t.length-1)/p),Math.max(0,r.value+1))),style:G},e.createElement(Ae,{className:"inline-block shrink-0 text-2xl"}))))),(S.value[0]===S.value[1]?t:t.slice(...S.value)).map((E,d)=>e.createElement("div",{key:`${d}`},n(E,d))))}function h({scope:t,value:n,onChange:l}){const p=c.useCallback(()=>{const o=l(t.type);return m=>{t.set(JSON.parse(JSON.stringify(de[m]))),o(m)}},[t,l]),r=c.useCallback(()=>{const m=l(t.functions);return()=>{const i=[...JSON.parse(JSON.stringify(n.functions)),{function:{p0:0,p1:0,p2:1,p3:1},start:0}];m(i)}},[t,l]),g=c.useCallback(o=>{const m=t,C=m.value,i=l(m.functions);return()=>{const y=C.functions.filter(P=>P!==o.value);i(JSON.parse(JSON.stringify(y)))}},[t,l]),S=c.useCallback(()=>{const o=t,m=o.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"value",label:"Value"},e.createElement(b,{value:m.value,onChange:l(o.nested("value"))})))},[t,l]),E=c.useCallback(()=>{const o=t,m=o.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"min",label:"Min"},e.createElement(b,{value:m.a,onChange:l(o.a)})),e.createElement(a,{name:"max",label:"Max"},e.createElement(b,{value:m.b,onChange:l(o.b)})))},[t,l]),d=c.useCallback(()=>{const o=t;return e.createElement("div",null,e.createElement(O,{onClick:r()},"Add Bezier"),e.createElement(j,{list:o.functions,element:m=>e.createElement("div",{style:{margin:"2rem",padding:"2rem",border:"1px solid white",borderRadius:"1rem"}},e.createElement(a,{label:"p0"},e.createElement(b,{value:m.function.p0.value,onChange:l(m.function.p0)})),e.createElement(a,{label:"p1"},e.createElement(b,{value:m.function.p1.value,onChange:l(m.function.p1)})),e.createElement(a,{label:"p2"},e.createElement(b,{value:m.function.p2.value,onChange:l(m.function.p2)})),e.createElement(a,{label:"p3"},e.createElement(b,{value:m.function.p3.value,onChange:l(m.function.p3)})),e.createElement("br",null),e.createElement("hr",null),e.createElement("br",null),e.createElement(a,{label:"start"},e.createElement(b,{value:m.start.value,onChange:l(m.start)})),e.createElement("br",null),e.createElement(O,{onClick:g(m)},"Remove"))}))},[t,l]),f={ConstantValue:S,IntervalValue:E,PiecewiseBezier:d};return e.createElement(e.Fragment,null,e.createElement(a,{name:"type",label:"Type"},e.createElement(I,{value:n.type,options:[{label:"Constant",value:"ConstantValue"},{label:"Interval",value:"IntervalValue"},{label:"Bezier",value:"PiecewiseBezier"}],onChange:p(),className:"w-full"})),f[n.type]())}function Be({scope:t,value:n,onChange:l}){const p=c.useCallback(f=>{const o=l(f);return m=>{o([...m.toArray()])}},[]),r=c.useCallback(()=>{const f=t,o=f.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"Axis",label:"Axis"},e.createElement(F,{value:new k(...o.axis),onChange:p(f.axis)})),e.createElement(a,{name:"Angle",label:"Angle"},e.createElement(h,{scope:f.angle,value:o.angle,onChange:l})))},[]),g=c.useCallback(()=>{const f=t,o=f.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"Angle X",label:"Angle X"},e.createElement(h,{scope:f.angleX,value:o.angleX,onChange:l})),e.createElement(a,{name:"Angle Y",label:"Angle Y"},e.createElement(h,{scope:f.angleY,value:o.angleY,onChange:l})),e.createElement(a,{name:"Angle Z",label:"Angle Z"},e.createElement(h,{scope:f.angleZ,value:o.angleZ,onChange:l})))},[]),S=c.useCallback(()=>e.createElement(e.Fragment,null),[]),E=c.useCallback(()=>{const f=l(t.type);return o=>{t.set(Ee[o]),f(o)}},[]),d={AxisAngle:r,Euler:g,RandomQuat:S};return e.createElement(e.Fragment,null,e.createElement(a,{name:"Type",label:"Type"},e.createElement(I,{value:n.type,options:[{label:"Axis Angle",value:"AxisAngle"},{label:"Euler",value:"Euler"},{label:"Random Quaternion",value:"RandomQuat"}],onChange:E()})),d[n.type]())}function Re({scope:t,value:n,onChange:l}){const p=c.useCallback(()=>{const v=l(t.type);return s=>{const u=JSON.parse(JSON.stringify(ye[s]));t.set(u),v(s)}},[]),r=c.useCallback(v=>{const s=l(v);return u=>{s([...u.toArray()])}},[]),g=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"force",label:"Force"},e.createElement(F,{value:new k(...u.direction),onChange:r(s.direction)})),e.createElement(a,{name:"magnitude",label:"Magnitude"},e.createElement(h,{scope:s.magnitude,value:u.magnitude,onChange:l})))},[t]),S=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"frequency",label:"Frequency"},e.createElement(F,{value:new k(...u.frequency),onChange:r(s.frequency)})),e.createElement(a,{name:"power",label:"Power"},e.createElement(F,{value:new k(...u.power),onChange:l(s.power)})))},[t]),E=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"scale",label:"Scale"},e.createElement(F,{value:new k(...u.scale),onChange:r(s.scale)})),e.createElement(a,{name:"octaves",label:"Octaves"},e.createElement(b,{value:u.octaves,onChange:l(s.octaves)})),e.createElement(a,{name:"velocityMultiplier",label:"Velocity Multiplier"},e.createElement(F,{value:new k(...u.velocityMultiplier),onChange:r(s.velocityMultiplier)})),e.createElement(a,{name:"timeScale",label:"Time Scale"},e.createElement(F,{value:new k(...u.timeScale),onChange:r(s.timeScale)})))},[t]),d=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"center",label:"Center"},e.createElement(F,{value:new k(...u.center),onChange:r(s.center)})),e.createElement(a,{name:"magnitude",label:"Magnitude"},e.createElement(b,{value:u.magnitude,onChange:l(s.magnitude)})))},[t]),f=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"color",label:"Color"},e.createElement(Q,{scope:s.color,value:u.color,onChange:l})))},[t]),o=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"angularVelocity",label:"Angular Velocity"},e.createElement(h,{scope:s.angularVelocity,value:u.angularVelocity,onChange:l})))},[t]),m=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"angularVelocity",label:"Angular Velocity"},e.createElement(Be,{scope:s.angularVelocity,value:u.angularVelocity,onChange:l})),e.createElement(a,{name:"dynamic",label:"Dynamic"},e.createElement(T,{value:u.dynamic,onChange:l(s.dynamic)})))},[t]),C=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"size",label:"Size"},e.createElement(h,{scope:s.size,value:u.size,onChange:l})))},[t]),i=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"speed",label:"Speed"},e.createElement(h,{scope:s.speed,value:u.speed,onChange:l})))},[t]),y=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"frame",label:"Frame"},e.createElement(h,{scope:s.frame,value:u.frame,onChange:l})))},[t]),P=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"orbit",label:"Orbit"},e.createElement(h,{scope:s.orbitSpeed,value:u.orbitSpeed,onChange:l})),e.createElement(a,{name:"axis",label:"Axis"},e.createElement(F,{value:new k(...u.axis),onChange:r(s.axis)})))},[t]),D=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"width",label:"Width"},e.createElement(h,{scope:s.width,value:u.width,onChange:l})))},[t]),K=c.useCallback(v=>{const s=v,u=s.value;return e.createElement(e.Fragment,null,e.createElement(a,{name:"angle",label:"Angle"},e.createElement(h,{scope:s.angle,value:u.angle,onChange:l})))},[t]),$=c.useCallback(v=>(v.value,e.createElement(e.Fragment,null,e.createElement(a,{name:"subParticleSystem",label:"Sub Particle System"},e.createElement(e.Fragment,null)))),[t]);c.useCallback(v=>{const s=l(v.src);return u=>{ke(u).then(([B])=>{B&&Fe(B,{canvas:!0,flipY:!0}).then(M=>{const R=M.image,te=R.getContext("2d"),ae=R.width,re=R.height,w=te.getImageData(0,0,ae,re),H=[],ne=v.threshold.value;for(let J=0;J<w.height;J++)for(let z=0;z<w.width;z++)w.data[(J*w.width+z)*4+3]>ne&&H.push(new se(z,w.height-J));R.remove(),v.locations.set(H)})}),s(u)}},[t]),c.useCallback(()=>{const v=t,s=v.value,u=l(v.sequencers);return()=>{const B={range:{a:0,b:1},sequencer:{scaleX:1,scaleY:1,position:[0,0,0],src:"",locations:[],threshold:.5}},M=[...JSON.parse(JSON.stringify(s.sequencers)),B];u(M)}},[t]);const ee={ApplyForce:g,Noise:S,TurbulenceField:E,GravityForce:d,ColorOverLife:f,RotationOverLife:o,SizeOverLife:C,SpeedOverLife:i,FrameOverLife:y,OrbitOverLife:P,Rotation3DOverLife:m,WidthOverLength:D,ChangeEmitDirection:K,EmitSubParticleSystem:$};return e.createElement(e.Fragment,null,e.createElement(a,{name:"type",label:"Type"},e.createElement(I,{value:n.type,options:[{label:"Apply Force",value:"ApplyForce"},{label:"Noise",value:"Noise"},{label:"Turbulence Field",value:"TurbulenceField"},{label:"Gravity",value:"GravityForce"},{label:"Color Over Lifetime",value:"ColorOverLife"},{label:"Rotation Over Lifetime",value:"RotationOverLife"},{label:"Rotation3D Over Lifetime",value:"Rotation3DOverLife"},{label:"Size Over Lifetime",value:"SizeOverLife"},{label:"Speed Over Lifetime",value:"SpeedOverLife"},{label:"Frame Over Lifetime",value:"FrameOverLife"},{label:"Orbit Over Lifetime",value:"OrbitOverLife"},{label:"Width Over Length",value:"WidthOverLength"},{label:"Change Emit Direction",value:"ChangeEmitDirection"},{label:"Emit Sub Particle System",value:"EmitSubParticleSystem"}],onChange:p()})),ee[n.type](t))}const q=t=>{const{t:n}=Le(),l=t.entity,p=Ce(l,N),r=p.value,g=c.useCallback(i=>(r.systemParameters[i],y=>{p._refresh.set(r._refresh+1),A(N,"systemParameters."+i)(y)}),[]),S={point:be,sphere:ge,cone:fe,donut:he,mesh_surface:Se},E=c.useCallback(()=>{const i=g("shape");return y=>{i(S[y])}},[]);c.useCallback(i=>y=>{const P=JSON.parse(JSON.stringify(r.systemParameters.shape));P[i]=y,A(N,"systemParameters.shape")(P),p._refresh.set((r._refresh+1)%1e3)},[]);const d=c.useCallback(i=>y=>{i.set(y);const{systemParameters:P,behaviorParameters:D}=JSON.parse(JSON.stringify(Pe(l,N)));Ne(N,{systemParameters:P,behaviorParameters:D},[t.entity]),p._refresh.set((r._refresh+1)%1e3)},[]),f=c.useCallback(()=>{const i={type:"ApplyForce",direction:[0,1,0],magnitude:{type:"ConstantValue",value:1}};p.behaviorParameters.set([...JSON.parse(JSON.stringify(r.behaviorParameters)),i]),p._refresh.set((r._refresh+1)%1e3)},[]),o=c.useCallback(i=>()=>{const y=JSON.parse(JSON.stringify(r.behaviorParameters.toSpliced(i,1)));A(N,"behaviorParameters")(y),p._refresh.set((r._refresh+1)%1e3)},[]),m=c.useCallback(()=>{const i={time:0,count:0,cycle:0,interval:0,probability:0},y=[...JSON.parse(JSON.stringify(r.systemParameters.emissionBursts)),i];A(N,"systemParameters.emissionBursts")(y),p._refresh.set((r._refresh+1)%1e3)},[]),C=c.useCallback(i=>()=>{const y=JSON.parse(JSON.stringify(r.systemParameters.emissionBursts.filter(P=>P!==i.value)));A(N,"systemParameters.emissionBursts")(y),p._refresh.set((r._refresh+1)%1e3)},[]);return e.createElement(we,{...t,name:n("editor:properties.particle-system.name"),description:n("editor:properties.particle-system.description"),icon:e.createElement(q.iconComponent,null)},e.createElement(a,{name:"Looping",label:n("editor:properties.particle-system.looping")},e.createElement(T,{value:r.systemParameters.looping,onChange:g("looping")})),e.createElement(a,{name:"Duration",label:n("editor:properties.particle-system.duration")},e.createElement(b,{value:r.systemParameters.duration,onChange:g("duration")})),e.createElement(a,{name:"Prewarm",label:n("editor:properties.particle-system.prewarm")},e.createElement(T,{value:r.systemParameters.prewarm,onChange:g("prewarm")})),e.createElement(a,{name:"Emitter Shape",label:n("editor:properties.particle-system.emitter-shape")},e.createElement(I,{value:r.systemParameters.shape.type,onChange:E(),options:[{label:n("editor:properties.particle-system.emitter-shape-type.point"),value:"point"},{label:n("editor:properties.particle-system.emitter-shape-type.sphere"),value:"sphere"},{label:n("editor:properties.particle-system.emitter-shape-type.cone"),value:"cone"},{label:n("editor:properties.particle-system.emitter-shape-type.donut"),value:"donut"},{label:n("editor:properties.particle-system.emitter-shape-type.mesh"),value:"mesh_surface"}]})),r.systemParameters.shape.type==="mesh_surface"&&e.createElement(a,{name:"Shape Mesh",label:n("editor:properties.particle-system.shape-mesh"),info:n("editor:properties.particle-system.shape-mesh-info")},e.createElement(Y,{value:r.systemParameters.shape.mesh,onRelease:d(p.systemParameters.shape.mesh)})),e.createElement(a,{name:"Emission Bursts",label:n("editor:properties.particle-system.emission-bursts")},e.createElement(O,{onClick:m},n("editor:properties.particle-system.add-burst"))),e.createElement(j,{list:r.systemParameters.emissionBursts?p.systemParameters.emissionBursts:[],element:i=>e.createElement("div",null,e.createElement(a,{name:"Time",label:n("editor:properties.particle-system.burst.time")},e.createElement(b,{value:i.time.value,onChange:d(i.time)})),e.createElement(a,{name:"Count",label:n("editor:properties.particle-system.burst.count")},e.createElement(b,{value:i.count.value,onChange:d(i.count)})),e.createElement(a,{name:"Cycle",label:n("editor:properties.particle-system.burst.cycle")},e.createElement(b,{value:i.cycle.value,onChange:d(i.cycle)})),e.createElement(a,{name:"Interval",label:n("editor:properties.particle-system.burst.interval")},e.createElement(b,{value:i.interval.value,onChange:d(i.interval)})),e.createElement(a,{name:"Probability",label:n("editor:properties.particle-system.burst.probability")},e.createElement(b,{value:i.probability.value,onChange:d(i.probability)})),e.createElement(O,{onClick:C(i)},n("editor:properties.particle-system.remove-burst")))}),e.createElement(a,{name:"Start Life",label:n("editor:properties.particle-system.start-life")},e.createElement(h,{value:r.systemParameters.startLife,scope:p.systemParameters.startLife,onChange:d})),e.createElement(a,{name:"Start Size",label:n("editor:properties.particle-system.start-size")},e.createElement(h,{value:r.systemParameters.startSize,scope:p.systemParameters.startSize,onChange:d})),e.createElement(a,{name:"Start Speed",label:n("editor:properties.particle-system.start-speed")},e.createElement(h,{value:r.systemParameters.startSpeed,scope:p.systemParameters.startSpeed,onChange:d})),e.createElement(a,{name:"Start Rotation",label:n("editor:properties.particle-system.start-rotation")},e.createElement(h,{value:r.systemParameters.startRotation,scope:p.systemParameters.startRotation,onChange:d})),e.createElement(a,{name:"Start Color",label:n("editor:properties.particle-system.start-color")},e.createElement(Q,{scope:p.systemParameters.startColor,value:r.systemParameters.startColor,onChange:d})),e.createElement(a,{name:"Emission Over Time",label:n("editor:properties.particle-system.emission-over-time")},e.createElement(h,{value:r.systemParameters.emissionOverTime,scope:p.systemParameters.emissionOverTime,onChange:d})),e.createElement(a,{name:"Render Mode",label:n("editor:properties.particle-system.render-mode")},e.createElement(I,{value:r.systemParameters.renderMode,onChange:g("renderMode"),options:[{label:n("editor:properties.particle-system.render-mode-type.billboard"),value:L.BillBoard},{label:n("editor:properties.particle-system.render-mode-type.stretched-billboard"),value:L.StretchedBillBoard},{label:n("editor:properties.particle-system.render-mode-type.mesh"),value:L.Mesh},{label:n("editor:properties.particle-system.render-mode-type.trail"),value:L.Trail}]})),r.systemParameters.renderMode===L.Trail&&e.createElement(e.Fragment,null,e.createElement(a,{name:"Trail Length",label:n("editor:properties.particle-system.trail-length")},e.createElement(h,{value:r.systemParameters.rendererEmitterSettings.startLength,scope:p.systemParameters.rendererEmitterSettings.startLength,onChange:d})),e.createElement(a,{name:"Follow Local Origin",label:n("editor:properties.particle-system.follow-local-origin")},e.createElement(T,{value:r.systemParameters.rendererEmitterSettings.followLocalOrigin,onChange:d(p.systemParameters.rendererEmitterSettings.followLocalOrigin)}))),e.createElement(a,{name:"Texture",label:n("editor:properties.particle-system.texture")},e.createElement(Te,{value:r.systemParameters.texture??"",onRelease:g("texture")})),e.createElement(a,{name:"U Tiles",label:n("editor:properties.particle-system.u-tiles")},e.createElement(b,{value:r.systemParameters.uTileCount,onChange:g("uTileCount")})),e.createElement(a,{name:"V Tiles",label:n("editor:properties.particle-system.v-tiles")},e.createElement(b,{value:r.systemParameters.vTileCount,onChange:g("vTileCount")})),e.createElement(a,{name:"Start Tile Index",label:n("editor:properties.particle-system.start-tile-index")},typeof r.systemParameters.startTileIndex=="number"&&e.createElement(e.Fragment,null,e.createElement(b,{value:r.systemParameters.startTileIndex,onChange:d(p.systemParameters.startTileIndex)}),e.createElement(O,{onClick:()=>{const i=JSON.parse(JSON.stringify(r.systemParameters));i.startTileIndex={type:"ConstantValue",value:r.systemParameters.startTileIndex},p.systemParameters.set(i),A(N,"systemParameters")(i),p._refresh.set(r._refresh+1)}},"Convert to Value Generator")),typeof r.systemParameters.startTileIndex=="object"&&e.createElement(h,{scope:p.systemParameters.startTileIndex,value:r.systemParameters.startTileIndex,onChange:d})),e.createElement(a,{name:"Mesh",label:n("editor:properties.particle-system.mesh")},e.createElement(Y,{value:r.systemParameters.instancingGeometry,onRelease:d(p.systemParameters.instancingGeometry)})),e.createElement(a,{name:"Blending",label:n("editor:properties.particle-system.blending")},e.createElement(I,{value:r.systemParameters.blending,onChange:d(p.systemParameters.blending),options:[{label:n("editor:properties.particle-system.blending-type.normal"),value:oe},{label:n("editor:properties.particle-system.blending-type.additive"),value:ie},{label:n("editor:properties.particle-system.blending-type.subtractive"),value:me},{label:n("editor:properties.particle-system.blending-type.multiply"),value:ce},{label:n("editor:properties.particle-system.blending-type.custom"),value:ue},{label:n("editor:properties.particle-system.blending-type.no-blending"),value:pe}]})),e.createElement(a,{name:"Transparent",label:n("editor:properties.particle-system.transparent")},e.createElement(T,{value:r.systemParameters.transparent??!1,onChange:d(p.systemParameters.transparent)})),e.createElement(a,{name:"World Space",label:n("editor:properties.particle-system.world-space")},e.createElement(T,{value:r.systemParameters.worldSpace,onChange:g("worldSpace")})),e.createElement(O,{className:"self-end",onClick:f},n("editor:properties.particle-system.addBehavior")),e.createElement(j,{list:p.behaviorParameters,element:(i,y)=>e.createElement(e.Fragment,null,e.createElement(Re,{scope:i,value:i.value,onChange:d}),e.createElement(O,{onClick:o(y)},n("editor:properties.particle-system.remove")))}))};q.iconComponent=Oe;const Je={},$t={title:"Editor/Properties/Particle",component:q,parameters:{componentSubtitle:"ParticleNodeEditor",jest:"particleNodeEditor.test.tsx",design:{type:"figma",url:""}},argTypes:Je},_={args:{}};var X,W,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {}
}`,...(Z=(W=_.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};const ea=["Default"];export{_ as Default,ea as __namedExportsOrder,$t as default};