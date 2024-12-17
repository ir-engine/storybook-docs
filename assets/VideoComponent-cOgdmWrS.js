import{r as s}from"./index-qyj2ZBCg.js";import{b as m,V as S,n as H,Q as _,u as te,aa as re,T as oe,ab as ie,p as I,k as ne,x as D,ac as se,ad as le,s as V,a7 as g,S as b,R as ue,ae as ce,af as pe,i as Q,a5 as me,j as fe,ag as ve,M as de,a6 as he,a8 as Ee,ah as Ue,X as Se}from"./three.module-BzvyRhzS.js";import{S as l,d as X,u as K,c as Y,g as ge,e as B,U as we,f as xe,s as G,r as ye,a as z}from"./index-B1ZXbJlD.js";import{a as Z,g as Te,c as O,N as h}from"./ActionFunctions-shpdMmcy.js";import{av as Me,ah as Ve,q as Ce,e as $,t as P,A as Ae,aw as M,T as Ie,v as w,E as _e,N as Oe,Q as Pe,V as be,M as Re,i as De}from"./resourceLoaderHooks-CJ5ue78F.js";import{c as Fe}from"./PriorityQueue-Dll6ifoG.js";import{i as je}from"./XRState-umQS3O_j.js";import{A as Le}from"./AssetType-UUzlsI5F.js";import{b as Ne}from"./MediaComponent--HK3dfTB.js";new m;new S;new S;new S(0,0,-1);new H;new S;const qe=a=>l.LiteralUnion(["cover","contain","vertical","horizontal"],a);new _().setFromAxisAngle(new S(0,1,0),Math.PI/2).multiply(new _().setFromAxisAngle(new S(0,1,0),Math.PI)).multiply(new _().setFromAxisAngle(new S(0,0,1),Math.PI/2));const C={Flat:"Flat",Equirectangular360:"Equirectangular360"},R={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},Be=`
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
`,ze=Z({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:Me.UASTCLevelFastest}}}),ke=new Ve,ca=async a=>{const e=await ke.encode(a,Te(ze).ktx2);return new Blob([e])},pa=(a,e,t,n,o=!1)=>{const u=new te,v=new re({uniforms:{map:new oe(new ie)},vertexShader:Be,fragmentShader:Ge,side:I,transparent:!0}),i=new ne(new D(1,1),v);u.add(i);const d=new se(1/-2,1/2,1/2,1/-2,-1e4,1e4);i.scale.set(t,n,1),d.left=t/2,d.right=t/-2,d.top=n/-2,d.bottom=n/2,d.updateProjectionMatrix();const E=new le(t,n,{minFilter:V,magFilter:V,wrapS:g,wrapT:g,colorSpace:b,format:ue,type:ce}),r=a.outputColorSpace;a.outputColorSpace=b,a.setRenderTarget(E),i.material.uniforms.map.value=e,a.render(u,d);const c=new Uint8Array(4*t*n);a.readRenderTargetPixels(E,0,0,t,n,c),a.setRenderTarget(null),a.outputColorSpace=r;const p=new ImageData(new Uint8ClampedArray(c),t,n);return o?We(p):p},We=a=>{const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=a.width,e.height=a.height,t.putImageData(a,0,0),new Promise(n=>e.toBlob(n))},A=()=>new D(1,1,1,1),J=()=>new Q(1,64,32),He=()=>ae(new D(1,1,1,1)),Qe=()=>ae(new Q(1,64,32)),ee=a=>l.LiteralUnion([me,fe,I,ve],a),x=X({name:"EE_image",jsonID:"EE_image",schema:l.Object({source:l.String(""),alphaMode:l.Enum(R,R.Opaque),alphaCutoff:l.Number(.5),projection:l.Enum(C,C.Flat),side:ee(I)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:Ze}),Xe=new m;function F(a,e=Xe){const t=a==null?void 0:a.image,n=(t==null?void 0:t.videoWidth)||(t==null?void 0:t.naturalWidth)||(t==null?void 0:t.width)||0,o=(t==null?void 0:t.videoHeight)||(t==null?void 0:t.naturalHeight)||(t==null?void 0:t.height)||0;return e.set(n,o)}function Ke(a){var v;if(!((v=a.material.uniforms.map)!=null&&v.value))return;const{width:e,height:t}=F(a.material.uniforms.map.value);if(!e||!t)return;ge(a.entity,Ie);const n=(t||1)/(e||1),o=Math.min(1,1/n),u=Math.min(1,n);a.scale.set(o,u,1)}const k=new H;function Ye(a){if(!a.material.map)return;const{width:e,height:t}=F(a.material.map);if(!e||!t)return;const n=(t||1)/(e||1),o=Math.min(1,1/n),u=Math.min(1,n);k.makeScale(o,u,1),a.geometry.applyMatrix4(k)}function ae(a){const e=a.attributes.uv.array;for(let t=1;t<e.length;t+=2)e[t]=1-e[t];return a}function Ze(){const a=K(),e=Y(a,x),[t,n]=Ce(e.source.value,a),o=$(a,A,()=>new de);return s.useEffect(()=>{n&&P(a,x,"LOADING_ERROR",n.message)},[n]),s.useEffect(()=>{if(!e.source.value){P(a,x,"MISSING_TEXTURE_SOURCE");return}Ae.getAssetClass(e.source.value)!==Le.Image&&P(a,x,"UNSUPPORTED_ASSET_CLASS")},[e.source]),s.useEffect(function(){t&&(M(a,x),t.colorSpace=b,t.minFilter=pe,o.material.map.set(t),o.visible.set(!0))},[t]),s.useEffect(function(){if(!o.material.map.value)return;const v=o.material.map.value.flipY;switch(e.projection.value){case C.Equirectangular360:o.geometry.set(v?J():Qe()),o.scale.value.set(-1,1,1);break;case C.Flat:default:o.geometry.set(v?A():He()),Ye(o.value)}},[o.material.map.value,e.projection.value]),s.useEffect(function(){o.material.transparent.set(e.alphaMode.value!==R.Opaque),o.material.alphaTest.set(e.alphaMode.value==="Mask"?e.alphaCutoff.value:0),o.material.side.set(e.side.value)},[e.alphaMode,e.alphaCutoff,e.side]),null}const ma=Z({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Fe({accumulationBudget:je||De?1:3})})});class $e extends Ue{constructor(e){super(e),this.minFilter=V,this.magFilter=V,this.generateMipmaps=!1}update(){}}const W=l.LiteralUnion([he,g,Ee],g),Je=l.LiteralUnion(["Flat","Equirectangular360"],"Flat"),f=X({name:"EE_video",jsonID:"EE_video",schema:l.Object({side:ee(I),size:w.Vec2({x:1,y:1}),uvOffset:w.Vec2({x:0,y:0}),uvScale:w.Vec2({x:1,y:1}),alphaUVOffset:w.Vec2({x:0,y:0}),alphaUVScale:w.Vec2({x:1,y:1}),wrapS:W,wrapT:W,useAlpha:l.Bool(!1),useAlphaUVTransform:l.Bool(!1),alphaThreshold:l.Number(.5),fit:qe("contain"),projection:Je,mediaUUID:l.EntityUUID(),videoMeshEntity:l.Entity(),texture:l.NonSerialized(l.Nullable(l.Type()))}),onRemove:(a,e)=>{f.uniqueVideoEntities.includes(a)&&f.uniqueVideoEntities.splice(f.uniqueVideoEntities.indexOf(a),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:ea});function ea(){const a=K(),e=Y(a,f),t=B(a,be),n=e.mediaUUID.value,o=we.getEntityByUUID(n)||a,u=B(o,Ne),v=O(xe),i=$(v.value,A,()=>new Se({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new m(0,0)},uvScale:{value:new m(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new m(0,0)},alphaUVScale:{value:new m(1,1)},wrapS:{value:g},wrapT:{value:g}},vertexShader:`
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
      `})),d=O(new m(0,0)),E=O(new m(1,1));return s.useEffect(()=>{const r=v.value;return e.videoMeshEntity.set(r),i.name.set(`video-group-${a}`),G(r,_e,{parentEntity:a}),G(r,Oe,i.name.value),()=>{ye(r)}},[]),s.useEffect(()=>{Pe(v.value,!!t)},[t]),s.useEffect(()=>{i.material.side.set(e.side.value)},[e.side]),s.useEffect(()=>{const r=i.value;Ke(r);const c=new m(0,0),p=new m(1,1),j=e.size.value,[L,N]=[j.x,j.y],y=L/N;r.scale.x=L,r.scale.y=N;const q=F(r.material.uniforms.map.value),T=q.x/q.y||1;let U=!0;e.fit.value=="horizontal"&&(U=!0),e.fit.value=="vertical"&&(U=!1),e.fit.value=="contain"&&(T>y?U=!0:U=!1),e.fit.value=="cover"&&(T>y?U=!1:U=!0),U?(p.y=T/y,p.x=1,c.y=(1-p.y)/2):(p.x=1/T/(1/y),p.y=1,c.x=(1-p.x)/2),d.set(c),E.set(p)},[e.size,e.fit,e.texture,i.material]),s.useEffect(()=>{i.geometry.set(e.projection.value==="Flat"?A():J()),i.geometry.attributes.position.needsUpdate.set(!0);const r=i.material.uniforms.get(h);r.map.value=e.texture.value;const c=i.material.defines.get(h);e.texture.value?c.USE_MAP="":delete c.USE_MAP,i.material.needsUpdate.set(!0)},[e.texture,e.projection]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.wrapS.value=e.wrapS.value},[e.wrapS]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.wrapT.value=e.wrapT.value},[e.wrapT]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.useAlpha.value=e.useAlpha.value},[e.useAlpha]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.alphaThreshold.value=e.alphaThreshold.value},[e.alphaThreshold]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.uvOffset.value=new m(e.uvOffset.x.value+d.x.value,e.uvOffset.y.value+d.y.value)},[e.uvOffset,d]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.uvScale.value=e.uvScale.value,r.uvScale.value=new m(e.uvScale.x.value*E.x.value,e.uvScale.y.value*E.y.value)},[e.uvScale,E]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.useAlphaUVTransform.value=e.useAlphaUVTransform.value},[e.useAlphaUVTransform]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.alphaUVOffset.value=e.alphaUVOffset.value},[e.alphaUVOffset]),s.useEffect(()=>{const r=i.material.uniforms.get(h);r.alphaUVScale.value=e.alphaUVScale.value},[e.alphaUVScale]),s.useEffect(()=>{if(!o||!u)return;const r=z(o,f),c=z(o,Re),p=r==null?void 0:r.texture;if(e.texture.value)e.texture.value.image=u.element.value,a!==o&&r&&e.texture.set(r.texture),M(a,f);else if(p&&c)i.material.set(c.material),M(a,f);else return e.texture.set(new $e(u.element.value)),f.uniqueVideoEntities.push(o),M(a,f),()=>{f.uniqueVideoEntities.includes(a)&&f.uniqueVideoEntities.splice(f.uniqueVideoEntities.indexOf(a),1)}},[e.texture,e.mediaUUID,o,u]),null}export{x as I,ma as V,f as a,ca as b,pa as c,C as d,R as e,We as i};
