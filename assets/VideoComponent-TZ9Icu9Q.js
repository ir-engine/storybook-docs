import{r as p}from"./index-CBqU2yxZ.js";import{a as d,V as E,k as te,Q as V,q as re,a7 as oe,G as ie,a8 as ne,v as A,g as se,t as D,a9 as le,a4 as ue,p as T,a2 as w,S as O,R as ce,a5 as pe,aa as me,h as k,a0 as fe,j as ve,ab as de,i as he,a1 as ge,a3 as Se,ac as Ee,H as we}from"./three.module-D2RMN07C.js";import{v as Ue,S as c,c as W,e as H,f as X,w as ye,b as Q,i as N,U as xe,l as Me,s as B,m as Te,o as z}from"./index-_wFD3GG2.js";import{a as K,g as Y,c as _,N as g}from"./ActionFunctions-CxzuxLxN.js";import{am as Ce,an as Pe,ao as Ae,a6 as Ve,ap as $,aq as _e,ar as I,A as Ie,as as M,z as Z,p as Oe,N as be,w as De,q as Re,M as Fe,at as je}from"./EditorServices-BJKHmurs.js";import{i as qe}from"./XRState-BS8ja_cl.js";import{A as Le}from"./AssetType-LSGL9ANY.js";import{U as Ne,K as Be}from"./WebContainer3D-CgDOwl0k.js";import{b as ze}from"./MediaComponent-BbvQujMt.js";const Ge=a=>{const e=new Map,t=new Set;let n=0;const r={accumulatingPriorities:e,removeEntity:s=>{e.delete(s)},addPriority:(s,l)=>{e.has(s)||e.set(s,{normalizedPriority:0,accumulatedPriority:0});const i=e.get(s);i.accumulatedPriority+=l,n+=l},update:()=>{t.clear();for(const[s,l]of e){l.normalizedPriority+=l.accumulatedPriority*r.accumulationBudget/n,l.accumulatedPriority=0;const i=Ue(s);(l.normalizedPriority>=1||!i)&&(i&&t.add(s),r.removeEntity(s))}n=0},priorityEntities:t,accumulationBudget:a.accumulationBudget,reset:()=>{n=0,e.clear(),t.clear()}};return r},ke=5*5,We=a=>!(Pe.squaredDistance[a]>ke&&Ae.isCulled[a]),ha=(a,e)=>{let t=0;return(n,r,s)=>{let l=!1;t+=s,t>1&&(l=!0,t=0);for(const u of a.enter())r.push(u),l=!0;for(const u of a.exit()){const m=r.indexOf(u);m>-1&&r.splice(m,1),l=!0,n.removeEntity(u)}l&&r.length>1&&Ce(r,e);const i=[];for(let u=0;u<r.length;u++)We(r[u])&&i.push(r[u]);for(let u=0;u<i.length;u++){const m=i[u],o=Math.min(Math.exp(1/(u+1))/3,1);n.addPriority(m,o*o)}n.update()}};new d;new E;new E;new E(0,0,-1);new te;new E;const He=a=>c.LiteralUnion(["cover","contain","vertical","horizontal"],a);new V().setFromAxisAngle(new E(0,1,0),Math.PI/2).multiply(new V().setFromAxisAngle(new E(0,1,0),Math.PI)).multiply(new V().setFromAxisAngle(new E(0,0,1),Math.PI/2));const C={Flat:"Flat",Equirectangular360:"Equirectangular360"},b={Opaque:"Opaque",Blend:"Blend",Mask:"Mask"},Xe=`
	attribute vec3 position;
	attribute vec2 uv;

	uniform mat4 projectionMatrix;
	uniform mat4 modelViewMatrix;

	varying vec2 vUv;

	void main()  {

		vUv = vec2( 1.- uv.x, uv.y );
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	}
`,Qe=`
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
`,Ke=K({name:"ScreenshotSettings",initial:{ktx2:{srgb:!0,uastc:!0,uastcZstandard:!0,uastcFlags:Ne.UASTCLevelFastest}}}),Ye=new Be,ga=async a=>{const e=await Ye.encode(a,Y(Ke).ktx2);return new Blob([e])},Sa=(a,e,t,n,r=!1)=>{const s=new re,l=new oe({uniforms:{map:new ie(new ne)},vertexShader:Xe,fragmentShader:Qe,side:A,transparent:!0}),i=new se(new D(1,1),l);s.add(i);const u=new le(1/-2,1/2,1/2,1/-2,-1e4,1e4);i.scale.set(t,n,1),u.left=t/2,u.right=t/-2,u.top=n/-2,u.bottom=n/2,u.updateProjectionMatrix();const m=new ue(t,n,{minFilter:T,magFilter:T,wrapS:w,wrapT:w,colorSpace:O,format:ce,type:pe}),o=a.outputColorSpace;a.outputColorSpace=O,a.setRenderTarget(m),i.material.uniforms.map.value=e,a.render(s,u);const f=new Uint8Array(4*t*n);a.readRenderTargetPixels(m,0,0,t,n,f),a.setRenderTarget(null),a.outputColorSpace=o;const v=new ImageData(new Uint8ClampedArray(f),t,n);return r?$e(v):v},$e=a=>{const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=a.width,e.height=a.height,t.putImageData(a,0,0),new Promise(n=>e.toBlob(n))},P=()=>new D(1,1,1,1),J=()=>new k(1,64,32),Ze=()=>ae(new D(1,1,1,1)),Je=()=>ae(new k(1,64,32)),ee=a=>c.LiteralUnion([fe,ve,A,de],a),U=W({name:"EE_image",jsonID:"EE_image",schema:c.Object({source:c.String(""),alphaMode:c.Enum(b,b.Opaque),alphaCutoff:c.Number(.5),projection:c.Enum(C,C.Flat),side:ee(A)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:ra}),ea=new d;function R(a,e=ea){const t=a==null?void 0:a.image,n=(t==null?void 0:t.videoWidth)||(t==null?void 0:t.naturalWidth)||(t==null?void 0:t.width)||0,r=(t==null?void 0:t.videoHeight)||(t==null?void 0:t.naturalHeight)||(t==null?void 0:t.height)||0;return e.set(n,r)}function aa(a){var l;if(!((l=a.material.uniforms.map)!=null&&l.value))return;const{width:e,height:t}=R(a.material.uniforms.map.value);if(!e||!t)return;Q(a.entity,Z);const n=(t||1)/(e||1),r=Math.min(1,1/n),s=Math.min(1,n);a.scale.set(r,s,1)}function ta(a){if(!a.material.map)return;const{width:e,height:t}=R(a.material.map);if(!e||!t)return;const n=Q(a.entity,Z),r=(t||1)/(e||1),s=Math.min(1,1/r)*n.scale.x,l=Math.min(1,r)*n.scale.y;a.scale.set(s,l,1)}function ae(a){const e=a.attributes.uv.array;for(let t=1;t<e.length;t+=2)e[t]=1-e[t];return a}function ra(){const a=H(),e=X(a,U),[t,n]=Ve(e.source.value,a),r=$(a,P,()=>new he);return ye(()=>{e.source.value||e.source.set(`${Y(_e).cloudDomain}/projects/ir-engine/default-project/assets/sample_etc1s.ktx2`)},[]),p.useEffect(()=>{n&&I(a,U,"LOADING_ERROR",n.message)},[n]),p.useEffect(()=>{if(!e.source.value){I(a,U,"MISSING_TEXTURE_SOURCE");return}Ie.getAssetClass(e.source.value)!==Le.Image&&I(a,U,"UNSUPPORTED_ASSET_CLASS")},[e.source]),p.useEffect(function(){t&&(M(a,U),t.colorSpace=O,t.minFilter=me,r.material.map.set(t),r.visible.set(!0))},[t]),p.useEffect(function(){if(!r.material.map.value)return;const l=r.material.map.value.flipY;switch(e.projection.value){case C.Equirectangular360:r.geometry.set(l?J():Je()),r.scale.value.set(-1,1,1);break;case C.Flat:default:r.geometry.set(l?P():Ze()),ta(r.value)}},[r.material.map,e.projection]),p.useEffect(function(){r.material.transparent.set(e.alphaMode.value!==b.Opaque),r.material.alphaTest.set(e.alphaMode.value==="Mask"?e.alphaCutoff.value:0),r.material.side.set(e.side.value)},[e.alphaMode,e.alphaCutoff,e.side]),null}const Ea=K({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Ge({accumulationBudget:qe||je?1:3})})});class oa extends Ee{constructor(e){super(e),this.minFilter=T,this.magFilter=T,this.generateMipmaps=!1}update(){}}const G=c.LiteralUnion([ge,w,Se],w),ia=c.LiteralUnion(["Flat","Equirectangular360"],"Flat"),h=W({name:"EE_video",jsonID:"EE_video",schema:c.Object({side:ee(A),size:c.Vec2({x:1,y:1}),uvOffset:c.Vec2({x:0,y:0}),uvScale:c.Vec2({x:1,y:1}),alphaUVOffset:c.Vec2({x:0,y:0}),alphaUVScale:c.Vec2({x:1,y:1}),wrapS:G,wrapT:G,useAlpha:c.Bool(!1),useAlphaUVTransform:c.Bool(!1),alphaThreshold:c.Number(.5),fit:He("contain"),projection:ia,mediaUUID:c.EntityUUID(),videoMeshEntity:c.Entity(),texture:c.Nullable(c.Type())}),onRemove:(a,e)=>{h.uniqueVideoEntities.includes(a)&&h.uniqueVideoEntities.splice(h.uniqueVideoEntities.indexOf(a),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:na});function na(){const a=H(),e=X(a,h),t=N(a,Re),n=e.mediaUUID.value,r=xe.getEntityByUUID(n)||a,s=N(r,ze),l=_(Me),i=$(l.value,P,()=>new we({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new d(0,0)},uvScale:{value:new d(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new d(0,0)},alphaUVScale:{value:new d(1,1)},wrapS:{value:w},wrapT:{value:w}},vertexShader:`
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
      `})),u=_(new d(0,0)),m=_(new d(1,1));return p.useEffect(()=>{const o=l.value;return e.videoMeshEntity.set(o),i.name.set(`video-group-${a}`),B(o,Oe,{parentEntity:a}),B(o,be,i.name.value),()=>{Te(o)}},[]),p.useEffect(()=>{De(l.value,!!t)},[t]),p.useEffect(()=>{i.material.side.set(e.side.value)},[e.side]),p.useEffect(()=>{const o=i.value;aa(o);const f=new d(0,0),v=new d(1,1),F=e.size.value,[j,q]=[F.x,F.y],y=j/q;o.scale.x=j,o.scale.y=q;const L=R(o.material.uniforms.map.value),x=L.x/L.y||1;let S=!0;e.fit.value=="horizontal"&&(S=!0),e.fit.value=="vertical"&&(S=!1),e.fit.value=="contain"&&(x>y?S=!0:S=!1),e.fit.value=="cover"&&(x>y?S=!1:S=!0),S?(v.y=x/y,v.x=1,f.y=(1-v.y)/2):(v.x=1/x/(1/y),v.y=1,f.x=(1-v.x)/2),u.set(f),m.set(v)},[e.size,e.fit,e.texture,i.material]),p.useEffect(()=>{i.geometry.set(e.projection.value==="Flat"?P():J()),i.geometry.attributes.position.needsUpdate.set(!0);const o=i.material.uniforms.get(g);o.map.value=e.texture.value;const f=i.material.defines.get(g);e.texture.value?f.USE_MAP="":delete f.USE_MAP,i.material.needsUpdate.set(!0)},[e.texture,e.projection]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.wrapS.value=e.wrapS.value},[e.wrapS]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.wrapT.value=e.wrapT.value},[e.wrapT]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.useAlpha.value=e.useAlpha.value},[e.useAlpha]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.alphaThreshold.value=e.alphaThreshold.value},[e.alphaThreshold]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.uvOffset.value=new d(e.uvOffset.x.value+u.x.value,e.uvOffset.y.value+u.y.value)},[e.uvOffset,u]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.uvScale.value=e.uvScale.value,o.uvScale.value=new d(e.uvScale.x.value*m.x.value,e.uvScale.y.value*m.y.value)},[e.uvScale,m]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.useAlphaUVTransform.value=e.useAlphaUVTransform.value},[e.useAlphaUVTransform]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.alphaUVOffset.value=e.alphaUVOffset.value},[e.alphaUVOffset]),p.useEffect(()=>{const o=i.material.uniforms.get(g);o.alphaUVScale.value=e.alphaUVScale.value},[e.alphaUVScale]),p.useEffect(()=>{if(!r||!s)return;const o=z(r,h),f=z(r,Fe),v=o==null?void 0:o.texture;if(e.texture.value)e.texture.value.image=s.element.value,M(a,h);else if(v&&f)i.material.set(f.material),M(a,h);else return e.texture.set(new oa(s.element.value)),h.uniqueVideoEntities.push(r),M(a,h),()=>{h.uniqueVideoEntities.includes(a)&&h.uniqueVideoEntities.splice(h.uniqueVideoEntities.indexOf(a),1)}},[e.texture,r,s]),null}export{U as I,Ea as V,h as a,ga as b,Sa as c,C as d,b as e,Ge as f,ha as g,$e as i};
