var ec=e=>{throw TypeError(e)};var os=(e,t,n)=>t.has(e)||ec("Cannot "+n);var E=(e,t,n)=>(os(e,t,"read from private field"),n?n.call(e):t.get(e)),Q=(e,t,n)=>t.has(e)?ec("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,r)=>(os(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ee=(e,t,n)=>(os(e,t,"access private method"),n);var gi=(e,t,n,r)=>({set _(o){B(e,t,o,n)},get _(){return E(e,t,r)}});function Am(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},Ra={},Xd={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),_m=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Bm=Symbol.for("react.suspense"),zm=Symbol.for("react.memo"),Um=Symbol.for("react.lazy"),tc=Symbol.iterator;function Hm(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var Zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep=Object.assign,tp={};function eo(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Zd}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function np(){}np.prototype=eo.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=tp,this.updater=n||Zd}var zl=Bl.prototype=new np;zl.constructor=Bl;ep(zl,eo.prototype);zl.isPureReactComponent=!0;var nc=Array.isArray,rp=Object.prototype.hasOwnProperty,Ul={current:null},op={key:!0,ref:!0,__self:!0,__source:!0};function ip(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)rp.call(t,r)&&!op.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ii,type:e,key:i,ref:a,props:o,_owner:Ul.current}}function Jm(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function Wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rc=/\/+/g;function is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wm(""+e.key):t.toString(36)}function Di(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ii:case Nm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+is(a,0):r,nc(o)?(n="",e!=null&&(n=e.replace(rc,"$&/")+"/"),Di(o,t,n,"",function(u){return u})):o!=null&&(Hl(o)&&(o=Jm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(rc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",nc(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+is(i,s);a+=Di(i,t,n,l,o)}else if(l=Hm(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+is(i,s++),a+=Di(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function vi(e,t,n){if(e==null)return e;var r=[],o=0;return Di(e,r,"","",function(i){return t.call(n,i,o++)}),r}function $m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Bi={transition:null},Vm={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:Ul};function ap(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=eo;H.Fragment=Lm;H.Profiler=_m;H.PureComponent=Bl;H.StrictMode=Om;H.Suspense=Bm;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;H.act=ap;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ep({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ul.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)rp.call(t,l)&&!op.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ii,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:Fm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mm,_context:e},e.Consumer=e};H.createElement=ip;H.createFactory=function(e){var t=ip.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Dm,render:e}};H.isValidElement=Hl;H.lazy=function(e){return{$$typeof:Um,_payload:{_status:-1,_result:e},_init:$m}};H.memo=function(e,t){return{$$typeof:zm,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};H.unstable_act=ap;H.useCallback=function(e,t){return _e.current.useCallback(e,t)};H.useContext=function(e){return _e.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};H.useEffect=function(e,t){return _e.current.useEffect(e,t)};H.useId=function(){return _e.current.useId()};H.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return _e.current.useMemo(e,t)};H.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};H.useRef=function(e){return _e.current.useRef(e)};H.useState=function(e){return _e.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return _e.current.useTransition()};H.version="18.3.1";Xd.exports=H;var x=Xd.exports;const A=Yd(x),qm=Am({__proto__:null,default:A},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=x,Gm=Symbol.for("react.element"),Ym=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,Xm=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function sp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Qm.call(t,r)&&!Zm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gm,type:e,key:i,ref:a,props:o,_owner:Xm.current}}Ra.Fragment=Ym;Ra.jsx=sp;Ra.jsxs=sp;Qd.exports=Ra;var w=Qd.exports,lp={exports:{}},Ge={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var O=T.length;T.push(R);e:for(;0<O;){var U=O-1>>>1,F=T[U];if(0<o(F,R))T[U]=R,T[O]=F,O=U;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],O=T.pop();if(O!==R){T[0]=O;e:for(var U=0,F=T.length,Y=F>>>1;U<Y;){var K=2*(U+1)-1,he=T[K],Ce=K+1,X=T[Ce];if(0>o(he,O))Ce<F&&0>o(X,he)?(T[U]=X,T[Ce]=O,U=Ce):(T[U]=he,T[K]=O,U=K);else if(Ce<F&&0>o(X,O))T[U]=X,T[Ce]=O,U=Ce;else break e}}return R}function o(T,R){var O=T.sortIndex-R.sortIndex;return O!==0?O:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,p=null,m=3,d=!1,y=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function S(T){if(v=!1,g(T),!y)if(n(l)!==null)y=!0,$(k);else{var R=n(u);R!==null&&V(S,R.startTime-T)}}function k(T,R){y=!1,v&&(v=!1,f(I),I=-1),d=!0;var O=m;try{for(g(R),p=n(l);p!==null&&(!(p.expirationTime>R)||T&&!J());){var U=p.callback;if(typeof U=="function"){p.callback=null,m=p.priorityLevel;var F=U(p.expirationTime<=R);R=e.unstable_now(),typeof F=="function"?p.callback=F:p===n(l)&&r(l),g(R)}else r(l);p=n(l)}if(p!==null)var Y=!0;else{var K=n(u);K!==null&&V(S,K.startTime-R),Y=!1}return Y}finally{p=null,m=O,d=!1}}var P=!1,C=null,I=-1,L=5,N=-1;function J(){return!(e.unstable_now()-N<L)}function M(){if(C!==null){var T=e.unstable_now();N=T;var R=!0;try{R=C(!0,T)}finally{R?q():(P=!1,C=null)}}else P=!1}var q;if(typeof h=="function")q=function(){h(M)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ce=W.port2;W.port1.onmessage=M,q=function(){ce.postMessage(null)}}else q=function(){b(M,0)};function $(T){C=T,P||(P=!0,q())}function V(T,R){I=b(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||d||(y=!0,$(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var O=m;m=R;try{return T()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=m;m=T;try{return R()}finally{m=O}},e.unstable_scheduleCallback=function(T,R,O){var U=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,T){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=O+F,T={id:c++,callback:R,priorityLevel:T,startTime:O,expirationTime:F,sortIndex:-1},O>U?(T.sortIndex=O,t(u,T),n(l)===null&&T===n(u)&&(v?(f(I),I=-1):v=!0,V(S,O-U))):(T.sortIndex=F,t(l,T),y||d||(y=!0,$(k))),T},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(T){var R=m;return function(){var O=m;m=R;try{return T.apply(this,arguments)}finally{m=O}}}})(cp);up.exports=cp;var eg=up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg=x,Ke=eg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,Lo={};function or(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Lo[e]=t,e=0;e<t.length;e++)dp.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,ng=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},ic={};function rg(e){return Ms.call(ic,e)?!0:Ms.call(oc,e)?!1:ng.test(e)?ic[e]=!0:(oc[e]=!0,!1)}function og(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ig(e,t,n,r){if(t===null||typeof t>"u"||og(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function Wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jl,Wl);ke[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jl,Wl);ke[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jl,Wl);ke[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function $l(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ig(t,n,o,r)&&(n=null),r||o===null?rg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),Vl=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),fp=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Ds=Symbol.for("react.suspense"),Bs=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),hp=Symbol.for("react.offscreen"),ac=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,as;function xo(e){if(as===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);as=t&&t[1]||""}return`
`+as+e}var ss=!1;function ls(e,t){if(!e||ss)return"";ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function ag(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=ls(e.type,!1),e;case 11:return e=ls(e.type.render,!1),e;case 1:return e=ls(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case Fs:return"Profiler";case Vl:return"StrictMode";case Ds:return"Suspense";case Bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fp:return(e.displayName||"Context")+".Consumer";case pp:return(e._context.displayName||"Context")+".Provider";case ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function sg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lg(e){var t=mp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=lg(e))}function gp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Us(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vp(e,t){t=t.checked,t!=null&&$l(e,"checked",t,!1)}function Hs(e,t){vp(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Js(e,t.type,n):t.hasOwnProperty("defaultValue")&&Js(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Js(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bo=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(bo(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function yp(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ug=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){ug.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function bp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function Sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var cg=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(cg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ks=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,jr=null,Ir=null;function dc(e){if(e=li(e)){if(typeof Gs!="function")throw Error(j(280));var t=e.stateNode;t&&(t=La(t),Gs(e.stateNode,e.type,t))}}function kp(e){jr?Ir?Ir.push(e):Ir=[e]:jr=e}function Cp(){if(jr){var e=jr,t=Ir;if(Ir=jr=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function Ep(e,t){return e(t)}function Pp(){}var us=!1;function Tp(e,t,n){if(us)return e(t,n);us=!0;try{return Ep(e,t,n)}finally{us=!1,(jr!==null||Ir!==null)&&(Pp(),Cp())}}function _o(e,t){var n=e.stateNode;if(n===null)return null;var r=La(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ys=!1;if(Ht)try{var co={};Object.defineProperty(co,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Ys=!1}function dg(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,Xi=null,Zi=!1,Qs=null,pg={onError:function(e){Eo=!0,Xi=e}};function fg(e,t,n,r,o,i,a,s,l){Eo=!1,Xi=null,dg.apply(pg,arguments)}function hg(e,t,n,r,o,i,a,s,l){if(fg.apply(this,arguments),Eo){if(Eo){var u=Xi;Eo=!1,Xi=null}else throw Error(j(198));Zi||(Zi=!0,Qs=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(ir(e)!==e)throw Error(j(188))}function mg(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return pc(o),e;if(i===r)return pc(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function jp(e){return e=mg(e),e!==null?Ip(e):null}function Ip(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ip(e);if(t!==null)return t;e=e.sibling}return null}var Ap=Ke.unstable_scheduleCallback,fc=Ke.unstable_cancelCallback,gg=Ke.unstable_shouldYield,vg=Ke.unstable_requestPaint,fe=Ke.unstable_now,yg=Ke.unstable_getCurrentPriorityLevel,Yl=Ke.unstable_ImmediatePriority,Np=Ke.unstable_UserBlockingPriority,ea=Ke.unstable_NormalPriority,wg=Ke.unstable_LowPriority,Lp=Ke.unstable_IdlePriority,ja=null,Rt=null;function xg(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(ja,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:kg,bg=Math.log,Sg=Math.LN2;function kg(e){return e>>>=0,e===0?32:31-(bg(e)/Sg|0)|0}var bi=64,Si=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=So(s):(i&=a,i!==0&&(r=So(i)))}else a=n&~o,a!==0?r=So(a):i!==0&&(r=So(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function Cg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-vt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=Cg(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Op(){var e=bi;return bi<<=1,!(bi&4194240)&&(bi=64),e}function cs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ai(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function Pg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function _p(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mp,Xl,Fp,Dp,Bp,Zs=!1,ki=[],wn=null,xn=null,bn=null,Mo=new Map,Fo=new Map,un=[],Tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function po(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=li(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rg(e,t,n,r,o){switch(t){case"focusin":return wn=po(wn,e,t,n,r,o),!0;case"dragenter":return xn=po(xn,e,t,n,r,o),!0;case"mouseover":return bn=po(bn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mo.set(i,po(Mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fo.set(i,po(Fo.get(i)||null,e,t,n,r,o)),!0}return!1}function zp(e){var t=Hn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Rp(n),t!==null){e.blockedOn=t,Bp(e.priority,function(){Fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=el(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ks=r,n.target.dispatchEvent(r),Ks=null}else return t=li(n),t!==null&&Xl(t),e.blockedOn=n,!1;t.shift()}return!0}function mc(e,t,n){zi(e)&&n.delete(t)}function jg(){Zs=!1,wn!==null&&zi(wn)&&(wn=null),xn!==null&&zi(xn)&&(xn=null),bn!==null&&zi(bn)&&(bn=null),Mo.forEach(mc),Fo.forEach(mc)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,jg)))}function Do(e){function t(o){return fo(o,e)}if(0<ki.length){fo(ki[0],e);for(var n=1;n<ki.length;n++){var r=ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&fo(wn,e),xn!==null&&fo(xn,e),bn!==null&&fo(bn,e),Mo.forEach(t),Fo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)zp(n),n.blockedOn===null&&un.shift()}var Ar=Kt.ReactCurrentBatchConfig,na=!0;function Ig(e,t,n,r){var o=Z,i=Ar.transition;Ar.transition=null;try{Z=1,Zl(e,t,n,r)}finally{Z=o,Ar.transition=i}}function Ag(e,t,n,r){var o=Z,i=Ar.transition;Ar.transition=null;try{Z=4,Zl(e,t,n,r)}finally{Z=o,Ar.transition=i}}function Zl(e,t,n,r){if(na){var o=el(e,t,n,r);if(o===null)xs(e,t,r,ra,n),hc(e,r);else if(Rg(o,e,t,n,r))r.stopPropagation();else if(hc(e,r),t&4&&-1<Tg.indexOf(e)){for(;o!==null;){var i=li(o);if(i!==null&&Mp(i),i=el(e,t,n,r),i===null&&xs(e,t,r,ra,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else xs(e,t,r,null,n)}}var ra=null;function el(e,t,n,r){if(ra=null,e=Gl(r),e=Hn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function Up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yg()){case Yl:return 1;case Np:return 4;case ea:case wg:return 16;case Lp:return 536870912;default:return 16}default:return 16}}var gn=null,eu=null,Ui=null;function Hp(){if(Ui)return Ui;var e,t=eu,n=t.length,r,o="value"in gn?gn.value:gn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ui=o.slice(e,1<r?1-r:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function gc(){return!1}function Ye(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ci:gc,this.isPropagationStopped=gc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=Ye(to),si=ue({},to,{view:0,detail:0}),Ng=Ye(si),ds,ps,ho,Ia=ue({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(ds=e.screenX-ho.screenX,ps=e.screenY-ho.screenY):ps=ds=0,ho=e),ds)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),vc=Ye(Ia),Lg=ue({},Ia,{dataTransfer:0}),Og=Ye(Lg),_g=ue({},si,{relatedTarget:0}),fs=Ye(_g),Mg=ue({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=Ye(Mg),Dg=ue({},to,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=Ye(Dg),zg=ue({},to,{data:0}),yc=Ye(zg),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jg[e])?!!t[e]:!1}function nu(){return Wg}var $g=ue({},si,{key:function(e){if(e.key){var t=Ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vg=Ye($g),qg=ue({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Ye(qg),Kg=ue({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Gg=Ye(Kg),Yg=ue({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=Ye(Yg),Xg=ue({},Ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=Ye(Xg),ev=[9,13,27,32],ru=Ht&&"CompositionEvent"in window,Po=null;Ht&&"documentMode"in document&&(Po=document.documentMode);var tv=Ht&&"TextEvent"in window&&!Po,Jp=Ht&&(!ru||Po&&8<Po&&11>=Po),xc=" ",bc=!1;function Wp(e,t){switch(e){case"keyup":return ev.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function nv(e,t){switch(e){case"compositionend":return $p(t);case"keypress":return t.which!==32?null:(bc=!0,xc);case"textInput":return e=t.data,e===xc&&bc?null:e;default:return null}}function rv(e,t){if(yr)return e==="compositionend"||!ru&&Wp(e,t)?(e=Hp(),Ui=eu=gn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jp&&t.locale!=="ko"?null:t.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ov[e.type]:t==="textarea"}function Vp(e,t,n,r){kp(r),t=oa(t,"onChange"),0<t.length&&(n=new tu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var To=null,Bo=null;function iv(e){rf(e,0)}function Aa(e){var t=br(e);if(gp(t))return e}function av(e,t){if(e==="change")return t}var qp=!1;if(Ht){var hs;if(Ht){var ms="oninput"in document;if(!ms){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),ms=typeof kc.oninput=="function"}hs=ms}else hs=!1;qp=hs&&(!document.documentMode||9<document.documentMode)}function Cc(){To&&(To.detachEvent("onpropertychange",Kp),Bo=To=null)}function Kp(e){if(e.propertyName==="value"&&Aa(Bo)){var t=[];Vp(t,Bo,e,Gl(e)),Tp(iv,t)}}function sv(e,t,n){e==="focusin"?(Cc(),To=t,Bo=n,To.attachEvent("onpropertychange",Kp)):e==="focusout"&&Cc()}function lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Aa(Bo)}function uv(e,t){if(e==="click")return Aa(t)}function cv(e,t){if(e==="input"||e==="change")return Aa(t)}function dv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:dv;function zo(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ms.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var n=Ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function Gp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yp(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pv(e){var t=Yp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gp(n.ownerDocument.documentElement,n)){if(r!==null&&ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Pc(n,i);var a=Pc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fv=Ht&&"documentMode"in document&&11>=document.documentMode,wr=null,tl=null,Ro=null,nl=!1;function Tc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nl||wr==null||wr!==Qi(r)||(r=wr,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&zo(Ro,r)||(Ro=r,r=oa(tl,"onSelect"),0<r.length&&(t=new tu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},gs={},Qp={};Ht&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Na(e){if(gs[e])return gs[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qp)return gs[e]=t[n];return e}var Xp=Na("animationend"),Zp=Na("animationiteration"),ef=Na("animationstart"),tf=Na("transitionend"),nf=new Map,Rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){nf.set(e,t),or(t,[e])}for(var vs=0;vs<Rc.length;vs++){var ys=Rc[vs],hv=ys.toLowerCase(),mv=ys[0].toUpperCase()+ys.slice(1);Ln(hv,"on"+mv)}Ln(Xp,"onAnimationEnd");Ln(Zp,"onAnimationIteration");Ln(ef,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(tf,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hg(r,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;jc(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;jc(o,s,u),i=l}}}if(Zi)throw e=Qs,Zi=!1,Qs=null,e}function re(e,t){var n=t[sl];n===void 0&&(n=t[sl]=new Set);var r=e+"__bubble";n.has(r)||(of(t,e,2,!1),n.add(r))}function ws(e,t,n){var r=0;t&&(r|=4),of(n,e,r,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Pi]){e[Pi]=!0,dp.forEach(function(n){n!=="selectionchange"&&(gv.has(n)||ws(n,!1,e),ws(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,ws("selectionchange",!1,t))}}function of(e,t,n,r){switch(Up(t)){case 1:var o=Ig;break;case 4:o=Ag;break;default:o=Zl}n=o.bind(null,t,n,e),o=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Hn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Tp(function(){var u=i,c=Gl(n),p=[];e:{var m=nf.get(e);if(m!==void 0){var d=tu,y=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":d=Vg;break;case"focusin":y="focus",d=fs;break;case"focusout":y="blur",d=fs;break;case"beforeblur":case"afterblur":d=fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Gg;break;case Xp:case Zp:case ef:d=Fg;break;case tf:d=Qg;break;case"scroll":d=Ng;break;case"wheel":d=Zg;break;case"copy":case"cut":case"paste":d=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=wc}var v=(t&4)!==0,b=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=_o(h,f),S!=null&&v.push(Ho(h,S,g)))),b)break;h=h.return}0<v.length&&(m=new d(m,y,null,n,c),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",m&&n!==Ks&&(y=n.relatedTarget||n.fromElement)&&(Hn(y)||y[Jt]))break e;if((d||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,d?(y=n.relatedTarget||n.toElement,d=u,y=y?Hn(y):null,y!==null&&(b=ir(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(d=null,y=u),d!==y)){if(v=vc,S="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=wc,S="onPointerLeave",f="onPointerEnter",h="pointer"),b=d==null?m:br(d),g=y==null?m:br(y),m=new v(S,h+"leave",d,n,c),m.target=b,m.relatedTarget=g,S=null,Hn(c)===u&&(v=new v(f,h+"enter",y,n,c),v.target=g,v.relatedTarget=b,S=v),b=S,d&&y)t:{for(v=d,f=y,h=0,g=v;g;g=mr(g))h++;for(g=0,S=f;S;S=mr(S))g++;for(;0<h-g;)v=mr(v),h--;for(;0<g-h;)f=mr(f),g--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=mr(v),f=mr(f)}v=null}else v=null;d!==null&&Ic(p,m,d,v,!1),y!==null&&b!==null&&Ic(p,b,y,v,!0)}}e:{if(m=u?br(u):window,d=m.nodeName&&m.nodeName.toLowerCase(),d==="select"||d==="input"&&m.type==="file")var k=av;else if(Sc(m))if(qp)k=cv;else{k=lv;var P=sv}else(d=m.nodeName)&&d.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=uv);if(k&&(k=k(e,u))){Vp(p,k,n,c);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Js(m,"number",m.value)}switch(P=u?br(u):window,e){case"focusin":(Sc(P)||P.contentEditable==="true")&&(wr=P,tl=u,Ro=null);break;case"focusout":Ro=tl=wr=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,Tc(p,n,c);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Tc(p,n,c)}var C;if(ru)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else yr?Wp(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Jp&&n.locale!=="ko"&&(yr||I!=="onCompositionStart"?I==="onCompositionEnd"&&yr&&(C=Hp()):(gn=c,eu="value"in gn?gn.value:gn.textContent,yr=!0)),P=oa(u,I),0<P.length&&(I=new yc(I,e,null,n,c),p.push({event:I,listeners:P}),C?I.data=C:(C=$p(n),C!==null&&(I.data=C)))),(C=tv?nv(e,n):rv(e,n))&&(u=oa(u,"onBeforeInput"),0<u.length&&(c=new yc("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=C))}rf(p,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_o(e,n),i!=null&&r.unshift(Ho(e,i,o)),i=_o(e,t),i!=null&&r.push(Ho(e,i,o))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ic(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=_o(n,i),l!=null&&a.unshift(Ho(n,l,s))):o||(l=_o(n,i),l!=null&&a.push(Ho(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(vv,`
`).replace(yv,"")}function Ti(e,t,n){if(t=Ac(t),Ac(e)!==t&&n)throw Error(j(425))}function ia(){}var rl=null,ol=null;function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,wv=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(e){return Nc.resolve(null).then(e).catch(bv)}:al;function bv(e){setTimeout(function(){throw e})}function bs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Do(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),Tt="__reactFiber$"+no,Jo="__reactProps$"+no,Jt="__reactContainer$"+no,sl="__reactEvents$"+no,Sv="__reactListeners$"+no,kv="__reactHandles$"+no;function Hn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lc(e);e!==null;){if(n=e[Tt])return n;e=Lc(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[Tt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function La(e){return e[Jo]||null}var ll=[],Sr=-1;function On(e){return{current:e}}function oe(e){0>Sr||(e.current=ll[Sr],ll[Sr]=null,Sr--)}function te(e,t){Sr++,ll[Sr]=e.current,e.current=t}var jn={},Ie=On(jn),ze=On(!1),Xn=jn;function Vr(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function aa(){oe(ze),oe(Ie)}function Oc(e,t,n){if(Ie.current!==jn)throw Error(j(168));te(Ie,t),te(ze,n)}function af(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,sg(e)||"Unknown",o));return ue({},n,r)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Xn=Ie.current,te(Ie,e),te(ze,ze.current),!0}function _c(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=af(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,oe(ze),oe(Ie),te(Ie,e)):oe(ze),te(ze,n)}var Mt=null,Oa=!1,Ss=!1;function sf(e){Mt===null?Mt=[e]:Mt.push(e)}function Cv(e){Oa=!0,sf(e)}function _n(){if(!Ss&&Mt!==null){Ss=!0;var e=0,t=Z;try{var n=Mt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,Oa=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),Ap(Yl,_n),o}finally{Z=t,Ss=!1}}return null}var kr=[],Cr=0,la=null,ua=0,Ze=[],et=0,Zn=null,Bt=1,zt="";function zn(e,t){kr[Cr++]=ua,kr[Cr++]=la,la=e,ua=t}function lf(e,t,n){Ze[et++]=Bt,Ze[et++]=zt,Ze[et++]=Zn,Zn=e;var r=Bt;e=zt;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Bt=1<<32-vt(t)+o|n<<o|r,zt=i+e}else Bt=1<<i|n<<o|r,zt=e}function iu(e){e.return!==null&&(zn(e,1),lf(e,1,0))}function au(e){for(;e===la;)la=kr[--Cr],kr[Cr]=null,ua=kr[--Cr],kr[Cr]=null;for(;e===Zn;)Zn=Ze[--et],Ze[et]=null,zt=Ze[--et],Ze[et]=null,Bt=Ze[--et],Ze[et]=null}var Ve=null,$e=null,ae=!1,mt=null;function uf(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,$e=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Bt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,$e=null,!0):!1;default:return!1}}function ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cl(e){if(ae){var t=$e;if(t){var n=t;if(!Mc(e,t)){if(ul(e))throw Error(j(418));t=Sn(n.nextSibling);var r=Ve;t&&Mc(e,t)?uf(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ve=e)}}else{if(ul(e))throw Error(j(418));e.flags=e.flags&-4097|2,ae=!1,Ve=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Ri(e){if(e!==Ve)return!1;if(!ae)return Fc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=$e)){if(ul(e))throw cf(),Error(j(418));for(;t;)uf(e,t),t=Sn(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ve?Sn(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=$e;e;)e=Sn(e.nextSibling)}function qr(){$e=Ve=null,ae=!1}function su(e){mt===null?mt=[e]:mt.push(e)}var Ev=Kt.ReactCurrentBatchConfig;function mo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function df(e){function t(f,h){if(e){var g=f.deletions;g===null?(f.deletions=[h],f.flags|=16):g.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function o(f,h){return f=Pn(f,h),f.index=0,f.sibling=null,f}function i(f,h,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<h?(f.flags|=2,h):g):(f.flags|=2,h)):(f.flags|=1048576,h)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,g,S){return h===null||h.tag!==6?(h=js(g,f.mode,S),h.return=f,h):(h=o(h,g),h.return=f,h)}function l(f,h,g,S){var k=g.type;return k===vr?c(f,h,g.props.children,S,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sn&&Dc(k)===h.type)?(S=o(h,g.props),S.ref=mo(f,h,g),S.return=f,S):(S=Gi(g.type,g.key,g.props,null,f.mode,S),S.ref=mo(f,h,g),S.return=f,S)}function u(f,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Is(g,f.mode,S),h.return=f,h):(h=o(h,g.children||[]),h.return=f,h)}function c(f,h,g,S,k){return h===null||h.tag!==7?(h=Qn(g,f.mode,S,k),h.return=f,h):(h=o(h,g),h.return=f,h)}function p(f,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=js(""+h,f.mode,g),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yi:return g=Gi(h.type,h.key,h.props,null,f.mode,g),g.ref=mo(f,null,h),g.return=f,g;case gr:return h=Is(h,f.mode,g),h.return=f,h;case sn:var S=h._init;return p(f,S(h._payload),g)}if(bo(h)||uo(h))return h=Qn(h,f.mode,g,null),h.return=f,h;ji(f,h)}return null}function m(f,h,g,S){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:s(f,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yi:return g.key===k?l(f,h,g,S):null;case gr:return g.key===k?u(f,h,g,S):null;case sn:return k=g._init,m(f,h,k(g._payload),S)}if(bo(g)||uo(g))return k!==null?null:c(f,h,g,S,null);ji(f,g)}return null}function d(f,h,g,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,s(h,f,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yi:return f=f.get(S.key===null?g:S.key)||null,l(h,f,S,k);case gr:return f=f.get(S.key===null?g:S.key)||null,u(h,f,S,k);case sn:var P=S._init;return d(f,h,g,P(S._payload),k)}if(bo(S)||uo(S))return f=f.get(g)||null,c(h,f,S,k,null);ji(h,S)}return null}function y(f,h,g,S){for(var k=null,P=null,C=h,I=h=0,L=null;C!==null&&I<g.length;I++){C.index>I?(L=C,C=null):L=C.sibling;var N=m(f,C,g[I],S);if(N===null){C===null&&(C=L);break}e&&C&&N.alternate===null&&t(f,C),h=i(N,h,I),P===null?k=N:P.sibling=N,P=N,C=L}if(I===g.length)return n(f,C),ae&&zn(f,I),k;if(C===null){for(;I<g.length;I++)C=p(f,g[I],S),C!==null&&(h=i(C,h,I),P===null?k=C:P.sibling=C,P=C);return ae&&zn(f,I),k}for(C=r(f,C);I<g.length;I++)L=d(C,f,I,g[I],S),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?I:L.key),h=i(L,h,I),P===null?k=L:P.sibling=L,P=L);return e&&C.forEach(function(J){return t(f,J)}),ae&&zn(f,I),k}function v(f,h,g,S){var k=uo(g);if(typeof k!="function")throw Error(j(150));if(g=k.call(g),g==null)throw Error(j(151));for(var P=k=null,C=h,I=h=0,L=null,N=g.next();C!==null&&!N.done;I++,N=g.next()){C.index>I?(L=C,C=null):L=C.sibling;var J=m(f,C,N.value,S);if(J===null){C===null&&(C=L);break}e&&C&&J.alternate===null&&t(f,C),h=i(J,h,I),P===null?k=J:P.sibling=J,P=J,C=L}if(N.done)return n(f,C),ae&&zn(f,I),k;if(C===null){for(;!N.done;I++,N=g.next())N=p(f,N.value,S),N!==null&&(h=i(N,h,I),P===null?k=N:P.sibling=N,P=N);return ae&&zn(f,I),k}for(C=r(f,C);!N.done;I++,N=g.next())N=d(C,f,I,N.value,S),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?I:N.key),h=i(N,h,I),P===null?k=N:P.sibling=N,P=N);return e&&C.forEach(function(M){return t(f,M)}),ae&&zn(f,I),k}function b(f,h,g,S){if(typeof g=="object"&&g!==null&&g.type===vr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case yi:e:{for(var k=g.key,P=h;P!==null;){if(P.key===k){if(k=g.type,k===vr){if(P.tag===7){n(f,P.sibling),h=o(P,g.props.children),h.return=f,f=h;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===sn&&Dc(k)===P.type){n(f,P.sibling),h=o(P,g.props),h.ref=mo(f,P,g),h.return=f,f=h;break e}n(f,P);break}else t(f,P);P=P.sibling}g.type===vr?(h=Qn(g.props.children,f.mode,S,g.key),h.return=f,f=h):(S=Gi(g.type,g.key,g.props,null,f.mode,S),S.ref=mo(f,h,g),S.return=f,f=S)}return a(f);case gr:e:{for(P=g.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(f,h.sibling),h=o(h,g.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Is(g,f.mode,S),h.return=f,f=h}return a(f);case sn:return P=g._init,b(f,h,P(g._payload),S)}if(bo(g))return y(f,h,g,S);if(uo(g))return v(f,h,g,S);ji(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(f,h.sibling),h=o(h,g),h.return=f,f=h):(n(f,h),h=js(g,f.mode,S),h.return=f,f=h),a(f)):n(f,h)}return b}var Kr=df(!0),pf=df(!1),ca=On(null),da=null,Er=null,lu=null;function uu(){lu=Er=da=null}function cu(e){var t=ca.current;oe(ca),e._currentValue=t}function dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){da=e,lu=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(lu!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(da===null)throw Error(j(308));Er=e,da.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Jn=null;function du(e){Jn===null?Jn=[e]:Jn.push(e)}function ff(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,du(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,n)}return o=r.interleaved,o===null?(t.next=t,du(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ql(e,n)}}function Bc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pa(e,t,n,r){var o=e.updateQueue;ln=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var p=o.baseState;a=0,c=u=l=null,s=i;do{var m=s.lane,d=s.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(m=t,d=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(d,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(d,p,m):y,m==null)break e;p=ue({},p,m);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else d={eventTime:d,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=p):c=c.next=d,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(c===null&&(l=p),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tr|=a,e.lanes=a,e.memoizedState=p}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var ui={},jt=On(ui),Wo=On(ui),$o=On(ui);function Wn(e){if(e===ui)throw Error(j(174));return e}function fu(e,t){switch(te($o,t),te(Wo,e),te(jt,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$s(t,e)}oe(jt),te(jt,t)}function Gr(){oe(jt),oe(Wo),oe($o)}function mf(e){Wn($o.current);var t=Wn(jt.current),n=$s(t,e.type);t!==n&&(te(Wo,e),te(jt,n))}function hu(e){Wo.current===e&&(oe(jt),oe(Wo))}var se=On(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function mu(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Wi=Kt.ReactCurrentDispatcher,Cs=Kt.ReactCurrentBatchConfig,er=0,le=null,ve=null,we=null,ha=!1,jo=!1,Vo=0,Pv=0;function Pe(){throw Error(j(321))}function gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function vu(e,t,n,r,o,i){if(er=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wi.current=e===null||e.memoizedState===null?Iv:Av,e=n(r,o),jo){i=0;do{if(jo=!1,Vo=0,25<=i)throw Error(j(301));i+=1,we=ve=null,t.updateQueue=null,Wi.current=Nv,e=n(r,o)}while(jo)}if(Wi.current=ma,t=ve!==null&&ve.next!==null,er=0,we=ve=le=null,ha=!1,t)throw Error(j(300));return e}function yu(){var e=Vo!==0;return Vo=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function ot(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(j(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function qo(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,le.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,wt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,tr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ps(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);wt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gf(){}function vf(e,t){var n=le,r=ot(),o=t(),i=!wt(r.memoizedState,o);if(i&&(r.memoizedState=o,Be=!0),r=r.queue,wu(xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Ko(9,wf.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(j(349));er&30||yf(n,t,o)}return o}function yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wf(e,t,n,r){t.value=n,t.getSnapshot=r,bf(t)&&Sf(e)}function xf(e,t,n){return n(function(){bf(t)&&Sf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Sf(e){var t=Wt(e,1);t!==null&&yt(t,e,1,-1)}function Uc(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=jv.bind(null,le,e),[t.memoizedState,e]}function Ko(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kf(){return ot().memoizedState}function $i(e,t,n,r){var o=kt();le.flags|=e,o.memoizedState=Ko(1|t,n,void 0,r===void 0?null:r)}function _a(e,t,n,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(ve!==null){var a=ve.memoizedState;if(i=a.destroy,r!==null&&gu(r,a.deps)){o.memoizedState=Ko(t,n,i,r);return}}le.flags|=e,o.memoizedState=Ko(1|t,n,i,r)}function Hc(e,t){return $i(8390656,8,e,t)}function wu(e,t){return _a(2048,8,e,t)}function Cf(e,t){return _a(4,2,e,t)}function Ef(e,t){return _a(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,n){return n=n!=null?n.concat([e]):null,_a(4,4,Pf.bind(null,t,e),n)}function xu(){}function Rf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function If(e,t,n){return er&21?(wt(n,t)||(n=Op(),le.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function Tv(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{Z=n,Cs.transition=r}}function Af(){return ot().memoizedState}function Rv(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))Lf(t,n);else if(n=ff(e,t,n,r),n!==null){var o=Oe();yt(n,e,r,o),Of(n,t,r)}}function jv(e,t,n){var r=En(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))Lf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,wt(s,a)){var l=t.interleaved;l===null?(o.next=o,du(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=ff(e,t,o,r),n!==null&&(o=Oe(),yt(n,e,r,o),Of(n,t,r))}}function Nf(e){var t=e.alternate;return e===le||t!==null&&t===le}function Lf(e,t){jo=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ql(e,n)}}var ma={readContext:rt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Iv={readContext:rt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Hc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,Pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rv.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:xu,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=Tv.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=kt();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),xe===null)throw Error(j(349));er&30||yf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Hc(xf.bind(null,r,i,e),[e]),r.flags|=2048,Ko(9,wf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=xe.identifierPrefix;if(ae){var n=zt,r=Bt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Av={readContext:rt,useCallback:Rf,useContext:rt,useEffect:wu,useImperativeHandle:Tf,useInsertionEffect:Cf,useLayoutEffect:Ef,useMemo:jf,useReducer:Es,useRef:kf,useState:function(){return Es(qo)},useDebugValue:xu,useDeferredValue:function(e){var t=ot();return If(t,ve.memoizedState,e)},useTransition:function(){var e=Es(qo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:vf,useId:Af,unstable_isNewReconciler:!1},Nv={readContext:rt,useCallback:Rf,useContext:rt,useEffect:wu,useImperativeHandle:Tf,useInsertionEffect:Cf,useLayoutEffect:Ef,useMemo:jf,useReducer:Ps,useRef:kf,useState:function(){return Ps(qo)},useDebugValue:xu,useDeferredValue:function(e){var t=ot();return ve===null?t.memoizedState=e:If(t,ve.memoizedState,e)},useTransition:function(){var e=Ps(qo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:vf,useId:Af,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ma={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=En(e),i=Ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=kn(e,i,o),t!==null&&(yt(t,e,o,r),Ji(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=En(e),i=Ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=kn(e,i,o),t!==null&&(yt(t,e,o,r),Ji(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=En(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=kn(e,o,r),t!==null&&(yt(t,e,r,n),Ji(t,e,r))}};function Jc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(o,i):!0}function _f(e,t,n){var r=!1,o=jn,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Ue(t)?Xn:Ie.current,r=t.contextTypes,i=(r=r!=null)?Vr(e,o):jn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function fl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},pu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Ue(t)?Xn:Ie.current,o.context=Vr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(pl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ma.enqueueReplaceState(o,o.state,null),pa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",r=t;do n+=ag(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lv=typeof WeakMap=="function"?WeakMap:Map;function Mf(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){va||(va=!0,Cl=r),hl(e,t)},n}function Ff(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hl(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function $c(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qv.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Ov=Kt.ReactCurrentOwner,Be=!1;function Ne(e,t,n,r){t.child=e===null?pf(t,null,n,r):Kr(t,e.child,n,r)}function Kc(e,t,n,r,o){n=n.render;var i=t.ref;return Nr(t,o),r=vu(e,t,n,r,i,o),n=yu(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(ae&&n&&iu(t),t.flags|=1,Ne(e,t,r,o),t.child)}function Gc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Df(e,t,i,r,o)):(e=Gi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(a,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zo(i,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,$t(e,t,o)}return ml(e,t,n,r,o)}function Bf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Tr,Je),Je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Tr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Tr,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Tr,Je),Je|=r;return Ne(e,t,o,n),t.child}function zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,n,r,o){var i=Ue(n)?Xn:Ie.current;return i=Vr(t,i),Nr(t,o),n=vu(e,t,n,r,i,o),r=yu(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(ae&&r&&iu(t),t.flags|=1,Ne(e,t,n,o),t.child)}function Yc(e,t,n,r,o){if(Ue(n)){var i=!0;sa(t)}else i=!1;if(Nr(t,o),t.stateNode===null)Vi(e,t),_f(t,n,r),fl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Ue(n)?Xn:Ie.current,u=Vr(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Wc(t,a,r,u),ln=!1;var m=t.memoizedState;a.state=m,pa(t,r,a,o),l=t.memoizedState,s!==r||m!==l||ze.current||ln?(typeof c=="function"&&(pl(t,n,c,r),l=t.memoizedState),(s=ln||Jc(t,n,s,r,m,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,hf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ct(t.type,s),a.props=u,p=t.pendingProps,m=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=rt(l):(l=Ue(n)?Xn:Ie.current,l=Vr(t,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||m!==l)&&Wc(t,a,r,l),ln=!1,m=t.memoizedState,a.state=m,pa(t,r,a,o);var y=t.memoizedState;s!==p||m!==y||ze.current||ln?(typeof d=="function"&&(pl(t,n,d,r),y=t.memoizedState),(u=ln||Jc(t,n,u,r,m,y,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return gl(e,t,n,r,i,o)}function gl(e,t,n,r,o,i){zf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&_c(t,n,!1),$t(e,t,i);r=t.stateNode,Ov.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Kr(t,e.child,null,i),t.child=Kr(t,null,s,i)):Ne(e,t,s,i),t.memoizedState=r.state,o&&_c(t,n,!0),t.child}function Uf(e){var t=e.stateNode;t.pendingContext?Oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oc(e,t.context,!1),fu(e,t.containerInfo)}function Qc(e,t,n,r,o){return qr(),su(o),t.flags|=256,Ne(e,t,n,r),t.child}var vl={dehydrated:null,treeContext:null,retryLane:0};function yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hf(e,t,n){var r=t.pendingProps,o=se.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(se,o&1),e===null)return cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ba(a,r,0,null),e=Qn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=yl(n),t.memoizedState=vl,e):bu(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return _v(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Pn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Pn(s,i):(i=Qn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?yl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=vl,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bu(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&su(r),Kr(t,e.child,null,n),e=bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _v(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ts(Error(j(422))),Ii(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ba({mode:"visible",children:r.children},o,0,null),i=Qn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Kr(t,e.child,null,a),t.child.memoizedState=yl(a),t.memoizedState=vl,i);if(!(t.mode&1))return Ii(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=Ts(i,r,void 0),Ii(e,t,a,r)}if(s=(a&e.childLanes)!==0,Be||s){if(r=xe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wt(e,o),yt(r,e,o,-1))}return Tu(),r=Ts(Error(j(421))),Ii(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Kv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,$e=Sn(o.nextSibling),Ve=t,ae=!0,mt=null,e!==null&&(Ze[et++]=Bt,Ze[et++]=zt,Ze[et++]=Zn,Bt=e.id,zt=e.overflow,Zn=t),t=bu(t,r.children),t.flags|=4096,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dl(e.return,t,n)}function Rs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Jf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ne(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Rs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fa(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Rs(t,!0,n,null,i);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mv(e,t,n){switch(t.tag){case 3:Uf(t),qr();break;case 5:mf(t);break;case 1:Ue(t.type)&&sa(t);break;case 4:fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(ca,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Hf(e,t,n):(te(se,se.current&1),e=$t(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Bf(e,t,n)}return $t(e,t,n)}var Wf,wl,$f,Vf;Wf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wl=function(){};$f=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Wn(jt.current);var i=null;switch(n){case"input":o=Us(e,o),r=Us(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=Ws(e,o),r=Ws(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ia)}Vs(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&re("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function go(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fv(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ue(t.type)&&aa(),Te(t),null;case 3:return r=t.stateNode,Gr(),oe(ze),oe(Ie),mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Tl(mt),mt=null))),wl(e,t),Te(t),null;case 5:hu(t);var o=Wn($o.current);if(n=t.type,e!==null&&t.stateNode!=null)$f(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Te(t),null}if(e=Wn(jt.current),Ri(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Tt]=t,r[Jo]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<ko.length;o++)re(ko[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":sc(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":uc(r,i),re("invalid",r)}Vs(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ti(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ti(r.textContent,s,e),o=["children",""+s]):Lo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":wi(r),lc(r,i,!0);break;case"textarea":wi(r),cc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ia)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Tt]=t,e[Jo]=r,Wf(e,t,!1,!1),t.stateNode=e;e:{switch(a=qs(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<ko.length;o++)re(ko[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":sc(e,r),o=Us(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":uc(e,r),o=Ws(e,r),re("invalid",e);break;default:o=r}Vs(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Sp(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xp(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oo(e,l):typeof l=="number"&&Oo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",e):l!=null&&$l(e,i,l,a))}switch(n){case"input":wi(e),lc(e,r,!1);break;case"textarea":wi(e),cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Rr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Wn($o.current),Wn(jt.current),Ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Te(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&$e!==null&&t.mode&1&&!(t.flags&128))cf(),qr(),t.flags|=98560,i=!1;else if(i=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Tt]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else mt!==null&&(Tl(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ye===0&&(ye=3):Tu())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Gr(),wl(e,t),e===null&&Uo(t.stateNode.containerInfo),Te(t),null;case 10:return cu(t.type._context),Te(t),null;case 17:return Ue(t.type)&&aa(),Te(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)go(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fa(e),a!==null){for(t.flags|=128,go(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>Qr&&(t.flags|=128,r=!0,go(i,!1),t.lanes=4194304)}else{if(!r)if(e=fa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),go(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Te(t),null}else 2*fe()-i.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,go(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Dv(e,t){switch(au(t),t.tag){case 1:return Ue(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),oe(ze),oe(Ie),mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hu(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return Gr(),null;case 10:return cu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var Ai=!1,je=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,_=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Zc=!1;function zv(e,t){if(rl=na,e=Yp(),ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,p=e,m=null;t:for(;;){for(var d;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(d=p.firstChild)!==null;)m=p,p=d;for(;;){if(p===e)break t;if(m===n&&++u===o&&(s=a),m===i&&++c===r&&(l=a),(d=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=d}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},na=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,b=y.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:ct(t.type,v),b);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=Zc,Zc=!1,y}function Io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&xl(t,n,i)}o=o.next}while(o!==r)}}function Fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qf(e){var t=e.alternate;t!==null&&(e.alternate=null,qf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Jo],delete t[sl],delete t[Sv],delete t[kv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}function kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}var be=null,ht=!1;function tn(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(ja,n)}catch{}switch(n.tag){case 5:je||Pr(n,t);case 6:var r=be,o=ht;be=null,tn(e,t,n),be=r,ht=o,be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ht?(e=be,n=n.stateNode,e.nodeType===8?bs(e.parentNode,n):e.nodeType===1&&bs(e,n),Do(e)):bs(be,n.stateNode));break;case 4:r=be,o=ht,be=n.stateNode.containerInfo,ht=!0,tn(e,t,n),be=r,ht=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&xl(n,t,a),o=o.next}while(o!==r)}tn(e,t,n);break;case 1:if(!je&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,tn(e,t,n),je=r):tn(e,t,n);break;default:tn(e,t,n)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bv),t.forEach(function(r){var o=Gv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ht=!1;break e;case 3:be=s.stateNode.containerInfo,ht=!0;break e;case 4:be=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(be===null)throw Error(j(160));Gf(i,a,o),be=null,ht=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){pe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling}function Yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),St(e),r&4){try{Io(3,e,e.return),Fa(3,e)}catch(v){pe(e,e.return,v)}try{Io(5,e,e.return)}catch(v){pe(e,e.return,v)}}break;case 1:lt(t,e),St(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(lt(t,e),St(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var o=e.stateNode;try{Oo(o,"")}catch(v){pe(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vp(o,i),qs(s,a);var u=qs(s,i);for(a=0;a<l.length;a+=2){var c=l[a],p=l[a+1];c==="style"?Sp(o,p):c==="dangerouslySetInnerHTML"?xp(o,p):c==="children"?Oo(o,p):$l(o,c,p,u)}switch(s){case"input":Hs(o,i);break;case"textarea":yp(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var d=i.value;d!=null?Rr(o,!!i.multiple,d,!1):m!==!!i.multiple&&(i.defaultValue!=null?Rr(o,!!i.multiple,i.defaultValue,!0):Rr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jo]=i}catch(v){pe(e,e.return,v)}}break;case 6:if(lt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){pe(e,e.return,v)}}break;case 3:if(lt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(v){pe(e,e.return,v)}break;case 4:lt(t,e),St(e);break;case 13:lt(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cu=fe())),r&4&&td(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||c,lt(t,e),je=u):lt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(_=e,c=e.child;c!==null;){for(p=_=c;_!==null;){switch(m=_,d=m.child,m.tag){case 0:case 11:case 14:case 15:Io(4,m,m.return);break;case 1:Pr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:Pr(m,m.return);break;case 22:if(m.memoizedState!==null){rd(p);continue}}d!==null?(d.return=m,_=d):rd(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=bp("display",a))}catch(v){pe(e,e.return,v)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){pe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),St(e),r&4&&td(e);break;case 21:break;default:lt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Oo(o,""),r.flags&=-33);var i=ed(e);kl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ed(e);Sl(e,s,a);break;default:throw Error(j(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uv(e,t,n){_=e,Qf(e)}function Qf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ai;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||je;s=Ai;var u=je;if(Ai=a,(je=l)&&!u)for(_=o;_!==null;)a=_,l=a.child,a.tag===22&&a.memoizedState!==null?od(o):l!==null?(l.return=a,_=l):od(o);for(;i!==null;)_=i,Qf(i),i=i.sibling;_=o,Ai=s,je=u}nd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):nd(e)}}function nd(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Fa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Do(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}je||t.flags&512&&bl(t)}catch(m){pe(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function rd(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function od(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fa(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){pe(t,o,l)}}var i=t.return;try{bl(t)}catch(l){pe(t,i,l)}break;case 5:var a=t.return;try{bl(t)}catch(l){pe(t,a,l)}}}catch(l){pe(t,t.return,l)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Hv=Math.ceil,ga=Kt.ReactCurrentDispatcher,Su=Kt.ReactCurrentOwner,nt=Kt.ReactCurrentBatchConfig,G=0,xe=null,me=null,Se=0,Je=0,Tr=On(0),ye=0,Go=null,tr=0,Da=0,ku=0,Ao=null,De=null,Cu=0,Qr=1/0,_t=null,va=!1,Cl=null,Cn=null,Ni=!1,vn=null,ya=0,No=0,El=null,qi=-1,Ki=0;function Oe(){return G&6?fe():qi!==-1?qi:qi=fe()}function En(e){return e.mode&1?G&2&&Se!==0?Se&-Se:Ev.transition!==null?(Ki===0&&(Ki=Op()),Ki):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Up(e.type)),e):1}function yt(e,t,n,r){if(50<No)throw No=0,El=null,Error(j(185));ai(e,n,r),(!(G&2)||e!==xe)&&(e===xe&&(!(G&2)&&(Da|=n),ye===4&&cn(e,Se)),He(e,r),n===1&&G===0&&!(t.mode&1)&&(Qr=fe()+500,Oa&&_n()))}function He(e,t){var n=e.callbackNode;Eg(e,t);var r=ta(e,e===xe?Se:0);if(r===0)n!==null&&fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fc(n),t===1)e.tag===0?Cv(id.bind(null,e)):sf(id.bind(null,e)),xv(function(){!(G&6)&&_n()}),n=null;else{switch(_p(r)){case 1:n=Yl;break;case 4:n=Np;break;case 16:n=ea;break;case 536870912:n=Lp;break;default:n=ea}n=ih(n,Xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xf(e,t){if(qi=-1,Ki=0,G&6)throw Error(j(327));var n=e.callbackNode;if(Lr()&&e.callbackNode!==n)return null;var r=ta(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wa(e,r);else{t=r;var o=G;G|=2;var i=eh();(xe!==e||Se!==t)&&(_t=null,Qr=fe()+500,Yn(e,t));do try{$v();break}catch(s){Zf(e,s)}while(!0);uu(),ga.current=i,G=o,me!==null?t=0:(xe=null,Se=0,t=ye)}if(t!==0){if(t===2&&(o=Xs(e),o!==0&&(r=o,t=Pl(e,o))),t===1)throw n=Go,Yn(e,0),cn(e,r),He(e,fe()),n;if(t===6)cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Jv(o)&&(t=wa(e,r),t===2&&(i=Xs(e),i!==0&&(r=i,t=Pl(e,i))),t===1))throw n=Go,Yn(e,0),cn(e,r),He(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Un(e,De,_t);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=Cu+500-fe(),10<t)){if(ta(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=al(Un.bind(null,e,De,_t),t);break}Un(e,De,_t);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-vt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hv(r/1960))-r,10<r){e.timeoutHandle=al(Un.bind(null,e,De,_t),r);break}Un(e,De,_t);break;case 5:Un(e,De,_t);break;default:throw Error(j(329))}}}return He(e,fe()),e.callbackNode===n?Xf.bind(null,e):null}function Pl(e,t){var n=Ao;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=wa(e,t),e!==2&&(t=De,De=n,t!==null&&Tl(t)),e}function Tl(e){De===null?De=e:De.push.apply(De,e)}function Jv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!wt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~ku,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function id(e){if(G&6)throw Error(j(327));Lr();var t=ta(e,0);if(!(t&1))return He(e,fe()),null;var n=wa(e,t);if(e.tag!==0&&n===2){var r=Xs(e);r!==0&&(t=r,n=Pl(e,r))}if(n===1)throw n=Go,Yn(e,0),cn(e,t),He(e,fe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,De,_t),He(e,fe()),null}function Eu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Qr=fe()+500,Oa&&_n())}}function nr(e){vn!==null&&vn.tag===0&&!(G&6)&&Lr();var t=G;G|=1;var n=nt.transition,r=Z;try{if(nt.transition=null,Z=1,e)return e()}finally{Z=r,nt.transition=n,G=t,!(G&6)&&_n()}}function Pu(){Je=Tr.current,oe(Tr)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wv(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:Gr(),oe(ze),oe(Ie),mu();break;case 5:hu(r);break;case 4:Gr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:cu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(xe=e,me=e=Pn(e.current,null),Se=Je=t,ye=0,Go=null,ku=Da=tr=0,De=Ao=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Jn=null}return e}function Zf(e,t){do{var n=me;try{if(uu(),Wi.current=ma,ha){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ha=!1}if(er=0,we=ve=le=null,jo=!1,Vo=0,Su.current=null,n===null||n.return===null){ye=1,Go=t,me=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=Vc(a);if(d!==null){d.flags&=-257,qc(d,a,s,i,t),d.mode&1&&$c(i,u,t),t=d,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){$c(i,u,t),Tu();break e}l=Error(j(426))}}else if(ae&&s.mode&1){var b=Vc(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),qc(b,a,s,i,t),su(Yr(l,s));break e}}i=l=Yr(l,s),ye!==4&&(ye=2),Ao===null?Ao=[i]:Ao.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Mf(i,l,t);Bc(i,f);break e;case 1:s=l;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Cn===null||!Cn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Ff(i,s,t);Bc(i,S);break e}}i=i.return}while(i!==null)}nh(n)}catch(k){t=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function eh(){var e=ga.current;return ga.current=ma,e===null?ma:e}function Tu(){(ye===0||ye===3||ye===2)&&(ye=4),xe===null||!(tr&268435455)&&!(Da&268435455)||cn(xe,Se)}function wa(e,t){var n=G;G|=2;var r=eh();(xe!==e||Se!==t)&&(_t=null,Yn(e,t));do try{Wv();break}catch(o){Zf(e,o)}while(!0);if(uu(),G=n,ga.current=r,me!==null)throw Error(j(261));return xe=null,Se=0,ye}function Wv(){for(;me!==null;)th(me)}function $v(){for(;me!==null&&!gg();)th(me)}function th(e){var t=oh(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?nh(e):me=t,Su.current=null}function nh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dv(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=Fv(n,t,Je),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function Un(e,t,n){var r=Z,o=nt.transition;try{nt.transition=null,Z=1,Vv(e,t,n,r)}finally{nt.transition=o,Z=r}return null}function Vv(e,t,n,r){do Lr();while(vn!==null);if(G&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pg(e,i),e===xe&&(me=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ni||(Ni=!0,ih(ea,function(){return Lr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var a=Z;Z=1;var s=G;G|=4,Su.current=null,zv(e,n),Yf(n,e),pv(ol),na=!!rl,ol=rl=null,e.current=n,Uv(n),vg(),G=s,Z=a,nt.transition=i}else e.current=n;if(Ni&&(Ni=!1,vn=e,ya=o),i=e.pendingLanes,i===0&&(Cn=null),xg(n.stateNode),He(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(va)throw va=!1,e=Cl,Cl=null,e;return ya&1&&e.tag!==0&&Lr(),i=e.pendingLanes,i&1?e===El?No++:(No=0,El=e):No=0,_n(),null}function Lr(){if(vn!==null){var e=_p(ya),t=nt.transition,n=Z;try{if(nt.transition=null,Z=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,ya=0,G&6)throw Error(j(331));var o=G;for(G|=4,_=e.current;_!==null;){var i=_,a=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(_=u;_!==null;){var c=_;switch(c.tag){case 0:case 11:case 15:Io(8,c,i)}var p=c.child;if(p!==null)p.return=c,_=p;else for(;_!==null;){c=_;var m=c.sibling,d=c.return;if(qf(c),c===u){_=null;break}if(m!==null){m.return=d,_=m;break}_=d}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}_=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_=a;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Io(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var h=e.current;for(_=h;_!==null;){a=_;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,_=g;else e:for(a=h;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fa(9,s)}}catch(k){pe(s,s.return,k)}if(s===a){_=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,_=S;break e}_=s.return}}if(G=o,_n(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(ja,e)}catch{}r=!0}return r}finally{Z=n,nt.transition=t}}return!1}function ad(e,t,n){t=Yr(n,t),t=Mf(e,t,1),e=kn(e,t,1),t=Oe(),e!==null&&(ai(e,1,t),He(e,t))}function pe(e,t,n){if(e.tag===3)ad(e,e,n);else for(;t!==null;){if(t.tag===3){ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Yr(n,e),e=Ff(t,e,1),t=kn(t,e,1),e=Oe(),t!==null&&(ai(t,1,e),He(t,e));break}}t=t.return}}function qv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(ye===4||ye===3&&(Se&130023424)===Se&&500>fe()-Cu?Yn(e,0):ku|=n),He(e,t)}function rh(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=Oe();e=Wt(e,t),e!==null&&(ai(e,t,n),He(e,n))}function Kv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rh(e,n)}function Gv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),rh(e,n)}var oh;oh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,Mv(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ae&&t.flags&1048576&&lf(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var o=Vr(t,Ie.current);Nr(t,n),o=vu(null,t,r,e,o,n);var i=yu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,sa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,pu(t),o.updater=Ma,t.stateNode=o,o._reactInternals=t,fl(t,r,e,n),t=gl(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&iu(t),Ne(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Qv(r),e=ct(r,e),o){case 0:t=ml(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Kc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,ct(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Yc(e,t,r,o,n);case 3:e:{if(Uf(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,hf(e,t),pa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yr(Error(j(423)),t),t=Qc(e,t,r,n,o);break e}else if(r!==o){o=Yr(Error(j(424)),t),t=Qc(e,t,r,n,o);break e}else for($e=Sn(t.stateNode.containerInfo.firstChild),Ve=t,ae=!0,mt=null,n=pf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===o){t=$t(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return mf(t),e===null&&cl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,il(r,o)?a=null:i!==null&&il(r,i)&&(t.flags|=32),zf(e,t),Ne(e,t,a,n),t.child;case 6:return e===null&&cl(t),null;case 13:return Hf(e,t,n);case 4:return fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Kc(e,t,r,o,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,te(ca,r._currentValue),r._currentValue=a,i!==null)if(wt(i.value,a)){if(i.children===o.children&&!ze.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ut(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),dl(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),dl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ne(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Nr(t,n),o=rt(o),r=r(o),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),Gc(e,t,r,o,n);case 15:return Df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Vi(e,t),t.tag=1,Ue(r)?(e=!0,sa(t)):e=!1,Nr(t,n),_f(t,r,o),fl(t,r,o,n),gl(null,t,r,!0,e,n);case 19:return Jf(e,t,n);case 22:return Bf(e,t,n)}throw Error(j(156,t.tag))};function ih(e,t){return Ap(e,t)}function Yv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Yv(e,t,n,r)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qv(e){if(typeof e=="function")return Ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ql)return 11;if(e===Kl)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ru(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vr:return Qn(n.children,o,i,t);case Vl:a=8,o|=8;break;case Fs:return e=tt(12,n,t,o|2),e.elementType=Fs,e.lanes=i,e;case Ds:return e=tt(13,n,t,o),e.elementType=Ds,e.lanes=i,e;case Bs:return e=tt(19,n,t,o),e.elementType=Bs,e.lanes=i,e;case hp:return Ba(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pp:a=10;break e;case fp:a=9;break e;case ql:a=11;break e;case Kl:a=14;break e;case sn:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=tt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=tt(22,e,r,t),e.elementType=hp,e.lanes=n,e.stateNode={isHidden:!1},e}function js(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Is(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ju(e,t,n,r,o,i,a,s,l){return e=new Xv(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(i),e}function Zv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ah(e){if(!e)return jn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ue(n))return af(e,n,t)}return t}function sh(e,t,n,r,o,i,a,s,l){return e=ju(n,r,!0,e,o,i,a,s,l),e.context=ah(null),n=e.current,r=Oe(),o=En(n),i=Ut(r,o),i.callback=t??null,kn(n,i,o),e.current.lanes=o,ai(e,o,r),He(e,r),e}function za(e,t,n,r){var o=t.current,i=Oe(),a=En(o);return n=ah(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(o,t,a),e!==null&&(yt(e,o,a,i),Ji(e,o,a)),a}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Iu(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function ey(){return null}var lh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Au(e){this._internalRoot=e}Ua.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));za(e,t,null,null)};Ua.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){za(null,e,null,null)}),t[Jt]=null}};function Ua(e){this._internalRoot=e}Ua.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&zp(e)}};function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ld(){}function ty(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=xa(a);i.call(u)}}var a=sh(t,r,e,0,null,!1,!1,"",ld);return e._reactRootContainer=a,e[Jt]=a.current,Uo(e.nodeType===8?e.parentNode:e),nr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=xa(l);s.call(u)}}var l=ju(e,0,!1,null,null,!1,!1,"",ld);return e._reactRootContainer=l,e[Jt]=l.current,Uo(e.nodeType===8?e.parentNode:e),nr(function(){za(t,l,n,r)}),l}function Ja(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=xa(a);s.call(l)}}za(t,a,e,o)}else a=ty(n,t,e,o,r);return xa(a)}Mp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=So(t.pendingLanes);n!==0&&(Ql(t,n|1),He(t,fe()),!(G&6)&&(Qr=fe()+500,_n()))}break;case 13:nr(function(){var r=Wt(e,1);if(r!==null){var o=Oe();yt(r,e,1,o)}}),Iu(e,1)}};Xl=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Oe();yt(t,e,134217728,n)}Iu(e,134217728)}};Fp=function(e){if(e.tag===13){var t=En(e),n=Wt(e,t);if(n!==null){var r=Oe();yt(n,e,t,r)}Iu(e,t)}};Dp=function(){return Z};Bp=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Gs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=La(r);if(!o)throw Error(j(90));gp(r),Hs(r,o)}}}break;case"textarea":yp(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};Ep=Eu;Pp=nr;var ny={usingClientEntryPoint:!1,Events:[li,br,La,kp,Cp,Eu]},vo={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ry={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jp(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{ja=Li.inject(ry),Rt=Li}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(t))throw Error(j(200));return Zv(e,t,null,n)};Ge.createRoot=function(e,t){if(!Nu(e))throw Error(j(299));var n=!1,r="",o=lh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ju(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,Uo(e.nodeType===8?e.parentNode:e),new Au(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=jp(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return nr(e)};Ge.hydrate=function(e,t,n){if(!Ha(t))throw Error(j(200));return Ja(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!Nu(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=lh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=sh(t,null,e,1,n??null,o,!1,i,a),e[Jt]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ua(t)};Ge.render=function(e,t,n){if(!Ha(t))throw Error(j(200));return Ja(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Ha(e))throw Error(j(40));return e._reactRootContainer?(nr(function(){Ja(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Eu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ha(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ja(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uh)}catch(e){console.error(e)}}uh(),lp.exports=Ge;var Wa=lp.exports;const oy=Yd(Wa);var ch,ud=Wa;ch=ud.createRoot,ud.hydrateRoot;var iy=e=>{switch(e){case"success":return ly;case"info":return cy;case"warning":return uy;case"error":return dy;default:return null}},ay=Array(12).fill(0),sy=({visible:e,className:t})=>A.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},A.createElement("div",{className:"sonner-spinner"},ay.map((n,r)=>A.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),ly=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),uy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),cy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),dy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),py=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},A.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),A.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),fy=()=>{let[e,t]=A.useState(document.hidden);return A.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Rl=1,hy=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Rl++,i=this.toasts.find(s=>s.id===o),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),i?this.toasts=this.toasts.map(s=>s.id===o?(this.publish({...s,...e,id:o,title:n}),{...s,...e,id:o,dismissible:a,title:n}):s):this.addToast({title:n,...r,dismissible:a,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,i,a=r.then(async l=>{if(i=["resolve",l],A.isValidElement(l))o=!1,this.create({id:n,type:"default",message:l});else if(gy(l)&&!l.ok){o=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${l.status}`):t.error,c=typeof t.description=="function"?await t.description(`HTTP error! status: ${l.status}`):t.description;this.create({id:n,type:"error",message:u,description:c})}else if(t.success!==void 0){o=!1;let u=typeof t.success=="function"?await t.success(l):t.success,c=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"success",message:u,description:c})}}).catch(async l=>{if(i=["reject",l],t.error!==void 0){o=!1;let u=typeof t.error=="function"?await t.error(l):t.error,c=typeof t.description=="function"?await t.description(l):t.description;this.create({id:n,type:"error",message:u,description:c})}}).finally(()=>{var l;o&&(this.dismiss(n),n=void 0),(l=t.finally)==null||l.call(t)}),s=()=>new Promise((l,u)=>a.then(()=>i[0]==="reject"?u(i[1]):l(i[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Rl++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Fe=new hy,my=(e,t)=>{let n=(t==null?void 0:t.id)||Rl++;return Fe.addToast({title:e,...t,id:n}),n},gy=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",vy=my,yy=()=>Fe.toasts,wy=()=>Fe.getActiveToasts(),dh=Object.assign(vy,{success:Fe.success,info:Fe.info,warning:Fe.warning,error:Fe.error,custom:Fe.custom,message:Fe.message,promise:Fe.promise,dismiss:Fe.dismiss,loading:Fe.loading},{getHistory:yy,getToasts:wy});function xy(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}xy(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Oi(e){return e.label!==void 0}var by=3,Sy="32px",ky="16px",cd=4e3,Cy=356,Ey=14,Py=20,Ty=200;function ut(...e){return e.filter(Boolean).join(" ")}function Ry(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var jy=e=>{var t,n,r,o,i,a,s,l,u,c,p;let{invert:m,toast:d,unstyled:y,interacting:v,setHeights:b,visibleToasts:f,heights:h,index:g,toasts:S,expanded:k,removeToast:P,defaultRichColors:C,closeButton:I,style:L,cancelButtonStyle:N,actionButtonStyle:J,className:M="",descriptionClassName:q="",duration:W,position:ce,gap:$,loadingIcon:V,expandByDefault:T,classNames:R,icons:O,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:F}=e,[Y,K]=A.useState(null),[he,Ce]=A.useState(null),[X,ur]=A.useState(!1),[Gt,Fn]=A.useState(!1),[Yt,cr]=A.useState(!1),[Qt,fi]=A.useState(!1),[es,hi]=A.useState(!1),[ts,so]=A.useState(0),[dr,Ku]=A.useState(0),lo=A.useRef(d.duration||W||cd),Gu=A.useRef(null),Dn=A.useRef(null),Sm=g===0,km=g+1<=f,Qe=d.type,pr=d.dismissible!==!1,Cm=d.className||"",Em=d.descriptionClassName||"",mi=A.useMemo(()=>h.findIndex(D=>D.toastId===d.id)||0,[h,d.id]),Pm=A.useMemo(()=>{var D;return(D=d.closeButton)!=null?D:I},[d.closeButton,I]),Yu=A.useMemo(()=>d.duration||W||cd,[d.duration,W]),ns=A.useRef(0),fr=A.useRef(0),Qu=A.useRef(0),hr=A.useRef(null),[Tm,Rm]=ce.split("-"),Xu=A.useMemo(()=>h.reduce((D,ee,ie)=>ie>=mi?D:D+ee.height,0),[h,mi]),Zu=fy(),jm=d.invert||m,rs=Qe==="loading";fr.current=A.useMemo(()=>mi*$+Xu,[mi,Xu]),A.useEffect(()=>{lo.current=Yu},[Yu]),A.useEffect(()=>{ur(!0)},[]),A.useEffect(()=>{let D=Dn.current;if(D){let ee=D.getBoundingClientRect().height;return Ku(ee),b(ie=>[{toastId:d.id,height:ee,position:d.position},...ie]),()=>b(ie=>ie.filter(it=>it.toastId!==d.id))}},[b,d.id]),A.useLayoutEffect(()=>{if(!X)return;let D=Dn.current,ee=D.style.height;D.style.height="auto";let ie=D.getBoundingClientRect().height;D.style.height=ee,Ku(ie),b(it=>it.find(at=>at.toastId===d.id)?it.map(at=>at.toastId===d.id?{...at,height:ie}:at):[{toastId:d.id,height:ie,position:d.position},...it])},[X,d.title,d.description,b,d.id]);let Xt=A.useCallback(()=>{Fn(!0),so(fr.current),b(D=>D.filter(ee=>ee.toastId!==d.id)),setTimeout(()=>{P(d)},Ty)},[d,P,b,fr]);A.useEffect(()=>{if(d.promise&&Qe==="loading"||d.duration===1/0||d.type==="loading")return;let D;return k||v||F&&Zu?(()=>{if(Qu.current<ns.current){let ee=new Date().getTime()-ns.current;lo.current=lo.current-ee}Qu.current=new Date().getTime()})():lo.current!==1/0&&(ns.current=new Date().getTime(),D=setTimeout(()=>{var ee;(ee=d.onAutoClose)==null||ee.call(d,d),Xt()},lo.current)),()=>clearTimeout(D)},[k,v,d,Qe,F,Zu,Xt]),A.useEffect(()=>{d.delete&&Xt()},[Xt,d.delete]);function Im(){var D,ee,ie;return O!=null&&O.loading?A.createElement("div",{className:ut(R==null?void 0:R.loader,(D=d==null?void 0:d.classNames)==null?void 0:D.loader,"sonner-loader"),"data-visible":Qe==="loading"},O.loading):V?A.createElement("div",{className:ut(R==null?void 0:R.loader,(ee=d==null?void 0:d.classNames)==null?void 0:ee.loader,"sonner-loader"),"data-visible":Qe==="loading"},V):A.createElement(sy,{className:ut(R==null?void 0:R.loader,(ie=d==null?void 0:d.classNames)==null?void 0:ie.loader),visible:Qe==="loading"})}return A.createElement("li",{tabIndex:0,ref:Dn,className:ut(M,Cm,R==null?void 0:R.toast,(t=d==null?void 0:d.classNames)==null?void 0:t.toast,R==null?void 0:R.default,R==null?void 0:R[Qe],(n=d==null?void 0:d.classNames)==null?void 0:n[Qe]),"data-sonner-toast":"","data-rich-colors":(r=d.richColors)!=null?r:C,"data-styled":!(d.jsx||d.unstyled||y),"data-mounted":X,"data-promise":!!d.promise,"data-swiped":es,"data-removed":Gt,"data-visible":km,"data-y-position":Tm,"data-x-position":Rm,"data-index":g,"data-front":Sm,"data-swiping":Yt,"data-dismissible":pr,"data-type":Qe,"data-invert":jm,"data-swipe-out":Qt,"data-swipe-direction":he,"data-expanded":!!(k||T&&X),style:{"--index":g,"--toasts-before":g,"--z-index":S.length-g,"--offset":`${Gt?ts:fr.current}px`,"--initial-height":T?"auto":`${dr}px`,...L,...d.style},onDragEnd:()=>{cr(!1),K(null),hr.current=null},onPointerDown:D=>{rs||!pr||(Gu.current=new Date,so(fr.current),D.target.setPointerCapture(D.pointerId),D.target.tagName!=="BUTTON"&&(cr(!0),hr.current={x:D.clientX,y:D.clientY}))},onPointerUp:()=>{var D,ee,ie,it;if(Qt||!pr)return;hr.current=null;let at=Number(((D=Dn.current)==null?void 0:D.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Zt=Number(((ee=Dn.current)==null?void 0:ee.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Bn=new Date().getTime()-((ie=Gu.current)==null?void 0:ie.getTime()),st=Y==="x"?at:Zt,en=Math.abs(st)/Bn;if(Math.abs(st)>=Py||en>.11){so(fr.current),(it=d.onDismiss)==null||it.call(d,d),Ce(Y==="x"?at>0?"right":"left":Zt>0?"down":"up"),Xt(),fi(!0),hi(!1);return}cr(!1),K(null)},onPointerMove:D=>{var ee,ie,it,at;if(!hr.current||!pr||((ee=window.getSelection())==null?void 0:ee.toString().length)>0)return;let Zt=D.clientY-hr.current.y,Bn=D.clientX-hr.current.x,st=(ie=e.swipeDirections)!=null?ie:Ry(ce);!Y&&(Math.abs(Bn)>1||Math.abs(Zt)>1)&&K(Math.abs(Bn)>Math.abs(Zt)?"x":"y");let en={x:0,y:0};Y==="y"?(st.includes("top")||st.includes("bottom"))&&(st.includes("top")&&Zt<0||st.includes("bottom")&&Zt>0)&&(en.y=Zt):Y==="x"&&(st.includes("left")||st.includes("right"))&&(st.includes("left")&&Bn<0||st.includes("right")&&Bn>0)&&(en.x=Bn),(Math.abs(en.x)>0||Math.abs(en.y)>0)&&hi(!0),(it=Dn.current)==null||it.style.setProperty("--swipe-amount-x",`${en.x}px`),(at=Dn.current)==null||at.style.setProperty("--swipe-amount-y",`${en.y}px`)}},Pm&&!d.jsx?A.createElement("button",{"aria-label":U,"data-disabled":rs,"data-close-button":!0,onClick:rs||!pr?()=>{}:()=>{var D;Xt(),(D=d.onDismiss)==null||D.call(d,d)},className:ut(R==null?void 0:R.closeButton,(o=d==null?void 0:d.classNames)==null?void 0:o.closeButton)},(i=O==null?void 0:O.close)!=null?i:py):null,d.jsx||x.isValidElement(d.title)?d.jsx?d.jsx:typeof d.title=="function"?d.title():d.title:A.createElement(A.Fragment,null,Qe||d.icon||d.promise?A.createElement("div",{"data-icon":"",className:ut(R==null?void 0:R.icon,(a=d==null?void 0:d.classNames)==null?void 0:a.icon)},d.promise||d.type==="loading"&&!d.icon?d.icon||Im():null,d.type!=="loading"?d.icon||(O==null?void 0:O[Qe])||iy(Qe):null):null,A.createElement("div",{"data-content":"",className:ut(R==null?void 0:R.content,(s=d==null?void 0:d.classNames)==null?void 0:s.content)},A.createElement("div",{"data-title":"",className:ut(R==null?void 0:R.title,(l=d==null?void 0:d.classNames)==null?void 0:l.title)},typeof d.title=="function"?d.title():d.title),d.description?A.createElement("div",{"data-description":"",className:ut(q,Em,R==null?void 0:R.description,(u=d==null?void 0:d.classNames)==null?void 0:u.description)},typeof d.description=="function"?d.description():d.description):null),x.isValidElement(d.cancel)?d.cancel:d.cancel&&Oi(d.cancel)?A.createElement("button",{"data-button":!0,"data-cancel":!0,style:d.cancelButtonStyle||N,onClick:D=>{var ee,ie;Oi(d.cancel)&&pr&&((ie=(ee=d.cancel).onClick)==null||ie.call(ee,D),Xt())},className:ut(R==null?void 0:R.cancelButton,(c=d==null?void 0:d.classNames)==null?void 0:c.cancelButton)},d.cancel.label):null,x.isValidElement(d.action)?d.action:d.action&&Oi(d.action)?A.createElement("button",{"data-button":!0,"data-action":!0,style:d.actionButtonStyle||J,onClick:D=>{var ee,ie;Oi(d.action)&&((ie=(ee=d.action).onClick)==null||ie.call(ee,D),!D.defaultPrevented&&Xt())},className:ut(R==null?void 0:R.actionButton,(p=d==null?void 0:d.classNames)==null?void 0:p.actionButton)},d.action.label):null))};function dd(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Iy(e,t){let n={};return[e,t].forEach((r,o)=>{let i=o===1,a=i?"--mobile-offset":"--offset",s=i?ky:Sy;function l(u){["top","right","bottom","left"].forEach(c=>{n[`${a}-${c}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?l(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${a}-${u}`]=s:n[`${a}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):l(s)}),n}var Ay=x.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:i,closeButton:a,className:s,offset:l,mobileOffset:u,theme:c="light",richColors:p,duration:m,style:d,visibleToasts:y=by,toastOptions:v,dir:b=dd(),gap:f=Ey,loadingIcon:h,icons:g,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[P,C]=A.useState([]),I=A.useMemo(()=>Array.from(new Set([r].concat(P.filter(F=>F.position).map(F=>F.position)))),[P,r]),[L,N]=A.useState([]),[J,M]=A.useState(!1),[q,W]=A.useState(!1),[ce,$]=A.useState(c!=="system"?c:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=A.useRef(null),T=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=A.useRef(null),O=A.useRef(!1),U=A.useCallback(F=>{C(Y=>{var K;return(K=Y.find(he=>he.id===F.id))!=null&&K.delete||Fe.dismiss(F.id),Y.filter(({id:he})=>he!==F.id)})},[]);return A.useEffect(()=>Fe.subscribe(F=>{if(F.dismiss){C(Y=>Y.map(K=>K.id===F.id?{...K,delete:!0}:K));return}setTimeout(()=>{oy.flushSync(()=>{C(Y=>{let K=Y.findIndex(he=>he.id===F.id);return K!==-1?[...Y.slice(0,K),{...Y[K],...F},...Y.slice(K+1)]:[F,...Y]})})})}),[]),A.useEffect(()=>{if(c!=="system"){$(c);return}if(c==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let F=window.matchMedia("(prefers-color-scheme: dark)");try{F.addEventListener("change",({matches:Y})=>{$(Y?"dark":"light")})}catch{F.addListener(({matches:K})=>{try{$(K?"dark":"light")}catch(he){console.error(he)}})}},[c]),A.useEffect(()=>{P.length<=1&&M(!1)},[P]),A.useEffect(()=>{let F=Y=>{var K,he;o.every(Ce=>Y[Ce]||Y.code===Ce)&&(M(!0),(K=V.current)==null||K.focus()),Y.code==="Escape"&&(document.activeElement===V.current||(he=V.current)!=null&&he.contains(document.activeElement))&&M(!1)};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[o]),A.useEffect(()=>{if(V.current)return()=>{R.current&&(R.current.focus({preventScroll:!0}),R.current=null,O.current=!1)}},[V.current]),A.createElement("section",{ref:t,"aria-label":`${S} ${T}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},I.map((F,Y)=>{var K;let[he,Ce]=F.split("-");return P.length?A.createElement("ol",{key:F,dir:b==="auto"?dd():b,tabIndex:-1,ref:V,className:s,"data-sonner-toaster":!0,"data-theme":ce,"data-y-position":he,"data-lifted":J&&P.length>1&&!i,"data-x-position":Ce,style:{"--front-toast-height":`${((K=L[0])==null?void 0:K.height)||0}px`,"--width":`${Cy}px`,"--gap":`${f}px`,...d,...Iy(l,u)},onBlur:X=>{O.current&&!X.currentTarget.contains(X.relatedTarget)&&(O.current=!1,R.current&&(R.current.focus({preventScroll:!0}),R.current=null))},onFocus:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||O.current||(O.current=!0,R.current=X.relatedTarget)},onMouseEnter:()=>M(!0),onMouseMove:()=>M(!0),onMouseLeave:()=>{q||M(!1)},onDragEnd:()=>M(!1),onPointerDown:X=>{X.target instanceof HTMLElement&&X.target.dataset.dismissible==="false"||W(!0)},onPointerUp:()=>W(!1)},P.filter(X=>!X.position&&Y===0||X.position===F).map((X,ur)=>{var Gt,Fn;return A.createElement(jy,{key:X.id,icons:g,index:ur,toast:X,defaultRichColors:p,duration:(Gt=v==null?void 0:v.duration)!=null?Gt:m,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:n,visibleToasts:y,closeButton:(Fn=v==null?void 0:v.closeButton)!=null?Fn:a,interacting:q,position:F,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:U,toasts:P.filter(Yt=>Yt.position==X.position),heights:L.filter(Yt=>Yt.position==X.position),setHeights:N,expandByDefault:i,gap:f,loadingIcon:h,expanded:J,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const Ny=({...e})=>w.jsx(Ay,{className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e});function Ft(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function pd(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ph(...e){return t=>{let n=!1;const r=e.map(o=>{const i=pd(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():pd(e[o],null)}}}}function ar(...e){return x.useCallback(ph(...e),e)}function fh(e,t=[]){let n=[];function r(i,a){const s=x.createContext(a),l=n.length;n=[...n,a];const u=p=>{var f;const{scope:m,children:d,...y}=p,v=((f=m==null?void 0:m[e])==null?void 0:f[l])||s,b=x.useMemo(()=>y,Object.values(y));return w.jsx(v.Provider,{value:b,children:d})};u.displayName=i+"Provider";function c(p,m){var v;const d=((v=m==null?void 0:m[e])==null?void 0:v[l])||s,y=x.useContext(d);if(y)return y;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[u,c]}const o=()=>{const i=n.map(a=>x.createContext(a));return function(s){const l=(s==null?void 0:s[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Ly(o,...t)]}function Ly(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((s,{useScope:l,scopeName:u})=>{const p=l(i)[`__scope${u}`];return{...s,...p}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Oy(e){const t=_y(e),n=x.forwardRef((r,o)=>{const{children:i,...a}=r,s=x.Children.toArray(i),l=s.find(Fy);if(l){const u=l.props.children,c=s.map(p=>p===l?x.Children.count(u)>1?x.Children.only(null):x.isValidElement(u)?u.props.children:null:p);return w.jsx(t,{...a,ref:o,children:x.isValidElement(u)?x.cloneElement(u,void 0,c):null})}return w.jsx(t,{...a,ref:o,children:i})});return n.displayName=`${e}.Slot`,n}function _y(e){const t=x.forwardRef((n,r)=>{const{children:o,...i}=n;if(x.isValidElement(o)){const a=By(o),s=Dy(i,o.props);return o.type!==x.Fragment&&(s.ref=r?ph(r,a):a),x.cloneElement(o,s)}return x.Children.count(o)>1?x.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var hh=Symbol("radix.slottable");function My(e){const t=({children:n})=>w.jsx(w.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=hh,t}function Fy(e){return x.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===hh}function Dy(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function By(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var zy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],sr=zy.reduce((e,t)=>{const n=Oy(`Primitive.${t}`),r=x.forwardRef((o,i)=>{const{asChild:a,...s}=o,l=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(l,{...s,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Uy(e,t){e&&Wa.flushSync(()=>e.dispatchEvent(t))}function $a(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Hy(e,t=globalThis==null?void 0:globalThis.document){const n=$a(e);x.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Jy="DismissableLayer",jl="dismissableLayer.update",Wy="dismissableLayer.pointerDownOutside",$y="dismissableLayer.focusOutside",fd,mh=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),gh=x.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:a,onDismiss:s,...l}=e,u=x.useContext(mh),[c,p]=x.useState(null),m=(c==null?void 0:c.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=x.useState({}),y=ar(t,C=>p(C)),v=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),f=v.indexOf(b),h=c?v.indexOf(c):-1,g=u.layersWithOutsidePointerEventsDisabled.size>0,S=h>=f,k=Ky(C=>{const I=C.target,L=[...u.branches].some(N=>N.contains(I));!S||L||(o==null||o(C),a==null||a(C),C.defaultPrevented||s==null||s())},m),P=Gy(C=>{const I=C.target;[...u.branches].some(N=>N.contains(I))||(i==null||i(C),a==null||a(C),C.defaultPrevented||s==null||s())},m);return Hy(C=>{h===u.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&s&&(C.preventDefault(),s()))},m),x.useEffect(()=>{if(c)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(fd=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(c)),u.layers.add(c),hd(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=fd)}},[c,m,n,u]),x.useEffect(()=>()=>{c&&(u.layers.delete(c),u.layersWithOutsidePointerEventsDisabled.delete(c),hd())},[c,u]),x.useEffect(()=>{const C=()=>d({});return document.addEventListener(jl,C),()=>document.removeEventListener(jl,C)},[]),w.jsx(sr.div,{...l,ref:y,style:{pointerEvents:g?S?"auto":"none":void 0,...e.style},onFocusCapture:Ft(e.onFocusCapture,P.onFocusCapture),onBlurCapture:Ft(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:Ft(e.onPointerDownCapture,k.onPointerDownCapture)})});gh.displayName=Jy;var Vy="DismissableLayerBranch",qy=x.forwardRef((e,t)=>{const n=x.useContext(mh),r=x.useRef(null),o=ar(t,r);return x.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),w.jsx(sr.div,{...e,ref:o})});qy.displayName=Vy;function Ky(e,t=globalThis==null?void 0:globalThis.document){const n=$a(e),r=x.useRef(!1),o=x.useRef(()=>{});return x.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let l=function(){vh(Wy,n,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Gy(e,t=globalThis==null?void 0:globalThis.document){const n=$a(e),r=x.useRef(!1);return x.useEffect(()=>{const o=i=>{i.target&&!r.current&&vh($y,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function hd(){const e=new CustomEvent(jl);document.dispatchEvent(e)}function vh(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Uy(o,i):o.dispatchEvent(i)}var Yo=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{};const Yy=["top","right","bottom","left"],In=Math.min,We=Math.max,ba=Math.round,_i=Math.floor,It=e=>({x:e,y:e}),Qy={left:"right",right:"left",bottom:"top",top:"bottom"},Xy={start:"end",end:"start"};function Il(e,t,n){return We(e,In(t,n))}function Vt(e,t){return typeof e=="function"?e(t):e}function qt(e){return e.split("-")[0]}function ro(e){return e.split("-")[1]}function Lu(e){return e==="x"?"y":"x"}function Ou(e){return e==="y"?"height":"width"}function An(e){return["top","bottom"].includes(qt(e))?"y":"x"}function _u(e){return Lu(An(e))}function Zy(e,t,n){n===void 0&&(n=!1);const r=ro(e),o=_u(e),i=Ou(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Sa(a)),[a,Sa(a)]}function e0(e){const t=Sa(e);return[Al(e),t,Al(t)]}function Al(e){return e.replace(/start|end/g,t=>Xy[t])}function t0(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}function n0(e,t,n,r){const o=ro(e);let i=t0(qt(e),n==="start",r);return o&&(i=i.map(a=>a+"-"+o),t&&(i=i.concat(i.map(Al)))),i}function Sa(e){return e.replace(/left|right|bottom|top/g,t=>Qy[t])}function r0(e){return{top:0,right:0,bottom:0,left:0,...e}}function yh(e){return typeof e!="number"?r0(e):{top:e,right:e,bottom:e,left:e}}function ka(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function md(e,t,n){let{reference:r,floating:o}=e;const i=An(t),a=_u(t),s=Ou(a),l=qt(t),u=i==="y",c=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,m=r[s]/2-o[s]/2;let d;switch(l){case"top":d={x:c,y:r.y-o.height};break;case"bottom":d={x:c,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-o.width,y:p};break;default:d={x:r.x,y:r.y}}switch(ro(t)){case"start":d[a]-=m*(n&&u?-1:1);break;case"end":d[a]+=m*(n&&u?-1:1);break}return d}const o0=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:p}=md(u,r,l),m=r,d={},y=0;for(let v=0;v<s.length;v++){const{name:b,fn:f}=s[v],{x:h,y:g,data:S,reset:k}=await f({x:c,y:p,initialPlacement:r,placement:m,strategy:o,middlewareData:d,rects:u,platform:a,elements:{reference:e,floating:t}});c=h??c,p=g??p,d={...d,[b]:{...d[b],...S}},k&&y<=50&&(y++,typeof k=="object"&&(k.placement&&(m=k.placement),k.rects&&(u=k.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):k.rects),{x:c,y:p}=md(u,m,l)),v=-1)}return{x:c,y:p,placement:m,strategy:o,middlewareData:d}};async function Qo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:p="floating",altBoundary:m=!1,padding:d=0}=Vt(t,e),y=yh(d),b=s[m?p==="floating"?"reference":"floating":p],f=ka(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(b)))==null||n?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:c,strategy:l})),h=p==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),S=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},k=ka(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:g,strategy:l}):h);return{top:(f.top-k.top+y.top)/S.y,bottom:(k.bottom-f.bottom+y.bottom)/S.y,left:(f.left-k.left+y.left)/S.x,right:(k.right-f.right+y.right)/S.x}}const i0=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:a,elements:s,middlewareData:l}=t,{element:u,padding:c=0}=Vt(e,t)||{};if(u==null)return{};const p=yh(c),m={x:n,y:r},d=_u(o),y=Ou(d),v=await a.getDimensions(u),b=d==="y",f=b?"top":"left",h=b?"bottom":"right",g=b?"clientHeight":"clientWidth",S=i.reference[y]+i.reference[d]-m[d]-i.floating[y],k=m[d]-i.reference[d],P=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let C=P?P[g]:0;(!C||!await(a.isElement==null?void 0:a.isElement(P)))&&(C=s.floating[g]||i.floating[y]);const I=S/2-k/2,L=C/2-v[y]/2-1,N=In(p[f],L),J=In(p[h],L),M=N,q=C-v[y]-J,W=C/2-v[y]/2+I,ce=Il(M,W,q),$=!l.arrow&&ro(o)!=null&&W!==ce&&i.reference[y]/2-(W<M?N:J)-v[y]/2<0,V=$?W<M?W-M:W-q:0;return{[d]:m[d]+V,data:{[d]:ce,centerOffset:W-ce-V,...$&&{alignmentOffset:V}},reset:$}}}),a0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:u}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0,...b}=Vt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const f=qt(o),h=An(s),g=qt(s)===s,S=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=m||(g||!v?[Sa(s)]:e0(s)),P=y!=="none";!m&&P&&k.push(...n0(s,v,y,S));const C=[s,...k],I=await Qo(t,b),L=[];let N=((r=i.flip)==null?void 0:r.overflows)||[];if(c&&L.push(I[f]),p){const W=Zy(o,a,S);L.push(I[W[0]],I[W[1]])}if(N=[...N,{placement:o,overflows:L}],!L.every(W=>W<=0)){var J,M;const W=(((J=i.flip)==null?void 0:J.index)||0)+1,ce=C[W];if(ce)return{data:{index:W,overflows:N},reset:{placement:ce}};let $=(M=N.filter(V=>V.overflows[0]<=0).sort((V,T)=>V.overflows[1]-T.overflows[1])[0])==null?void 0:M.placement;if(!$)switch(d){case"bestFit":{var q;const V=(q=N.filter(T=>{if(P){const R=An(T.placement);return R===h||R==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(R=>R>0).reduce((R,O)=>R+O,0)]).sort((T,R)=>T[1]-R[1])[0])==null?void 0:q[0];V&&($=V);break}case"initialPlacement":$=s;break}if(o!==$)return{reset:{placement:$}}}return{}}}};function gd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function vd(e){return Yy.some(t=>e[t]>=0)}const s0=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Vt(e,t);switch(r){case"referenceHidden":{const i=await Qo(t,{...o,elementContext:"reference"}),a=gd(i,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:vd(a)}}}case"escaped":{const i=await Qo(t,{...o,altBoundary:!0}),a=gd(i,n.floating);return{data:{escapedOffsets:a,escaped:vd(a)}}}default:return{}}}}};async function l0(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=qt(n),s=ro(n),l=An(n)==="y",u=["left","top"].includes(a)?-1:1,c=i&&l?-1:1,p=Vt(t,e);let{mainAxis:m,crossAxis:d,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return s&&typeof y=="number"&&(d=s==="end"?y*-1:y),l?{x:d*c,y:m*u}:{x:m*u,y:d*c}}const u0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await l0(t,e);return a===((n=s.offset)==null?void 0:n.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},c0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:b=>{let{x:f,y:h}=b;return{x:f,y:h}}},...l}=Vt(e,t),u={x:n,y:r},c=await Qo(t,l),p=An(qt(o)),m=Lu(p);let d=u[m],y=u[p];if(i){const b=m==="y"?"top":"left",f=m==="y"?"bottom":"right",h=d+c[b],g=d-c[f];d=Il(h,d,g)}if(a){const b=p==="y"?"top":"left",f=p==="y"?"bottom":"right",h=y+c[b],g=y-c[f];y=Il(h,y,g)}const v=s.fn({...t,[m]:d,[p]:y});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[m]:i,[p]:a}}}}}},d0=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:u=!0}=Vt(e,t),c={x:n,y:r},p=An(o),m=Lu(p);let d=c[m],y=c[p];const v=Vt(s,t),b=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const g=m==="y"?"height":"width",S=i.reference[m]-i.floating[g]+b.mainAxis,k=i.reference[m]+i.reference[g]-b.mainAxis;d<S?d=S:d>k&&(d=k)}if(u){var f,h;const g=m==="y"?"width":"height",S=["top","left"].includes(qt(o)),k=i.reference[p]-i.floating[g]+(S&&((f=a.offset)==null?void 0:f[p])||0)+(S?0:b.crossAxis),P=i.reference[p]+i.reference[g]+(S?0:((h=a.offset)==null?void 0:h[p])||0)-(S?b.crossAxis:0);y<k?y=k:y>P&&(y=P)}return{[m]:d,[p]:y}}}},p0=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:i,platform:a,elements:s}=t,{apply:l=()=>{},...u}=Vt(e,t),c=await Qo(t,u),p=qt(o),m=ro(o),d=An(o)==="y",{width:y,height:v}=i.floating;let b,f;p==="top"||p==="bottom"?(b=p,f=m===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(f=p,b=m==="end"?"top":"bottom");const h=v-c.top-c.bottom,g=y-c.left-c.right,S=In(v-c[b],h),k=In(y-c[f],g),P=!t.middlewareData.shift;let C=S,I=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(I=g),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=h),P&&!m){const N=We(c.left,0),J=We(c.right,0),M=We(c.top,0),q=We(c.bottom,0);d?I=y-2*(N!==0||J!==0?N+J:We(c.left,c.right)):C=v-2*(M!==0||q!==0?M+q:We(c.top,c.bottom))}await l({...t,availableWidth:I,availableHeight:C});const L=await a.getDimensions(s.floating);return y!==L.width||v!==L.height?{reset:{rects:!0}}:{}}}};function Va(){return typeof window<"u"}function oo(e){return wh(e)?(e.nodeName||"").toLowerCase():"#document"}function qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Nt(e){var t;return(t=(wh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function wh(e){return Va()?e instanceof Node||e instanceof qe(e).Node:!1}function xt(e){return Va()?e instanceof Element||e instanceof qe(e).Element:!1}function At(e){return Va()?e instanceof HTMLElement||e instanceof qe(e).HTMLElement:!1}function yd(e){return!Va()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qe(e).ShadowRoot}function ci(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=bt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function f0(e){return["table","td","th"].includes(oo(e))}function qa(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Mu(e){const t=Fu(),n=xt(e)?bt(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function h0(e){let t=Nn(e);for(;At(t)&&!Xr(t);){if(Mu(t))return t;if(qa(t))return null;t=Nn(t)}return null}function Fu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Xr(e){return["html","body","#document"].includes(oo(e))}function bt(e){return qe(e).getComputedStyle(e)}function Ka(e){return xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Nn(e){if(oo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yd(e)&&e.host||Nt(e);return yd(t)?t.host:t}function xh(e){const t=Nn(e);return Xr(t)?e.ownerDocument?e.ownerDocument.body:e.body:At(t)&&ci(t)?t:xh(t)}function Xo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=xh(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=qe(o);if(i){const s=Nl(a);return t.concat(a,a.visualViewport||[],ci(o)?o:[],s&&n?Xo(s):[])}return t.concat(o,Xo(o,[],n))}function Nl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bh(e){const t=bt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=At(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=ba(n)!==i||ba(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Du(e){return xt(e)?e:e.contextElement}function Or(e){const t=Du(e);if(!At(t))return It(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=bh(t);let a=(i?ba(n.width):n.width)/r,s=(i?ba(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const m0=It(0);function Sh(e){const t=qe(e);return!Fu()||!t.visualViewport?m0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function g0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==qe(e)?!1:t}function rr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Du(e);let a=It(1);t&&(r?xt(r)&&(a=Or(r)):a=Or(e));const s=g0(i,n,r)?Sh(i):It(0);let l=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,c=o.width/a.x,p=o.height/a.y;if(i){const m=qe(i),d=r&&xt(r)?qe(r):r;let y=m,v=Nl(y);for(;v&&r&&d!==y;){const b=Or(v),f=v.getBoundingClientRect(),h=bt(v),g=f.left+(v.clientLeft+parseFloat(h.paddingLeft))*b.x,S=f.top+(v.clientTop+parseFloat(h.paddingTop))*b.y;l*=b.x,u*=b.y,c*=b.x,p*=b.y,l+=g,u+=S,y=qe(v),v=Nl(y)}}return ka({width:c,height:p,x:l,y:u})}function Bu(e,t){const n=Ka(e).scrollLeft;return t?t.left+n:rr(Nt(e)).left+n}function kh(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:Bu(e,r)),i=r.top+t.scrollTop;return{x:o,y:i}}function v0(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=Nt(r),s=t?qa(t.floating):!1;if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},u=It(1);const c=It(0),p=At(r);if((p||!p&&!i)&&((oo(r)!=="body"||ci(a))&&(l=Ka(r)),At(r))){const d=rr(r);u=Or(r),c.x=d.x+r.clientLeft,c.y=d.y+r.clientTop}const m=a&&!p&&!i?kh(a,l,!0):It(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+c.x+m.x,y:n.y*u.y-l.scrollTop*u.y+c.y+m.y}}function y0(e){return Array.from(e.getClientRects())}function w0(e){const t=Nt(e),n=Ka(e),r=e.ownerDocument.body,o=We(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=We(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Bu(e);const s=-n.scrollTop;return bt(r).direction==="rtl"&&(a+=We(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function x0(e,t){const n=qe(e),r=Nt(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const u=Fu();(!u||u&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}function b0(e,t){const n=rr(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=At(e)?Or(e):It(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,l=o*i.x,u=r*i.y;return{width:a,height:s,x:l,y:u}}function wd(e,t,n){let r;if(t==="viewport")r=x0(e,n);else if(t==="document")r=w0(Nt(e));else if(xt(t))r=b0(t,n);else{const o=Sh(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ka(r)}function Ch(e,t){const n=Nn(e);return n===t||!xt(n)||Xr(n)?!1:bt(n).position==="fixed"||Ch(n,t)}function S0(e,t){const n=t.get(e);if(n)return n;let r=Xo(e,[],!1).filter(s=>xt(s)&&oo(s)!=="body"),o=null;const i=bt(e).position==="fixed";let a=i?Nn(e):e;for(;xt(a)&&!Xr(a);){const s=bt(a),l=Mu(a);!l&&s.position==="fixed"&&(o=null),(i?!l&&!o:!l&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||ci(a)&&!l&&Ch(e,a))?r=r.filter(c=>c!==a):o=s,a=Nn(a)}return t.set(e,r),r}function k0(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?qa(t)?[]:S0(t,this._c):[].concat(n),r],s=a[0],l=a.reduce((u,c)=>{const p=wd(t,c,o);return u.top=We(p.top,u.top),u.right=In(p.right,u.right),u.bottom=In(p.bottom,u.bottom),u.left=We(p.left,u.left),u},wd(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function C0(e){const{width:t,height:n}=bh(e);return{width:t,height:n}}function E0(e,t,n){const r=At(t),o=Nt(t),i=n==="fixed",a=rr(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=It(0);if(r||!r&&!i)if((oo(t)!=="body"||ci(o))&&(s=Ka(t)),r){const m=rr(t,!0,i,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else o&&(l.x=Bu(o));const u=o&&!r&&!i?kh(o,s):It(0),c=a.left+s.scrollLeft-l.x-u.x,p=a.top+s.scrollTop-l.y-u.y;return{x:c,y:p,width:a.width,height:a.height}}function As(e){return bt(e).position==="static"}function xd(e,t){if(!At(e)||bt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Nt(e)===n&&(n=n.ownerDocument.body),n}function Eh(e,t){const n=qe(e);if(qa(e))return n;if(!At(e)){let o=Nn(e);for(;o&&!Xr(o);){if(xt(o)&&!As(o))return o;o=Nn(o)}return n}let r=xd(e,t);for(;r&&f0(r)&&As(r);)r=xd(r,t);return r&&Xr(r)&&As(r)&&!Mu(r)?n:r||h0(e)||n}const P0=async function(e){const t=this.getOffsetParent||Eh,n=this.getDimensions,r=await n(e.floating);return{reference:E0(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function T0(e){return bt(e).direction==="rtl"}const R0={convertOffsetParentRelativeRectToViewportRelativeRect:v0,getDocumentElement:Nt,getClippingRect:k0,getOffsetParent:Eh,getElementRects:P0,getClientRects:y0,getDimensions:C0,getScale:Or,isElement:xt,isRTL:T0};function Ph(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function j0(e,t){let n=null,r;const o=Nt(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),i();const u=e.getBoundingClientRect(),{left:c,top:p,width:m,height:d}=u;if(s||t(),!m||!d)return;const y=_i(p),v=_i(o.clientWidth-(c+m)),b=_i(o.clientHeight-(p+d)),f=_i(c),g={rootMargin:-y+"px "+-v+"px "+-b+"px "+-f+"px",threshold:We(0,In(1,l))||1};let S=!0;function k(P){const C=P[0].intersectionRatio;if(C!==l){if(!S)return a();C?a(!1,C):r=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!Ph(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(k,{...g,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,g)}n.observe(e)}return a(!0),i}function I0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Du(e),c=o||i?[...u?Xo(u):[],...Xo(t)]:[];c.forEach(f=>{o&&f.addEventListener("scroll",n,{passive:!0}),i&&f.addEventListener("resize",n)});const p=u&&s?j0(u,n):null;let m=-1,d=null;a&&(d=new ResizeObserver(f=>{let[h]=f;h&&h.target===u&&d&&(d.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var g;(g=d)==null||g.observe(t)})),n()}),u&&!l&&d.observe(u),d.observe(t));let y,v=l?rr(e):null;l&&b();function b(){const f=rr(e);v&&!Ph(v,f)&&n(),v=f,y=requestAnimationFrame(b)}return n(),()=>{var f;c.forEach(h=>{o&&h.removeEventListener("scroll",n),i&&h.removeEventListener("resize",n)}),p==null||p(),(f=d)==null||f.disconnect(),d=null,l&&cancelAnimationFrame(y)}}const A0=u0,N0=c0,L0=a0,O0=p0,_0=s0,bd=i0,M0=d0,F0=(e,t,n)=>{const r=new Map,o={platform:R0,...n},i={...o.platform,_c:r};return o0(e,t,{...o,platform:i})};var Yi=typeof document<"u"?x.useLayoutEffect:x.useEffect;function Ca(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ca(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Ca(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Th(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Sd(e,t){const n=Th(e);return Math.round(t*n)/n}function Ns(e){const t=x.useRef(e);return Yi(()=>{t.current=e}),t}function D0(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:l,open:u}=e,[c,p]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,d]=x.useState(r);Ca(m,r)||d(r);const[y,v]=x.useState(null),[b,f]=x.useState(null),h=x.useCallback(T=>{T!==P.current&&(P.current=T,v(T))},[]),g=x.useCallback(T=>{T!==C.current&&(C.current=T,f(T))},[]),S=i||y,k=a||b,P=x.useRef(null),C=x.useRef(null),I=x.useRef(c),L=l!=null,N=Ns(l),J=Ns(o),M=Ns(u),q=x.useCallback(()=>{if(!P.current||!C.current)return;const T={placement:t,strategy:n,middleware:m};J.current&&(T.platform=J.current),F0(P.current,C.current,T).then(R=>{const O={...R,isPositioned:M.current!==!1};W.current&&!Ca(I.current,O)&&(I.current=O,Wa.flushSync(()=>{p(O)}))})},[m,t,n,J,M]);Yi(()=>{u===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,p(T=>({...T,isPositioned:!1})))},[u]);const W=x.useRef(!1);Yi(()=>(W.current=!0,()=>{W.current=!1}),[]),Yi(()=>{if(S&&(P.current=S),k&&(C.current=k),S&&k){if(N.current)return N.current(S,k,q);q()}},[S,k,q,N,L]);const ce=x.useMemo(()=>({reference:P,floating:C,setReference:h,setFloating:g}),[h,g]),$=x.useMemo(()=>({reference:S,floating:k}),[S,k]),V=x.useMemo(()=>{const T={position:n,left:0,top:0};if(!$.floating)return T;const R=Sd($.floating,c.x),O=Sd($.floating,c.y);return s?{...T,transform:"translate("+R+"px, "+O+"px)",...Th($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:R,top:O}},[n,s,$.floating,c.x,c.y]);return x.useMemo(()=>({...c,update:q,refs:ce,elements:$,floatingStyles:V}),[c,q,ce,$,V])}const B0=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?bd({element:r.current,padding:o}).fn(n):{}:r?bd({element:r,padding:o}).fn(n):{}}}},z0=(e,t)=>({...A0(e),options:[e,t]}),U0=(e,t)=>({...N0(e),options:[e,t]}),H0=(e,t)=>({...M0(e),options:[e,t]}),J0=(e,t)=>({...L0(e),options:[e,t]}),W0=(e,t)=>({...O0(e),options:[e,t]}),$0=(e,t)=>({..._0(e),options:[e,t]}),V0=(e,t)=>({...B0(e),options:[e,t]});var q0="Arrow",Rh=x.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return w.jsx(sr.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});Rh.displayName=q0;var K0=Rh;function G0(e){const[t,n]=x.useState(void 0);return Yo(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let a,s;if("borderBoxSize"in i){const l=i.borderBoxSize,u=Array.isArray(l)?l[0]:l;a=u.inlineSize,s=u.blockSize}else a=e.offsetWidth,s=e.offsetHeight;n({width:a,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var jh="Popper",[Ih,Ah]=fh(jh),[E1,Nh]=Ih(jh),Lh="PopperAnchor",Oh=x.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=Nh(Lh,n),a=x.useRef(null),s=ar(t,a);return x.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:w.jsx(sr.div,{...o,ref:s})});Oh.displayName=Lh;var zu="PopperContent",[Y0,Q0]=Ih(zu),_h=x.forwardRef((e,t)=>{var X,ur,Gt,Fn,Yt,cr;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:a=0,arrowPadding:s=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:c=0,sticky:p="partial",hideWhenDetached:m=!1,updatePositionStrategy:d="optimized",onPlaced:y,...v}=e,b=Nh(zu,n),[f,h]=x.useState(null),g=ar(t,Qt=>h(Qt)),[S,k]=x.useState(null),P=G0(S),C=(P==null?void 0:P.width)??0,I=(P==null?void 0:P.height)??0,L=r+(i!=="center"?"-"+i:""),N=typeof c=="number"?c:{top:0,right:0,bottom:0,left:0,...c},J=Array.isArray(u)?u:[u],M=J.length>0,q={padding:N,boundary:J.filter(Z0),altBoundary:M},{refs:W,floatingStyles:ce,placement:$,isPositioned:V,middlewareData:T}=D0({strategy:"fixed",placement:L,whileElementsMounted:(...Qt)=>I0(...Qt,{animationFrame:d==="always"}),elements:{reference:b.anchor},middleware:[z0({mainAxis:o+I,alignmentAxis:a}),l&&U0({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?H0():void 0,...q}),l&&J0({...q}),W0({...q,apply:({elements:Qt,rects:fi,availableWidth:es,availableHeight:hi})=>{const{width:ts,height:so}=fi.reference,dr=Qt.floating.style;dr.setProperty("--radix-popper-available-width",`${es}px`),dr.setProperty("--radix-popper-available-height",`${hi}px`),dr.setProperty("--radix-popper-anchor-width",`${ts}px`),dr.setProperty("--radix-popper-anchor-height",`${so}px`)}}),S&&V0({element:S,padding:s}),ew({arrowWidth:C,arrowHeight:I}),m&&$0({strategy:"referenceHidden",...q})]}),[R,O]=Dh($),U=$a(y);Yo(()=>{V&&(U==null||U())},[V,U]);const F=(X=T.arrow)==null?void 0:X.x,Y=(ur=T.arrow)==null?void 0:ur.y,K=((Gt=T.arrow)==null?void 0:Gt.centerOffset)!==0,[he,Ce]=x.useState();return Yo(()=>{f&&Ce(window.getComputedStyle(f).zIndex)},[f]),w.jsx("div",{ref:W.setFloating,"data-radix-popper-content-wrapper":"",style:{...ce,transform:V?ce.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:he,"--radix-popper-transform-origin":[(Fn=T.transformOrigin)==null?void 0:Fn.x,(Yt=T.transformOrigin)==null?void 0:Yt.y].join(" "),...((cr=T.hide)==null?void 0:cr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:w.jsx(Y0,{scope:n,placedSide:R,onArrowChange:k,arrowX:F,arrowY:Y,shouldHideArrow:K,children:w.jsx(sr.div,{"data-side":R,"data-align":O,...v,ref:g,style:{...v.style,animation:V?void 0:"none"}})})})});_h.displayName=zu;var Mh="PopperArrow",X0={top:"bottom",right:"left",bottom:"top",left:"right"},Fh=x.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=Q0(Mh,r),a=X0[i.placedSide];return w.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:w.jsx(K0,{...o,ref:n,style:{...o.style,display:"block"}})})});Fh.displayName=Mh;function Z0(e){return e!==null}var ew=e=>({name:"transformOrigin",options:e,fn(t){var b,f,h;const{placement:n,rects:r,middlewareData:o}=t,a=((b=o.arrow)==null?void 0:b.centerOffset)!==0,s=a?0:e.arrowWidth,l=a?0:e.arrowHeight,[u,c]=Dh(n),p={start:"0%",center:"50%",end:"100%"}[c],m=(((f=o.arrow)==null?void 0:f.x)??0)+s/2,d=(((h=o.arrow)==null?void 0:h.y)??0)+l/2;let y="",v="";return u==="bottom"?(y=a?p:`${m}px`,v=`${-l}px`):u==="top"?(y=a?p:`${m}px`,v=`${r.floating.height+l}px`):u==="right"?(y=`${-l}px`,v=a?p:`${d}px`):u==="left"&&(y=`${r.floating.width+l}px`,v=a?p:`${d}px`),{data:{x:y,y:v}}}});function Dh(e){const[t,n="center"]=e.split("-");return[t,n]}var tw=Oh,nw=_h,rw=Fh;function ow(e,t){return x.useReducer((n,r)=>t[n][r]??n,e)}var Bh=e=>{const{present:t,children:n}=e,r=iw(t),o=typeof n=="function"?n({present:r.isPresent}):x.Children.only(n),i=ar(r.ref,aw(o));return typeof n=="function"||r.isPresent?x.cloneElement(o,{ref:i}):null};Bh.displayName="Presence";function iw(e){const[t,n]=x.useState(),r=x.useRef({}),o=x.useRef(e),i=x.useRef("none"),a=e?"mounted":"unmounted",[s,l]=ow(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const u=Mi(r.current);i.current=s==="mounted"?u:"none"},[s]),Yo(()=>{const u=r.current,c=o.current;if(c!==e){const m=i.current,d=Mi(u);e?l("MOUNT"):d==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&m!==d?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Yo(()=>{if(t){let u;const c=t.ownerDocument.defaultView??window,p=d=>{const v=Mi(r.current).includes(d.animationName);if(d.target===t&&v&&(l("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=c.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},m=d=>{d.target===t&&(i.current=Mi(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{c.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:x.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Mi(e){return(e==null?void 0:e.animationName)||"none"}function aw(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var sw="VisuallyHidden",zh=x.forwardRef((e,t)=>w.jsx(sr.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));zh.displayName=sw;var lw=zh,[Ga,P1]=fh("Tooltip",[Ah]),Uu=Ah(),Uh="TooltipProvider",uw=700,kd="tooltip.open",[cw,Hh]=Ga(Uh),Jh=e=>{const{__scopeTooltip:t,delayDuration:n=uw,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:i}=e,a=x.useRef(!0),s=x.useRef(!1),l=x.useRef(0);return x.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),w.jsx(cw,{scope:t,isOpenDelayedRef:a,delayDuration:n,onOpen:x.useCallback(()=>{window.clearTimeout(l.current),a.current=!1},[]),onClose:x.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>a.current=!0,r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:x.useCallback(u=>{s.current=u},[]),disableHoverableContent:o,children:i})};Jh.displayName=Uh;var Wh="Tooltip",[T1,Ya]=Ga(Wh),Ll="TooltipTrigger",dw=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Ya(Ll,n),i=Hh(Ll,n),a=Uu(n),s=x.useRef(null),l=ar(t,s,o.onTriggerChange),u=x.useRef(!1),c=x.useRef(!1),p=x.useCallback(()=>u.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),w.jsx(tw,{asChild:!0,...a,children:w.jsx(sr.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:l,onPointerMove:Ft(e.onPointerMove,m=>{m.pointerType!=="touch"&&!c.current&&!i.isPointerInTransitRef.current&&(o.onTriggerEnter(),c.current=!0)}),onPointerLeave:Ft(e.onPointerLeave,()=>{o.onTriggerLeave(),c.current=!1}),onPointerDown:Ft(e.onPointerDown,()=>{o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:Ft(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:Ft(e.onBlur,o.onClose),onClick:Ft(e.onClick,o.onClose)})})});dw.displayName=Ll;var pw="TooltipPortal",[R1,fw]=Ga(pw,{forceMount:void 0}),Zr="TooltipContent",$h=x.forwardRef((e,t)=>{const n=fw(Zr,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,a=Ya(Zr,e.__scopeTooltip);return w.jsx(Bh,{present:r||a.open,children:a.disableHoverableContent?w.jsx(Vh,{side:o,...i,ref:t}):w.jsx(hw,{side:o,...i,ref:t})})}),hw=x.forwardRef((e,t)=>{const n=Ya(Zr,e.__scopeTooltip),r=Hh(Zr,e.__scopeTooltip),o=x.useRef(null),i=ar(t,o),[a,s]=x.useState(null),{trigger:l,onClose:u}=n,c=o.current,{onPointerInTransitChange:p}=r,m=x.useCallback(()=>{s(null),p(!1)},[p]),d=x.useCallback((y,v)=>{const b=y.currentTarget,f={x:y.clientX,y:y.clientY},h=ww(f,b.getBoundingClientRect()),g=xw(f,h),S=bw(v.getBoundingClientRect()),k=kw([...g,...S]);s(k),p(!0)},[p]);return x.useEffect(()=>()=>m(),[m]),x.useEffect(()=>{if(l&&c){const y=b=>d(b,c),v=b=>d(b,l);return l.addEventListener("pointerleave",y),c.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",y),c.removeEventListener("pointerleave",v)}}},[l,c,d,m]),x.useEffect(()=>{if(a){const y=v=>{const b=v.target,f={x:v.clientX,y:v.clientY},h=(l==null?void 0:l.contains(b))||(c==null?void 0:c.contains(b)),g=!Sw(f,a);h?m():g&&(m(),u())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[l,c,a,u,m]),w.jsx(Vh,{...e,ref:i})}),[mw,gw]=Ga(Wh,{isInside:!1}),vw=My("TooltipContent"),Vh=x.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:i,onPointerDownOutside:a,...s}=e,l=Ya(Zr,n),u=Uu(n),{onClose:c}=l;return x.useEffect(()=>(document.addEventListener(kd,c),()=>document.removeEventListener(kd,c)),[c]),x.useEffect(()=>{if(l.trigger){const p=m=>{const d=m.target;d!=null&&d.contains(l.trigger)&&c()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,c]),w.jsx(gh,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:p=>p.preventDefault(),onDismiss:c,children:w.jsxs(nw,{"data-state":l.stateAttribute,...u,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[w.jsx(vw,{children:r}),w.jsx(mw,{scope:n,isInside:!0,children:w.jsx(lw,{id:l.contentId,role:"tooltip",children:o||r})})]})})});$h.displayName=Zr;var qh="TooltipArrow",yw=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Uu(n);return gw(qh,n).isInside?null:w.jsx(rw,{...o,...r,ref:t})});yw.displayName=qh;function ww(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function xw(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function bw(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function Sw(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,a=t.length-1;i<t.length;a=i++){const s=t[i].x,l=t[i].y,u=t[a].x,c=t[a].y;l>r!=c>r&&n<(u-s)*(r-l)/(c-l)+s&&(o=!o)}return o}function kw(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Cw(t)}function Cw(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const i=t[t.length-1],a=t[t.length-2];if((i.x-a.x)*(o.y-a.y)>=(i.y-a.y)*(o.x-a.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const i=n[n.length-1],a=n[n.length-2];if((i.x-a.x)*(o.y-a.y)>=(i.y-a.y)*(o.x-a.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Ew=Jh,Kh=$h;function Gh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Gh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Pw(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Gh(e))&&(r&&(r+=" "),r+=t);return r}const Hu="-",Tw=e=>{const t=jw(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const s=a.split(Hu);return s[0]===""&&s.length!==1&&s.shift(),Yh(s,t)||Rw(a)},getConflictingClassGroupIds:(a,s)=>{const l=n[a]||[];return s&&r[a]?[...l,...r[a]]:l}}},Yh=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Yh(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(Hu);return(a=t.validators.find(({validator:s})=>s(i)))==null?void 0:a.classGroupId},Cd=/^\[(.+)\]$/,Rw=e=>{if(Cd.test(e)){const t=Cd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},jw=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Aw(Object.entries(e.classGroups),n).forEach(([i,a])=>{Ol(a,r,i,t)}),r},Ol=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Ed(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Iw(o)){Ol(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,a])=>{Ol(a,Ed(t,i),n,r)})})},Ed=(e,t)=>{let n=e;return t.split(Hu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Iw=e=>e.isThemeGetter,Aw=(e,t)=>t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,s])=>[t+a,s])):i);return[n,o]}):e,Nw=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(i,a)=>{n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let a=n.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return o(i,a),a},set(i,a){n.has(i)?n.set(i,a):o(i,a)}}},Qh="!",Lw=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,a=s=>{const l=[];let u=0,c=0,p;for(let b=0;b<s.length;b++){let f=s[b];if(u===0){if(f===o&&(r||s.slice(b,b+i)===t)){l.push(s.slice(c,b)),c=b+i;continue}if(f==="/"){p=b;continue}}f==="["?u++:f==="]"&&u--}const m=l.length===0?s:s.substring(c),d=m.startsWith(Qh),y=d?m.substring(1):m,v=p&&p>c?p-c:void 0;return{modifiers:l,hasImportantModifier:d,baseClassName:y,maybePostfixModifierPosition:v}};return n?s=>n({className:s,parseClassName:a}):a},Ow=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},_w=e=>({cache:Nw(e.cacheSize),parseClassName:Lw(e),...Tw(e)}),Mw=/\s+/,Fw=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],a=e.trim().split(Mw);let s="";for(let l=a.length-1;l>=0;l-=1){const u=a[l],{modifiers:c,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:d}=n(u);let y=!!d,v=r(y?m.substring(0,d):m);if(!v){if(!y){s=u+(s.length>0?" "+s:s);continue}if(v=r(m),!v){s=u+(s.length>0?" "+s:s);continue}y=!1}const b=Ow(c).join(":"),f=p?b+Qh:b,h=f+v;if(i.includes(h))continue;i.push(h);const g=o(v,y);for(let S=0;S<g.length;++S){const k=g[S];i.push(f+k)}s=u+(s.length>0?" "+s:s)}return s};function Dw(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Xh(t))&&(r&&(r+=" "),r+=n);return r}const Xh=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Xh(e[r]))&&(n&&(n+=" "),n+=t);return n};function Bw(e,...t){let n,r,o,i=a;function a(l){const u=t.reduce((c,p)=>p(c),e());return n=_w(u),r=n.cache.get,o=n.cache.set,i=s,s(l)}function s(l){const u=r(l);if(u)return u;const c=Fw(l,n);return o(l,c),c}return function(){return i(Dw.apply(null,arguments))}}const ne=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Zh=/^\[(?:([a-z-]+):)?(.+)\]$/i,zw=/^\d+\/\d+$/,Uw=new Set(["px","full","screen"]),Hw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Jw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ww=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$w=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Lt=e=>_r(e)||Uw.has(e)||zw.test(e),nn=e=>io(e,"length",ex),_r=e=>!!e&&!Number.isNaN(Number(e)),Ls=e=>io(e,"number",_r),yo=e=>!!e&&Number.isInteger(Number(e)),qw=e=>e.endsWith("%")&&_r(e.slice(0,-1)),z=e=>Zh.test(e),rn=e=>Hw.test(e),Kw=new Set(["length","size","percentage"]),Gw=e=>io(e,Kw,em),Yw=e=>io(e,"position",em),Qw=new Set(["image","url"]),Xw=e=>io(e,Qw,nx),Zw=e=>io(e,"",tx),wo=()=>!0,io=(e,t,n)=>{const r=Zh.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},ex=e=>Jw.test(e)&&!Ww.test(e),em=()=>!1,tx=e=>$w.test(e),nx=e=>Vw.test(e),rx=()=>{const e=ne("colors"),t=ne("spacing"),n=ne("blur"),r=ne("brightness"),o=ne("borderColor"),i=ne("borderRadius"),a=ne("borderSpacing"),s=ne("borderWidth"),l=ne("contrast"),u=ne("grayscale"),c=ne("hueRotate"),p=ne("invert"),m=ne("gap"),d=ne("gradientColorStops"),y=ne("gradientColorStopPositions"),v=ne("inset"),b=ne("margin"),f=ne("opacity"),h=ne("padding"),g=ne("saturate"),S=ne("scale"),k=ne("sepia"),P=ne("skew"),C=ne("space"),I=ne("translate"),L=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],J=()=>["auto",z,t],M=()=>[z,t],q=()=>["",Lt,nn],W=()=>["auto",_r,z],ce=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",z],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[_r,z];return{cacheSize:500,separator:":",theme:{colors:[wo],spacing:[Lt,nn],blur:["none","",rn,z],brightness:U(),borderColor:[e],borderRadius:["none","","full",rn,z],borderSpacing:M(),borderWidth:q(),contrast:U(),grayscale:R(),hueRotate:U(),invert:R(),gap:M(),gradientColorStops:[e],gradientColorStopPositions:[qw,nn],inset:J(),margin:J(),opacity:U(),padding:M(),saturate:U(),scale:U(),sepia:R(),skew:U(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[rn]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ce(),z]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",yo,z]}],basis:[{basis:J()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",yo,z]}],"grid-cols":[{"grid-cols":[wo]}],"col-start-end":[{col:["auto",{span:["full",yo,z]},z]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[wo]}],"row-start-end":[{row:["auto",{span:[yo,z]},z]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",z,t]}],"min-w":[{"min-w":[z,t,"min","max","fit"]}],"max-w":[{"max-w":[z,t,"none","full","min","max","fit","prose",{screen:[rn]},rn]}],h:[{h:[z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",rn,nn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ls]}],"font-family":[{font:[wo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",_r,Ls]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Lt,z]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Lt,nn]}],"underline-offset":[{"underline-offset":["auto",Lt,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ce(),Yw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Gw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Xw]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:$()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[Lt,z]}],"outline-w":[{outline:[Lt,nn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Lt,nn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",rn,Zw]}],"shadow-color":[{shadow:[wo]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",rn,z]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[g]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[yo,z]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Lt,nn,Ls]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ox=Bw(rx);function ix(...e){return ox(Pw(e))}const ax=Ew,sx=x.forwardRef(({className:e,sideOffset:t=4,...n},r)=>w.jsx(Kh,{ref:r,sideOffset:t,className:ix("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));sx.displayName=Kh.displayName;var Qa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Xa=typeof window>"u"||"Deno"in globalThis;function dt(){}function lx(e,t){return typeof e=="function"?e(t):e}function ux(e){return typeof e=="number"&&e>=0&&e!==1/0}function cx(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Pd(e,t){return typeof e=="function"?e(t):e}function dx(e,t){return typeof e=="function"?e(t):e}function Td(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:s}=e;if(a){if(r){if(t.queryHash!==Ju(a,t.options))return!1}else if(!ei(t.queryKey,a))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||o&&o!==t.state.fetchStatus||i&&!i(t))}function Rd(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Zo(t.options.mutationKey)!==Zo(i))return!1}else if(!ei(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Ju(e,t){return((t==null?void 0:t.queryKeyHashFn)||Zo)(e)}function Zo(e){return JSON.stringify(e,(t,n)=>_l(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function ei(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>ei(e[n],t[n])):!1}function tm(e,t){if(e===t)return e;const n=jd(e)&&jd(t);if(n||_l(e)&&_l(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,s=n?[]:{};let l=0;for(let u=0;u<a;u++){const c=n?u:i[u];(!n&&r.includes(c)||n)&&e[c]===void 0&&t[c]===void 0?(s[c]=void 0,l++):(s[c]=tm(e[c],t[c]),s[c]===e[c]&&e[c]!==void 0&&l++)}return o===a&&l===o?e:s}return t}function jd(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function _l(e){if(!Id(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Id(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Id(e){return Object.prototype.toString.call(e)==="[object Object]"}function px(e){return new Promise(t=>{setTimeout(t,e)})}function fx(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?tm(e,t):t}function hx(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function mx(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Wu=Symbol();function nm(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Wu?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var $n,dn,Mr,Hd,gx=(Hd=class extends Qa{constructor(){super();Q(this,$n);Q(this,dn);Q(this,Mr);B(this,Mr,t=>{if(!Xa&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,dn)||this.setEventListener(E(this,Mr))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,dn))==null||t.call(this),B(this,dn,void 0))}setEventListener(t){var n;B(this,Mr,t),(n=E(this,dn))==null||n.call(this),B(this,dn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,$n)!==t&&(B(this,$n,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,$n)=="boolean"?E(this,$n):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},$n=new WeakMap,dn=new WeakMap,Mr=new WeakMap,Hd),rm=new gx,Fr,pn,Dr,Jd,vx=(Jd=class extends Qa{constructor(){super();Q(this,Fr,!0);Q(this,pn);Q(this,Dr);B(this,Dr,t=>{if(!Xa&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,pn)||this.setEventListener(E(this,Dr))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,pn))==null||t.call(this),B(this,pn,void 0))}setEventListener(t){var n;B(this,Dr,t),(n=E(this,pn))==null||n.call(this),B(this,pn,t(this.setOnline.bind(this)))}setOnline(t){E(this,Fr)!==t&&(B(this,Fr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,Fr)}},Fr=new WeakMap,pn=new WeakMap,Dr=new WeakMap,Jd),Ea=new vx;function yx(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function wx(e){return Math.min(1e3*2**e,3e4)}function om(e){return(e??"online")==="online"?Ea.isOnline():!0}var im=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Os(e){return e instanceof im}function am(e){let t=!1,n=0,r=!1,o;const i=yx(),a=v=>{var b;r||(m(new im(v)),(b=e.abort)==null||b.call(e))},s=()=>{t=!0},l=()=>{t=!1},u=()=>rm.isFocused()&&(e.networkMode==="always"||Ea.isOnline())&&e.canRun(),c=()=>om(e.networkMode)&&e.canRun(),p=v=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,v),o==null||o(),i.resolve(v))},m=v=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,v),o==null||o(),i.reject(v))},d=()=>new Promise(v=>{var b;o=f=>{(r||u())&&v(f)},(b=e.onPause)==null||b.call(e)}).then(()=>{var v;o=void 0,r||(v=e.onContinue)==null||v.call(e)}),y=()=>{if(r)return;let v;const b=n===0?e.initialPromise:void 0;try{v=b??e.fn()}catch(f){v=Promise.reject(f)}Promise.resolve(v).then(p).catch(f=>{var P;if(r)return;const h=e.retry??(Xa?0:3),g=e.retryDelay??wx,S=typeof g=="function"?g(n,f):g,k=h===!0||typeof h=="number"&&n<h||typeof h=="function"&&h(n,f);if(t||!k){m(f);return}n++,(P=e.onFail)==null||P.call(e,n,f),px(S).then(()=>u()?void 0:d()).then(()=>{t?m(f):y()})})};return{promise:i,cancel:a,continue:()=>(o==null||o(),i),cancelRetry:s,continueRetry:l,canStart:c,start:()=>(c()?y():d().then(y),i)}}var xx=e=>setTimeout(e,0);function bx(){let e=[],t=0,n=s=>{s()},r=s=>{s()},o=xx;const i=s=>{t?e.push(s):o(()=>{n(s)})},a=()=>{const s=e;e=[],s.length&&o(()=>{r(()=>{s.forEach(l=>{n(l)})})})};return{batch:s=>{let l;t++;try{l=s()}finally{t--,t||a()}return l},batchCalls:s=>(...l)=>{i(()=>{s(...l)})},schedule:i,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{r=s},setScheduler:s=>{o=s}}}var Le=bx(),Vn,Wd,sm=(Wd=class{constructor(){Q(this,Vn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ux(this.gcTime)&&B(this,Vn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Xa?1/0:5*60*1e3))}clearGcTimeout(){E(this,Vn)&&(clearTimeout(E(this,Vn)),B(this,Vn,void 0))}},Vn=new WeakMap,Wd),Br,zr,Xe,qn,Re,ri,Kn,pt,Ot,$d,Sx=($d=class extends sm{constructor(t){super();Q(this,pt);Q(this,Br);Q(this,zr);Q(this,Xe);Q(this,qn);Q(this,Re);Q(this,ri);Q(this,Kn);B(this,Kn,!1),B(this,ri,t.defaultOptions),this.setOptions(t.options),this.observers=[],B(this,qn,t.client),B(this,Xe,E(this,qn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,B(this,Br,Cx(this.options)),this.state=t.state??E(this,Br),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,Re))==null?void 0:t.promise}setOptions(t){this.options={...E(this,ri),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,Xe).remove(this)}setData(t,n){const r=fx(this.state.data,t,this.options);return Ee(this,pt,Ot).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ee(this,pt,Ot).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=E(this,Re))==null?void 0:r.promise;return(o=E(this,Re))==null||o.cancel(t),n?n.then(dt).catch(dt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,Br))}isActive(){return this.observers.some(t=>dx(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Wu||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!cx(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Re))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Re))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,Xe).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,Re)&&(E(this,Kn)?E(this,Re).cancel({revert:!0}):E(this,Re).cancelRetry()),this.scheduleGc()),E(this,Xe).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ee(this,pt,Ot).call(this,{type:"invalidate"})}fetch(t,n){var l,u,c;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,Re))return E(this,Re).continueRetry(),E(this,Re).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(m=>m.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,o=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(B(this,Kn,!0),r.signal)})},i=()=>{const p=nm(this.options,n),m={client:E(this,qn),queryKey:this.queryKey,meta:this.meta};return o(m),B(this,Kn,!1),this.options.persister?this.options.persister(p,m,this):p(m)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:E(this,qn),state:this.state,fetchFn:i};o(a),(l=this.options.behavior)==null||l.onFetch(a,this),B(this,zr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Ee(this,pt,Ot).call(this,{type:"fetch",meta:(c=a.fetchOptions)==null?void 0:c.meta});const s=p=>{var m,d,y,v;Os(p)&&p.silent||Ee(this,pt,Ot).call(this,{type:"error",error:p}),Os(p)||((d=(m=E(this,Xe).config).onError)==null||d.call(m,p,this),(v=(y=E(this,Xe).config).onSettled)==null||v.call(y,this.state.data,p,this)),this.scheduleGc()};return B(this,Re,am({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var m,d,y,v;if(p===void 0){s(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(b){s(b);return}(d=(m=E(this,Xe).config).onSuccess)==null||d.call(m,p,this),(v=(y=E(this,Xe).config).onSettled)==null||v.call(y,p,this.state.error,this),this.scheduleGc()},onError:s,onFail:(p,m)=>{Ee(this,pt,Ot).call(this,{type:"failed",failureCount:p,error:m})},onPause:()=>{Ee(this,pt,Ot).call(this,{type:"pause"})},onContinue:()=>{Ee(this,pt,Ot).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),E(this,Re).start()}},Br=new WeakMap,zr=new WeakMap,Xe=new WeakMap,qn=new WeakMap,Re=new WeakMap,ri=new WeakMap,Kn=new WeakMap,pt=new WeakSet,Ot=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...kx(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Os(o)&&o.revert&&E(this,zr)?{...E(this,zr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Le.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,Xe).notify({query:this,type:"updated",action:t})})},$d);function kx(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:om(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Cx(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ct,Vd,Ex=(Vd=class extends Qa{constructor(t={}){super();Q(this,Ct);this.config=t,B(this,Ct,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??Ju(o,n);let a=this.get(i);return a||(a=new Sx({client:t,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){E(this,Ct).has(t.queryHash)||(E(this,Ct).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,Ct).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,Ct).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Le.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Ct).get(t)}getAll(){return[...E(this,Ct).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Td(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Td(t,r)):n}notify(t){Le.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Le.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Le.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Ct=new WeakMap,Vd),Et,Ae,Gn,Pt,on,qd,Px=(qd=class extends sm{constructor(t){super();Q(this,Pt);Q(this,Et);Q(this,Ae);Q(this,Gn);this.mutationId=t.mutationId,B(this,Ae,t.mutationCache),B(this,Et,[]),this.state=t.state||Tx(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,Et).includes(t)||(E(this,Et).push(t),this.clearGcTimeout(),E(this,Ae).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){B(this,Et,E(this,Et).filter(n=>n!==t)),this.scheduleGc(),E(this,Ae).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,Et).length||(this.state.status==="pending"?this.scheduleGc():E(this,Ae).remove(this))}continue(){var t;return((t=E(this,Gn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,s,l,u,c,p,m,d,y,v,b,f,h,g,S,k,P,C,I;const n=()=>{Ee(this,Pt,on).call(this,{type:"continue"})};B(this,Gn,am({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(L,N)=>{Ee(this,Pt,on).call(this,{type:"failed",failureCount:L,error:N})},onPause:()=>{Ee(this,Pt,on).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,Ae).canRun(this)}));const r=this.state.status==="pending",o=!E(this,Gn).canStart();try{if(r)n();else{Ee(this,Pt,on).call(this,{type:"pending",variables:t,isPaused:o}),await((a=(i=E(this,Ae).config).onMutate)==null?void 0:a.call(i,t,this));const N=await((l=(s=this.options).onMutate)==null?void 0:l.call(s,t));N!==this.state.context&&Ee(this,Pt,on).call(this,{type:"pending",context:N,variables:t,isPaused:o})}const L=await E(this,Gn).start();return await((c=(u=E(this,Ae).config).onSuccess)==null?void 0:c.call(u,L,t,this.state.context,this)),await((m=(p=this.options).onSuccess)==null?void 0:m.call(p,L,t,this.state.context)),await((y=(d=E(this,Ae).config).onSettled)==null?void 0:y.call(d,L,null,this.state.variables,this.state.context,this)),await((b=(v=this.options).onSettled)==null?void 0:b.call(v,L,null,t,this.state.context)),Ee(this,Pt,on).call(this,{type:"success",data:L}),L}catch(L){try{throw await((h=(f=E(this,Ae).config).onError)==null?void 0:h.call(f,L,t,this.state.context,this)),await((S=(g=this.options).onError)==null?void 0:S.call(g,L,t,this.state.context)),await((P=(k=E(this,Ae).config).onSettled)==null?void 0:P.call(k,void 0,L,this.state.variables,this.state.context,this)),await((I=(C=this.options).onSettled)==null?void 0:I.call(C,void 0,L,t,this.state.context)),L}finally{Ee(this,Pt,on).call(this,{type:"error",error:L})}}finally{E(this,Ae).runNext(this)}}},Et=new WeakMap,Ae=new WeakMap,Gn=new WeakMap,Pt=new WeakSet,on=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Le.batch(()=>{E(this,Et).forEach(r=>{r.onMutationUpdate(t)}),E(this,Ae).notify({mutation:this,type:"updated",action:t})})},qd);function Tx(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Dt,ft,oi,Kd,Rx=(Kd=class extends Qa{constructor(t={}){super();Q(this,Dt);Q(this,ft);Q(this,oi);this.config=t,B(this,Dt,new Set),B(this,ft,new Map),B(this,oi,0)}build(t,n,r){const o=new Px({mutationCache:this,mutationId:++gi(this,oi)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){E(this,Dt).add(t);const n=Fi(t);if(typeof n=="string"){const r=E(this,ft).get(n);r?r.push(t):E(this,ft).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,Dt).delete(t)){const n=Fi(t);if(typeof n=="string"){const r=E(this,ft).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&E(this,ft).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Fi(t);if(typeof n=="string"){const r=E(this,ft).get(n),o=r==null?void 0:r.find(i=>i.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=Fi(t);if(typeof n=="string"){const o=(r=E(this,ft).get(n))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Le.batch(()=>{E(this,Dt).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,Dt).clear(),E(this,ft).clear()})}getAll(){return Array.from(E(this,Dt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Rd(n,r))}findAll(t={}){return this.getAll().filter(n=>Rd(t,n))}notify(t){Le.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Le.batch(()=>Promise.all(t.map(n=>n.continue().catch(dt))))}},Dt=new WeakMap,ft=new WeakMap,oi=new WeakMap,Kd);function Fi(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Ad(e){return{onFetch:(t,n)=>{var c,p,m,d,y;const r=t.options,o=(m=(p=(c=t.fetchOptions)==null?void 0:c.meta)==null?void 0:p.fetchMore)==null?void 0:m.direction,i=((d=t.state.data)==null?void 0:d.pages)||[],a=((y=t.state.data)==null?void 0:y.pageParams)||[];let s={pages:[],pageParams:[]},l=0;const u=async()=>{let v=!1;const b=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},f=nm(t.options,t.fetchOptions),h=async(g,S,k)=>{if(v)return Promise.reject();if(S==null&&g.pages.length)return Promise.resolve(g);const P={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};b(P);const C=await f(P),{maxPages:I}=t.options,L=k?mx:hx;return{pages:L(g.pages,C,I),pageParams:L(g.pageParams,S,I)}};if(o&&i.length){const g=o==="backward",S=g?jx:Nd,k={pages:i,pageParams:a},P=S(r,k);s=await h(k,P,g)}else{const g=e??i.length;do{const S=l===0?a[0]??r.initialPageParam:Nd(r,s);if(l>0&&S==null)break;s=await h(s,S),l++}while(l<g)}return s};t.options.persister?t.fetchFn=()=>{var v,b;return(b=(v=t.options).persister)==null?void 0:b.call(v,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Nd(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function jx(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var de,fn,hn,Ur,Hr,mn,Jr,Wr,Gd,Ix=(Gd=class{constructor(e={}){Q(this,de);Q(this,fn);Q(this,hn);Q(this,Ur);Q(this,Hr);Q(this,mn);Q(this,Jr);Q(this,Wr);B(this,de,e.queryCache||new Ex),B(this,fn,e.mutationCache||new Rx),B(this,hn,e.defaultOptions||{}),B(this,Ur,new Map),B(this,Hr,new Map),B(this,mn,0)}mount(){gi(this,mn)._++,E(this,mn)===1&&(B(this,Jr,rm.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,de).onFocus())})),B(this,Wr,Ea.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,de).onOnline())})))}unmount(){var e,t;gi(this,mn)._--,E(this,mn)===0&&((e=E(this,Jr))==null||e.call(this),B(this,Jr,void 0),(t=E(this,Wr))==null||t.call(this),B(this,Wr,void 0))}isFetching(e){return E(this,de).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,fn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,de).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=E(this,de).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Pd(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return E(this,de).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=E(this,de).get(r.queryHash),i=o==null?void 0:o.state.data,a=lx(t,i);if(a!==void 0)return E(this,de).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Le.batch(()=>E(this,de).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,de).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,de);Le.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,de);return Le.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Le.batch(()=>E(this,de).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(dt).catch(dt)}invalidateQueries(e,t={}){return Le.batch(()=>(E(this,de).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Le.batch(()=>E(this,de).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(dt)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(dt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,de).build(this,t);return n.isStaleByTime(Pd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(dt).catch(dt)}fetchInfiniteQuery(e){return e.behavior=Ad(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(dt).catch(dt)}ensureInfiniteQueryData(e){return e.behavior=Ad(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ea.isOnline()?E(this,fn).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,de)}getMutationCache(){return E(this,fn)}getDefaultOptions(){return E(this,hn)}setDefaultOptions(e){B(this,hn,e)}setQueryDefaults(e,t){E(this,Ur).set(Zo(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,Ur).values()],n={};return t.forEach(r=>{ei(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){E(this,Hr).set(Zo(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Hr).values()],n={};return t.forEach(r=>{ei(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,hn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Ju(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Wu&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,hn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,de).clear(),E(this,fn).clear()}},de=new WeakMap,fn=new WeakMap,hn=new WeakMap,Ur=new WeakMap,Hr=new WeakMap,mn=new WeakMap,Jr=new WeakMap,Wr=new WeakMap,Gd),Ax=x.createContext(void 0),Nx=({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),w.jsx(Ax.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Ld="popstate";function Lx(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Ml("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Pa(o)}return _x(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ox(){return Math.random().toString(36).substr(2,8)}function Od(e,t){return{usr:e.state,key:e.key,idx:t}}function Ml(e,t,n,r){return n===void 0&&(n=null),ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ao(t):t,{state:n,key:t&&t.key||r||Ox()})}function Pa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ao(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _x(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=yn.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(ti({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function p(){s=yn.Pop;let b=c(),f=b==null?null:b-u;u=b,l&&l({action:s,location:v.location,delta:f})}function m(b,f){s=yn.Push;let h=Ml(v.location,b,f);u=c()+1;let g=Od(h,u),S=v.createHref(h);try{a.pushState(g,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}i&&l&&l({action:s,location:v.location,delta:1})}function d(b,f){s=yn.Replace;let h=Ml(v.location,b,f);u=c();let g=Od(h,u),S=v.createHref(h);a.replaceState(g,"",S),i&&l&&l({action:s,location:v.location,delta:0})}function y(b){let f=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof b=="string"?b:Pa(b);return h=h.replace(/ $/,"%20"),ge(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let v={get action(){return s},get location(){return e(o,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Ld,p),l=b,()=>{o.removeEventListener(Ld,p),l=null}},createHref(b){return t(o,b)},createURL:y,encodeLocation(b){let f=y(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:d,go(b){return a.go(b)}};return v}var _d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_d||(_d={}));function Mx(e,t,n){return n===void 0&&(n="/"),Fx(e,t,n)}function Fx(e,t,n,r){let o=typeof t=="string"?ao(t):t,i=$u(o.pathname||"/",n);if(i==null)return null;let a=um(e);Dx(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=Yx(i);s=qx(a[l],u)}return s}function um(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tn([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),um(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:$x(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of cm(i.path))o(i,a,l)}),t}function cm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=cm(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Dx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bx=/^:[\w-]+$/,zx=3,Ux=2,Hx=1,Jx=10,Wx=-2,Md=e=>e==="*";function $x(e,t){let n=e.split("/"),r=n.length;return n.some(Md)&&(r+=Wx),t&&(r+=Ux),n.filter(o=>!Md(o)).reduce((o,i)=>o+(Bx.test(i)?zx:i===""?Hx:Jx),r)}function Vx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qx(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",p=Kx({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),m=l.route;if(!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:Tn([i,p.pathname]),pathnameBase:eb(Tn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=Tn([i,p.pathnameBase]))}return a}function Kx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gx(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,c,p)=>{let{paramName:m,isOptional:d}=c;if(m==="*"){let v=s[p]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[p];return d&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Gx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),lm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Yx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $u(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ao(e):e;return{pathname:n?n.startsWith("/")?n:Xx(n,t):t,search:tb(r),hash:nb(o)}}function Xx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function _s(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dm(e,t){let n=Zx(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ao(e):(o=ti({},e),ge(!o.pathname||!o.pathname.includes("?"),_s("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),_s("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),_s("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),p-=1;o.pathname=m.join("/")}s=p>=0?t[p]:"/"}let l=Qx(o,s),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Tn=e=>e.join("/").replace(/\/\/+/g,"/"),eb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const fm=["post","put","patch","delete"];new Set(fm);const ob=["get",...fm];new Set(ob);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}const Vu=x.createContext(null),ib=x.createContext(null),lr=x.createContext(null),Za=x.createContext(null),Mn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),hm=x.createContext(null);function ab(e,t){let{relative:n}=t===void 0?{}:t;di()||ge(!1);let{basename:r,navigator:o}=x.useContext(lr),{hash:i,pathname:a,search:s}=gm(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Tn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function di(){return x.useContext(Za)!=null}function pi(){return di()||ge(!1),x.useContext(Za).location}function mm(e){x.useContext(lr).static||x.useLayoutEffect(e)}function sb(){let{isDataRoute:e}=x.useContext(Mn);return e?bb():lb()}function lb(){di()||ge(!1);let e=x.useContext(Vu),{basename:t,future:n,navigator:r}=x.useContext(lr),{matches:o}=x.useContext(Mn),{pathname:i}=pi(),a=JSON.stringify(dm(o,n.v7_relativeSplatPath)),s=x.useRef(!1);return mm(()=>{s.current=!0}),x.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=pm(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Tn([t,p.pathname])),(c.replace?r.replace:r.push)(p,c.state,c)},[t,r,a,i,e])}function ub(){let{matches:e}=x.useContext(Mn),t=e[e.length-1];return t?t.params:{}}function gm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(lr),{matches:o}=x.useContext(Mn),{pathname:i}=pi(),a=JSON.stringify(dm(o,r.v7_relativeSplatPath));return x.useMemo(()=>pm(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function cb(e,t){return db(e,t)}function db(e,t,n,r){di()||ge(!1);let{navigator:o,static:i}=x.useContext(lr),{matches:a}=x.useContext(Mn),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=pi(),p;if(t){var m;let f=typeof t=="string"?ao(t):t;u==="/"||(m=f.pathname)!=null&&m.startsWith(u)||ge(!1),p=f}else p=c;let d=p.pathname||"/",y=d;if(u!=="/"){let f=u.replace(/^\//,"").split("/");y="/"+d.replace(/^\//,"").split("/").slice(f.length).join("/")}let v=Mx(e,{pathname:y}),b=gb(v&&v.map(f=>Object.assign({},f,{params:Object.assign({},l,f.params),pathname:Tn([u,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?u:Tn([u,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),a,n,r);return t&&b?x.createElement(Za.Provider,{value:{location:ni({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:yn.Pop}},b):b}function pb(){let e=xb(),t=rb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,null)}const fb=x.createElement(pb,null);class hb extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(Mn.Provider,{value:this.props.routeContext},x.createElement(hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mb(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(Vu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Mn.Provider,{value:t},r)}function gb(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let c=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);c>=0||ge(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let p=a[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=c),p.route.id){let{loaderData:m,errors:d}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!d||d[p.route.id]===void 0);if(p.route.lazy||y){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,p,m)=>{let d,y=!1,v=null,b=null;n&&(d=s&&p.route.id?s[p.route.id]:void 0,v=p.route.errorElement||fb,l&&(u<0&&m===0?(Sb("route-fallback"),y=!0,b=null):u===m&&(y=!0,b=p.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,m+1)),h=()=>{let g;return d?g=v:y?g=b:p.route.Component?g=x.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=c,x.createElement(mb,{match:p,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?x.createElement(hb,{location:n.location,revalidation:n.revalidation,component:v,error:d,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var vm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vm||{}),ym=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ym||{});function vb(e){let t=x.useContext(Vu);return t||ge(!1),t}function yb(e){let t=x.useContext(ib);return t||ge(!1),t}function wb(e){let t=x.useContext(Mn);return t||ge(!1),t}function wm(e){let t=wb(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function xb(){var e;let t=x.useContext(hm),n=yb(),r=wm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function bb(){let{router:e}=vb(vm.UseNavigateStable),t=wm(ym.UseNavigateStable),n=x.useRef(!1);return mm(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ni({fromRouteId:t},i)))},[e,t])}const Fd={};function Sb(e,t,n){Fd[e]||(Fd[e]=!0)}function kb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function an(e){ge(!1)}function Cb(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yn.Pop,navigator:i,static:a=!1,future:s}=e;di()&&ge(!1);let l=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:i,static:a,future:ni({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=ao(r));let{pathname:c="/",search:p="",hash:m="",state:d=null,key:y="default"}=r,v=x.useMemo(()=>{let b=$u(c,l);return b==null?null:{location:{pathname:b,search:p,hash:m,state:d,key:y},navigationType:o}},[l,c,p,m,d,y,o]);return v==null?null:x.createElement(lr.Provider,{value:u},x.createElement(Za.Provider,{children:n,value:v}))}function Eb(e){let{children:t,location:n}=e;return cb(Fl(t),n)}new Promise(()=>{});function Fl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,Fl(r.props.children,i));return}r.type!==an&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Fl(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dl.apply(this,arguments)}function Pb(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Tb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rb(e,t){return e.button===0&&(!t||t==="_self")&&!Tb(e)}const jb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ib="6";try{window.__reactRouterVersion=Ib}catch{}const Ab="startTransition",Dd=qm[Ab];function Nb(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=Lx({window:o,v5Compat:!0}));let a=i.current,[s,l]=x.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=x.useCallback(p=>{u&&Dd?Dd(()=>l(p)):l(p)},[l,u]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.useEffect(()=>kb(r),[r]),x.createElement(Cb,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const Lb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ob=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gt=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:c,viewTransition:p}=t,m=Pb(t,jb),{basename:d}=x.useContext(lr),y,v=!1;if(typeof u=="string"&&Ob.test(u)&&(y=u,Lb))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=$u(S.pathname,d);S.origin===g.origin&&k!=null?u=k+S.search+S.hash:v=!0}catch{}let b=ab(u,{relative:o}),f=_b(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:o,viewTransition:p});function h(g){r&&r(g),g.defaultPrevented||f(g)}return x.createElement("a",Dl({},m,{href:y||b,onClick:v||i?r:h,ref:n,target:l}))});var Bd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bd||(Bd={}));var zd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function _b(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,l=sb(),u=pi(),c=gm(e,{relative:a});return x.useCallback(p=>{if(Rb(p,n)){p.preventDefault();let m=r!==void 0?r:Pa(u)===Pa(c);l(e,{replace:m,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,c,r,o,n,e,i,a,s])}const Mb=()=>w.jsx("header",{className:"sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b",children:w.jsx("div",{className:"container mx-auto px-4",children:w.jsxs("nav",{className:"flex items-center justify-between h-16",children:[w.jsx(gt,{to:"/",className:"text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Tech Chatter Box"}),w.jsxs("div",{className:"flex gap-6",children:[w.jsx(gt,{to:"/blog",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"All Posts"}),w.jsx(gt,{to:"/categories",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"Categories"}),w.jsx(gt,{to:"/about",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"About"}),w.jsx(gt,{to:"/contact",className:"text-gray-600 hover:text-purple-600 transition-colors",children:"Contact"})]})]})})}),Fb={id:"java_a101",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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

  `},Db={id:"java_a102",title:"Java 8 Features: The Evolution of Modern Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 8 Features: The Evolution of Modern Java</title>
  <meta name="description" content="Explore Java 8's core features like lambdas, streams, functional interfaces, and the new date/time API." />
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

  <p>Java 8, released in March 2014, was a major turning point in the Java ecosystem. It introduced functional programming capabilities and brought a modern, expressive style to Java development. Let’s dive into its most impactful features.</p>

  <section>
    <h2>1. Lambda Expressions</h2>
    <p>Lambda expressions let you treat functionality as method arguments or code as data:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.forEach(name -&gt; System.out.println(name));</pre>
    <p>Shorter, cleaner, and more expressive code!</p>
  </section>

  <section>
    <h2>2. Functional Interfaces</h2>
    <p>Interfaces with a single abstract method can be used with lambdas:</p>
    <pre>@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

Greeting g = (name) -&gt; System.out.println("Hello " + name);</pre>
    <p>Java 8 introduced many built-in functional interfaces like <code>Predicate</code>, <code>Function</code>, <code>Consumer</code>, and more.</p>
  </section>

  <section>
    <h2>3. Streams API</h2>
    <p>Process collections in a functional style using pipelines:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(n -&gt; n.startsWith("A"))
     .map(String::toUpperCase)
     .forEach(System.out::println);</pre>
    <p>Streams make data processing concise and readable.</p>
  </section>

  <section>
    <h2>4. Default and Static Methods in Interfaces</h2>
    <p>Interfaces can now have method implementations:</p>
    <pre>interface Vehicle {
    default void start() {
        System.out.println("Vehicle started");
    }
}</pre>
    <p>This enabled backward compatibility without breaking existing implementations.</p>
  </section>

  <section>
    <h2>5. New Date and Time API (java.time)</h2>
    <p>The old <code>Date</code> and <code>Calendar</code> classes were replaced by a much cleaner and immutable API:</p>
    <pre>LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 1);

Period age = Period.between(birthday, today);
System.out.println("Age: " + age.getYears());</pre>
  </section>

  <section>
    <h2>6. Optional Class</h2>
    <p>A container object which may or may not contain a non-null value, avoiding null checks:</p>
    <pre>Optional&lt;String&gt; name = Optional.ofNullable(getName());

name.ifPresent(n -&gt; System.out.println("Hello " + n));</pre>
  </section>

  <section>
    <h2>7. Nashorn JavaScript Engine (Deprecated Later)</h2>
    <p>Java 8 introduced a lightweight JavaScript engine called Nashorn:</p>
    <pre>ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
engine.eval("print('Hello from JavaScript')");</pre>
    <p><em>(Note: Nashorn was deprecated in later versions and removed in Java 15.)</em></p>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 8 modernized the language and laid the foundation for functional programming in Java. It remains one of the most widely adopted versions, even years after its release.</p>
    <p>If you're maintaining Java 8 applications, knowing these features is essential — and if you're upgrading, many of these ideas carry forward into newer releases!</p>
  </section>

</body>
</html>
  `},Bb={id:"java_a103",title:"Java 17 Features",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 17 Features: A Complete Guide for Developers</title>
  <meta name="description" content="Explore the key features of Java 17, the latest LTS release including sealed classes, pattern matching, and more." />
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

  <p>Java 17, released in September 2021, is a Long-Term Support (LTS) version and brings exciting updates and modern language enhancements. Let’s take a look at the top features every Java developer should know.</p>

  <section>
    <h2>1. Sealed Classes</h2>
    <p>Sealed classes let you restrict which classes can extend or implement a class or interface.</p>
    <pre>public sealed class Shape permits Circle, Square {}

final class Circle extends Shape {}
final class Square extends Shape {}</pre>
    <p>This gives you more control over class hierarchies and improves readability and maintainability.</p>
  </section>

  <section>
    <h2>2. Pattern Matching for <code>instanceof</code></h2>
    <p>Simplifies type casting when using <code>instanceof</code> checks:</p>
    <pre>if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}</pre>
    <p>No need for manual casting anymore!</p>
  </section>

  <section>
    <h2>3. Switch Expressions (Standard)</h2>
    <p>Switch expressions were finalized in Java 17, enabling more concise syntax:</p>
    <pre>String result = switch (day) {
    case MONDAY, FRIDAY -&gt; "Workday";
    case SATURDAY, SUNDAY -&gt; "Weekend";
    default -&gt; "Unknown";
};</pre>
  </section>

  <section>
    <h2>4. Text Blocks (Standard)</h2>
    <p>Text blocks make multi-line strings easier to read and write:</p>
    <pre>String json = """
{
  "name": "Java",
  "version": 17
}
""";</pre>
    <p>No more escaping quotes or newlines manually!</p>
  </section>

  <section>
    <h2>5. New <code>Record</code> Enhancements</h2>
    <p>Records, introduced in Java 14 and finalized in Java 16, now support better pattern matching and can be used with sealed types:</p>
    <pre>public record Point(int x, int y) {}</pre>
    <p>They reduce boilerplate for simple data carriers.</p>
  </section>

  <section>
    <h2>6. JEP 356: Enhanced Pseudo-Random Number Generators</h2>
    <p>A new set of interfaces and implementations for flexible and streamable random number generation:</p>
    <pre>RandomGenerator gen = RandomGeneratorFactory.of("L64X128MixRandom").create();
System.out.println(gen.nextInt());</pre>
  </section>

  <section>
    <h2>7. Strong Encapsulation of JDK Internals</h2>
    <p>Java 17 strongly encapsulates internal APIs. If you relied on <code>sun.*</code> packages, you’ll need to migrate to public APIs.</p>
  </section>

  <section>
    <h2>8. Deprecations and Removals</h2>
    <ul>
      <li>Removal of the Applet API</li>
      <li>Deprecation of the Security Manager</li>
      <li>Removal of RMI Activation system</li>
    </ul>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 17 brings modern language features, performance improvements, and better developer ergonomics — and as an LTS release, it’s built for stability.</p>
    <p>Time to upgrade? If you're on Java 8 or even Java 11, Java 17 is a smart step forward.</p>
  </section>

</body>
</html>
  `},zb={id:"java_a104",title:"Java 21 Features",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 21 Features: The Complete Guide for Developers</title>
  <meta name="description" content="Explore Java 21's powerful new features including virtual threads, pattern matching, and more." />
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

  <p>Java 21, released in September 2023, is a major Long-Term Support (LTS) release. It brings cutting-edge features like virtual threads, record patterns, string templates, and more. Let’s dive into what’s new in Java 21!</p>

  <section>
    <h2>1. Virtual Threads (JEP 444)</h2>
    <p>Part of Project Loom, virtual threads are lightweight threads that scale your applications with minimal changes.</p>
    <pre>try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println("Hello from a virtual thread!"));
}</pre>
    <p>They’re ideal for handling high-concurrency applications like web servers.</p>
  </section>

  <section>
    <h2>2. Record Patterns (JEP 440)</h2>
    <p>Pattern matching now supports records, making deconstruction more elegant:</p>
    <pre>record Point(int x, int y) {}

static void print(Object obj) {
    if (obj instanceof Point(int x, int y)) {
        System.out.println("x = " + x + ", y = " + y);
    }
}</pre>
  </section>

  <section>
    <h2>3. Pattern Matching for <code>switch</code> (JEP 441)</h2>
    <p>Switch can now use type patterns, making decision trees concise and type-safe:</p>
    <pre>static String handleShape(Object shape) {
    return switch (shape) {
        case Circle c -&gt; "Circle radius: " + c.radius();
        case Rectangle r -&gt; "Rectangle area: " + (r.w() * r.h());
        default -&gt; "Unknown shape";
    };
}</pre>
  </section>

  <section>
    <h2>4. String Templates (Preview) (JEP 430)</h2>
    <p>String interpolation comes to Java with <code>STR</code> templates:</p>
    <pre>String name = "Java";
String greeting = STR."Hello, {name}!";
System.out.println(greeting);</pre>
    <p>This feature is in preview but hugely anticipated!</p>
  </section>

  <section>
    <h2>5. Unnamed Classes and Instance <code>main()</code> (Preview)</h2>
    <p>You can now write minimal Java programs with no class declaration:</p>
    <pre>void main() {
    System.out.println("Minimal Java app!");
}</pre>
    <p>Perfect for scripts, learning, or quick prototyping.</p>
  </section>

  <section>
    <h2>6. Scoped Values (Preview) (JEP 446)</h2>
    <p>Scoped values allow safe, efficient sharing of data between threads — especially useful with virtual threads:</p>
    <pre>ScopedValue&lt;String&gt; USERNAME = ScopedValue.newInstance();

ScopedValue.where(USERNAME, "alice").run(() -&gt; {
    System.out.println("Hello " + USERNAME.get());
});</pre>
  </section>

  <section>
    <h2>7. Structured Concurrency (Preview) (JEP 453)</h2>
    <p>Makes managing concurrent tasks easier and safer by treating them as a single unit of work:</p>
    <pre>try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future&lt;String&gt; user = scope.fork(() -&gt; fetchUser());
    Future&lt;String&gt; orders = scope.fork(() -&gt; fetchOrders());

    scope.join();
    scope.throwIfFailed();

    return user.result() + orders.result();
}</pre>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 21 modernizes the platform with features developers have wanted for years. If you’re using Java 17 or earlier, this LTS release is a solid upgrade.</p>
    <p>Java is more expressive, scalable, and fun than ever. Time to make the move!</p>
  </section>

</body>
</html>
  `},Ub={id:"java_a105",title:"Java 25 Features (Preview) – What’s New in the Upcoming LTS Release",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java 25 Features (Preview) – What’s New in the Upcoming LTS Release</title>
  <meta name="description" content="Explore the new features coming in Java 25, including stable values, Valhalla value classes, and structured concurrency." />
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

  <p>Java 25 is expected to launch in <strong>September 2025</strong>, and it brings with it exciting advancements in memory optimization, concurrency, and performance. Here's what we know so far about this upcoming release.</p>

  <section>
    <h2>1. Stable Values (JEP 502 – Preview)</h2>
    <p>This introduces immutable objects treated as constants by the JVM. Stable values help optimize startup time and improve performance in multi-threaded environments.</p>
    <pre>static final StableValue&lt;String&gt; GREETING = StableValue.of("Hello");

System.out.println(GREETING.get());</pre>
  </section>

  <section>
    <h2>2. Removal of 32-bit x86 Port (JEP 503)</h2>
    <p>Java 25 will remove support for the 32-bit x86 architecture to modernize the JDK and reduce maintenance overhead.</p>
  </section>

  <section>
    <h2>3. Value Classes (Project Valhalla – Expected)</h2>
    <p>Value classes are identity-free, immutable data carriers that can be laid out more efficiently in memory.</p>
    <pre>value class RGB(int r, int g, int b) { }</pre>
    <p>This allows objects to behave more like primitives for better performance.</p>
  </section>

  <section>
    <h2>4. Record 'with' Expressions (Expected)</h2>
    <p>Expected in Java 25 is the ability to create modified versions of records easily:</p>
    <pre>record User(String name, int age) {}

User updated = oldUser with { age = 35 };</pre>
  </section>

  <section>
    <h2>5. Structured Concurrency (Preview)</h2>
    <p>Structured concurrency continues its preview journey, aiming to make concurrent programming simpler and more reliable.</p>
    <pre>try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future&lt;String&gt; result = scope.fork(() -&gt; doWork());
    scope.join();
    scope.throwIfFailed();
}</pre>
  </section>

  <section>
    <h2>6. Scoped Values Enhancements (Preview)</h2>
    <p>Scoped values enable sharing of contextual data without traditional parameter passing — useful for virtual threads.</p>
    <pre>ScopedValue&lt;String&gt; USER_ID = ScopedValue.newInstance();

ScopedValue.where(USER_ID, "u123").run(() -&gt; {
    System.out.println(USER_ID.get());
});</pre>
  </section>

  <section>
    <h2>📅 Release Timeline</h2>
    <ul>
      <li><strong>Rampdown Phase 1:</strong> June 5, 2025</li>
      <li><strong>Rampdown Phase 2:</strong> July 17, 2025</li>
      <li><strong>Release Candidate:</strong> August 7, 2025</li>
      <li><strong>General Availability:</strong> September 16, 2025</li>
    </ul>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java 25 represents another step forward for the platform — enhancing expressiveness, performance, and safety. Whether you're a backend developer, systems architect, or tooling engineer, the upcoming changes will modernize and improve your Java workflow.</p>
  </section>

</body>
</html>
  `},Hb={id:"java_a106",title:"Java Streams: A Modern Way to Process Data",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Streams: A Modern Way to Process Data</title>
  <meta name="description" content="Learn Java Streams with real-world examples. Understand map, filter, reduce, and how to write clean, functional-style code in Java." />
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

  <p>Introduced in Java 8, the <code>Stream</code> API brings a functional approach to processing collections. With streams, you can perform operations like <strong>filtering</strong>, <strong>mapping</strong>, and <strong>reducing</strong> in a concise and readable way.</p>

  <section>
    <h2>🔍 What is a Stream?</h2>
    <p>A <code>Stream</code> represents a sequence of elements and supports sequential and parallel aggregate operations.</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(name -&gt; name.startsWith("A"))
     .forEach(System.out::println);</pre>
    <p>Output: <code>Alice</code></p>
  </section>

  <section>
    <h2>⚙️ Common Operations</h2>

    <h3>1. <code>filter()</code></h3>
    <p>Filters elements based on a condition:</p>
    <pre>List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3, 4, 5);
nums.stream()
    .filter(n -&gt; n % 2 == 0)
    .forEach(System.out::println);</pre>

    <h3>2. <code>map()</code></h3>
    <p>Transforms each element:</p>
    <pre>List&lt;String&gt; names = Arrays.asList("Java", "Python", "Go");

names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);</pre>

    <h3>3. <code>reduce()</code></h3>
    <p>Reduces the stream to a single value:</p>
    <pre>int sum = Stream.of(1, 2, 3, 4)
                .reduce(0, Integer::sum);

System.out.println(sum);</pre>
    <p>Output: <code>10</code></p>
  </section>

  <section>
    <h2>🔁 Collecting Results</h2>
    <p>You can collect stream results into collections:</p>
    <pre>List&lt;String&gt; filtered = names.stream()
                             .filter(n -&gt; n.length() &gt; 3)
                             .collect(Collectors.toList());</pre>
  </section>

  <section>
    <h2>🚀 Parallel Streams</h2>
    <p>Process elements in parallel using multiple threads:</p>
    <pre>list.parallelStream()
    .filter( ... )
    .map( ... )
    .collect(Collectors.toList());</pre>
    <p>Use with care — not always faster depending on workload and thread management.</p>
  </section>

  <section>
    <h2>✅ Summary</h2>
    <ul>
      <li>Streams make code cleaner and easier to read.</li>
      <li>They enable functional-style operations on collections.</li>
      <li>Use <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>collect</code> for powerful transformations.</li>
    </ul>
    <p>Java Streams = less boilerplate, more power. Try them in your next project!</p>
  </section>

</body>
</html>
  `},Jb={id:"java_a107",title:"Java Streams: map() vs flatMap()",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Streams: map() vs flatMap()</title>
  <meta name="description" content="Understand the difference between map() and flatMap() in Java Streams with clear examples and use cases." />
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
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f0f0f0;
    }
  </style>
</head>
<body>

  <p>In Java Streams, both <code>map()</code> and <code>flatMap()</code> are used to transform data — but they behave differently based on the output structure. Let's break it down with real examples.</p>

  <section>
    <h2>✅ <code>map()</code> – One-to-One Transformation</h2>
    <p>Transforms each element into another value (e.g., <code>String</code> to <code>Integer</code>):</p>
    <pre>List&lt;String&gt; names = List.of("Alice", "Bob");

List&lt;Integer&gt; lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());

System.out.println(lengths); // Output: [5, 3]</pre>
  </section>

  <section>
    <h2>✅ <code>flatMap()</code> – One-to-Many Flattening</h2>
    <p>Each element is mapped to a <code>Stream</code>, and all streams are then flattened into a single stream:</p>
    <pre>List&lt;String&gt; sentences = List.of("Hello world", "Java Streams");

List&lt;String&gt; words = sentences.stream()
    .flatMap(s -&gt; Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());

System.out.println(words); // Output: [Hello, world, Java, Streams]</pre>
  </section>

  <section>
    <h2>🔁 Key Differences</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th><code>map()</code></th>
        <th><code>flatMap()</code></th>
      </tr>
      <tr>
        <td>Transformation</td>
        <td>One-to-One</td>
        <td>One-to-Many</td>
      </tr>
      <tr>
        <td>Output Type</td>
        <td><code>Stream&lt;T&gt;</code></td>
        <td><code>Stream&lt;U&gt;</code> (flattened)</td>
      </tr>
      <tr>
        <td>Use Case</td>
        <td>Transform each item</td>
        <td>Flatten nested structures</td>
      </tr>
    </table>
  </section>

  <section>
    <h2>📦 Nested List Example</h2>
    <pre>List&lt;List&lt;String&gt;&gt; listOfLists = List.of(
    List.of("A", "B"),
    List.of("C", "D")
);

// Using map()
Stream&lt;List&lt;String&gt;&gt; mapped = listOfLists.stream().map(list -&gt; list);
System.out.println(mapped.count()); // Output: 2

// Using flatMap()
Stream&lt;String&gt; flatMapped = listOfLists.stream().flatMap(List::stream);
System.out.println(flatMapped.count()); // Output: 4</pre>
  </section>

  <section>
    <h2>🎯 Conclusion</h2>
    <ul>
      <li>Use <code>map()</code> for simple transformations.</li>
      <li>Use <code>flatMap()</code> when each element produces a stream or collection, and you want a single flattened result.</li>
    </ul>
    <p>Mastering these two functions makes your Java Stream operations far more powerful and expressive!</p>
  </section>

</body>
</html>
  `},Wb={id:"java_a108",title:"Lombok – Reduce Boilerplate in Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lombok – Reduce Boilerplate in Java</title>
  <meta name="description" content="Learn how Project Lombok helps reduce boilerplate code in Java using annotations like @Getter, @Setter, @Builder, and more." />
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
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p>Writing boilerplate code in Java — like getters, setters, constructors, and builders — can get repetitive. <strong>Project Lombok</strong> simplifies this with annotations that auto-generate code at compile-time, keeping your classes clean and focused.</p>

  <section>
    <h2>🔧 Setup</h2>
    <p>To use Lombok, add this dependency to your project:</p>
    <h4>➡️ Maven</h4>
    <pre>&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
  &lt;version&gt;1.18.30&lt;/version&gt;
  &lt;scope&gt;provided&lt;/scope&gt;
&lt;/dependency&gt;</pre>

    <h4>➡️ Gradle</h4>
    <pre>compileOnly 'org.projectlombok:lombok:1.18.30'
annotationProcessor 'org.projectlombok:lombok:1.18.30'</pre>
  </section>

  <section>
    <h2>📦 Example Without Lombok</h2>
    <pre>public class User {
  private String name;
  private int age;

  public User() {}

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public int getAge() { return age; }
  public void setAge(int age) { this.age = age; }
}</pre>
    <p>That's a lot of code for just a data class!</p>
  </section>

  <section>
    <h2>✅ Same Class With Lombok</h2>
    <pre>import lombok.Data;

@Data
public class User {
  private String name;
  private int age;
}</pre>
    <p>Done! <code>@Data</code> includes <code>@Getter</code>, <code>@Setter</code>, <code>@ToString</code>, <code>@EqualsAndHashCode</code>, and <code>@RequiredArgsConstructor</code>.</p>
  </section>

  <section>
    <h2>🎯 Common Lombok Annotations</h2>
    <ul>
      <li><code>@Getter</code> and <code>@Setter</code> – generates getters/setters</li>
      <li><code>@ToString</code> – generates a <code>toString()</code> method</li>
      <li><code>@EqualsAndHashCode</code> – adds <code>equals()</code> and <code>hashCode()</code></li>
      <li><code>@NoArgsConstructor</code>, <code>@AllArgsConstructor</code> – constructors</li>
      <li><code>@Builder</code> – fluent builder API</li>
      <li><code>@Value</code> – makes an immutable class (like Kotlin’s <code>data class</code>)</li>
    </ul>
  </section>

  <section>
    <h2>🚀 Builder Example</h2>
    <pre>@Builder
public class Product {
  private String name;
  private double price;
}

// Usage
Product p = Product.builder()
    .name("Laptop")
    .price(1200.0)
    .build();</pre>
  </section>

  <section>
    <h2>🛠 IDE Support</h2>
    <p>Lombok works in IntelliJ IDEA and Eclipse, but you may need to:</p>
    <ul>
      <li>Install the Lombok plugin</li>
      <li>Enable annotation processing in your IDE settings</li>
    </ul>
  </section>

  <section>
    <h2>📌 Conclusion</h2>
    <p>Lombok is a fantastic tool for reducing repetitive Java code. Use it wisely to simplify your codebase, but be sure your team understands what’s being auto-generated under the hood.</p>
  </section>

</body>
</html>
  `},$b={id:"java_a109",title:"Testing Lombok-based Classes in Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Testing Lombok-based Classes in Java</title>
  <meta name="description" content="Learn how to effectively test Java classes that use Lombok annotations like @Data, @Builder, @EqualsAndHashCode, and more." />
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
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p><strong>Lombok</strong> simplifies Java by auto-generating boilerplate like getters, setters, and constructors. But how do you **test** classes that use Lombok annotations?</p>

  <p>Here's a practical guide to unit testing Lombok-powered classes — and when you might want to go beyond relying on Lombok alone.</p>

  <section>
    <h2>✅ Lombok Class Example</h2>
    <p>Let’s use this simple class as our example:</p>
    <pre>import lombok.Data;

@Data
public class User {
  private String name;
  private int age;
}</pre>
    <p>Lombok generates <code>getName()</code>, <code>setName()</code>, <code>getAge()</code>, <code>setAge()</code>, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.</p>
  </section>

  <section>
    <h2>🔍 Should You Test Getters and Setters?</h2>
    <p>Generally, you <strong>don’t need to test Lombok-generated methods</strong> like getters and setters — they’re stable and widely trusted. However, you might want to test:</p>
    <ul>
      <li>Custom logic added manually</li>
      <li>Builder pattern usage</li>
      <li>Correct field population</li>
      <li>Equality and immutability (e.g., for value objects)</li>
    </ul>
  </section>

  <section>
    <h2>📦 Sample JUnit 5 Tests</h2>
    <pre>import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

  @Test
  void testGettersAndSetters() {
    User user = new User();
    user.setName("Alice");
    user.setAge(30);

    assertEquals("Alice", user.getName());
    assertEquals(30, user.getAge());
  }

  @Test
  void testEqualsAndHashCode() {
    User u1 = new User();
    u1.setName("Alice");
    u1.setAge(30);

    User u2 = new User();
    u2.setName("Alice");
    u2.setAge(30);

    assertEquals(u1, u2);
    assertEquals(u1.hashCode(), u2.hashCode());
  }

  @Test
  void testToString() {
    User user = new User();
    user.setName("Bob");
    user.setAge(25);

    String toString = user.toString();
    assertTrue(toString.contains("Bob"));
    assertTrue(toString.contains("25"));
  }
}</pre>
    <p><strong>Note:</strong> You’re not testing Lombok itself — you’re testing that your class behaves as expected with data populated.</p>
  </section>

  <section>
    <h2>🚀 Testing @Builder Classes</h2>
    <pre>import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {
  private String name;
  private double price;
}</pre>

    <p>JUnit test for <code>@Builder</code>:</p>
    <pre>@Test
void testBuilder() {
  Product p = Product.builder()
      .name("MacBook")
      .price(1999.99)
      .build();

  assertEquals("MacBook", p.getName());
  assertEquals(1999.99, p.getPrice());
}</pre>
  </section>

  <section>
    <h2>📌 Best Practices</h2>
    <ul>
      <li>📦 Don’t test auto-generated code unless it’s part of complex logic.</li>
      <li>🔍 Focus on testing behavior, not Lombok.</li>
      <li>🛠 Use IDEs or decompiled classes to inspect generated code if needed.</li>
      <li>✅ For teams: document that Lombok is used so others understand what's hidden.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p>Lombok reduces code clutter — and when used wisely, you don’t need to test the annotations themselves. Focus your tests on functionality and ensure the behavior is correct based on how your classes are used.</p>
    <p>Want to see how Lombok compares with <code>record</code> types in Java 14+? Stay tuned!</p>
  </section>

</body>
</html>
  `},Vb={id:"java_a110",title:"Lombok vs Records: When to Use What?",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lombok vs Records: When to Use What?</title>
  <meta name="description" content="Understand the differences between Lombok and Java Records, and know when to choose one over the other." />
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
    ul {
      padding-left: 1.2rem;
    }
  </style>
</head>
<body>

  <p>With Java's continuous evolution, two powerful tools for reducing boilerplate code have emerged: <strong>Lombok</strong> and <strong>Records</strong>. But when should you choose one over the other? In this post, we'll break down their strengths, differences, and which scenarios they shine in.</p>

  <section>
    <h2>🔧 Lombok: Auto-generating Boilerplate Code</h2>
    <p><strong>Lombok</strong> is a Java library that uses annotations to auto-generate boilerplate code like getters, setters, equals/hashCode, toString, and constructors. It’s widely used in legacy codebases to reduce verbosity while maintaining flexibility.</p>

    <h3>Popular Lombok Annotations</h3>
    <ul>
      <li><code>@Getter</code> / <code>@Setter</code> – auto-generates getters and setters</li>
      <li><code>@ToString</code> – generates the <code>toString()</code> method</li>
      <li><code>@EqualsAndHashCode</code> – generates <code>equals()</code> and <code>hashCode()</code> methods</li>
      <li><code>@Builder</code> – enables builder pattern</li>
      <li><code>@Value</code> – creates immutable objects with final fields</li>
    </ul>

    <h3>When to Use Lombok</h3>
    <ul>
      <li>Working with <strong>legacy code</strong> where you need flexibility with your classes.</li>
      <li>When you want to maintain <strong>mutability</strong> or <strong>custom logic</strong> in your classes.</li>
      <li>When you want more control over which methods get generated, using specific Lombok annotations as needed.</li>
    </ul>
  </section>

  <section>
    <h2>📦 Java Records: Immutable Data Structures</h2>
    <p><strong>Records</strong> were introduced in Java 14 as a feature of Project Amber to simplify working with immutable data objects. A record class is a special kind of class that provides automatic implementations for <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code> while making the object immutable by default.</p>

    <h3>Record Example</h3>
    <pre>public record User(String name, int age) {}</pre>
    <p>With just one line of code, a <code>record</code> auto-generates:</p>
    <ul>
      <li>A constructor with all fields</li>
      <li>Getters for all fields (no setters, as it's immutable)</li>
      <li><code>toString()</code>, <code>equals()</code>, and <code>hashCode()</code> methods</li>
    </ul>

    <h3>When to Use Records</h3>
    <ul>
      <li>When you need <strong>immutable data structures</strong> (no setters are allowed).</li>
      <li>When the class primarily holds <strong>data</strong> with no complex logic.</li>
      <li>When you want to easily work with <strong>records as keys in collections</strong> (e.g., in HashMap). The auto-generated <code>hashCode()</code> is very efficient.</li>
    </ul>
  </section>

  <section>
    <h2>🧮 Key Differences Between Lombok and Records</h2>
    <table>
      <tr>
        <th>Feature</th>
        <th>Lombok</th>
        <th>Records</th>
      </tr>
      <tr>
        <td>Immutability</td>
        <td>Mutable (by default)</td>
        <td>Immutable by default</td>
      </tr>
      <tr>
        <td>Generated Methods</td>
        <td>Customizable via annotations</td>
        <td>Fixed set of methods (equals, hashCode, toString, constructor)</td>
      </tr>
      <tr>
        <td>Field Access</td>
        <td>Can be either mutable or immutable, depending on your choice of annotations</td>
        <td>Fields are final and can only be accessed via getter methods</td>
      </tr>
      <tr>
        <td>Complexity</td>
        <td>More flexible, can be used for any class type</td>
        <td>Best for simple data containers with no complex behavior</td>
      </tr>
      <tr>
        <td>Use Case</td>
        <td>Legacy code, mutable objects, fine-grained control</td>
        <td>Immutable data structures, DTOs, data-centric objects</td>
      </tr>
    </table>
  </section>

  <section>
    <h2>💡 When to Choose One Over the Other?</h2>
    <p>Here are some practical guidelines to help you decide when to use Lombok vs Records:</p>
    <ul>
      <li><strong>Choose Lombok</strong> when you need more flexibility in your data objects, need to support mutable fields, or when working with legacy code.</li>
      <li><strong>Choose Records</strong> when you want simple, immutable data containers with auto-generated methods for things like <code>toString()</code> and <code>equals()</code> — especially in new projects where immutability is preferred.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p>Both Lombok and Records serve different needs in the Java ecosystem. Lombok is a more flexible solution for reducing boilerplate code in mutable classes, while Records provide a clean, simple solution for immutable data objects. Understanding these differences will help you make the best choice for your project.</p>
    <p>Want to dive deeper into <strong>Lombok annotations</strong> or more about <strong>Java Records</strong>? Stay tuned for more!</p>
  </section>

</body>
</html>
  `},qb={id:"java_a111",title:"Java Records in Functional Programming",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java Records in Functional Programming</title>
  <meta name="description" content="Explore how Java Records align with functional programming principles like immutability, value semantics, and pure functions." />
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
    ul {
      padding-left: 1.2rem;
    }
    section {
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>

  <p>Java isn’t traditionally a functional programming (FP) language, but with the introduction of <strong>Records</strong> in Java 14+ (stable since Java 16), it’s become easier to write FP-inspired, data-oriented code.</p>

  <p>In this article, we’ll explore how <strong>Records</strong> support key functional programming principles like <em>immutability</em>, <em>value-based semantics</em>, and <em>pure data modeling</em>.</p>

  <section>
    <h2>📦 What Are Java Records?</h2>
    <p>Records are a concise way to declare <strong>immutable data carriers</strong> in Java. They auto-generate:</p>
    <ul>
      <li>Constructor</li>
      <li>Getters</li>
      <li><code>equals()</code> and <code>hashCode()</code></li>
      <li><code>toString()</code></li>
    </ul>

    <pre>public record User(String name, int age) {}</pre>

    <p>This class is equivalent to a verbose POJO, but it’s immutable and much cleaner.</p>
  </section>

  <section>
    <h2>🧠 Why Records Fit Functional Programming</h2>
    <p>Functional programming promotes writing <strong>pure functions</strong> that avoid mutable state. Here’s how records align:</p>
    <ul>
      <li>✅ <strong>Immutability</strong> – Record fields are <code>final</code> and cannot be changed after construction.</li>
      <li>✅ <strong>Value semantics</strong> – Two records with the same data are equal.</li>
      <li>✅ <strong>Data as a value</strong> – Emphasizes transforming data over modifying it.</li>
    </ul>
  </section>

  <section>
    <h2>🛠 Working with Records in Functional Style</h2>

    <h3>1. Record Transformation with Functions</h3>
    <p>Create pure functions that return new records instead of modifying existing ones:</p>
    <pre>public record Product(String name, double price) {}

public Product applyDiscount(Product p, double percent) {
  return new Product(p.name(), p.price() * (1 - percent / 100));
}</pre>

    <h3>2. Using Streams with Records</h3>
    <pre>List&lt;Product&gt; discounted = products.stream()
  .map(p -&gt; applyDiscount(p, 10))
  .toList();</pre>

    <p>Because records are immutable, these transformations are safe and side-effect-free.</p>
  </section>

  <section>
    <h2>🔁 Records as Algebraic Data Types (ADTs)</h2>
    <p>In FP, data is often modeled with **Algebraic Data Types** like sum types (variants). Java doesn’t have native sum types, but you can mimic them using sealed interfaces + records:</p>

    <pre>sealed interface Payment permits Card, Cash {}

record Card(String cardNumber) implements Payment {}
record Cash(double amount) implements Payment {}</pre>

    <p>This pattern mirrors pattern matching and variant-based logic in languages like Scala and Haskell.</p>

    <pre>String handlePayment(Payment p) {
  return switch (p) {
    case Card c -&gt; "Paid with card: " + c.cardNumber();
    case Cash c -&gt; "Paid in cash: " + c.amount();
  };
}</pre>
  </section>

  <section>
    <h2>🧼 Best Practices</h2>
    <ul>
      <li>✅ Use records to model **pure data**, especially DTOs, events, and config objects.</li>
      <li>✅ Favor **stateless transformations** over mutating logic.</li>
      <li>❌ Avoid adding mutable fields or logic-heavy methods to records.</li>
      <li>⚠️ Records are not suitable for ORM/JPA entities due to immutability and lack of no-arg constructor.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Conclusion</h2>
    <p><strong>Records + Functional Thinking = Cleaner, Safer Java</strong></p>
    <p>Java Records offer a powerful way to embrace functional programming principles, like immutability, pure functions, and value-based reasoning. They’re perfect for modeling data, applying transformations, and building more robust, testable code.</p>
    <p>Combine records with Streams, Optionals, and pattern matching — and your Java starts feeling surprisingly functional!</p>
  </section>

</body>
</html>
  `},Kb={id:"java_a112",title:"JBang – Scripting with Java Like Never Before",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JBang – Scripting with Java Like Never Before</title>
  <meta name="description" content="Learn how JBang turns Java into a modern scripting language. Ideal for quick tools, prototyping, and automation using Java." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #fdfdfd;
      color: #333;
      line-height: 1.7;
      margin: 2rem auto;
      padding: 0 1.5rem;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #dcdcdc;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #f0f0f0;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    a {
      color: #2980b9;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>For decades, Java has been known as a powerful but verbose and heavyweight language—great for enterprise applications, not so much for scripts and quick tools. Enter <strong>JBang</strong>: a modern tool that breathes new life into Java by making it scriptable, lightweight, and even fun!</p>

  <section>
    <h2>🌟 What is JBang?</h2>
    <p><strong>JBang</strong> is a tool that allows you to run Java files as scripts — directly from the terminal — without needing to create a Maven or Gradle project. It's like using Python or Bash, but with Java!</p>

    <p>JBang compiles and runs your Java files behind the scenes, automatically handling:</p>
    <ul>
      <li>Dependency management</li>
      <li>Project setup</li>
      <li>JDK selection</li>
      <li>Script execution</li>
    </ul>

    <p>With JBang, you can write a complete Java program in a single file, include libraries with simple annotations, and run it instantly.</p>
  </section>

  <section>
    <h2>⚙️ Installing JBang</h2>

    <p>JBang supports all major OS platforms and can be installed in multiple ways:</p>
    <ul>
      <li><strong>macOS</strong>: <code>brew install jbangdev/tap/jbang</code></li>
      <li><strong>Linux</strong>: <code>curl -Ls https://sh.jbang.dev | bash</code></li>
      <li><strong>Windows</strong>: <a href="https://jbang.dev/download/">Download from jbang.dev</a> or use Scoop/Chocolatey</li>
      <li><strong>SDKMAN</strong>: <code>sdk install jbang</code></li>
    </ul>

    <p>Once installed, verify with:</p>
    <pre>jbang version</pre>
  </section>

  <section>
    <h2>🔧 Writing Your First Java Script</h2>

    <p>Create a file called <code>Hello.java</code> with the following:</p>

    <pre>//usr/bin/env jbang $0 $@ ; exit $?
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, JBang!");
    }
}</pre>

    <p>Run it:</p>
    <pre>jbang Hello.java</pre>

    <p>No project setup, no compilation step — just pure Java joy!</p>
  </section>

  <section>
    <h2>📦 Adding Dependencies</h2>

    <p>JBang allows you to add dependencies inline using <code>//DEPS</code>:</p>

    <pre>//DEPS com.squareup.okhttp3:okhttp:4.9.3
import okhttp3.OkHttpClient;
import okhttp3.Request;

public class FetchUrl {
    public static void main(String[] args) throws Exception {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
            .url("https://api.github.com")
            .build();
        var response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}</pre>

    <p>This is incredibly useful for building quick tools, integrations, or testing libraries.</p>
  </section>

  <section>
    <h2>🖇️ Advanced Features</h2>
    <ul>
      <li><strong>Top-level scripts</strong>: Java code without class wrappers (since Java 11+)</li>
      <li><strong>Template system</strong>: Reuse boilerplate with <code>jbang init --template</code></li>
      <li><strong>Alias support</strong>: Create your own local CLI tools with <code>jbang alias add</code></li>
      <li><strong>Native packaging</strong>: Convert your script to a native binary with <code>jbang export native</code></li>
    </ul>
  </section>

  <section>
    <h2>🧪 Comparing JBang with Other Tools</h2>
    <table border="1" cellpadding="10" style="border-collapse: collapse;">
      <thead>
        <tr>
          <th>Feature</th>
          <th>JBang</th>
          <th>JShell</th>
          <th>Maven</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quick scripting</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Dependency support</td>
          <td>✅</td>
          <td>Limited</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Classless top-level code</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Reusable scripts</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>💡 Use Cases</h2>
    <ul>
      <li>💼 Automating repetitive developer tasks</li>
      <li>🔬 Prototyping APIs and data transformations</li>
      <li>📦 Creating developer CLIs and tools</li>
      <li>📊 Quick data visualizations and reports</li>
      <li>📚 Teaching Java in workshops without setup overhead</li>
    </ul>
  </section>

  <section>
    <h2>📚 Resources & Links</h2>
    <ul>
      <li><a href="https://jbang.dev" target="_blank">Official JBang Website</a></li>
      <li><a href="https://github.com/jbangdev/jbang" target="_blank">GitHub Repository</a></li>
      <li><a href="https://jbang.dev/documentation/guide/latest/" target="_blank">Documentation & Examples</a></li>
    </ul>
  </section>

  <section>
    <h2>🎯 Conclusion</h2>
    <p><strong>JBang is the future of Java scripting.</strong> It strips away the verbosity and lets you use Java like a modern scripting language. Whether you're building automation tools, quick utilities, or full-on CLI apps, JBang offers a frictionless developer experience.</p>

    <p>✨ Give it a try, and Java might just become your new favorite scripting language.</p>
  </section>

</body>
</html>
  `},Gb={id:"java_a113",title:"JBang vs JShell vs Kotlin Scripting",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JBang vs JShell vs Kotlin Scripting</title>
  <meta name="description" content="A developer-friendly comparison between JBang, JShell, and Kotlin scripting for fast Java-based scripts and prototyping." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      line-height: 1.7;
      color: #333;
      background: #fefefe;
      padding: 0 1.5rem;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
    ul {
      margin-left: 1.25rem;
    }
  </style>
</head>
<body>

  <p>Java developers have long wished for scripting capabilities that are as fast and flexible as Python or Bash. With modern tooling, that dream is closer than ever. In this post, we’ll explore and compare three powerful tools that bring scripting to the JVM world:</p>

  <ul>
    <li><strong>JBang</strong>: Full-powered Java scripting with dependency support</li>
    <li><strong>JShell</strong>: REPL-based exploration tool built into the JDK</li>
    <li><strong>Kotlin Scripting</strong>: Flexible scripting with Kotlin’s concise syntax</li>
  </ul>

  <h2>🎯 Use Case Overview</h2>

  <p>Before diving into the details, let’s briefly define where each tool shines:</p>

  <ul>
    <li><strong>JBang</strong>: Great for quick scripts, CLI tools, and automation with real dependencies</li>
    <li><strong>JShell</strong>: Ideal for quick experimentation and learning Java interactively</li>
    <li><strong>Kotlin Scripting</strong>: Perfect for concise scripts, DSLs, and integration into build tools</li>
  </ul>

  <h2>🔍 Feature Comparison</h2>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>JBang</th>
        <th>JShell</th>
        <th>Kotlin Scripting</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Requires Java knowledge</td>
        <td>✅</td>
        <td>✅</td>
        <td>⚠️ Familiarity with Kotlin</td>
      </tr>
      <tr>
        <td>Scriptable with top-level code</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Dependency support</td>
        <td>✅ <code>//DEPS</code></td>
        <td>⚠️ Limited (via startup script)</td>
        <td>✅ (via gradle.kts or annotations)</td>
      </tr>
      <tr>
        <td>Runs from CLI</td>
        <td>✅</td>
        <td>✅ (REPL)</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Compilation required</td>
        <td>❌</td>
        <td>❌</td>
        <td>❌</td>
      </tr>
      <tr>
        <td>External library usage</td>
        <td>✅ (via Maven Central)</td>
        <td>⚠️ Workaround needed</td>
        <td>✅ (with script config)</td>
      </tr>
      <tr>
        <td>CLI App Development</td>
        <td>✅ (with Picocli)</td>
        <td>❌</td>
        <td>⚠️ DSL-friendly, not CLI focused</td>
      </tr>
    </tbody>
  </table>

  <h2>📜 Syntax Examples</h2>

  <h3>1. JBang Example</h3>
  <pre>//DEPS org.apache.commons:commons-lang3:3.12.0
import org.apache.commons.lang3.StringUtils;

public class Hello {
    public static void main(String[] args) {
        System.out.println(StringUtils.capitalize("hello jbang!"));
    }
}</pre>

  <h3>2. JShell Example</h3>
  <pre>jshell
jshell&gt; int a = 5;
jshell&gt; System.out.println(a * 2);</pre>

  <h3>3. Kotlin Script</h3>
  <pre>// File: hello.kts
val name = "Kotlin"
println("Hello, $name Scripting!")</pre>

  <p>To run: <code>kotlinc -script hello.kts</code></p>

  <h2>🔧 Installation Overview</h2>

  <ul>
    <li><strong>JBang</strong>: Install via <code>brew</code>, <code>sdkman</code>, or script from <a href="https://jbang.dev">jbang.dev</a></li>
    <li><strong>JShell</strong>: Comes with Java 9+ (<code>jshell</code> command)</li>
    <li><strong>Kotlin Scripting</strong>: Install <a href="https://kotlinlang.org/docs/command-line.html">Kotlin CLI tools</a></li>
  </ul>

  <h2>✅ When to Use What?</h2>

  <ul>
    <li>👨‍💻 <strong>Use JBang</strong> if you’re building quick scripts, tools, or want dependency management.</li>
    <li>📚 <strong>Use JShell</strong> for learning Java, testing ideas, or debugging APIs quickly.</li>
    <li>⚡ <strong>Use Kotlin scripting</strong> when you prefer Kotlin’s syntax and want to write concise, expressive scripts.</li>
  </ul>

  <h2>🔚 Final Thoughts</h2>

  <p>The JVM ecosystem now offers some amazing scripting tools. <strong>JBang</strong> makes Java scripting modern and powerful. <strong>JShell</strong> is excellent for interactive experimentation. And <strong>Kotlin scripting</strong> brings elegance and expressiveness to JVM scripting.</p>

  <p>Choose the tool that fits your workflow — or combine them!</p>

  <p>👉 Want a guide on <strong>creating CLI tools with JBang + Picocli</strong> or scripting APIs with Kotlin? Let me know!</p>

</body>
</html>
  `},Yb={id:"java_a114",title:"Reactive Programming – with Project Reactor or RxJava",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Reactive Programming – with Project Reactor or RxJava</title>
  <meta name="description" content="A deep dive into Reactive Programming using Project Reactor and RxJava. Learn the differences, use cases, and get hands-on examples." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>Reactive programming is a programming paradigm that deals with asynchronous data streams. Instead of executing tasks in a sequential manner, reactive programming allows you to manage streams of data asynchronously, making your programs more efficient and scalable. Two of the most popular libraries for reactive programming in Java are <strong>Project Reactor</strong> and <strong>RxJava</strong>.</p>

  <section>
    <h2>🌍 What is Reactive Programming?</h2>
    <p>Reactive programming focuses on building systems that are event-driven, non-blocking, and scalable. It allows for handling asynchronous data streams (such as events, network responses, or user input) in a declarative way. Reactive systems are inherently more responsive, resilient, and elastic.</p>

    <p>The key concepts in reactive programming are:</p>
    <ul>
      <li><strong>Observable Streams</strong>: Data that is asynchronously emitted over time.</li>
      <li><strong>Operators</strong>: Functions that allow you to manipulate the streams.</li>
      <li><strong>Backpressure</strong>: Handling the situation where the stream producer is faster than the consumer.</li>
    </ul>
  </section>

  <section>
    <h2>🚀 Project Reactor vs RxJava</h2>
    <p>Both Project Reactor and RxJava are libraries that implement the Reactive Streams specification, but they have different approaches, use cases, and features. Let's compare them based on several criteria.</p>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Project Reactor</th>
          <th>RxJava</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Developed by</td>
          <td>Spring Team</td>
          <td>ReactiveX Community</td>
        </tr>
        <tr>
          <td>JVM Compatibility</td>
          <td>Designed for JVM (Java, Kotlin, etc.)</td>
          <td>Supports JVM and other platforms (JavaScript, RxJS, etc.)</td>
        </tr>
        <tr>
          <td>Core Concepts</td>
          <td>Mono, Flux (Publisher types)</td>
          <td>Observable, Flowable</td>
        </tr>
        <tr>
          <td>Integration with Spring</td>
          <td>Perfect for Spring WebFlux and Spring Boot</td>
          <td>Can be integrated with Spring but not as seamless as Reactor</td>
        </tr>
        <tr>
          <td>Backpressure Support</td>
          <td>Fully integrated with backpressure handling</td>
          <td>Backpressure handling available in Flowable</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>More common in Spring-based projects</td>
          <td>Widely used in general Java-based projects</td>
        </tr>
      </tbody>
    </table>

    <p><strong>Conclusion:</strong> If you're working within the Spring ecosystem, <strong>Project Reactor</strong> is the better choice as it integrates seamlessly with Spring WebFlux. On the other hand, <strong>RxJava</strong> is a more general-purpose reactive library and is widely used in non-Spring-based applications.</p>
  </section>

  <section>
    <h2>🔧 Basic Usage Examples</h2>

    <h3>1. Project Reactor Example</h3>
    <p>Let's look at a simple example using Project Reactor with <code>Mono</code> (single value) and <code>Flux</code> (multiple values).</p>

    <pre>import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

public class ReactorExample {
    public static void main(String[] args) {
        // Mono: Emit a single value
        Mono<String> mono = Mono.just("Hello, Reactor!");
        mono.subscribe(System.out::println);

        // Flux: Emit multiple values
        Flux<Integer> flux = Flux.just(1, 2, 3, 4, 5);
        flux.map(i -> i * 2)
            .subscribe(System.out::println);
    }
}</pre>

    <p>In this example, <code>Mono.just</code> emits a single value, while <code>Flux.just</code> emits multiple values, which can be manipulated using operators like <code>map</code>.</p>

    <h3>2. RxJava Example</h3>
    <p>Here's a similar example in RxJava using <code>Observable</code>:</p>

    <pre>import io.reactivex.Observable;

public class RxJavaExample {
    public static void main(String[] args) {
        // Observable: Emit multiple values
        Observable<Integer> observable = Observable.just(1, 2, 3, 4, 5);
        observable.map(i -> i * 2)
                  .subscribe(System.out::println);

        // Single: Emit a single value
        Observable<String> single = Observable.just("Hello, RxJava!");
        single.subscribe(System.out::println);
    }
}</pre>

    <p>RxJava uses <code>Observable</code> to represent streams of data and supports various operators like <code>map</code> and <code>subscribe</code>.</p>
  </section>

  <section>
    <h2>⚡ Advanced Features</h2>

    <h3>Backpressure Handling</h3>
    <p>Both Project Reactor and RxJava support backpressure, allowing you to control the flow of data when the consumer cannot keep up with the producer. For example, in Reactor, you can use the <code>onBackpressureBuffer</code> operator to buffer elements if the downstream consumer is slow.</p>

    <pre>Flux<Integer> flux = Flux.range(1, 1000)
        .onBackpressureBuffer();
    flux.subscribe(System.out::println);
</pre>

    <p>In RxJava, backpressure can be controlled using <code>Flowable</code>:</p>

    <pre>Flowable<Integer> flowable = Flowable.range(1, 1000)
        .onBackpressureBuffer();
    flowable.subscribe(System.out::println);
</pre>

    <h3>Composing Streams</h3>
    <p>Both libraries provide powerful operators to compose multiple streams, including <code>flatMap</code>, <code>concatMap</code>, and <code>merge</code>. This is essential for handling asynchronous tasks and creating complex pipelines.</p>
  </section>

  <section>
    <h2>🚀 Use Cases</h2>
    <ul>
      <li><strong>Real-Time Data</strong>: Use reactive programming for applications like chat systems, live dashboards, and event-driven systems.</li>
      <li><strong>Asynchronous APIs</strong>: Handle multiple I/O operations (e.g., database queries, network requests) without blocking the main thread.</li>
      <li><strong>Microservices</strong>: Reactive programming is ideal for building scalable, non-blocking microservices.</li>
      <li><strong>UIs</strong>: Build interactive and responsive UIs by combining reactive streams with JavaFX or similar frameworks.</li>
    </ul>
  </section>

  <section>
    <h2>🔚 Conclusion</h2>
    <p>Both Project Reactor and RxJava provide powerful tools for reactive programming. While Reactor is the go-to choice for Spring developers, RxJava remains a popular library for more general-purpose Java applications.</p>

    <p>Whether you're building an enterprise-grade system or just experimenting with asynchronous data, understanding and using reactive programming will significantly improve the responsiveness and scalability of your application.</p>

    <p>Have questions or need more examples? Drop a comment below!</p>
  </section>

</body>
</html>
  `},Qb={id:"java_a115",title:"Building a Reactive REST API with Spring WebFlux and Project Reactor",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Building a Reactive REST API with Spring WebFlux and Project Reactor</title>
  <meta name="description" content="Learn how to build a scalable and non-blocking REST API using Spring WebFlux and Project Reactor. Perfect for high-performance applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 0.75rem;
      text-align: left;
    }
    th {
      background: #f4f4f4;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>In modern application development, especially for scalable, high-performance systems, reactive programming has become an essential paradigm. With the help of tools like **Spring WebFlux** and **Project Reactor**, you can build efficient, non-blocking, and asynchronous REST APIs. This blog post will guide you through creating a **Reactive REST API** using **Spring WebFlux** and **Project Reactor**.</p>

  <section>
    <h2>🌍 What is Reactive Programming?</h2>
    <p>Reactive programming allows you to write code that reacts to asynchronous data streams. Instead of waiting for each task to complete before moving on to the next, reactive programming handles tasks concurrently and asynchronously. This is especially useful when building scalable, high-performance systems like REST APIs.</p>

    <p>The core components of reactive programming are:</p>
    <ul>
      <li><strong>Observable Streams</strong>: Data that is emitted asynchronously.</li>
      <li><strong>Operators</strong>: Functions that help manipulate and transform streams.</li>
      <li><strong>Backpressure</strong>: Handling situations when a producer generates data faster than the consumer can handle.</li>
    </ul>
  </section>

  <section>
    <h2>🔧 Setting Up Spring WebFlux</h2>
    <p>Before we dive into coding, let’s set up our project. You can use **Spring Boot** with **Spring WebFlux** for building your reactive REST API.</p>

    <h3>1. Set Up Spring Boot Project</h3>
    <p>Head over to <a href="https://start.spring.io" target="_blank">Spring Initializr</a> and create a new Spring Boot project with the following dependencies:</p>
    <ul>
      <li><strong>Spring WebFlux</strong></li>
      <li><strong>Spring Boot DevTools</strong></li>
      <li><strong>Project Lombok</strong> (for reducing boilerplate code)</li>
      <li><strong>Spring Data MongoDB</strong> (optional, for database integration)</li>
    </ul>
    <p>Download and unzip the project, then open it in your favorite IDE.</p>

    <h3>2. Add Dependencies in pom.xml</h3>
    <pre>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-webflux&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-mongodb&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>
  </section>

  <section>
    <h2>👨‍💻 Building the Reactive Controller</h2>
    <p>Now that our project is set up, let’s build a **Reactive REST Controller**. We'll create an API for managing books in a library using **Project Reactor**'s <code>Mono</code> and <code>Flux</code> types to handle single and multiple values asynchronously.</p>

    <h3>1. Create a Book Model</h3>
    <pre>import lombok.Data;

@Data
public class Book {
    private String id;
    private String title;
    private String author;
}</pre>

    <h3>2. Create a Reactive Repository</h3>
    <p>Next, let’s create a repository to interact with the database in a reactive manner. We will use **MongoDB** for this example.</p>
    <pre>import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface BookRepository extends ReactiveMongoRepository<Book, String> {
}</pre>

    <h3>3. Build the Reactive Controller</h3>
    <pre>import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/books")
    public Flux<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public Mono<Book> addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}
</pre>

    <p>In the code above:</p>
    <ul>
      <li><code>@GetMapping</code> returns a <code>Flux</code>, which represents a stream of books.</li>
      <li><code>@PostMapping</code> accepts a <code>Mono</code>, representing a single book.</li>
    </ul>
  </section>

  <section>
    <h2>🔌 Running the Application</h2>
    <p>To run the application, simply run the <code>SpringApplication.run</code> method in your main class:</p>

    <pre>import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactiveApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReactiveApiApplication.class, args);
    }
}
</pre>

    <p>Once the application is running, you can interact with the API at:</p>
    <ul>
      <li>GET <code>/books</code> to fetch all books.</li>
      <li>POST <code>/books</code> to add a new book.</li>
    </ul>
    <p>You can test the API using **Postman** or **cURL**.</p>
  </section>

  <section>
    <h2>⚡ Key Features of Reactive REST API</h2>
    <ul>
      <li><strong>Non-blocking I/O:</strong> The API responds without blocking threads, allowing for high concurrency.</li>
      <li><strong>Backpressure Handling:</strong> Reactive APIs can deal with a situation where the consumer can't keep up with the rate of data production.</li>
      <li><strong>Scalability:</strong> Since the application doesn't block threads, it can scale efficiently with minimal hardware resources.</li>
    </ul>
  </section>

  <section>
    <h2>🔚 Conclusion</h2>
    <p>In this post, we’ve built a simple **Reactive REST API** using **Spring WebFlux** and **Project Reactor**. We explored how reactive programming helps with building non-blocking, scalable systems. With this setup, you can now handle large amounts of traffic in your applications without worrying about thread contention.</p>

    <p>Want to dive deeper into **WebFlux** or integrate other databases like **Cassandra** or **Redis**? Let me know in the comments!</p>
  </section>

</body>
</html>
  `},Xb={id:"java_a116",title:"Java with AI",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Java with AI – How Java Developers Can Leverage Artificial Intelligence</title>
  <meta name="description" content="Explore how Java developers can use AI libraries and tools like Deeplearning4j, DL4J, and OpenAI integrations to build intelligent applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <p>AI isn't just for Python developers. With a strong ecosystem and enterprise-grade tooling, Java can also be a powerful ally in building intelligent applications. In this post, we'll explore the top libraries, use cases, and strategies for using Java in the world of Artificial Intelligence.</p>

  <section>
    <h2>🧠 Why Use Java for AI?</h2>
    <ul>
      <li><strong>Scalability</strong>: Java is known for its scalability and multithreading capabilities.</li>
      <li><strong>Tooling & Ecosystem</strong>: Java offers robust IDEs, frameworks, and deployment tools.</li>
      <li><strong>Enterprise Integration</strong>: Java is widely used in enterprise applications where AI is increasingly being embedded.</li>
    </ul>
  </section>

  <section>
    <h2>🔧 Popular AI Libraries in Java</h2>
    <ul>
      <li><strong>Deeplearning4j (DL4J)</strong>: Java’s most popular deep learning library.</li>
      <li><strong>ND4J</strong>: Scientific computing library (NumPy for Java).</li>
      <li><strong>Smile</strong>: Machine learning library with classical algorithms.</li>
      <li><strong>JavaCPP</strong>: Java bindings for native C++ libraries like TensorFlow or PyTorch.</li>
      <li><strong>JPMML</strong>: Java support for PMML models trained in Python/R.</li>
    </ul>
  </section>

  <section>
    <h2>📚 Example: Basic Neural Network with Deeplearning4j</h2>
    <pre>import org.deeplearning4j.nn.conf.MultiLayerConfiguration;
import org.deeplearning4j.nn.conf.NeuralNetConfiguration;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;
import org.deeplearning4j.optimize.listeners.ScoreIterationListener;

MultiLayerConfiguration conf = new NeuralNetConfiguration.Builder()
    .list()
    .layer(0, new DenseLayer.Builder().nIn(4).nOut(3).activation(Activation.RELU).build())
    .layer(1, new OutputLayer.Builder(LossFunctions.LossFunction.NEGATIVELOGLIKELIHOOD)
        .nIn(3).nOut(3).activation(Activation.SOFTMAX).build())
    .build();

MultiLayerNetwork model = new MultiLayerNetwork(conf);
model.init();
model.setListeners(new ScoreIterationListener(10));</code></pre>

    <p>This snippet shows a basic configuration of a neural network using DL4J. It’s suitable for simple classification tasks like the Iris dataset.</p>
  </section>

  <section>
    <h2>🧩 Integrating AI APIs (e.g., OpenAI, Hugging Face)</h2>
    <p>Java can integrate with AI APIs like <strong>OpenAI</strong> using HTTP clients:</p>

    <pre>HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.openai.com/v1/completions"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());</code></pre>

    <p>This enables Java apps to use models like GPT-4 or Claude for summarization, chat, or code generation.</p>
  </section>

  <section>
    <h2>🚀 Use Cases of AI in Java Projects</h2>
    <ul>
      <li>💬 Chatbots for enterprise support</li>
      <li>📈 Predictive analytics in banking/finance</li>
      <li>🔍 Smart search and recommendations</li>
      <li>🧾 Document classification and OCR</li>
      <li>⚠️ Fraud detection using anomaly detection</li>
    </ul>
  </section>

  <section>
    <h2>🔮 Future of Java in AI</h2>
    <p>As AI continues to evolve, Java is well-positioned to handle mission-critical AI workloads, especially in sectors where security, maintainability, and performance are key. With the rise of GraalVM and cloud-native Java (Quarkus, Micronaut), building fast and reactive AI microservices is more accessible than ever.</p>
  </section>

  <section>
    <h2>📌 Final Thoughts</h2>
    <p>Java might not be the first language that comes to mind for AI, but its tooling, ecosystem, and enterprise presence make it a solid choice. Whether you're integrating with powerful APIs or training models with DL4J, Java gives you the stability of a mature platform combined with the innovation of modern AI.</p>

    <p>🔥 Want a hands-on tutorial for AI + Java with Spring Boot? Or a real-world chatbot example? Let me know in the comments!</p>
  </section>

</body>
</html>
  `},Zb={id:"java_a117",title:"Using OpenAI API in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Using OpenAI API in Spring Boot – Multi-Step Conversation</title>
  <meta name="description" content="Build a multi-turn chat endpoint in Spring Boot using OpenAI's API and test it with JUnit." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2c3e50;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #1a202c;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #3182ce;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <p>Want to build a Java backend that can hold a real conversation with OpenAI’s GPT model? Let’s go beyond single-turn prompts and add support for multi-turn chat using Spring Boot and the OpenAI API. We’ll also include a test that covers a 3–4 step conversation!</p>

  <h2>📦 Step 1: Maven Dependencies</h2>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
    &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>🧠 Step 2: ChatController.java</h2>
  <pre>package com.example.openai;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private static final String OPENAI_API_KEY = "your-openai-api-key";

    @PostMapping
    public String chat(@RequestBody List&lt;Map&lt;String, String&gt;&gt; messages) throws Exception {
        String formattedMessages = messages.stream()
            .map(msg -&gt; String.format("{\\"role\\": \\"%s\\", \\"content\\": \\"%s\\"}",
                    msg.get("role"), msg.get("content")))
            .collect(Collectors.joining(","));

        String requestBody = """
        {
          "model": "gpt-3.5-turbo",
          "messages": [%s]
        }
        """.formatted(formattedMessages);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + OPENAI_API_KEY)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}</pre>

  <h2>🧪 Step 3: JUnit Test – Multi-Turn Chat</h2>
  <pre>package com.example.openai;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class ChatControllerTest {

    @Test
    void testMultiStepChat() {
        RestTemplate restTemplate = new RestTemplate();

        String url = "http://localhost:8080/api/chat";

        List&lt;Map&lt;String, String&gt;&gt; conversation = new ArrayList&lt;&gt;();
        conversation.add(Map.of("role", "user", "content", "Hi, who are you?"));
        conversation.add(Map.of("role", "assistant", "content", "I'm an AI trained by OpenAI. How can I help?"));
        conversation.add(Map.of("role", "user", "content", "What's the capital of Germany?"));
        conversation.add(Map.of("role", "assistant", "content", "The capital of Germany is Berlin."));
        conversation.add(Map.of("role", "user", "content", "Is it a good place to visit?"));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;List&lt;Map&lt;String, String&gt;&gt;&gt; request = new HttpEntity&lt;&gt;(conversation, headers);

        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(url, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("Berlin") || response.getBody().toLowerCase().contains("yes"));
    }
}</pre>

  <h2>✅ Expected Result</h2>
  <p>You should get a response that continues the conversation naturally, like:</p>
  <pre>{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Yes, Berlin is a vibrant city with rich history and culture!"
      }
    }
  ]
}</pre>

  <h2>💡 Tips</h2>
  <ul>
    <li>Use a logging library to persist message history.</li>
    <li>Store your API key in <code>application.yml</code> securely.</li>
    <li>Add streaming response support with WebClient for real-time output.</li>
  </ul>

  <h2>📌 Conclusion</h2>
  <p>You now have a Spring Boot app that can maintain chat history and simulate real conversations with OpenAI’s Chat API. Expand this to a full chatbot, integrate into Slack, or embed in web apps!</p>

</body>
</html>
  `},e1={id:"java_a118",title:"Spring Boot with AI",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Spring Boot with AI – Bringing Intelligence to Your Backend</title>
  <meta name="description" content="Learn how to integrate AI with Spring Boot using APIs like OpenAI and libraries like DL4J for intelligent applications." />
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #1e1e1e;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 1.5rem;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <p>Spring Boot is a popular framework for building robust Java applications. What if we could add intelligence to those apps? With the rise of AI APIs and Java ML libraries, integrating AI into your backend is easier than ever.</p>

  <section>
    <h2>🤖 What Kind of AI Can You Add to Spring Boot?</h2>
    <ul>
      <li><a href="https://codejava4u.blogspot.com/2025/04/using-openai-api-in-spring-boot.html" target="_blank"><strong>Text Generation</strong> – ChatGPT-style prompts via OpenAI</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/sentiment-analysis-using-hugging-face.html" target="_blank"><strong>Sentiment Analysis</strong> – Using Hugging Face APIs</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/building-recommendation-system-in.html" target="_blank"><strong>Recommendation Systems</strong></a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/image-recognition-with-deep-learning.html" target="_blank"><strong>Image Recognition</strong> – With deep learning frameworks</a></li>
      <li><a href="https://codejava4u.blogspot.com/2025/04/voice-chatbots-ai-assisted.html" target="_blank"><strong>Voice & Chatbots</strong> – AI-assisted conversational apps</a></li>
    </ul>
  </section>

  <section>
    <h2>🔌 Example 1: Using OpenAI API in Spring Boot</h2>
    <h3>1. Add dependencies (Maven)</h3>
    <pre>&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;</pre>

    <h3>2. Create a REST controller to call the AI API</h3>
    <pre>import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.net.http.HttpRequest.*;
import java.util.Map;

@RestController
@RequestMapping("/ai")
public class AiController {

    private static final String API_KEY = "your-openai-api-key";

    @PostMapping("/generate")
    public String generateText(@RequestBody Map&lt;String, String&gt; payload) throws Exception {
        String prompt = payload.get("prompt");

        String requestBody = """
            {
              "model": "gpt-3.5-turbo",
              "messages": [{"role": "user", "content": "%s"}]
            }
        """.formatted(prompt);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.openai.com/v1/chat/completions"))
            .header("Authorization", "Bearer " + API_KEY)
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(requestBody))
            .build();

        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
</pre>

    <h3>3. Test with cURL or Postman</h3>
    <pre>curl -X POST http://localhost:8080/ai/generate   -H "Content-Type: application/json"   -d '{"prompt": "Write a Java joke."}'</pre>
  </section>

  <section>
    <h2>🧠 Example 2: Sentiment Analysis Using Hugging Face API</h2>
    <p>You can use the Hugging Face Inference API similarly to analyze sentiment.</p>
    <pre>HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english"))
    .header("Authorization", "Bearer YOUR_HF_API_KEY")
    .POST(HttpRequest.BodyPublishers.ofString("{"inputs": "This product is amazing!"}"))
    .build();</pre>
  </section>

  <section>
    <h2>🧮 Example 3: Train Your Own ML Model (Deeplearning4j)</h2>
    <p>Want to train a model right inside your Java app? Use DL4J (Deeplearning4j):</p>
    <pre>// Configure a neural network
MultiLayerConfiguration conf = new NeuralNetConfiguration.Builder()
  .list()
  .layer(new DenseLayer.Builder().nIn(10).nOut(5).build())
  .layer(new OutputLayer.Builder().nIn(5).nOut(2).build())
  .build();
</pre>
    <p>Train the model and expose it via a Spring Boot REST endpoint.</p>
  </section>

  <section>
    <h2>💡 Real-World Use Cases for Spring + AI</h2>
    <ul>
      <li>🛍 E-commerce: Product recommendations, smart search</li>
      <li>🏦 FinTech: Fraud detection, predictive analysis</li>
      <li>📞 Customer Support: Chatbots and voice assistants</li>
      <li>📃 Docs & Content: Summarization, translation, classification</li>
    </ul>
  </section>

  <section>
    <h2>📦 Bonus: Spring AI Project (Preview)</h2>
    <p><strong>Spring AI</strong> is an experimental project from the Spring team that makes it easier to integrate LLMs into Spring Boot apps. Stay tuned!</p>
    <p>GitHub: <a href="https://github.com/spring-projects/spring-ai" target="_blank">spring-projects/spring-ai</a></p>
  </section>

  <section>
    <h2>🧭 Conclusion</h2>
    <p>Spring Boot is a rock-solid platform for building backends, and now with AI integrations, it’s also smart. Whether you’re consuming APIs like OpenAI or training models yourself with DL4J, Java devs have powerful tools to build intelligent apps at scale.</p>
    <p>🔥 Want to see a chatbot with Spring Boot and WebSocket? Or a LangChain-style app in Java? Let me know!</p>
  </section>

</body>
</html>
  `},t1={id:"java_a119",title:"Sentiment Analysis Using Hugging Face API in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sentiment Analysis Using Hugging Face API in Spring Boot</title>
  <meta name="description" content="Learn how to use Hugging Face’s Sentiment Analysis models in your Spring Boot app and expose a simple REST API for sentiment analysis." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>In this post, we'll demonstrate how to perform sentiment analysis using Hugging Face's pre-trained models in a Spring Boot application. The app will expose a simple REST API endpoint where users can submit text, and the API will return whether the sentiment of the text is positive or negative.</p>

  <h2>📦 Step 1: Maven Dependencies</h2>
  <p>To get started, we'll add the necessary dependencies to our <code>pom.xml</code> file for Spring Boot and HTTP client support:</p>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>⚡ Step 2: Controller for Sentiment Analysis</h2>
  <p>In this step, we will create a Spring Boot <code>RestController</code> that will handle the sentiment analysis requests. It will communicate with the Hugging Face API to analyze the text.</p>
  <pre>package com.example.huggingface;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;

@RestController
@RequestMapping("/api/sentiment")
public class SentimentController {

    private static final String HF_TOKEN = "your-huggingface-api-token";
    private static final String MODEL_ID = "distilbert-base-uncased-finetuned-sst-2-english"; // Hugging Face model for sentiment analysis

    @PostMapping
    public String analyzeSentiment(@RequestBody String text) throws Exception {
        String requestBody = "{ "inputs": "" + text.replace(""", "\\"") + "" }";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-inference.huggingface.co/models/" + MODEL_ID))
            .header("Authorization", "Bearer " + HF_TOKEN)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}</pre>

  <h2>🔑 Hugging Face Model Selection</h2>
  <p>For sentiment analysis, we’re using the <code>distilbert-base-uncased-finetuned-sst-2-english</code> model from Hugging Face. This model is fine-tuned specifically for sentiment analysis (positive or negative) on the SST-2 dataset, but you can choose other models if needed.</p>
  <ul>
    <li><a href="https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english">distilbert-base-uncased-finetuned-sst-2-english</a></li>
    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
  </ul>

  <h2>🧪 Step 3: Writing the Test Case</h2>
  <p>Let's write a simple JUnit test to ensure our sentiment analysis API works correctly.</p>
  <pre>package com.example.huggingface;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class SentimentControllerTest {

    @Test
    void testSentimentAnalysis() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/sentiment";

        String text = "I love using Hugging Face models! They are amazing!";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(text, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(url, request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().toLowerCase().contains("positive"));
    }
}</pre>

  <h2>📌 Sample Response</h2>
  <p>When you send a request with the text "I love using Hugging Face models! They are amazing!", you should get a response indicating that the sentiment is positive:</p>
  <pre>[
  {
    "label": "POSITIVE",
    "score": 0.9998547439575195
  }
]</pre>

  <h2>💡 Tips for Improvement</h2>
  <ul>
    <li>Use the Hugging Face API’s <code>multi-class</code> classification for more nuanced sentiment analysis (e.g., Happy, Sad, Angry, etc.)</li>
    <li>Store your API token in a secure location (like environment variables or Spring's <code>application.yml</code>)</li>
    <li>Use <code>WebClient</code> in Spring for asynchronous requests if the model takes longer than usual to respond</li>
  </ul>

  <h2>🎉 Conclusion</h2>
  <p>By following this tutorial, you've successfully built a Spring Boot API that integrates with Hugging Face's powerful NLP models for sentiment analysis. This could easily be expanded to classify text sentiment in real-world applications like reviews, social media, or customer feedback.</p>

  <p>Feel free to explore Hugging Face's library for other models suited to your needs!</p>

</body>
</html>
  `},n1={id:"java_a120",title:"Building a Recommendation System in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Building a Recommendation System in Spring Boot</title>
  <meta name="description" content="Learn how to build a simple content-based recommendation system using Spring Boot and Hugging Face API to recommend items based on user preferences or content similarity." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Recommendation systems are widely used in platforms like Netflix, Amazon, and Spotify to suggest relevant content to users. In this post, we will learn how to build a simple **content-based recommendation system** using **Spring Boot** and **Hugging Face API**.</p>

  <h2>💡 What is a Content-Based Recommendation System?</h2>
  <p>Content-based filtering recommends items based on their features and the preferences of users. For example, it might recommend movies similar to a user's watched movie based on genre, director, or actors.</p>
  <ul>
    <li>**User preferences**: What the user likes (e.g., genres, artists, topics, etc.)</li>
    <li>**Item features**: Information about items (e.g., movie plots, product descriptions, etc.)</li>
  </ul>

  <h2>📦 Step 1: Setup Spring Boot Project</h2>
  <p>Let’s start by adding necessary dependencies in our <code>pom.xml</code>:</p>
  <pre>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</pre>

  <h2>🔨 Step 2: Building the Recommendation Controller</h2>
  <p>We will create a Spring Boot controller that handles incoming requests for recommendations. We’ll use text similarity (cosine similarity or embeddings) to recommend similar content to the user.</p>
  <pre>package com.example.recommendation;

import org.springframework.web.bind.annotation.*;
import java.net.http.*;
import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {

    private static final String HF_TOKEN = "your-huggingface-api-token";
    private static final String MODEL_ID = "sentence-transformers/all-MiniLM-L6-v2";  // Model to generate embeddings

    @PostMapping
    public List&lt;String&gt; getRecommendations(@RequestBody String userPreferences) throws Exception {
        // Use Hugging Face model to generate embeddings for user input and item descriptions
        String requestBody = "{ "inputs": "" + userPreferences.replace(""", "\\"") + "" }";

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api-inference.huggingface.co/models/" + MODEL_ID))
            .header("Authorization", "Bearer " + HF_TOKEN)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(requestBody))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Get recommendations based on cosine similarity between embeddings (simplified here)
        List&lt;String&gt; recommendedItems = generateRecommendations(response.body());

        return recommendedItems;
    }

    private List&lt;String&gt; generateRecommendations(String response) {
        // Here we would process the embeddings and match with item features.
        // In a real-world scenario, you'd compare embeddings to a database of items.
        // For simplicity, we return some static recommendations.
        return Arrays.asList("Item 1", "Item 2", "Item 3", "Item 4");
    }
}</pre>

  <h2>🔑 Hugging Face Model Selection</h2>
  <p>In the above code, we are using the <code>sentence-transformers/all-MiniLM-L6-v2</code> model, which is designed for generating embeddings from text. This model converts text (such as user preferences or item descriptions) into numerical vectors, which can then be compared to recommend similar items.</p>
  <ul>
    <li><a href="https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2">sentence-transformers/all-MiniLM-L6-v2</a></li>
    <li><a href="https://huggingface.co/bert-base-uncased">bert-base-uncased</a></li>
  </ul>

  <h2>🧪 Step 3: Writing the Test Case</h2>
  <p>Next, let's write a simple JUnit test to verify that our recommendation system works as expected.</p>
  <pre>package com.example.recommendation;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class RecommendationControllerTest {

    @Test
    void testGetRecommendations() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/recommendations";

        String userPreferences = "I love action movies with superheroes and thrillers";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity&lt;String&gt; request = new HttpEntity&lt;&gt;(userPreferences, headers);
        ResponseEntity&lt;List&lt;String&gt;&gt; response = restTemplate.exchange(url, HttpMethod.POST, request, List.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().size() > 0);
    }
}</pre>

  <h2>📌 Sample Response</h2>
  <p>Once you call the recommendation API with the preferences text, the system should return a list of recommended items:</p>
  <pre>[
  "Item 1: Avengers: Endgame",
  "Item 2: The Dark Knight",
  "Item 3: Iron Man",
  "Item 4: Spider-Man: No Way Home"
]</pre>

  <h2>💡 Tips for Further Improvement</h2>
  <ul>
    <li>Instead of static recommendations, store item descriptions in a database and compare the embeddings for better results.</li>
    <li>Use more sophisticated recommendation models such as collaborative filtering in addition to content-based filtering.</li>
    <li>Consider implementing personalization by incorporating user profiles or historical behavior for improved recommendations.</li>
  </ul>

  <h2>🎉 Conclusion</h2>
  <p>Congratulations! You’ve now built a basic recommendation system that suggests items based on content similarity using Spring Boot and Hugging Face’s APIs. This approach can be extended to build more complex systems by incorporating features such as collaborative filtering, matrix factorization, and deep learning models.</p>

  <p>Feel free to explore the Hugging Face API to discover more advanced models for text similarity and recommendation systems!</p>

</body>
</html>
  `},r1={id:"java_a121",title:"Image Recognition with Deep Learning Frameworks",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Image Recognition with Deep Learning Frameworks</title>
  <meta name="description" content="Learn how to build an image recognition system using deep learning frameworks like TensorFlow and PyTorch, with Java and Python integration." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Image recognition is at the heart of many real-world AI applications—from facial recognition to autonomous vehicles. In this post, we'll walk through building an image recognition system using Python-based deep learning frameworks like TensorFlow and PyTorch. We'll also touch on integrating it with a Java backend using REST APIs.</p>

  <h2>🚀 Tools & Frameworks</h2>
  <ul>
    <li><strong>TensorFlow / PyTorch</strong> – for deep learning model development</li>
    <li><strong>Flask</strong> – for serving the model as an API</li>
    <li><strong>Java (Spring Boot)</strong> – to consume the image recognition service</li>
  </ul>

  <h2>🧰 Step 1: Training or Using a Pretrained Model</h2>
  <p>We'll use a pretrained model like <code>ResNet50</code> from TensorFlow or PyTorch's torchvision.</p>

  <h3>🧠 Using ResNet50 with TensorFlow</h3>
  <pre>import tensorflow as tf
from tensorflow.keras.applications import resnet50
from tensorflow.keras.preprocessing import image
import numpy as np

model = resnet50.ResNet50(weights='imagenet')

def predict_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = resnet50.preprocess_input(x)
    preds = model.predict(x)
    return resnet50.decode_predictions(preds, top=3)[0]</pre>

  <h2>🌐 Step 2: Serving the Model via Flask</h2>
  <p>Wrap the model into a REST API using Flask:</p>

  <pre>from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    file.save("input.jpg")
    preds = predict_image("input.jpg")
    return jsonify(preds)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</pre>

  <h2>☕ Step 3: Consuming API from Java (Spring Boot)</h2>
  <p>Send an image file to the Flask service from your Spring Boot app:</p>

  <pre>@RestController
public class ImageController {

    @PostMapping("/analyze")
    public String analyzeImage() throws IOException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap&lt;String, Object&gt; body = new LinkedMultiValueMap&lt;&gt;();
        body.add("file", new FileSystemResource("src/main/resources/image.jpg"));

        HttpEntity&lt;MultiValueMap&lt;String, Object&gt;&gt; requestEntity = new HttpEntity&lt;&gt;(body, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity("http://localhost:5000/predict", requestEntity, String.class);

        return response.getBody();
    }
}</pre>

  <h2>📷 Try It Out</h2>
  <ul>
    <li>Download any sample image (e.g., cat, car, etc.)</li>
    <li>Start the Flask server: <code>python app.py</code></li>
    <li>Run your Spring Boot app</li>
    <li>Call the endpoint: <code>POST /analyze</code></li>
  </ul>

  <h2>💡 Optional: PyTorch Alternative</h2>
  <p>Here's how you can use PyTorch for the same task:</p>
  <pre>from torchvision import models, transforms
from PIL import Image
import torch

model = models.resnet50(pretrained=True)
model.eval()

def predict(img_path):
    img = Image.open(img_path)
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
    ])
    img_tensor = transform(img).unsqueeze(0)
    output = model(img_tensor)
    probs = torch.nn.functional.softmax(output[0], dim=0)
    return probs.topk(3)</pre>

  <h2>📌 Use Cases</h2>
  <ul>
    <li>Retail: Product image recognition</li>
    <li>Security: Surveillance & facial recognition</li>
    <li>Healthcare: Medical image diagnosis</li>
    <li>Automotive: Road sign & obstacle detection</li>
  </ul>

  <h2>🎯 Conclusion</h2>
  <p>We’ve successfully built an image recognition pipeline using deep learning frameworks and integrated it into a Java-based system via REST APIs. This hybrid approach lets you use Python’s ML ecosystem and Java’s backend power together.</p>

  <p>Next steps? Try adding custom models or real-time streaming input!</p>

</body>
</html>
  `},o1={id:"java_a122",title:"Voice & Chatbots – AI-Assisted Conversational Apps",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Voice & Chatbots – AI-Assisted Conversational Apps</title>
  <meta name="description" content="Explore how to build voice and chatbot-based conversational applications using AI tools like OpenAI and Dialogflow with Java and Spring Boot." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    ul {
      margin-left: 1.5rem;
    }
  </style>
</head>
<body>
  <p>Conversational AI has transformed the way users interact with applications. From customer service bots to voice-based virtual assistants, building intelligent chat interfaces is easier than ever with tools like OpenAI, Dialogflow, and Spring Boot. In this article, we'll look at how to design, implement, and integrate chatbot and voice assistants into your apps.</p>

  <h2>🚀 Why Conversational Interfaces?</h2>
  <ul>
    <li>Improve user experience with natural interaction</li>
    <li>Automate FAQs, bookings, and support</li>
    <li>Enable voice control for accessibility and IoT</li>
  </ul>

  <h2>🧠 Tools for AI-Powered Conversations</h2>
  <ul>
    <li><strong>OpenAI GPT (ChatGPT API)</strong> – Natural language understanding & generation</li>
    <li><strong>Dialogflow</strong> – NLP + multi-channel chatbot development</li>
    <li><strong>Spring Boot</strong> – Backend framework to integrate services</li>
    <li><strong>Twilio / Web Speech API</strong> – For voice-based interaction</li>
  </ul>

  <h2>💬 Chatbot with OpenAI + Spring Boot</h2>
  <p>Using the <code>/v1/chat/completions</code> endpoint from OpenAI, you can create an intelligent chatbot easily.</p>

  <h3>🧩 Sample Java Service</h3>
  <pre>@Service
public class ChatService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String askGPT(String userMessage) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth("YOUR_OPENAI_API_KEY");

        Map&lt;String, Object&gt; body = Map.of(
            "model", "gpt-3.5-turbo",
            "messages", List.of(
                Map.of("role", "user", "content", userMessage)
            )
        );

        HttpEntity&lt;Map&lt;String, Object&gt;&gt; request = new HttpEntity&lt;&gt;(body, headers);
        ResponseEntity&lt;String&gt; response = restTemplate.postForEntity(
            "https://api.openai.com/v1/chat/completions",
            request,
            String.class
        );

        // Parse and return assistant's response
        return response.getBody(); // Simplified
    }
}</pre>

  <h3>💡 Example Controller</h3>
  <pre>@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/chat")
    public String chat(@RequestBody String userMessage) {
        return chatService.askGPT(userMessage);
    }
}</pre>

  <h2>🧠 Voice Input with Web Speech API (Browser-side)</h2>
  <pre>&lt;script&gt;
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    sendToBackend(text);
  };
  recognition.start();
&lt;/script&gt;</pre>

  <h2>📞 Voice Bot with Twilio</h2>
  <p>You can use Twilio to build a programmable voice assistant that connects with your GPT backend.</p>
  <pre>// In Twilio Function
exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say("Hello! Please ask your question after the beep.");
  twiml.record({
    transcribe: true,
    transcribeCallback: '/transcribe',
    maxLength: 30
  });
  callback(null, twiml);
};</pre>

  <h2>🤖 Alternative: Dialogflow Integration</h2>
  <p>Dialogflow supports rich conversation design, built-in NLP, and deployment on platforms like WhatsApp, Slack, and web.</p>
  <ul>
    <li>Create an agent in Dialogflow</li>
    <li>Train intents and responses</li>
    <li>Connect via Webhook to Spring Boot</li>
  </ul>

  <h2>🔌 Example Dialogflow Webhook</h2>
  <pre>@PostMapping("/dialogflow-webhook")
public Map&lt;String, Object&gt; handleWebhook(@RequestBody Map&lt;String, Object&gt; request) {
    String queryText = ((Map&lt;String, Object&gt;) request.get("queryResult")).get("queryText").toString();
    String reply = chatService.askGPT(queryText);
    return Map.of("fulfillmentText", reply);
}</pre>

  <h2>✅ Summary</h2>
  <ul>
    <li>Use GPT APIs for powerful free-form conversation</li>
    <li>Use Dialogflow for structured chatbot flows</li>
    <li>Use Twilio + Speech APIs for voice input/output</li>
    <li>Java (Spring Boot) serves as a powerful orchestrator</li>
  </ul>

  <h2>🔮 What’s Next?</h2>
  <ul>
    <li>Build a chatbot to integrate with customer support tickets</li>
    <li>Train your model with domain-specific FAQs</li>
    <li>Add text-to-speech for accessibility</li>
  </ul>

  <p>🎉 Let’s make Java apps more conversational!</p>

</body>
</html>
  `},i1={id:"java_a123",title:"Real-Time Camera Input for Image Recognition",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Real-Time Camera Input for Image Recognition</title>
  <meta name="description" content="Build an AI-powered image recognition system using real-time camera input via browser and Python-based deep learning." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
    video, canvas {
      border: 2px solid #ccc;
      border-radius: 8px;
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
      background: #2b6cb0;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #2c5282;
    }
  </style>
</head>
<body>

  <p>Imagine pointing your webcam at an object and instantly getting a prediction of what it is—just like Google Lens! In this guide, we’ll connect your browser's camera to a backend AI model built using TensorFlow or PyTorch, all in real-time.</p>

  <h2>🔧 Tech Stack</h2>
  <ul>
    <li><strong>HTML5 + JavaScript</strong> – to access webcam and capture frames</li>
    <li><strong>Flask</strong> (Python) – to serve the model and process images</li>
    <li><strong>TensorFlow or PyTorch</strong> – for the image classification model</li>
  </ul>

  <h2>🎬 Step 1: HTML + JS for Webcam Input</h2>
  <p>Use the <code>getUserMedia()</code> API to stream webcam video, and capture frames as images.</p>

  <pre>&lt;video id="video" width="480" height="360" autoplay&gt;&lt;/video&gt;
&lt;canvas id="canvas" width="480" height="360" style="display:none;"&gt;&lt;/canvas&gt;
&lt;br&gt;
&lt;button onclick="captureImage()"&gt;📷 Capture & Analyze&lt;/button&gt;
&lt;p id="result"&gt;&lt;/p&gt;

&lt;script&gt;
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream =&gt; { video.srcObject = stream; });

  function captureImage() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(blob =&gt; {
      const formData = new FormData();
      formData.append('file', blob, 'frame.jpg');

      fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      })
      .then(response =&gt; response.json())
      .then(data =&gt; {
        document.getElementById('result').innerText = "🔍 Prediction: " + data[0][1];
      });
    }, 'image/jpeg');
  }
&lt;/script&gt;</pre>

  <h2>🧠 Step 2: Flask Backend with AI Model</h2>
  <p>This Python backend uses <code>ResNet50</code> to classify the uploaded frame.</p>

  <pre>from flask import Flask, request, jsonify
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
model = ResNet50(weights='imagenet')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['file']
    file_path = 'temp.jpg'
    file.save(file_path)

    img = image.load_img(file_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    preds = model.predict(x)

    os.remove(file_path)
    return jsonify(decode_predictions(preds, top=3)[0])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)</pre>

  <h2>🧪 Testing It Out</h2>
  <ol>
    <li>Start your Python server: <code>python app.py</code></li>
    <li>Open the HTML file in your browser (localhost or deploy)</li>
    <li>Allow camera access and click <strong>Capture & Analyze</strong></li>
    <li>See the object prediction result instantly!</li>
  </ol>

  <h2>🎯 Use Cases</h2>
  <ul>
    <li>Retail – Identify product SKUs visually</li>
    <li>Education – Real-time object identification</li>
    <li>Healthcare – Medical object detection</li>
    <li>Manufacturing – Real-time defect recognition</li>
  </ul>

  <h2>💡 Bonus Ideas</h2>
  <ul>
    <li>Use YOLO or MobileNet for object detection (not just classification)</li>
    <li>Stream predictions continuously while the video plays</li>
    <li>Build a full-stack app with Spring Boot as the orchestrator</li>
  </ul>

  <p>Now your browser is a real-time AI-powered lens! 📸</p>

</body>
</html>
  `},a1={id:"java_a124",title:"Virtual Threads (Project Loom)",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Virtual Threads (Project Loom) – Lightweight Concurrency in Java</title>
  <meta name="description" content="Explore Virtual Threads from Project Loom in Java – Lightweight, scalable concurrency for modern applications." />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 2rem auto;
      padding: 0 1.5rem;
      color: #2d3748;
    }
    h1, h2 {
      color: #1a202c;
    }
    pre {
      background: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #edf2f7;
      padding: 2px 5px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <p>
    Java 21 brings one of the most awaited concurrency updates – <strong>Virtual Threads</strong> from <em>Project Loom</em>.
    Designed to dramatically reduce the complexity and resource cost of multithreaded programming, virtual threads enable
    scalable, high-throughput applications without complicated thread management.
  </p>

  <h2>🚀 What are Virtual Threads?</h2>

  <p>
    Virtual threads are <strong>lightweight threads</strong> managed by the Java Virtual Machine (JVM), not the OS.
    Unlike platform (or "native") threads, virtual threads use minimal memory and can scale to millions of concurrent tasks.
  </p>

  <ul>
    <li>✅ Lightweight</li>
    <li>✅ Non-blocking friendly</li>
    <li>✅ Familiar API (same <code>Thread</code> class)</li>
  </ul>

  <h2>✨ Why They Matter</h2>
  <p>
    Traditional Java threads are costly in memory (1MB+ per thread) and limited in scalability.
    With virtual threads, you can handle massive I/O-bound workloads using simple, synchronous-style code.
  </p>

  <h2>🛠️ Using Virtual Threads</h2>

  <h3>🔹 Basic Example</h3>

  <pre>public class VirtualThreadExample {
    public static void main(String[] args) {
        Runnable task = () -&gt; {
            System.out.println("Running on: " + Thread.currentThread());
        };

        Thread.startVirtualThread(task);
    }
}</pre>

  <p>
    This uses <code>Thread.startVirtualThread()</code> to create a virtual thread. It's as easy as working with normal threads.
  </p>

  <h3>🔹 Spawning Thousands</h3>

  <pre>public class VirtualThreadMassive {
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i &lt; 10_000; i++) {
            Thread.startVirtualThread(() -&gt; {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }

        Thread.sleep(2000);
        System.out.println("Done");
    }
}</pre>

  <p>
    You can spawn tens or hundreds of thousands of virtual threads without choking the JVM.
  </p>

  <h2>⚖️ Comparison: Platform vs Virtual Threads</h2>

  <table border="1" cellpadding="6" cellspacing="0">
    <thead>
      <tr><th>Feature</th><th>Platform Thread</th><th>Virtual Thread</th></tr>
    </thead>
    <tbody>
      <tr><td>Backed By</td><td>OS thread</td><td>JVM-managed</td></tr>
      <tr><td>Memory Overhead</td><td>~1MB</td><td>~a few KB</td></tr>
      <tr><td>Blocking APIs</td><td>Expensive</td><td>Handled efficiently</td></tr>
      <tr><td>Use Case</td><td>CPU-bound tasks</td><td>I/O-bound & massive concurrency</td></tr>
    </tbody>
  </table>

  <h2>📦 Thread Executors with Virtual Threads</h2>

  <pre>ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor();

executor.submit(() -&gt; {
    System.out.println("Hello from virtual thread!");
});
executor.shutdown();</pre>

  <p>
    Java 21 introduces <code>Executors.newVirtualThreadPerTaskExecutor()</code> – ideal for apps like web servers or reactive pipelines.
  </p>

  <h2>🚧 Gotchas</h2>
  <ul>
    <li>Avoid thread-local-heavy code – virtual threads may not persist on the same carrier thread.</li>
    <li>Blocking native code (e.g., database drivers) may still cause thread pinning.</li>
    <li>Proper structured concurrency is recommended for managing lifecycle.</li>
  </ul>

  <h2>🎯 Use Cases</h2>
  <ul>
    <li>REST APIs handling thousands of requests</li>
    <li>Real-time chat systems</li>
    <li>Batch processing</li>
    <li>Message-driven microservices</li>
  </ul>

  <h2>🧪 Testing Virtual Threads</h2>
  <p>
    You can test virtual thread usage via:
  </p>
  <pre>System.out.println(Thread.currentThread().isVirtual());</pre>

  <h2>🔚 Conclusion</h2>
  <p>
    Virtual Threads in Java 21 simplify concurrency without sacrificing performance. They’re ideal for modern server-side
    development, enabling you to write straightforward, blocking-style code that scales like async.
  </p>

  <p>
    Try them out in your next Spring Boot service or REST API to boost scalability with minimal complexity!
  </p>

</body>
</html>
  `},xm={java_a101:Fb,java_a102:Db,java_a103:Bb,java_a104:zb,java_a105:Ub,java_a106:Hb,java_a107:Jb,java_a108:Wb,java_a109:$b,java_a110:Vb,java_a111:qb,java_a112:Kb,java_a113:Gb,java_a114:Yb,java_a115:Qb,java_a116:Xb,java_a117:Zb,java_a118:e1,java_a119:t1,java_a120:n1,java_a121:r1,java_a122:o1,java_a123:i1,java_a124:a1},s1=e=>xm[e],qu=()=>Object.values(xm).sort((e,t)=>{const n=new Date(e.date).getTime();return new Date(t.date).getTime()-n}),Ta=e=>{const n=e.replace(/<[^>]+>/g,"").length;return Math.ceil(n/1125)},l1=()=>{const e=qu(),t=e[0],n=e.slice(1,7);return w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50",children:[w.jsxs("header",{className:"relative px-4 py-32 text-center overflow-hidden",children:[w.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(120deg,#84fab0,#8fd3f4)] opacity-5"}),w.jsxs("h1",{className:"relative mb-6 text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in",children:["The Developer's",w.jsx("br",{}),w.jsx("span",{className:"text-8xl",children:"Journal"})]}),w.jsx("p",{className:"mx-auto mb-12 max-w-2xl text-xl text-gray-600 leading-relaxed animate-fade-in",children:"Where code meets creativity. Exploring the intersection of technology, design, and the future of web development."}),w.jsxs("div",{className:"flex justify-center gap-4 animate-fade-in",children:[w.jsx(gt,{to:"/blog",className:"px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105",children:"Start Reading"}),w.jsx("button",{className:"px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-purple-300 transition-all hover:scale-105",children:"Subscribe"})]})]}),w.jsxs("section",{className:"mx-auto max-w-7xl px-4 pb-20",children:[w.jsxs("h2",{className:"mb-12 text-4xl font-bold text-gray-900 text-center",children:["Latest ",w.jsx("span",{className:"text-purple-600",children:"Stories"})]}),t&&w.jsx("div",{className:"mb-12",children:w.jsx("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:w.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[w.jsx("div",{className:"h-[400px] overflow-hidden rounded-xl",children:w.jsx("img",{src:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6",alt:t.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),w.jsxs("div",{className:"flex flex-col justify-center",children:[w.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4 w-fit",children:"Featured"}),w.jsx(gt,{to:`/blog/${t.id}`,children:w.jsx("h3",{className:"mb-4 text-3xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:t.title})}),w.jsxs("p",{className:"mb-6 text-gray-600 line-clamp-3",children:[t.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),w.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 mt-auto",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("img",{src:"/author.png",alt:t.author,className:"w-10 h-10 rounded-full"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:t.author}),w.jsx("p",{children:t.category})]})]}),w.jsxs("span",{children:[Ta(t.content)," min read"]})]})]})]})})}),w.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:n.map(r=>w.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[w.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:w.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:r.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),w.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4",children:r.category}),w.jsx(gt,{to:`/blog/${r.id}`,children:w.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:r.title})}),w.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[r.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),w.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("img",{src:"/author.png",alt:r.author,className:"w-8 h-8 rounded-full"}),w.jsx("span",{children:r.author})]}),w.jsxs("span",{children:[Ta(r.content)," min read"]})]})]},r.id))})]}),w.jsxs("section",{className:"relative py-24",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 skew-y-3 transform origin-bottom-right"}),w.jsxs("div",{className:"relative mx-auto max-w-2xl px-4 text-center",children:[w.jsx("h2",{className:"mb-4 text-4xl font-bold text-white",children:"Never Miss a Post"}),w.jsx("p",{className:"mb-8 text-purple-100",children:"Join our newsletter and get the latest articles delivered straight to your inbox."}),w.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[w.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full max-w-sm rounded-full px-6 py-3 text-gray-900 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-300"}),w.jsx("button",{className:"px-8 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform transition-transform duration-200",children:"Subscribe"})]})]})]})]})},u1=()=>{const e=qu();return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:w.jsxs("div",{className:"container mx-auto px-4",children:[w.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"All Blog Posts"}),w.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:e.map(t=>w.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[w.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:w.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:t.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),w.jsx(gt,{to:`/blog/${t.id}`,className:"inline-block",children:w.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:t.title})}),w.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[t.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),w.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("img",{src:"/author.png",alt:t.author,className:"w-8 h-8 rounded-full"}),w.jsx("span",{children:t.author})]}),w.jsxs("span",{children:[Ta(t.content)," min read"]})]})]},t.id))})]})})},c1=()=>({toast:({title:t,description:n,action:r,...o})=>{dh(t||"",{description:n,action:r?{label:r.label,onClick:r.onClick}:void 0,...o})}}),d1=({title:e,description:t,action:n,...r})=>{dh(e,{description:t,action:n?{label:n.label,onClick:n.onClick}:void 0,...r})},p1=()=>{const t=qu().reduce((i,a)=>(i[a.category]||(i[a.category]={count:0,color:r()}),i[a.category].count++,i),{}),n=Object.entries(t).map(([i,a])=>({name:i,count:a.count,color:a.color}));x.useEffect(()=>{d1({title:"Categories Loaded",description:"Browse through our article categories",variant:"default"})},[]);function r(){const i=["purple","blue","green","rose","indigo","emerald"];return i[Math.floor(Math.random()*i.length)]}const o=i=>({purple:{bg:"bg-purple-100",text:"text-purple-700"},blue:{bg:"bg-blue-100",text:"text-blue-700"},green:{bg:"bg-green-100",text:"text-green-700"},rose:{bg:"bg-rose-100",text:"text-rose-700"},indigo:{bg:"bg-indigo-100",text:"text-indigo-700"},emerald:{bg:"bg-emerald-100",text:"text-emerald-700"}})[i]||{bg:"bg-gray-100",text:"text-gray-700"};return w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:w.jsxs("div",{className:"container mx-auto px-4",children:[w.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-12",children:"Categories"}),w.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:n&&n.length>0?n.map(i=>{const a=o(i.color);return w.jsx(gt,{to:`/blog?category=${i.name.toLowerCase()}`,className:"group block p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx("h3",{className:"text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:i.name}),w.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${a.bg} ${a.text}`,children:[i.count," posts"]})]})},i.name)}):w.jsx("p",{className:"text-gray-500 col-span-3 text-center py-10",children:"No categories found."})})]})})},f1=()=>w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:w.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[w.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"About Developer's Journal"}),w.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[w.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Welcome to Developer's Journal, a community-driven blog dedicated to sharing knowledge, experiences, and insights about software development, design, and technology."}),w.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Our mission is to create a space where developers can learn from each other, stay updated with the latest trends, and grow their skills through high-quality content."}),w.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Our Values"}),w.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-6 space-y-2",children:[w.jsx("li",{children:"Quality over quantity"}),w.jsx("li",{children:"Community-driven learning"}),w.jsx("li",{children:"Practical, actionable content"}),w.jsx("li",{children:"Inclusive and accessible education"})]})]})]})}),h1=()=>w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:w.jsxs("div",{className:"container mx-auto px-4 max-w-2xl",children:[w.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Contact Us"}),w.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:w.jsxs("form",{className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),w.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your name"})]}),w.jsxs("div",{children:[w.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),w.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"your@email.com"})]}),w.jsxs("div",{children:[w.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),w.jsx("textarea",{id:"message",rows:4,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your message"})]}),w.jsx("button",{type:"submit",className:"w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:"Send Message"})]})})]})}),m1=()=>{const e=pi();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center",children:w.jsxs("div",{className:"text-center px-4",children:[w.jsx("h1",{className:"text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4",children:"404"}),w.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Oops! Page not found"}),w.jsx(gt,{to:"/",className:"inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity",children:"Return to Home"})]})})};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bm=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...s},l)=>x.createElement("svg",{ref:l,...v1,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bm("lucide",o),...s},[...a.map(([u,c])=>x.createElement(u,c)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=(e,t)=>{const n=x.forwardRef(({className:r,...o},i)=>x.createElement(y1,{ref:i,iconNode:t,className:bm(`lucide-${g1(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=w1("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),b1=()=>{const{id:e}=ub(),{toast:t}=c1(),n=s1(e||"");return n?w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:w.jsx("div",{className:"container mx-auto px-4",children:w.jsxs("article",{className:"max-w-3xl mx-auto",children:[w.jsx("div",{className:"mb-8 h-[400px] overflow-hidden rounded-2xl",children:w.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:n.title,className:"w-full h-full object-cover"})}),w.jsxs("div",{className:"mb-8",children:[w.jsxs("div",{className:"flex items-center gap-2 text-purple-600 mb-4",children:[w.jsx(x1,{size:20}),w.jsx("span",{className:"text-sm font-medium",children:n.category})]}),w.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:n.title}),w.jsxs("div",{className:"flex items-center justify-between text-gray-500",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("img",{src:"/author.png",alt:"Author",className:"w-10 h-10 rounded-full"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-medium text-gray-900",children:n.author}),w.jsx("p",{className:"text-sm",children:n.date})]})]}),w.jsxs("span",{className:"text-sm",children:[Ta(n.content)," min read"]})]})]}),w.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})]})})}):(t({title:"Post not found",description:"The requested blog post could not be found.",variant:"destructive"}),w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:w.jsx("div",{className:"container mx-auto px-4",children:w.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Post not found"})})}))},S1=new Ix,k1=()=>w.jsx(Nx,{client:S1,children:w.jsxs(ax,{children:[w.jsx(Ny,{}),w.jsxs(Nb,{basename:"/techchatterbox",children:[w.jsx(Mb,{}),w.jsxs(Eb,{children:[w.jsx(an,{path:"/",element:w.jsx(l1,{})}),w.jsx(an,{path:"/blog",element:w.jsx(u1,{})}),w.jsx(an,{path:"/blog/:id",element:w.jsx(b1,{})}),w.jsx(an,{path:"/categories",element:w.jsx(p1,{})}),w.jsx(an,{path:"/about",element:w.jsx(f1,{})}),w.jsx(an,{path:"/contact",element:w.jsx(h1,{})}),w.jsx(an,{path:"*",element:w.jsx(m1,{})})]})]})]})});ch(document.getElementById("root")).render(w.jsx(k1,{}));const Ud=sessionStorage.redirect;Ud&&(delete sessionStorage.redirect,window.history.replaceState(null,"",Ud));
