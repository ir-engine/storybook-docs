var ne=Object.defineProperty;var ie=(t,e,n)=>e in t?ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>ie(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as v}from"./index-qyj2ZBCg.js";import{a3 as I,ad as ae,V as oe,g as se,ae as re,Y as ce,B as le,H as ue,G as me,h as fe,i as H,af as he,S as P,ag as U,k as pe,ah as de,u as K,ai as A}from"./three.module-BojvEzVe.js";import{N as ve,g as ge,i as ye,c as W,h as be}from"./ActionFunctions-YlXH-jZf.js";import{c as D,S as c,k as Z,i as T,f as X,J as Ce,K as Ee,Q as xe,B as ke,a as C,h as z,M as Re,D as M,u as R,m as y,r as x,b as Se,H as Y,E as Pe,e as _e,U as _,n as Te,o as Me}from"./UUIDComponent-dOpSKvyI.js";import{n as B,a8 as J,ag as $,G as ee,D as O,F as we,M as De,am as L,an as ze,u as Be,ao as f,f as G,al as N,a1 as k}from"./resourceLoaderHooks-DMF90VYK.js";import{S as Fe,T as Ie}from"./NodeIDComponent-IlwVgG5l.js";const b=D({name:"ShadowComponent",jsonID:"EE_shadow",schema:c.Object({cast:c.Bool(!0),receive:c.Bool(!0)}),reactor:()=>{const t=Z(),e=T(t,b),n=T(t,B).get(ve);return l.useEffect(()=>()=>{n.castShadow=!1,n.receiveShadow=!1},[]),l.useEffect(()=>{n.castShadow=e.cast.value,n.receiveShadow=e.receive.value},[!!n,e.cast,e.receive]),null}}),Ue=D({name:"UpdatableComponent"}),Ae="xre.update",j=t=>{for(const[e,n]of Object.entries(t))n&&typeof n.dispose=="function"&&n.dispose();t.dispose()},q=t=>{var o;const e=t;if(e.material&&(Array.isArray(e.material)?e.material.forEach(j):j(e.material)),e.geometry){e.geometry.dispose();for(const i in e.geometry.attributes)e.geometry.deleteAttribute(i)}const n=t;n.isSkinnedMesh&&((o=n.skeleton)==null||o.dispose());const a=t;typeof a.dispose=="function"&&a.dispose()},Oe=X([B,J]),Le=X([Ue,$]),Ge=5*5,Ne=()=>{var e;const t=ge(ke).deltaSeconds;for(const n of Le())(e=C(n,$).get(Ae))==null||e(t);for(const n of Oe()){const a=C(n,B),i=z(n,O)?O.squaredDistance[n]>Ge:!0,s=!(we.isCulled[n]&&i);a.visible=s}},je=t=>{const e=t.entity,n=ee.useInstanceID(e),a=Fe.useEntitiesBySource(n);return v.createElement(Re,{entities:a,ChildEntityReactor:Ve,props:{parentEntity:e}})},qe=t=>{var a;let e=M(t,L);const n=(a=R(t,ze))==null?void 0:a.uuid.value;if(n)for(const o of n){const i=Se.getEntityByUUID(o);if(i&&z(i,L)){e=!0;break}}return e},Ve=t=>{const e=M(t.entity,De),n=M(t.entity,J),a=qe(t.entity),o=R(t.parentEntity,b);return l.useEffect(()=>{!e||!n||o&&(a?x(t.entity,b):y(t.entity,b,C(t.parentEntity,b)))},[n,e,a,o==null?void 0:o.cast,o==null?void 0:o.receive]),null},Qe=()=>v.createElement(v.Fragment,null,v.createElement(xe,{Components:[ee],ChildEntityReactor:je}));Ce({uuid:"ee.engine.SceneObjectSystem",insert:{after:Ee},execute:Ne,reactor:Qe});const V=`
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

}`,d=class d{constructor(){u(this,"cubeCamera");u(this,"sky");u(this,"_inclination");u(this,"_azimuth");u(this,"_distance");this.sky=new se(new re(1,1,1),new ce({name:"SkyShader",fragmentShader:Q,vertexShader:V,uniforms:I.clone(d.uniforms),side:le,depthWrite:!1})),this.cubeCamera=new ue(1,1e5,new me(512,{format:H,type:fe})),this.sky.name="Sky",this._inclination=0,this._azimuth=.15,this.distance=1e3}get _material(){return this.sky.material}get sunPosition(){return this._material.uniforms.sunPosition.value}get turbidity(){return this._material.uniforms.turbidity.value}set turbidity(e){this._material.uniforms.turbidity.value=e}get rayleigh(){return this._material.uniforms.rayleigh.value}set rayleigh(e){this._material.uniforms.rayleigh.value=e}get luminance(){return this._material.uniforms.luminance.value}set luminance(e){this._material.uniforms.luminance.value=e}get mieCoefficient(){return this._material.uniforms.mieCoefficient.value}set mieCoefficient(e){this._material.uniforms.mieCoefficient.value=e}get mieDirectionalG(){return this._material.uniforms.mieDirectionalG.value}set mieDirectionalG(e){this._material.uniforms.mieDirectionalG.value=e}get inclination(){return this._inclination}set inclination(e){this._inclination=e,this.updateSunPosition()}get azimuth(){return this._azimuth}set azimuth(e){this._azimuth=e,this.updateSunPosition()}get distance(){return this._distance}set distance(e){this._distance=e,this.updateSunPosition()}updateSunPosition(){const e=Math.PI*(this._inclination-.5),n=2*Math.PI*(this._azimuth-.5);this.sunPosition.set(Math.cos(n),Math.sin(n)*Math.sin(e),Math.sin(n)*Math.cos(e)),this.sky.scale.setScalar(this._distance)}generateSkyboxTextureCube(e){return this.cubeCamera.update(e,this.sky),this.cubeCamera.renderTarget.texture}copy(e){return this.turbidity=e.turbidity,this.rayleigh=e.rayleigh,this.luminance=e.luminance,this.mieCoefficient=e.mieCoefficient,this.mieDirectionalG=e.mieDirectionalG,this.inclination=e.inclination,this.azimuth=e.azimuth,this.distance=e.distance,this}dispose(){q(this.sky),q(this.cubeCamera)}};u(d,"vertexShader",V),u(d,"fragmentShader",Q),u(d,"uniforms",I.merge([ae.fog,{luminance:{value:1},turbidity:{value:10},rayleigh:{value:2},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new oe}}]));let w=d;var p=(t=>(t[t.color=0]="color",t[t.cubemap=1]="cubemap",t[t.equirectangular=2]="equirectangular",t[t.skybox=3]="skybox",t))(p||{});const He=t=>{const a=new Uint8Array(16384);for(let o=0;o<4096;o++){const i=o*4;a[i]=Math.floor(t.r*255),a[i+1]=Math.floor(t.g*255),a[i+2]=Math.floor(t.b*255),a[i+3]=255}return a},Ke=(t,e,n,a)=>{const o="/negx.jpg",i="/negy.jpg",s="/negz.jpg",r="/posx.jpg",h="/posy.jpg",E="/posz.jpg";t[t.length-1]==="/"&&(t=t.slice(0,t.length-1)),new he().setPath(t).load([r,o,h,i,E,s],m=>{e(m)},m=>{n&&n(m)},m=>{a&&a(m)})},We=new K,g=D({name:"SkyboxComponent",jsonID:"EE_skybox",schema:c.Object({backgroundColor:Ie.Color(0),equirectangularPath:c.String(""),cubemapPath:c.String(""),backgroundType:c.Number(1),sky:c.NonSerialized(c.Nullable(c.Type())),skyboxProps:c.Object({turbidity:c.Number(10),rayleigh:c.Number(1),luminance:c.Number(1),mieCoefficient:c.Number(.004999999999999893),mieDirectionalG:c.Number(.99),inclination:c.Number(.10471975511965978),azimuth:c.Number(.16666666666666666)})}),reactor:function(){const t=Z();if(!ye)return null;const e=T(t,g),n=W(void 0),[a,o]=Be(e.backgroundType.value===p.equirectangular?e.equirectangularPath.value:"",t);return Y(()=>()=>{_e(t)&&z(t,f)&&x(t,f)},[]),l.useEffect(()=>{e.backgroundType.value!==p.equirectangular||!a||(a.colorSpace=P,a.mapping=U,a.minFilter=pe,y(t,f,a))},[a,e.backgroundType]),l.useEffect(()=>{if(o)return G(t,g,"FILE_ERROR",o.message),()=>{N(t,g,"FILE_ERROR")}},[o]),l.useEffect(()=>{if(e.backgroundType.value!==p.color)return;const i=e.backgroundColor.value??We,s=64,r=new de(He(new K(i)),s,s,H);return r.needsUpdate=!0,r.colorSpace=P,r.mapping=U,y(t,f,r),()=>{r.dispose(),x(t,f)}},[e.backgroundType,e.backgroundColor]),l.useEffect(()=>{if(e.backgroundType.value!==p.cubemap)return;const i=r=>{r.colorSpace=P,r.mapping=A,n.set(r),y(t,f,r),N(t,g,"FILE_ERROR")},s=[e.cubemapPath.value,i,void 0,r=>G(t,g,"FILE_ERROR",r.message)];return Ke(...s),()=>{x(t,f)}},[e.backgroundType,e.cubemapPath]),l.useEffect(()=>{const i=n.value;if(i)return()=>{i.dispose()}},[n]),l.useEffect(()=>{if(e.backgroundType.value!==p.skybox){e.sky.value&&e.sky.set(null);return}e.sky.set(new w);const i=e.sky.value;i.azimuth=e.skyboxProps.value.azimuth,i.inclination=e.skyboxProps.value.inclination,i.mieCoefficient=e.skyboxProps.value.mieCoefficient,i.mieDirectionalG=e.skyboxProps.value.mieDirectionalG,i.rayleigh=e.skyboxProps.value.rayleigh,i.turbidity=e.skyboxProps.value.turbidity,i.luminance=e.skyboxProps.value.luminance;const s=C(Pe.instance.viewerEntity,k),r=i.generateSkyboxTextureCube(s.renderer);r.mapping=A,y(t,f,r),i.dispose()},[e.backgroundType,e.skyboxProps,e.skyboxProps.azimuth,e.skyboxProps.inclination,e.skyboxProps.mieCoefficient,e.skyboxProps.mieDirectionalG,e.skyboxProps.rayleigh,e.skyboxProps.turbidity,e.skyboxProps.luminance]),null},errors:["FILE_ERROR"]});function nt(t){const e=W(_);return Y(()=>{let n=!1;const a=i=>{var S,m,F;const s=R(i.entity,Te),h=Me([k]).find(te=>C(te,k).scenes.includes(i.entity)),E=!!((S=R(h??_,k))!=null&&S.renderer);return l.useLayoutEffect(()=>{if(!(!h||!E))return e.set(h),()=>{n||e.set(_)}},[(m=s==null?void 0:s.parentEntity)==null?void 0:m.value,h,E]),h||!((F=s==null?void 0:s.parentEntity)!=null&&F.value)?null:v.createElement(a,{key:s.parentEntity.value,entity:s.parentEntity.value})},o=be(function(){return v.createElement(a,{entity:t,key:t})});return()=>{n=!0,o.stop()}},[t]),e.value}export{b as S,p as a,g as b,nt as u};
