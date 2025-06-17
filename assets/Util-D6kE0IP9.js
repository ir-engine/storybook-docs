var Re=Object.defineProperty;var je=(t,e,i)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var x=(t,e,i)=>je(t,typeof e!="symbol"?e+"":e,i);import{z as _e,w as Oe,G as ze,Q as Ae,U as m,g as f,h as g,H as Fe,I as Z,q as ye,s as p,r as j,d as ve,S as y,u as be,a as X,j as Le,e as Ge,B as Ue,J as Ne,K as $,i as Be,M as We,N as _,A as U,b as Qe,v as Ee,p as ee,E as b,x as V,O as He,R as oe,T as Y}from"./UUIDComponent-GqVY2Xw8.js";import{u as Ve,d as Se,e as Ke,a as A,E as qe,s as Ze,g as N,j as Ce}from"./WebRTCTransportFunctions-mB_FREj1.js";import{R as S,r as M}from"./index-DPzuYzxM.js";import{O as xe,a as O,G as z,D as ie,F as Xe,M as Ye,ac as se,ad as Je,ae as $e,af as D,e as ae,w as re,q as Me,b as et,u as tt,ag as nt,a7 as P,ah as ot,ai as it,N as k,T as l,A as st}from"./resourceLoaderHooks-CRL4d032.js";import{U as ce,r as at,a as T,h as rt,s as ct,t as lt,u as ut,v as ft,W as mt,w as pt,x as Pe,y as dt,z as K,A as le,m as ht,F as gt,j as De,G as ue,d as W,Q as te,E as fe}from"./three.module-BizNiMhn.js";import{S as F}from"./ShadowComponent-DnhO6zHH.js";import{S as yt,a as vt,T as G,b as bt,u as Et,F as St}from"./useFeatureFlags-Dn9l-n2t.js";import{E as v}from"./EditorServices-5l66pnva.js";import{S as E}from"./index-Dp9Z83cc.js";import{a as Ct}from"./utils-C_TihLnJ.js";const me=t=>{for(const[e,i]of Object.entries(t))i&&typeof i.dispose=="function"&&i.dispose();t.dispose()},pe=t=>{var o;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(me):me(e.material)),e.geometry){e.geometry.dispose();for(const s in e.geometry.attributes)e.geometry.deleteAttribute(s)}const i=t;i.isSkinnedMesh&&((o=i.skeleton)==null||o.dispose());const n=t;typeof n.dispose=="function"&&n.dispose()},xt=_e([xe,O]),Mt=5*5,Pt=()=>{for(const t of xt()){const e=f(t,xe),n=g(t,ie)?ie.squaredDistance[t]>Mt:!0,o=!(Xe.isCulled[t]&&n);e.visible=o}},Dt=t=>{const e=t.entity,i=m.getAsSourceID(e),n=m.useEntitiesBySource(i);return S.createElement(Fe,{entities:n,ChildEntityReactor:Tt,props:{parentEntity:e}})},kt=t=>{var n;let e=Z(t,se);const i=(n=ye(t,Je))==null?void 0:n.entities.value;if(i){for(const o of i)if(o&&g(o,se)){e=!0;break}}return e},Tt=t=>{const e=Z(t.entity,Ye),i=Z(t.entity,O),n=kt(t.entity),o=ye(t.parentEntity,F);return M.useEffect(()=>{if(!(!e||!i)&&o)return n?j(t.entity,F):p(t.entity,F,f(t.parentEntity,F)),()=>{j(t.entity,F)}},[i,e,n,o==null?void 0:o.cast,o==null?void 0:o.receive]),null},wt=()=>S.createElement(S.Fragment,null,S.createElement(Ae,{Components:[z,m],ChildEntityReactor:Dt}));Oe({uuid:"ee.engine.SceneObjectSystem",insert:{after:ze},execute:Pt,reactor:wt});const de=`
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

}`,R=class R{constructor(){x(this,"cubeCamera");x(this,"sky");x(this,"_inclination");x(this,"_azimuth");x(this,"_distance");this.sky=new rt(new ct(1,1,1),new lt({name:"SkyShader",fragmentShader:he,vertexShader:de,uniforms:ce.clone(R.uniforms),side:ut,depthWrite:!1})),this.cubeCamera=new ft(1,1e5,new mt(512,{format:Pe,type:pt})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),i=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(i),Math.sin(i)*Math.sin(e),Math.sin(i)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){pe(this.sky),pe(this.cubeCamera)}};x(R,"vertexShader",de),x(R,"fragmentShader",he),x(R,"uniforms",ce.merge([at.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new T}}]));let J=R;var w=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(w||{});const It=t=>{const n=new Uint8Array(16384);for(let o=0;o<4096;o++){const s=o*4;n[s]=Math.floor(t.r*255),n[s+1]=Math.floor(t.g*255),n[s+2]=Math.floor(t.b*255),n[s+3]=255}return n},Rt=(t,e,i,n)=>{const o="/negx.jpg",s="/negy.jpg",r="/negz.jpg",a="/posx.jpg",u="/posy.jpg",d="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new dt().setPath(t).load([a,o,u,s,d,r],h=>{e(h)},h=>{i&&i(h)},h=>{n&&n(h)})},jt=new De,I=ve({name:"SkyboxComponent",jsonID:"EE_skybox",schema:y.Object({backgroundColor:et.Color(0),equirectangularPath:y.String({default:""}),cubemapPath:y.String({default:""}),backgroundType:y.Number({default:1}),sky:y.Type({serialized:!1}),skyboxProps:y.Object({turbidity:y.Number({default:10}),rayleigh:y.Number({default:1}),luminance:y.Number({default:1}),mieCoefficient:y.Number({default:.004999999999999893}),mieDirectionalG:y.Number({default:.99}),inclination:y.Number({default:.10471975511965978}),azimuth:y.Number({default:.16666666666666666})})}),reactor:function(){const t=be(),e=X(t,I),i=Ve(void 0),[n,o]=$e(e.backgroundType.value===w.equirectangular?e.equirectangularPath.value:"",t);return Le(()=>()=>{Ge(t)&&g(t,D)&&j(t,D)},[]),M.useEffect(()=>{e.backgroundType.value!==w.equirectangular||!n||(n.colorSpace=K,n.mapping=le,n.minFilter=ht,p(t,D,n))},[n,e.backgroundType]),M.useEffect(()=>{if(o)return ae(t,I,"FILE_ERROR",o.message),()=>{re(t,I,"FILE_ERROR")}},[o]),M.useEffect(()=>{if(e.backgroundType.value!==w.color)return;const s=e.backgroundColor.value??jt,r=64,a=new gt(It(new De(s)),r,r,Pe);return a.needsUpdate=!0,a.colorSpace=K,a.mapping=le,p(t,D,a),()=>{a.dispose(),j(t,D)}},[e.backgroundType,e.backgroundColor]),M.useEffect(()=>{if(e.backgroundType.value!==w.cubemap)return;const s=a=>{a.colorSpace=K,a.mapping=ue,i.set(a),p(t,D,a),re(t,I,"FILE_ERROR")},r=[e.cubemapPath.value,s,void 0,a=>ae(t,I,"FILE_ERROR",a.message)];return Rt(...r),()=>{j(t,D)}},[e.backgroundType,e.cubemapPath]),M.useEffect(()=>{const s=i.value;if(s)return()=>{s.dispose()}},[i]),M.useEffect(()=>{if(e.backgroundType.value!==w.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new J);const s=e.sky.value;s.azimuth=e.skyboxProps.value.azimuth,s.inclination=e.skyboxProps.value.inclination,s.mieCoefficient=e.skyboxProps.value.mieCoefficient,s.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,s.rayleigh=e.skyboxProps.value.rayleigh,s.turbidity=e.skyboxProps.value.turbidity,s.luminance=e.skyboxProps.value.luminance;const r=f(Ue.instance.viewerEntity,Me),a=s.generateSkyboxTextureCube(r.renderer);a.mapping=ue,p(t,D,a),s.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]}),_t=t=>{const e=[],i=Ne(t);for(const n of i){const o=n.jsonID;if(o){const s=$(t,n);s&&e.push({name:o,props:s})}}return e},ge=Se({name:"PostProcessingEffectState",initial:{}}),ke=ve({name:"PostProcessingComponent",jsonID:"EE_postprocessing",schema:y.Object({enabled:y.Bool(),effects:y.Record(y.String(),nt)}),reactor:()=>{const t=be(),e=tt(t);return e?S.createElement(Ot,{entity:t,rendererEntity:e}):null}}),Ot=t=>{const{entity:e,rendererEntity:i}=t,n=X(e,ke),o=Ke(ge).keys,s=X(i,Me),r=s.effects,a=s.passes,u=s.effectComposer.value,d=s.scene.value;return n.enabled.value?S.createElement(S.Fragment,null,o.map(c=>{var C;const h=A(ge)[c];return h?S.createElement(M.Suspense,{key:c},S.createElement(qe,null,S.createElement(h.reactor,{isActive:(C=n.effects[c])==null?void 0:C.isActive,rendererEntity:i,effectData:n.effects,effects:r,composer:u,scene:d,passes:a}))):null})):null},zt={Simple:"Simple"};var At=(t=>(t[t.DRAG=0]="DRAG",t[t.CLICK=1]="CLICK",t))(At||{});const ne=Se({name:"EditorHelperState",initial:()=>({editorMode:zt.Simple,transformMode:bt.translate,transformSpace:G.local,transformPivot:vt.FirstSelected,transformGizmoEntity:Be,gridSnap:yt.Disabled,translationSnap:.5,rotationSnap:10,scaleSnap:.1,placementMode:0,gizmoEnabled:!0,gridVisibility:!1,gridHeight:0,showGlbChildren:!0,volumeVisibility:"Auto",editorIconMaxSize:.5,editorIconMinSize:.4}),extension:Ze(["snapMode","translationSnap","rotationSnap","scaleSnap","gridVisibility","gridHeight"]),reactor:()=>{const[t]=Et([St.Studio.UI.Hierarchy.ShowGlbChildren]);return M.useEffect(()=>{const e=N(ne).showGlbChildren;typeof t<"u"&&e.set(t)},[t]),null}}),Q=new W,L=new T,Ft=(t,e,i,n=void 0)=>{if(!e.jsonID)return[];const s=[];for(const r of t)g(r,P)||(i?(p(r,e,n),n?H.modifyProperty([r],e,n):p(r,e,n)):j(r,e),s.push(f(r,m).entityID),v.markModifiedScene(r));return s},Lt=(t,e)=>{const i=[];for(const n of t)p(n,k,e),v.markModifiedScene(n),i.push(f(n,m).entityID);return i},Gt=(t,e,i)=>{const n=[];for(const o of t){if(g(o,P))continue;const s=g(o,e)?$(o,e):{};for(const[r,a]of Object.entries(i))r.includes(".")?Ce(s,r,a):s[r]=a;_(o,e,s),v.markModifiedScene(o),n.push(f(o,m).entityID)}return n},Ut=[I,ot,it,ke],Nt=(t=[],e=A(v).rootEntity,i)=>{for(const n of t){const{name:o,props:s}=n,r=Ut.find(u=>u.jsonID===o);if(!r)continue;const a=We(e,[r]);a.length?(_(a[0],r,s),v.markModifiedScene(e)):Te(t,e)}},Te=(t=[],e=A(v).rootEntity,i,n)=>{var d;n&&(n=Ct(n,e));const o=((d=t.find(c=>c.name===m.jsonID))==null?void 0:d.props.uuid)??m.generate(),s=Ee(e,[z]);let r="New Object";n&&(r=n);const a={};for(const c of t)a[c.name]={...oe(Y.get(c.name)),...c.props};a[m.jsonID]||(a[m.jsonID]={entityID:o}),a[O.jsonID]||(a[O.jsonID]=!0);const u=m.create(s,o,ee.Authoring);if(p(u,k,r),a[l.jsonID]){const c={...oe(l),...a[l.jsonID]};_(u,l,{...c})}p(u,b,{parentEntity:e});for(const[c,h]of Object.entries(a))c===l.jsonID||c===m.jsonID||c===k.jsonID||_(u,Y.get(c),h);return v.markModifiedScene(s),{entityUUID:m.get(u),sourceID:z.getSourceID(s)}},Bt=t=>{const e=[],i=(o,s)=>{o.forEach(r=>{const a=_t(r).filter(C=>C.name!==m.jsonID),u=m.getSourceEntity(r),d=m.create(u,m.generateUUID(),ee.Authoring),c=f(r,k);p(d,O),p(d,k,c),p(d,b,{parentEntity:s});for(const C of a)C.name!==k.jsonID&&C.name!==b.jsonID&&_(d,Y.get(C.name),C.props);if(e.push(m.get(d)),g(r,z))return;const h=f(r,b).children;i(h,d)})},n=He(t);for(const o of n){if(g(o,P))continue;const{parentEntity:s}=f(o,b);i([o],s),v.markModifiedScene(o)}return E.updateSelection(e),e},Wt=(t,e,i=A(ne).transformSpace,n)=>{for(let o=0;o<t.length;o++){const s=t[o];if(g(s,P))continue;const r=e[o]??e[0],a=f(s,l);if(i===G.local)n?a.position.add(r):a.position.copy(r);else{const u=f(s,b),d=u.parentEntity?f(u.parentEntity,l):a;L.set(0,0,0),n&&L.setFromMatrixPosition(a.matrixWorld),L.add(r);const c=d.matrixWorld;Q.copy(c).invert(),L.applyMatrix4(Q),a.position.copy(L)}p(s,l,{position:a.position}),V(s,l).position.set(u=>u),U(s,l.computeTransformMatrix,u=>g(u,l)),v.markModifiedScene(s)}},B=new te,Qt=new te,Ht=(t,e,i=A(ne).transformSpace)=>{for(let n=0;n<t.length;n++){const o=t[n];B.copy(e[n]??e[0]);const s=new fe().setFromQuaternion(B,"YXZ"),r=f(o,l);if(i===G.local)r.rotation.copy(B);else{const a=f(o,b),d=(a.parentEntity?f(a.parentEntity,l):r).matrixWorld,h=Qt.setFromRotationMatrix(d).invert().multiply(B);s.copy(new fe().setFromQuaternion(h,"YXZ")),r.rotation.copy(h)}p(o,l,{rotation:r.rotation}),V(o,l).rotation.set(a=>a),U(o,l.computeTransformMatrix,a=>g(a,l)),v.markModifiedScene(o)}},Vt=(t,e,i,n)=>{const o=new W().makeTranslation(-n.x,-n.y,-n.z),s=new W().makeTranslation(n.x,n.y,n.z),r=new W().makeRotationAxis(e,i);for(const a of t){const u=f(a,l),d=f(a,b),c=d.parentEntity?f(d.parentEntity,l):u;Q.copy(u.matrixWorld).premultiply(o).premultiply(r).premultiply(s).premultiply(Q.copy(c.matrixWorld).invert()).decompose(u.position,u.rotation,u.scale),p(a,l,{rotation:u.rotation}),V(a,l).rotation.set(h=>h),U(a,l.computeTransformMatrix,h=>g(h,l)),v.markModifiedScene(a)}},Kt=(t,e)=>{for(let i=0;i<t.length;i++){const n=t[i],o=e[i]??e[0],r=f(n,b).parentEntity,a=l.getWorldScale(r,new T(1,1,1)),u=new T(o.x/a.x,o.y/a.y,o.z/a.z);p(n,l,{scale:u}),v.markModifiedScene(n)}},qt=(t,e,i=!1)=>{for(let n=0;n<t.length;n++){const o=t[n],s=e[n]??e[0],r=f(o,l);i?r.scale.copy(s):r.scale.multiply(s),r.scale.set(r.scale.x===0?Number.EPSILON:r.scale.x,r.scale.y===0?Number.EPSILON:r.scale.y,r.scale.z===0?Number.EPSILON:r.scale.z),p(o,l,{scale:r.scale}),V(o,l).scale.set(a=>a),U(o,l.computeTransformMatrix,a=>g(a,l)),v.markModifiedScene(o)}},q=(t,e,i)=>{const n=l.getWorldPosition(t,new T),o=l.getWorldRotation(t,new te),s=l.getWorldScale(t,new T);p(t,b,{parentEntity:e,childIndex:i}),H.positionObject([t],[n],G.world),H.rotateObject([t],[o],G.world),Kt([t],[s]),m.setSourceEntity(t,e),v.markModifiedScene(t)},we=(t,e,i,n=A(v).rootEntity)=>{for(const o of t){if(g(o,P)||o===n)continue;const s=f(n,b);let r=e?s.children.indexOf(o):void 0;const a=i?s.children.indexOf(i)+1:e?s.children.indexOf(e):void 0;q(o,n,a);const u=Math.min(r??0,a??0),d=Math.max(r??0,a??0);if(r!==void 0&&a!==void 0){if(r<a)for(let c=d-1;c>=u;c--)s.children[c]&&q(s.children[c],n,c);else if(r>a)for(let c=u+1;c<=d;c++)s.children[c]&&q(s.children[c],n,c)}}},Zt=t=>{const e=t[0];if(g(e,P))return;const i=f(e,b).parentEntity,n=Ee(e,[z]),o=m.create(n,m.generateUUID(),ee.Authoring);p(o,k,"New Group"),p(o,b,{parentEntity:i}),p(o,O),p(o,l,{position:new T(0,0,0)});for(const s of t)g(s,P)||(p(s,b,{parentEntity:o}),v.markModifiedScene(s))},Xt=t=>{for(const e of t){if(g(e,P))continue;const i=f(e,b).children;we(i,e,void 0,f(e,b).parentEntity),Ie([e])}},Ie=t=>{N(E).selectedEntities.set([]);const e=[];for(const i of t){if(g(i,P))continue;const n=m.getSourceEntity(i);v.markModifiedScene(i);const o=[];U(i,s=>{e.push(f(s,m).entityID),o.push(s)},s=>m.getSourceEntity(s)===n);for(const s of o)Qe(s)}return e},Yt=t=>{const e=N(E).selectedEntities.value;if(t.length===e.length){let i=!0;for(let n=0;n<t.length;n++)if(!e.includes(t[n])){i=!1;break}if(i)return}E.updateSelection(t)},Jt=t=>{const e=N(E).selectedEntities.value.slice(0);for(let i=0;i<t.length;i++){const n=t[i],o=e.indexOf(n);o>-1?e.splice(o,1):e.push(n)}E.updateSelection(e)},$t=t=>{const e=N(E).selectedEntities.value.slice(0);for(let i=0;i<t.length;i++){const n=t[i];e.includes(n)||e.push(n)}E.updateSelection(t)},H={addOrRemoveComponent:Ft,modifyProperty:Gt,modifyName:Lt,createObjectFromSceneElement:Te,duplicateObject:Bt,positionObject:Wt,rotateObject:Ht,rotateAround:Vt,scaleObject:qt,reparentObject:we,groupObjects:Zt,ungroupObjects:Xt,removeObject:Ie,addToSelection:$t,replaceSelection:Yt,toggleSelection:Jt,overwriteLookdevObject:Nt},dn=(t,e,i=E.getSelectedEntities())=>n=>{en(t,{[e]:n},i)},en=(t,e,i=E.getSelectedEntities())=>{for(let n=0;n<i.length;n++){const o=i[n],s=g(o,t)?$(o,t):{};for(const[r,a]of Object.entries(e))r.includes(".")?Ce(s,r,a):s[r]=a;_(o,t,s)}},hn=(t,e,i=E.getSelectedEntities())=>n=>{tn(t,{[e]:n},i)},tn=(t,e,i=E.getSelectedEntities())=>{H.modifyProperty(i,t,e);const n=new Set(i.map(o=>z.getSourceID(o)));for(const o of n)st.snapshot(o)};export{H as E,At as P,tn as a,ne as b,hn as c,dn as u};
