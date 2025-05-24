import{R as S}from"./index-DPzuYzxM.js";import"./_commonjsHelpers-C4iS2aBk.js";const e=({className:oe,showLabels:ne,buttonSize:ce,toggleDetecting:ie,toggleWebcam:de,videoStatus:ge,detectingStatus:ue,isRecording:me,recordingStatus:pe,onToggleRecording:le,cycleCamera:Se})=>S.createElement(S.Fragment,null);e.defaultProps={className:"",showLabels:!1,buttonSize:"md",toggleDetecting:()=>{},toggleWebcam:()=>{},videoStatus:"loading",detectingStatus:"inactive",isRecording:!1,recordingStatus:void 0,onToggleRecording:()=>{},cycleCamera:()=>{}};const te={},ve={title:"Capture/Toolbar",component:e,parameters:{componentSubtitle:"Toolbar",jest:"Toolbar.test.tsx",design:{type:"figma",url:""}},argTypes:te},s={args:e.defaultProps},t={args:{...e.defaultProps,showLabels:!0}},o={args:{...e.defaultProps,buttonSize:"sm"}},n={args:{...e.defaultProps}},c={args:{...e.defaultProps,buttonSize:"lg"}},i={args:{...e.defaultProps,videoStatus:"loading"}},d={args:{...e.defaultProps,videoStatus:"ready"}},a={args:{...e.defaultProps,videoStatus:"active"}},g={args:{...a.args,detectingStatus:"loading"}},u={args:{...a.args,detectingStatus:"inactive"}},r={args:{...a.args,detectingStatus:"active",recordingStatus:"ready"}},m={args:{...r.args,recordingStatus:"inactive",detectingStatus:"inactive",isRecording:!1}},p={args:{...r.args,recordingStatus:"ready",isRecording:!1}},l={args:{...r.args,recordingStatus:"active",isRecording:!0}};var f,P,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: Component.defaultProps
}`,...(v=(P=s.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var R,C,b;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps,
    showLabels: true
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var y,L,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps,
    buttonSize: 'sm'
  }
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var T,h,w;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var z,B,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps,
    buttonSize: 'lg'
  }
}`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var x,M,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps,
    videoStatus: 'loading'
  }
}`,...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var A,E,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps,
    videoStatus: 'ready'
  }
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var N,W,j;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Component.defaultProps,
    videoStatus: 'active'
  }
}`,...(j=(W=a.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var F,k,q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...CameraOn.args,
    detectingStatus: 'loading'
  }
}`,...(q=(k=g.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var H,I,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...CameraOn.args,
    detectingStatus: 'inactive'
  }
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,U;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...CameraOn.args,
    detectingStatus: 'active',
    recordingStatus: 'ready'
  }
}`,...(U=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...PoseDetecting.args,
    recordingStatus: 'inactive',
    detectingStatus: 'inactive',
    isRecording: false
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...PoseDetecting.args,
    recordingStatus: 'ready',
    isRecording: false
  }
}`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,se;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...PoseDetecting.args,
    recordingStatus: 'active',
    isRecording: true
  }
}`,...(se=(re=l.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Re=["Default","ShowLabels","ButtonsSM","ButtonsMD","ButtonsLG","CameraLoading","CameraReady","CameraOn","PoseLoading","PoseReady","PoseDetecting","RecordingLoading","RecordingReady","RecordingActive"];export{c as ButtonsLG,n as ButtonsMD,o as ButtonsSM,i as CameraLoading,a as CameraOn,d as CameraReady,s as Default,r as PoseDetecting,g as PoseLoading,u as PoseReady,l as RecordingActive,m as RecordingLoading,p as RecordingReady,t as ShowLabels,Re as __namedExportsOrder,ve as default};
