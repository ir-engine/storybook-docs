var me=Object.defineProperty;var fe=(t,e,n)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>fe(t,typeof e!="symbol"?e+"":e,n);import{N as de}from"./NotificationService-DJUaS5bI.js";import{d as w,S as s,b as P,c as k,j as he,g as f,n as pe,i as $,q as ge,G as ve,Q as A,p as ye,h as T,C as ee,s as d,a as be,f as g,r as x,U as Ce,E as Ee,e as xe}from"./index-BkRrsvk_.js";import{X as ke,l as L,s as Se,aQ as Pe,b1 as F,a7 as _,O as R,ac as te,K as M,V as ne,F as Re,D as ie,b2 as _e,M as O,n as Me,b3 as we,q as U,b4 as N,b5 as Te,k as De,al as j,ai as Ie,$ as Le,z as ze,b6 as m}from"./resourceLoaderHooks-6wJpwuj2.js";import{r as c,R as h}from"./index-BVKeUVk_.js";import{V as ae,a6 as G,a7 as Be,l as Ae,aA as Fe,s as Oe,g as Ue,Z as Ne,Y as je,H as Ge,J as oe,aB as Ve,S as I,aj as V,u as qe,a8 as se,am as Xe,an as q}from"./three.module-CG-40ynC.js";import{i as re,d as ce,g as S,u as X,c as B,a as Ke,N as le}from"./ActionFunctions-QRRLR__x.js";import{X as Qe}from"./XRState-COc7wgLw.js";const K=(t,e)=>{var a;if(S(he).isEditing)return;const n=f(t,C);e&&((a=e.session)==null||a.end()),typeof window=="object"&&window&&n.newTab?window.open(n.url,"_blank"):window.location.href=n.url},We=t=>{var n;if((n=Pe.getMergedButtons(t).XRStandardGamepadTrigger)!=null&&n.down){const a=S(Qe);K(t,a)}else K(t,void 0)};new ae;const He="Click to follow",Q="linkCallback",Ze=ce({name:"LinkState",initial:{location:void 0}}),C=w({name:"LinkComponent",jsonID:"EE_link",schema:s.Object({url:s.String(""),sceneNav:s.Bool(!1),location:s.String(""),newTab:s.Bool(!0)}),linkCallbackName:Q,linkCallback:We,interactMessage:He,errors:["INVALID_URL"],reactor:function(){if(!re)return null;const t=P(),e=k(t,C);return c.useEffect(()=>{if(ke(t,C),!e.sceneNav.value)try{new URL(e.url.value)}catch{return L(t,C,"INVALID_URL","Please enter a valid URL.")}},[e.url,e.sceneNav]),c.useEffect(()=>{Se(t,Q,()=>C.linkCallback(t))},[]),null}}),W=ce({name:"EditorState",initial:()=>({projectName:null,sceneName:null,scenePath:null,sceneAssetID:null,lockPropertiesPanel:"",panelLayout:{},rootEntity:pe,uiEnabled:!0,uiMode:"ADVANCED"}),useIsModified:()=>{const t=B(Ke(W).rootEntity).value,e=X(F);return t?!!e[f(t,_)].value:!1},isModified:()=>{const t=S(W).rootEntity;return t?!!S(F)[f(t,_)]:!1},reactor:()=>{const t=X(Ze);return c.useEffect(()=>{t.location.value&&(de.dispatchNotify("Scene navigation is disabled in the studio",{variant:"warning"}),t.location.set(void 0))},[t.location]),null}}),E=w({name:"ShadowComponent",jsonID:"EE_shadow",schema:s.Object({cast:s.Bool(!0),receive:s.Bool(!0)}),reactor:()=>{const t=P(),e=k(t,E),n=k(t,R).get(le);return c.useEffect(()=>{n.castShadow=e.cast.value,n.receiveShadow=e.receive.value},[!!n,e.cast,e.receive]),null}}),Ye=w({name:"UpdatableComponent"}),Je="xre.update",H=t=>{for(const[e,n]of Object.entries(t))n&&typeof n.dispose=="function"&&n.dispose();t.dispose()},Z=t=>{var o;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(H):H(e.material)),e.geometry){e.geometry.dispose();for(const i in e.geometry.attributes)e.geometry.deleteAttribute(i)}const n=t;n.isSkinnedMesh&&((o=n.skeleton)==null||o.dispose());const a=t;typeof a.dispose=="function"&&a.dispose()},$e=$([R]),et=$([Ye,te]);function tt(){const t=P(),e=k(t,R).get(le);return ee(()=>{d(t,ie)},[]),c.useEffect(()=>{const n=T(t,M)?M.getInstanceID(t):be(t,_);return()=>{_e.unloadObj(e,n)}},[]),null}const nt=5*5,it=()=>{var e;const t=S(ye).deltaSeconds;for(const n of et())(e=f(n,te).get(Je))==null||e(t);for(const n of $e()){const a=f(n,R),o=T(n,ne)&&!(Re.isCulled[n]&&ie.squaredDistance[n]>nt);a.visible=o}},at=()=>{var a;const t=P(),e=M.useInstanceID(t),n=B(_.entitiesBySourceState[e]);return h.createElement(h.Fragment,null,(a=n.value)==null?void 0:a.map(o=>h.createElement(st,{key:o,entity:o,parentEntity:t})))},ot=t=>{var a;let e=!!g(t,N);const n=(a=g(t,Te))==null?void 0:a.uuid.value;if(n)for(const o of n){const i=Ce.getEntityByUUID(o);if(i&&T(i,N)){e=!0;break}}return e},st=t=>{const e=g(t.entity,O),n=g(t.parentEntity,Me),a=g(t.entity,ne),o=ot(t.entity),i=g(t.parentEntity,E);return c.useEffect(()=>{!e||!a||i&&(o?x(t.entity,E):d(t.entity,E,f(t.parentEntity,E)))},[a,e,o,i==null?void 0:i.cast,i==null?void 0:i.receive]),c.useEffect(()=>{if(!n||!e)return;const l=f(t.entity,O).geometry,r=we[l.type];if(r)return d(t.entity,U,{shape:r}),()=>{x(t.entity,U)}},[n,e]),null},rt=()=>h.createElement(h.Fragment,null,h.createElement(A,{Components:[M],ChildEntityReactor:at}),h.createElement(A,{Components:[R],ChildEntityReactor:tt})),Ct=ge({uuid:"ee.engine.SceneObjectSystem",insert:{after:ve},execute:it,reactor:rt}),Y=`
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

}`,J=`
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

}`,v=class v{constructor(){u(this,"cubeCamera");u(this,"sky");u(this,"_inclination");u(this,"_azimuth");u(this,"_distance");this.sky=new Ae(new Fe(1,1,1),new Oe({name:"SkyShader",fragmentShader:J,vertexShader:Y,uniforms:G.clone(v.uniforms),side:Ue,depthWrite:!1})),this.cubeCamera=new Ne(1,1e5,new je(512,{format:oe,type:Ge})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),n=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(n),Math.sin(n)*Math.sin(e),Math.sin(n)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){Z(this.sky),Z(this.cubeCamera)}};u(v,"vertexShader",Y),u(v,"fragmentShader",J),u(v,"uniforms",G.merge([Be.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new ae}}]));let z=v;var p=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(p||{});const ct=t=>{const a=new Uint8Array(16384);for(let o=0;o<4096;o++){const i=o*4;a[i]=Math.floor(t.r*255),a[i+1]=Math.floor(t.g*255),a[i+2]=Math.floor(t.b*255),a[i+3]=255}return a},lt=(t,e,n,a)=>{const o="/negx.jpg",i="/negy.jpg",l="/negz.jpg",r="/posx.jpg",D="/posy.jpg",ue="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new Ve().setPath(t).load([r,o,D,i,ue,l],y=>{e(y)},y=>{n&&n(y)},y=>{a&&a(y)})},ut=new se,b=w({name:"SkyboxComponent",jsonID:"EE_skybox",schema:s.Object({backgroundColor:ze.Color(0),equirectangularPath:s.String(""),cubemapPath:s.String(""),backgroundType:s.Number(1),sky:s.Nullable(s.Type()),skyboxProps:s.Object({turbidity:s.Number(10),rayleigh:s.Number(1),luminance:s.Number(1),mieCoefficient:s.Number(.004999999999999893),mieDirectionalG:s.Number(.99),inclination:s.Number(.10471975511965978),azimuth:s.Number(.16666666666666666)})}),reactor:function(){const t=P();if(!re)return null;const e=k(t,b),n=B(void 0),[a,o]=De(e.backgroundType.value===p.equirectangular?e.equirectangularPath.value:"",t);return ee(()=>()=>{xe(t)&&T(t,m)&&x(t,m)},[]),c.useEffect(()=>{e.backgroundType.value!==p.equirectangular||!a||(a.colorSpace=I,a.mapping=V,a.minFilter=qe,d(t,m,a))},[a,e.backgroundType]),c.useEffect(()=>{if(o)return L(t,b,"FILE_ERROR",o.message),()=>{j(t,b,"FILE_ERROR")}},[o]),c.useEffect(()=>{if(e.backgroundType.value!==p.color)return;const i=e.backgroundColor.value??ut,l=64,[r,D]=Ie(Xe,t,ct(new se(i)),l,l,oe);return r.needsUpdate=!0,r.colorSpace=I,r.mapping=V,d(t,m,r),()=>{D(),x(t,m)}},[e.backgroundType,e.backgroundColor]),c.useEffect(()=>{if(e.backgroundType.value!==p.cubemap)return;const i=r=>{r.colorSpace=I,r.mapping=q,n.set(r),d(t,m,r),j(t,b,"FILE_ERROR")},l=[e.cubemapPath.value,i,void 0,r=>L(t,b,"FILE_ERROR",r.message)];return lt(...l),()=>{x(t,m)}},[e.backgroundType,e.cubemapPath]),c.useEffect(()=>{const i=n.value;if(i)return()=>{i.dispose()}},[n]),c.useEffect(()=>{if(e.backgroundType.value!==p.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new z);const i=e.sky.value;i.azimuth=e.skyboxProps.value.azimuth,i.inclination=e.skyboxProps.value.inclination,i.mieCoefficient=e.skyboxProps.value.mieCoefficient,i.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,i.rayleigh=e.skyboxProps.value.rayleigh,i.turbidity=e.skyboxProps.value.turbidity,i.luminance=e.skyboxProps.value.luminance;const l=f(Ee.instance.viewerEntity,Le),r=i.generateSkyboxTextureCube(l.renderer);r.mapping=q,d(t,m,r),i.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]});export{W as E,C as L,E as S,p as a,b,Ct as c,ct as g,lt as l};
