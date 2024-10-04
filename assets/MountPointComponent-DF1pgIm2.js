var Zt=Object.defineProperty;var $t=(t,e,o)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var yt=(t,e,o)=>($t(t,typeof e!="symbol"?e+"":e,o),o);import{r as j}from"./index-CBqU2yxZ.js";import{V as c,al as te,Q as h,am as ee,i as oe,g as ne,k as U,E as ae}from"./three.module-D2RMN07C.js";import{c as W,S as f,e as at,f as Vt,T as ie,s as it,r as st,U as d,b as i,o as rt,p as v,l as se,E as F,h as O,x as vt,k as re}from"./index-_wFD3GG2.js";import{c as Ht,b as k,a as Kt,g as p,e as S,d as ce,m as le,n as me,u as pe}from"./ActionFunctions-CxzuxLxN.js";import{aA as ct,k as M,aB as ue,aC as lt,aD as g,ae as Nt,e as de,f as ge,R as Gt,aE as fe,N as ye,z as m,aF as ve,aG as E,aH as wt,aI as Qt,w as Lt,n as we,t as mt,h as A,aJ as Ae,l as Ce,aK as Me,aL as z,aM as q,aN as Se,aO as _t,aP as he,aQ as ke,aR as Ee,s as Pe,aS as At,aT as jt,a0 as be}from"./EditorServices-BJKHmurs.js";import{A as Ct}from"./ArrowHelperComponent-C9MpZgBb.js";import{c as V,O as zt,b as x,s as Te}from"./MathLerpFunctions-CYXVD2J2.js";import{X as y}from"./XRState-BS8ja_cl.js";const N={type:ct.Closest,origin:new c,direction:new c(0,-1,0),maxDistance:2,groups:0};function Re(t,e,o=!0,n=new c(0,-1,0)){const a=o?M.Ground:ue,s=lt(M.Avatars,a);N.direction.copy(n),N.origin.copy(e),N.groups=s;const r=g.castRay(t,N);let l=!1,u=null;return r.length>0&&(u=r[0],(o||u.normal.y>.9)&&(l=!0)),{positionValid:l,raycastHit:u}}const tt=W({name:"AxesHelperComponent",schema:f.Object({name:f.String("axes-helper"),size:f.Number(1),layerMask:f.Number(Nt.NodeHelper),entity:f.Optional(f.Entity())}),reactor:function(){const t=at(),e=Vt(t,tt),[o]=de(te,t,e.size.value);return ge(t,e,o,e.layerMask.value),null}}),Ie=W({name:"AvatarHeadDecapComponent"}),De=W({name:"AvatarIKTargetComponent",schema:{blendWeight:ie.f64},reactor:function(){const t=at(),e=Ht(k(Gt).avatarDebug);return j.useEffect(()=>(e.value&&it(t,tt,{name:"avatar-ik-helper",size:.5,layerMask:Nt.AvatarHelper}),()=>{st(t,tt)}),[e]),null},getTargetEntity:(t,e)=>d.getEntityByUUID(t+e)}),X=new c,Z=new h,ro=(t,e)=>{var s;const o=i(t,fe),n=(s=ye.entitiesByName[o.ownerId+"_"+e])==null?void 0:s[0];if(n&&De.blendWeight[n]>0)return i(n,m);const a=rt(t,ve);if(!(a!=null&&a.rawRig))return i(t,m);switch(e){case"left":return{position:a.rawRig.leftHand.node.getWorldPosition(X),rotation:a.rawRig.leftHand.node.getWorldQuaternion(Z)};case"right":return{position:a.rawRig.rightHand.node.getWorldPosition(X),rotation:a.rawRig.rightHand.node.getWorldQuaternion(Z)};default:case"none":return{position:a.rawRig.head.node.getWorldPosition(X),rotation:a.rawRig.head.node.getWorldQuaternion(Z)}}},xe=lt(M.Avatars,M.Ground|M.Default),I={type:ct.Closest,origin:new c,direction:new c,maxDistance:250,groups:xe},co=t=>{const e=i(t,E),o=k(P);if(e.gamepadLocalInput.lengthSq()>0)return;const n=g.getWorld(t);if(!n)return;const a=wt.getPointersForCamera(v.instance.viewerEntity)[0];if(!a)return;const s=i(a,wt).position,r=g.castRayFromCamera(n,i(v.instance.cameraEntity,Qt),s,I);if(!r.length)return;const l=new c(r[0].normal.x,r[0].normal.y,r[0].normal.z);if(!Ve(t,l,r[0].position,n))return;const u=r[0].position;o.walkTarget.set(u),Fe(l)},P=Kt({name:"autopilotMarkerState",initial:()=>({markerEntity:null,walkTarget:null})}),Ue=()=>{const t=k(P),e=new ee(.175,.175,.05,24,1),o=new oe({color:"#FFF"}),n=new ne(e,o),a=se();we(a,n),t.markerEntity.set(a)},We=(t=4,e=.2,o=10)=>{const n=p(P).markerEntity,a=p(F).elapsedSeconds,s=e*(t+Math.sin(o*a));i(n,m).scale.set(s,1,s)};async function Fe(t){const e=p(P);if(!e.walkTarget)return;e.markerEntity||Ue();const o=e.markerEntity;Lt(o,!0);const n=new h().setFromUnitVectors(V,t),a=i(o,m);a.position.copy(e.walkTarget),a.rotation.copy(n)}const Oe=.45,Mt=new c,Ve=(t,e,o,n)=>{const a=i(t,m);I.origin.copy(a.position).setY(a.position.y+1.5),I.direction.copy(o).sub(I.origin);const s=g.castRay(n,I);return Mt.copy(s[0].position).sub(o),e.dot(V)>Oe&&Mt.lengthSq()<.5},St=()=>{const t=k(P);t.walkTarget.set(null),t.markerEntity.value&&Lt(t.markerEntity.value,!1)},He=.5,et=1,Ke=1.05,G={type:ct.Closest,origin:new c,direction:zt.Down,maxDistance:et+He,groups:0},ht=new c,kt=new h,Et=new c,C=new c,T=new c,Ne=new c,Pt=new c,Q=new c;let L=!1;function qt(t,e){const o=p(y).xrFrame;if(!t||!o&&!e)return;const n=i(t,Ae).colliderEntity,a=i(n,Ce),s=p(y),r=i(t,A),l=i(t,E),u=i(t,mt).eyeHeight,H=i(v.instance.localFloorEntity,m);C.copy(x);const K=y.isCameraAttachedToAvatar,Jt=y.isMovementControlsEnabled;if(K){const w=s.viewerPose;Pt.set(0,u,.25).applyQuaternion(r.targetKinematicRotation).add(r.targetKinematicPosition),w&&T.copy(w.transform.position).multiplyScalar(1/y.worldScale).applyMatrix4(H.matrix).sub(Pt),T.y=0,C.copy(T)}else T.copy(x);const Yt=l.movementCaptured.length,Xt=O(t,Me),b=g.getWorld(t);if(!Jt||Yt||!Xt||!b){r.targetKinematicPosition.copy(r.position).add(C),ot(t);return}e&&C.add(e);const dt=lt(a.collisionLayer,a.collisionMask&~M.Trigger);g.computeColliderMovement(b,t,n,C,dt),g.getComputedMovement(b,t,Q),C.y===0&&(Q.y=0),r.targetKinematicPosition.copy(r.position).add(Q),G.origin.copy(r.targetKinematicPosition),G.groups=dt,G.origin.y+=et;const gt=g.castRay(b,G);if(l.isInAir=!0,gt.length){const w=gt[0],ft=g.getControllerOffset(b,t);l.isInAir=w.distance>et+ft*10,l.isInAir||(r.targetKinematicPosition.y=w.position.y+ft),l.isInAir&&!L&&(S(z.setAnimationState({animationAsset:q.locomotion,clipName:"Fall",loop:!0,layer:1,entityUUID:i(t,d)})),L=!0),w.distance<=Ke&&(L&&S(z.setAnimationState({animationAsset:q.locomotion,clipName:"Fall",loop:!0,layer:1,needsSkip:!0,entityUUID:i(t,d)})),L=!1,K&&(H.position.y=w.position.y))}l.isInAir||(l.verticalVelocity=0),K?Bt(t,Ne.subVectors(Q,T)):ot(t)}const Bt=(t,e)=>{i(v.instance.localFloorEntity,m).position.add(e),Se(),ot(t)},bt=new c,Ge=.5*.5,Tt=new c,_=new c,lo=t=>{const e=p(F).simulationTimestep/1e3,o=p(P),n=rt(t,E);if(!n||!o.walkTarget)return;if(n.gamepadLocalInput.lengthSq()>0||n.isJumping||n.isInAir){St(),_.set(0,0,0);return}We();const a=i(t,m).position;Tt.copy(o.walkTarget);const s=Tt.sub(a),r=s.lengthSq(),l=p(_t),u=n.isWalking?l.walkSpeed:l.runSpeed;s.normalize().multiplyScalar(e*u).setY(s.y*1.25),_.lerp(s,e*10),r>Ge?qt(t,_):(St(),_.set(0,0,0))},mo=t=>{if(!t)return;const e=i(v.instance.cameraEntity,Qt),o=p(F).simulationTimestep/1e3,n=i(t,E),a=p(_t),s=n.isWalking?a.walkSpeed:a.runSpeed;e.getWorldDirection(ht).setY(0).normalize(),kt.setFromUnitVectors(zt.Forward,ht),Et.copy(n.gamepadLocalInput).multiplyScalar(s*o).applyQuaternion(kt),n.gamepadWorldMovement.lerp(Et,5*o),Qe(n,a),n.movementCaptured.length||(n.verticalVelocity-=9.81*o);const r=n.verticalVelocity*o;bt.set(n.gamepadWorldMovement.x,n.isInAir||r>0?r:0,n.gamepadWorldMovement.z),qt(t,bt)},Qe=(t,e)=>{t.isInAir?t.isJumping=!1:(t.verticalVelocity=0,t.gamepadJumpActive?t.isJumping||(t.verticalVelocity=Math.sqrt(2*e.jumpHeight*9.81),t.isJumping=!0):t.isJumping&&(t.isJumping=!1))};new U;new c;const Rt=new U,It=new U,po=(t,e,o)=>{const n=i(t,A);if(n.targetKinematicPosition.add(e),n.targetKinematicRotation.multiply(o),y.isCameraAttachedToAvatar){const s=i(t,m),r=i(v.instance.localFloorEntity,m);It.copy(s.matrix).invert().multiply(r.matrix),Rt.compose(n.targetKinematicPosition,n.targetKinematicRotation,s.scale),r.matrix.multiplyMatrices(Rt,It),r.matrix.decompose(r.position,r.rotation,r.scale),ke()}nt=!0},ot=t=>{const e=g.getWorld(t);if(!e)return;const o=i(t,A),n=i(t,m);o.previousPosition.copy(o.targetKinematicPosition),o.position.copy(o.targetKinematicPosition),n.position.copy(o.targetKinematicPosition),g.setKinematicRigidbodyPose(e,t,o.targetKinematicPosition,o.rotation),delete m.dirtyTransforms[t]},$=new h,Dt=new ae,xt=new h;let nt=!1;const Le=t=>{const e=i(t,A),o=p(y).viewerPose,n=i(t,m);if(!o)return;const a=i(v.instance.localFloorEntity,m),s=o.transform.orientation;$.set(s.x,s.y,s.z,s.w).premultiply(a.rotation);const r=new c(0,0,1).applyQuaternion($).setY(0),l=new c(0,0,-1).applyQuaternion(e.targetKinematicRotation).setY(0);(r.angleTo(l)>Math.PI/12||nt==!0)&&(Dt.setFromQuaternion($,"YXZ"),xt.setFromAxisAngle(V,Dt.y+Math.PI),nt=!1),n.rotation.slerp(xt,5*p(F).deltaSeconds)},uo=t=>{if(y.isCameraAttachedToAvatar)Le(t);else{const e=p(F).deltaSeconds,o=Te(.005,e);O(t,Ie)?qe(t,o):Be(t,o)}},_e=(t,e,o=!1)=>{if(!O(t,mt)){console.warn("Teleport avatar called on non-avatar entity");return}const n=e.clone();n.y+=.1;const a=g.getWorld(t);if(!a)return;const{raycastHit:s}=Re(a,n,!1);if(s||o){const r=i(t,m),l=i(t,A),u=s?s.position:e;l.targetKinematicPosition.copy(u),l.position.copy(u),y.isCameraAttachedToAvatar&&Bt(t,new c().subVectors(u,r.position))}},je=new c,ze=new U,Ut=new U,B=new h,qe=(t,e)=>{const o=i(t,A);if(!o)return;const n=i(v.instance.cameraEntity,m).rotation,a=je.set(0,0,1).applyQuaternion(n).setComponent(1,0);B.setFromRotationMatrix(ze.lookAt(x,a,V)),o.targetKinematicRotation.slerp(B,e)},R=new c,Wt=new Map,Be=(t,e)=>{const o=i(t,A);if(!o)return;const n=o.linearVelocity;let a=Wt.get(t);a||(a=new c(0,0,1).applyQuaternion(p(he)[i(t,d)].spawnRotation),Wt.set(t,a)),R.set(n.x,0,n.z);const s=R.distanceTo(x)<.1;s&&R.copy(a),s||a.copy(R),Ut.lookAt(R,x,V),B.setFromRotationMatrix(Ut),o.targetKinematicRotation.slerp(B,e)};class Y{}yt(Y,"mountInteraction",ce({type:"ee.engine.interactions.MOUNT",mounted:le.boolean,targetMount:vt,mountedEntity:vt,$topic:Ee.world}));const J=Kt({name:"MountPointState",initial:{},receptors:{onMountInteraction:Y.mountInteraction.receive(t=>{const e=k(J);t.mounted?e[t.targetMount].merge(t.mountedEntity):e[t.targetMount].set(me)})}}),D=W({name:"SittingComponent",schema:f.Object({mountPointEntity:f.Entity()})}),pt={seat:"seat"},Je=f.LiteralUnion(Object.values(pt),"seat"),Ye={[pt.seat]:"Press E to Sit"},Ft="mountEntity",Ot=(t,e)=>{if(t===re||p(J)[i(e,d)])return;const n=i(t,d),a=rt(e,ut);if(!a||a.type!==pt.seat)return;const s=i(e,d);p(J)[s]||O(t,D)||(it(t,D,{mountPointEntity:e}),E.captureMovement(t,e),S(z.setAnimationState({animationAsset:q.emotes,clipName:jt.seated,loop:!0,layer:1,entityUUID:n})),S(Y.mountInteraction({mounted:!0,mountedEntity:i(t,d),targetMount:i(e,d)})))},Xe=t=>{if(!O(t,D))return;S(z.setAnimationState({animationAsset:q.emotes,clipName:jt.seated,needsSkip:!0,entityUUID:i(t,d)}));const e=i(t,D);E.releaseMovement(t,e.mountPointEntity),S(Y.mountInteraction({mounted:!1,mountedEntity:i(t,d),targetMount:i(e.mountPointEntity,d)}));const o=i(e.mountPointEntity,m),n=i(e.mountPointEntity,ut),a=new c().copy(n.dismountOffset).applyMatrix4(o.matrixWorld);_e(t,a),st(t,D)},ut=W({name:"MountPointComponent",jsonID:"EE_mount_point",schema:f.Object({type:Je,dismountOffset:f.Vec3({x:0,y:0,z:.75})}),mountEntity:Ot,unmountEntity:Xe,mountCallbackName:Ft,mountPointInteractMessages:Ye,reactor:function(){const t=at(),e=Ht(k(Gt).nodeHelperVisibility);Vt(t,ut);const o=pe(J);return j.useEffect(()=>{Pe(t,Ft,()=>Ot(mt.getSelfAvatarEntity(),t))},[]),j.useEffect(()=>{const n=i(t,be);n&&(n.uiVisibilityOverride=o[i(t,d)].value?At.off:At.none)},[o]),j.useEffect(()=>(e.value&&it(t,Ct,{name:"mount-point-helper"}),()=>{st(t,Ct)}),[e]),null}});export{De as A,ut as M,D as S,pt as a,mo as b,lo as c,co as d,Ie as e,Re as f,_e as g,ro as h,Bt as i,qt as m,po as t,uo as u};
