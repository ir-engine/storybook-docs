import{r as c}from"./index-qyj2ZBCg.js";import{a as f,S as Z,ac as ee,P as G,n as B,a8 as ae,p as te,g as _,ad as ie,o as re,V as S,q as oe,Q as A,a9 as se,j as M,aa as ne,ae as le,i as F,Z as ue}from"./three.module-uBlvIETu.js";import{d as W,S as u,a as H,b as Q,v as ce,g as k,w as pe,c as L,U as fe,l as me,s as N,m as ve,o as q}from"./index-Dta3F5U2.js";import{g as de,a as he,c as P,N as v}from"./ActionFunctions-CCNGNQ89.js";import{H as X,I as C,J as x,l as Y,K as Ee,P as Ue,Q as Se,g as ye,N as ge,j as we,V as xe,M as Me,U as Ve}from"./EditorServices-eoOKxWfD.js";import{i as Te}from"./XRState-CC-ESits.js";import{A as Ae}from"./AssetType-LSGL9ANY.js";import{D as Pe,A as Ce}from"./AssetLoader-eMUYOxW3.js";import{n as Oe}from"./EditorControlFunctions-C7DU2bfq.js";import{I as O,b as V}from"./ImageUtils-Z7Fq75TW.js";import{b as _e}from"./MediaComponent-bIEIn_jV.js";const T=()=>new G(1,1,1,1),$=()=>new B(1,64,32),Ie=()=>K(new G(1,1,1,1)),De=()=>K(new B(1,64,32)),J=a=>u.LiteralUnion([ae,te,_,ie],a),y=W({name:"EE_image",jsonID:"EE_image",schema:u.Object({source:u.String(""),alphaMode:u.Enum(O,O.Opaque),alphaCutoff:u.Number(.5),projection:u.Enum(V,V.Flat),side:J(_)}),errors:["MISSING_TEXTURE_SOURCE","UNSUPPORTED_ASSET_CLASS","LOADING_ERROR","INVALID_URL"],reactor:Fe}),be=new f;function I(a,e=be){const t=a==null?void 0:a.image,l=(t==null?void 0:t.videoWidth)||(t==null?void 0:t.naturalWidth)||(t==null?void 0:t.width)||0,i=(t==null?void 0:t.videoHeight)||(t==null?void 0:t.naturalHeight)||(t==null?void 0:t.height)||0;return e.set(l,i)}function Re(a){var n;if(!((n=a.material.uniforms.map)!=null&&n.value))return;const{width:e,height:t}=I(a.material.uniforms.map.value);if(!e||!t)return;k(a.entity,Y);const l=(t||1)/(e||1),i=Math.min(1,1/l),s=Math.min(1,l);a.scale.set(i,s,1)}function je(a){if(!a.material.map)return;const{width:e,height:t}=I(a.material.map);if(!e||!t)return;const l=k(a.entity,Y),i=(t||1)/(e||1),s=Math.min(1,1/i)*l.scale.x,n=Math.min(1,i)*l.scale.y;a.scale.set(s,n,1)}function K(a){const e=a.attributes.uv.array;for(let t=1;t<e.length;t+=2)e[t]=1-e[t];return a}function Fe(){const a=H(),e=Q(a,y),[t,l]=Oe(e.source.value,a),i=X(a,T,()=>new re);return ce(()=>{e.source.value||e.source.set(`${de(Pe).cloudDomain}/projects/ir-engine/default-project/assets/sample_etc1s.ktx2`)},[]),c.useEffect(()=>{l&&C(a,y,"LOADING_ERROR",l.message)},[l]),c.useEffect(()=>{if(!e.source.value){C(a,y,"MISSING_TEXTURE_SOURCE");return}Ce.getAssetClass(e.source.value)!==Ae.Image&&C(a,y,"UNSUPPORTED_ASSET_CLASS")},[e.source]),c.useEffect(function(){t&&(x(a,y),t.colorSpace=Z,t.minFilter=ee,i.material.map.set(t),i.visible.set(!0))},[t]),c.useEffect(function(){if(!i.material.map.value)return;const n=i.material.map.value.flipY;switch(e.projection.value){case V.Equirectangular360:i.geometry.set(n?$():De()),i.scale.value.set(-1,1,1);break;case V.Flat:default:i.geometry.set(n?T():Ie()),je(i.value)}},[i.material.map,e.projection]),c.useEffect(function(){i.material.transparent.set(e.alphaMode.value!==O.Opaque),i.material.alphaTest.set(e.alphaMode.value==="Mask"?e.alphaCutoff.value:0),i.material.side.set(e.side.value)},[e.alphaMode,e.alphaCutoff,e.side]),null}const Le=a=>{const e=new Map,t=new Set;let l=0;const i={accumulatingPriorities:e,removeEntity:s=>{e.delete(s)},addPriority:(s,n)=>{e.has(s)||e.set(s,{normalizedPriority:0,accumulatedPriority:0});const o=e.get(s);o.accumulatedPriority+=n,l+=n},update:()=>{t.clear();for(const[s,n]of e){n.normalizedPriority+=n.accumulatedPriority*i.accumulationBudget/l,n.accumulatedPriority=0;const o=pe(s);(n.normalizedPriority>=1||!o)&&(o&&t.add(s),i.removeEntity(s))}l=0},priorityEntities:t,accumulationBudget:a.accumulationBudget,reset:()=>{l=0,e.clear(),t.clear()}};return i},Ne=5*5,qe=a=>!(Ue.squaredDistance[a]>Ne&&Se.isCulled[a]),ta=(a,e)=>{let t=0;return(l,i,s)=>{let n=!1;t+=s,t>1&&(n=!0,t=0);for(const p of a.enter())i.push(p),n=!0;for(const p of a.exit()){const d=i.indexOf(p);d>-1&&i.splice(d,1),n=!0,l.removeEntity(p)}n&&i.length>1&&Ee(i,e);const o=[];for(let p=0;p<i.length;p++)qe(i[p])&&o.push(i[p]);for(let p=0;p<o.length;p++){const d=o[p],r=Math.min(Math.exp(1/(p+1))/3,1);l.addPriority(d,r*r)}l.update()}};new f;new S;new S;new S(0,0,-1);new oe;new S;const ze=a=>u.LiteralUnion(["cover","contain","vertical","horizontal"],a);new A().setFromAxisAngle(new S(0,1,0),Math.PI/2).multiply(new A().setFromAxisAngle(new S(0,1,0),Math.PI)).multiply(new A().setFromAxisAngle(new S(0,0,1),Math.PI/2));const ia=he({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Le({accumulationBudget:Te||Ve?1:3})})});class Ge extends le{constructor(e){super(e),this.minFilter=F,this.magFilter=F,this.generateMipmaps=!1}update(){}}const z=u.LiteralUnion([se,M,ne],M),Be=u.LiteralUnion(["Flat","Equirectangular360"],"Flat"),m=W({name:"EE_video",jsonID:"EE_video",schema:u.Object({side:J(_),size:u.Vec2({x:1,y:1}),uvOffset:u.Vec2({x:0,y:0}),uvScale:u.Vec2({x:1,y:1}),alphaUVOffset:u.Vec2({x:0,y:0}),alphaUVScale:u.Vec2({x:1,y:1}),wrapS:z,wrapT:z,useAlpha:u.Bool(!1),useAlphaUVTransform:u.Bool(!1),alphaThreshold:u.Number(.5),fit:ze("contain"),projection:Be,mediaUUID:u.EntityUUID(),videoMeshEntity:u.Entity(),texture:u.Nullable(u.Type())}),onRemove:(a,e)=>{m.uniqueVideoEntities.includes(a)&&m.uniqueVideoEntities.splice(m.uniqueVideoEntities.indexOf(a),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:We});function We(){const a=H(),e=Q(a,m),t=L(a,xe),l=e.mediaUUID.value,i=fe.getEntityByUUID(l)||a,s=L(i,_e),n=P(me),o=X(n.value,T,()=>new ue({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new f(0,0)},uvScale:{value:new f(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new f(0,0)},alphaUVScale:{value:new f(1,1)},wrapS:{value:M},wrapT:{value:M}},vertexShader:`
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
      `})),p=P(new f(0,0)),d=P(new f(1,1));return c.useEffect(()=>{const r=n.value;return e.videoMeshEntity.set(r),o.name.set(`video-group-${a}`),N(r,ye,{parentEntity:a}),N(r,ge,o.name.value),()=>{ve(r)}},[]),c.useEffect(()=>{we(n.value,!!t)},[t]),c.useEffect(()=>{o.material.side.set(e.side.value)},[e.side]),c.useEffect(()=>{const r=o.value;Re(r);const h=new f(0,0),E=new f(1,1),D=e.size.value,[b,R]=[D.x,D.y],g=b/R;r.scale.x=b,r.scale.y=R;const j=I(r.material.uniforms.map.value),w=j.x/j.y||1;let U=!0;e.fit.value=="horizontal"&&(U=!0),e.fit.value=="vertical"&&(U=!1),e.fit.value=="contain"&&(w>g?U=!0:U=!1),e.fit.value=="cover"&&(w>g?U=!1:U=!0),U?(E.y=w/g,E.x=1,h.y=(1-E.y)/2):(E.x=1/w/(1/g),E.y=1,h.x=(1-E.x)/2),p.set(h),d.set(E)},[e.size,e.fit,e.texture,o.material]),c.useEffect(()=>{o.geometry.set(e.projection.value==="Flat"?T():$()),o.geometry.attributes.position.needsUpdate.set(!0);const r=o.material.uniforms.get(v);r.map.value=e.texture.value;const h=o.material.defines.get(v);e.texture.value?h.USE_MAP="":delete h.USE_MAP,o.material.needsUpdate.set(!0)},[e.texture,e.projection]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.wrapS.value=e.wrapS.value},[e.wrapS]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.wrapT.value=e.wrapT.value},[e.wrapT]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.useAlpha.value=e.useAlpha.value},[e.useAlpha]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.alphaThreshold.value=e.alphaThreshold.value},[e.alphaThreshold]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.uvOffset.value=new f(e.uvOffset.x.value+p.x.value,e.uvOffset.y.value+p.y.value)},[e.uvOffset,p]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.uvScale.value=e.uvScale.value,r.uvScale.value=new f(e.uvScale.x.value*d.x.value,e.uvScale.y.value*d.y.value)},[e.uvScale,d]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.useAlphaUVTransform.value=e.useAlphaUVTransform.value},[e.useAlphaUVTransform]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.alphaUVOffset.value=e.alphaUVOffset.value},[e.alphaUVOffset]),c.useEffect(()=>{const r=o.material.uniforms.get(v);r.alphaUVScale.value=e.alphaUVScale.value},[e.alphaUVScale]),c.useEffect(()=>{if(!i||!s)return;const r=q(i,m),h=q(i,Me),E=r==null?void 0:r.texture;if(e.texture.value)e.texture.value.image=s.element.value,x(a,m);else if(E&&h)o.material.set(h.material),x(a,m);else return e.texture.set(new Ge(s.element.value)),m.uniqueVideoEntities.push(i),x(a,m),()=>{m.uniqueVideoEntities.includes(a)&&m.uniqueVideoEntities.splice(m.uniqueVideoEntities.indexOf(a),1)}},[e.texture,i,s]),null}export{y as I,m as V,ia as a,ta as b,Le as c};
