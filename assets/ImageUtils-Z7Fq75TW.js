import{f as S,R as f,U as x,C as w,g as C,h as T,P as b,O as M,W as I,i as u,j as m,S as p,k as P,l as U}from"./three.module-uBlvIETu.js";import{a as y,g as F}from"./ActionFunctions-CCNGNQ89.js";import"./index-qyj2ZBCg.js";import{U as B,K as R}from"./WebContainer3D-Z2LdSix4.js";const K={Flat:"Flat",Equirectangular360:"Equirectangular360"},L={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},k=`
	attribute vec3 position;
	attribute vec2 uv;

	uniform mat4 projectionMatrix;
	uniform mat4 modelViewMatrix;

	varying vec2 vUv;

	void main()  {

		vUv = vec2( 1.- uv.x, uv.y );
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	}
`,_=`
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
`,q=y({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:B.UASTCLevelFastest}}}),A=new R,W=async e=>{const o=await A.encode(e,F(q).ktx2);return new Blob([o])},V=(e,o,a,t,d=!1)=>{const s=new S,g=new f({uniforms:{map:new x(new w)},vertexShader:k,fragmentShader:_,side:C,transparent:!0}),r=new T(new b(1,1),g);s.add(r);const n=new M(1/-2,1/2,1/2,1/-2,-1e4,1e4);r.scale.set(a,t,1),n.left=a/2,n.right=a/-2,n.top=t/-2,n.bottom=t/2,n.updateProjectionMatrix();const i=new I(a,t,{minFilter:u,magFilter:u,wrapS:m,wrapT:m,colorSpace:p,format:P,type:U}),v=e.outputColorSpace;e.outputColorSpace=p,e.setRenderTarget(i),r.material.uniforms.map.value=o,e.render(s,n);const c=new Uint8Array(4*a*t);e.readRenderTargetPixels(i,0,0,a,t,c),e.setRenderTarget(null),e.outputColorSpace=v;const l=new ImageData(new Uint8ClampedArray(c),a,t);return d?E(l):l},E=e=>{const o=document.createElement("canvas"),a=o.getContext("2d");return o.width=e.width,o.height=e.height,a.putImageData(e,0,0),new Promise(t=>o.toBlob(t))};export{L as I,W as a,K as b,V as c,E as i};
