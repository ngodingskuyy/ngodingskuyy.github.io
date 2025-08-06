const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-DaQ-Ggl-.js","assets/AboutView-CfXofdcQ.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Rs=[],vn=()=>{},jT=()=>!1,sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uu=t=>t.startsWith("onUpdate:"),Tt=Object.assign,$u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BT=Object.prototype.hasOwnProperty,Pe=(t,e)=>BT.call(t,e),fe=Array.isArray,Ss=t=>ic(t)==="[object Map]",mg=t=>ic(t)==="[object Set]",pe=t=>typeof t=="function",Je=t=>typeof t=="string",Dr=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",gg=t=>(xe(t)||pe(t))&&pe(t.then)&&pe(t.catch),_g=Object.prototype.toString,ic=t=>_g.call(t),qT=t=>ic(t).slice(8,-1),yg=t=>ic(t)==="[object Object]",ju=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=Fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},HT=/-(\w)/g,Jt=oc(t=>t.replace(HT,(e,n)=>n?n.toUpperCase():"")),zT=/\B([A-Z])/g,rs=oc(t=>t.replace(zT,"-$1").toLowerCase()),ac=oc(t=>t.charAt(0).toUpperCase()+t.slice(1)),rl=oc(t=>t?`on${ac(t)}`:""),_r=(t,e)=>!Object.is(t,e),sl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ql=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},WT=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pd;const cc=()=>pd||(pd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bu(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?JT(r):Bu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||xe(t))return t}const KT=/;(?![^(]*\))/g,GT=/:([^]+)/,QT=/\/\*[^]*?\*\//g;function JT(t){const e={};return t.replace(QT,"").split(KT).forEach(n=>{if(n){const r=n.split(GT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gn(t){let e="";if(Je(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=gn(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const YT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XT=Fu(YT);function vg(t){return!!t||t===""}const Eg=t=>!!(t&&t.__v_isRef===!0),ae=t=>Je(t)?t:t==null?"":fe(t)||xe(t)&&(t.toString===_g||!pe(t.toString))?Eg(t)?ae(t.value):JSON.stringify(t,Tg,2):String(t),Tg=(t,e)=>Eg(e)?Tg(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[il(r,i)+" =>"]=s,n),{})}:mg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>il(n))}:Dr(e)?il(e):xe(e)&&!fe(e)&&!yg(e)?String(e):e,il=(t,e="")=>{var n;return Dr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class Ig{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){++this._on===1&&(this.prevScope=pt,pt=this)}off(){this._on>0&&--this._on===0&&(pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wg(t){return new Ig(t)}function bg(){return pt}function ZT(t,e=!1){pt&&pt.cleanups.push(t)}let Oe;const ol=new WeakSet;class Ag{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&pt.active&&pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ol.has(this)&&(ol.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,md(this),Pg(this);const e=Oe,n=an;Oe=this,an=!0;try{return this.fn()}finally{Cg(this),Oe=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zu(e);this.deps=this.depsTail=void 0,md(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ol.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let Rg=0,ki,Ni;function Sg(t,e=!1){if(t.flags|=8,e){t.next=Ni,Ni=t;return}t.next=ki,ki=t}function qu(){Rg++}function Hu(){if(--Rg>0)return;if(Ni){let e=Ni;for(Ni=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ki;){let e=ki;for(ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),zu(r),eI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Hl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ji)||(t.globalVersion=Ji,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=an;Oe=t,an=!0;try{Pg(t);const s=t.fn(t._value);(e.version===0||_r(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,an=r,Cg(t),t.flags&=-3}}function zu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)zu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function eI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const Ng=[];function Bn(){Ng.push(an),an=!1}function qn(){const t=Ng.pop();an=t===void 0?!0:t}function md(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Ji=0;class tI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!an||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new tI(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Dg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Ji++,this.notify(e)}notify(e){qu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hu()}}}function Dg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ba=new WeakMap,Gr=Symbol(""),zl=Symbol(""),Yi=Symbol("");function _t(t,e,n){if(an&&Oe){let r=ba.get(t);r||ba.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Wu),s.map=r,s.key=n),s.track()}}function Mn(t,e,n,r,s,i){const o=ba.get(t);if(!o){Ji++;return}const c=l=>{l&&l.trigger()};if(qu(),e==="clear")o.forEach(c);else{const l=fe(t),u=l&&ju(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Yi||!Dr(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Yi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Gr)),Ss(t)&&c(o.get(zl)));break;case"delete":l||(c(o.get(Gr)),Ss(t)&&c(o.get(zl)));break;case"set":Ss(t)&&c(o.get(Gr));break}}Hu()}function nI(t,e){const n=ba.get(t);return n&&n.get(e)}function ps(t){const e=be(t);return e===t?e:(_t(e,"iterate",Yi),Qt(t)?e:e.map(ot))}function lc(t){return _t(t=be(t),"iterate",Yi),t}const rI={__proto__:null,[Symbol.iterator](){return al(this,Symbol.iterator,ot)},concat(...t){return ps(this).concat(...t.map(e=>fe(e)?ps(e):e))},entries(){return al(this,"entries",t=>(t[1]=ot(t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(ot),arguments)},find(t,e){return Dn(this,"find",t,e,ot,arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,ot,arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return cl(this,"includes",t)},indexOf(...t){return cl(this,"indexOf",t)},join(t){return ps(this).join(t)},lastIndexOf(...t){return cl(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return gi(this,"pop")},push(...t){return gi(this,"push",t)},reduce(t,...e){return gd(this,"reduce",t,e)},reduceRight(t,...e){return gd(this,"reduceRight",t,e)},shift(){return gi(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return gi(this,"splice",t)},toReversed(){return ps(this).toReversed()},toSorted(t){return ps(this).toSorted(t)},toSpliced(...t){return ps(this).toSpliced(...t)},unshift(...t){return gi(this,"unshift",t)},values(){return al(this,"values",ot)}};function al(t,e,n){const r=lc(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const sI=Array.prototype;function Dn(t,e,n,r,s,i){const o=lc(t),c=o!==t&&!Qt(t),l=o[e];if(l!==sI[e]){const p=l.apply(t,i);return c?ot(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ot(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function gd(t,e,n,r){const s=lc(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ot(c),l,t)}),s[e](i,...r)}function cl(t,e,n){const r=be(t);_t(r,"iterate",Yi);const s=r[e](...n);return(s===-1||s===!1)&&Qu(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function gi(t,e,n=[]){Bn(),qu();const r=be(t)[e].apply(t,n);return Hu(),qn(),r}const iI=Fu("__proto__,__v_isRef,__isVue"),Og=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr));function oI(t){Dr(t)||(t=String(t));const e=be(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gI:Fg:i?xg:Lg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=rI[n]))return l;if(n==="hasOwnProperty")return oI}const c=Reflect.get(e,n,je(e)?e:r);return(Dr(n)?Og.has(n):iI(n))||(s||_t(e,"get",n),i)?c:je(c)?o&&ju(n)?c:c.value:xe(c)?s?$g(c):fo(c):c}}class Mg extends Vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ir(i);if(!Qt(r)&&!Ir(r)&&(i=be(i),r=be(r)),!fe(e)&&je(i)&&!je(r))return l?!1:(i.value=r,!0)}const o=fe(e)&&ju(n)?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,je(e)?e:s);return e===be(s)&&(o?_r(r,i)&&Mn(e,"set",n,r):Mn(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dr(n)||!Og.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",fe(e)?"length":Gr),Reflect.ownKeys(e)}}class aI extends Vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cI=new Mg,lI=new aI,uI=new Mg(!0);const Wl=t=>t,Go=t=>Reflect.getPrototypeOf(t);function hI(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=Ss(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Wl:e?Aa:ot;return!e&&_t(i,"iterate",l?zl:Gr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Qo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fI(t,e){const n={get(s){const i=this.__v_raw,o=be(i),c=be(s);t||(_r(s,c)&&_t(o,"get",s),_t(o,"get",c));const{has:l}=Go(o),u=e?Wl:t?Aa:ot;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&_t(be(s),"iterate",Gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=be(i),c=be(s);return t||(_r(s,c)&&_t(o,"has",s),_t(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=be(c),u=e?Wl:t?Aa:ot;return!t&&_t(l,"iterate",Gr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Tt(n,t?{add:Qo("add"),set:Qo("set"),delete:Qo("delete"),clear:Qo("clear")}:{add(s){!e&&!Qt(s)&&!Ir(s)&&(s=be(s));const i=be(this);return Go(i).has.call(i,s)||(i.add(s),Mn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Ir(i)&&(i=be(i));const o=be(this),{has:c,get:l}=Go(o);let u=c.call(o,s);u||(s=be(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?_r(i,f)&&Mn(o,"set",s,i):Mn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:c}=Go(i);let l=o.call(i,s);l||(s=be(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Mn(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&Mn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=hI(s,t,e)}),n}function Ku(t,e){const n=fI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const dI={get:Ku(!1,!1)},pI={get:Ku(!1,!0)},mI={get:Ku(!0,!1)};const Lg=new WeakMap,xg=new WeakMap,Fg=new WeakMap,gI=new WeakMap;function _I(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yI(t){return t.__v_skip||!Object.isExtensible(t)?0:_I(qT(t))}function fo(t){return Ir(t)?t:Gu(t,!1,cI,dI,Lg)}function Ug(t){return Gu(t,!1,uI,pI,xg)}function $g(t){return Gu(t,!0,lI,mI,Fg)}function Gu(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=yI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Un(t){return Ir(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function Ir(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function Qu(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function Ju(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&ql(t,"__v_skip",!0),t}const ot=t=>xe(t)?fo(t):t,Aa=t=>xe(t)?$g(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Rt(t){return jg(t,!1)}function vI(t){return jg(t,!0)}function jg(t,e){return je(t)?t:new EI(t,e)}class EI{constructor(e,n){this.dep=new Wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Ir(e);e=r?e:be(e),_r(e,n)&&(this._rawValue=e,this._value=r?e:ot(e),this.dep.trigger())}}function ne(t){return je(t)?t.value:t}const TI={get:(t,e,n)=>e==="__v_raw"?t:ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bg(t){return Un(t)?t:new Proxy(t,TI)}function II(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=qg(t,n);return e}class wI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return nI(be(this._object),this._key)}}class bI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function AI(t,e,n){return je(t)?t:pe(t)?new bI(t):xe(t)&&arguments.length>1?qg(t,e,n):Rt(t)}function qg(t,e,n){const r=t[e];return je(r)?r:new wI(t,e,n)}class RI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ji-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Sg(this,!0),!0}get value(){const e=this.dep.track();return kg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function SI(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new RI(r,s,n)}const Jo={},Ra=new WeakMap;let Hr;function PI(t,e=!1,n=Hr){if(n){let r=Ra.get(n);r||Ra.set(n,r=[]),r.push(t)}}function CI(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Qt(H)||s===!1||s===0?Ln(H,1):Ln(H);let f,p,m,_,R=!1,O=!1;if(je(t)?(p=()=>t.value,R=Qt(t)):Un(t)?(p=()=>u(t),R=!0):fe(t)?(O=!0,R=t.some(H=>Un(H)||Qt(H)),p=()=>t.map(H=>{if(je(H))return H.value;if(Un(H))return u(H);if(pe(H))return l?l(H,2):H()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Bn();try{m()}finally{qn()}}const H=Hr;Hr=f;try{return l?l(t,3,[_]):t(_)}finally{Hr=H}}:p=vn,e&&s){const H=p,ie=s===!0?1/0:s;p=()=>Ln(H(),ie)}const N=bg(),M=()=>{f.stop(),N&&N.active&&$u(N.effects,f)};if(i&&e){const H=e;e=(...ie)=>{H(...ie),M()}}let L=O?new Array(t.length).fill(Jo):Jo;const D=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ie=f.run();if(s||R||(O?ie.some((_e,b)=>_r(_e,L[b])):_r(ie,L))){m&&m();const _e=Hr;Hr=f;try{const b=[ie,L===Jo?void 0:O&&L[0]===Jo?[]:L,_];L=ie,l?l(e,3,b):e(...b)}finally{Hr=_e}}}else f.run()};return c&&c(D),f=new Ag(p),f.scheduler=o?()=>o(D,!1):D,_=H=>PI(H,!1,f),m=f.onStop=()=>{const H=Ra.get(f);if(H){if(l)l(H,4);else for(const ie of H)ie();Ra.delete(f)}},e?r?D(!0):L=f.run():o?o(D.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function Ln(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))Ln(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)Ln(t[r],e,n);else if(mg(t)||Ss(t))t.forEach(r=>{Ln(r,e,n)});else if(yg(t)){for(const r in t)Ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function po(t,e,n,r){try{return r?t(...r):t()}catch(s){uc(s,e,n)}}function Rn(t,e,n,r){if(pe(t)){const s=po(t,e,n,r);return s&&gg(s)&&s.catch(i=>{uc(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Rn(t[i],e,n,r));return s}}function uc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Bn(),po(i,null,10,[t,l,u]),qn();return}}kI(t,n,s,r,o)}function kI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let mn=-1;const Ps=[];let ar=null,_s=0;const Hg=Promise.resolve();let Sa=null;function Yu(t){const e=Sa||Hg;return t?e.then(this?t.bind(this):t):e}function NI(t){let e=mn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=Xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xu(t){if(!(t.flags&1)){const e=Xi(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=Xi(n)?At.push(t):At.splice(NI(e),0,t),t.flags|=1,zg()}}function zg(){Sa||(Sa=Hg.then(Kg))}function DI(t){fe(t)?Ps.push(...t):ar&&t.id===-1?ar.splice(_s+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),zg()}function _d(t,e,n=mn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wg(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,r)=>Xi(n)-Xi(r));if(Ps.length=0,ar){ar.push(...e);return}for(ar=e,_s=0;_s<ar.length;_s++){const n=ar[_s];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,_s=0}}const Xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kg(t){try{for(mn=0;mn<At.length;mn++){const e=At[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<At.length;mn++){const e=At[mn];e&&(e.flags&=-2)}mn=-1,At.length=0,Wg(),Sa=null,(At.length||Ps.length)&&Kg()}}let Ft=null,Gg=null;function Pa(t){const e=Ft;return Ft=t,Gg=t&&t.type.__scopeId||null,e}function ur(t,e=Ft,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sd(-1);const i=Pa(e);let o;try{o=t(...s)}finally{Pa(i),r._d&&Sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ll(t,e){if(Ft===null)return t;const n=mc(Ft),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Bn(),Rn(l,n,8,[t.el,c,t,e]),qn())}}const OI=Symbol("_vte"),VI=t=>t.__isTeleport;function Zu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function mo(t,e){return pe(t)?Tt({name:t.name},e,{setup:t}):t}function Qg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Di(t,e,n,r,s=!1){if(fe(t)){t.forEach((R,O)=>Di(R,e&&(fe(e)?e[O]:e),n,r,s));return}if(Oi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Di(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?mc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=be(p),_=p===Ne?()=>!1:R=>Pe(m,R);if(u!=null&&u!==l&&(Je(u)?(f[u]=null,_(u)&&(p[u]=null)):je(u)&&(u.value=null)),pe(l))po(l,c,12,[o,f]);else{const R=Je(l),O=je(l);if(R||O){const N=()=>{if(t.f){const M=R?_(l)?p[l]:f[l]:l.value;s?fe(M)&&$u(M,i):fe(M)?M.includes(i)||M.push(i):R?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else R?(f[l]=o,_(l)&&(p[l]=o)):O&&(l.value=o,t.k&&(f[t.k]=o))};o?(N.id=-1,Lt(N,n)):N()}}}cc().requestIdleCallback;cc().cancelIdleCallback;const Oi=t=>!!t.type.__asyncLoader,Jg=t=>t.type.__isKeepAlive;function MI(t,e){Yg(t,"a",e)}function LI(t,e){Yg(t,"da",e)}function Yg(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(hc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jg(s.parent.vnode)&&xI(r,e,n,s),s=s.parent}}function xI(t,e,n,r){const s=hc(e,t,r,!0);Xg(()=>{$u(r[e],s)},n)}function hc(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Bn();const c=go(n),l=Rn(e,n,t,o);return c(),qn(),l});return r?s.unshift(i):s.push(i),i}}const Jn=t=>(e,n=vt)=>{(!eo||t==="sp")&&hc(t,(...r)=>e(...r),n)},FI=Jn("bm"),fc=Jn("m"),UI=Jn("bu"),$I=Jn("u"),jI=Jn("bum"),Xg=Jn("um"),BI=Jn("sp"),qI=Jn("rtg"),HI=Jn("rtc");function zI(t,e=vt){hc("ec",t,e)}const WI="components";function KI(t,e){return QI(WI,t,!0,e)||t}const GI=Symbol.for("v-ndc");function QI(t,e,n=!0,r=!1){const s=Ft||vt;if(s){const i=s.type;{const c=xw(i,!1);if(c&&(c===e||c===Jt(e)||c===ac(Jt(e))))return i}const o=yd(s[t]||i[t],e)||yd(s.appContext[t],e);return!o&&r?i:o}}function yd(t,e){return t&&(t[e]||t[Jt(e)]||t[ac(Jt(e))])}function Kl(t,e,n,r){let s;const i=n,o=fe(t);if(o||Je(t)){const c=o&&Un(t);let l=!1,u=!1;c&&(l=!Qt(t),u=Ir(t),t=lc(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Aa(ot(t[f])):ot(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Gl=t=>t?v_(t)?mc(t):Gl(t.parent):null,Vi=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>e_(t),$forceUpdate:t=>t.f||(t.f=()=>{Xu(t.update)}),$nextTick:t=>t.n||(t.n=Yu.bind(t.proxy)),$watch:t=>_w.bind(t)}),ul=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Pe(t,e),JI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ul(r,e))return o[e]=1,r[e];if(s!==Ne&&Pe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];Ql&&(o[e]=0)}}const f=Vi[e];let p,m;if(f)return e==="$attrs"&&_t(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Pe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Pe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ul(s,e)?(s[e]=n,!0):r!==Ne&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ne&&Pe(t,o)||ul(e,o)||(c=i[0])&&Pe(c,o)||Pe(r,o)||Pe(Vi,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vd(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ql=!0;function YI(t){const e=e_(t),n=t.proxy,r=t.ctx;Ql=!1,e.beforeCreate&&Ed(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:R,activated:O,deactivated:N,beforeDestroy:M,beforeUnmount:L,destroyed:D,unmounted:H,render:ie,renderTracked:_e,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:w,inheritAttrs:A,components:S,directives:T,filters:et}=e;if(u&&XI(u,r,null),o)for(const he in o){const ve=o[he];pe(ve)&&(r[he]=ve.bind(n))}if(s){const he=s.call(n,n);xe(he)&&(t.data=fo(he))}if(Ql=!0,i)for(const he in i){const ve=i[he],Ot=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):vn,Zt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):vn,qt=at({get:Ot,set:Zt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Ue=>qt.value=Ue})}if(c)for(const he in c)Zg(c[he],r,n,he);if(l){const he=pe(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ve=>{aa(ve,he[ve])})}f&&Ed(f,t,"c");function De(he,ve){fe(ve)?ve.forEach(Ot=>he(Ot.bind(n))):ve&&he(ve.bind(n))}if(De(FI,p),De(fc,m),De(UI,_),De($I,R),De(MI,O),De(LI,N),De(zI,y),De(HI,_e),De(qI,b),De(jI,L),De(Xg,H),De(BI,v),fe(w))if(w.length){const he=t.exposed||(t.exposed={});w.forEach(ve=>{Object.defineProperty(he,ve,{get:()=>n[ve],set:Ot=>n[ve]=Ot,enumerable:!0})})}else t.exposed||(t.exposed={});ie&&t.render===vn&&(t.render=ie),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),T&&(t.directives=T),v&&Qg(t)}function XI(t,e,n=vn){fe(t)&&(t=Jl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=cn(s.from||r,s.default,!0):i=cn(s.from||r):i=cn(s),je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ed(t,e,n){Rn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zg(t,e,n,r){let s=r.includes(".")?d_(n,r):()=>n[r];if(Je(t)){const i=e[t];pe(i)&&Mi(s,i)}else if(pe(t))Mi(s,t.bind(n));else if(xe(t))if(fe(t))t.forEach(i=>Zg(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Mi(s,i,t)}}function e_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ca(l,u,o,!0)),Ca(l,e,o)),xe(e)&&i.set(e,l),l}function Ca(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ca(t,i,n,!0),s&&s.forEach(o=>Ca(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=ZI[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const ZI={data:Td,props:Id,emits:Id,methods:Ti,computed:Ti,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ti,directives:Ti,watch:tw,provide:Td,inject:ew};function Td(t,e){return e?t?function(){return Tt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function ew(t,e){return Ti(Jl(t),Jl(e))}function Jl(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ti(t,e){return t?Tt(Object.create(null),t,e):e}function Id(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Tt(Object.create(null),vd(t),vd(e??{})):e}function tw(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function t_(){return{app:null,config:{isNativeTag:jT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nw=0;function rw(t,e){return function(r,s=null){pe(r)||(r=Tt({},r)),s!=null&&!xe(s)&&(s=null);const i=t_(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:nw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||ze(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,mc(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Rn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Qr;Qr=u;try{return f()}finally{Qr=p}}};return u}}let Qr=null;function aa(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=y_();if(r||Qr){let s=Qr?Qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function sw(){return!!(y_()||Qr)}const n_={},r_=()=>Object.create(n_),s_=t=>Object.getPrototypeOf(t)===n_;function iw(t,e,n,r=!1){const s={},i=r_();t.propsDefaults=Object.create(null),i_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ug(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ow(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=be(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(dc(t.emitsOptions,m))continue;const _=e[m];if(l)if(Pe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=Jt(m);s[R]=Yl(l,c,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{i_(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Pe(e,p)&&((f=rs(p))===p||!Pe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Yl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Mn(t.attrs,"set","")}function i_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ci(l))continue;const u=e[l];let f;s&&Pe(s,f=Jt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:dc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=be(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Yl(s,l,p,u[p],t,!Pe(u,p))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=go(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===rs(n))&&(r=!0))}return r}const aw=new WeakMap;function o_(t,e,n=!1){const r=n?aw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,_]=o_(p,e,!0);Tt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return xe(t)&&r.set(t,Rs),Rs;if(fe(i))for(let f=0;f<i.length;f++){const p=Jt(i[f]);wd(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Jt(f);if(wd(p)){const m=i[f],_=o[p]=fe(m)||pe(m)?{type:m}:Tt({},m),R=_.type;let O=!1,N=!0;if(fe(R))for(let M=0;M<R.length;++M){const L=R[M],D=pe(L)&&L.name;if(D==="Boolean"){O=!0;break}else D==="String"&&(N=!1)}else O=pe(R)&&R.name==="Boolean";_[0]=O,_[1]=N,(O||Pe(_,"default"))&&c.push(p)}}const u=[o,c];return xe(t)&&r.set(t,u),u}function wd(t){return t[0]!=="$"&&!Ci(t)}const eh=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",th=t=>fe(t)?t.map(yn):[yn(t)],cw=(t,e,n)=>{if(e._n)return e;const r=ur((...s)=>th(e(...s)),n);return r._c=!1,r},a_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(eh(s))continue;const i=t[s];if(pe(i))e[s]=cw(s,i,r);else if(i!=null){const o=th(i);e[s]=()=>o}}},c_=(t,e)=>{const n=th(e);t.slots.default=()=>n},l_=(t,e,n)=>{for(const r in e)(n||!eh(r))&&(t[r]=e[r])},lw=(t,e,n)=>{const r=t.slots=r_();if(t.vnode.shapeFlag&32){const s=e.__;s&&ql(r,"__",s,!0);const i=e._;i?(l_(r,e,n),n&&ql(r,"_",i,!0)):a_(e,r)}else e&&c_(t,e)},uw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:l_(s,e,n):(i=!e.$stable,a_(e,s)),o=e}else e&&(c_(t,e),o={default:1});if(i)for(const c in s)!eh(c)&&o[c]==null&&delete s[c]},Lt=bw;function hw(t){return fw(t)}function fw(t,e){const n=cc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=vn,insertStaticContent:R}=t,O=(E,I,P,U=null,B=null,$=null,Q=void 0,W=null,z=!!I.dynamicChildren)=>{if(E===I)return;E&&!_i(E,I)&&(U=F(E),Ue(E,B,$,!0),E=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:q,ref:re,shapeFlag:G}=I;switch(q){case pc:N(E,I,P,U);break;case Ls:M(E,I,P,U);break;case ca:E==null&&L(I,P,U,Q);break;case Wt:S(E,I,P,U,B,$,Q,W,z);break;default:G&1?ie(E,I,P,U,B,$,Q,W,z):G&6?T(E,I,P,U,B,$,Q,W,z):(G&64||G&128)&&q.process(E,I,P,U,B,$,Q,W,z,ee)}re!=null&&B?Di(re,E&&E.ref,$,I||E,!I):re==null&&E&&E.ref!=null&&Di(E.ref,null,$,E,!0)},N=(E,I,P,U)=>{if(E==null)r(I.el=c(I.children),P,U);else{const B=I.el=E.el;I.children!==E.children&&u(B,I.children)}},M=(E,I,P,U)=>{E==null?r(I.el=l(I.children||""),P,U):I.el=E.el},L=(E,I,P,U)=>{[E.el,E.anchor]=R(E.children,I,P,U,E.el,E.anchor)},D=({el:E,anchor:I},P,U)=>{let B;for(;E&&E!==I;)B=m(E),r(E,P,U),E=B;r(I,P,U)},H=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=m(E),s(E),E=P;s(I)},ie=(E,I,P,U,B,$,Q,W,z)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?_e(I,P,U,B,$,Q,W,z):v(E,I,B,$,Q,W,z)},_e=(E,I,P,U,B,$,Q,W)=>{let z,q;const{props:re,shapeFlag:G,transition:te,dirs:ue}=E;if(z=E.el=o(E.type,$,re&&re.is,re),G&8?f(z,E.children):G&16&&y(E.children,z,null,U,B,hl(E,$),Q,W),ue&&Br(E,null,U,"created"),b(z,E,E.scopeId,Q,U),re){for(const ge in re)ge!=="value"&&!Ci(ge)&&i(z,ge,null,re[ge],$,U);"value"in re&&i(z,"value",null,re.value,$),(q=re.onVnodeBeforeMount)&&pn(q,U,E)}ue&&Br(E,null,U,"beforeMount");const oe=dw(B,te);oe&&te.beforeEnter(z),r(z,I,P),((q=re&&re.onVnodeMounted)||oe||ue)&&Lt(()=>{q&&pn(q,U,E),oe&&te.enter(z),ue&&Br(E,null,U,"mounted")},B)},b=(E,I,P,U,B)=>{if(P&&_(E,P),U)for(let $=0;$<U.length;$++)_(E,U[$]);if(B){let $=B.subTree;if(I===$||m_($.type)&&($.ssContent===I||$.ssFallback===I)){const Q=B.vnode;b(E,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},y=(E,I,P,U,B,$,Q,W,z=0)=>{for(let q=z;q<E.length;q++){const re=E[q]=W?cr(E[q]):yn(E[q]);O(null,re,I,P,U,B,$,Q,W)}},v=(E,I,P,U,B,$,Q)=>{const W=I.el=E.el;let{patchFlag:z,dynamicChildren:q,dirs:re}=I;z|=E.patchFlag&16;const G=E.props||Ne,te=I.props||Ne;let ue;if(P&&qr(P,!1),(ue=te.onVnodeBeforeUpdate)&&pn(ue,P,I,E),re&&Br(I,E,P,"beforeUpdate"),P&&qr(P,!0),(G.innerHTML&&te.innerHTML==null||G.textContent&&te.textContent==null)&&f(W,""),q?w(E.dynamicChildren,q,W,P,U,hl(I,B),$):Q||ve(E,I,W,null,P,U,hl(I,B),$,!1),z>0){if(z&16)A(W,G,te,P,B);else if(z&2&&G.class!==te.class&&i(W,"class",null,te.class,B),z&4&&i(W,"style",G.style,te.style,B),z&8){const oe=I.dynamicProps;for(let ge=0;ge<oe.length;ge++){const Ie=oe[ge],tt=G[Ie],nt=te[Ie];(nt!==tt||Ie==="value")&&i(W,Ie,tt,nt,B,P)}}z&1&&E.children!==I.children&&f(W,I.children)}else!Q&&q==null&&A(W,G,te,P,B);((ue=te.onVnodeUpdated)||re)&&Lt(()=>{ue&&pn(ue,P,I,E),re&&Br(I,E,P,"updated")},U)},w=(E,I,P,U,B,$,Q)=>{for(let W=0;W<I.length;W++){const z=E[W],q=I[W],re=z.el&&(z.type===Wt||!_i(z,q)||z.shapeFlag&198)?p(z.el):P;O(z,q,re,null,U,B,$,Q,!0)}},A=(E,I,P,U,B)=>{if(I!==P){if(I!==Ne)for(const $ in I)!Ci($)&&!($ in P)&&i(E,$,I[$],null,B,U);for(const $ in P){if(Ci($))continue;const Q=P[$],W=I[$];Q!==W&&$!=="value"&&i(E,$,W,Q,B,U)}"value"in P&&i(E,"value",I.value,P.value,B)}},S=(E,I,P,U,B,$,Q,W,z)=>{const q=I.el=E?E.el:c(""),re=I.anchor=E?E.anchor:c("");let{patchFlag:G,dynamicChildren:te,slotScopeIds:ue}=I;ue&&(W=W?W.concat(ue):ue),E==null?(r(q,P,U),r(re,P,U),y(I.children||[],P,re,B,$,Q,W,z)):G>0&&G&64&&te&&E.dynamicChildren?(w(E.dynamicChildren,te,P,B,$,Q,W),(I.key!=null||B&&I===B.subTree)&&u_(E,I,!0)):ve(E,I,P,re,B,$,Q,W,z)},T=(E,I,P,U,B,$,Q,W,z)=>{I.slotScopeIds=W,E==null?I.shapeFlag&512?B.ctx.activate(I,P,U,Q,z):et(I,P,U,B,$,Q,z):Pt(E,I,z)},et=(E,I,P,U,B,$,Q)=>{const W=E.component=Dw(E,U,B);if(Jg(E)&&(W.ctx.renderer=ee),Ow(W,!1,Q),W.asyncDep){if(B&&B.registerDep(W,De,Q),!E.el){const z=W.subTree=ze(Ls);M(null,z,I,P),E.placeholder=z.el}}else De(W,E,I,P,B,$,Q)},Pt=(E,I,P)=>{const U=I.component=E.component;if(Iw(E,I,P))if(U.asyncDep&&!U.asyncResolved){he(U,I,P);return}else U.next=I,U.update();else I.el=E.el,U.vnode=I},De=(E,I,P,U,B,$,Q)=>{const W=()=>{if(E.isMounted){let{next:G,bu:te,u:ue,parent:oe,vnode:ge}=E;{const ut=h_(E);if(ut){G&&(G.el=ge.el,he(E,G,Q)),ut.asyncDep.then(()=>{E.isUnmounted||W()});return}}let Ie=G,tt;qr(E,!1),G?(G.el=ge.el,he(E,G,Q)):G=ge,te&&sl(te),(tt=G.props&&G.props.onVnodeBeforeUpdate)&&pn(tt,oe,G,ge),qr(E,!0);const nt=Ad(E),Ht=E.subTree;E.subTree=nt,O(Ht,nt,p(Ht.el),F(Ht),E,B,$),G.el=nt.el,Ie===null&&ww(E,nt.el),ue&&Lt(ue,B),(tt=G.props&&G.props.onVnodeUpdated)&&Lt(()=>pn(tt,oe,G,ge),B)}else{let G;const{el:te,props:ue}=I,{bm:oe,m:ge,parent:Ie,root:tt,type:nt}=E,Ht=Oi(I);qr(E,!1),oe&&sl(oe),!Ht&&(G=ue&&ue.onVnodeBeforeMount)&&pn(G,Ie,I),qr(E,!0);{tt.ce&&tt.ce._def.shadowRoot!==!1&&tt.ce._injectChildStyle(nt);const ut=E.subTree=Ad(E);O(null,ut,P,U,E,B,$),I.el=ut.el}if(ge&&Lt(ge,B),!Ht&&(G=ue&&ue.onVnodeMounted)){const ut=I;Lt(()=>pn(G,Ie,ut),B)}(I.shapeFlag&256||Ie&&Oi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&Lt(E.a,B),E.isMounted=!0,I=P=U=null}};E.scope.on();const z=E.effect=new Ag(W);E.scope.off();const q=E.update=z.run.bind(z),re=E.job=z.runIfDirty.bind(z);re.i=E,re.id=E.uid,z.scheduler=()=>Xu(re),qr(E,!0),q()},he=(E,I,P)=>{I.component=E;const U=E.vnode.props;E.vnode=I,E.next=null,ow(E,I.props,U,P),uw(E,I.children,P),Bn(),_d(E),qn()},ve=(E,I,P,U,B,$,Q,W,z=!1)=>{const q=E&&E.children,re=E?E.shapeFlag:0,G=I.children,{patchFlag:te,shapeFlag:ue}=I;if(te>0){if(te&128){Zt(q,G,P,U,B,$,Q,W,z);return}else if(te&256){Ot(q,G,P,U,B,$,Q,W,z);return}}ue&8?(re&16&&Ct(q,B,$),G!==q&&f(P,G)):re&16?ue&16?Zt(q,G,P,U,B,$,Q,W,z):Ct(q,B,$,!0):(re&8&&f(P,""),ue&16&&y(G,P,U,B,$,Q,W,z))},Ot=(E,I,P,U,B,$,Q,W,z)=>{E=E||Rs,I=I||Rs;const q=E.length,re=I.length,G=Math.min(q,re);let te;for(te=0;te<G;te++){const ue=I[te]=z?cr(I[te]):yn(I[te]);O(E[te],ue,P,null,B,$,Q,W,z)}q>re?Ct(E,B,$,!0,!1,G):y(I,P,U,B,$,Q,W,z,G)},Zt=(E,I,P,U,B,$,Q,W,z)=>{let q=0;const re=I.length;let G=E.length-1,te=re-1;for(;q<=G&&q<=te;){const ue=E[q],oe=I[q]=z?cr(I[q]):yn(I[q]);if(_i(ue,oe))O(ue,oe,P,null,B,$,Q,W,z);else break;q++}for(;q<=G&&q<=te;){const ue=E[G],oe=I[te]=z?cr(I[te]):yn(I[te]);if(_i(ue,oe))O(ue,oe,P,null,B,$,Q,W,z);else break;G--,te--}if(q>G){if(q<=te){const ue=te+1,oe=ue<re?I[ue].el:U;for(;q<=te;)O(null,I[q]=z?cr(I[q]):yn(I[q]),P,oe,B,$,Q,W,z),q++}}else if(q>te)for(;q<=G;)Ue(E[q],B,$,!0),q++;else{const ue=q,oe=q,ge=new Map;for(q=oe;q<=te;q++){const rt=I[q]=z?cr(I[q]):yn(I[q]);rt.key!=null&&ge.set(rt.key,q)}let Ie,tt=0;const nt=te-oe+1;let Ht=!1,ut=0;const er=new Array(nt);for(q=0;q<nt;q++)er[q]=0;for(q=ue;q<=G;q++){const rt=E[q];if(tt>=nt){Ue(rt,B,$,!0);continue}let zt;if(rt.key!=null)zt=ge.get(rt.key);else for(Ie=oe;Ie<=te;Ie++)if(er[Ie-oe]===0&&_i(rt,I[Ie])){zt=Ie;break}zt===void 0?Ue(rt,B,$,!0):(er[zt-oe]=q+1,zt>=ut?ut=zt:Ht=!0,O(rt,I[zt],P,null,B,$,Q,W,z),tt++)}const ri=Ht?pw(er):Rs;for(Ie=ri.length-1,q=nt-1;q>=0;q--){const rt=oe+q,zt=I[rt],Do=I[rt+1],ls=rt+1<re?Do.el||Do.placeholder:U;er[q]===0?O(null,zt,P,ls,B,$,Q,W,z):Ht&&(Ie<0||q!==ri[Ie]?qt(zt,P,ls,2):Ie--)}}},qt=(E,I,P,U,B=null)=>{const{el:$,type:Q,transition:W,children:z,shapeFlag:q}=E;if(q&6){qt(E.component.subTree,I,P,U);return}if(q&128){E.suspense.move(I,P,U);return}if(q&64){Q.move(E,I,P,ee);return}if(Q===Wt){r($,I,P);for(let G=0;G<z.length;G++)qt(z[G],I,P,U);r(E.anchor,I,P);return}if(Q===ca){D(E,I,P);return}if(U!==2&&q&1&&W)if(U===0)W.beforeEnter($),r($,I,P),Lt(()=>W.enter($),B);else{const{leave:G,delayLeave:te,afterLeave:ue}=W,oe=()=>{E.ctx.isUnmounted?s($):r($,I,P)},ge=()=>{G($,()=>{oe(),ue&&ue()})};te?te($,oe,ge):ge()}else r($,I,P)},Ue=(E,I,P,U=!1,B=!1)=>{const{type:$,props:Q,ref:W,children:z,dynamicChildren:q,shapeFlag:re,patchFlag:G,dirs:te,cacheIndex:ue}=E;if(G===-2&&(B=!1),W!=null&&(Bn(),Di(W,null,P,E,!0),qn()),ue!=null&&(I.renderCache[ue]=void 0),re&256){I.ctx.deactivate(E);return}const oe=re&1&&te,ge=!Oi(E);let Ie;if(ge&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&pn(Ie,I,E),re&6)dn(E.component,P,U);else{if(re&128){E.suspense.unmount(P,U);return}oe&&Br(E,null,I,"beforeUnmount"),re&64?E.type.remove(E,I,P,ee,U):q&&!q.hasOnce&&($!==Wt||G>0&&G&64)?Ct(q,I,P,!1,!0):($===Wt&&G&384||!B&&re&16)&&Ct(z,I,P),U&&$e(E)}(ge&&(Ie=Q&&Q.onVnodeUnmounted)||oe)&&Lt(()=>{Ie&&pn(Ie,I,E),oe&&Br(E,null,I,"unmounted")},P)},$e=E=>{const{type:I,el:P,anchor:U,transition:B}=E;if(I===Wt){Zn(P,U);return}if(I===ca){H(E);return}const $=()=>{s(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:W}=B,z=()=>Q(P,$);W?W(E.el,$,z):z()}else $()},Zn=(E,I)=>{let P;for(;E!==I;)P=m(E),s(E),E=P;s(I)},dn=(E,I,P)=>{const{bum:U,scope:B,job:$,subTree:Q,um:W,m:z,a:q,parent:re,slots:{__:G}}=E;bd(z),bd(q),U&&sl(U),re&&fe(G)&&G.forEach(te=>{re.renderCache[te]=void 0}),B.stop(),$&&($.flags|=8,Ue(Q,E,I,P)),W&&Lt(W,I),Lt(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ct=(E,I,P,U=!1,B=!1,$=0)=>{for(let Q=$;Q<E.length;Q++)Ue(E[Q],I,P,U,B)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),P=I&&I[OI];return P?m(P):I};let X=!1;const J=(E,I,P)=>{E==null?I._vnode&&Ue(I._vnode,null,null,!0):O(I._vnode||null,E,I,null,null,null,P),I._vnode=E,X||(X=!0,_d(),Wg(),X=!1)},ee={p:O,um:Ue,m:qt,r:$e,mt:et,mc:y,pc:ve,pbc:w,n:F,o:t};return{render:J,hydrate:void 0,createApp:rw(J)}}function hl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function dw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function u_(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=cr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&u_(o,c)),c.type===pc&&(c.el=o.el),c.type===Ls&&!c.el&&(c.el=o.el)}}function pw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function h_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:h_(e)}function bd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const mw=Symbol.for("v-scx"),gw=()=>cn(mw);function Mi(t,e,n){return f_(t,e,n)}function f_(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=Tt({},n),l=e&&r||!e&&i!=="post";let u;if(eo){if(i==="sync"){const _=gw();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=vn,_.resume=vn,_.pause=vn,_}}const f=vt;c.call=(_,R,O)=>Rn(_,f,R,O);let p=!1;i==="post"?c.scheduler=_=>{Lt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,R)=>{R?_():Xu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=CI(t,e,c);return eo&&(u?u.push(m):l&&m()),m}function _w(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?d_(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=go(this),c=f_(s,i.bind(r),n);return o(),c}function d_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const yw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${rs(e)}Modifiers`];function vw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&yw(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(WT)));let c,l=r[c=rl(e)]||r[c=rl(Jt(e))];!l&&i&&(l=r[c=rl(rs(e))]),l&&Rn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Rn(u,t,6,s)}}function p_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=p_(u,e,!0);f&&(c=!0,Tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&r.set(t,null),null):(fe(i)?i.forEach(l=>o[l]=null):Tt(o,i),xe(t)&&r.set(t,o),o)}function dc(t,e){return!t||!sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,rs(e))||Pe(t,e))}function Ad(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:R,inheritAttrs:O}=t,N=Pa(t);let M,L;try{if(n.shapeFlag&4){const H=s||r,ie=H;M=yn(u.call(ie,H,f,p,_,m,R)),L=c}else{const H=e;M=yn(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),L=e.props?c:Ew(c)}}catch(H){Li.length=0,uc(H,t,1),M=ze(Ls)}let D=M;if(L&&O!==!1){const H=Object.keys(L),{shapeFlag:ie}=D;H.length&&ie&7&&(i&&H.some(Uu)&&(L=Tw(L,i)),D=xs(D,L,!1,!0))}return n.dirs&&(D=xs(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Zu(D,n.transition),M=D,Pa(N),M}const Ew=t=>{let e;for(const n in t)(n==="class"||n==="style"||sc(n))&&((e||(e={}))[n]=t[n]);return e},Tw=(t,e)=>{const n={};for(const r in t)(!Uu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Rd(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!dc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Rd(r,o,u):!0:!!o;return!1}function Rd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dc(n,i))return!0}return!1}function ww({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const m_=t=>t.__isSuspense;function bw(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):DI(t)}const Wt=Symbol.for("v-fgt"),pc=Symbol.for("v-txt"),Ls=Symbol.for("v-cmt"),ca=Symbol.for("v-stc"),Li=[];let Ut=null;function nn(t=!1){Li.push(Ut=t?null:[])}function Aw(){Li.pop(),Ut=Li[Li.length-1]||null}let Zi=1;function Sd(t,e=!1){Zi+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function Rw(t){return t.dynamicChildren=Zi>0?Ut||Rs:null,Aw(),Zi>0&&Ut&&Ut.push(t),t}function rn(t,e,n,r,s,i){return Rw(C(t,e,n,r,s,i,!0))}function ka(t){return t?t.__v_isVNode===!0:!1}function _i(t,e){return t.type===e.type&&t.key===e.key}const g_=({key:t})=>t??null,la=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||je(t)||pe(t)?{i:Ft,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===Wt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&g_(e),ref:e&&la(e),scopeId:Gg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ft};return c?(nh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Zi>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const ze=Sw;function Sw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===GI)&&(t=Ls),ka(t)){const c=xs(t,e,!0);return n&&nh(c,n),Zi>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(Fw(t)&&(t=t.__vccOpts),e){e=Pw(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=gn(c)),xe(l)&&(Qu(l)&&!fe(l)&&(l=Tt({},l)),e.style=Bu(l))}const o=Je(t)?1:m_(t)?128:VI(t)?64:xe(t)?4:pe(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function Pw(t){return t?Qu(t)||s_(t)?Tt({},t):t:null}function xs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Cw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&g_(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(la(e)):[i,la(e)]:la(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Zu(f,l.clone(f)),f}function Fs(t=" ",e=0){return ze(pc,null,t,e)}function __(t,e){const n=ze(ca,null,t);return n.staticCount=e,n}function yn(t){return t==null||typeof t=="boolean"?ze(Ls):fe(t)?ze(Wt,null,t.slice()):ka(t)?cr(t):ze(pc,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function nh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!s_(e)?e._ctx=Ft:s===3&&Ft&&(Ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Ft},n=32):(e=String(e),r&64?(n=16,e=[Fs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gn([e.class,r.class]));else if(s==="style")e.style=Bu([e.style,r.style]);else if(sc(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){Rn(t,e,7,[n,r])}const kw=t_();let Nw=0;function Dw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kw,i={uid:Nw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ig(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:o_(r,s),emitsOptions:p_(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vw.bind(null,i),t.ce&&t.ce(i),i}let vt=null;const y_=()=>vt||Ft;let Na,Xl;{const t=cc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Na=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),Xl=e("__VUE_SSR_SETTERS__",n=>eo=n)}const go=t=>{const e=vt;return Na(t),t.scope.on(),()=>{t.scope.off(),Na(e)}},Pd=()=>{vt&&vt.scope.off(),Na(null)};function v_(t){return t.vnode.shapeFlag&4}let eo=!1;function Ow(t,e=!1,n=!1){e&&Xl(e);const{props:r,children:s}=t.vnode,i=v_(t);iw(t,r,i,e),lw(t,s,n||e);const o=i?Vw(t,e):void 0;return e&&Xl(!1),o}function Vw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,JI);const{setup:r}=n;if(r){Bn();const s=t.setupContext=r.length>1?Lw(t):null,i=go(t),o=po(r,t,0,[t.props,s]),c=gg(o);if(qn(),i(),(c||t.sp)&&!Oi(t)&&Qg(t),c){if(o.then(Pd,Pd),e)return o.then(l=>{Cd(t,l)}).catch(l=>{uc(l,t,0)});t.asyncDep=o}else Cd(t,o)}else E_(t)}function Cd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Bg(e)),E_(t)}function E_(t,e,n){const r=t.type;t.render||(t.render=r.render||vn);{const s=go(t);Bn();try{YI(t)}finally{qn(),s()}}}const Mw={get(t,e){return _t(t,"get",""),t[e]}};function Lw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Mw),slots:t.slots,emit:t.emit,expose:e}}function mc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bg(Ju(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}})):t.proxy}function xw(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function Fw(t){return pe(t)&&"__vccOpts"in t}const at=(t,e)=>SI(t,e,eo);function T_(t,e,n){const r=arguments.length;return r===2?xe(e)&&!fe(e)?ka(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ka(n)&&(n=[n]),ze(t,e,n))}const Uw="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const kd=typeof window<"u"&&window.trustedTypes;if(kd)try{Zl=kd.createPolicy("vue",{createHTML:t=>t})}catch{}const I_=Zl?t=>Zl.createHTML(t):t=>t,$w="http://www.w3.org/2000/svg",jw="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,Nd=Vn&&Vn.createElement("template"),Bw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Vn.createElementNS($w,t):e==="mathml"?Vn.createElementNS(jw,t):n?Vn.createElement(t,{is:n}):Vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nd.innerHTML=I_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Nd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qw=Symbol("_vtc");function Hw(t,e,n){const r=t[qw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Da=Symbol("_vod"),w_=Symbol("_vsh"),fl={beforeMount(t,{value:e},{transition:n}){t[Da]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):yi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),yi(t,!0),r.enter(t)):r.leave(t,()=>{yi(t,!1)}):yi(t,e))},beforeUnmount(t,{value:e}){yi(t,e)}};function yi(t,e){t.style.display=e?t[Da]:"none",t[w_]=!e}const zw=Symbol(""),Ww=/(^|;)\s*display\s*:/;function Kw(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ua(r,c,"")}else for(const o in e)n[o]==null&&ua(r,o,"");for(const o in n)o==="display"&&(i=!0),ua(r,o,n[o])}else if(s){if(e!==n){const o=r[zw];o&&(n+=";"+o),r.cssText=n,i=Ww.test(n)}}else e&&t.removeAttribute("style");Da in t&&(t[Da]=i?r.display:"",t[w_]&&(r.display="none"))}const Dd=/\s*!important$/;function ua(t,e,n){if(fe(n))n.forEach(r=>ua(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gw(t,e);Dd.test(n)?t.setProperty(rs(r),n.replace(Dd,""),"important"):t[r]=n}}const Od=["Webkit","Moz","ms"],dl={};function Gw(t,e){const n=dl[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return dl[e]=r;r=ac(r);for(let s=0;s<Od.length;s++){const i=Od[s]+r;if(i in t)return dl[e]=i}return e}const Vd="http://www.w3.org/1999/xlink";function Md(t,e,n,r,s,i=XT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Vd,e.slice(6,e.length)):t.setAttributeNS(Vd,e,n):n==null||i&&!vg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dr(n)?String(n):n)}function Ld(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?I_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=vg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qw(t,e,n,r){t.addEventListener(e,n,r)}function Jw(t,e,n,r){t.removeEventListener(e,n,r)}const xd=Symbol("_vei");function Yw(t,e,n,r,s=null){const i=t[xd]||(t[xd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Xw(e);if(r){const u=i[e]=t0(r,s);Qw(t,c,u,l)}else o&&(Jw(t,c,o,l),i[e]=void 0)}}const Fd=/(?:Once|Passive|Capture)$/;function Xw(t){let e;if(Fd.test(t)){e={};let r;for(;r=t.match(Fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let pl=0;const Zw=Promise.resolve(),e0=()=>pl||(Zw.then(()=>pl=0),pl=Date.now());function t0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Rn(n0(r,n.value),e,5,[r])};return n.value=t,n.attached=e0(),n}function n0(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,r0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Hw(t,r,o):e==="style"?Kw(t,n,r):sc(e)?Uu(e)||Yw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):s0(t,e,r,o))?(Ld(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Md(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?Ld(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Md(t,e,r,o))};function s0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ud(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ud(e)&&Je(n)?!1:e in t}const i0=["ctrl","shift","alt","meta"],o0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>i0.some(n=>t[`${n}Key`]&&!e.includes(n))},Ii=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=o0[e[o]];if(c&&c(s,e))return}return t(s,...i)})},a0=Tt({patchProp:r0},Bw);let $d;function c0(){return $d||($d=hw(a0))}const l0=(...t)=>{const e=c0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=h0(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,u0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function u0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function h0(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let b_;const gc=t=>b_=t,A_=Symbol();function eu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function f0(){const t=wg(!0),e=t.run(()=>Rt({}));let n=[],r=[];const s=Ju({install(i){gc(s),s._a=i,i.provide(A_,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const R_=()=>{};function jd(t,e,n,r=R_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&bg()&&ZT(s),s}function ms(t,...e){t.slice().forEach(n=>{n(...e)})}const d0=t=>t(),Bd=Symbol(),ml=Symbol();function tu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];eu(s)&&eu(r)&&t.hasOwnProperty(n)&&!je(r)&&!Un(r)?t[n]=tu(s,r):t[n]=r}return t}const p0=Symbol();function m0(t){return!eu(t)||!Object.prototype.hasOwnProperty.call(t,p0)}const{assign:or}=Object;function g0(t){return!!(je(t)&&t.effect)}function _0(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=II(n.state.value[t]);return or(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Ju(at(()=>{gc(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return l=S_(t,u,e,n,r,!0),l}function S_(t,e,n={},r,s,i){let o;const c=or({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Rt({});let O;function N(y){let v;u=f=!1,typeof y=="function"?(y(r.state.value[t]),v={type:xi.patchFunction,storeId:t,events:_}):(tu(r.state.value[t],y),v={type:xi.patchObject,payload:y,storeId:t,events:_});const w=O=Symbol();Yu().then(()=>{O===w&&(u=!0)}),f=!0,ms(p,v,r.state.value[t])}const M=i?function(){const{state:v}=n,w=v?v():{};this.$patch(A=>{or(A,w)})}:R_;function L(){o.stop(),p=[],m=[],r._s.delete(t)}const D=(y,v="")=>{if(Bd in y)return y[ml]=v,y;const w=function(){gc(r);const A=Array.from(arguments),S=[],T=[];function et(he){S.push(he)}function Pt(he){T.push(he)}ms(m,{args:A,name:w[ml],store:ie,after:et,onError:Pt});let De;try{De=y.apply(this&&this.$id===t?this:ie,A)}catch(he){throw ms(T,he),he}return De instanceof Promise?De.then(he=>(ms(S,he),he)).catch(he=>(ms(T,he),Promise.reject(he))):(ms(S,De),De)};return w[Bd]=!0,w[ml]=v,w},H={_p:r,$id:t,$onAction:jd.bind(null,m),$patch:N,$reset:M,$subscribe(y,v={}){const w=jd(p,y,v.detached,()=>A()),A=o.run(()=>Mi(()=>r.state.value[t],S=>{(v.flush==="sync"?f:u)&&y({storeId:t,type:xi.direct,events:_},S)},or({},l,v)));return w},$dispose:L},ie=fo(H);r._s.set(t,ie);const b=(r._a&&r._a.runWithContext||d0)(()=>r._e.run(()=>(o=wg()).run(()=>e({action:D}))));for(const y in b){const v=b[y];if(je(v)&&!g0(v)||Un(v))i||(R&&m0(v)&&(je(v)?v.value=R[y]:tu(v,R[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const w=D(v,y);b[y]=w,c.actions[y]=v}}return or(ie,b),or(be(ie),b),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:y=>{N(v=>{or(v,y)})}}),r._p.forEach(y=>{or(ie,o.run(()=>y({store:ie,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(ie.$state,R),u=!0,f=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function P_(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=sw();return o=o||(l?cn(A_,null):null),o&&gc(o),o=b_,o._s.has(t)||(s?S_(t,e,r,o):_0(t,r,o)),o._s.get(t)}return i.$id=t,i}function rh(t){const e=be(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=at({get:()=>t[r],set(i){t[r]=i}}):(je(s)||Un(s))&&(n[r]=AI(t,r))}return n}const y0="/images/icons/android-chrome-192x192.png";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof document<"u";function C_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function v0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&C_(t.default)}const Se=Object.assign;function gl(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Fi=()=>{},un=Array.isArray,k_=/#/g,E0=/&/g,T0=/\//g,I0=/=/g,w0=/\?/g,N_=/\+/g,b0=/%5B/g,A0=/%5D/g,D_=/%5E/g,R0=/%60/g,O_=/%7B/g,S0=/%7C/g,V_=/%7D/g,P0=/%20/g;function sh(t){return encodeURI(""+t).replace(S0,"|").replace(b0,"[").replace(A0,"]")}function C0(t){return sh(t).replace(O_,"{").replace(V_,"}").replace(D_,"^")}function nu(t){return sh(t).replace(N_,"%2B").replace(P0,"+").replace(k_,"%23").replace(E0,"%26").replace(R0,"`").replace(O_,"{").replace(V_,"}").replace(D_,"^")}function k0(t){return nu(t).replace(I0,"%3D")}function N0(t){return sh(t).replace(k_,"%23").replace(w0,"%3F")}function D0(t){return t==null?"":N0(t).replace(T0,"%2F")}function to(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const O0=/\/$/,V0=t=>t.replace(O0,"");function _l(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=F0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:to(o)}}function M0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function L0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Us(e.matched[r],n.matched[s])&&M_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function M_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!x0(t[n],e[n]))return!1;return!0}function x0(t,e){return un(t)?Hd(t,e):un(e)?Hd(e,t):t===e}function Hd(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function F0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var no;(function(t){t.pop="pop",t.push="push"})(no||(no={}));var Ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ui||(Ui={}));function U0(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),V0(t)}const $0=/^[^#]+#/;function j0(t,e){return t.replace($0,"#")+e}function B0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _c=()=>({left:window.scrollX,top:window.scrollY});function q0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=B0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zd(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function H0(t,e){ru.set(t,e)}function z0(t){const e=ru.get(t);return ru.delete(t),e}let W0=()=>location.protocol+"//"+location.host;function L_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),qd(l,"")}return qd(n,t)+r+s}function K0(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=L_(t,location),R=n.value,O=e.value;let N=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}N=O?m.position-O.position:0}else r(_);s.forEach(M=>{M(n.value,R,{delta:N,type:no.pop,direction:N?N>0?Ui.forward:Ui.back:Ui.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Se({},m.state,{scroll:_c()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Wd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_c():null}}function G0(t){const{history:e,location:n}=window,r={value:L_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:W0()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Se({},e.state,Wd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Se({},s.value,e.state,{forward:l,scroll:_c()});i(f.current,f,!0);const p=Se({},Wd(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Q0(t){t=U0(t);const e=G0(t),n=K0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:j0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function J0(t){return typeof t=="string"||t&&typeof t=="object"}function x_(t){return typeof t=="string"||typeof t=="symbol"}const F_=Symbol("");var Kd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kd||(Kd={}));function $s(t,e){return Se(new Error,{type:t,[F_]:!0},e)}function On(t,e){return t instanceof Error&&F_ in t&&(e==null||!!(t.type&e))}const Gd="[^/]+?",Y0={sensitive:!1,strict:!1,start:!0,end:!0},X0=/[.+*?^${}()[\]/\\]/g;function Z0(t,e){const n=Se({},Y0,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(X0,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:O,optional:N,regexp:M}=m;i.push({name:R,repeatable:O,optional:N});const L=M||Gd;if(L!==Gd){_+=10;try{new RegExp(`(${L})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${R}" (${L}): `+H.message)}}let D=O?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(D=N&&u.length<2?`(?:/${D})`:"/"+D),N&&(D+="?"),s+=D,_+=20,N&&(_+=-8),O&&(_+=-20),L===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",R=i[m-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:O,optional:N}=_,M=R in u?u[R]:"";if(un(M)&&!O)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const L=un(M)?M.join("/"):M;if(!L)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=L}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function eb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function U_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qd(r))return 1;if(Qd(s))return-1}return s.length-r.length}function Qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tb={type:0,value:""},nb=/[a-zA-Z0-9_]/;function rb(t){if(!t)return[[]];if(t==="/")return[[tb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:nb.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function sb(t,e,n){const r=Z0(rb(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ib(t,e){const n=[],r=new Map;e=Zd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const R=!_,O=Yd(p);O.aliasOf=_&&_.record;const N=Zd(e,p),M=[O];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of H)M.push(Yd(Se({},O,{components:_?_.record.components:O.components,path:ie,aliasOf:_?_.record:O})))}let L,D;for(const H of M){const{path:ie}=H;if(m&&ie[0]!=="/"){const _e=m.record.path,b=_e[_e.length-1]==="/"?"":"/";H.path=m.record.path+(ie&&b+ie)}if(L=sb(H,m,N),_?_.alias.push(L):(D=D||L,D!==L&&D.alias.push(L),R&&p.name&&!Xd(L)&&o(p.name)),$_(L)&&l(L),O.children){const _e=O.children;for(let b=0;b<_e.length;b++)i(_e[b],L,_&&_.children[b])}_=_||L}return D?()=>{o(D)}:Fi}function o(p){if(x_(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=cb(p,n);n.splice(m,0,p),p.record.name&&!Xd(p)&&r.set(p.record.name,p)}function u(p,m){let _,R={},O,N;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw $s(1,{location:p});N=_.record.name,R=Se(Jd(m.params,_.keys.filter(D=>!D.optional).concat(_.parent?_.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),p.params&&Jd(p.params,_.keys.map(D=>D.name))),O=_.stringify(R)}else if(p.path!=null)O=p.path,_=n.find(D=>D.re.test(O)),_&&(R=_.parse(O),N=_.record.name);else{if(_=m.name?r.get(m.name):n.find(D=>D.re.test(m.path)),!_)throw $s(1,{location:p,currentLocation:m});N=_.record.name,R=Se({},m.params,p.params),O=_.stringify(R)}const M=[];let L=_;for(;L;)M.unshift(L.record),L=L.parent;return{name:N,path:O,params:R,matched:M,meta:ab(M)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Jd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ob(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ob(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ab(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Zd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;U_(t,e[i])<0?r=i:n=i+1}const s=lb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function lb(t){let e=t;for(;e=e.parent;)if($_(e)&&U_(t,e)===0)return e}function $_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ub(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(N_," "),o=i.indexOf("="),c=to(o<0?i:i.slice(0,o)),l=o<0?null:to(i.slice(o+1));if(c in e){let u=e[c];un(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function ep(t){let e="";for(let n in t){const r=t[n];if(n=k0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fb=Symbol(""),tp=Symbol(""),ih=Symbol(""),oh=Symbol(""),su=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function lr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l($s(4,{from:n,to:e})):m instanceof Error?l(m):J0(m)?l($s(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function yl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(C_(l)){const f=(l.__vccOpts||l)[e];f&&i.push(lr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=v0(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&lr(_,n,r,o,c,s)()}))}}return i}function np(t){const e=cn(ih),n=cn(oh),r=at(()=>{const l=ne(t.to);return e.resolve(l)}),s=at(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Us.bind(null,f));if(m>-1)return m;const _=rp(l[u-2]);return u>1&&rp(f)===_&&p[p.length-1].path!==_?p.findIndex(Us.bind(null,l[u-2])):m}),i=at(()=>s.value>-1&&gb(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&M_(n.params,r.value.params));function c(l={}){if(mb(l)){const u=e[ne(t.replace)?"replace":"push"](ne(t.to)).catch(Fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function db(t){return t.length===1?t[0]:t}const pb=mo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:np,setup(t,{slots:e}){const n=fo(np(t)),{options:r}=cn(ih),s=at(()=>({[sp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&db(e.default(n));return t.custom?i:T_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vs=pb;function mb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function rp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sp=(t,e,n)=>t??e??n,_b=mo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(su),s=at(()=>t.route||r.value),i=cn(tp,0),o=at(()=>{let u=ne(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=at(()=>s.value.matched[o.value]);aa(tp,at(()=>o.value+1)),aa(fb,c),aa(su,s);const l=Rt();return Mi(()=>[l.value,c.value,t.name],([u,f,p],[m,_,R])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Us(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return ip(n.default,{Component:m,route:u});const _=p.props[f],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=T_(m,Se({},R,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return ip(n.default,{Component:N,route:u})||N}}});function ip(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const j_=_b;function yb(t){const e=ib(t.routes,t),n=t.parseQuery||ub,r=t.stringifyQuery||ep,s=t.history,i=vi(),o=vi(),c=vi(),l=vI(sr);let u=sr;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=gl.bind(null,F=>""+F),p=gl.bind(null,D0),m=gl.bind(null,to);function _(F,X){let J,ee;return x_(F)?(J=e.getRecordMatcher(F),ee=X):ee=F,e.addRoute(ee,J)}function R(F){const X=e.getRecordMatcher(F);X&&e.removeRoute(X)}function O(){return e.getRoutes().map(F=>F.record)}function N(F){return!!e.getRecordMatcher(F)}function M(F,X){if(X=Se({},X||l.value),typeof F=="string"){const P=_l(n,F,X.path),U=e.resolve({path:P.path},X),B=s.createHref(P.fullPath);return Se(P,U,{params:m(U.params),hash:to(P.hash),redirectedFrom:void 0,href:B})}let J;if(F.path!=null)J=Se({},F,{path:_l(n,F.path,X.path).path});else{const P=Se({},F.params);for(const U in P)P[U]==null&&delete P[U];J=Se({},F,{params:p(P)}),X.params=p(X.params)}const ee=e.resolve(J,X),Ae=F.hash||"";ee.params=f(m(ee.params));const E=M0(r,Se({},F,{hash:C0(Ae),path:ee.path})),I=s.createHref(E);return Se({fullPath:E,hash:Ae,query:r===ep?hb(F.query):F.query||{}},ee,{redirectedFrom:void 0,href:I})}function L(F){return typeof F=="string"?_l(n,F,l.value.path):Se({},F)}function D(F,X){if(u!==F)return $s(8,{from:X,to:F})}function H(F){return b(F)}function ie(F){return H(Se(L(F),{replace:!0}))}function _e(F){const X=F.matched[F.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let ee=typeof J=="function"?J(F):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=L(ee):{path:ee},ee.params={}),Se({query:F.query,hash:F.hash,params:ee.path!=null?{}:F.params},ee)}}function b(F,X){const J=u=M(F),ee=l.value,Ae=F.state,E=F.force,I=F.replace===!0,P=_e(J);if(P)return b(Se(L(P),{state:typeof P=="object"?Se({},Ae,P.state):Ae,force:E,replace:I}),X||J);const U=J;U.redirectedFrom=X;let B;return!E&&L0(r,ee,J)&&(B=$s(16,{to:U,from:ee}),qt(ee,ee,!0,!1)),(B?Promise.resolve(B):w(U,ee)).catch($=>On($)?On($,2)?$:Zt($):ve($,U,ee)).then($=>{if($){if(On($,2))return b(Se({replace:I},L($.to),{state:typeof $.to=="object"?Se({},Ae,$.to.state):Ae,force:E}),X||U)}else $=S(U,ee,!0,I,Ae);return A(U,ee,$),$})}function y(F,X){const J=D(F,X);return J?Promise.reject(J):Promise.resolve()}function v(F){const X=Zn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(F):F()}function w(F,X){let J;const[ee,Ae,E]=vb(F,X);J=yl(ee.reverse(),"beforeRouteLeave",F,X);for(const P of ee)P.leaveGuards.forEach(U=>{J.push(lr(U,F,X))});const I=y.bind(null,F,X);return J.push(I),Ct(J).then(()=>{J=[];for(const P of i.list())J.push(lr(P,F,X));return J.push(I),Ct(J)}).then(()=>{J=yl(Ae,"beforeRouteUpdate",F,X);for(const P of Ae)P.updateGuards.forEach(U=>{J.push(lr(U,F,X))});return J.push(I),Ct(J)}).then(()=>{J=[];for(const P of E)if(P.beforeEnter)if(un(P.beforeEnter))for(const U of P.beforeEnter)J.push(lr(U,F,X));else J.push(lr(P.beforeEnter,F,X));return J.push(I),Ct(J)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),J=yl(E,"beforeRouteEnter",F,X,v),J.push(I),Ct(J))).then(()=>{J=[];for(const P of o.list())J.push(lr(P,F,X));return J.push(I),Ct(J)}).catch(P=>On(P,8)?P:Promise.reject(P))}function A(F,X,J){c.list().forEach(ee=>v(()=>ee(F,X,J)))}function S(F,X,J,ee,Ae){const E=D(F,X);if(E)return E;const I=X===sr,P=ys?history.state:{};J&&(ee||I?s.replace(F.fullPath,Se({scroll:I&&P&&P.scroll},Ae)):s.push(F.fullPath,Ae)),l.value=F,qt(F,X,J,I),Zt()}let T;function et(){T||(T=s.listen((F,X,J)=>{if(!dn.listening)return;const ee=M(F),Ae=_e(ee);if(Ae){b(Se(Ae,{replace:!0,force:!0}),ee).catch(Fi);return}u=ee;const E=l.value;ys&&H0(zd(E.fullPath,J.delta),_c()),w(ee,E).catch(I=>On(I,12)?I:On(I,2)?(b(Se(L(I.to),{force:!0}),ee).then(P=>{On(P,20)&&!J.delta&&J.type===no.pop&&s.go(-1,!1)}).catch(Fi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ve(I,ee,E))).then(I=>{I=I||S(ee,E,!1),I&&(J.delta&&!On(I,8)?s.go(-J.delta,!1):J.type===no.pop&&On(I,20)&&s.go(-1,!1)),A(ee,E,I)}).catch(Fi)}))}let Pt=vi(),De=vi(),he;function ve(F,X,J){Zt(F);const ee=De.list();return ee.length?ee.forEach(Ae=>Ae(F,X,J)):console.error(F),Promise.reject(F)}function Ot(){return he&&l.value!==sr?Promise.resolve():new Promise((F,X)=>{Pt.add([F,X])})}function Zt(F){return he||(he=!F,et(),Pt.list().forEach(([X,J])=>F?J(F):X()),Pt.reset()),F}function qt(F,X,J,ee){const{scrollBehavior:Ae}=t;if(!ys||!Ae)return Promise.resolve();const E=!J&&z0(zd(F.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return Yu().then(()=>Ae(F,X,E)).then(I=>I&&q0(I)).catch(I=>ve(I,F,X))}const Ue=F=>s.go(F);let $e;const Zn=new Set,dn={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:O,resolve:M,options:t,push:H,replace:ie,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:De.add,isReady:Ot,install(F){const X=this;F.component("RouterLink",vs),F.component("RouterView",j_),F.config.globalProperties.$router=X,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(l)}),ys&&!$e&&l.value===sr&&($e=!0,H(s.location).catch(Ae=>{}));const J={};for(const Ae in sr)Object.defineProperty(J,Ae,{get:()=>l.value[Ae],enumerable:!0});F.provide(ih,X),F.provide(oh,Ug(J)),F.provide(su,l);const ee=F.unmount;Zn.add(F),F.unmount=function(){Zn.delete(F),Zn.size<1&&(u=sr,T&&T(),T=null,l.value=sr,$e=!1,he=!1),ee()}}};function Ct(F){return F.reduce((X,J)=>X.then(()=>v(J)),Promise.resolve())}return dn}function vb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Us(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Us(u,l))||s.push(l))}return[n,r,s]}function Eb(t){return cn(oh)}const ah=P_("locale",()=>{const t=Rt("en"),e={en:{home:"Home",about:"About",discord:"Discord",github:"GitHub",hero:{title:"NgodingSkuyy",subtitle:"Build the Future with Code",description:"Join our community of passionate developers. Learn, share, and grow together in the world of programming.",ctaJoin:"Join Community",ctaExplore:"Explore Projects"},features:{title:"Why Choose NgodingSkuyy?",collaboration:{title:"Collaboration",description:"Work together on exciting projects and learn from experienced developers."},learning:{title:"Learning",description:"Access to tutorials, workshops, and mentorship programs."},community:{title:"Community",description:"Be part of a supportive community that helps you grow."},opensource:{title:"Open Source",description:"Contribute to open source projects and make a difference."}},projects:{title:"Featured Projects",viewAll:"View All Projects",viewProject:"View Project"},cta:{title:"Ready to Start Your Journey?",description:"Join thousands of developers who are already part of our amazing community.",button:"Join Discord Community"},aboutHero:{title:"About NgodingSkuyy",subtitle:"Empowering Developers Worldwide",description:"We are a passionate community of developers dedicated to learning, sharing knowledge, and building amazing projects together."},mission:{title:"Our Mission",vision:{title:"Vision",description:"To be the leading community platform for developers in Indonesia and beyond."},values:{title:"Values",description:"We believe in collaboration, continuous learning, and making technology accessible to everyone."},impact:{title:"Impact",description:"Helping thousands of developers advance their careers and contribute to meaningful projects."}},stats:{members:"Active Members",projects:"Open Source Projects",events:"Events Hosted",countries:"Countries Reached"},team:{title:"Meet Our Team",founder:"Founder & Lead Developer",developer:"Full Stack Developer",designer:"UI/UX Designer"},values:{title:"Our Values",innovation:{title:"Innovation",description:"We embrace new technologies and encourage creative solutions to complex problems."},inclusivity:{title:"Inclusivity",description:"We welcome developers of all backgrounds and experience levels to join our community."},excellence:{title:"Excellence",description:"We strive for quality in everything we do, from code to community interactions."}},contact:{title:"Get in Touch",description:"Ready to join our community? Connect with us and start your journey today!",button:"Join Our Discord"},footer:{brandDescription:"A passionate community of developers building the future with code.",quickLinks:{title:"Quick Links",home:"Home",about:"About",discord:"Discord",projects:"Projects",contact:"Contact"},community:{title:"Community",github:"GitHub Organization",contact:"Get in Touch",contribute:"Contribute"},resources:{title:"Resources",projects:"Open Source Projects",documentation:"Documentation",bestPractices:"Best Practices"},bottom:{madeWith:"Made with ❤️ by the community.",builtWith:"Built with Vue.js & TypeScript"}}},id:{home:"Beranda",about:"Tentang",discord:"Discord",github:"GitHub",hero:{title:"NgodingSkuyy",subtitle:"Bangun Masa Depan dengan Kode",description:"Bergabunglah dengan komunitas developer yang penuh semangat. Belajar, berbagi, dan berkembang bersama di dunia pemrograman.",ctaJoin:"Gabung Komunitas",ctaExplore:"Jelajahi Proyek"},features:{title:"Mengapa Memilih NgodingSkuyy?",collaboration:{title:"Kolaborasi",description:"Bekerja sama dalam proyek-proyek menarik dan belajar dari developer berpengalaman."},learning:{title:"Pembelajaran",description:"Akses ke tutorial, workshop, dan program mentoring."},community:{title:"Komunitas",description:"Menjadi bagian dari komunitas yang mendukung pertumbuhan Anda."},opensource:{title:"Open Source",description:"Berkontribusi pada proyek open source dan membuat perbedaan."}},projects:{title:"Proyek Unggulan",viewAll:"Lihat Semua Proyek",viewProject:"Lihat Proyek"},cta:{title:"Siap Memulai Perjalanan Anda?",description:"Bergabunglah dengan ribuan developer yang sudah menjadi bagian dari komunitas luar biasa kami.",button:"Gabung Komunitas Discord"},aboutHero:{title:"Tentang NgodingSkuyy",subtitle:"Memberdayakan Developer di Seluruh Dunia",description:"Kami adalah komunitas developer yang penuh semangat, berdedikasi untuk belajar, berbagi pengetahuan, dan membangun proyek-proyek menakjubkan bersama."},mission:{title:"Misi Kami",vision:{title:"Visi",description:"Menjadi platform komunitas developer terdepan di Indonesia dan sekitarnya."},values:{title:"Nilai",description:"Kami percaya pada kolaborasi, pembelajaran berkelanjutan, dan membuat teknologi dapat diakses oleh semua orang."},impact:{title:"Dampak",description:"Membantu ribuan developer memajukan karir mereka dan berkontribusi pada proyek-proyek bermakna."}},stats:{members:"Anggota Aktif",projects:"Proyek Open Source",events:"Event yang Diselenggarakan",countries:"Negara yang Dijangkau"},team:{title:"Kenali Tim Kami",founder:"Pendiri & Lead Developer",developer:"Full Stack Developer",designer:"UI/UX Designer"},values:{title:"Nilai-Nilai Kami",innovation:{title:"Inovasi",description:"Kami merangkul teknologi baru dan mendorong solusi kreatif untuk masalah kompleks."},inclusivity:{title:"Inklusivitas",description:"Kami menyambut developer dari berbagai latar belakang dan tingkat pengalaman untuk bergabung dengan komunitas kami."},excellence:{title:"Keunggulan",description:"Kami berusaha untuk kualitas dalam segala hal yang kami lakukan, dari kode hingga interaksi komunitas."}},contact:{title:"Hubungi Kami",description:"Siap bergabung dengan komunitas kami? Terhubung dengan kami dan mulai perjalanan Anda hari ini!",button:"Gabung Discord Kami"},footer:{brandDescription:"Komunitas developer yang penuh semangat membangun masa depan dengan kode.",quickLinks:{title:"Tautan Cepat",home:"Beranda",about:"Tentang",discord:"Discord",projects:"Proyek",contact:"Kontak"},community:{title:"Komunitas",github:"Organisasi GitHub",contact:"Hubungi Kami",contribute:"Berkontribusi"},resources:{title:"Sumber Daya",projects:"Proyek Open Source",documentation:"Dokumentasi",bestPractices:"Praktik Terbaik"},bottom:{madeWith:"Dibuat dengan ❤️ oleh komunitas.",builtWith:"Dibangun dengan Vue.js & TypeScript"}}}},n=at(()=>e[t.value]);return{currentLocale:t,t:n,setLocale:i=>{console.log("setLocale called with:",i,"current:",t.value),t.value=i,localStorage.setItem("locale",i),console.log("locale updated to:",t.value)},initLocale:()=>{const i=localStorage.getItem("locale");i&&(i==="en"||i==="id")?t.value=i:navigator.language.toLowerCase().startsWith("id")?t.value="id":t.value="en"}}}),Tb=()=>{};var op={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ib=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ib(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new wb;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bb=function(t){const e=B_(t);return q_.encodeByteArray(e,!0)},Oa=function(t){return bb(t).replace(/\./g,"")},H_=function(t){try{return q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=()=>Ab().__FIREBASE_DEFAULTS__,Sb=()=>{if(typeof process>"u"||typeof op>"u")return;const t=op.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&H_(t[1]);return e&&JSON.parse(e)},yc=()=>{try{return Tb()||Rb()||Sb()||Pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z_=t=>yc()?.emulatorHosts?.[t],W_=t=>{const e=z_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K_=()=>yc()?.config,G_=t=>yc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ch(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Oa(JSON.stringify(n)),Oa(JSON.stringify(o)),""].join(".")}const $i={};function kb(){const t={prod:[],emulator:[]};for(const e of Object.keys($i))$i[e]?t.emulator.push(e):t.prod.push(e);return t}function Nb(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ap=!1;function lh(t,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||$i[t]===e||$i[t]||ap)return;$i[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=kb().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ap=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Nb(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),O=n("learnmore"),N=document.getElementById(O)||document.createElement("a"),M=n("preprendIcon"),L=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const D=m.element;c(D),f(N,O);const H=u();l(L,M),D.append(L,R,N,H),document.body.appendChild(D)}i?(R.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Db(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Ob(){const t=yc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function J_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lb(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xb(){return!Ob()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uh(){try{return typeof indexedDB=="object"}catch{return!1}}function hh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Y_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fb,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ub(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Xt(s,c,r)}}function Ub(t,e){return t.replace($b,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $b=/\{\$([^}]+)}/g;function jb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cp(i)&&cp(o)){if(!wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Bb(t,e){const n=new qb(t,e);return n.subscribe.bind(n)}class qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vl),s.error===void 0&&(s.error=vl),s.complete===void 0&&(s.complete=vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=1e3,Wb=2,Kb=14400*1e3,Gb=.5;function lp(t,e=zb,n=Wb){const r=e*Math.pow(n,t),s=Math.round(Gb*r*(Math.random()-.5)*2);return Math.min(Kb,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Qb={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Jb=ye.INFO,Yb={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Xb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yo{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=Xb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}var iu,up,vc=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},X_=function(t){if(document.readyState==="loading")return"loading";var e=vc();if(e){if(t<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||t<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||t<e.domComplete)return"dom-content-loaded"}return"complete"},Zb=function(t){var e=t.nodeName;return t.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},fh=function(t,e){var n="";try{for(;t&&t.nodeType!==9;){var r=t,s=r.id?"#"+r.id:Zb(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+s.length>(e||100)-1)return n||s;if(n=n?s+">"+n:s,r.id)break;t=r.parentNode}}catch{}return n},Z_=-1,eA=function(){return Z_},vo=function(t){addEventListener("pageshow",function(e){e.persisted&&(Z_=e.timeStamp,t(e))},!0)},dh=function(){var t=vc();return t&&t.activationStart||0},br=function(t,e){var n=vc(),r="navigate";return eA()>=0?r="back-forward-cache":n&&(document.prerendering||dh()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:t,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},Qs=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver(function(s){Promise.resolve().then(function(){e(s.getEntries())})});return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch{}},Ar=function(t,e,n,r){var s,i;return function(o){e.value>=0&&(o||r)&&((i=e.value-(s||0))||s===void 0)&&(s=e.value,e.delta=i,e.rating=function(c,l){return c>l[1]?"poor":c>l[0]?"needs-improvement":"good"}(e.value,n),t(e))}},ph=function(t){requestAnimationFrame(function(){return requestAnimationFrame(function(){return t()})})},Ec=function(t){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&t()})},mh=function(t){var e=!1;return function(){e||(t(),e=!0)}},bs=-1,hp=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},Va=function(t){document.visibilityState==="hidden"&&bs>-1&&(bs=t.type==="visibilitychange"?t.timeStamp:0,tA())},fp=function(){addEventListener("visibilitychange",Va,!0),addEventListener("prerenderingchange",Va,!0)},tA=function(){removeEventListener("visibilitychange",Va,!0),removeEventListener("prerenderingchange",Va,!0)},ey=function(){return bs<0&&(bs=hp(),fp(),vo(function(){setTimeout(function(){bs=hp(),fp()},0)})),{get firstHiddenTime(){return bs}}},gh=function(t){document.prerendering?addEventListener("prerenderingchange",function(){return t()},!0):t()},dp=[1800,3e3],nA=function(t,e){e=e||{},gh(function(){var n,r=ey(),s=br("FCP"),i=Qs("paint",function(o){o.forEach(function(c){c.name==="first-contentful-paint"&&(i.disconnect(),c.startTime<r.firstHiddenTime&&(s.value=Math.max(c.startTime-dh(),0),s.entries.push(c),n(!0)))})});i&&(n=Ar(t,s,dp,e.reportAllChanges),vo(function(o){s=br("FCP"),n=Ar(t,s,dp,e.reportAllChanges),ph(function(){s.value=performance.now()-o.timeStamp,n(!0)})}))})},pp=[.1,.25],rA=function(t,e){(function(n,r){r=r||{},nA(mh(function(){var s,i=br("CLS",0),o=0,c=[],l=function(f){f.forEach(function(p){if(!p.hadRecentInput){var m=c[0],_=c[c.length-1];o&&p.startTime-_.startTime<1e3&&p.startTime-m.startTime<5e3?(o+=p.value,c.push(p)):(o=p.value,c=[p])}}),o>i.value&&(i.value=o,i.entries=c,s())},u=Qs("layout-shift",l);u&&(s=Ar(n,i,pp,r.reportAllChanges),Ec(function(){l(u.takeRecords()),s(!0)}),vo(function(){o=0,i=br("CLS",0),s=Ar(n,i,pp,r.reportAllChanges),ph(function(){return s()})}),setTimeout(s,0))}))})(function(n){var r=function(s){var i,o={};if(s.entries.length){var c=s.entries.reduce(function(u,f){return u&&u.value>f.value?u:f});if(c&&c.sources&&c.sources.length){var l=(i=c.sources).find(function(u){return u.node&&u.node.nodeType===1})||i[0];l&&(o={largestShiftTarget:fh(l.node),largestShiftTime:c.startTime,largestShiftValue:c.value,largestShiftSource:l,largestShiftEntry:c,loadState:X_(c.startTime)})}}return Object.assign(s,{attribution:o})}(n);t(r)},e)},ty=0,El=1/0,Yo=0,sA=function(t){t.forEach(function(e){e.interactionId&&(El=Math.min(El,e.interactionId),Yo=Math.max(Yo,e.interactionId),ty=Yo?(Yo-El)/7+1:0)})},ny=function(){return iu?ty:performance.interactionCount||0},iA=function(){"interactionCount"in performance||iu||(iu=Qs("event",sA,{type:"event",buffered:!0,durationThreshold:0}))},tn=[],ji=new Map,ry=0,oA=function(){var t=Math.min(tn.length-1,Math.floor((ny()-ry)/50));return tn[t]},sy=[],aA=function(t){if(sy.forEach(function(s){return s(t)}),t.interactionId||t.entryType==="first-input"){var e=tn[tn.length-1],n=ji.get(t.interactionId);if(n||tn.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};ji.set(r.id,r),tn.push(r)}tn.sort(function(s,i){return i.latency-s.latency}),tn.length>10&&tn.splice(10).forEach(function(s){return ji.delete(s.id)})}}},_h=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=mh(t),document.visibilityState==="hidden"?t():(n=e(t),Ec(t)),n},mp=[200,500],cA=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},gh(function(){var n;iA();var r,s=br("INP"),i=function(c){_h(function(){c.forEach(aA);var l=oA();l&&l.latency!==s.value&&(s.value=l.latency,s.entries=l.entries,r())})},o=Qs("event",i,{durationThreshold:(n=e.durationThreshold)!==null&&n!==void 0?n:40});r=Ar(t,s,mp,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),Ec(function(){i(o.takeRecords()),r(!0)}),vo(function(){ry=ny(),tn.length=0,ji.clear(),s=br("INP"),r=Ar(t,s,mp,e.reportAllChanges)}))}))},Cs=[],hr=[],ou=0,yh=new WeakMap,ks=new Map,au=-1,lA=function(t){Cs=Cs.concat(t),iy()},iy=function(){au<0&&(au=_h(uA))},uA=function(){ks.size>10&&ks.forEach(function(o,c){ji.has(c)||ks.delete(c)});var t=tn.map(function(o){return yh.get(o.entries[0])}),e=hr.length-50;hr=hr.filter(function(o,c){return c>=e||t.includes(o)});for(var n=new Set,r=0;r<hr.length;r++){var s=hr[r];oy(s.startTime,s.processingEnd).forEach(function(o){n.add(o)})}var i=Cs.length-1-50;Cs=Cs.filter(function(o,c){return o.startTime>ou&&c>i||n.has(o)}),au=-1};sy.push(function(t){t.interactionId&&t.target&&!ks.has(t.interactionId)&&ks.set(t.interactionId,t.target)},function(t){var e,n=t.startTime+t.duration;ou=Math.max(ou,t.processingEnd);for(var r=hr.length-1;r>=0;r--){var s=hr[r];if(Math.abs(n-s.renderTime)<=8){(e=s).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},hr.push(e)),(t.interactionId||t.entryType==="first-input")&&yh.set(t,e),iy()});var oy=function(t,e){for(var n,r=[],s=0;n=Cs[s];s++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},hA=function(t,e){up||(up=Qs("long-animation-frame",lA)),cA(function(n){var r=function(s){var i=s.entries[0],o=yh.get(i),c=i.processingStart,l=o.processingEnd,u=o.entries.sort(function(N,M){return N.processingStart-M.processingStart}),f=oy(i.startTime,l),p=s.entries.find(function(N){return N.target}),m=p&&p.target||ks.get(i.interactionId),_=[i.startTime+i.duration,l].concat(f.map(function(N){return N.startTime+N.duration})),R=Math.max.apply(Math,_),O={interactionTarget:fh(m),interactionTargetElement:m,interactionType:i.name.startsWith("key")?"keyboard":"pointer",interactionTime:i.startTime,nextPaintTime:R,processedEventEntries:u,longAnimationFrameEntries:f,inputDelay:c-i.startTime,processingDuration:l-c,presentationDelay:Math.max(R-l,0),loadState:X_(i.startTime)};return Object.assign(s,{attribution:O})}(n);t(r)},e)},gp=[2500,4e3],Tl={},fA=function(t,e){(function(n,r){r=r||{},gh(function(){var s,i=ey(),o=br("LCP"),c=function(f){r.reportAllChanges||(f=f.slice(-1)),f.forEach(function(p){p.startTime<i.firstHiddenTime&&(o.value=Math.max(p.startTime-dh(),0),o.entries=[p],s())})},l=Qs("largest-contentful-paint",c);if(l){s=Ar(n,o,gp,r.reportAllChanges);var u=mh(function(){Tl[o.id]||(c(l.takeRecords()),l.disconnect(),Tl[o.id]=!0,s(!0))});["keydown","click"].forEach(function(f){addEventListener(f,function(){return _h(u)},{once:!0,capture:!0})}),Ec(u),vo(function(f){o=br("LCP"),s=Ar(n,o,gp,r.reportAllChanges),ph(function(){o.value=performance.now()-f.timeStamp,Tl[o.id]=!0,s(!0)})})}})})(function(n){var r=function(s){var i={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:s.value};if(s.entries.length){var o=vc();if(o){var c=o.activationStart||0,l=s.entries[s.entries.length-1],u=l.url&&performance.getEntriesByType("resource").filter(function(R){return R.name===l.url})[0],f=Math.max(0,o.responseStart-c),p=Math.max(f,u?(u.requestStart||u.startTime)-c:0),m=Math.max(p,u?u.responseEnd-c:0),_=Math.max(m,l.startTime-c);i={element:fh(l.element),timeToFirstByte:f,resourceLoadDelay:p-f,resourceLoadDuration:m-p,elementRenderDelay:_-m,navigationEntry:o,lcpEntry:l},l.url&&(i.url=l.url),u&&(i.lcpResourceEntry=u)}}return Object.assign(s,{attribution:i})}(n);t(r)},e)};class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pA(t){return t===zr?void 0:t}function mA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}const _A=(t,e)=>e.some(n=>t instanceof n);let _p,yp;function yA(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vA(){return yp||(yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ay=new WeakMap,cu=new WeakMap,cy=new WeakMap,Il=new WeakMap,vh=new WeakMap;function EA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ay.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function TA(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IA(t){lu=t(lu)}function wA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wl(this),e,...n);return cy.set(r,e.sort?e.sort():[e]),yr(r)}:vA().includes(t)?function(...e){return t.apply(wl(this),e),yr(ay.get(this))}:function(...e){return yr(t.apply(wl(this),e))}}function bA(t){return typeof t=="function"?wA(t):(t instanceof IDBTransaction&&TA(t),_A(t,yA())?new Proxy(t,lu):t)}function yr(t){if(t instanceof IDBRequest)return EA(t);if(Il.has(t))return Il.get(t);const e=bA(t);return e!==t&&(Il.set(t,e),vh.set(e,t)),e}const wl=t=>vh.get(t);function ly(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const AA=["get","getKey","getAll","getAllKeys","count"],RA=["put","add","delete","clear"],bl=new Map;function vp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||AA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return bl.set(e,i),i}IA(t=>({...t,get:(e,n,r)=>vp(e,n)||t.get(e,n,r),has:(e,n)=>!!vp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PA(t){return t.getComponent()?.type==="VERSION"}const uu="@firebase/app",Ep="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new yo("@firebase/app"),CA="@firebase/app-compat",kA="@firebase/analytics-compat",NA="@firebase/analytics",DA="@firebase/app-check-compat",OA="@firebase/app-check",VA="@firebase/auth",MA="@firebase/auth-compat",LA="@firebase/database",xA="@firebase/data-connect",FA="@firebase/database-compat",UA="@firebase/functions",$A="@firebase/functions-compat",jA="@firebase/installations",BA="@firebase/installations-compat",qA="@firebase/messaging",HA="@firebase/messaging-compat",zA="@firebase/performance",WA="@firebase/performance-compat",KA="@firebase/remote-config",GA="@firebase/remote-config-compat",QA="@firebase/storage",JA="@firebase/storage-compat",YA="@firebase/firestore",XA="@firebase/ai",ZA="@firebase/firestore-compat",e1="firebase",t1="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="[DEFAULT]",n1={[uu]:"fire-core",[CA]:"fire-core-compat",[NA]:"fire-analytics",[kA]:"fire-analytics-compat",[OA]:"fire-app-check",[DA]:"fire-app-check-compat",[VA]:"fire-auth",[MA]:"fire-auth-compat",[LA]:"fire-rtdb",[xA]:"fire-data-connect",[FA]:"fire-rtdb-compat",[UA]:"fire-fn",[$A]:"fire-fn-compat",[jA]:"fire-iid",[BA]:"fire-iid-compat",[qA]:"fire-fcm",[HA]:"fire-fcm-compat",[zA]:"fire-perf",[WA]:"fire-perf-compat",[KA]:"fire-rc",[GA]:"fire-rc-compat",[QA]:"fire-gcs",[JA]:"fire-gcs-compat",[YA]:"fire-fst",[ZA]:"fire-fst-compat",[XA]:"fire-vertex","fire-js":"fire-js",[e1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map,r1=new Map,fu=new Map;function Tp(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(fu.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,t);for(const n of Ma.values())Tp(n,t);for(const n of r1.values())Tp(n,t);return!0}function Yn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new Or("app","Firebase",s1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=t1;function uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=K_()),!n)throw vr.create("no-options");const i=Ma.get(s);if(i){if(wr(n,i.options)&&wr(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new gA(s);for(const l of fu.values())o.addComponent(l);const c=new i1(n,r,o);return Ma.set(s,c),c}function Eo(t=hu){const e=Ma.get(t);if(!e&&t===hu&&K_())return uy();if(!e)throw vr.create("no-app",{appName:t});return e}function Et(t,e,n){let r=n1[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(o.join(" "));return}Yt(new Bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firebase-heartbeat-database",a1=1,ro="firebase-heartbeat-store";let Al=null;function hy(){return Al||(Al=ly(o1,a1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Al}async function c1(t){try{const n=(await hy()).transaction(ro),r=await n.objectStore(ro).get(fy(t));return await n.done,r}catch(e){if(e instanceof Xt)Hn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e?.message});Hn.warn(n.message)}}}async function Ip(t,e){try{const r=(await hy()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,fy(t)),await r.done}catch(n){if(n instanceof Xt)Hn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n?.message});Hn.warn(r.message)}}}function fy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=1024,u1=30;class h1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new d1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wp();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>u1){const s=p1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Hn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wp(),{heartbeatsToSend:n,unsentEntries:r}=f1(this._heartbeatsCache.heartbeats),s=Oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Hn.warn(e),""}}}function wp(){return new Date().toISOString().substring(0,10)}function f1(t,e=l1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class d1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uh()?hh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await c1(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ip(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ip(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bp(t){return Oa(JSON.stringify({version:2,heartbeats:t})).length}function p1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){Yt(new Bt("platform-logger",e=>new SA(e),"PRIVATE")),Yt(new Bt("heartbeat",e=>new h1(e),"PRIVATE")),Et(uu,Ep,t),Et(uu,Ep,"esm2020"),Et("fire-js","")}m1("");const dy="@firebase/installations",Eh="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=1e4,my=`w:${Eh}`,gy="FIS_v2",g1="https://firebaseinstallations.googleapis.com/v1",_1=3600*1e3,y1="installations",v1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new Or(y1,v1,E1);function _y(t){return t instanceof Xt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy({projectId:t}){return`${g1}/projects/${t}/installations`}function vy(t){return{token:t.token,requestStatus:2,expiresIn:I1(t.expiresIn),creationTime:Date.now()}}async function Ey(t,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ty({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function T1(t,{refreshToken:e}){const n=Ty(t);return n.append("Authorization",w1(e)),n}async function Iy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function I1(t){return Number(t.replace("s","000"))}function w1(t){return`${gy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=yy(t),s=Ty(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:gy,appId:t.appId,sdkVersion:my},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Iy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vy(u.authToken)}}else throw await Ey("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=/^[cdef][\w-]{21}$/,du="";function S1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=P1(t);return R1.test(n)?n:du}catch{return du}}function P1(t){return A1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;function Ay(t,e){const n=Tc(t);Ry(n,e),C1(n,e)}function Ry(t,e){const n=by.get(t);if(n)for(const r of n)r(e)}function C1(t,e){const n=k1();n&&n.postMessage({key:t,fid:e}),N1()}let Wr=null;function k1(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=t=>{Ry(t.data.key,t.data.fid)}),Wr}function N1(){by.size===0&&Wr&&(Wr.close(),Wr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="firebase-installations-database",O1=1,Xr="firebase-installations-store";let Rl=null;function Th(){return Rl||(Rl=ly(D1,O1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xr)}}})),Rl}async function La(t,e){const n=Tc(t),s=(await Th()).transaction(Xr,"readwrite"),i=s.objectStore(Xr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Ay(t,e.fid),e}async function Sy(t){const e=Tc(t),r=(await Th()).transaction(Xr,"readwrite");await r.objectStore(Xr).delete(e),await r.done}async function Ic(t,e){const n=Tc(t),s=(await Th()).transaction(Xr,"readwrite"),i=s.objectStore(Xr),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Ay(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t){let e;const n=await Ic(t.appConfig,r=>{const s=V1(r),i=M1(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===du?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function V1(t){const e=t||{fid:S1(),registrationStatus:0};return Py(e)}function M1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=L1(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:x1(t)}:{installationEntry:e}}async function L1(t,e){try{const n=await b1(t,e);return La(t.appConfig,n)}catch(n){throw _y(n)&&n.customData.serverCode===409?await Sy(t.appConfig):await La(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function x1(t){let e=await Ap(t.appConfig);for(;e.registrationStatus===1;)await wy(100),e=await Ap(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ih(t);return r||n}return e}function Ap(t){return Ic(t,e=>{if(!e)throw Yr.create("installation-not-found");return Py(e)})}function Py(t){return F1(t)?{fid:t.fid,registrationStatus:0}:t}function F1(t){return t.registrationStatus===1&&t.registrationTime+py<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1({appConfig:t,heartbeatServiceProvider:e},n){const r=$1(t,n),s=T1(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:my,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Iy(()=>fetch(r,c));if(l.ok){const u=await l.json();return vy(u)}else throw await Ey("Generate Auth Token",l)}function $1(t,{fid:e}){return`${yy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(t,e=!1){let n;const r=await Ic(t.appConfig,i=>{if(!Cy(i))throw Yr.create("not-registered");const o=i.authToken;if(!e&&q1(o))return i;if(o.requestStatus===1)return n=j1(t,e),i;{if(!navigator.onLine)throw Yr.create("app-offline");const c=z1(i);return n=B1(t,c),c}});return n?await n:r.authToken}async function j1(t,e){let n=await Rp(t.appConfig);for(;n.authToken.requestStatus===1;)await wy(100),n=await Rp(t.appConfig);const r=n.authToken;return r.requestStatus===0?wh(t,e):r}function Rp(t){return Ic(t,e=>{if(!Cy(e))throw Yr.create("not-registered");const n=e.authToken;return W1(n)?{...e,authToken:{requestStatus:0}}:e})}async function B1(t,e){try{const n=await U1(t,e),r={...e,authToken:n};return await La(t.appConfig,r),n}catch(n){if(_y(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Sy(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await La(t.appConfig,r)}throw n}}function Cy(t){return t!==void 0&&t.registrationStatus===2}function q1(t){return t.requestStatus===2&&!H1(t)}function H1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+_1}function z1(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function W1(t){return t.requestStatus===1&&t.requestTime+py<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ih(e);return r?r.catch(console.error):wh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e=!1){const n=t;return await Q1(n),(await wh(n,e)).token}async function Q1(t){const{registrationPromise:e}=await Ih(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){if(!t||!t.options)throw Sl("App Configuration");if(!t.name)throw Sl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sl(t){return Yr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="installations",Y1="installations-internal",X1=t=>{const e=t.getProvider("app").getImmediate(),n=J1(e),r=Yn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Z1=t=>{const e=t.getProvider("app").getImmediate(),n=Yn(e,ky).getImmediate();return{getId:()=>K1(n),getToken:s=>G1(n,s)}};function eR(){Yt(new Bt(ky,X1,"PUBLIC")),Yt(new Bt(Y1,Z1,"PRIVATE"))}eR();Et(dy,Eh);Et(dy,Eh,"esm2020");const Sp="@firebase/performance",pu="0.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=pu,tR="FB-PERF-TRACE-START",nR="FB-PERF-TRACE-STOP",mu="FB-PERF-TRACE-MEASURE",Dy="_wt_",Oy="_fp",Vy="_fcp",My="_fid",Ly="_lcp",rR="lcp_element",xy="_inp",sR="inp_interactionTarget",Fy="_cls",iR="cls_largestShiftTarget",Uy="@firebase/performance/config",$y="@firebase/performance/configexpire",oR="performance",jy="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},gt=new Or(oR,jy,aR);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new yo(jy);zn.logLevel=ye.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl,By;class Ye{constructor(e){if(this.window=e,!e)throw gt.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=fA,this.onINP=hA,this.onCLS=rA}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,r){!this.performance||!this.performance.measure||this.performance.measure(e,n,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!Y_()?(zn.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):uh()?!0:(zn.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(s=>{for(const i of s.getEntries())n(i)}).observe({entryTypes:[e]})}static getInstance(){return Pl===void 0&&(Pl=new Ye(By)),Pl}}function cR(t){By=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy;function lR(t){const e=t.getId();return e.then(n=>{qy=n}),e}function bh(){return qy}function uR(t){const e=t.getToken();return e.then(n=>{}),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t,e){const n=t.length-e.length;if(n<0||n>1)throw gt.create("invalid String merger input");const r=[];for(let s=0;s<t.length;s++)r.push(t.charAt(s)),e.length>s&&r.push(e.charAt(s));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class St{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Pp("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Pp("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Cl===void 0&&(Cl=new St),Cl}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(Bi||(Bi={}));const hR=["firebase_","google_","ga_"],fR=new RegExp("^[a-zA-Z]\\w*$"),dR=40,pR=100;function mR(){const t=Ye.getInstance().navigator;return t?.serviceWorker?t.serviceWorker.controller?2:3:1}function gR(){switch(Ye.getInstance().document.visibilityState){case"visible":return Bi.VISIBLE;case"hidden":return Bi.HIDDEN;default:return Bi.UNKNOWN}}function _R(){const e=Ye.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function yR(t){return t.length===0||t.length>dR?!1:!hR.some(n=>t.startsWith(n))&&!!t.match(fR)}function vR(t){return t.length!==0&&t.length<=pR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){const e=t.options?.appId;if(!e)throw gt.create("no app id");return e}function ER(t){const e=t.options?.projectId;if(!e)throw gt.create("no project id");return e}function TR(t){const e=t.options?.apiKey;if(!e)throw gt.create("no api key");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="0.0.1",Mt={loggingEnabled:!0},wR="FIREBASE_INSTALLATIONS_AUTH";function bR(t,e){const n=AR();return n?(Cp(n),Promise.resolve()):PR(t,e).then(Cp).then(r=>RR(r),()=>{})}function AR(){const t=Ye.getInstance().localStorage;if(!t)return;const e=t.getItem($y);if(!e||!CR(e))return;const n=t.getItem(Uy);if(n)try{return JSON.parse(n)}catch{return}}function RR(t){const e=Ye.getInstance().localStorage;!t||!e||(e.setItem(Uy,JSON.stringify(t)),e.setItem($y,String(Date.now()+St.getInstance().configTimeToLive*60*60*1e3)))}const SR="Could not fetch config, will use default configs";function PR(t,e){return uR(t.installations).then(n=>{const r=ER(t.app),s=TR(t.app),i=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${s}`,o=new Request(i,{method:"POST",headers:{Authorization:`${wR} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:Hy(t.app),app_version:Ny,sdk_version:IR})});return fetch(o).then(c=>{if(c.ok)return c.json();throw gt.create("RC response not ok")})}).catch(()=>{zn.info(SR)})}function Cp(t){if(!t)return t;const e=St.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=Mt.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):Mt.logSource&&(e.logSource=Mt.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:Mt.logEndPointUrl&&(e.logEndPointUrl=Mt.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:Mt.transportKey&&(e.transportKey=Mt.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):Mt.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Mt.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):Mt.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Mt.tracesSamplingRate),n.fpr_log_max_flush_size?e.logMaxFlushSize=Number(n.fpr_log_max_flush_size):Mt.logMaxFlushSize&&(e.logMaxFlushSize=Mt.logMaxFlushSize),e.logTraceAfterSampling=kp(e.tracesSamplingRate),e.logNetworkAfterSampling=kp(e.networkRequestsSamplingRate),t}function CR(t){return Number(t)>Date.now()}function kp(t){return Math.random()<=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ah=1,kl;function zy(t){return Ah=2,kl=kl||NR(t),kl}function kR(){return Ah===3}function NR(t){return DR().then(()=>lR(t.installations)).then(e=>bR(t,e)).then(()=>Np(),()=>Np())}function DR(){const t=Ye.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function Np(){Ah=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=10*1e3,OR=5.5*1e3,VR=1e3,Ky=3,MR=65536,LR=new TextEncoder;let ha=Ky,Kt=[],Dp=!1;function xR(){Dp||(Rh(OR),Dp=!0)}function Rh(t){setTimeout(()=>{ha<=0||(Kt.length>0&&FR(),Rh(Wy))},t)}function FR(){const t=Kt.splice(0,VR),e=gu(t);UR(e).then(()=>{ha=Ky}).catch(()=>{Kt=[...t,...Kt],ha--,zn.info(`Tries left: ${ha}.`),Rh(Wy)})}function gu(t){const e=t.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:St.getInstance().logSource,log_event:e};return JSON.stringify(n)}function UR(t){const e=St.getInstance().getFlTransportFullUrl();return LR.encode(t).length<=MR&&navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t})}function $R(t){if(!t.eventTime||!t.message)throw gt.create("invalid cc log");Kt=[...Kt,t]}function jR(t){return(...e)=>{const n=t(...e);$R({message:n,eventTime:Date.now()})}}function BR(){const t=St.getInstance().getFlTransportFullUrl();for(;Kt.length>0;){const e=Kt.splice(-St.getInstance().logMaxFlushSize),n=gu(e);if(!(navigator.sendBeacon&&navigator.sendBeacon(t,n))){Kt=[...Kt,...e];break}}if(Kt.length>0){const e=gu(Kt);fetch(t,{method:"POST",body:e}).catch(()=>{zn.info("Failed flushing queued events.")})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;function Gy(t,e){qi||(qi={send:jR(zR),flush:BR}),qi.send(t,e)}function Xo(t){const e=St.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||Ye.getInstance().requiredApisAvailable()&&(kR()?Nl(t):zy(t.performanceController).then(()=>Nl(t),()=>Nl(t)))}function qR(){qi&&qi.flush()}function Nl(t){if(!bh())return;const e=St.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||Gy(t,1)}function HR(t){const e=St.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],s=e.flTransportEndpointUrl.split("?")[0];n===r||n===s||!e.loggingEnabled||!e.logNetworkAfterSampling||Gy(t,0)}function zR(t,e){return e===0?WR(t):KR(t)}function WR(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Qy(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function KR(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const r={application_info:Qy(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function Qy(t){return{google_app_id:Hy(t),app_instance_id:bh(),web_app_info:{sdk_version:Ny,page_url:Ye.getInstance().getUrl(),service_worker_status:mR(),visibility_state:gR(),effective_connection_type:_R()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){const n=e;if(!n||n.responseStart===void 0)return;const r=Ye.getInstance().getTimeOrigin(),s=Math.floor((n.startTime+r)*1e3),i=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,o=Math.floor((n.responseEnd-n.startTime)*1e3),c=n.name&&n.name.split("?")[0],l={performanceController:t,url:c,responsePayloadBytes:n.transferSize,startTimeUs:s,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};HR(l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=100,QR="_",JR=[Oy,Vy,My,Ly,Fy,xy];function YR(t,e){return t.length===0||t.length>GR?!1:e&&e.startsWith(Dy)&&JR.indexOf(t)>-1||!t.startsWith(QR)}function XR(t){const e=Math.floor(t);return e<t&&zn.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,r=!1,s){this.performanceController=e,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=Ye.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${tR}-${this.randomId}-${this.name}`,this.traceStopMark=`${nR}-${this.randomId}-${this.name}`,this.traceMeasure=s||`${mu}-${this.randomId}-${this.name}`,s&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw gt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw gt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Xo(this)}record(e,n,r){if(e<=0)throw gt.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw gt.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes={...r.attributes}),r&&r.metrics)for(const s of Object.keys(r.metrics))isNaN(Number(r.metrics[s]))||(this.counters[s]=Math.floor(Number(r.metrics[s])));Xo(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(YR(e,this.name))this.counters[e]=XR(n??0);else throw gt.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const r=yR(e),s=vR(n);if(r&&s){this.customAttributes[e]=n;return}if(!r)throw gt.create("invalid attribute name",{attributeName:e});if(!s)throw gt.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return{...this.customAttributes}}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,r,s,i){const o=Ye.getInstance().getUrl();if(!o)return;const c=new js(e,Dy+o,!0),l=Math.floor(Ye.getInstance().getTimeOrigin()*1e3);c.setStartTime(l),n&&n[0]&&(c.setDuration(Math.floor(n[0].duration*1e3)),c.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),c.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),c.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const u="first-paint",f="first-contentful-paint";if(r){const p=r.find(_=>_.name===u);p&&p.startTime&&c.putMetric(Oy,Math.floor(p.startTime*1e3));const m=r.find(_=>_.name===f);m&&m.startTime&&c.putMetric(Vy,Math.floor(m.startTime*1e3)),i&&c.putMetric(My,Math.floor(i*1e3))}this.addWebVitalMetric(c,Ly,rR,s.lcp),this.addWebVitalMetric(c,Fy,iR,s.cls),this.addWebVitalMetric(c,xy,sR,s.inp),Xo(c),qR()}static addWebVitalMetric(e,n,r,s){s&&(e.putMetric(n,Math.floor(s.value*1e3)),s.elementAttribution&&e.putAttribute(r,s.elementAttribution))}static createUserTimingTrace(e,n){const r=new js(e,n,!1,n);Xo(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa={},Vp=!1,Jy;function Mp(t){bh()&&(setTimeout(()=>eS(t),0),setTimeout(()=>ZR(t),0),setTimeout(()=>tS(t),0))}function ZR(t){const e=Ye.getInstance(),n=e.getEntriesByType("resource");for(const r of n)Op(t,r);e.setupObserver("resource",r=>Op(t,r))}function eS(t){const e=Ye.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>Dl(t)):e.document.addEventListener("unload",()=>Dl(t)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&Dl(t)}),e.onFirstInputDelay&&e.onFirstInputDelay(n=>{Jy=n}),e.onLCP(n=>{fa.lcp={value:n.value,elementAttribution:n.attribution?.element}}),e.onCLS(n=>{fa.cls={value:n.value,elementAttribution:n.attribution?.largestShiftTarget}}),e.onINP(n=>{fa.inp={value:n.value,elementAttribution:n.attribution?.interactionTarget}})}function tS(t){const e=Ye.getInstance(),n=e.getEntriesByType("measure");for(const r of n)Lp(t,r);e.setupObserver("measure",r=>Lp(t,r))}function Lp(t,e){const n=e.name;n.substring(0,mu.length)!==mu&&js.createUserTimingTrace(t,n)}function Dl(t){if(!Vp){Vp=!0;const e=Ye.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{js.createOobTrace(t,n,r,fa,Jy)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),Ye.getInstance().requiredApisAvailable()?hh().then(n=>{n&&(xR(),zy(this).then(()=>Mp(this),()=>Mp(this)),this.initialized=!0)}).catch(n=>{zn.info(`Environment doesn't support IndexedDB: ${n}`)}):zn.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){St.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return St.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){St.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return St.getInstance().dataCollectionEnabled}}const rS="[DEFAULT]";function sS(t=Eo()){return t=Fe(t),Yn(t,"performance").getImmediate()}function iS(t,e){return t=Fe(t),new js(t,e)}const oS=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==rS)throw gt.create("FB not default");if(typeof window>"u")throw gt.create("no window");cR(window);const s=new nS(n,r);return s._init(e),s};function aS(){Yt(new Bt("performance",oS,"PUBLIC")),Et(Sp,pu),Et(Sp,pu,"esm2020")}aS();var cS="firebase",lS="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et(cS,lS,"app");function Yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uS=Yy,Xy=new Or("auth","Firebase",Yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new yo("@firebase/auth");function hS(t,...e){xa.logLevel<=ye.WARN&&xa.warn(`Auth (${is}): ${t}`,...e)}function da(t,...e){xa.logLevel<=ye.ERROR&&xa.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Sh(t,...e)}function En(t,...e){return Sh(t,...e)}function Zy(t,e,n){const r={...uS(),[e]:n};return new Or("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return Zy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xy.create(t,...e)}function ce(t,e,...n){if(!t)throw Sh(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw da(e),new Error(e)}function Wn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){return typeof self<"u"&&self.location?.href||""}function fS(){return xp()==="http:"||xp()==="https:"}function xp(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||J_()||"connection"in navigator)?navigator.onLine:!0}function pS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Db()||Mb()}get(){return dS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_S=new To(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xn(t,e,n,r,s={}){return tv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=_o({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return Vb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ss(t.emulatorConfig.host)&&(u.credentials="include"),ev.fetch()(await nv(t,t.config.apiHost,n,c),u)})}async function tv(t,e,n){t._canInitEmulator=!1;const r={...mS,...e};try{const s=new vS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zy(t,f,u);hn(t,f)}}catch(s){if(s instanceof Xt)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function Io(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function nv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ph(t.config,s):`${t.config.apiScheme}://${s}`;return gS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function yS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),_S.get())})}}function Zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}function Fp(t){return t!==void 0&&t.enterprise!==void 0}class ES{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TS(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function Fa(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wS(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Ch(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Hi(Ol(s.auth_time)),issuedAtTime:Hi(Ol(s.iat)),expirationTime:Hi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ol(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const s=H_(n);return s?JSON.parse(s):(da("Failed to decode base64 JWT payload"),null)}catch(s){return da("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Up(t){const e=Ch(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&bS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t){const e=t.auth,n=await t.getIdToken(),r=await Bs(t,Fa(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?rv(s.providerUserInfo):[],o=SS(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function RS(t){const e=Fe(t);await Ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function rv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){const n=await tv(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await nv(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ss(t.emulatorConfig.host)&&(l.credentials="include"),ev.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CS(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new AS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wS(this,e)}reload(){return RS(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Bs(this,IS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:R,stsTokenManager:O}=n;ce(p&&O,e,"internal-error");const N=Ns.fromJSON(this.name,O);ce(typeof p=="string",e,"internal-error"),ir(r,e.name),ir(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof _=="boolean",e,"internal-error"),ir(i,e.name),ir(o,e.name),ir(c,e.name),ir(l,e.name),ir(u,e.name),ir(f,e.name);const M=new sn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:f});return R&&Array.isArray(R)&&(M.providerData=R.map(L=>({...L}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ua(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?rv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Ns;c.updateFromIdToken(r);const l=new sn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Map;function Fn(t){Wn(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sv.type="NONE";const jp=sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pa(this.userKey,s.apiKey,i),this.fullPersistenceKey=pa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fa(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Fn(jp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(jp);const o=pa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Fa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await sn._fromGetAccountInfoResponse(e,m,f)}else p=sn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ds(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uv(e))return"Blackberry";if(hv(e))return"Webos";if(ov(e))return"Safari";if((e.includes("chrome/")||av(e))&&!e.includes("edge/"))return"Chrome";if(lv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function iv(t=It()){return/firefox\//i.test(t)}function ov(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function av(t=It()){return/crios\//i.test(t)}function cv(t=It()){return/iemobile/i.test(t)}function lv(t=It()){return/android/i.test(t)}function uv(t=It()){return/blackberry/i.test(t)}function hv(t=It()){return/webos/i.test(t)}function kh(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kS(t=It()){return kh(t)&&!!window.navigator?.standalone}function NS(){return Lb()&&document.documentMode===10}function fv(t=It()){return kh(t)||lv(t)||hv(t)||uv(t)||/windows phone/i.test(t)||cv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e=[]){let n;switch(t){case"Browser":n=Bp(It());break;case"Worker":n=`${Bp(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=6;class MS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new DS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fa(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ua(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject($n(this));const n=e?Fe(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OS(this),n=new MS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CS(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&hS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function os(t){return Fe(t)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bb(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xS(t){wc=t}function pv(t){return wc.loadJS(t)}function FS(){return wc.recaptchaEnterpriseScript}function US(){return wc.gapiScript}function $S(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jS{constructor(){this.enterprise=new BS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qS="recaptcha-enterprise",mv="NO_RECAPTCHA";class HS{constructor(e){this.type=qS,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{TS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new ES(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Fp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(mv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Fp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FS();l.length!==0&&(l+=c),pv(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Hp(t,e,n,r=!1,s=!1){const i=new HS(t);let o;if(s)o=mv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function vu(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Hp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t,e){const n=Yn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wr(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function WS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Fn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function KS(t,e,n){const r=os(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gv(e),{host:o,port:c}=GS(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(wr(u,r.config.emulator)&&wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ss(o)?(ch(`${i}//${o}${l}`),lh("Auth",!0)):QS()}function gv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GS(t){const e=gv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function JS(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return Io(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function ZS(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends Nh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vu(e,n,"signInWithPassword",YS);case"emailLink":return XS(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vu(e,r,"signUpPassword",JS);case"emailLink":return ZS(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e){return Io(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="http://localhost";class Zr extends Nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(t){const e=wi(bi(t)).link,n=e?wi(bi(e)).deep_link_id:null,r=wi(bi(t)).deep_link_id;return(r?wi(bi(r)).link:null)||r||n||e||t}class Dh{constructor(e){const n=wi(bi(e)),r=n.apiKey??null,s=n.oobCode??null,i=tP(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=nP(e);try{return new Dh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dh.parseLink(n);return ce(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends _v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends wo{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends wo{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends wo{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e){return Io(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Wp(r);return new es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wp(r);return new es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Xt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $a(e,n,r,s)}}function yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,i,e,r):i})}async function sP(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject($n(r));const s="reauthenticate";try{const i=await Bs(t,yv(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Ch(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),es._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t,e,n=!1){if(xt(t.app))return Promise.reject($n(t));const r="signIn",s=await yv(t,r,e),i=await es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function oP(t,e){return vv(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aP(t,e,n){if(xt(t.app))return Promise.reject($n(t));const r=os(t),o=await vu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ev(t),l}),c=await es._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function cP(t,e,n){return xt(t.app)?Promise.reject($n(t)):oP(Fe(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ev(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Bs(r,lP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hP(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function fP(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function dP(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function pP(t){return Fe(t).signOut()}const ja="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=1e3,gP=10;class Iv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iv.type="LOCAL";const _P=Iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wv.type="SESSION";const bv=wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await yP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Oh("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function EP(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function TP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IP(){return navigator?.serviceWorker?.controller||null}function wP(){return Av()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebaseLocalStorageDb",bP=1,Ba="firebaseLocalStorage",Sv="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ac(t,e){return t.transaction([Ba],e?"readwrite":"readonly").objectStore(Ba)}function AP(){const t=indexedDB.deleteDatabase(Rv);return new bo(t).toPromise()}function Eu(){const t=indexedDB.open(Rv,bP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ba,{keyPath:Sv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ba)?e(r):(r.close(),await AP(),e(await Eu()))})})}async function Kp(t,e,n){const r=Ac(t,!0).put({[Sv]:e,value:n});return new bo(r).toPromise()}async function RP(t,e){const n=Ac(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function Gp(t,e){const n=Ac(t,!0).delete(e);return new bo(n).toPromise()}const SP=800,PP=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(wP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await TP(),!this.activeServiceWorker)return;this.sender=new vP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eu();return await Kp(e,ja,"1"),await Gp(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ac(s,!1).getAll();return new bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const CP=Pv;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e){return e?Fn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends Nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NP(t){return vv(t.auth,new Vh(t),t.bypassAuthState)}function DP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),iP(n,new Vh(t),t.bypassAuthState)}async function OP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),sP(n,new Vh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NP;case"linkViaPopup":case"linkViaRedirect":return OP;case"reauthViaPopup":case"reauthViaRedirect":return DP;default:hn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=new To(2e3,1e4);class As extends Cv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VP.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="pendingRedirect",ma=new Map;class LP extends Cv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await xP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xP(t,e){const n=$P(e),r=UP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function FP(t,e){ma.set(t._key(),e)}function UP(t){return Fn(t._redirectPersistence)}function $P(t){return pa(MP,t.config.apiKey,t.name)}async function jP(t,e,n=!1){if(xt(t.app))return Promise.reject($n(t));const r=os(t),s=kP(r,e),o=await new LP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=600*1e3;class qP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!kv(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(En(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qp(e))}saveEventToCache(e){this.cachedEventUids.add(Qp(e)),this.lastProcessedEventTime=Date.now()}}function Qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function HP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KP=/^https?/;async function GP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zP(t);for(const n of e)try{if(QP(n))return}catch{}hn(t,"unauthorized-domain")}function QP(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KP.test(n))return!1;if(WP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new To(3e4,6e4);function Jp(){const t=Tn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YP(t){return new Promise((e,n)=>{function r(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(En(t,"network-request-failed"))},timeout:JP.get()})}if(Tn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Tn().gapi?.load)r();else{const s=$S("iframefcb");return Tn()[s]=()=>{gapi.load?r():n(En(t,"network-request-failed"))},pv(`${US()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ga=null,e})}let ga=null;function XP(t){return ga=ga||YP(t),ga}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=new To(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:is},s=rC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_o(r).slice(1)}`}async function iC(t){const e=await XP(t),n=Tn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:sC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),c=Tn().setTimeout(()=>{i(o)},ZP.get());function l(){Tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,cC=600,lC="_blank",uC="http://localhost";class Yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hC(t,e,n,r=aC,s=cC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...oC,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=av(u)?lC:n),iv(u)&&(e=e||uC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(kS(u)&&c!=="_self")return fC(e||"",c),new Yp(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Yp(p)}function fC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="__/auth/handler",pC="emulator/auth/handler",mC=encodeURIComponent("fac");async function Xp(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:s};if(e instanceof _v){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof wo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${mC}=${encodeURIComponent(l)}`:"";return`${gC(t)}?${_o(c).slice(1)}${u}`}function gC({config:t}){return t.emulator?Ph(t,pC):`https://${t.authDomain}/${dC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bv,this._completeRedirectFn=jP,this._overrideRedirectResult=FP}async _openPopup(e,n,r,s){Wn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Xp(e,n,r,_u(),s);return hC(e,i,Oh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xp(e,n,r,_u(),s);return EP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iC(e),r=new qP(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vl,{type:Vl},s=>{const i=s?.[0]?.[Vl];i!==void 0&&n(!!i),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fv()||ov()||kh()}}const yC=_C;var Zp="@firebase/auth",em="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TC(t){Yt(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dv(t)},u=new LS(r,s,i,l);return WS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yt(new Bt("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new vC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Et(Zp,em,EC(t)),Et(Zp,em,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=300,wC=G_("authIdTokenMaxAge")||IC;let tm=null;const bC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wC)return;const s=n?.token;tm!==s&&(tm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function AC(t=Eo()){const e=Yn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zS(t,{popupRedirectResolver:yC,persistence:[CP,_P,bv]}),r=G_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bC(i.toString());fP(n,o,()=>o(n.currentUser)),hP(n,c=>o(c))}}const s=z_("auth");return s&&KS(n,`http://${s}`),n}function RC(){return document.getElementsByTagName("head")?.[0]??document}xS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",RC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TC("Browser");var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,Nv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(w,A,S){for(var T=Array(arguments.length-2),et=2;et<arguments.length;et++)T[et-2]=arguments[et];return y.prototype[A].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)w[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)w[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],A=b.g[2];var S=b.g[3],T=y+(S^v&(A^S))+w[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+w[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+w[2]+606105819&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+w[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(S^v&(A^S))+w[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+w[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+w[6]+2821735955&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+w[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(S^v&(A^S))+w[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+w[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+w[10]+4294925233&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+w[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(S^v&(A^S))+w[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(A^y&(v^A))+w[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=A+(v^S&(y^v))+w[14]+2792965006&4294967295,A=S+(T<<17&4294967295|T>>>15),T=v+(y^A&(S^y))+w[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(A^S&(v^A))+w[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+w[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+w[11]+643717713&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+w[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(v^A))+w[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+w[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+w[15]+3634488961&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+w[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(v^A))+w[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+w[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+w[3]+4107603335&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+w[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^S&(v^A))+w[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^A&(y^v))+w[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(S^y))+w[7]+1735328473&4294967295,A=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(A^S))+w[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(v^A^S)+w[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+w[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+w[11]+1839030562&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+w[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^S)+w[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+w[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+w[7]+4139469664&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+w[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^S)+w[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+w[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+w[3]+3572445317&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+w[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^S)+w[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^A)+w[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=A+(S^y^v)+w[15]+530742520&4294967295,A=S+(T<<16&4294967295|T>>>16),T=v+(A^S^y)+w[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(A^(v|~S))+w[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+w[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+w[14]+2878612391&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+w[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~S))+w[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+w[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+w[10]+4293915773&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+w[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~S))+w[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+w[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+w[6]+2734768916&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+w[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~S))+w[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~A))+w[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=A+(y^(S|~v))+w[2]+718787259&4294967295,A=S+(T<<15&4294967295|T>>>17),T=v+(S^(A|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,w=this.B,A=this.h,S=0;S<y;){if(A==0)for(;S<=v;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(w[A++]=b.charCodeAt(S++),A==this.blockSize){s(this,w),A=0;break}}else for(;S<y;)if(w[A++]=b[S++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)b[v++]=this.g[y]>>>w&255;return b};function i(b,y){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],w=!0,A=b.length-1;0<=A;A--){var S=b[A]|0;w&&S==y||(v[A]=S,w=!1)}this.g=v}var c={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return N(u(-b));for(var y=[],v=1,w=0;b>=v;w++)y[w]=b/v|0,v*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),w=p,A=0;A<b.length;A+=8){var S=Math.min(8,b.length-A),T=parseInt(b.substring(A,A+S),y);8>S?(S=u(Math.pow(y,S)),w=w.j(S).add(u(T))):(w=w.j(v),w=w.add(u(T)))}return w}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(O(this))return"-"+N(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,w="";;){var A=H(v,y).g;v=M(v,A.j(y));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,R(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=M(this,b),O(b)?-1:R(b)?0:1};function N(b){for(var y=b.g.length,v=[],w=0;w<y;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}t.abs=function(){return O(this)?N(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0,A=0;A<=y;A++){var S=w+(this.i(A)&65535)+(b.i(A)&65535),T=(S>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);w=T>>>16,S&=65535,T&=65535,v[A]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(b,y){return b.add(N(y))}t.j=function(b){if(R(this)||R(b))return p;if(O(this))return O(b)?N(this).j(N(b)):N(N(this).j(b));if(O(b))return N(this.j(N(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<b.g.length;A++){var S=this.i(w)>>>16,T=this.i(w)&65535,et=b.i(A)>>>16,Pt=b.i(A)&65535;v[2*w+2*A]+=T*Pt,L(v,2*w+2*A),v[2*w+2*A+1]+=S*Pt,L(v,2*w+2*A+1),v[2*w+2*A+1]+=T*et,L(v,2*w+2*A+1),v[2*w+2*A+2]+=S*et,L(v,2*w+2*A+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function L(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function D(b,y){this.g=b,this.h=y}function H(b,y){if(R(y))throw Error("division by zero");if(R(b))return new D(p,p);if(O(b))return y=H(N(b),y),new D(N(y.g),N(y.h));if(O(y))return y=H(b,N(y)),new D(N(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=y;0>=w.l(b);)v=ie(v),w=ie(w);var A=_e(v,1),S=_e(w,1);for(w=_e(w,2),v=_e(v,2);!R(w);){var T=S.add(w);0>=T.l(b)&&(A=A.add(v),S=T),w=_e(w,1),v=_e(v,1)}return y=M(b,A.j(y)),new D(A,y)}for(A=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=u(v),T=S.j(y);O(T)||0<T.l(b);)v-=w,S=u(v),T=S.j(y);R(S)&&(S=m),A=A.add(S),b=M(b,T)}return new D(A,b)}t.A=function(b){return H(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function ie(b){for(var y=b.g.length+1,v=[],w=0;w<y;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function _e(b,y){var v=y>>5;y%=32;for(var w=b.g.length-v,A=[],S=0;S<w;S++)A[S]=0<y?b.i(S+v)>>>y|b.i(S+v+1)<<32-y:b.i(S+v);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Er=o}).apply(typeof nm<"u"?nm:typeof self<"u"?self:typeof window<"u"?window:{});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dv,Ai,Ov,_a,Tu,Vv,Mv,Lv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ea=="object"&&ea];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,V){for(var K=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)K[ke-2]=arguments[ke];return h.prototype[k].apply(g,K)}}function O(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const k=a.length||0,V=g.length||0;a.length=k+V;for(let K=0;K<V;K++)a[k+K]=g[K]}else a.push(g)}}class M{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ie=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function _e(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function b(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let V=0;V<v.length;V++)d=v[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function A(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class et{constructor(){this.h=this.g=null}add(h,d){const g=Pt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Pt=new M(()=>new De,a=>a.reset());class De{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ve=!1,Ot=new et,Zt=()=>{const a=c.Promise.resolve(void 0);he=()=>{a.then(qt)}};var qt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var h=Pt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Zn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function dn(a,h){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{H(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}R(dn,$e);var Ct={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,h,d,g,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=I(a,h,g,k);return-1<K?(h=a[K],d||(h.fa=!1)):(h=new J(h,this.src,V,!!g,k),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(g,k,1),V&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,h,d,g){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),U={};function B(a,h,d,g,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)B(a,h[V],d,g,k);return null}return d=ue(d),a&&a[F]?a.K(h,d,u(g)?!!g.capture:!1,k):$(a,h,d,!1,g,k)}function $(a,h,d,g,k,V){if(!h)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,ke=G(a);if(ke||(a[P]=ke=new Ae(a)),d=ke.add(h,d,g,K,V),d.proxy)return d;if(g=Q(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Zn||(k=K),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return h.call(a.src,a.listener,d)}const h=re;return a}function W(a,h,d,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)W(a,h[V],d,g,k);else g=u(g)?!!g.capture:!!g,d=ue(d),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=I(V,d,g,k),-1<d&&(ee(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=G(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,d,g,k)),(d=-1<a?h[a]:null)&&z(d))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(q(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=G(h))?(E(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function q(a){return a in U?U[a]:U[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new dn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&z(a),a=d.call(g,h)}return a}function G(a){return a=a[P],a instanceof Ae?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function oe(){Ue.call(this),this.i=new Ae(this),this.M=this,this.F=null}R(oe,Ue),oe.prototype[F]=!0,oe.prototype.removeEventListener=function(a,h,d,g){W(this,a,h,d,g)};function ge(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new $e(h,a);else if(h instanceof $e)h.target=h.target||a;else{var k=h;h=new $e(g,a),w(h,k)}if(k=!0,d)for(var V=d.length-1;0<=V;V--){var K=h.g=d[V];k=Ie(K,g,!0,h)&&k}if(K=h.g=a,k=Ie(K,g,!0,h)&&k,k=Ie(K,g,!1,h)&&k,d)for(V=0;V<d.length;V++)K=h.g=d[V],k=Ie(K,g,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},oe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ie(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==d){var ke=K.listener,st=K.ha||K.src;K.fa&&E(a.i,K),k=ke.call(st,g)!==!1&&k}}return k&&!g.defaultPrevented}function tt(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function nt(a){a.g=tt(()=>{a.g=null,a.i&&(a.i=!1,nt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ht extends Ue{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Ue.call(this),this.h=a,this.g={}}R(ut,Ue);var er=[];function ri(a){_e(a.g,function(h,d){this.g.hasOwnProperty(d)&&z(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),ri(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=c.JSON.stringify,zt=c.JSON.parse,Do=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ls(){}ls.prototype.h=null;function wf(a){return a.h||(a.h=a.i())}function bf(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qc(){$e.call(this,"d")}R(qc,$e);function Hc(){$e.call(this,"c")}R(Hc,$e);var Fr={},Af=null;function Oo(){return Af=Af||new oe}Fr.La="serverreachability";function Rf(a){$e.call(this,Fr.La,a)}R(Rf,$e);function ii(a){const h=Oo();ge(h,new Rf(h))}Fr.STAT_EVENT="statevent";function Sf(a,h){$e.call(this,Fr.STAT_EVENT,a),this.stat=h}R(Sf,$e);function wt(a){const h=Oo();ge(h,new Sf(h,a))}Fr.Ma="timingevent";function Pf(a,h){$e.call(this,Fr.Ma,a),this.size=h}R(Pf,$e);function oi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ai(){this.g=!0}ai.prototype.xa=function(){this.g=!1};function yT(a,h,d,g,k,V){a.info(function(){if(a.g)if(V)for(var K="",ke=V.split("&"),st=0;st<ke.length;st++){var Re=ke[st].split("=");if(1<Re.length){var ht=Re[0];Re=Re[1];var ft=ht.split("_");K=2<=ft.length&&ft[1]=="type"?K+(ht+"="+Re+"&"):K+(ht+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+K})}function vT(a,h,d,g,k,V,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+V+" "+K})}function us(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+TT(a,d)+(g?" "+g:"")})}function ET(a,h){a.info(function(){return"TIMEOUT: "+h})}ai.prototype.info=function(){};function TT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return rt(d)}catch{return h}}var Vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zc;function Mo(){}R(Mo,ls),Mo.prototype.g=function(){return new XMLHttpRequest},Mo.prototype.i=function(){return{}},zc=new Mo;function tr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var Nf={},Wc={};function Kc(a,h,d){a.L=1,a.v=Uo(kn(h)),a.m=d,a.P=!0,Df(a,null)}function Df(a,h){a.F=Date.now(),Lo(a),a.A=kn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Wf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new kf,a.g=ud(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ht(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(er[0]=k.toString()),k=er);for(var V=0;V<k.length;V++){var K=B(d,k[V],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ii(),yT(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const ft=Nn(this.g);var h=this.g.Ba();const ds=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Zf(this.g)))){this.J||ft!=4||h==7||(h==8||0>=ds?ii(3):ii(2)),Gc(this);var d=this.g.Z();this.X=d;t:if(Of(this)){var g=Zf(this.g);a="";var k=g.length,V=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),ci(this);var K="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,vT(this.i,this.u,this.A,this.l,this.R,ft,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,st=this.g;if((ke=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ke)){var Re=ke;break t}}Re=null}if(d=Re)us(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qc(this,d);else{this.o=!1,this.s=3,wt(12),Ur(this),ci(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<K.length;)if(en=IT(this,K),en==Wc){ft==4&&(this.s=4,wt(14),d=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Nf){this.s=4,wt(15),us(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else us(this.i,this.l,en,null),Qc(this,en);if(Of(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||K.length!=0||this.h.h||(this.s=1,wt(16),d=!1),this.o=this.o&&d,!d)us(this.i,this.l,K,"[Invalid Chunked Response]"),Ur(this),ci(this);else if(0<K.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),tl(ht),ht.M=!0,wt(11))}}else us(this.i,this.l,K,null),Qc(this,K);ft==4&&Ur(this),this.o&&!this.J&&(ft==4?od(this.j,this):(this.o=!1,Lo(this)))}else UT(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Ur(this),ci(this)}}}catch{}finally{}};function Of(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function IT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Wc:(d=Number(h.substring(d,g)),isNaN(d)?Nf:(g+=1,g+d>h.length?Wc:(h=h.slice(g,g+d),a.C=g+d,h)))}tr.prototype.cancel=function(){this.J=!0,Ur(this)};function Lo(a){a.S=Date.now()+a.I,Vf(a,a.I)}function Vf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=oi(m(a.ba,a),h)}function Gc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ET(this.i,this.A),this.L!=2&&(ii(),wt(17)),Ur(this),this.s=2,ci(this)):Vf(this,this.S-a)};function ci(a){a.j.G==0||a.J||od(a.j,a)}function Ur(a){Gc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ri(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Qc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Jc(d.h,a))){if(!a.K&&Jc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)zo(d),qo(d);else break e;el(d),wt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=oi(m(d.Za,d),6e3));if(1>=xf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jr(d,11)}else if((a.K||d.g==a)&&zo(d),!L(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Re=k[h];if(d.T=Re[0],Re=Re[1],d.G==2)if(Re[0]=="c"){d.K=Re[1],d.ia=Re[2];const ht=Re[3];ht!=null&&(d.la=ht,d.j.info("VER="+d.la));const ft=Re[4];ft!=null&&(d.Aa=ft,d.j.info("SVER="+d.Aa));const ds=Re[5];ds!=null&&typeof ds=="number"&&0<ds&&(g=1.5*ds,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const en=a.g;if(en){const Ko=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ko){var V=g.h;V.g||Ko.indexOf("spdy")==-1&&Ko.indexOf("quic")==-1&&Ko.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Yc(V,V.h),V.h=null))}if(g.D){const nl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(g.ya=nl,Me(g.I,g.D,nl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var K=a;if(g.qa=ld(g,g.J?g.ia:null,g.W),K.K){Ff(g.h,K);var ke=K,st=g.L;st&&(ke.I=st),ke.B&&(Gc(ke),Lo(ke)),g.g=K}else sd(g);0<d.i.length&&Ho(d)}else Re[0]!="stop"&&Re[0]!="close"||jr(d,7);else d.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?jr(d,7):Zc(d):Re[0]!="noop"&&d.l&&d.l.ta(Re),d.v=0)}}ii(4)}catch{}}var wT=class{constructor(a,h){this.g=a,this.map=h}};function Mf(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xf(a){return a.h?1:a.g?a.g.size:0}function Jc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Yc(a,h){a.g?a.g.add(h):a.h=h}function Ff(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mf.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Uf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return O(a.i)}function bT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function AT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function $f(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=AT(a),g=bT(a),k=g.length,V=0;V<k;V++)h.call(void 0,g[V],d&&d[V],a)}var jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var V=a[d].substring(0,g);k=a[d].substring(g+1)}else V=a[d];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,xo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.s),this.l=a.l;var h=a.i,d=new hi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Bf(this,d),this.m=a.m}else a&&(h=String(a).match(jf))?(this.h=!1,xo(this,h[1]||"",!0),this.o=li(h[2]||""),this.g=li(h[3]||"",!0),Fo(this,h[4]),this.l=li(h[5]||"",!0),Bf(this,h[6]||"",!0),this.m=li(h[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}$r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ui(h,qf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ui(h,qf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ui(d,d.charAt(0)=="/"?CT:PT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ui(d,NT)),a.join("")};function kn(a){return new $r(a)}function xo(a,h,d){a.j=d?li(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Bf(a,h,d){h instanceof hi?(a.i=h,DT(a.i,a.h)):(d||(h=ui(h,kT)),a.i=new hi(h,a.h))}function Me(a,h,d){a.i.set(h,d)}function Uo(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function li(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ui(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ST),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ST(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qf=/[#\/\?@]/g,PT=/[#\?:]/g,CT=/[#\?]/g,kT=/[#\?@]/g,NT=/#/g;function hi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&RT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=hi.prototype,t.add=function(a,h){nr(this),this.i=null,a=hs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Hf(a,h){nr(a),h=hs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zf(a,h){return nr(a),h=hs(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const k=a[g];for(let V=0;V<k.length;V++)d.push(h[g])}return d},t.V=function(a){nr(this);let h=[];if(typeof a=="string")zf(this,a)&&(h=h.concat(this.g.get(hs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return nr(this),this.i=null,a=hs(this,a),zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Wf(a,h,d){Hf(a,h),0<d.length&&(a.i=null,a.g.set(hs(a,h),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var k=V;K[g]!==""&&(k+="="+encodeURIComponent(String(K[g]))),a.push(k)}}return this.i=a.join("&")};function hs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function DT(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(Hf(this,g),Wf(this,k,d))},a)),a.j=h}function OT(a,h){const d=new ai;if(c.Image){const g=new Image;g.onload=_(rr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(rr,d,"TestLoadImage: error",!1,h,g),g.onabort=_(rr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(rr,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function VT(a,h){const d=new ai,g=new AbortController,k=setTimeout(()=>{g.abort(),rr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?rr(d,"TestPingServer: ok",!0,h):rr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),rr(d,"TestPingServer: error",!1,h)})}function rr(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function MT(){this.g=new Do}function LT(a,h,d){const g=d||"";try{$f(a,function(k,V){let K=k;u(k)&&(K=rt(k)),h.push(g+V+"="+encodeURIComponent(K))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}R($o,ls),$o.prototype.g=function(){return new jo(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function jo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(jo,oe),t=jo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,di(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?fi(this):di(this),this.readyState==3&&Kf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,fi(this))},t.Qa=function(a){this.g&&(this.response=a,fi(this))},t.ga=function(){this.g&&fi(this)};function fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,di(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function di(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gf(a){let h="";return _e(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Xc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Gf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Me(a,h,d))}function qe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(qe,oe);var xT=/^https?$/i,FT=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zc.g(),this.v=this.o?wf(this.o):wf(zc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Qf(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(FT,h,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Qf(this,V)}};function Qf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jf(a),Bo(a)}function Jf(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bo(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Yf(this):this.bb())},t.bb=function(){Yf(this)};function Yf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)tt(a.Ea,0,a);else if(ge(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=K===0){var k=String(a.D).match(jf)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),g=!xT.test(k?k.toLowerCase():"")}d=g}if(d)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var V=2<Nn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Jf(a)}}finally{Bo(a)}}}}function Bo(a,h){if(a.g){Xf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{d.onreadystatechange=g}catch{}}}function Xf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),zt(h)}};function Zf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UT(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var d=A(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[k]||[];h[k]=V,V.push(d)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function ed(a){this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pi("baseRetryDelayMs",5e3,a),this.cb=pi("retryDelaySeedMs",1e4,a),this.Wa=pi("forwardChannelMaxRetries",2,a),this.wa=pi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mf(a&&a.concurrentRequestLimit),this.Da=new MT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ed.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){wt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=ld(this,null,this.W),Ho(this)};function Zc(a){if(td(a),a.G==3){var h=a.U++,d=kn(a.I);if(Me(d,"SID",a.K),Me(d,"RID",h),Me(d,"TYPE","terminate"),mi(a,d),h=new tr(a,a.j,h),h.L=2,h.v=Uo(kn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=ud(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lo(h)}cd(a)}function qo(a){a.g&&(tl(a),a.g.cancel(),a.g=null)}function td(a){qo(a),a.u&&(c.clearTimeout(a.u),a.u=null),zo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ho(a){if(!Lf(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||Zt(),ve||(he(),ve=!0),Ot.add(h,a),a.B=0}}function $T(a,h){return xf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=oi(m(a.Ga,a,h),ad(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new tr(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=rd(this,k,h),d=kn(this.I),Me(d,"RID",a),Me(d,"CVER",22),this.D&&Me(d,"X-HTTP-Session-Id",this.D),mi(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Gf(V)))+"&"+h:this.m&&Xc(d,this.m,V)),Yc(this.h,k),this.Ua&&Me(d,"TYPE","init"),this.P?(Me(d,"$req",h),Me(d,"SID","null"),k.T=!0,Kc(k,d,null)):Kc(k,d,h),this.G=2}}else this.G==3&&(a?nd(this,a):this.i.length==0||Lf(this.h)||nd(this))};function nd(a,h){var d;h?d=h.l:d=a.U++;const g=kn(a.I);Me(g,"SID",a.K),Me(g,"RID",d),Me(g,"AID",a.T),mi(a,g),a.m&&a.o&&Xc(g,a.m,a.o),d=new tr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=rd(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Yc(a.h,d),Kc(d,g,h)}function mi(a,h){a.H&&_e(a.H,function(d,g){Me(h,g,d)}),a.l&&$f({},function(d,g){Me(h,g,d)})}function rd(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=k[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let ke=!0;for(let st=0;st<d;st++){let Re=k[st].g;const ht=k[st].map;if(Re-=V,0>Re)V=Math.max(0,k[st].g-100),ke=!1;else try{LT(ht,K,"req"+Re+"_")}catch{g&&g(ht)}}if(ke){g=K.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function sd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||Zt(),ve||(he(),ve=!0),Ot.add(h,a),a.v=0}}function el(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=oi(m(a.Fa,a),ad(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,id(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=oi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),qo(this),id(this))};function tl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function id(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=kn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),mi(a,h),a.m&&a.o&&Xc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Uo(kn(h)),d.m=null,d.P=!0,Df(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qo(this),el(this),wt(19))};function zo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function od(a,h){var d=null;if(a.g==h){zo(a),tl(a),a.g=null;var g=2}else if(Jc(a.h,h))d=h.D,Ff(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Oo(),ge(g,new Pf(g,d)),Ho(a)}else sd(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&$T(a,h)||g==2&&el(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),k){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function ad(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new $r(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||xo(g,"https"),Uo(g),k?OT(g.toString(),d):VT(g.toString(),d)}else wt(2);a.G=0,a.l&&a.l.sa(h),cd(a),td(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function cd(a){if(a.G=0,a.ka=[],a.l){const h=Uf(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function ld(a,h,d){var g=d instanceof $r?kn(d):new $r(d);if(g.g!="")h&&(g.g=h+"."+g.g),Fo(g,g.s);else{var k=c.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new $r(null);g&&xo(V,g),h&&(V.g=h),k&&Fo(V,k),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&Me(g,d,h),Me(g,"VER",a.la),mi(a,g),g}function ud(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new qe(new $o({eb:d})):new qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hd(){}t=hd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wo(){}Wo.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){oe.call(this),this.g=new ed(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fs(this)}R(Vt,oe),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Zc(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=rt(a),a=d);h.i.push(new wT(h.Ya++,a)),h.G==3&&Ho(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Zc(this.g),delete this.g,Vt.aa.N.call(this)};function fd(a){qc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(fd,qc);function dd(){Hc.call(this),this.status=1}R(dd,Hc);function fs(a){this.g=a}R(fs,hd),fs.prototype.ua=function(){ge(this.g,"a")},fs.prototype.ta=function(a){ge(this.g,new fd(a))},fs.prototype.sa=function(a){ge(this.g,new dd)},fs.prototype.ra=function(){ge(this.g,"b")},Wo.prototype.createWebChannel=Wo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Lv=function(){return new Wo},Mv=function(){return Oo()},Vv=Fr,Tu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vo.NO_ERROR=0,Vo.TIMEOUT=8,Vo.HTTP_ERROR=6,_a=Vo,Cf.COMPLETE="complete",Ov=Cf,bf.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Ai=bf,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Dv=qe}).apply(typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{});const rm="@firebase/firestore",sm="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new yo("@firebase/firestore");function Es(){return ts.logLevel}function Z(t,...e){if(ts.logLevel<=ye.DEBUG){const n=e.map(Mh);ts.debug(`Firestore (${Ys}): ${t}`,...n)}}function Kn(t,...e){if(ts.logLevel<=ye.ERROR){const n=e.map(Mh);ts.error(`Firestore (${Ys}): ${t}`,...n)}}function qs(t,...e){if(ts.logLevel<=ye.WARN){const n=e.map(Mh);ts.warn(`Firestore (${Ys}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,xv(t,r,n)}function xv(t,e,n){let r=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function Ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||xv(e,s,r)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class PC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CC{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new Fv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new mt(e)}}class kC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class NC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new kC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new im(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new im(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=OC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Iu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ml(s)===Ml(i)?Ee(s,i):Ml(s)?1:-1}return Ee(t.length,e.length)}const VC=55296,MC=57343;function Ml(t){const e=t.charCodeAt(0);return e>=VC&&e<=MC}function Hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):Iu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class Ve extends _n{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const LC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends _n{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return LC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===om}static keyField(){return new ct([om])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ve.fromString(e))}static fromName(e){return new se(Ve.fromString(e).popFirst(5))}static empty(){return new se(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e,n){if(!n)throw new Y(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xC(t,e,n,r){if(e===!0&&r===!0)throw new Y(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function am(t){if(!se.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(se.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $v(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Rc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rc(t);throw new Y(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function FC(t,e){if(e<=0)throw new Y(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ao(t,e){if(!$v(t))throw new Y(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=-62135596800,um=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*um);return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lm)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/um}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ao(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Ge("string",Le._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new Le(0,0))}static max(){return new de(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=-1;function UC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Rr(s,se.empty(),e)}function $C(t){return new Rr(t.readTime,t.key,io)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(de.min(),se.empty(),io)}static max(){return new Rr(de.max(),se.empty(),io)}}function jC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==BC)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function HC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Sc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=-1;function Pc(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function zC(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="";function WC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hm(e)),e=KC(t.get(n),e);return hm(e)}function KC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case jv:n+="";break;default:n+=i}}return n}function hm(t){return t+jv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dm(this.data.getIterator())}getIteratorFrom(e){return new dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Xe(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qv("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const GC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=GC.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="server_timestamp",zv="__type__",Wv="__previous_value__",Kv="__local_write_time__";function Fh(t){return(t?.mapValue?.fields||{})[zv]?.stringValue===Hv}function Cc(t){const e=t.mapValue.fields[Wv];return Fh(e)?Cc(e):e}function oo(t){const e=Sr(t.mapValue.fields[Kv].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ha="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||Ha}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===Ha}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="__type__",JC="__max__",na={mapValue:{}},Qv="__vector__",za="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fh(t)?4:XC(t)?9007199254740991:YC(t)?10:11:le(28295,{value:t})}function Sn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),c=Sr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pr(s.bytesValue).isEqual(Pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?qa(o)===qa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(fm(o)!==fm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Sn(o[l],c[l])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function co(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return pm(t.timestampValue,e.timestampValue);case 4:return pm(oo(t),oo(e));case 5:return Iu(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Pr(i),l=Pr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ee(c[u],l[u]);if(f!==0)return f}return Ee(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ee(He(i.latitude),He(o.latitude));return c!==0?c:Ee(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return mm(t.arrayValue,e.arrayValue);case 10:return function(i,o){const c=i.fields||{},l=o.fields||{},u=c[za]?.arrayValue,f=l[za]?.arrayValue,p=Ee(u?.values?.length||0,f?.values?.length||0);return p!==0?p:mm(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Iu(l[p],f[p]);if(m!==0)return m;const _=zs(c[l[p]],u[f[p]]);if(_!==0)return _}return Ee(l.length,f.length)}(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Sr(t),r=Sr(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function mm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zs(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Ws(t){return wu(t)}function wu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wu(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function ya(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cc(t);return e?16+ya(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ya(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Mr(r.fields,(i,o)=>{s+=i.length+ya(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function gm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bu(t){return!!t&&"integerValue"in t}function Uh(t){return!!t&&"arrayValue"in t}function _m(t){return!!t&&"nullValue"in t}function ym(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function va(t){return!!t&&"mapValue"in t}function YC(t){return(t?.mapValue?.fields||{})[Gv]?.stringValue===Qv}function zi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zi(t.arrayValue.values[n]);return e}return{...t}}function XC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===JC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zi(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=zi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(zi(this.value))}}function Jv(t){const e=[];return Mr(t.fields,(n,r)=>{const s=new ct([n]);if(va(r)){const i=Jv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new yt(e,0,de.min(),de.min(),de.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,de.min(),de.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,de.min(),de.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.position=e,this.inclusive=n}}function vm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Em(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{}class Ke extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tk(e,n,r):n==="array-contains"?new sk(e,r):n==="in"?new ik(e,r):n==="not-in"?new ok(e,r):n==="array-contains-any"?new ak(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nk(e,r):new rk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zs(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new fn(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xv(t){return t.op==="and"}function Zv(t){return ek(t)&&Xv(t)}function ek(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Au(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(Zv(t))return t.filters.map(e=>Au(e)).join(",");{const e=t.filters.map(n=>Au(n)).join(",");return`${t.op}(${e})`}}function eE(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&Sn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&eE(o,s.filters[c]),!0):!1}(t,e):void le(19439)}function tE(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(tE).join(" ,")+"}"}(t):"Filter"}class tk extends Ke{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class nk extends Ke{constructor(e,n){super(e,"in",n),this.keys=nE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rk extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=nE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nE(t,e){return(e.arrayValue?.values||[]).map(n=>se.fromName(n.referenceValue))}class sk extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uh(n)&&co(n.arrayValue,this.value)}}class ik extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class ok extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!co(this.value.arrayValue,n)}}class ak extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Tm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ck(t,e,n,r,s,i,o)}function $h(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.Te=n}return e.Te}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Em(t.startAt,e.startAt)&&Em(t.endAt,e.endAt)}function Ru(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function lk(t,e,n,r,s,i,o,c){return new ei(t,e,n,r,s,i,o,c)}function Bh(t){return new ei(t)}function Im(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rE(t){return t.collectionGroup!==null}function Wi(t){const e=me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Xe(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new lo(i,r))}),n.has(ct.keyField().canonicalString())||e.Ie.push(new lo(ct.keyField(),r))}return e.Ie}function In(t){const e=me(t);return e.Ee||(e.Ee=uk(e,Wi(t))),e.Ee}function uk(t,e){if(t.limitType==="F")return Tm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lo(s.field,i)});const n=t.endAt?new Wa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wa(t.startAt.position,t.startAt.inclusive):null;return Tm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Su(t,e){const n=t.filters.concat([e]);return new ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ka(t,e,n){return new ei(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kc(t,e){return jh(In(t),In(e))&&t.limitType===e.limitType}function sE(t){return`${$h(In(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tE(s)).join(", ")}]`),Pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ws(s)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function Nc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=vm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Wi(r),s)||r.endAt&&!function(o,c,l){const u=vm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Wi(r),s))}(t,e)}function hk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iE(t){return(e,n)=>{let r=!1;for(const s of Wi(t)){const i=fk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function fk(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?zs(l,u):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=new Be(se.comparator);function Qn(){return dk}const oE=new Be(se.comparator);function Ri(...t){let e=oE;for(const n of t)e=e.insert(n.key,n);return e}function aE(t){let e=oE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Ki()}function cE(){return Ki()}function Ki(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const pk=new Be(se.comparator),mk=new Xe(se.comparator);function Te(...t){let e=mk;for(const n of t)e=e.add(n);return e}const gk=new Xe(Ee);function _k(){return gk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function yk(t,e){return zC(e)?lE(e):qh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function vk(t,e,n){return t instanceof Ga?function(s,i){const o={fields:{[zv]:{stringValue:Hv},[Kv]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fh(i)&&(i=Cc(i)),i&&(o.fields[Wv]=i),{mapValue:o}}(n,e):t instanceof uo?hE(t,e):t instanceof ho?fE(t,e):function(s,i){const o=uE(s,i),c=wm(o)+wm(s.Ae);return bu(o)&&bu(s.Ae)?lE(c):qh(s.serializer,c)}(t,e)}function Ek(t,e,n){return t instanceof uo?hE(t,e):t instanceof ho?fE(t,e):n}function uE(t,e){return t instanceof Qa?function(r){return bu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ga extends Dc{}class uo extends Dc{constructor(e){super(),this.elements=e}}function hE(t,e){const n=dE(e);for(const r of t.elements)n.some(s=>Sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ho extends Dc{constructor(e){super(),this.elements=e}}function fE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(s=>!Sn(s,r));return{arrayValue:{values:n}}}class Qa extends Dc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wm(t){return He(t.integerValue||t.doubleValue)}function dE(t){return Uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Tk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof uo&&s instanceof uo||r instanceof ho&&s instanceof ho?Hs(r.elements,s.elements,Sn):r instanceof Qa&&s instanceof Qa?Sn(r.Ae,s.Ae):r instanceof Ga&&s instanceof Ga}(t.transform,e.transform)}class Ik{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oc{}function pE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hh(t.key,ln.none()):new Ro(t.key,t.data,ln.none());{const n=t.data,r=Nt.empty();let s=new Xe(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new $t(s.toArray()),ln.none())}}function wk(t,e,n){t instanceof Ro?function(s,i,o){const c=s.value.clone(),l=Am(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!Ea(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Am(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(mE(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gi(t,e,n,r){return t instanceof Ro?function(i,o,c,l){if(!Ea(i.precondition,o))return c;const u=i.value.clone(),f=Rm(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,c,l){if(!Ea(i.precondition,o))return c;const u=Rm(i.fieldTransforms,l,o),f=o.data;return f.setAll(mE(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ea(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function bk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=uE(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hs(r,s,(i,o)=>Tk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends Oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Am(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Ek(o,c,n[s]))}return r}function Rm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vk(i,o,e))}return r}class Hh extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ak extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=pE(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>bm(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>bm(n,r))}}class zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return pk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,we;function Ck(t){switch(t){case x.OK:return le(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function gE(t){if(t===void 0)return Kn("GRPC error has no .code"),x.UNKNOWN;switch(t){case We.OK:return x.OK;case We.CANCELLED:return x.CANCELLED;case We.UNKNOWN:return x.UNKNOWN;case We.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case We.INTERNAL:return x.INTERNAL;case We.UNAVAILABLE:return x.UNAVAILABLE;case We.UNAUTHENTICATED:return x.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case We.NOT_FOUND:return x.NOT_FOUND;case We.ALREADY_EXISTS:return x.ALREADY_EXISTS;case We.PERMISSION_DENIED:return x.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case We.ABORTED:return x.ABORTED;case We.OUT_OF_RANGE:return x.OUT_OF_RANGE;case We.UNIMPLEMENTED:return x.UNIMPLEMENTED;case We.DATA_LOSS:return x.DATA_LOSS;default:return le(39323,{code:t})}}(we=We||(We={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new Er([4294967295,4294967295],0);function Sm(t){const e=kk().encode(t),n=new Nv;return n.update(e),new Uint8Array(n.digest())}function Pm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,r],0),new Er([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Si(`Invalid padding: ${n}`);if(r<0)throw new Si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Si(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Er.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Er.fromNumber(r)));return s.compare(Nk)===1&&(s=new Er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Sm(e),[r,s]=Pm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Sm(e),[r,s]=Pm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vc(de.min(),s,new Be(Ee),Qn(),Te())}}class So{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class _E{constructor(e,n){this.targetId=e,this.Ce=n}}class yE{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cm{constructor(){this.ve=0,this.Fe=km(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new So(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=km()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Dk{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qn(),this.Je=ra(),this.He=ra(),this.Ye=new Be(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ru(i))if(r===0){const o=new se(i.path);this.et(n,o,yt.newNoDocument(o,de.min()))}else Ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Pr(r).toUint8Array()}catch(l){if(l instanceof qv)return qs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wh(o,s,i)}catch(l){return qs(l instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Ru(c.target)){const l=new se(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,yt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Vc(e,n,this.Ye,this.je,r);return this.je=Qn(),this.Je=ra(),this.He=ra(),this.Ye=new Be(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Cm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Xe(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Xe(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cm),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ra(){return new Be(se.comparator)}function km(){return new Be(se.comparator)}const Ok={asc:"ASCENDING",desc:"DESCENDING"},Vk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mk={and:"AND",or:"OR"};class Lk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pu(t,e){return t.useProto3Json||Pc(e)?e:{value:e}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xk(t,e){return Ja(t,e.toTimestamp())}function wn(t){return Ce(!!t,49232),de.fromTimestamp(function(n){const r=Sr(n);return new Le(r.seconds,r.nanos)}(t))}function Kh(t,e){return Cu(t,e).canonicalString()}function Cu(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EE(t){const e=Ve.fromString(t);return Ce(AE(e),10190,{key:e.toString()}),e}function ku(t,e){return Kh(t.databaseId,e.path)}function Ll(t,e){const n=EE(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(IE(n))}function TE(t,e){return Kh(t.databaseId,e)}function Fk(t){const e=EE(t);return e.length===4?Ve.emptyPath():IE(e)}function Nu(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IE(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Nm(t,e,n){return{name:ku(t,e),fields:n.value.mapValue.fields}}function Uk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?x.UNKNOWN:gE(u.code);return new Y(f,u.message||"")}(o);n=new yE(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):de.min(),c=new Nt({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ta(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?wn(r.readTime):de.min(),o=yt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ta([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new Ta([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Pk(s,i),c=r.targetId;n=new _E(c,o)}}return n}function $k(t,e){let n;if(e instanceof Ro)n={update:Nm(t,e.key,e.value)};else if(e instanceof Hh)n={delete:ku(t,e.key)};else if(e instanceof Lr)n={update:Nm(t,e.key,e.data),updateMask:Qk(e.fieldMask)};else{if(!(e instanceof Ak))return le(16599,{Vt:e.type});n={verify:ku(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ga)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Qa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)}(t,e.precondition)),n}function jk(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(de.min())&&(o=wn(i)),new Ik(o,s.transformResults||[])}(n,e))):[]}function Bk(t,e){return{documents:[TE(t,e.path)]}}function qk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TE(t,s);const i=function(u){if(u.length!==0)return bE(fn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Is(m.field),direction:Wk(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Pu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Hk(t){let e=Fk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=wE(p);return m instanceof fn&&Zv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new lo(ws(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Pc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new Wa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new Wa(_,m)}(n.endAt)),lk(e,s,o,i,c,"F",l,u)}function zk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ws(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>wE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function Wk(t){return Ok[t]}function Kk(t){return Vk[t]}function Gk(t){return Mk[t]}function Is(t){return{fieldPath:t.canonicalString()}}function ws(t){return ct.fromServerFormat(t.fieldPath)}function bE(t){return t instanceof Ke?function(n){if(n.op==="=="){if(ym(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(_m(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ym(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(_m(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:Kk(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>bE(s));return r.length===1?r[0]:{compositeFilter:{op:Gk(n.op),filters:r}}}(t):le(54877,{filter:t})}function Qk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,s,i=de.min(),o=de.min(),c=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.yt=e}}function Yk(t){const e=Hk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.Cn=new Zk}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Rr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class Zk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},RE=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(RE,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ks(0)}static cr(){return new Ks(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="LruGarbageCollector",e2=1048576;function Vm([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class t2{constructor(e){this.Ir=e,this.buffer=new Xe(Vm),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class n2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(Om,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zs(n)?Z(Om,"Ignoring IndexedDB error during garbage collection: ",n):await Xs(n)}await this.Vr(3e5)})}}class r2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Sc.ce);const r=new t2(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Dm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dm):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Es()<=ye.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function s2(t,e){return new r2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Gi(r.mutation,s,$t.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ri();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Qn();const o=Ki(),c=function(){return Ki()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Gi(f.mutation,u,f.mutation.getFieldMask(),Le.now())):o.set(u.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new o2(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Ki();let s=new Be((o,c)=>o-c),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||$t.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=cE();f.forEach(m=>{if(!i.has(m)){const _=pE(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Kr());let c=io,l=i;return o.next(u=>j.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(f=>({batchId:c,changes:aE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ri();return this.indexManager.getCollectionParents(e,i).next(c=>j.forEach(c,l=>{const u=function(p,m){return new ei(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,yt.newInvalidDocument(f)))});let c=Ri();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Gi(f.mutation,u,$t.empty(),Le.now()),Nc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:Yk(s.bundledQuery),readTime:wn(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(){this.overlays=new Be(se.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Kr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Kr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return j.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Sk(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Qr=new Xe(Ze.$r),this.Ur=new Xe(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new se(new Ve([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new se(new Ve([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return se.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Xe(Ze.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?xh:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(Ee);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new se(i),0);let c=new Xe(Ee);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),j.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.ri=e,this.docs=function(){return new Be(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||jC($C(f),r)<=0||(s.has(f.key)||Nc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new d2(this)}getSize(e){return j.resolve(this.size)}}class d2 extends i2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.persistence=e,this.si=new as(n=>$h(n),jh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Gh,this.targetCount=0,this.ai=Ks.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Sc(0),this.li=!1,this.li=!0,this.hi=new u2,this.referenceDelegate=e(this),this.Pi=new p2(this),this.indexManager=new Xk,this.remoteDocumentCache=function(s){return new f2(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Jk(n),this.Ii=new c2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new l2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new h2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new m2(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class m2 extends qC{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.Ri=new Gh,this.Vi=null}static mi(e){return new Qh(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const s=se.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ya{constructor(e,n){this.persistence=e,this.pi=new as(r=>WC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=s2(this,n)}static mi(e,n){return new Ya(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ya(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return xb()?8:HC(It())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new g2;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Es()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Es()<=ye.DEBUG&&Z("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Es()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):j.resolve())}ys(e,n){if(Im(n))return j.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ka(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Ka(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return Im(n)||s.isEqual(de.min())?j.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(Es()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ts(n)),this.vs(e,o,n,UC(s,io)).next(c=>c))})}Ds(e,n){let r=new Xe(iE(e));return n.forEach((s,i)=>{Nc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Es()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.ps.getDocumentsMatchingQuery(e,n,Rr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="LocalStore",y2=3e8;class v2{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Be(Ee),this.xs=new as(i=>$h(i),jh),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new a2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function E2(t,e,n,r){return new v2(t,e,n,r)}async function PE(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function T2(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let _=j.resolve();return m.forEach(R=>{_=_.next(()=>f.getEntry(l,R)).next(O=>{const N=u.docVersions.get(R);Ce(N!==null,48541),O.version.compareTo(N)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),f.addEntry(O)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function CE(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function I2(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(O,N,M){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=y2?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=Qn(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(w2(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return j.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function w2(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(Yh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function b2(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=xh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function A2(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Du(t,e,n){const r=me(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zs(o))throw o;Z(Yh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Mm(t,e,n){const r=me(t);let s=de.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=me(l),m=p.xs.get(f);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)}(r,o,In(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Te())).next(c=>(R2(r,hk(e),c),{documents:c,Qs:i})))}function R2(t,e,n){let r=t.Os.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Lm{constructor(){this.activeTargetIds=_k()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S2{constructor(){this.Mo=new Lm,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="ConnectivityMonitor";class Fm{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(xm,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(xm,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=null;function Ou(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="RestConnection",C2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class k2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ha?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Ou(),c=this.zo(e,n.toUriEncodedString());Z(xl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=ss(u);return this.Jo(e,c,l,r,f).then(p=>(Z(xl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw qs(xl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ys}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=C2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class D2 extends k2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Ou();return new Promise((c,l)=>{const u=new Dv;u.setWithCredentials(!0),u.listenOnce(Ov.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _a.NO_ERROR:const p=u.getResponseJson();Z(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case _a.TIMEOUT:Z(dt,`RPC '${e}' ${o} timed out`),l(new Y(x.DEADLINE_EXCEEDED,"Request time out"));break;case _a.HTTP_ERROR:const m=u.getStatus();if(Z(dt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_?.error;if(R&&R.status&&R.message){const O=function(M){const L=M.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(L)>=0?L:x.UNKNOWN}(R.status);l(new Y(O,R.message))}else l(new Y(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y(x.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(dt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Z(dt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Ou(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Lv(),c=Mv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(dt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const R=new N2({Yo:N=>{_?Z(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(dt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),O=(N,M,L)=>{N.listen(M,D=>{try{L(D)}catch(H){setTimeout(()=>{throw H},0)}})};return O(p,Ai.EventType.OPEN,()=>{_||(Z(dt,`RPC '${e}' stream ${s} transport opened.`),R.o_())}),O(p,Ai.EventType.CLOSE,()=>{_||(_=!0,Z(dt,`RPC '${e}' stream ${s} transport closed`),R.a_(),this.E_(p))}),O(p,Ai.EventType.ERROR,N=>{_||(_=!0,qs(dt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),R.a_(new Y(x.UNAVAILABLE,"The operation could not be completed")))}),O(p,Ai.EventType.MESSAGE,N=>{if(!_){const M=N.data[0];Ce(!!M,16349);const L=M,D=L?.error||L[0]?.error;if(D){Z(dt,`RPC '${e}' stream ${s} received error:`,D);const H=D.status;let ie=function(y){const v=We[y];if(v!==void 0)return gE(v)}(H),_e=D.message;ie===void 0&&(ie=x.INTERNAL,_e="Unknown error status: "+H+" with message "+D.message),_=!0,R.a_(new Y(ie,_e)),p.close()}else Z(dt,`RPC '${e}' stream ${s} received:`,M),R.u_(M)}}),O(c,Vv.STAT_EVENT,N=>{N.stat===Tu.PROXY?Z(dt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Tu.NOPROXY&&Z(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return new Lk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="PersistentStream";class NE{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new kE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Z(Um,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Z(Um,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class O2 extends NE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Uk(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?wn(o.readTime):de.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Nu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Ru(l)?{documents:Bk(i,l)}:{query:qk(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=vE(i,o.resumeToken);const u=Pu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=Ja(i,o.snapshotVersion.toTimestamp());const u=Pu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=zk(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Nu(this.serializer),n.removeTarget=e,this.q_(n)}}class V2 extends NE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=jk(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nu(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$k(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{}class L2 extends M2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Cu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(x.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Cu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(x.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class x2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="RemoteStore";class F2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{cs(this)&&(Z(ns,"Restarting streams for network reachability change."),await async function(l){const u=me(l);u.Ea.add(4),await Po(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Lc(u)}(this))})}),this.Ra=new x2(r,s)}}async function Lc(t){if(cs(t))for(const e of t.da)await e(!0)}async function Po(t){for(const e of t.da)await e(!1)}function DE(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),tf(n)?ef(n):ti(n).O_()&&Zh(n,e))}function Xh(t,e){const n=me(t),r=ti(n);n.Ia.delete(e),r.O_()&&OE(n,e),n.Ia.size===0&&(r.O_()?r.L_():cs(n)&&n.Ra.set("Unknown"))}function Zh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ti(t).Y_(e)}function OE(t,e){t.Va.Ue(e),ti(t).Z_(e)}function ef(t){t.Va=new Dk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ti(t).start(),t.Ra.ua()}function tf(t){return cs(t)&&!ti(t).x_()&&t.Ia.size>0}function cs(t){return me(t).Ea.size===0}function VE(t){t.Va=void 0}async function U2(t){t.Ra.set("Online")}async function $2(t){t.Ia.forEach((e,n)=>{Zh(t,e)})}async function j2(t,e){VE(t),tf(t)?(t.Ra.ha(e),ef(t)):t.Ra.set("Unknown")}async function B2(t,e,n){if(t.Ra.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){Z(ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xa(t,r)}else if(e instanceof Ta?t.Va.Ze(e):e instanceof _E?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await CE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),OE(i,l);const p=new gr(f.target,l,u,f.sequenceNumber);Zh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z(ns,"Failed to raise snapshot:",r),await Xa(t,r)}}async function Xa(t,e,n){if(!Zs(e))throw e;t.Ea.add(1),await Po(t),t.Ra.set("Offline"),n||(n=()=>CE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(ns,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Lc(t)})}function ME(t,e){return e().catch(n=>Xa(t,n,e))}async function xc(t){const e=me(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xh;for(;q2(e);)try{const s=await b2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,H2(e,s)}catch(s){await Xa(e,s)}LE(e)&&xE(e)}function q2(t){return cs(t)&&t.Ta.length<10}function H2(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function LE(t){return cs(t)&&!kr(t).x_()&&t.Ta.length>0}function xE(t){kr(t).start()}async function z2(t){kr(t).ra()}async function W2(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function K2(t,e,n){const r=t.Ta.shift(),s=zh.from(r,e,n);await ME(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xc(t)}async function G2(t,e){e&&kr(t).X_&&await async function(r,s){if(function(o){return Ck(o)&&o!==x.ABORTED}(s.code)){const i=r.Ta.shift();kr(r).B_(),await ME(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xc(r)}}(t,e),LE(t)&&xE(t)}async function $m(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z(ns,"RemoteStore received new credentials");const r=cs(n);n.Ea.add(3),await Po(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Lc(n)}async function Q2(t,e){const n=me(t);e?(n.Ea.delete(2),await Lc(n)):e||(n.Ea.add(2),await Po(n),n.Ra.set("Unknown"))}function ti(t){return t.ma||(t.ma=function(n,r,s){const i=me(n);return i.sa(),new O2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:U2.bind(null,t),t_:$2.bind(null,t),r_:j2.bind(null,t),H_:B2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),tf(t)?ef(t):t.Ra.set("Unknown")):(await t.ma.stop(),VE(t))})),t.ma}function kr(t){return t.fa||(t.fa=function(n,r,s){const i=me(n);return i.sa(),new V2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:z2.bind(null,t),r_:G2.bind(null,t),ta:W2.bind(null,t),na:K2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await xc(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(ns,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new nf(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Zs(t))return new Y(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ri(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.ga=new Be(se.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Gs(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Y2{constructor(){this.queries=Bm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Bm(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new Y(x.ABORTED,"Firestore shutting down"))}}function Bm(){return new as(t=>sE(t),kc)}async function FE(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new J2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=rf(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&sf(n)}async function UE(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function X2(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&sf(n)}function Z2(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function sf(t){t.Ca.forEach(e=>{e.next()})}var Vu,qm;(qm=Vu||(Vu={})).Ma="default",qm.Cache="cache";class $E{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class eN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=iE(e),this.tu=new Vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new jm,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=Nc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),O=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;m&&_?m.data.isEqual(_.data)?R!==O&&(r.track({type:3,doc:_}),N=!0):this.su(m,_)||(r.track({type:2,doc:_}),N=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),N=!0):m&&!_&&(r.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(_?(o=o.add(_),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,R){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:N})}};return O(_)-O(R)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Gs(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jm,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new BE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new jE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Gs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const of="SyncEngine";class tN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nN{constructor(e){this.key=e,this.hu=!1}}class rN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new as(c=>sE(c),kc),this.Iu=new Map,this.Eu=new Set,this.du=new Be(se.comparator),this.Au=new Map,this.Ru=new Gh,this.Vu={},this.mu=new Map,this.fu=Ks.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sN(t,e,n=!0){const r=GE(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await qE(r,e,n,!0),s}async function iN(t,e){const n=GE(t);await qE(n,e,!0,!1)}async function qE(t,e,n,r){const s=await A2(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await oN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&DE(t.remoteStore,s),c}async function oN(t,e,n,r,s){t.pu=(p,m,_)=>async function(O,N,M,L){let D=N.view.ru(M);D.Cs&&(D=await Mm(O.localStore,N.query,!1).then(({documents:b})=>N.view.ru(b,D)));const H=L&&L.targetChanges.get(N.targetId),ie=L&&L.targetMismatches.get(N.targetId)!=null,_e=N.view.applyChanges(D,O.isPrimaryClient,H,ie);return zm(O,N.targetId,_e.au),_e.snapshot}(t,p,m,_);const i=await Mm(t.localStore,e,!0),o=new eN(e,i.Qs),c=o.ru(i.documents),l=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);zm(t,n,u.au);const f=new tN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function aN(t,e,n){const r=me(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!kc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Du(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xh(r.remoteStore,s.targetId),Mu(r,s.targetId)}).catch(Xs)):(Mu(r,s.targetId),await Du(r.localStore,s.targetId,!0))}async function cN(t,e){const n=me(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xh(n.remoteStore,r.targetId))}async function lN(t,e,n){const r=gN(t);try{const s=await function(o,c){const l=me(o),u=Le.now(),f=c.reduce((_,R)=>_.add(R.key),Te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Qn(),O=Te();return l.Ns.getEntries(_,f).next(N=>{R=N,R.forEach((M,L)=>{L.isValidDocument()||(O=O.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,R)).next(N=>{p=N;const M=[];for(const L of c){const D=bk(L,p.get(L.key).overlayedDocument);D!=null&&M.push(new Lr(L.key,D,Jv(D.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,M,c)}).next(N=>{m=N;const M=N.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(_,N.batchId,M)})}).then(()=>({batchId:m.batchId,changes:aE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Be(Ee)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Co(r,s.changes),await xc(r.remoteStore)}catch(s){const i=rf(s,"Failed to persist write");n.reject(i)}}async function HE(t,e){const n=me(t);try{const r=await I2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ce(o.hu,14607):s.removedDocuments.size>0&&(Ce(o.hu,42227),o.hu=!1))}),await Co(n,r,e)}catch(r){await Xs(r)}}function Hm(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=me(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)}),u&&sf(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uN(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Be(se.comparator);o=o.insert(i,yt.newNoDocument(i,de.min()));const c=Te().add(i),l=new Vc(de.min(),new Map,new Be(Ee),o,c);await HE(r,l),r.du=r.du.remove(i),r.Au.delete(e),af(r)}else await Du(r.localStore,e,!1).then(()=>Mu(r,e,n)).catch(Xs)}async function hN(t,e){const n=me(t),r=e.batch.batchId;try{const s=await T2(n.localStore,e);WE(n,r,null),zE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Co(n,s)}catch(s){await Xs(s)}}async function fN(t,e,n){const r=me(t);try{const s=await function(o,c){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ce(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);WE(r,e,n),zE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Co(r,s)}catch(s){await Xs(s)}}function zE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function WE(t,e,n){const r=me(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Mu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||KE(t,r)})}function KE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Xh(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),af(t))}function zm(t,e,n){for(const r of n)r instanceof jE?(t.Ru.addReference(r.key,e),dN(t,r)):r instanceof BE?(Z(of,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||KE(t,r.key)):le(19791,{wu:r})}function dN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(of,"New document in limbo: "+n),t.Eu.add(r),af(t))}function af(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se(Ve.fromString(e)),r=t.fu.next();t.Au.set(r,new nN(n)),t.du=t.du.insert(n,r),DE(t.remoteStore,new gr(In(Bh(n.path)),r,"TargetPurposeLimboResolution",Sc.ce))}}async function Co(t,e,n){const r=me(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Jh.As(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=me(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,m=>j.forEach(m.Es,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>j.forEach(m.ds,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Zs(p))throw p;Z(Yh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),R=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(m,O)}}}(r.localStore,i))}async function pN(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z(of,"User change. New user:",e.toKey());const r=await PE(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new Y(x.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Co(n,r.Ls)}}function mN(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function GE(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uN.bind(null,e),e.Pu.H_=X2.bind(null,e.eventManager),e.Pu.yu=Z2.bind(null,e.eventManager),e}function gN(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fN.bind(null,e),e}class Za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return E2(this.persistence,new _2,e.initialUser,this.serializer)}Cu(e){return new SE(Qh.mi,this.serializer)}Du(e){return new S2}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Za.provider={build:()=>new Za};class _N extends Za{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ce(this.persistence.referenceDelegate instanceof Ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new n2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new SE(r=>Ya.mi(r,n),this.serializer)}}class Lu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pN.bind(null,this.syncEngine),await Q2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Y2}()}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=function(i){return new D2(i)}(e.databaseInfo);return function(i,o,c,l){return new L2(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new F2(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Hm(this.syncEngine,n,0),function(){return Fm.v()?new Fm:new P2}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new rN(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=me(n);Z(ns,"RemoteStore shutting down."),r.Ea.add(5),await Po(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Lu.provider={build:()=>new Lu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class yN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Lh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await PE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vN(t);Z(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$m(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$m(e.remoteStore,s)),t._onlineComponents=e}async function vN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Nr,"Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new Za)}}else Z(Nr,"Using default OfflineComponentProvider"),await Ul(t,new _N(void 0));return t._offlineComponents}async function JE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Nr,"Using user provided OnlineComponentProvider"),await Wm(t,t._uninitializedComponentsProvider._online)):(Z(Nr,"Using default OnlineComponentProvider"),await Wm(t,new Lu))),t._onlineComponents}function EN(t){return JE(t).then(e=>e.syncEngine)}async function YE(t){const e=await JE(t),n=e.eventManager;return n.onListen=sN.bind(null,e.syncEngine),n.onUnlisten=aN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cN.bind(null,e.syncEngine),n}function TN(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new QE({next:m=>{f.Nu(),o.enqueueAndForget(()=>UE(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new Y(x.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new Y(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new $E(Bh(c.path),f,{includeMetadataChanges:!0,qa:!0});return FE(i,p)}(await YE(t),t.asyncQueue,e,n,r)),r.promise}function IN(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new QE({next:m=>{f.Nu(),o.enqueueAndForget(()=>UE(i,p)),m.fromCache&&l.source==="server"?u.reject(new Y(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new $E(c,f,{includeMetadataChanges:!0,qa:!0});return FE(i,p)}(await YE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="firestore.googleapis.com",Gm=!0;class Qm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ZE,this.ssl=Gm}else this.host=e.host,this.ssl=e.ssl??Gm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=RE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<e2)throw new Y(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SC;switch(r.type){case"firstParty":return new NC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Km.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Km.delete(n),r.terminate())}(this),Promise.resolve()}}function wN(t,e,n,r={}){t=Gn(t,Fc);const s=ss(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(ch(`https://${c}`),lh("Firestore",!0)),i.host!==ZE&&i.host!==c&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!wr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=mt.MOCK_USER;else{u=Q_(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Y(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new mt(p)}t._authCredentials=new PC(new Fv(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xr(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ao(n,Qe._jsonSchema))return new Qe(e,r||null,new se(Ve.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Ge("string",Qe._jsonSchemaVersion),referencePath:Ge("string")};class Tr extends xr{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new se(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function Jm(t,e,...n){if(t=Fe(t),Uv("collection","path",e),t instanceof Fc){const r=Ve.fromString(e,...n);return cm(r),new Tr(t,null,r)}{if(!(t instanceof Qe||t instanceof Tr))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return cm(r),new Tr(t.firestore,null,r)}}function Ia(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=Lh.newId()),Uv("doc","path",e),t instanceof Fc){const r=Ve.fromString(e,...n);return am(r),new Qe(t,null,new se(r))}{if(!(t instanceof Qe||t instanceof Tr))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return am(r),new Qe(t.firestore,t instanceof Tr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="AsyncQueue";class Xm{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new kE(this,"async_queue_retry"),this._c=()=>{const r=Fl();r&&Z(Ym,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new jn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zs(e))throw e;Z(Ym,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Kn("INTERNAL UNHANDLED ERROR: ",Zm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=nf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Zm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ni extends Fc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xm,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xm(e),this._firestoreClient=void 0,await e}}}function bN(t,e){const n=typeof t=="object"?t:Eo(),r=typeof t=="string"?t:Ha,s=Yn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=W_("firestore");i&&wN(s,...i)}return s}function cf(t){if(t._terminated)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||AN(t),t._firestoreClient}function AN(t){const e=t._freezeSettings(),n=function(s,i,o,c){return new QC(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,XE(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new yN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(lt.fromBase64String(e))}catch(n){throw new Y(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ao(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Ge("string",Gt._jsonSchemaVersion),bytes:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(Ao(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Ge("string",bn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ao(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new Y(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Ge("string",An._jsonSchemaVersion),vectorValues:Ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^__.*__$/;class SN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}class eT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class uf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new uf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ec(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(tT(this.Ac)&&RN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class PN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mc(e)}Cc(e,n,r,s=!1){return new uf({Ac:e,methodName:n,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hf(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new PN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CN(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ff("Data must be an object, but it was:",o,r);const c=nT(r,o);let l,u;if(i.merge)l=new $t(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=xu(e,p,n);if(!o.contains(m))throw new Y(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sT(f,m)||f.push(m)}l=new $t(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new SN(new Nt(c),l,u)}class $c extends lf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function kN(t,e,n,r){const s=t.Cc(1,e,n);ff("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Mr(r,(l,u)=>{const f=df(e,l,n);u=Fe(u);const p=s.yc(f);if(u instanceof $c)i.push(f);else{const m=ko(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new $t(i);return new eT(o,c,s.fieldTransforms)}function NN(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[xu(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(xu(e,i[m])),l.push(i[m+1]);const u=[],f=Nt.empty();for(let m=c.length-1;m>=0;--m)if(!sT(u,c[m])){const _=c[m];let R=l[m];R=Fe(R);const O=o.yc(_);if(R instanceof $c)u.push(_);else{const N=ko(R,O);N!=null&&(u.push(_),f.set(_,N))}}const p=new $t(u);return new eT(f,p,o.fieldTransforms)}function DN(t,e,n,r=!1){return ko(n,t.Cc(r?4:3,e))}function ko(t,e){if(rT(t=Fe(t)))return ff("Unsupported field value:",e,t),nT(t,e);if(t instanceof lf)return function(r,s){if(!tT(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ko(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:Ja(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ja(s.serializer,i)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:vE(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return function(o,c){return{mapValue:{fields:{[Gv]:{stringValue:Qv},[za]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return qh(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Rc(r)}`)}(t,e)}function nT(t,e){const n={};return Bv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(r,s)=>{const i=ko(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof bn||t instanceof Gt||t instanceof Qe||t instanceof lf||t instanceof An)}function ff(t,e,n){if(!rT(n)||!$v(n)){const r=Rc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function xu(t,e,n){if((e=Fe(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return df(t,e);throw ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const ON=new RegExp("[~\\*/\\[\\]]");function df(t,e,n){if(e.search(ON)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uc(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ec(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(x.INVALID_ARGUMENT,c+t+l)}function sT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VN extends iT{data(){return super.data()}}function jc(t,e){return typeof e=="string"?df(t,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pf{}class mf extends pf{}function LN(t,e,...n){let r=[];e instanceof pf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof gf).length,c=i.filter(l=>l instanceof Bc).length;if(o>1||o>0&&c>0)throw new Y(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Bc extends mf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bc(e,n,r)}_apply(e){const n=this._parse(e);return oT(e._query,n),new xr(e.firestore,e.converter,Su(e._query,n))}_parse(e){const n=hf(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){tg(p,f);const R=[];for(const O of p)R.push(eg(l,i,O));m={arrayValue:{values:R}}}else m=eg(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||tg(p,f),m=DN(c,o,p,f==="in"||f==="not-in");return Ke.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xN(t,e,n){const r=e,s=jc("where",t);return Bc._create(s,r,n)}class gf extends pf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)oT(o,l),o=Su(o,l)}(e._query,n),new xr(e.firestore,e.converter,Su(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _f extends mf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _f(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lo(i,o)}(e._query,this._field,this._direction);return new xr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ei(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function FN(t,e="asc"){const n=e,r=jc("orderBy",t);return _f._create(r,n)}class yf extends mf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new yf(e,n,r)}_apply(e){return new xr(e.firestore,e.converter,Ka(e._query,this._limit,this._limitType))}}function UN(t){return FC("limit",t),yf._create("limit",t,"F")}function eg(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new Y(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rE(e)&&n.indexOf("/")!==-1)throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!se.isDocumentKey(r))throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gm(t,new se(r))}if(n instanceof Qe)return gm(t,n._key);throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rc(n)}.`)}function tg(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oT(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $N{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[za].arrayValue?.values?.map(r=>He(r.doubleValue));return new An(n)}convertGeoPoint(e){return new bn(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ce(AE(r),9688,{name:e});const s=new ao(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jr extends iT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jr._jsonSchema={type:Ge("string",Jr._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class wa extends Jr{data(e={}){return super.data(e)}}class Ms{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wa(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new wa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new wa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Pi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:BN(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){t=Gn(t,Qe);const e=Gn(t.firestore,ni);return TN(cf(e),t._key).then(n=>GN(e,t,n))}Ms._jsonSchemaVersion="firestore/querySnapshot/1.0",Ms._jsonSchema={type:Ge("string",Ms._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class aT extends $N{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function HN(t){t=Gn(t,xr);const e=Gn(t.firestore,ni),n=cf(e),r=new aT(e);return MN(t._query),IN(n,t._query).then(s=>new Ms(e,r,t,s))}function zN(t,e,n,...r){t=Gn(t,Qe);const s=Gn(t.firestore,ni),i=hf(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof Uc?NN(i,"updateDoc",t._key,e,n,r):kN(i,"updateDoc",t._key,e),vf(s,[o.toMutation(t._key,ln.exists(!0))])}function WN(t){return vf(Gn(t.firestore,ni),[new Hh(t._key,ln.none())])}function KN(t,e){const n=Gn(t.firestore,ni),r=Ia(t),s=jN(t.converter,e);return vf(n,[CN(hf(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function vf(t,e){return function(r,s){const i=new jn;return r.asyncQueue.enqueueAndForget(async()=>lN(await EN(r),s,i)),i.promise}(cf(t),e)}function GN(t,e,n){const r=n.docs.get(e._key),s=new aT(t);return new Jr(t,s,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ys=s})(is),Yt(new Bt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ni(new CC(r.getProvider("auth-internal")),new DC(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Et(rm,sm,e),Et(rm,sm,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="firebasestorage.googleapis.com",QN="storageBucket",JN=120*1e3,YN=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Xt{constructor(e,n,r=0){super($l(e),`Firebase Storage: ${n} (${$l(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Cn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $l(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pn||(Pn={}));function $l(t){return"storage/"+t}function XN(){const t="An unknown error occurred, please check the error payload for server response.";return new Cn(Pn.UNKNOWN,t)}function ZN(){return new Cn(Pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eD(){return new Cn(Pn.CANCELED,"User canceled the upload/download.")}function tD(t){return new Cn(Pn.INVALID_URL,"Invalid URL '"+t+"'.")}function nD(t){return new Cn(Pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ng(t){return new Cn(Pn.INVALID_ARGUMENT,t)}function lT(){return new Cn(Pn.APP_DELETED,"The Firebase app was deleted.")}function rD(t){return new Cn(Pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw nD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},O=n===cT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",M=new RegExp(`^https?://${O}/${s}/${N}`,"i"),D=[{regex:c,indices:l,postModify:i},{regex:_,indices:R,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<D.length;H++){const ie=D[H],_e=ie.regex.exec(e);if(_e){const b=_e[ie.indices.bucket];let y=_e[ie.indices.path];y||(y=""),r=new on(b,y),ie.postModify(r);break}}if(r==null)throw tD(e);return r}}class sD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...N){u||(u=!0,e.apply(null,N))}function p(N){s=setTimeout(()=>{s=null,t(_,l())},N)}function m(){i&&clearTimeout(i)}function _(N,...M){if(u){m();return}if(N){m(),f.call(null,N,...M);return}if(l()||o){m(),f.call(null,N,...M);return}r<64&&(r*=2);let D;c===1?(c=2,D=0):D=(r+Math.random())*1e3,p(D)}let R=!1;function O(N){R||(R=!0,m(),!u&&(s!==null?(N||(c=2),clearTimeout(s),p(0)):N||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function oD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){return t!==void 0}function rg(t,e,n,r){if(r<e)throw ng(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ng(`Invalid value for '${t}'. Expected ${n} or less.`)}function cD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var tc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(tc||(tc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,O)=>{this.resolve_=R,this.reject_=O,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ia(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===tc.NO_ERROR,l=i.getStatus();if(!c||lD(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===tc.ABORT;r(!1,new ia(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ia(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());aD(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=XN();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lT():eD();o(l)}else{const l=ZN();o(l)}};this.canceled_?n(!1,new ia(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ia{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mD(t,e,n,r,s,i,o=!0,c=!1){const l=cD(t.urlParams),u=t.url+l,f=Object.assign({},t.headers);return dD(f,e),hD(f,n),fD(f,i),pD(f,r),new uD(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _D(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new nc(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _D(this._location.path)}get storage(){return this._service}get parent(){const e=gD(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new nc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rD(e)}}function sg(t,e){const n=e?.[QN];return n==null?null:on.makeFromBucketSpec(n,t)}function yD(t,e,n,r={}){t.host=`${e}:${n}`;const s=ss(e);s&&(ch(`https://${t.host}/b`),lh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Q_(i,t.app.options.projectId))}class vD{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=cT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JN,this._maxUploadRetryTime=YN,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=sg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=sg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new nc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new sD(lT());{const o=mD(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ig="@firebase/storage",og="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="storage";function ED(t=Eo(),e){t=Fe(t);const r=Yn(t,uT).getImmediate({identifier:e}),s=W_("storage");return s&&TD(r,...s),r}function TD(t,e,n,r={}){yD(t,e,n,r)}function ID(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vD(n,r,s,e,is)}function wD(){Yt(new Bt(uT,ID,"PUBLIC").setMultipleInstances(!0)),Et(ig,og,""),Et(ig,og,"esm2020")}wD();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="analytics",bD="firebase_id",AD="origin",RD=60*1e3,SD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ef="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new yo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new Or("analytics","Analytics",PD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t){if(!t.startsWith(Ef)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return Dt.warn(e.message),""}return t}function hT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ND(t,e){const n=kD("firebase-js-sdk-policy",{createScriptURL:CD}),r=document.createElement("script"),s=`${Ef}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function DD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OD(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await hT(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Dt.error(c)}t("config",s,i)}async function VD(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await hT(n);for(const l of o){const u=c.find(p=>p.measurementId===l),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Dt.error(i)}}function MD(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await VD(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await OD(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Dt.error(c)}}return s}function LD(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=MD(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function xD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ef)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=30,UD=1e3;class $D{constructor(e={},n=UD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fT=new $D;function jD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function BD(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:jD(n)},s=SD.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();c.error?.message&&(o=c.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function qD(t,e=fT,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw jt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new WD;return setTimeout(async()=>{c.abort()},RD),dT({appId:r,apiKey:s,measurementId:i},o,c,e)}async function dT(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=fT){const{appId:i,measurementId:o}=t;try{await HD(r,e)}catch(c){if(o)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw c}try{const c=await BD(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!zD(l)){if(s.deleteThrottleMetadata(i),o)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw c}const u=Number(l?.customData?.httpStatus)===503?lp(n,s.intervalMillis,FD):lp(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,f),Dt.debug(`Calling attemptFetch again in ${u} millis`),dT(t,f,r,s)}}function HD(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zD(t){if(!(t instanceof Xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(){if(uh())try{await hh()}catch(t){return Dt.warn(jt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Dt.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QD(t,e,n,r,s,i,o){const c=qD(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Dt.error(m)),e.push(c);const l=GD().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);xD(i)||ND(i,u.measurementId),s("js",new Date);const p=o?.config??{};return p[AD]="firebase",p.update=!0,f!=null&&(p[bD]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.app=e}_delete(){return delete Qi[this.app.options.appId],Promise.resolve()}}let Qi={},ag=[];const cg={};let jl="dataLayer",YD="gtag",lg,pT,ug=!1;function XD(){const t=[];if(J_()&&t.push("This is a browser extension environment."),Y_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function ZD(t,e,n){XD();const r=t.options.appId;if(!r)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(Qi[r]!=null)throw jt.create("already-exists",{id:r});if(!ug){DD(jl);const{wrappedGtag:i,gtagCore:o}=LD(Qi,ag,cg,jl,YD);pT=i,lg=o,ug=!0}return Qi[r]=QD(t,ag,cg,e,lg,jl,n),new JD(t)}function eO(t=Eo()){t=Fe(t);const e=Yn(t,rc);return e.isInitialized()?e.getImmediate():tO(t)}function tO(t,e={}){const n=Yn(t,rc);if(n.isInitialized()){const s=n.getImmediate();if(wr(e,n.getOptions()))return s;throw jt.create("already-initialized")}return n.initialize({options:e})}function mT(t,e,n,r){t=Fe(t),KD(pT,Qi[t.app.options.appId],e,n,r).catch(s=>Dt.error(s))}const hg="@firebase/analytics",fg="0.10.18";function nO(){Yt(new Bt(rc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ZD(r,s,n)},"PUBLIC")),Yt(new Bt("analytics-internal",t,"PRIVATE")),Et(hg,fg),Et(hg,fg,"esm2020");function t(e){try{const n=e.getProvider(rc).getImmediate();return{logEvent:(r,s,i)=>mT(n,r,s,i)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}nO();const rO={apiKey:"AIzaSyCSO3Jw651S9CZH4Swz7BSKh2x_ydbALVs",authDomain:"ngodingskuyy-id.firebaseapp.com",projectId:"ngodingskuyy-id",storageBucket:"ngodingskuyy-id.firebasestorage.app",messagingSenderId:"140840415909",appId:"1:140840415909:web:446eb243c5f982bf88534c",measurementId:"G-FJDWL4TDR7"},No=uy(rO),oa=AC(No),Ei=bN(No);ED(No);const dg=typeof window<"u"?eO(No):null,Bl=typeof window<"u"?sS(No):null,gT=()=>{const t=o=>{if(!Bl)return{start:()=>console.log(`🏃‍♂️ Performance trace started: ${o}`),stop:()=>console.log(`⏹️ Performance trace stopped: ${o}`),putAttribute:(l,u)=>console.log(`📊 Trace ${o} attribute: ${l} = ${u}`),putMetric:(l,u)=>console.log(`📈 Trace ${o} metric: ${l} = ${u}`)};const c=iS(Bl,o);return{start:()=>c.start(),stop:()=>c.stop(),putAttribute:(l,u)=>c.putAttribute(l,u),putMetric:(l,u)=>c.putMetric(l,u)}};return{createTrace:t,trackPageLoad:o=>{const c=t(`page_load_${o}`);c&&(c.start(),c.putAttribute("page_name",o),document.readyState==="complete"?c.stop():window.addEventListener("load",()=>{c.stop()}))},trackComponentMount:o=>{const c=Bl?Date.now():0,l=t(`component_mount_${o}`);return l&&(l.start(),l.putAttribute("component",o)),{finish:()=>{if(l){const u=Date.now()-c;l.putMetric("mount_time_ms",u),l.stop()}}}},trackAPICall:o=>{const c=Date.now(),l=t(`api_call_${o.replace(/[^a-zA-Z0-9]/g,"_")}`);return l&&(l.start(),l.putAttribute("endpoint",o)),{success:()=>{if(l){const u=Date.now()-c;l.putMetric("duration_ms",u),l.putAttribute("status","success"),l.stop()}},error:u=>{if(l){const f=Date.now()-c;l.putMetric("duration_ms",f),l.putAttribute("status","error"),u&&l.putAttribute("error_code",u),l.stop()}}}},trackUserAction:(o,c)=>{const l=t(`user_action_${o}`);l&&(l.start(),l.putAttribute("action",o),l.putAttribute("target",c),l.putAttribute("timestamp",new Date().toISOString()),setTimeout(()=>{l.stop()},100))},trackNavigation:(o,c)=>{const l=t("navigation");l&&(l.start(),l.putAttribute("from",o),l.putAttribute("to",c),setTimeout(()=>{l.stop()},500))}}},_T=()=>{const t=(o,c)=>{try{dg&&mT(dg,o,c)}catch{}};return{trackEvent:t,trackPageView:o=>{t("page_view",{page_title:o,page_location:window.location.href,timestamp:new Date().toISOString()})},trackButtonClick:(o,c)=>{t("button_click",{button_name:o,location:c||"unknown",timestamp:new Date().toISOString()})},trackJoinCommunity:o=>{t("join_community",{source:o,timestamp:new Date().toISOString()})},trackProjectView:o=>{t("project_view",{project_name:o,timestamp:new Date().toISOString()})},trackPerformanceEvent:(o,c,l)=>{t(`perf_${o}`,{...l,...c,timestamp:new Date().toISOString()})}}},sO={class:"footer"},iO={class:"container"},oO={class:"footer-content"},aO={class:"footer-brand"},cO={class:"brand-description"},lO={class:"social-links"},uO=["title","onClick"],hO={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},fO=["d"],dO={class:"footer-section"},pO={class:"section-title"},mO={class:"link-list"},gO={href:"https://discord.gg/uhZWnUeeW8",target:"_blank",class:"footer-link"},_O={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},yO={href:"mailto:contact@ngodingskuyy.com",class:"footer-link"},vO={class:"footer-section"},EO={class:"section-title"},TO={class:"link-list"},IO={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},wO={href:"mailto:contact@ngodingskuyy.com",class:"footer-link"},bO={href:"https://github.com/ngodingskuyy/ngodingskuyy.github.io",target:"_blank",class:"footer-link"},AO={class:"footer-section"},RO={class:"section-title"},SO={class:"link-list"},PO={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},CO={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},kO={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},NO={class:"footer-bottom"},DO={class:"footer-bottom-content"},OO={class:"copyright"},VO={class:"built-with"},MO=mo({__name:"AppFooter",setup(t){const e=ah(),{t:n}=rh(e),{trackComponentMount:r,trackUserAction:s}=gT(),{trackButtonClick:i}=_T(),o=new Date().getFullYear();fc(async()=>{await r("AppFooter")});const c=async(u,f)=>{await s("social_link_click",u),i(`${u}_footer`,"footer"),window.open(f,"_blank","noopener,noreferrer")},l=[{name:"GitHub",url:"https://github.com/ngodingskuyy",icon:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{name:"Discord",url:"https://discord.gg/uhZWnUeeW8",icon:"M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"},{name:"Email",url:"mailto:contact@ngodingskuyy.com",icon:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"}];return(u,f)=>{const p=KI("RouterLink");return nn(),rn("footer",sO,[C("div",iO,[C("div",oO,[C("div",aO,[f[0]||(f[0]=C("h3",{class:"brand-name"},"NgodingSkuyy",-1)),C("p",cO,ae(ne(n).footer.brandDescription),1),C("div",lO,[(nn(),rn(Wt,null,Kl(l,m=>C("a",{key:m.name,title:m.name,class:"social-link",onClick:Ii(_=>c(m.name,m.url),["prevent"])},[(nn(),rn("svg",hO,[C("path",{d:m.icon},null,8,fO)]))],8,uO)),64))])]),C("div",dO,[C("h4",pO,ae(ne(n).footer.quickLinks.title),1),C("ul",mO,[C("li",null,[ze(p,{to:"/",class:"footer-link"},{default:ur(()=>[Fs(ae(ne(n).footer.quickLinks.home),1)]),_:1})]),C("li",null,[ze(p,{to:"/about",class:"footer-link"},{default:ur(()=>[Fs(ae(ne(n).footer.quickLinks.about),1)]),_:1})]),C("li",null,[C("a",gO,ae(ne(n).footer.quickLinks.discord),1)]),C("li",null,[C("a",_O,ae(ne(n).footer.quickLinks.projects),1)]),C("li",null,[C("a",yO,ae(ne(n).footer.quickLinks.contact),1)])])]),C("div",vO,[C("h4",EO,ae(ne(n).footer.community.title),1),C("ul",TO,[C("li",null,[C("a",IO,ae(ne(n).footer.community.github),1)]),C("li",null,[C("a",wO,ae(ne(n).footer.community.contact),1)]),C("li",null,[C("a",bO,ae(ne(n).footer.community.contribute),1)])])]),C("div",AO,[C("h4",RO,ae(ne(n).footer.resources.title),1),C("ul",SO,[C("li",null,[C("a",PO,ae(ne(n).footer.resources.projects),1)]),C("li",null,[C("a",CO,ae(ne(n).footer.resources.documentation),1)]),C("li",null,[C("a",kO,ae(ne(n).footer.resources.bestPractices),1)])])])]),C("div",NO,[C("div",DO,[C("p",OO,"© "+ae(ne(o))+" NgodingSkuyy. "+ae(ne(n).footer.bottom.madeWith),1),C("p",VO,ae(ne(n).footer.bottom.builtWith),1)])])])])}}}),Tf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LO=Tf(MO,[["__scopeId","data-v-f2740d44"]]),xO={id:"app"},FO={class:"wrapper"},UO={class:"container"},$O={class:"title"},jO={class:"navbar-title"},BO={class:"content"},qO={class:"content-body"},HO={"aria-labelledby":"main-nav-aria-label",class:"navbar-menu menu"},zO=["aria-expanded"],WO={class:"button-text"},KO={class:"flyout-menu"},GO={class:"menu-content"},QO={class:"menu-items"},JO={class:"menu-link"},YO=["aria-expanded"],XO={class:"button-text"},ZO={class:"flyout-menu"},eV={class:"menu-content"},tV={class:"language-items"},nV={class:"language-title"},rV={class:"menu-link"},sV={class:"navbar-appearance appearance"},iV=["title","aria-checked"],oV={class:"switch-check"},aV={class:"switch-icon"},cV={key:0,class:"sun-icon"},lV={key:1,class:"moon-icon"},uV=["aria-expanded"],hV={class:"hamburger-container"},fV={class:"mobile-nav"},dV={class:"mobile-controls"},pV=mo({__name:"App",setup(t){const e=Eb(),n=at(()=>e.name==="home"||e.path==="/"),r=ah(),{currentLocale:s,t:i}=rh(r),{setLocale:o,initLocale:c}=r,l=Rt(!1),u=Rt(!1),f=Rt(!1),p=Rt(!1),m=()=>{l.value=!l.value,localStorage.setItem("darkMode",l.value.toString()),document.documentElement.classList.toggle("dark",l.value)},_=()=>{const L=s.value==="en"?"id":"en";console.log("Switching from",s.value,"to",L),o(L),f.value=!1},R=()=>{u.value=!u.value},O=()=>{f.value=!f.value,p.value=!1},N=()=>{p.value=!p.value,f.value=!1},M=()=>{f.value=!1,p.value=!1};return fc(()=>{c();const L=localStorage.getItem("darkMode");L!==null?l.value=L==="true":l.value=window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",l.value),document.addEventListener("click",D=>{D.target.closest(".navbar")||M()})}),(L,D)=>(nn(),rn("div",xO,[C("header",{class:gn(["vp-nav",{home:n.value}])},[C("div",{class:gn(["navbar",{"navbar-home":n.value}])},[C("div",FO,[C("div",UO,[C("div",$O,[C("div",jO,[ze(ne(vs),{to:"/",class:"title-link",onClick:M},{default:ur(()=>D[8]||(D[8]=[C("img",{src:y0,alt:"NgodingSkuyy",class:"logo"},null,-1),C("span",{class:"title-text"},"NgodingSkuyy",-1)])),_:1,__:[8]})])]),C("div",BO,[C("div",qO,[C("nav",HO,[D[13]||(D[13]=C("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),ze(ne(vs),{to:"/",class:"navbar-menu-link",onClick:M},{default:ur(()=>[C("span",null,ae(ne(i).home),1)]),_:1}),ze(ne(vs),{to:"/about",class:"navbar-menu-link",onClick:M},{default:ur(()=>[C("span",null,ae(ne(i).about),1)]),_:1}),C("div",{class:"flyout navbar-menu-group",onClick:D[0]||(D[0]=Ii(()=>{},["stop"]))},[C("button",{type:"button",class:"flyout-button","aria-haspopup":"true","aria-expanded":p.value,onClick:N},[C("span",WO,[D[10]||(D[10]=C("span",null,"Resources",-1)),C("span",{class:gn(["chevron-down",{rotated:p.value}])},D[9]||(D[9]=[C("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)])],8,zO),ll(C("div",KO,[C("div",GO,[C("div",QO,[C("div",JO,[C("a",{href:"https://discord.gg/uhZWnUeeW8",target:"_blank",rel:"noreferrer",onClick:M},[C("span",null,ae(ne(i).discord),1)])]),C("div",{class:"menu-link"},[C("a",{href:"https://github.com/ngodingskuyy",target:"_blank",rel:"noreferrer",onClick:M},D[11]||(D[11]=[C("span",null,"GitHub Organization",-1)]))]),C("div",{class:"menu-link"},[C("a",{href:"https://github.com/ngodingskuyy/ngodingskuyy.github.io",target:"_blank",rel:"noreferrer",onClick:M},D[12]||(D[12]=[C("span",null,"Contribute",-1)]))])])])],512),[[fl,p.value]])])]),C("div",{class:"flyout navbar-translations translations",onClick:D[1]||(D[1]=Ii(()=>{},["stop"]))},[C("button",{type:"button",class:"flyout-button","aria-haspopup":"true","aria-expanded":f.value,"aria-label":"Change language",onClick:O},[C("span",XO,[D[15]||(D[15]=C("span",{class:"language-icon"},[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})])],-1)),C("span",{class:gn(["chevron-down",{rotated:f.value}])},D[14]||(D[14]=[C("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)])],8,YO),ll(C("div",ZO,[C("div",eV,[C("div",tV,[C("p",nV,ae(ne(s)==="en"?"English":"Indonesian"),1),C("div",rV,[C("a",{href:"#",onClick:Ii(_,["prevent"])},[C("span",null,ae(ne(s)==="en"?"Indonesian":"English"),1)])])])])],512),[[fl,f.value]])]),C("div",sV,[C("button",{class:"appearance-switch",type:"button",role:"switch",title:`Switch to ${l.value?"light":"dark"} theme`,"aria-checked":l.value,onClick:m},[C("span",oV,[C("span",aV,[l.value?(nn(),rn("span",lV,D[17]||(D[17]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"})],-1)]))):(nn(),rn("span",cV,D[16]||(D[16]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 1l3.5 3.5-2.121 2.121L12 5.243 10.621 6.62 8.5 4.5 12 1zM1 12l3.5-3.5 2.121 2.121L5.243 12l1.378 1.379L4.5 15.5 1 12zm22 0l-3.5 3.5-2.121-2.121L18.757 12l-1.378-1.379L19.5 8.5 23 12zM12 23l-3.5-3.5 2.121-2.121L12 18.757l1.379-1.378L15.5 19.5 12 23z"})],-1)])))])])],8,iV)]),D[18]||(D[18]=__('<div class="navbar-social-links social-links" data-v-820a611a><a href="https://github.com/ngodingskuyy" aria-label="github" target="_blank" rel="noopener" class="social-link" data-v-820a611a><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-v-820a611a><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-820a611a></path></svg></a><a href="https://discord.gg/uhZWnUeeW8" aria-label="discord" target="_blank" rel="noopener" class="social-link" data-v-820a611a><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-v-820a611a><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" data-v-820a611a></path></svg></a></div>',1)),C("button",{type:"button",class:"navbar-hamburger hamburger","aria-label":"mobile navigation","aria-expanded":u.value,onClick:R},[C("span",hV,[C("span",{class:gn(["hamburger-line top",{active:u.value}])},null,2),C("span",{class:gn(["hamburger-line middle",{active:u.value}])},null,2),C("span",{class:gn(["hamburger-line bottom",{active:u.value}])},null,2)])],8,uV)])])])]),D[19]||(D[19]=C("div",{class:"divider"},[C("div",{class:"divider-line"})],-1))],2),ll(C("div",{class:"mobile-menu",onClick:D[7]||(D[7]=H=>u.value=!1)},[C("div",{class:"mobile-menu-content",onClick:D[6]||(D[6]=Ii(()=>{},["stop"]))},[C("nav",fV,[ze(ne(vs),{to:"/",class:"mobile-nav-link",onClick:D[2]||(D[2]=H=>u.value=!1)},{default:ur(()=>[Fs(ae(ne(i).home),1)]),_:1}),ze(ne(vs),{to:"/about",class:"mobile-nav-link",onClick:D[3]||(D[3]=H=>u.value=!1)},{default:ur(()=>[Fs(ae(ne(i).about),1)]),_:1}),C("a",{href:"https://discord.gg/uhZWnUeeW8",target:"_blank",class:"mobile-nav-link",onClick:D[4]||(D[4]=H=>u.value=!1)},ae(ne(i).discord),1),C("a",{href:"https://github.com/ngodingskuyy",target:"_blank",class:"mobile-nav-link",onClick:D[5]||(D[5]=H=>u.value=!1)}," GitHub ")]),C("div",dV,[C("button",{onClick:_,class:"mobile-control-btn"},ae(ne(s)==="en"?"Switch to Indonesian":"Switch to English"),1),C("button",{onClick:m,class:"mobile-control-btn"},ae(l.value?"Light Mode":"Dark Mode"),1)])])],512),[[fl,u.value]])],2),C("main",null,[ze(ne(j_))]),ze(LO)]))}}),mV=Tf(pV,[["__scopeId","data-v-820a611a"]]),gV="modulepreload",_V=function(t){return"/"+t},pg={},yV=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=_V(u),u in pg)return;pg[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":gV,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((_,R)=>{m.addEventListener("load",_),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},vV="/images/icons/android-chrome-512x512.png",EV=(t,e)=>{console.error(`Firebase ${e} error:`,t)};class gs{static async create(e,n){try{return(await KN(Jm(Ei,e),{...n,createdAt:new Date,updatedAt:new Date})).id}catch(r){throw EV(r,"create"),r}}static async getById(e,n){try{const r=Ia(Ei,e,n),s=await qN(r);return s.exists()?{id:s.id,...s.data()}:null}catch(r){throw console.error("Error getting document:",r),r}}static async getAll(e,n=[]){try{const r=LN(Jm(Ei,e),...n);return(await HN(r)).docs.map(i=>({id:i.id,...i.data()}))}catch(r){throw console.error("Error getting documents:",r),r}}static async update(e,n,r){try{const s=Ia(Ei,e,n);return await zN(s,{...r,updatedAt:new Date}),!0}catch(s){throw console.error("Error updating document:",s),s}}static async delete(e,n){try{const r=Ia(Ei,e,n);return await WN(r),!0}catch(r){throw console.error("Error deleting document:",r),r}}static where=xN;static orderBy=FN;static limit=UN}const TV={async getProjects(){return gs.getAll("projects",[gs.orderBy("createdAt","desc")])},async getProject(t){return gs.getById("projects",t)},async createProject(t){return gs.create("projects",t)},async updateProject(t,e){return gs.update("projects",t,e)},async deleteProject(t){return gs.delete("projects",t)}},IV={class:"main-content"},wV={class:"hero"},bV={class:"hero-container"},AV={class:"hero-content"},RV={class:"hero-title"},SV={class:"hero-subtitle"},PV={class:"hero-description"},CV={class:"hero-buttons"},kV={href:"https://github.com/ngodingskuyy",target:"_blank",class:"btn btn-secondary"},NV={class:"features"},DV={class:"container"},OV={class:"section-title"},VV={class:"features-grid"},MV={class:"feature-card"},LV={class:"feature-title"},xV={class:"feature-description"},FV={class:"feature-card"},UV={class:"feature-title"},$V={class:"feature-description"},jV={class:"feature-card"},BV={class:"feature-title"},qV={class:"feature-description"},HV={class:"feature-card"},zV={class:"feature-title"},WV={class:"feature-description"},KV={class:"projects"},GV={class:"container"},QV={class:"section-title"},JV={class:"projects-grid"},YV={class:"project-content"},XV={class:"project-title"},ZV={class:"project-description"},eM={class:"project-tech"},tM={class:"project-footer"},nM=["href","onClick"],rM={class:"cta"},sM={class:"container"},iM={class:"cta-content"},oM={class:"cta-title"},aM={class:"cta-description"},cM={class:"cta-buttons"},lM={href:"https://discord.gg/uhZWnUeeW8",target:"_blank",class:"btn btn-primary discord-btn"},uM=mo({__name:"HomeView",setup(t){const e=ah(),{t:n}=rh(e),{trackPageView:r,trackJoinCommunity:s}=_T(),{trackPageLoad:i,trackComponentMount:o,trackAPICall:c,trackUserAction:l}=gT(),u=Rt([]),f=Rt(!1),p=Rt([{name:"Web Development Starter",description:"A complete starter template for modern web applications",tech:["Vue.js","TypeScript","Vite"],link:"https://github.com/ngodingskuyy"},{name:"API Documentation",description:"Comprehensive API documentation and examples",tech:["Node.js","Express","MongoDB"],link:"https://github.com/ngodingskuyy"},{name:"UI Component Library",description:"Reusable UI components for faster development",tech:["Vue.js","CSS3","JavaScript"],link:"https://github.com/ngodingskuyy"}]),m=async()=>{const N=c("projects");try{f.value=!0;const M=await TV.getProjects();u.value=M.map(L=>({id:L.id,name:L.name||"Untitled Project",description:L.description||"No description available",tech:L.technologies||L.tech||[],link:L.githubUrl||L.link||"#",githubUrl:L.githubUrl,technologies:L.technologies,createdAt:L.createdAt,updatedAt:L.updatedAt})),N.success()}catch{console.log("Firebase projects not available, using static data"),N.error("firebase_unavailable")}finally{f.value=!1}},_=()=>{l("click","join_community_button"),s("hero_cta"),window.open("https://discord.gg/uhZWnUeeW8","_blank")},R=N=>{l("click",`project_${N.replace(/\s+/g,"_").toLowerCase()}`)},O=o("HomeView");return fc(()=>{i("home"),r("Home"),m(),O.finish()}),(N,M)=>(nn(),rn("main",IV,[C("section",wV,[C("div",bV,[C("div",AV,[M[0]||(M[0]=C("div",{class:"hero-logo"},[C("img",{src:vV,alt:"NgodingSkuyy Logo",class:"logo-image"})],-1)),C("h1",RV,ae(ne(n).hero.title),1),C("p",SV,ae(ne(n).hero.subtitle),1),C("p",PV,ae(ne(n).hero.description),1),C("div",CV,[C("button",{onClick:_,class:"btn btn-primary"},ae(ne(n).hero.ctaJoin),1),C("a",kV,ae(ne(n).hero.ctaExplore),1)])]),M[1]||(M[1]=__('<div class="hero-visual" data-v-222e40ad><div class="code-window" data-v-222e40ad><div class="window-header" data-v-222e40ad><div class="window-controls" data-v-222e40ad><span class="control red" data-v-222e40ad></span><span class="control yellow" data-v-222e40ad></span><span class="control green" data-v-222e40ad></span></div><span class="window-title" data-v-222e40ad>ngoding-skuyy.js</span></div><div class="code-content" data-v-222e40ad><div class="code-line" data-v-222e40ad><span class="keyword" data-v-222e40ad>const </span><span class="variable" data-v-222e40ad>community</span> = { </div><div class="code-line indent" data-v-222e40ad><span class="property" data-v-222e40ad>name</span>: <span class="string" data-v-222e40ad>&#39;NgodingSkuyy&#39;</span>, </div><div class="code-line indent" data-v-222e40ad><span class="property" data-v-222e40ad>mission</span>: <span class="string" data-v-222e40ad>&#39;Building Future&#39;</span>, </div><div class="code-line indent" data-v-222e40ad><span class="property" data-v-222e40ad>values</span>: [<span class="string" data-v-222e40ad>&#39;Learn&#39;</span>, <span class="string" data-v-222e40ad>&#39;Share&#39;</span>, <span class="string" data-v-222e40ad>&#39;Grow&#39;</span>] </div><div class="code-line" data-v-222e40ad>};</div></div></div></div>',1))])]),C("section",NV,[C("div",DV,[C("h2",OV,ae(ne(n).features.title),1),C("div",VV,[C("div",MV,[M[2]||(M[2]=C("div",{class:"feature-icon"},"🚀",-1)),C("h3",LV,ae(ne(n).features.collaboration.title),1),C("p",xV,ae(ne(n).features.collaboration.description),1)]),C("div",FV,[M[3]||(M[3]=C("div",{class:"feature-icon"},"👥",-1)),C("h3",UV,ae(ne(n).features.community.title),1),C("p",$V,ae(ne(n).features.community.description),1)]),C("div",jV,[M[4]||(M[4]=C("div",{class:"feature-icon"},"📚",-1)),C("h3",BV,ae(ne(n).features.learning.title),1),C("p",qV,ae(ne(n).features.learning.description),1)]),C("div",HV,[M[5]||(M[5]=C("div",{class:"feature-icon"},"💡",-1)),C("h3",zV,ae(ne(n).features.opensource.title),1),C("p",WV,ae(ne(n).features.opensource.description),1)])])])]),C("section",KV,[C("div",GV,[C("h2",QV,ae(ne(n).projects.title),1),C("div",JV,[(nn(!0),rn(Wt,null,Kl(p.value,L=>(nn(),rn("div",{key:L.name,class:"project-card"},[C("div",YV,[C("h3",XV,ae(L.name),1),C("p",ZV,ae(L.description),1),C("div",eM,[(nn(!0),rn(Wt,null,Kl(L.tech,D=>(nn(),rn("span",{key:D,class:"tech-tag"},ae(D),1))),128))])]),C("div",tM,[C("a",{href:L.link,target:"_blank",class:"project-link",onClick:D=>R(L.name)},ae(ne(n).projects.viewProject)+" → ",9,nM)])]))),128))])])]),C("section",rM,[C("div",sM,[C("div",iM,[C("h2",oM,ae(ne(n).cta.title),1),C("p",aM,ae(ne(n).cta.description),1),C("div",cM,[C("a",lM,[M[6]||(M[6]=C("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})],-1)),Fs(" "+ae(ne(n).cta.button),1)]),M[7]||(M[7]=C("a",{href:"https://github.com/ngodingskuyy",target:"_blank",class:"btn btn-secondary"}," Join GitHub Organization ",-1)),M[8]||(M[8]=C("a",{href:"mailto:contact@ngodingskuyy.com",class:"btn btn-outline"}," Get in Touch ",-1))])])])])]))}}),hM=Tf(uM,[["__scopeId","data-v-222e40ad"]]),fM=yb({history:Q0("/"),routes:[{path:"/",name:"home",component:hM},{path:"/about",name:"about",component:()=>yV(()=>import("./AboutView-DaQ-Ggl-.js"),__vite__mapDeps([0,1]))}]}),dM=P_("auth",()=>{const t=Rt(null),e=Rt(!0),n=Rt(null),r=at(()=>!!t.value),s=at(()=>t.value?.displayName||t.value?.email||"User");return{user:t,loading:e,error:n,isAuthenticated:r,userDisplayName:s,login:async(f,p)=>{try{n.value=null,e.value=!0;const m=await cP(oa,f,p);return t.value=m.user,m}catch(m){const _=m;throw n.value=_.message,m}finally{e.value=!1}},register:async(f,p,m)=>{try{n.value=null,e.value=!0;const _=await aP(oa,f,p);return m&&_.user&&await uP(_.user,{displayName:m}),t.value=_.user,_}catch(_){const R=_;throw n.value=R.message,_}finally{e.value=!1}},logout:async()=>{try{n.value=null,await pP(oa),t.value=null}catch(f){const p=f;throw n.value=p.message,f}},clearError:()=>{n.value=null},initAuth:()=>{dP(oa,f=>{t.value=f,e.value=!1})}}}),If=l0(mV),pM=f0();If.use(pM);If.use(fM);const mM=dM();mM.initAuth();If.mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})});export{Tf as _,gT as a,_T as b,rn as c,mo as d,C as e,ne as f,Fs as g,nn as h,fc as o,rh as s,ae as t,ah as u};
