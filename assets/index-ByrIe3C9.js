var Yu=e=>{throw TypeError(e)};var rs=(e,t,n)=>t.has(e)||Yu("Cannot "+n);var E=(e,t,n)=>(rs(e,t,"read from private field"),n?n.call(e):t.get(e)),Q=(e,t,n)=>t.has(e)?Yu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),z=(e,t,n,r)=>(rs(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ee=(e,t,n)=>(rs(e,t,"access private method"),n);var ga=(e,t,n,r)=>({set _(o){z(e,t,o,n)},get _(){return E(e,t,r)}});function jm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gd={exports:{}},ki={},Kd={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),Rm=Symbol.for("react.portal"),Nm=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Lm=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),Im=Symbol.for("react.context"),Hm=Symbol.for("react.forward_ref"),Fm=Symbol.for("react.suspense"),Jm=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),Zu=Symbol.iterator;function zm(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Yd={};function eo(e,t,n){this.props=e,this.context=t,this.refs=Yd,this.updater=n||Xd}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zd(){}Zd.prototype=eo.prototype;function Ol(e,t,n){this.props=e,this.context=t,this.refs=Yd,this.updater=n||Xd}var zl=Ol.prototype=new Zd;zl.constructor=Ol;Qd(zl,eo.prototype);zl.isPureReactComponent=!0;var ec=Array.isArray,ep=Object.prototype.hasOwnProperty,Dl={current:null},tp={key:!0,ref:!0,__self:!0,__source:!0};function np(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)ep.call(t,r)&&!tp.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:aa,type:e,key:a,ref:i,props:o,_owner:Dl.current}}function Dm(e,t){return{$$typeof:aa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===aa}function Mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tc=/\/+/g;function os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mm(""+e.key):t.toString(36)}function Oa(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case aa:case Rm:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+os(i,0):r,ec(o)?(n="",e!=null&&(n=e.replace(tc,"$&/")+"/"),Oa(o,t,n,"",function(u){return u})):o!=null&&(Ml(o)&&(o=Dm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(tc,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ec(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+os(a,s);i+=Oa(a,t,n,l,o)}else if(l=zm(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+os(a,s++),i+=Oa(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function va(e,t,n){if(e==null)return e;var r=[],o=0;return Oa(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},za={transition:null},Um={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:za,ReactCurrentOwner:Dl};function rp(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:va,forEach:function(e,t,n){va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return va(e,function(){t++}),t},toArray:function(e){return va(e,function(t){return t})||[]},only:function(e){if(!Ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=eo;B.Fragment=Nm;B.Profiler=Lm;B.PureComponent=Ol;B.StrictMode=Am;B.Suspense=Fm;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;B.act=rp;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qd({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Dl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ep.call(t,l)&&!tp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:aa,type:e.type,key:o,ref:a,props:r,_owner:i}};B.createContext=function(e){return e={$$typeof:Im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_m,_context:e},e.Consumer=e};B.createElement=np;B.createFactory=function(e){var t=np.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Hm,render:e}};B.isValidElement=Ml;B.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:Bm}};B.memo=function(e,t){return{$$typeof:Jm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=za.transition;za.transition={};try{e()}finally{za.transition=t}};B.unstable_act=rp;B.useCallback=function(e,t){return He.current.useCallback(e,t)};B.useContext=function(e){return He.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return He.current.useDeferredValue(e)};B.useEffect=function(e,t){return He.current.useEffect(e,t)};B.useId=function(){return He.current.useId()};B.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return He.current.useMemo(e,t)};B.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};B.useRef=function(e){return He.current.useRef(e)};B.useState=function(e){return He.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return He.current.useTransition()};B.version="18.3.1";Kd.exports=B;var w=Kd.exports;const A=Vd(w),Wm=jm({__proto__:null,default:A},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=w,qm=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),Gm=Object.prototype.hasOwnProperty,Km=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xm={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Gm.call(t,r)&&!Xm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:qm,type:e,key:a,ref:i,props:o,_owner:Km.current}}ki.Fragment=Vm;ki.jsx=op;ki.jsxs=op;Gd.exports=ki;var v=Gd.exports,ap={exports:{}},Ke={},ip={exports:{}},sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,j){var I=k.length;k.push(j);e:for(;0<I;){var M=I-1>>>1,J=k[M];if(0<o(J,j))k[M]=j,k[I]=J,I=M;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var j=k[0],I=k.pop();if(I!==j){k[0]=I;e:for(var M=0,J=k.length,X=J>>>1;M<X;){var G=2*(M+1)-1,he=k[G],Pe=G+1,Y=k[Pe];if(0>o(he,I))Pe<J&&0>o(Y,he)?(k[M]=Y,k[Pe]=I,M=Pe):(k[M]=he,k[G]=I,M=G);else if(Pe<J&&0>o(Y,I))k[M]=Y,k[Pe]=I,M=Pe;else break e}}return j}function o(k,j){var I=k.sortIndex-j.sortIndex;return I!==0?I:k.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,p=null,m=3,d=!1,x=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=k)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function S(k){if(y=!1,g(k),!x)if(n(l)!==null)x=!0,$(C);else{var j=n(u);j!==null&&q(S,j.startTime-k)}}function C(k,j){x=!1,y&&(y=!1,f(N),N=-1),d=!0;var I=m;try{for(g(j),p=n(l);p!==null&&(!(p.expirationTime>j)||k&&!U());){var M=p.callback;if(typeof M=="function"){p.callback=null,m=p.priorityLevel;var J=M(p.expirationTime<=j);j=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&r(l),g(j)}else r(l);p=n(l)}if(p!==null)var X=!0;else{var G=n(u);G!==null&&q(S,G.startTime-j),X=!1}return X}finally{p=null,m=I,d=!1}}var T=!1,P=null,N=-1,_=5,L=-1;function U(){return!(e.unstable_now()-L<_)}function F(){if(P!==null){var k=e.unstable_now();L=k;var j=!0;try{j=P(!0,k)}finally{j?V():(T=!1,P=null)}}else T=!1}var V;if(typeof h=="function")V=function(){h(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ce=W.port2;W.port1.onmessage=F,V=function(){ce.postMessage(null)}}else V=function(){b(F,0)};function $(k){P=k,T||(T=!0,V())}function q(k,j){N=b(function(){k(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){x||d||(x=!0,$(C))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var I=m;m=j;try{return k()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,j){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var I=m;m=k;try{return j()}finally{m=I}},e.unstable_scheduleCallback=function(k,j,I){var M=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?M+I:M):I=M,k){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,k={id:c++,callback:j,priorityLevel:k,startTime:I,expirationTime:J,sortIndex:-1},I>M?(k.sortIndex=I,t(u,k),n(l)===null&&k===n(u)&&(y?(f(N),N=-1):y=!0,q(S,I-M))):(k.sortIndex=J,t(l,k),x||d||(x=!0,$(C))),k},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(k){var j=m;return function(){var I=m;m=j;try{return k.apply(this,arguments)}finally{m=I}}}})(sp);ip.exports=sp;var Qm=ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=w,Ge=Qm;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lp=new Set,_o={};function or(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(_o[e]=t,e=0;e<t.length;e++)lp.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=Object.prototype.hasOwnProperty,Zm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function eg(e){return Hs.call(rc,e)?!0:Hs.call(nc,e)?!1:Zm.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function tg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ng(e,t,n,r){if(t===null||typeof t>"u"||tg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bl=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bl,Ul);Ce[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bl,Ul);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bl,Ul);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wl(e,t,n,r){var o=Ce.hasOwnProperty(t)?Ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ng(t,n,o,r)&&(n=null),r||o===null?eg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),up=Symbol.for("react.provider"),cp=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Js=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),dp=Symbol.for("react.offscreen"),oc=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,as;function wo(e){if(as===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);as=t&&t[1]||""}return`
`+as+e}var is=!1;function ss(e,t){if(!e||is)return"";is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{is=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wo(e):""}function rg(e){switch(e.tag){case 5:return wo(e.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return e=ss(e.type,!1),e;case 11:return e=ss(e.type.render,!1),e;case 1:return e=ss(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case Fs:return"Profiler";case $l:return"StrictMode";case Js:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cp:return(e.displayName||"Context")+".Consumer";case up:return(e._context.displayName||"Context")+".Provider";case ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function og(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===$l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ag(e){var t=pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xa(e){e._valueTracker||(e._valueTracker=ag(e))}function fp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hp(e,t){t=t.checked,t!=null&&Wl(e,"checked",t,!1)}function Ms(e,t){hp(e,t);var n=jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||Qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bo=Array.isArray;function jr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(bo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jn(n)}}function mp(e,t){var n=jn(t.value),r=jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,vp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ig=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(e){ig.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Po[t]=Po[e]})});function yp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Po.hasOwnProperty(e)&&Po[e]?(""+t).trim():t+"px"}function xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=yp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sg=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(sg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Rr=null,Nr=null;function uc(e){if(e=la(e)){if(typeof Gs!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Li(t),Gs(e.stateNode,e.type,t))}}function wp(e){Rr?Nr?Nr.push(e):Nr=[e]:Rr=e}function bp(){if(Rr){var e=Rr,t=Nr;if(Nr=Rr=null,uc(e),t)for(e=0;e<t.length;e++)uc(t[e])}}function Sp(e,t){return e(t)}function Cp(){}var ls=!1;function Pp(e,t,n){if(ls)return e(t,n);ls=!0;try{return Sp(e,t,n)}finally{ls=!1,(Rr!==null||Nr!==null)&&(Cp(),bp())}}function Ho(e,t){var n=e.stateNode;if(n===null)return null;var r=Li(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Ks=!1;if(Ut)try{var co={};Object.defineProperty(co,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Ks=!1}function lg(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,Ya=null,Za=!1,Xs=null,ug={onError:function(e){Eo=!0,Ya=e}};function cg(e,t,n,r,o,a,i,s,l){Eo=!1,Ya=null,lg.apply(ug,arguments)}function dg(e,t,n,r,o,a,i,s,l){if(cg.apply(this,arguments),Eo){if(Eo){var u=Ya;Eo=!1,Ya=null}else throw Error(R(198));Za||(Za=!0,Xs=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(ar(e)!==e)throw Error(R(188))}function pg(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return cc(o),e;if(a===r)return cc(o),t;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Tp(e){return e=pg(e),e!==null?kp(e):null}function kp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kp(e);if(t!==null)return t;e=e.sibling}return null}var jp=Ge.unstable_scheduleCallback,dc=Ge.unstable_cancelCallback,fg=Ge.unstable_shouldYield,hg=Ge.unstable_requestPaint,fe=Ge.unstable_now,mg=Ge.unstable_getCurrentPriorityLevel,Kl=Ge.unstable_ImmediatePriority,Rp=Ge.unstable_UserBlockingPriority,ei=Ge.unstable_NormalPriority,gg=Ge.unstable_LowPriority,Np=Ge.unstable_IdlePriority,ji=null,kt=null;function vg(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ji,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:wg,yg=Math.log,xg=Math.LN2;function wg(e){return e>>>=0,e===0?32:31-(yg(e)/xg|0)|0}var ba=64,Sa=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=So(s):(a&=i,a!==0&&(r=So(a)))}else i=n&~o,i!==0?r=So(i):a!==0&&(r=So(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function bg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-gt(a),s=1<<i,l=o[i];l===-1?(!(s&n)||s&r)&&(o[i]=bg(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ap(){var e=ba;return ba<<=1,!(ba&4194240)&&(ba=64),e}function us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ia(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Cg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function Lp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _p,Ql,Ip,Hp,Fp,Ys=!1,Ca=[],xn=null,wn=null,bn=null,Fo=new Map,Jo=new Map,un=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(t.pointerId)}}function po(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=la(t),t!==null&&Ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Eg(e,t,n,r,o){switch(t){case"focusin":return xn=po(xn,e,t,n,r,o),!0;case"dragenter":return wn=po(wn,e,t,n,r,o),!0;case"mouseover":return bn=po(bn,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Fo.set(a,po(Fo.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Jo.set(a,po(Jo.get(a)||null,e,t,n,r,o)),!0}return!1}function Jp(e){var t=Bn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Ep(n),t!==null){e.blockedOn=t,Fp(e.priority,function(){Ip(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vs=r,n.target.dispatchEvent(r),Vs=null}else return t=la(n),t!==null&&Ql(t),e.blockedOn=n,!1;t.shift()}return!0}function fc(e,t,n){Da(e)&&n.delete(t)}function Tg(){Ys=!1,xn!==null&&Da(xn)&&(xn=null),wn!==null&&Da(wn)&&(wn=null),bn!==null&&Da(bn)&&(bn=null),Fo.forEach(fc),Jo.forEach(fc)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Tg)))}function Oo(e){function t(o){return fo(o,e)}if(0<Ca.length){fo(Ca[0],e);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&fo(xn,e),wn!==null&&fo(wn,e),bn!==null&&fo(bn,e),Fo.forEach(t),Jo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Jp(n),n.blockedOn===null&&un.shift()}var Ar=Kt.ReactCurrentBatchConfig,ni=!0;function kg(e,t,n,r){var o=Z,a=Ar.transition;Ar.transition=null;try{Z=1,Yl(e,t,n,r)}finally{Z=o,Ar.transition=a}}function jg(e,t,n,r){var o=Z,a=Ar.transition;Ar.transition=null;try{Z=4,Yl(e,t,n,r)}finally{Z=o,Ar.transition=a}}function Yl(e,t,n,r){if(ni){var o=Zs(e,t,n,r);if(o===null)xs(e,t,r,ri,n),pc(e,r);else if(Eg(o,e,t,n,r))r.stopPropagation();else if(pc(e,r),t&4&&-1<Pg.indexOf(e)){for(;o!==null;){var a=la(o);if(a!==null&&_p(a),a=Zs(e,t,n,r),a===null&&xs(e,t,r,ri,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else xs(e,t,r,null,n)}}var ri=null;function Zs(e,t,n,r){if(ri=null,e=Gl(r),e=Bn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function Op(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mg()){case Kl:return 1;case Rp:return 4;case ei:case gg:return 16;case Np:return 536870912;default:return 16}default:return 16}}var gn=null,Zl=null,Ma=null;function zp(){if(Ma)return Ma;var e,t=Zl,n=t.length,r,o="value"in gn?gn.value:gn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Ma=o.slice(e,1<r?1-r:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pa(){return!0}function hc(){return!1}function Xe(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pa:hc,this.isPropagationStopped=hc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),t}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Xe(to),sa=ue({},to,{view:0,detail:0}),Rg=Xe(sa),cs,ds,ho,Ri=ue({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(cs=e.screenX-ho.screenX,ds=e.screenY-ho.screenY):ds=cs=0,ho=e),cs)},movementY:function(e){return"movementY"in e?e.movementY:ds}}),mc=Xe(Ri),Ng=ue({},Ri,{dataTransfer:0}),Ag=Xe(Ng),Lg=ue({},sa,{relatedTarget:0}),ps=Xe(Lg),_g=ue({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Xe(_g),Hg=ue({},to,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=Xe(Hg),Jg=ue({},to,{data:0}),gc=Xe(Jg),Og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dg[e])?!!t[e]:!1}function tu(){return Mg}var Bg=ue({},sa,{key:function(e){if(e.key){var t=Og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ug=Xe(Bg),Wg=ue({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=Xe(Wg),$g=ue({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),qg=Xe($g),Vg=ue({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=Xe(Vg),Kg=ue({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=Xe(Kg),Qg=[9,13,27,32],nu=Ut&&"CompositionEvent"in window,To=null;Ut&&"documentMode"in document&&(To=document.documentMode);var Yg=Ut&&"TextEvent"in window&&!To,Dp=Ut&&(!nu||To&&8<To&&11>=To),yc=" ",xc=!1;function Mp(e,t){switch(e){case"keyup":return Qg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function Zg(e,t){switch(e){case"compositionend":return Bp(t);case"keypress":return t.which!==32?null:(xc=!0,yc);case"textInput":return e=t.data,e===yc&&xc?null:e;default:return null}}function ev(e,t){if(yr)return e==="compositionend"||!nu&&Mp(e,t)?(e=zp(),Ma=Zl=gn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dp&&t.locale!=="ko"?null:t.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tv[e.type]:t==="textarea"}function Up(e,t,n,r){wp(r),t=oi(t,"onChange"),0<t.length&&(n=new eu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ko=null,zo=null;function nv(e){ef(e,0)}function Ni(e){var t=br(e);if(fp(t))return e}function rv(e,t){if(e==="change")return t}var Wp=!1;if(Ut){var fs;if(Ut){var hs="oninput"in document;if(!hs){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),hs=typeof bc.oninput=="function"}fs=hs}else fs=!1;Wp=fs&&(!document.documentMode||9<document.documentMode)}function Sc(){ko&&(ko.detachEvent("onpropertychange",$p),zo=ko=null)}function $p(e){if(e.propertyName==="value"&&Ni(zo)){var t=[];Up(t,zo,e,Gl(e)),Pp(nv,t)}}function ov(e,t,n){e==="focusin"?(Sc(),ko=t,zo=n,ko.attachEvent("onpropertychange",$p)):e==="focusout"&&Sc()}function av(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(zo)}function iv(e,t){if(e==="click")return Ni(t)}function sv(e,t){if(e==="input"||e==="change")return Ni(t)}function lv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:lv;function Do(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hs.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var n=Cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vp(){for(var e=window,t=Qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qa(e.document)}return t}function ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uv(e){var t=Vp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qp(n.ownerDocument.documentElement,n)){if(r!==null&&ru(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Pc(n,a);var i=Pc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cv=Ut&&"documentMode"in document&&11>=document.documentMode,xr=null,el=null,jo=null,tl=!1;function Ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||xr==null||xr!==Qa(r)||(r=xr,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&Do(jo,r)||(jo=r,r=oi(el,"onSelect"),0<r.length&&(t=new eu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},ms={},Gp={};Ut&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ai(e){if(ms[e])return ms[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gp)return ms[e]=t[n];return e}var Kp=Ai("animationend"),Xp=Ai("animationiteration"),Qp=Ai("animationstart"),Yp=Ai("transitionend"),Zp=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,t){Zp.set(e,t),or(t,[e])}for(var gs=0;gs<Tc.length;gs++){var vs=Tc[gs],dv=vs.toLowerCase(),pv=vs[0].toUpperCase()+vs.slice(1);_n(dv,"on"+pv)}_n(Kp,"onAnimationEnd");_n(Xp,"onAnimationIteration");_n(Qp,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Yp,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dg(r,t,void 0,e),e.currentTarget=null}function ef(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;kc(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;kc(o,s,u),a=l}}}if(Za)throw e=Xs,Za=!1,Xs=null,e}function re(e,t){var n=t[il];n===void 0&&(n=t[il]=new Set);var r=e+"__bubble";n.has(r)||(tf(t,e,2,!1),n.add(r))}function ys(e,t,n){var r=0;t&&(r|=4),tf(n,e,r,t)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[Ta]){e[Ta]=!0,lp.forEach(function(n){n!=="selectionchange"&&(fv.has(n)||ys(n,!1,e),ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ta]||(t[Ta]=!0,ys("selectionchange",!1,t))}}function tf(e,t,n,r){switch(Op(t)){case 1:var o=kg;break;case 4:o=jg;break;default:o=Yl}n=o.bind(null,t,n,e),o=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xs(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Bn(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}Pp(function(){var u=a,c=Gl(n),p=[];e:{var m=Zp.get(e);if(m!==void 0){var d=eu,x=e;switch(e){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":d=Ug;break;case"focusin":x="focus",d=ps;break;case"focusout":x="blur",d=ps;break;case"beforeblur":case"afterblur":d=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=qg;break;case Kp:case Xp:case Qp:d=Ig;break;case Yp:d=Gg;break;case"scroll":d=Rg;break;case"wheel":d=Xg;break;case"copy":case"cut":case"paste":d=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=vc}var y=(t&4)!==0,b=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=Ho(h,f),S!=null&&y.push(Bo(h,S,g)))),b)break;h=h.return}0<y.length&&(m=new d(m,x,null,n,c),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",m&&n!==Vs&&(x=n.relatedTarget||n.fromElement)&&(Bn(x)||x[Wt]))break e;if((d||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,d?(x=n.relatedTarget||n.toElement,d=u,x=x?Bn(x):null,x!==null&&(b=ar(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(d=null,x=u),d!==x)){if(y=mc,S="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=vc,S="onPointerLeave",f="onPointerEnter",h="pointer"),b=d==null?m:br(d),g=x==null?m:br(x),m=new y(S,h+"leave",d,n,c),m.target=b,m.relatedTarget=g,S=null,Bn(c)===u&&(y=new y(f,h+"enter",x,n,c),y.target=g,y.relatedTarget=b,S=y),b=S,d&&x)t:{for(y=d,f=x,h=0,g=y;g;g=mr(g))h++;for(g=0,S=f;S;S=mr(S))g++;for(;0<h-g;)y=mr(y),h--;for(;0<g-h;)f=mr(f),g--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=mr(y),f=mr(f)}y=null}else y=null;d!==null&&jc(p,m,d,y,!1),x!==null&&b!==null&&jc(p,b,x,y,!0)}}e:{if(m=u?br(u):window,d=m.nodeName&&m.nodeName.toLowerCase(),d==="select"||d==="input"&&m.type==="file")var C=rv;else if(wc(m))if(Wp)C=sv;else{C=av;var T=ov}else(d=m.nodeName)&&d.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=iv);if(C&&(C=C(e,u))){Up(p,C,n,c);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Bs(m,"number",m.value)}switch(T=u?br(u):window,e){case"focusin":(wc(T)||T.contentEditable==="true")&&(xr=T,el=u,jo=null);break;case"focusout":jo=el=xr=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,Ec(p,n,c);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Ec(p,n,c)}var P;if(nu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else yr?Mp(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Dp&&n.locale!=="ko"&&(yr||N!=="onCompositionStart"?N==="onCompositionEnd"&&yr&&(P=zp()):(gn=c,Zl="value"in gn?gn.value:gn.textContent,yr=!0)),T=oi(u,N),0<T.length&&(N=new gc(N,e,null,n,c),p.push({event:N,listeners:T}),P?N.data=P:(P=Bp(n),P!==null&&(N.data=P)))),(P=Yg?Zg(e,n):ev(e,n))&&(u=oi(u,"onBeforeInput"),0<u.length&&(c=new gc("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=P))}ef(p,t)})}function Bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ho(e,n),a!=null&&r.unshift(Bo(e,a,o)),a=Ho(e,t),a!=null&&r.push(Bo(e,a,o))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Ho(n,a),l!=null&&i.unshift(Bo(n,l,s))):o||(l=Ho(n,a),l!=null&&i.push(Bo(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var hv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function Rc(e){return(typeof e=="string"?e:""+e).replace(hv,`
`).replace(mv,"")}function ka(e,t,n){if(t=Rc(t),Rc(e)!==t&&n)throw Error(R(425))}function ai(){}var nl=null,rl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(e){return Nc.resolve(null).then(e).catch(yv)}:al;function yv(e){setTimeout(function(){throw e})}function ws(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Oo(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),Tt="__reactFiber$"+no,Uo="__reactProps$"+no,Wt="__reactContainer$"+no,il="__reactEvents$"+no,xv="__reactListeners$"+no,wv="__reactHandles$"+no;function Bn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ac(e);e!==null;){if(n=e[Tt])return n;e=Ac(e)}return t}e=n,n=e.parentNode}return null}function la(e){return e=e[Tt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Li(e){return e[Uo]||null}var sl=[],Sr=-1;function In(e){return{current:e}}function oe(e){0>Sr||(e.current=sl[Sr],sl[Sr]=null,Sr--)}function te(e,t){Sr++,sl[Sr]=e.current,e.current=t}var Rn={},Ne=In(Rn),De=In(!1),Yn=Rn;function qr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function ii(){oe(De),oe(Ne)}function Lc(e,t,n){if(Ne.current!==Rn)throw Error(R(168));te(Ne,t),te(De,n)}function nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,og(e)||"Unknown",o));return ue({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Yn=Ne.current,te(Ne,e),te(De,De.current),!0}function _c(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=nf(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,oe(De),oe(Ne),te(Ne,e)):oe(De),te(De,n)}var Ft=null,_i=!1,bs=!1;function rf(e){Ft===null?Ft=[e]:Ft.push(e)}function bv(e){_i=!0,rf(e)}function Hn(){if(!bs&&Ft!==null){bs=!0;var e=0,t=Z;try{var n=Ft;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,_i=!1}catch(o){throw Ft!==null&&(Ft=Ft.slice(e+1)),jp(Kl,Hn),o}finally{Z=t,bs=!1}}return null}var Cr=[],Pr=0,li=null,ui=0,Ze=[],et=0,Zn=null,Dt=1,Mt="";function Dn(e,t){Cr[Pr++]=ui,Cr[Pr++]=li,li=e,ui=t}function of(e,t,n){Ze[et++]=Dt,Ze[et++]=Mt,Ze[et++]=Zn,Zn=e;var r=Dt;e=Mt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var a=32-gt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Dt=1<<32-gt(t)+o|n<<o|r,Mt=a+e}else Dt=1<<a|n<<o|r,Mt=e}function ou(e){e.return!==null&&(Dn(e,1),of(e,1,0))}function au(e){for(;e===li;)li=Cr[--Pr],Cr[Pr]=null,ui=Cr[--Pr],Cr[Pr]=null;for(;e===Zn;)Zn=Ze[--et],Ze[et]=null,Mt=Ze[--et],Ze[et]=null,Dt=Ze[--et],Ze[et]=null}var qe=null,$e=null,ie=!1,mt=null;function af(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,$e=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Dt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,$e=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(ie){var t=$e;if(t){var n=t;if(!Ic(e,t)){if(ll(e))throw Error(R(418));t=Sn(n.nextSibling);var r=qe;t&&Ic(e,t)?af(r,n):(e.flags=e.flags&-4097|2,ie=!1,qe=e)}}else{if(ll(e))throw Error(R(418));e.flags=e.flags&-4097|2,ie=!1,qe=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ja(e){if(e!==qe)return!1;if(!ie)return Hc(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=$e)){if(ll(e))throw sf(),Error(R(418));for(;t;)af(e,t),t=Sn(t.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=qe?Sn(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=$e;e;)e=Sn(e.nextSibling)}function Vr(){$e=qe=null,ie=!1}function iu(e){mt===null?mt=[e]:mt.push(e)}var Sv=Kt.ReactCurrentBatchConfig;function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Ra(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function lf(e){function t(f,h){if(e){var g=f.deletions;g===null?(f.deletions=[h],f.flags|=16):g.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function o(f,h){return f=Tn(f,h),f.index=0,f.sibling=null,f}function a(f,h,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags|=2,h):g):(f.flags|=2,h)):(f.flags|=1048576,h)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,g,S){return h===null||h.tag!==6?(h=js(g,f.mode,S),h.return=f,h):(h=o(h,g),h.return=f,h)}function l(f,h,g,S){var C=g.type;return C===vr?c(f,h,g.props.children,S,g.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sn&&Fc(C)===h.type)?(S=o(h,g.props),S.ref=mo(f,h,g),S.return=f,S):(S=Ka(g.type,g.key,g.props,null,f.mode,S),S.ref=mo(f,h,g),S.return=f,S)}function u(f,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Rs(g,f.mode,S),h.return=f,h):(h=o(h,g.children||[]),h.return=f,h)}function c(f,h,g,S,C){return h===null||h.tag!==7?(h=Qn(g,f.mode,S,C),h.return=f,h):(h=o(h,g),h.return=f,h)}function p(f,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=js(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ya:return g=Ka(h.type,h.key,h.props,null,f.mode,g),g.ref=mo(f,null,h),g.return=f,g;case gr:return h=Rs(h,f.mode,g),h.return=f,h;case sn:var S=h._init;return p(f,S(h._payload),g)}if(bo(h)||uo(h))return h=Qn(h,f.mode,g,null),h.return=f,h;Ra(f,h)}return null}function m(f,h,g,S){var C=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:s(f,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ya:return g.key===C?l(f,h,g,S):null;case gr:return g.key===C?u(f,h,g,S):null;case sn:return C=g._init,m(f,h,C(g._payload),S)}if(bo(g)||uo(g))return C!==null?null:c(f,h,g,S,null);Ra(f,g)}return null}function d(f,h,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,s(h,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ya:return f=f.get(S.key===null?g:S.key)||null,l(h,f,S,C);case gr:return f=f.get(S.key===null?g:S.key)||null,u(h,f,S,C);case sn:var T=S._init;return d(f,h,g,T(S._payload),C)}if(bo(S)||uo(S))return f=f.get(g)||null,c(h,f,S,C,null);Ra(h,S)}return null}function x(f,h,g,S){for(var C=null,T=null,P=h,N=h=0,_=null;P!==null&&N<g.length;N++){P.index>N?(_=P,P=null):_=P.sibling;var L=m(f,P,g[N],S);if(L===null){P===null&&(P=_);break}e&&P&&L.alternate===null&&t(f,P),h=a(L,h,N),T===null?C=L:T.sibling=L,T=L,P=_}if(N===g.length)return n(f,P),ie&&Dn(f,N),C;if(P===null){for(;N<g.length;N++)P=p(f,g[N],S),P!==null&&(h=a(P,h,N),T===null?C=P:T.sibling=P,T=P);return ie&&Dn(f,N),C}for(P=r(f,P);N<g.length;N++)_=d(P,f,N,g[N],S),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?N:_.key),h=a(_,h,N),T===null?C=_:T.sibling=_,T=_);return e&&P.forEach(function(U){return t(f,U)}),ie&&Dn(f,N),C}function y(f,h,g,S){var C=uo(g);if(typeof C!="function")throw Error(R(150));if(g=C.call(g),g==null)throw Error(R(151));for(var T=C=null,P=h,N=h=0,_=null,L=g.next();P!==null&&!L.done;N++,L=g.next()){P.index>N?(_=P,P=null):_=P.sibling;var U=m(f,P,L.value,S);if(U===null){P===null&&(P=_);break}e&&P&&U.alternate===null&&t(f,P),h=a(U,h,N),T===null?C=U:T.sibling=U,T=U,P=_}if(L.done)return n(f,P),ie&&Dn(f,N),C;if(P===null){for(;!L.done;N++,L=g.next())L=p(f,L.value,S),L!==null&&(h=a(L,h,N),T===null?C=L:T.sibling=L,T=L);return ie&&Dn(f,N),C}for(P=r(f,P);!L.done;N++,L=g.next())L=d(P,f,N,L.value,S),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?N:L.key),h=a(L,h,N),T===null?C=L:T.sibling=L,T=L);return e&&P.forEach(function(F){return t(f,F)}),ie&&Dn(f,N),C}function b(f,h,g,S){if(typeof g=="object"&&g!==null&&g.type===vr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ya:e:{for(var C=g.key,T=h;T!==null;){if(T.key===C){if(C=g.type,C===vr){if(T.tag===7){n(f,T.sibling),h=o(T,g.props.children),h.return=f,f=h;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sn&&Fc(C)===T.type){n(f,T.sibling),h=o(T,g.props),h.ref=mo(f,T,g),h.return=f,f=h;break e}n(f,T);break}else t(f,T);T=T.sibling}g.type===vr?(h=Qn(g.props.children,f.mode,S,g.key),h.return=f,f=h):(S=Ka(g.type,g.key,g.props,null,f.mode,S),S.ref=mo(f,h,g),S.return=f,f=S)}return i(f);case gr:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(f,h.sibling),h=o(h,g.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Rs(g,f.mode,S),h.return=f,f=h}return i(f);case sn:return T=g._init,b(f,h,T(g._payload),S)}if(bo(g))return x(f,h,g,S);if(uo(g))return y(f,h,g,S);Ra(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(f,h.sibling),h=o(h,g),h.return=f,f=h):(n(f,h),h=js(g,f.mode,S),h.return=f,f=h),i(f)):n(f,h)}return b}var Gr=lf(!0),uf=lf(!1),ci=In(null),di=null,Er=null,su=null;function lu(){su=Er=di=null}function uu(e){var t=ci.current;oe(ci),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){di=e,su=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(su!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(di===null)throw Error(R(308));Er=e,di.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Un=null;function cu(e){Un===null?Un=[e]:Un.push(e)}function cf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,cu(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,cu(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function Jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pi(e,t,n,r){var o=e.updateQueue;ln=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var p=o.baseState;i=0,c=u=l=null,s=a;do{var m=s.lane,d=s.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(m=t,d=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(d,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(d,p,m):x,m==null)break e;p=ue({},p,m);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else d={eventTime:d,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=p):c=c.next=d,i|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(c===null&&(l=p),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);tr|=i,e.lanes=i,e.memoizedState=p}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var ua={},jt=In(ua),Wo=In(ua),$o=In(ua);function Wn(e){if(e===ua)throw Error(R(174));return e}function pu(e,t){switch(te($o,t),te(Wo,e),te(jt,ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ws(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ws(t,e)}oe(jt),te(jt,t)}function Kr(){oe(jt),oe(Wo),oe($o)}function pf(e){Wn($o.current);var t=Wn(jt.current),n=Ws(t,e.type);t!==n&&(te(Wo,e),te(jt,n))}function fu(e){Wo.current===e&&(oe(jt),oe(Wo))}var se=In(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=[];function hu(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var Wa=Kt.ReactCurrentDispatcher,Cs=Kt.ReactCurrentBatchConfig,er=0,le=null,ve=null,xe=null,hi=!1,Ro=!1,qo=0,Cv=0;function Te(){throw Error(R(321))}function mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function gu(e,t,n,r,o,a){if(er=a,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wa.current=e===null||e.memoizedState===null?kv:jv,e=n(r,o),Ro){a=0;do{if(Ro=!1,qo=0,25<=a)throw Error(R(301));a+=1,xe=ve=null,t.updateQueue=null,Wa.current=Rv,e=n(r,o)}while(Ro)}if(Wa.current=mi,t=ve!==null&&ve.next!==null,er=0,xe=ve=le=null,hi=!1,t)throw Error(R(300));return e}function vu(){var e=qo!==0;return qo=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?le.memoizedState=xe=e:xe=xe.next=e,xe}function ot(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=xe===null?le.memoizedState:xe.next;if(t!==null)xe=t,ve=e;else{if(e===null)throw Error(R(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},xe===null?le.memoizedState=xe=e:xe=xe.next=e}return xe}function Vo(e,t){return typeof t=="function"?t(e):t}function Ps(e){var t=ot(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,i=r):l=l.next=p,le.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,yt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,le.lanes|=a,tr|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Es(e){var t=ot(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);yt(a,t.memoizedState)||(ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ff(){}function hf(e,t){var n=le,r=ot(),o=t(),a=!yt(r.memoizedState,o);if(a&&(r.memoizedState=o,ze=!0),r=r.queue,yu(vf.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Go(9,gf.bind(null,n,r,o,t),void 0,null),we===null)throw Error(R(349));er&30||mf(n,t,o)}return o}function mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gf(e,t,n,r){t.value=n,t.getSnapshot=r,yf(t)&&xf(e)}function vf(e,t,n){return n(function(){yf(t)&&xf(e)})}function yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function xf(e){var t=$t(e,1);t!==null&&vt(t,e,1,-1)}function zc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Tv.bind(null,le,e),[t.memoizedState,e]}function Go(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wf(){return ot().memoizedState}function $a(e,t,n,r){var o=St();le.flags|=e,o.memoizedState=Go(1|t,n,void 0,r===void 0?null:r)}function Ii(e,t,n,r){var o=ot();r=r===void 0?null:r;var a=void 0;if(ve!==null){var i=ve.memoizedState;if(a=i.destroy,r!==null&&mu(r,i.deps)){o.memoizedState=Go(t,n,a,r);return}}le.flags|=e,o.memoizedState=Go(1|t,n,a,r)}function Dc(e,t){return $a(8390656,8,e,t)}function yu(e,t){return Ii(2048,8,e,t)}function bf(e,t){return Ii(4,2,e,t)}function Sf(e,t){return Ii(4,4,e,t)}function Cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pf(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4,4,Cf.bind(null,t,e),n)}function xu(){}function Ef(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kf(e,t,n){return er&21?(yt(n,t)||(n=Ap(),le.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Pv(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{Z=n,Cs.transition=r}}function jf(){return ot().memoizedState}function Ev(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rf(e))Nf(t,n);else if(n=cf(e,t,n,r),n!==null){var o=Ie();vt(n,e,r,o),Af(n,t,r)}}function Tv(e,t,n){var r=En(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rf(e))Nf(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,yt(s,i)){var l=t.interleaved;l===null?(o.next=o,cu(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=cf(e,t,o,r),n!==null&&(o=Ie(),vt(n,e,r,o),Af(n,t,r))}}function Rf(e){var t=e.alternate;return e===le||t!==null&&t===le}function Nf(e,t){Ro=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var mi={readContext:rt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},kv={readContext:rt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$a(4194308,4,Cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $a(4194308,4,e,t)},useInsertionEffect:function(e,t){return $a(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ev.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:zc,useDebugValue:xu,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=zc(!1),t=e[0];return e=Pv.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=St();if(ie){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),we===null)throw Error(R(349));er&30||mf(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Dc(vf.bind(null,r,a,e),[e]),r.flags|=2048,Go(9,gf.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=St(),t=we.identifierPrefix;if(ie){var n=Mt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jv={readContext:rt,useCallback:Ef,useContext:rt,useEffect:yu,useImperativeHandle:Pf,useInsertionEffect:bf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Ps,useRef:wf,useState:function(){return Ps(Vo)},useDebugValue:xu,useDeferredValue:function(e){var t=ot();return kf(t,ve.memoizedState,e)},useTransition:function(){var e=Ps(Vo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:hf,useId:jf,unstable_isNewReconciler:!1},Rv={readContext:rt,useCallback:Ef,useContext:rt,useEffect:yu,useImperativeHandle:Pf,useInsertionEffect:bf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Es,useRef:wf,useState:function(){return Es(Vo)},useDebugValue:xu,useDeferredValue:function(e){var t=ot();return ve===null?t.memoizedState=e:kf(t,ve.memoizedState,e)},useTransition:function(){var e=Es(Vo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:ff,useSyncExternalStore:hf,useId:jf,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hi={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=En(e),a=Bt(r,o);a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,o),t!==null&&(vt(t,e,o,r),Ua(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=En(e),a=Bt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Cn(e,a,o),t!==null&&(vt(t,e,o,r),Ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=En(e),o=Bt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Cn(e,o,r),t!==null&&(vt(t,e,r,n),Ua(t,e,r))}};function Mc(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Do(n,r)||!Do(o,a):!0}function Lf(e,t,n){var r=!1,o=Rn,a=t.contextType;return typeof a=="object"&&a!==null?a=rt(a):(o=Me(t)?Yn:Ne.current,r=t.contextTypes,a=(r=r!=null)?qr(e,o):Rn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function pl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},du(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=rt(a):(a=Me(t)?Yn:Ne.current,o.context=qr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(dl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Hi.enqueueReplaceState(o,o.state,null),pi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t){try{var n="",r=t;do n+=rg(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Nv=typeof WeakMap=="function"?WeakMap:Map;function _f(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,Cl=r),fl(e,t)},n}function If(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Wv.bind(null,e,t,n),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $c(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Av=Kt.ReactCurrentOwner,ze=!1;function Le(e,t,n,r){t.child=e===null?uf(t,null,n,r):Gr(t,e.child,n,r)}function qc(e,t,n,r,o){n=n.render;var a=t.ref;return Lr(t,o),r=gu(e,t,n,r,a,o),n=vu(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(ie&&n&&ou(t),t.flags|=1,Le(e,t,r,o),t.child)}function Vc(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!ku(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Hf(e,t,a,r,o)):(e=Ka(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(i,r)&&e.ref===t.ref)return qt(e,t,o)}return t.flags|=1,e=Tn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hf(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Do(a,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,qt(e,t,o)}return hl(e,t,n,r,o)}function Ff(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(kr,Ue),Ue|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(kr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,te(kr,Ue),Ue|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,te(kr,Ue),Ue|=r;return Le(e,t,o,n),t.child}function Jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,n,r,o){var a=Me(n)?Yn:Ne.current;return a=qr(t,a),Lr(t,o),n=gu(e,t,n,r,a,o),r=vu(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(ie&&r&&ou(t),t.flags|=1,Le(e,t,n,o),t.child)}function Gc(e,t,n,r,o){if(Me(n)){var a=!0;si(t)}else a=!1;if(Lr(t,o),t.stateNode===null)qa(e,t),Lf(t,n,r),pl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Me(n)?Yn:Ne.current,u=qr(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Bc(t,i,r,u),ln=!1;var m=t.memoizedState;i.state=m,pi(t,r,i,o),l=t.memoizedState,s!==r||m!==l||De.current||ln?(typeof c=="function"&&(dl(t,n,c,r),l=t.memoizedState),(s=ln||Mc(t,n,s,r,m,l,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,df(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ct(t.type,s),i.props=u,p=t.pendingProps,m=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=rt(l):(l=Me(n)?Yn:Ne.current,l=qr(t,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||m!==l)&&Bc(t,i,r,l),ln=!1,m=t.memoizedState,i.state=m,pi(t,r,i,o);var x=t.memoizedState;s!==p||m!==x||De.current||ln?(typeof d=="function"&&(dl(t,n,d,r),x=t.memoizedState),(u=ln||Mc(t,n,u,r,m,x,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,a,o)}function ml(e,t,n,r,o,a){Jf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&_c(t,n,!1),qt(e,t,a);r=t.stateNode,Av.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Gr(t,e.child,null,a),t.child=Gr(t,null,s,a)):Le(e,t,s,a),t.memoizedState=r.state,o&&_c(t,n,!0),t.child}function Of(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),pu(e,t.containerInfo)}function Kc(e,t,n,r,o){return Vr(),iu(o),t.flags|=256,Le(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zf(e,t,n){var r=t.pendingProps,o=se.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(se,o&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Oi(i,r,0,null),e=Qn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vl(n),t.memoizedState=gl,e):wu(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Lv(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Tn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=Tn(s,a):(a=Qn(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?vl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return a=e.child,e=a.sibling,r=Tn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wu(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Na(e,t,n,r){return r!==null&&iu(r),Gr(t,e.child,null,n),e=wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lv(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Ts(Error(R(422))),Na(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Oi({mode:"visible",children:r.children},o,0,null),a=Qn(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Gr(t,e.child,null,i),t.child.memoizedState=vl(i),t.memoizedState=gl,a);if(!(t.mode&1))return Na(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(R(419)),r=Ts(a,r,void 0),Na(e,t,i,r)}if(s=(i&e.childLanes)!==0,ze||s){if(r=we,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,$t(e,o),vt(r,e,o,-1))}return Tu(),r=Ts(Error(R(421))),Na(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=$v.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,$e=Sn(o.nextSibling),qe=t,ie=!0,mt=null,e!==null&&(Ze[et++]=Dt,Ze[et++]=Mt,Ze[et++]=Zn,Dt=e.id,Mt=e.overflow,Zn=t),t=wu(t,r.children),t.flags|=4096,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function ks(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Df(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Le(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ks(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ks(t,!0,n,null,a);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _v(e,t,n){switch(t.tag){case 3:Of(t),Vr();break;case 5:pf(t);break;case 1:Me(t.type)&&si(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?zf(e,t,n):(te(se,se.current&1),e=qt(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Df(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ff(e,t,n)}return qt(e,t,n)}var Mf,yl,Bf,Uf;Mf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};Bf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Wn(jt.current);var a=null;switch(n){case"input":o=Ds(e,o),r=Ds(e,r),a=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),a=[];break;case"textarea":o=Us(e,o),r=Us(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}$s(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function go(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Iv(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Me(t.type)&&ii(),ke(t),null;case 3:return r=t.stateNode,Kr(),oe(De),oe(Ne),hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Tl(mt),mt=null))),yl(e,t),ke(t),null;case 5:fu(t);var o=Wn($o.current);if(n=t.type,e!==null&&t.stateNode!=null)Bf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ke(t),null}if(e=Wn(jt.current),ja(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[Uo]=a,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Co.length;o++)re(Co[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":ac(r,a),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},re("invalid",r);break;case"textarea":sc(r,a),re("invalid",r)}$s(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,s,e),o=["children",""+s]):_o.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&re("scroll",r)}switch(n){case"input":xa(r),ic(r,a,!0);break;case"textarea":xa(r),lc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ai)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Tt]=t,e[Uo]=r,Mf(e,t,!1,!1),t.stateNode=e;e:{switch(i=qs(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Co.length;o++)re(Co[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":ac(e,r),o=Ds(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":sc(e,r),o=Us(e,r),re("invalid",e);break;default:o=r}$s(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?xp(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vp(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(e,l):typeof l=="number"&&Io(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_o.hasOwnProperty(a)?l!=null&&a==="onScroll"&&re("scroll",e):l!=null&&Wl(e,a,l,i))}switch(n){case"input":xa(e),ic(e,r,!1);break;case"textarea":xa(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?jr(e,!!r.multiple,a,!1):r.defaultValue!=null&&jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Wn($o.current),Wn(jt.current),ja(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return ke(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&$e!==null&&t.mode&1&&!(t.flags&128))sf(),Vr(),t.flags|=98560,a=!1;else if(a=ja(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[Tt]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),a=!1}else mt!==null&&(Tl(mt),mt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ye===0&&(ye=3):Tu())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return Kr(),yl(e,t),e===null&&Mo(t.stateNode.containerInfo),ke(t),null;case 10:return uu(t.type._context),ke(t),null;case 17:return Me(t.type)&&ii(),ke(t),null;case 19:if(oe(se),a=t.memoizedState,a===null)return ke(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)go(a,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=fi(e),i!==null){for(t.flags|=128,go(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}a.tail!==null&&fe()>Qr&&(t.flags|=128,r=!0,go(a,!1),t.lanes=4194304)}else{if(!r)if(e=fi(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),go(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ie)return ke(t),null}else 2*fe()-a.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,go(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=fe(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return Eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Hv(e,t){switch(au(t),t.tag){case 1:return Me(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),oe(De),oe(Ne),hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fu(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return Kr(),null;case 10:return uu(t.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var Aa=!1,Re=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,H=null;function Tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Qc=!1;function Jv(e,t){if(nl=ni,e=Vp(),ru(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,p=e,m=null;t:for(;;){for(var d;p!==n||o!==0&&p.nodeType!==3||(s=i+o),p!==a||r!==0&&p.nodeType!==3||(l=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(d=p.firstChild)!==null;)m=p,p=d;for(;;){if(p===e)break t;if(m===n&&++u===o&&(s=i),m===a&&++c===r&&(l=i),(d=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=d}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},ni=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,b=x.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:ct(t.type,y),b);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return x=Qc,Qc=!1,x}function No(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&xl(t,n,a)}o=o.next}while(o!==r)}}function Fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Uo],delete t[il],delete t[xv],delete t[wv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var be=null,ht=!1;function nn(e,t,n){for(n=n.child;n!==null;)qf(e,t,n),n=n.sibling}function qf(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ji,n)}catch{}switch(n.tag){case 5:Re||Tr(n,t);case 6:var r=be,o=ht;be=null,nn(e,t,n),be=r,ht=o,be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?ws(e.parentNode,n):e.nodeType===1&&ws(e,n),Oo(e)):ws(be,n.stateNode));break;case 4:r=be,o=ht,be=n.stateNode.containerInfo,ht=!0,nn(e,t,n),be=r,ht=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&xl(n,t,i),o=o.next}while(o!==r)}nn(e,t,n);break;case 1:if(!Re&&(Tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,nn(e,t,n),Re=r):nn(e,t,n);break;default:nn(e,t,n)}}function Zc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fv),t.forEach(function(r){var o=qv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ht=!1;break e;case 3:be=s.stateNode.containerInfo,ht=!0;break e;case 4:be=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(be===null)throw Error(R(160));qf(a,i,o),be=null,ht=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vf(t,e),t=t.sibling}function Vf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),bt(e),r&4){try{No(3,e,e.return),Fi(3,e)}catch(y){pe(e,e.return,y)}try{No(5,e,e.return)}catch(y){pe(e,e.return,y)}}break;case 1:lt(t,e),bt(e),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(lt(t,e),bt(e),r&512&&n!==null&&Tr(n,n.return),e.flags&32){var o=e.stateNode;try{Io(o,"")}catch(y){pe(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&hp(o,a),qs(s,i);var u=qs(s,a);for(i=0;i<l.length;i+=2){var c=l[i],p=l[i+1];c==="style"?xp(o,p):c==="dangerouslySetInnerHTML"?vp(o,p):c==="children"?Io(o,p):Wl(o,c,p,u)}switch(s){case"input":Ms(o,a);break;case"textarea":mp(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var d=a.value;d!=null?jr(o,!!a.multiple,d,!1):m!==!!a.multiple&&(a.defaultValue!=null?jr(o,!!a.multiple,a.defaultValue,!0):jr(o,!!a.multiple,a.multiple?[]:"",!1))}o[Uo]=a}catch(y){pe(e,e.return,y)}}break;case 6:if(lt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(y){pe(e,e.return,y)}}break;case 3:if(lt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(y){pe(e,e.return,y)}break;case 4:lt(t,e),bt(e);break;case 13:lt(t,e),bt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Cu=fe())),r&4&&Zc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||c,lt(t,e),Re=u):lt(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(H=e,c=e.child;c!==null;){for(p=H=c;H!==null;){switch(m=H,d=m.child,m.tag){case 0:case 11:case 14:case 15:No(4,m,m.return);break;case 1:Tr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){pe(r,n,y)}}break;case 5:Tr(m,m.return);break;case 22:if(m.memoizedState!==null){td(p);continue}}d!==null?(d.return=m,H=d):td(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{o=p.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=yp("display",i))}catch(y){pe(e,e.return,y)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){pe(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),bt(e),r&4&&Zc(e);break;case 21:break;default:lt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($f(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Io(o,""),r.flags&=-33);var a=Yc(e);Sl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Yc(e);bl(e,s,i);break;default:throw Error(R(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ov(e,t,n){H=e,Gf(e)}function Gf(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var o=H,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Aa;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Re;s=Aa;var u=Re;if(Aa=i,(Re=l)&&!u)for(H=o;H!==null;)i=H,l=i.child,i.tag===22&&i.memoizedState!==null?nd(o):l!==null?(l.return=i,H=l):nd(o);for(;a!==null;)H=a,Gf(a),a=a.sibling;H=o,Aa=s,Re=u}ed(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,H=a):ed(e)}}function ed(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Fi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Oc(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||t.flags&512&&wl(t)}catch(m){pe(t,t.return,m)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function td(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function nd(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fi(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){pe(t,o,l)}}var a=t.return;try{wl(t)}catch(l){pe(t,a,l)}break;case 5:var i=t.return;try{wl(t)}catch(l){pe(t,i,l)}}}catch(l){pe(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var zv=Math.ceil,gi=Kt.ReactCurrentDispatcher,bu=Kt.ReactCurrentOwner,nt=Kt.ReactCurrentBatchConfig,K=0,we=null,me=null,Se=0,Ue=0,kr=In(0),ye=0,Ko=null,tr=0,Ji=0,Su=0,Ao=null,Oe=null,Cu=0,Qr=1/0,Ht=null,vi=!1,Cl=null,Pn=null,La=!1,vn=null,yi=0,Lo=0,Pl=null,Va=-1,Ga=0;function Ie(){return K&6?fe():Va!==-1?Va:Va=fe()}function En(e){return e.mode&1?K&2&&Se!==0?Se&-Se:Sv.transition!==null?(Ga===0&&(Ga=Ap()),Ga):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Op(e.type)),e):1}function vt(e,t,n,r){if(50<Lo)throw Lo=0,Pl=null,Error(R(185));ia(e,n,r),(!(K&2)||e!==we)&&(e===we&&(!(K&2)&&(Ji|=n),ye===4&&cn(e,Se)),Be(e,r),n===1&&K===0&&!(t.mode&1)&&(Qr=fe()+500,_i&&Hn()))}function Be(e,t){var n=e.callbackNode;Sg(e,t);var r=ti(e,e===we?Se:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?bv(rd.bind(null,e)):rf(rd.bind(null,e)),vv(function(){!(K&6)&&Hn()}),n=null;else{switch(Lp(r)){case 1:n=Kl;break;case 4:n=Rp;break;case 16:n=ei;break;case 536870912:n=Np;break;default:n=ei}n=nh(n,Kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kf(e,t){if(Va=-1,Ga=0,K&6)throw Error(R(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=ti(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var o=K;K|=2;var a=Qf();(we!==e||Se!==t)&&(Ht=null,Qr=fe()+500,Xn(e,t));do try{Bv();break}catch(s){Xf(e,s)}while(!0);lu(),gi.current=a,K=o,me!==null?t=0:(we=null,Se=0,t=ye)}if(t!==0){if(t===2&&(o=Qs(e),o!==0&&(r=o,t=El(e,o))),t===1)throw n=Ko,Xn(e,0),cn(e,r),Be(e,fe()),n;if(t===6)cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dv(o)&&(t=xi(e,r),t===2&&(a=Qs(e),a!==0&&(r=a,t=El(e,a))),t===1))throw n=Ko,Xn(e,0),cn(e,r),Be(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Mn(e,Oe,Ht);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=Cu+500-fe(),10<t)){if(ti(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=al(Mn.bind(null,e,Oe,Ht),t);break}Mn(e,Oe,Ht);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-gt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zv(r/1960))-r,10<r){e.timeoutHandle=al(Mn.bind(null,e,Oe,Ht),r);break}Mn(e,Oe,Ht);break;case 5:Mn(e,Oe,Ht);break;default:throw Error(R(329))}}}return Be(e,fe()),e.callbackNode===n?Kf.bind(null,e):null}function El(e,t){var n=Ao;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=xi(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Tl(t)),e}function Tl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Dv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!yt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~Su,t&=~Ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function rd(e){if(K&6)throw Error(R(327));_r();var t=ti(e,0);if(!(t&1))return Be(e,fe()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=Ko,Xn(e,0),cn(e,t),Be(e,fe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Oe,Ht),Be(e,fe()),null}function Pu(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Qr=fe()+500,_i&&Hn())}}function nr(e){vn!==null&&vn.tag===0&&!(K&6)&&_r();var t=K;K|=1;var n=nt.transition,r=Z;try{if(nt.transition=null,Z=1,e)return e()}finally{Z=r,nt.transition=n,K=t,!(K&6)&&Hn()}}function Eu(){Ue=kr.current,oe(kr)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gv(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:Kr(),oe(De),oe(Ne),hu();break;case 5:fu(r);break;case 4:Kr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:uu(r.type._context);break;case 22:case 23:Eu()}n=n.return}if(we=e,me=e=Tn(e.current,null),Se=Ue=t,ye=0,Ko=null,Su=Ji=tr=0,Oe=Ao=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Un=null}return e}function Xf(e,t){do{var n=me;try{if(lu(),Wa.current=mi,hi){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}hi=!1}if(er=0,xe=ve=le=null,Ro=!1,qo=0,bu.current=null,n===null||n.return===null){ye=1,Ko=t,me=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=Wc(i);if(d!==null){d.flags&=-257,$c(d,i,s,a,t),d.mode&1&&Uc(a,u,t),t=d,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Uc(a,u,t),Tu();break e}l=Error(R(426))}}else if(ie&&s.mode&1){var b=Wc(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),$c(b,i,s,a,t),iu(Xr(l,s));break e}}a=l=Xr(l,s),ye!==4&&(ye=2),Ao===null?Ao=[a]:Ao.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=_f(a,l,t);Jc(a,f);break e;case 1:s=l;var h=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pn===null||!Pn.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=If(a,s,t);Jc(a,S);break e}}a=a.return}while(a!==null)}Zf(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Qf(){var e=gi.current;return gi.current=mi,e===null?mi:e}function Tu(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(tr&268435455)&&!(Ji&268435455)||cn(we,Se)}function xi(e,t){var n=K;K|=2;var r=Qf();(we!==e||Se!==t)&&(Ht=null,Xn(e,t));do try{Mv();break}catch(o){Xf(e,o)}while(!0);if(lu(),K=n,gi.current=r,me!==null)throw Error(R(261));return we=null,Se=0,ye}function Mv(){for(;me!==null;)Yf(me)}function Bv(){for(;me!==null&&!fg();)Yf(me)}function Yf(e){var t=th(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Zf(e):me=t,bu.current=null}function Zf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hv(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=Iv(n,t,Ue),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function Mn(e,t,n){var r=Z,o=nt.transition;try{nt.transition=null,Z=1,Uv(e,t,n,r)}finally{nt.transition=o,Z=r}return null}function Uv(e,t,n,r){do _r();while(vn!==null);if(K&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Cg(e,a),e===we&&(me=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,nh(ei,function(){return _r(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=nt.transition,nt.transition=null;var i=Z;Z=1;var s=K;K|=4,bu.current=null,Jv(e,n),Vf(n,e),uv(rl),ni=!!nl,rl=nl=null,e.current=n,Ov(n),hg(),K=s,Z=i,nt.transition=a}else e.current=n;if(La&&(La=!1,vn=e,yi=o),a=e.pendingLanes,a===0&&(Pn=null),vg(n.stateNode),Be(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=Cl,Cl=null,e;return yi&1&&e.tag!==0&&_r(),a=e.pendingLanes,a&1?e===Pl?Lo++:(Lo=0,Pl=e):Lo=0,Hn(),null}function _r(){if(vn!==null){var e=Lp(yi),t=nt.transition,n=Z;try{if(nt.transition=null,Z=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,yi=0,K&6)throw Error(R(331));var o=K;for(K|=4,H=e.current;H!==null;){var a=H,i=a.child;if(H.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(H=u;H!==null;){var c=H;switch(c.tag){case 0:case 11:case 15:No(8,c,a)}var p=c.child;if(p!==null)p.return=c,H=p;else for(;H!==null;){c=H;var m=c.sibling,d=c.return;if(Wf(c),c===u){H=null;break}if(m!==null){m.return=d,H=m;break}H=d}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,H=i;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:No(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,H=f;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){i=H;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,H=g;else e:for(i=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fi(9,s)}}catch(C){pe(s,s.return,C)}if(s===i){H=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}if(K=o,Hn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ji,e)}catch{}r=!0}return r}finally{Z=n,nt.transition=t}}return!1}function od(e,t,n){t=Xr(n,t),t=_f(e,t,1),e=Cn(e,t,1),t=Ie(),e!==null&&(ia(e,1,t),Be(e,t))}function pe(e,t,n){if(e.tag===3)od(e,e,n);else for(;t!==null;){if(t.tag===3){od(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Xr(n,e),e=If(t,e,1),t=Cn(t,e,1),e=Ie(),t!==null&&(ia(t,1,e),Be(t,e));break}}t=t.return}}function Wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Se&n)===n&&(ye===4||ye===3&&(Se&130023424)===Se&&500>fe()-Cu?Xn(e,0):Su|=n),Be(e,t)}function eh(e,t){t===0&&(e.mode&1?(t=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):t=1);var n=Ie();e=$t(e,t),e!==null&&(ia(e,t,n),Be(e,n))}function $v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eh(e,n)}function qv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),eh(e,n)}var th;th=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,_v(e,t,n);ze=!!(e.flags&131072)}else ze=!1,ie&&t.flags&1048576&&of(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qa(e,t),e=t.pendingProps;var o=qr(t,Ne.current);Lr(t,n),o=gu(null,t,r,e,o,n);var a=vu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(a=!0,si(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,du(t),o.updater=Hi,t.stateNode=o,o._reactInternals=t,pl(t,r,e,n),t=ml(null,t,r,!0,a,n)):(t.tag=0,ie&&a&&ou(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Gv(r),e=ct(r,e),o){case 0:t=hl(null,t,r,e,n);break e;case 1:t=Gc(null,t,r,e,n);break e;case 11:t=qc(null,t,r,e,n);break e;case 14:t=Vc(null,t,r,ct(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),hl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Gc(e,t,r,o,n);case 3:e:{if(Of(t),e===null)throw Error(R(387));r=t.pendingProps,a=t.memoizedState,o=a.element,df(e,t),pi(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Xr(Error(R(423)),t),t=Kc(e,t,r,n,o);break e}else if(r!==o){o=Xr(Error(R(424)),t),t=Kc(e,t,r,n,o);break e}else for($e=Sn(t.stateNode.containerInfo.firstChild),qe=t,ie=!0,mt=null,n=uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===o){t=qt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return pf(t),e===null&&ul(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,ol(r,o)?i=null:a!==null&&ol(r,a)&&(t.flags|=32),Jf(e,t),Le(e,t,i,n),t.child;case 6:return e===null&&ul(t),null;case 13:return zf(e,t,n);case 4:return pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),qc(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,te(ci,r._currentValue),r._currentValue=i,a!==null)if(yt(a.value,i)){if(a.children===o.children&&!De.current){t=qt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),cl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(R(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),cl(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Lr(t,n),o=rt(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),Vc(e,t,r,o,n);case 15:return Hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),qa(e,t),t.tag=1,Me(r)?(e=!0,si(t)):e=!1,Lr(t,n),Lf(t,r,o),pl(t,r,o,n),ml(null,t,r,!0,e,n);case 19:return Df(e,t,n);case 22:return Ff(e,t,n)}throw Error(R(156,t.tag))};function nh(e,t){return jp(e,t)}function Vv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Vv(e,t,n,r)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gv(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ql)return 11;if(e===Vl)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ka(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")ku(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case vr:return Qn(n.children,o,a,t);case $l:i=8,o|=8;break;case Fs:return e=tt(12,n,t,o|2),e.elementType=Fs,e.lanes=a,e;case Js:return e=tt(13,n,t,o),e.elementType=Js,e.lanes=a,e;case Os:return e=tt(19,n,t,o),e.elementType=Os,e.lanes=a,e;case dp:return Oi(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case up:i=10;break e;case cp:i=9;break e;case ql:i=11;break e;case Vl:i=14;break e;case sn:i=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=tt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Qn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Oi(e,t,n,r){return e=tt(22,e,r,t),e.elementType=dp,e.lanes=n,e.stateNode={isHidden:!1},e}function js(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ju(e,t,n,r,o,a,i,s,l){return e=new Kv(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(a),e}function Xv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rh(e){if(!e)return Rn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Me(n))return nf(e,n,t)}return t}function oh(e,t,n,r,o,a,i,s,l){return e=ju(n,r,!0,e,o,a,i,s,l),e.context=rh(null),n=e.current,r=Ie(),o=En(n),a=Bt(r,o),a.callback=t??null,Cn(n,a,o),e.current.lanes=o,ia(e,o,r),Be(e,r),e}function zi(e,t,n,r){var o=t.current,a=Ie(),i=En(o);return n=rh(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(o,t,i),e!==null&&(vt(e,o,i,a),Ua(e,o,i)),i}function wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function Qv(){return null}var ah=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}Di.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));zi(e,t,null,null)};Di.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){zi(null,e,null,null)}),t[Wt]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Jp(e)}};function Au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Yv(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=wi(i);a.call(u)}}var i=oh(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=i,e[Wt]=i.current,Mo(e.nodeType===8?e.parentNode:e),nr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=wi(l);s.call(u)}}var l=ju(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=l,e[Wt]=l.current,Mo(e.nodeType===8?e.parentNode:e),nr(function(){zi(t,l,n,r)}),l}function Bi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=wi(i);s.call(l)}}zi(t,i,e,o)}else i=Yv(n,t,e,o,r);return wi(i)}_p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=So(t.pendingLanes);n!==0&&(Xl(t,n|1),Be(t,fe()),!(K&6)&&(Qr=fe()+500,Hn()))}break;case 13:nr(function(){var r=$t(e,1);if(r!==null){var o=Ie();vt(r,e,1,o)}}),Ru(e,1)}};Ql=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ie();vt(t,e,134217728,n)}Ru(e,134217728)}};Ip=function(e){if(e.tag===13){var t=En(e),n=$t(e,t);if(n!==null){var r=Ie();vt(n,e,t,r)}Ru(e,t)}};Hp=function(){return Z};Fp=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Gs=function(e,t,n){switch(t){case"input":if(Ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Li(r);if(!o)throw Error(R(90));fp(r),Ms(r,o)}}}break;case"textarea":mp(e,n);break;case"select":t=n.value,t!=null&&jr(e,!!n.multiple,t,!1)}};Sp=Pu;Cp=nr;var Zv={usingClientEntryPoint:!1,Events:[la,br,Li,wp,bp,Pu]},vo={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ey={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tp(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{ji=_a.inject(ey),kt=_a}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(t))throw Error(R(200));return Xv(e,t,null,n)};Ke.createRoot=function(e,t){if(!Au(e))throw Error(R(299));var n=!1,r="",o=ah;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ju(e,1,!1,null,null,n,!1,r,o),e[Wt]=t.current,Mo(e.nodeType===8?e.parentNode:e),new Nu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Tp(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return nr(e)};Ke.hydrate=function(e,t,n){if(!Mi(t))throw Error(R(200));return Bi(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Au(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=ah;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=oh(t,null,e,1,n??null,o,!1,a,i),e[Wt]=t.current,Mo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Di(t)};Ke.render=function(e,t,n){if(!Mi(t))throw Error(R(200));return Bi(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(R(40));return e._reactRootContainer?(nr(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Pu;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Bi(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function ih(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ih)}catch(e){console.error(e)}}ih(),ap.exports=Ke;var Ui=ap.exports;const ty=Vd(Ui);var sh,sd=Ui;sh=sd.createRoot,sd.hydrateRoot;var ny=e=>{switch(e){case"success":return ay;case"info":return sy;case"warning":return iy;case"error":return ly;default:return null}},ry=Array(12).fill(0),oy=({visible:e,className:t})=>A.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},A.createElement("div",{className:"sonner-spinner"},ry.map((n,r)=>A.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),ay=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),iy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),sy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ly=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),uy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},A.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),A.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),cy=()=>{let[e,t]=A.useState(document.hidden);return A.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},kl=1,dy=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:kl++,a=this.toasts.find(s=>s.id===o),i=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),a?this.toasts=this.toasts.map(s=>s.id===o?(this.publish({...s,...e,id:o,title:n}),{...s,...e,id:o,dismissible:i,title:n}):s):this.addToast({title:n,...r,dismissible:i,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,a,i=r.then(async l=>{if(a=["resolve",l],A.isValidElement(l))o=!1,this.create({id:n,type:"default",message:l});else if(fy(l)&&!l.ok){o=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,c=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:c})}else if(t.success!==void 0){o=!1;let u=typeof t.success=="function"?await t.success(l):t.success,c=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:c})}}).catch(async l=>{if(a=["reject",l],t.error!==void 0){o=!1;let u=typeof t.error=="function"?await t.error(l):t.error,c=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:c})}}).finally(()=>{var l;o&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),s=()=>new Promise((l,u)=>i.then(()=>a[0]==="reject"?u(a[1]):l(a[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||kl++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Je=new dy,py=(e,t)=>{let n=(t==null?void 0:t.id)||kl++;return Je.addToast({title:e,...t,id:n}),n},fy=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",hy=py,my=()=>Je.toasts,gy=()=>Je.getActiveToasts(),lh=Object.assign(hy,{success:Je.success,info:Je.info,warning:Je.warning,error:Je.error,custom:Je.custom,message:Je.message,promise:Je.promise,dismiss:Je.dismiss,loading:Je.loading},{getHistory:my,getToasts:gy});function vy(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}vy(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ia(e){return e.label!==void 0}var yy=3,xy="32px",wy="16px",ld=4e3,by=356,Sy=14,Cy=20,Py=200;function ut(...e){return e.filter(Boolean).join(" ")}function Ey(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Ty=e=>{var t,n,r,o,a,i,s,l,u,c,p;let{invert:m,toast:d,unstyled:x,interacting:y,setHeights:b,visibleToasts:f,heights:h,index:g,toasts:S,expanded:C,removeToast:T,defaultRichColors:P,closeButton:N,style:_,cancelButtonStyle:L,actionButtonStyle:U,className:F="",descriptionClassName:V="",duration:W,position:ce,gap:$,loadingIcon:q,expandByDefault:k,classNames:j,icons:I,closeButtonAriaLabel:M="Close toast",pauseWhenPageIsHidden:J}=e,[X,G]=A.useState(null),[he,Pe]=A.useState(null),[Y,ur]=A.useState(!1),[Xt,Jn]=A.useState(!1),[Qt,cr]=A.useState(!1),[Yt,fa]=A.useState(!1),[Zi,ha]=A.useState(!1),[es,so]=A.useState(0),[dr,qu]=A.useState(0),lo=A.useRef(d.duration||W||ld),Vu=A.useRef(null),On=A.useRef(null),xm=g===0,wm=g+1<=f,Qe=d.type,pr=d.dismissible!==!1,bm=d.className||"",Sm=d.descriptionClassName||"",ma=A.useMemo(()=>h.findIndex(O=>O.toastId===d.id)||0,[h,d.id]),Cm=A.useMemo(()=>{var O;return(O=d.closeButton)!=null?O:N},[d.closeButton,N]),Gu=A.useMemo(()=>d.duration||W||ld,[d.duration,W]),ts=A.useRef(0),fr=A.useRef(0),Ku=A.useRef(0),hr=A.useRef(null),[Pm,Em]=ce.split("-"),Xu=A.useMemo(()=>h.reduce((O,ee,ae)=>ae>=ma?O:O+ee.height,0),[h,ma]),Qu=cy(),Tm=d.invert||m,ns=Qe==="loading";fr.current=A.useMemo(()=>ma*$+Xu,[ma,Xu]),A.useEffect(()=>{lo.current=Gu},[Gu]),A.useEffect(()=>{ur(!0)},[]),A.useEffect(()=>{let O=On.current;if(O){let ee=O.getBoundingClientRect().height;return qu(ee),b(ae=>[{toastId:d.id,height:ee,position:d.position},...ae]),()=>b(ae=>ae.filter(at=>at.toastId!==d.id))}},[b,d.id]),A.useLayoutEffect(()=>{if(!Y)return;let O=On.current,ee=O.style.height;O.style.height="auto";let ae=O.getBoundingClientRect().height;O.style.height=ee,qu(ae),b(at=>at.find(it=>it.toastId===d.id)?at.map(it=>it.toastId===d.id?{...it,height:ae}:it):[{toastId:d.id,height:ae,position:d.position},...at])},[Y,d.title,d.description,b,d.id]);let Zt=A.useCallback(()=>{Jn(!0),so(fr.current),b(O=>O.filter(ee=>ee.toastId!==d.id)),setTimeout(()=>{T(d)},Py)},[d,T,b,fr]);A.useEffect(()=>{if(d.promise&&Qe==="loading"||d.duration===1/0||d.type==="loading")return;let O;return C||y||J&&Qu?(()=>{if(Ku.current<ts.current){let ee=new Date().getTime()-ts.current;lo.current=lo.current-ee}Ku.current=new Date().getTime()})():lo.current!==1/0&&(ts.current=new Date().getTime(),O=setTimeout(()=>{var ee;(ee=d.onAutoClose)==null||ee.call(d,d),Zt()},lo.current)),()=>clearTimeout(O)},[C,y,d,Qe,J,Qu,Zt]),A.useEffect(()=>{d.delete&&Zt()},[Zt,d.delete]);function km(){var O,ee,ae;return I!=null&&I.loading?A.createElement("div",{className:ut(j==null?void 0:j.loader,(O=d==null?void 0:d.classNames)==null?void 0:O.loader,"sonner-loader"),"data-visible":Qe==="loading"},I.loading):q?A.createElement("div",{className:ut(j==null?void 0:j.loader,(ee=d==null?void 0:d.classNames)==null?void 0:ee.loader,"sonner-loader"),"data-visible":Qe==="loading"},q):A.createElement(oy,{className:ut(j==null?void 0:j.loader,(ae=d==null?void 0:d.classNames)==null?void 0:ae.loader),visible:Qe==="loading"})}return A.createElement("li",{tabIndex:0,ref:On,className:ut(F,bm,j==null?void 0:j.toast,(t=d==null?void 0:d.classNames)==null?void 0:t.toast,j==null?void 0:j.default,j==null?void 0:j[Qe],(n=d==null?void 0:d.classNames)==null?void 0:n[Qe]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:P,"data-styled":!(d.jsx||d.unstyled||x),"data-mounted":Y,"data-promise":!!d.promise,"data-swiped":Zi,"data-removed":Xt,"data-visible":wm,"data-y-position":Pm,"data-x-position":Em,"data-index":g,"data-front":xm,"data-swiping":Qt,"data-dismissible":pr,"data-type":Qe,"data-invert":Tm,"data-swipe-out":Yt,"data-swipe-direction":he,"data-expanded":!!(C||k&&Y),style:{"--index":g,"--toasts-before":g,"--z-index":S.length-g,"--offset":`${Xt?es:fr.current}px`,"--initial-height":k?"auto":`${dr}px`,..._,...d.style},onDragEnd:()=>{cr(!1),G(null),hr.current=null},onPointerDown:O=>{ns||!pr||(Vu.current=new Date,so(fr.current),O.target.setPointerCapture(O.pointerId),O.target.tagName!=="BUTTON"&&(cr(!0),hr.current={x:O.clientX,y:O.clientY}))},onPointerUp:()=>{var O,ee,ae,at;if(Yt||!pr)return;hr.current=null;let it=Number(((O=On.current)==null?void 0:O.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),en=Number(((ee=On.current)==null?void 0:ee.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),zn=new Date().getTime()-((ae=Vu.current)==null?void 0:ae.getTime()),st=X==="x"?it:en,tn=Math.abs(st)/zn;if(Math.abs(st)>=Cy||tn>.11){so(fr.current),(at=d.onDismiss)==null||at.call(d,d),Pe(X==="x"?it>0?"right":"left":en>0?"down":"up"),Zt(),fa(!0),ha(!1);return}cr(!1),G(null)},onPointerMove:O=>{var ee,ae,at,it;if(!hr.current||!pr||((ee=window.getSelection())==null?void 0:ee.toString().length)>0)return;let en=O.clientY-hr.current.y,zn=O.clientX-hr.current.x,st=(ae=e.swipeDirections)!=null?ae:Ey(ce);!X&&(Math.abs(zn)>1||Math.abs(en)>1)&&G(Math.abs(zn)>Math.abs(en)?"x":"y");let tn={x:0,y:0};X==="y"?(st.includes("top")||st.includes("bottom"))&&(st.includes("top")&&en<0||st.includes("bottom")&&en>0)&&(tn.y=en):X==="x"&&(st.includes("left")||st.includes("right"))&&(st.includes("left")&&zn<0||st.includes("right")&&zn>0)&&(tn.x=zn),(Math.abs(tn.x)>0||Math.abs(tn.y)>0)&&ha(!0),(at=On.current)==null||at.style.setProperty("--swipe-amount-x",`${tn.x}px`),(it=On.current)==null||it.style.setProperty("--swipe-amount-y",`${tn.y}px`)}},Cm&&!d.jsx?A.createElement("button",{"aria-label":M,"data-disabled":ns,"data-close-button":!0,onClick:ns||!pr?()=>{}:()=>{var O;Zt(),(O=d.onDismiss)==null||O.call(d,d)},className:ut(j==null?void 0:j.closeButton,(o=d==null?void 0:d.classNames)==null?void 0:o.closeButton)},(a=I==null?void 0:I.close)!=null?a:uy):null,d.jsx||w.isValidElement(d.title)?d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title:A.createElement(A.Fragment,null,Qe||d.icon||d.promise?A.createElement("div",{"data-icon":"",className:ut(j==null?void 0:j.icon,(i=d==null?void 0:d.classNames)==null?void 0:i.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||km():null,d.type!=="loading"?d.icon||(I==null?void 0:I[Qe])||ny(Qe):null):null,A.createElement("div",{"data-content":"",className:ut(j==null?void 0:j.content,(s=d==null?void 0:d.classNames)==null?void 0:s.content)},A.createElement("div",{"data-title":"",className:ut(j==null?void 0:j.title,(l=d==null?void 0:d.classNames)==null?void 0:l.title)},typeof d.title=="function"?d.title():d.title),d.description?A.createElement("div",{"data-description":"",className:ut(V,Sm,j==null?void 0:j.description,(u=d==null?void 0:d.classNames)==null?void 0:u.description)},typeof d.description=="function"?d.description():d.description):null),w.isValidElement(d.cancel)?d.cancel:d.cancel&&Ia(d.cancel)?A.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||L,onClick:O=>{var ee,ae;Ia(d.cancel)&&pr&&((ae=(ee=d.cancel).onClick)==null||ae.call(ee,O),Zt())},className:ut(j==null?void 0:j.cancelButton,(c=d==null?void 0:d.classNames)==null?void 0:c.cancelButton)},d.cancel.label):null,w.isValidElement(d.action)?d.action:d.action&&Ia(d.action)?A.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||U,onClick:O=>{var ee,ae;Ia(d.action)&&((ae=(ee=d.action).onClick)==null||ae.call(ee,O),!O.defaultPrevented&&Zt())},className:ut(j==null?void 0:j.actionButton,(p=d==null?void 0:d.classNames)==null?void 0:p.actionButton)},d.action.label):null))};function ud(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function ky(e,t){let n={};return[e,t].forEach((r,o)=>{let a=o===1,i=a?"--mobile-offset":"--offset",s=a?wy:xy;function l(u){["top","right","bottom","left"].forEach(c=>{n[`${i}-${c}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${i}-${u}`]=s:n[`${i}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(s)}),n}var jy=w.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:a,closeButton:i,className:s,offset:l,mobileOffset:u,theme:c="light",richColors:p,duration:m,style:d,visibleToasts:x=yy,toastOptions:y,dir:b=ud(),gap:f=Sy,loadingIcon:h,icons:g,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:C}=e,[T,P]=A.useState([]),N=A.useMemo(()=>Array.from(new Set([r].concat(T.filter(J=>J.position).map(J=>J.position)))),[T,r]),[_,L]=A.useState([]),[U,F]=A.useState(!1),[V,W]=A.useState(!1),[ce,$]=A.useState(c!=="system"?c:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),q=A.useRef(null),k=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),j=A.useRef(null),I=A.useRef(!1),M=A.useCallback(J=>{P(X=>{var G;return(G=X.find(he=>he.id===J.id))!=null&&G.delete||Je.dismiss(J.id),X.filter(({id:he})=>he!==J.id)})},[]);return A.useEffect(()=>Je.subscribe(J=>{if(J.dismiss){P(X=>X.map(G=>G.id===J.id?{...G,delete:!0}:G));return}setTimeout(()=>{ty.flushSync(()=>{P(X=>{let G=X.findIndex(he=>he.id===J.id);return G!==-1?[...X.slice(0,G),{...X[G],...J},...X.slice(G+1)]:[J,...X]})})})}),[]),A.useEffect(()=>{if(c!=="system"){$(c);return}if(c==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let J=window.matchMedia("(prefers-color-scheme: dark)");try{J.addEventListener("change",({matches:X})=>{$(X?"dark":"light")})}catch{J.addListener(({matches:G})=>{try{$(G?"dark":"light")}catch(he){console.error(he)}})}},[c]),A.useEffect(()=>{T.length<=1&&F(!1)},[T]),A.useEffect(()=>{let J=X=>{var G,he;o.every(Pe=>X[Pe]||X.code===Pe)&&(F(!0),(G=q.current)==null||G.focus()),X.code==="Escape"&&(document.activeElement===q.current||(he=q.current)!=null&&he.contains(document.activeElement))&&F(!1)};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[o]),A.useEffect(()=>{if(q.current)return()=>{j.current&&(j.current.focus({preventScroll:!0}),j.current=null,I.current=!1)}},[q.current]),A.createElement("section",{ref:t,"aria-label":`${S} ${k}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},N.map((J,X)=>{var G;let[he,Pe]=J.split("-");return T.length?A.createElement("ol",{key:J,dir:b==="auto"?ud():b,tabIndex:-1,ref:q,className:s,"data-sonner-toaster":!0,"data-theme":ce,"data-y-position":he,"data-lifted":U&&T.length>1&&!a,"data-x-position":Pe,style:{"--front-toast-height":`${((G=_[0])==null?void 0:G.height)||0}px`,"--width":`${by}px`,"--gap":`${f}px`,...d,...ky(l,u)},onBlur:Y=>{I.current&&!Y.currentTarget.contains(Y.relatedTarget)&&(I.current=!1,j.current&&(j.current.focus({preventScroll:!0}),j.current=null))},onFocus:Y=>{Y.target instanceof HTMLElement&&Y.target.dataset.dismissible==="false"||I.current||(I.current=!0,j.current=Y.relatedTarget)},onMouseEnter:()=>F(!0),onMouseMove:()=>F(!0),onMouseLeave:()=>{V||F(!1)},onDragEnd:()=>F(!1),onPointerDown:Y=>{Y.target instanceof HTMLElement&&Y.target.dataset.dismissible==="false"||W(!0)},onPointerUp:()=>W(!1)},T.filter(Y=>!Y.position&&X===0||Y.position===J).map((Y,ur)=>{var Xt,Jn;return A.createElement(Ty,{key:Y.id,icons:g,index:ur,toast:Y,defaultRichColors:p,duration:(Xt=y==null?void 0:y.duration)!=null?Xt:m,className:y==null?void 0:y.className,descriptionClassName:y==null?void 0:y.descriptionClassName,invert:n,visibleToasts:x,closeButton:(Jn=y==null?void 0:y.closeButton)!=null?Jn:i,interacting:V,position:J,style:y==null?void 0:y.style,unstyled:y==null?void 0:y.unstyled,classNames:y==null?void 0:y.classNames,cancelButtonStyle:y==null?void 0:y.cancelButtonStyle,actionButtonStyle:y==null?void 0:y.actionButtonStyle,removeToast:M,toasts:T.filter(Qt=>Qt.position==Y.position),heights:_.filter(Qt=>Qt.position==Y.position),setHeights:L,expandByDefault:a,gap:f,loadingIcon:h,expanded:U,pauseWhenPageIsHidden:C,swipeDirections:e.swipeDirections})})):null}))});const Ry=({...e})=>v.jsx(jy,{className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e});function Jt(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function cd(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function uh(...e){return t=>{let n=!1;const r=e.map(o=>{const a=cd(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():cd(e[o],null)}}}}function ir(...e){return w.useCallback(uh(...e),e)}function ch(e,t=[]){let n=[];function r(a,i){const s=w.createContext(i),l=n.length;n=[...n,i];const u=p=>{var f;const{scope:m,children:d,...x}=p,y=((f=m==null?void 0:m[e])==null?void 0:f[l])||s,b=w.useMemo(()=>x,Object.values(x));return v.jsx(y.Provider,{value:b,children:d})};u.displayName=a+"Provider";function c(p,m){var y;const d=((y=m==null?void 0:m[e])==null?void 0:y[l])||s,x=w.useContext(d);if(x)return x;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${a}\``)}return[u,c]}const o=()=>{const a=n.map(i=>w.createContext(i));return function(s){const l=(s==null?void 0:s[e])||a;return w.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Ny(o,...t)]}function Ny(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=r.reduce((s,{useScope:l,scopeName:u})=>{const p=l(a)[`__scope${u}`];return{...s,...p}},{});return w.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function Ay(e){const t=Ly(e),n=w.forwardRef((r,o)=>{const{children:a,...i}=r,s=w.Children.toArray(a),l=s.find(Iy);if(l){const u=l.props.children,c=s.map(p=>p===l?w.Children.count(u)>1?w.Children.only(null):w.isValidElement(u)?u.props.children:null:p);return v.jsx(t,{...i,ref:o,children:w.isValidElement(u)?w.cloneElement(u,void 0,c):null})}return v.jsx(t,{...i,ref:o,children:a})});return n.displayName=`${e}.Slot`,n}function Ly(e){const t=w.forwardRef((n,r)=>{const{children:o,...a}=n;if(w.isValidElement(o)){const i=Fy(o),s=Hy(a,o.props);return o.type!==w.Fragment&&(s.ref=r?uh(r,i):i),w.cloneElement(o,s)}return w.Children.count(o)>1?w.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var dh=Symbol("radix.slottable");function _y(e){const t=({children:n})=>v.jsx(v.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=dh,t}function Iy(e){return w.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===dh}function Hy(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{a(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function Fy(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Jy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],sr=Jy.reduce((e,t)=>{const n=Ay(`Primitive.${t}`),r=w.forwardRef((o,a)=>{const{asChild:i,...s}=o,l=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(l,{...s,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Oy(e,t){e&&Ui.flushSync(()=>e.dispatchEvent(t))}function Wi(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e}),w.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function zy(e,t=globalThis==null?void 0:globalThis.document){const n=Wi(e);w.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Dy="DismissableLayer",jl="dismissableLayer.update",My="dismissableLayer.pointerDownOutside",By="dismissableLayer.focusOutside",dd,ph=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fh=w.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:s,...l}=e,u=w.useContext(ph),[c,p]=w.useState(null),m=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=w.useState({}),x=ir(t,P=>p(P)),y=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),f=y.indexOf(b),h=c?y.indexOf(c):-1,g=u.layersWithOutsidePointerEventsDisabled.size>0,S=h>=f,C=$y(P=>{const N=P.target,_=[...u.branches].some(L=>L.contains(N));!S||_||(o==null||o(P),i==null||i(P),P.defaultPrevented||s==null||s())},m),T=qy(P=>{const N=P.target;[...u.branches].some(L=>L.contains(N))||(a==null||a(P),i==null||i(P),P.defaultPrevented||s==null||s())},m);return zy(P=>{h===u.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&s&&(P.preventDefault(),s()))},m),w.useEffect(()=>{if(c)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(dd=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),pd(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=dd)}},[c,m,n,u]),w.useEffect(()=>()=>{c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),pd())},[c,u]),w.useEffect(()=>{const P=()=>d({});return document.addEventListener(jl,P),()=>document.removeEventListener(jl,P)},[]),v.jsx(sr.div,{...l,ref:x,style:{pointerEvents:g?S?"auto":"none":void 0,...e.style},onFocusCapture:Jt(e.onFocusCapture,T.onFocusCapture),onBlurCapture:Jt(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:Jt(e.onPointerDownCapture,C.onPointerDownCapture)})});fh.displayName=Dy;var Uy="DismissableLayerBranch",Wy=w.forwardRef((e,t)=>{const n=w.useContext(ph),r=w.useRef(null),o=ir(t,r);return w.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),v.jsx(sr.div,{...e,ref:o})});Wy.displayName=Uy;function $y(e,t=globalThis==null?void 0:globalThis.document){const n=Wi(e),r=w.useRef(!1),o=w.useRef(()=>{});return w.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let l=function(){hh(My,n,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function qy(e,t=globalThis==null?void 0:globalThis.document){const n=Wi(e),r=w.useRef(!1);return w.useEffect(()=>{const o=a=>{a.target&&!r.current&&hh(By,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function pd(){const e=new CustomEvent(jl);document.dispatchEvent(e)}function hh(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Oy(o,a):o.dispatchEvent(a)}var Xo=globalThis!=null&&globalThis.document?w.useLayoutEffect:()=>{};const Vy=["top","right","bottom","left"],Nn=Math.min,We=Math.max,bi=Math.round,Ha=Math.floor,Rt=e=>({x:e,y:e}),Gy={left:"right",right:"left",bottom:"top",top:"bottom"},Ky={start:"end",end:"start"};function Rl(e,t,n){return We(e,Nn(t,n))}function Vt(e,t){return typeof e=="function"?e(t):e}function Gt(e){return e.split("-")[0]}function ro(e){return e.split("-")[1]}function Lu(e){return e==="x"?"y":"x"}function _u(e){return e==="y"?"height":"width"}function An(e){return["top","bottom"].includes(Gt(e))?"y":"x"}function Iu(e){return Lu(An(e))}function Xy(e,t,n){n===void 0&&(n=!1);const r=ro(e),o=Iu(e),a=_u(o);let i=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(i=Si(i)),[i,Si(i)]}function Qy(e){const t=Si(e);return[Nl(e),t,Nl(t)]}function Nl(e){return e.replace(/start|end/g,t=>Ky[t])}function Yy(e,t,n){const r=["left","right"],o=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?a:i;default:return[]}}function Zy(e,t,n,r){const o=ro(e);let a=Yy(Gt(e),n==="start",r);return o&&(a=a.map(i=>i+"-"+o),t&&(a=a.concat(a.map(Nl)))),a}function Si(e){return e.replace(/left|right|bottom|top/g,t=>Gy[t])}function e0(e){return{top:0,right:0,bottom:0,left:0,...e}}function mh(e){return typeof e!="number"?e0(e):{top:e,right:e,bottom:e,left:e}}function Ci(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function fd(e,t,n){let{reference:r,floating:o}=e;const a=An(t),i=Iu(t),s=_u(i),l=Gt(t),u=a==="y",c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,m=r[s]/2-o[s]/2;let d;switch(l){case"top":d={x:c,y:r.y-o.height};break;case"bottom":d={x:c,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-o.width,y:p};break;default:d={x:r.x,y:r.y}}switch(ro(t)){case"start":d[i]-=m*(n&&u?-1:1);break;case"end":d[i]+=m*(n&&u?-1:1);break}return d}const t0=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:i}=n,s=a.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:p}=fd(u,r,l),m=r,d={},x=0;for(let y=0;y<s.length;y++){const{name:b,fn:f}=s[y],{x:h,y:g,data:S,reset:C}=await f({x:c,y:p,initialPlacement:r,placement:m,strategy:o,middlewareData:d,rects:u,platform:i,elements:{reference:e,floating:t}});c=h??c,p=g??p,d={...d,[b]:{...d[b],...S}},C&&x<=50&&(x++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(u=C.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:o}):C.rects),{x:c,y:p}=fd(u,m,l)),y=-1)}return{x:c,y:p,placement:m,strategy:o,middlewareData:d}};async function Qo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:i,elements:s,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:p="floating",altBoundary:m=!1,padding:d=0}=Vt(t,e),x=mh(d),b=s[m?p==="floating"?"reference":"floating":p],f=Ci(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:l})),h=p==="floating"?{x:r,y:o,width:i.floating.width,height:i.floating.height}:i.reference,g=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),S=await(a.isElement==null?void 0:a.isElement(g))?await(a.getScale==null?void 0:a.getScale(g))||{x:1,y:1}:{x:1,y:1},C=Ci(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:g,strategy:l}):h);return{top:(f.top-C.top+x.top)/S.y,bottom:(C.bottom-f.bottom+x.bottom)/S.y,left:(f.left-C.left+x.left)/S.x,right:(C.right-f.right+x.right)/S.x}}const n0=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:a,platform:i,elements:s,middlewareData:l}=t,{element:u,padding:c=0}=Vt(e,t)||{};if(u==null)return{};const p=mh(c),m={x:n,y:r},d=Iu(o),x=_u(d),y=await i.getDimensions(u),b=d==="y",f=b?"top":"left",h=b?"bottom":"right",g=b?"clientHeight":"clientWidth",S=a.reference[x]+a.reference[d]-m[d]-a.floating[x],C=m[d]-a.reference[d],T=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let P=T?T[g]:0;(!P||!await(i.isElement==null?void 0:i.isElement(T)))&&(P=s.floating[g]||a.floating[x]);const N=S/2-C/2,_=P/2-y[x]/2-1,L=Nn(p[f],_),U=Nn(p[h],_),F=L,V=P-y[x]-U,W=P/2-y[x]/2+N,ce=Rl(F,W,V),$=!l.arrow&&ro(o)!=null&&W!==ce&&a.reference[x]/2-(W<F?L:U)-y[x]/2<0,q=$?W<F?W-F:W-V:0;return{[d]:m[d]+q,data:{[d]:ce,centerOffset:W-ce-q,...$&&{alignmentOffset:q}},reset:$}}}),r0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:a,rects:i,initialPlacement:s,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:y=!0,...b}=Vt(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const f=Gt(o),h=An(s),g=Gt(s)===s,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),C=m||(g||!y?[Si(s)]:Qy(s)),T=x!=="none";!m&&T&&C.push(...Zy(s,y,x,S));const P=[s,...C],N=await Qo(t,b),_=[];let L=((r=a.flip)==null?void 0:r.overflows)||[];if(c&&_.push(N[f]),p){const W=Xy(o,i,S);_.push(N[W[0]],N[W[1]])}if(L=[...L,{placement:o,overflows:_}],!_.every(W=>W<=0)){var U,F;const W=(((U=a.flip)==null?void 0:U.index)||0)+1,ce=P[W];if(ce)return{data:{index:W,overflows:L},reset:{placement:ce}};let $=(F=L.filter(q=>q.overflows[0]<=0).sort((q,k)=>q.overflows[1]-k.overflows[1])[0])==null?void 0:F.placement;if(!$)switch(d){case"bestFit":{var V;const q=(V=L.filter(k=>{if(T){const j=An(k.placement);return j===h||j==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(j=>j>0).reduce((j,I)=>j+I,0)]).sort((k,j)=>k[1]-j[1])[0])==null?void 0:V[0];q&&($=q);break}case"initialPlacement":$=s;break}if(o!==$)return{reset:{placement:$}}}return{}}}};function hd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function md(e){return Vy.some(t=>e[t]>=0)}const o0=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Vt(e,t);switch(r){case"referenceHidden":{const a=await Qo(t,{...o,elementContext:"reference"}),i=hd(a,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:md(i)}}}case"escaped":{const a=await Qo(t,{...o,altBoundary:!0}),i=hd(a,n.floating);return{data:{escapedOffsets:i,escaped:md(i)}}}default:return{}}}}};async function a0(e,t){const{placement:n,platform:r,elements:o}=e,a=await(r.isRTL==null?void 0:r.isRTL(o.floating)),i=Gt(n),s=ro(n),l=An(n)==="y",u=["left","top"].includes(i)?-1:1,c=a&&l?-1:1,p=Vt(t,e);let{mainAxis:m,crossAxis:d,alignmentAxis:x}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return s&&typeof x=="number"&&(d=s==="end"?x*-1:x),l?{x:d*c,y:m*u}:{x:m*u,y:d*c}}const i0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:a,placement:i,middlewareData:s}=t,l=await a0(t,e);return i===((n=s.offset)==null?void 0:n.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:a+l.y,data:{...l,placement:i}}}}},s0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:a=!0,crossAxis:i=!1,limiter:s={fn:b=>{let{x:f,y:h}=b;return{x:f,y:h}}},...l}=Vt(e,t),u={x:n,y:r},c=await Qo(t,l),p=An(Gt(o)),m=Lu(p);let d=u[m],x=u[p];if(a){const b=m==="y"?"top":"left",f=m==="y"?"bottom":"right",h=d+c[b],g=d-c[f];d=Rl(h,d,g)}if(i){const b=p==="y"?"top":"left",f=p==="y"?"bottom":"right",h=x+c[b],g=x-c[f];x=Rl(h,x,g)}const y=s.fn({...t,[m]:d,[p]:x});return{...y,data:{x:y.x-n,y:y.y-r,enabled:{[m]:a,[p]:i}}}}}},l0=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:a,middlewareData:i}=t,{offset:s=0,mainAxis:l=!0,crossAxis:u=!0}=Vt(e,t),c={x:n,y:r},p=An(o),m=Lu(p);let d=c[m],x=c[p];const y=Vt(s,t),b=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const g=m==="y"?"height":"width",S=a.reference[m]-a.floating[g]+b.mainAxis,C=a.reference[m]+a.reference[g]-b.mainAxis;d<S?d=S:d>C&&(d=C)}if(u){var f,h;const g=m==="y"?"width":"height",S=["top","left"].includes(Gt(o)),C=a.reference[p]-a.floating[g]+(S&&((f=i.offset)==null?void 0:f[p])||0)+(S?0:b.crossAxis),T=a.reference[p]+a.reference[g]+(S?0:((h=i.offset)==null?void 0:h[p])||0)-(S?b.crossAxis:0);x<C?x=C:x>T&&(x=T)}return{[m]:d,[p]:x}}}},u0=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:a,platform:i,elements:s}=t,{apply:l=()=>{},...u}=Vt(e,t),c=await Qo(t,u),p=Gt(o),m=ro(o),d=An(o)==="y",{width:x,height:y}=a.floating;let b,f;p==="top"||p==="bottom"?(b=p,f=m===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(f=p,b=m==="end"?"top":"bottom");const h=y-c.top-c.bottom,g=x-c.left-c.right,S=Nn(y-c[b],h),C=Nn(x-c[f],g),T=!t.middlewareData.shift;let P=S,N=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(N=g),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(P=h),T&&!m){const L=We(c.left,0),U=We(c.right,0),F=We(c.top,0),V=We(c.bottom,0);d?N=x-2*(L!==0||U!==0?L+U:We(c.left,c.right)):P=y-2*(F!==0||V!==0?F+V:We(c.top,c.bottom))}await l({...t,availableWidth:N,availableHeight:P});const _=await i.getDimensions(s.floating);return x!==_.width||y!==_.height?{reset:{rects:!0}}:{}}}};function $i(){return typeof window<"u"}function oo(e){return gh(e)?(e.nodeName||"").toLowerCase():"#document"}function Ve(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function At(e){var t;return(t=(gh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gh(e){return $i()?e instanceof Node||e instanceof Ve(e).Node:!1}function xt(e){return $i()?e instanceof Element||e instanceof Ve(e).Element:!1}function Nt(e){return $i()?e instanceof HTMLElement||e instanceof Ve(e).HTMLElement:!1}function gd(e){return!$i()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ve(e).ShadowRoot}function ca(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=wt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function c0(e){return["table","td","th"].includes(oo(e))}function qi(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Hu(e){const t=Fu(),n=xt(e)?wt(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function d0(e){let t=Ln(e);for(;Nt(t)&&!Yr(t);){if(Hu(t))return t;if(qi(t))return null;t=Ln(t)}return null}function Fu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Yr(e){return["html","body","#document"].includes(oo(e))}function wt(e){return Ve(e).getComputedStyle(e)}function Vi(e){return xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ln(e){if(oo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||gd(e)&&e.host||At(e);return gd(t)?t.host:t}function vh(e){const t=Ln(e);return Yr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Nt(t)&&ca(t)?t:vh(t)}function Yo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=vh(e),a=o===((r=e.ownerDocument)==null?void 0:r.body),i=Ve(o);if(a){const s=Al(i);return t.concat(i,i.visualViewport||[],ca(o)?o:[],s&&n?Yo(s):[])}return t.concat(o,Yo(o,[],n))}function Al(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function yh(e){const t=wt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Nt(e),a=o?e.offsetWidth:n,i=o?e.offsetHeight:r,s=bi(n)!==a||bi(r)!==i;return s&&(n=a,r=i),{width:n,height:r,$:s}}function Ju(e){return xt(e)?e:e.contextElement}function Ir(e){const t=Ju(e);if(!Nt(t))return Rt(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:a}=yh(t);let i=(a?bi(n.width):n.width)/r,s=(a?bi(n.height):n.height)/o;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const p0=Rt(0);function xh(e){const t=Ve(e);return!Fu()||!t.visualViewport?p0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function f0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ve(e)?!1:t}function rr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),a=Ju(e);let i=Rt(1);t&&(r?xt(r)&&(i=Ir(r)):i=Ir(e));const s=f0(a,n,r)?xh(a):Rt(0);let l=(o.left+s.x)/i.x,u=(o.top+s.y)/i.y,c=o.width/i.x,p=o.height/i.y;if(a){const m=Ve(a),d=r&&xt(r)?Ve(r):r;let x=m,y=Al(x);for(;y&&r&&d!==x;){const b=Ir(y),f=y.getBoundingClientRect(),h=wt(y),g=f.left+(y.clientLeft+parseFloat(h.paddingLeft))*b.x,S=f.top+(y.clientTop+parseFloat(h.paddingTop))*b.y;l*=b.x,u*=b.y,c*=b.x,p*=b.y,l+=g,u+=S,x=Ve(y),y=Al(x)}}return Ci({width:c,height:p,x:l,y:u})}function Ou(e,t){const n=Vi(e).scrollLeft;return t?t.left+n:rr(At(e)).left+n}function wh(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:Ou(e,r)),a=r.top+t.scrollTop;return{x:o,y:a}}function h0(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const a=o==="fixed",i=At(r),s=t?qi(t.floating):!1;if(r===i||s&&a)return n;let l={scrollLeft:0,scrollTop:0},u=Rt(1);const c=Rt(0),p=Nt(r);if((p||!p&&!a)&&((oo(r)!=="body"||ca(i))&&(l=Vi(r)),Nt(r))){const d=rr(r);u=Ir(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}const m=i&&!p&&!a?wh(i,l,!0):Rt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+c.x+m.x,y:n.y*u.y-l.scrollTop*u.y+c.y+m.y}}function m0(e){return Array.from(e.getClientRects())}function g0(e){const t=At(e),n=Vi(e),r=e.ownerDocument.body,o=We(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=We(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-n.scrollLeft+Ou(e);const s=-n.scrollTop;return wt(r).direction==="rtl"&&(i+=We(t.clientWidth,r.clientWidth)-o),{width:o,height:a,x:i,y:s}}function v0(e,t){const n=Ve(e),r=At(e),o=n.visualViewport;let a=r.clientWidth,i=r.clientHeight,s=0,l=0;if(o){a=o.width,i=o.height;const u=Fu();(!u||u&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:a,height:i,x:s,y:l}}function y0(e,t){const n=rr(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,a=Nt(e)?Ir(e):Rt(1),i=e.clientWidth*a.x,s=e.clientHeight*a.y,l=o*a.x,u=r*a.y;return{width:i,height:s,x:l,y:u}}function vd(e,t,n){let r;if(t==="viewport")r=v0(e,n);else if(t==="document")r=g0(At(e));else if(xt(t))r=y0(t,n);else{const o=xh(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Ci(r)}function bh(e,t){const n=Ln(e);return n===t||!xt(n)||Yr(n)?!1:wt(n).position==="fixed"||bh(n,t)}function x0(e,t){const n=t.get(e);if(n)return n;let r=Yo(e,[],!1).filter(s=>xt(s)&&oo(s)!=="body"),o=null;const a=wt(e).position==="fixed";let i=a?Ln(e):e;for(;xt(i)&&!Yr(i);){const s=wt(i),l=Hu(i);!l&&s.position==="fixed"&&(o=null),(a?!l&&!o:!l&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||ca(i)&&!l&&bh(e,i))?r=r.filter(c=>c!==i):o=s,i=Ln(i)}return t.set(e,r),r}function w0(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[...n==="clippingAncestors"?qi(t)?[]:x0(t,this._c):[].concat(n),r],s=i[0],l=i.reduce((u,c)=>{const p=vd(t,c,o);return u.top=We(p.top,u.top),u.right=Nn(p.right,u.right),u.bottom=Nn(p.bottom,u.bottom),u.left=We(p.left,u.left),u},vd(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function b0(e){const{width:t,height:n}=yh(e);return{width:t,height:n}}function S0(e,t,n){const r=Nt(t),o=At(t),a=n==="fixed",i=rr(e,!0,a,t);let s={scrollLeft:0,scrollTop:0};const l=Rt(0);if(r||!r&&!a)if((oo(t)!=="body"||ca(o))&&(s=Vi(t)),r){const m=rr(t,!0,a,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else o&&(l.x=Ou(o));const u=o&&!r&&!a?wh(o,s):Rt(0),c=i.left+s.scrollLeft-l.x-u.x,p=i.top+s.scrollTop-l.y-u.y;return{x:c,y:p,width:i.width,height:i.height}}function Ns(e){return wt(e).position==="static"}function yd(e,t){if(!Nt(e)||wt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return At(e)===n&&(n=n.ownerDocument.body),n}function Sh(e,t){const n=Ve(e);if(qi(e))return n;if(!Nt(e)){let o=Ln(e);for(;o&&!Yr(o);){if(xt(o)&&!Ns(o))return o;o=Ln(o)}return n}let r=yd(e,t);for(;r&&c0(r)&&Ns(r);)r=yd(r,t);return r&&Yr(r)&&Ns(r)&&!Hu(r)?n:r||d0(e)||n}const C0=async function(e){const t=this.getOffsetParent||Sh,n=this.getDimensions,r=await n(e.floating);return{reference:S0(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function P0(e){return wt(e).direction==="rtl"}const E0={convertOffsetParentRelativeRectToViewportRelativeRect:h0,getDocumentElement:At,getClippingRect:w0,getOffsetParent:Sh,getElementRects:C0,getClientRects:m0,getDimensions:b0,getScale:Ir,isElement:xt,isRTL:P0};function Ch(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function T0(e,t){let n=null,r;const o=At(e);function a(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function i(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),a();const u=e.getBoundingClientRect(),{left:c,top:p,width:m,height:d}=u;if(s||t(),!m||!d)return;const x=Ha(p),y=Ha(o.clientWidth-(c+m)),b=Ha(o.clientHeight-(p+d)),f=Ha(c),g={rootMargin:-x+"px "+-y+"px "+-b+"px "+-f+"px",threshold:We(0,Nn(1,l))||1};let S=!0;function C(T){const P=T[0].intersectionRatio;if(P!==l){if(!S)return i();P?i(!1,P):r=setTimeout(()=>{i(!1,1e-7)},1e3)}P===1&&!Ch(u,e.getBoundingClientRect())&&i(),S=!1}try{n=new IntersectionObserver(C,{...g,root:o.ownerDocument})}catch{n=new IntersectionObserver(C,g)}n.observe(e)}return i(!0),a}function k0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Ju(e),c=o||a?[...u?Yo(u):[],...Yo(t)]:[];c.forEach(f=>{o&&f.addEventListener("scroll",n,{passive:!0}),a&&f.addEventListener("resize",n)});const p=u&&s?T0(u,n):null;let m=-1,d=null;i&&(d=new ResizeObserver(f=>{let[h]=f;h&&h.target===u&&d&&(d.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var g;(g=d)==null||g.observe(t)})),n()}),u&&!l&&d.observe(u),d.observe(t));let x,y=l?rr(e):null;l&&b();function b(){const f=rr(e);y&&!Ch(y,f)&&n(),y=f,x=requestAnimationFrame(b)}return n(),()=>{var f;c.forEach(h=>{o&&h.removeEventListener("scroll",n),a&&h.removeEventListener("resize",n)}),p==null||p(),(f=d)==null||f.disconnect(),d=null,l&&cancelAnimationFrame(x)}}const j0=i0,R0=s0,N0=r0,A0=u0,L0=o0,xd=n0,_0=l0,I0=(e,t,n)=>{const r=new Map,o={platform:E0,...n},a={...o.platform,_c:r};return t0(e,t,{...o,platform:a})};var Xa=typeof document<"u"?w.useLayoutEffect:w.useEffect;function Pi(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Pi(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const a=o[r];if(!(a==="_owner"&&e.$$typeof)&&!Pi(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Ph(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function wd(e,t){const n=Ph(e);return Math.round(t*n)/n}function As(e){const t=w.useRef(e);return Xa(()=>{t.current=e}),t}function H0(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:i}={},transform:s=!0,whileElementsMounted:l,open:u}=e,[c,p]=w.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,d]=w.useState(r);Pi(m,r)||d(r);const[x,y]=w.useState(null),[b,f]=w.useState(null),h=w.useCallback(k=>{k!==T.current&&(T.current=k,y(k))},[]),g=w.useCallback(k=>{k!==P.current&&(P.current=k,f(k))},[]),S=a||x,C=i||b,T=w.useRef(null),P=w.useRef(null),N=w.useRef(c),_=l!=null,L=As(l),U=As(o),F=As(u),V=w.useCallback(()=>{if(!T.current||!P.current)return;const k={placement:t,strategy:n,middleware:m};U.current&&(k.platform=U.current),I0(T.current,P.current,k).then(j=>{const I={...j,isPositioned:F.current!==!1};W.current&&!Pi(N.current,I)&&(N.current=I,Ui.flushSync(()=>{p(I)}))})},[m,t,n,U,F]);Xa(()=>{u===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,p(k=>({...k,isPositioned:!1})))},[u]);const W=w.useRef(!1);Xa(()=>(W.current=!0,()=>{W.current=!1}),[]),Xa(()=>{if(S&&(T.current=S),C&&(P.current=C),S&&C){if(L.current)return L.current(S,C,V);V()}},[S,C,V,L,_]);const ce=w.useMemo(()=>({reference:T,floating:P,setReference:h,setFloating:g}),[h,g]),$=w.useMemo(()=>({reference:S,floating:C}),[S,C]),q=w.useMemo(()=>{const k={position:n,left:0,top:0};if(!$.floating)return k;const j=wd($.floating,c.x),I=wd($.floating,c.y);return s?{...k,transform:"translate("+j+"px, "+I+"px)",...Ph($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:I}},[n,s,$.floating,c.x,c.y]);return w.useMemo(()=>({...c,update:V,refs:ce,elements:$,floatingStyles:q}),[c,V,ce,$,q])}const F0=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?xd({element:r.current,padding:o}).fn(n):{}:r?xd({element:r,padding:o}).fn(n):{}}}},J0=(e,t)=>({...j0(e),options:[e,t]}),O0=(e,t)=>({...R0(e),options:[e,t]}),z0=(e,t)=>({..._0(e),options:[e,t]}),D0=(e,t)=>({...N0(e),options:[e,t]}),M0=(e,t)=>({...A0(e),options:[e,t]}),B0=(e,t)=>({...L0(e),options:[e,t]}),U0=(e,t)=>({...F0(e),options:[e,t]});var W0="Arrow",Eh=w.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...a}=e;return v.jsx(sr.svg,{...a,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:v.jsx("polygon",{points:"0,0 30,0 15,10"})})});Eh.displayName=W0;var $0=Eh;function q0(e){const[t,n]=w.useState(void 0);return Xo(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let i,s;if("borderBoxSize"in a){const l=a.borderBoxSize,u=Array.isArray(l)?l[0]:l;i=u.inlineSize,s=u.blockSize}else i=e.offsetWidth,s=e.offsetHeight;n({width:i,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Th="Popper",[kh,jh]=ch(Th),[P2,Rh]=kh(Th),Nh="PopperAnchor",Ah=w.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,a=Rh(Nh,n),i=w.useRef(null),s=ir(t,i);return w.useEffect(()=>{a.onAnchorChange((r==null?void 0:r.current)||i.current)}),r?null:v.jsx(sr.div,{...o,ref:s})});Ah.displayName=Nh;var zu="PopperContent",[V0,G0]=kh(zu),Lh=w.forwardRef((e,t)=>{var Y,ur,Xt,Jn,Qt,cr;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:a="center",alignOffset:i=0,arrowPadding:s=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:p="partial",hideWhenDetached:m=!1,updatePositionStrategy:d="optimized",onPlaced:x,...y}=e,b=Rh(zu,n),[f,h]=w.useState(null),g=ir(t,Yt=>h(Yt)),[S,C]=w.useState(null),T=q0(S),P=(T==null?void 0:T.width)??0,N=(T==null?void 0:T.height)??0,_=r+(a!=="center"?"-"+a:""),L=typeof c=="number"?c:{top:0,right:0,bottom:0,left:0,...c},U=Array.isArray(u)?u:[u],F=U.length>0,V={padding:L,boundary:U.filter(X0),altBoundary:F},{refs:W,floatingStyles:ce,placement:$,isPositioned:q,middlewareData:k}=H0({strategy:"fixed",placement:_,whileElementsMounted:(...Yt)=>k0(...Yt,{animationFrame:d==="always"}),elements:{reference:b.anchor},middleware:[J0({mainAxis:o+N,alignmentAxis:i}),l&&O0({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?z0():void 0,...V}),l&&D0({...V}),M0({...V,apply:({elements:Yt,rects:fa,availableWidth:Zi,availableHeight:ha})=>{const{width:es,height:so}=fa.reference,dr=Yt.floating.style;dr.setProperty("--radix-popper-available-width",`${Zi}px`),dr.setProperty("--radix-popper-available-height",`${ha}px`),dr.setProperty("--radix-popper-anchor-width",`${es}px`),dr.setProperty("--radix-popper-anchor-height",`${so}px`)}}),S&&U0({element:S,padding:s}),Q0({arrowWidth:P,arrowHeight:N}),m&&B0({strategy:"referenceHidden",...V})]}),[j,I]=Hh($),M=Wi(x);Xo(()=>{q&&(M==null||M())},[q,M]);const J=(Y=k.arrow)==null?void 0:Y.x,X=(ur=k.arrow)==null?void 0:ur.y,G=((Xt=k.arrow)==null?void 0:Xt.centerOffset)!==0,[he,Pe]=w.useState();return Xo(()=>{f&&Pe(window.getComputedStyle(f).zIndex)},[f]),v.jsx("div",{ref:W.setFloating,"data-radix-popper-content-wrapper":"",style:{...ce,transform:q?ce.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:he,"--radix-popper-transform-origin":[(Jn=k.transformOrigin)==null?void 0:Jn.x,(Qt=k.transformOrigin)==null?void 0:Qt.y].join(" "),...((cr=k.hide)==null?void 0:cr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:v.jsx(V0,{scope:n,placedSide:j,onArrowChange:C,arrowX:J,arrowY:X,shouldHideArrow:G,children:v.jsx(sr.div,{"data-side":j,"data-align":I,...y,ref:g,style:{...y.style,animation:q?void 0:"none"}})})})});Lh.displayName=zu;var _h="PopperArrow",K0={top:"bottom",right:"left",bottom:"top",left:"right"},Ih=w.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,a=G0(_h,r),i=K0[a.placedSide];return v.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:v.jsx($0,{...o,ref:n,style:{...o.style,display:"block"}})})});Ih.displayName=_h;function X0(e){return e!==null}var Q0=e=>({name:"transformOrigin",options:e,fn(t){var b,f,h;const{placement:n,rects:r,middlewareData:o}=t,i=((b=o.arrow)==null?void 0:b.centerOffset)!==0,s=i?0:e.arrowWidth,l=i?0:e.arrowHeight,[u,c]=Hh(n),p={start:"0%",center:"50%",end:"100%"}[c],m=(((f=o.arrow)==null?void 0:f.x)??0)+s/2,d=(((h=o.arrow)==null?void 0:h.y)??0)+l/2;let x="",y="";return u==="bottom"?(x=i?p:`${m}px`,y=`${-l}px`):u==="top"?(x=i?p:`${m}px`,y=`${r.floating.height+l}px`):u==="right"?(x=`${-l}px`,y=i?p:`${d}px`):u==="left"&&(x=`${r.floating.width+l}px`,y=i?p:`${d}px`),{data:{x,y}}}});function Hh(e){const[t,n="center"]=e.split("-");return[t,n]}var Y0=Ah,Z0=Lh,e1=Ih;function t1(e,t){return w.useReducer((n,r)=>t[n][r]??n,e)}var Fh=e=>{const{present:t,children:n}=e,r=n1(t),o=typeof n=="function"?n({present:r.isPresent}):w.Children.only(n),a=ir(r.ref,r1(o));return typeof n=="function"||r.isPresent?w.cloneElement(o,{ref:a}):null};Fh.displayName="Presence";function n1(e){const[t,n]=w.useState(),r=w.useRef({}),o=w.useRef(e),a=w.useRef("none"),i=e?"mounted":"unmounted",[s,l]=t1(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const u=Fa(r.current);a.current=s==="mounted"?u:"none"},[s]),Xo(()=>{const u=r.current,c=o.current;if(c!==e){const m=a.current,d=Fa(u);e?l("MOUNT"):d==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&m!==d?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Xo(()=>{if(t){let u;const c=t.ownerDocument.defaultView??window,p=d=>{const y=Fa(r.current).includes(d.animationName);if(d.target===t&&y&&(l("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=c.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},m=d=>{d.target===t&&(a.current=Fa(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{c.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:w.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Fa(e){return(e==null?void 0:e.animationName)||"none"}function r1(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var o1="VisuallyHidden",Jh=w.forwardRef((e,t)=>v.jsx(sr.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Jh.displayName=o1;var a1=Jh,[Gi,E2]=ch("Tooltip",[jh]),Du=jh(),Oh="TooltipProvider",i1=700,bd="tooltip.open",[s1,zh]=Gi(Oh),Dh=e=>{const{__scopeTooltip:t,delayDuration:n=i1,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:a}=e,i=w.useRef(!0),s=w.useRef(!1),l=w.useRef(0);return w.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),v.jsx(s1,{scope:t,isOpenDelayedRef:i,delayDuration:n,onOpen:w.useCallback(()=>{window.clearTimeout(l.current),i.current=!1},[]),onClose:w.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>i.current=!0,r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:w.useCallback(u=>{s.current=u},[]),disableHoverableContent:o,children:a})};Dh.displayName=Oh;var Mh="Tooltip",[T2,Ki]=Gi(Mh),Ll="TooltipTrigger",l1=w.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Ki(Ll,n),a=zh(Ll,n),i=Du(n),s=w.useRef(null),l=ir(t,s,o.onTriggerChange),u=w.useRef(!1),c=w.useRef(!1),p=w.useCallback(()=>u.current=!1,[]);return w.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),v.jsx(Y0,{asChild:!0,...i,children:v.jsx(sr.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:l,onPointerMove:Jt(e.onPointerMove,m=>{m.pointerType!=="touch"&&!c.current&&!a.isPointerInTransitRef.current&&(o.onTriggerEnter(),c.current=!0)}),onPointerLeave:Jt(e.onPointerLeave,()=>{o.onTriggerLeave(),c.current=!1}),onPointerDown:Jt(e.onPointerDown,()=>{o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:Jt(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:Jt(e.onBlur,o.onClose),onClick:Jt(e.onClick,o.onClose)})})});l1.displayName=Ll;var u1="TooltipPortal",[k2,c1]=Gi(u1,{forceMount:void 0}),Zr="TooltipContent",Bh=w.forwardRef((e,t)=>{const n=c1(Zr,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...a}=e,i=Ki(Zr,e.__scopeTooltip);return v.jsx(Fh,{present:r||i.open,children:i.disableHoverableContent?v.jsx(Uh,{side:o,...a,ref:t}):v.jsx(d1,{side:o,...a,ref:t})})}),d1=w.forwardRef((e,t)=>{const n=Ki(Zr,e.__scopeTooltip),r=zh(Zr,e.__scopeTooltip),o=w.useRef(null),a=ir(t,o),[i,s]=w.useState(null),{trigger:l,onClose:u}=n,c=o.current,{onPointerInTransitChange:p}=r,m=w.useCallback(()=>{s(null),p(!1)},[p]),d=w.useCallback((x,y)=>{const b=x.currentTarget,f={x:x.clientX,y:x.clientY},h=g1(f,b.getBoundingClientRect()),g=v1(f,h),S=y1(y.getBoundingClientRect()),C=w1([...g,...S]);s(C),p(!0)},[p]);return w.useEffect(()=>()=>m(),[m]),w.useEffect(()=>{if(l&&c){const x=b=>d(b,c),y=b=>d(b,l);return l.addEventListener("pointerleave",x),c.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",x),c.removeEventListener("pointerleave",y)}}},[l,c,d,m]),w.useEffect(()=>{if(i){const x=y=>{const b=y.target,f={x:y.clientX,y:y.clientY},h=(l==null?void 0:l.contains(b))||(c==null?void 0:c.contains(b)),g=!x1(f,i);h?m():g&&(m(),u())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[l,c,i,u,m]),v.jsx(Uh,{...e,ref:a})}),[p1,f1]=Gi(Mh,{isInside:!1}),h1=_y("TooltipContent"),Uh=w.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:a,onPointerDownOutside:i,...s}=e,l=Ki(Zr,n),u=Du(n),{onClose:c}=l;return w.useEffect(()=>(document.addEventListener(bd,c),()=>document.removeEventListener(bd,c)),[c]),w.useEffect(()=>{if(l.trigger){const p=m=>{const d=m.target;d!=null&&d.contains(l.trigger)&&c()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,c]),v.jsx(fh,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:p=>p.preventDefault(),onDismiss:c,children:v.jsxs(Z0,{"data-state":l.stateAttribute,...u,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[v.jsx(h1,{children:r}),v.jsx(p1,{scope:n,isInside:!0,children:v.jsx(a1,{id:l.contentId,role:"tooltip",children:o||r})})]})})});Bh.displayName=Zr;var Wh="TooltipArrow",m1=w.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Du(n);return f1(Wh,n).isInside?null:v.jsx(e1,{...o,...r,ref:t})});m1.displayName=Wh;function g1(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,o,a)){case a:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function v1(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function y1(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function x1(e,t){const{x:n,y:r}=e;let o=!1;for(let a=0,i=t.length-1;a<t.length;i=a++){const s=t[a].x,l=t[a].y,u=t[i].x,c=t[i].y;l>r!=c>r&&n<(u-s)*(r-l)/(c-l)+s&&(o=!o)}return o}function w1(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),b1(t)}function b1(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const a=t[t.length-1],i=t[t.length-2];if((a.x-i.x)*(o.y-i.y)>=(a.y-i.y)*(o.x-i.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const a=n[n.length-1],i=n[n.length-2];if((a.x-i.x)*(o.y-i.y)>=(a.y-i.y)*(o.x-i.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var S1=Dh,$h=Bh;function qh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=qh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function C1(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=qh(e))&&(r&&(r+=" "),r+=t);return r}const Mu="-",P1=e=>{const t=T1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{const s=i.split(Mu);return s[0]===""&&s.length!==1&&s.shift(),Vh(s,t)||E1(i)},getConflictingClassGroupIds:(i,s)=>{const l=n[i]||[];return s&&r[i]?[...l,...r[i]]:l}}},Vh=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Vh(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const a=e.join(Mu);return(i=t.validators.find(({validator:s})=>s(a)))==null?void 0:i.classGroupId},Sd=/^\[(.+)\]$/,E1=e=>{if(Sd.test(e)){const t=Sd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},T1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return j1(Object.entries(e.classGroups),n).forEach(([a,i])=>{_l(i,r,a,t)}),r},_l=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const a=o===""?t:Cd(t,o);a.classGroupId=n;return}if(typeof o=="function"){if(k1(o)){_l(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([a,i])=>{_l(i,Cd(t,a),n,r)})})},Cd=(e,t)=>{let n=e;return t.split(Mu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},k1=e=>e.isThemeGetter,j1=(e,t)=>t?e.map(([n,r])=>{const o=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([i,s])=>[t+i,s])):a);return[n,o]}):e,R1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(a,i)=>{n.set(a,i),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let i=n.get(a);if(i!==void 0)return i;if((i=r.get(a))!==void 0)return o(a,i),i},set(a,i){n.has(a)?n.set(a,i):o(a,i)}}},Gh="!",N1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],a=t.length,i=s=>{const l=[];let u=0,c=0,p;for(let b=0;b<s.length;b++){let f=s[b];if(u===0){if(f===o&&(r||s.slice(b,b+a)===t)){l.push(s.slice(c,b)),c=b+a;continue}if(f==="/"){p=b;continue}}f==="["?u++:f==="]"&&u--}const m=l.length===0?s:s.substring(c),d=m.startsWith(Gh),x=d?m.substring(1):m,y=p&&p>c?p-c:void 0;return{modifiers:l,hasImportantModifier:d,baseClassName:x,maybePostfixModifierPosition:y}};return n?s=>n({className:s,parseClassName:i}):i},A1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},L1=e=>({cache:R1(e.cacheSize),parseClassName:N1(e),...P1(e)}),_1=/\s+/,I1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,a=[],i=e.trim().split(_1);let s="";for(let l=i.length-1;l>=0;l-=1){const u=i[l],{modifiers:c,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:d}=n(u);let x=!!d,y=r(x?m.substring(0,d):m);if(!y){if(!x){s=u+(s.length>0?" "+s:s);continue}if(y=r(m),!y){s=u+(s.length>0?" "+s:s);continue}x=!1}const b=A1(c).join(":"),f=p?b+Gh:b,h=f+y;if(a.includes(h))continue;a.push(h);const g=o(y,x);for(let S=0;S<g.length;++S){const C=g[S];a.push(f+C)}s=u+(s.length>0?" "+s:s)}return s};function H1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Kh(t))&&(r&&(r+=" "),r+=n);return r}const Kh=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Kh(e[r]))&&(n&&(n+=" "),n+=t);return n};function F1(e,...t){let n,r,o,a=i;function i(l){const u=t.reduce((c,p)=>p(c),e());return n=L1(u),r=n.cache.get,o=n.cache.set,a=s,s(l)}function s(l){const u=r(l);if(u)return u;const c=I1(l,n);return o(l,c),c}return function(){return a(H1.apply(null,arguments))}}const ne=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Xh=/^\[(?:([a-z-]+):)?(.+)\]$/i,J1=/^\d+\/\d+$/,O1=new Set(["px","full","screen"]),z1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,D1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,M1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,B1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,U1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Lt=e=>Hr(e)||O1.has(e)||J1.test(e),rn=e=>ao(e,"length",Q1),Hr=e=>!!e&&!Number.isNaN(Number(e)),Ls=e=>ao(e,"number",Hr),yo=e=>!!e&&Number.isInteger(Number(e)),W1=e=>e.endsWith("%")&&Hr(e.slice(0,-1)),D=e=>Xh.test(e),on=e=>z1.test(e),$1=new Set(["length","size","percentage"]),q1=e=>ao(e,$1,Qh),V1=e=>ao(e,"position",Qh),G1=new Set(["image","url"]),K1=e=>ao(e,G1,Z1),X1=e=>ao(e,"",Y1),xo=()=>!0,ao=(e,t,n)=>{const r=Xh.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Q1=e=>D1.test(e)&&!M1.test(e),Qh=()=>!1,Y1=e=>B1.test(e),Z1=e=>U1.test(e),ex=()=>{const e=ne("colors"),t=ne("spacing"),n=ne("blur"),r=ne("brightness"),o=ne("borderColor"),a=ne("borderRadius"),i=ne("borderSpacing"),s=ne("borderWidth"),l=ne("contrast"),u=ne("grayscale"),c=ne("hueRotate"),p=ne("invert"),m=ne("gap"),d=ne("gradientColorStops"),x=ne("gradientColorStopPositions"),y=ne("inset"),b=ne("margin"),f=ne("opacity"),h=ne("padding"),g=ne("saturate"),S=ne("scale"),C=ne("sepia"),T=ne("skew"),P=ne("space"),N=ne("translate"),_=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",D,t],F=()=>[D,t],V=()=>["",Lt,rn],W=()=>["auto",Hr,D],ce=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",D],I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[Hr,D];return{cacheSize:500,separator:":",theme:{colors:[xo],spacing:[Lt,rn],blur:["none","",on,D],brightness:M(),borderColor:[e],borderRadius:["none","","full",on,D],borderSpacing:F(),borderWidth:V(),contrast:M(),grayscale:j(),hueRotate:M(),invert:j(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[W1,rn],inset:U(),margin:U(),opacity:M(),padding:F(),saturate:M(),scale:M(),sepia:j(),skew:M(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",D]}],container:["container"],columns:[{columns:[on]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ce(),D]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",yo,D]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",D]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",yo,D]}],"grid-cols":[{"grid-cols":[xo]}],"col-start-end":[{col:["auto",{span:["full",yo,D]},D]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[xo]}],"row-start-end":[{row:["auto",{span:[yo,D]},D]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",D]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",D]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...k()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...k(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...k(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",D,t]}],"min-w":[{"min-w":[D,t,"min","max","fit"]}],"max-w":[{"max-w":[D,t,"none","full","min","max","fit","prose",{screen:[on]},on]}],h:[{h:[D,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[D,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[D,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[D,t,"auto","min","max","fit"]}],"font-size":[{text:["base",on,rn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ls]}],"font-family":[{font:[xo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",D]}],"line-clamp":[{"line-clamp":["none",Hr,Ls]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Lt,D]}],"list-image":[{"list-image":["none",D]}],"list-style-type":[{list:["none","disc","decimal",D]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Lt,rn]}],"underline-offset":[{"underline-offset":["auto",Lt,D]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",D]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",D]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ce(),V1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",q1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},K1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:$()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[Lt,D]}],"outline-w":[{outline:[Lt,rn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Lt,rn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",on,X1]}],"shadow-color":[{shadow:[xo]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",on,D]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[g]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",D]}],duration:[{duration:M()}],ease:[{ease:["linear","in","out","in-out",D]}],delay:[{delay:M()}],animate:[{animate:["none","spin","ping","pulse","bounce",D]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[yo,D]}],"translate-x":[{"translate-x":[N]}],"translate-y":[{"translate-y":[N]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",D]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",D]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",D]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Lt,rn,Ls]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tx=F1(ex);function nx(...e){return tx(C1(e))}const rx=S1,ox=w.forwardRef(({className:e,sideOffset:t=4,...n},r)=>v.jsx($h,{ref:r,sideOffset:t,className:nx("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));ox.displayName=$h.displayName;var Xi=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Qi=typeof window>"u"||"Deno"in globalThis;function dt(){}function ax(e,t){return typeof e=="function"?e(t):e}function ix(e){return typeof e=="number"&&e>=0&&e!==1/0}function sx(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Pd(e,t){return typeof e=="function"?e(t):e}function lx(e,t){return typeof e=="function"?e(t):e}function Ed(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:a,queryKey:i,stale:s}=e;if(i){if(r){if(t.queryHash!==Bu(i,t.options))return!1}else if(!ea(t.queryKey,i))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||o&&o!==t.state.fetchStatus||a&&!a(t))}function Td(e,t){const{exact:n,status:r,predicate:o,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(Zo(t.options.mutationKey)!==Zo(a))return!1}else if(!ea(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Bu(e,t){return((t==null?void 0:t.queryKeyHashFn)||Zo)(e)}function Zo(e){return JSON.stringify(e,(t,n)=>Il(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function ea(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>ea(e[n],t[n])):!1}function Yh(e,t){if(e===t)return e;const n=kd(e)&&kd(t);if(n||Il(e)&&Il(t)){const r=n?e:Object.keys(e),o=r.length,a=n?t:Object.keys(t),i=a.length,s=n?[]:{};let l=0;for(let u=0;u<i;u++){const c=n?u:a[u];(!n&&r.includes(c)||n)&&e[c]===void 0&&t[c]===void 0?(s[c]=void 0,l++):(s[c]=Yh(e[c],t[c]),s[c]===e[c]&&e[c]!==void 0&&l++)}return o===i&&l===o?e:s}return t}function kd(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Il(e){if(!jd(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!jd(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function jd(e){return Object.prototype.toString.call(e)==="[object Object]"}function ux(e){return new Promise(t=>{setTimeout(t,e)})}function cx(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Yh(e,t):t}function dx(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function px(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Uu=Symbol();function Zh(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Uu?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var $n,dn,Fr,zd,fx=(zd=class extends Xi{constructor(){super();Q(this,$n);Q(this,dn);Q(this,Fr);z(this,Fr,t=>{if(!Qi&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,dn)||this.setEventListener(E(this,Fr))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,dn))==null||t.call(this),z(this,dn,void 0))}setEventListener(t){var n;z(this,Fr,t),(n=E(this,dn))==null||n.call(this),z(this,dn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,$n)!==t&&(z(this,$n,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,$n)=="boolean"?E(this,$n):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},$n=new WeakMap,dn=new WeakMap,Fr=new WeakMap,zd),em=new fx,Jr,pn,Or,Dd,hx=(Dd=class extends Xi{constructor(){super();Q(this,Jr,!0);Q(this,pn);Q(this,Or);z(this,Or,t=>{if(!Qi&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,pn)||this.setEventListener(E(this,Or))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,pn))==null||t.call(this),z(this,pn,void 0))}setEventListener(t){var n;z(this,Or,t),(n=E(this,pn))==null||n.call(this),z(this,pn,t(this.setOnline.bind(this)))}setOnline(t){E(this,Jr)!==t&&(z(this,Jr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,Jr)}},Jr=new WeakMap,pn=new WeakMap,Or=new WeakMap,Dd),Ei=new hx;function mx(){let e,t;const n=new Promise((o,a)=>{e=o,t=a});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function gx(e){return Math.min(1e3*2**e,3e4)}function tm(e){return(e??"online")==="online"?Ei.isOnline():!0}var nm=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function _s(e){return e instanceof nm}function rm(e){let t=!1,n=0,r=!1,o;const a=mx(),i=y=>{var b;r||(m(new nm(y)),(b=e.abort)==null||b.call(e))},s=()=>{t=!0},l=()=>{t=!1},u=()=>em.isFocused()&&(e.networkMode==="always"||Ei.isOnline())&&e.canRun(),c=()=>tm(e.networkMode)&&e.canRun(),p=y=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,y),o==null||o(),a.resolve(y))},m=y=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,y),o==null||o(),a.reject(y))},d=()=>new Promise(y=>{var b;o=f=>{(r||u())&&y(f)},(b=e.onPause)==null||b.call(e)}).then(()=>{var y;o=void 0,r||(y=e.onContinue)==null||y.call(e)}),x=()=>{if(r)return;let y;const b=n===0?e.initialPromise:void 0;try{y=b??e.fn()}catch(f){y=Promise.reject(f)}Promise.resolve(y).then(p).catch(f=>{var T;if(r)return;const h=e.retry??(Qi?0:3),g=e.retryDelay??gx,S=typeof g=="function"?g(n,f):g,C=h===!0||typeof h=="number"&&n<h||typeof h=="function"&&h(n,f);if(t||!C){m(f);return}n++,(T=e.onFail)==null||T.call(e,n,f),ux(S).then(()=>u()?void 0:d()).then(()=>{t?m(f):x()})})};return{promise:a,cancel:i,continue:()=>(o==null||o(),a),cancelRetry:s,continueRetry:l,canStart:c,start:()=>(c()?x():d().then(x),a)}}var vx=e=>setTimeout(e,0);function yx(){let e=[],t=0,n=s=>{s()},r=s=>{s()},o=vx;const a=s=>{t?e.push(s):o(()=>{n(s)})},i=()=>{const s=e;e=[],s.length&&o(()=>{r(()=>{s.forEach(l=>{n(l)})})})};return{batch:s=>{let l;t++;try{l=s()}finally{t--,t||i()}return l},batchCalls:s=>(...l)=>{a(()=>{s(...l)})},schedule:a,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{r=s},setScheduler:s=>{o=s}}}var _e=yx(),qn,Md,om=(Md=class{constructor(){Q(this,qn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ix(this.gcTime)&&z(this,qn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Qi?1/0:5*60*1e3))}clearGcTimeout(){E(this,qn)&&(clearTimeout(E(this,qn)),z(this,qn,void 0))}},qn=new WeakMap,Md),zr,Dr,Ye,Vn,je,ra,Gn,pt,_t,Bd,xx=(Bd=class extends om{constructor(t){super();Q(this,pt);Q(this,zr);Q(this,Dr);Q(this,Ye);Q(this,Vn);Q(this,je);Q(this,ra);Q(this,Gn);z(this,Gn,!1),z(this,ra,t.defaultOptions),this.setOptions(t.options),this.observers=[],z(this,Vn,t.client),z(this,Ye,E(this,Vn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,z(this,zr,bx(this.options)),this.state=t.state??E(this,zr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,je))==null?void 0:t.promise}setOptions(t){this.options={...E(this,ra),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,Ye).remove(this)}setData(t,n){const r=cx(this.state.data,t,this.options);return Ee(this,pt,_t).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ee(this,pt,_t).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=E(this,je))==null?void 0:r.promise;return(o=E(this,je))==null||o.cancel(t),n?n.then(dt).catch(dt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,zr))}isActive(){return this.observers.some(t=>lx(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Uu||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!sx(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,je))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,je))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,Ye).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,je)&&(E(this,Gn)?E(this,je).cancel({revert:!0}):E(this,je).cancelRetry()),this.scheduleGc()),E(this,Ye).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ee(this,pt,_t).call(this,{type:"invalidate"})}fetch(t,n){var l,u,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,je))return E(this,je).continueRetry(),E(this,je).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(m=>m.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,o=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(z(this,Gn,!0),r.signal)})},a=()=>{const p=Zh(this.options,n),m={client:E(this,Vn),queryKey:this.queryKey,meta:this.meta};return o(m),z(this,Gn,!1),this.options.persister?this.options.persister(p,m,this):p(m)},i={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:E(this,Vn),state:this.state,fetchFn:a};o(i),(l=this.options.behavior)==null||l.onFetch(i,this),z(this,Dr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=i.fetchOptions)==null?void 0:u.meta))&&Ee(this,pt,_t).call(this,{type:"fetch",meta:(c=i.fetchOptions)==null?void 0:c.meta});const s=p=>{var m,d,x,y;_s(p)&&p.silent||Ee(this,pt,_t).call(this,{type:"error",error:p}),_s(p)||((d=(m=E(this,Ye).config).onError)==null||d.call(m,p,this),(y=(x=E(this,Ye).config).onSettled)==null||y.call(x,this.state.data,p,this)),this.scheduleGc()};return z(this,je,rm({initialPromise:n==null?void 0:n.initialPromise,fn:i.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var m,d,x,y;if(p===void 0){s(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(b){s(b);return}(d=(m=E(this,Ye).config).onSuccess)==null||d.call(m,p,this),(y=(x=E(this,Ye).config).onSettled)==null||y.call(x,p,this.state.error,this),this.scheduleGc()},onError:s,onFail:(p,m)=>{Ee(this,pt,_t).call(this,{type:"failed",failureCount:p,error:m})},onPause:()=>{Ee(this,pt,_t).call(this,{type:"pause"})},onContinue:()=>{Ee(this,pt,_t).call(this,{type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0})),E(this,je).start()}},zr=new WeakMap,Dr=new WeakMap,Ye=new WeakMap,Vn=new WeakMap,je=new WeakMap,ra=new WeakMap,Gn=new WeakMap,pt=new WeakSet,_t=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...wx(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return _s(o)&&o.revert&&E(this,Dr)?{...E(this,Dr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),_e.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,Ye).notify({query:this,type:"updated",action:t})})},Bd);function wx(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:tm(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function bx(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ct,Ud,Sx=(Ud=class extends Xi{constructor(t={}){super();Q(this,Ct);this.config=t,z(this,Ct,new Map)}build(t,n,r){const o=n.queryKey,a=n.queryHash??Bu(o,n);let i=this.get(a);return i||(i=new xx({client:t,queryKey:o,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(i)),i}add(t){E(this,Ct).has(t.queryHash)||(E(this,Ct).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,Ct).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,Ct).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){_e.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Ct).get(t)}getAll(){return[...E(this,Ct).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Ed(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Ed(t,r)):n}notify(t){_e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){_e.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){_e.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ct=new WeakMap,Ud),Pt,Ae,Kn,Et,an,Wd,Cx=(Wd=class extends om{constructor(t){super();Q(this,Et);Q(this,Pt);Q(this,Ae);Q(this,Kn);this.mutationId=t.mutationId,z(this,Ae,t.mutationCache),z(this,Pt,[]),this.state=t.state||Px(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,Pt).includes(t)||(E(this,Pt).push(t),this.clearGcTimeout(),E(this,Ae).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){z(this,Pt,E(this,Pt).filter(n=>n!==t)),this.scheduleGc(),E(this,Ae).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,Pt).length||(this.state.status==="pending"?this.scheduleGc():E(this,Ae).remove(this))}continue(){var t;return((t=E(this,Kn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var a,i,s,l,u,c,p,m,d,x,y,b,f,h,g,S,C,T,P,N;const n=()=>{Ee(this,Et,an).call(this,{type:"continue"})};z(this,Kn,rm({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(_,L)=>{Ee(this,Et,an).call(this,{type:"failed",failureCount:_,error:L})},onPause:()=>{Ee(this,Et,an).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,Ae).canRun(this)}));const r=this.state.status==="pending",o=!E(this,Kn).canStart();try{if(r)n();else{Ee(this,Et,an).call(this,{type:"pending",variables:t,isPaused:o}),await((i=(a=E(this,Ae).config).onMutate)==null?void 0:i.call(a,t,this));const L=await((l=(s=this.options).onMutate)==null?void 0:l.call(s,t));L!==this.state.context&&Ee(this,Et,an).call(this,{type:"pending",context:L,variables:t,isPaused:o})}const _=await E(this,Kn).start();return await((c=(u=E(this,Ae).config).onSuccess)==null?void 0:c.call(u,_,t,this.state.context,this)),await((m=(p=this.options).onSuccess)==null?void 0:m.call(p,_,t,this.state.context)),await((x=(d=E(this,Ae).config).onSettled)==null?void 0:x.call(d,_,null,this.state.variables,this.state.context,this)),await((b=(y=this.options).onSettled)==null?void 0:b.call(y,_,null,t,this.state.context)),Ee(this,Et,an).call(this,{type:"success",data:_}),_}catch(_){try{throw await((h=(f=E(this,Ae).config).onError)==null?void 0:h.call(f,_,t,this.state.context,this)),await((S=(g=this.options).onError)==null?void 0:S.call(g,_,t,this.state.context)),await((T=(C=E(this,Ae).config).onSettled)==null?void 0:T.call(C,void 0,_,this.state.variables,this.state.context,this)),await((N=(P=this.options).onSettled)==null?void 0:N.call(P,void 0,_,t,this.state.context)),_}finally{Ee(this,Et,an).call(this,{type:"error",error:_})}}finally{E(this,Ae).runNext(this)}}},Pt=new WeakMap,Ae=new WeakMap,Kn=new WeakMap,Et=new WeakSet,an=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),_e.batch(()=>{E(this,Pt).forEach(r=>{r.onMutationUpdate(t)}),E(this,Ae).notify({mutation:this,type:"updated",action:t})})},Wd);function Px(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var zt,ft,oa,$d,Ex=($d=class extends Xi{constructor(t={}){super();Q(this,zt);Q(this,ft);Q(this,oa);this.config=t,z(this,zt,new Set),z(this,ft,new Map),z(this,oa,0)}build(t,n,r){const o=new Cx({mutationCache:this,mutationId:++ga(this,oa)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){E(this,zt).add(t);const n=Ja(t);if(typeof n=="string"){const r=E(this,ft).get(n);r?r.push(t):E(this,ft).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,zt).delete(t)){const n=Ja(t);if(typeof n=="string"){const r=E(this,ft).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&E(this,ft).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Ja(t);if(typeof n=="string"){const r=E(this,ft).get(n),o=r==null?void 0:r.find(a=>a.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=Ja(t);if(typeof n=="string"){const o=(r=E(this,ft).get(n))==null?void 0:r.find(a=>a!==t&&a.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){_e.batch(()=>{E(this,zt).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,zt).clear(),E(this,ft).clear()})}getAll(){return Array.from(E(this,zt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Td(n,r))}findAll(t={}){return this.getAll().filter(n=>Td(t,n))}notify(t){_e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return _e.batch(()=>Promise.all(t.map(n=>n.continue().catch(dt))))}},zt=new WeakMap,ft=new WeakMap,oa=new WeakMap,$d);function Ja(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Rd(e){return{onFetch:(t,n)=>{var c,p,m,d,x;const r=t.options,o=(m=(p=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:p.fetchMore)==null?void 0:m.direction,a=((d=t.state.data)==null?void 0:d.pages)||[],i=((x=t.state.data)==null?void 0:x.pageParams)||[];let s={pages:[],pageParams:[]},l=0;const u=async()=>{let y=!1;const b=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(t.signal.aborted?y=!0:t.signal.addEventListener("abort",()=>{y=!0}),t.signal)})},f=Zh(t.options,t.fetchOptions),h=async(g,S,C)=>{if(y)return Promise.reject();if(S==null&&g.pages.length)return Promise.resolve(g);const T={client:t.client,queryKey:t.queryKey,pageParam:S,direction:C?"backward":"forward",meta:t.options.meta};b(T);const P=await f(T),{maxPages:N}=t.options,_=C?px:dx;return{pages:_(g.pages,P,N),pageParams:_(g.pageParams,S,N)}};if(o&&a.length){const g=o==="backward",S=g?Tx:Nd,C={pages:a,pageParams:i},T=S(r,C);s=await h(C,T,g)}else{const g=e??a.length;do{const S=l===0?i[0]??r.initialPageParam:Nd(r,s);if(l>0&&S==null)break;s=await h(s,S),l++}while(l<g)}return s};t.options.persister?t.fetchFn=()=>{var y,b;return(b=(y=t.options).persister)==null?void 0:b.call(y,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Nd(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Tx(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var de,fn,hn,Mr,Br,mn,Ur,Wr,qd,kx=(qd=class{constructor(e={}){Q(this,de);Q(this,fn);Q(this,hn);Q(this,Mr);Q(this,Br);Q(this,mn);Q(this,Ur);Q(this,Wr);z(this,de,e.queryCache||new Sx),z(this,fn,e.mutationCache||new Ex),z(this,hn,e.defaultOptions||{}),z(this,Mr,new Map),z(this,Br,new Map),z(this,mn,0)}mount(){ga(this,mn)._++,E(this,mn)===1&&(z(this,Ur,em.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,de).onFocus())})),z(this,Wr,Ei.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,de).onOnline())})))}unmount(){var e,t;ga(this,mn)._--,E(this,mn)===0&&((e=E(this,Ur))==null||e.call(this),z(this,Ur,void 0),(t=E(this,Wr))==null||t.call(this),z(this,Wr,void 0))}isFetching(e){return E(this,de).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,fn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,de).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=E(this,de).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Pd(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return E(this,de).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=E(this,de).get(r.queryHash),a=o==null?void 0:o.state.data,i=ax(t,a);if(i!==void 0)return E(this,de).build(this,r).setData(i,{...n,manual:!0})}setQueriesData(e,t,n){return _e.batch(()=>E(this,de).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,de).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,de);_e.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,de);return _e.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=_e.batch(()=>E(this,de).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(dt).catch(dt)}invalidateQueries(e,t={}){return _e.batch(()=>(E(this,de).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=_e.batch(()=>E(this,de).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let a=o.fetch(void 0,n);return n.throwOnError||(a=a.catch(dt)),o.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(dt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,de).build(this,t);return n.isStaleByTime(Pd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(dt).catch(dt)}fetchInfiniteQuery(e){return e.behavior=Rd(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(dt).catch(dt)}ensureInfiniteQueryData(e){return e.behavior=Rd(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ei.isOnline()?E(this,fn).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,de)}getMutationCache(){return E(this,fn)}getDefaultOptions(){return E(this,hn)}setDefaultOptions(e){z(this,hn,e)}setQueryDefaults(e,t){E(this,Mr).set(Zo(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,Mr).values()],n={};return t.forEach(r=>{ea(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){E(this,Br).set(Zo(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Br).values()],n={};return t.forEach(r=>{ea(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,hn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Bu(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Uu&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,hn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,de).clear(),E(this,fn).clear()}},de=new WeakMap,fn=new WeakMap,hn=new WeakMap,Mr=new WeakMap,Br=new WeakMap,mn=new WeakMap,Ur=new WeakMap,Wr=new WeakMap,qd),jx=w.createContext(void 0),Rx=({client:e,children:t})=>(w.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),v.jsx(jx.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ta.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Ad="popstate";function Nx(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:i,hash:s}=r.location;return Hl("",{pathname:a,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ti(o)}return Lx(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function am(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ax(){return Math.random().toString(36).substr(2,8)}function Ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Hl(e,t,n,r){return n===void 0&&(n=null),ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?io(t):t,{state:n,key:t&&t.key||r||Ax()})}function Ti(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function io(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lx(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,s=yn.Pop,l=null,u=c();u==null&&(u=0,i.replaceState(ta({},i.state,{idx:u}),""));function c(){return(i.state||{idx:null}).idx}function p(){s=yn.Pop;let b=c(),f=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:f})}function m(b,f){s=yn.Push;let h=Hl(y.location,b,f);u=c()+1;let g=Ld(h,u),S=y.createHref(h);try{i.pushState(g,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(S)}a&&l&&l({action:s,location:y.location,delta:1})}function d(b,f){s=yn.Replace;let h=Hl(y.location,b,f);u=c();let g=Ld(h,u),S=y.createHref(h);i.replaceState(g,"",S),a&&l&&l({action:s,location:y.location,delta:0})}function x(b){let f=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof b=="string"?b:Ti(b);return h=h.replace(/ $/,"%20"),ge(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let y={get action(){return s},get location(){return e(o,i)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Ad,p),l=b,()=>{o.removeEventListener(Ad,p),l=null}},createHref(b){return t(o,b)},createURL:x,encodeLocation(b){let f=x(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:d,go(b){return i.go(b)}};return y}var _d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_d||(_d={}));function _x(e,t,n){return n===void 0&&(n="/"),Ix(e,t,n)}function Ix(e,t,n,r){let o=typeof t=="string"?io(t):t,a=Wu(o.pathname||"/",n);if(a==null)return null;let i=im(e);Hx(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=Vx(a);s=Wx(i[l],u)}return s}function im(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,i,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=kn([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(ge(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),im(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Bx(u,a.index),routesMeta:c})};return e.forEach((a,i)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))o(a,i);else for(let l of sm(a.path))o(a,i,l)}),t}function sm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=sm(r.join("/")),s=[];return s.push(...i.map(l=>l===""?a:[a,l].join("/"))),o&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Hx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ux(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fx=/^:[\w-]+$/,Jx=3,Ox=2,zx=1,Dx=10,Mx=-2,Id=e=>e==="*";function Bx(e,t){let n=e.split("/"),r=n.length;return n.some(Id)&&(r+=Mx),t&&(r+=Ox),n.filter(o=>!Id(o)).reduce((o,a)=>o+(Fx.test(a)?Jx:a===""?zx:Dx),r)}function Ux(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Wx(e,t,n){let{routesMeta:r}=e,o={},a="/",i=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=a==="/"?t:t.slice(a.length)||"/",p=$x({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),m=l.route;if(!p)return null;Object.assign(o,p.params),i.push({params:o,pathname:kn([a,p.pathname]),pathnameBase:Qx(kn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=kn([a,p.pathnameBase]))}return i}function $x(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=qx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,p)=>{let{paramName:m,isOptional:d}=c;if(m==="*"){let y=s[p]||"";i=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[p];return d&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function qx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),am(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Vx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return am(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Gx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?io(e):e;return{pathname:n?n.startsWith("/")?n:Kx(n,t):t,search:Yx(r),hash:Zx(o)}}function Kx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lm(e,t){let n=Xx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function um(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=io(e):(o=ta({},e),ge(!o.pathname||!o.pathname.includes("?"),Is("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),Is("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),Is("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,s;if(i==null)s=n;else{let p=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}s=p>=0?t[p]:"/"}let l=Gx(o,s),u=i&&i!=="/"&&i.endsWith("/"),c=(a||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),Qx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ew(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cm=["post","put","patch","delete"];new Set(cm);const tw=["get",...cm];new Set(tw);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},na.apply(this,arguments)}const $u=w.createContext(null),nw=w.createContext(null),lr=w.createContext(null),Yi=w.createContext(null),Fn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),dm=w.createContext(null);function rw(e,t){let{relative:n}=t===void 0?{}:t;da()||ge(!1);let{basename:r,navigator:o}=w.useContext(lr),{hash:a,pathname:i,search:s}=fm(e,{relative:n}),l=i;return r!=="/"&&(l=i==="/"?r:kn([r,i])),o.createHref({pathname:l,search:s,hash:a})}function da(){return w.useContext(Yi)!=null}function pa(){return da()||ge(!1),w.useContext(Yi).location}function pm(e){w.useContext(lr).static||w.useLayoutEffect(e)}function ow(){let{isDataRoute:e}=w.useContext(Fn);return e?yw():aw()}function aw(){da()||ge(!1);let e=w.useContext($u),{basename:t,future:n,navigator:r}=w.useContext(lr),{matches:o}=w.useContext(Fn),{pathname:a}=pa(),i=JSON.stringify(lm(o,n.v7_relativeSplatPath)),s=w.useRef(!1);return pm(()=>{s.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=um(u,JSON.parse(i),a,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:kn([t,p.pathname])),(c.replace?r.replace:r.push)(p,c.state,c)},[t,r,i,a,e])}function iw(){let{matches:e}=w.useContext(Fn),t=e[e.length-1];return t?t.params:{}}function fm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(lr),{matches:o}=w.useContext(Fn),{pathname:a}=pa(),i=JSON.stringify(lm(o,r.v7_relativeSplatPath));return w.useMemo(()=>um(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function sw(e,t){return lw(e,t)}function lw(e,t,n,r){da()||ge(!1);let{navigator:o,static:a}=w.useContext(lr),{matches:i}=w.useContext(Fn),s=i[i.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=pa(),p;if(t){var m;let f=typeof t=="string"?io(t):t;u==="/"||(m=f.pathname)!=null&&m.startsWith(u)||ge(!1),p=f}else p=c;let d=p.pathname||"/",x=d;if(u!=="/"){let f=u.replace(/^\//,"").split("/");x="/"+d.replace(/^\//,"").split("/").slice(f.length).join("/")}let y=_x(e,{pathname:x}),b=fw(y&&y.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:kn([u,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:kn([u,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,n,r);return t&&b?w.createElement(Yi.Provider,{value:{location:na({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:yn.Pop}},b):b}function uw(){let e=vw(),t=ew(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const cw=w.createElement(uw,null);class dw extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Fn.Provider,{value:this.props.routeContext},w.createElement(dm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pw(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext($u);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Fn.Provider,{value:t},r)}function fw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let c=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);c>=0||ge(!1),i=i.slice(0,Math.min(i.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<i.length;c++){let p=i[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=c),p.route.id){let{loaderData:m,errors:d}=n,x=p.route.loader&&m[p.route.id]===void 0&&(!d||d[p.route.id]===void 0);if(p.route.lazy||x){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,p,m)=>{let d,x=!1,y=null,b=null;n&&(d=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||cw,l&&(u<0&&m===0?(xw("route-fallback"),x=!0,b=null):u===m&&(x=!0,b=p.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,m+1)),h=()=>{let g;return d?g=y:x?g=b:p.route.Component?g=w.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=c,w.createElement(pw,{match:p,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?w.createElement(dw,{location:n.location,revalidation:n.revalidation,component:y,error:d,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var hm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hm||{}),mm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mm||{});function hw(e){let t=w.useContext($u);return t||ge(!1),t}function mw(e){let t=w.useContext(nw);return t||ge(!1),t}function gw(e){let t=w.useContext(Fn);return t||ge(!1),t}function gm(e){let t=gw(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function vw(){var e;let t=w.useContext(dm),n=mw(),r=gm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function yw(){let{router:e}=hw(hm.UseNavigateStable),t=gm(mm.UseNavigateStable),n=w.useRef(!1);return pm(()=>{n.current=!0}),w.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,na({fromRouteId:t},a)))},[e,t])}const Hd={};function xw(e,t,n){Hd[e]||(Hd[e]=!0)}function ww(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function It(e){ge(!1)}function bw(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yn.Pop,navigator:a,static:i=!1,future:s}=e;da()&&ge(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:a,static:i,future:na({v7_relativeSplatPath:!1},s)}),[l,s,a,i]);typeof r=="string"&&(r=io(r));let{pathname:c="/",search:p="",hash:m="",state:d=null,key:x="default"}=r,y=w.useMemo(()=>{let b=Wu(c,l);return b==null?null:{location:{pathname:b,search:p,hash:m,state:d,key:x},navigationType:o}},[l,c,p,m,d,x,o]);return y==null?null:w.createElement(lr.Provider,{value:u},w.createElement(Yi.Provider,{children:n,value:y}))}function Sw(e){let{children:t,location:n}=e;return sw(Fl(t),n)}new Promise(()=>{});function Fl(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let a=[...t,o];if(r.type===w.Fragment){n.push.apply(n,Fl(r.props.children,a));return}r.type!==It&&ge(!1),!r.props.index||!r.props.children||ge(!1);let i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Fl(r.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl(){return Jl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jl.apply(this,arguments)}function Cw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Pw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ew(e,t){return e.button===0&&(!t||t==="_self")&&!Pw(e)}const Tw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kw="6";try{window.__reactRouterVersion=kw}catch{}const jw="startTransition",Fd=Wm[jw];function Rw(e){let{basename:t,children:n,future:r,window:o}=e,a=w.useRef();a.current==null&&(a.current=Nx({window:o,v5Compat:!0}));let i=a.current,[s,l]=w.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},c=w.useCallback(p=>{u&&Fd?Fd(()=>l(p)):l(p)},[l,u]);return w.useLayoutEffect(()=>i.listen(c),[i,c]),w.useEffect(()=>ww(r),[r]),w.createElement(bw,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const Nw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ot=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:i,state:s,target:l,to:u,preventScrollReset:c,viewTransition:p}=t,m=Cw(t,Tw),{basename:d}=w.useContext(lr),x,y=!1;if(typeof u=="string"&&Aw.test(u)&&(x=u,Nw))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Wu(S.pathname,d);S.origin===g.origin&&C!=null?u=C+S.search+S.hash:y=!0}catch{}let b=rw(u,{relative:o}),f=Lw(u,{replace:i,state:s,target:l,preventScrollReset:c,relative:o,viewTransition:p});function h(g){r&&r(g),g.defaultPrevented||f(g)}return w.createElement("a",Jl({},m,{href:x||b,onClick:y||a?r:h,ref:n,target:l}))});var Jd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jd||(Jd={}));var Od;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Od||(Od={}));function Lw(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:i,viewTransition:s}=t===void 0?{}:t,l=ow(),u=pa(),c=fm(e,{relative:i});return w.useCallback(p=>{if(Ew(p,n)){p.preventDefault();let m=r!==void 0?r:Ti(u)===Ti(c);l(e,{replace:m,state:o,preventScrollReset:a,relative:i,viewTransition:s})}},[u,l,c,r,o,n,e,a,i,s])}const _w=()=>v.jsx("header",{className:"sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsxs("nav",{className:"flex items-center justify-between h-16",children:[v.jsx(Ot,{to:"/",className:"text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Dev Journal"}),v.jsxs("div",{className:"flex gap-6",children:[v.jsx(Ot,{to:"/blog",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"All Posts"}),v.jsx(Ot,{to:"/categories",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"Categories"}),v.jsx(Ot,{to:"/authors",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"Authors"}),v.jsx(Ot,{to:"/about",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"About"}),v.jsx(Ot,{to:"/contact",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"Contact"})]})]})})}),Iw=()=>v.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50",children:[v.jsxs("header",{className:"relative px-4 py-32 text-center overflow-hidden",children:[v.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(120deg,#84fab0,#8fd3f4)] opacity-5"}),v.jsxs("h1",{className:"relative mb-6 text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in",children:["The Developer's",v.jsx("br",{}),v.jsx("span",{className:"text-8xl",children:"Journal"})]}),v.jsx("p",{className:"mx-auto mb-12 max-w-2xl text-xl text-gray-600 leading-relaxed animate-fade-in",children:"Where code meets creativity. Exploring the intersection of technology, design, and the future of web development."}),v.jsxs("div",{className:"flex justify-center gap-4 animate-fade-in",children:[v.jsx("button",{className:"px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105",children:"Start Reading"}),v.jsx("button",{className:"px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-purple-300 transition-all hover:scale-105",children:"Subscribe"})]})]}),v.jsxs("section",{className:"mx-auto max-w-7xl px-4 pb-20",children:[v.jsxs("h2",{className:"mb-12 text-4xl font-bold text-gray-900 text-center",children:["Latest ",v.jsx("span",{className:"text-purple-600",children:"Stories"})]}),v.jsx("div",{className:"mb-12",children:v.jsx("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:v.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[v.jsx("div",{className:"h-[400px] overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6",alt:"Featured Tech Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsxs("div",{className:"flex flex-col justify-center",children:[v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4 w-fit",children:"Featured"}),v.jsx("h3",{className:"mb-4 text-3xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"The Evolution of Modern Web Development"}),v.jsx("p",{className:"mb-6 text-gray-600 line-clamp-3",children:"Discover how web development has transformed over the years and what the future holds for developers in an AI-driven world."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 mt-auto",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",alt:"Author",className:"w-10 h-10 rounded-full"}),v.jsxs("div",{children:[v.jsx("p",{className:"font-medium text-gray-900",children:"Alex Thompson"}),v.jsx("p",{children:"Lead Developer"})]})]}),v.jsx("span",{children:"8 min read"})]})]})]})})}),v.jsxs("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:[v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:"Tech Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4",children:"Development"}),v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"The Future of Web Development"}),v.jsx("p",{className:"mb-4 text-gray-600 line-clamp-2",children:"Exploring the latest trends and technologies shaping the future of web development."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",alt:"Author",className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:"John Doe"})]}),v.jsx("span",{children:"5 min read"})]})]}),v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",alt:"Design Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4",children:"Design"}),v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"Designing for the Modern Web"}),v.jsx("p",{className:"mb-4 text-gray-600 line-clamp-2",children:"Essential design principles for creating beautiful and functional web applications."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",alt:"Author",className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:"Jane Smith"})]}),v.jsx("span",{children:"4 min read"})]})]}),v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",alt:"Programming Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4",children:"AI & ML"}),v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"AI in Modern Development"}),v.jsx("p",{className:"mb-4 text-gray-600 line-clamp-2",children:"How artificial intelligence is revolutionizing the way we build and deploy applications."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",alt:"Author",className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:"Mike Johnson"})]}),v.jsx("span",{children:"6 min read"})]})]}),v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1518770660439-4636190af475",alt:"Tech Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4",children:"Architecture"}),v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"Microservices vs Monoliths"}),v.jsx("p",{className:"mb-4 text-gray-600 line-clamp-2",children:"Analyzing the pros and cons of different architectural approaches in modern applications."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",alt:"Author",className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:"Sarah Chen"})]}),v.jsx("span",{children:"6 min read"})]})]}),v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1649972904349-6e44c42644a7",alt:"Tech Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-rose-100 text-rose-700 mb-4",children:"Career"}),v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"Remote Work Revolution"}),v.jsx("p",{className:"mb-4 text-gray-600 line-clamp-2",children:"How the shift to remote work is reshaping the tech industry and developer careers."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",alt:"Author",className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:"Marcus Kim"})]}),v.jsx("span",{children:"4 min read"})]})]}),v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",alt:"Tech Blog",className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700 mb-4",children:"Productivity"}),v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:"Developer Tools in 2025"}),v.jsx("p",{className:"mb-4 text-gray-600 line-clamp-2",children:"Essential tools and technologies that will shape the future of development."}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",alt:"Author",className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:"Rachel Torres"})]}),v.jsx("span",{children:"7 min read"})]})]})]})]}),v.jsxs("section",{className:"relative py-24",children:[v.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 skew-y-3 transform origin-bottom-right"}),v.jsxs("div",{className:"relative mx-auto max-w-2xl px-4 text-center",children:[v.jsx("h2",{className:"mb-4 text-4xl font-bold text-white",children:"Never Miss a Post"}),v.jsx("p",{className:"mb-8 text-purple-100",children:"Join our newsletter and get the latest articles delivered straight to your inbox."}),v.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[v.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full max-w-sm rounded-full px-6 py-3 text-gray-900 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300"}),v.jsx("button",{className:"px-8 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform transition-transform duration-200",children:"Subscribe"})]})]})]})]}),Hw={id:"java_a101",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Fw={id:"java_a102",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Jw={id:"java_a103",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Ow={id:"java_a104",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},zw={id:"java_a105",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Dw={id:"java_a106",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Mw={id:"java_a107",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Bw={id:"java_a108",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Uw={id:"java_a109",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Ww={id:"java_a110",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},$w={id:"java_a111",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},qw={id:"java_a112",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Vw={id:"java_a113",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Gw={id:"java_a114",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Kw={id:"java_a115",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Xw={id:"java_a116",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Qw={id:"java_a117",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Yw={id:"java_a118",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},Zw={id:"java_a119",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},e2={id:"java_a120",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},t2={id:"java_a121",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},n2={id:"java_a122",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},r2={id:"java_a123",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},o2={id:"java_a124",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 11 Features: What Every Developer Should Know</title>
  <meta name="description" content="Explore the top features of Java 11 including HTTP client API, String enhancements, and more." />
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem auto;
      padding: 0 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 5px;
    }
    code {
      background: #eee;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: monospace;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <p>Java 11, released in September 2018, marked the second Long-Term Support (LTS) version after Java 8. It brought several key improvements and changes that every Java developer should be aware of. Whether you're upgrading from Java 8 or just curious, here’s a rundown of the most impactful features.</p>

  <section>
    <h2>1. <code>var</code> in Lambda Parameters</h2>
    <p>Java 11 allows the use of <code>var</code> in lambda expressions:</p>
    <pre>(list) -&gt; list.size()          // Old
(var list) -&gt; list.size()      // Java 11</pre>
    <p>This is particularly useful when annotations are required:</p>
    <pre>(@Nonnull var item) -&gt; System.out.println(item);</pre>
  </section>

  <section>
    <h2>2. HTTP Client (Standard)</h2>
    <p>Java 11 standardized the <strong>HTTP Client API</strong> introduced in Java 9. It supports HTTP/1.1 and HTTP/2 and replaces the older <code>HttpURLConnection</code>.</p>
    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/data"))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</pre>
  </section>

  <section>
    <h2>3. Removed Deprecated APIs and Features</h2>
    <p>Several older modules were <strong>removed</strong>:</p>
    <ul>
      <li>Java EE modules (like <code>java.xml.ws</code>, <code>java.activation</code>)</li>
      <li><code>java.se.ee</code> aggregate module</li>
      <li><code>JAXB</code>, <code>JAX-WS</code>, <code>CORBA</code>, and others</li>
    </ul>
    <p>If your code depends on them, you'll need to add external libraries.</p>
  </section>

  <section>
    <h2>4. String API Enhancements</h2>
    <p>Java 11 adds several useful methods to the <code>String</code> class:</p>
    <pre>" ".isBlank();          // true
"  abc  ".strip();      // "abc"
"abc
".stripTrailing();// "abc"
"line1
line2".lines(); // Stream of lines</pre>
  </section>

  <section>
    <h2>5. File Reading Made Simple</h2>
    <p>A new method <code>Files.readString(Path)</code> simplifies file reading:</p>
    <pre>Path path = Path.of("file.txt");
String content = Files.readString(path);</pre>
  </section>

  <section>
    <h2>6. Local-Variable Syntax for Lambda Parameters</h2>
    <p>This allows a consistent style for type declarations and helps in adding annotations:</p>
    <pre>(var x, var y) -&gt; x + y</pre>
    <p>Previously, you couldn't mix <code>var</code> and explicit types in lambdas.</p>
  </section>

  <section>
    <h2>7. Launch Single-File Java Source Code</h2>
    <p>You can now <strong>run a single <code>.java</code> file</strong> directly from the command line without compiling:</p>
    <pre>java HelloWorld.java</pre>
    <p>This makes Java much more beginner-friendly and scripting-like.</p>
  </section>

  <section>
    <h2>8. ZGC (Z Garbage Collector)</h2>
    <p>Introduced as an experimental feature, <strong>ZGC</strong> is a scalable, low-latency garbage collector ideal for applications requiring large heap sizes and short pause times.</p>
    <p>Enable it using:</p>
    <pre>-XX:+UseZGC</pre>
  </section>

  <section>
    <h2>🔚 Final Thoughts</h2>
    <p>Java 11 is a powerful, stable upgrade from Java 8, bringing modern features, better performance, and a more streamlined API. With long-term support, it’s a great choice for both enterprise and personal projects.</p>
    <p><strong>Are you still on Java 8?</strong> Now's the time to upgrade.</p>
  </section>

</body>
</html>

  `},vm={java_a101:Hw,java_a102:Fw,java_a103:Jw,java_a104:Ow,java_a105:zw,java_a106:Dw,java_a107:Mw,java_a108:Bw,java_a109:Uw,java_a110:Ww,java_a111:$w,java_a112:qw,java_a113:Vw,java_a114:Gw,java_a115:Kw,java_a116:Xw,java_a117:Qw,java_a118:Yw,java_a119:Zw,java_a120:e2,java_a121:t2,java_a122:n2,java_a123:r2,java_a124:o2},a2=e=>vm[e],i2=()=>Object.values(vm),s2=()=>{const e=i2();return v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"All Blog Posts"}),v.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:e.map(t=>v.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[v.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:t.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),v.jsx(Ot,{to:`/blog/${t.id}`,className:"inline-block",children:v.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:t.title})}),v.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[t.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),v.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",alt:t.author,className:"w-8 h-8 rounded-full"}),v.jsx("span",{children:t.author})]}),v.jsx("span",{children:t.readTime})]})]},t.id))})]})})},l2=()=>({toast:({title:t,description:n,action:r,...o})=>{lh(t||"",{description:n,action:r?{label:r.label,onClick:r.onClick}:void 0,...o})}}),u2=({title:e,description:t,action:n,...r})=>{lh(e,{description:t,action:n?{label:n.label,onClick:n.onClick}:void 0,...r})},c2=()=>{const e=[{name:"Development",count:12,color:"purple"},{name:"Design",count:8,color:"blue"},{name:"AI & ML",count:6,color:"green"},{name:"Career",count:5,color:"rose"},{name:"Architecture",count:4,color:"indigo"},{name:"Productivity",count:7,color:"emerald"}];w.useEffect(()=>{u2({title:"Categories Loaded",description:"Browse through our article categories",variant:"default"})},[]);const t=n=>({purple:{bg:"bg-purple-100",text:"text-purple-700"},blue:{bg:"bg-blue-100",text:"text-blue-700"},green:{bg:"bg-green-100",text:"text-green-700"},rose:{bg:"bg-rose-100",text:"text-rose-700"},indigo:{bg:"bg-indigo-100",text:"text-indigo-700"},emerald:{bg:"bg-emerald-100",text:"text-emerald-700"}})[n]||{bg:"bg-gray-100",text:"text-gray-700"};return v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-12",children:"Categories"}),v.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:e&&e.length>0?e.map(n=>{const r=t(n.color);return v.jsx(Ot,{to:`/blog?category=${n.name.toLowerCase()}`,className:"group block p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("h3",{className:"text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:n.name}),v.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${r.bg} ${r.text}`,children:[n.count," posts"]})]})},n.name)}):v.jsx("p",{className:"text-gray-500 col-span-3 text-center py-10",children:"No categories found."})})]})})},d2=()=>{const e=[{name:"John Doe",role:"Lead Developer",posts:15,image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"},{name:"Jane Smith",role:"UI/UX Designer",posts:12,image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80"},{name:"Mike Johnson",role:"AI Researcher",posts:8,image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"}];return v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-12",children:"Our Authors"}),v.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:e.map(t=>v.jsx("div",{className:"bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:v.jsxs("div",{className:"flex flex-col items-center text-center",children:[v.jsx("img",{src:t.image,alt:t.name,className:"w-24 h-24 rounded-full mb-4"}),v.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-1",children:t.name}),v.jsx("p",{className:"text-gray-600 mb-4",children:t.role}),v.jsxs("span",{className:"px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm",children:[t.posts," posts"]})]})},t.name))})]})})},p2=()=>v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"About Developer's Journal"}),v.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[v.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Welcome to Developer's Journal, a community-driven blog dedicated to sharing knowledge, experiences, and insights about software development, design, and technology."}),v.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Our mission is to create a space where developers can learn from each other, stay updated with the latest trends, and grow their skills through high-quality content."}),v.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Our Values"}),v.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-6 space-y-2",children:[v.jsx("li",{children:"Quality over quantity"}),v.jsx("li",{children:"Community-driven learning"}),v.jsx("li",{children:"Practical, actionable content"}),v.jsx("li",{children:"Inclusive and accessible education"})]})]})]})}),f2=()=>v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsxs("div",{className:"container mx-auto px-4 max-w-2xl",children:[v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Contact Us"}),v.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:v.jsxs("form",{className:"space-y-6",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),v.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your name"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),v.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"your@email.com"})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),v.jsx("textarea",{id:"message",rows:4,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your message"})]}),v.jsx("button",{type:"submit",className:"w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:"Send Message"})]})})]})}),h2=()=>{const e=pa();return w.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center",children:v.jsxs("div",{className:"text-center px-4",children:[v.jsx("h1",{className:"text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4",children:"404"}),v.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Oops! Page not found"}),v.jsx(Ot,{to:"/",className:"inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity",children:"Return to Home"})]})})};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ym=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:i,...s},l)=>w.createElement("svg",{ref:l,...g2,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ym("lucide",o),...s},[...i.map(([u,c])=>w.createElement(u,c)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=(e,t)=>{const n=w.forwardRef(({className:r,...o},a)=>w.createElement(v2,{ref:a,iconNode:t,className:ym(`lucide-${m2(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=y2("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),w2=()=>{const{id:e}=iw(),{toast:t}=l2(),n=a2(e||"");return n?v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsxs("article",{className:"max-w-3xl mx-auto",children:[v.jsx("div",{className:"mb-8 h-[400px] overflow-hidden rounded-2xl",children:v.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:n.title,className:"w-full h-full object-cover"})}),v.jsxs("div",{className:"mb-8",children:[v.jsxs("div",{className:"flex items-center gap-2 text-purple-600 mb-4",children:[v.jsx(x2,{size:20}),v.jsx("span",{className:"text-sm font-medium",children:n.category})]}),v.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:n.title}),v.jsxs("div",{className:"flex items-center justify-between text-gray-500",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",alt:"Author",className:"w-10 h-10 rounded-full"}),v.jsxs("div",{children:[v.jsx("p",{className:"font-medium text-gray-900",children:n.author}),v.jsx("p",{className:"text-sm",children:n.date})]})]}),v.jsx("span",{className:"text-sm",children:n.readTime})]})]}),v.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})]})})}):(t({title:"Post not found",description:"The requested blog post could not be found.",variant:"destructive"}),v.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Post not found"})})}))},b2=new kx,S2=()=>v.jsx(Rx,{client:b2,children:v.jsxs(rx,{children:[v.jsx(Ry,{}),v.jsxs(Rw,{children:[v.jsx(_w,{}),v.jsxs(Sw,{children:[v.jsx(It,{path:"/",element:v.jsx(Iw,{})}),v.jsx(It,{path:"/blog",element:v.jsx(s2,{})}),v.jsx(It,{path:"/blog/:id",element:v.jsx(w2,{})}),v.jsx(It,{path:"/categories",element:v.jsx(c2,{})}),v.jsx(It,{path:"/authors",element:v.jsx(d2,{})}),v.jsx(It,{path:"/about",element:v.jsx(p2,{})}),v.jsx(It,{path:"/contact",element:v.jsx(f2,{})}),v.jsx(It,{path:"*",element:v.jsx(h2,{})})]})]})]})});sh(document.getElementById("root")).render(v.jsx(S2,{}));
