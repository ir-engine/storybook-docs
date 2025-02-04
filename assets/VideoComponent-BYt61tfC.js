import{r}from"./index-BVKeUVk_.js";import{a as o,V as m,o as F,Q as S,R as q,q as x,r as R,s as N,t as W,u as P,h as L}from"./three.module-CG-40ynC.js";import{S as s,d as Q,b as B,c as H,f as I,U as G,l as X,s as b,m as k,o as Y,a as D}from"./index-BkRrsvk_.js";import{c as g,N as l,d as $}from"./ActionFunctions-QRRLR__x.js";import{z as v,V as J,U as K,m as Z,E as ee,M as ae,X as V,Q as te}from"./resourceLoaderHooks-6wJpwuj2.js";import{c as ie}from"./PriorityQueue-CSX6bVhr.js";import{i as re}from"./XRState-COc7wgLw.js";import{S as oe,r as se,g as ne,P as _,c as le}from"./ImageComponent-CgBjVAQn.js";import{a as ue}from"./MediaComponent-CUs4tCRN.js";new o;new m;new m;new m(0,0,-1);new F;new m;new o;const pe=i=>s.LiteralUnion(["cover","contain","vertical","horizontal"],i);new S().setFromAxisAngle(new m(0,1,0),Math.PI/2).multiply(new S().setFromAxisAngle(new m(0,1,0),Math.PI)).multiply(new S().setFromAxisAngle(new m(0,0,1),Math.PI/2));const ge=$({name:"VideoTexturePriorityQueueState",initial:()=>({queue:ie({accumulationBudget:re||te?1:3})})});class fe extends W{constructor(e){super(e),this.minFilter=P,this.magFilter=P,this.generateMipmaps=!1}update(){}}const j=s.LiteralUnion([q,x,R],x),ce=s.LiteralUnion(["Flat","Equirectangular360"],"Flat"),n=Q({name:"EE_video",jsonID:"EE_video",schema:s.Object({side:oe(L),size:v.Vec2({x:1,y:1}),uvOffset:v.Vec2({x:0,y:0}),uvScale:v.Vec2({x:1,y:1}),alphaUVOffset:v.Vec2({x:0,y:0}),alphaUVScale:v.Vec2({x:1,y:1}),wrapS:j,wrapT:j,useAlpha:s.Bool(!1),useAlphaUVTransform:s.Bool(!1),alphaThreshold:s.Number(.5),fit:pe("contain"),projection:ce,mediaUUID:s.EntityUUID(),videoMeshEntity:s.Entity(),texture:s.NonSerialized(s.Nullable(s.Type()))}),onRemove:(i,e)=>{n.uniqueVideoEntities.includes(i)&&n.uniqueVideoEntities.splice(n.uniqueVideoEntities.indexOf(i),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:me});function me(){const i=B(),e=H(i,n),T=I(i,J),z=e.mediaUUID.value,f=G.getEntityByUUID(z)||i,d=I(f,ue),y=g(X),t=K(y.value,_,()=>new N({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new o(0,0)},uvScale:{value:new o(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new o(0,0)},alphaUVScale:{value:new o(1,1)},wrapS:{value:x},wrapT:{value:x}},vertexShader:`
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
      `})),h=g(new o(0,0)),U=g(new o(1,1));return r.useEffect(()=>{const a=y.value;return e.videoMeshEntity.set(a),t.name.set(`video-group-${i}`),b(a,k,{parentEntity:i}),b(a,Z,t.name.value),()=>{Y(a)}},[]),r.useEffect(()=>{ee(y.value,!!T)},[T]),r.useEffect(()=>{t.material.side.set(e.side.value)},[e.side]),r.useEffect(()=>{const a=t.value;se(a);const u=new o(0,0),p=new o(1,1),M=e.size.value,[A,O]=[M.x,M.y],w=A/O;a.scale.x=A,a.scale.y=O;const C=ne(a.material.uniforms.map.value),E=C.x/C.y||1;let c=!0;e.fit.value=="horizontal"&&(c=!0),e.fit.value=="vertical"&&(c=!1),e.fit.value=="contain"&&(E>w?c=!0:c=!1),e.fit.value=="cover"&&(E>w?c=!1:c=!0),c?(p.y=E/w,p.x=1,u.y=(1-p.y)/2):(p.x=1/E/(1/w),p.y=1,u.x=(1-p.x)/2),h.set(u),U.set(p)},[e.size,e.fit,e.texture,t.material]),r.useEffect(()=>{t.geometry.set(e.projection.value==="Flat"?_():le()),t.geometry.attributes.position.needsUpdate.set(!0);const a=t.material.uniforms.get(l);a.map.value=e.texture.value;const u=t.material.defines.get(l);e.texture.value?u.USE_MAP="":delete u.USE_MAP,t.material.needsUpdate.set(!0)},[e.texture,e.projection]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.wrapS.value=e.wrapS.value},[e.wrapS]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.wrapT.value=e.wrapT.value},[e.wrapT]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.useAlpha.value=e.useAlpha.value},[e.useAlpha]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.alphaThreshold.value=e.alphaThreshold.value},[e.alphaThreshold]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.uvOffset.value=new o(e.uvOffset.x.value+h.x.value,e.uvOffset.y.value+h.y.value)},[e.uvOffset,h]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.uvScale.value=e.uvScale.value,a.uvScale.value=new o(e.uvScale.x.value*U.x.value,e.uvScale.y.value*U.y.value)},[e.uvScale,U]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.useAlphaUVTransform.value=e.useAlphaUVTransform.value},[e.useAlphaUVTransform]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.alphaUVOffset.value=e.alphaUVOffset.value},[e.alphaUVOffset]),r.useEffect(()=>{const a=t.material.uniforms.get(l);a.alphaUVScale.value=e.alphaUVScale.value},[e.alphaUVScale]),r.useEffect(()=>{if(!f||!d)return;const a=D(f,n),u=D(f,ae),p=a==null?void 0:a.texture;if(e.texture.value)e.texture.value.image=d.element.value,i!==f&&a&&e.texture.set(a.texture),V(i,n);else if(p&&u)t.material.set(u.material),V(i,n);else return e.texture.set(new fe(d.element.value)),n.uniqueVideoEntities.push(f),V(i,n),()=>{n.uniqueVideoEntities.includes(i)&&n.uniqueVideoEntities.splice(n.uniqueVideoEntities.indexOf(i),1)}},[e.texture,e.mediaUUID,f,d]),null}export{n as V,ge as a};
