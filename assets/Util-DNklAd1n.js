var Oe=Object.defineProperty;var ze=(t,e,i)=>e in t?Oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var k=(t,e,i)=>ze(t,typeof e!="symbol"?e+"":e,i);import{j as Ee,v as Fe,F as Ae,Q as Le,g as p,h as g,U as m,G as Ge,H as J,n as V,s as d,r as L,d as Se,S as y,u as Ce,a as $,i as xe,o as Ue,z as Ne,I as Be,J as ne,f as Q,E as b,t as We,K as Qe,M as j,k as U,b as He,y as Pe,L as oe,N as X,O as Ve,R as ae,T as ee}from"./UUIDComponent-DOkAxO8s.js";import{u as ke,d as Me,s as Ze,b as Ke,a as F,E as Xe,j as qe,g as N,k as De}from"./WebRTCTransportFunctions-D8vIlmga.js";import{R as C,r as P}from"./index-DPzuYzxM.js";import{O as we,a as O,G as z,a6 as re,a7 as Ye,M as Je,a8 as ce,a9 as $e,aa as et,ab as M,e as le,ac as ue,ad as _,b as tt,ae as nt,a1 as D,af as ot,ag as it,N as w,T as u,A as st}from"./GLTFComponent-Bda20LHk.js";import{U as fe,u as at,a as E,i as rt,v as ct,w as lt,m as ut,x as ft,W as mt,y as dt,z as Te,G as pt,H as q,J as me,n as ht,K as gt,k as Re,N as de,f as H,Q as ie,E as pe}from"./three.module-ClOVD30Y.js";import{S as B}from"./ShadowComponent-BmFv0QA0.js";import{u as yt,f as vt}from"./FeathersHooks-CoWcTnaw.js";import{E as v}from"./EditorServices-BopIA7t4.js";import{S as x}from"./index-DbkxkmDp.js";import{a as bt}from"./utils-Dyx-CI02.js";const he=t=>{for(const[e,i]of Object.entries(t))i&&typeof i.dispose=="function"&&i.dispose();t.dispose()},ge=t=>{var o;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(he):he(e.material)),e.geometry){e.geometry.dispose();for(const s in e.geometry.attributes)e.geometry.deleteAttribute(s)}const i=t;i.isSkinnedMesh&&((o=i.skeleton)==null||o.dispose());const n=t;typeof n.dispose=="function"&&n.dispose()},Et=Ee([we,O]),St=5*5,Ct=()=>{for(const t of Et()){const e=p(t,we),n=g(t,re)?re.squaredDistance[t]>St:!0,o=!(Ye.isCulled[t]&&n);e.visible=o}},xt=t=>{const e=t.entity,i=g(e,m)?m.getAsSourceID(e):"",n=m.useEntitiesBySource(i);return C.createElement(Ge,{entities:n,ChildEntityReactor:kt,props:{parentEntity:e}})},Pt=t=>{var n;let e=J(t,ce);const i=(n=V(t,$e))==null?void 0:n.entities.value;if(i){for(const o of i)if(o&&g(o,ce)){e=!0;break}}return e},kt=t=>{const e=J(t.entity,Je),i=J(t.entity,O),n=Pt(t.entity),o=V(t.parentEntity,B);return P.useEffect(()=>{!e||!i||o&&(n?L(t.entity,B):d(t.entity,B,p(t.parentEntity,B)))},[i,e,n,o==null?void 0:o.cast,o==null?void 0:o.receive]),null},Mt=()=>C.createElement(C.Fragment,null,C.createElement(Le,{Components:[z],ChildEntityReactor:xt}));Fe({uuid:"ee.engine.SceneObjectSystem",insert:{after:Ae},execute:Ct,reactor:Mt});const ye=`
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

}`,ve=`
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

}`,I=class I{constructor(){k(this,"cubeCamera");k(this,"sky");k(this,"_inclination");k(this,"_azimuth");k(this,"_distance");this.sky=new rt(new ct(1,1,1),new lt({name:"SkyShader",fragmentShader:ve,vertexShader:ye,uniforms:fe.clone(I.uniforms),side:ut,depthWrite:!1})),this.cubeCamera=new ft(1,1e5,new mt(512,{format:Te,type:dt})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),i=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(i),Math.sin(i)*Math.sin(e),Math.sin(i)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){ge(this.sky),ge(this.cubeCamera)}};k(I,"vertexShader",ye),k(I,"fragmentShader",ve),k(I,"uniforms",fe.merge([at.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new E}}]));let te=I;var T=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(T||{});const Dt=t=>{const n=new Uint8Array(16384);for(let o=0;o<4096;o++){const s=o*4;n[s]=Math.floor(t.r*255),n[s+1]=Math.floor(t.g*255),n[s+2]=Math.floor(t.b*255),n[s+3]=255}return n},wt=(t,e,i,n)=>{const o="/negx.jpg",s="/negy.jpg",a="/negz.jpg",r="/posx.jpg",c="/posy.jpg",f="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new pt().setPath(t).load([r,o,c,s,f,a],h=>{e(h)},h=>{i&&i(h)},h=>{n&&n(h)})},Tt=new Re,R=Se({name:"SkyboxComponent",jsonID:"EE_skybox",schema:y.Object({backgroundColor:tt.Color(0),equirectangularPath:y.String({default:""}),cubemapPath:y.String({default:""}),backgroundType:y.Number({default:1}),sky:y.Type({serialized:!1}),skyboxProps:y.Object({turbidity:y.Number({default:10}),rayleigh:y.Number({default:1}),luminance:y.Number({default:1}),mieCoefficient:y.Number({default:.004999999999999893}),mieDirectionalG:y.Number({default:.99}),inclination:y.Number({default:.10471975511965978}),azimuth:y.Number({default:.16666666666666666})})}),reactor:function(){const t=Ce(),e=$(t,R),i=ke(void 0),[n,o]=et(e.backgroundType.value===T.equirectangular?e.equirectangularPath.value:"",t);return xe(()=>()=>{Ue(t)&&g(t,M)&&L(t,M)},[]),P.useEffect(()=>{e.backgroundType.value!==T.equirectangular||!n||(n.colorSpace=q,n.mapping=me,n.minFilter=ht,d(t,M,n))},[n,e.backgroundType]),P.useEffect(()=>{if(o)return le(t,R,"FILE_ERROR",o.message),()=>{ue(t,R,"FILE_ERROR")}},[o]),P.useEffect(()=>{if(e.backgroundType.value!==T.color)return;const s=e.backgroundColor.value??Tt,a=64,r=new gt(Dt(new Re(s)),a,a,Te);return r.needsUpdate=!0,r.colorSpace=q,r.mapping=me,d(t,M,r),()=>{r.dispose(),L(t,M)}},[e.backgroundType,e.backgroundColor]),P.useEffect(()=>{if(e.backgroundType.value!==T.cubemap)return;const s=r=>{r.colorSpace=q,r.mapping=de,i.set(r),d(t,M,r),ue(t,R,"FILE_ERROR")},a=[e.cubemapPath.value,s,void 0,r=>le(t,R,"FILE_ERROR",r.message)];return wt(...a),()=>{L(t,M)}},[e.backgroundType,e.cubemapPath]),P.useEffect(()=>{const s=i.value;if(s)return()=>{s.dispose()}},[i]),P.useEffect(()=>{if(e.backgroundType.value!==T.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new te);const s=e.sky.value;s.azimuth=e.skyboxProps.value.azimuth,s.inclination=e.skyboxProps.value.inclination,s.mieCoefficient=e.skyboxProps.value.mieCoefficient,s.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,s.rayleigh=e.skyboxProps.value.rayleigh,s.turbidity=e.skyboxProps.value.turbidity,s.luminance=e.skyboxProps.value.luminance;const a=p(Ne.instance.viewerEntity,_),r=s.generateSkyboxTextureCube(a.renderer);r.mapping=de,d(t,M,r),s.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]}),Rt={FirstSelected:"FirstSelected"},It={translate:"translate"};new E(1,0,0),new E(0,1,0),new E(0,0,1),new E(1,1,0),new E(0,1,1),new E(1,0,1),new E(1,1,1);const _t={Disabled:"Disabled"},G={world:"world",local:"local"},jt=t=>{const e=[],i=Be(t);for(const n of i){const o=n.jsonID;if(o){const s=ne(t,n);s&&e.push({name:o,props:s})}}return e},be=Me({name:"PostProcessingEffectState",initial:{}});function Ot(t){const e=ke(Q);return xe(()=>{let i=!1;const n=s=>{var l,h,S;const a=V(s.entity,b),c=We([_]).find(je=>p(je,_).scenes.includes(s.entity)),f=!!((l=V(c??Q,_))!=null&&l.renderer);return P.useLayoutEffect(()=>{if(!(!c||!f))return e.set(c),()=>{i||e.set(Q)}},[(h=a==null?void 0:a.parentEntity)==null?void 0:h.value,c,f]),c||!((S=a==null?void 0:a.parentEntity)!=null&&S.value)?null:C.createElement(n,{key:a.parentEntity.value,entity:a.parentEntity.value})},o=Ze(function(){return C.createElement(n,{entity:t,key:t})});return()=>{i=!0,o.stop()}},[t]),e.value}Ee([_]);const Ie=Se({name:"PostProcessingComponent",jsonID:"EE_postprocessing",schema:y.Object({enabled:y.Bool(),effects:y.Record(y.String(),nt)}),reactor:()=>{const t=Ce(),e=Ot(t);return e?C.createElement(zt,{entity:t,rendererEntity:e}):null}}),zt=t=>{const{entity:e,rendererEntity:i}=t,n=$(e,Ie),o=Ke(be).keys,s=$(i,_),a=s.effects,r=s.passes,c=s.effectComposer.value,f=s.scene.value;return n.enabled.value?C.createElement(C.Fragment,null,o.map(l=>{var S;const h=F(be)[l];return h?C.createElement(P.Suspense,{key:l},C.createElement(Xe,null,C.createElement(h.reactor,{isActive:(S=n.effects[l])==null?void 0:S.isActive,rendererEntity:i,effectData:n.effects,effects:a,composer:c,scene:f,passes:r}))):null})):null},Ft=t=>{const e=yt(vt,{query:{$or:t.map(i=>({flagName:i})),paginate:!1}});return e.status!=="success"?[]:t.map(i=>{const n=e.data.find(({flagName:o})=>o===i);return n?n.flagValue:!0})},At={Studio:{UI:{Hierarchy:{ShowGlbChildren:"ir.editor.ui.hierarchy.showGlbChildren"}}}},Lt={Simple:"Simple"};var Gt=(t=>(t[t.DRAG=0]="DRAG",t[t.CLICK=1]="CLICK",t))(Gt||{});const se=Me({name:"EditorHelperState",initial:()=>({editorMode:Lt.Simple,transformMode:It.translate,transformSpace:G.local,transformPivot:Rt.FirstSelected,transformGizmoEntity:Q,gridSnap:_t.Disabled,translationSnap:.5,rotationSnap:10,scaleSnap:.1,placementMode:0,gizmoEnabled:!0,gridVisibility:!1,gridHeight:0,showGlbChildren:!0}),extension:qe(["snapMode","translationSnap","rotationSnap","scaleSnap","gridVisibility","gridHeight"]),reactor:()=>{const[t]=Ft([At.Studio.UI.Hierarchy.ShowGlbChildren]);return P.useEffect(()=>{const e=N(se).showGlbChildren;typeof t<"u"&&e.set(t)},[t]),null}}),Z=new H,A=new E,Ut=(t,e,i,n=void 0)=>{if(!e.jsonID)return[];const s=[];for(const a of t)g(a,D)||(i?(d(a,e,n),n?K.modifyProperty([a],e,n):d(a,e,n)):L(a,e),s.push(p(a,m).entityID),v.markModifiedScene(a));return s},Nt=(t,e)=>{const i=[];for(const n of t)d(n,w,e),v.markModifiedScene(n),i.push(p(n,m).entityID);return i},Bt=(t,e,i)=>{const n=[];for(const o of t){if(g(o,D))continue;const s=g(o,e)?ne(o,e):{};for(const[a,r]of Object.entries(i))a.includes(".")?De(s,a,r):s[a]=r;j(o,e,s),v.markModifiedScene(o),n.push(p(o,m).entityID)}return n},Wt=[R,ot,it,Ie],Qt=(t=[],e=F(v).rootEntity,i)=>{for(const n of t){const{name:o,props:s}=n,a=Wt.find(c=>c.jsonID===o);if(!a)continue;const r=Qe(e,[a]);r.length?(j(r[0],a,s),v.markModifiedScene(e)):_e(t,e)}},_e=(t=[],e=F(v).rootEntity,i,n)=>{var f;n&&(n=bt(n,e));const o=((f=t.find(l=>l.name===m.jsonID))==null?void 0:f.props.uuid)??m.generate(),s=Pe(e,[z]);let a="New Object";n&&(a=n);const r={};for(const l of t)r[l.name]={...ae(ee.get(l.name)),...l.props};r[m.jsonID]||(r[m.jsonID]={entityID:o}),r[O.jsonID]||(r[O.jsonID]=!0);const c=m.create(s,o,oe.Authoring);if(d(c,w,a),r[u.jsonID]){const l={...ae(u),...r[u.jsonID]};j(c,u,{...l})}d(c,b,{parentEntity:e});for(const[l,h]of Object.entries(r))l===u.jsonID||l===m.jsonID||l===w.jsonID||j(c,ee.get(l),h);return v.markModifiedScene(s),{entityUUID:m.get(c),sourceID:z.getSourceID(s)}},Ht=t=>{const e=[],i=(o,s)=>{o.forEach(a=>{const r=jt(a).filter(S=>S.name!==m.jsonID),c=m.getSourceEntity(a),f=m.create(c,m.generateUUID(),oe.Authoring),l=p(a,w);d(f,O),d(f,w,l),d(f,b,{parentEntity:s});for(const S of r)S.name!==w.jsonID&&S.name!==b.jsonID&&j(f,ee.get(S.name),S.props);if(e.push(m.get(f)),g(a,z))return;const h=p(a,b).children;i(h,f)})},n=Ve(t);for(const o of n){if(g(o,D))continue;const{parentEntity:s}=p(o,b);i([o],s),v.markModifiedScene(o)}return x.updateSelection(e),e},Vt=(t,e,i=F(se).transformSpace,n)=>{for(let o=0;o<t.length;o++){const s=t[o];if(g(s,D))continue;const a=e[o]??e[0],r=p(s,u);if(i===G.local)n?r.position.add(a):r.position.copy(a);else{const c=p(s,b),f=c.parentEntity?p(c.parentEntity,u):r;A.set(0,0,0),n&&A.setFromMatrixPosition(r.matrixWorld),A.add(a);const l=f.matrixWorld;Z.copy(l).invert(),A.applyMatrix4(Z),r.position.copy(A)}d(s,u,{position:r.position}),X(s,u).position.set(c=>c),U(s,u.computeTransformMatrix,c=>g(c,u)),v.markModifiedScene(s)}},W=new ie,Zt=new ie,Kt=(t,e,i=F(se).transformSpace)=>{for(let n=0;n<t.length;n++){const o=t[n];W.copy(e[n]??e[0]);const s=new pe().setFromQuaternion(W,"YXZ"),a=p(o,u);if(i===G.local)a.rotation.copy(W);else{const r=p(o,b),f=(r.parentEntity?p(r.parentEntity,u):a).matrixWorld,h=Zt.setFromRotationMatrix(f).invert().multiply(W);s.copy(new pe().setFromQuaternion(h,"YXZ")),a.rotation.copy(h)}d(o,u,{rotation:a.rotation}),X(o,u).rotation.set(r=>r),U(o,u.computeTransformMatrix,r=>g(r,u)),v.markModifiedScene(o)}},Xt=(t,e,i,n)=>{const o=new H().makeTranslation(-n.x,-n.y,-n.z),s=new H().makeTranslation(n.x,n.y,n.z),a=new H().makeRotationAxis(e,i);for(const r of t){const c=p(r,u),f=p(r,b),l=f.parentEntity?p(f.parentEntity,u):c;Z.copy(c.matrixWorld).premultiply(o).premultiply(a).premultiply(s).premultiply(Z.copy(l.matrixWorld).invert()).decompose(c.position,c.rotation,c.scale),d(r,u,{rotation:c.rotation}),X(r,u).rotation.set(h=>h),U(r,u.computeTransformMatrix,h=>g(h,u)),v.markModifiedScene(r)}},qt=(t,e)=>{for(let i=0;i<t.length;i++){const n=t[i],o=e[i]??e[0],a=p(n,b).parentEntity,r=u.getWorldScale(a,new E(1,1,1)),c=new E(o.x/r.x,o.y/r.y,o.z/r.z);d(n,u,{scale:c}),v.markModifiedScene(n)}},Yt=(t,e,i=!1)=>{for(let n=0;n<t.length;n++){const o=t[n],s=e[n]??e[0],a=p(o,u);i?a.scale.copy(s):a.scale.multiply(s),a.scale.set(a.scale.x===0?Number.EPSILON:a.scale.x,a.scale.y===0?Number.EPSILON:a.scale.y,a.scale.z===0?Number.EPSILON:a.scale.z),d(o,u,{scale:a.scale}),X(o,u).scale.set(r=>r),U(o,u.computeTransformMatrix,r=>g(r,u)),v.markModifiedScene(o)}},Y=(t,e,i)=>{const n=u.getWorldPosition(t,new E),o=u.getWorldRotation(t,new ie),s=u.getWorldScale(t,new E);d(t,b,{parentEntity:e,childIndex:i}),K.positionObject([t],[n],G.world),K.rotateObject([t],[o],G.world),qt([t],[s]),m.setSourceEntity(t,e),v.markModifiedScene(t)},Jt=(t,e,i,n=F(v).rootEntity)=>{for(const o of t){if(g(o,D)||o===n)continue;const s=p(n,b);let a=e?s.children.indexOf(o):void 0;const r=i?s.children.indexOf(i)+1:e?s.children.indexOf(e):void 0;Y(o,n,r);const c=Math.min(a??0,r??0),f=Math.max(a??0,r??0);if(a!==void 0&&r!==void 0){if(a<r)for(let l=f-1;l>=c;l--)s.children[l]&&Y(s.children[l],n,l);else if(a>r)for(let l=c+1;l<=f;l++)s.children[l]&&Y(s.children[l],n,l)}}},$t=t=>{const e=t[0];if(g(e,D))return;const i=p(e,b).parentEntity,n=Pe(e,[z]),o=m.create(n,m.generateUUID(),oe.Authoring);d(o,w,"New Group"),d(o,b,{parentEntity:i}),d(o,O),d(o,u,{position:new E(0,0,0)});for(const s of t)g(s,D)||(d(s,b,{parentEntity:o}),v.markModifiedScene(s))},en=t=>{N(x).selectedEntities.set([]);const e=[];for(const i of t){if(g(i,D))continue;const n=m.getSourceEntity(i);v.markModifiedScene(i);const o=[];U(i,s=>{e.push(p(s,m).entityID),o.push(s)},s=>m.getSourceEntity(s)===n);for(const s of o)He(s)}return e},tn=t=>{const e=N(x).selectedEntities.value;if(t.length===e.length){let i=!0;for(let n=0;n<t.length;n++)if(!e.includes(t[n])){i=!1;break}if(i)return}x.updateSelection(t)},nn=t=>{const e=N(x).selectedEntities.value.slice(0);for(let i=0;i<t.length;i++){const n=t[i],o=e.indexOf(n);o>-1?e.splice(o,1):e.push(n)}x.updateSelection(e)},on=t=>{const e=N(x).selectedEntities.value.slice(0);for(let i=0;i<t.length;i++){const n=t[i];e.includes(n)||e.push(n)}x.updateSelection(t)},K={addOrRemoveComponent:Ut,modifyProperty:Bt,modifyName:Nt,createObjectFromSceneElement:_e,duplicateObject:Ht,positionObject:Vt,rotateObject:Kt,rotateAround:Xt,scaleObject:Yt,reparentObject:Jt,groupObjects:$t,removeObject:en,addToSelection:on,replaceSelection:tn,toggleSelection:nn,overwriteLookdevObject:Qt},vn=(t,e,i=x.getSelectedEntities())=>n=>{sn(t,{[e]:n},i)},sn=(t,e,i=x.getSelectedEntities())=>{for(let n=0;n<i.length;n++){const o=i[n],s=g(o,t)?ne(o,t):{};for(const[a,r]of Object.entries(e))a.includes(".")?De(s,a,r):s[a]=r;j(o,t,s)}},bn=(t,e,i=x.getSelectedEntities())=>n=>{an(t,{[e]:n},i)},an=(t,e,i=x.getSelectedEntities())=>{K.modifyProperty(i,t,e);const n=new Set(i.map(o=>z.getSourceID(o)));for(const o of n)st.snapshot(o)};export{K as E,Gt as P,G as T,an as a,se as b,bn as c,Ot as d,vn as u};
