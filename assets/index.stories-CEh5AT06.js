import{R as e,r as x}from"./index-CBqU2yxZ.js";import{t as u}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";const h=({disabled:a,label:s,name:o,onChange:l,value:c,description:t,defaultChecked:m})=>{const r=x.useId();return e.createElement("div",{className:"flex flex-col"},e.createElement("div",{className:"flex items-start gap-2"},e.createElement("div",{className:"mt-1 grid place-items-center"},e.createElement("input",{id:r,type:"radio",name:o,disabled:a,className:`
            focus:ring-primary-blue
            peer col-start-1
            row-start-1 h-4
            w-4 shrink-0 appearance-none rounded-full border-[1.5px]
            border-blue-500 focus:outline-none focus:ring-[0.5px] focus:ring-offset-0
            disabled:border-gray-400
          `,onChange:l,defaultChecked:m,value:c}),e.createElement("div",{className:u("pointer-events-none","col-start-1 row-start-1","h-2 w-2 rounded-full peer-checked:bg-blue-500","peer-checked:peer-disabled:bg-gray-400")})),e.createElement("label",{htmlFor:r,className:u("text-start hover:cursor-pointer",a&&"text-gray-400")},s)),t&&e.createElement("div",{className:"ml-6 text-sm text-gray-400"},t))},E=({disabled:a,name:s,onChange:o,options:l,horizontal:c,className:t,value:m})=>{const r=i=>o(i.currentTarget.value),b="radio-button-group";return e.createElement("div",{className:u(`grid gap-6 ${c?"grid-flow-col":""}`,t)},l.map(({label:i,value:d,description:v},N)=>e.createElement("div",{key:d,className:"flex items-center gap-2"},e.createElement(h,{name:s||b,disabled:a,label:i,onChange:r,value:d,description:v,defaultChecked:m===d}))))},C={title:"Primitives/Tailwind/Radio",component:E,parameters:{componentSubtitle:"Radio",jest:"Radio.test.tsx",design:{type:"figma",url:""}}},n={args:{options:[{name:"A1",value:"a1"},{name:"B2",value:"b2"},{name:"C3",value:"c3"}],currentValue:"b2",onChange:()=>{}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: [{
      name: 'A1',
      value: 'a1'
    }, {
      name: 'B2',
      value: 'b2'
    }, {
      name: 'C3',
      value: 'c3'
    }],
    currentValue: 'b2',
    onChange: () => {}
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,C as default};
