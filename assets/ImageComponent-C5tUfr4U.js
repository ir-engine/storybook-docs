import{r as u}from"./index-qyj2ZBCg.js";import{n as A,R as U,f as g,U as O,o as D,p as _,q as E,O as F,W as L,r as B,s as G,S as f,t as h,u as T,v as q,w as j,x as P,F as k,B as N,T as V,a as W,l as H}from"./three.module-DcJJiAgC.js";import{g as K,d as X}from"./ActionFunctions-D1d2e-x8.js";import{c as Y,S as l,f as Z,i as $,j as J,r as Q,u as z,a as ee}from"./UUIDComponent-CCxaZchE.js";import{M as d,q as w,A as te,y as ae,T as oe}from"./GLTFComponent-BDDbKVDP.js";import{A as ne}from"./AssetType-C_9wg3Fb.js";import{u as re}from"./SkyboxComponent-BEXQKXQ4.js";import{K as se,U as ie}from"./KTX2Encoder-B-ujz3JI.js";const p={Flat:"Flat",Equirectangular360:"Equirectangular360"},v={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},ce=`
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
`,le=X({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:ie.UASTCLevelFastest}}}),me=new se,ye=async t=>{const o=await me.encode(t,K(le).ktx2);return new Blob([o])},be=(t,o,e,n=0,a=0)=>{const r=document.createElement("canvas"),s=r.getContext("2d");if(r.width=o,r.height=e,s.putImageData(t,0,0),n>0&&(s.filter=`blur(${n}px)`,s.drawImage(r,0,0)),a>0){const c=document.createElement("canvas"),i=c.getContext("2d");return c.width=a,c.height=a,i.drawImage(r,0,0,a,a),i.getImageData(0,0,a,a)}else return s.getImageData(0,0,o,e)},Re=(t,o,e,n,a=!1)=>{const r=new A,s=new U({uniforms:{map:new O(new D)},vertexShader:ce,fragmentShader:ue,side:g,transparent:!0}),c=new _(new E(1,1),s);r.add(c);const i=new F(1/-2,1/2,1/2,1/-2,-1e4,1e4);c.scale.set(e,n,1),i.left=e/2,i.right=e/-2,i.top=n/-2,i.bottom=n/2,i.updateProjectionMatrix();const S=new L(e,n,{minFilter:T,magFilter:T,wrapS:h,wrapT:h,colorSpace:f,format:G,type:B}),R=t.outputColorSpace;t.outputColorSpace=f,t.setRenderTarget(S),c.material.uniforms.map.value=o,t.render(r,i);const C=new Uint8Array(4*e*n);t.readRenderTargetPixels(S,0,0,e,n,C),t.setRenderTarget(null),t.outputColorSpace=R;const M=new ImageData(new Uint8ClampedArray(C),e,n);return a?pe(M):M},pe=t=>{const o=document.createElement("canvas"),e=o.getContext("2d");return o.width=t.width,o.height=t.height,e.putImageData(t,0,0),new Promise(n=>o.toBlob(n))},x=()=>new E(1,1,1,1),de=()=>new P(1,64,32),fe=()=>b(new E(1,1,1,1)),ve=()=>b(new P(1,64,32)),ge=t=>l.LiteralUnion([k,N,g,V],t),m=Y({name:"EE_image",jsonID:"EE_image",schema:l.Object({source:l.String(""),alphaMode:l.Enum(v,v.Opaque),alphaCutoff:l.Number(.5),projection:l.Enum(p,p.Flat),side:ge(g)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:Ce}),Ee=new W;function y(t,o=Ee){const e=t==null?void 0:t.image,n=(e==null?void 0:e.videoWidth)||(e==null?void 0:e.naturalWidth)||(e==null?void 0:e.width)||0,a=(e==null?void 0:e.videoHeight)||(e==null?void 0:e.naturalHeight)||(e==null?void 0:e.height)||0;return o.set(n,a)}function Ae(t){var s;if(!((s=t.material.uniforms.map)!=null&&s.value))return;const{width:o,height:e}=y(t.material.uniforms.map.value);if(!o||!e)return;ee(t.entity,oe);const n=(e||1)/(o||1),a=Math.min(1,1/n),r=Math.min(1,n);t.scale.set(a,r,1)}const I=new H;function Se(t){if(!t.material.map)return;const{width:o,height:e}=y(t.material.map);if(!o||!e)return;const n=(e||1)/(o||1),a=Math.min(1,1/n),r=Math.min(1,n);I.makeScale(a,r,1),t.geometry.applyMatrix4(I)}function b(t){const o=t.attributes.uv.array;for(let e=1;e<o.length;e+=2)o[e]=1-o[e];return t}function Ce(){const t=Z(),o=$(t,m),[e,n]=re(o.source.value,t);u.useEffect(()=>(J(t,d,new _(x(),new q)),()=>{Q(t,d)}),[]);const a=z(t,d);return u.useEffect(()=>{n&&w(t,m,"LOADING_ERROR",n.message)},[n]),u.useEffect(()=>{o.source.value&&te.getAssetClass(o.source.value)!==ne.Image&&w(t,m,"UNSUPPORTED_ASSET_CLASS")},[o.source.value]),u.useEffect(()=>{!e||!a||(ae(t,m),e.colorSpace=f,e.minFilter=j,a.material.map.set(e),a.material.needsUpdate.set(!0),a.visible.set(!0))},[!!(a!=null&&a.value),e]),u.useEffect(()=>{if(!a||!e||!a.material.map.value)return;const r=a.material.map.value.flipY;switch(o.projection.value){case p.Equirectangular360:a.geometry.set(r?de():ve()),a.scale.value.set(-1,1,1);break;case p.Flat:default:a.geometry.set(r?x():fe()),Se(a.value)}},[!!(a!=null&&a.value),o.projection,!!e]),u.useEffect(()=>{a&&(a.material.transparent.set(o.alphaMode.value!==v.Opaque),a.material.alphaTest.set(o.alphaMode.value==="Mask"?o.alphaCutoff.value:0),a.material.side.set(o.side.value))},[!!(a!=null&&a.value),o.alphaMode,o.alphaCutoff,o.side]),null}export{v as I,x as P,ge as S,p as a,m as b,Re as c,ye as d,be as e,de as f,y as g,pe as i,Ae as r};
