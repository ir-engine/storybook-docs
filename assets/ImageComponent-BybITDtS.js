import{r as u}from"./index-qyj2ZBCg.js";import{d as A,R as U,b as g,U as O,C as D,e as _,P as E,O as F,W as L,f as k,g as B,S as f,h as M,i as T,a as G,j as P,F as j,B as N,T as q,k as V,l as W,m as H}from"./three.module-Clw6CupT.js";import{g as K,d as X}from"./ActionFunctions-Byw2iohW.js";import{c as Y,S as l,k as Z,i as $,m as J,r as Q,u as z,a as ee}from"./UUIDComponent-q6tIDRtA.js";import{u as te,M as d,e as I,A as ae,d as ne,T as oe}from"./resourceLoaderHooks-DCdIRVh2.js";import{A as se}from"./AssetType-C_9wg3Fb.js";import{K as re,U as ie}from"./KTX2Encoder-DBsb2osM.js";const p={Flat:"Flat",Equirectangular360:"Equirectangular360"},v={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},ce=`
	attribute vec3 position;
	attribute vec2 uv;

	uniform mat4 projectionMatrix;
	uniform mat4 modelViewMatrix;

	varying vec2 vUv;

	void main()  {

		vUv = vec2( 1.- uv.x, uv.y );
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	}
`,ue=`
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
`,le=X({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:ie.UASTCLevelFastest}}}),me=new re,Pe=async t=>{const n=await me.encode(t,K(le).ktx2);return new Blob([n])},be=(t,n,e,o=0,a=0)=>{const s=document.createElement("canvas"),r=s.getContext("2d");if(s.width=n,s.height=e,r.putImageData(t,0,0),o>0&&(r.filter=`blur(${o}px)`,r.drawImage(s,0,0)),a>0){const c=document.createElement("canvas"),i=c.getContext("2d");return c.width=a,c.height=a,i.drawImage(s,0,0,a,a),i.getImageData(0,0,a,a)}else return r.getImageData(0,0,n,e)},ye=(t,n,e,o,a=!1)=>{const s=new A,r=new U({uniforms:{map:new O(new D)},vertexShader:ce,fragmentShader:ue,side:g,transparent:!0}),c=new _(new E(1,1),r);s.add(c);const i=new F(1/-2,1/2,1/2,1/-2,-1e4,1e4);c.scale.set(e,o,1),i.left=e/2,i.right=e/-2,i.top=o/-2,i.bottom=o/2,i.updateProjectionMatrix();const S=new L(e,o,{minFilter:T,magFilter:T,wrapS:M,wrapT:M,colorSpace:f,format:B,type:k}),R=t.outputColorSpace;t.outputColorSpace=f,t.setRenderTarget(S),c.material.uniforms.map.value=n,t.render(s,i);const C=new Uint8Array(4*e*o);t.readRenderTargetPixels(S,0,0,e,o,C),t.setRenderTarget(null),t.outputColorSpace=R;const h=new ImageData(new Uint8ClampedArray(C),e,o);return a?pe(h):h},pe=t=>{const n=document.createElement("canvas"),e=n.getContext("2d");return n.width=t.width,n.height=t.height,e.putImageData(t,0,0),new Promise(o=>n.toBlob(o))},w=()=>new E(1,1,1,1),de=()=>new P(1,64,32),fe=()=>y(new E(1,1,1,1)),ve=()=>y(new P(1,64,32)),ge=t=>l.LiteralUnion([j,N,g,q],t),m=Y({name:"EE_image",jsonID:"EE_image",schema:l.Object({source:l.String(""),alphaMode:l.Enum(v,v.Opaque),alphaCutoff:l.Number(.5),projection:l.Enum(p,p.Flat),side:ge(g)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:Ce}),Ee=new G;function b(t,n=Ee){const e=t==null?void 0:t.image,o=(e==null?void 0:e.videoWidth)||(e==null?void 0:e.naturalWidth)||(e==null?void 0:e.width)||0,a=(e==null?void 0:e.videoHeight)||(e==null?void 0:e.naturalHeight)||(e==null?void 0:e.height)||0;return n.set(o,a)}function Re(t){var r;if(!((r=t.material.uniforms.map)!=null&&r.value))return;const{width:n,height:e}=b(t.material.uniforms.map.value);if(!n||!e)return;ee(t.entity,oe);const o=(e||1)/(n||1),a=Math.min(1,1/o),s=Math.min(1,o);t.scale.set(a,s,1)}const x=new H;function Se(t){if(!t.material.map)return;const{width:n,height:e}=b(t.material.map);if(!n||!e)return;const o=(e||1)/(n||1),a=Math.min(1,1/o),s=Math.min(1,o);x.makeScale(a,s,1),t.geometry.applyMatrix4(x)}function y(t){const n=t.attributes.uv.array;for(let e=1;e<n.length;e+=2)n[e]=1-n[e];return t}function Ce(){const t=Z(),n=$(t,m),[e,o]=te(n.source.value,t);u.useEffect(()=>(J(t,d,new _(w(),new V)),()=>{Q(t,d)}),[]);const a=z(t,d);return u.useEffect(()=>{o&&I(t,m,"LOADING_ERROR",o.message)},[o]),u.useEffect(()=>{n.source.value&&ae.getAssetClass(n.source.value)!==se.Image&&I(t,m,"UNSUPPORTED_ASSET_CLASS")},[n.source.value]),u.useEffect(()=>{!e||!a||(ne(t,m),e.colorSpace=f,e.minFilter=W,a.material.map.set(e),a.material.needsUpdate.set(!0),a.visible.set(!0))},[!!(a!=null&&a.value),e]),u.useEffect(()=>{if(!a||!e||!a.material.map.value)return;const s=a.material.map.value.flipY;switch(n.projection.value){case p.Equirectangular360:a.geometry.set(s?de():ve()),a.scale.value.set(-1,1,1);break;case p.Flat:default:a.geometry.set(s?w():fe()),Se(a.value)}},[!!(a!=null&&a.value),n.projection,!!e]),u.useEffect(()=>{a&&(a.material.transparent.set(n.alphaMode.value!==v.Opaque),a.material.alphaTest.set(n.alphaMode.value==="Mask"?n.alphaCutoff.value:0),a.material.side.set(n.side.value))},[!!(a!=null&&a.value),n.alphaMode,n.alphaCutoff,n.side]),null}export{v as I,w as P,ge as S,p as a,m as b,ye as c,Pe as d,de as e,be as f,b as g,pe as i,Re as r};
