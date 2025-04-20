var Ym=Object.defineProperty;var gu=e=>{throw TypeError(e)};var Qm=(e,t,n)=>t in e?Ym(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ot=(e,t,n)=>Qm(e,typeof t!="symbol"?t+"":t,n),ds=(e,t,n)=>t.has(e)||gu("Cannot "+n);var P=(e,t,n)=>(ds(e,t,"read from private field"),n?n.call(e):t.get(e)),Y=(e,t,n)=>t.has(e)?gu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),H=(e,t,n,r)=>(ds(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ce=(e,t,n)=>(ds(e,t,"access private method"),n);var yi=(e,t,n,r)=>({set _(o){H(e,t,o,n)},get _(){return P(e,t,r)}});function Xm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ii(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hp={exports:{}},La={},mp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Zm=Symbol.for("react.portal"),eg=Symbol.for("react.fragment"),tg=Symbol.for("react.strict_mode"),ng=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),og=Symbol.for("react.context"),ig=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),sg=Symbol.for("react.memo"),lg=Symbol.for("react.lazy"),vu=Symbol.iterator;function cg(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vp=Object.assign,yp={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=yp,this.updater=n||gp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wp(){}wp.prototype=Zr.prototype;function nc(e,t,n){this.props=e,this.context=t,this.refs=yp,this.updater=n||gp}var rc=nc.prototype=new wp;rc.constructor=nc;vp(rc,Zr.prototype);rc.isPureReactComponent=!0;var yu=Array.isArray,xp=Object.prototype.hasOwnProperty,oc={current:null},bp={key:!0,ref:!0,__self:!0,__source:!0};function Sp(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)xp.call(t,r)&&!bp.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ai,type:e,key:i,ref:a,props:o,_owner:oc.current}}function ug(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function dg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wu=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dg(""+e.key):t.toString(36)}function Ui(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ai:case Zm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ps(a,0):r,yu(o)?(n="",e!=null&&(n=e.replace(wu,"$&/")+"/"),Ui(o,t,n,"",function(c){return c})):o!=null&&(ic(o)&&(o=ug(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(wu,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",yu(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+ps(i,s);a+=Ui(i,t,n,l,o)}else if(l=cg(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+ps(i,s++),a+=Ui(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wi(e,t,n){if(e==null)return e;var r=[],o=0;return Ui(e,r,"","",function(i){return t.call(n,i,o++)}),r}function pg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Hi={transition:null},fg={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:oc};function kp(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:wi,forEach:function(e,t,n){wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wi(e,function(){t++}),t},toArray:function(e){return wi(e,function(t){return t})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Zr;W.Fragment=eg;W.Profiler=ng;W.PureComponent=nc;W.StrictMode=tg;W.Suspense=ag;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;W.act=kp;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vp({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=oc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)xp.call(t,l)&&!bp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ai,type:e.type,key:o,ref:i,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:og,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rg,_context:e},e.Consumer=e};W.createElement=Sp;W.createFactory=function(e){var t=Sp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:ig,render:e}};W.isValidElement=ic;W.lazy=function(e){return{$$typeof:lg,_payload:{_status:-1,_result:e},_init:pg}};W.memo=function(e,t){return{$$typeof:sg,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};W.unstable_act=kp;W.useCallback=function(e,t){return _e.current.useCallback(e,t)};W.useContext=function(e){return _e.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};W.useEffect=function(e,t){return _e.current.useEffect(e,t)};W.useId=function(){return _e.current.useId()};W.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return _e.current.useMemo(e,t)};W.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};W.useRef=function(e){return _e.current.useRef(e)};W.useState=function(e){return _e.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return _e.current.useTransition()};W.version="18.3.1";mp.exports=W;var x=mp.exports;const A=ii(x),hg=Xm({__proto__:null,default:A},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg=x,gg=Symbol.for("react.element"),vg=Symbol.for("react.fragment"),yg=Object.prototype.hasOwnProperty,wg=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xg={key:!0,ref:!0,__self:!0,__source:!0};function Cp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)yg.call(t,r)&&!xg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:gg,type:e,key:i,ref:a,props:o,_owner:wg.current}}La.Fragment=vg;La.jsx=Cp;La.jsxs=Cp;hp.exports=La;var m=hp.exports,Ep={exports:{}},Qe={},Tp={exports:{}},Pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,I){var _=C.length;C.push(I);e:for(;0<_;){var L=_-1>>>1,D=C[L];if(0<o(D,I))C[L]=I,C[_]=D,_=L;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var I=C[0],_=C.pop();if(_!==I){C[0]=_;e:for(var L=0,D=C.length,G=D>>>1;L<G;){var fe=2*(L+1)-1,He=C[fe],Q=fe+1,st=C[Q];if(0>o(He,_))Q<D&&0>o(st,He)?(C[L]=st,C[Q]=_,L=Q):(C[L]=He,C[fe]=_,L=fe);else if(Q<D&&0>o(st,_))C[L]=st,C[Q]=_,L=Q;else break e}}return I}function o(C,I){var _=C.sortIndex-I.sortIndex;return _!==0?_:C.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],d=1,p=null,u=3,g=!1,w=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=C)r(c),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(c)}}function S(C){if(y=!1,v(C),!w)if(n(l)!==null)w=!0,J(k);else{var I=n(c);I!==null&&K(S,I.startTime-C)}}function k(C,I){w=!1,y&&(y=!1,h(R),R=-1),g=!0;var _=u;try{for(v(I),p=n(l);p!==null&&(!(p.expirationTime>I)||C&&!U());){var L=p.callback;if(typeof L=="function"){p.callback=null,u=p.priorityLevel;var D=L(p.expirationTime<=I);I=e.unstable_now(),typeof D=="function"?p.callback=D:p===n(l)&&r(l),v(I)}else r(l);p=n(l)}if(p!==null)var G=!0;else{var fe=n(c);fe!==null&&K(S,fe.startTime-I),G=!1}return G}finally{p=null,u=_,g=!1}}var E=!1,T=null,R=-1,M=5,O=-1;function U(){return!(e.unstable_now()-O<M)}function F(){if(T!==null){var C=e.unstable_now();O=C;var I=!0;try{I=T(!0,C)}finally{I?$():(E=!1,T=null)}}else E=!1}var $;if(typeof f=="function")$=function(){f(F)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ie=V.port2;V.port1.onmessage=F,$=function(){ie.postMessage(null)}}else $=function(){b(F,0)};function J(C){T=C,E||(E=!0,$())}function K(C,I){R=b(function(){C(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,J(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(u){case 1:case 2:case 3:var I=3;break;default:I=u}var _=u;u=I;try{return C()}finally{u=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,I){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=u;u=C;try{return I()}finally{u=_}},e.unstable_scheduleCallback=function(C,I,_){var L=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?L+_:L):_=L,C){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=_+D,C={id:d++,callback:I,priorityLevel:C,startTime:_,expirationTime:D,sortIndex:-1},_>L?(C.sortIndex=_,t(c,C),n(l)===null&&C===n(c)&&(y?(h(R),R=-1):y=!0,K(S,_-L))):(C.sortIndex=D,t(l,C),w||g||(w=!0,J(k))),C},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(C){var I=u;return function(){var _=u;u=I;try{return C.apply(this,arguments)}finally{u=_}}}})(Pp);Tp.exports=Pp;var bg=Tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=x,Ye=bg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rp=new Set,Oo={};function tr(e,t){Jr(e,t),Jr(e+"Capture",t)}function Jr(e,t){for(Oo[e]=t,e=0;e<t.length;e++)Rp.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=Object.prototype.hasOwnProperty,kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},bu={};function Cg(e){return qs.call(bu,e)?!0:qs.call(xu,e)?!1:kg.test(e)?bu[e]=!0:(xu[e]=!0,!1)}function Eg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tg(e,t,n,r){if(t===null||typeof t>"u"||Eg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ac=/[\-:]([a-z])/g;function sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ac,sc);ke[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ac,sc);ke[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ac,sc);ke[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function lc(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tg(t,n,o,r)&&(n=null),r||o===null?Cg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),pr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Ap=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),Gs=Symbol.for("react.suspense"),Ys=Symbol.for("react.suspense_list"),dc=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Ip=Symbol.for("react.offscreen"),Su=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,fs;function xo(e){if(fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fs=t&&t[1]||""}return`
`+fs+e}var hs=!1;function ms(e,t){if(!e||hs)return"";hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function Pg(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=ms(e.type,!1),e;case 11:return e=ms(e.type.render,!1),e;case 1:return e=ms(e.type,!0),e;default:return""}}function Qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case pr:return"Portal";case Ks:return"Profiler";case cc:return"StrictMode";case Gs:return"Suspense";case Ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ap:return(e.displayName||"Context")+".Consumer";case jp:return(e._context.displayName||"Context")+".Provider";case uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dc:return t=e.displayName||null,t!==null?t:Qs(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Qs(e(t))}catch{}}return null}function Rg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qs(t);case 8:return t===cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Np(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jg(e){var t=Np(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=jg(e))}function Op(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Np(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xs(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lp(e,t){t=t.checked,t!=null&&lc(e,"checked",t,!1)}function Zs(e,t){Lp(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,n):t.hasOwnProperty("defaultValue")&&el(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function el(e,t,n){(t!=="number"||na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bo=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Eu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(bo(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function _p(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,Fp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ag=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){Ag.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function Dp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function Bp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Dp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ig=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(Ig[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Er=null,Tr=null;function Pu(e){if(e=ci(e)){if(typeof al!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ba(t),al(e.stateNode,e.type,t))}}function zp(e){Er?Tr?Tr.push(e):Tr=[e]:Er=e}function Up(){if(Er){var e=Er,t=Tr;if(Tr=Er=null,Pu(e),t)for(e=0;e<t.length;e++)Pu(t[e])}}function Hp(e,t){return e(t)}function Jp(){}var gs=!1;function Wp(e,t,n){if(gs)return e(t,n);gs=!0;try{return Hp(e,t,n)}finally{gs=!1,(Er!==null||Tr!==null)&&(Jp(),Up())}}function _o(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var sl=!1;if(Ht)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){sl=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{sl=!1}function Ng(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Eo=!1,ra=null,oa=!1,ll=null,Og={onError:function(e){Eo=!0,ra=e}};function Lg(e,t,n,r,o,i,a,s,l){Eo=!1,ra=null,Ng.apply(Og,arguments)}function _g(e,t,n,r,o,i,a,s,l){if(Lg.apply(this,arguments),Eo){if(Eo){var c=ra;Eo=!1,ra=null}else throw Error(j(198));oa||(oa=!0,ll=c)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(nr(e)!==e)throw Error(j(188))}function Mg(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ru(o),e;if(i===r)return Ru(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Vp(e){return e=Mg(e),e!==null?qp(e):null}function qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qp(e);if(t!==null)return t;e=e.sibling}return null}var Kp=Ye.unstable_scheduleCallback,ju=Ye.unstable_cancelCallback,Fg=Ye.unstable_shouldYield,Dg=Ye.unstable_requestPaint,pe=Ye.unstable_now,Bg=Ye.unstable_getCurrentPriorityLevel,fc=Ye.unstable_ImmediatePriority,Gp=Ye.unstable_UserBlockingPriority,ia=Ye.unstable_NormalPriority,zg=Ye.unstable_LowPriority,Yp=Ye.unstable_IdlePriority,_a=null,jt=null;function Ug(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Wg,Hg=Math.log,Jg=Math.LN2;function Wg(e){return e>>>=0,e===0?32:31-(Hg(e)/Jg|0)|0}var ki=64,Ci=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=So(s):(i&=a,i!==0&&(r=So(i)))}else a=n&~o,a!==0?r=So(a):i!==0&&(r=So(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function $g(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-mt(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=$g(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qp(){var e=ki;return ki<<=1,!(ki&4194240)&&(ki=64),e}function vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function qg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Xp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zp,mc,ef,tf,nf,ul=!1,Ei=[],vn=null,yn=null,wn=null,Mo=new Map,Fo=new Map,sn=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function co(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ci(t),t!==null&&mc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gg(e,t,n,r,o){switch(t){case"focusin":return vn=co(vn,e,t,n,r,o),!0;case"dragenter":return yn=co(yn,e,t,n,r,o),!0;case"mouseover":return wn=co(wn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mo.set(i,co(Mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fo.set(i,co(Fo.get(i)||null,e,t,n,r,o)),!0}return!1}function rf(e){var t=Bn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,nf(e.priority,function(){ef(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);il=r,n.target.dispatchEvent(r),il=null}else return t=ci(n),t!==null&&mc(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Ji(e)&&n.delete(t)}function Yg(){ul=!1,vn!==null&&Ji(vn)&&(vn=null),yn!==null&&Ji(yn)&&(yn=null),wn!==null&&Ji(wn)&&(wn=null),Mo.forEach(Iu),Fo.forEach(Iu)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Yg)))}function Do(e){function t(o){return uo(o,e)}if(0<Ei.length){uo(Ei[0],e);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&uo(vn,e),yn!==null&&uo(yn,e),wn!==null&&uo(wn,e),Mo.forEach(t),Fo.forEach(t),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)rf(n),n.blockedOn===null&&sn.shift()}var Pr=Kt.ReactCurrentBatchConfig,sa=!0;function Qg(e,t,n,r){var o=X,i=Pr.transition;Pr.transition=null;try{X=1,gc(e,t,n,r)}finally{X=o,Pr.transition=i}}function Xg(e,t,n,r){var o=X,i=Pr.transition;Pr.transition=null;try{X=4,gc(e,t,n,r)}finally{X=o,Pr.transition=i}}function gc(e,t,n,r){if(sa){var o=dl(e,t,n,r);if(o===null)Ps(e,t,r,la,n),Au(e,r);else if(Gg(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<Kg.indexOf(e)){for(;o!==null;){var i=ci(o);if(i!==null&&Zp(i),i=dl(e,t,n,r),i===null&&Ps(e,t,r,la,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var la=null;function dl(e,t,n,r){if(la=null,e=pc(r),e=Bn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bg()){case fc:return 1;case Gp:return 4;case ia:case zg:return 16;case Yp:return 536870912;default:return 16}default:return 16}}var hn=null,vc=null,Wi=null;function af(){if(Wi)return Wi;var e,t=vc,n=t.length,r,o="value"in hn?hn.value:hn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Wi=o.slice(e,1<r?1-r:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function Nu(){return!1}function Xe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ti:Nu,this.isPropagationStopped=Nu,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=Xe(eo),li=ce({},eo,{view:0,detail:0}),Zg=Xe(li),ys,ws,po,Ma=ce({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(ys=e.screenX-po.screenX,ws=e.screenY-po.screenY):ws=ys=0,po=e),ys)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),Ou=Xe(Ma),ev=ce({},Ma,{dataTransfer:0}),tv=Xe(ev),nv=ce({},li,{relatedTarget:0}),xs=Xe(nv),rv=ce({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Xe(rv),iv=ce({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),av=Xe(iv),sv=ce({},eo,{data:0}),Lu=Xe(sv),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uv[e])?!!t[e]:!1}function wc(){return dv}var pv=ce({},li,{key:function(e){if(e.key){var t=lv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fv=Xe(pv),hv=ce({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Xe(hv),mv=ce({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),gv=Xe(mv),vv=ce({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Xe(vv),wv=ce({},Ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Xe(wv),bv=[9,13,27,32],xc=Ht&&"CompositionEvent"in window,To=null;Ht&&"documentMode"in document&&(To=document.documentMode);var Sv=Ht&&"TextEvent"in window&&!To,sf=Ht&&(!xc||To&&8<To&&11>=To),Mu=" ",Fu=!1;function lf(e,t){switch(e){case"keyup":return bv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function kv(e,t){switch(e){case"compositionend":return cf(t);case"keypress":return t.which!==32?null:(Fu=!0,Mu);case"textInput":return e=t.data,e===Mu&&Fu?null:e;default:return null}}function Cv(e,t){if(hr)return e==="compositionend"||!xc&&lf(e,t)?(e=af(),Wi=vc=hn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sf&&t.locale!=="ko"?null:t.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ev[e.type]:t==="textarea"}function uf(e,t,n,r){zp(r),t=ca(t,"onChange"),0<t.length&&(n=new yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,Bo=null;function Tv(e){bf(e,0)}function Fa(e){var t=vr(e);if(Op(t))return e}function Pv(e,t){if(e==="change")return t}var df=!1;if(Ht){var bs;if(Ht){var Ss="oninput"in document;if(!Ss){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Ss=typeof Bu.oninput=="function"}bs=Ss}else bs=!1;df=bs&&(!document.documentMode||9<document.documentMode)}function zu(){Po&&(Po.detachEvent("onpropertychange",pf),Bo=Po=null)}function pf(e){if(e.propertyName==="value"&&Fa(Bo)){var t=[];uf(t,Bo,e,pc(e)),Wp(Tv,t)}}function Rv(e,t,n){e==="focusin"?(zu(),Po=t,Bo=n,Po.attachEvent("onpropertychange",pf)):e==="focusout"&&zu()}function jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fa(Bo)}function Av(e,t){if(e==="click")return Fa(t)}function Iv(e,t){if(e==="input"||e==="change")return Fa(t)}function Nv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Nv;function zo(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!qs.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=na(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ov(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ff(n.ownerDocument.documentElement,n)){if(r!==null&&bc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Hu(n,i);var a=Hu(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lv=Ht&&"documentMode"in document&&11>=document.documentMode,mr=null,pl=null,Ro=null,fl=!1;function Ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||mr==null||mr!==na(r)||(r=mr,"selectionStart"in r&&bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&zo(Ro,r)||(Ro=r,r=ca(pl,"onSelect"),0<r.length&&(t=new yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},ks={},mf={};Ht&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Da(e){if(ks[e])return ks[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mf)return ks[e]=t[n];return e}var gf=Da("animationend"),vf=Da("animationiteration"),yf=Da("animationstart"),wf=Da("transitionend"),xf=new Map,Wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){xf.set(e,t),tr(t,[e])}for(var Cs=0;Cs<Wu.length;Cs++){var Es=Wu[Cs],_v=Es.toLowerCase(),Mv=Es[0].toUpperCase()+Es.slice(1);Nn(_v,"on"+Mv)}Nn(gf,"onAnimationEnd");Nn(vf,"onAnimationIteration");Nn(yf,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(wf,"onTransitionEnd");Jr("onMouseEnter",["mouseout","mouseover"]);Jr("onMouseLeave",["mouseout","mouseover"]);Jr("onPointerEnter",["pointerout","pointerover"]);Jr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_g(r,t,void 0,e),e.currentTarget=null}function bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;$u(o,s,c),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;$u(o,s,c),i=l}}}if(oa)throw e=ll,oa=!1,ll=null,e}function re(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(Sf(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),Sf(n,e,r,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Ri]){e[Ri]=!0,Rp.forEach(function(n){n!=="selectionchange"&&(Fv.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Ts("selectionchange",!1,t))}}function Sf(e,t,n,r){switch(of(t)){case 1:var o=Qg;break;case 4:o=Xg;break;default:o=gc}n=o.bind(null,t,n,e),o=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Bn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Wp(function(){var c=i,d=pc(n),p=[];e:{var u=xf.get(e);if(u!==void 0){var g=yc,w=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":g=fv;break;case"focusin":w="focus",g=xs;break;case"focusout":w="blur",g=xs;break;case"beforeblur":case"afterblur":g=xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gv;break;case gf:case vf:case yf:g=ov;break;case wf:g=yv;break;case"scroll":g=Zg;break;case"wheel":g=xv;break;case"copy":case"cut":case"paste":g=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_u}var y=(t&4)!==0,b=!y&&e==="scroll",h=y?u!==null?u+"Capture":null:u;y=[];for(var f=c,v;f!==null;){v=f;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=_o(f,h),S!=null&&y.push(Ho(f,S,v)))),b)break;f=f.return}0<y.length&&(u=new g(u,w,null,n,d),p.push({event:u,listeners:y}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",u&&n!==il&&(w=n.relatedTarget||n.fromElement)&&(Bn(w)||w[Jt]))break e;if((g||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?Bn(w):null,w!==null&&(b=nr(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(y=Ou,S="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=_u,S="onPointerLeave",h="onPointerEnter",f="pointer"),b=g==null?u:vr(g),v=w==null?u:vr(w),u=new y(S,f+"leave",g,n,d),u.target=b,u.relatedTarget=v,S=null,Bn(d)===c&&(y=new y(h,f+"enter",w,n,d),y.target=v,y.relatedTarget=b,S=y),b=S,g&&w)t:{for(y=g,h=w,f=0,v=y;v;v=ur(v))f++;for(v=0,S=h;S;S=ur(S))v++;for(;0<f-v;)y=ur(y),f--;for(;0<v-f;)h=ur(h),v--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=ur(y),h=ur(h)}y=null}else y=null;g!==null&&Vu(p,u,g,y,!1),w!==null&&b!==null&&Vu(p,b,w,y,!0)}}e:{if(u=c?vr(c):window,g=u.nodeName&&u.nodeName.toLowerCase(),g==="select"||g==="input"&&u.type==="file")var k=Pv;else if(Du(u))if(df)k=Iv;else{k=jv;var E=Rv}else(g=u.nodeName)&&g.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(k=Av);if(k&&(k=k(e,c))){uf(p,k,n,d);break e}E&&E(e,u,c),e==="focusout"&&(E=u._wrapperState)&&E.controlled&&u.type==="number"&&el(u,"number",u.value)}switch(E=c?vr(c):window,e){case"focusin":(Du(E)||E.contentEditable==="true")&&(mr=E,pl=c,Ro=null);break;case"focusout":Ro=pl=mr=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Ju(p,n,d);break;case"selectionchange":if(Lv)break;case"keydown":case"keyup":Ju(p,n,d)}var T;if(xc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else hr?lf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(sf&&n.locale!=="ko"&&(hr||R!=="onCompositionStart"?R==="onCompositionEnd"&&hr&&(T=af()):(hn=d,vc="value"in hn?hn.value:hn.textContent,hr=!0)),E=ca(c,R),0<E.length&&(R=new Lu(R,e,null,n,d),p.push({event:R,listeners:E}),T?R.data=T:(T=cf(n),T!==null&&(R.data=T)))),(T=Sv?kv(e,n):Cv(e,n))&&(c=ca(c,"onBeforeInput"),0<c.length&&(d=new Lu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}bf(p,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ca(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_o(e,n),i!=null&&r.unshift(Ho(e,i,o)),i=_o(e,t),i!=null&&r.push(Ho(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,o?(l=_o(n,i),l!=null&&a.unshift(Ho(n,l,s))):o||(l=_o(n,i),l!=null&&a.push(Ho(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Dv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function qu(e){return(typeof e=="string"?e:""+e).replace(Dv,`
`).replace(Bv,"")}function ji(e,t,n){if(t=qu(t),qu(e)!==t&&n)throw Error(j(425))}function ua(){}var hl=null,ml=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(Hv)}:vl;function Hv(e){setTimeout(function(){throw e})}function Rs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Do(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var to=Math.random().toString(36).slice(2),Rt="__reactFiber$"+to,Jo="__reactProps$"+to,Jt="__reactContainer$"+to,yl="__reactEvents$"+to,Jv="__reactListeners$"+to,Wv="__reactHandles$"+to;function Bn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[Rt])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[Rt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ba(e){return e[Jo]||null}var wl=[],yr=-1;function On(e){return{current:e}}function oe(e){0>yr||(e.current=wl[yr],wl[yr]=null,yr--)}function ee(e,t){yr++,wl[yr]=e.current,e.current=t}var Pn={},je=On(Pn),Be=On(!1),Gn=Pn;function Wr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function da(){oe(Be),oe(je)}function Yu(e,t,n){if(je.current!==Pn)throw Error(j(168));ee(je,t),ee(Be,n)}function kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,Rg(e)||"Unknown",o));return ce({},n,r)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Gn=je.current,ee(je,e),ee(Be,Be.current),!0}function Qu(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=kf(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,oe(Be),oe(je),ee(je,e)):oe(Be),ee(Be,n)}var Ft=null,za=!1,js=!1;function Cf(e){Ft===null?Ft=[e]:Ft.push(e)}function $v(e){za=!0,Cf(e)}function Ln(){if(!js&&Ft!==null){js=!0;var e=0,t=X;try{var n=Ft;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,za=!1}catch(o){throw Ft!==null&&(Ft=Ft.slice(e+1)),Kp(fc,Ln),o}finally{X=t,js=!1}}return null}var wr=[],xr=0,fa=null,ha=0,tt=[],nt=0,Yn=null,Bt=1,zt="";function Fn(e,t){wr[xr++]=ha,wr[xr++]=fa,fa=e,ha=t}function Ef(e,t,n){tt[nt++]=Bt,tt[nt++]=zt,tt[nt++]=Yn,Yn=e;var r=Bt;e=zt;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var i=32-mt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Bt=1<<32-mt(t)+o|n<<o|r,zt=i+e}else Bt=1<<i|n<<o|r,zt=e}function Sc(e){e.return!==null&&(Fn(e,1),Ef(e,1,0))}function kc(e){for(;e===fa;)fa=wr[--xr],wr[xr]=null,ha=wr[--xr],wr[xr]=null;for(;e===Yn;)Yn=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null,Bt=tt[--nt],tt[nt]=null}var Ke=null,qe=null,ae=!1,ft=null;function Tf(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,qe=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Bt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,qe=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(ae){var t=qe;if(t){var n=t;if(!Xu(e,t)){if(xl(e))throw Error(j(418));t=xn(n.nextSibling);var r=Ke;t&&Xu(e,t)?Tf(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ke=e)}}else{if(xl(e))throw Error(j(418));e.flags=e.flags&-4097|2,ae=!1,Ke=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Ai(e){if(e!==Ke)return!1;if(!ae)return Zu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=qe)){if(xl(e))throw Pf(),Error(j(418));for(;t;)Tf(e,t),t=xn(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ke?xn(e.stateNode.nextSibling):null;return!0}function Pf(){for(var e=qe;e;)e=xn(e.nextSibling)}function $r(){qe=Ke=null,ae=!1}function Cc(e){ft===null?ft=[e]:ft.push(e)}var Vv=Kt.ReactCurrentBatchConfig;function fo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ii(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function Rf(e){function t(h,f){if(e){var v=h.deletions;v===null?(h.deletions=[f],h.flags|=16):v.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Cn(h,f),h.index=0,h.sibling=null,h}function i(h,f,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<f?(h.flags|=2,f):v):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,v,S){return f===null||f.tag!==6?(f=Ms(v,h.mode,S),f.return=h,f):(f=o(f,v),f.return=h,f)}function l(h,f,v,S){var k=v.type;return k===fr?d(h,f,v.props.children,S,v.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&ed(k)===f.type)?(S=o(f,v.props),S.ref=fo(h,f,v),S.return=h,S):(S=Xi(v.type,v.key,v.props,null,h.mode,S),S.ref=fo(h,f,v),S.return=h,S)}function c(h,f,v,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Fs(v,h.mode,S),f.return=h,f):(f=o(f,v.children||[]),f.return=h,f)}function d(h,f,v,S,k){return f===null||f.tag!==7?(f=Kn(v,h.mode,S,k),f.return=h,f):(f=o(f,v),f.return=h,f)}function p(h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ms(""+f,h.mode,v),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xi:return v=Xi(f.type,f.key,f.props,null,h.mode,v),v.ref=fo(h,null,f),v.return=h,v;case pr:return f=Fs(f,h.mode,v),f.return=h,f;case on:var S=f._init;return p(h,S(f._payload),v)}if(bo(f)||so(f))return f=Kn(f,h.mode,v,null),f.return=h,f;Ii(h,f)}return null}function u(h,f,v,S){var k=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(h,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:return v.key===k?l(h,f,v,S):null;case pr:return v.key===k?c(h,f,v,S):null;case on:return k=v._init,u(h,f,k(v._payload),S)}if(bo(v)||so(v))return k!==null?null:d(h,f,v,S,null);Ii(h,v)}return null}function g(h,f,v,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,s(f,h,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xi:return h=h.get(S.key===null?v:S.key)||null,l(f,h,S,k);case pr:return h=h.get(S.key===null?v:S.key)||null,c(f,h,S,k);case on:var E=S._init;return g(h,f,v,E(S._payload),k)}if(bo(S)||so(S))return h=h.get(v)||null,d(f,h,S,k,null);Ii(f,S)}return null}function w(h,f,v,S){for(var k=null,E=null,T=f,R=f=0,M=null;T!==null&&R<v.length;R++){T.index>R?(M=T,T=null):M=T.sibling;var O=u(h,T,v[R],S);if(O===null){T===null&&(T=M);break}e&&T&&O.alternate===null&&t(h,T),f=i(O,f,R),E===null?k=O:E.sibling=O,E=O,T=M}if(R===v.length)return n(h,T),ae&&Fn(h,R),k;if(T===null){for(;R<v.length;R++)T=p(h,v[R],S),T!==null&&(f=i(T,f,R),E===null?k=T:E.sibling=T,E=T);return ae&&Fn(h,R),k}for(T=r(h,T);R<v.length;R++)M=g(T,h,R,v[R],S),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?R:M.key),f=i(M,f,R),E===null?k=M:E.sibling=M,E=M);return e&&T.forEach(function(U){return t(h,U)}),ae&&Fn(h,R),k}function y(h,f,v,S){var k=so(v);if(typeof k!="function")throw Error(j(150));if(v=k.call(v),v==null)throw Error(j(151));for(var E=k=null,T=f,R=f=0,M=null,O=v.next();T!==null&&!O.done;R++,O=v.next()){T.index>R?(M=T,T=null):M=T.sibling;var U=u(h,T,O.value,S);if(U===null){T===null&&(T=M);break}e&&T&&U.alternate===null&&t(h,T),f=i(U,f,R),E===null?k=U:E.sibling=U,E=U,T=M}if(O.done)return n(h,T),ae&&Fn(h,R),k;if(T===null){for(;!O.done;R++,O=v.next())O=p(h,O.value,S),O!==null&&(f=i(O,f,R),E===null?k=O:E.sibling=O,E=O);return ae&&Fn(h,R),k}for(T=r(h,T);!O.done;R++,O=v.next())O=g(T,h,R,O.value,S),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?R:O.key),f=i(O,f,R),E===null?k=O:E.sibling=O,E=O);return e&&T.forEach(function(F){return t(h,F)}),ae&&Fn(h,R),k}function b(h,f,v,S){if(typeof v=="object"&&v!==null&&v.type===fr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:e:{for(var k=v.key,E=f;E!==null;){if(E.key===k){if(k=v.type,k===fr){if(E.tag===7){n(h,E.sibling),f=o(E,v.props.children),f.return=h,h=f;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===on&&ed(k)===E.type){n(h,E.sibling),f=o(E,v.props),f.ref=fo(h,E,v),f.return=h,h=f;break e}n(h,E);break}else t(h,E);E=E.sibling}v.type===fr?(f=Kn(v.props.children,h.mode,S,v.key),f.return=h,h=f):(S=Xi(v.type,v.key,v.props,null,h.mode,S),S.ref=fo(h,f,v),S.return=h,h=S)}return a(h);case pr:e:{for(E=v.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(h,f.sibling),f=o(f,v.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Fs(v,h.mode,S),f.return=h,h=f}return a(h);case on:return E=v._init,b(h,f,E(v._payload),S)}if(bo(v))return w(h,f,v,S);if(so(v))return y(h,f,v,S);Ii(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,v),f.return=h,h=f):(n(h,f),f=Ms(v,h.mode,S),f.return=h,h=f),a(h)):n(h,f)}return b}var Vr=Rf(!0),jf=Rf(!1),ma=On(null),ga=null,br=null,Ec=null;function Tc(){Ec=br=ga=null}function Pc(e){var t=ma.current;oe(ma),e._currentValue=t}function Sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){ga=e,Ec=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(ga===null)throw Error(j(308));br=e,ga.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var zn=null;function Rc(e){zn===null?zn=[e]:zn.push(e)}function Af(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Rc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,r)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,n)}return o=r.interleaved,o===null?(t.next=t,Rc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,n)}function Vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hc(e,n)}}function td(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(e,t,n,r){var o=e.updateQueue;an=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(i!==null){var p=o.baseState;a=0,d=c=l=null,s=i;do{var u=s.lane,g=s.eventTime;if((r&u)===u){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(u=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(g,p,u);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,u=typeof w=="function"?w.call(g,p,u):w,u==null)break e;p=ce({},p,u);break e;case 2:an=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=o.effects,u===null?o.effects=[s]:u.push(s))}else g={eventTime:g,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=g,l=p):d=d.next=g,a|=u;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;u=s,s=u.next,u.next=null,o.lastBaseUpdate=u,o.shared.pending=null}}while(!0);if(d===null&&(l=p),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xn|=a,e.lanes=a,e.memoizedState=p}}function nd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var ui={},At=On(ui),Wo=On(ui),$o=On(ui);function Un(e){if(e===ui)throw Error(j(174));return e}function Ac(e,t){switch(ee($o,t),ee(Wo,e),ee(At,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nl(t,e)}oe(At),ee(At,t)}function qr(){oe(At),oe(Wo),oe($o)}function Nf(e){Un($o.current);var t=Un(At.current),n=nl(t,e.type);t!==n&&(ee(Wo,e),ee(At,n))}function Ic(e){Wo.current===e&&(oe(At),oe(Wo))}var se=On(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function Nc(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var qi=Kt.ReactCurrentDispatcher,Is=Kt.ReactCurrentBatchConfig,Qn=0,le=null,ge=null,ye=null,wa=!1,jo=!1,Vo=0,qv=0;function Ee(){throw Error(j(321))}function Oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Lc(e,t,n,r,o,i){if(Qn=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Qv:Xv,e=n(r,o),jo){i=0;do{if(jo=!1,Vo=0,25<=i)throw Error(j(301));i+=1,ye=ge=null,t.updateQueue=null,qi.current=Zv,e=n(r,o)}while(jo)}if(qi.current=xa,t=ge!==null&&ge.next!==null,Qn=0,ye=ge=le=null,wa=!1,t)throw Error(j(300));return e}function _c(){var e=Vo!==0;return Vo=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?le.memoizedState=ye=e:ye=ye.next=e,ye}function at(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?le.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(j(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?le.memoizedState=ye=e:ye=ye.next=e}return ye}function qo(e,t){return typeof t=="function"?t(e):t}function Ns(e){var t=at(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,c=i;do{var d=c.lane;if((Qn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,le.lanes|=d,Xn|=d}c=c.next}while(c!==null&&c!==i);l===null?a=r:l.next=s,vt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,le.lanes|=i,Xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Os(e){var t=at(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);vt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Of(){}function Lf(e,t){var n=le,r=at(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,De=!0),r=r.queue,Mc(Ff.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ko(9,Mf.bind(null,n,r,o,t),void 0,null),we===null)throw Error(j(349));Qn&30||_f(n,t,o)}return o}function _f(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mf(e,t,n,r){t.value=n,t.getSnapshot=r,Df(t)&&Bf(e)}function Ff(e,t,n){return n(function(){Df(t)&&Bf(e)})}function Df(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Bf(e){var t=Wt(e,1);t!==null&&gt(t,e,1,-1)}function rd(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yv.bind(null,le,e),[t.memoizedState,e]}function Ko(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zf(){return at().memoizedState}function Ki(e,t,n,r){var o=Ct();le.flags|=e,o.memoizedState=Ko(1|t,n,void 0,r===void 0?null:r)}function Ua(e,t,n,r){var o=at();r=r===void 0?null:r;var i=void 0;if(ge!==null){var a=ge.memoizedState;if(i=a.destroy,r!==null&&Oc(r,a.deps)){o.memoizedState=Ko(t,n,i,r);return}}le.flags|=e,o.memoizedState=Ko(1|t,n,i,r)}function od(e,t){return Ki(8390656,8,e,t)}function Mc(e,t){return Ua(2048,8,e,t)}function Uf(e,t){return Ua(4,2,e,t)}function Hf(e,t){return Ua(4,4,e,t)}function Jf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wf(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4,4,Jf.bind(null,t,e),n)}function Fc(){}function $f(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vf(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qf(e,t,n){return Qn&21?(vt(n,t)||(n=Qp(),le.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Kv(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Is.transition;Is.transition={};try{e(!1),t()}finally{X=n,Is.transition=r}}function Kf(){return at().memoizedState}function Gv(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gf(e))Yf(t,n);else if(n=Af(e,t,n,r),n!==null){var o=Le();gt(n,e,r,o),Qf(n,t,r)}}function Yv(e,t,n){var r=kn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gf(e))Yf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,vt(s,a)){var l=t.interleaved;l===null?(o.next=o,Rc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Af(e,t,o,r),n!==null&&(o=Le(),gt(n,e,r,o),Qf(n,t,r))}}function Gf(e){var t=e.alternate;return e===le||t!==null&&t===le}function Yf(e,t){jo=wa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hc(e,n)}}var xa={readContext:it,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},Qv={readContext:it,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,Jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gv.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:rd,useDebugValue:Fc,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=rd(!1),t=e[0];return e=Kv.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=Ct();if(ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),we===null)throw Error(j(349));Qn&30||_f(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,od(Ff.bind(null,r,i,e),[e]),r.flags|=2048,Ko(9,Mf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=we.identifierPrefix;if(ae){var n=zt,r=Bt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xv={readContext:it,useCallback:$f,useContext:it,useEffect:Mc,useImperativeHandle:Wf,useInsertionEffect:Uf,useLayoutEffect:Hf,useMemo:Vf,useReducer:Ns,useRef:zf,useState:function(){return Ns(qo)},useDebugValue:Fc,useDeferredValue:function(e){var t=at();return qf(t,ge.memoizedState,e)},useTransition:function(){var e=Ns(qo)[0],t=at().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Lf,useId:Kf,unstable_isNewReconciler:!1},Zv={readContext:it,useCallback:$f,useContext:it,useEffect:Mc,useImperativeHandle:Wf,useInsertionEffect:Uf,useLayoutEffect:Hf,useMemo:Vf,useReducer:Os,useRef:zf,useState:function(){return Os(qo)},useDebugValue:Fc,useDeferredValue:function(e){var t=at();return ge===null?t.memoizedState=e:qf(t,ge.memoizedState,e)},useTransition:function(){var e=Os(qo)[0],t=at().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Lf,useId:Kf,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ha={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=kn(e),i=Ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(gt(t,e,o,r),Vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=kn(e),i=Ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(gt(t,e,o,r),Vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=kn(e),o=Ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=bn(e,o,r),t!==null&&(gt(t,e,r,n),Vi(t,e,r))}};function id(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(o,i):!0}function Xf(e,t,n){var r=!1,o=Pn,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=ze(t)?Gn:je.current,r=t.contextTypes,i=(r=r!=null)?Wr(e,o):Pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ha,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ad(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ha.enqueueReplaceState(t,t.state,null)}function Cl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},jc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=ze(t)?Gn:je.current,o.context=Wr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(kl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ha.enqueueReplaceState(o,o.state,null),va(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var n="",r=t;do n+=Pg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sa||(Sa=!0,_l=r),El(e,t)},n}function eh(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){El(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ey;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hy.bind(null,e,t,n),t.then(e,e))}function ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var ty=Kt.ReactCurrentOwner,De=!1;function Ie(e,t,n,r){t.child=e===null?jf(t,null,n,r):Vr(t,e.child,n,r)}function ud(e,t,n,r,o){n=n.render;var i=t.ref;return Rr(t,o),r=Lc(e,t,n,r,i,o),n=_c(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(ae&&n&&Sc(t),t.flags|=1,Ie(e,t,r,o),t.child)}function dd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!$c(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,th(e,t,i,r,o)):(e=Xi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(a,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function th(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zo(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,$t(e,t,o)}return Tl(e,t,n,r,o)}function nh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(kr,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(kr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(kr,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(kr,$e),$e|=r;return Ie(e,t,o,n),t.child}function rh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,o){var i=ze(n)?Gn:je.current;return i=Wr(t,i),Rr(t,o),n=Lc(e,t,n,r,i,o),r=_c(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(ae&&r&&Sc(t),t.flags|=1,Ie(e,t,n,o),t.child)}function pd(e,t,n,r,o){if(ze(n)){var i=!0;pa(t)}else i=!1;if(Rr(t,o),t.stateNode===null)Gi(e,t),Xf(t,n,r),Cl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=ze(n)?Gn:je.current,c=Wr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&ad(t,a,r,c),an=!1;var u=t.memoizedState;a.state=u,va(t,r,a,o),l=t.memoizedState,s!==r||u!==l||Be.current||an?(typeof d=="function"&&(kl(t,n,d,r),l=t.memoizedState),(s=an||id(t,n,s,r,u,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,If(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ct(t.type,s),a.props=c,p=t.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=ze(n)?Gn:je.current,l=Wr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||u!==l)&&ad(t,a,r,l),an=!1,u=t.memoizedState,a.state=u,va(t,r,a,o);var w=t.memoizedState;s!==p||u!==w||Be.current||an?(typeof g=="function"&&(kl(t,n,g,r),w=t.memoizedState),(c=an||id(t,n,c,r,u,w,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,o)}function Pl(e,t,n,r,o,i){rh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Qu(t,n,!1),$t(e,t,i);r=t.stateNode,ty.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Vr(t,e.child,null,i),t.child=Vr(t,null,s,i)):Ie(e,t,s,i),t.memoizedState=r.state,o&&Qu(t,n,!0),t.child}function oh(e){var t=e.stateNode;t.pendingContext?Yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yu(e,t.context,!1),Ac(e,t.containerInfo)}function fd(e,t,n,r,o){return $r(),Cc(o),t.flags|=256,Ie(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ih(e,t,n){var r=t.pendingProps,o=se.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(se,o&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=$a(a,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=jl(n),t.memoizedState=Rl,e):Dc(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return ny(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Cn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Cn(s,i):(i=Kn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?jl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return i=e.child,e=i.sibling,r=Cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dc(e,t){return t=$a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&Cc(r),Vr(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ny(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ls(Error(j(422))),Ni(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$a({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Vr(t,e.child,null,a),t.child.memoizedState=jl(a),t.memoizedState=Rl,i);if(!(t.mode&1))return Ni(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=Ls(i,r,void 0),Ni(e,t,a,r)}if(s=(a&e.childLanes)!==0,De||s){if(r=we,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wt(e,o),gt(r,e,o,-1))}return Wc(),r=Ls(Error(j(421))),Ni(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=my.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=xn(o.nextSibling),Ke=t,ae=!0,ft=null,e!==null&&(tt[nt++]=Bt,tt[nt++]=zt,tt[nt++]=Yn,Bt=e.id,zt=e.overflow,Yn=t),t=Dc(t,r.children),t.flags|=4096,t)}function hd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sl(e.return,t,n)}function _s(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ah(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ie(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,n,t);else if(e.tag===19)hd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_s(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ya(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_s(t,!0,n,null,i);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ry(e,t,n){switch(t.tag){case 3:oh(t),$r();break;case 5:Nf(t);break;case 1:ze(t.type)&&pa(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(ma,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?ih(e,t,n):(ee(se,se.current&1),e=$t(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ah(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,nh(e,t,n)}return $t(e,t,n)}var sh,Al,lh,ch;sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Al=function(){};lh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Un(At.current);var i=null;switch(n){case"input":o=Xs(e,o),r=Xs(e,r),i=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":o=tl(e,o),r=tl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ua)}rl(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&re("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ch=function(e,t,n,r){n!==r&&(t.flags|=4)};function ho(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function oy(e,t,n){var r=t.pendingProps;switch(kc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return ze(t.type)&&da(),Te(t),null;case 3:return r=t.stateNode,qr(),oe(Be),oe(je),Nc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Dl(ft),ft=null))),Al(e,t),Te(t),null;case 5:Ic(t);var o=Un($o.current);if(n=t.type,e!==null&&t.stateNode!=null)lh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Te(t),null}if(e=Un(At.current),Ai(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Rt]=t,r[Jo]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<ko.length;o++)re(ko[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":ku(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Eu(r,i),re("invalid",r)}rl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),o=["children",""+s]):Oo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&re("scroll",r)}switch(n){case"input":bi(r),Cu(r,i,!0);break;case"textarea":bi(r),Tu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ua)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Rt]=t,e[Jo]=r,sh(e,t,!1,!1),t.stateNode=e;e:{switch(a=ol(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<ko.length;o++)re(ko[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":ku(e,r),o=Xs(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":Eu(e,r),o=tl(e,r),re("invalid",e);break;default:o=r}rl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Bp(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fp(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(e,l):typeof l=="number"&&Lo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Oo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",e):l!=null&&lc(e,i,l,a))}switch(n){case"input":bi(e),Cu(e,r,!1);break;case"textarea":bi(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Cr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)ch(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Un($o.current),Un(At.current),Ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Te(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&qe!==null&&t.mode&1&&!(t.flags&128))Pf(),$r(),t.flags|=98560,i=!1;else if(i=Ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Rt]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else ft!==null&&(Dl(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):Wc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return qr(),Al(e,t),e===null&&Uo(t.stateNode.containerInfo),Te(t),null;case 10:return Pc(t.type._context),Te(t),null;case 17:return ze(t.type)&&da(),Te(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ho(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,ho(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>Gr&&(t.flags|=128,r=!0,ho(i,!1),t.lanes=4194304)}else{if(!r)if(e=ya(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ho(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Te(t),null}else 2*pe()-i.renderingStartTime>Gr&&n!==1073741824&&(t.flags|=128,r=!0,ho(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function iy(e,t){switch(kc(t),t.tag){case 1:return ze(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),oe(Be),oe(je),Nc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ic(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return qr(),null;case 10:return Pc(t.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var Oi=!1,Re=!1,ay=typeof WeakSet=="function"?WeakSet:Set,N=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){de(e,t,r)}}var md=!1;function sy(e,t){if(hl=sa,e=hf(),bc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,d=0,p=e,u=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)u=p,p=g;for(;;){if(p===e)break t;if(u===n&&++c===o&&(s=a),u===i&&++d===r&&(l=a),(g=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ml={focusedElem:e,selectionRange:n},sa=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,b=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:ct(t.type,y),b);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){de(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=md,md=!1,w}function Ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Il(t,n,i)}o=o.next}while(o!==r)}}function Ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uh(e){var t=e.alternate;t!==null&&(e.alternate=null,uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Jo],delete t[yl],delete t[Jv],delete t[Wv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dh(e){return e.tag===5||e.tag===3||e.tag===4}function gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ua));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}var be=null,pt=!1;function en(e,t,n){for(n=n.child;n!==null;)ph(e,t,n),n=n.sibling}function ph(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(_a,n)}catch{}switch(n.tag){case 5:Re||Sr(n,t);case 6:var r=be,o=pt;be=null,en(e,t,n),be=r,pt=o,be!==null&&(pt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(pt?(e=be,n=n.stateNode,e.nodeType===8?Rs(e.parentNode,n):e.nodeType===1&&Rs(e,n),Do(e)):Rs(be,n.stateNode));break;case 4:r=be,o=pt,be=n.stateNode.containerInfo,pt=!0,en(e,t,n),be=r,pt=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Il(n,t,a),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Re&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,en(e,t,n),Re=r):en(e,t,n);break;default:en(e,t,n)}}function vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ay),t.forEach(function(r){var o=gy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,pt=!1;break e;case 3:be=s.stateNode.containerInfo,pt=!0;break e;case 4:be=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(be===null)throw Error(j(160));ph(i,a,o),be=null,pt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){de(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}function fh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),St(e),r&4){try{Ao(3,e,e.return),Ja(3,e)}catch(y){de(e,e.return,y)}try{Ao(5,e,e.return)}catch(y){de(e,e.return,y)}}break;case 1:lt(t,e),St(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(lt(t,e),St(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var o=e.stateNode;try{Lo(o,"")}catch(y){de(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Lp(o,i),ol(s,a);var c=ol(s,i);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?Bp(o,p):d==="dangerouslySetInnerHTML"?Fp(o,p):d==="children"?Lo(o,p):lc(o,d,p,c)}switch(s){case"input":Zs(o,i);break;case"textarea":_p(o,i);break;case"select":var u=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Cr(o,!!i.multiple,g,!1):u!==!!i.multiple&&(i.defaultValue!=null?Cr(o,!!i.multiple,i.defaultValue,!0):Cr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jo]=i}catch(y){de(e,e.return,y)}}break;case 6:if(lt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){de(e,e.return,y)}}break;case 3:if(lt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(y){de(e,e.return,y)}break;case 4:lt(t,e),St(e);break;case 13:lt(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Uc=pe())),r&4&&vd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||d,lt(t,e),Re=c):lt(t,e),St(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(p=N=d;N!==null;){switch(u=N,g=u.child,u.tag){case 0:case 11:case 14:case 15:Ao(4,u,u.return);break;case 1:Sr(u,u.return);var w=u.stateNode;if(typeof w.componentWillUnmount=="function"){r=u,n=u.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){de(r,n,y)}}break;case 5:Sr(u,u.return);break;case 22:if(u.memoizedState!==null){wd(p);continue}}g!==null?(g.return=u,N=g):wd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Dp("display",a))}catch(y){de(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){de(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),St(e),r&4&&vd(e);break;case 21:break;default:lt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dh(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lo(o,""),r.flags&=-33);var i=gd(e);Ll(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=gd(e);Ol(e,s,a);break;default:throw Error(j(161))}}catch(l){de(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ly(e,t,n){N=e,hh(e)}function hh(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Oi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Re;s=Oi;var c=Re;if(Oi=a,(Re=l)&&!c)for(N=o;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?xd(o):l!==null?(l.return=a,N=l):xd(o);for(;i!==null;)N=i,hh(i),i=i.sibling;N=o,Oi=s,Re=c}yd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):yd(e)}}function yd(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&nd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nd(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Do(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Re||t.flags&512&&Nl(t)}catch(u){de(t,t.return,u)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function wd(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function xd(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ja(4,t)}catch(l){de(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){de(t,o,l)}}var i=t.return;try{Nl(t)}catch(l){de(t,i,l)}break;case 5:var a=t.return;try{Nl(t)}catch(l){de(t,a,l)}}}catch(l){de(t,t.return,l)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var cy=Math.ceil,ba=Kt.ReactCurrentDispatcher,Bc=Kt.ReactCurrentOwner,ot=Kt.ReactCurrentBatchConfig,q=0,we=null,he=null,Se=0,$e=0,kr=On(0),ve=0,Go=null,Xn=0,Wa=0,zc=0,Io=null,Fe=null,Uc=0,Gr=1/0,Mt=null,Sa=!1,_l=null,Sn=null,Li=!1,mn=null,ka=0,No=0,Ml=null,Yi=-1,Qi=0;function Le(){return q&6?pe():Yi!==-1?Yi:Yi=pe()}function kn(e){return e.mode&1?q&2&&Se!==0?Se&-Se:Vv.transition!==null?(Qi===0&&(Qi=Qp()),Qi):(e=X,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function gt(e,t,n,r){if(50<No)throw No=0,Ml=null,Error(j(185));si(e,n,r),(!(q&2)||e!==we)&&(e===we&&(!(q&2)&&(Wa|=n),ve===4&&ln(e,Se)),Ue(e,r),n===1&&q===0&&!(t.mode&1)&&(Gr=pe()+500,za&&Ln()))}function Ue(e,t){var n=e.callbackNode;Vg(e,t);var r=aa(e,e===we?Se:0);if(r===0)n!==null&&ju(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ju(n),t===1)e.tag===0?$v(bd.bind(null,e)):Cf(bd.bind(null,e)),Uv(function(){!(q&6)&&Ln()}),n=null;else{switch(Xp(r)){case 1:n=fc;break;case 4:n=Gp;break;case 16:n=ia;break;case 536870912:n=Yp;break;default:n=ia}n=Sh(n,mh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mh(e,t){if(Yi=-1,Qi=0,q&6)throw Error(j(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=aa(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var o=q;q|=2;var i=vh();(we!==e||Se!==t)&&(Mt=null,Gr=pe()+500,qn(e,t));do try{py();break}catch(s){gh(e,s)}while(!0);Tc(),ba.current=i,q=o,he!==null?t=0:(we=null,Se=0,t=ve)}if(t!==0){if(t===2&&(o=cl(e),o!==0&&(r=o,t=Fl(e,o))),t===1)throw n=Go,qn(e,0),ln(e,r),Ue(e,pe()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,!(r&30)&&!uy(o)&&(t=Ca(e,r),t===2&&(i=cl(e),i!==0&&(r=i,t=Fl(e,i))),t===1))throw n=Go,qn(e,0),ln(e,r),Ue(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Dn(e,Fe,Mt);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Uc+500-pe(),10<t)){if(aa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=vl(Dn.bind(null,e,Fe,Mt),t);break}Dn(e,Fe,Mt);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-mt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cy(r/1960))-r,10<r){e.timeoutHandle=vl(Dn.bind(null,e,Fe,Mt),r);break}Dn(e,Fe,Mt);break;case 5:Dn(e,Fe,Mt);break;default:throw Error(j(329))}}}return Ue(e,pe()),e.callbackNode===n?mh.bind(null,e):null}function Fl(e,t){var n=Io;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Dl(t)),e}function Dl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function uy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~zc,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function bd(e){if(q&6)throw Error(j(327));jr();var t=aa(e,0);if(!(t&1))return Ue(e,pe()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=cl(e);r!==0&&(t=r,n=Fl(e,r))}if(n===1)throw n=Go,qn(e,0),ln(e,t),Ue(e,pe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Fe,Mt),Ue(e,pe()),null}function Hc(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Gr=pe()+500,za&&Ln())}}function Zn(e){mn!==null&&mn.tag===0&&!(q&6)&&jr();var t=q;q|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,q=t,!(q&6)&&Ln()}}function Jc(){$e=kr.current,oe(kr)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zv(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(kc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:qr(),oe(Be),oe(je),Nc();break;case 5:Ic(r);break;case 4:qr();break;case 13:oe(se);break;case 19:oe(se);break;case 10:Pc(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(we=e,he=e=Cn(e.current,null),Se=$e=t,ve=0,Go=null,zc=Wa=Xn=0,Fe=Io=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}zn=null}return e}function gh(e,t){do{var n=he;try{if(Tc(),qi.current=xa,wa){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wa=!1}if(Qn=0,ye=ge=le=null,jo=!1,Vo=0,Bc.current=null,n===null||n.return===null){ve=1,Go=t,he=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ld(a);if(g!==null){g.flags&=-257,cd(g,a,s,i,t),g.mode&1&&sd(i,c,t),t=g,l=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){sd(i,c,t),Wc();break e}l=Error(j(426))}}else if(ae&&s.mode&1){var b=ld(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),cd(b,a,s,i,t),Cc(Kr(l,s));break e}}i=l=Kr(l,s),ve!==4&&(ve=2),Io===null?Io=[i]:Io.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Zf(i,l,t);td(i,h);break e;case 1:s=l;var f=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Sn===null||!Sn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=eh(i,s,t);td(i,S);break e}}i=i.return}while(i!==null)}wh(n)}catch(k){t=k,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function vh(){var e=ba.current;return ba.current=xa,e===null?xa:e}function Wc(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||!(Xn&268435455)&&!(Wa&268435455)||ln(we,Se)}function Ca(e,t){var n=q;q|=2;var r=vh();(we!==e||Se!==t)&&(Mt=null,qn(e,t));do try{dy();break}catch(o){gh(e,o)}while(!0);if(Tc(),q=n,ba.current=r,he!==null)throw Error(j(261));return we=null,Se=0,ve}function dy(){for(;he!==null;)yh(he)}function py(){for(;he!==null&&!Fg();)yh(he)}function yh(e){var t=bh(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?wh(e):he=t,Bc.current=null}function wh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=iy(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(n=oy(n,t,$e),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function Dn(e,t,n){var r=X,o=ot.transition;try{ot.transition=null,X=1,fy(e,t,n,r)}finally{ot.transition=o,X=r}return null}function fy(e,t,n,r){do jr();while(mn!==null);if(q&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qg(e,i),e===we&&(he=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,Sh(ia,function(){return jr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ot.transition,ot.transition=null;var a=X;X=1;var s=q;q|=4,Bc.current=null,sy(e,n),fh(n,e),Ov(ml),sa=!!hl,ml=hl=null,e.current=n,ly(n),Dg(),q=s,X=a,ot.transition=i}else e.current=n;if(Li&&(Li=!1,mn=e,ka=o),i=e.pendingLanes,i===0&&(Sn=null),Ug(n.stateNode),Ue(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Sa)throw Sa=!1,e=_l,_l=null,e;return ka&1&&e.tag!==0&&jr(),i=e.pendingLanes,i&1?e===Ml?No++:(No=0,Ml=e):No=0,Ln(),null}function jr(){if(mn!==null){var e=Xp(ka),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,ka=0,q&6)throw Error(j(331));var o=q;for(q|=4,N=e.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Ao(8,d,i)}var p=d.child;if(p!==null)p.return=d,N=p;else for(;N!==null;){d=N;var u=d.sibling,g=d.return;if(uh(d),d===c){N=null;break}if(u!==null){u.return=g,N=u;break}N=g}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ao(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,N=h;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){a=N;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,N=v;else e:for(a=f;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ja(9,s)}}catch(k){de(s,s.return,k)}if(s===a){N=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,N=S;break e}N=s.return}}if(q=o,Ln(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(_a,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function Sd(e,t,n){t=Kr(n,t),t=Zf(e,t,1),e=bn(e,t,1),t=Le(),e!==null&&(si(e,1,t),Ue(e,t))}function de(e,t,n){if(e.tag===3)Sd(e,e,n);else for(;t!==null;){if(t.tag===3){Sd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Kr(n,e),e=eh(t,e,1),t=bn(t,e,1),e=Le(),t!==null&&(si(t,1,e),Ue(t,e));break}}t=t.return}}function hy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Se&n)===n&&(ve===4||ve===3&&(Se&130023424)===Se&&500>pe()-Uc?qn(e,0):zc|=n),Ue(e,t)}function xh(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var n=Le();e=Wt(e,t),e!==null&&(si(e,t,n),Ue(e,n))}function my(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xh(e,n)}function gy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),xh(e,n)}var bh;bh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,ry(e,t,n);De=!!(e.flags&131072)}else De=!1,ae&&t.flags&1048576&&Ef(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var o=Wr(t,je.current);Rr(t,n),o=Lc(null,t,r,e,o,n);var i=_c();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,pa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,jc(t),o.updater=Ha,t.stateNode=o,o._reactInternals=t,Cl(t,r,e,n),t=Pl(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Sc(t),Ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=yy(r),e=ct(r,e),o){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=pd(null,t,r,e,n);break e;case 11:t=ud(null,t,r,e,n);break e;case 14:t=dd(null,t,r,ct(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Tl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),pd(e,t,r,o,n);case 3:e:{if(oh(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,If(e,t),va(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Kr(Error(j(423)),t),t=fd(e,t,r,n,o);break e}else if(r!==o){o=Kr(Error(j(424)),t),t=fd(e,t,r,n,o);break e}else for(qe=xn(t.stateNode.containerInfo.firstChild),Ke=t,ae=!0,ft=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===o){t=$t(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Nf(t),e===null&&bl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,gl(r,o)?a=null:i!==null&&gl(r,i)&&(t.flags|=32),rh(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&bl(t),null;case 13:return ih(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),ud(e,t,r,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ee(ma,r._currentValue),r._currentValue=a,i!==null)if(vt(i.value,a)){if(i.children===o.children&&!Be.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ut(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Sl(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rr(t,n),o=it(o),r=r(o),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),dd(e,t,r,o,n);case 15:return th(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Gi(e,t),t.tag=1,ze(r)?(e=!0,pa(t)):e=!1,Rr(t,n),Xf(t,r,o),Cl(t,r,o,n),Pl(null,t,r,!0,e,n);case 19:return ah(e,t,n);case 22:return nh(e,t,n)}throw Error(j(156,t.tag))};function Sh(e,t){return Kp(e,t)}function vy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new vy(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yy(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uc)return 11;if(e===dc)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")$c(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return Kn(n.children,o,i,t);case cc:a=8,o|=8;break;case Ks:return e=rt(12,n,t,o|2),e.elementType=Ks,e.lanes=i,e;case Gs:return e=rt(13,n,t,o),e.elementType=Gs,e.lanes=i,e;case Ys:return e=rt(19,n,t,o),e.elementType=Ys,e.lanes=i,e;case Ip:return $a(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jp:a=10;break e;case Ap:a=9;break e;case uc:a=11;break e;case dc:a=14;break e;case on:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=rt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function $a(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Ip,e.lanes=n,e.stateNode={isHidden:!1},e}function Ms(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wy(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vs(0),this.expirationTimes=vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,o,i,a,s,l){return e=new wy(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(i),e}function xy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kh(e){if(!e)return Pn;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ze(n))return kf(e,n,t)}return t}function Ch(e,t,n,r,o,i,a,s,l){return e=Vc(n,r,!0,e,o,i,a,s,l),e.context=kh(null),n=e.current,r=Le(),o=kn(n),i=Ut(r,o),i.callback=t??null,bn(n,i,o),e.current.lanes=o,si(e,o,r),Ue(e,r),e}function Va(e,t,n,r){var o=t.current,i=Le(),a=kn(o);return n=kh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(o,t,a),e!==null&&(gt(e,o,a,i),Vi(e,o,a)),a}function Ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qc(e,t){kd(e,t),(e=e.alternate)&&kd(e,t)}function by(){return null}var Eh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}qa.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Va(e,t,null,null)};qa.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Va(null,e,null,null)}),t[Jt]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sn.length&&t!==0&&t<sn[n].priority;n++);sn.splice(n,0,e),n===0&&rf(e)}};function Gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function Sy(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ea(a);i.call(c)}}var a=Ch(t,r,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=a,e[Jt]=a.current,Uo(e.nodeType===8?e.parentNode:e),Zn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ea(l);s.call(c)}}var l=Vc(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=l,e[Jt]=l.current,Uo(e.nodeType===8?e.parentNode:e),Zn(function(){Va(t,l,n,r)}),l}function Ga(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Ea(a);s.call(l)}}Va(t,a,e,o)}else a=Sy(n,t,e,o,r);return Ea(a)}Zp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=So(t.pendingLanes);n!==0&&(hc(t,n|1),Ue(t,pe()),!(q&6)&&(Gr=pe()+500,Ln()))}break;case 13:Zn(function(){var r=Wt(e,1);if(r!==null){var o=Le();gt(r,e,1,o)}}),qc(e,1)}};mc=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Le();gt(t,e,134217728,n)}qc(e,134217728)}};ef=function(e){if(e.tag===13){var t=kn(e),n=Wt(e,t);if(n!==null){var r=Le();gt(n,e,t,r)}qc(e,t)}};tf=function(){return X};nf=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};al=function(e,t,n){switch(t){case"input":if(Zs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ba(r);if(!o)throw Error(j(90));Op(r),Zs(r,o)}}}break;case"textarea":_p(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Hp=Hc;Jp=Zn;var ky={usingClientEntryPoint:!1,Events:[ci,vr,Ba,zp,Up,Hc]},mo={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cy={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vp(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{_a=_i.inject(Cy),jt=_i}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(t))throw Error(j(200));return xy(e,t,null,n)};Qe.createRoot=function(e,t){if(!Gc(e))throw Error(j(299));var n=!1,r="",o=Eh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Vc(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,Uo(e.nodeType===8?e.parentNode:e),new Kc(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Vp(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Zn(e)};Qe.hydrate=function(e,t,n){if(!Ka(t))throw Error(j(200));return Ga(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Gc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Eh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ch(t,null,e,1,n??null,o,!1,i,a),e[Jt]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qa(t)};Qe.render=function(e,t,n){if(!Ka(t))throw Error(j(200));return Ga(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Ka(e))throw Error(j(40));return e._reactRootContainer?(Zn(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Hc;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ka(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ga(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Th(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th)}catch(e){console.error(e)}}Th(),Ep.exports=Qe;var Ya=Ep.exports;const Ey=ii(Ya);var Ph,Ed=Ya;Ph=Ed.createRoot,Ed.hydrateRoot;var Ty=e=>{switch(e){case"success":return jy;case"info":return Iy;case"warning":return Ay;case"error":return Ny;default:return null}},Py=Array(12).fill(0),Ry=({visible:e})=>A.createElement("div",{className:"sonner-loading-wrapper","data-visible":e},A.createElement("div",{className:"sonner-spinner"},Py.map((t,n)=>A.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),jy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Ay=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),Iy=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Ny=A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},A.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Oy=()=>{let[e,t]=A.useState(document.hidden);return A.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Bl=1,Ly=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Bl++,i=this.toasts.find(s=>s.id===o),a=e.dismissible===void 0?!0:e.dismissible;return i?this.toasts=this.toasts.map(s=>s.id===o?(this.publish({...s,...e,id:o,title:n}),{...s,...e,id:o,dismissible:a,title:n}):s):this.addToast({title:n,...r,dismissible:a,id:o}),o},this.dismiss=e=>(e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0;return r.then(async i=>{if(My(i)&&!i.ok){o=!1;let a=typeof t.error=="function"?await t.error(`HTTP error! status: ${i.status}`):t.error,s=typeof t.description=="function"?await t.description(`HTTP error! status: ${i.status}`):t.description;this.create({id:n,type:"error",message:a,description:s})}else if(t.success!==void 0){o=!1;let a=typeof t.success=="function"?await t.success(i):t.success,s=typeof t.description=="function"?await t.description(i):t.description;this.create({id:n,type:"success",message:a,description:s})}}).catch(async i=>{if(t.error!==void 0){o=!1;let a=typeof t.error=="function"?await t.error(i):t.error,s=typeof t.description=="function"?await t.description(i):t.description;this.create({id:n,type:"error",message:a,description:s})}}).finally(()=>{var i;o&&(this.dismiss(n),n=void 0),(i=t.finally)==null||i.call(t)}),n},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Bl++;return this.create({jsx:e(n),id:n,...t}),n},this.subscribers=[],this.toasts=[]}},We=new Ly,_y=(e,t)=>{let n=(t==null?void 0:t.id)||Bl++;return We.addToast({title:e,...t,id:n}),n},My=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",Fy=_y,Dy=()=>We.toasts,Rh=Object.assign(Fy,{success:We.success,info:We.info,warning:We.warning,error:We.error,custom:We.custom,message:We.message,promise:We.promise,dismiss:We.dismiss,loading:We.loading},{getHistory:Dy});function By(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}By(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Mi(e){return e.label!==void 0}var zy=3,Uy="32px",Hy=4e3,Jy=356,Wy=14,$y=20,Vy=200;function qy(...e){return e.filter(Boolean).join(" ")}var Ky=e=>{var t,n,r,o,i,a,s,l,c,d;let{invert:p,toast:u,unstyled:g,interacting:w,setHeights:y,visibleToasts:b,heights:h,index:f,toasts:v,expanded:S,removeToast:k,defaultRichColors:E,closeButton:T,style:R,cancelButtonStyle:M,actionButtonStyle:O,className:U="",descriptionClassName:F="",duration:$,position:V,gap:ie,loadingIcon:J,expandByDefault:K,classNames:C,icons:I,closeButtonAriaLabel:_="Close toast",pauseWhenPageIsHidden:L,cn:D}=e,[G,fe]=A.useState(!1),[He,Q]=A.useState(!1),[st,Gt]=A.useState(!1),[Yt,Qt]=A.useState(!1),[hi,ar]=A.useState(0),[Mn,ao]=A.useState(0),mi=A.useRef(null),Xt=A.useRef(null),ss=f===0,ls=f+1<=b,xe=u.type,sr=u.dismissible!==!1,Jm=u.className||"",Wm=u.descriptionClassName||"",gi=A.useMemo(()=>h.findIndex(B=>B.toastId===u.id)||0,[h,u.id]),$m=A.useMemo(()=>{var B;return(B=u.closeButton)!=null?B:T},[u.closeButton,T]),du=A.useMemo(()=>u.duration||$||Hy,[u.duration,$]),cs=A.useRef(0),lr=A.useRef(0),pu=A.useRef(0),cr=A.useRef(null),[fu,Vm]=V.split("-"),hu=A.useMemo(()=>h.reduce((B,te,Z)=>Z>=gi?B:B+te.height,0),[h,gi]),mu=Oy(),qm=u.invert||p,us=xe==="loading";lr.current=A.useMemo(()=>gi*ie+hu,[gi,hu]),A.useEffect(()=>{fe(!0)},[]),A.useLayoutEffect(()=>{if(!G)return;let B=Xt.current,te=B.style.height;B.style.height="auto";let Z=B.getBoundingClientRect().height;B.style.height=te,ao(Z),y(xt=>xt.find(bt=>bt.toastId===u.id)?xt.map(bt=>bt.toastId===u.id?{...bt,height:Z}:bt):[{toastId:u.id,height:Z,position:u.position},...xt])},[G,u.title,u.description,y,u.id]);let Zt=A.useCallback(()=>{Q(!0),ar(lr.current),y(B=>B.filter(te=>te.toastId!==u.id)),setTimeout(()=>{k(u)},Vy)},[u,k,y,lr]);A.useEffect(()=>{if(u.promise&&xe==="loading"||u.duration===1/0||u.type==="loading")return;let B,te=du;return S||w||L&&mu?(()=>{if(pu.current<cs.current){let Z=new Date().getTime()-cs.current;te=te-Z}pu.current=new Date().getTime()})():te!==1/0&&(cs.current=new Date().getTime(),B=setTimeout(()=>{var Z;(Z=u.onAutoClose)==null||Z.call(u,u),Zt()},te)),()=>clearTimeout(B)},[S,w,K,u,du,Zt,u.promise,xe,L,mu]),A.useEffect(()=>{let B=Xt.current;if(B){let te=B.getBoundingClientRect().height;return ao(te),y(Z=>[{toastId:u.id,height:te,position:u.position},...Z]),()=>y(Z=>Z.filter(xt=>xt.toastId!==u.id))}},[y,u.id]),A.useEffect(()=>{u.delete&&Zt()},[Zt,u.delete]);function Km(){return I!=null&&I.loading?A.createElement("div",{className:"sonner-loader","data-visible":xe==="loading"},I.loading):J?A.createElement("div",{className:"sonner-loader","data-visible":xe==="loading"},J):A.createElement(Ry,{visible:xe==="loading"})}return A.createElement("li",{"aria-live":u.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:Xt,className:D(U,Jm,C==null?void 0:C.toast,(t=u==null?void 0:u.classNames)==null?void 0:t.toast,C==null?void 0:C.default,C==null?void 0:C[xe],(n=u==null?void 0:u.classNames)==null?void 0:n[xe]),"data-sonner-toast":"","data-rich-colors":(r=u.richColors)!=null?r:E,"data-styled":!(u.jsx||u.unstyled||g),"data-mounted":G,"data-promise":!!u.promise,"data-removed":He,"data-visible":ls,"data-y-position":fu,"data-x-position":Vm,"data-index":f,"data-front":ss,"data-swiping":st,"data-dismissible":sr,"data-type":xe,"data-invert":qm,"data-swipe-out":Yt,"data-expanded":!!(S||K&&G),style:{"--index":f,"--toasts-before":f,"--z-index":v.length-f,"--offset":`${He?hi:lr.current}px`,"--initial-height":K?"auto":`${Mn}px`,...R,...u.style},onPointerDown:B=>{us||!sr||(mi.current=new Date,ar(lr.current),B.target.setPointerCapture(B.pointerId),B.target.tagName!=="BUTTON"&&(Gt(!0),cr.current={x:B.clientX,y:B.clientY}))},onPointerUp:()=>{var B,te,Z,xt;if(Yt||!sr)return;cr.current=null;let bt=Number(((B=Xt.current)==null?void 0:B.style.getPropertyValue("--swipe-amount").replace("px",""))||0),vi=new Date().getTime()-((te=mi.current)==null?void 0:te.getTime()),Gm=Math.abs(bt)/vi;if(Math.abs(bt)>=$y||Gm>.11){ar(lr.current),(Z=u.onDismiss)==null||Z.call(u,u),Zt(),Qt(!0);return}(xt=Xt.current)==null||xt.style.setProperty("--swipe-amount","0px"),Gt(!1)},onPointerMove:B=>{var te;if(!cr.current||!sr)return;let Z=B.clientY-cr.current.y,xt=B.clientX-cr.current.x,bt=(fu==="top"?Math.min:Math.max)(0,Z),vi=B.pointerType==="touch"?10:2;Math.abs(bt)>vi?(te=Xt.current)==null||te.style.setProperty("--swipe-amount",`${Z}px`):Math.abs(xt)>vi&&(cr.current=null)}},$m&&!u.jsx?A.createElement("button",{"aria-label":_,"data-disabled":us,"data-close-button":!0,onClick:us||!sr?()=>{}:()=>{var B;Zt(),(B=u.onDismiss)==null||B.call(u,u)},className:D(C==null?void 0:C.closeButton,(o=u==null?void 0:u.classNames)==null?void 0:o.closeButton)},A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},A.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),A.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,u.jsx||A.isValidElement(u.title)?u.jsx||u.title:A.createElement(A.Fragment,null,xe||u.icon||u.promise?A.createElement("div",{"data-icon":"",className:D(C==null?void 0:C.icon,(i=u==null?void 0:u.classNames)==null?void 0:i.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||Km():null,u.type!=="loading"?u.icon||(I==null?void 0:I[xe])||Ty(xe):null):null,A.createElement("div",{"data-content":"",className:D(C==null?void 0:C.content,(a=u==null?void 0:u.classNames)==null?void 0:a.content)},A.createElement("div",{"data-title":"",className:D(C==null?void 0:C.title,(s=u==null?void 0:u.classNames)==null?void 0:s.title)},u.title),u.description?A.createElement("div",{"data-description":"",className:D(F,Wm,C==null?void 0:C.description,(l=u==null?void 0:u.classNames)==null?void 0:l.description)},u.description):null),A.isValidElement(u.cancel)?u.cancel:u.cancel&&Mi(u.cancel)?A.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||M,onClick:B=>{var te,Z;Mi(u.cancel)&&sr&&((Z=(te=u.cancel).onClick)==null||Z.call(te,B),Zt())},className:D(C==null?void 0:C.cancelButton,(c=u==null?void 0:u.classNames)==null?void 0:c.cancelButton)},u.cancel.label):null,A.isValidElement(u.action)?u.action:u.action&&Mi(u.action)?A.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||O,onClick:B=>{var te,Z;Mi(u.action)&&(B.defaultPrevented||((Z=(te=u.action).onClick)==null||Z.call(te,B),Zt()))},className:D(C==null?void 0:C.actionButton,(d=u==null?void 0:u.classNames)==null?void 0:d.actionButton)},u.action.label):null))};function Td(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}var Gy=e=>{let{invert:t,position:n="bottom-right",hotkey:r=["altKey","KeyT"],expand:o,closeButton:i,className:a,offset:s,theme:l="light",richColors:c,duration:d,style:p,visibleToasts:u=zy,toastOptions:g,dir:w=Td(),gap:y=Wy,loadingIcon:b,icons:h,containerAriaLabel:f="Notifications",pauseWhenPageIsHidden:v,cn:S=qy}=e,[k,E]=A.useState([]),T=A.useMemo(()=>Array.from(new Set([n].concat(k.filter(L=>L.position).map(L=>L.position)))),[k,n]),[R,M]=A.useState([]),[O,U]=A.useState(!1),[F,$]=A.useState(!1),[V,ie]=A.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),J=A.useRef(null),K=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=A.useRef(null),I=A.useRef(!1),_=A.useCallback(L=>{var D;(D=k.find(G=>G.id===L.id))!=null&&D.delete||We.dismiss(L.id),E(G=>G.filter(({id:fe})=>fe!==L.id))},[k]);return A.useEffect(()=>We.subscribe(L=>{if(L.dismiss){E(D=>D.map(G=>G.id===L.id?{...G,delete:!0}:G));return}setTimeout(()=>{Ey.flushSync(()=>{E(D=>{let G=D.findIndex(fe=>fe.id===L.id);return G!==-1?[...D.slice(0,G),{...D[G],...L},...D.slice(G+1)]:[L,...D]})})})}),[]),A.useEffect(()=>{if(l!=="system"){ie(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?ie("dark"):ie("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:L})=>{ie(L?"dark":"light")})},[l]),A.useEffect(()=>{k.length<=1&&U(!1)},[k]),A.useEffect(()=>{let L=D=>{var G,fe;r.every(He=>D[He]||D.code===He)&&(U(!0),(G=J.current)==null||G.focus()),D.code==="Escape"&&(document.activeElement===J.current||(fe=J.current)!=null&&fe.contains(document.activeElement))&&U(!1)};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[r]),A.useEffect(()=>{if(J.current)return()=>{C.current&&(C.current.focus({preventScroll:!0}),C.current=null,I.current=!1)}},[J.current]),k.length?A.createElement("section",{"aria-label":`${f} ${K}`,tabIndex:-1},T.map((L,D)=>{var G;let[fe,He]=L.split("-");return A.createElement("ol",{key:L,dir:w==="auto"?Td():w,tabIndex:-1,ref:J,className:a,"data-sonner-toaster":!0,"data-theme":V,"data-y-position":fe,"data-x-position":He,style:{"--front-toast-height":`${((G=R[0])==null?void 0:G.height)||0}px`,"--offset":typeof s=="number"?`${s}px`:s||Uy,"--width":`${Jy}px`,"--gap":`${y}px`,...p},onBlur:Q=>{I.current&&!Q.currentTarget.contains(Q.relatedTarget)&&(I.current=!1,C.current&&(C.current.focus({preventScroll:!0}),C.current=null))},onFocus:Q=>{Q.target instanceof HTMLElement&&Q.target.dataset.dismissible==="false"||I.current||(I.current=!0,C.current=Q.relatedTarget)},onMouseEnter:()=>U(!0),onMouseMove:()=>U(!0),onMouseLeave:()=>{F||U(!1)},onPointerDown:Q=>{Q.target instanceof HTMLElement&&Q.target.dataset.dismissible==="false"||$(!0)},onPointerUp:()=>$(!1)},k.filter(Q=>!Q.position&&D===0||Q.position===L).map((Q,st)=>{var Gt,Yt;return A.createElement(Ky,{key:Q.id,icons:h,index:st,toast:Q,defaultRichColors:c,duration:(Gt=g==null?void 0:g.duration)!=null?Gt:d,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:t,visibleToasts:u,closeButton:(Yt=g==null?void 0:g.closeButton)!=null?Yt:i,interacting:F,position:L,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:_,toasts:k.filter(Qt=>Qt.position==Q.position),heights:R.filter(Qt=>Qt.position==Q.position),setHeights:M,expandByDefault:o,gap:y,loadingIcon:b,expanded:O,pauseWhenPageIsHidden:v,cn:S})}))})):null};const Yy=({...e})=>m.jsx(Gy,{className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e});function Dt(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Qy(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function jh(...e){return t=>e.forEach(n=>Qy(n,t))}function rr(...e){return x.useCallback(jh(...e),e)}function Xy(e,t=[]){let n=[];function r(i,a){const s=x.createContext(a),l=n.length;n=[...n,a];const c=p=>{var h;const{scope:u,children:g,...w}=p,y=((h=u==null?void 0:u[e])==null?void 0:h[l])||s,b=x.useMemo(()=>w,Object.values(w));return m.jsx(y.Provider,{value:b,children:g})};c.displayName=i+"Provider";function d(p,u){var y;const g=((y=u==null?void 0:u[e])==null?void 0:y[l])||s,w=x.useContext(g);if(w)return w;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[c,d]}const o=()=>{const i=n.map(a=>x.createContext(a));return function(s){const l=(s==null?void 0:s[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Zy(o,...t)]}function Zy(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((s,{useScope:l,scopeName:c})=>{const p=l(i)[`__scope${c}`];return{...s,...p}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}var Ah=x.forwardRef((e,t)=>{const{children:n,...r}=e,o=x.Children.toArray(n),i=o.find(e0);if(i){const a=i.props.children,s=o.map(l=>l===i?x.Children.count(a)>1?x.Children.only(null):x.isValidElement(a)?a.props.children:null:l);return m.jsx(zl,{...r,ref:t,children:x.isValidElement(a)?x.cloneElement(a,void 0,s):null})}return m.jsx(zl,{...r,ref:t,children:n})});Ah.displayName="Slot";var zl=x.forwardRef((e,t)=>{const{children:n,...r}=e;if(x.isValidElement(n)){const o=n0(n);return x.cloneElement(n,{...t0(r,n.props),ref:t?jh(t,o):o})}return x.Children.count(n)>1?x.Children.only(null):null});zl.displayName="SlotClone";var Ih=({children:e})=>m.jsx(m.Fragment,{children:e});function e0(e){return x.isValidElement(e)&&e.type===Ih}function t0(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function n0(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var r0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],or=r0.reduce((e,t)=>{const n=x.forwardRef((r,o)=>{const{asChild:i,...a}=r,s=i?Ah:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),m.jsx(s,{...a,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function o0(e,t){e&&Ya.flushSync(()=>e.dispatchEvent(t))}function Qa(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function i0(e,t=globalThis==null?void 0:globalThis.document){const n=Qa(e);x.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var a0="DismissableLayer",Ul="dismissableLayer.update",s0="dismissableLayer.pointerDownOutside",l0="dismissableLayer.focusOutside",Pd,Nh=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Oh=x.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:a,onDismiss:s,...l}=e,c=x.useContext(Nh),[d,p]=x.useState(null),u=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,g]=x.useState({}),w=rr(t,T=>p(T)),y=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),h=y.indexOf(b),f=d?y.indexOf(d):-1,v=c.layersWithOutsidePointerEventsDisabled.size>0,S=f>=h,k=d0(T=>{const R=T.target,M=[...c.branches].some(O=>O.contains(R));!S||M||(o==null||o(T),a==null||a(T),T.defaultPrevented||s==null||s())},u),E=p0(T=>{const R=T.target;[...c.branches].some(O=>O.contains(R))||(i==null||i(T),a==null||a(T),T.defaultPrevented||s==null||s())},u);return i0(T=>{f===c.layers.size-1&&(r==null||r(T),!T.defaultPrevented&&s&&(T.preventDefault(),s()))},u),x.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Pd=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Rd(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=Pd)}},[d,u,n,c]),x.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Rd())},[d,c]),x.useEffect(()=>{const T=()=>g({});return document.addEventListener(Ul,T),()=>document.removeEventListener(Ul,T)},[]),m.jsx(or.div,{...l,ref:w,style:{pointerEvents:v?S?"auto":"none":void 0,...e.style},onFocusCapture:Dt(e.onFocusCapture,E.onFocusCapture),onBlurCapture:Dt(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:Dt(e.onPointerDownCapture,k.onPointerDownCapture)})});Oh.displayName=a0;var c0="DismissableLayerBranch",u0=x.forwardRef((e,t)=>{const n=x.useContext(Nh),r=x.useRef(null),o=rr(t,r);return x.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),m.jsx(or.div,{...e,ref:o})});u0.displayName=c0;function d0(e,t=globalThis==null?void 0:globalThis.document){const n=Qa(e),r=x.useRef(!1),o=x.useRef(()=>{});return x.useEffect(()=>{const i=s=>{if(s.target&&!r.current){let l=function(){Lh(s0,n,c,{discrete:!0})};const c={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function p0(e,t=globalThis==null?void 0:globalThis.document){const n=Qa(e),r=x.useRef(!1);return x.useEffect(()=>{const o=i=>{i.target&&!r.current&&Lh(l0,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Rd(){const e=new CustomEvent(Ul);document.dispatchEvent(e)}function Lh(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?o0(o,i):o.dispatchEvent(i)}var Yo=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{};const f0=["top","right","bottom","left"],Rn=Math.min,Ve=Math.max,Ta=Math.round,Fi=Math.floor,jn=e=>({x:e,y:e}),h0={left:"right",right:"left",bottom:"top",top:"bottom"},m0={start:"end",end:"start"};function Hl(e,t,n){return Ve(e,Rn(t,n))}function Vt(e,t){return typeof e=="function"?e(t):e}function qt(e){return e.split("-")[0]}function no(e){return e.split("-")[1]}function Yc(e){return e==="x"?"y":"x"}function Qc(e){return e==="y"?"height":"width"}function An(e){return["top","bottom"].includes(qt(e))?"y":"x"}function Xc(e){return Yc(An(e))}function g0(e,t,n){n===void 0&&(n=!1);const r=no(e),o=Xc(e),i=Qc(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Pa(a)),[a,Pa(a)]}function v0(e){const t=Pa(e);return[Jl(e),t,Jl(t)]}function Jl(e){return e.replace(/start|end/g,t=>m0[t])}function y0(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}function w0(e,t,n,r){const o=no(e);let i=y0(qt(e),n==="start",r);return o&&(i=i.map(a=>a+"-"+o),t&&(i=i.concat(i.map(Jl)))),i}function Pa(e){return e.replace(/left|right|bottom|top/g,t=>h0[t])}function x0(e){return{top:0,right:0,bottom:0,left:0,...e}}function _h(e){return typeof e!="number"?x0(e):{top:e,right:e,bottom:e,left:e}}function Ra(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function jd(e,t,n){let{reference:r,floating:o}=e;const i=An(t),a=Xc(t),s=Qc(a),l=qt(t),c=i==="y",d=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,u=r[s]/2-o[s]/2;let g;switch(l){case"top":g={x:d,y:r.y-o.height};break;case"bottom":g={x:d,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-o.width,y:p};break;default:g={x:r.x,y:r.y}}switch(no(t)){case"start":g[a]-=u*(n&&c?-1:1);break;case"end":g[a]+=u*(n&&c?-1:1);break}return g}const b0=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:p}=jd(c,r,l),u=r,g={},w=0;for(let y=0;y<s.length;y++){const{name:b,fn:h}=s[y],{x:f,y:v,data:S,reset:k}=await h({x:d,y:p,initialPlacement:r,placement:u,strategy:o,middlewareData:g,rects:c,platform:a,elements:{reference:e,floating:t}});d=f??d,p=v??p,g={...g,[b]:{...g[b],...S}},k&&w<=50&&(w++,typeof k=="object"&&(k.placement&&(u=k.placement),k.rects&&(c=k.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):k.rects),{x:d,y:p}=jd(c,u,l)),y=-1)}return{x:d,y:p,placement:u,strategy:o,middlewareData:g}};async function Qo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:g=0}=Vt(t,e),w=_h(g),b=s[u?p==="floating"?"reference":"floating":p],h=Ra(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(b)))==null||n?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:d,strategy:l})),f=p==="floating"?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),S=await(i.isElement==null?void 0:i.isElement(v))?await(i.getScale==null?void 0:i.getScale(v))||{x:1,y:1}:{x:1,y:1},k=Ra(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:f,offsetParent:v,strategy:l}):f);return{top:(h.top-k.top+w.top)/S.y,bottom:(k.bottom-h.bottom+w.bottom)/S.y,left:(h.left-k.left+w.left)/S.x,right:(k.right-h.right+w.right)/S.x}}const S0=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:a,elements:s,middlewareData:l}=t,{element:c,padding:d=0}=Vt(e,t)||{};if(c==null)return{};const p=_h(d),u={x:n,y:r},g=Xc(o),w=Qc(g),y=await a.getDimensions(c),b=g==="y",h=b?"top":"left",f=b?"bottom":"right",v=b?"clientHeight":"clientWidth",S=i.reference[w]+i.reference[g]-u[g]-i.floating[w],k=u[g]-i.reference[g],E=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let T=E?E[v]:0;(!T||!await(a.isElement==null?void 0:a.isElement(E)))&&(T=s.floating[v]||i.floating[w]);const R=S/2-k/2,M=T/2-y[w]/2-1,O=Rn(p[h],M),U=Rn(p[f],M),F=O,$=T-y[w]-U,V=T/2-y[w]/2+R,ie=Hl(F,V,$),J=!l.arrow&&no(o)!=null&&V!==ie&&i.reference[w]/2-(V<F?O:U)-y[w]/2<0,K=J?V<F?V-F:V-$:0;return{[g]:u[g]+K,data:{[g]:ie,centerOffset:V-ie-K,...J&&{alignmentOffset:K}},reset:J}}}),k0=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:y=!0,...b}=Vt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=qt(o),f=An(s),v=qt(s)===s,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=u||(v||!y?[Pa(s)]:v0(s)),E=w!=="none";!u&&E&&k.push(...w0(s,y,w,S));const T=[s,...k],R=await Qo(t,b),M=[];let O=((r=i.flip)==null?void 0:r.overflows)||[];if(d&&M.push(R[h]),p){const V=g0(o,a,S);M.push(R[V[0]],R[V[1]])}if(O=[...O,{placement:o,overflows:M}],!M.every(V=>V<=0)){var U,F;const V=(((U=i.flip)==null?void 0:U.index)||0)+1,ie=T[V];if(ie)return{data:{index:V,overflows:O},reset:{placement:ie}};let J=(F=O.filter(K=>K.overflows[0]<=0).sort((K,C)=>K.overflows[1]-C.overflows[1])[0])==null?void 0:F.placement;if(!J)switch(g){case"bestFit":{var $;const K=($=O.filter(C=>{if(E){const I=An(C.placement);return I===f||I==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(I=>I>0).reduce((I,_)=>I+_,0)]).sort((C,I)=>C[1]-I[1])[0])==null?void 0:$[0];K&&(J=K);break}case"initialPlacement":J=s;break}if(o!==J)return{reset:{placement:J}}}return{}}}};function Ad(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Id(e){return f0.some(t=>e[t]>=0)}const C0=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Vt(e,t);switch(r){case"referenceHidden":{const i=await Qo(t,{...o,elementContext:"reference"}),a=Ad(i,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Id(a)}}}case"escaped":{const i=await Qo(t,{...o,altBoundary:!0}),a=Ad(i,n.floating);return{data:{escapedOffsets:a,escaped:Id(a)}}}default:return{}}}}};async function E0(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=qt(n),s=no(n),l=An(n)==="y",c=["left","top"].includes(a)?-1:1,d=i&&l?-1:1,p=Vt(t,e);let{mainAxis:u,crossAxis:g,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return s&&typeof w=="number"&&(g=s==="end"?w*-1:w),l?{x:g*d,y:u*c}:{x:u*c,y:g*d}}const T0=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await E0(t,e);return a===((n=s.offset)==null?void 0:n.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},P0=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:b=>{let{x:h,y:f}=b;return{x:h,y:f}}},...l}=Vt(e,t),c={x:n,y:r},d=await Qo(t,l),p=An(qt(o)),u=Yc(p);let g=c[u],w=c[p];if(i){const b=u==="y"?"top":"left",h=u==="y"?"bottom":"right",f=g+d[b],v=g-d[h];g=Hl(f,g,v)}if(a){const b=p==="y"?"top":"left",h=p==="y"?"bottom":"right",f=w+d[b],v=w-d[h];w=Hl(f,w,v)}const y=s.fn({...t,[u]:g,[p]:w});return{...y,data:{x:y.x-n,y:y.y-r,enabled:{[u]:i,[p]:a}}}}}},R0=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=Vt(e,t),d={x:n,y:r},p=An(o),u=Yc(p);let g=d[u],w=d[p];const y=Vt(s,t),b=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const v=u==="y"?"height":"width",S=i.reference[u]-i.floating[v]+b.mainAxis,k=i.reference[u]+i.reference[v]-b.mainAxis;g<S?g=S:g>k&&(g=k)}if(c){var h,f;const v=u==="y"?"width":"height",S=["top","left"].includes(qt(o)),k=i.reference[p]-i.floating[v]+(S&&((h=a.offset)==null?void 0:h[p])||0)+(S?0:b.crossAxis),E=i.reference[p]+i.reference[v]+(S?0:((f=a.offset)==null?void 0:f[p])||0)-(S?b.crossAxis:0);w<k?w=k:w>E&&(w=E)}return{[u]:g,[p]:w}}}},j0=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:i,platform:a,elements:s}=t,{apply:l=()=>{},...c}=Vt(e,t),d=await Qo(t,c),p=qt(o),u=no(o),g=An(o)==="y",{width:w,height:y}=i.floating;let b,h;p==="top"||p==="bottom"?(b=p,h=u===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(h=p,b=u==="end"?"top":"bottom");const f=y-d.top-d.bottom,v=w-d.left-d.right,S=Rn(y-d[b],f),k=Rn(w-d[h],v),E=!t.middlewareData.shift;let T=S,R=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(T=f),E&&!u){const O=Ve(d.left,0),U=Ve(d.right,0),F=Ve(d.top,0),$=Ve(d.bottom,0);g?R=w-2*(O!==0||U!==0?O+U:Ve(d.left,d.right)):T=y-2*(F!==0||$!==0?F+$:Ve(d.top,d.bottom))}await l({...t,availableWidth:R,availableHeight:T});const M=await a.getDimensions(s.floating);return w!==M.width||y!==M.height?{reset:{rects:!0}}:{}}}};function Xa(){return typeof window<"u"}function ro(e){return Mh(e)?(e.nodeName||"").toLowerCase():"#document"}function Ge(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Nt(e){var t;return(t=(Mh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Mh(e){return Xa()?e instanceof Node||e instanceof Ge(e).Node:!1}function yt(e){return Xa()?e instanceof Element||e instanceof Ge(e).Element:!1}function It(e){return Xa()?e instanceof HTMLElement||e instanceof Ge(e).HTMLElement:!1}function Nd(e){return!Xa()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ge(e).ShadowRoot}function di(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=wt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function A0(e){return["table","td","th"].includes(ro(e))}function Za(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Zc(e){const t=eu(),n=yt(e)?wt(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function I0(e){let t=In(e);for(;It(t)&&!Yr(t);){if(Zc(t))return t;if(Za(t))return null;t=In(t)}return null}function eu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Yr(e){return["html","body","#document"].includes(ro(e))}function wt(e){return Ge(e).getComputedStyle(e)}function es(e){return yt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function In(e){if(ro(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Nd(e)&&e.host||Nt(e);return Nd(t)?t.host:t}function Fh(e){const t=In(e);return Yr(t)?e.ownerDocument?e.ownerDocument.body:e.body:It(t)&&di(t)?t:Fh(t)}function Xo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Fh(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=Ge(o);if(i){const s=Wl(a);return t.concat(a,a.visualViewport||[],di(o)?o:[],s&&n?Xo(s):[])}return t.concat(o,Xo(o,[],n))}function Wl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Dh(e){const t=wt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=It(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=Ta(n)!==i||Ta(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function tu(e){return yt(e)?e:e.contextElement}function Ar(e){const t=tu(e);if(!It(t))return jn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Dh(t);let a=(i?Ta(n.width):n.width)/r,s=(i?Ta(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const N0=jn(0);function Bh(e){const t=Ge(e);return!eu()||!t.visualViewport?N0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function O0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ge(e)?!1:t}function er(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=tu(e);let a=jn(1);t&&(r?yt(r)&&(a=Ar(r)):a=Ar(e));const s=O0(i,n,r)?Bh(i):jn(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(i){const u=Ge(i),g=r&&yt(r)?Ge(r):r;let w=u,y=Wl(w);for(;y&&r&&g!==w;){const b=Ar(y),h=y.getBoundingClientRect(),f=wt(y),v=h.left+(y.clientLeft+parseFloat(f.paddingLeft))*b.x,S=h.top+(y.clientTop+parseFloat(f.paddingTop))*b.y;l*=b.x,c*=b.y,d*=b.x,p*=b.y,l+=v,c+=S,w=Ge(y),y=Wl(w)}}return Ra({width:d,height:p,x:l,y:c})}function L0(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=Nt(r),s=t?Za(t.floating):!1;if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=jn(1);const d=jn(0),p=It(r);if((p||!p&&!i)&&((ro(r)!=="body"||di(a))&&(l=es(r)),It(r))){const u=er(r);c=Ar(r),d.x=u.x+r.clientLeft,d.y=u.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x,y:n.y*c.y-l.scrollTop*c.y+d.y}}function _0(e){return Array.from(e.getClientRects())}function $l(e,t){const n=es(e).scrollLeft;return t?t.left+n:er(Nt(e)).left+n}function M0(e){const t=Nt(e),n=es(e),r=e.ownerDocument.body,o=Ve(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ve(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+$l(e);const s=-n.scrollTop;return wt(r).direction==="rtl"&&(a+=Ve(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function F0(e,t){const n=Ge(e),r=Nt(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const c=eu();(!c||c&&t==="fixed")&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}function D0(e,t){const n=er(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=It(e)?Ar(e):jn(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,l=o*i.x,c=r*i.y;return{width:a,height:s,x:l,y:c}}function Od(e,t,n){let r;if(t==="viewport")r=F0(e,n);else if(t==="document")r=M0(Nt(e));else if(yt(t))r=D0(t,n);else{const o=Bh(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Ra(r)}function zh(e,t){const n=In(e);return n===t||!yt(n)||Yr(n)?!1:wt(n).position==="fixed"||zh(n,t)}function B0(e,t){const n=t.get(e);if(n)return n;let r=Xo(e,[],!1).filter(s=>yt(s)&&ro(s)!=="body"),o=null;const i=wt(e).position==="fixed";let a=i?In(e):e;for(;yt(a)&&!Yr(a);){const s=wt(a),l=Zc(a);!l&&s.position==="fixed"&&(o=null),(i?!l&&!o:!l&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||di(a)&&!l&&zh(e,a))?r=r.filter(d=>d!==a):o=s,a=In(a)}return t.set(e,r),r}function z0(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?Za(t)?[]:B0(t,this._c):[].concat(n),r],s=a[0],l=a.reduce((c,d)=>{const p=Od(t,d,o);return c.top=Ve(p.top,c.top),c.right=Rn(p.right,c.right),c.bottom=Rn(p.bottom,c.bottom),c.left=Ve(p.left,c.left),c},Od(t,s,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function U0(e){const{width:t,height:n}=Dh(e);return{width:t,height:n}}function H0(e,t,n){const r=It(t),o=Nt(t),i=n==="fixed",a=er(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=jn(0);if(r||!r&&!i)if((ro(t)!=="body"||di(o))&&(s=es(t)),r){const g=er(t,!0,i,t);l.x=g.x+t.clientLeft,l.y=g.y+t.clientTop}else o&&(l.x=$l(o));let c=0,d=0;if(o&&!r&&!i){const g=o.getBoundingClientRect();d=g.top+s.scrollTop,c=g.left+s.scrollLeft-$l(o,g)}const p=a.left+s.scrollLeft-l.x-c,u=a.top+s.scrollTop-l.y-d;return{x:p,y:u,width:a.width,height:a.height}}function Ds(e){return wt(e).position==="static"}function Ld(e,t){if(!It(e)||wt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Nt(e)===n&&(n=n.ownerDocument.body),n}function Uh(e,t){const n=Ge(e);if(Za(e))return n;if(!It(e)){let o=In(e);for(;o&&!Yr(o);){if(yt(o)&&!Ds(o))return o;o=In(o)}return n}let r=Ld(e,t);for(;r&&A0(r)&&Ds(r);)r=Ld(r,t);return r&&Yr(r)&&Ds(r)&&!Zc(r)?n:r||I0(e)||n}const J0=async function(e){const t=this.getOffsetParent||Uh,n=this.getDimensions,r=await n(e.floating);return{reference:H0(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function W0(e){return wt(e).direction==="rtl"}const $0={convertOffsetParentRelativeRectToViewportRelativeRect:L0,getDocumentElement:Nt,getClippingRect:z0,getOffsetParent:Uh,getElementRects:J0,getClientRects:_0,getDimensions:U0,getScale:Ar,isElement:yt,isRTL:W0};function V0(e,t){let n=null,r;const o=Nt(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,l){s===void 0&&(s=!1),l===void 0&&(l=1),i();const{left:c,top:d,width:p,height:u}=e.getBoundingClientRect();if(s||t(),!p||!u)return;const g=Fi(d),w=Fi(o.clientWidth-(c+p)),y=Fi(o.clientHeight-(d+u)),b=Fi(c),f={rootMargin:-g+"px "+-w+"px "+-y+"px "+-b+"px",threshold:Ve(0,Rn(1,l))||1};let v=!0;function S(k){const E=k[0].intersectionRatio;if(E!==l){if(!v)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(S,{...f,root:o.ownerDocument})}catch{n=new IntersectionObserver(S,f)}n.observe(e)}return a(!0),i}function q0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=tu(e),d=o||i?[...c?Xo(c):[],...Xo(t)]:[];d.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const p=c&&s?V0(c,n):null;let u=-1,g=null;a&&(g=new ResizeObserver(h=>{let[f]=h;f&&f.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var v;(v=g)==null||v.observe(t)})),n()}),c&&!l&&g.observe(c),g.observe(t));let w,y=l?er(e):null;l&&b();function b(){const h=er(e);y&&(h.x!==y.x||h.y!==y.y||h.width!==y.width||h.height!==y.height)&&n(),y=h,w=requestAnimationFrame(b)}return n(),()=>{var h;d.forEach(f=>{o&&f.removeEventListener("scroll",n),i&&f.removeEventListener("resize",n)}),p==null||p(),(h=g)==null||h.disconnect(),g=null,l&&cancelAnimationFrame(w)}}const K0=T0,G0=P0,Y0=k0,Q0=j0,X0=C0,_d=S0,Z0=R0,ew=(e,t,n)=>{const r=new Map,o={platform:$0,...n},i={...o.platform,_c:r};return b0(e,t,{...o,platform:i})};var Zi=typeof document<"u"?x.useLayoutEffect:x.useEffect;function ja(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ja(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!ja(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Hh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Md(e,t){const n=Hh(e);return Math.round(t*n)/n}function Bs(e){const t=x.useRef(e);return Zi(()=>{t.current=e}),t}function tw(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:l,open:c}=e,[d,p]=x.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[u,g]=x.useState(r);ja(u,r)||g(r);const[w,y]=x.useState(null),[b,h]=x.useState(null),f=x.useCallback(C=>{C!==E.current&&(E.current=C,y(C))},[]),v=x.useCallback(C=>{C!==T.current&&(T.current=C,h(C))},[]),S=i||w,k=a||b,E=x.useRef(null),T=x.useRef(null),R=x.useRef(d),M=l!=null,O=Bs(l),U=Bs(o),F=Bs(c),$=x.useCallback(()=>{if(!E.current||!T.current)return;const C={placement:t,strategy:n,middleware:u};U.current&&(C.platform=U.current),ew(E.current,T.current,C).then(I=>{const _={...I,isPositioned:F.current!==!1};V.current&&!ja(R.current,_)&&(R.current=_,Ya.flushSync(()=>{p(_)}))})},[u,t,n,U,F]);Zi(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,p(C=>({...C,isPositioned:!1})))},[c]);const V=x.useRef(!1);Zi(()=>(V.current=!0,()=>{V.current=!1}),[]),Zi(()=>{if(S&&(E.current=S),k&&(T.current=k),S&&k){if(O.current)return O.current(S,k,$);$()}},[S,k,$,O,M]);const ie=x.useMemo(()=>({reference:E,floating:T,setReference:f,setFloating:v}),[f,v]),J=x.useMemo(()=>({reference:S,floating:k}),[S,k]),K=x.useMemo(()=>{const C={position:n,left:0,top:0};if(!J.floating)return C;const I=Md(J.floating,d.x),_=Md(J.floating,d.y);return s?{...C,transform:"translate("+I+"px, "+_+"px)",...Hh(J.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:I,top:_}},[n,s,J.floating,d.x,d.y]);return x.useMemo(()=>({...d,update:$,refs:ie,elements:J,floatingStyles:K}),[d,$,ie,J,K])}const nw=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?_d({element:r.current,padding:o}).fn(n):{}:r?_d({element:r,padding:o}).fn(n):{}}}},rw=(e,t)=>({...K0(e),options:[e,t]}),ow=(e,t)=>({...G0(e),options:[e,t]}),iw=(e,t)=>({...Z0(e),options:[e,t]}),aw=(e,t)=>({...Y0(e),options:[e,t]}),sw=(e,t)=>({...Q0(e),options:[e,t]}),lw=(e,t)=>({...X0(e),options:[e,t]}),cw=(e,t)=>({...nw(e),options:[e,t]});var uw="Arrow",Jh=x.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...i}=e;return m.jsx(or.svg,{...i,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:m.jsx("polygon",{points:"0,0 30,0 15,10"})})});Jh.displayName=uw;var dw=Jh;function pw(e,t=[]){let n=[];function r(i,a){const s=x.createContext(a),l=n.length;n=[...n,a];function c(p){const{scope:u,children:g,...w}=p,y=(u==null?void 0:u[e][l])||s,b=x.useMemo(()=>w,Object.values(w));return m.jsx(y.Provider,{value:b,children:g})}function d(p,u){const g=(u==null?void 0:u[e][l])||s,w=x.useContext(g);if(w)return w;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,d]}const o=()=>{const i=n.map(a=>x.createContext(a));return function(s){const l=(s==null?void 0:s[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,fw(o,...t)]}function fw(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((s,{useScope:l,scopeName:c})=>{const p=l(i)[`__scope${c}`];return{...s,...p}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function hw(e){const[t,n]=x.useState(void 0);return Yo(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let a,s;if("borderBoxSize"in i){const l=i.borderBoxSize,c=Array.isArray(l)?l[0]:l;a=c.inlineSize,s=c.blockSize}else a=e.offsetWidth,s=e.offsetHeight;n({width:a,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Wh="Popper",[$h,Vh]=pw(Wh),[vS,qh]=$h(Wh),Kh="PopperAnchor",Gh=x.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=qh(Kh,n),a=x.useRef(null),s=rr(t,a);return x.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:m.jsx(or.div,{...o,ref:s})});Gh.displayName=Kh;var nu="PopperContent",[mw,gw]=$h(nu),Yh=x.forwardRef((e,t)=>{var st,Gt,Yt,Qt,hi,ar;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:a=0,arrowPadding:s=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:p="partial",hideWhenDetached:u=!1,updatePositionStrategy:g="optimized",onPlaced:w,...y}=e,b=qh(nu,n),[h,f]=x.useState(null),v=rr(t,Mn=>f(Mn)),[S,k]=x.useState(null),E=hw(S),T=(E==null?void 0:E.width)??0,R=(E==null?void 0:E.height)??0,M=r+(i!=="center"?"-"+i:""),O=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},U=Array.isArray(c)?c:[c],F=U.length>0,$={padding:O,boundary:U.filter(yw),altBoundary:F},{refs:V,floatingStyles:ie,placement:J,isPositioned:K,middlewareData:C}=tw({strategy:"fixed",placement:M,whileElementsMounted:(...Mn)=>q0(...Mn,{animationFrame:g==="always"}),elements:{reference:b.anchor},middleware:[rw({mainAxis:o+R,alignmentAxis:a}),l&&ow({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?iw():void 0,...$}),l&&aw({...$}),sw({...$,apply:({elements:Mn,rects:ao,availableWidth:mi,availableHeight:Xt})=>{const{width:ss,height:ls}=ao.reference,xe=Mn.floating.style;xe.setProperty("--radix-popper-available-width",`${mi}px`),xe.setProperty("--radix-popper-available-height",`${Xt}px`),xe.setProperty("--radix-popper-anchor-width",`${ss}px`),xe.setProperty("--radix-popper-anchor-height",`${ls}px`)}}),S&&cw({element:S,padding:s}),ww({arrowWidth:T,arrowHeight:R}),u&&lw({strategy:"referenceHidden",...$})]}),[I,_]=Zh(J),L=Qa(w);Yo(()=>{K&&(L==null||L())},[K,L]);const D=(st=C.arrow)==null?void 0:st.x,G=(Gt=C.arrow)==null?void 0:Gt.y,fe=((Yt=C.arrow)==null?void 0:Yt.centerOffset)!==0,[He,Q]=x.useState();return Yo(()=>{h&&Q(window.getComputedStyle(h).zIndex)},[h]),m.jsx("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...ie,transform:K?ie.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:He,"--radix-popper-transform-origin":[(Qt=C.transformOrigin)==null?void 0:Qt.x,(hi=C.transformOrigin)==null?void 0:hi.y].join(" "),...((ar=C.hide)==null?void 0:ar.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:m.jsx(mw,{scope:n,placedSide:I,onArrowChange:k,arrowX:D,arrowY:G,shouldHideArrow:fe,children:m.jsx(or.div,{"data-side":I,"data-align":_,...y,ref:v,style:{...y.style,animation:K?void 0:"none"}})})})});Yh.displayName=nu;var Qh="PopperArrow",vw={top:"bottom",right:"left",bottom:"top",left:"right"},Xh=x.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,i=gw(Qh,r),a=vw[i.placedSide];return m.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:m.jsx(dw,{...o,ref:n,style:{...o.style,display:"block"}})})});Xh.displayName=Qh;function yw(e){return e!==null}var ww=e=>({name:"transformOrigin",options:e,fn(t){var b,h,f;const{placement:n,rects:r,middlewareData:o}=t,a=((b=o.arrow)==null?void 0:b.centerOffset)!==0,s=a?0:e.arrowWidth,l=a?0:e.arrowHeight,[c,d]=Zh(n),p={start:"0%",center:"50%",end:"100%"}[d],u=(((h=o.arrow)==null?void 0:h.x)??0)+s/2,g=(((f=o.arrow)==null?void 0:f.y)??0)+l/2;let w="",y="";return c==="bottom"?(w=a?p:`${u}px`,y=`${-l}px`):c==="top"?(w=a?p:`${u}px`,y=`${r.floating.height+l}px`):c==="right"?(w=`${-l}px`,y=a?p:`${g}px`):c==="left"&&(w=`${r.floating.width+l}px`,y=a?p:`${g}px`),{data:{x:w,y}}}});function Zh(e){const[t,n="center"]=e.split("-");return[t,n]}var xw=Gh,bw=Yh,Sw=Xh;function kw(e,t){return x.useReducer((n,r)=>t[n][r]??n,e)}var em=e=>{const{present:t,children:n}=e,r=Cw(t),o=typeof n=="function"?n({present:r.isPresent}):x.Children.only(n),i=rr(r.ref,Ew(o));return typeof n=="function"||r.isPresent?x.cloneElement(o,{ref:i}):null};em.displayName="Presence";function Cw(e){const[t,n]=x.useState(),r=x.useRef({}),o=x.useRef(e),i=x.useRef("none"),a=e?"mounted":"unmounted",[s,l]=kw(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const c=Di(r.current);i.current=s==="mounted"?c:"none"},[s]),Yo(()=>{const c=r.current,d=o.current;if(d!==e){const u=i.current,g=Di(c);e?l("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&u!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),Yo(()=>{if(t){let c;const d=t.ownerDocument.defaultView??window,p=g=>{const y=Di(r.current).includes(g.animationName);if(g.target===t&&y&&(l("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},u=g=>{g.target===t&&(i.current=Di(r.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:x.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function Di(e){return(e==null?void 0:e.animationName)||"none"}function Ew(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Tw="VisuallyHidden",tm=x.forwardRef((e,t)=>m.jsx(or.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));tm.displayName=Tw;var Pw=tm,[ts,yS]=Xy("Tooltip",[Vh]),ru=Vh(),nm="TooltipProvider",Rw=700,Fd="tooltip.open",[jw,rm]=ts(nm),om=e=>{const{__scopeTooltip:t,delayDuration:n=Rw,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:i}=e,[a,s]=x.useState(!0),l=x.useRef(!1),c=x.useRef(0);return x.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),m.jsx(jw,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:x.useCallback(()=>{window.clearTimeout(c.current),s(!1)},[]),onClose:x.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(!0),r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:x.useCallback(d=>{l.current=d},[]),disableHoverableContent:o,children:i})};om.displayName=nm;var im="Tooltip",[wS,ns]=ts(im),Vl="TooltipTrigger",Aw=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=ns(Vl,n),i=rm(Vl,n),a=ru(n),s=x.useRef(null),l=rr(t,s,o.onTriggerChange),c=x.useRef(!1),d=x.useRef(!1),p=x.useCallback(()=>c.current=!1,[]);return x.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),m.jsx(xw,{asChild:!0,...a,children:m.jsx(or.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:l,onPointerMove:Dt(e.onPointerMove,u=>{u.pointerType!=="touch"&&!d.current&&!i.isPointerInTransitRef.current&&(o.onTriggerEnter(),d.current=!0)}),onPointerLeave:Dt(e.onPointerLeave,()=>{o.onTriggerLeave(),d.current=!1}),onPointerDown:Dt(e.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:Dt(e.onFocus,()=>{c.current||o.onOpen()}),onBlur:Dt(e.onBlur,o.onClose),onClick:Dt(e.onClick,o.onClose)})})});Aw.displayName=Vl;var Iw="TooltipPortal",[xS,Nw]=ts(Iw,{forceMount:void 0}),Qr="TooltipContent",am=x.forwardRef((e,t)=>{const n=Nw(Qr,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...i}=e,a=ns(Qr,e.__scopeTooltip);return m.jsx(em,{present:r||a.open,children:a.disableHoverableContent?m.jsx(sm,{side:o,...i,ref:t}):m.jsx(Ow,{side:o,...i,ref:t})})}),Ow=x.forwardRef((e,t)=>{const n=ns(Qr,e.__scopeTooltip),r=rm(Qr,e.__scopeTooltip),o=x.useRef(null),i=rr(t,o),[a,s]=x.useState(null),{trigger:l,onClose:c}=n,d=o.current,{onPointerInTransitChange:p}=r,u=x.useCallback(()=>{s(null),p(!1)},[p]),g=x.useCallback((w,y)=>{const b=w.currentTarget,h={x:w.clientX,y:w.clientY},f=Fw(h,b.getBoundingClientRect()),v=Dw(h,f),S=Bw(y.getBoundingClientRect()),k=Uw([...v,...S]);s(k),p(!0)},[p]);return x.useEffect(()=>()=>u(),[u]),x.useEffect(()=>{if(l&&d){const w=b=>g(b,d),y=b=>g(b,l);return l.addEventListener("pointerleave",w),d.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",w),d.removeEventListener("pointerleave",y)}}},[l,d,g,u]),x.useEffect(()=>{if(a){const w=y=>{const b=y.target,h={x:y.clientX,y:y.clientY},f=(l==null?void 0:l.contains(b))||(d==null?void 0:d.contains(b)),v=!zw(h,a);f?u():v&&(u(),c())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[l,d,a,c,u]),m.jsx(sm,{...e,ref:i})}),[Lw,_w]=ts(im,{isInside:!1}),sm=x.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:i,onPointerDownOutside:a,...s}=e,l=ns(Qr,n),c=ru(n),{onClose:d}=l;return x.useEffect(()=>(document.addEventListener(Fd,d),()=>document.removeEventListener(Fd,d)),[d]),x.useEffect(()=>{if(l.trigger){const p=u=>{const g=u.target;g!=null&&g.contains(l.trigger)&&d()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[l.trigger,d]),m.jsx(Oh,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:p=>p.preventDefault(),onDismiss:d,children:m.jsxs(bw,{"data-state":l.stateAttribute,...c,...s,ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[m.jsx(Ih,{children:r}),m.jsx(Lw,{scope:n,isInside:!0,children:m.jsx(Pw,{id:l.contentId,role:"tooltip",children:o||r})})]})})});am.displayName=Qr;var lm="TooltipArrow",Mw=x.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=ru(n);return _w(lm,n).isInside?null:m.jsx(Sw,{...o,...r,ref:t})});Mw.displayName=lm;function Fw(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Dw(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function Bw(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function zw(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,a=t.length-1;i<t.length;a=i++){const s=t[i].x,l=t[i].y,c=t[a].x,d=t[a].y;l>r!=d>r&&n<(c-s)*(r-l)/(d-l)+s&&(o=!o)}return o}function Uw(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),Hw(t)}function Hw(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const i=t[t.length-1],a=t[t.length-2];if((i.x-a.x)*(o.y-a.y)>=(i.y-a.y)*(o.x-a.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const i=n[n.length-1],a=n[n.length-2];if((i.x-a.x)*(o.y-a.y)>=(i.y-a.y)*(o.x-a.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Jw=om,cm=am;function um(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=um(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ww(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=um(e))&&(r&&(r+=" "),r+=t);return r}const ou="-",$w=e=>{const t=qw(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const s=a.split(ou);return s[0]===""&&s.length!==1&&s.shift(),dm(s,t)||Vw(a)},getConflictingClassGroupIds:(a,s)=>{const l=n[a]||[];return s&&r[a]?[...l,...r[a]]:l}}},dm=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?dm(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const i=e.join(ou);return(a=t.validators.find(({validator:s})=>s(i)))==null?void 0:a.classGroupId},Dd=/^\[(.+)\]$/,Vw=e=>{if(Dd.test(e)){const t=Dd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},qw=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Gw(Object.entries(e.classGroups),n).forEach(([i,a])=>{ql(a,r,i,t)}),r},ql=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const i=o===""?t:Bd(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Kw(o)){ql(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([i,a])=>{ql(a,Bd(t,i),n,r)})})},Bd=(e,t)=>{let n=e;return t.split(ou).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Kw=e=>e.isThemeGetter,Gw=(e,t)=>t?e.map(([n,r])=>{const o=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,s])=>[t+a,s])):i);return[n,o]}):e,Yw=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(i,a)=>{n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let a=n.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return o(i,a),a},set(i,a){n.has(i)?n.set(i,a):o(i,a)}}},pm="!",Qw=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],i=t.length,a=s=>{const l=[];let c=0,d=0,p;for(let b=0;b<s.length;b++){let h=s[b];if(c===0){if(h===o&&(r||s.slice(b,b+i)===t)){l.push(s.slice(d,b)),d=b+i;continue}if(h==="/"){p=b;continue}}h==="["?c++:h==="]"&&c--}const u=l.length===0?s:s.substring(d),g=u.startsWith(pm),w=g?u.substring(1):u,y=p&&p>d?p-d:void 0;return{modifiers:l,hasImportantModifier:g,baseClassName:w,maybePostfixModifierPosition:y}};return n?s=>n({className:s,parseClassName:a}):a},Xw=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Zw=e=>({cache:Yw(e.cacheSize),parseClassName:Qw(e),...$w(e)}),ex=/\s+/,tx=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,i=[],a=e.trim().split(ex);let s="";for(let l=a.length-1;l>=0;l-=1){const c=a[l],{modifiers:d,hasImportantModifier:p,baseClassName:u,maybePostfixModifierPosition:g}=n(c);let w=!!g,y=r(w?u.substring(0,g):u);if(!y){if(!w){s=c+(s.length>0?" "+s:s);continue}if(y=r(u),!y){s=c+(s.length>0?" "+s:s);continue}w=!1}const b=Xw(d).join(":"),h=p?b+pm:b,f=h+y;if(i.includes(f))continue;i.push(f);const v=o(y,w);for(let S=0;S<v.length;++S){const k=v[S];i.push(h+k)}s=c+(s.length>0?" "+s:s)}return s};function nx(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=fm(t))&&(r&&(r+=" "),r+=n);return r}const fm=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=fm(e[r]))&&(n&&(n+=" "),n+=t);return n};function rx(e,...t){let n,r,o,i=a;function a(l){const c=t.reduce((d,p)=>p(d),e());return n=Zw(c),r=n.cache.get,o=n.cache.set,i=s,s(l)}function s(l){const c=r(l);if(c)return c;const d=tx(l,n);return o(l,d),d}return function(){return i(nx.apply(null,arguments))}}const ne=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},hm=/^\[(?:([a-z-]+):)?(.+)\]$/i,ox=/^\d+\/\d+$/,ix=new Set(["px","full","screen"]),ax=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,sx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,cx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ux=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Lt=e=>Ir(e)||ix.has(e)||ox.test(e),tn=e=>oo(e,"length",yx),Ir=e=>!!e&&!Number.isNaN(Number(e)),zs=e=>oo(e,"number",Ir),go=e=>!!e&&Number.isInteger(Number(e)),dx=e=>e.endsWith("%")&&Ir(e.slice(0,-1)),z=e=>hm.test(e),nn=e=>ax.test(e),px=new Set(["length","size","percentage"]),fx=e=>oo(e,px,mm),hx=e=>oo(e,"position",mm),mx=new Set(["image","url"]),gx=e=>oo(e,mx,xx),vx=e=>oo(e,"",wx),vo=()=>!0,oo=(e,t,n)=>{const r=hm.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},yx=e=>sx.test(e)&&!lx.test(e),mm=()=>!1,wx=e=>cx.test(e),xx=e=>ux.test(e),bx=()=>{const e=ne("colors"),t=ne("spacing"),n=ne("blur"),r=ne("brightness"),o=ne("borderColor"),i=ne("borderRadius"),a=ne("borderSpacing"),s=ne("borderWidth"),l=ne("contrast"),c=ne("grayscale"),d=ne("hueRotate"),p=ne("invert"),u=ne("gap"),g=ne("gradientColorStops"),w=ne("gradientColorStopPositions"),y=ne("inset"),b=ne("margin"),h=ne("opacity"),f=ne("padding"),v=ne("saturate"),S=ne("scale"),k=ne("sepia"),E=ne("skew"),T=ne("space"),R=ne("translate"),M=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto",z,t],F=()=>[z,t],$=()=>["",Lt,tn],V=()=>["auto",Ir,z],ie=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],C=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",z],_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[Ir,z];return{cacheSize:500,separator:":",theme:{colors:[vo],spacing:[Lt,tn],blur:["none","",nn,z],brightness:L(),borderColor:[e],borderRadius:["none","","full",nn,z],borderSpacing:F(),borderWidth:$(),contrast:L(),grayscale:I(),hueRotate:L(),invert:I(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[dx,tn],inset:U(),margin:U(),opacity:L(),padding:F(),saturate:L(),scale:L(),sepia:I(),skew:L(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[nn]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ie(),z]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",go,z]}],basis:[{basis:U()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",go,z]}],"grid-cols":[{"grid-cols":[vo]}],"col-start-end":[{col:["auto",{span:["full",go,z]},z]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[vo]}],"row-start-end":[{row:["auto",{span:[go,z]},z]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...C()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...C(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...C(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",z,t]}],"min-w":[{"min-w":[z,t,"min","max","fit"]}],"max-w":[{"max-w":[z,t,"none","full","min","max","fit","prose",{screen:[nn]},nn]}],h:[{h:[z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",nn,tn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",zs]}],"font-family":[{font:[vo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",Ir,zs]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Lt,z]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Lt,tn]}],"underline-offset":[{"underline-offset":["auto",Lt,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ie(),hx]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},gx]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[g]}],"gradient-via":[{via:[g]}],"gradient-to":[{to:[g]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:J()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[Lt,z]}],"outline-w":[{outline:[Lt,tn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[Lt,tn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",nn,vx]}],"shadow-color":[{shadow:[vo]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",nn,z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[go,z]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Lt,tn,zs]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Sx=rx(bx);function kx(...e){return Sx(Ww(e))}const Cx=Jw,Ex=x.forwardRef(({className:e,sideOffset:t=4,...n},r)=>m.jsx(cm,{ref:r,sideOffset:t,className:kx("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Ex.displayName=cm.displayName;var rs=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},os=typeof window>"u"||"Deno"in globalThis;function ut(){}function Tx(e,t){return typeof e=="function"?e(t):e}function Px(e){return typeof e=="number"&&e>=0&&e!==1/0}function Rx(e,t){return Math.max(e+(t||0)-Date.now(),0)}function zd(e,t){return typeof e=="function"?e(t):e}function jx(e,t){return typeof e=="function"?e(t):e}function Ud(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:i,queryKey:a,stale:s}=e;if(a){if(r){if(t.queryHash!==iu(a,t.options))return!1}else if(!ei(t.queryKey,a))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||o&&o!==t.state.fetchStatus||i&&!i(t))}function Hd(e,t){const{exact:n,status:r,predicate:o,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Zo(t.options.mutationKey)!==Zo(i))return!1}else if(!ei(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function iu(e,t){return((t==null?void 0:t.queryKeyHashFn)||Zo)(e)}function Zo(e){return JSON.stringify(e,(t,n)=>Kl(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function ei(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!ei(e[n],t[n])):!1}function gm(e,t){if(e===t)return e;const n=Jd(e)&&Jd(t);if(n||Kl(e)&&Kl(t)){const r=n?e:Object.keys(e),o=r.length,i=n?t:Object.keys(t),a=i.length,s=n?[]:{};let l=0;for(let c=0;c<a;c++){const d=n?c:i[c];(!n&&r.includes(d)||n)&&e[d]===void 0&&t[d]===void 0?(s[d]=void 0,l++):(s[d]=gm(e[d],t[d]),s[d]===e[d]&&e[d]!==void 0&&l++)}return o===a&&l===o?e:s}return t}function Jd(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Kl(e){if(!Wd(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Wd(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Wd(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ax(e){return new Promise(t=>{setTimeout(t,e)})}function Ix(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?gm(e,t):t}function Nx(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Ox(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var au=Symbol();function vm(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===au?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Hn,cn,Lr,ap,Lx=(ap=class extends rs{constructor(){super();Y(this,Hn);Y(this,cn);Y(this,Lr);H(this,Lr,t=>{if(!os&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){P(this,cn)||this.setEventListener(P(this,Lr))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,cn))==null||t.call(this),H(this,cn,void 0))}setEventListener(t){var n;H(this,Lr,t),(n=P(this,cn))==null||n.call(this),H(this,cn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){P(this,Hn)!==t&&(H(this,Hn,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof P(this,Hn)=="boolean"?P(this,Hn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Hn=new WeakMap,cn=new WeakMap,Lr=new WeakMap,ap),ym=new Lx,_r,un,Mr,sp,_x=(sp=class extends rs{constructor(){super();Y(this,_r,!0);Y(this,un);Y(this,Mr);H(this,Mr,t=>{if(!os&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){P(this,un)||this.setEventListener(P(this,Mr))}onUnsubscribe(){var t;this.hasListeners()||((t=P(this,un))==null||t.call(this),H(this,un,void 0))}setEventListener(t){var n;H(this,Mr,t),(n=P(this,un))==null||n.call(this),H(this,un,t(this.setOnline.bind(this)))}setOnline(t){P(this,_r)!==t&&(H(this,_r,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return P(this,_r)}},_r=new WeakMap,un=new WeakMap,Mr=new WeakMap,sp),Aa=new _x;function Mx(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function Fx(e){return Math.min(1e3*2**e,3e4)}function wm(e){return(e??"online")==="online"?Aa.isOnline():!0}var xm=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Us(e){return e instanceof xm}function bm(e){let t=!1,n=0,r=!1,o;const i=Mx(),a=y=>{var b;r||(u(new xm(y)),(b=e.abort)==null||b.call(e))},s=()=>{t=!0},l=()=>{t=!1},c=()=>ym.isFocused()&&(e.networkMode==="always"||Aa.isOnline())&&e.canRun(),d=()=>wm(e.networkMode)&&e.canRun(),p=y=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,y),o==null||o(),i.resolve(y))},u=y=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,y),o==null||o(),i.reject(y))},g=()=>new Promise(y=>{var b;o=h=>{(r||c())&&y(h)},(b=e.onPause)==null||b.call(e)}).then(()=>{var y;o=void 0,r||(y=e.onContinue)==null||y.call(e)}),w=()=>{if(r)return;let y;const b=n===0?e.initialPromise:void 0;try{y=b??e.fn()}catch(h){y=Promise.reject(h)}Promise.resolve(y).then(p).catch(h=>{var E;if(r)return;const f=e.retry??(os?0:3),v=e.retryDelay??Fx,S=typeof v=="function"?v(n,h):v,k=f===!0||typeof f=="number"&&n<f||typeof f=="function"&&f(n,h);if(t||!k){u(h);return}n++,(E=e.onFail)==null||E.call(e,n,h),Ax(S).then(()=>c()?void 0:g()).then(()=>{t?u(h):w()})})};return{promise:i,cancel:a,continue:()=>(o==null||o(),i),cancelRetry:s,continueRetry:l,canStart:d,start:()=>(d()?w():g().then(w),i)}}function Dx(){let e=[],t=0,n=s=>{s()},r=s=>{s()},o=s=>setTimeout(s,0);const i=s=>{t?e.push(s):o(()=>{n(s)})},a=()=>{const s=e;e=[],s.length&&o(()=>{r(()=>{s.forEach(l=>{n(l)})})})};return{batch:s=>{let l;t++;try{l=s()}finally{t--,t||a()}return l},batchCalls:s=>(...l)=>{i(()=>{s(...l)})},schedule:i,setNotifyFunction:s=>{n=s},setBatchNotifyFunction:s=>{r=s},setScheduler:s=>{o=s}}}var Ne=Dx(),Jn,lp,Sm=(lp=class{constructor(){Y(this,Jn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Px(this.gcTime)&&H(this,Jn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(os?1/0:5*60*1e3))}clearGcTimeout(){P(this,Jn)&&(clearTimeout(P(this,Jn)),H(this,Jn,void 0))}},Jn=new WeakMap,lp),Fr,Dr,et,Pe,ri,Wn,dt,_t,cp,Bx=(cp=class extends Sm{constructor(t){super();Y(this,dt);Y(this,Fr);Y(this,Dr);Y(this,et);Y(this,Pe);Y(this,ri);Y(this,Wn);H(this,Wn,!1),H(this,ri,t.defaultOptions),this.setOptions(t.options),this.observers=[],H(this,et,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,H(this,Fr,Ux(this.options)),this.state=t.state??P(this,Fr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=P(this,Pe))==null?void 0:t.promise}setOptions(t){this.options={...P(this,ri),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&P(this,et).remove(this)}setData(t,n){const r=Ix(this.state.data,t,this.options);return Ce(this,dt,_t).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ce(this,dt,_t).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=P(this,Pe))==null?void 0:r.promise;return(o=P(this,Pe))==null||o.cancel(t),n?n.then(ut).catch(ut):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(P(this,Fr))}isActive(){return this.observers.some(t=>jx(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===au||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!Rx(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=P(this,Pe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=P(this,Pe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),P(this,et).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(P(this,Pe)&&(P(this,Wn)?P(this,Pe).cancel({revert:!0}):P(this,Pe).cancelRetry()),this.scheduleGc()),P(this,et).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ce(this,dt,_t).call(this,{type:"invalidate"})}fetch(t,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(P(this,Pe))return P(this,Pe).continueRetry(),P(this,Pe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(u=>u.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,o=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(H(this,Wn,!0),r.signal)})},i=()=>{const p=vm(this.options,n),u={queryKey:this.queryKey,meta:this.meta};return o(u),H(this,Wn,!1),this.options.persister?this.options.persister(p,u,this):p(u)},a={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:i};o(a),(l=this.options.behavior)==null||l.onFetch(a,this),H(this,Dr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=a.fetchOptions)==null?void 0:c.meta))&&Ce(this,dt,_t).call(this,{type:"fetch",meta:(d=a.fetchOptions)==null?void 0:d.meta});const s=p=>{var u,g,w,y;Us(p)&&p.silent||Ce(this,dt,_t).call(this,{type:"error",error:p}),Us(p)||((g=(u=P(this,et).config).onError)==null||g.call(u,p,this),(y=(w=P(this,et).config).onSettled)==null||y.call(w,this.state.data,p,this)),this.scheduleGc()};return H(this,Pe,bm({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var u,g,w,y;if(p===void 0){s(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(b){s(b);return}(g=(u=P(this,et).config).onSuccess)==null||g.call(u,p,this),(y=(w=P(this,et).config).onSettled)==null||y.call(w,p,this.state.error,this),this.scheduleGc()},onError:s,onFail:(p,u)=>{Ce(this,dt,_t).call(this,{type:"failed",failureCount:p,error:u})},onPause:()=>{Ce(this,dt,_t).call(this,{type:"pause"})},onContinue:()=>{Ce(this,dt,_t).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),P(this,Pe).start()}},Fr=new WeakMap,Dr=new WeakMap,et=new WeakMap,Pe=new WeakMap,ri=new WeakMap,Wn=new WeakMap,dt=new WeakSet,_t=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...zx(r.data,this.options),fetchMeta:t.meta??null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Us(o)&&o.revert&&P(this,Dr)?{...P(this,Dr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ne.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),P(this,et).notify({query:this,type:"updated",action:t})})},cp);function zx(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:wm(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Ux(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Et,up,Hx=(up=class extends rs{constructor(t={}){super();Y(this,Et);this.config=t,H(this,Et,new Map)}build(t,n,r){const o=n.queryKey,i=n.queryHash??iu(o,n);let a=this.get(i);return a||(a=new Bx({cache:this,queryKey:o,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){P(this,Et).has(t.queryHash)||(P(this,Et).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=P(this,Et).get(t.queryHash);n&&(t.destroy(),n===t&&P(this,Et).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ne.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return P(this,Et).get(t)}getAll(){return[...P(this,Et).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Ud(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Ud(t,r)):n}notify(t){Ne.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ne.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ne.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Et=new WeakMap,up),Tt,Ae,$n,Pt,rn,dp,Jx=(dp=class extends Sm{constructor(t){super();Y(this,Pt);Y(this,Tt);Y(this,Ae);Y(this,$n);this.mutationId=t.mutationId,H(this,Ae,t.mutationCache),H(this,Tt,[]),this.state=t.state||Wx(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){P(this,Tt).includes(t)||(P(this,Tt).push(t),this.clearGcTimeout(),P(this,Ae).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){H(this,Tt,P(this,Tt).filter(n=>n!==t)),this.scheduleGc(),P(this,Ae).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){P(this,Tt).length||(this.state.status==="pending"?this.scheduleGc():P(this,Ae).remove(this))}continue(){var t;return((t=P(this,$n))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,i,a,s,l,c,d,p,u,g,w,y,b,h,f,v,S,k,E,T;H(this,$n,bm({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(R,M)=>{Ce(this,Pt,rn).call(this,{type:"failed",failureCount:R,error:M})},onPause:()=>{Ce(this,Pt,rn).call(this,{type:"pause"})},onContinue:()=>{Ce(this,Pt,rn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>P(this,Ae).canRun(this)}));const n=this.state.status==="pending",r=!P(this,$n).canStart();try{if(!n){Ce(this,Pt,rn).call(this,{type:"pending",variables:t,isPaused:r}),await((i=(o=P(this,Ae).config).onMutate)==null?void 0:i.call(o,t,this));const M=await((s=(a=this.options).onMutate)==null?void 0:s.call(a,t));M!==this.state.context&&Ce(this,Pt,rn).call(this,{type:"pending",context:M,variables:t,isPaused:r})}const R=await P(this,$n).start();return await((c=(l=P(this,Ae).config).onSuccess)==null?void 0:c.call(l,R,t,this.state.context,this)),await((p=(d=this.options).onSuccess)==null?void 0:p.call(d,R,t,this.state.context)),await((g=(u=P(this,Ae).config).onSettled)==null?void 0:g.call(u,R,null,this.state.variables,this.state.context,this)),await((y=(w=this.options).onSettled)==null?void 0:y.call(w,R,null,t,this.state.context)),Ce(this,Pt,rn).call(this,{type:"success",data:R}),R}catch(R){try{throw await((h=(b=P(this,Ae).config).onError)==null?void 0:h.call(b,R,t,this.state.context,this)),await((v=(f=this.options).onError)==null?void 0:v.call(f,R,t,this.state.context)),await((k=(S=P(this,Ae).config).onSettled)==null?void 0:k.call(S,void 0,R,this.state.variables,this.state.context,this)),await((T=(E=this.options).onSettled)==null?void 0:T.call(E,void 0,R,t,this.state.context)),R}finally{Ce(this,Pt,rn).call(this,{type:"error",error:R})}}finally{P(this,Ae).runNext(this)}}},Tt=new WeakMap,Ae=new WeakMap,$n=new WeakMap,Pt=new WeakSet,rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ne.batch(()=>{P(this,Tt).forEach(r=>{r.onMutationUpdate(t)}),P(this,Ae).notify({mutation:this,type:"updated",action:t})})},dp);function Wx(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Je,oi,pp,$x=(pp=class extends rs{constructor(t={}){super();Y(this,Je);Y(this,oi);this.config=t,H(this,Je,new Map),H(this,oi,Date.now())}build(t,n,r){const o=new Jx({mutationCache:this,mutationId:++yi(this,oi)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){const n=Bi(t),r=P(this,Je).get(n)??[];r.push(t),P(this,Je).set(n,r),this.notify({type:"added",mutation:t})}remove(t){var r;const n=Bi(t);if(P(this,Je).has(n)){const o=(r=P(this,Je).get(n))==null?void 0:r.filter(i=>i!==t);o&&(o.length===0?P(this,Je).delete(n):P(this,Je).set(n,o))}this.notify({type:"removed",mutation:t})}canRun(t){var r;const n=(r=P(this,Je).get(Bi(t)))==null?void 0:r.find(o=>o.state.status==="pending");return!n||n===t}runNext(t){var r;const n=(r=P(this,Je).get(Bi(t)))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Ne.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...P(this,Je).values()].flat()}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Hd(n,r))}findAll(t={}){return this.getAll().filter(n=>Hd(t,n))}notify(t){Ne.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ne.batch(()=>Promise.all(t.map(n=>n.continue().catch(ut))))}},Je=new WeakMap,oi=new WeakMap,pp);function Bi(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function $d(e){return{onFetch:(t,n)=>{var d,p,u,g,w;const r=t.options,o=(u=(p=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:p.fetchMore)==null?void 0:u.direction,i=((g=t.state.data)==null?void 0:g.pages)||[],a=((w=t.state.data)==null?void 0:w.pageParams)||[];let s={pages:[],pageParams:[]},l=0;const c=async()=>{let y=!1;const b=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(t.signal.aborted?y=!0:t.signal.addEventListener("abort",()=>{y=!0}),t.signal)})},h=vm(t.options,t.fetchOptions),f=async(v,S,k)=>{if(y)return Promise.reject();if(S==null&&v.pages.length)return Promise.resolve(v);const E={queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};b(E);const T=await h(E),{maxPages:R}=t.options,M=k?Ox:Nx;return{pages:M(v.pages,T,R),pageParams:M(v.pageParams,S,R)}};if(o&&i.length){const v=o==="backward",S=v?Vx:Vd,k={pages:i,pageParams:a},E=S(r,k);s=await f(k,E,v)}else{const v=e??i.length;do{const S=l===0?a[0]??r.initialPageParam:Vd(r,s);if(l>0&&S==null)break;s=await f(s,S),l++}while(l<v)}return s};t.options.persister?t.fetchFn=()=>{var y,b;return(b=(y=t.options).persister)==null?void 0:b.call(y,c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=c}}}function Vd(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Vx(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var ue,dn,pn,Br,zr,fn,Ur,Hr,fp,qx=(fp=class{constructor(e={}){Y(this,ue);Y(this,dn);Y(this,pn);Y(this,Br);Y(this,zr);Y(this,fn);Y(this,Ur);Y(this,Hr);H(this,ue,e.queryCache||new Hx),H(this,dn,e.mutationCache||new $x),H(this,pn,e.defaultOptions||{}),H(this,Br,new Map),H(this,zr,new Map),H(this,fn,0)}mount(){yi(this,fn)._++,P(this,fn)===1&&(H(this,Ur,ym.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,ue).onFocus())})),H(this,Hr,Aa.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,ue).onOnline())})))}unmount(){var e,t;yi(this,fn)._--,P(this,fn)===0&&((e=P(this,Ur))==null||e.call(this),H(this,Ur,void 0),(t=P(this,Hr))==null||t.call(this),H(this,Hr,void 0))}isFetching(e){return P(this,ue).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return P(this,dn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=P(this,ue).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const n=this.defaultQueryOptions(e),r=P(this,ue).build(this,n);return e.revalidateIfStale&&r.isStaleByTime(zd(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return P(this,ue).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=P(this,ue).get(r.queryHash),i=o==null?void 0:o.state.data,a=Tx(t,i);if(a!==void 0)return P(this,ue).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Ne.batch(()=>P(this,ue).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=P(this,ue).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=P(this,ue);Ne.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=P(this,ue),r={type:"active",...e};return Ne.batch(()=>(n.findAll(e).forEach(o=>{o.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const n={revert:!0,...t},r=Ne.batch(()=>P(this,ue).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(ut).catch(ut)}invalidateQueries(e={},t={}){return Ne.batch(()=>{if(P(this,ue).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){const n={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=Ne.batch(()=>P(this,ue).findAll(e).filter(o=>!o.isDisabled()).map(o=>{let i=o.fetch(void 0,n);return n.throwOnError||(i=i.catch(ut)),o.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(ut)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=P(this,ue).build(this,t);return n.isStaleByTime(zd(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ut).catch(ut)}fetchInfiniteQuery(e){return e.behavior=$d(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ut).catch(ut)}ensureInfiniteQueryData(e){return e.behavior=$d(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Aa.isOnline()?P(this,dn).resumePausedMutations():Promise.resolve()}getQueryCache(){return P(this,ue)}getMutationCache(){return P(this,dn)}getDefaultOptions(){return P(this,pn)}setDefaultOptions(e){H(this,pn,e)}setQueryDefaults(e,t){P(this,Br).set(Zo(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...P(this,Br).values()];let n={};return t.forEach(r=>{ei(e,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(e,t){P(this,zr).set(Zo(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...P(this,zr).values()];let n={};return t.forEach(r=>{ei(e,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...P(this,pn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=iu(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===au&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...P(this,pn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){P(this,ue).clear(),P(this,dn).clear()}},ue=new WeakMap,dn=new WeakMap,pn=new WeakMap,Br=new WeakMap,zr=new WeakMap,fn=new WeakMap,Ur=new WeakMap,Hr=new WeakMap,fp),Kx=x.createContext(void 0),Gx=({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),m.jsx(Kx.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const qd="popstate";function Yx(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Gl("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ia(o)}return Xx(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function km(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qx(){return Math.random().toString(36).substr(2,8)}function Kd(e,t){return{usr:e.state,key:e.key,idx:t}}function Gl(e,t,n,r){return n===void 0&&(n=null),ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?io(t):t,{state:n,key:t&&t.key||r||Qx()})}function Ia(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function io(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xx(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=gn.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(ti({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=gn.Pop;let b=d(),h=b==null?null:b-c;c=b,l&&l({action:s,location:y.location,delta:h})}function u(b,h){s=gn.Push;let f=Gl(y.location,b,h);c=d()+1;let v=Kd(f,c),S=y.createHref(f);try{a.pushState(v,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}i&&l&&l({action:s,location:y.location,delta:1})}function g(b,h){s=gn.Replace;let f=Gl(y.location,b,h);c=d();let v=Kd(f,c),S=y.createHref(f);a.replaceState(v,"",S),i&&l&&l({action:s,location:y.location,delta:0})}function w(b){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof b=="string"?b:Ia(b);return f=f.replace(/ $/,"%20"),me(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return s},get location(){return e(o,a)},listen(b){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(qd,p),l=b,()=>{o.removeEventListener(qd,p),l=null}},createHref(b){return t(o,b)},createURL:w,encodeLocation(b){let h=w(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:u,replace:g,go(b){return a.go(b)}};return y}var Gd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gd||(Gd={}));function Zx(e,t,n){return n===void 0&&(n="/"),eb(e,t,n,!1)}function eb(e,t,n,r){let o=typeof t=="string"?io(t):t,i=su(o.pathname||"/",n);if(i==null)return null;let a=Cm(e);tb(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=pb(i);s=ub(a[l],c,r)}return s}function Cm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=En([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cm(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:lb(c,i.index),routesMeta:d})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of Em(i.path))o(i,a,l)}),t}function Em(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Em(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function tb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nb=/^:[\w-]+$/,rb=3,ob=2,ib=1,ab=10,sb=-2,Yd=e=>e==="*";function lb(e,t){let n=e.split("/"),r=n.length;return n.some(Yd)&&(r+=sb),t&&(r+=ob),n.filter(o=>!Yd(o)).reduce((o,i)=>o+(nb.test(i)?rb:i===""?ib:ab),r)}function cb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ub(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=Qd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Qd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:En([i,p.pathname]),pathnameBase:gb(En([i,p.pathnameBase])),route:u}),p.pathnameBase!=="/"&&(i=En([i,p.pathnameBase]))}return a}function Qd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=db(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:u,isOptional:g}=d;if(u==="*"){let y=s[p]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const w=s[p];return g&&!w?c[u]=void 0:c[u]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function db(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),km(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function pb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return km(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function su(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?io(e):e;return{pathname:n?n.startsWith("/")?n:hb(n,t):t,search:vb(r),hash:yb(o)}}function hb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Hs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tm(e,t){let n=mb(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=io(e):(o=ti({},e),me(!o.pathname||!o.pathname.includes("?"),Hs("?","pathname","search",o)),me(!o.pathname||!o.pathname.includes("#"),Hs("#","pathname","hash",o)),me(!o.search||!o.search.includes("#"),Hs("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),p-=1;o.pathname=u.join("/")}s=p>=0?t[p]:"/"}let l=fb(o,s),c=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const En=e=>e.join("/").replace(/\/\/+/g,"/"),gb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),vb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,yb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rm=["post","put","patch","delete"];new Set(Rm);const xb=["get",...Rm];new Set(xb);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}const lu=x.createContext(null),bb=x.createContext(null),ir=x.createContext(null),is=x.createContext(null),_n=x.createContext({outlet:null,matches:[],isDataRoute:!1}),jm=x.createContext(null);function Sb(e,t){let{relative:n}=t===void 0?{}:t;pi()||me(!1);let{basename:r,navigator:o}=x.useContext(ir),{hash:i,pathname:a,search:s}=Im(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:En([r,a])),o.createHref({pathname:l,search:s,hash:i})}function pi(){return x.useContext(is)!=null}function fi(){return pi()||me(!1),x.useContext(is).location}function Am(e){x.useContext(ir).static||x.useLayoutEffect(e)}function kb(){let{isDataRoute:e}=x.useContext(_n);return e?Fb():Cb()}function Cb(){pi()||me(!1);let e=x.useContext(lu),{basename:t,future:n,navigator:r}=x.useContext(ir),{matches:o}=x.useContext(_n),{pathname:i}=fi(),a=JSON.stringify(Tm(o,n.v7_relativeSplatPath)),s=x.useRef(!1);return Am(()=>{s.current=!0}),x.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=Pm(c,JSON.parse(a),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:En([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,i,e])}function Eb(){let{matches:e}=x.useContext(_n),t=e[e.length-1];return t?t.params:{}}function Im(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(ir),{matches:o}=x.useContext(_n),{pathname:i}=fi(),a=JSON.stringify(Tm(o,r.v7_relativeSplatPath));return x.useMemo(()=>Pm(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Tb(e,t){return Pb(e,t)}function Pb(e,t,n,r){pi()||me(!1);let{navigator:o}=x.useContext(ir),{matches:i}=x.useContext(_n),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=fi(),d;if(t){var p;let b=typeof t=="string"?io(t):t;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||me(!1),d=b}else d=c;let u=d.pathname||"/",g=u;if(l!=="/"){let b=l.replace(/^\//,"").split("/");g="/"+u.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=Zx(e,{pathname:g}),y=Nb(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:En([l,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:En([l,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r);return t&&y?x.createElement(is.Provider,{value:{location:ni({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gn.Pop}},y):y}function Rb(){let e=Mb(),t=wb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,null)}const jb=x.createElement(Rb,null);class Ab extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(_n.Provider,{value:this.props.routeContext},x.createElement(jm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ib(e){let{routeContext:t,match:n,children:r}=e,o=x.useContext(lu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(_n.Provider,{value:t},r)}function Nb(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||me(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:u,errors:g}=n,w=p.route.loader&&u[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||w){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,p,u)=>{let g,w=!1,y=null,b=null;n&&(g=s&&p.route.id?s[p.route.id]:void 0,y=p.route.errorElement||jb,l&&(c<0&&u===0?(w=!0,b=null):c===u&&(w=!0,b=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,u+1)),f=()=>{let v;return g?v=y:w?v=b:p.route.Component?v=x.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,x.createElement(Ib,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||u===0)?x.createElement(Ab,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Nm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nm||{}),Na=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Na||{});function Ob(e){let t=x.useContext(lu);return t||me(!1),t}function Lb(e){let t=x.useContext(bb);return t||me(!1),t}function _b(e){let t=x.useContext(_n);return t||me(!1),t}function Om(e){let t=_b(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Mb(){var e;let t=x.useContext(jm),n=Lb(Na.UseRouteError),r=Om(Na.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Fb(){let{router:e}=Ob(Nm.UseNavigateStable),t=Om(Na.UseNavigateStable),n=x.useRef(!1);return Am(()=>{n.current=!0}),x.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ni({fromRouteId:t},i)))},[e,t])}function kt(e){me(!1)}function Db(e){let{basename:t="/",children:n=null,location:r,navigationType:o=gn.Pop,navigator:i,static:a=!1,future:s}=e;pi()&&me(!1);let l=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:i,static:a,future:ni({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=io(r));let{pathname:d="/",search:p="",hash:u="",state:g=null,key:w="default"}=r,y=x.useMemo(()=>{let b=su(d,l);return b==null?null:{location:{pathname:b,search:p,hash:u,state:g,key:w},navigationType:o}},[l,d,p,u,g,w,o]);return y==null?null:x.createElement(ir.Provider,{value:c},x.createElement(is.Provider,{children:n,value:y}))}function Bb(e){let{children:t,location:n}=e;return Tb(Yl(t),n)}new Promise(()=>{});function Yl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,Yl(r.props.children,i));return}r.type!==kt&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Yl(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ql.apply(this,arguments)}function zb(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ub(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hb(e,t){return e.button===0&&(!t||t==="_self")&&!Ub(e)}const Jb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wb="6";try{window.__reactRouterVersion=Wb}catch{}const $b="startTransition",Xd=hg[$b];function Vb(e){let{basename:t,children:n,future:r,window:o}=e,i=x.useRef();i.current==null&&(i.current=Yx({window:o,v5Compat:!0}));let a=i.current,[s,l]=x.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=x.useCallback(p=>{c&&Xd?Xd(()=>l(p)):l(p)},[l,c]);return x.useLayoutEffect(()=>a.listen(d),[a,d]),x.createElement(Db,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const qb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=x.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:c,preventScrollReset:d,viewTransition:p}=t,u=zb(t,Jb),{basename:g}=x.useContext(ir),w,y=!1;if(typeof c=="string"&&Kb.test(c)&&(w=c,qb))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),k=su(S.pathname,g);S.origin===v.origin&&k!=null?c=k+S.search+S.hash:y=!0}catch{}let b=Sb(c,{relative:o}),h=Gb(c,{replace:a,state:s,target:l,preventScrollReset:d,relative:o,viewTransition:p});function f(v){r&&r(v),v.defaultPrevented||h(v)}return x.createElement("a",Ql({},u,{href:w||b,onClick:y||i?r:f,ref:n,target:l}))});var Zd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zd||(Zd={}));var ep;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ep||(ep={}));function Gb(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,l=kb(),c=fi(),d=Im(e,{relative:a});return x.useCallback(p=>{if(Hb(p,n)){p.preventDefault();let u=r!==void 0?r:Ia(c)===Ia(d);l(e,{replace:u,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[c,l,d,r,o,n,e,i,a,s])}var Yb=typeof Element<"u",Qb=typeof Map=="function",Xb=typeof Set=="function",Zb=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ea(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ea(e[r],t[r]))return!1;return!0}var i;if(Qb&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!ea(r.value[1],t.get(r.value[0])))return!1;return!0}if(Xb&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Zb&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(Yb&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!ea(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var e1=function(t,n){try{return ea(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const t1=ii(e1);var n1=function(e,t,n,r,o,i,a,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],d=0;l=new Error(t.replace(/%s/g,function(){return c[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},r1=n1;const tp=ii(r1);var o1=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var d=a[c];if(!l(d))return!1;var p=t[d],u=n[d];if(i=r?r.call(o,p,u,d):void 0,i===!1||i===void 0&&p!==u)return!1}return!0};const i1=ii(o1);var Lm=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Lm||{}),Js={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},np=Object.values(Lm),cu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},a1=Object.entries(cu).reduce((e,[t,n])=>(e[n]=t,e),{}),ht="data-rh",Nr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Or=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},s1=e=>{let t=Or(e,"title");const n=Or(e,Nr.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Or(e,Nr.DEFAULT_TITLE);return t||r||void 0},l1=e=>Or(e,Nr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ws=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),c1=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const o=Object.keys(r);for(let i=0;i<o.length;i+=1){const s=o[i].toLowerCase();if(e.indexOf(s)!==-1&&r[s])return n.concat(r)}}return n},[]),u1=e=>console&&typeof console.warn=="function"&&console.warn(e),yo=(e,t,n)=>{const r={};return n.filter(o=>Array.isArray(o[e])?!0:(typeof o[e]<"u"&&u1(`Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`),!1)).map(o=>o[e]).reverse().reduce((o,i)=>{const a={};i.filter(l=>{let c;const d=Object.keys(l);for(let u=0;u<d.length;u+=1){const g=d[u],w=g.toLowerCase();t.indexOf(w)!==-1&&!(c==="rel"&&l[c].toLowerCase()==="canonical")&&!(w==="rel"&&l[w].toLowerCase()==="stylesheet")&&(c=w),t.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(c=g)}if(!c||!l[c])return!1;const p=l[c].toLowerCase();return r[c]||(r[c]={}),a[c]||(a[c]={}),r[c][p]?!1:(a[c][p]=!0,!0)}).reverse().forEach(l=>o.push(l));const s=Object.keys(a);for(let l=0;l<s.length;l+=1){const c=s[l],d={...r[c],...a[c]};r[c]=d}return o},[]).reverse()},d1=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},p1=e=>({baseTag:c1(["href"],e),bodyAttributes:Ws("bodyAttributes",e),defer:Or(e,Nr.DEFER),encode:Or(e,Nr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ws("htmlAttributes",e),linkTags:yo("link",["rel","href"],e),metaTags:yo("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:yo("noscript",["innerHTML"],e),onChangeClientState:l1(e),scriptTags:yo("script",["src","innerHTML"],e),styleTags:yo("style",["cssText"],e),title:s1(e),titleAttributes:Ws("titleAttributes",e),prioritizeSeoTags:d1(e,Nr.PRIORITIZE_SEO_TAGS)}),_m=e=>Array.isArray(e)?e.join(""):e,f1=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},$s=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(f1(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},rp=(e,t)=>({...e,[t]:void 0}),h1=["noscript","script","style"],Xl=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Mm=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),m1=(e,t,n,r)=>{const o=Mm(n),i=_m(t);return o?`<${e} ${ht}="true" ${o}>${Xl(i,r)}</${e}>`:`<${e} ${ht}="true">${Xl(i,r)}</${e}>`},g1=(e,t,n=!0)=>t.reduce((r,o)=>{const i=o,a=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const p=typeof i[d]>"u"?d:`${d}="${Xl(i[d],n)}"`;return c?`${c} ${p}`:p},""),s=i.innerHTML||i.cssText||"",l=h1.indexOf(e)===-1;return`${r}<${e} ${ht}="true" ${a}${l?"/>":`>${s}</${e}>`}`},""),Fm=(e,t={})=>Object.keys(e).reduce((n,r)=>{const o=cu[r];return n[o||r]=e[r],n},t),v1=(e,t,n)=>{const r={key:t,[ht]:!0},o=Fm(n,r);return[A.createElement("title",o,t)]},ta=(e,t)=>t.map((n,r)=>{const o={key:r,[ht]:!0};return Object.keys(n).forEach(i=>{const s=cu[i]||i;if(s==="innerHTML"||s==="cssText"){const l=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:l}}else o[s]=n[i]}),A.createElement(e,o)}),Ze=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>v1(e,t.title,t.titleAttributes),toString:()=>m1(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Fm(t),toString:()=>Mm(t)};default:return{toComponent:()=>ta(e,t),toString:()=>g1(e,t,n)}}},y1=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const o=$s(e,Js.meta),i=$s(t,Js.link),a=$s(n,Js.script);return{priorityMethods:{toComponent:()=>[...ta("meta",o.priority),...ta("link",i.priority),...ta("script",a.priority)],toString:()=>`${Ze("meta",o.priority,r)} ${Ze("link",i.priority,r)} ${Ze("script",a.priority,r)}`},metaTags:o.default,linkTags:i.default,scriptTags:a.default}},w1=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:a,title:s="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:d,metaTags:p,scriptTags:u}=e,g={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:g,linkTags:d,metaTags:p,scriptTags:u}=y1(e)),{priority:g,base:Ze("base",t,r),bodyAttributes:Ze("bodyAttributes",n,r),htmlAttributes:Ze("htmlAttributes",o,r),link:Ze("link",d,r),meta:Ze("meta",p,r),noscript:Ze("noscript",i,r),script:Ze("script",u,r),style:Ze("style",a,r),title:Ze("title",{title:s,titleAttributes:l},r)}},Zl=w1,zi=[],Dm=!!(typeof window<"u"&&window.document&&window.document.createElement),ec=class{constructor(e,t){Ot(this,"instances",[]);Ot(this,"canUseDOM",Dm);Ot(this,"context");Ot(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?zi:this.instances,add:e=>{(this.canUseDOM?zi:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?zi:this.instances).indexOf(e);(this.canUseDOM?zi:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Zl({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},x1={},Bm=A.createContext(x1),Vn,zm=(Vn=class extends x.Component{constructor(n){super(n);Ot(this,"helmetData");this.helmetData=new ec(this.props.context||{},Vn.canUseDOM)}render(){return A.createElement(Bm.Provider,{value:this.helmetData.value},this.props.children)}},Ot(Vn,"canUseDOM",Dm),Vn),dr=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${ht}]`),o=[].slice.call(r),i=[];let a;return t&&t.length&&t.forEach(s=>{const l=document.createElement(e);for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c))if(c==="innerHTML")l.innerHTML=s.innerHTML;else if(c==="cssText")l.styleSheet?l.styleSheet.cssText=s.cssText:l.appendChild(document.createTextNode(s.cssText));else{const d=c,p=typeof s[d]>"u"?"":s[d];l.setAttribute(c,p)}l.setAttribute(ht,"true"),o.some((c,d)=>(a=d,l.isEqualNode(c)))?o.splice(a,1):i.push(l)}),o.forEach(s=>{var l;return(l=s.parentNode)==null?void 0:l.removeChild(s)}),i.forEach(s=>n.appendChild(s)),{oldTags:o,newTags:i}},tc=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(ht),o=r?r.split(","):[],i=[...o],a=Object.keys(t);for(const s of a){const l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),o.indexOf(s)===-1&&o.push(s);const c=i.indexOf(s);c!==-1&&i.splice(c,1)}for(let s=i.length-1;s>=0;s-=1)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute(ht):n.getAttribute(ht)!==a.join(",")&&n.setAttribute(ht,a.join(","))},b1=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=_m(e)),tc("title",t)},op=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:a,noscriptTags:s,onChangeClientState:l,scriptTags:c,styleTags:d,title:p,titleAttributes:u}=e;tc("body",r),tc("html",o),b1(p,u);const g={baseTag:dr("base",n),linkTags:dr("link",i),metaTags:dr("meta",a),noscriptTags:dr("noscript",s),scriptTags:dr("script",c),styleTags:dr("style",d)},w={},y={};Object.keys(g).forEach(b=>{const{newTags:h,oldTags:f}=g[b];h.length&&(w[b]=h),f.length&&(y[b]=g[b].oldTags)}),t&&t(),l(e,w,y)},wo=null,S1=e=>{wo&&cancelAnimationFrame(wo),e.defer?wo=requestAnimationFrame(()=>{op(e,()=>{wo=null})}):(op(e),wo=null)},k1=S1,ip=class extends x.Component{constructor(){super(...arguments);Ot(this,"rendered",!1)}shouldComponentUpdate(t){return!i1(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const o=p1(t.get().map(i=>{const a={...i.props};return delete a.context,a}));zm.canUseDOM?k1(o):Zl&&(r=Zl(o)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Vs,C1=(Vs=class extends x.Component{shouldComponentUpdate(e){return!t1(rp(this.props,"helmetData"),rp(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return tp(np.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${np.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),tp(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return A.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:o,...i}=r.props,a=Object.keys(i).reduce((l,c)=>(l[a1[c]||c]=i[c],l),{});let{type:s}=r;switch(typeof s=="symbol"?s=s.toString():this.warnOnInvalidChildren(r,o),s){case"Symbol(react.fragment)":t=this.mapChildrenToProps(o,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,a,o);break;default:t=this.mapObjectTypeChildren(r,t,a,o);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof ec)){const o=r;r=new ec(o.context,!0),delete n.helmetData}return r?A.createElement(ip,{...n,context:r.value}):A.createElement(Bm.Consumer,null,o=>A.createElement(ip,{...n,context:o}))}},Ot(Vs,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Vs);const E1=()=>m.jsx("header",{className:"sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 border-b border-green-100",children:m.jsx("div",{className:"container mx-auto px-4",children:m.jsxs("nav",{className:"flex items-center justify-between h-16",children:[m.jsx(Oe,{to:"/",className:"text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent",children:"Tech Chatter Box"}),m.jsxs("div",{className:"flex gap-6",children:[m.jsx(Oe,{to:"/blog",className:"text-gray-600 hover:text-green-600 transition-colors",children:"All Posts"}),m.jsx(Oe,{to:"/categories",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Categories"}),m.jsx(Oe,{to:"/about",className:"text-gray-600 hover:text-green-600 transition-colors",children:"About"}),m.jsx(Oe,{to:"/contact",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Contact"})]})]})})}),T1=()=>m.jsx("footer",{className:"bg-white border-t border-green-100",children:m.jsxs("div",{className:"container mx-auto px-4 py-8",children:[m.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[m.jsxs("div",{className:"mb-4 md:mb-0",children:[m.jsx(Oe,{to:"/",className:"text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent",children:"Tech Chatter Box"}),m.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Your source for programming insights and tech news."})]}),m.jsxs("nav",{className:"flex flex-wrap gap-6 text-sm",children:[m.jsx(Oe,{to:"/privacy-policy",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Privacy Policy"}),m.jsx(Oe,{to:"/terms",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Terms of Service"}),m.jsx(Oe,{to:"/contact",className:"text-gray-600 hover:text-green-600 transition-colors",children:"Contact"})]})]}),m.jsxs("div",{className:"text-center text-sm text-gray-500 mt-8",children:["© ",new Date().getFullYear()," Tech Chatter Box. All rights reserved."]})]})}),P1={id:"java_a101",title:"Java 11 Features: What Every Developer Should Know",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",keywords:["Java 11","Java Updates","Java Features for Developers","New Java Features","Java Programming","Java Development","Java Features","Java 11 Guide","Java Tutorials","Java Programming Tips"],content:`
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

  `},R1={id:"java_a102",title:"Java 8 Features: The Evolution of Modern Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},j1={id:"java_a103",title:"Java 17 Features",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},A1={id:"java_a104",title:"Java 21 Features",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},I1={id:"java_a105",title:"Java 25 Features (Preview) – What’s New in the Upcoming LTS Release",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},N1={id:"java_a106",title:"Java Streams: A Modern Way to Process Data",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},O1={id:"java_a107",title:"Java Streams: map() vs flatMap()",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},L1={id:"java_a108",title:"Lombok – Reduce Boilerplate in Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},_1={id:"java_a109",title:"Testing Lombok-based Classes in Java",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},M1={id:"java_a110",title:"Lombok vs Records: When to Use What?",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},F1={id:"java_a111",title:"Java Records in Functional Programming",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},D1={id:"java_a112",title:"JBang – Scripting with Java Like Never Before",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},B1={id:"java_a113",title:"JBang vs JShell vs Kotlin Scripting",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},z1={id:"java_a114",title:"Reactive Programming – with Project Reactor or RxJava",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},U1={id:"java_a115",title:"Building a Reactive REST API with Spring WebFlux and Project Reactor",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},H1={id:"java_a116",title:"Java with AI",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},J1={id:"java_a117",title:"Using OpenAI API in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},W1={id:"java_a118",title:"Spring Boot with AI",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},$1={id:"java_a119",title:"Sentiment Analysis Using Hugging Face API in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},V1={id:"java_a120",title:"Building a Recommendation System in Spring Boot",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},q1={id:"java_a121",title:"Image Recognition with Deep Learning Frameworks",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},K1={id:"java_a122",title:"Voice & Chatbots – AI-Assisted Conversational Apps",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},G1={id:"java_a123",title:"Real-Time Camera Input for Image Recognition",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},Y1={id:"java_a124",title:"Virtual Threads (Project Loom)",author:"Hemant Kumar",date:"2025-04-13",category:"Java",readTime:"2 min read",content:`
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
  `},Um={java_a101:P1,java_a102:R1,java_a103:j1,java_a104:A1,java_a105:I1,java_a106:N1,java_a107:O1,java_a108:L1,java_a109:_1,java_a110:M1,java_a111:F1,java_a112:D1,java_a113:B1,java_a114:z1,java_a115:U1,java_a116:H1,java_a117:J1,java_a118:W1,java_a119:$1,java_a120:V1,java_a121:q1,java_a122:K1,java_a123:G1,java_a124:Y1},Q1=e=>Um[e],uu=()=>Object.values(Um).sort((e,t)=>{const n=new Date(e.date).getTime();return new Date(t.date).getTime()-n}),Oa=e=>{const n=e.replace(/<[^>]+>/g,"").length;return Math.ceil(n/1125)},X1=()=>{const e=uu(),t=e[0],n=e.slice(1,7);return m.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50",children:[m.jsxs("header",{className:"relative px-4 py-32 text-center overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(120deg,#84fab0,#8fd3f4)] opacity-5"}),m.jsxs("h1",{className:"relative mb-6 text-7xl font-bold tracking-tight bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-fade-in",children:["The Developer's",m.jsx("br",{}),m.jsx("span",{className:"text-8xl",children:"Journal"})]}),m.jsx("p",{className:"mx-auto mb-12 max-w-2xl text-xl text-gray-600 leading-relaxed animate-fade-in",children:"Where code meets creativity. Exploring the intersection of technology, design, and the future of web development."}),m.jsxs("div",{className:"flex justify-center gap-4 animate-fade-in",children:[m.jsx(Oe,{to:"/blog",className:"px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium hover:opacity-90 transition-all hover:scale-105",children:"Start Reading"}),m.jsx("button",{className:"px-8 py-3 bg-white text-gray-800 rounded-full font-medium border border-gray-200 hover:border-green-300 transition-all hover:scale-105",children:"Subscribe"})]})]}),m.jsxs("section",{className:"mx-auto max-w-7xl px-4 pb-20",children:[m.jsxs("h2",{className:"mb-12 text-4xl font-bold text-gray-900 text-center",children:["Latest ",m.jsx("span",{className:"text-green-600",children:"Stories"})]}),t&&m.jsx("div",{className:"mb-12",children:m.jsx("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:m.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[m.jsx("div",{className:"h-[400px] overflow-hidden rounded-xl",children:m.jsx("img",{src:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6",alt:t.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),m.jsxs("div",{className:"flex flex-col justify-center",children:[m.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4 w-fit",children:"Featured"}),m.jsx(Oe,{to:`/blog/${t.id}`,children:m.jsx("h3",{className:"mb-4 text-3xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors",children:t.title})}),m.jsxs("p",{className:"mb-6 text-gray-600 line-clamp-3",children:[t.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),m.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500 mt-auto",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("img",{src:"/author.png",alt:t.author,className:"w-10 h-10 rounded-full"}),m.jsxs("div",{children:[m.jsx("p",{className:"font-medium text-gray-900",children:t.author}),m.jsx("p",{children:t.category})]})]}),m.jsxs("span",{children:[Oa(t.content)," min read"]})]})]})]})})}),m.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:n.map(r=>m.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[m.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:m.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:r.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),m.jsx("span",{className:"inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4",children:r.category}),m.jsx(Oe,{to:`/blog/${r.id}`,children:m.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors",children:r.title})}),m.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[r.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),m.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("img",{src:"/author.png",alt:r.author,className:"w-8 h-8 rounded-full"}),m.jsx("span",{children:r.author})]}),m.jsxs("span",{children:[Oa(r.content)," min read"]})]})]},r.id))})]}),m.jsxs("section",{className:"relative py-24",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 skew-y-3 transform origin-bottom-right"}),m.jsxs("div",{className:"relative mx-auto max-w-2xl px-4 text-center",children:[m.jsx("h2",{className:"mb-4 text-4xl font-bold text-white",children:"Never Miss a Post"}),m.jsx("p",{className:"mb-8 text-green-100",children:"Join our newsletter and get the latest articles delivered straight to your inbox."}),m.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4",children:[m.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full max-w-sm rounded-full px-6 py-3 text-gray-900 shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"}),m.jsx("button",{className:"px-8 py-3 bg-white text-green-600 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 transform transition-transform duration-200",children:"Subscribe"})]})]})]})]})},Xr={default:{keywords:["programming tutorials","java programming","tech news","web development","software engineering","Tech Chatter Box"],description:"Tech Chatter Box - Your go-to resource for programming tutorials, tech news, and developer insights."},pages:{blog:{keywords:["java tutorials","programming blog","coding tutorials","software development articles","tech blog"],description:"Explore our collection of in-depth programming tutorials and tech articles."},categories:{keywords:["programming categories","tech topics","coding subjects","development categories"],description:"Browse programming tutorials and articles by category."},about:{keywords:["tech blog about","programming community","developer resources"],description:"Learn more about Tech Chatter Box and our mission to educate developers."},contact:{keywords:["contact tech blog","programming help","developer support"],description:"Get in touch with Tech Chatter Box for questions or collaborations."}}},as=({title:e="Tech Chatter Box",description:t,keywords:n,type:r="website",imageUrl:o="https://techchatterbox.com/og-image.png"})=>{const i=[...n||Xr.default.keywords].join(", "),a=t||Xr.default.description;return m.jsxs(C1,{children:[m.jsx("title",{children:e}),m.jsx("meta",{name:"description",content:a}),m.jsx("meta",{name:"keywords",content:i}),m.jsx("meta",{property:"og:type",content:r}),m.jsx("meta",{property:"og:title",content:e}),m.jsx("meta",{property:"og:description",content:a}),m.jsx("meta",{property:"og:image",content:o}),m.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),m.jsx("meta",{name:"twitter:title",content:e}),m.jsx("meta",{name:"twitter:description",content:a}),m.jsx("meta",{name:"twitter:image",content:o})]})},Z1=()=>{const e=uu();return m.jsxs(m.Fragment,{children:[m.jsx(as,{title:"Blog - Tech Chatter Box",keywords:Xr.pages.blog.keywords,description:Xr.pages.blog.description}),m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:m.jsxs("div",{className:"container mx-auto px-4",children:[m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"All Blog Posts"}),m.jsx("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:e.map(t=>m.jsxs("article",{className:"group rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:[m.jsx("div",{className:"mb-4 h-56 overflow-hidden rounded-xl",children:m.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:t.title,className:"h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"})}),m.jsx(Oe,{to:`/blog/${t.id}`,className:"inline-block",children:m.jsx("h3",{className:"mb-3 text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:t.title})}),m.jsxs("p",{className:"mb-4 text-gray-600 line-clamp-2",children:[t.content.replace(/<[^>]*>/g,"").slice(0,150),"..."]}),m.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-500",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("img",{src:"/author.png",alt:t.author,className:"w-8 h-8 rounded-full"}),m.jsx("span",{children:t.author})]}),m.jsxs("span",{children:[Oa(t.content)," min read"]})]})]},t.id))})]})})]})},eS=()=>({toast:({title:t,description:n,action:r,...o})=>{Rh(t||"",{description:n,action:r?{label:r.label,onClick:r.onClick}:void 0,...o})}}),tS=({title:e,description:t,action:n,...r})=>{Rh(e||"",{description:t,action:n?{label:n.label,onClick:n.onClick}:void 0,...r})},nS=()=>{const t=uu().reduce((i,a)=>(i[a.category]||(i[a.category]={count:0,color:r()}),i[a.category].count++,i),{}),n=Object.entries(t).map(([i,a])=>({name:i,count:a.count,color:a.color}));x.useEffect(()=>{tS({title:"Categories Loaded",description:"Browse through our article categories",variant:"default"})},[]);function r(){const i=["purple","blue","green","rose","indigo","emerald"];return i[Math.floor(Math.random()*i.length)]}const o=i=>({purple:{bg:"bg-purple-100",text:"text-purple-700"},blue:{bg:"bg-blue-100",text:"text-blue-700"},green:{bg:"bg-green-100",text:"text-green-700"},rose:{bg:"bg-rose-100",text:"text-rose-700"},indigo:{bg:"bg-indigo-100",text:"text-indigo-700"},emerald:{bg:"bg-emerald-100",text:"text-emerald-700"}})[i]||{bg:"bg-gray-100",text:"text-gray-700"};return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:m.jsxs("div",{className:"container mx-auto px-4",children:[m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-12",children:"Categories"}),m.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:n&&n.length>0?n.map(i=>{const a=o(i.color);return m.jsx(Oe,{to:`/blog?category=${i.name.toLowerCase()}`,className:"group block p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("h3",{className:"text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors",children:i.name}),m.jsxs("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${a.bg} ${a.text}`,children:[i.count," posts"]})]})},i.name)}):m.jsx("p",{className:"text-gray-500 col-span-3 text-center py-10",children:"No categories found."})})]})})},rS=()=>m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:m.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"About Developer's Journal"}),m.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[m.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Welcome to Developer's Journal, a community-driven blog dedicated to sharing knowledge, experiences, and insights about software development, design, and technology."}),m.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:"Our mission is to create a space where developers can learn from each other, stay updated with the latest trends, and grow their skills through high-quality content."}),m.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Our Values"}),m.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-6 space-y-2",children:[m.jsx("li",{children:"Quality over quantity"}),m.jsx("li",{children:"Community-driven learning"}),m.jsx("li",{children:"Practical, actionable content"}),m.jsx("li",{children:"Inclusive and accessible education"})]})]})]})}),oS=()=>m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:m.jsxs("div",{className:"container mx-auto px-4 max-w-2xl",children:[m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Contact Us"}),m.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:m.jsxs("form",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),m.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your name"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),m.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"your@email.com"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),m.jsx("textarea",{id:"message",rows:4,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 focus:border-transparent outline-none",placeholder:"Your message"})]}),m.jsx("button",{type:"submit",className:"w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity",children:"Send Message"})]})})]})}),iS=()=>{const e=fi();return x.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center",children:m.jsxs("div",{className:"text-center px-4",children:[m.jsx("h1",{className:"text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4",children:"404"}),m.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Oops! Page not found"}),m.jsx(Oe,{to:"/",className:"inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity",children:"Return to Home"})]})})};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hm=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...s},l)=>x.createElement("svg",{ref:l,...sS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Hm("lucide",o),...s},[...a.map(([c,d])=>x.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=(e,t)=>{const n=x.forwardRef(({className:r,...o},i)=>x.createElement(lS,{ref:i,iconNode:t,className:Hm(`lucide-${aS(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=cS("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),dS=()=>{const{id:e}=Eb(),{toast:t}=eS(),n=Q1(e||"");return n?m.jsxs(m.Fragment,{children:[m.jsx(as,{title:`${n.title} - Tech Chatter Box`,description:n.content.replace(/<[^>]*>/g,"").slice(0,160),keywords:n.keywords,type:"article",imageUrl:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}),m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:m.jsx("div",{className:"container mx-auto px-4",children:m.jsxs("article",{className:"max-w-3xl mx-auto",children:[m.jsx("div",{className:"mb-8 h-[400px] overflow-hidden rounded-2xl",children:m.jsx("img",{src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",alt:n.title,className:"w-full h-full object-cover"})}),m.jsxs("div",{className:"mb-8",children:[m.jsxs("div",{className:"flex items-center gap-2 text-purple-600 mb-4",children:[m.jsx(uS,{size:20}),m.jsx("span",{className:"text-sm font-medium",children:n.category})]}),m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:n.title}),m.jsxs("div",{className:"flex items-center justify-between text-gray-500",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("img",{src:"/author.png",alt:"Author",className:"w-10 h-10 rounded-full"}),m.jsxs("div",{children:[m.jsx("p",{className:"font-medium text-gray-900",children:n.author}),m.jsx("p",{className:"text-sm",children:n.date})]})]}),m.jsxs("span",{className:"text-sm",children:[Oa(n.content)," min read"]})]})]}),m.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})]})})})]}):(t({title:"Post not found",description:"The requested blog post could not be found.",variant:"destructive"}),m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16",children:m.jsx("div",{className:"container mx-auto px-4",children:m.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Post not found"})})}))},pS=()=>m.jsxs(m.Fragment,{children:[m.jsx(as,{title:"Privacy Policy - Tech Chatter Box",description:"Our privacy policy outlines how we collect, use, and protect your personal information.",keywords:[...Xr.default.keywords,"privacy policy","data protection","user privacy"]}),m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:m.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Privacy Policy"}),m.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[m.jsx("p",{className:"text-gray-600 mb-6",children:"Last updated: April 20, 2025"}),m.jsxs("section",{className:"mb-8",children:[m.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"1. Information We Collect"}),m.jsx("p",{className:"text-gray-600 mb-4",children:"We collect information that you provide directly to us, including:"}),m.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-2",children:[m.jsx("li",{children:"Contact information when you subscribe to our newsletter"}),m.jsx("li",{children:"Comments and feedback you provide on our blog posts"}),m.jsx("li",{children:"Information you submit through our contact form"})]})]}),m.jsxs("section",{className:"mb-8",children:[m.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"2. How We Use Your Information"}),m.jsx("p",{className:"text-gray-600 mb-4",children:"We use the information we collect to:"}),m.jsxs("ul",{className:"list-disc list-inside text-gray-600 mb-4 space-y-2",children:[m.jsx("li",{children:"Provide and improve our services"}),m.jsx("li",{children:"Send you updates and newsletters"}),m.jsx("li",{children:"Respond to your inquiries"}),m.jsx("li",{children:"Monitor and analyze website usage"})]})]})]})]})})]}),fS=()=>m.jsxs(m.Fragment,{children:[m.jsx(as,{title:"Terms of Service - Tech Chatter Box",description:"Our terms of service outline the rules and guidelines for using our website.",keywords:[...Xr.default.keywords,"terms of service","terms and conditions","user agreement"]}),m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16",children:m.jsxs("div",{className:"container mx-auto px-4 max-w-3xl",children:[m.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-8",children:"Terms of Service"}),m.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",children:[m.jsx("p",{className:"text-gray-600 mb-6",children:"Last updated: April 20, 2025"}),m.jsxs("section",{className:"mb-8",children:[m.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"1. Agreement to Terms"}),m.jsx("p",{className:"text-gray-600 mb-4",children:"By accessing our website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws."})]}),m.jsxs("section",{className:"mb-8",children:[m.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"2. Intellectual Property"}),m.jsx("p",{className:"text-gray-600 mb-4",children:"All content published on this website is the property of Tech Chatter Box and protected by international copyright laws."})]})]})]})})]}),hS=new qx,mS=()=>m.jsx(zm,{children:m.jsx(Gx,{client:hS,children:m.jsx(Cx,{children:m.jsxs("div",{className:"bg-[#F2FCE2] min-h-screen flex flex-col",children:[m.jsx(Yy,{}),m.jsxs(Vb,{children:[m.jsx(E1,{}),m.jsx("div",{className:"flex-grow",children:m.jsxs(Bb,{children:[m.jsx(kt,{path:"/",element:m.jsx(X1,{})}),m.jsx(kt,{path:"/blog",element:m.jsx(Z1,{})}),m.jsx(kt,{path:"/blog/:id",element:m.jsx(dS,{})}),m.jsx(kt,{path:"/categories",element:m.jsx(nS,{})}),m.jsx(kt,{path:"/about",element:m.jsx(rS,{})}),m.jsx(kt,{path:"/contact",element:m.jsx(oS,{})}),m.jsx(kt,{path:"/privacy-policy",element:m.jsx(pS,{})}),m.jsx(kt,{path:"/terms",element:m.jsx(fS,{})}),m.jsx(kt,{path:"*",element:m.jsx(iS,{})})]})}),m.jsx(T1,{})]})]})})})});Ph(document.getElementById("root")).render(m.jsx(mS,{}));
