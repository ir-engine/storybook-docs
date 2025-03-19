var ue=Object.defineProperty;var me=(t,e,n)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>me(t,typeof e!="symbol"?e+"":e,n);import{r as c,R as S}from"./index-CeGdYiXw.js";import{a3 as A,aj as fe,V as J,g as de,ak as he,Y as pe,B as ge,H as ve,G as ye,h as be,i as $,al as Ce,S as w,am as N,k as Ee,an as ke,u as ee,ao as U}from"./three.module-DscQhNpZ.js";import{N as xe,g as d,i as te,c as ne,d as ie,u as F,a as O}from"./ActionFunctions-D2GN_MFW.js";import{c as D,S as a,k as z,i as R,f as oe,J as Se,R as Pe,Q as Re,D as De,a as h,h as L,T as we,F as P,u as ae,l as g,r as k,b as _e,t as Me,E as Ie,e as Te,A as ze,U as Le,g as Be}from"./UUIDComponent-D4d1jegb.js";import{l as B,a8 as se,r as re,G as f,D as G,F as Ae,M as j,p as Ne,aV as Ue,o as V,aW as q,aX as Fe,u as Oe,aY as m,d as M,am as W,a1 as Ge,e as je,x as Ve,al as qe,aZ as _}from"./resourceLoaderHooks-CEY1LtW8.js";import{S as I,T as We}from"./NodeIDComponent-CozzOezK.js";import{N as Xe}from"./AuthService-Co5yhUCO.js";import{X as He}from"./XRState-BRuC13XG.js";const C=D({name:"ShadowComponent",jsonID:"EE_shadow",schema:a.Object({cast:a.Bool(!0),receive:a.Bool(!0)}),reactor:()=>{const t=z(),e=R(t,C),n=R(t,B).get(xe);return c.useEffect(()=>()=>{n.castShadow=!1,n.receiveShadow=!1},[]),c.useEffect(()=>{n.castShadow=e.cast.value,n.receiveShadow=e.receive.value},[!!n,e.cast,e.receive]),null}}),Ke=D({name:"UpdatableComponent"}),Qe="xre.update",X=t=>{for(const[e,n]of Object.entries(t))n&&typeof n.dispose=="function"&&n.dispose();t.dispose()},H=t=>{var s;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(X):X(e.material)),e.geometry){e.geometry.dispose();for(const i in e.geometry.attributes)e.geometry.deleteAttribute(i)}const n=t;n.isSkinnedMesh&&((s=n.skeleton)==null||s.dispose());const o=t;typeof o.dispose=="function"&&o.dispose()},Ze=oe([B,se]),Ye=oe([Ke,re]),Je=5*5,$e=()=>{var e;const t=d(De).deltaSeconds;for(const n of Ye())(e=h(n,re).get(Qe))==null||e(t);for(const n of Ze()){const o=h(n,B),i=L(n,G)?G.squaredDistance[n]>Je:!0,l=!(Ae.isCulled[n]&&i);o.visible=l}},et=t=>{const e=t.entity,n=f.useInstanceID(e),o=I.useEntitiesBySource(n);return S.createElement(we,{entities:o,ChildEntityReactor:nt,props:{parentEntity:e}})},tt=t=>{var o;let e=P(t,q);const n=(o=ae(t,Fe))==null?void 0:o.uuid.value;if(n)for(const s of n){const i=_e.getEntityByUUID(s);if(i&&L(i,q)){e=!0;break}}return e},nt=t=>{const e=P(t.entity,j),n=P(t.parentEntity,Ne),o=P(t.entity,se),s=tt(t.entity),i=ae(t.parentEntity,C);return c.useEffect(()=>{!e||!o||i&&(s?k(t.entity,C):g(t.entity,C,h(t.parentEntity,C)))},[o,e,s,i==null?void 0:i.cast,i==null?void 0:i.receive]),c.useEffect(()=>{if(!n||!e)return;const l=h(t.entity,j).geometry,r=Ue[l.type];if(r)return g(t.entity,V,{shape:r}),()=>{k(t.entity,V)}},[n,e]),null},it=()=>S.createElement(S.Fragment,null,S.createElement(Re,{Components:[f],ChildEntityReactor:et}));Se({uuid:"ee.engine.SceneObjectSystem",insert:{after:Pe},execute:$e,reactor:it});const K=`
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

}`,Q=`
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

}`,v=class v{constructor(){u(this,"cubeCamera");u(this,"sky");u(this,"_inclination");u(this,"_azimuth");u(this,"_distance");this.sky=new de(new he(1,1,1),new pe({name:"SkyShader",fragmentShader:Q,vertexShader:K,uniforms:A.clone(v.uniforms),side:ge,depthWrite:!1})),this.cubeCamera=new ve(1,1e5,new ye(512,{format:$,type:be})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),n=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(n),Math.sin(n)*Math.sin(e),Math.sin(n)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){H(this.sky),H(this.cubeCamera)}};u(v,"vertexShader",K),u(v,"fragmentShader",Q),u(v,"uniforms",A.merge([fe.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new J}}]));let T=v;var p=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(p||{});const ot=t=>{const o=new Uint8Array(16384);for(let s=0;s<4096;s++){const i=s*4;o[i]=Math.floor(t.r*255),o[i+1]=Math.floor(t.g*255),o[i+2]=Math.floor(t.b*255),o[i+3]=255}return o},at=(t,e,n,o)=>{const s="/negx.jpg",i="/negy.jpg",l="/negz.jpg",r="/posx.jpg",ce="/posy.jpg",le="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new Ce().setPath(t).load([r,s,ce,i,le,l],y=>{e(y)},y=>{n&&n(y)},y=>{o&&o(y)})},st=new ee,b=D({name:"SkyboxComponent",jsonID:"EE_skybox",schema:a.Object({backgroundColor:We.Color(0),equirectangularPath:a.String(""),cubemapPath:a.String(""),backgroundType:a.Number(1),sky:a.NonSerialized(a.Nullable(a.Type())),skyboxProps:a.Object({turbidity:a.Number(10),rayleigh:a.Number(1),luminance:a.Number(1),mieCoefficient:a.Number(.004999999999999893),mieDirectionalG:a.Number(.99),inclination:a.Number(.10471975511965978),azimuth:a.Number(.16666666666666666)})}),reactor:function(){const t=z();if(!te)return null;const e=R(t,b),n=ne(void 0),[o,s]=Oe(e.backgroundType.value===p.equirectangular?e.equirectangularPath.value:"",t);return Me(()=>()=>{Te(t)&&L(t,m)&&k(t,m)},[]),c.useEffect(()=>{e.backgroundType.value!==p.equirectangular||!o||(o.colorSpace=w,o.mapping=N,o.minFilter=Ee,g(t,m,o))},[o,e.backgroundType]),c.useEffect(()=>{if(s)return M(t,b,"FILE_ERROR",s.message),()=>{W(t,b,"FILE_ERROR")}},[s]),c.useEffect(()=>{if(e.backgroundType.value!==p.color)return;const i=e.backgroundColor.value??st,l=64,r=new ke(ot(new ee(i)),l,l,$);return r.needsUpdate=!0,r.colorSpace=w,r.mapping=N,g(t,m,r),()=>{r.dispose(),k(t,m)}},[e.backgroundType,e.backgroundColor]),c.useEffect(()=>{if(e.backgroundType.value!==p.cubemap)return;const i=r=>{r.colorSpace=w,r.mapping=U,n.set(r),g(t,m,r),W(t,b,"FILE_ERROR")},l=[e.cubemapPath.value,i,void 0,r=>M(t,b,"FILE_ERROR",r.message)];return at(...l),()=>{k(t,m)}},[e.backgroundType,e.cubemapPath]),c.useEffect(()=>{const i=n.value;if(i)return()=>{i.dispose()}},[n]),c.useEffect(()=>{if(e.backgroundType.value!==p.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new T);const i=e.sky.value;i.azimuth=e.skyboxProps.value.azimuth,i.inclination=e.skyboxProps.value.inclination,i.mieCoefficient=e.skyboxProps.value.mieCoefficient,i.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,i.rayleigh=e.skyboxProps.value.rayleigh,i.turbidity=e.skyboxProps.value.turbidity,i.luminance=e.skyboxProps.value.luminance;const l=h(Ie.instance.viewerEntity,Ge),r=i.generateSkyboxTextureCube(l.renderer);r.mapping=U,g(t,m,r),i.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]}),Z=(t,e)=>{var o;if(d(ze).isEditing)return;const n=h(t,E);e&&((o=e.session)==null||o.end()),typeof window=="object"&&window&&n.newTab?window.open(n.url,"_blank"):window.location.href=n.url},rt=t=>{var n;if(console.log("linkCallback"),(n=qe.getMergedButtons(t).XRStandardGamepadTrigger)!=null&&n.down){const o=d(He);Z(t,o)}else Z(t,void 0)};new J;const ct="Click to follow",Y="linkCallback",lt=ie({name:"LinkState",initial:{location:void 0}}),E=D({name:"LinkComponent",jsonID:"EE_link",schema:a.Object({url:a.String(""),sceneNav:a.Bool(!1),location:a.String(""),newTab:a.Bool(!0)}),linkCallbackName:Y,linkCallback:rt,interactMessage:ct,errors:["INVALID_URL"],reactor:function(){if(!te)return null;const t=z(),e=R(t,E);return c.useEffect(()=>{if(je(t,E),!e.sceneNav.value)try{new URL(e.url.value)}catch{return M(t,E,"INVALID_URL","Please enter a valid URL.")}},[e.url,e.sceneNav]),c.useEffect(()=>{Ve(t,Y,()=>E.linkCallback(t))},[]),null}}),x=ie({name:"EditorState",initial:()=>({projectName:null,sceneName:null,scenePath:null,sceneAssetID:null,lockPropertiesPanel:"",panelLayout:{},rootEntity:Le,uiEnabled:!0,uiMode:"ADVANCED"}),useIsModified:()=>{const t=ne(O(x).rootEntity).value,e=F(_);return t?!!e[f.getInstanceID(t)].value:!1},isModified:()=>{const t=d(x).rootEntity;return t?!!d(_)[f.getInstanceID(t)]:!1},markModifiedScene:t=>{const e=Be(t,I)||f.getInstanceID(t);if(!e)return;const n=O(_);n[e].set(!0);const o=d(x).rootEntity,s=f.getInstanceID(o);s!==e&&n[s].set(!0)},isInActiveScene:t=>{const e=d(x).rootEntity,n=f.getInstanceID(e);return h(t,I)===n},reactor:()=>{const t=F(lt);return c.useEffect(()=>{t.location.value&&(Xe.dispatchNotify("Scene navigation is disabled in the studio",{variant:"warning"}),t.location.set(void 0))},[t.location]),null}});export{x as E,E as L,C as S,p as a,b};
