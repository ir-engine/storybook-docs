import{r as l}from"./index-qyj2ZBCg.js";import{b as v,V as U,n as H,Q as _,u as te,aa as re,T as oe,ab as ne,p as A,k as se,x as R,ac as ie,ad as le,s as C,a7 as S,S as b,R as ue,ae as ce,af as pe,i as Q,a5 as me,j as fe,ag as ve,M as de,a6 as he,a8 as ge,ah as Ee,X as Ue}from"./three.module-GtcjrW6H.js";import{S as u,d as X,u as K,c as Y,g as Se,e as B,U as we,f as xe,s as G,r as ye,a as k}from"./index-BAucurbO.js";import{a as $,g as Te,c as O,N as h}from"./ActionFunctions-CGJ8cJXE.js";import{aj as Me,ak as Ce,q as Ve,e as Z,t as P,A as Ie,al as M,T as Ae,v as w,E as _e,N as Oe,Q as Pe,V as be,M as De,i as Re}from"./resourceLoaderHooks-CGFdCkMf.js";import{c as Fe}from"./PriorityQueue-AmI8X9YQ.js";import{i as je}from"./XRState-CV4Nd7th.js";import{A as Le}from"./AssetType-UUzlsI5F.js";import{b as Ne}from"./MediaComponent-Bu_MiG0N.js";new v;new U;new U;new U(0,0,-1);new H;new U;const qe=a=>u.LiteralUnion(["cover","contain","vertical","horizontal"],a);new _().setFromAxisAngle(new U(0,1,0),Math.PI/2).multiply(new _().setFromAxisAngle(new U(0,1,0),Math.PI)).multiply(new _().setFromAxisAngle(new U(0,0,1),Math.PI/2));const V={Flat:"Flat",Equirectangular360:"Equirectangular360"},D={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},Be=`
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
`,ke=$({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:Me.UASTCLevelFastest}}}),We=new Ce,ca=async a=>{const e=await We.encode(a,Te(ke).ktx2);return new Blob([e])},pa=(a,e,t,s=0,o=0)=>{const i=document.createElement("canvas"),c=i.getContext("2d");if(i.width=e,i.height=t,c.putImageData(a,0,0),s>0&&(c.filter=`blur(${s}px)`,c.drawImage(i,0,0)),o>0){const n=document.createElement("canvas"),p=n.getContext("2d");return n.width=o,n.height=o,p.drawImage(i,0,0,o,o),p.getImageData(0,0,o,o)}else return c.getImageData(0,0,e,t)},ma=(a,e,t,s,o=!1)=>{const i=new te,c=new re({uniforms:{map:new oe(new ne)},vertexShader:Be,fragmentShader:Ge,side:A,transparent:!0}),n=new se(new R(1,1),c);i.add(n);const p=new ie(1/-2,1/2,1/2,1/-2,-1e4,1e4);n.scale.set(t,s,1),p.left=t/2,p.right=t/-2,p.top=s/-2,p.bottom=s/2,p.updateProjectionMatrix();const g=new le(t,s,{minFilter:C,magFilter:C,wrapS:S,wrapT:S,colorSpace:b,format:ue,type:ce}),r=a.outputColorSpace;a.outputColorSpace=b,a.setRenderTarget(g),n.material.uniforms.map.value=e,a.render(i,p);const m=new Uint8Array(4*t*s);a.readRenderTargetPixels(g,0,0,t,s,m),a.setRenderTarget(null),a.outputColorSpace=r;const f=new ImageData(new Uint8ClampedArray(m),t,s);return o?ze(f):f},ze=a=>{const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=a.width,e.height=a.height,t.putImageData(a,0,0),new Promise(s=>e.toBlob(s))},I=()=>new R(1,1,1,1),J=()=>new Q(1,64,32),He=()=>ae(new R(1,1,1,1)),Qe=()=>ae(new Q(1,64,32)),ee=a=>u.LiteralUnion([me,fe,A,ve],a),x=X({name:"EE_image",jsonID:"EE_image",schema:u.Object({source:u.String(""),alphaMode:u.Enum(D,D.Opaque),alphaCutoff:u.Number(.5),projection:u.Enum(V,V.Flat),side:ee(A)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:$e}),Xe=new v;function F(a,e=Xe){const t=a==null?void 0:a.image,s=(t==null?void 0:t.videoWidth)||(t==null?void 0:t.naturalWidth)||(t==null?void 0:t.width)||0,o=(t==null?void 0:t.videoHeight)||(t==null?void 0:t.naturalHeight)||(t==null?void 0:t.height)||0;return e.set(s,o)}function Ke(a){var c;if(!((c=a.material.uniforms.map)!=null&&c.value))return;const{width:e,height:t}=F(a.material.uniforms.map.value);if(!e||!t)return;Se(a.entity,Ae);const s=(t||1)/(e||1),o=Math.min(1,1/s),i=Math.min(1,s);a.scale.set(o,i,1)}const W=new H;function Ye(a){if(!a.material.map)return;const{width:e,height:t}=F(a.material.map);if(!e||!t)return;const s=(t||1)/(e||1),o=Math.min(1,1/s),i=Math.min(1,s);W.makeScale(o,i,1),a.geometry.applyMatrix4(W)}function ae(a){const e=a.attributes.uv.array;for(let t=1;t<e.length;t+=2)e[t]=1-e[t];return a}function $e(){const a=K(),e=Y(a,x),[t,s]=Ve(e.source.value,a),o=Z(a,I,()=>new de);return l.useEffect(()=>{s&&P(a,x,"LOADING_ERROR",s.message)},[s]),l.useEffect(()=>{if(!e.source.value){P(a,x,"MISSING_TEXTURE_SOURCE");return}Ie.getAssetClass(e.source.value)!==Le.Image&&P(a,x,"UNSUPPORTED_ASSET_CLASS")},[e.source]),l.useEffect(function(){t&&(M(a,x),t.colorSpace=b,t.minFilter=pe,o.material.map.set(t),o.visible.set(!0))},[t]),l.useEffect(function(){if(!o.material.map.value)return;const c=o.material.map.value.flipY;switch(e.projection.value){case V.Equirectangular360:o.geometry.set(c?J():Qe()),o.scale.value.set(-1,1,1);break;case V.Flat:default:o.geometry.set(c?I():He()),Ye(o.value)}},[o.material.map.value,e.projection.value]),l.useEffect(function(){o.material.transparent.set(e.alphaMode.value!==D.Opaque),o.material.alphaTest.set(e.alphaMode.value==="Mask"?e.alphaCutoff.value:0),o.material.side.set(e.side.value)},[e.alphaMode,e.alphaCutoff,e.side]),null}const fa=$({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Fe({accumulationBudget:je||Re?1:3})})});class Ze extends Ee{constructor(e){super(e),this.minFilter=C,this.magFilter=C,this.generateMipmaps=!1}update(){}}const z=u.LiteralUnion([he,S,ge],S),Je=u.LiteralUnion(["Flat","Equirectangular360"],"Flat"),d=X({name:"EE_video",jsonID:"EE_video",schema:u.Object({side:ee(A),size:w.Vec2({x:1,y:1}),uvOffset:w.Vec2({x:0,y:0}),uvScale:w.Vec2({x:1,y:1}),alphaUVOffset:w.Vec2({x:0,y:0}),alphaUVScale:w.Vec2({x:1,y:1}),wrapS:z,wrapT:z,useAlpha:u.Bool(!1),useAlphaUVTransform:u.Bool(!1),alphaThreshold:u.Number(.5),fit:qe("contain"),projection:Je,mediaUUID:u.EntityUUID(),videoMeshEntity:u.Entity(),texture:u.NonSerialized(u.Nullable(u.Type()))}),onRemove:(a,e)=>{d.uniqueVideoEntities.includes(a)&&d.uniqueVideoEntities.splice(d.uniqueVideoEntities.indexOf(a),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:ea});function ea(){const a=K(),e=Y(a,d),t=B(a,be),s=e.mediaUUID.value,o=we.getEntityByUUID(s)||a,i=B(o,Ne),c=O(xe),n=Z(c.value,I,()=>new Ue({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new v(0,0)},uvScale:{value:new v(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new v(0,0)},alphaUVScale:{value:new v(1,1)},wrapS:{value:S},wrapT:{value:S}},vertexShader:`
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
      `})),p=O(new v(0,0)),g=O(new v(1,1));return l.useEffect(()=>{const r=c.value;return e.videoMeshEntity.set(r),n.name.set(`video-group-${a}`),G(r,_e,{parentEntity:a}),G(r,Oe,n.name.value),()=>{ye(r)}},[]),l.useEffect(()=>{Pe(c.value,!!t)},[t]),l.useEffect(()=>{n.material.side.set(e.side.value)},[e.side]),l.useEffect(()=>{const r=n.value;Ke(r);const m=new v(0,0),f=new v(1,1),j=e.size.value,[L,N]=[j.x,j.y],y=L/N;r.scale.x=L,r.scale.y=N;const q=F(r.material.uniforms.map.value),T=q.x/q.y||1;let E=!0;e.fit.value=="horizontal"&&(E=!0),e.fit.value=="vertical"&&(E=!1),e.fit.value=="contain"&&(T>y?E=!0:E=!1),e.fit.value=="cover"&&(T>y?E=!1:E=!0),E?(f.y=T/y,f.x=1,m.y=(1-f.y)/2):(f.x=1/T/(1/y),f.y=1,m.x=(1-f.x)/2),p.set(m),g.set(f)},[e.size,e.fit,e.texture,n.material]),l.useEffect(()=>{n.geometry.set(e.projection.value==="Flat"?I():J()),n.geometry.attributes.position.needsUpdate.set(!0);const r=n.material.uniforms.get(h);r.map.value=e.texture.value;const m=n.material.defines.get(h);e.texture.value?m.USE_MAP="":delete m.USE_MAP,n.material.needsUpdate.set(!0)},[e.texture,e.projection]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.wrapS.value=e.wrapS.value},[e.wrapS]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.wrapT.value=e.wrapT.value},[e.wrapT]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.useAlpha.value=e.useAlpha.value},[e.useAlpha]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.alphaThreshold.value=e.alphaThreshold.value},[e.alphaThreshold]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.uvOffset.value=new v(e.uvOffset.x.value+p.x.value,e.uvOffset.y.value+p.y.value)},[e.uvOffset,p]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.uvScale.value=e.uvScale.value,r.uvScale.value=new v(e.uvScale.x.value*g.x.value,e.uvScale.y.value*g.y.value)},[e.uvScale,g]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.useAlphaUVTransform.value=e.useAlphaUVTransform.value},[e.useAlphaUVTransform]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.alphaUVOffset.value=e.alphaUVOffset.value},[e.alphaUVOffset]),l.useEffect(()=>{const r=n.material.uniforms.get(h);r.alphaUVScale.value=e.alphaUVScale.value},[e.alphaUVScale]),l.useEffect(()=>{if(!o||!i)return;const r=k(o,d),m=k(o,De),f=r==null?void 0:r.texture;if(e.texture.value)e.texture.value.image=i.element.value,a!==o&&r&&e.texture.set(r.texture),M(a,d);else if(f&&m)n.material.set(m.material),M(a,d);else return e.texture.set(new Ze(i.element.value)),d.uniqueVideoEntities.push(o),M(a,d),()=>{d.uniqueVideoEntities.includes(a)&&d.uniqueVideoEntities.splice(d.uniqueVideoEntities.indexOf(a),1)}},[e.texture,e.mediaUUID,o,i]),null}export{x as I,d as V,fa as a,ca as b,ma as c,pa as d,V as e,D as f,ze as i};
