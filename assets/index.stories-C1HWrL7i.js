import{f as C,d as E}from"./ZoomOutSm-BKYTao-C.js";import{R as e}from"./index-DPzuYzxM.js";import{I as P}from"./index-CvvRAf94.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./index-DNUDjAZy.js";import"./index-BmZLy_Eh.js";import"./index-DYLXRpC5.js";import"./tw-merge-Ds6tgvmq.js";const W=["xs","l","xl"],L={size:{control:{type:"select"},options:W},fullWidth:{control:{type:"boolean"}},state:{control:{type:"select"},options:["success","error"]},disabled:{control:{type:"boolean"}},helperText:{control:{type:"text"}},labelText:{control:{type:"text"}},labelPosition:{control:{type:"select"},options:["top","left"]},infoText:{control:{type:"text"}},required:{control:{type:"boolean"}}},B={title:"Primitives/Tailwind/Input",component:P,parameters:{componentSubtitle:"Input",design:{type:"figma",url:"https://www.figma.com/design/ln2VDACenFEkjVeHkowxyi/iR-Engine-Design-Library-File?node-id=2105-17763"}},argTypes:L},l=n=>{const A={...n,labelProps:{text:n.labelText,position:n.labelPosition,infoText:n.infoText}},[R,w]=e.useState(n.value),V=S=>{w(S.target.value)};return e.createElement("div",{className:"grid h-[50vh] w-full place-items-center rounded border border-gray-300 p-5"},e.createElement(P,{...A,value:R,onChange:V}))},t=l.bind({});t.args={value:"ir@infinityreality.com",placeholder:"Email Address",size:"l"};const a=l.bind({});a.args={value:"ir@infinityreality.com",fullWidth:!0,placeholder:"Email Address",size:"l"};const r=l.bind({});r.args={value:"ir@infinityreality.com",placeholder:"Email Address",startComponent:e.createElement(C,null),size:"l"};const s=l.bind({});s.args={value:"ir@infinityreality.com",placeholder:"Email Address",endComponent:e.createElement("button",null,e.createElement(E,null)),size:"l"};const o=l.bind({});o.args={value:"ir@infinityreality.com",placeholder:"Email Address",startComponent:e.createElement(C,null),endComponent:e.createElement("button",null,e.createElement(E,null)),size:"l"};var i,u,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  // @ts-ignore
  const updatedArgs: InputProps = {
    ...args,
    labelProps: {
      text: args.labelText,
      position: args.labelPosition,
      infoText: args.infoText
    }
  };
  const [value, setValue] = React.useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <div className="grid h-[50vh] w-full place-items-center rounded border border-gray-300 p-5">
      <Input {...updatedArgs} value={value} onChange={handleChange} />
    </div>;
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  // @ts-ignore
  const updatedArgs: InputProps = {
    ...args,
    labelProps: {
      text: args.labelText,
      position: args.labelPosition,
      infoText: args.infoText
    }
  };
  const [value, setValue] = React.useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <div className="grid h-[50vh] w-full place-items-center rounded border border-gray-300 p-5">
      <Input {...updatedArgs} value={value} onChange={handleChange} />
    </div>;
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,h,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  // @ts-ignore
  const updatedArgs: InputProps = {
    ...args,
    labelProps: {
      text: args.labelText,
      position: args.labelPosition,
      infoText: args.infoText
    }
  };
  const [value, setValue] = React.useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <div className="grid h-[50vh] w-full place-items-center rounded border border-gray-300 p-5">
      <Input {...updatedArgs} value={value} onChange={handleChange} />
    </div>;
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  // @ts-ignore
  const updatedArgs: InputProps = {
    ...args,
    labelProps: {
      text: args.labelText,
      position: args.labelPosition,
      infoText: args.infoText
    }
  };
  const [value, setValue] = React.useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <div className="grid h-[50vh] w-full place-items-center rounded border border-gray-300 p-5">
      <Input {...updatedArgs} value={value} onChange={handleChange} />
    </div>;
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,T,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  // @ts-ignore
  const updatedArgs: InputProps = {
    ...args,
    labelProps: {
      text: args.labelText,
      position: args.labelPosition,
      infoText: args.infoText
    }
  };
  const [value, setValue] = React.useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <div className="grid h-[50vh] w-full place-items-center rounded border border-gray-300 p-5">
      <Input {...updatedArgs} value={value} onChange={handleChange} />
    </div>;
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const j=["Default","FullWidth","InputWithLeadingIcon","InputWithTrailingIcon","InputWithBothIcons"];export{t as Default,a as FullWidth,o as InputWithBothIcons,r as InputWithLeadingIcon,s as InputWithTrailingIcon,j as __namedExportsOrder,B as default};
