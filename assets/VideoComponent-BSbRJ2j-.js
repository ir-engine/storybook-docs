import{r as s}from"./index-qyj2ZBCg.js";import{b as m,V as g,n as H,Q as I,u as te,aa as re,T as oe,ab as ne,p as _,k as ie,x as D,ac as se,ad as le,s as V,a7 as U,S as b,R as ue,ae as ce,af as pe,i as Q,a5 as me,j as fe,ag as ve,M as de,a6 as he,a8 as Ee,ah as Se,X as ge}from"./three.module-BzvyRhzS.js";import{S as l,d as X,u as K,c as Y,g as Ue,e as B,U as we,f as ye,s as G,r as xe,a as z}from"./index-3i__20Ni.js";import{a as Z,g as Te,c as O,N as h}from"./ActionFunctions-CmC6nBHp.js";import{av as Me,ah as Ve,q as Ce,e as $,t as P,A as Ae,aw as M,T as _e,v as w,E as Ie,N as Oe,Q as Pe,V as be,M as Re,i as De}from"./resourceLoaderHooks-C38595Dx.js";import{c as Fe}from"./PriorityQueue-DGzJVkvd.js";import{i as je}from"./XRState-af6XgfIW.js";import{A as Le}from"./AssetType-UUzlsI5F.js";import{b as Ne}from"./MediaComponent-4OAGQeCu.js";new m;new g;new g;new g(0,0,-1);new H;new g;const qe=a=>l.LiteralUnion(["cover","contain","vertical","horizontal"],a);new I().setFromAxisAngle(new g(0,1,0),Math.PI/2).multiply(new I().setFromAxisAngle(new g(0,1,0),Math.PI)).multiply(new I().setFromAxisAngle(new g(0,0,1),Math.PI/2));const C={Flat:"Flat",Equirectangular360:"Equirectangular360"},R={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},Be=`
	attribute vec3 position;
	attribute vec2 uv;

	uniform mat4 projectionMatrix;
	uniform mat4 modelViewMatrix;

	varying vec2 vUv;

	void main()  {

		vUv = vec2( 1.- uv.x, uv.y );
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	}
`,Ge=`
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
`,ze=Z({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:Me.UASTCLevelFastest}}}),ke=new Ve,ca=async a=>{const e=await ke.encode(a,Te(ze).ktx2);return new Blob([e])},pa=(a,e,t,i,o=!1)=>{const u=new te,v=new re({uniforms:{map:new oe(new ne)},vertexShader:Be,fragmentShader:Ge,side:_,transparent:!0}),n=new ie(new D(1,1),v);u.add(n);const d=new se(1/-2,1/2,1/2,1/-2,-1e4,1e4);n.scale.set(t,i,1),d.left=t/2,d.right=t/-2,d.top=i/-2,d.bottom=i/2,d.updateProjectionMatrix();const E=new le(t,i,{minFilter:V,magFilter:V,wrapS:U,wrapT:U,colorSpace:b,format:ue,type:ce}),r=a.outputColorSpace;a.outputColorSpace=b,a.setRenderTarget(E),n.material.uniforms.map.value=e,a.render(u,d);const c=new Uint8Array(4*t*i);a.readRenderTargetPixels(E,0,0,t,i,c),a.setRenderTarget(null),a.outputColorSpace=r;const p=new ImageData(new Uint8ClampedArray(c),t,i);return o?We(p):p},We=a=>{const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=a.width,e.height=a.height,t.putImageData(a,0,0),new Promise(i=>e.toBlob(i))},A=()=>new D(1,1,1,1),J=()=>new Q(1,64,32),He=()=>ae(new D(1,1,1,1)),Qe=()=>ae(new Q(1,64,32)),ee=a=>l.LiteralUnion([me,fe,_,ve],a),y=X({name:"EE_image",jsonID:"EE_image",schema:l.Object({source:l.String(""),alphaMode:l.Enum(R,R.Opaque),alphaCutoff:l.Number(.5),projection:l.Enum(C,C.Flat),side:ee(_)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:Ze}),Xe=new m;function F(a,e=Xe){const t=a==null?void 0:a.image,i=(t==null?void 0:t.videoWidth)||(t==null?void 0:t.naturalWidth)||(t==null?void 0:t.width)||0,o=(t==null?void 0:t.videoHeight)||(t==null?void 0:t.naturalHeight)||(t==null?void 0:t.height)||0;return e.set(i,o)}function Ke(a){var v;if(!((v=a.material.uniforms.map)!=null&&v.value))return;const{width:e,height:t}=F(a.material.uniforms.map.value);if(!e||!t)return;Ue(a.entity,_e);const i=(t||1)/(e||1),o=Math.min(1,1/i),u=Math.min(1,i);a.scale.set(o,u,1)}const k=new H;function Ye(a){if(!a.material.map)return;const{width:e,height:t}=F(a.material.map);if(!e||!t)return;const i=(t||1)/(e||1),o=Math.min(1,1/i),u=Math.min(1,i);k.makeScale(o,u,1),a.geometry.applyMatrix4(k)}function ae(a){const e=a.attributes.uv.array;for(let t=1;t<e.length;t+=2)e[t]=1-e[t];return a}function Ze(){const a=K(),e=Y(a,y),[t,i]=Ce(e.source.value,a),o=$(a,A,()=>new de);return s.useEffect(()=>{i&&P(a,y,"LOADING_ERROR",i.message)},[i]),s.useEffect(()=>{if(!e.source.value){P(a,y,"MISSING_TEXTURE_SOURCE");return}Ae.getAssetClass(e.source.value)!==Le.Image&&P(a,y,"UNSUPPORTED_ASSET_CLASS")},[e.source]),s.useEffect(function(){t&&(M(a,y),t.colorSpace=b,t.minFilter=pe,o.material.map.set(t),o.visible.set(!0))},[t]),s.useEffect(function(){if(!o.material.map.value)return;const v=o.material.map.value.flipY;switch(e.projection.value){case C.Equirectangular360:o.geometry.set(v?J():Qe()),o.scale.value.set(-1,1,1);break;case C.Flat:default:o.geometry.set(v?A():He()),Ye(o.value)}},[o.material.map.value,e.projection.value]),s.useEffect(function(){o.material.transparent.set(e.alphaMode.value!==R.Opaque),o.material.alphaTest.set(e.alphaMode.value==="Mask"?e.alphaCutoff.value:0),o.material.side.set(e.side.value)},[e.alphaMode,e.alphaCutoff,e.side]),null}const ma=Z({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Fe({accumulationBudget:je||De?1:3})})});class $e extends Se{constructor(e){super(e),this.minFilter=V,this.magFilter=V,this.generateMipmaps=!1}update(){}}const W=l.LiteralUnion([he,U,Ee],U),Je=l.LiteralUnion(["Flat","Equirectangular360"],"Flat"),f=X({name:"EE_video",jsonID:"EE_video",schema:l.Object({side:ee(_),size:w.Vec2({x:1,y:1}),uvOffset:w.Vec2({x:0,y:0}),uvScale:w.Vec2({x:1,y:1}),alphaUVOffset:w.Vec2({x:0,y:0}),alphaUVScale:w.Vec2({x:1,y:1}),wrapS:W,wrapT:W,useAlpha:l.Bool(!1),useAlphaUVTransform:l.Bool(!1),alphaThreshold:l.Number(.5),fit:qe("contain"),projection:Je,mediaUUID:l.EntityUUID(),videoMeshEntity:l.Entity(),texture:l.NonSerialized(l.Nullable(l.Type()))}),onRemove:(a,e)=>{f.uniqueVideoEntities.includes(a)&&f.uniqueVideoEntities.splice(f.uniqueVideoEntities.indexOf(a),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:ea});function ea(){const a=K(),e=Y(a,f),t=B(a,be),i=e.mediaUUID.value,o=we.getEntityByUUID(i)||a,u=B(o,Ne),v=O(ye),n=$(v.value,A,()=>new ge({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new m(0,0)},uvScale:{value:new m(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new m(0,0)},alphaUVScale:{value:new m(1,1)},wrapS:{value:U},wrapT:{value:U}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }

      `,fragmentShader:`
      #ifdef USE_MAP
        uniform sampler2D map;
      #endif
        uniform bool useAlpha;
        uniform float alphaThreshold;
        uniform vec2 uvOffset;
        uniform vec2 uvScale;
        uniform bool useAlphaUVTransform;
        uniform vec2 alphaUVOffset;
        uniform vec2 alphaUVScale;
        uniform int wrapS;
        uniform int wrapT;

        varying vec2 vUv;

        vec2 applyWrapping(vec2 uv, int wrapS, int wrapT) {
          vec2 wrappedUv = uv;
          // Repeat Wrapping
          if (wrapS == 1000) {
            wrappedUv.x = fract(wrappedUv.x);
          } else if (wrapS == 1002) {
            float mirrored = mod(wrappedUv.x, 2.0);
            if (mirrored > 1.0) mirrored = 2.0 - mirrored;
            wrappedUv.x = mirrored;
          } else {
            wrappedUv.x = clamp(wrappedUv.x, 0.0, 1.0);
          }
          
          if (wrapT == 1000) {
            wrappedUv.y = fract(wrappedUv.y);
          } else if (wrapT == 1002) {
            float mirrored = mod(wrappedUv.y, 2.0);
            if (mirrored > 1.0) mirrored = 2.0 - mirrored;
            wrappedUv.y = mirrored;
          } else {
            wrappedUv.y = clamp(wrappedUv.y, 0.0, 1.0);
          }
          return wrappedUv;
        }



        void main() {
        #ifdef USE_MAP
          vec2 adjustedUv = vUv * uvScale + uvOffset;
          vec2 mapUv = applyWrapping(adjustedUv, wrapS, wrapT);
          vec4 color = texture2D(map, mapUv);
          color.rgb = pow(color.rgb, vec3(2.2));
          if (useAlpha) {
            if (useAlphaUVTransform) {
                vec2 alphaMapUv = applyWrapping(vUv * alphaUVScale + alphaUVOffset, wrapS, wrapT);
                vec4 alphaColor = texture2D(map, alphaMapUv);
                float intensity = alphaColor.r * 0.3 + alphaColor.g * 0.59 + alphaColor.b * 0.11;
                if (intensity < alphaThreshold) discard;
            } else {
                float intensity = color.r * 0.3 + color.g * 0.59 + color.b * 0.11;
                if (intensity < alphaThreshold) discard;
            }
          }          
          if( adjustedUv.y < 0.0 || adjustedUv.y > 1.0 || adjustedUv.x < 0.0 || adjustedUv.x > 1.0) {
            color = vec4(0.0, 0.0, 0.0, 1.0);
          }          
          gl_FragColor = color;
        #else
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        #endif
        }
      `})),d=O(new m(0,0)),E=O(new m(1,1));return s.useEffect(()=>{const r=v.value;return e.videoMeshEntity.set(r),n.name.set(`video-group-${a}`),G(r,Ie,{parentEntity:a}),G(r,Oe,n.name.value),()=>{xe(r)}},[]),s.useEffect(()=>{Pe(v.value,!!t)},[t]),s.useEffect(()=>{n.material.side.set(e.side.value)},[e.side]),s.useEffect(()=>{const r=n.value;Ke(r);const c=new m(0,0),p=new m(1,1),j=e.size.value,[L,N]=[j.x,j.y],x=L/N;r.scale.x=L,r.scale.y=N;const q=F(r.material.uniforms.map.value),T=q.x/q.y||1;let S=!0;e.fit.value=="horizontal"&&(S=!0),e.fit.value=="vertical"&&(S=!1),e.fit.value=="contain"&&(T>x?S=!0:S=!1),e.fit.value=="cover"&&(T>x?S=!1:S=!0),S?(p.y=T/x,p.x=1,c.y=(1-p.y)/2):(p.x=1/T/(1/x),p.y=1,c.x=(1-p.x)/2),d.set(c),E.set(p)},[e.size,e.fit,e.texture,n.material]),s.useEffect(()=>{n.geometry.set(e.projection.value==="Flat"?A():J()),n.geometry.attributes.position.needsUpdate.set(!0);const r=n.material.uniforms.get(h);r.map.value=e.texture.value;const c=n.material.defines.get(h);e.texture.value?c.USE_MAP="":delete c.USE_MAP,n.material.needsUpdate.set(!0)},[e.texture,e.projection]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.wrapS.value=e.wrapS.value},[e.wrapS]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.wrapT.value=e.wrapT.value},[e.wrapT]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.useAlpha.value=e.useAlpha.value},[e.useAlpha]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.alphaThreshold.value=e.alphaThreshold.value},[e.alphaThreshold]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.uvOffset.value=new m(e.uvOffset.x.value+d.x.value,e.uvOffset.y.value+d.y.value)},[e.uvOffset,d]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.uvScale.value=e.uvScale.value,r.uvScale.value=new m(e.uvScale.x.value*E.x.value,e.uvScale.y.value*E.y.value)},[e.uvScale,E]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.useAlphaUVTransform.value=e.useAlphaUVTransform.value},[e.useAlphaUVTransform]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.alphaUVOffset.value=e.alphaUVOffset.value},[e.alphaUVOffset]),s.useEffect(()=>{const r=n.material.uniforms.get(h);r.alphaUVScale.value=e.alphaUVScale.value},[e.alphaUVScale]),s.useEffect(()=>{if(!o||!u)return;const r=z(o,f),c=z(o,Re),p=r==null?void 0:r.texture;if(e.texture.value)e.texture.value.image=u.element.value,M(a,f);else if(p&&c)n.material.set(c.material),M(a,f);else return e.texture.set(new $e(u.element.value)),f.uniqueVideoEntities.push(o),M(a,f),()=>{f.uniqueVideoEntities.includes(a)&&f.uniqueVideoEntities.splice(f.uniqueVideoEntities.indexOf(a),1)}},[e.texture,o,u]),null}export{y as I,ma as V,f as a,ca as b,pa as c,C as d,R as e,We as i};
