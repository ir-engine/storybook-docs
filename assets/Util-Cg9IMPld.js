var Te=Object.defineProperty;var Ie=(t,e,i)=>e in t?Te(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var P=(t,e,i)=>Ie(t,typeof e!="symbol"?e+"":e,i);import{x as Re,w as _e,F as je,Q as Oe,g as p,h as g,U as f,G as ze,H as X,j as ye,s as m,r as A,d as ve,S as y,u as be,a as q,i as Fe,k as Ae,z as Le,I as Ge,J as $,f as Ue,K as Ne,M as _,y as G,b as Be,v as Ee,q as ee,E,N as V,O as We,R as oe,T as Y}from"./UUIDComponent-D8Z0ExU7.js";import{u as He,d as Se,e as Qe,a as z,E as Ve,s as Ze,g as U,j as Ce}from"./WebRTCTransportFunctions-BlEjp8Nq.js";import{R as C,r as M}from"./index-DPzuYzxM.js";import{O as xe,a as j,G as O,a4 as ie,a5 as Ke,M as Xe,a6 as se,a7 as qe,a8 as Ye,a9 as w,e as ae,aa as re,ab as Pe,b as Je,ac as $e,ad as et,$ as D,ae as tt,af as nt,N as k,T as l,A as ot}from"./GLTFComponent-qQ-krfGb.js";import{U as ce,s as it,a as b,i as st,t as at,u as rt,v as ct,w as lt,W as ut,x as ft,y as Me,z as mt,F as Z,G as le,n as dt,H as pt,k as we,J as ue,e as W,Q as te,E as fe}from"./three.module-0UbEQbcj.js";import{S as N}from"./ShadowComponent-HQyOcTYA.js";import{u as ht,f as gt}from"./FeathersHooks-BRln4cZ4.js";import{E as v}from"./EditorServices-CYCebXqX.js";import{S}from"./index-B8Ivwtzs.js";import{a as yt}from"./utils-CWj7-03T.js";const me=t=>{for(const[e,i]of Object.entries(t))i&&typeof i.dispose=="function"&&i.dispose();t.dispose()},de=t=>{var o;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(me):me(e.material)),e.geometry){e.geometry.dispose();for(const s in e.geometry.attributes)e.geometry.deleteAttribute(s)}const i=t;i.isSkinnedMesh&&((o=i.skeleton)==null||o.dispose());const n=t;typeof n.dispose=="function"&&n.dispose()},vt=Re([xe,j]),bt=5*5,Et=()=>{for(const t of vt()){const e=p(t,xe),n=g(t,ie)?ie.squaredDistance[t]>bt:!0,o=!(Ke.isCulled[t]&&n);e.visible=o}},St=t=>{const e=t.entity,i=g(e,f)?f.getAsSourceID(e):"",n=f.useEntitiesBySource(i);return C.createElement(ze,{entities:n,ChildEntityReactor:xt,props:{parentEntity:e}})},Ct=t=>{var n;let e=X(t,se);const i=(n=ye(t,qe))==null?void 0:n.entities.value;if(i){for(const o of i)if(o&&g(o,se)){e=!0;break}}return e},xt=t=>{const e=X(t.entity,Xe),i=X(t.entity,j),n=Ct(t.entity),o=ye(t.parentEntity,N);return M.useEffect(()=>{!e||!i||o&&(n?A(t.entity,N):m(t.entity,N,p(t.parentEntity,N)))},[i,e,n,o==null?void 0:o.cast,o==null?void 0:o.receive]),null},Pt=()=>C.createElement(C.Fragment,null,C.createElement(Oe,{Components:[O],ChildEntityReactor:St}));_e({uuid:"ee.engine.SceneObjectSystem",insert:{after:je},execute:Et,reactor:Pt});const pe=`
#include <common> 
#include <fog_pars_vertex> 
uniform vec3 sunPosition;
uniform float rayleigh;
uniform float turbidity;
uniform float mieCoefficient;

varying vec3 vWorldPosition;
varying vec3 vSunDirection;
varying float vSunfade;
varying vec3 vBetaR;
varying vec3 vBetaM;
varying float vSunE;

const vec3 up = vec3( 0.0, 1.0, 0.0 );
// constants for atmospheric scattering
const float e = 2.71828182845904523536028747135266249775724709369995957;
const float pi = 3.141592653589793238462643383279502884197169;

// wavelength of used primaries, according to preetham
const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );

// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

// mie stuff
// K coefficient for the primaries
const float v = 4.0;
const vec3 K = vec3( 0.686, 0.678, 0.666 );

// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

// earth shadow hack
// cutoffAngle = pi / 1.95;
const float cutoffAngle = 1.6110731556870734;
const float steepness = 1.5;
const float EE = 1000.0;

float sunIntensity( float zenithAngleCos ) {
  zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
  return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
}

vec3 totalMie( float T ) {
  float c = ( 0.2 * T ) * 10E-18;
  return 0.434 * c * MieConst;
}

void main() {

  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  gl_Position.z = gl_Position.w; // set z to camera.far

  vSunDirection = normalize( sunPosition );

  vSunE = sunIntensity( dot( vSunDirection, up ) );

  vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

  float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

  // extinction (absorbtion + out scattering)
  // rayleigh coefficients
  vBetaR = totalRayleigh * rayleighCoefficient;

  // mie coefficients
  vBetaM = totalMie( turbidity ) * mieCoefficient;
  #include <fog_vertex>

}`,he=`
#include <fog_pars_fragment>

varying vec3 vWorldPosition;
varying vec3 vSunDirection;
varying float vSunfade;
varying vec3 vBetaR;
varying vec3 vBetaM;
varying float vSunE;
uniform float luminance;
uniform float mieDirectionalG;


const vec3 up = vec3( 0.0, 1.0, 0.0 );

const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

// constants for atmospheric scattering
const float pi = 3.141592653589793238462643383279502884197169;

const float n = 1.0003; // refractive index of air
const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

// optical length at zenith for molecules
const float rayleighZenithLength = 8.4E3;
const float mieZenithLength = 1.25E3;
// 66 arc seconds -> degrees, and the cosine of that
const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

// 3.0 / ( 16.0 * pi )
const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
// 1.0 / ( 4.0 * pi )
const float ONE_OVER_FOURPI = 0.07957747154594767;

float rayleighPhase( float cosTheta ) {
  return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
}

float hgPhase( float cosTheta, float g ) {
  float g2 = pow( g, 2.0 );
  float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
  return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
}

// Filmic ToneMapping http://filmicgames.com/archives/75
const float A = 0.15;
const float B = 0.50;
const float C = 0.10;
const float D = 0.20;
const float E = 0.02;
const float F = 0.30;
const float whiteScale = 1.0748724675633854; // 1.0 / Uncharted2Tonemap(1000.0)
vec3 Uncharted2Tonemap( vec3 x ) { 
  return ( ( x * ( A * x + C * B ) + D * E ) / ( x * ( A * x + B ) + D * F ) ) - E / F;
}

void main() {

  vec3 direction = normalize( vWorldPosition - cameraPos );

  // optical length
  // cutoff angle at 90 to avoid singularity in next formula.
  float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
  float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
  float sR = rayleighZenithLength * inverse;
  float sM = mieZenithLength * inverse;

  // combined extinction factor
  vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

  // in scattering
  float cosTheta = dot( direction, vSunDirection );

  float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
  vec3 betaRTheta = vBetaR * rPhase;

  float mPhase = hgPhase( cosTheta, mieDirectionalG );
  vec3 betaMTheta = vBetaM * mPhase;

  vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
  Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

  // nightsky
  float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
  float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
  vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
  vec3 L0 = vec3( 0.1 ) * Fex;

  // composition + solar disc
  float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
  L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

  vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

  vec3 curr = Uncharted2Tonemap( ( log2( 2.0 / pow( luminance, 4.0 ) ) ) * texColor );
  vec3 color = curr * whiteScale;
  vec3 retColor = pow( color, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

  gl_FragColor = vec4( retColor, 1.0 );

  //#include <tonemapping_fragment>
  gl_FragColor = linearToOutputTexel( gl_FragColor );

  #include <fog_fragment>

}`,R=class R{constructor(){P(this,"cubeCamera");P(this,"sky");P(this,"_inclination");P(this,"_azimuth");P(this,"_distance");this.sky=new st(new at(1,1,1),new rt({name:"SkyShader",fragmentShader:he,vertexShader:pe,uniforms:ce.clone(R.uniforms),side:ct,depthWrite:!1})),this.cubeCamera=new lt(1,1e5,new ut(512,{format:Me,type:ft})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),i=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(i),Math.sin(i)*Math.sin(e),Math.sin(i)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){de(this.sky),de(this.cubeCamera)}};P(R,"vertexShader",pe),P(R,"fragmentShader",he),P(R,"uniforms",ce.merge([it.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new b}}]));let J=R;var T=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(T||{});const Mt=t=>{const n=new Uint8Array(16384);for(let o=0;o<4096;o++){const s=o*4;n[s]=Math.floor(t.r*255),n[s+1]=Math.floor(t.g*255),n[s+2]=Math.floor(t.b*255),n[s+3]=255}return n},wt=(t,e,i,n)=>{const o="/negx.jpg",s="/negy.jpg",r="/negz.jpg",a="/posx.jpg",u="/posy.jpg",d="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new mt().setPath(t).load([a,o,u,s,d,r],h=>{e(h)},h=>{i&&i(h)},h=>{n&&n(h)})},Dt=new we,I=ve({name:"SkyboxComponent",jsonID:"EE_skybox",schema:y.Object({backgroundColor:Je.Color(0),equirectangularPath:y.String({default:""}),cubemapPath:y.String({default:""}),backgroundType:y.Number({default:1}),sky:y.Type({serialized:!1}),skyboxProps:y.Object({turbidity:y.Number({default:10}),rayleigh:y.Number({default:1}),luminance:y.Number({default:1}),mieCoefficient:y.Number({default:.004999999999999893}),mieDirectionalG:y.Number({default:.99}),inclination:y.Number({default:.10471975511965978}),azimuth:y.Number({default:.16666666666666666})})}),reactor:function(){const t=be(),e=q(t,I),i=He(void 0),[n,o]=Ye(e.backgroundType.value===T.equirectangular?e.equirectangularPath.value:"",t);return Fe(()=>()=>{Ae(t)&&g(t,w)&&A(t,w)},[]),M.useEffect(()=>{e.backgroundType.value!==T.equirectangular||!n||(n.colorSpace=Z,n.mapping=le,n.minFilter=dt,m(t,w,n))},[n,e.backgroundType]),M.useEffect(()=>{if(o)return ae(t,I,"FILE_ERROR",o.message),()=>{re(t,I,"FILE_ERROR")}},[o]),M.useEffect(()=>{if(e.backgroundType.value!==T.color)return;const s=e.backgroundColor.value??Dt,r=64,a=new pt(Mt(new we(s)),r,r,Me);return a.needsUpdate=!0,a.colorSpace=Z,a.mapping=le,m(t,w,a),()=>{a.dispose(),A(t,w)}},[e.backgroundType,e.backgroundColor]),M.useEffect(()=>{if(e.backgroundType.value!==T.cubemap)return;const s=a=>{a.colorSpace=Z,a.mapping=ue,i.set(a),m(t,w,a),re(t,I,"FILE_ERROR")},r=[e.cubemapPath.value,s,void 0,a=>ae(t,I,"FILE_ERROR",a.message)];return wt(...r),()=>{A(t,w)}},[e.backgroundType,e.cubemapPath]),M.useEffect(()=>{const s=i.value;if(s)return()=>{s.dispose()}},[i]),M.useEffect(()=>{if(e.backgroundType.value!==T.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new J);const s=e.sky.value;s.azimuth=e.skyboxProps.value.azimuth,s.inclination=e.skyboxProps.value.inclination,s.mieCoefficient=e.skyboxProps.value.mieCoefficient,s.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,s.rayleigh=e.skyboxProps.value.rayleigh,s.turbidity=e.skyboxProps.value.turbidity,s.luminance=e.skyboxProps.value.luminance;const r=p(Le.instance.viewerEntity,Pe),a=s.generateSkyboxTextureCube(r.renderer);a.mapping=ue,m(t,w,a),s.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]}),kt={FirstSelected:"FirstSelected"},Tt={translate:"translate"};new b(1,0,0),new b(0,1,0),new b(0,0,1),new b(1,1,0),new b(0,1,1),new b(1,0,1),new b(1,1,1);const It={Disabled:"Disabled"},L={world:"world",local:"local"},Rt=t=>{const e=[],i=Ge(t);for(const n of i){const o=n.jsonID;if(o){const s=$(t,n);s&&e.push({name:o,props:s})}}return e},ge=Se({name:"PostProcessingEffectState",initial:{}}),De=ve({name:"PostProcessingComponent",jsonID:"EE_postprocessing",schema:y.Object({enabled:y.Bool(),effects:y.Record(y.String(),et)}),reactor:()=>{const t=be(),e=$e(t);return e?C.createElement(_t,{entity:t,rendererEntity:e}):null}}),_t=t=>{const{entity:e,rendererEntity:i}=t,n=q(e,De),o=Qe(ge).keys,s=q(i,Pe),r=s.effects,a=s.passes,u=s.effectComposer.value,d=s.scene.value;return n.enabled.value?C.createElement(C.Fragment,null,o.map(c=>{var x;const h=z(ge)[c];return h?C.createElement(M.Suspense,{key:c},C.createElement(Ve,null,C.createElement(h.reactor,{isActive:(x=n.effects[c])==null?void 0:x.isActive,rendererEntity:i,effectData:n.effects,effects:r,composer:u,scene:d,passes:a}))):null})):null},jt=t=>{const e=ht(gt,{query:{$or:t.map(i=>({flagName:i})),paginate:!1}});return e.status!=="success"?[]:t.map(i=>{const n=e.data.find(({flagName:o})=>o===i);return n?n.flagValue:!0})},Ot={Studio:{UI:{Hierarchy:{ShowGlbChildren:"ir.editor.ui.hierarchy.showGlbChildren"}}}},zt={Simple:"Simple"};var Ft=(t=>(t[t.DRAG=0]="DRAG",t[t.CLICK=1]="CLICK",t))(Ft||{});const ne=Se({name:"EditorHelperState",initial:()=>({editorMode:zt.Simple,transformMode:Tt.translate,transformSpace:L.local,transformPivot:kt.FirstSelected,transformGizmoEntity:Ue,gridSnap:It.Disabled,translationSnap:.5,rotationSnap:10,scaleSnap:.1,placementMode:0,gizmoEnabled:!0,gridVisibility:!1,gridHeight:0,showGlbChildren:!0}),extension:Ze(["snapMode","translationSnap","rotationSnap","scaleSnap","gridVisibility","gridHeight"]),reactor:()=>{const[t]=jt([Ot.Studio.UI.Hierarchy.ShowGlbChildren]);return M.useEffect(()=>{const e=U(ne).showGlbChildren;typeof t<"u"&&e.set(t)},[t]),null}}),H=new W,F=new b,At=(t,e,i,n=void 0)=>{if(!e.jsonID)return[];const s=[];for(const r of t)g(r,D)||(i?(m(r,e,n),n?Q.modifyProperty([r],e,n):m(r,e,n)):A(r,e),s.push(p(r,f).entityID),v.markModifiedScene(r));return s},Lt=(t,e)=>{const i=[];for(const n of t)m(n,k,e),v.markModifiedScene(n),i.push(p(n,f).entityID);return i},Gt=(t,e,i)=>{const n=[];for(const o of t){if(g(o,D))continue;const s=g(o,e)?$(o,e):{};for(const[r,a]of Object.entries(i))r.includes(".")?Ce(s,r,a):s[r]=a;_(o,e,s),v.markModifiedScene(o),n.push(p(o,f).entityID)}return n},Ut=[I,tt,nt,De],Nt=(t=[],e=z(v).rootEntity,i)=>{for(const n of t){const{name:o,props:s}=n,r=Ut.find(u=>u.jsonID===o);if(!r)continue;const a=Ne(e,[r]);a.length?(_(a[0],r,s),v.markModifiedScene(e)):ke(t,e)}},ke=(t=[],e=z(v).rootEntity,i,n)=>{var d;n&&(n=yt(n,e));const o=((d=t.find(c=>c.name===f.jsonID))==null?void 0:d.props.uuid)??f.generate(),s=Ee(e,[O]);let r="New Object";n&&(r=n);const a={};for(const c of t)a[c.name]={...oe(Y.get(c.name)),...c.props};a[f.jsonID]||(a[f.jsonID]={entityID:o}),a[j.jsonID]||(a[j.jsonID]=!0);const u=f.create(s,o,ee.Authoring);if(m(u,k,r),a[l.jsonID]){const c={...oe(l),...a[l.jsonID]};_(u,l,{...c})}m(u,E,{parentEntity:e});for(const[c,h]of Object.entries(a))c===l.jsonID||c===f.jsonID||c===k.jsonID||_(u,Y.get(c),h);return v.markModifiedScene(s),{entityUUID:f.get(u),sourceID:O.getSourceID(s)}},Bt=t=>{const e=[],i=(o,s)=>{o.forEach(r=>{const a=Rt(r).filter(x=>x.name!==f.jsonID),u=f.getSourceEntity(r),d=f.create(u,f.generateUUID(),ee.Authoring),c=p(r,k);m(d,j),m(d,k,c),m(d,E,{parentEntity:s});for(const x of a)x.name!==k.jsonID&&x.name!==E.jsonID&&_(d,Y.get(x.name),x.props);if(e.push(f.get(d)),g(r,O))return;const h=p(r,E).children;i(h,d)})},n=We(t);for(const o of n){if(g(o,D))continue;const{parentEntity:s}=p(o,E);i([o],s),v.markModifiedScene(o)}return S.updateSelection(e),e},Wt=(t,e,i=z(ne).transformSpace,n)=>{for(let o=0;o<t.length;o++){const s=t[o];if(g(s,D))continue;const r=e[o]??e[0],a=p(s,l);if(i===L.local)n?a.position.add(r):a.position.copy(r);else{const u=p(s,E),d=u.parentEntity?p(u.parentEntity,l):a;F.set(0,0,0),n&&F.setFromMatrixPosition(a.matrixWorld),F.add(r);const c=d.matrixWorld;H.copy(c).invert(),F.applyMatrix4(H),a.position.copy(F)}m(s,l,{position:a.position}),V(s,l).position.set(u=>u),G(s,l.computeTransformMatrix,u=>g(u,l)),v.markModifiedScene(s)}},B=new te,Ht=new te,Qt=(t,e,i=z(ne).transformSpace)=>{for(let n=0;n<t.length;n++){const o=t[n];B.copy(e[n]??e[0]);const s=new fe().setFromQuaternion(B,"YXZ"),r=p(o,l);if(i===L.local)r.rotation.copy(B);else{const a=p(o,E),d=(a.parentEntity?p(a.parentEntity,l):r).matrixWorld,h=Ht.setFromRotationMatrix(d).invert().multiply(B);s.copy(new fe().setFromQuaternion(h,"YXZ")),r.rotation.copy(h)}m(o,l,{rotation:r.rotation}),V(o,l).rotation.set(a=>a),G(o,l.computeTransformMatrix,a=>g(a,l)),v.markModifiedScene(o)}},Vt=(t,e,i,n)=>{const o=new W().makeTranslation(-n.x,-n.y,-n.z),s=new W().makeTranslation(n.x,n.y,n.z),r=new W().makeRotationAxis(e,i);for(const a of t){const u=p(a,l),d=p(a,E),c=d.parentEntity?p(d.parentEntity,l):u;H.copy(u.matrixWorld).premultiply(o).premultiply(r).premultiply(s).premultiply(H.copy(c.matrixWorld).invert()).decompose(u.position,u.rotation,u.scale),m(a,l,{rotation:u.rotation}),V(a,l).rotation.set(h=>h),G(a,l.computeTransformMatrix,h=>g(h,l)),v.markModifiedScene(a)}},Zt=(t,e)=>{for(let i=0;i<t.length;i++){const n=t[i],o=e[i]??e[0],r=p(n,E).parentEntity,a=l.getWorldScale(r,new b(1,1,1)),u=new b(o.x/a.x,o.y/a.y,o.z/a.z);m(n,l,{scale:u}),v.markModifiedScene(n)}},Kt=(t,e,i=!1)=>{for(let n=0;n<t.length;n++){const o=t[n],s=e[n]??e[0],r=p(o,l);i?r.scale.copy(s):r.scale.multiply(s),r.scale.set(r.scale.x===0?Number.EPSILON:r.scale.x,r.scale.y===0?Number.EPSILON:r.scale.y,r.scale.z===0?Number.EPSILON:r.scale.z),m(o,l,{scale:r.scale}),V(o,l).scale.set(a=>a),G(o,l.computeTransformMatrix,a=>g(a,l)),v.markModifiedScene(o)}},K=(t,e,i)=>{const n=l.getWorldPosition(t,new b),o=l.getWorldRotation(t,new te),s=l.getWorldScale(t,new b);m(t,E,{parentEntity:e,childIndex:i}),Q.positionObject([t],[n],L.world),Q.rotateObject([t],[o],L.world),Zt([t],[s]),f.setSourceEntity(t,e),v.markModifiedScene(t)},Xt=(t,e,i,n=z(v).rootEntity)=>{for(const o of t){if(g(o,D)||o===n)continue;const s=p(n,E);let r=e?s.children.indexOf(o):void 0;const a=i?s.children.indexOf(i)+1:e?s.children.indexOf(e):void 0;K(o,n,a);const u=Math.min(r??0,a??0),d=Math.max(r??0,a??0);if(r!==void 0&&a!==void 0){if(r<a)for(let c=d-1;c>=u;c--)s.children[c]&&K(s.children[c],n,c);else if(r>a)for(let c=u+1;c<=d;c++)s.children[c]&&K(s.children[c],n,c)}}},qt=t=>{const e=t[0];if(g(e,D))return;const i=p(e,E).parentEntity,n=Ee(e,[O]),o=f.create(n,f.generateUUID(),ee.Authoring);m(o,k,"New Group"),m(o,E,{parentEntity:i}),m(o,j),m(o,l,{position:new b(0,0,0)});for(const s of t)g(s,D)||(m(s,E,{parentEntity:o}),v.markModifiedScene(s))},Yt=t=>{U(S).selectedEntities.set([]);const e=[];for(const i of t){if(g(i,D))continue;const n=f.getSourceEntity(i);v.markModifiedScene(i);const o=[];G(i,s=>{e.push(p(s,f).entityID),o.push(s)},s=>f.getSourceEntity(s)===n);for(const s of o)Be(s)}return e},Jt=t=>{const e=U(S).selectedEntities.value;if(t.length===e.length){let i=!0;for(let n=0;n<t.length;n++)if(!e.includes(t[n])){i=!1;break}if(i)return}S.updateSelection(t)},$t=t=>{const e=U(S).selectedEntities.value.slice(0);for(let i=0;i<t.length;i++){const n=t[i],o=e.indexOf(n);o>-1?e.splice(o,1):e.push(n)}S.updateSelection(e)},en=t=>{const e=U(S).selectedEntities.value.slice(0);for(let i=0;i<t.length;i++){const n=t[i];e.includes(n)||e.push(n)}S.updateSelection(t)},Q={addOrRemoveComponent:At,modifyProperty:Gt,modifyName:Lt,createObjectFromSceneElement:ke,duplicateObject:Bt,positionObject:Wt,rotateObject:Qt,rotateAround:Vt,scaleObject:Kt,reparentObject:Xt,groupObjects:qt,removeObject:Yt,addToSelection:en,replaceSelection:Jt,toggleSelection:$t,overwriteLookdevObject:Nt},hn=(t,e,i=S.getSelectedEntities())=>n=>{tn(t,{[e]:n},i)},tn=(t,e,i=S.getSelectedEntities())=>{for(let n=0;n<i.length;n++){const o=i[n],s=g(o,t)?$(o,t):{};for(const[r,a]of Object.entries(e))r.includes(".")?Ce(s,r,a):s[r]=a;_(o,t,s)}},gn=(t,e,i=S.getSelectedEntities())=>n=>{nn(t,{[e]:n},i)},nn=(t,e,i=S.getSelectedEntities())=>{Q.modifyProperty(i,t,e);const n=new Set(i.map(o=>O.getSourceID(o)));for(const o of n)ot.snapshot(o)};export{Q as E,Ft as P,L as T,nn as a,ne as b,gn as c,hn as u};
