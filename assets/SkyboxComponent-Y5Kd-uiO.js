var ke=Object.defineProperty;var Se=(t,e,n)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var m=(t,e,n)=>Se(t,typeof e!="symbol"?e+"":e,n);import{N as Re}from"./NotificationService-BJK4hIMJ.js";import{i as le,d as ue,g as T,u as K,a as W,c as v,N as D}from"./ActionFunctions-YsspZ-nA.js";import{r as l,R as x}from"./index-qyj2ZBCg.js";import{a as z,S as r,u as B,b as I,j as Pe,g as k,n as M,q as we,l as _e,f as d,m as Te,U as fe,e as j,o as Me,G as me,i as de,t as De,N as Le,Q as Ie,p as Ae,h as V,x as L,c as ge,r as _,E as ze}from"./UUIDComponent-hYGxvEdL.js";import{B as Be,t as O,s as Ue,aH as Fe,G as h,b0 as F,a1 as pe,b1 as q,$ as Ne,b2 as ve,aV as A,b3 as S,b4 as Oe,O as H,V as he,a4 as ye,D as X,F as Ge,M as Q,l as je,b5 as Ve,o as Z,b6 as $,b7 as qe,b8 as p,aI as Y,K as He,q as Ke}from"./GLTFComponent-DGUYJZfi.js";import{V as be,aw as We,a6 as J,a7 as Xe,p as Qe,ax as Ze,q as $e,g as Ye,Z as Je,Y as et,G as tt,H as Ce,ay as nt,S as N,az as ee,s as ot,aA as at,a8 as Ee,aB as te}from"./three.module-wkFeCwOp.js";import{X as it}from"./XRState-B55tC3XT.js";const ne=(t,e)=>{var a;if(T(Pe).isEditing)return;const n=k(t,P);e&&((a=e.session)==null||a.end()),typeof window=="object"&&window&&n.newTab?window.open(n.url,"_blank"):window.location.href=n.url},st=t=>{var n;if(console.log("linkCallback"),(n=Fe.getMergedButtons(t).XRStandardGamepadTrigger)!=null&&n.down){const a=T(it);ne(t,a)}else ne(t,void 0)};new be;const rt="Click to follow",oe="linkCallback",ct=ue({name:"LinkState",initial:{location:void 0}}),P=z({name:"LinkComponent",jsonID:"EE_link",schema:r.Object({url:r.String(""),sceneNav:r.Bool(!1),location:r.String(""),newTab:r.Bool(!0)}),linkCallbackName:oe,linkCallback:st,interactMessage:rt,errors:["INVALID_URL"],reactor:function(){if(!le)return null;const t=B(),e=I(t,P);return l.useEffect(()=>{if(Be(t,P),!e.sceneNav.value)try{new URL(e.url.value)}catch{return O(t,P,"INVALID_URL","Please enter a valid URL.")}},[e.url,e.sceneNav]),l.useEffect(()=>{Ue(t,oe,()=>P.linkCallback(t))},[]),null}}),ae=ue({name:"EditorState",initial:()=>({projectName:null,sceneName:null,scenePath:null,sceneAssetID:null,lockPropertiesPanel:"",panelLayout:{},rootEntity:M,uiEnabled:!0,uiMode:"ADVANCED"}),useIsModified:()=>{const t=v(W(ae).rootEntity).value,e=K(F);return t?!!e[h.getInstanceID(t)].value:!1},isModified:()=>{const t=T(ae).rootEntity;return t?!!T(F)[h.getInstanceID(t)]:!1},markModifiedScene:t=>{const e=we(t,pe)||h.getInstanceID(t);if(!e)return;W(F)[e].set(!0)},reactor:()=>{const t=K(ct);return l.useEffect(()=>{t.location.value&&(Re.dispatchNotify("Scene navigation is disabled in the studio",{variant:"warning"}),t.location.set(void 0))},[t.location]),null}}),lt={fileLoader:new Oe,audioLoader:new We};function ut(t,e,n=M,a,i=o=>{}){const o=v(null),c=v(null),s=v(null),y=v(null),b=()=>{if(t&&y.value)for(const u of y.value)u.id===t&&A.removeEntityResource(u)};return l.useEffect(()=>b,[]),me(()=>{const u=t;if(!u)return;let f=!1;n&&S.setResource(n,u,0,0);const U=new AbortController;return ve(u,e,n,g=>{f=!0,o.set(g),y.set(A.addEntityResource(n,g)),n&&S.removeResource(n,u)},g=>{s.set(g),n&&S.setResource(n,u,g.loaded,g.total)},g=>{U.signal.aborted||(f=!0,c.set(g),n&&S.removeResource(n,u))},U.signal,a),()=>{f||U.abort(`resourceHooks:useLoader Component loading ${e} at url ${t} for entity ${n} was unmounted`),n&&j(n)&&S.removeResource(n,u),o.set(null),s.set(null),c.set(null),i(u)}},[t]),[o.get(D),c.get(D),s.get(D),b]}async function xe(t,e,n=M,a){return new Promise(i=>{const o=new AbortController;ve(t,e,n,c=>{const s=A.addEntityResource(n,c);i([c,()=>{for(const b of s)A.removeEntityResource(b)},null])},c=>{},c=>{i([null,()=>{},c])},o.signal,a)})}function It(t,e){const n=v(M),a=h.useSceneLoaded(n.value);return l.useEffect(()=>{if(!t||!e)return;const i=_e();return d(i,Te,{parentEntity:e}),d(i,fe,Ne()),d(i,h,{src:t}),n.set(i),()=>{j(i)&&(Me(i),n.set(M))}},[e,t]),a?n.value:null}function ft(t,e,n,a){return ut(t,q.Texture,e,a,n)}async function At(t,e,n){return xe(t,q.Texture,e,n)}async function zt(t,e,n=lt.audioLoader){return xe(t,q.Audio,e)}const w=z({name:"ShadowComponent",jsonID:"EE_shadow",schema:r.Object({cast:r.Bool(!0),receive:r.Bool(!0)}),reactor:()=>{const t=B(),e=I(t,w),n=I(t,H).get(D);return l.useEffect(()=>{n.castShadow=e.cast.value,n.receiveShadow=e.receive.value},[!!n,e.cast,e.receive]),null}}),mt=z({name:"UpdatableComponent"}),dt="xre.update",ie=t=>{for(const[e,n]of Object.entries(t))n&&typeof n.dispose=="function"&&n.dispose();t.dispose()},se=t=>{var i;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(ie):ie(e.material)),e.geometry){e.geometry.dispose();for(const o in e.geometry.attributes)e.geometry.deleteAttribute(o)}const n=t;n.isSkinnedMesh&&((i=n.skeleton)==null||i.dispose());const a=t;typeof a.dispose=="function"&&a.dispose()},gt=de([H,he]),pt=de([mt,ye]),vt=5*5,ht=()=>{var e;const t=T(Ae).deltaSeconds;for(const n of pt())(e=k(n,ye).get(dt))==null||e(t);for(const n of gt()){const a=k(n,H),o=V(n,X)?X.squaredDistance[n]>vt:!0,c=!(Ge.isCulled[n]&&o);a.visible=c}},yt=()=>{var a;const t=B(),e=h.useInstanceID(t),n=v(pe.entitiesBySourceState[e]);return x.createElement(x.Fragment,null,(a=n.value)==null?void 0:a.map(i=>x.createElement(Ct,{key:i,entity:i,parentEntity:t})))},bt=t=>{var a;let e=L(t,$);const n=(a=ge(t,qe))==null?void 0:a.uuid.value;if(n)for(const i of n){const o=fe.getEntityByUUID(i);if(o&&V(o,$)){e=!0;break}}return e},Ct=t=>{const e=L(t.entity,Q),n=L(t.parentEntity,je),a=L(t.entity,he),i=bt(t.entity),o=ge(t.parentEntity,w);return l.useEffect(()=>{!e||!a||o&&(i?_(t.entity,w):d(t.entity,w,k(t.parentEntity,w)))},[a,e,i,o==null?void 0:o.cast,o==null?void 0:o.receive]),l.useEffect(()=>{if(!n||!e)return;const c=k(t.entity,Q).geometry,s=Ve[c.type];if(s)return d(t.entity,Z,{shape:s}),()=>{_(t.entity,Z)}},[n,e]),null},Et=()=>x.createElement(x.Fragment,null,x.createElement(Ie,{Components:[h],ChildEntityReactor:yt})),Bt=De({uuid:"ee.engine.SceneObjectSystem",insert:{after:Le},execute:ht,reactor:Et}),re=`
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

}`,ce=`
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

}`,E=class E{constructor(){m(this,"cubeCamera");m(this,"sky");m(this,"_inclination");m(this,"_azimuth");m(this,"_distance");this.sky=new Qe(new Ze(1,1,1),new $e({name:"SkyShader",fragmentShader:ce,vertexShader:re,uniforms:J.clone(E.uniforms),side:Ye,depthWrite:!1})),this.cubeCamera=new Je(1,1e5,new et(512,{format:Ce,type:tt})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),n=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(n),Math.sin(n)*Math.sin(e),Math.sin(n)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){se(this.sky),se(this.cubeCamera)}};m(E,"vertexShader",re),m(E,"fragmentShader",ce),m(E,"uniforms",J.merge([Xe.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new be}}]));let G=E;var C=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(C||{});const xt=t=>{const a=new Uint8Array(16384);for(let i=0;i<4096;i++){const o=i*4;a[o]=Math.floor(t.r*255),a[o+1]=Math.floor(t.g*255),a[o+2]=Math.floor(t.b*255),a[o+3]=255}return a},kt=(t,e,n,a)=>{const i="/negx.jpg",o="/negy.jpg",c="/negz.jpg",s="/posx.jpg",y="/posy.jpg",b="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new nt().setPath(t).load([s,i,y,o,b,c],f=>{e(f)},f=>{n&&n(f)},f=>{a&&a(f)})},St=new Ee,R=z({name:"SkyboxComponent",jsonID:"EE_skybox",schema:r.Object({backgroundColor:Ke.Color(0),equirectangularPath:r.String(""),cubemapPath:r.String(""),backgroundType:r.Number(1),sky:r.NonSerialized(r.Nullable(r.Type())),skyboxProps:r.Object({turbidity:r.Number(10),rayleigh:r.Number(1),luminance:r.Number(1),mieCoefficient:r.Number(.004999999999999893),mieDirectionalG:r.Number(.99),inclination:r.Number(.10471975511965978),azimuth:r.Number(.16666666666666666)})}),reactor:function(){const t=B();if(!le)return null;const e=I(t,R),n=v(void 0),[a,i]=ft(e.backgroundType.value===C.equirectangular?e.equirectangularPath.value:"",t);return me(()=>()=>{j(t)&&V(t,p)&&_(t,p)},[]),l.useEffect(()=>{e.backgroundType.value!==C.equirectangular||!a||(a.colorSpace=N,a.mapping=ee,a.minFilter=ot,d(t,p,a))},[a,e.backgroundType]),l.useEffect(()=>{if(i)return O(t,R,"FILE_ERROR",i.message),()=>{Y(t,R,"FILE_ERROR")}},[i]),l.useEffect(()=>{if(e.backgroundType.value!==C.color)return;const o=e.backgroundColor.value??St,c=64,s=new at(xt(new Ee(o)),c,c,Ce);return s.needsUpdate=!0,s.colorSpace=N,s.mapping=ee,d(t,p,s),()=>{s.dispose(),_(t,p)}},[e.backgroundType,e.backgroundColor]),l.useEffect(()=>{if(e.backgroundType.value!==C.cubemap)return;const o=s=>{s.colorSpace=N,s.mapping=te,n.set(s),d(t,p,s),Y(t,R,"FILE_ERROR")},c=[e.cubemapPath.value,o,void 0,s=>O(t,R,"FILE_ERROR",s.message)];return kt(...c),()=>{_(t,p)}},[e.backgroundType,e.cubemapPath]),l.useEffect(()=>{const o=n.value;if(o)return()=>{o.dispose()}},[n]),l.useEffect(()=>{if(e.backgroundType.value!==C.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new G);const o=e.sky.value;o.azimuth=e.skyboxProps.value.azimuth,o.inclination=e.skyboxProps.value.inclination,o.mieCoefficient=e.skyboxProps.value.mieCoefficient,o.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,o.rayleigh=e.skyboxProps.value.rayleigh,o.turbidity=e.skyboxProps.value.turbidity,o.luminance=e.skyboxProps.value.luminance;const c=k(ze.instance.viewerEntity,He),s=o.generateSkyboxTextureCube(c.renderer);s.mapping=te,d(t,p,s),o.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]});export{ae as E,P as L,w as S,It as a,C as b,R as c,At as d,xt as e,Bt as f,zt as g,kt as l,ft as u};
