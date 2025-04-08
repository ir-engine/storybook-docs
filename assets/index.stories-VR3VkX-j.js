import{R as e}from"./index-qyj2ZBCg.js";import{G as M}from"./iconBase-DbqO1Qqb.js";import{o as H}from"./index-C7dBJiJ4.js";import{a as R,b as L,c as I}from"./index-B_qw5j69.js";import{a as G}from"./index-D1Us45ME.js";import{B as o}from"./index-CrXUOXRH.js";import{u as J}from"./useTranslation-Bu1POHqV.js";import{t as r}from"./tw-merge-Ds6tgvmq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./nonIterableRest-BM0MU4dZ.js";function O(n){return M({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"},child:[]}]})(n)}function S(n){return M({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"},child:[]}]})(n)}const D=({className:n,children:l,...t})=>{const a=r("text-text-primary","p-4","border border-[0.5px] border-ui-outline ",n);return e.createElement("th",{className:a,...t},l)},j=({theadClassName:n,className:l,children:t})=>{const a=r("text-left capitalize",l),m=r("sticky top-[-2px] z-10 bg-surface-2",n);return e.createElement("thead",{className:m},e.createElement("tr",{className:a},t))},C=({className:n,children:l,...t})=>{const a=r("p-4","border border-[0.5px] border-ui-outline ","text-left text-text-primary",n);return e.createElement("td",{className:a,...t},l)},A=({className:n,children:l,...t})=>{const a=r("bg-surface-3 even:bg-surface-4",n);return e.createElement("tr",{className:a,...t},l)},U=({className:n,children:l,...t})=>e.createElement("tbody",{className:n,...t},l),F=({containerClassName:n,className:l,children:t})=>{const a=r("relative w-full table-auto border-collapse overflow-scroll whitespace-nowrap text-sm",l);return e.createElement("div",{className:r("overflow-x-auto rounded-md",n)},e.createElement("table",{className:a},t))},V=({className:n,neighbours:l=1,totalPages:t,currentPage:a,onPageChange:m})=>{const{t:f}=J(),x=r("pt-4 text-sm font-medium text-text-secondary enabled:hover:text-text-primary"),E=r(x,"px-2 pt-5 enabled:text-text-primary"),i=r(x,"px-4"),z=r(i,"border-t-2 border-ui-primary text-ui-primary");a+1==t&&(l=Math.max(2,l));const p=[];for(let s=a-1;s>=Math.max(0,a-l);s--)p.push(s);p.reverse();const c=[];for(let s=a+1;s<Math.min(t,a+l+1);s++)c.push(s);return e.createElement("div",{className:"flex-column mb-2 flex flex-wrap items-center justify-center pt-10 md:flex-row"},e.createElement("ul",{className:"flex h-[38px] items-center justify-center"},e.createElement("li",null,e.createElement("button",{disabled:a===0,className:r(E,"mr-5"),onClick:()=>m(Math.max(0,a-1))},f("common:table.pagination.prev"))),p.map(s=>e.createElement("li",{key:s},e.createElement("button",{onClick:()=>m(s),className:i},s+1))),e.createElement("li",null,e.createElement("button",{onClick:()=>m(a),className:z},a+1)),c.map(s=>e.createElement("li",{key:s},e.createElement("button",{onClick:()=>m(s),className:i},s+1))),t>0&&c[c.length-1]<t-2&&e.createElement("li",null,e.createElement("button",{disabled:!0,className:i},"...")),t>0&&c[c.length-1]<t-1&&e.createElement(e.Fragment,null,e.createElement("li",{key:t},e.createElement("button",{onClick:()=>m(t-1),className:i},t))),e.createElement("li",null,e.createElement("button",{disabled:a===t-1,onClick:()=>m(Math.min(t-1,a+1)),className:r(E,"ml-5")},f("common:table.pagination.next")))))},_={},K=[{name:"Andy Levius",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"},{name:"xking@yahoo.com",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"},{name:"dhomas@outlook.com",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"},{name:"iramirez@icloud.com",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"},{name:"iharris@icloud.com",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"},{name:"nmitchell@yahoo.com",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"},{name:"qadams@aol.com",version:"0.1.2",commitHash:"56b1a80a",date:"Jan 6, 2023, 9:14 PM"}],$=["Name","Version","Commit Hash","Date","Actions"],q=["name","version","commitHash","date"],d=()=>e.createElement(F,null,e.createElement(j,null,$.map((n,l)=>e.createElement(D,{className:"border border-neutral-300 bg-neutral-100 p-2 text-left font-bold uppercase text-neutral-600",key:l},n))),e.createElement(U,{className:""},K.map((n,l)=>e.createElement(A,{className:`border-b ${l&1?"bg-gray-200":"bg-gray-100"}`,key:l},q.map((t,a)=>e.createElement(C,{className:"border border-neutral-300 p-3 text-left text-neutral-600",key:a},n[t])),e.createElement(C,{className:"border border-neutral-300 p-3 text-left text-neutral-600"},e.createElement("div",{className:"flex justify-evenly"},e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(S,null),e.createElement("span",null,"Update")),e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(O,null),e.createElement("span",null,"Push")),e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(H,null),e.createElement("span",null,"Repo")),e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(R,null),e.createElement("span",null,"Access")),e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(L,null),e.createElement("span",null,"Invalidate Cache")),e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(I,null),e.createElement("span",null,"View")),e.createElement(o,{size:"sm",className:"bg-[#61759f]"},e.createElement(G,null),e.createElement("span",null,"Remove")))))))),ne={title:"Primitives/Tailwind/Table",parameters:{componentSubtitle:"Table",design:{type:"figma",url:""}},argTypes:_},u={render:d},b={render:V,args:{currentPage:3,totalPages:5,onPageChange:()=>{}}};var N,y,h;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Table>
      <TableHeadRow>
        {headerLabels.map((label, index) => <TableHeaderCell className="border border-neutral-300 bg-neutral-100 p-2 text-left font-bold uppercase text-neutral-600" key={index}>
            {label}
          </TableHeaderCell>)}
      </TableHeadRow>
      <TableBody className="">
        {data.map((row, index) => <TableRow className={\`border-b \${index & 1 ? 'bg-gray-200' : 'bg-gray-100'}\`} key={index}>
            {dataKeys.map((key, index) => <TableCell className="border border-neutral-300 p-3 text-left text-neutral-600" key={index}>
                {row[key]}
              </TableCell>)}
            <TableCell className="border border-neutral-300 p-3 text-left text-neutral-600">
              <div className="flex justify-evenly">
                <Button size="sm" className="bg-[#61759f]">
                  <GrUpdate />
                  <span>Update</span>
                </Button>
                <Button size="sm" className="bg-[#61759f]">
                  <GrGithub />
                  <span>Push</span>
                </Button>
                <Button size="sm" className="bg-[#61759f]">
                  <HiLink />
                  <span>Repo</span>
                </Button>
                <Button size="sm" className="bg-[#61759f]">
                  <IoPeopleOutline />
                  <span>Access</span>
                </Button>
                <Button size="sm" className="bg-[#61759f]">
                  <IoTerminalOutline />
                  <span>Invalidate Cache</span>
                </Button>
                <Button size="sm" className="bg-[#61759f]">
                  <IoFolderOutline />
                  <span>View</span>
                </Button>
                <Button size="sm" className="bg-[#61759f]">
                  <RiDeleteBinLine />
                  <span>Remove</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>)}
      </TableBody>
    </Table>;
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,v,w;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: TableStory
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var g,k,B;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: TablePagination,
  args: {
    currentPage: 3,
    totalPages: 5,
    onPageChange: () => {}
  }
}`,...(B=(k=b.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const se=["TableStory","Default","Pagination"];export{u as Default,b as Pagination,d as TableStory,se as __namedExportsOrder,ne as default};
