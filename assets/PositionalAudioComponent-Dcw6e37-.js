import{r as u}from"./index-qyj2ZBCg.js";import{a as h,V as w,f as me,Q as Y,X as pe,k as W,Y as ve,b as I,h as O,Z as de,_ as he,l as ne,m as F,M as ue,$ as Ee,a0 as ge}from"./three.module-wANLsQQX.js";import{d as ye,c as T,N as p,u as xe}from"./ActionFunctions-Ddl3k8rS.js";import{S as s,c as B,r as Q,j as $,i as X,B as ae,u as k,p as D,k as l,n as V,y as b,a as re,g as J,C as R,D as we}from"./UUIDComponent-Dva1-Tbw.js";import{i as Me}from"./index-B8XEpAJ0.js";import{c as Ue}from"./PriorityQueue-BkWqChNw.js";import{a1 as P,M as E,d as le,a3 as Ae,c as z,T as G,R as Se,L as Ce}from"./GLTFComponent-DHIABoNI.js";import{i as Ie}from"./XRState-BkgFE-kV.js";import{f as Z}from"./MathLerpFunctions-kYvNM_Bw.js";import{b as ce,T as C}from"./NodeIDComponent-CHTdvuEO.js";import{N as Oe}from"./NodeFunctions-BURqqNAk.js";import{S as Te,P as oe,r as De,g as Ve,e as be}from"./ImageComponent-C7_Sp8YO.js";import{M,a as H,A as Pe}from"./MediaComponent-HCNy07SN.js";new h;new w;new w;new w(0,0,-1);new me;new w;new h;const _e=t=>s.LiteralUnion(["cover","contain","vertical","horizontal"],t);new Y().setFromAxisAngle(new w(0,1,0),Math.PI/2).multiply(new Y().setFromAxisAngle(new w(0,1,0),Math.PI)).multiply(new Y().setFromAxisAngle(new w(0,0,1),Math.PI/2));const Ke=ye({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Ue({accumulationBudget:Ie||Me?1:3})})});class Ne extends he{constructor(e){super(e),this.minFilter=ne,this.magFilter=ne,this.generateMipmaps=!1}update(){}}const ie=s.LiteralUnion([pe,W,ve],W),je=s.LiteralUnion(["Flat","Equirectangular360"],"Flat"),d=B({name:"EE_video",jsonID:"EE_video",schema:s.Object({side:Te(I),size:C.Vec2(Z),uvOffset:C.Vec2(),uvScale:C.Vec2(Z),alphaUVOffset:C.Vec2(),wrapS:ie,wrapT:ie,useAlpha:s.Bool(!1),useAlphaInvert:s.Bool(!1),alphaThreshold:s.Number(.5),fit:_e("contain"),projection:je,mediaUUID:ce(),videoMeshEntity:s.NonSerialized(s.Entity()),currentVideoSize:s.NonSerialized(C.Vec2(Z)),texture:s.NonSerialized(s.Nullable(s.Type()))}),onRemove:(t,e)=>{d.uniqueVideoEntities.includes(t)&&d.uniqueVideoEntities.splice(d.uniqueVideoEntities.indexOf(t),1),Q(t,M)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:Fe});function Fe(){const t=$(),e=X(t,d),m=ae(t,P),c=e.mediaUUID.value,n=Oe.useEntityFromNodeID(t,c)||t,i=k(n,M),o=ae(n,H),g=T(null),f=k(n,d),U=T(()=>{const r=D();return l(r,E,new O(oe(),new de({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new h(0,0)},uvScale:{value:new h(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaInvert:{value:!1},alphaUVOffset:{value:new h(0,0)},wrapS:{value:W},wrapT:{value:W}},vertexShader:`
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
        uniform bool useAlphaInvert;
        uniform float alphaThreshold;
        uniform vec2 uvOffset;
        uniform vec2 uvScale;
        uniform vec2 alphaUVOffset;
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
            float intensity = 0.0;
            intensity = color.r * 0.333  + color.g * 0.333 + color.b * 0.333;
            if (useAlphaInvert) {
              intensity = 1.0 - intensity;
            }
            if (intensity < alphaThreshold) discard;
          }          
          if( adjustedUv.y < 0.0 || adjustedUv.y > 1.0 || adjustedUv.x < 0.0 || adjustedUv.x > 1.0) {
              discard;    
          }          
          gl_FragColor = color;
        #else
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        #endif
        }
      `}))),r}).value;u.useEffect(()=>()=>{Q(U,E)},[]);const A=T(new h(0,0)),_=T(new h(1,1)),a=X(U,E);return u.useEffect(()=>{var v;const r=U;return e.videoMeshEntity.set(r),l(r,V,{parentEntity:t}),l(r,le,(v=a==null?void 0:a.name)==null?void 0:v.value),l(r,M),e.mediaUUID.set(""),()=>{b(r)}},[]),u.useEffect(()=>{a.name.set(`video-group-${t}`)},[!!a]),u.useEffect(()=>{Ae(U,!!m)},[m]),u.useEffect(()=>{a.material.side.set(e.side.value)},[!!a,e.side]),u.useEffect(()=>{if(!i||!i.isCurrentTrackLoaded.value)return;const r=a.value;De(r);const v=new h(0,0),y=new h(1,1),S=Ve(r.material.uniforms.map.value);e.currentVideoSize.set(S);const N=S.x/S.y||1,K=e.size.value,[ee,te]=[K.x,K.y],j=ee/te;let x=!0;e.fit.value=="horizontal"&&(x=!0),e.fit.value=="vertical"&&(x=!1),e.fit.value=="contain"&&(N>j?x=!0:x=!1),e.fit.value=="cover"&&(N>j?x=!1:x=!0),x?(y.y=N/j,y.x=1,v.y=(1-y.y)/2):(y.x=1/N/(1/j),y.y=1,v.x=(1-y.x)/2),r.scale.x=ee,r.scale.y=te,A.set(v),_.set(y)},[!!a,e.size,e.fit,e.texture,a==null?void 0:a.material,i==null?void 0:i.isCurrentTrackLoaded]),u.useEffect(()=>{a.geometry.set(e.projection.value==="Flat"?oe():be()),a.geometry.attributes.position.needsUpdate.set(!0);const r=a.material.uniforms.get(p);r.map.value=e.texture.value;const v=a.material.defines.get(p);e.texture.value?v.USE_MAP="":delete v.USE_MAP,a.material.needsUpdate.set(!0)},[!!a,e.texture,e.projection]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.wrapS.value=e.wrapS.value},[!!a,e.wrapS]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.wrapT.value=e.wrapT.value},[!!a,e.wrapT]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.useAlpha.value=e.useAlpha.value},[!!a,e.useAlpha]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.useAlphaInvert.value=e.useAlphaInvert.value},[e.useAlphaInvert]),u.useEffect(()=>{const r=a.material.uniforms.get(p);r.alphaThreshold.value=e.alphaThreshold.value},[!!a,e.alphaThreshold]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.uvOffset.value=new h(e.uvOffset.x.value+A.x.value,e.uvOffset.y.value+A.y.value)},[!!a,e.uvOffset,A]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.uvScale.value=new h(e.uvScale.x.value*_.x.value,e.uvScale.y.value*_.y.value)},[!!a,e.uvScale,_]),u.useEffect(()=>{if(!a)return;const r=a.material.uniforms.get(p);r.alphaUVOffset.value=e.alphaUVOffset.value},[!!a,e.alphaUVOffset]),u.useEffect(()=>{if(t!==n&&f)e.texture.get(p)!==f.get(p).texture&&e.texture.set(f.get(p).texture);else if(e.texture.get(p)!==g.get(p)){const r=re(n,M),v=J(n,H);v&&(v.element.currentTime=r.currentTrackTime),e.texture.set(g.get(p))}z(t,d)},[f==null?void 0:f.texture]),u.useEffect(()=>{if(!a||!n)return;if(!o){e.texture.value!==null&&e.texture.set(null);return}if(t!==n)return;const r=J(n,E),v=re(n,H),y=f==null?void 0:f.texture;if(e.texture.value)e.texture.value.image=v.element,z(t,d);else if(y&&r)a.material.set(r.material),z(t,d);else{const S=new Ne(v.element);return g.set(S),e.texture.set(S),d.uniqueVideoEntities.push(n),z(t,d),()=>{d.uniqueVideoEntities.includes(t)&&d.uniqueVideoEntities.splice(d.uniqueVideoEntities.indexOf(t),1)}}},[!!a,e.texture,e.mediaUUID,n,o]),null}const Re=B({name:"EE_generalAudio",jsonID:"EE_audio_general",schema:s.Object({mediaUUID:ce()}),onRemove:(t,e)=>{Q(t,M)},reactor:function(){const t=$();return u.useEffect(()=>{l(t,M)},[]),null}}),se=B({name:"PositionalAudioHelperComponent",schema:s.Object({name:s.String("positional-audio-helper"),entity:s.Entity()}),reactor:function(){const t=$(),e=X(t,fe),m=T(()=>{const c=D();l(c,P),l(c,G),l(c,V,{parentEntity:t}),l(c,E,new O(L(e.coneInnerAngle.value,e.maxDistance.value),new F({color:65280,transparent:!0,opacity:.4,side:I})));const n=D();l(n,P),l(n,G),l(n,V,{parentEntity:t}),l(n,E,new O(q(e.coneInnerAngle.value,e.maxDistance.value),new F({color:65280,transparent:!0,opacity:.4,side:I})));const i=D();l(i,P),l(i,G),l(i,V,{parentEntity:t}),l(i,E,new O(L(e.coneOuterAngle.value,e.maxDistance.value),new F({color:128,wireframe:!0,side:I})));const o=D();return l(o,P),l(o,G),l(o,V,{parentEntity:t}),l(o,E,new O(q(e.coneOuterAngle.value,e.maxDistance.value),new F({color:128,wireframe:!0,side:I}))),{innerConeEntity:c,innerCapEntity:n,outerConeEntity:i,outerCapEntity:o}}).value;return u.useEffect(()=>()=>{b(m.innerConeEntity),b(m.innerCapEntity),b(m.outerConeEntity),b(m.outerCapEntity)},[]),u.useEffect(()=>{const c=R(m.innerConeEntity,E),n=R(m.innerCapEntity,E);c.geometry.set(L(e.coneInnerAngle.value,e.maxDistance.value)),n.geometry.set(q(e.coneInnerAngle.value,e.maxDistance.value))},[e.coneInnerAngle.value,e.maxDistance.value]),u.useEffect(()=>{const c=R(m.outerConeEntity,E),n=R(m.outerCapEntity,E);c.geometry.set(L(e.coneOuterAngle.value,e.maxDistance.value)),n.geometry.set(q(e.coneOuterAngle.value,e.maxDistance.value))},[e.coneOuterAngle.value,e.maxDistance.value]),null}});function L(t,e){const m=Math.floor(t/30),n=Math.max(m,3)*4,i=ue.degToRad(t),o=e*Math.sin(i/2),g=Math.sqrt(e**2-o**2),f=new Ee(o,g,n,1,!0);return i<=Math.PI&&f.rotateX(Math.PI),f.translate(0,(i<=Math.PI?1:-1)*(g/2),0),f.rotateX(Math.PI/2),f}function q(t,e){const m=Math.floor(t/30),c=Math.max(m,3),n=ue.degToRad(t),i=c*4,o=[];for(let f=0;f<=c;f++){const U=Math.sin(f/c*n/2)*-e,A=Math.cos(f/c*n/2)*-e;o.push(new h(U,A))}const g=new ge(o,i);return g.rotateX(Math.PI),g.rotateX(Math.PI/2),g}const ze=s.LiteralUnion(["exponential","inverse","linear"],"inverse"),fe=B({name:"EE_positionalAudio",jsonID:"EE_audio",schema:s.Object({distanceModel:ze,rolloffFactor:s.Number(1),refDistance:s.Number(1),maxDistance:s.Number(40),coneInnerAngle:s.Number(360),coneOuterAngle:s.Number(360),coneOuterGain:s.Number(0)}),reactor:function(){const t=$(),e=xe(Se),m=k(t,Ce),c=e.nodeHelperVisibility.value||m!==void 0,n=X(t,fe),i=k(t,H);return u.useEffect(()=>{const o=we(t);o&&(l(o,Re),l(o,M))},[]),u.useEffect(()=>{if(c){const o=J(t,le);l(t,se,{name:o?`${o}-positional-audio-helper`:void 0})}return()=>{Q(t,se)}},[c,i==null?void 0:i.element,n.maxDistance,n.coneInnerAngle,n.coneOuterAngle]),u.useEffect(()=>{if(!(i!=null&&i.element.value))return;const o=Pe.get(i.element.value);o!=null&&o.panner&&(o.panner.refDistance=n.refDistance.value,o.panner.rolloffFactor=n.rolloffFactor.value,o.panner.maxDistance=n.maxDistance.value,o.panner.distanceModel=n.distanceModel.value,o.panner.coneInnerAngle=n.coneInnerAngle.value,o.panner.coneOuterAngle=n.coneOuterAngle.value,o.panner.coneOuterGain=n.coneOuterGain.value)},[n.refDistance,n.rolloffFactor,n.maxDistance,n.distanceModel,n.coneInnerAngle,n.coneOuterAngle,n.coneOuterGain]),null}});export{fe as P,d as V,Ke as a};
