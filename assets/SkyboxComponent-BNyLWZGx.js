var le=Object.defineProperty;var ue=(t,e,n)=>e in t?le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>ue(t,typeof e!="symbol"?e+"":e,n);import{N as me}from"./NotificationService-Ccxuyqtj.js";import{d as _,S as s,u as M,c as S,g as f,o as fe,h as $,i as de,A as pe,E as he,j as w,Q as ge,x as Y,s as d,a as ve,e as g,m as x,U as ye,k as be,q as Ce}from"./index-BAucurbO.js";import{al as Ee,t as I,s as xe,a_ as ke,b1 as A,ae as R,aA as L,ag as ee,V as te,F as Se,D as ne,G as P,b2 as Re,b3 as Pe,M as U,x as _e,b4 as Me,B as F,b5 as j,b6 as we,v as Te,q as De,b7 as m,ap as N,am as Ie,$ as ze}from"./resourceLoaderHooks-CGFdCkMf.js";import{r as c,R as p}from"./index-qyj2ZBCg.js";import{V as oe,U as G,J as Le,k as Be,ay as Ae,X as Ue,j as Fe,t as je,W as Ne,R as ae,ae as Ge,az as Oe,K as ie,S as D,aj as O,an as Ve,am as V}from"./three.module-GtcjrW6H.js";import{a as se,i as re,g as k,c as B,b as qe,u as q}from"./ActionFunctions-CGJ8cJXE.js";import{X as We}from"./XRState-CV4Nd7th.js";import{E as Ke}from"./EngineState-DaL1AnLu.js";const W=(t,e)=>{var o;if(k(Ke).isEditing)return;const n=f(t,C);e&&((o=e.session)==null||o.end()),typeof window=="object"&&window&&n.newTab?window.open(n.url,"_blank"):window.location.href=n.url},Qe=t=>{var n;if((n=ke.getMergedButtons(t).XRStandardGamepadTrigger)!=null&&n.down){const o=k(We);W(t,o)}else W(t,void 0)};new oe;const Xe="Click to follow",K="linkCallback",He=se({name:"LinkState",initial:{location:void 0}}),C=_({name:"LinkComponent",jsonID:"EE_link",schema:s.Object({url:s.String(""),sceneNav:s.Bool(!1),location:s.String(""),newTab:s.Bool(!0)}),linkCallbackName:K,linkCallback:Qe,interactMessage:Xe,errors:["INVALID_URL"],reactor:function(){if(!re)return null;const t=M(),e=S(t,C);return c.useEffect(()=>{if(Ee(t,C),!e.sceneNav.value)try{new URL(e.url.value)}catch{return I(t,C,"INVALID_URL","Please enter a valid URL.")}},[e.url,e.sceneNav]),c.useEffect(()=>{xe(t,K,()=>C.linkCallback(t))},[]),null}}),Q=se({name:"EditorState",initial:()=>({projectName:null,sceneName:null,scenePath:null,sceneAssetID:null,lockPropertiesPanel:"",panelLayout:{},rootEntity:fe,uiEnabled:!0,uiMode:"ADVANCED"}),useIsModified:()=>{const t=B(qe(Q).rootEntity).value,e=q(A);return t?!!e[f(t,R)].value:!1},isModified:()=>{const t=k(Q).rootEntity;return t?!!k(A)[f(t,R)]:!1},reactor:()=>{const t=q(He);return c.useEffect(()=>{t.location.value&&(me.dispatchNotify("Scene navigation is disabled in the studio",{variant:"warning"}),t.location.set(void 0))},[t.location]),null}}),E=_({name:"ShadowComponent",jsonID:"EE_shadow",schema:s.Object({cast:s.Bool(!0),receive:s.Bool(!0)}),reactor:()=>{const t=M(),e=S(t,E),n=S(t,L);return c.useEffect(()=>{for(const o of n.value){const i=o;i.castShadow=e.cast.value,i.receiveShadow=e.receive.value}},[n,e.cast,e.receive]),null}}),Ze=_({name:"UpdatableComponent"}),Je="xre.update",X=t=>{for(const[e,n]of Object.entries(t))n&&typeof n.dispose=="function"&&n.dispose();t.dispose()},H=t=>{var i;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(X):X(e.material)),e.geometry){e.geometry.dispose();for(const a in e.geometry.attributes)e.geometry.deleteAttribute(a)}const n=t;n.isSkinnedMesh&&((i=n.skeleton)==null||i.dispose());const o=t;typeof o.dispose=="function"&&o.dispose()},$e=$([L]),Ye=$([Ze,ee]);function et(t){const{entity:e,obj:n}=t;return Y(()=>{d(e,ne)},[]),c.useEffect(()=>{const o=w(e,P)?P.getInstanceID(e):ve(e,R);return()=>{Pe.unloadObj(n,o)}},[]),null}const tt=5*5,nt=()=>{var e;const t=k(he).deltaSeconds;for(const n of Ye())(e=f(n,ee).get(Je))==null||e(t);for(const n of $e()){const o=f(n,L),i=w(n,te)&&!(Se.isCulled[n]&&ne.squaredDistance[n]>tt);for(const a of o)a.visible=i}},ot=()=>{var o;const t=M(),e=P.useInstanceID(t),n=B(R.entitiesBySourceState[e]);return p.createElement(p.Fragment,null,(o=n.value)==null?void 0:o.map(i=>p.createElement(it,{key:i,entity:i,parentEntity:t})))},at=t=>{var o;let e=!!g(t,j);const n=(o=g(t,we))==null?void 0:o.uuid.value;if(n)for(const i of n){const a=ye.getEntityByUUID(i);if(a&&w(a,j)){e=!0;break}}return e},it=t=>{const e=g(t.entity,U),n=g(t.parentEntity,_e),o=g(t.entity,te),i=at(t.entity),a=g(t.parentEntity,E);return c.useEffect(()=>{!e||!o||a&&(i?x(t.entity,E):d(t.entity,E,f(t.parentEntity,E)))},[o,e,i,a==null?void 0:a.cast,a==null?void 0:a.receive]),c.useEffect(()=>{if(!n||!e)return;const l=f(t.entity,U).geometry,r=Me[l.type];if(r)return d(t.entity,F,{shape:r}),()=>{x(t.entity,F)}},[n,e]),null},st=()=>p.createElement(p.Fragment,null,p.createElement(ge,{Components:[P],ChildEntityReactor:ot}),p.createElement(Re,{GroupChildReactor:et})),Ct=de({uuid:"ee.engine.SceneObjectSystem",insert:{after:pe},execute:nt,reactor:st}),Z=`
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

}`,v=class v{constructor(){u(this,"cubeCamera");u(this,"sky");u(this,"_inclination");u(this,"_azimuth");u(this,"_distance");this.sky=new Be(new Ae(1,1,1),new Ue({name:"SkyShader",fragmentShader:J,vertexShader:Z,uniforms:G.clone(v.uniforms),side:Fe,depthWrite:!1})),this.cubeCamera=new je(1,1e5,new Ne(512,{format:ae,type:Ge})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),n=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(n),Math.sin(n)*Math.sin(e),Math.sin(n)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){H(this.sky),H(this.cubeCamera)}};u(v,"vertexShader",Z),u(v,"fragmentShader",J),u(v,"uniforms",G.merge([Le.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new oe}}]));let z=v;var h=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(h||{});const rt=t=>{const o=new Uint8Array(16384);for(let i=0;i<4096;i++){const a=i*4;o[a]=Math.floor(t.r*255),o[a+1]=Math.floor(t.g*255),o[a+2]=Math.floor(t.b*255),o[a+3]=255}return o},ct=(t,e,n,o)=>{const i="/negx.jpg",a="/negy.jpg",l="/negz.jpg",r="/posx.jpg",T="/posy.jpg",ce="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new Oe().setPath(t).load([r,i,T,a,ce,l],y=>{e(y)},y=>{n&&n(y)},y=>{o&&o(y)})},lt=new ie,b=_({name:"SkyboxComponent",jsonID:"EE_skybox",schema:s.Object({backgroundColor:Te.Color(0),equirectangularPath:s.String(""),cubemapPath:s.String(""),backgroundType:s.Number(1),sky:s.Nullable(s.Type()),skyboxProps:s.Object({turbidity:s.Number(10),rayleigh:s.Number(1),luminance:s.Number(1),mieCoefficient:s.Number(.004999999999999893),mieDirectionalG:s.Number(.99),inclination:s.Number(.10471975511965978),azimuth:s.Number(.16666666666666666)})}),reactor:function(){const t=M();if(!re)return null;const e=S(t,b),n=B(void 0),[o,i]=De(e.backgroundType.value===h.equirectangular?e.equirectangularPath.value:"",t);return Y(()=>()=>{be(t)&&w(t,m)&&x(t,m)},[]),c.useEffect(()=>{e.backgroundType.value!==h.equirectangular||!o||(o.colorSpace=D,o.mapping=O,d(t,m,o))},[o,e.backgroundType]),c.useEffect(()=>{if(i)return I(t,b,"FILE_ERROR",i.message),()=>{N(t,b,"FILE_ERROR")}},[i]),c.useEffect(()=>{if(e.backgroundType.value!==h.color)return;const a=e.backgroundColor.value??lt,l=64,[r,T]=Ie(Ve,t,rt(new ie(a)),l,l,ae);return r.needsUpdate=!0,r.colorSpace=D,r.mapping=O,d(t,m,r),()=>{T(),x(t,m)}},[e.backgroundType,e.backgroundColor]),c.useEffect(()=>{if(e.backgroundType.value!==h.cubemap)return;const a=r=>{r.colorSpace=D,r.mapping=V,n.set(r),d(t,m,r),N(t,b,"FILE_ERROR")},l=[e.cubemapPath.value,a,void 0,r=>I(t,b,"FILE_ERROR",r.message)];return ct(...l),()=>{x(t,m)}},[e.backgroundType,e.cubemapPath]),c.useEffect(()=>{const a=n.value;if(a)return()=>{a.dispose()}},[n]),c.useEffect(()=>{if(e.backgroundType.value!==h.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new z);const a=e.sky.value;a.azimuth=e.skyboxProps.value.azimuth,a.inclination=e.skyboxProps.value.inclination,a.mieCoefficient=e.skyboxProps.value.mieCoefficient,a.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,a.rayleigh=e.skyboxProps.value.rayleigh,a.turbidity=e.skyboxProps.value.turbidity,a.luminance=e.skyboxProps.value.luminance;const l=f(Ce.instance.viewerEntity,ze),r=a.generateSkyboxTextureCube(l.renderer);r.mapping=V,d(t,m,r),a.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]});export{Q as E,C as L,E as S,h as a,b,Ct as c,rt as g,ct as l};
