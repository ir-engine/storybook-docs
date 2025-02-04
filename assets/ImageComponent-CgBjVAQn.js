import{r as l}from"./index-BVKeUVk_.js";import{x as b,y as R,h as v,U,z as A,l as O,G as E,O as D,W as F,H as L,J as G,S as f,q as T,u as C,a as k,j as _,F as B,g as N,T as j,K as q,k as H,o as V}from"./three.module-CG-40ynC.js";import{d as W,S as u,b as X,c as K,g as J}from"./index-BkRrsvk_.js";import{k as Y,U as Z,l as d,A as $,X as z,T as Q}from"./resourceLoaderHooks-6wJpwuj2.js";import{A as ee}from"./AssetType-Dm_AgmgM.js";import{g as te,d as ae}from"./ActionFunctions-QRRLR__x.js";import{K as se,U as oe}from"./KTX2Encoder-CukEghVr.js";const p={Flat:"Flat",Equirectangular360:"Equirectangular360"},g={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},ne=`
	attribute vec3 position;
	attribute vec2 uv;

	uniform mat4 projectionMatrix;
	uniform mat4 modelViewMatrix;

	varying vec2 vUv;

	void main()  {

		vUv = vec2( 1.- uv.x, uv.y );
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	}
`,re=`
	precision mediump float;

	uniform samplerCube map;

	varying vec2 vUv;

	#define M_PI 3.1415926535897932384626433832795

	void main()  {

		vec2 uv = vUv;

		float longitude = uv.x * 2. * M_PI - M_PI + M_PI / 2.;
		float latitude = uv.y * M_PI;

		vec3 dir = vec3(
			- sin( longitude ) * sin( latitude ),
			cos( latitude ),
			- cos( longitude ) * sin( latitude )
		);
		normalize( dir );

		gl_FragColor = textureCube( map, dir );

	}
`,ie=ae({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:oe.UASTCLevelFastest}}}),ce=new se,xe=async t=>{const a=await ce.encode(t,te(ie).ktx2);return new Blob([a])},_e=(t,a,e,o=0,s=0)=>{const n=document.createElement("canvas"),r=n.getContext("2d");if(n.width=a,n.height=e,r.putImageData(t,0,0),o>0&&(r.filter=`blur(${o}px)`,r.drawImage(n,0,0)),s>0){const c=document.createElement("canvas"),i=c.getContext("2d");return c.width=s,c.height=s,i.drawImage(n,0,0,s,s),i.getImageData(0,0,s,s)}else return r.getImageData(0,0,a,e)},we=(t,a,e,o,s=!1)=>{const n=new b,r=new R({uniforms:{map:new U(new A)},vertexShader:ne,fragmentShader:re,side:v,transparent:!0}),c=new O(new E(1,1),r);n.add(c);const i=new D(1/-2,1/2,1/2,1/-2,-1e4,1e4);c.scale.set(e,o,1),i.left=e/2,i.right=e/-2,i.top=o/-2,i.bottom=o/2,i.updateProjectionMatrix();const S=new F(e,o,{minFilter:C,magFilter:C,wrapS:T,wrapT:T,colorSpace:f,format:G,type:L}),y=t.outputColorSpace;t.outputColorSpace=f,t.setRenderTarget(S),c.material.uniforms.map.value=a,t.render(n,i);const h=new Uint8Array(4*e*o);t.readRenderTargetPixels(S,0,0,e,o,h),t.setRenderTarget(null),t.outputColorSpace=y;const M=new ImageData(new Uint8ClampedArray(h),e,o);return s?ue(M):M},ue=t=>{const a=document.createElement("canvas"),e=a.getContext("2d");return a.width=t.width,a.height=t.height,e.putImageData(t,0,0),new Promise(o=>a.toBlob(o))},I=()=>new E(1,1,1,1),le=()=>new _(1,64,32),me=()=>P(new E(1,1,1,1)),pe=()=>P(new _(1,64,32)),de=t=>u.LiteralUnion([B,N,v,j],t),m=W({name:"EE_image",jsonID:"EE_image",schema:u.Object({source:u.String(""),alphaMode:u.Enum(g,g.Opaque),alphaCutoff:u.Number(.5),projection:u.Enum(p,p.Flat),side:de(v)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:ve}),fe=new k;function w(t,a=fe){const e=t==null?void 0:t.image,o=(e==null?void 0:e.videoWidth)||(e==null?void 0:e.naturalWidth)||(e==null?void 0:e.width)||0,s=(e==null?void 0:e.videoHeight)||(e==null?void 0:e.naturalHeight)||(e==null?void 0:e.height)||0;return a.set(o,s)}function Pe(t){var r;if(!((r=t.material.uniforms.map)!=null&&r.value))return;const{width:a,height:e}=w(t.material.uniforms.map.value);if(!a||!e)return;J(t.entity,Q);const o=(e||1)/(a||1),s=Math.min(1,1/o),n=Math.min(1,o);t.scale.set(s,n,1)}const x=new V;function ge(t){if(!t.material.map)return;const{width:a,height:e}=w(t.material.map);if(!a||!e)return;const o=(e||1)/(a||1),s=Math.min(1,1/o),n=Math.min(1,o);x.makeScale(s,n,1),t.geometry.applyMatrix4(x)}function P(t){const a=t.attributes.uv.array;for(let e=1;e<a.length;e+=2)a[e]=1-a[e];return t}function ve(){const t=X(),a=K(t,m),[e,o]=Y(a.source.value,t),s=Z(t,I,()=>new H);return l.useEffect(()=>{o&&d(t,m,"LOADING_ERROR",o.message)},[o]),l.useEffect(()=>{if(!a.source.value){d(t,m,"MISSING_TEXTURE_SOURCE");return}$.getAssetClass(a.source.value)!==ee.Image&&d(t,m,"UNSUPPORTED_ASSET_CLASS")},[a.source]),l.useEffect(function(){e&&(z(t,m),e.colorSpace=f,e.minFilter=q,s.material.map.set(e),s.visible.set(!0))},[e]),l.useEffect(function(){if(!s.material.map.value)return;const r=s.material.map.value.flipY;switch(a.projection.value){case p.Equirectangular360:s.geometry.set(r?le():pe()),s.scale.value.set(-1,1,1);break;case p.Flat:default:s.geometry.set(r?I():me()),ge(s.value)}},[s.material.map.value,a.projection.value]),l.useEffect(function(){s.material.transparent.set(a.alphaMode.value!==g.Opaque),s.material.alphaTest.set(a.alphaMode.value==="Mask"?a.alphaCutoff.value:0),s.material.side.set(a.side.value)},[a.alphaMode,a.alphaCutoff,a.side]),null}export{g as I,I as P,de as S,m as a,p as b,le as c,we as d,xe as e,_e as f,w as g,ue as i,Pe as r};
