function h(s,n){const i=1/n;return Math.round(s*i)/i}function o(...s){const n="/";return s.map((i,e)=>{if(e===0)for(;i.endsWith(n);)i=i.substring(0,i.length-1);else if(e===s.length-1){if(i)for(;i.startsWith(n);)i=i.substring(1)}else if(i){for(;i.startsWith(n);)i=i.substring(1);for(;i.endsWith(n);)i=i.substring(0,i.length-1)}return i}).join(n)}export{o as p,h as t};
