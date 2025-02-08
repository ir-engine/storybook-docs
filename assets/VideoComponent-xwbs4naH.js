import{r as i}from"./index-qyj2ZBCg.js";import{a as n,V as m,l as W,Q as x,R as L,n as g,o as B,h as H,p as Q,q as G,r as k,s as _}from"./three.module-wkFeCwOp.js";import{d as X,c as V,N as u}from"./ActionFunctions-YsspZ-nA.js";import{S as s,a as Y,u as $,b as D,x as j,U as J,l as K,f as T,r as Z,m as ee,o as ae,q,g as te}from"./UUIDComponent-hYGxvEdL.js";import{q as v,V as re,M as S,k as ie,v as oe,B as M,y as ne}from"./GLTFComponent-DGUYJZfi.js";import{c as se}from"./PriorityQueue-DiQDDl79.js";import{i as le}from"./XRState-B55tC3XT.js";import{c as A}from"./MathLerpFunctions-CzZAhxaS.js";import{S as ue,P as F,r as fe,g as pe,c as ce}from"./ImageComponent-Cx4XHjeN.js";import{a as z}from"./MediaComponent-Bzx-OWy3.js";new n;new m;new m;new m(0,0,-1);new W;new m;new n;const me=r=>s.LiteralUnion(["cover","contain","vertical","horizontal"],r);new x().setFromAxisAngle(new m(0,1,0),Math.PI/2).multiply(new x().setFromAxisAngle(new m(0,1,0),Math.PI)).multiply(new x().setFromAxisAngle(new m(0,0,1),Math.PI/2));const Ae=X({name:"VideoTexturePriorityQueueState",initial:()=>({queue:se({accumulationBudget:le||ne?1:3})})});class ve extends k{constructor(a){super(a),this.minFilter=_,this.magFilter=_,this.generateMipmaps=!1}update(){}}const R=s.LiteralUnion([L,g,B],g),de=s.LiteralUnion(["Flat","Equirectangular360"],"Flat"),l=Y({name:"EE_video",jsonID:"EE_video",schema:s.Object({side:ue(H),size:v.Vec2(A),uvOffset:v.Vec2(),uvScale:v.Vec2(A),alphaUVOffset:v.Vec2(),alphaUVScale:v.Vec2(A),wrapS:R,wrapT:R,useAlpha:s.Bool(!1),useAlphaUVTransform:s.Bool(!1),alphaThreshold:s.Number(.5),fit:me("contain"),projection:de,mediaUUID:s.EntityUUID(),videoMeshEntity:s.Entity(),texture:s.NonSerialized(s.Nullable(s.Type()))}),onRemove:(r,a)=>{l.uniqueVideoEntities.includes(r)&&l.uniqueVideoEntities.splice(l.uniqueVideoEntities.indexOf(r),1)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:he});function he(){const r=$(),a=D(r,l),O=j(r,re),N=a.mediaUUID.value,p=J.getEntityByUUID(N)||r,C=j(p,z),d=V(()=>{const t=K();return T(t,S,new Q(F(),new G({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new n(0,0)},uvScale:{value:new n(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaUVTransform:{value:!1},alphaUVOffset:{value:new n(0,0)},alphaUVScale:{value:new n(1,1)},wrapS:{value:g},wrapT:{value:g}},vertexShader:`
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
      `}))),t}).value;i.useEffect(()=>()=>{Z(d,S)},[]);const h=V(new n(0,0)),U=V(new n(1,1)),e=D(d,S);return i.useEffect(()=>{var o;const t=d;return a.videoMeshEntity.set(t),T(t,ee,{parentEntity:r}),T(t,ie,(o=e==null?void 0:e.name)==null?void 0:o.value),()=>{ae(t)}},[]),i.useEffect(()=>{e.name.set(`video-group-${r}`)},[!!e]),i.useEffect(()=>{oe(d,!!O)},[O]),i.useEffect(()=>{e.material.side.set(a.side.value)},[!!e,a.side]),i.useEffect(()=>{const t=e.value;fe(t);const o=new n(0,0),f=new n(1,1),w=a.size.value,[P,I]=[w.x,w.y],E=P/I;t.scale.x=P,t.scale.y=I;const b=pe(t.material.uniforms.map.value),y=b.x/b.y||1;let c=!0;a.fit.value=="horizontal"&&(c=!0),a.fit.value=="vertical"&&(c=!1),a.fit.value=="contain"&&(y>E?c=!0:c=!1),a.fit.value=="cover"&&(y>E?c=!1:c=!0),c?(f.y=y/E,f.x=1,o.y=(1-f.y)/2):(f.x=1/y/(1/E),f.y=1,o.x=(1-f.x)/2),h.set(o),U.set(f)},[!!e,a.size,a.fit,a.texture,e==null?void 0:e.material]),i.useEffect(()=>{e.geometry.set(a.projection.value==="Flat"?F():ce()),e.geometry.attributes.position.needsUpdate.set(!0);const t=e.material.uniforms.get(u);t.map.value=a.texture.value;const o=e.material.defines.get(u);a.texture.value?o.USE_MAP="":delete o.USE_MAP,e.material.needsUpdate.set(!0)},[!!e,a.texture,a.projection]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.wrapS.value=a.wrapS.value},[!!e,a.wrapS]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.wrapT.value=a.wrapT.value},[!!e,a.wrapT]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.useAlpha.value=a.useAlpha.value},[!!e,a.useAlpha]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.alphaThreshold.value=a.alphaThreshold.value},[!!e,a.alphaThreshold]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.uvOffset.value=new n(a.uvOffset.x.value+h.x.value,a.uvOffset.y.value+h.y.value)},[!!e,a.uvOffset,h]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.uvScale.value=a.uvScale.value,t.uvScale.value=new n(a.uvScale.x.value*U.x.value,a.uvScale.y.value*U.y.value)},[!!e,a.uvScale,U]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.useAlphaUVTransform.value=a.useAlphaUVTransform.value},[!!e,a.useAlphaUVTransform]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.alphaUVOffset.value=a.alphaUVOffset.value},[!!e,a.alphaUVOffset]),i.useEffect(()=>{if(!e)return;const t=e.material.uniforms.get(u);t.alphaUVScale.value=a.alphaUVScale.value},[!!e,a.alphaUVScale]),i.useEffect(()=>{if(!e||!p||!C)return;const t=q(p,l),o=q(p,S),f=te(p,z),w=t==null?void 0:t.texture;if(a.texture.value)a.texture.value.image=f.element,r!==p&&t&&a.texture.set(t.texture),M(r,l);else if(w&&o)e.material.set(o.material),M(r,l);else return a.texture.set(new ve(f.element)),l.uniqueVideoEntities.push(p),M(r,l),()=>{l.uniqueVideoEntities.includes(r)&&l.uniqueVideoEntities.splice(l.uniqueVideoEntities.indexOf(r),1)}},[!!e,a.texture,a.mediaUUID,p,C]),null}export{l as V,Ae as a};
