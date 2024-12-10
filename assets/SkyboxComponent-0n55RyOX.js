var fe=Object.defineProperty;var de=(t,e,a)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>de(t,typeof e!="symbol"?e+"":e,a);import{N as pe}from"./NotificationService-BuGAmDoN.js";import{d as D,S as r,u as T,c as w,g as d,o as he,h as te,i as ge,A as ve,E as ye,j as I,Q as be,w as ae,s as f,a as Ce,e as y,m as M,U as R,T as Ee,k as ke,q as xe}from"./index-Bsfbzpu-.js";import{aw as Me,t as L,s as Se,b5 as Re,W as we,b7 as F,ac as P,aI as j,ae as ne,V as ie,F as Pe,D as oe,G as _,b8 as _e,R as De,b9 as Te,M as N,w as Ie,ba as Ue,z as O,ay as Be,bb as Le,bc as z,bd as G,q as ze,an as p,aA as V,ax as Ae,$ as je}from"./resourceLoaderHooks-CSaACljE.js";import{r as l,R as h}from"./index-qyj2ZBCg.js";import{V as se,ay as Fe,az as Ne,ax as Oe,a9 as Ge,U as q,J as Ve,k as qe,aA as We,X as Xe,j as Ke,t as Qe,W as He,R as re,ae as Ze,aB as $e,K as ce,S as B,aj as W,an as Je,am as X}from"./three.module-BzvyRhzS.js";import{a as le,i as ue,g as S,c as U,b as me,u as K,s as Ye}from"./ActionFunctions-CwBsKbb2.js";import{X as et,i as tt}from"./XRState-998tOKbf.js";const Q=(t,e)=>{var i;if(S(we).isEditing)return;const a=d(t,k);e&&((i=e.session)==null||i.end()),typeof window=="object"&&window&&a.newTab?window.open(a.url,"_blank"):window.location.href=a.url},at=t=>{var a;if((a=Re.getMergedButtons(t).XRStandardGamepadTrigger)!=null&&a.down){const i=S(et);Q(t,i)}else Q(t,void 0)};new se;const nt="Click to follow",H="linkCallback",it=le({name:"LinkState",initial:{location:void 0}}),k=D({name:"LinkComponent",jsonID:"EE_link",schema:r.Object({url:r.String(""),sceneNav:r.Bool(!1),location:r.String(""),newTab:r.Bool(!0)}),linkCallbackName:H,linkCallback:at,interactMessage:nt,errors:["INVALID_URL"],reactor:function(){if(!ue)return null;const t=T(),e=w(t,k);return l.useEffect(()=>{if(Me(t,k),!e.sceneNav.value)try{new URL(e.url.value)}catch{return L(t,k,"INVALID_URL","Please enter a valid URL.")}},[e.url,e.sceneNav]),l.useEffect(()=>{Se(t,H,()=>k.linkCallback(t))},[]),null}}),Z=le({name:"EditorState",initial:()=>({projectName:null,sceneName:null,scenePath:null,sceneAssetID:null,lockPropertiesPanel:"",panelLayout:{},rootEntity:he,uiEnabled:!0,uiMode:"ADVANCED",acknowledgedUnsupportedBrowser:!1,acknowledgedUnsupportedDevice:!1}),useIsModified:()=>{const t=U(me(Z).rootEntity).value,e=K(F);return t?!!e[d(t,P)].value:!1},isModified:()=>{const t=S(Z).rootEntity;return t?!!S(F)[d(t,P)]:!1},reactor:()=>{const t=K(it);return l.useEffect(()=>{t.location.value&&(pe.dispatchNotify("Scene navigation is disabled in the studio",{variant:"warning"}),t.location.set(void 0))},[t.location]),null},extension:Ye(["acknowledgedUnsupportedBrowser"])}),x=D({name:"ShadowComponent",jsonID:"EE_shadow",schema:r.Object({cast:r.Bool(!0),receive:r.Bool(!0)}),reactor:()=>{const t=T(),e=w(t,x),a=w(t,j);return l.useEffect(()=>{for(const i of a.value){const s=i;s.castShadow=e.cast.value,s.receiveShadow=e.receive.value}},[a,e.cast,e.receive]),null}}),ot=D({name:"UpdatableComponent"}),st="xre.update",$=t=>{for(const[e,a]of Object.entries(t))a&&typeof a.dispose=="function"&&a.dispose();t.dispose()},J=t=>{var s;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach($):$(e.material)),e.geometry){e.geometry.dispose();for(const n in e.geometry.attributes)e.geometry.deleteAttribute(n)}const a=t;a.isSkinnedMesh&&((s=a.skeleton)==null||s.dispose());const i=t;typeof i.dispose=="function"&&i.dispose()},rt=new Set([Ne,Oe,Ge]);function ct(t,e,a=!1){const i=t;if(i.material)if((a||tt)&&rt.has(i.material.constructor)){const n=`basic-${i.material.uuid}`,c=R.getEntityByUUID(n);if(c){i.material=d(c,Be).material;return}const o=i.material,g=o.emissiveMap&&!o.map,u=new Fe().copy(o);u.specularMap=o.roughnessMap??o.specularIntensityMap,g?u.emissiveMap=o.emissiveMap:u.map=o.map,u.reflectivity=o.metalness,u.envMap=o.envMap,u.uuid=n,u.alphaTest=o.alphaTest,u.side=o.side,u.plugins=void 0,Le(e,u),f(e,z,{uuid:[n]})}else{const n=i.material.uuid;if(!R.getEntityByUUID(n))return;const o=n.slice(6);if(!R.getEntityByUUID(o))return;f(e,z,{uuid:[o]})}}const lt=te([j]),ut=te([ot,ne]);function mt(t){const{entity:e,obj:a}=t,i=me(De),s=U(i.forceBasicMaterials);return ae(()=>{f(e,oe)},[]),l.useEffect(()=>{const n=I(e,_)?_.getInstanceID(e):Ce(e,P);return()=>{Te.unloadObj(a,n)}},[]),l.useEffect(()=>{ct(a,e,s.value)},[s]),null}const ft=5*5,dt=()=>{var e;const t=S(ye).deltaSeconds;for(const a of ut())(e=d(a,ne).get(st))==null||e(t);for(const a of lt()){const i=d(a,j),s=I(a,ie)&&!(Pe.isCulled[a]&&oe.squaredDistance[a]>ft);for(const n of i)n.visible=s}},pt=()=>{var i;const t=T(),e=_.useInstanceID(t),a=U(P.entitiesBySourceState[e]);return h.createElement(h.Fragment,null,(i=a.value)==null?void 0:i.map(s=>h.createElement(gt,{key:s,entity:s,parentEntity:t})))},ht=t=>{var i;let e=!!y(t,G);const a=(i=y(t,z))==null?void 0:i.uuid.value;if(a)for(const s of a){const n=R.getEntityByUUID(s);if(n&&I(n,G)){e=!0;break}}return e},gt=t=>{const e=y(t.entity,N),a=y(t.parentEntity,Ie),i=y(t.entity,ie),s=ht(t.entity),n=y(t.parentEntity,x);return l.useEffect(()=>{!e||!i||n&&(s?M(t.entity,x):f(t.entity,x,d(t.parentEntity,x)))},[i,e,s,n==null?void 0:n.cast,n==null?void 0:n.receive]),l.useEffect(()=>{if(!a||!e)return;const c=d(t.entity,N).geometry,o=Ue[c.type];if(o)return f(t.entity,O,{shape:o}),()=>{M(t.entity,O)}},[a,e]),null},vt=()=>h.createElement(h.Fragment,null,h.createElement(be,{Components:[_],ChildEntityReactor:pt}),h.createElement(_e,{GroupChildReactor:mt})),Dt=ge({uuid:"ee.engine.SceneObjectSystem",insert:{after:ve},execute:dt,reactor:vt}),Y=`
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

}`,ee=`
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

}`,b=class b{constructor(){m(this,"cubeCamera");m(this,"sky");m(this,"_inclination");m(this,"_azimuth");m(this,"_distance");this.sky=new qe(new We(1,1,1),new Xe({name:"SkyShader",fragmentShader:ee,vertexShader:Y,uniforms:q.clone(b.uniforms),side:Ke,depthWrite:!1})),this.cubeCamera=new Qe(1,1e5,new He(512,{format:re,type:Ze})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),a=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(a),Math.sin(a)*Math.sin(e),Math.sin(a)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){J(this.sky),J(this.cubeCamera)}};m(b,"vertexShader",Y),m(b,"fragmentShader",ee),m(b,"uniforms",q.merge([Ve.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new se}}]));let A=b;var v=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(v||{});const yt=t=>{const i=new Uint8Array(16384);for(let s=0;s<4096;s++){const n=s*4;i[n]=Math.floor(t.r*255),i[n+1]=Math.floor(t.g*255),i[n+2]=Math.floor(t.b*255),i[n+3]=255}return i},bt=(t,e,a,i)=>{const s="/negx.jpg",n="/negy.jpg",c="/negz.jpg",o="/posx.jpg",g="/posy.jpg",u="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new $e().setPath(t).load([o,s,g,n,u,c],C=>{e(C)},C=>{a&&a(C)},C=>{i&&i(C)})},Ct=new ce,E=D({name:"SkyboxComponent",jsonID:"EE_skybox",schema:r.Object({backgroundColor:Ee.Color(0),equirectangularPath:r.String(""),cubemapPath:r.String(""),backgroundType:r.Number(1),sky:r.Nullable(r.Type()),skyboxProps:r.Object({turbidity:r.Number(10),rayleigh:r.Number(1),luminance:r.Number(1),mieCoefficient:r.Number(.004999999999999893),mieDirectionalG:r.Number(.99),inclination:r.Number(.10471975511965978),azimuth:r.Number(.16666666666666666)})}),reactor:function(){const t=T();if(!ue)return null;const e=w(t,E),a=U(void 0),[i,s]=ze(e.backgroundType.value===v.equirectangular?e.equirectangularPath.value:"",t);return ae(()=>()=>{ke(t)&&I(t,p)&&M(t,p)},[]),l.useEffect(()=>{e.backgroundType.value!==v.equirectangular||!i||(i.colorSpace=B,i.mapping=W,f(t,p,i))},[i,e.backgroundType]),l.useEffect(()=>{if(s)return L(t,E,"FILE_ERROR",s.message),()=>{V(t,E,"FILE_ERROR")}},[s]),l.useEffect(()=>{if(e.backgroundType.value!==v.color)return;const n=e.backgroundColor.value??Ct,c=64,[o,g]=Ae(Je,t,yt(new ce(n)),c,c,re);return o.needsUpdate=!0,o.colorSpace=B,o.mapping=W,f(t,p,o),()=>{g(),M(t,p)}},[e.backgroundType,e.backgroundColor]),l.useEffect(()=>{if(e.backgroundType.value!==v.cubemap)return;const n=o=>{o.colorSpace=B,o.mapping=X,a.set(o),f(t,p,o),V(t,E,"FILE_ERROR")},c=[e.cubemapPath.value,n,void 0,o=>L(t,E,"FILE_ERROR",o.message)];return bt(...c),()=>{M(t,p)}},[e.backgroundType,e.cubemapPath]),l.useEffect(()=>{const n=a.value;if(n)return()=>{n.dispose()}},[a]),l.useEffect(()=>{if(e.backgroundType.value!==v.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new A);const n=e.sky.value;n.azimuth=e.skyboxProps.value.azimuth,n.inclination=e.skyboxProps.value.inclination,n.mieCoefficient=e.skyboxProps.value.mieCoefficient,n.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,n.rayleigh=e.skyboxProps.value.rayleigh,n.turbidity=e.skyboxProps.value.turbidity,n.luminance=e.skyboxProps.value.luminance;const c=d(xe.instance.viewerEntity,je),o=n.generateSkyboxTextureCube(c.renderer);o.mapping=X,f(t,p,o),n.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]});export{Z as E,k as L,x as S,v as a,E as b,Dt as c,yt as g,bt as l};
