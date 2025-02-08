import{r as u}from"./index-qyj2ZBCg.js";import{w as U,x as A,h as E,U as O,y as D,p as _,z as S,O as F,W as L,G,H as B,S as g,n as T,s as I,t as N,J as k,K as P,F as j,g as q,T as H,a as V,l as W}from"./three.module-wkFeCwOp.js";import{g as K,d as X}from"./ActionFunctions-YsspZ-nA.js";import{a as J,S as l,u as Y,b as Z,f as $,r as z,c as Q,g as ee}from"./UUIDComponent-hYGxvEdL.js";import{M as d,t as f,A as te,B as ae,T as oe}from"./GLTFComponent-DGUYJZfi.js";import{A as se}from"./AssetType-C_9wg3Fb.js";import{u as ne}from"./SkyboxComponent-Y5Kd-uiO.js";import{K as re,U as ie}from"./KTX2Encoder-w4AsSZPF.js";const p={Flat:"Flat",Equirectangular360:"Equirectangular360"},v={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},ce=`
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
`,le=X({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:ie.UASTCLevelFastest}}}),me=new re,be=async t=>{const a=await me.encode(t,K(le).ktx2);return new Blob([a])},ye=(t,a,e,s=0,o=0)=>{const n=document.createElement("canvas"),r=n.getContext("2d");if(n.width=a,n.height=e,r.putImageData(t,0,0),s>0&&(r.filter=`blur(${s}px)`,r.drawImage(n,0,0)),o>0){const i=document.createElement("canvas"),c=i.getContext("2d");return i.width=o,i.height=o,c.drawImage(n,0,0,o,o),c.getImageData(0,0,o,o)}else return r.getImageData(0,0,a,e)},Re=(t,a,e,s,o=!1)=>{const n=new U,r=new A({uniforms:{map:new O(new D)},vertexShader:ce,fragmentShader:ue,side:E,transparent:!0}),i=new _(new S(1,1),r);n.add(i);const c=new F(1/-2,1/2,1/2,1/-2,-1e4,1e4);i.scale.set(e,s,1),c.left=e/2,c.right=e/-2,c.top=s/-2,c.bottom=s/2,c.updateProjectionMatrix();const h=new L(e,s,{minFilter:I,magFilter:I,wrapS:T,wrapT:T,colorSpace:g,format:B,type:G}),R=t.outputColorSpace;t.outputColorSpace=g,t.setRenderTarget(h),i.material.uniforms.map.value=a,t.render(n,c);const C=new Uint8Array(4*e*s);t.readRenderTargetPixels(h,0,0,e,s,C),t.setRenderTarget(null),t.outputColorSpace=R;const M=new ImageData(new Uint8ClampedArray(C),e,s);return o?pe(M):M},pe=t=>{const a=document.createElement("canvas"),e=a.getContext("2d");return a.width=t.width,a.height=t.height,e.putImageData(t,0,0),new Promise(s=>a.toBlob(s))},w=()=>new S(1,1,1,1),de=()=>new P(1,64,32),fe=()=>y(new S(1,1,1,1)),ge=()=>y(new P(1,64,32)),ve=t=>l.LiteralUnion([j,q,E,H],t),m=J({name:"EE_image",jsonID:"EE_image",schema:l.Object({source:l.String(""),alphaMode:l.Enum(v,v.Opaque),alphaCutoff:l.Number(.5),projection:l.Enum(p,p.Flat),side:ve(E)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:he}),Ee=new V;function b(t,a=Ee){const e=t==null?void 0:t.image,s=(e==null?void 0:e.videoWidth)||(e==null?void 0:e.naturalWidth)||(e==null?void 0:e.width)||0,o=(e==null?void 0:e.videoHeight)||(e==null?void 0:e.naturalHeight)||(e==null?void 0:e.height)||0;return a.set(s,o)}function Ue(t){var r;if(!((r=t.material.uniforms.map)!=null&&r.value))return;const{width:a,height:e}=b(t.material.uniforms.map.value);if(!a||!e)return;ee(t.entity,oe);const s=(e||1)/(a||1),o=Math.min(1,1/s),n=Math.min(1,s);t.scale.set(o,n,1)}const x=new W;function Se(t){if(!t.material.map)return;const{width:a,height:e}=b(t.material.map);if(!a||!e)return;const s=(e||1)/(a||1),o=Math.min(1,1/s),n=Math.min(1,s);x.makeScale(o,n,1),t.geometry.applyMatrix4(x)}function y(t){const a=t.attributes.uv.array;for(let e=1;e<a.length;e+=2)a[e]=1-a[e];return t}function he(){var n,r;const t=Y(),a=Z(t,m),[e,s]=ne(a.source.value,t);u.useEffect(()=>($(t,d,new _(w(),new N)),()=>{z(t,d)}),[]);const o=Q(t,d);return u.useEffect(()=>{s&&f(t,m,"LOADING_ERROR",s.message)},[s]),u.useEffect(()=>{if(!a.source.value){f(t,m,"MISSING_TEXTURE_SOURCE");return}te.getAssetClass(a.source.value)!==se.Image&&f(t,m,"UNSUPPORTED_ASSET_CLASS")},[a.source]),u.useEffect(()=>{!e||!o||(ae(t,m),e.colorSpace=g,e.minFilter=k,o.material.map.set(e),o.visible.set(!0))},[o,e]),u.useEffect(()=>{if(!o||!o.material.map.value)return;const i=o.material.map.value.flipY;switch(a.projection.value){case p.Equirectangular360:o.geometry.set(i?de():ge()),o.scale.value.set(-1,1,1);break;case p.Flat:default:o.geometry.set(i?w():fe()),Se(o.value)}},[o,(r=(n=o==null?void 0:o.material)==null?void 0:n.map)==null?void 0:r.value,a.projection.value]),u.useEffect(()=>{o&&(o.material.transparent.set(a.alphaMode.value!==v.Opaque),o.material.alphaTest.set(a.alphaMode.value==="Mask"?a.alphaCutoff.value:0),o.material.side.set(a.side.value))},[a.alphaMode,a.alphaCutoff,a.side]),null}export{v as I,w as P,ve as S,p as a,m as b,de as c,Re as d,be as e,ye as f,b as g,pe as i,Ue as r};
