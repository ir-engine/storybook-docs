import{r as u}from"./index-qyj2ZBCg.js";import{a as h,V as w,o as fe,Q as X,g as C,Y as pe,j as W,s as me,t as ve,Z as de,k as ne,b as O,m as j,_ as he,$ as ge,M as ue}from"./three.module-BojvEzVe.js";import{c as I,N as m,d as Ee,u as ye}from"./ActionFunctions-YlXH-jZf.js";import{S as s,c as Y,r as Z,k as J,i as k,D as ae,u as Q,t as T,m as l,n as V,A as D,a as re,g as $,F as R,G as xe}from"./UUIDComponent-dOpSKvyI.js";import{i as we}from"./isMobile-mamjM31w.js";import{c as Me}from"./PriorityQueue-Cy4DVzR-.js";import{ah as B,a8 as b,M as g,h as le,ad as Se,e as z,T as G,b as Ae,$ as Ue}from"./resourceLoaderHooks-DMF90VYK.js";import{i as Ce}from"./XRState-dS474AYN.js";import{b as Oe,T as U}from"./NodeIDComponent-IlwVgG5l.js";import{N as Ie}from"./NodeFunctions-y4gH_-6n.js";import{S as Te,P as oe,r as Ve,g as De,e as be}from"./ImageComponent-DNzj7n0k.js";import{M as P,a as H,A as Pe}from"./MediaComponent-DHOWuIkr.js";new h;new w;new w;new w(0,0,-1);new fe;new w;new h;const Ne=a=>s.LiteralUnion(["cover","contain","vertical","horizontal"],a);new X().setFromAxisAngle(new w(0,1,0),Math.PI/2).multiply(new X().setFromAxisAngle(new w(0,1,0),Math.PI)).multiply(new X().setFromAxisAngle(new w(0,0,1),Math.PI/2));const Ze=Ee({name:"VideoTexturePriorityQueueState",initial:()=>({queue:Me({accumulationBudget:Ce||we?1:3})})});class _e extends de{constructor(e){super(e),this.minFilter=ne,this.magFilter=ne,this.generateMipmaps=!1}update(){}}const ie=s.LiteralUnion([me,W,ve],W),Fe=s.LiteralUnion(["Flat","Equirectangular360"],"Flat"),d=Y({name:"EE_video",jsonID:"EE_video",schema:s.Object({side:Te(O),size:U.Vec2(B),uvOffset:U.Vec2(),uvScale:U.Vec2(B),alphaUVOffset:U.Vec2(),wrapS:ie,wrapT:ie,useAlpha:s.Bool(!1),useAlphaInvert:s.Bool(!1),alphaThreshold:s.Number(.5),fit:Ne("contain"),projection:Fe,mediaUUID:Oe(),videoMeshEntity:s.NonSerialized(s.Entity()),currentVideoSize:s.NonSerialized(U.Vec2(B)),texture:s.NonSerialized(s.Nullable(s.Type()))}),onRemove:(a,e)=>{d.uniqueVideoEntities.includes(a)&&d.uniqueVideoEntities.splice(d.uniqueVideoEntities.indexOf(a),1),Z(a,P)},errors:["INVALID_MEDIA_UUID","MISSING_MEDIA_ELEMENT"],uniqueVideoEntities:[],reactor:je});function je(){const a=J(),e=k(a,d),p=ae(a,b),c=e.mediaUUID.value,t=Ie.useEntityFromNodeID(a,c)||a,i=Q(t,P),o=ae(t,H),E=I(null),f=Q(t,d),M=I(()=>{const r=T();return l(r,g,new C(oe(),new pe({uniforms:{map:{value:null},alphaMap:{value:null},uvOffset:{value:new h(0,0)},uvScale:{value:new h(1,1)},useAlpha:{value:!1},alphaThreshold:{value:.5},useAlphaInvert:{value:!1},alphaUVOffset:{value:new h(0,0)},wrapS:{value:W},wrapT:{value:W}},vertexShader:`
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
      `}))),r}).value;u.useEffect(()=>()=>{Z(M,g)},[]);const S=I(new h(0,0)),N=I(new h(1,1)),n=k(M,g);return u.useEffect(()=>{var v;const r=M;return e.videoMeshEntity.set(r),l(r,V,{parentEntity:a}),l(r,le,(v=n==null?void 0:n.name)==null?void 0:v.value),l(r,P),e.mediaUUID.set(""),()=>{D(r)}},[]),u.useEffect(()=>{n.name.set(`video-group-${a}`)},[!!n]),u.useEffect(()=>{Se(M,!!p)},[p]),u.useEffect(()=>{n.material.side.set(e.side.value)},[!!n,e.side]),u.useEffect(()=>{if(!i||!i.isCurrentTrackLoaded.value)return;const r=n.value;Ve(r);const v=new h(0,0),y=new h(1,1),A=De(r.material.uniforms.map.value);e.currentVideoSize.set(A);const _=A.x/A.y||1,K=e.size.value,[ee,te]=[K.x,K.y],F=ee/te;let x=!0;e.fit.value=="horizontal"&&(x=!0),e.fit.value=="vertical"&&(x=!1),e.fit.value=="contain"&&(_>F?x=!0:x=!1),e.fit.value=="cover"&&(_>F?x=!1:x=!0),x?(y.y=_/F,y.x=1,v.y=(1-y.y)/2):(y.x=1/_/(1/F),y.y=1,v.x=(1-y.x)/2),r.scale.x=ee,r.scale.y=te,S.set(v),N.set(y)},[!!n,e.size,e.fit,e.texture,n==null?void 0:n.material,i==null?void 0:i.isCurrentTrackLoaded]),u.useEffect(()=>{n.geometry.set(e.projection.value==="Flat"?oe():be()),n.geometry.attributes.position.needsUpdate.set(!0);const r=n.material.uniforms.get(m);r.map.value=e.texture.value;const v=n.material.defines.get(m);e.texture.value?v.USE_MAP="":delete v.USE_MAP,n.material.needsUpdate.set(!0)},[!!n,e.texture,e.projection]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.wrapS.value=e.wrapS.value},[!!n,e.wrapS]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.wrapT.value=e.wrapT.value},[!!n,e.wrapT]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.useAlpha.value=e.useAlpha.value},[!!n,e.useAlpha]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.useAlphaInvert.value=e.useAlphaInvert.value},[e.useAlphaInvert]),u.useEffect(()=>{const r=n.material.uniforms.get(m);r.alphaThreshold.value=e.alphaThreshold.value},[!!n,e.alphaThreshold]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.uvOffset.value=new h(e.uvOffset.x.value+S.x.value,e.uvOffset.y.value+S.y.value)},[!!n,e.uvOffset,S]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.uvScale.value=new h(e.uvScale.x.value*N.x.value,e.uvScale.y.value*N.y.value)},[!!n,e.uvScale,N]),u.useEffect(()=>{if(!n)return;const r=n.material.uniforms.get(m);r.alphaUVOffset.value=e.alphaUVOffset.value},[!!n,e.alphaUVOffset]),u.useEffect(()=>{if(a!==t&&f)e.texture.get(m)!==f.get(m).texture&&e.texture.set(f.get(m).texture);else if(e.texture.get(m)!==E.get(m)){const r=re(t,P),v=$(t,H);v&&(v.element.currentTime=r.currentTrackTime),e.texture.set(E.get(m))}z(a,d)},[f==null?void 0:f.texture]),u.useEffect(()=>{if(!n||!t)return;if(!o){e.texture.value!==null&&(E.set(null),e.texture.set(null),i==null||i.paused.set(!0));return}if(a!==t)return;const r=$(t,g),v=re(t,H),y=f==null?void 0:f.texture;if(e.texture.value)e.texture.value.image=v.element,z(a,d);else if(y&&r)n.material.set(r.material),z(a,d);else{const A=new _e(v.element);return E.set(A),e.texture.set(A),d.uniqueVideoEntities.push(t),z(a,d),()=>{d.uniqueVideoEntities.includes(a)&&d.uniqueVideoEntities.splice(d.uniqueVideoEntities.indexOf(a),1)}}},[!!n,e.texture,e.mediaUUID,t,o]),null}const se=Y({name:"PositionalAudioHelperComponent",schema:s.Object({name:s.String("positional-audio-helper"),entity:s.Entity()}),reactor:function(){const a=J(),e=k(a,ce),p=I(()=>{const c=T();l(c,b),l(c,G),l(c,V,{parentEntity:a}),l(c,g,new C(q(e.coneInnerAngle.value,e.maxDistance.value),new j({color:65280,transparent:!0,opacity:.4,side:O})));const t=T();l(t,b),l(t,G),l(t,V,{parentEntity:a}),l(t,g,new C(L(e.coneInnerAngle.value,e.maxDistance.value),new j({color:65280,transparent:!0,opacity:.4,side:O})));const i=T();l(i,b),l(i,G),l(i,V,{parentEntity:a}),l(i,g,new C(q(e.coneOuterAngle.value,e.maxDistance.value),new j({color:128,wireframe:!0,side:O})));const o=T();return l(o,b),l(o,G),l(o,V,{parentEntity:a}),l(o,g,new C(L(e.coneOuterAngle.value,e.maxDistance.value),new j({color:128,wireframe:!0,side:O}))),{innerConeEntity:c,innerCapEntity:t,outerConeEntity:i,outerCapEntity:o}}).value;return u.useEffect(()=>()=>{D(p.innerConeEntity),D(p.innerCapEntity),D(p.outerConeEntity),D(p.outerCapEntity)},[]),u.useEffect(()=>{const c=R(p.innerConeEntity,g),t=R(p.innerCapEntity,g);c.geometry.set(q(e.coneInnerAngle.value,e.maxDistance.value)),t.geometry.set(L(e.coneInnerAngle.value,e.maxDistance.value))},[e.coneInnerAngle.value,e.maxDistance.value]),u.useEffect(()=>{const c=R(p.outerConeEntity,g),t=R(p.outerCapEntity,g);c.geometry.set(q(e.coneOuterAngle.value,e.maxDistance.value)),t.geometry.set(L(e.coneOuterAngle.value,e.maxDistance.value))},[e.coneOuterAngle.value,e.maxDistance.value]),null}});function q(a,e){const p=Math.floor(a/30),t=Math.max(p,3)*4,i=ue.degToRad(a),o=e*Math.sin(i/2),E=Math.sqrt(e**2-o**2),f=new he(o,E,t,1,!0);return i<=Math.PI&&f.rotateX(Math.PI),f.translate(0,(i<=Math.PI?1:-1)*(E/2),0),f.rotateX(Math.PI/2),f}function L(a,e){const p=Math.floor(a/30),c=Math.max(p,3),t=ue.degToRad(a),i=c*4,o=[];for(let f=0;f<=c;f++){const M=Math.sin(f/c*t/2)*-e,S=Math.cos(f/c*t/2)*-e;o.push(new h(M,S))}const E=new ge(o,i);return E.rotateX(Math.PI),E.rotateX(Math.PI/2),E}const Re=s.LiteralUnion(["exponential","inverse","linear"],"inverse"),ce=Y({name:"EE_positionalAudio",jsonID:"EE_audio",schema:s.Object({distanceModel:Re,rolloffFactor:s.Number(1),refDistance:s.Number(1),maxDistance:s.Number(40),coneInnerAngle:s.Number(360),coneOuterAngle:s.Number(360),coneOuterGain:s.Number(0)}),reactor:function(){const a=J(),e=ye(Ae),p=Q(a,Ue),c=e.nodeHelperVisibility.value||p!==void 0,t=k(a,ce),i=Q(a,H);return u.useEffect(()=>{const o=xe(a);o&&l(o,P)},[]),u.useEffect(()=>{if(c){const o=$(a,le);l(a,se,{name:o?`${o}-positional-audio-helper`:void 0})}return()=>{Z(a,se)}},[c,i==null?void 0:i.element,t.maxDistance,t.coneInnerAngle,t.coneOuterAngle]),u.useEffect(()=>{if(!(i!=null&&i.element.value))return;const o=Pe.get(i.element.value);o!=null&&o.panner&&(o.panner.refDistance=t.refDistance.value,o.panner.rolloffFactor=t.rolloffFactor.value,o.panner.maxDistance=t.maxDistance.value,o.panner.distanceModel=t.distanceModel.value,o.panner.coneInnerAngle=t.coneInnerAngle.value,o.panner.coneOuterAngle=t.coneOuterAngle.value,o.panner.coneOuterGain=t.coneOuterGain.value)},[t.refDistance,t.rolloffFactor,t.maxDistance,t.distanceModel,t.coneInnerAngle,t.coneOuterAngle,t.coneOuterGain]),null}});export{ce as P,d as V,Ze as a};
