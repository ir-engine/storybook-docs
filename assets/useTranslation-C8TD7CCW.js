import{_ as E,a as A,b as R,c as z,d as D,e as U}from"./nonIterableRest-Y-KoC6Zs.js";import{R as F,r as g}from"./index-CBqU2yxZ.js";var _={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},B,H=F.createContext();function W(){return _}var K=function(){function n(){A(this,n),this.usedNamespaces={}}return E(n,[{key:"addUsedNamespaces",value:function(t){var a=this;t.forEach(function(s){a.usedNamespaces[s]||(a.usedNamespaces[s]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),n}();function M(){return B}function J(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var P={};function S(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&P[e[0]]||(typeof e[0]=="string"&&(P[e[0]]=new Date),J.apply(void 0,e))}function j(n,e,t){n.loadNamespaces(e,function(){if(n.isInitialized)t();else{var a=function s(){setTimeout(function(){n.off("initialized",s)},0),t()};n.on("initialized",a)}})}function V(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.languages[0],s=e.options?e.options.fallbackLng:!1,u=e.languages[e.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var r=function(c,i){var p=e.services.backendConnector.state["".concat(c,"|").concat(i)];return p===-1||p===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(a,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(a,n)&&(!s||r(u,n)))}function Y(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return S("i18n.languages were undefined or empty",e.languages),!0;var a=e.options.ignoreJSONStructure!==void 0;return a?e.hasLoadedNamespace(n,{precheck:function(u,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!r(u.isLanguageChangingTo,n))return!1}}):V(n,e,t)}function q(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,s,u,r,d=[],c=!0,i=!1;try{if(u=(t=t.call(n)).next,e!==0)for(;!(c=(a=u.call(t)).done)&&(d.push(a.value),d.length!==e);c=!0);}catch(p){i=!0,s=p}finally{try{if(!c&&t.return!=null&&(r=t.return(),Object(r)!==r))return}finally{if(i)throw s}}return d}}function G(n,e){return R(n)||q(n,e)||z(n,e)||D()}function L(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,a)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?L(Object(t),!0).forEach(function(a){U(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Z(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,a=g.useContext(H)||{},s=a.i18n,u=a.defaultNS,r=t||s||M();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new K),!r){S("You will need to pass in an i18next instance by using initReactI18next");var d=function(l){return Array.isArray(l)?l[l.length-1]:l},c=[d,{},!1];return c.t=d,c.i18n={},c.ready=!1,c}r.options.react&&r.options.react.wait!==void 0&&S("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i=w(w(w({},W()),r.options.react),e),p=i.useSuspense,T=i.keyPrefix,o=u||r.options&&r.options.defaultNS;o=typeof o=="string"?[o]:o||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(o);var m=(r.isInitialized||r.initializedStoreOnce)&&o.every(function(f){return Y(f,r,i)});function h(){return r.getFixedT(null,i.nsMode==="fallback"?o:o[0],T)}var k=g.useState(h),C=G(k,2),I=C[0],N=C[1],v=g.useRef(!0);g.useEffect(function(){var f=i.bindI18n,l=i.bindI18nStore;v.current=!0,!m&&!p&&j(r,o,function(){v.current&&N(h)});function y(){v.current&&N(h)}return f&&r&&r.on(f,y),l&&r&&r.store.on(l,y),function(){v.current=!1,f&&r&&f.split(" ").forEach(function(O){return r.off(O,y)}),l&&r&&l.split(" ").forEach(function(O){return r.store.off(O,y)})}},[r,o.join()]);var x=g.useRef(!0);g.useEffect(function(){v.current&&!x.current&&N(h),x.current=!1},[r]);var b=[I,r,m];if(b.t=I,b.i18n=r,b.ready=m,m||!m&&!p)return b;throw new Promise(function(f){j(r,o,function(){f()})})}export{Z as u};
