import{V as c,a as f,Q as n,l as p,k as V}from"./three.module-D2RMN07C.js";const s=Math.PI,a=s/2,Q=Object.freeze(new c(0,0,0)),z=Object.freeze(new c(1,0,0)),M=Object.freeze(new c(-1,0,0)),i=Object.freeze(new c(0,1,0)),u=Object.freeze(new c(0,-1,0)),A=Object.freeze(new c(0,0,1)),I=Object.freeze(new c(0,0,-1)),d=Object.freeze(new c(1,1,1)),L=Object.freeze(new f(0,0));Object.freeze(new f(1,0));Object.freeze(new f(-1,0));Object.freeze(new f(0,1));Object.freeze(new f(0,-1));Object.freeze(new f(1,1));const P=Object.freeze(new n);Object.freeze(new p().identity());const k=Object.freeze(new V().identity());Object.freeze(new n().setFromAxisAngle(z,a));Object.freeze(new n().setFromAxisAngle(i,a));Object.freeze(new n().setFromAxisAngle(A,a));Object.freeze(new n().setFromAxisAngle(z,s));const Y=Object.freeze(new n().setFromAxisAngle(i,s));Object.freeze(new n().setFromAxisAngle(A,s));Object.freeze(new n().setFromAxisAngle(z,s+a));Object.freeze(new n().setFromAxisAngle(i,s+a));Object.freeze(new n().setFromAxisAngle(A,s+a));const h={Right:z,Left:M,Up:i,Down:u,Forward:I,Backward:A};Object.freeze(h);const B=(e,t,r)=>e+(t-e)*r,E=(e,t,r)=>e<t?t:e>r?r:e,N=(e,t,r,O,x,F=1/0)=>{O=Math.max(1e-4,O);let l=2/O,o=l*x,_=1/(1+o+.48*o*o+.235*o*o*o),w=e-t,b=t,g=F*O;w=Math.min(Math.max(w,-g),g),t=e-w;let m=(r.value+l*w)*x;r.value=(r.value-l*m)*_;let j=t+(w+m)*_;return b-e>0==j>b&&(j=b,r=(j-b)/x),j};function R(e,t){return 1-Math.pow(e,t)}function U(e){return e*e*e*(e*(e*6-15)+10)}export{k as M,h as O,s as P,P as Q,L as V,z as a,Q as b,i as c,E as d,d as e,Y as f,A as g,U as h,N as i,B as l,R as s};
