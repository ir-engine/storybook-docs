var xe=Object.defineProperty;var ke=(t,e,n)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var m=(t,e,n)=>ke(t,typeof e!="symbol"?e+"":e,n);import{N as Re}from"./NotificationService-Do7XBz9g.js";import{i as ue,d as fe,g as p,u as K,a as Q,c as y,N as M}from"./ActionFunctions-CSptRlE-.js";import{r as l,R as I}from"./index-CeGdYiXw.js";import{c as B,S as r,j as V,i as A,y as Pe,a as b,U as T,g as we,t as De,k as g,n as Te,b as me,e as q,A as _e,p as de,f as ge,H as Me,R as Ie,Q as Le,B as Ae,h as H,T as ze,C as L,u as he,r as D,E as Be}from"./UUIDComponent-CDEdszpG.js";import{d as Ue,c as O,w as Fe,aj as Ne,G as d,aV as F,aW as W,aT as Oe,aX as ve,aq as z,aY as je,aZ as k,a_ as Ge,j as X,a7 as pe,q as ye,D as Z,F as Ve,M as $,o as qe,a$ as He,C as Y,b0 as J,b1 as We,b2 as v,ak as ee,a0 as Xe}from"./GLTFComponent-Z4cCRPGr.js";import{V as be,av as Ke,a3 as te,ao as Qe,f as Ze,aw as $e,Y as Ye,B as Je,H as et,G as tt,g as nt,h as Ce,ax as ot,S as N,ay as ne,j as at,az as it,t as Ee,aA as oe}from"./three.module-CZEO8pKn.js";import{X as st}from"./XRState-BUbJG2lz.js";import{S as j,T as rt}from"./NodeIDComponent-BD5pz7xb.js";const ae=(t,e)=>{var o;if(p(Pe).isEditing)return;const n=b(t,P);e&&((o=e.session)==null||o.end()),typeof window=="object"&&window&&n.newTab?window.open(n.url,"_blank"):window.location.href=n.url},ct=t=>{var n;if(console.log("linkCallback"),(n=Ne.getMergedButtons(t).XRStandardGamepadTrigger)!=null&&n.down){const o=p(st);ae(t,o)}else ae(t,void 0)};new be;const lt="Click to follow",ie="linkCallback",ut=fe({name:"LinkState",initial:{location:void 0}}),P=B({name:"LinkComponent",jsonID:"EE_link",schema:r.Object({url:r.String(""),sceneNav:r.Bool(!1),location:r.String(""),newTab:r.Bool(!0)}),linkCallbackName:ie,linkCallback:ct,interactMessage:lt,errors:["INVALID_URL"],reactor:function(){if(!ue)return null;const t=V(),e=A(t,P);return l.useEffect(()=>{if(Ue(t,P),!e.sceneNav.value)try{new URL(e.url.value)}catch{return O(t,P,"INVALID_URL","Please enter a valid URL.")}},[e.url,e.sceneNav]),l.useEffect(()=>{Fe(t,ie,()=>P.linkCallback(t))},[]),null}}),_=fe({name:"EditorState",initial:()=>({projectName:null,sceneName:null,scenePath:null,sceneAssetID:null,lockPropertiesPanel:"",panelLayout:{},rootEntity:T,uiEnabled:!0,uiMode:"ADVANCED"}),useIsModified:()=>{const t=y(Q(_).rootEntity).value,e=K(F);return t?!!e[d.getInstanceID(t)].value:!1},isModified:()=>{const t=p(_).rootEntity;return t?!!p(F)[d.getInstanceID(t)]:!1},markModifiedScene:t=>{const e=we(t,j)||d.getInstanceID(t);if(!e)return;const n=Q(F);n[e].set(!0);const o=p(_).rootEntity,i=d.getInstanceID(o);i!==e&&n[i].set(!0)},isInActiveScene:t=>{const e=p(_).rootEntity,n=d.getInstanceID(e);return b(t,j)===n},reactor:()=>{const t=K(ut);return l.useEffect(()=>{t.location.value&&(Re.dispatchNotify("Scene navigation is disabled in the studio",{variant:"warning"}),t.location.set(void 0))},[t.location]),null}}),ft={fileLoader:new Ge,audioLoader:new Ke};function mt(t,e,n=T,o,i=a=>{}){const a=y(null),c=y(null),s=y(null),C=y(null);t=je(t);const E=()=>{if(t&&C.value)for(const u of C.value)u.id===t&&z.removeEntityResource(u)};return l.useEffect(()=>E,[]),de(()=>{const u=t;if(!u)return;let f=!1;n&&k.setResource(n,u,0,0);const U=new AbortController;return ve(u,e,n,h=>{f=!0,a.set(h),C.set(z.addEntityResource(n,h)),n&&k.removeResource(n,u)},h=>{s.set(h),n&&k.setResource(n,u,h.loaded,h.total)},h=>{U.signal.aborted||(f=!0,c.set(h),n&&k.removeResource(n,u))},U.signal,o),()=>{f||U.abort(`resourceHooks:useLoader Component loading ${e} at url ${t} for entity ${n} was unmounted`),n&&q(n)&&k.removeResource(n,u),a.set(null),s.set(null),c.set(null),i(u)}},[t]),[a.get(M),c.get(M),s.get(M),E]}async function Se(t,e,n=T,o){return new Promise(i=>{const a=new AbortController;ve(t,e,n,c=>{const s=z.addEntityResource(n,c);i([c,()=>{for(const E of s)z.removeEntityResource(E)},null])},c=>{},c=>{i([null,()=>{},c])},a.signal,o)})}function Bt(t,e){const n=y(T),o=d.useSceneLoaded(n.value);return l.useEffect(()=>{if(!t||!e)return;const i=De();return g(i,Te,{parentEntity:e}),g(i,me,Oe()),g(i,d,{src:t}),n.set(i),()=>{q(i)&&(_e(i),n.set(T))}},[e,t]),o?n.value:null}function dt(t,e,n,o){return mt(t,W.Texture,e,o,n)}async function Ut(t,e,n){return Se(t,W.Texture,e,n)}async function Ft(t,e,n=ft.audioLoader){return Se(t,W.Audio,e)}const w=B({name:"ShadowComponent",jsonID:"EE_shadow",schema:r.Object({cast:r.Bool(!0),receive:r.Bool(!0)}),reactor:()=>{const t=V(),e=A(t,w),n=A(t,X).get(M);return l.useEffect(()=>()=>{n.castShadow=!1,n.receiveShadow=!1},[]),l.useEffect(()=>{n.castShadow=e.cast.value,n.receiveShadow=e.receive.value},[!!n,e.cast,e.receive]),null}}),gt=B({name:"UpdatableComponent"}),ht="xre.update",se=t=>{for(const[e,n]of Object.entries(t))n&&typeof n.dispose=="function"&&n.dispose();t.dispose()},re=t=>{var i;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(se):se(e.material)),e.geometry){e.geometry.dispose();for(const a in e.geometry.attributes)e.geometry.deleteAttribute(a)}const n=t;n.isSkinnedMesh&&((i=n.skeleton)==null||i.dispose());const o=t;typeof o.dispose=="function"&&o.dispose()},vt=ge([X,pe]),pt=ge([gt,ye]),yt=5*5,bt=()=>{var e;const t=p(Ae).deltaSeconds;for(const n of pt())(e=b(n,ye).get(ht))==null||e(t);for(const n of vt()){const o=b(n,X),a=H(n,Z)?Z.squaredDistance[n]>yt:!0,c=!(Ve.isCulled[n]&&a);o.visible=c}},Ct=t=>{const e=t.entity,n=d.useInstanceID(e),o=j.useEntitiesBySource(n);return I.createElement(ze,{entities:o,ChildEntityReactor:St,props:{parentEntity:e}})},Et=t=>{var o;let e=L(t,J);const n=(o=he(t,We))==null?void 0:o.uuid.value;if(n)for(const i of n){const a=me.getEntityByUUID(i);if(a&&H(a,J)){e=!0;break}}return e},St=t=>{const e=L(t.entity,$),n=L(t.parentEntity,qe),o=L(t.entity,pe),i=Et(t.entity),a=he(t.parentEntity,w);return l.useEffect(()=>{!e||!o||a&&(i?D(t.entity,w):g(t.entity,w,b(t.parentEntity,w)))},[o,e,i,a==null?void 0:a.cast,a==null?void 0:a.receive]),l.useEffect(()=>{if(!n||!e)return;const c=b(t.entity,$).geometry,s=He[c.type];if(s)return g(t.entity,Y,{shape:s}),()=>{D(t.entity,Y)}},[n,e]),null},xt=()=>I.createElement(I.Fragment,null,I.createElement(Le,{Components:[d],ChildEntityReactor:Ct}));Me({uuid:"ee.engine.SceneObjectSystem",insert:{after:Ie},execute:bt,reactor:xt});const ce=`
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

}`,le=`
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

}`,x=class x{constructor(){m(this,"cubeCamera");m(this,"sky");m(this,"_inclination");m(this,"_azimuth");m(this,"_distance");this.sky=new Ze(new $e(1,1,1),new Ye({name:"SkyShader",fragmentShader:le,vertexShader:ce,uniforms:te.clone(x.uniforms),side:Je,depthWrite:!1})),this.cubeCamera=new et(1,1e5,new tt(512,{format:Ce,type:nt})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),n=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(n),Math.sin(n)*Math.sin(e),Math.sin(n)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){re(this.sky),re(this.cubeCamera)}};m(x,"vertexShader",ce),m(x,"fragmentShader",le),m(x,"uniforms",te.merge([Qe.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new be}}]));let G=x;var S=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(S||{});const kt=t=>{const o=new Uint8Array(16384);for(let i=0;i<4096;i++){const a=i*4;o[a]=Math.floor(t.r*255),o[a+1]=Math.floor(t.g*255),o[a+2]=Math.floor(t.b*255),o[a+3]=255}return o},Rt=(t,e,n,o)=>{const i="/negx.jpg",a="/negy.jpg",c="/negz.jpg",s="/posx.jpg",C="/posy.jpg",E="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new ot().setPath(t).load([s,i,C,a,E,c],f=>{e(f)},f=>{n&&n(f)},f=>{o&&o(f)})},Pt=new Ee,R=B({name:"SkyboxComponent",jsonID:"EE_skybox",schema:r.Object({backgroundColor:rt.Color(0),equirectangularPath:r.String(""),cubemapPath:r.String(""),backgroundType:r.Number(1),sky:r.NonSerialized(r.Nullable(r.Type())),skyboxProps:r.Object({turbidity:r.Number(10),rayleigh:r.Number(1),luminance:r.Number(1),mieCoefficient:r.Number(.004999999999999893),mieDirectionalG:r.Number(.99),inclination:r.Number(.10471975511965978),azimuth:r.Number(.16666666666666666)})}),reactor:function(){const t=V();if(!ue)return null;const e=A(t,R),n=y(void 0),[o,i]=dt(e.backgroundType.value===S.equirectangular?e.equirectangularPath.value:"",t);return de(()=>()=>{q(t)&&H(t,v)&&D(t,v)},[]),l.useEffect(()=>{e.backgroundType.value!==S.equirectangular||!o||(o.colorSpace=N,o.mapping=ne,o.minFilter=at,g(t,v,o))},[o,e.backgroundType]),l.useEffect(()=>{if(i)return O(t,R,"FILE_ERROR",i.message),()=>{ee(t,R,"FILE_ERROR")}},[i]),l.useEffect(()=>{if(e.backgroundType.value!==S.color)return;const a=e.backgroundColor.value??Pt,c=64,s=new it(kt(new Ee(a)),c,c,Ce);return s.needsUpdate=!0,s.colorSpace=N,s.mapping=ne,g(t,v,s),()=>{s.dispose(),D(t,v)}},[e.backgroundType,e.backgroundColor]),l.useEffect(()=>{if(e.backgroundType.value!==S.cubemap)return;const a=s=>{s.colorSpace=N,s.mapping=oe,n.set(s),g(t,v,s),ee(t,R,"FILE_ERROR")},c=[e.cubemapPath.value,a,void 0,s=>O(t,R,"FILE_ERROR",s.message)];return Rt(...c),()=>{D(t,v)}},[e.backgroundType,e.cubemapPath]),l.useEffect(()=>{const a=n.value;if(a)return()=>{a.dispose()}},[n]),l.useEffect(()=>{if(e.backgroundType.value!==S.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new G);const a=e.sky.value;a.azimuth=e.skyboxProps.value.azimuth,a.inclination=e.skyboxProps.value.inclination,a.mieCoefficient=e.skyboxProps.value.mieCoefficient,a.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,a.rayleigh=e.skyboxProps.value.rayleigh,a.turbidity=e.skyboxProps.value.turbidity,a.luminance=e.skyboxProps.value.luminance;const c=b(Be.instance.viewerEntity,Xe),s=a.generateSkyboxTextureCube(c.renderer);s.mapping=oe,g(t,v,s),a.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]});export{_ as E,P as L,w as S,S as a,R as b,Bt as c,Ft as d,Ut as g,dt as u};
