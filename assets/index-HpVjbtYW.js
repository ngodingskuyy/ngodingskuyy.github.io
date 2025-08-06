const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-DvLJfSfX.js","assets/AboutView-Bv5paTEP.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ir(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le=Object.freeze({}),wi=Object.freeze([]),Nt=()=>{},Db=()=>!1,wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gc=t=>t.startsWith("onUpdate:"),it=Object.assign,jf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nb=Object.prototype.hasOwnProperty,Pe=(t,e)=>Nb.call(t,e),fe=Array.isArray,Cs=t=>Vu(t)==="[object Map]",$v=t=>Vu(t)==="[object Set]",me=t=>typeof t=="function",Qe=t=>typeof t=="string",ls=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Hf=t=>(Fe(t)||me(t))&&me(t.then)&&me(t.catch),Bv=Object.prototype.toString,Vu=t=>Bv.call(t),qf=t=>Vu(t).slice(8,-1),jv=t=>Vu(t)==="[object Object]",zf=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,No=Ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vb=Ir("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),xu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xb=/-(\w)/g,Ht=xu(t=>t.replace(xb,(e,n)=>n?n.toUpperCase():"")),Mb=/\B([A-Z])/g,Xr=xu(t=>t.replace(Mb,"-$1").toLowerCase()),Ms=xu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ts=xu(t=>t?`on${Ms(t)}`:""),Wr=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ta=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Lb=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bm;const Ia=()=>bm||(bm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kf(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?Bb(r):Kf(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Fe(t))return t}const Fb=/;(?![^(]*\))/g,Ub=/:([^]+)/,$b=/\/\*[^]*?\*\//g;function Bb(t){const e={};return t.replace($b,"").split(Fb).forEach(n=>{if(n){const r=n.split(Ub);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Bn(t){let e="";if(Qe(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Bn(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jb="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Hb="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",qb="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",zb=Ir(jb),Kb=Ir(Hb),Wb=Ir(qb),Gb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qb=Ir(Gb);function Hv(t){return!!t||t===""}const qv=t=>!!(t&&t.__v_isRef===!0),de=t=>Qe(t)?t:t==null?"":fe(t)||Fe(t)&&(t.toString===Bv||!me(t.toString))?qv(t)?de(t.value):JSON.stringify(t,zv,2):String(t),zv=(t,e)=>qv(e)?zv(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[$l(r,i)+" =>"]=s,n),{})}:$v(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$l(n))}:ls(e)?$l(e):Fe(e)&&!fe(e)&&!jv(e)?String(e):e,$l=(t,e="")=>{var n;return ls(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pn(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Ct;class Kv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}else pn("cannot run an inactive effect scope.")}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wv(t){return new Kv(t)}function Gv(){return Ct}function Yb(t,e=!1){Ct?Ct.cleanups.push(t):e||pn("onScopeDispose() is called when there is no active effect scope to be associated with.")}let Me;const Bl=new WeakSet;class Qv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bl.has(this)&&(Bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Am(this),Xv(this);const e=Me,n=An;Me=this,An=!0;try{return this.fn()}finally{Me!==this&&pn("Active effect was not restored correctly - this is likely a Vue internal bug."),Zv(this),Me=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qf(e);this.deps=this.depsTail=void 0,Am(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rh(this)&&this.run()}get dirty(){return Rh(this)}}let Yv=0,Vo,xo;function Jv(t,e=!1){if(t.flags|=8,e){t.next=xo,xo=t;return}t.next=Vo,Vo=t}function Wf(){Yv++}function Gf(){if(--Yv>0)return;if(xo){let e=xo;for(xo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vo;){let e=Vo;for(Vo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Qf(r),Jb(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Rh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===na)||(t.globalVersion=na,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Rh(t))))return;t.flags|=2;const e=t.dep,n=Me,r=An;Me=t,An=!0;try{Xv(t);const s=t.fn(t._value);(e.version===0||Wr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,An=r,Zv(t),t.flags&=-3}}function Qf(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subsHead===t&&(n.subsHead=s),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Jb(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const tE=[];function Dn(){tE.push(An),An=!1}function Nn(){const t=tE.pop();An=t===void 0?!0:t}function Am(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let na=0;class Xb{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0,this.subsHead=void 0}track(e){if(!Me||!An||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Xb(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,nE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return Me.onTrack&&Me.onTrack(it({effect:Me},e)),n}trigger(e){this.version++,na++,this.notify(e)}notify(e){Wf();try{for(let n=this.subsHead;n;n=n.nextSub)n.sub.onTrigger&&!(n.sub.flags&8)&&n.sub.onTrigger(it({effect:n.sub},e));for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gf()}}}function nE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)nE(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subsHead===void 0&&(t.dep.subsHead=t),t.dep.subs=t}}const Qc=new WeakMap,Ps=Symbol("Object iterate"),Ch=Symbol("Map keys iterate"),ra=Symbol("Array iterate");function ft(t,e,n){if(An&&Me){let r=Qc.get(t);r||Qc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Yf),s.map=r,s.key=n),s.track({target:t,type:e,key:n})}}function Hn(t,e,n,r,s,i){const o=Qc.get(t);if(!o){na++;return}const a=u=>{u&&u.trigger({target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i})};if(Wf(),e==="clear")o.forEach(a);else{const u=fe(t),l=u&&zf(n);if(u&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===ra||!ls(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(ra)),e){case"add":u?l&&a(o.get("length")):(a(o.get(Ps)),Cs(t)&&a(o.get(Ch)));break;case"delete":u||(a(o.get(Ps)),Cs(t)&&a(o.get(Ch)));break;case"set":Cs(t)&&a(o.get(Ps));break}}Gf()}function Zb(t,e){const n=Qc.get(t);return n&&n.get(e)}function oi(t){const e=ye(t);return e===t?e:(ft(e,"iterate",ra),qt(t)?e:e.map(wt))}function Mu(t){return ft(t=ye(t),"iterate",ra),t}const eA={__proto__:null,[Symbol.iterator](){return jl(this,Symbol.iterator,wt)},concat(...t){return oi(this).concat(...t.map(e=>fe(e)?oi(e):e))},entries(){return jl(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return or(this,"every",t,e,void 0,arguments)},filter(t,e){return or(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return or(this,"find",t,e,wt,arguments)},findIndex(t,e){return or(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return or(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return or(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return or(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hl(this,"includes",t)},indexOf(...t){return Hl(this,"indexOf",t)},join(t){return oi(this).join(t)},lastIndexOf(...t){return Hl(this,"lastIndexOf",t)},map(t,e){return or(this,"map",t,e,void 0,arguments)},pop(){return yo(this,"pop")},push(...t){return yo(this,"push",t)},reduce(t,...e){return Sm(this,"reduce",t,e)},reduceRight(t,...e){return Sm(this,"reduceRight",t,e)},shift(){return yo(this,"shift")},some(t,e){return or(this,"some",t,e,void 0,arguments)},splice(...t){return yo(this,"splice",t)},toReversed(){return oi(this).toReversed()},toSorted(t){return oi(this).toSorted(t)},toSpliced(...t){return oi(this).toSpliced(...t)},unshift(...t){return yo(this,"unshift",t)},values(){return jl(this,"values",wt)}};function jl(t,e,n){const r=Mu(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const tA=Array.prototype;function or(t,e,n,r,s,i){const o=Mu(t),a=o!==t&&!qt(t),u=o[e];if(u!==tA[e]){const f=u.apply(t,i);return a?wt(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,wt(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const h=u.call(o,l,r);return a&&s?s(h):h}function Sm(t,e,n,r){const s=Mu(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,a,u){return n.call(this,o,a,u,t)}):i=function(o,a,u){return n.call(this,o,wt(a),u,t)}),s[e](i,...r)}function Hl(t,e,n){const r=ye(t);ft(r,"iterate",ra);const s=r[e](...n);return(s===-1||s===!1)&&sa(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function yo(t,e,n=[]){Dn(),Wf();const r=ye(t)[e].apply(t,n);return Gf(),Nn(),r}const nA=Ir("__proto__,__v_isRef,__isVue"),rE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ls));function rA(t){ls(t)||(t=String(t));const e=ye(this);return ft(e,"has",t),e.hasOwnProperty(t)}class sE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lE:uE:i?cE:aE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let u;if(o&&(u=eA[n]))return u;if(n==="hasOwnProperty")return rA}const a=Reflect.get(e,n,$e(e)?e:r);return(ls(n)?rE.has(n):nA(n))||(s||ft(e,"get",n),i)?a:$e(a)?o&&zf(n)?a:a.value:Fe(a)?s?fE(a):ba(a):a}}class iE extends sE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const u=Xn(i);if(!qt(r)&&!Xn(r)&&(i=ye(i),r=ye(r)),!fe(e)&&$e(i)&&!$e(r))return u?!1:(i.value=r,!0)}const o=fe(e)&&zf(n)?Number(n)<e.length:Pe(e,n),a=Reflect.set(e,n,r,$e(e)?e:s);return e===ye(s)&&(o?Wr(r,i)&&Hn(e,"set",n,r,i):Hn(e,"add",n,r)),a}deleteProperty(e,n){const r=Pe(e,n),s=e[n],i=Reflect.deleteProperty(e,n);return i&&r&&Hn(e,"delete",n,void 0,s),i}has(e,n){const r=Reflect.has(e,n);return(!ls(n)||!rE.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",fe(e)?"length":Ps),Reflect.ownKeys(e)}}class oE extends sE{constructor(e=!1){super(!0,e)}set(e,n){return pn(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0}deleteProperty(e,n){return pn(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}}const sA=new iE,iA=new oE,oA=new iE(!0),aA=new oE(!0),Ph=t=>t,ac=t=>Reflect.getPrototypeOf(t);function cA(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),o=Cs(i),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,l=s[t](...r),h=n?Ph:e?Yc:wt;return!e&&ft(i,"iterate",u?Ch:Ps),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function cc(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";pn(`${Ms(t)} operation ${n}failed: target is readonly.`,ye(this))}return t==="delete"?!1:t==="clear"?void 0:this}}function uA(t,e){const n={get(s){const i=this.__v_raw,o=ye(i),a=ye(s);t||(Wr(s,a)&&ft(o,"get",s),ft(o,"get",a));const{has:u}=ac(o),l=e?Ph:t?Yc:wt;if(u.call(o,s))return l(i.get(s));if(u.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(ye(s),"iterate",Ps),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ye(i),a=ye(s);return t||(Wr(s,a)&&ft(o,"has",s),ft(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,u=ye(a),l=e?Ph:t?Yc:wt;return!t&&ft(u,"iterate",Ps),a.forEach((h,f)=>s.call(i,l(h),l(f),o))}};return it(n,t?{add:cc("add"),set:cc("set"),delete:cc("delete"),clear:cc("clear")}:{add(s){!e&&!qt(s)&&!Xn(s)&&(s=ye(s));const i=ye(this);return ac(i).has.call(i,s)||(i.add(s),Hn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!Xn(i)&&(i=ye(i));const o=ye(this),{has:a,get:u}=ac(o);let l=a.call(o,s);l?Rm(o,a,s):(s=ye(s),l=a.call(o,s));const h=u.call(o,s);return o.set(s,i),l?Wr(i,h)&&Hn(o,"set",s,i,h):Hn(o,"add",s,i),this},delete(s){const i=ye(this),{has:o,get:a}=ac(i);let u=o.call(i,s);u?Rm(i,o,s):(s=ye(s),u=o.call(i,s));const l=a?a.call(i,s):void 0,h=i.delete(s);return u&&Hn(i,"delete",s,void 0,l),h},clear(){const s=ye(this),i=s.size!==0,o=Cs(s)?new Map(s):new Set(s),a=s.clear();return i&&Hn(s,"clear",void 0,void 0,o),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cA(s,t,e)}),n}function Lu(t,e){const n=uA(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const lA={get:Lu(!1,!1)},hA={get:Lu(!1,!0)},fA={get:Lu(!0,!1)},dA={get:Lu(!0,!0)};function Rm(t,e,n){const r=ye(n);if(r!==n&&e.call(t,r)){const s=qf(t);pn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const aE=new WeakMap,cE=new WeakMap,uE=new WeakMap,lE=new WeakMap;function pA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mA(t){return t.__v_skip||!Object.isExtensible(t)?0:pA(qf(t))}function ba(t){return Xn(t)?t:Fu(t,!1,sA,lA,aE)}function hE(t){return Fu(t,!1,oA,hA,cE)}function fE(t){return Fu(t,!0,iA,fA,uE)}function zn(t){return Fu(t,!0,aA,dA,lE)}function Fu(t,e,n,r,s){if(!Fe(t))return pn(`value cannot be made ${e?"readonly":"reactive"}: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=mA(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Sn(t){return Xn(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function sa(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Hr(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&ta(t,"__v_skip",!0),t}const wt=t=>Fe(t)?ba(t):t,Yc=t=>Fe(t)?fE(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function Vt(t){return dE(t,!1)}function gA(t){return dE(t,!0)}function dE(t,e){return $e(t)?t:new _A(t,e)}class _A{constructor(e,n){this.dep=new Yf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track({target:this,type:"get",key:"value"}),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Xn(e);e=r?e:ye(e),Wr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger({target:this,type:"set",key:"value",newValue:e,oldValue:n}))}}function qr(t){return $e(t)?t.value:t}const yA={get:(t,e,n)=>e==="__v_raw"?t:qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pE(t){return Sn(t)?t:new Proxy(t,yA)}function Cm(t){sa(t)||pn("toRefs() expects a reactive object but received a plain one.");const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=mE(t,n);return e}class vA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Zb(ye(this._object),this._key)}}class EA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function wc(t,e,n){return $e(t)?t:me(t)?new EA(t):Fe(t)&&arguments.length>1?mE(t,e,n):Vt(t)}function mE(t,e,n){const r=t[e];return $e(r)?r:new vA(t,e,n)}class TA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Jv(this,!0),!0}get value(){const e=this.dep.track({target:this,type:"get",key:"value"});return eE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter?this.setter(e):pn("Write operation failed: computed value is readonly")}}function wA(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new TA(r,s,n)}const uc={},Jc=new WeakMap;let ws;function IA(t,e=!1,n=ws){if(n){let r=Jc.get(n);r||Jc.set(n,r=[]),r.push(t)}else e||pn("onWatcherCleanup() was called when there was no active watcher to associate with.")}function bA(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:u}=n,l=W=>{(n.onWarn||pn)("Invalid watch source: ",W,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},h=W=>s?W:qt(W)||s===!1||s===0?hr(W,1):hr(W);let f,p,g,v,P=!1,R=!1;if($e(t)?(p=()=>t.value,P=qt(t)):Sn(t)?(p=()=>h(t),P=!0):fe(t)?(R=!0,P=t.some(W=>Sn(W)||qt(W)),p=()=>t.map(W=>{if($e(W))return W.value;if(Sn(W))return h(W);if(me(W))return u?u(W,2):W();l(W)})):me(t)?e?p=u?()=>u(t,2):t:p=()=>{if(g){Dn();try{g()}finally{Nn()}}const W=ws;ws=f;try{return u?u(t,3,[v]):t(v)}finally{ws=W}}:(p=Nt,l(t)),e&&s){const W=p,ae=s===!0?1/0:s;p=()=>hr(W(),ae)}const D=Gv(),M=()=>{f.stop(),D&&D.active&&jf(D.effects,f)};if(i&&e){const W=e;e=(...ae)=>{W(...ae),M()}}let V=R?new Array(t.length).fill(uc):uc;const z=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ae=f.run();if(s||P||(R?ae.some((S,E)=>Wr(S,V[E])):Wr(ae,V))){g&&g();const S=ws;ws=f;try{const E=[ae,V===uc?void 0:R&&V[0]===uc?[]:V,v];V=ae,u?u(e,3,E):e(...E)}finally{ws=S}}}else f.run()};return a&&a(z),f=new Qv(p),f.scheduler=o?()=>o(z,!1):z,v=W=>IA(W,!1,f),g=f.onStop=()=>{const W=Jc.get(f);if(W){if(u)u(W,4);else for(const ae of W)ae();Jc.delete(f)}},f.onTrack=n.onTrack,f.onTrigger=n.onTrigger,e?r?z(!0):V=f.run():o?o(z.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function hr(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))hr(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)hr(t[r],e,n);else if($v(t)||Cs(t))t.forEach(r=>{hr(r,e,n)});else if(jv(t)){for(const r in t)hr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ks=[];function Ic(t){ks.push(t)}function bc(){ks.pop()}let ql=!1;function Q(t,...e){if(ql)return;ql=!0,Dn();const n=ks.length?ks[ks.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=AA();if(r)zi(r,n,11,[t+e.map(i=>{var o,a;return(a=(o=i.toString)==null?void 0:o.call(i))!=null?a:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${qu(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...SA(s)),console.warn(...i)}Nn(),ql=!1}function AA(){let t=ks[ks.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function SA(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...RA(n))}),e}function RA({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${qu(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...CA(t.props),i]:[s+i]}function CA(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...gE(r,t[r]))}),n.length>3&&e.push(" ..."),e}function gE(t,e,n){return Qe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:$e(e)?(e=gE(t,ye(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):me(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ye(e),n?e:[`${t}=`,e])}const Jf={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function zi(t,e,n,r){try{return r?t(...r):t()}catch(s){Aa(s,e,n)}}function Zn(t,e,n,r){if(me(t)){const s=zi(t,e,n,r);return s&&Hf(s)&&s.catch(i=>{Aa(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zn(t[i],e,n,r));return s}else Q(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`)}function Aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let a=e.parent;const u=e.proxy,l=Jf[n];for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,u,l)===!1)return}a=a.parent}if(i){Dn(),zi(i,null,10,[t,u,l]),Nn();return}}PA(t,n,s,r,o)}function PA(t,e,n,r=!0,s=!1){{const i=Jf[e];if(n&&Ic(n),Q(`Unhandled error${i?` during execution of ${i}`:""}`),n&&bc(),r)throw t;console.error(t)}}const $t=[];let Un=-1;const Ii=[];let Nr=null,fi=0;const _E=Promise.resolve();let Xc=null;const kA=100;function Zc(t){const e=Xc||_E;return t?e.then(this?t.bind(this):t):e}function OA(t){let e=Un+1,n=$t.length;for(;e<n;){const r=e+n>>>1,s=$t[r],i=ia(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Uu(t){if(!(t.flags&1)){const e=ia(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=ia(n)?$t.push(t):$t.splice(OA(e),0,t),t.flags|=1,yE()}}function yE(){Xc||(Xc=_E.then(TE))}function vE(t){fe(t)?Ii.push(...t):Nr&&t.id===-1?Nr.splice(fi+1,0,t):t.flags&1||(Ii.push(t),t.flags|=1),yE()}function Pm(t,e,n=Un+1){for(e=e||new Map;n<$t.length;n++){const r=$t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid||Xf(e,r))continue;$t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function EE(t){if(Ii.length){const e=[...new Set(Ii)].sort((n,r)=>ia(n)-ia(r));if(Ii.length=0,Nr){Nr.push(...e);return}for(Nr=e,t=t||new Map,fi=0;fi<Nr.length;fi++){const n=Nr[fi];Xf(t,n)||(n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2)}Nr=null,fi=0}}const ia=t=>t.id==null?t.flags&2?-1:1/0:t.id;function TE(t){t=t||new Map;const e=n=>Xf(t,n);try{for(Un=0;Un<$t.length;Un++){const n=$t[Un];if(n&&!(n.flags&8)){if(e(n))continue;n.flags&4&&(n.flags&=-2),zi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2)}}}finally{for(;Un<$t.length;Un++){const n=$t[Un];n&&(n.flags&=-2)}Un=-1,$t.length=0,EE(t),Xc=null,($t.length||Ii.length)&&TE(t)}}function Xf(t,e){const n=t.get(e)||0;if(n>kA){const r=e.i,s=r&&cd(r.type);return Aa(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}return t.set(e,n+1),!1}let Kn=!1;const Ac=new Map;Ia().__VUE_HMR_RUNTIME__={createRecord:zl(wE),rerender:zl(VA),reload:zl(xA)};const Ls=new Map;function DA(t){const e=t.type.__hmrId;let n=Ls.get(e);n||(wE(e,t.type),n=Ls.get(e)),n.instances.add(t)}function NA(t){Ls.get(t.type.__hmrId).instances.delete(t)}function wE(t,e){return Ls.has(t)?!1:(Ls.set(t,{initialDef:eu(e),instances:new Set}),!0)}function eu(t){return ZE(t)?t.__vccOpts:t}function VA(t,e){const n=Ls.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,eu(r.type).render=e),r.renderCache=[],Kn=!0,r.update(),Kn=!1}))}function xA(t,e){const n=Ls.get(t);if(!n)return;e=eu(e),km(n.initialDef,e);const r=[...n.instances];for(let s=0;s<r.length;s++){const i=r[s],o=eu(i.type);let a=Ac.get(o);a||(o!==n.initialDef&&km(o,e),Ac.set(o,a=new Set)),a.add(i),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(a.add(i),i.ceReload(e.styles),a.delete(i)):i.parent?Uu(()=>{Kn=!0,i.parent.update(),Kn=!1,a.delete(i)}):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required."),i.root.ce&&i!==i.root&&i.root.ce._removeChildStyle(o)}vE(()=>{Ac.clear()})}function km(t,e){it(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function zl(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let qn,bo=[],kh=!1;function Sa(t,...e){qn?qn.emit(t,...e):kh||bo.push({event:t,args:e})}function IE(t,e){var n,r;qn=t,qn?(qn.enabled=!0,bo.forEach(({event:s,args:i})=>qn.emit(s,...i)),bo=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{IE(i,e)}),setTimeout(()=>{qn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,kh=!0,bo=[])},3e3)):(kh=!0,bo=[])}function MA(t,e){Sa("app:init",t,e,{Fragment:tn,Text:Ca,Comment:Cn,Static:Fo})}function LA(t){Sa("app:unmount",t)}const FA=Zf("component:added"),bE=Zf("component:updated"),UA=Zf("component:removed"),$A=t=>{qn&&typeof qn.cleanupBuffer=="function"&&!qn.cleanupBuffer(t)&&UA(t)};/*! #__NO_SIDE_EFFECTS__ */function Zf(t){return e=>{Sa(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const BA=AE("perf:start"),jA=AE("perf:end");function AE(t){return(e,n,r)=>{Sa(t,e.appContext.app,e.uid,e,n,r)}}function HA(t,e,n){Sa("component:emit",t.appContext.app,t,e,n)}let xt=null,SE=null;function tu(t){const e=xt;return xt=t,SE=t&&t.type.__scopeId||null,e}function Mr(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Hm(-1);const i=tu(e);let o;try{o=t(...s)}finally{tu(i),r._d&&Hm(1)}return bE(e),o};return r._n=!0,r._c=!0,r._d=!0,r}function RE(t){Vb(t)&&Q("Do not use built-in directive ids as custom directive id: "+t)}function Kl(t,e){if(xt===null)return Q("withDirectives can only be used inside render functions."),t;const n=Hu(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,u=Le]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&hr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:u}))}return t}function vs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let u=a.dir[r];u&&(Dn(),Zn(u,n,8,[t.el,a,t,e]),Nn())}}const qA=Symbol("_vte"),zA=t=>t.__isTeleport;function ed(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ed(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ra(t,e){return me(t)?it({name:t.name},e,{setup:t}):t}function CE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const KA=new WeakSet;function Mo(t,e,n,r,s=!1){if(fe(t)){t.forEach((v,P)=>Mo(v,e&&(fe(e)?e[P]:e),n,r,s));return}if(Lo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Hu(r.component):r.el,o=s?null:i,{i:a,r:u}=t;if(!a){Q("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const l=e&&e.r,h=a.refs===Le?a.refs={}:a.refs,f=a.setupState,p=ye(f),g=f===Le?()=>!1:v=>(Pe(p,v)&&!$e(p[v])&&Q(`Template ref "${v}" used on a non-ref value. It will not work in the production build.`),KA.has(p[v])?!1:Pe(p,v));if(l!=null&&l!==u&&(Qe(l)?(h[l]=null,g(l)&&(f[l]=null)):$e(l)&&(l.value=null)),me(u))zi(u,a,12,[o,h]);else{const v=Qe(u),P=$e(u);if(v||P){const R=()=>{if(t.f){const D=v?g(u)?f[u]:h[u]:u.value;s?fe(D)&&jf(D,i):fe(D)?D.includes(i)||D.push(i):v?(h[u]=[i],g(u)&&(f[u]=h[u])):(u.value=[i],t.k&&(h[t.k]=u.value))}else v?(h[u]=o,g(u)&&(f[u]=o)):P?(u.value=o,t.k&&(h[t.k]=o)):Q("Invalid template ref type:",u,`(${typeof u})`)};o?(R.id=-1,Zt(R,n)):R()}else Q("Invalid template ref type:",u,`(${typeof u})`)}}Ia().requestIdleCallback;Ia().cancelIdleCallback;const Lo=t=>!!t.type.__asyncLoader,td=t=>t.type.__isKeepAlive;function WA(t,e){PE(t,"a",e)}function GA(t,e){PE(t,"da",e)}function PE(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($u(e,r,n),n){let s=n.parent;for(;s&&s.parent;)td(s.parent.vnode)&&QA(r,e,n,s),s=s.parent}}function QA(t,e,n,r){const s=$u(e,t,r,!0);kE(()=>{jf(r[e],s)},n)}function $u(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Dn();const a=Pa(n),u=Zn(e,n,t,o);return a(),Nn(),u});return r?s.unshift(i):s.push(i),i}else{const s=Ts(Jf[t].replace(/ hook$/,""));Q(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const br=t=>(e,n=dt)=>{(!aa||t==="sp")&&$u(t,(...r)=>e(...r),n)},YA=br("bm"),Bu=br("m"),JA=br("bu"),XA=br("u"),ZA=br("bum"),kE=br("um"),eS=br("sp"),tS=br("rtg"),nS=br("rtc");function rS(t,e=dt){$u("ec",t,e)}const sS="components";function iS(t,e){return aS(sS,t,!0,e)||t}const oS=Symbol.for("v-ndc");function aS(t,e,n=!0,r=!1){const s=xt||dt;if(s){const i=s.type;{const a=cd(i,!1);if(a&&(a===e||a===Ht(e)||a===Ms(Ht(e))))return i}const o=Om(s[t]||i[t],e)||Om(s.appContext[t],e);return!o&&r?i:(n&&!o&&Q(`Failed to resolve ${t.slice(0,-1)}: ${e}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`),o)}else Q(`resolve${Ms(t.slice(0,-1))} can only be used in render() or setup().`)}function Om(t,e){return t&&(t[e]||t[Ht(e)]||t[Ms(Ht(e))])}function Oh(t,e,n,r){let s;const i=n,o=fe(t);if(o||Qe(t)){const a=o&&Sn(t);let u=!1,l=!1;a&&(u=!qt(t),l=Xn(t),t=Mu(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(u?l?Yc(wt(t[h])):wt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){Number.isInteger(t)||Q(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(a,u)=>e(a,u,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let u=0,l=a.length;u<l;u++){const h=a[u];s[u]=e(t[h],h,u,i)}}else s=[];return s}const Dh=t=>t?JE(t)?Hu(t):Dh(t.parent):null,Os=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>zn(t.props),$attrs:t=>zn(t.attrs),$slots:t=>zn(t.slots),$refs:t=>zn(t.refs),$parent:t=>Dh(t.parent),$root:t=>Dh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>NE(t),$forceUpdate:t=>t.f||(t.f=()=>{Uu(t.update)}),$nextTick:t=>t.n||(t.n=Zc.bind(t.proxy)),$watch:t=>BS.bind(t)}),nd=t=>t==="_"||t==="$",Wl=(t,e)=>t!==Le&&!t.__isScriptSetup&&Pe(t,e),OE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:u}=t;if(e==="__isVue")return!0;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wl(r,e))return o[e]=1,r[e];if(s!==Le&&Pe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Pe(l,e))return o[e]=3,i[e];if(n!==Le&&Pe(n,e))return o[e]=4,n[e];Nh&&(o[e]=0)}}const h=Os[e];let f,p;if(h)return e==="$attrs"?(ft(t.attrs,"get",""),su()):e==="$slots"&&ft(t,"get",e),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Le&&Pe(n,e))return o[e]=4,n[e];if(p=u.config.globalProperties,Pe(p,e))return p[e];xt&&(!Qe(e)||e.indexOf("__v")!==0)&&(s!==Le&&nd(e[0])&&Pe(s,e)?Q(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===xt&&Q(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wl(s,e)?(s[e]=n,!0):s.__isScriptSetup&&Pe(s,e)?(Q(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==Le&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)?(Q(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(Q(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Le&&Pe(t,o)||Wl(e,o)||(a=i[0])&&Pe(a,o)||Pe(r,o)||Pe(Os,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};OE.ownKeys=t=>(Q("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function cS(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(Os).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>Os[n](t),set:Nt})}),e}function uS(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:Nt})})}function lS(t){const{ctx:e,setupState:n}=t;Object.keys(ye(n)).forEach(r=>{if(!n.__isScriptSetup){if(nd(r[0])){Q(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:Nt})}})}function Dm(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function hS(){const t=Object.create(null);return(e,n)=>{t[n]?Q(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Nh=!0;function fS(t){const e=NE(t),n=t.proxy,r=t.ctx;Nh=!1,e.beforeCreate&&Nm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:u,inject:l,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:v,activated:P,deactivated:R,beforeDestroy:D,beforeUnmount:M,destroyed:V,unmounted:z,render:W,renderTracked:ae,renderTriggered:S,errorCaptured:E,serverPrefetch:I,expose:T,inheritAttrs:w,components:C,directives:b,filters:Be}=e,Ke=hS();{const[J]=t.propsOptions;if(J)for(const he in J)Ke("Props",he)}if(l&&dS(l,r,Ke),o)for(const J in o){const he=o[J];me(he)?(Object.defineProperty(r,J,{value:he.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ke("Methods",J)):Q(`Method "${J}" has type "${typeof he}" in the component definition. Did you reference the function correctly?`)}if(s){me(s)||Q("The data option must be a function. Plain object usage is no longer supported.");const J=s.call(n,n);if(Hf(J)&&Q("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Fe(J))Q("data() should return an object.");else{t.data=ba(J);for(const he in J)Ke("Data",he),nd(he[0])||Object.defineProperty(r,he,{configurable:!0,enumerable:!0,get:()=>J[he],set:Nt})}}if(Nh=!0,i)for(const J in i){const he=i[J],we=me(he)?he.bind(n,n):me(he.get)?he.get.bind(n,n):Nt;we===Nt&&Q(`Computed property "${J}" has no getter.`);const _t=!me(he)&&me(he.set)?he.set.bind(n):()=>{Q(`Write operation failed: computed property "${J}" is readonly.`)},ot=pt({get:we,set:_t});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ve=>ot.value=Ve}),Ke("Computed",J)}if(a)for(const J in a)DE(a[J],r,n,J);if(u){const J=me(u)?u.call(n):u;Reflect.ownKeys(J).forEach(he=>{Sc(he,J[he])})}h&&Nm(h,t,"c");function Ne(J,he){fe(he)?he.forEach(we=>J(we.bind(n))):he&&J(he.bind(n))}if(Ne(YA,f),Ne(Bu,p),Ne(JA,g),Ne(XA,v),Ne(WA,P),Ne(GA,R),Ne(rS,E),Ne(nS,ae),Ne(tS,S),Ne(ZA,M),Ne(kE,z),Ne(eS,I),fe(T))if(T.length){const J=t.exposed||(t.exposed={});T.forEach(he=>{Object.defineProperty(J,he,{get:()=>n[he],set:we=>n[he]=we,enumerable:!0})})}else t.exposed||(t.exposed={});W&&t.render===Nt&&(t.render=W),w!=null&&(t.inheritAttrs=w),C&&(t.components=C),b&&(t.directives=b),I&&CE(t)}function dS(t,e,n=Nt){fe(t)&&(t=Vh(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Rn(s.from||r,s.default,!0):i=Rn(s.from||r):i=Rn(s),$e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function Nm(t,e,n){Zn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function DE(t,e,n,r){let s=r.includes(".")?qE(n,r):()=>n[r];if(Qe(t)){const i=e[t];me(i)?Ns(s,i):Q(`Invalid watch handler specified by key "${t}"`,i)}else if(me(t))Ns(s,t.bind(n));else if(Fe(t))if(fe(t))t.forEach(i=>DE(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)?Ns(s,i,t):Q(`Invalid watch handler specified by key "${t.handler}"`,i)}else Q(`Invalid watch option: "${r}"`,t)}function NE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let u;return a?u=a:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(l=>nu(u,l,o,!0)),nu(u,e,o)),Fe(e)&&i.set(e,u),u}function nu(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&nu(t,i,n,!0),s&&s.forEach(o=>nu(t,o,n,!0));for(const o in e)if(r&&o==="expose")Q('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=pS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const pS={data:Vm,props:xm,emits:xm,methods:Ao,computed:Ao,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Ao,directives:Ao,watch:gS,provide:Vm,inject:mS};function Vm(t,e){return e?t?function(){return it(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function mS(t,e){return Ao(Vh(t),Vh(e))}function Vh(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Ao(t,e){return t?it(Object.create(null),t,e):e}function xm(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:it(Object.create(null),Dm(t),Dm(e??{})):e}function gS(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function VE(){return{app:null,config:{isNativeTag:Db,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _S=0;function yS(t,e){return function(r,s=null){me(r)||(r=it({},r)),s!=null&&!Fe(s)&&(Q("root props passed to app.mount() must be an object."),s=null);const i=VE(),o=new WeakSet,a=[];let u=!1;const l=i.app={_uid:_S++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Km,get config(){return i.config},set config(h){Q("app.config cannot be replaced. Modify individual options instead.")},use(h,...f){return o.has(h)?Q("Plugin has already been applied to target app."):h&&me(h.install)?(o.add(h),h.install(l,...f)):me(h)?(o.add(h),h(l,...f)):Q('A plugin must either be a function or an object with an "install" function.'),l},mixin(h){return i.mixins.includes(h)?Q("Mixin has already been applied to target app"+(h.name?`: ${h.name}`:"")):i.mixins.push(h),l},component(h,f){return $h(h,i.config),f?(i.components[h]&&Q(`Component "${h}" has already been registered in target app.`),i.components[h]=f,l):i.components[h]},directive(h,f){return RE(h),f?(i.directives[h]&&Q(`Directive "${h}" has already been registered in target app.`),i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(u)Q("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{h.__vue_app__&&Q("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const g=l._ceVNode||et(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),i.reload=()=>{const v=Zr(g);v.el=null,t(v,h,p)},t(g,h,p),u=!0,l._container=h,h.__vue_app__=l,l._instance=g.component,MA(l,Km),Hu(g.component)}},onUnmount(h){typeof h!="function"&&Q(`Expected function as first argument to app.onUnmount(), but got ${typeof h}`),a.push(h)},unmount(){u?(Zn(a,l._instance,16),t(null,l._container),l._instance=null,LA(l),delete l._container.__vue_app__):Q("Cannot unmount an app that is not mounted.")},provide(h,f){return h in i.provides&&(Pe(i.provides,h)?Q(`App already provides property with key "${String(h)}". It will be overwritten with the new value.`):Q(`App already provides property with key "${String(h)}" inherited from its parent element. It will be overwritten with the new value.`)),i.provides[h]=f,l},runWithContext(h){const f=Ds;Ds=l;try{return h()}finally{Ds=f}}};return l}}let Ds=null;function Sc(t,e){if(!dt)Q("provide() can only be used inside setup().");else{let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Rn(t,e,n=!1){const r=Ki();if(r||Ds){let s=Ds?Ds._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e;Q(`injection "${String(t)}" not found.`)}else Q("inject() can only be used inside setup() or functional components.")}function vS(){return!!(Ki()||Ds)}const xE={},ME=()=>Object.create(xE),LE=t=>Object.getPrototypeOf(t)===xE;function ES(t,e,n,r=!1){const s={},i=ME();t.propsDefaults=Object.create(null),FE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);$E(e||{},s,t),n?t.props=r?s:hE(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function TS(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function wS(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ye(s),[u]=t.propsOptions;let l=!1;if(!TS(t)&&(r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(ju(t.emitsOptions,p))continue;const g=e[p];if(u)if(Pe(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const v=Ht(p);s[v]=xh(u,a,v,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{FE(t,e,s,i)&&(l=!0);let h;for(const f in a)(!e||!Pe(e,f)&&((h=Xr(f))===f||!Pe(e,h)))&&(u?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=xh(u,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Pe(e,f))&&(delete i[f],l=!0)}l&&Hn(t.attrs,"set",""),$E(e||{},s,t)}function FE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let u in e){if(No(u))continue;const l=e[u];let h;s&&Pe(s,h=Ht(u))?!i||!i.includes(h)?n[h]=l:(a||(a={}))[h]=l:ju(t.emitsOptions,u)||(!(u in r)||l!==r[u])&&(r[u]=l,o=!0)}if(i){const u=ye(n),l=a||Le;for(let h=0;h<i.length;h++){const f=i[h];n[f]=xh(s,u,f,l[f],t,!Pe(l,f))}}return o}function xh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Pe(o,"default");if(a&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&me(u)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const h=Pa(s);r=l[n]=u.call(null,e),h()}}else r=u;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const IS=new WeakMap;function UE(t,e,n=!1){const r=n?IS:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let u=!1;if(!me(t)){const h=f=>{u=!0;const[p,g]=UE(f,e,!0);it(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!u)return Fe(t)&&r.set(t,wi),wi;if(fe(i))for(let h=0;h<i.length;h++){Qe(i[h])||Q("props must be strings when using array syntax.",i[h]);const f=Ht(i[h]);Mm(f)&&(o[f]=Le)}else if(i){Fe(i)||Q("invalid props options",i);for(const h in i){const f=Ht(h);if(Mm(f)){const p=i[h],g=o[f]=fe(p)||me(p)?{type:p}:it({},p),v=g.type;let P=!1,R=!0;if(fe(v))for(let D=0;D<v.length;++D){const M=v[D],V=me(M)&&M.name;if(V==="Boolean"){P=!0;break}else V==="String"&&(R=!1)}else P=me(v)&&v.name==="Boolean";g[0]=P,g[1]=R,(P||Pe(g,"default"))&&a.push(f)}}}const l=[o,a];return Fe(t)&&r.set(t,l),l}function Mm(t){return t[0]!=="$"&&!No(t)?!0:(Q(`Invalid prop name: "${t}" is a reserved property.`),!1)}function bS(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function $E(t,e,n){const r=ye(e),s=n.propsOptions[0],i=Object.keys(t).map(o=>Ht(o));for(const o in s){let a=s[o];a!=null&&AS(o,r[o],a,zn(r),!i.includes(o))}}function AS(t,e,n,r,s){const{type:i,required:o,validator:a,skipCheck:u}=n;if(o&&s){Q('Missing required prop: "'+t+'"');return}if(!(e==null&&!o)){if(i!=null&&i!==!0&&!u){let l=!1;const h=fe(i)?i:[i],f=[];for(let p=0;p<h.length&&!l;p++){const{valid:g,expectedType:v}=RS(e,h[p]);f.push(v||""),l=g}if(!l){Q(CS(t,e,f));return}}a&&!a(e,r)&&Q('Invalid prop: custom validator check failed for prop "'+t+'".')}}const SS=Ir("String,Number,Boolean,Function,Symbol,BigInt");function RS(t,e){let n;const r=bS(e);if(r==="null")n=t===null;else if(SS(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=Fe(t):r==="Array"?n=fe(t):n=t instanceof e;return{valid:n,expectedType:r}}function CS(t,e,n){if(n.length===0)return`Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(Ms).join(" | ")}`;const s=n[0],i=qf(e),o=Lm(e,s),a=Lm(e,i);return n.length===1&&Fm(s)&&!PS(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,Fm(i)&&(r+=`with value ${a}.`),r}function Lm(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Fm(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function PS(...t){return t.some(e=>e.toLowerCase()==="boolean")}const rd=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",sd=t=>fe(t)?t.map(En):[En(t)],kS=(t,e,n)=>{if(e._n)return e;const r=Mr((...s)=>(dt&&!(n===null&&xt)&&!(n&&n.root!==dt.root)&&Q(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),sd(e(...s))),n);return r._c=!1,r},BE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rd(s))continue;const i=t[s];if(me(i))e[s]=kS(s,i,r);else if(i!=null){Q(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=sd(i);e[s]=()=>o}}},jE=(t,e)=>{td(t.vnode)||Q("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=sd(e);t.slots.default=()=>n},Mh=(t,e,n)=>{for(const r in e)(n||!rd(r))&&(t[r]=e[r])},OS=(t,e,n)=>{const r=t.slots=ME();if(t.vnode.shapeFlag&32){const s=e.__;s&&ta(r,"__",s,!0);const i=e._;i?(Mh(r,e,n),n&&ta(r,"_",i,!0)):BE(e,r)}else e&&jE(t,e)},DS=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const a=e._;a?Kn?(Mh(s,e,n),Hn(t,"set","$slots")):n&&a===1?i=!1:Mh(s,e,n):(i=!e.$stable,BE(e,s)),o=e}else e&&(jE(t,e),o={default:1});if(i)for(const a in s)!rd(a)&&o[a]==null&&delete s[a]};let vo,Lr;function ai(t,e){t.appContext.config.performance&&ru()&&Lr.mark(`vue-${e}-${t.uid}`),BA(t,e,ru()?Lr.now():Date.now())}function ci(t,e){if(t.appContext.config.performance&&ru()){const n=`vue-${e}-${t.uid}`,r=n+":end";Lr.mark(r),Lr.measure(`<${qu(t,t.type)}> ${e}`,n,r),Lr.clearMarks(n),Lr.clearMarks(r)}jA(t,e,ru()?Lr.now():Date.now())}function ru(){return vo!==void 0||(typeof window<"u"&&window.performance?(vo=!0,Lr=window.performance):vo=!1),vo}function NS(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Zt=GS;function VS(t){return xS(t)}function xS(t,e){NS();const n=Ia();n.__VUE__=!0,IE(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=Nt,insertStaticContent:v}=t,P=(y,A,N,B=null,F=null,j=null,X=void 0,G=null,K=Kn?!1:!!A.dynamicChildren)=>{if(y===A)return;y&&!Eo(y,A)&&(B=te(y),Re(y,F,j,!0),y=null),A.patchFlag===-2&&(K=!1,A.dynamicChildren=null);const{type:q,ref:ue,shapeFlag:Y}=A;switch(q){case Ca:R(y,A,N,B);break;case Cn:D(y,A,N,B);break;case Fo:y==null?M(A,N,B,X):V(y,A,N,X);break;case tn:b(y,A,N,B,F,j,X,G,K);break;default:Y&1?ae(y,A,N,B,F,j,X,G,K):Y&6?Be(y,A,N,B,F,j,X,G,K):Y&64||Y&128?q.process(y,A,N,B,F,j,X,G,K,Te):Q("Invalid VNode type:",q,`(${typeof q})`)}ue!=null&&F?Mo(ue,y&&y.ref,j,A||y,!A):ue==null&&y&&y.ref!=null&&Mo(y.ref,null,j,y,!0)},R=(y,A,N,B)=>{if(y==null)r(A.el=a(A.children),N,B);else{const F=A.el=y.el;A.children!==y.children&&l(F,A.children)}},D=(y,A,N,B)=>{y==null?r(A.el=u(A.children||""),N,B):A.el=y.el},M=(y,A,N,B)=>{[y.el,y.anchor]=v(y.children,A,N,B,y.el,y.anchor)},V=(y,A,N,B)=>{if(A.children!==y.children){const F=p(y.anchor);W(y),[A.el,A.anchor]=v(A.children,N,F,B)}else A.el=y.el,A.anchor=y.anchor},z=({el:y,anchor:A},N,B)=>{let F;for(;y&&y!==A;)F=p(y),r(y,N,B),y=F;r(A,N,B)},W=({el:y,anchor:A})=>{let N;for(;y&&y!==A;)N=p(y),s(y),y=N;s(A)},ae=(y,A,N,B,F,j,X,G,K)=>{A.type==="svg"?X="svg":A.type==="math"&&(X="mathml"),y==null?S(A,N,B,F,j,X,G,K):T(y,A,F,j,X,G,K)},S=(y,A,N,B,F,j,X,G)=>{let K,q;const{props:ue,shapeFlag:Y,transition:ce,dirs:oe}=y;if(K=y.el=o(y.type,j,ue&&ue.is,ue),Y&8?h(K,y.children):Y&16&&I(y.children,K,null,B,F,Gl(y,j),X,G),oe&&vs(y,null,B,"created"),E(K,y,y.scopeId,X,B),ue){for(const ke in ue)ke!=="value"&&!No(ke)&&i(K,ke,null,ue[ke],j,B);"value"in ue&&i(K,"value",null,ue.value,j),(q=ue.onVnodeBeforeMount)&&Ln(q,B,y)}ta(K,"__vnode",y,!0),ta(K,"__vueParentComponent",B,!0),oe&&vs(y,null,B,"beforeMount");const pe=MS(F,ce);pe&&ce.beforeEnter(K),r(K,A,N),((q=ue&&ue.onVnodeMounted)||pe||oe)&&Zt(()=>{q&&Ln(q,B,y),pe&&ce.enter(K),oe&&vs(y,null,B,"mounted")},F)},E=(y,A,N,B,F)=>{if(N&&g(y,N),B)for(let j=0;j<B.length;j++)g(y,B[j]);if(F){let j=F.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=od(j.children)||j),A===j||WE(j.type)&&(j.ssContent===A||j.ssFallback===A)){const X=F.vnode;E(y,X,X.scopeId,X.slotScopeIds,F.parent)}}},I=(y,A,N,B,F,j,X,G,K=0)=>{for(let q=K;q<y.length;q++){const ue=y[q]=G?Vr(y[q]):En(y[q]);P(null,ue,A,N,B,F,j,X,G)}},T=(y,A,N,B,F,j,X)=>{const G=A.el=y.el;G.__vnode=A;let{patchFlag:K,dynamicChildren:q,dirs:ue}=A;K|=y.patchFlag&16;const Y=y.props||Le,ce=A.props||Le;let oe;if(N&&Es(N,!1),(oe=ce.onVnodeBeforeUpdate)&&Ln(oe,N,A,y),ue&&vs(A,y,N,"beforeUpdate"),N&&Es(N,!0),Kn&&(K=0,X=!1,q=null),(Y.innerHTML&&ce.innerHTML==null||Y.textContent&&ce.textContent==null)&&h(G,""),q?(w(y.dynamicChildren,q,G,N,B,Gl(A,F),j),Lh(y,A)):X||we(y,A,G,null,N,B,Gl(A,F),j,!1),K>0){if(K&16)C(G,Y,ce,N,F);else if(K&2&&Y.class!==ce.class&&i(G,"class",null,ce.class,F),K&4&&i(G,"style",Y.style,ce.style,F),K&8){const pe=A.dynamicProps;for(let ke=0;ke<pe.length;ke++){const Oe=pe[ke],yt=Y[Oe],It=ce[Oe];(It!==yt||Oe==="value")&&i(G,Oe,yt,It,F,N)}}K&1&&y.children!==A.children&&h(G,A.children)}else!X&&q==null&&C(G,Y,ce,N,F);((oe=ce.onVnodeUpdated)||ue)&&Zt(()=>{oe&&Ln(oe,N,A,y),ue&&vs(A,y,N,"updated")},B)},w=(y,A,N,B,F,j,X)=>{for(let G=0;G<A.length;G++){const K=y[G],q=A[G],ue=K.el&&(K.type===tn||!Eo(K,q)||K.shapeFlag&198)?f(K.el):N;P(K,q,ue,null,B,F,j,X,!0)}},C=(y,A,N,B,F)=>{if(A!==N){if(A!==Le)for(const j in A)!No(j)&&!(j in N)&&i(y,j,A[j],null,F,B);for(const j in N){if(No(j))continue;const X=N[j],G=A[j];X!==G&&j!=="value"&&i(y,j,G,X,F,B)}"value"in N&&i(y,"value",A.value,N.value,F)}},b=(y,A,N,B,F,j,X,G,K)=>{const q=A.el=y?y.el:a(""),ue=A.anchor=y?y.anchor:a("");let{patchFlag:Y,dynamicChildren:ce,slotScopeIds:oe}=A;(Kn||Y&2048)&&(Y=0,K=!1,ce=null),oe&&(G=G?G.concat(oe):oe),y==null?(r(q,N,B),r(ue,N,B),I(A.children||[],N,ue,F,j,X,G,K)):Y>0&&Y&64&&ce&&y.dynamicChildren?(w(y.dynamicChildren,ce,N,F,j,X,G),Lh(y,A)):we(y,A,N,ue,F,j,X,G,K)},Be=(y,A,N,B,F,j,X,G,K)=>{A.slotScopeIds=G,y==null?A.shapeFlag&512?F.ctx.activate(A,N,B,X,K):Ke(A,N,B,F,j,X,K):Ne(y,A,K)},Ke=(y,A,N,B,F,j,X)=>{const G=y.component=rR(y,B,F);if(G.type.__hmrId&&DA(G),Ic(y),ai(G,"mount"),td(y)&&(G.ctx.renderer=Te),ai(G,"init"),iR(G,!1,X),ci(G,"init"),Kn&&(y.el=null),G.asyncDep){if(F&&F.registerDep(G,J,X),!y.el){const K=G.subTree=et(Cn);D(null,K,A,N),y.placeholder=K.el}}else J(G,y,A,N,F,j,X);bc(),ci(G,"mount")},Ne=(y,A,N)=>{const B=A.component=y.component;if(KS(y,A,N))if(B.asyncDep&&!B.asyncResolved){Ic(A),he(B,A,N),bc();return}else B.next=A,B.update();else A.el=y.el,B.vnode=A},J=(y,A,N,B,F,j,X)=>{const G=()=>{if(y.isMounted){let{next:Y,bu:ce,u:oe,parent:pe,vnode:ke}=y;{const Yt=HE(y);if(Yt){Y&&(Y.el=ke.el,he(y,Y,X)),Yt.asyncDep.then(()=>{y.isUnmounted||G()});return}}let Oe=Y,yt;Ic(Y||y.vnode),Es(y,!1),Y?(Y.el=ke.el,he(y,Y,X)):Y=ke,ce&&_o(ce),(yt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ln(yt,pe,Y,ke),Es(y,!0),ai(y,"render");const It=$m(y);ci(y,"render");const bt=y.subTree;y.subTree=It,ai(y,"patch"),P(bt,It,f(bt.el),te(bt),y,F,j),ci(y,"patch"),Y.el=It.el,Oe===null&&WS(y,It.el),oe&&Zt(oe,F),(yt=Y.props&&Y.props.onVnodeUpdated)&&Zt(()=>Ln(yt,pe,Y,ke),F),bE(y),bc()}else{let Y;const{el:ce,props:oe}=A,{bm:pe,m:ke,parent:Oe,root:yt,type:It}=y,bt=Lo(A);Es(y,!1),pe&&_o(pe),!bt&&(Y=oe&&oe.onVnodeBeforeMount)&&Ln(Y,Oe,A),Es(y,!0);{yt.ce&&yt.ce._def.shadowRoot!==!1&&yt.ce._injectChildStyle(It),ai(y,"render");const Yt=y.subTree=$m(y);ci(y,"render"),ai(y,"patch"),P(null,Yt,N,B,y,F,j),ci(y,"patch"),A.el=Yt.el}if(ke&&Zt(ke,F),!bt&&(Y=oe&&oe.onVnodeMounted)){const Yt=A;Zt(()=>Ln(Y,Oe,Yt),F)}(A.shapeFlag&256||Oe&&Lo(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&y.a&&Zt(y.a,F),y.isMounted=!0,FA(y),A=N=B=null}};y.scope.on();const K=y.effect=new Qv(G);y.scope.off();const q=y.update=K.run.bind(K),ue=y.job=K.runIfDirty.bind(K);ue.i=y,ue.id=y.uid,K.scheduler=()=>Uu(ue),Es(y,!0),K.onTrack=y.rtc?Y=>_o(y.rtc,Y):void 0,K.onTrigger=y.rtg?Y=>_o(y.rtg,Y):void 0,q()},he=(y,A,N)=>{A.component=y;const B=y.vnode.props;y.vnode=A,y.next=null,wS(y,A.props,B,N),DS(y,A.children,N),Dn(),Pm(y),Nn()},we=(y,A,N,B,F,j,X,G,K=!1)=>{const q=y&&y.children,ue=y?y.shapeFlag:0,Y=A.children,{patchFlag:ce,shapeFlag:oe}=A;if(ce>0){if(ce&128){ot(q,Y,N,B,F,j,X,G,K);return}else if(ce&256){_t(q,Y,N,B,F,j,X,G,K);return}}oe&8?(ue&16&&L(q,F,j),Y!==q&&h(N,Y)):ue&16?oe&16?ot(q,Y,N,B,F,j,X,G,K):L(q,F,j,!0):(ue&8&&h(N,""),oe&16&&I(Y,N,B,F,j,X,G,K))},_t=(y,A,N,B,F,j,X,G,K)=>{y=y||wi,A=A||wi;const q=y.length,ue=A.length,Y=Math.min(q,ue);let ce;for(ce=0;ce<Y;ce++){const oe=A[ce]=K?Vr(A[ce]):En(A[ce]);P(y[ce],oe,N,null,F,j,X,G,K)}q>ue?L(y,F,j,!0,!1,Y):I(A,N,B,F,j,X,G,K,Y)},ot=(y,A,N,B,F,j,X,G,K)=>{let q=0;const ue=A.length;let Y=y.length-1,ce=ue-1;for(;q<=Y&&q<=ce;){const oe=y[q],pe=A[q]=K?Vr(A[q]):En(A[q]);if(Eo(oe,pe))P(oe,pe,N,null,F,j,X,G,K);else break;q++}for(;q<=Y&&q<=ce;){const oe=y[Y],pe=A[ce]=K?Vr(A[ce]):En(A[ce]);if(Eo(oe,pe))P(oe,pe,N,null,F,j,X,G,K);else break;Y--,ce--}if(q>Y){if(q<=ce){const oe=ce+1,pe=oe<ue?A[oe].el:B;for(;q<=ce;)P(null,A[q]=K?Vr(A[q]):En(A[q]),N,pe,F,j,X,G,K),q++}}else if(q>ce)for(;q<=Y;)Re(y[q],F,j,!0),q++;else{const oe=q,pe=q,ke=new Map;for(q=pe;q<=ce;q++){const vt=A[q]=K?Vr(A[q]):En(A[q]);vt.key!=null&&(ke.has(vt.key)&&Q("Duplicate keys found during update:",JSON.stringify(vt.key),"Make sure keys are unique."),ke.set(vt.key,q))}let Oe,yt=0;const It=ce-pe+1;let bt=!1,Yt=0;const Rr=new Array(It);for(q=0;q<It;q++)Rr[q]=0;for(q=oe;q<=Y;q++){const vt=y[q];if(yt>=It){Re(vt,F,j,!0);continue}let un;if(vt.key!=null)un=ke.get(vt.key);else for(Oe=pe;Oe<=ce;Oe++)if(Rr[Oe-pe]===0&&Eo(vt,A[Oe])){un=Oe;break}un===void 0?Re(vt,F,j,!0):(Rr[un-pe]=q+1,un>=Yt?Yt=un:bt=!0,P(vt,A[un],N,null,F,j,X,G,K),yt++)}const ei=bt?LS(Rr):wi;for(Oe=ei.length-1,q=It-1;q>=0;q--){const vt=pe+q,un=A[vt],ti=A[vt+1],ro=vt+1<ue?ti.el||ti.placeholder:B;Rr[q]===0?P(null,un,N,ro,F,j,X,G,K):bt&&(Oe<0||q!==ei[Oe]?Ve(un,N,ro,2):Oe--)}}},Ve=(y,A,N,B,F=null)=>{const{el:j,type:X,transition:G,children:K,shapeFlag:q}=y;if(q&6){Ve(y.component.subTree,A,N,B);return}if(q&128){y.suspense.move(A,N,B);return}if(q&64){X.move(y,A,N,Te);return}if(X===tn){r(j,A,N);for(let Y=0;Y<K.length;Y++)Ve(K[Y],A,N,B);r(y.anchor,A,N);return}if(X===Fo){z(y,A,N);return}if(B!==2&&q&1&&G)if(B===0)G.beforeEnter(j),r(j,A,N),Zt(()=>G.enter(j),F);else{const{leave:Y,delayLeave:ce,afterLeave:oe}=G,pe=()=>{y.ctx.isUnmounted?s(j):r(j,A,N)},ke=()=>{Y(j,()=>{pe(),oe&&oe()})};ce?ce(j,pe,ke):ke()}else r(j,A,N)},Re=(y,A,N,B=!1,F=!1)=>{const{type:j,props:X,ref:G,children:K,dynamicChildren:q,shapeFlag:ue,patchFlag:Y,dirs:ce,cacheIndex:oe}=y;if(Y===-2&&(F=!1),G!=null&&(Dn(),Mo(G,null,N,y,!0),Nn()),oe!=null&&(A.renderCache[oe]=void 0),ue&256){A.ctx.deactivate(y);return}const pe=ue&1&&ce,ke=!Lo(y);let Oe;if(ke&&(Oe=X&&X.onVnodeBeforeUnmount)&&Ln(Oe,A,y),ue&6)Mn(y.component,N,B);else{if(ue&128){y.suspense.unmount(N,B);return}pe&&vs(y,null,A,"beforeUnmount"),ue&64?y.type.remove(y,A,N,Te,B):q&&!q.hasOnce&&(j!==tn||Y>0&&Y&64)?L(q,A,N,!1,!0):(j===tn&&Y&384||!F&&ue&16)&&L(K,A,N),B&&Qt(y)}(ke&&(Oe=X&&X.onVnodeUnmounted)||pe)&&Zt(()=>{Oe&&Ln(Oe,A,y),pe&&vs(y,null,A,"unmounted")},N)},Qt=y=>{const{type:A,el:N,anchor:B,transition:F}=y;if(A===tn){y.patchFlag>0&&y.patchFlag&2048&&F&&!F.persisted?y.children.forEach(X=>{X.type===Cn?s(X.el):Qt(X)}):zt(N,B);return}if(A===Fo){W(y);return}const j=()=>{s(N),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:X,delayLeave:G}=F,K=()=>X(N,j);G?G(y.el,j,K):K()}else j()},zt=(y,A)=>{let N;for(;y!==A;)N=p(y),s(y),y=N;s(A)},Mn=(y,A,N)=>{y.type.__hmrId&&NA(y);const{bum:B,scope:F,job:j,subTree:X,um:G,m:K,a:q,parent:ue,slots:{__:Y}}=y;Um(K),Um(q),B&&_o(B),ue&&fe(Y)&&Y.forEach(ce=>{ue.renderCache[ce]=void 0}),F.stop(),j&&(j.flags|=8,Re(X,y,A,N)),G&&Zt(G,A),Zt(()=>{y.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),$A(y)},L=(y,A,N,B=!1,F=!1,j=0)=>{for(let X=j;X<y.length;X++)Re(y[X],A,N,B,F)},te=y=>{if(y.shapeFlag&6)return te(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const A=p(y.anchor||y.el),N=A&&A[qA];return N?p(N):A};let ee=!1;const ie=(y,A,N)=>{y==null?A._vnode&&Re(A._vnode,null,null,!0):P(A._vnode||null,y,A,null,null,null,N),A._vnode=y,ee||(ee=!0,Pm(),EE(),ee=!1)},Te={p:P,um:Re,m:Ve,r:Qt,mt:Ke,mc:I,pc:we,pbc:w,n:te,o:t};return{render:ie,hydrate:void 0,createApp:yS(ie)}}function Gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Es({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function MS(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lh(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Lh(o,a)),a.type===Ca&&(a.el=o.el),a.type===Cn&&!a.el&&(a.el=o.el),a.el&&(a.el.__vnode=a)}}function LS(t){const e=t.slice(),n=[0];let r,s,i,o,a;const u=t.length;for(r=0;r<u;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function HE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:HE(e)}function Um(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const FS=Symbol.for("v-scx"),US=()=>{{const t=Rn(FS);return t||Q("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function $S(t,e){return id(t,null,e)}function Ns(t,e,n){return me(e)||Q("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),id(t,e,n)}function id(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n;e||(r!==void 0&&Q('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&Q('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&Q('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const a=it({},n);a.onWarn=Q;const u=e&&r||!e&&i!=="post";let l;if(aa){if(i==="sync"){const g=US();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!u){const g=()=>{};return g.stop=Nt,g.resume=Nt,g.pause=Nt,g}}const h=dt;a.call=(g,v,P)=>Zn(g,h,v,P);let f=!1;i==="post"?a.scheduler=g=>{Zt(g,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,v)=>{v?g():Uu(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=bA(t,e,a);return aa&&(l?l.push(p):u&&p()),p}function BS(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?qE(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=Pa(this),a=id(s,i.bind(r),n);return o(),a}function qE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function HS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;{const{emitsOptions:h,propsOptions:[f]}=t;if(h)if(!(e in h))(!f||!(Ts(Ht(e))in f))&&Q(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Ts(Ht(e))}" prop.`);else{const p=h[e];me(p)&&(p(...n)||Q(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&jS(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Qe(h)?h.trim():h)),o.number&&(s=n.map(Lb))),HA(t,e,s);{const h=e.toLowerCase();h!==e&&r[Ts(h)]&&Q(`Event "${h}" is emitted in component ${qu(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xr(e)}" instead of "${e}".`)}let a,u=r[a=Ts(e)]||r[a=Ts(Ht(e))];!u&&i&&(u=r[a=Ts(Xr(e))]),u&&Zn(u,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Zn(l,t,6,s)}}function zE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!me(t)){const u=l=>{const h=zE(l,e,!0);h&&(a=!0,it(o,h))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!a?(Fe(t)&&r.set(t,null),null):(fe(i)?i.forEach(u=>o[u]=null):it(o,i),Fe(t)&&r.set(t,o),o)}function ju(t,e){return!t||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Xr(e))||Pe(t,e))}let Fh=!1;function su(){Fh=!0}function $m(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:u,render:l,renderCache:h,props:f,data:p,setupState:g,ctx:v,inheritAttrs:P}=t,R=tu(t);let D,M;Fh=!1;try{if(n.shapeFlag&4){const W=s||r,ae=g.__isScriptSetup?new Proxy(W,{get(S,E,I){return Q(`Property '${String(E)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(S,E,I)}}):W;D=En(l.call(ae,W,h,zn(f),g,p,v)),M=a}else{const W=e;a===f&&su(),D=En(W.length>1?W(zn(f),{get attrs(){return su(),zn(a)},slots:o,emit:u}):W(zn(f),null)),M=e.props?a:qS(a)}}catch(W){Uo.length=0,Aa(W,t,1),D=et(Cn)}let V=D,z;if(D.patchFlag>0&&D.patchFlag&2048&&([V,z]=KE(D)),M&&P!==!1){const W=Object.keys(M),{shapeFlag:ae}=V;if(W.length){if(ae&7)i&&W.some(Gc)&&(M=zS(M,i)),V=Zr(V,M,!1,!0);else if(!Fh&&V.type!==Cn){const S=Object.keys(a),E=[],I=[];for(let T=0,w=S.length;T<w;T++){const C=S[T];wa(C)?Gc(C)||E.push(C[2].toLowerCase()+C.slice(3)):I.push(C)}I.length&&Q(`Extraneous non-props attributes (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`),E.length&&Q(`Extraneous non-emits event listeners (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Bm(V)||Q("Runtime directive used on component with non-element root node. The directives will not function as intended."),V=Zr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(Bm(V)||Q("Component inside <Transition> renders non-element root node that cannot be animated."),ed(V,n.transition)),z?z(V):D=V,tu(R),D}const KE=t=>{const e=t.children,n=t.dynamicChildren,r=od(e,!1);if(r){if(r.patchFlag>0&&r.patchFlag&2048)return KE(r)}else return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[En(r),o]};function od(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ki(s)){if(s.type!==Cn||s.children==="v-if"){if(n)return;if(n=s,e&&n.patchFlag>0&&n.patchFlag&2048)return od(n.children)}}else return}return n}const qS=t=>{let e;for(const n in t)(n==="class"||n==="style"||wa(n))&&((e||(e={}))[n]=t[n]);return e},zS=(t,e)=>{const n={};for(const r in t)(!Gc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},Bm=t=>t.shapeFlag&7||t.type===Cn;function KS(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:u}=e,l=i.emitsOptions;if((s||a)&&Kn||e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?jm(r,o,l):!!o;if(u&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!ju(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?jm(r,o,l):!0:!!o;return!1}function jm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ju(n,i))return!0}return!1}function WS({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const WE=t=>t.__isSuspense;function GS(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):vE(t)}const tn=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Uo=[];let sn=null;function Tn(t=!1){Uo.push(sn=t?null:[])}function QS(){Uo.pop(),sn=Uo[Uo.length-1]||null}let oa=1;function Hm(t,e=!1){oa+=t,t<0&&sn&&e&&(sn.hasOnce=!0)}function YS(t){return t.dynamicChildren=oa>0?sn||wi:null,QS(),oa>0&&sn&&sn.push(t),t}function wn(t,e,n,r,s,i){return YS(k(t,e,n,r,s,i,!0))}function ki(t){return t?t.__v_isVNode===!0:!1}function Eo(t,e){if(e.shapeFlag&6&&t.component){const n=Ac.get(e.type);if(n&&n.has(t.component))return t.shapeFlag&=-257,e.shapeFlag&=-513,!1}return t.type===e.type&&t.key===e.key}const JS=(...t)=>XS(...t),GE=({key:t})=>t??null,Rc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||$e(t)||me(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===tn?0:1,o=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&GE(e),ref:e&&Rc(e),scopeId:SE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return a?(ad(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=Qe(n)?8:16),u.key!==u.key&&Q("VNode created with invalid key (NaN). VNode type:",u.type),oa>0&&!o&&sn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&sn.push(u),u}const et=JS;function XS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===oS)&&(t||Q(`Invalid vnode type when creating vnode: ${t}.`),t=Cn),ki(t)){const a=Zr(t,e,!0);return n&&ad(a,n),oa>0&&!i&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag=-2,a}if(ZE(t)&&(t=t.__vccOpts),e){e=ZS(e);let{class:a,style:u}=e;a&&!Qe(a)&&(e.class=Bn(a)),Fe(u)&&(sa(u)&&!fe(u)&&(u=it({},u)),e.style=Kf(u))}const o=Qe(t)?1:WE(t)?128:zA(t)?64:Fe(t)?4:me(t)?2:0;return o&4&&sa(t)&&(t=ye(t),Q("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),k(t,e,n,r,s,o,i,!0)}function ZS(t){return t?sa(t)||LE(t)?it({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:u}=t,l=e?eR(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&GE(l),ref:e&&e.ref?n&&i?fe(i)?i.concat(Rc(e)):[i,Rc(e)]:Rc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o===-1&&fe(a)?a.map(QE):a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&ed(h,u.clone(h)),h}function QE(t){const e=Zr(t);return fe(t.children)&&(e.children=t.children.map(QE)),e}function Oi(t=" ",e=0){return et(Ca,null,t,e)}function YE(t,e){const n=et(Fo,null,t);return n.staticCount=e,n}function En(t){return t==null||typeof t=="boolean"?et(Cn):fe(t)?et(tn,null,t.slice()):ki(t)?Vr(t):et(Ca,null,String(t))}function Vr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function ad(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ad(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!LE(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[Oi(e)]):n=8);t.children=e,t.shapeFlag|=n}function eR(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Bn([e.class,r.class]));else if(s==="style")e.style=Kf([e.style,r.style]);else if(wa(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ln(t,e,n,r=null){Zn(t,e,7,[n,r])}const tR=VE();let nR=0;function rR(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||tR,i={uid:nR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:UE(r,s),emitsOptions:zE(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=cS(i),i.root=e?e.root:i,i.emit=HS.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Ki=()=>dt||xt;let iu,Uh;{const t=Ia(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};iu=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Uh=e("__VUE_SSR_SETTERS__",n=>aa=n)}const Pa=t=>{const e=dt;return iu(t),t.scope.on(),()=>{t.scope.off(),iu(e)}},qm=()=>{dt&&dt.scope.off(),iu(null)},sR=Ir("slot,component");function $h(t,{isNativeTag:e}){(sR(t)||e(t))&&Q("Do not use built-in or reserved HTML elements as component id: "+t)}function JE(t){return t.vnode.shapeFlag&4}let aa=!1;function iR(t,e=!1,n=!1){e&&Uh(e);const{props:r,children:s}=t.vnode,i=JE(t);ES(t,r,i,e),OS(t,s,n||e);const o=i?oR(t,e):void 0;return e&&Uh(!1),o}function oR(t,e){var n;const r=t.type;{if(r.name&&$h(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)$h(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)RE(i[o])}r.compilerOptions&&aR()&&Q('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,OE),uS(t);const{setup:s}=r;if(s){Dn();const i=t.setupContext=s.length>1?lR(t):null,o=Pa(t),a=zi(s,t,0,[zn(t.props),i]),u=Hf(a);if(Nn(),o(),(u||t.sp)&&!Lo(t)&&CE(t),u){if(a.then(qm,qm),e)return a.then(l=>{zm(t,l,e)}).catch(l=>{Aa(l,t,0)});if(t.asyncDep=a,!t.suspense){const l=(n=r.name)!=null?n:"Anonymous";Q(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else zm(t,a,e)}else XE(t,e)}function zm(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)?(ki(e)&&Q("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=pE(e),lS(t)):e!==void 0&&Q(`setup() should return an object. Received: ${e===null?"null":typeof e}`),XE(t,n)}const aR=()=>!0;function XE(t,e,n){const r=t.type;t.render||(t.render=r.render||Nt);{const s=Pa(t);Dn();try{fS(t)}finally{Nn(),s()}}!r.render&&t.render===Nt&&!e&&(r.template?Q('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):Q("Component is missing template or render function: ",r))}const cR={get(t,e){return su(),ft(t,"get",""),t[e]},set(){return Q("setupContext.attrs is readonly."),!1},deleteProperty(){return Q("setupContext.attrs is readonly."),!1}};function uR(t){return new Proxy(t.slots,{get(e,n){return ft(t,"get","$slots"),e[n]}})}function lR(t){const e=n=>{if(t.exposed&&Q("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(fe(n)?r="array":$e(n)&&(r="ref")),r!=="object"&&Q(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}};{let n,r;return Object.freeze({get attrs(){return n||(n=new Proxy(t.attrs,cR))},get slots(){return r||(r=uR(t))},get emit(){return(s,...i)=>t.emit(s,...i)},expose:e})}}function Hu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pE(Hr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Os)return Os[n](t)},has(e,n){return n in e||n in Os}})):t.proxy}const hR=/(?:^|[-_])(\w)/g,fR=t=>t.replace(hR,e=>e.toUpperCase()).replace(/[-_]/g,"");function cd(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function qu(t,e,n=!1){let r=cd(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?fR(r):n?"App":"Anonymous"}function ZE(t){return me(t)&&"__vccOpts"in t}const pt=(t,e)=>{const n=wA(t,e,aa);{const r=Ki();r&&r.appContext.config.warnRecursiveComputed&&(n._warnRecursive=!0)}return n};function e0(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!fe(e)?ki(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ki(n)&&(n=[n]),et(t,e,n))}function dR(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#1677ff"},n={style:"color:#f5222d"},r={style:"color:#eb2f96"},s={__vue_custom_formatter:!0,header(f){if(!Fe(f))return null;if(f.__isVue)return["div",t,"VueInstance"];if($e(f)){Dn();const p=f.value;return Nn(),["div",{},["span",t,h(f)],"<",a(p),">"]}else{if(Sn(f))return["div",{},["span",t,qt(f)?"ShallowReactive":"Reactive"],"<",a(f),`>${Xn(f)?" (readonly)":""}`];if(Xn(f))return["div",{},["span",t,qt(f)?"ShallowReadonly":"Readonly"],"<",a(f),">"]}return null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...i(f.$)]}};function i(f){const p=[];f.type.props&&f.props&&p.push(o("props",ye(f.props))),f.setupState!==Le&&p.push(o("setup",f.setupState)),f.data!==Le&&p.push(o("data",ye(f.data)));const g=u(f,"computed");g&&p.push(o("computed",g));const v=u(f,"inject");return v&&p.push(o("injected",v)),p.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),p}function o(f,p){return p=it({},p),Object.keys(p).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(p).map(g=>["div",{},["span",r,g+": "],a(p[g],!1)])]]:["span",{}]}function a(f,p=!0){return typeof f=="number"?["span",e,f]:typeof f=="string"?["span",n,JSON.stringify(f)]:typeof f=="boolean"?["span",r,f]:Fe(f)?["object",{object:p?ye(f):f}]:["span",n,String(f)]}function u(f,p){const g=f.type;if(me(g))return;const v={};for(const P in f.ctx)l(g,P,p)&&(v[P]=f.ctx[P]);return v}function l(f,p,g){const v=f[g];if(fe(v)&&v.includes(p)||Fe(v)&&p in v||f.extends&&l(f.extends,p,g)||f.mixins&&f.mixins.some(P=>l(P,p,g)))return!0}function h(f){return qt(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const Km="3.5.18",pr=Q;/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bh;const Wm=typeof window<"u"&&window.trustedTypes;if(Wm)try{Bh=Wm.createPolicy("vue",{createHTML:t=>t})}catch(t){pr(`Error creating trusted types policy: ${t}`)}const t0=Bh?t=>Bh.createHTML(t):t=>t,pR="http://www.w3.org/2000/svg",mR="http://www.w3.org/1998/Math/MathML",ur=typeof document<"u"?document:null,Gm=ur&&ur.createElement("template"),gR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ur.createElementNS(pR,t):e==="mathml"?ur.createElementNS(mR,t):n?ur.createElement(t,{is:n}):ur.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ur.createTextNode(t),createComment:t=>ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gm.innerHTML=t0(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Gm.content;if(r==="svg"||r==="mathml"){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_R=Symbol("_vtc");function yR(t,e,n){const r=t[_R];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ou=Symbol("_vod"),n0=Symbol("_vsh"),Cc={beforeMount(t,{value:e},{transition:n}){t[ou]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):To(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),To(t,!0),r.enter(t)):r.leave(t,()=>{To(t,!1)}):To(t,e))},beforeUnmount(t,{value:e}){To(t,e)}};Cc.name="show";function To(t,e){t.style.display=e?t[ou]:"none",t[n0]=!e}const vR=Symbol("CSS_VAR_TEXT"),ER=/(^|;)\s*display\s*:/;function TR(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Pc(r,a,"")}else for(const o in e)n[o]==null&&Pc(r,o,"");for(const o in n)o==="display"&&(i=!0),Pc(r,o,n[o])}else if(s){if(e!==n){const o=r[vR];o&&(n+=";"+o),r.cssText=n,i=ER.test(n)}}else e&&t.removeAttribute("style");ou in t&&(t[ou]=i?r.display:"",t[n0]&&(r.display="none"))}const wR=/[^\\];\s*$/,Qm=/\s*!important$/;function Pc(t,e,n){if(fe(n))n.forEach(r=>Pc(t,e,r));else if(n==null&&(n=""),wR.test(n)&&pr(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=IR(t,e);Qm.test(n)?t.setProperty(Xr(r),n.replace(Qm,""),"important"):t[r]=n}}const Ym=["Webkit","Moz","ms"],Ql={};function IR(t,e){const n=Ql[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Ql[e]=r;r=Ms(r);for(let s=0;s<Ym.length;s++){const i=Ym[s]+r;if(i in t)return Ql[e]=i}return e}const Jm="http://www.w3.org/1999/xlink";function Xm(t,e,n,r,s,i=Qb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jm,e.slice(6,e.length)):t.setAttributeNS(Jm,e,n):n==null||i&&!Hv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ls(n)?String(n):n)}function Zm(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?t0(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(a!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Hv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch(a){o||pr(`Failed setting prop "${e}" on <${i.toLowerCase()}>: value ${n} is invalid.`,a)}o&&t.removeAttribute(s||e)}function bR(t,e,n,r){t.addEventListener(e,n,r)}function AR(t,e,n,r){t.removeEventListener(e,n,r)}const eg=Symbol("_vei");function SR(t,e,n,r,s=null){const i=t[eg]||(t[eg]={}),o=i[e];if(r&&o)o.value=ng(r,e);else{const[a,u]=RR(e);if(r){const l=i[e]=kR(ng(r,e),s);bR(t,a,l,u)}else o&&(AR(t,a,o,u),i[e]=void 0)}}const tg=/(?:Once|Passive|Capture)$/;function RR(t){let e;if(tg.test(t)){e={};let r;for(;r=t.match(tg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let Yl=0;const CR=Promise.resolve(),PR=()=>Yl||(CR.then(()=>Yl=0),Yl=Date.now());function kR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zn(OR(r,n.value),e,5,[r])};return n.value=t,n.attached=PR(),n}function ng(t,e){return me(t)||fe(t)?t:(pr(`Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`),Nt)}function OR(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DR=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yR(t,r,o):e==="style"?TR(t,n,r):wa(e)?Gc(e)||SR(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NR(t,e,r,o))?(Zm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?Zm(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xm(t,e,r,o))};function NR(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rg(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rg(e)&&Qe(n)?!1:e in t}const VR=["ctrl","shift","alt","meta"],xR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VR.some(n=>t[`${n}Key`]&&!e.includes(n))},So=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=xR[e[o]];if(a&&a(s,e))return}return t(s,...i)})},MR=it({patchProp:DR},gR);let sg;function LR(){return sg||(sg=VS(MR))}const FR=(...t)=>{const e=LR().createApp(...t);$R(e),BR(e);const{mount:n}=e;return e.mount=r=>{const s=jR(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,UR(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function UR(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $R(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>zb(e)||Kb(e)||Wb(e),writable:!1})}function BR(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){pr("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return pr(r),n},set(){pr(r)}})}}function jR(t){if(Qe(t)){const e=document.querySelector(t);return e||pr(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&pr('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}/**
* vue v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function HR(){dR()}HR();var qR=Object.create,r0=Object.defineProperty,zR=Object.getOwnPropertyDescriptor,ud=Object.getOwnPropertyNames,KR=Object.getPrototypeOf,WR=Object.prototype.hasOwnProperty,GR=(t,e)=>function(){return t&&(e=(0,t[ud(t)[0]])(t=0)),e},QR=(t,e)=>function(){return e||(0,t[ud(t)[0]])((e={exports:{}}).exports,e),e.exports},YR=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ud(e))!WR.call(t,s)&&s!==n&&r0(t,s,{get:()=>e[s],enumerable:!(r=zR(e,s))||r.enumerable});return t},JR=(t,e,n)=>(n=t!=null?qR(KR(t)):{},YR(r0(n,"default",{value:t,enumerable:!0}),t)),ka=GR({"../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"(){}}),XR=QR({"../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(t,e){ka(),e.exports=r;function n(i){return i instanceof Buffer?Buffer.from(i):new i.constructor(i.buffer.slice(),i.byteOffset,i.length)}function r(i){if(i=i||{},i.circles)return s(i);const o=new Map;if(o.set(Date,f=>new Date(f)),o.set(Map,(f,p)=>new Map(u(Array.from(f),p))),o.set(Set,(f,p)=>new Set(u(Array.from(f),p))),i.constructorHandlers)for(const f of i.constructorHandlers)o.set(f[0],f[1]);let a=null;return i.proto?h:l;function u(f,p){const g=Object.keys(f),v=new Array(g.length);for(let P=0;P<g.length;P++){const R=g[P],D=f[R];typeof D!="object"||D===null?v[R]=D:D.constructor!==Object&&(a=o.get(D.constructor))?v[R]=a(D,p):ArrayBuffer.isView(D)?v[R]=n(D):v[R]=p(D)}return v}function l(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return u(f,l);if(f.constructor!==Object&&(a=o.get(f.constructor)))return a(f,l);const p={};for(const g in f){if(Object.hasOwnProperty.call(f,g)===!1)continue;const v=f[g];typeof v!="object"||v===null?p[g]=v:v.constructor!==Object&&(a=o.get(v.constructor))?p[g]=a(v,l):ArrayBuffer.isView(v)?p[g]=n(v):p[g]=l(v)}return p}function h(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return u(f,h);if(f.constructor!==Object&&(a=o.get(f.constructor)))return a(f,h);const p={};for(const g in f){const v=f[g];typeof v!="object"||v===null?p[g]=v:v.constructor!==Object&&(a=o.get(v.constructor))?p[g]=a(v,h):ArrayBuffer.isView(v)?p[g]=n(v):p[g]=h(v)}return p}}function s(i){const o=[],a=[],u=new Map;if(u.set(Date,g=>new Date(g)),u.set(Map,(g,v)=>new Map(h(Array.from(g),v))),u.set(Set,(g,v)=>new Set(h(Array.from(g),v))),i.constructorHandlers)for(const g of i.constructorHandlers)u.set(g[0],g[1]);let l=null;return i.proto?p:f;function h(g,v){const P=Object.keys(g),R=new Array(P.length);for(let D=0;D<P.length;D++){const M=P[D],V=g[M];if(typeof V!="object"||V===null)R[M]=V;else if(V.constructor!==Object&&(l=u.get(V.constructor)))R[M]=l(V,v);else if(ArrayBuffer.isView(V))R[M]=n(V);else{const z=o.indexOf(V);z!==-1?R[M]=a[z]:R[M]=v(V)}}return R}function f(g){if(typeof g!="object"||g===null)return g;if(Array.isArray(g))return h(g,f);if(g.constructor!==Object&&(l=u.get(g.constructor)))return l(g,f);const v={};o.push(g),a.push(v);for(const P in g){if(Object.hasOwnProperty.call(g,P)===!1)continue;const R=g[P];if(typeof R!="object"||R===null)v[P]=R;else if(R.constructor!==Object&&(l=u.get(R.constructor)))v[P]=l(R,f);else if(ArrayBuffer.isView(R))v[P]=n(R);else{const D=o.indexOf(R);D!==-1?v[P]=a[D]:v[P]=f(R)}}return o.pop(),a.pop(),v}function p(g){if(typeof g!="object"||g===null)return g;if(Array.isArray(g))return h(g,p);if(g.constructor!==Object&&(l=u.get(g.constructor)))return l(g,p);const v={};o.push(g),a.push(v);for(const P in g){const R=g[P];if(typeof R!="object"||R===null)v[P]=R;else if(R.constructor!==Object&&(l=u.get(R.constructor)))v[P]=l(R,p);else if(ArrayBuffer.isView(R))v[P]=n(R);else{const D=o.indexOf(R);D!==-1?v[P]=a[D]:v[P]=p(R)}}return o.pop(),a.pop(),v}}}});ka();ka();ka();var s0=typeof navigator<"u",se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof global<"u"?global:{};typeof se.chrome<"u"&&se.chrome.devtools;s0&&(se.self,se.top);var ig;typeof navigator<"u"&&((ig=navigator.userAgent)==null||ig.toLowerCase().includes("electron"));ka();var ZR=JR(XR()),eC=/(?:^|[-_/])(\w)/g;function tC(t,e){return e?e.toUpperCase():""}function nC(t){return t&&`${t}`.replace(eC,tC)}function rC(t,e){let n=t.replace(/^[a-z]:/i,"").replace(/\\/g,"/");n.endsWith(`index${e}`)&&(n=n.replace(`/index${e}`,e));const r=n.lastIndexOf("/"),s=n.substring(r+1);{const i=s.lastIndexOf(e);return s.substring(0,i)}}var og=(0,ZR.default)({circles:!0});const sC={trailing:!0};function Di(t,e=25,n={}){if(n={...sC,...n},!Number.isFinite(e))throw new TypeError("Expected `wait` to be a finite number");let r,s,i=[],o,a;const u=(l,h)=>(o=iC(t,l,h),o.finally(()=>{if(o=null,n.trailing&&a&&!s){const f=u(l,a);return a=null,f}}),o);return function(...l){return o?(n.trailing&&(a=l),o):new Promise(h=>{const f=!s&&n.leading;clearTimeout(s),s=setTimeout(()=>{s=null;const p=n.leading?r:u(this,l);for(const g of i)g(p);i=[]},e),f?(r=u(this,l),h(r)):i.push(h)})}}async function iC(t,e,n){return await t.apply(e,n)}function jh(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?jh(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const oC={run:t=>t()},aC=()=>oC,i0=typeof console.createTask<"u"?console.createTask:aC;function cC(t,e){const n=e.shift(),r=i0(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function uC(t,e){const n=e.shift(),r=i0(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Jl(t,e){for(const n of[...t])n(e)}class lC{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=jh(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=jh(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(cC,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(uC,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Jl(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Jl(this._after,s)}):(this._after&&s&&Jl(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function o0(){return new lC}var hC=Object.create,a0=Object.defineProperty,fC=Object.getOwnPropertyDescriptor,ld=Object.getOwnPropertyNames,dC=Object.getPrototypeOf,pC=Object.prototype.hasOwnProperty,mC=(t,e)=>function(){return t&&(e=(0,t[ld(t)[0]])(t=0)),e},c0=(t,e)=>function(){return e||(0,t[ld(t)[0]])((e={exports:{}}).exports,e),e.exports},gC=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ld(e))!pC.call(t,s)&&s!==n&&a0(t,s,{get:()=>e[s],enumerable:!(r=fC(e,s))||r.enumerable});return t},_C=(t,e,n)=>(n=t!=null?hC(dC(t)):{},gC(a0(n,"default",{value:t,enumerable:!0}),t)),H=mC({"../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"(){}}),yC=c0({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(t,e){H(),function(n){var r={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"Ae",Å:"A",Æ:"AE",Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"Oe",Ő:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"Ue",Ű:"U",Ý:"Y",Þ:"TH",ß:"ss",à:"a",á:"a",â:"a",ã:"a",ä:"ae",å:"a",æ:"ae",ç:"c",è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"oe",ő:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"ue",ű:"u",ý:"y",þ:"th",ÿ:"y","ẞ":"SS",ا:"a",أ:"a",إ:"i",آ:"aa",ؤ:"u",ئ:"e",ء:"a",ب:"b",ت:"t",ث:"th",ج:"j",ح:"h",خ:"kh",د:"d",ذ:"th",ر:"r",ز:"z",س:"s",ش:"sh",ص:"s",ض:"dh",ط:"t",ظ:"z",ع:"a",غ:"gh",ف:"f",ق:"q",ك:"k",ل:"l",م:"m",ن:"n",ه:"h",و:"w",ي:"y",ى:"a",ة:"h",ﻻ:"la",ﻷ:"laa",ﻹ:"lai",ﻵ:"laa",گ:"g",چ:"ch",پ:"p",ژ:"zh",ک:"k",ی:"y","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",က:"k",ခ:"kh",ဂ:"g",ဃ:"ga",င:"ng",စ:"s",ဆ:"sa",ဇ:"z","စျ":"za",ည:"ny",ဋ:"t",ဌ:"ta",ဍ:"d",ဎ:"da",ဏ:"na",တ:"t",ထ:"ta",ဒ:"d",ဓ:"da",န:"n",ပ:"p",ဖ:"pa",ဗ:"b",ဘ:"ba",မ:"m",ယ:"y",ရ:"ya",လ:"l",ဝ:"w",သ:"th",ဟ:"h",ဠ:"la",အ:"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h",ဧ:"e","၏":"-e",ဣ:"i",ဤ:"-i",ဉ:"u",ဦ:"-u",ဩ:"aw","သြော":"aw",ဪ:"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"",č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z",ހ:"h",ށ:"sh",ނ:"n",ރ:"r",ބ:"b",ޅ:"lh",ކ:"k",އ:"a",ވ:"v",މ:"m",ފ:"f",ދ:"dh",ތ:"th",ލ:"l",ގ:"g",ޏ:"gn",ސ:"s",ޑ:"d",ޒ:"z",ޓ:"t",ޔ:"y",ޕ:"p",ޖ:"j",ޗ:"ch",ޘ:"tt",ޙ:"hh",ޚ:"kh",ޛ:"th",ޜ:"z",ޝ:"sh",ޞ:"s",ޟ:"d",ޠ:"t",ޡ:"z",ޢ:"a",ޣ:"gh",ޤ:"q",ޥ:"w","ަ":"a","ާ":"aa","ި":"i","ީ":"ee","ު":"u","ޫ":"oo","ެ":"e","ޭ":"ey","ޮ":"o","ޯ":"oa","ް":"",ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p",ჟ:"zh",რ:"r",ს:"s",ტ:"t",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts",ჭ:"ch",ხ:"kh",ჯ:"j",ჰ:"h",α:"a",β:"v",γ:"g",δ:"d",ε:"e",ζ:"z",η:"i",θ:"th",ι:"i",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"ks",ο:"o",π:"p",ρ:"r",σ:"s",τ:"t",υ:"y",φ:"f",χ:"x",ψ:"ps",ω:"o",ά:"a",έ:"e",ί:"i",ό:"o",ύ:"y",ή:"i",ώ:"o",ς:"s",ϊ:"i",ΰ:"y",ϋ:"y",ΐ:"i",Α:"A",Β:"B",Γ:"G",Δ:"D",Ε:"E",Ζ:"Z",Η:"I",Θ:"TH",Ι:"I",Κ:"K",Λ:"L",Μ:"M",Ν:"N",Ξ:"KS",Ο:"O",Π:"P",Ρ:"R",Σ:"S",Τ:"T",Υ:"Y",Φ:"F",Χ:"X",Ψ:"PS",Ω:"O",Ά:"A",Έ:"E",Ί:"I",Ό:"O",Ύ:"Y",Ή:"I",Ώ:"O",Ϊ:"I",Ϋ:"Y",ā:"a",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",ū:"u",Ā:"A",Ē:"E",Ģ:"G",Ī:"I",Ķ:"k",Ļ:"L",Ņ:"N",Ū:"U",Ќ:"Kj",ќ:"kj",Љ:"Lj",љ:"lj",Њ:"Nj",њ:"nj",Тс:"Ts",тс:"ts",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ś:"S",Ź:"Z",Ż:"Z",Є:"Ye",І:"I",Ї:"Yi",Ґ:"G",є:"ye",і:"i",ї:"yi",ґ:"g",ă:"a",Ă:"A",ș:"s",Ș:"S",ț:"t",Ț:"T",ţ:"t",Ţ:"T",а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"c",ч:"ch",ш:"sh",щ:"sh",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"Yo",Ж:"Zh",З:"Z",И:"I",Й:"I",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"C",Ч:"Ch",Ш:"Sh",Щ:"Sh",Ъ:"",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya",ђ:"dj",ј:"j",ћ:"c",џ:"dz",Ђ:"Dj",Ј:"j",Ћ:"C",Џ:"Dz",ľ:"l",ĺ:"l",ŕ:"r",Ľ:"L",Ĺ:"L",Ŕ:"R",ş:"s",Ş:"S",ı:"i",İ:"I",ğ:"g",Ğ:"G",ả:"a",Ả:"A",ẳ:"a",Ẳ:"A",ẩ:"a",Ẩ:"A",đ:"d",Đ:"D",ẹ:"e",Ẹ:"E",ẽ:"e",Ẽ:"E",ẻ:"e",Ẻ:"E",ế:"e",Ế:"E",ề:"e",Ề:"E",ệ:"e",Ệ:"E",ễ:"e",Ễ:"E",ể:"e",Ể:"E",ỏ:"o",ọ:"o",Ọ:"o",ố:"o",Ố:"O",ồ:"o",Ồ:"O",ổ:"o",Ổ:"O",ộ:"o",Ộ:"O",ỗ:"o",Ỗ:"O",ơ:"o",Ơ:"O",ớ:"o",Ớ:"O",ờ:"o",Ờ:"O",ợ:"o",Ợ:"O",ỡ:"o",Ỡ:"O",Ở:"o",ở:"o",ị:"i",Ị:"I",ĩ:"i",Ĩ:"I",ỉ:"i",Ỉ:"i",ủ:"u",Ủ:"U",ụ:"u",Ụ:"U",ũ:"u",Ũ:"U",ư:"u",Ư:"U",ứ:"u",Ứ:"U",ừ:"u",Ừ:"U",ự:"u",Ự:"U",ữ:"u",Ữ:"U",ử:"u",Ử:"ư",ỷ:"y",Ỷ:"y",ỳ:"y",Ỳ:"Y",ỵ:"y",Ỵ:"Y",ỹ:"y",Ỹ:"Y",ạ:"a",Ạ:"A",ấ:"a",Ấ:"A",ầ:"a",Ầ:"A",ậ:"a",Ậ:"A",ẫ:"a",Ẫ:"A",ắ:"a",Ắ:"A",ằ:"a",Ằ:"A",ặ:"a",Ặ:"A",ẵ:"a",Ẵ:"A","⓪":"0","①":"1","②":"2","③":"3","④":"4","⑤":"5","⑥":"6","⑦":"7","⑧":"8","⑨":"9","⑩":"10","⑪":"11","⑫":"12","⑬":"13","⑭":"14","⑮":"15","⑯":"16","⑰":"17","⑱":"18","⑲":"18","⑳":"18","⓵":"1","⓶":"2","⓷":"3","⓸":"4","⓹":"5","⓺":"6","⓻":"7","⓼":"8","⓽":"9","⓾":"10","⓿":"0","⓫":"11","⓬":"12","⓭":"13","⓮":"14","⓯":"15","⓰":"16","⓱":"17","⓲":"18","⓳":"19","⓴":"20","Ⓐ":"A","Ⓑ":"B","Ⓒ":"C","Ⓓ":"D","Ⓔ":"E","Ⓕ":"F","Ⓖ":"G","Ⓗ":"H","Ⓘ":"I","Ⓙ":"J","Ⓚ":"K","Ⓛ":"L","Ⓜ":"M","Ⓝ":"N","Ⓞ":"O","Ⓟ":"P","Ⓠ":"Q","Ⓡ":"R","Ⓢ":"S","Ⓣ":"T","Ⓤ":"U","Ⓥ":"V","Ⓦ":"W","Ⓧ":"X","Ⓨ":"Y","Ⓩ":"Z","ⓐ":"a","ⓑ":"b","ⓒ":"c","ⓓ":"d","ⓔ":"e","ⓕ":"f","ⓖ":"g","ⓗ":"h","ⓘ":"i","ⓙ":"j","ⓚ":"k","ⓛ":"l","ⓜ":"m","ⓝ":"n","ⓞ":"o","ⓟ":"p","ⓠ":"q","ⓡ":"r","ⓢ":"s","ⓣ":"t","ⓤ":"u","ⓦ":"v","ⓥ":"w","ⓧ":"x","ⓨ":"y","ⓩ":"z","“":'"',"”":'"',"‘":"'","’":"'","∂":"d",ƒ:"f","™":"(TM)","©":"(C)",œ:"oe",Œ:"OE","®":"(R)","†":"+","℠":"(SM)","…":"...","˚":"o",º:"o",ª:"a","•":"*","၊":",","။":".",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY",元:"CNY",円:"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF","₺":"TRY","؋":"AFN","₼":"AZN",лв:"BGN","៛":"KHR","₡":"CRC","₸":"KZT",ден:"MKD",zł:"PLN","₽":"RUB","₾":"GEL"},s=["်","ް"],i={"ာ":"a","ါ":"a","ေ":"e","ဲ":"e","ိ":"i","ီ":"i","ို":"o","ု":"u","ူ":"u","ေါင်":"aung","ော":"aw","ော်":"aw","ေါ":"aw","ေါ်":"aw","်":"်","က်":"et","ိုက်":"aik","ောက်":"auk","င်":"in","ိုင်":"aing","ောင်":"aung","စ်":"it","ည်":"i","တ်":"at","ိတ်":"eik","ုတ်":"ok","ွတ်":"ut","ေတ်":"it","ဒ်":"d","ိုဒ်":"ok","ုဒ်":"ait","န်":"an","ာန်":"an","ိန်":"ein","ုန်":"on","ွန်":"un","ပ်":"at","ိပ်":"eik","ုပ်":"ok","ွပ်":"ut","န်ုပ်":"nub","မ်":"an","ိမ်":"ein","ုမ်":"on","ွမ်":"un","ယ်":"e","ိုလ်":"ol","ဉ်":"in","ံ":"an","ိံ":"ein","ုံ":"on","ައް":"ah","ަށް":"ah"},o={en:{},az:{ç:"c",ə:"e",ğ:"g",ı:"i",ö:"o",ş:"s",ü:"u",Ç:"C",Ə:"E",Ğ:"G",İ:"I",Ö:"O",Ş:"S",Ü:"U"},cs:{č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z"},fi:{ä:"a",Ä:"A",ö:"o",Ö:"O"},hu:{ä:"a",Ä:"A",ö:"o",Ö:"O",ü:"u",Ü:"U",ű:"u",Ű:"U"},lt:{ą:"a",č:"c",ę:"e",ė:"e",į:"i",š:"s",ų:"u",ū:"u",ž:"z",Ą:"A",Č:"C",Ę:"E",Ė:"E",Į:"I",Š:"S",Ų:"U",Ū:"U"},lv:{ā:"a",č:"c",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",š:"s",ū:"u",ž:"z",Ā:"A",Č:"C",Ē:"E",Ģ:"G",Ī:"i",Ķ:"k",Ļ:"L",Ņ:"N",Š:"S",Ū:"u",Ž:"Z"},pl:{ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"e",Ł:"L",Ń:"N",Ó:"O",Ś:"S",Ź:"Z",Ż:"Z"},sv:{ä:"a",Ä:"A",ö:"o",Ö:"O"},sk:{ä:"a",Ä:"A"},sr:{љ:"lj",њ:"nj",Љ:"Lj",Њ:"Nj",đ:"dj",Đ:"Dj"},tr:{Ü:"U",Ö:"O",ü:"u",ö:"o"}},a={ar:{"∆":"delta","∞":"la-nihaya","♥":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","∑":"majmou","¤":"omla"},az:{},ca:{"∆":"delta","∞":"infinit","♥":"amor","&":"i","|":"o","<":"menys que",">":"mes que","∑":"suma dels","¤":"moneda"},cs:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"nebo","<":"mensi nez",">":"vetsi nez","∑":"soucet","¤":"mena"},de:{"∆":"delta","∞":"unendlich","♥":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","∑":"Summe von","¤":"Waehrung"},dv:{"∆":"delta","∞":"kolunulaa","♥":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","∑":"jumula","¤":"faisaa"},en:{"∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less than",">":"greater than","∑":"sum","¤":"currency"},es:{"∆":"delta","∞":"infinito","♥":"amor","&":"y","|":"u","<":"menos que",">":"mas que","∑":"suma de los","¤":"moneda"},fa:{"∆":"delta","∞":"bi-nahayat","♥":"eshgh","&":"va","|":"ya","<":"kamtar-az",">":"bishtar-az","∑":"majmooe","¤":"vahed"},fi:{"∆":"delta","∞":"aarettomyys","♥":"rakkaus","&":"ja","|":"tai","<":"pienempi kuin",">":"suurempi kuin","∑":"summa","¤":"valuutta"},fr:{"∆":"delta","∞":"infiniment","♥":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","∑":"somme des","¤":"monnaie"},ge:{"∆":"delta","∞":"usasruloba","♥":"siqvaruli","&":"da","|":"an","<":"naklebi",">":"meti","∑":"jami","¤":"valuta"},gr:{},hu:{"∆":"delta","∞":"vegtelen","♥":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","∑":"szumma","¤":"penznem"},it:{"∆":"delta","∞":"infinito","♥":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","∑":"somma","¤":"moneta"},lt:{"∆":"delta","∞":"begalybe","♥":"meile","&":"ir","|":"ar","<":"maziau nei",">":"daugiau nei","∑":"suma","¤":"valiuta"},lv:{"∆":"delta","∞":"bezgaliba","♥":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","∑":"summa","¤":"valuta"},my:{"∆":"kwahkhyaet","∞":"asaonasme","♥":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","∑":"paungld","¤":"ngwekye"},mk:{},nl:{"∆":"delta","∞":"oneindig","♥":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","∑":"som","¤":"valuta"},pl:{"∆":"delta","∞":"nieskonczonosc","♥":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","∑":"suma","¤":"waluta"},pt:{"∆":"delta","∞":"infinito","♥":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","∑":"soma","¤":"moeda"},ro:{"∆":"delta","∞":"infinit","♥":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","∑":"suma","¤":"valuta"},ru:{"∆":"delta","∞":"beskonechno","♥":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","∑":"summa","¤":"valjuta"},sk:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","∑":"sucet","¤":"mena"},sr:{},tr:{"∆":"delta","∞":"sonsuzluk","♥":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","∑":"toplam","¤":"para birimi"},uk:{"∆":"delta","∞":"bezkinechnist","♥":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","∑":"suma","¤":"valjuta"},vn:{"∆":"delta","∞":"vo cuc","♥":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","∑":"tong","¤":"tien te"}},u=[";","?",":","@","&","=","+","$",",","/"].join(""),l=[";","?",":","@","&","=","+","$",","].join(""),h=[".","!","~","*","'","(",")"].join(""),f=function(R,D){var M="-",V="",z="",W=!0,ae={},S,E,I,T,w,C,b,Be,Ke,Ne,J,he,we,_t,ot="";if(typeof R!="string")return"";if(typeof D=="string"&&(M=D),b=a.en,Be=o.en,typeof D=="object"){S=D.maintainCase||!1,ae=D.custom&&typeof D.custom=="object"?D.custom:ae,I=+D.truncate>1&&D.truncate||!1,T=D.uric||!1,w=D.uricNoSlash||!1,C=D.mark||!1,W=!(D.symbols===!1||D.lang===!1),M=D.separator||M,T&&(ot+=u),w&&(ot+=l),C&&(ot+=h),b=D.lang&&a[D.lang]&&W?a[D.lang]:W?a.en:{},Be=D.lang&&o[D.lang]?o[D.lang]:D.lang===!1||D.lang===!0?{}:o.en,D.titleCase&&typeof D.titleCase.length=="number"&&Array.prototype.toString.call(D.titleCase)?(D.titleCase.forEach(function(Ve){ae[Ve+""]=Ve+""}),E=!0):E=!!D.titleCase,D.custom&&typeof D.custom.length=="number"&&Array.prototype.toString.call(D.custom)&&D.custom.forEach(function(Ve){ae[Ve+""]=Ve+""}),Object.keys(ae).forEach(function(Ve){var Re;Ve.length>1?Re=new RegExp("\\b"+g(Ve)+"\\b","gi"):Re=new RegExp(g(Ve),"gi"),R=R.replace(Re,ae[Ve])});for(J in ae)ot+=J}for(ot+=M,ot=g(ot),R=R.replace(/(^\s+|\s+$)/g,""),we=!1,_t=!1,Ne=0,he=R.length;Ne<he;Ne++)J=R[Ne],v(J,ae)?we=!1:Be[J]?(J=we&&Be[J].match(/[A-Za-z0-9]/)?" "+Be[J]:Be[J],we=!1):J in r?(Ne+1<he&&s.indexOf(R[Ne+1])>=0?(z+=J,J=""):_t===!0?(J=i[z]+r[J],z=""):J=we&&r[J].match(/[A-Za-z0-9]/)?" "+r[J]:r[J],we=!1,_t=!1):J in i?(z+=J,J="",Ne===he-1&&(J=i[z]),_t=!0):b[J]&&!(T&&u.indexOf(J)!==-1)&&!(w&&l.indexOf(J)!==-1)?(J=we||V.substr(-1).match(/[A-Za-z0-9]/)?M+b[J]:b[J],J+=R[Ne+1]!==void 0&&R[Ne+1].match(/[A-Za-z0-9]/)?M:"",we=!0):(_t===!0?(J=i[z]+J,z="",_t=!1):we&&(/[A-Za-z0-9]/.test(J)||V.substr(-1).match(/A-Za-z0-9]/))&&(J=" "+J),we=!1),V+=J.replace(new RegExp("[^\\w\\s"+ot+"_-]","g"),M);return E&&(V=V.replace(/(\w)(\S*)/g,function(Ve,Re,Qt){var zt=Re.toUpperCase()+(Qt!==null?Qt:"");return Object.keys(ae).indexOf(zt.toLowerCase())<0?zt:zt.toLowerCase()})),V=V.replace(/\s+/g,M).replace(new RegExp("\\"+M+"+","g"),M).replace(new RegExp("(^\\"+M+"+|\\"+M+"+$)","g"),""),I&&V.length>I&&(Ke=V.charAt(I)===M,V=V.slice(0,I),Ke||(V=V.slice(0,V.lastIndexOf(M)))),!S&&!E&&(V=V.toLowerCase()),V},p=function(R){return function(M){return f(M,R)}},g=function(R){return R.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},v=function(P,R){for(var D in R)if(R[D]===P)return!0};if(typeof e<"u"&&e.exports)e.exports=f,e.exports.createSlug=p;else if(typeof define<"u"&&define.amd)define([],function(){return f});else try{if(n.getSlug||n.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";n.getSlug=f,n.createSlug=p}catch{}}(t)}}),vC=c0({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(t,e){H(),e.exports=yC()}});H();H();H();H();H();H();H();H();function EC(t){var e;const n=t.name||t._componentTag||t.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__||t.__name;return n==="index"&&((e=t.__file)!=null&&e.endsWith("index.vue"))?"":n}function TC(t){const e=t.__file;if(e)return nC(rC(e,".vue"))}function ag(t,e){return t.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__=e,e}function hd(t){if(t.__VUE_DEVTOOLS_NEXT_APP_RECORD__)return t.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(t.root)return t.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__}function u0(t){var e,n;const r=(e=t.subTree)==null?void 0:e.type,s=hd(t);return s?((n=s?.types)==null?void 0:n.Fragment)===r:!1}function zu(t){var e,n,r;const s=EC(t?.type||{});if(s)return s;if(t?.root===t)return"Root";for(const o in(n=(e=t.parent)==null?void 0:e.type)==null?void 0:n.components)if(t.parent.type.components[o]===t?.type)return ag(t,o);for(const o in(r=t.appContext)==null?void 0:r.components)if(t.appContext.components[o]===t?.type)return ag(t,o);const i=TC(t?.type||{});return i||"Anonymous Component"}function wC(t){var e,n,r;const s=(r=(n=(e=t?.appContext)==null?void 0:e.app)==null?void 0:n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__)!=null?r:0,i=t===t?.root?"root":t.uid;return`${s}:${i}`}function Hh(t,e){return e=e||`${t.id}:root`,t.instanceMap.get(e)||t.instanceMap.get(":root")}function IC(){const t={top:0,bottom:0,left:0,right:0,get width(){return t.right-t.left},get height(){return t.bottom-t.top}};return t}var lc;function bC(t){return lc||(lc=document.createRange()),lc.selectNode(t),lc.getBoundingClientRect()}function AC(t){const e=IC();if(!t.children)return e;for(let n=0,r=t.children.length;n<r;n++){const s=t.children[n];let i;if(s.component)i=Fs(s.component);else if(s.el){const o=s.el;o.nodeType===1||o.getBoundingClientRect?i=o.getBoundingClientRect():o.nodeType===3&&o.data.trim()&&(i=bC(o))}i&&SC(e,i)}return e}function SC(t,e){return(!t.top||e.top<t.top)&&(t.top=e.top),(!t.bottom||e.bottom>t.bottom)&&(t.bottom=e.bottom),(!t.left||e.left<t.left)&&(t.left=e.left),(!t.right||e.right>t.right)&&(t.right=e.right),t}var cg={top:0,left:0,right:0,bottom:0,width:0,height:0};function Fs(t){const e=t.subTree.el;return typeof window>"u"?cg:u0(t)?AC(t.subTree):e?.nodeType===1?e?.getBoundingClientRect():t.subTree.component?Fs(t.subTree.component):cg}H();function fd(t){return u0(t)?RC(t.subTree):t.subTree?[t.subTree.el]:[]}function RC(t){if(!t.children)return[];const e=[];return t.children.forEach(n=>{n.component?e.push(...fd(n.component)):n?.el&&e.push(n.el)}),e}var l0="__vue-devtools-component-inspector__",h0="__vue-devtools-component-inspector__card__",f0="__vue-devtools-component-inspector__name__",d0="__vue-devtools-component-inspector__indicator__",p0={display:"block",zIndex:2147483640,position:"fixed",backgroundColor:"#42b88325",border:"1px solid #42b88350",borderRadius:"5px",transition:"all 0.1s ease-in",pointerEvents:"none"},CC={fontFamily:"Arial, Helvetica, sans-serif",padding:"5px 8px",borderRadius:"4px",textAlign:"left",position:"absolute",left:0,color:"#e9e9e9",fontSize:"14px",fontWeight:600,lineHeight:"24px",backgroundColor:"#42b883",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},PC={display:"inline-block",fontWeight:400,fontStyle:"normal",fontSize:"12px",opacity:.7};function Wi(){return document.getElementById(l0)}function kC(){return document.getElementById(h0)}function OC(){return document.getElementById(d0)}function DC(){return document.getElementById(f0)}function dd(t){return{left:`${Math.round(t.left*100)/100}px`,top:`${Math.round(t.top*100)/100}px`,width:`${Math.round(t.width*100)/100}px`,height:`${Math.round(t.height*100)/100}px`}}function pd(t){var e;const n=document.createElement("div");n.id=(e=t.elementId)!=null?e:l0,Object.assign(n.style,{...p0,...dd(t.bounds),...t.style});const r=document.createElement("span");r.id=h0,Object.assign(r.style,{...CC,top:t.bounds.top<35?0:"-35px"});const s=document.createElement("span");s.id=f0,s.innerHTML=`&lt;${t.name}&gt;&nbsp;&nbsp;`;const i=document.createElement("i");return i.id=d0,i.innerHTML=`${Math.round(t.bounds.width*100)/100} x ${Math.round(t.bounds.height*100)/100}`,Object.assign(i.style,PC),r.appendChild(s),r.appendChild(i),n.appendChild(r),document.body.appendChild(n),n}function md(t){const e=Wi(),n=kC(),r=DC(),s=OC();e&&(Object.assign(e.style,{...p0,...dd(t.bounds)}),Object.assign(n.style,{top:t.bounds.top<35?0:"-35px"}),r.innerHTML=`&lt;${t.name}&gt;&nbsp;&nbsp;`,s.innerHTML=`${Math.round(t.bounds.width*100)/100} x ${Math.round(t.bounds.height*100)/100}`)}function NC(t){const e=Fs(t);if(!e.width&&!e.height)return;const n=zu(t);Wi()?md({bounds:e,name:n}):pd({bounds:e,name:n})}function m0(){const t=Wi();t&&(t.style.display="none")}var qh=null;function zh(t){const e=t.target;if(e){const n=e.__vueParentComponent;if(n&&(qh=n,n.vnode.el)){const s=Fs(n),i=zu(n);Wi()?md({bounds:s,name:i}):pd({bounds:s,name:i})}}}function VC(t,e){if(t.preventDefault(),t.stopPropagation(),qh){const n=wC(qh);e(n)}}var au=null;function xC(){m0(),window.removeEventListener("mouseover",zh),window.removeEventListener("click",au,!0),au=null}function MC(){return window.addEventListener("mouseover",zh),new Promise(t=>{function e(n){n.preventDefault(),n.stopPropagation(),VC(n,r=>{window.removeEventListener("click",e,!0),au=null,window.removeEventListener("mouseover",zh);const s=Wi();s&&(s.style.display="none"),t(JSON.stringify({id:r}))})}au=e,window.addEventListener("click",e,!0)})}function LC(t){const e=Hh(Bt.value,t.id);if(e){const[n]=fd(e);if(typeof n.scrollIntoView=="function")n.scrollIntoView({behavior:"smooth"});else{const r=Fs(e),s=document.createElement("div"),i={...dd(r),position:"absolute"};Object.assign(s.style,i),document.body.appendChild(s),s.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.body.removeChild(s)},2e3)}setTimeout(()=>{const r=Fs(e);if(r.width||r.height){const s=zu(e),i=Wi();i?md({...t,name:s,bounds:r}):pd({...t,name:s,bounds:r}),setTimeout(()=>{i&&(i.style.display="none")},1500)}},1200)}}H();var ug,lg;(lg=(ug=se).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__)!=null||(ug.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__=!0);function FC(t){let e=0;const n=setInterval(()=>{se.__VUE_INSPECTOR__&&(clearInterval(n),e+=30,t()),e>=5e3&&clearInterval(n)},30)}function UC(){const t=se.__VUE_INSPECTOR__,e=t.openInEditor;t.openInEditor=async(...n)=>{t.disable(),e(...n)}}function $C(){return new Promise(t=>{function e(){UC(),t(se.__VUE_INSPECTOR__)}se.__VUE_INSPECTOR__?e():FC(()=>{e()})})}H();H();function BC(t){return!!(t&&t.__v_isReadonly)}function g0(t){return BC(t)?g0(t.__v_raw):!!(t&&t.__v_isReactive)}function Xl(t){return!!(t&&t.__v_isRef===!0)}function Ro(t){const e=t&&t.__v_raw;return e?Ro(e):t}var jC=class{constructor(){this.refEditor=new HC}set(t,e,n,r){const s=Array.isArray(e)?e:e.split(".");for(;s.length>1;){const a=s.shift();t instanceof Map?t=t.get(a):t instanceof Set?t=Array.from(t.values())[a]:t=t[a],this.refEditor.isRef(t)&&(t=this.refEditor.get(t))}const i=s[0],o=this.refEditor.get(t)[i];r?r(t,i,n):this.refEditor.isRef(o)?this.refEditor.set(o,n):t[i]=n}get(t,e){const n=Array.isArray(e)?e:e.split(".");for(let r=0;r<n.length;r++)if(t instanceof Map?t=t.get(n[r]):t=t[n[r]],this.refEditor.isRef(t)&&(t=this.refEditor.get(t)),!t)return;return t}has(t,e,n=!1){if(typeof t>"u")return!1;const r=Array.isArray(e)?e.slice():e.split("."),s=n?2:1;for(;t&&r.length>s;){const i=r.shift();t=t[i],this.refEditor.isRef(t)&&(t=this.refEditor.get(t))}return t!=null&&Object.prototype.hasOwnProperty.call(t,r[0])}createDefaultSetCallback(t){return(e,n,r)=>{if((t.remove||t.newKey)&&(Array.isArray(e)?e.splice(n,1):Ro(e)instanceof Map?e.delete(n):Ro(e)instanceof Set?e.delete(Array.from(e.values())[n]):Reflect.deleteProperty(e,n)),!t.remove){const s=e[t.newKey||n];this.refEditor.isRef(s)?this.refEditor.set(s,r):Ro(e)instanceof Map?e.set(t.newKey||n,r):Ro(e)instanceof Set?e.add(r):e[t.newKey||n]=r}}}},HC=class{set(t,e){if(Xl(t))t.value=e;else{if(t instanceof Set&&Array.isArray(e)){t.clear(),e.forEach(s=>t.add(s));return}const n=Object.keys(e);if(t instanceof Map){const s=new Set(t.keys());n.forEach(i=>{t.set(i,Reflect.get(e,i)),s.delete(i)}),s.forEach(i=>t.delete(i));return}const r=new Set(Object.keys(t));n.forEach(s=>{Reflect.set(t,s,Reflect.get(e,s)),r.delete(s)}),r.forEach(s=>Reflect.deleteProperty(t,s))}}get(t){return Xl(t)?t.value:t}isRef(t){return Xl(t)||g0(t)}};H();H();H();var qC="__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";function zC(){if(!s0||typeof localStorage>"u"||localStorage===null)return{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""};const t=localStorage.getItem(qC);return t?JSON.parse(t):{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""}}H();H();H();var hg,fg;(fg=(hg=se).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS)!=null||(hg.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS=[]);var KC=new Proxy(se.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS,{get(t,e,n){return Reflect.get(t,e,n)}});function WC(t,e){at.timelineLayersState[e.id]=!1,KC.push({...t,descriptorId:e.id,appRecord:hd(e.app)})}var dg,pg;(pg=(dg=se).__VUE_DEVTOOLS_KIT_INSPECTOR__)!=null||(dg.__VUE_DEVTOOLS_KIT_INSPECTOR__=[]);var gd=new Proxy(se.__VUE_DEVTOOLS_KIT_INSPECTOR__,{get(t,e,n){return Reflect.get(t,e,n)}}),_0=Di(()=>{Gi.hooks.callHook("sendInspectorToClient",y0())});function GC(t,e){var n,r;gd.push({options:t,descriptor:e,treeFilterPlaceholder:(n=t.treeFilterPlaceholder)!=null?n:"Search tree...",stateFilterPlaceholder:(r=t.stateFilterPlaceholder)!=null?r:"Search state...",treeFilter:"",selectedNodeId:"",appRecord:hd(e.app)}),_0()}function y0(){return gd.filter(t=>t.descriptor.app===Bt.value.app).filter(t=>t.descriptor.id!=="components").map(t=>{var e;const n=t.descriptor,r=t.options;return{id:r.id,label:r.label,logo:n.logo,icon:`custom-ic-baseline-${(e=r?.icon)==null?void 0:e.replace(/_/g,"-")}`,packageName:n.packageName,homepage:n.homepage,pluginId:n.id}})}function kc(t,e){return gd.find(n=>n.options.id===t&&(e?n.descriptor.app===e:!0))}function QC(){const t=o0();t.hook("addInspector",({inspector:r,plugin:s})=>{GC(r,s.descriptor)});const e=Di(async({inspectorId:r,plugin:s})=>{var i;if(!r||!((i=s?.descriptor)!=null&&i.app)||at.highPerfModeEnabled)return;const o=kc(r,s.descriptor.app),a={app:s.descriptor.app,inspectorId:r,filter:o?.treeFilter||"",rootNodes:[]};await new Promise(u=>{t.callHookWith(async l=>{await Promise.all(l.map(h=>h(a))),u()},"getInspectorTree")}),t.callHookWith(async u=>{await Promise.all(u.map(l=>l({inspectorId:r,rootNodes:a.rootNodes})))},"sendInspectorTreeToClient")},120);t.hook("sendInspectorTree",e);const n=Di(async({inspectorId:r,plugin:s})=>{var i;if(!r||!((i=s?.descriptor)!=null&&i.app)||at.highPerfModeEnabled)return;const o=kc(r,s.descriptor.app),a={app:s.descriptor.app,inspectorId:r,nodeId:o?.selectedNodeId||"",state:null},u={currentTab:`custom-inspector:${r}`};a.nodeId&&await new Promise(l=>{t.callHookWith(async h=>{await Promise.all(h.map(f=>f(a,u))),l()},"getInspectorState")}),t.callHookWith(async l=>{await Promise.all(l.map(h=>h({inspectorId:r,nodeId:a.nodeId,state:a.state})))},"sendInspectorStateToClient")},120);return t.hook("sendInspectorState",n),t.hook("customInspectorSelectNode",({inspectorId:r,nodeId:s,plugin:i})=>{const o=kc(r,i.descriptor.app);o&&(o.selectedNodeId=s)}),t.hook("timelineLayerAdded",({options:r,plugin:s})=>{WC(r,s.descriptor)}),t.hook("timelineEventAdded",({options:r,plugin:s})=>{var i;const o=["performance","component-event","keyboard","mouse"];at.highPerfModeEnabled||!((i=at.timelineLayersState)!=null&&i[s.descriptor.id])&&!o.includes(r.layerId)||t.callHookWith(async a=>{await Promise.all(a.map(u=>u(r)))},"sendTimelineEventToClient")}),t.hook("getComponentInstances",async({app:r})=>{const s=r.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(!s)return null;const i=s.id.toString();return[...s.instanceMap].filter(([a])=>a.split(":")[0]===i).map(([,a])=>a)}),t.hook("getComponentBounds",async({instance:r})=>Fs(r)),t.hook("getComponentName",({instance:r})=>zu(r)),t.hook("componentHighlight",({uid:r})=>{const s=Bt.value.instanceMap.get(r);s&&NC(s)}),t.hook("componentUnhighlight",()=>{m0()}),t}var mg,gg;(gg=(mg=se).__VUE_DEVTOOLS_KIT_APP_RECORDS__)!=null||(mg.__VUE_DEVTOOLS_KIT_APP_RECORDS__=[]);var _g,yg;(yg=(_g=se).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__)!=null||(_g.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__={});var vg,Eg;(Eg=(vg=se).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__)!=null||(vg.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__="");var Tg,wg;(wg=(Tg=se).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__)!=null||(Tg.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__=[]);var Ig,bg;(bg=(Ig=se).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__)!=null||(Ig.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__=[]);var As="__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";function YC(){return{connected:!1,clientConnected:!1,vitePluginDetected:!0,appRecords:[],activeAppRecordId:"",tabs:[],commands:[],highPerfModeEnabled:!0,devtoolsClientDetected:{},perfUniqueGroupId:0,timelineLayersState:zC()}}var Ag,Sg;(Sg=(Ag=se)[As])!=null||(Ag[As]=YC());var JC=Di(t=>{Gi.hooks.callHook("devtoolsStateUpdated",{state:t})});Di((t,e)=>{Gi.hooks.callHook("devtoolsConnectedUpdated",{state:t,oldState:e})});var Ku=new Proxy(se.__VUE_DEVTOOLS_KIT_APP_RECORDS__,{get(t,e,n){return e==="value"?se.__VUE_DEVTOOLS_KIT_APP_RECORDS__:se.__VUE_DEVTOOLS_KIT_APP_RECORDS__[e]}}),Bt=new Proxy(se.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__,{get(t,e,n){return e==="value"?se.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__:e==="id"?se.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__:se.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[e]}});function v0(){JC({...se[As],appRecords:Ku.value,activeAppRecordId:Bt.id,tabs:se.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,commands:se.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__})}function XC(t){se.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__=t,v0()}function ZC(t){se.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__=t,v0()}var at=new Proxy(se[As],{get(t,e){return e==="appRecords"?Ku:e==="activeAppRecordId"?Bt.id:e==="tabs"?se.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__:e==="commands"?se.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__:se[As][e]},deleteProperty(t,e){return delete t[e],!0},set(t,e,n){return{...se[As]},t[e]=n,se[As][e]=n,!0}});function eP(t={}){var e,n,r;const{file:s,host:i,baseUrl:o=window.location.origin,line:a=0,column:u=0}=t;if(s){if(i==="chrome-extension"){const l=s.replace(/\\/g,"\\\\"),h=(n=(e=window.VUE_DEVTOOLS_CONFIG)==null?void 0:e.openInEditorHost)!=null?n:"/";fetch(`${h}__open-in-editor?file=${encodeURI(s)}`).then(f=>{if(!f.ok){const p=`Opening component ${l} failed`;console.log(`%c${p}`,"color:red")}})}else if(at.vitePluginDetected){const l=(r=se.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__)!=null?r:o;se.__VUE_INSPECTOR__.openInEditor(l,s,a,u)}}}H();H();H();H();H();var Rg,Cg;(Cg=(Rg=se).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__)!=null||(Rg.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__=[]);var _d=new Proxy(se.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__,{get(t,e,n){return Reflect.get(t,e,n)}});function Kh(t){const e={};return Object.keys(t).forEach(n=>{e[n]=t[n].defaultValue}),e}function yd(t){return`__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${t}__`}function tP(t){var e,n,r;const s=(n=(e=_d.find(i=>{var o;return i[0].id===t&&!!((o=i[0])!=null&&o.settings)}))==null?void 0:e[0])!=null?n:null;return(r=s?.settings)!=null?r:null}function E0(t,e){var n,r,s;const i=yd(t);if(i){const o=localStorage.getItem(i);if(o)return JSON.parse(o)}if(t){const o=(r=(n=_d.find(a=>a[0].id===t))==null?void 0:n[0])!=null?r:null;return Kh((s=o?.settings)!=null?s:{})}return Kh(e)}function nP(t,e){const n=yd(t);localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify(Kh(e)))}function rP(t,e,n){const r=yd(t),s=localStorage.getItem(r),i=JSON.parse(s||"{}"),o={...i,[e]:n};localStorage.setItem(r,JSON.stringify(o)),Gi.hooks.callHookWith(a=>{a.forEach(u=>u({pluginId:t,key:e,oldValue:i[e],newValue:n,settings:o}))},"setPluginSettings")}H();H();H();H();H();H();H();H();H();H();H();var Pg,kg,en=(kg=(Pg=se).__VUE_DEVTOOLS_HOOK)!=null?kg:Pg.__VUE_DEVTOOLS_HOOK=o0(),sP={vueAppInit(t){en.hook("app:init",t)},vueAppUnmount(t){en.hook("app:unmount",t)},vueAppConnected(t){en.hook("app:connected",t)},componentAdded(t){return en.hook("component:added",t)},componentEmit(t){return en.hook("component:emit",t)},componentUpdated(t){return en.hook("component:updated",t)},componentRemoved(t){return en.hook("component:removed",t)},setupDevtoolsPlugin(t){en.hook("devtools-plugin:setup",t)},perfStart(t){return en.hook("perf:start",t)},perfEnd(t){return en.hook("perf:end",t)}},T0={on:sP,setupDevToolsPlugin(t,e){return en.callHook("devtools-plugin:setup",t,e)}},iP=class{constructor({plugin:t,ctx:e}){this.hooks=e.hooks,this.plugin=t}get on(){return{visitComponentTree:t=>{this.hooks.hook("visitComponentTree",t)},inspectComponent:t=>{this.hooks.hook("inspectComponent",t)},editComponentState:t=>{this.hooks.hook("editComponentState",t)},getInspectorTree:t=>{this.hooks.hook("getInspectorTree",t)},getInspectorState:t=>{this.hooks.hook("getInspectorState",t)},editInspectorState:t=>{this.hooks.hook("editInspectorState",t)},inspectTimelineEvent:t=>{this.hooks.hook("inspectTimelineEvent",t)},timelineCleared:t=>{this.hooks.hook("timelineCleared",t)},setPluginSettings:t=>{this.hooks.hook("setPluginSettings",t)}}}notifyComponentUpdate(t){var e;if(at.highPerfModeEnabled)return;const n=y0().find(r=>r.packageName===this.plugin.descriptor.packageName);if(n?.id){if(t){const r=[t.appContext.app,t.uid,(e=t.parent)==null?void 0:e.uid,t];en.callHook("component:updated",...r)}else en.callHook("component:updated");this.hooks.callHook("sendInspectorState",{inspectorId:n.id,plugin:this.plugin})}}addInspector(t){this.hooks.callHook("addInspector",{inspector:t,plugin:this.plugin}),this.plugin.descriptor.settings&&nP(t.id,this.plugin.descriptor.settings)}sendInspectorTree(t){at.highPerfModeEnabled||this.hooks.callHook("sendInspectorTree",{inspectorId:t,plugin:this.plugin})}sendInspectorState(t){at.highPerfModeEnabled||this.hooks.callHook("sendInspectorState",{inspectorId:t,plugin:this.plugin})}selectInspectorNode(t,e){this.hooks.callHook("customInspectorSelectNode",{inspectorId:t,nodeId:e,plugin:this.plugin})}visitComponentTree(t){return this.hooks.callHook("visitComponentTree",t)}now(){return at.highPerfModeEnabled?0:Date.now()}addTimelineLayer(t){this.hooks.callHook("timelineLayerAdded",{options:t,plugin:this.plugin})}addTimelineEvent(t){at.highPerfModeEnabled||this.hooks.callHook("timelineEventAdded",{options:t,plugin:this.plugin})}getSettings(t){return E0(t??this.plugin.descriptor.id,this.plugin.descriptor.settings)}getComponentInstances(t){return this.hooks.callHook("getComponentInstances",{app:t})}getComponentBounds(t){return this.hooks.callHook("getComponentBounds",{instance:t})}getComponentName(t){return this.hooks.callHook("getComponentName",{instance:t})}highlightElement(t){const e=t.__VUE_DEVTOOLS_NEXT_UID__;return this.hooks.callHook("componentHighlight",{uid:e})}unhighlightElement(){return this.hooks.callHook("componentUnhighlight")}},oP=iP;H();H();H();H();var aP="__vue_devtool_undefined__",cP="__vue_devtool_infinity__",uP="__vue_devtool_negative_infinity__",lP="__vue_devtool_nan__";H();H();var hP={[aP]:"undefined",[lP]:"NaN",[cP]:"Infinity",[uP]:"-Infinity"};Object.entries(hP).reduce((t,[e,n])=>(t[n]=e,t),{});H();H();H();H();H();var Og,Dg;(Dg=(Og=se).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__)!=null||(Og.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__=new Set);function w0(t,e){return T0.setupDevToolsPlugin(t,e)}function fP(t,e){const[n,r]=t;if(n.app!==e)return;const s=new oP({plugin:{setupFn:r,descriptor:n},ctx:Gi});n.packageName==="vuex"&&s.on.editInspectorState(i=>{s.sendInspectorState(i.inspectorId)}),r(s)}function I0(t,e){se.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(t)||at.highPerfModeEnabled&&!e?.inspectingComponent||(se.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(t),_d.forEach(n=>{fP(n,t)}))}H();H();var ca="__VUE_DEVTOOLS_ROUTER__",Ni="__VUE_DEVTOOLS_ROUTER_INFO__",Ng,Vg;(Vg=(Ng=se)[Ni])!=null||(Ng[Ni]={currentRoute:null,routes:[]});var xg,Mg;(Mg=(xg=se)[ca])!=null||(xg[ca]={});new Proxy(se[Ni],{get(t,e){return se[Ni][e]}});new Proxy(se[ca],{get(t,e){if(e==="value")return se[ca]}});function dP(t){const e=new Map;return(t?.getRoutes()||[]).filter(n=>!e.has(n.path)&&e.set(n.path,1))}function vd(t){return t.map(e=>{let{path:n,name:r,children:s,meta:i}=e;return s?.length&&(s=vd(s)),{path:n,name:r,children:s,meta:i}})}function pP(t){if(t){const{fullPath:e,hash:n,href:r,path:s,name:i,matched:o,params:a,query:u}=t;return{fullPath:e,hash:n,href:r,path:s,name:i,params:a,query:u,matched:vd(o)}}return t}function mP(t,e){function n(){var r;const s=(r=t.app)==null?void 0:r.config.globalProperties.$router,i=pP(s?.currentRoute.value),o=vd(dP(s)),a=console.warn;console.warn=()=>{},se[Ni]={currentRoute:i?og(i):{},routes:og(o)},se[ca]=s,console.warn=a}n(),T0.on.componentUpdated(Di(()=>{var r;((r=e.value)==null?void 0:r.app)===t.app&&(n(),!at.highPerfModeEnabled&&Gi.hooks.callHook("routerInfoUpdated",{state:se[Ni]}))},200))}function gP(t){return{async getInspectorTree(e){const n={...e,app:Bt.value.app,rootNodes:[]};return await new Promise(r=>{t.callHookWith(async s=>{await Promise.all(s.map(i=>i(n))),r()},"getInspectorTree")}),n.rootNodes},async getInspectorState(e){const n={...e,app:Bt.value.app,state:null},r={currentTab:`custom-inspector:${e.inspectorId}`};return await new Promise(s=>{t.callHookWith(async i=>{await Promise.all(i.map(o=>o(n,r))),s()},"getInspectorState")}),n.state},editInspectorState(e){const n=new jC,r={...e,app:Bt.value.app,set:(s,i=e.path,o=e.state.value,a)=>{n.set(s,i,o,a||n.createDefaultSetCallback(e.state))}};t.callHookWith(s=>{s.forEach(i=>i(r))},"editInspectorState")},sendInspectorState(e){const n=kc(e);t.callHook("sendInspectorState",{inspectorId:e,plugin:{descriptor:n.descriptor,setupFn:()=>({})}})},inspectComponentInspector(){return MC()},cancelInspectComponentInspector(){return xC()},getComponentRenderCode(e){const n=Hh(Bt.value,e);if(n)return typeof n?.type!="function"?n.render.toString():n.type.toString()},scrollToComponent(e){return LC({id:e})},openInEditor:eP,getVueInspector:$C,toggleApp(e,n){const r=Ku.value.find(s=>s.id===e);r&&(ZC(e),XC(r),mP(r,Bt),_0(),I0(r.app,n))},inspectDOM(e){const n=Hh(Bt.value,e);if(n){const[r]=fd(n);r&&(se.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__=r)}},updatePluginSettings(e,n,r){rP(e,n,r)},getPluginSettings(e){return{options:tP(e),values:E0(e)}}}}H();var Lg,Fg;(Fg=(Lg=se).__VUE_DEVTOOLS_ENV__)!=null||(Lg.__VUE_DEVTOOLS_ENV__={vitePluginDetected:!1});var Ug=QC(),$g,Bg;(Bg=($g=se).__VUE_DEVTOOLS_KIT_CONTEXT__)!=null||($g.__VUE_DEVTOOLS_KIT_CONTEXT__={hooks:Ug,get state(){return{...at,activeAppRecordId:Bt.id,activeAppRecord:Bt.value,appRecords:Ku.value}},api:gP(Ug)});var Gi=se.__VUE_DEVTOOLS_KIT_CONTEXT__;H();_C(vC());var jg,Hg;(Hg=(jg=se).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__)!=null||(jg.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__={id:0,appIds:new Set});H();H();function _P(t){at.highPerfModeEnabled=t??!at.highPerfModeEnabled,!t&&Bt.value&&I0(Bt.value.app)}H();H();H();function yP(t){at.devtoolsClientDetected={...at.devtoolsClientDetected,...t};const e=Object.values(at.devtoolsClientDetected).some(Boolean);_P(!e)}var qg,zg;(zg=(qg=se).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__)!=null||(qg.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__=yP);H();H();H();H();H();H();H();var vP=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,e){this.keyToValue.set(t,e),this.valueToKey.set(e,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},b0=class{constructor(t){this.generateIdentifier=t,this.kv=new vP}register(t,e){this.kv.getByValue(t)||(e||(e=this.generateIdentifier(t)),this.kv.set(e,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}},EP=class extends b0{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,e){typeof e=="object"?(e.allowProps&&this.classToAllowedProps.set(t,e.allowProps),super.register(t,e.identifier)):super.register(t,e)}getAllowedProps(t){return this.classToAllowedProps.get(t)}};H();H();function TP(t){if("values"in Object)return Object.values(t);const e=[];for(const n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e}function wP(t,e){const n=TP(t);if("find"in n)return n.find(e);const r=n;for(let s=0;s<r.length;s++){const i=r[s];if(e(i))return i}}function Vi(t,e){Object.entries(t).forEach(([n,r])=>e(r,n))}function Oc(t,e){return t.indexOf(e)!==-1}function Kg(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(e(r))return r}}var IP=class{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return wP(this.transfomers,e=>e.isApplicable(t))}findByName(t){return this.transfomers[t]}};H();H();var bP=t=>Object.prototype.toString.call(t).slice(8,-1),A0=t=>typeof t>"u",AP=t=>t===null,ua=t=>typeof t!="object"||t===null||t===Object.prototype?!1:Object.getPrototypeOf(t)===null?!0:Object.getPrototypeOf(t)===Object.prototype,Wh=t=>ua(t)&&Object.keys(t).length===0,es=t=>Array.isArray(t),SP=t=>typeof t=="string",RP=t=>typeof t=="number"&&!isNaN(t),CP=t=>typeof t=="boolean",PP=t=>t instanceof RegExp,la=t=>t instanceof Map,ha=t=>t instanceof Set,S0=t=>bP(t)==="Symbol",kP=t=>t instanceof Date&&!isNaN(t.valueOf()),OP=t=>t instanceof Error,Wg=t=>typeof t=="number"&&isNaN(t),DP=t=>CP(t)||AP(t)||A0(t)||RP(t)||SP(t)||S0(t),NP=t=>typeof t=="bigint",VP=t=>t===1/0||t===-1/0,xP=t=>ArrayBuffer.isView(t)&&!(t instanceof DataView),MP=t=>t instanceof URL;H();var R0=t=>t.replace(/\./g,"\\."),Zl=t=>t.map(String).map(R0).join("."),$o=t=>{const e=[];let n="";for(let s=0;s<t.length;s++){let i=t.charAt(s);if(i==="\\"&&t.charAt(s+1)==="."){n+=".",s++;continue}if(i==="."){e.push(n),n="";continue}n+=i}const r=n;return e.push(r),e};H();function Fn(t,e,n,r){return{isApplicable:t,annotation:e,transform:n,untransform:r}}var C0=[Fn(A0,"undefined",()=>null,()=>{}),Fn(NP,"bigint",t=>t.toString(),t=>typeof BigInt<"u"?BigInt(t):(console.error("Please add a BigInt polyfill."),t)),Fn(kP,"Date",t=>t.toISOString(),t=>new Date(t)),Fn(OP,"Error",(t,e)=>{const n={name:t.name,message:t.message};return e.allowedErrorProps.forEach(r=>{n[r]=t[r]}),n},(t,e)=>{const n=new Error(t.message);return n.name=t.name,n.stack=t.stack,e.allowedErrorProps.forEach(r=>{n[r]=t[r]}),n}),Fn(PP,"regexp",t=>""+t,t=>{const e=t.slice(1,t.lastIndexOf("/")),n=t.slice(t.lastIndexOf("/")+1);return new RegExp(e,n)}),Fn(ha,"set",t=>[...t.values()],t=>new Set(t)),Fn(la,"map",t=>[...t.entries()],t=>new Map(t)),Fn(t=>Wg(t)||VP(t),"number",t=>Wg(t)?"NaN":t>0?"Infinity":"-Infinity",Number),Fn(t=>t===0&&1/t===-1/0,"number",()=>"-0",Number),Fn(MP,"URL",t=>t.toString(),t=>new URL(t))];function Wu(t,e,n,r){return{isApplicable:t,annotation:e,transform:n,untransform:r}}var P0=Wu((t,e)=>S0(t)?!!e.symbolRegistry.getIdentifier(t):!1,(t,e)=>["symbol",e.symbolRegistry.getIdentifier(t)],t=>t.description,(t,e,n)=>{const r=n.symbolRegistry.getValue(e[1]);if(!r)throw new Error("Trying to deserialize unknown symbol");return r}),LP=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((t,e)=>(t[e.name]=e,t),{}),k0=Wu(xP,t=>["typed-array",t.constructor.name],t=>[...t],(t,e)=>{const n=LP[e[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(t)});function O0(t,e){return t?.constructor?!!e.classRegistry.getIdentifier(t.constructor):!1}var D0=Wu(O0,(t,e)=>["class",e.classRegistry.getIdentifier(t.constructor)],(t,e)=>{const n=e.classRegistry.getAllowedProps(t.constructor);if(!n)return{...t};const r={};return n.forEach(s=>{r[s]=t[s]}),r},(t,e,n)=>{const r=n.classRegistry.getValue(e[1]);if(!r)throw new Error(`Trying to deserialize unknown class '${e[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(r.prototype),t)}),N0=Wu((t,e)=>!!e.customTransformerRegistry.findApplicable(t),(t,e)=>["custom",e.customTransformerRegistry.findApplicable(t).name],(t,e)=>e.customTransformerRegistry.findApplicable(t).serialize(t),(t,e,n)=>{const r=n.customTransformerRegistry.findByName(e[1]);if(!r)throw new Error("Trying to deserialize unknown custom value");return r.deserialize(t)}),FP=[D0,P0,N0,k0],Gg=(t,e)=>{const n=Kg(FP,s=>s.isApplicable(t,e));if(n)return{value:n.transform(t,e),type:n.annotation(t,e)};const r=Kg(C0,s=>s.isApplicable(t,e));if(r)return{value:r.transform(t,e),type:r.annotation}},V0={};C0.forEach(t=>{V0[t.annotation]=t});var UP=(t,e,n)=>{if(es(e))switch(e[0]){case"symbol":return P0.untransform(t,e,n);case"class":return D0.untransform(t,e,n);case"custom":return N0.untransform(t,e,n);case"typed-array":return k0.untransform(t,e,n);default:throw new Error("Unknown transformation: "+e)}else{const r=V0[e];if(!r)throw new Error("Unknown transformation: "+e);return r.untransform(t,n)}};H();var _i=(t,e)=>{if(e>t.size)throw new Error("index out of bounds");const n=t.keys();for(;e>0;)n.next(),e--;return n.next().value};function x0(t){if(Oc(t,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Oc(t,"prototype"))throw new Error("prototype is not allowed as a property");if(Oc(t,"constructor"))throw new Error("constructor is not allowed as a property")}var $P=(t,e)=>{x0(e);for(let n=0;n<e.length;n++){const r=e[n];if(ha(t))t=_i(t,+r);else if(la(t)){const s=+r,i=+e[++n]==0?"key":"value",o=_i(t,s);switch(i){case"key":t=o;break;case"value":t=t.get(o);break}}else t=t[r]}return t},Gh=(t,e,n)=>{if(x0(e),e.length===0)return n(t);let r=t;for(let i=0;i<e.length-1;i++){const o=e[i];if(es(r)){const a=+o;r=r[a]}else if(ua(r))r=r[o];else if(ha(r)){const a=+o;r=_i(r,a)}else if(la(r)){if(i===e.length-2)break;const u=+o,l=+e[++i]==0?"key":"value",h=_i(r,u);switch(l){case"key":r=h;break;case"value":r=r.get(h);break}}}const s=e[e.length-1];if(es(r)?r[+s]=n(r[+s]):ua(r)&&(r[s]=n(r[s])),ha(r)){const i=_i(r,+s),o=n(i);i!==o&&(r.delete(i),r.add(o))}if(la(r)){const i=+e[e.length-2],o=_i(r,i);switch(+s==0?"key":"value"){case"key":{const u=n(o);r.set(u,r.get(o)),u!==o&&r.delete(o);break}case"value":{r.set(o,n(r.get(o)));break}}}return t};function Qh(t,e,n=[]){if(!t)return;if(!es(t)){Vi(t,(i,o)=>Qh(i,e,[...n,...$o(o)]));return}const[r,s]=t;s&&Vi(s,(i,o)=>{Qh(i,e,[...n,...$o(o)])}),e(r,n)}function BP(t,e,n){return Qh(e,(r,s)=>{t=Gh(t,s,i=>UP(i,r,n))}),t}function jP(t,e){function n(r,s){const i=$P(t,$o(s));r.map($o).forEach(o=>{t=Gh(t,o,()=>i)})}if(es(e)){const[r,s]=e;r.forEach(i=>{t=Gh(t,$o(i),()=>t)}),s&&Vi(s,n)}else Vi(e,n);return t}var HP=(t,e)=>ua(t)||es(t)||la(t)||ha(t)||O0(t,e);function qP(t,e,n){const r=n.get(t);r?r.push(e):n.set(t,[e])}function zP(t,e){const n={};let r;return t.forEach(s=>{if(s.length<=1)return;e||(s=s.map(a=>a.map(String)).sort((a,u)=>a.length-u.length));const[i,...o]=s;i.length===0?r=o.map(Zl):n[Zl(i)]=o.map(Zl)}),r?Wh(n)?[r]:[r,n]:Wh(n)?void 0:n}var M0=(t,e,n,r,s=[],i=[],o=new Map)=>{var a;const u=DP(t);if(!u){qP(t,s,e);const v=o.get(t);if(v)return r?{transformedValue:null}:v}if(!HP(t,n)){const v=Gg(t,n),P=v?{transformedValue:v.value,annotations:[v.type]}:{transformedValue:t};return u||o.set(t,P),P}if(Oc(i,t))return{transformedValue:null};const l=Gg(t,n),h=(a=l?.value)!=null?a:t,f=es(h)?[]:{},p={};Vi(h,(v,P)=>{if(P==="__proto__"||P==="constructor"||P==="prototype")throw new Error(`Detected property ${P}. This is a prototype pollution risk, please remove it from your object.`);const R=M0(v,e,n,r,[...s,P],[...i,t],o);f[P]=R.transformedValue,es(R.annotations)?p[P]=R.annotations:ua(R.annotations)&&Vi(R.annotations,(D,M)=>{p[R0(P)+"."+M]=D})});const g=Wh(p)?{transformedValue:f,annotations:l?[l.type]:void 0}:{transformedValue:f,annotations:l?[l.type,p]:p};return u||o.set(t,g),g};H();H();function L0(t){return Object.prototype.toString.call(t).slice(8,-1)}function Qg(t){return L0(t)==="Array"}function KP(t){if(L0(t)!=="Object")return!1;const e=Object.getPrototypeOf(t);return!!e&&e.constructor===Object&&e===Object.prototype}function WP(t,e,n,r,s){const i={}.propertyIsEnumerable.call(r,e)?"enumerable":"nonenumerable";i==="enumerable"&&(t[e]=n),s&&i==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function Yh(t,e={}){if(Qg(t))return t.map(s=>Yh(s,e));if(!KP(t))return t;const n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertySymbols(t);return[...n,...r].reduce((s,i)=>{if(Qg(e.props)&&!e.props.includes(i))return s;const o=t[i],a=Yh(o,e);return WP(s,i,a,t,e.nonenumerable),s},{})}var ze=class{constructor({dedupe:t=!1}={}){this.classRegistry=new EP,this.symbolRegistry=new b0(e=>{var n;return(n=e.description)!=null?n:""}),this.customTransformerRegistry=new IP,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const e=new Map,n=M0(t,e,this,this.dedupe),r={json:n.transformedValue};n.annotations&&(r.meta={...r.meta,values:n.annotations});const s=zP(e,this.dedupe);return s&&(r.meta={...r.meta,referentialEqualities:s}),r}deserialize(t){const{json:e,meta:n}=t;let r=Yh(e);return n?.values&&(r=BP(r,n.values,this)),n?.referentialEqualities&&(r=jP(r,n.referentialEqualities)),r}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,e){this.classRegistry.register(t,e)}registerSymbol(t,e){this.symbolRegistry.register(t,e)}registerCustom(t,e){this.customTransformerRegistry.register({name:e,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}};ze.defaultInstance=new ze;ze.serialize=ze.defaultInstance.serialize.bind(ze.defaultInstance);ze.deserialize=ze.defaultInstance.deserialize.bind(ze.defaultInstance);ze.stringify=ze.defaultInstance.stringify.bind(ze.defaultInstance);ze.parse=ze.defaultInstance.parse.bind(ze.defaultInstance);ze.registerClass=ze.defaultInstance.registerClass.bind(ze.defaultInstance);ze.registerSymbol=ze.defaultInstance.registerSymbol.bind(ze.defaultInstance);ze.registerCustom=ze.defaultInstance.registerCustom.bind(ze.defaultInstance);ze.allowErrorProps=ze.defaultInstance.allowErrorProps.bind(ze.defaultInstance);H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();H();var Yg,Jg;(Jg=(Yg=se).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__)!=null||(Yg.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__=[]);var Xg,Zg;(Zg=(Xg=se).__VUE_DEVTOOLS_KIT_RPC_CLIENT__)!=null||(Xg.__VUE_DEVTOOLS_KIT_RPC_CLIENT__=null);var e_,t_;(t_=(e_=se).__VUE_DEVTOOLS_KIT_RPC_SERVER__)!=null||(e_.__VUE_DEVTOOLS_KIT_RPC_SERVER__=null);var n_,r_;(r_=(n_=se).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__)!=null||(n_.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__=null);var s_,i_;(i_=(s_=se).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__)!=null||(s_.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__=null);var o_,a_;(a_=(o_=se).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__)!=null||(o_.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__=null);H();H();H();H();H();H();H();/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jh;const fa=t=>Jh=t,F0=Symbol("pinia");function Us(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wn||(Wn={}));const Vs=typeof window<"u",c_=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null};function GP(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function Ed(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){B0(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function U0(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function Dc(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});t.dispatchEvent(n)}}const Nc=typeof navigator=="object"?navigator:{userAgent:""},$0=/Macintosh/.test(Nc.userAgent)&&/AppleWebKit/.test(Nc.userAgent)&&!/Safari/.test(Nc.userAgent),B0=Vs?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!$0?QP:"msSaveOrOpenBlob"in Nc?YP:JP:()=>{};function QP(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin!==location.origin?U0(r.href)?Ed(t,e,n):(r.target="_blank",Dc(r)):Dc(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){Dc(r)},0))}function YP(t,e="download",n){if(typeof t=="string")if(U0(t))Ed(t,e,n);else{const r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){Dc(r)})}else navigator.msSaveOrOpenBlob(GP(t,n),e)}function JP(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof t=="string")return Ed(t,e,n);const s=t.type==="application/octet-stream",i=/constructor/i.test(String(c_.HTMLElement))||"safari"in c_,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||s&&i||$0)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let u=a.result;if(typeof u!="string")throw r=null,new Error("Wrong reader.result type");u=o?u:u.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=u:location.assign(u),r=null},a.readAsDataURL(t)}else{const a=URL.createObjectURL(t);r?r.location.assign(a):location.href=a,r=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function ht(t,e){const n="🍍 "+t;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(n,e):e==="error"?console.error(n):e==="warn"?console.warn(n):console.log(n)}function Td(t){return"_a"in t&&"install"in t}function j0(){if(!("clipboard"in navigator))return ht("Your browser doesn't support the Clipboard API","error"),!0}function H0(t){return t instanceof Error&&t.message.toLowerCase().includes("document is not focused")?(ht('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function XP(t){if(!j0())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),ht("Global state copied to clipboard.")}catch(e){if(H0(e))return;ht("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function ZP(t){if(!j0())try{q0(t,JSON.parse(await navigator.clipboard.readText())),ht("Global state pasted from clipboard.")}catch(e){if(H0(e))return;ht("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function ek(t){try{B0(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){ht("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let ar;function tk(){ar||(ar=document.createElement("input"),ar.type="file",ar.accept=".json");function t(){return new Promise((e,n)=>{ar.onchange=async()=>{const r=ar.files;if(!r)return e(null);const s=r.item(0);return e(s?{text:await s.text(),file:s}:null)},ar.oncancel=()=>e(null),ar.onerror=n,ar.click()})}return t}async function nk(t){try{const n=await tk()();if(!n)return;const{text:r,file:s}=n;q0(t,JSON.parse(r)),ht(`Global state imported from "${s.name}".`)}catch(e){ht("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function q0(t,e){for(const n in e){const r=t.state.value[n];r?Object.assign(r,e[n]):t.state.value[n]=e[n]}}function yn(t){return{_custom:{display:t}}}const z0="🍍 Pinia (root)",Vc="_root";function rk(t){return Td(t)?{id:Vc,label:z0}:{id:t.$id,label:t.$id}}function sk(t){if(Td(t)){const n=Array.from(t._s.keys()),r=t._s;return{state:n.map(i=>({editable:!0,key:i,value:t.state.value[i]})),getters:n.filter(i=>r.get(i)._getters).map(i=>{const o=r.get(i);return{editable:!1,key:i,value:o._getters.reduce((a,u)=>(a[u]=o[u],a),{})}})}}const e={state:Object.keys(t.$state).map(n=>({editable:!0,key:n,value:t.$state[n]}))};return t._getters&&t._getters.length&&(e.getters=t._getters.map(n=>({editable:!1,key:n,value:t[n]}))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map(n=>({editable:!0,key:n,value:t[n]}))),e}function ik(t){return t?Array.isArray(t)?t.reduce((e,n)=>(e.keys.push(n.key),e.operations.push(n.type),e.oldValue[n.key]=n.oldValue,e.newValue[n.key]=n.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:yn(t.type),key:yn(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function ok(t){switch(t){case Wn.direct:return"mutation";case Wn.patchFunction:return"$patch";case Wn.patchObject:return"$patch";default:return"unknown"}}let yi=!0;const xc=[],Is="pinia:mutations",Pt="pinia",{assign:ak}=Object,cu=t=>"🍍 "+t;function ck(t,e){w0({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:xc,app:t},n=>{typeof n.now!="function"&&ht("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:Is,label:"Pinia 🍍",color:15064968}),n.addInspector({id:Pt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{XP(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await ZP(e),n.sendInspectorTree(Pt),n.sendInspectorState(Pt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{ek(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await nk(e),n.sendInspectorTree(Pt),n.sendInspectorState(Pt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:r=>{const s=e._s.get(r);s?typeof s.$reset!="function"?ht(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`,"warn"):(s.$reset(),ht(`Store "${r}" reset.`)):ht(`Cannot reset "${r}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(r=>{const s=r.componentInstance&&r.componentInstance.proxy;if(s&&s._pStores){const i=r.componentInstance.proxy._pStores;Object.values(i).forEach(o=>{r.instanceData.state.push({type:cu(o.$id),key:"state",editable:!0,value:o._isOptionsAPI?{_custom:{value:ye(o.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>o.$reset()}]}}:Object.keys(o.$state).reduce((a,u)=>(a[u]=o.$state[u],a),{})}),o._getters&&o._getters.length&&r.instanceData.state.push({type:cu(o.$id),key:"getters",editable:!1,value:o._getters.reduce((a,u)=>{try{a[u]=o[u]}catch(l){a[u]=l}return a},{})})})}}),n.on.getInspectorTree(r=>{if(r.app===t&&r.inspectorId===Pt){let s=[e];s=s.concat(Array.from(e._s.values())),r.rootNodes=(r.filter?s.filter(i=>"$id"in i?i.$id.toLowerCase().includes(r.filter.toLowerCase()):z0.toLowerCase().includes(r.filter.toLowerCase())):s).map(rk)}}),globalThis.$pinia=e,n.on.getInspectorState(r=>{if(r.app===t&&r.inspectorId===Pt){const s=r.nodeId===Vc?e:e._s.get(r.nodeId);if(!s)return;s&&(r.nodeId!==Vc&&(globalThis.$store=ye(s)),r.state=sk(s))}}),n.on.editInspectorState(r=>{if(r.app===t&&r.inspectorId===Pt){const s=r.nodeId===Vc?e:e._s.get(r.nodeId);if(!s)return ht(`store "${r.nodeId}" not found`,"error");const{path:i}=r;Td(s)?i.unshift("state"):(i.length!==1||!s._customProperties.has(i[0])||i[0]in s.$state)&&i.unshift("$state"),yi=!1,r.set(s,i,r.state.value),yi=!0}}),n.on.editComponentState(r=>{if(r.type.startsWith("🍍")){const s=r.type.replace(/^🍍\s*/,""),i=e._s.get(s);if(!i)return ht(`store "${s}" not found`,"error");const{path:o}=r;if(o[0]!=="state")return ht(`Invalid path for store "${s}":
${o}
Only state can be modified.`);o[0]="$state",yi=!1,r.set(i,o,r.state.value),yi=!0}})})}function uk(t,e){xc.includes(cu(e.$id))||xc.push(cu(e.$id)),w0({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:xc,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},n=>{const r=typeof n.now=="function"?n.now.bind(n):Date.now;e.$onAction(({after:o,onError:a,name:u,args:l})=>{const h=K0++;n.addTimelineEvent({layerId:Is,event:{time:r(),title:"🛫 "+u,subtitle:"start",data:{store:yn(e.$id),action:yn(u),args:l},groupId:h}}),o(f=>{zr=void 0,n.addTimelineEvent({layerId:Is,event:{time:r(),title:"🛬 "+u,subtitle:"end",data:{store:yn(e.$id),action:yn(u),args:l,result:f},groupId:h}})}),a(f=>{zr=void 0,n.addTimelineEvent({layerId:Is,event:{time:r(),logType:"error",title:"💥 "+u,subtitle:"end",data:{store:yn(e.$id),action:yn(u),args:l,error:f},groupId:h}})})},!0),e._customProperties.forEach(o=>{Ns(()=>qr(e[o]),(a,u)=>{n.notifyComponentUpdate(),n.sendInspectorState(Pt),yi&&n.addTimelineEvent({layerId:Is,event:{time:r(),title:"Change",subtitle:o,data:{newValue:a,oldValue:u},groupId:zr}})},{deep:!0})}),e.$subscribe(({events:o,type:a},u)=>{if(n.notifyComponentUpdate(),n.sendInspectorState(Pt),!yi)return;const l={time:r(),title:ok(a),data:ak({store:yn(e.$id)},ik(o)),groupId:zr};a===Wn.patchFunction?l.subtitle="⤵️":a===Wn.patchObject?l.subtitle="🧩":o&&!Array.isArray(o)&&(l.subtitle=o.type),o&&(l.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),n.addTimelineEvent({layerId:Is,event:l})},{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=Hr(o=>{s(o),n.addTimelineEvent({layerId:Is,event:{time:r(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:yn(e.$id),info:yn("HMR update")}}}),n.notifyComponentUpdate(),n.sendInspectorTree(Pt),n.sendInspectorState(Pt)});const{$dispose:i}=e;e.$dispose=()=>{i(),n.notifyComponentUpdate(),n.sendInspectorTree(Pt),n.sendInspectorState(Pt),n.getSettings().logStoreChanges&&ht(`Disposed "${e.$id}" store 🗑`)},n.notifyComponentUpdate(),n.sendInspectorTree(Pt),n.sendInspectorState(Pt),n.getSettings().logStoreChanges&&ht(`"${e.$id}" store installed 🆕`)})}let K0=0,zr;function u_(t,e,n){const r=e.reduce((s,i)=>(s[i]=ye(t)[i],s),{});for(const s in r)t[s]=function(){const i=K0,o=n?new Proxy(t,{get(...u){return zr=i,Reflect.get(...u)},set(...u){return zr=i,Reflect.set(...u)}}):t;zr=i;const a=r[s].apply(o,arguments);return zr=void 0,a}}function lk({app:t,store:e,options:n}){if(!e.$id.startsWith("__hot:")){if(e._isOptionsAPI=!!n.state,!e._p._testing){u_(e,Object.keys(n.actions),e._isOptionsAPI);const r=e._hotUpdate;ye(e)._hotUpdate=function(s){r.apply(this,arguments),u_(e,Object.keys(s._hmrPayload.actions),!!e._isOptionsAPI)}}uk(t,e)}}function hk(){const t=Wv(!0),e=t.run(()=>Vt({}));let n=[],r=[];const s=Hr({install(i){fa(s),s._a=i,i.provide(F0,s),i.config.globalProperties.$pinia=s,Vs&&ck(i,s),r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return Vs&&typeof Proxy<"u"&&s.use(lk),s}function W0(t,e){for(const n in e){const r=e[n];if(!(n in t))continue;const s=t[n];Us(s)&&Us(r)&&!$e(r)&&!Sn(r)?t[n]=W0(s,r):t[n]=r}return t}const fk=()=>{};function l_(t,e,n,r=fk){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Gv()&&Yb(s),s}function ui(t,...e){t.slice().forEach(n=>{n(...e)})}const dk=t=>t(),h_=Symbol(),eh=Symbol();function Xh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Us(s)&&Us(r)&&t.hasOwnProperty(n)&&!$e(r)&&!Sn(r)?t[n]=Xh(s,r):t[n]=r}return t}const pk=Symbol("pinia:skipHydration");function mk(t){return!Us(t)||!Object.prototype.hasOwnProperty.call(t,pk)}const{assign:ln}=Object;function f_(t){return!!($e(t)&&t.effect)}function d_(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let u;function l(){!a&&!r&&(n.state.value[t]=s?s():{});const h=Cm(r?Vt(s?s():{}).value:n.state.value[t]);return ln(h,i,Object.keys(o||{}).reduce((f,p)=>(p in h&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${p}" in store "${t}".`),f[p]=Hr(pt(()=>{fa(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return u=Zh(t,l,e,n,r,!0),u}function Zh(t,e,n={},r,s,i){let o;const a=ln({actions:{}},n);if(!r._e.active)throw new Error("Pinia destroyed");const u={deep:!0};u.onTrigger=T=>{l?g=T:l==!1&&!S._hotUpdating&&(Array.isArray(g)?g.push(T):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let l,h,f=[],p=[],g;const v=r.state.value[t];!i&&!v&&!s&&(r.state.value[t]={});const P=Vt({});let R;function D(T){let w;l=h=!1,g=[],typeof T=="function"?(T(r.state.value[t]),w={type:Wn.patchFunction,storeId:t,events:g}):(Xh(r.state.value[t],T),w={type:Wn.patchObject,payload:T,storeId:t,events:g});const C=R=Symbol();Zc().then(()=>{R===C&&(l=!0)}),h=!0,ui(f,w,r.state.value[t])}const M=i?function(){const{state:w}=n,C=w?w():{};this.$patch(b=>{ln(b,C)})}:()=>{throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`)};function V(){o.stop(),f=[],p=[],r._s.delete(t)}const z=(T,w="")=>{if(h_ in T)return T[eh]=w,T;const C=function(){fa(r);const b=Array.from(arguments),Be=[],Ke=[];function Ne(we){Be.push(we)}function J(we){Ke.push(we)}ui(p,{args:b,name:C[eh],store:S,after:Ne,onError:J});let he;try{he=T.apply(this&&this.$id===t?this:S,b)}catch(we){throw ui(Ke,we),we}return he instanceof Promise?he.then(we=>(ui(Be,we),we)).catch(we=>(ui(Ke,we),Promise.reject(we))):(ui(Be,he),he)};return C[h_]=!0,C[eh]=w,C},W=Hr({actions:{},getters:{},state:[],hotState:P}),ae={_p:r,$id:t,$onAction:l_.bind(null,p),$patch:D,$reset:M,$subscribe(T,w={}){const C=l_(f,T,w.detached,()=>b()),b=o.run(()=>Ns(()=>r.state.value[t],Be=>{(w.flush==="sync"?h:l)&&T({storeId:t,type:Wn.direct,events:g},Be)},ln({},u,w)));return C},$dispose:V},S=ba(ln({_hmrPayload:W,_customProperties:Hr(new Set)},ae));r._s.set(t,S);const I=(r._a&&r._a.runWithContext||dk)(()=>r._e.run(()=>(o=Wv()).run(()=>e({action:z}))));for(const T in I){const w=I[T];if($e(w)&&!f_(w)||Sn(w))s?P.value[T]=wc(I,T):i||(v&&mk(w)&&($e(w)?w.value=v[T]:Xh(w,v[T])),r.state.value[t][T]=w),W.state.push(T);else if(typeof w=="function"){const C=s?w:z(w,T);I[T]=C,W.actions[T]=w,a.actions[T]=w}else f_(w)&&(W.getters[T]=i?n.getters[T]:w,Vs&&(I._getters||(I._getters=Hr([]))).push(T))}if(ln(S,I),ln(ye(S),I),Object.defineProperty(S,"$state",{get:()=>s?P.value:r.state.value[t],set:T=>{if(s)throw new Error("cannot set hotState");D(w=>{ln(w,T)})}}),S._hotUpdate=Hr(T=>{S._hotUpdating=!0,T._hmrPayload.state.forEach(w=>{if(w in S.$state){const C=T.$state[w],b=S.$state[w];typeof C=="object"&&Us(C)&&Us(b)?W0(C,b):T.$state[w]=b}S[w]=wc(T.$state,w)}),Object.keys(S.$state).forEach(w=>{w in T.$state||delete S[w]}),l=!1,h=!1,r.state.value[t]=wc(T._hmrPayload,"hotState"),h=!0,Zc().then(()=>{l=!0});for(const w in T._hmrPayload.actions){const C=T[w];S[w]=z(C,w)}for(const w in T._hmrPayload.getters){const C=T._hmrPayload.getters[w],b=i?pt(()=>(fa(r),C.call(S,S))):C;S[w]=b}Object.keys(S._hmrPayload.getters).forEach(w=>{w in T._hmrPayload.getters||delete S[w]}),Object.keys(S._hmrPayload.actions).forEach(w=>{w in T._hmrPayload.actions||delete S[w]}),S._hmrPayload=T._hmrPayload,S._getters=T._getters,S._hotUpdating=!1}),Vs){const T={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(w=>{Object.defineProperty(S,w,ln({value:S[w]},T))})}return r._p.forEach(T=>{if(Vs){const w=o.run(()=>T({store:S,app:r._a,pinia:r,options:a}));Object.keys(w||{}).forEach(C=>S._customProperties.add(C)),ln(S,w)}else ln(S,o.run(()=>T({store:S,app:r._a,pinia:r,options:a})))}),S.$state&&typeof S.$state=="object"&&typeof S.$state.constructor=="function"&&!S.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${S.$id}".`),v&&i&&n.hydrate&&n.hydrate(S.$state,v),l=!0,h=!0,S}/*! #__NO_SIDE_EFFECTS__ */function G0(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const u=vS();if(o=o||(u?Rn(F0,null):null),o&&fa(o),!Jh)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);o=Jh,o._s.has(t)||(s?Zh(t,e,r,o):d_(t,r,o),i._pinia=o);const l=o._s.get(t);if(a){const h="__hot:"+t,f=s?Zh(h,e,r,o,!0):d_(h,ln({},r),o,!0);a._hotUpdate(f),delete o.state.value[h],o._s.delete(h)}if(Vs){const h=Ki();if(h&&h.proxy&&!a){const f=h.proxy,p="_pStores"in f?f._pStores:f._pStores={};p[t]=l}}return l}return i.$id=t,i}function wd(t){const e=ye(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=pt({get:()=>t[r],set(i){t[r]=i}}):($e(s)||Sn(s))&&(n[r]=wc(t,r))}return n}function gk(){return Q0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Q0(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const _k=typeof Proxy=="function",yk="devtools-plugin:setup",vk="plugin:settings:set";let li,ef;function Ek(){var t;return li!==void 0||(typeof window<"u"&&window.performance?(li=!0,ef=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(li=!0,ef=globalThis.perf_hooks.performance):li=!1),li}function Tk(){return Ek()?ef.now():Date.now()}class wk{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Tk()}},n&&n.on(vk,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...u)=>{this.onQueue.push({method:a,args:u})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...u)=>(this.targetQueue.push({method:a,args:u,resolve:()=>{}}),this.fallbacks[a](...u)):(...u)=>new Promise(l=>{this.targetQueue.push({method:a,args:u,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ik(t,e){const n=t,r=Q0(),s=gk(),i=_k&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(yk,t,e);else{const o=i?new wk(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const lr=typeof document<"u";function Y0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Y0(t.default)}const xe=Object.assign;function th(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Bo=()=>{},an=Array.isArray;function Ie(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const J0=/#/g,Ak=/&/g,Sk=/\//g,Rk=/=/g,Ck=/\?/g,X0=/\+/g,Pk=/%5B/g,kk=/%5D/g,Z0=/%5E/g,Ok=/%60/g,eT=/%7B/g,Dk=/%7C/g,tT=/%7D/g,Nk=/%20/g;function Id(t){return encodeURI(""+t).replace(Dk,"|").replace(Pk,"[").replace(kk,"]")}function Vk(t){return Id(t).replace(eT,"{").replace(tT,"}").replace(Z0,"^")}function tf(t){return Id(t).replace(X0,"%2B").replace(Nk,"+").replace(J0,"%23").replace(Ak,"%26").replace(Ok,"`").replace(eT,"{").replace(tT,"}").replace(Z0,"^")}function xk(t){return tf(t).replace(Rk,"%3D")}function Mk(t){return Id(t).replace(J0,"%23").replace(Ck,"%3F")}function Lk(t){return t==null?"":Mk(t).replace(Sk,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{Ie(`Error decoding "${t}". Using original value`)}return""+t}const Fk=/\/$/,Uk=t=>t.replace(Fk,"");function nh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),i=e.slice(u+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jk(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:xi(o)}}function $k(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function p_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function m_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ts(e.matched[r],n.matched[s])&&nT(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nT(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bk(t[n],e[n]))return!1;return!0}function Bk(t,e){return an(t)?g_(t,e):an(e)?g_(e,t):t===e}function g_(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jk(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return Ie(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var da;(function(t){t.pop="pop",t.push="push"})(da||(da={}));var jo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(jo||(jo={}));function Hk(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Uk(t)}const qk=/^[^#]+#/;function zk(t,e){return t.replace(qk,"#")+e}function Kk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Gu=()=>({left:window.scrollX,top:window.scrollY});function Wk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){Ie(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Ie(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){Ie(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Kk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function __(t,e){return(history.state?history.state.position-e:-1)+t}const nf=new Map;function Gk(t,e){nf.set(t,e)}function Qk(t){const e=nf.get(t);return nf.delete(t),e}let Yk=()=>location.protocol+"//"+location.host;function rT(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,u=s.slice(a);return u[0]!=="/"&&(u="/"+u),p_(u,"")}return p_(n,t)+r+s}function Jk(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=rT(t,location),v=n.value,P=e.value;let R=0;if(p){if(n.value=g,e.value=p,o&&o===v){o=null;return}R=P?p.position-P.position:0}else r(g);s.forEach(D=>{D(n.value,v,{delta:R,type:da.pop,direction:R?R>0?jo.forward:jo.back:jo.unknown})})};function u(){o=n.value}function l(p){s.push(p);const g=()=>{const v=s.indexOf(p);v>-1&&s.splice(v,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(xe({},p.state,{scroll:Gu()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function y_(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Gu():null}}function Xk(t){const{history:e,location:n}=window,r={value:rT(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,l,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+u:Yk()+t+u;try{e[h?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){Ie("Error with push/replace State",g),n[h?"replace":"assign"](p)}}function o(u,l){const h=xe({},e.state,y_(s.value.back,u,s.value.forward,!0),l,{position:s.value.position});i(u,h,!0),r.value=u}function a(u,l){const h=xe({},s.value,e.state,{forward:u,scroll:Gu()});e.state||Ie(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`),i(h.current,h,!0);const f=xe({},y_(r.value,u,null),{position:h.position+1},l);i(u,f,!1),r.value=u}return{location:r,state:s,push:a,replace:o}}function Zk(t){t=Hk(t);const e=Xk(t),n=Jk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:zk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uu(t){return typeof t=="string"||t&&typeof t=="object"}function sT(t){return typeof t=="string"||typeof t=="symbol"}const iT=Symbol("navigation failure");var v_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(v_||(v_={}));const e2={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${n2(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Mi(t,e){return xe(new Error(e2[t](e)),{type:t,[iT]:!0},e)}function cr(t,e){return t instanceof Error&&iT in t&&(e==null||!!(t.type&e))}const t2=["params","query","hash"];function n2(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of t2)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const E_="[^/]+?",r2={sensitive:!1,strict:!1,start:!0,end:!0},s2=/[.+*?^${}()[\]/\\]/g;function i2(t,e){const n=xe({},r2,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const h=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(s2,"\\$&"),g+=40;else if(p.type===1){const{value:v,repeatable:P,optional:R,regexp:D}=p;i.push({name:v,repeatable:P,optional:R});const M=D||E_;if(M!==E_){g+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+z.message)}}let V=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(V=R&&l.length<2?`(?:/${V})`:"/"+V),R&&(V+="?"),s+=V,g+=20,R&&(g+=-8),P&&(g+=-20),M===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const h=l.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",v=i[p-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function u(l){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:v,repeatable:P,optional:R}=g,D=v in l?l[v]:"";if(an(D)&&!P)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=an(D)?D.join("/"):D;if(!M)if(R)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);h+=M}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:u}}function o2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function oT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=o2(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(T_(r))return 1;if(T_(s))return-1}return s.length-r.length}function T_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const a2={type:0,value:""},c2=/[a-zA-Z0-9_]/;function u2(t){if(!t)return[[]];if(t==="/")return[[a2]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,u,l="",h="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:h,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=u}for(;a<t.length;){if(u=t[a++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(l&&f(),o()):u===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:u==="("?n=2:c2.test(u)?p():(f(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--);break;case 2:u===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+u:n=3:h+=u;break;case 3:f(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function l2(t,e,n){const r=i2(u2(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&Ie(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function h2(t,e){const n=[],r=new Map;e=A_({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const v=!g,P=I_(f);m2(P,p),P.aliasOf=g&&g.record;const R=A_(e,f),D=[P];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of z)D.push(I_(xe({},P,{components:g?g.record.components:P.components,path:W,aliasOf:g?g.record:P})))}let M,V;for(const z of D){const{path:W}=z;if(p&&W[0]!=="/"){const ae=p.record.path,S=ae[ae.length-1]==="/"?"":"/";z.path=p.record.path+(W&&S+W)}if(z.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);if(M=l2(z,p,R),p&&W[0]==="/"&&_2(M,p),g?(g.alias.push(M),p2(g,M)):(V=V||M,V!==M&&V.alias.push(M),v&&f.name&&!b_(M)&&(g2(f,p),o(f.name))),aT(M)&&u(M),P.children){const ae=P.children;for(let S=0;S<ae.length;S++)i(ae[S],M,g&&g.children[S])}g=g||M}return V?()=>{o(V)}:Bo}function o(f){if(sT(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function u(f){const p=y2(f,n);n.splice(p,0,f),f.record.name&&!b_(f)&&r.set(f.record.name,f)}function l(f,p){let g,v={},P,R;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Mi(1,{location:f});{const V=Object.keys(f.params||{}).filter(z=>!g.keys.find(W=>W.name===z));V.length&&Ie(`Discarded invalid param(s) "${V.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}R=g.record.name,v=xe(w_(p.params,g.keys.filter(V=>!V.optional).concat(g.parent?g.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),f.params&&w_(f.params,g.keys.map(V=>V.name))),P=g.stringify(v)}else if(f.path!=null)P=f.path,P.startsWith("/")||Ie(`The Matcher cannot resolve relative paths but received "${P}". Unless you directly called \`matcher.resolve("${P}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),g=n.find(V=>V.re.test(P)),g&&(v=g.parse(P),R=g.record.name);else{if(g=p.name?r.get(p.name):n.find(V=>V.re.test(p.path)),!g)throw Mi(1,{location:f,currentLocation:p});R=g.record.name,v=xe({},p.params,f.params),P=g.stringify(v)}const D=[];let M=g;for(;M;)D.unshift(M.record),M=M.parent;return{name:R,path:P,params:v,matched:D,meta:d2(D)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function w_(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function I_(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:f2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function f2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function b_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function d2(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function A_(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rf(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function p2(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(rf.bind(null,n)))return Ie(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(rf.bind(null,n)))return Ie(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function m2(t,e){e&&e.record.name&&!t.name&&!t.path&&Ie(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function g2(t,e){for(let n=e;n;n=n.parent)if(n.record.name===t.name)throw new Error(`A route named "${String(t.name)}" has been added as a ${e===n?"child":"descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`)}function _2(t,e){for(const n of e.keys)if(!t.keys.find(rf.bind(null,n)))return Ie(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function y2(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;oT(t,e[i])<0?r=i:n=i+1}const s=v2(t);return s&&(r=e.lastIndexOf(s,r-1),r<0&&Ie(`Finding ancestor route "${s.record.path}" failed for "${t.record.path}"`)),r}function v2(t){let e=t;for(;e=e.parent;)if(aT(e)&&oT(t,e)===0)return e}function aT({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function E2(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(X0," "),o=i.indexOf("="),a=xi(o<0?i:i.slice(0,o)),u=o<0?null:xi(i.slice(o+1));if(a in e){let l=e[a];an(l)||(l=e[a]=[l]),l.push(u)}else e[a]=u}return e}function S_(t){let e="";for(let n in t){const r=t[n];if(n=xk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&tf(i)):[r&&tf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function T2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const w2=Symbol("router view location matched"),R_=Symbol("router view depth"),bd=Symbol("router"),Ad=Symbol("route location"),sf=Symbol("router view location");function wo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,u)=>{const l=p=>{p===!1?u(Mi(4,{from:n,to:e})):p instanceof Error?u(p):uu(p)?u(Mi(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,I2(l,e,n)));let f=Promise.resolve(h);if(t.length<3&&(f=f.then(l)),t.length>2){const p=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof h=="object"&&"then"in h)f=f.then(g=>l._called?g:(Ie(p),Promise.reject(new Error("Invalid navigation guard"))));else if(h!==void 0&&!l._called){Ie(p),u(new Error("Invalid navigation guard"));return}}f.catch(p=>u(p))})}function I2(t,e,n){let r=0;return function(){r++===1&&Ie(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function rh(t,e,n,r,s=i=>i()){const i=[];for(const o of t){!o.components&&!o.children.length&&Ie(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const a in o.components){let u=o.components[a];{if(!u||typeof u!="object"&&typeof u!="function")throw Ie(`Component "${a}" in record with path "${o.path}" is not a valid component. Received "${String(u)}".`),new Error("Invalid route component");if("then"in u){Ie(`Component "${a}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=u;u=()=>l}else u.__asyncLoader&&!u.__warnedDefineAsync&&(u.__warnedDefineAsync=!0,Ie(`Component "${a}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Y0(u)){const h=(u.__vccOpts||u)[e];h&&i.push(xr(h,n,r,o,a,s))}else{let l=u();"catch"in l||(Ie(`Component "${a}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),i.push(()=>l.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=bk(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&xr(g,n,r,o,a,s)()}))}}}return i}function C_(t){const e=Rn(bd),n=Rn(Ad);let r=!1,s=null;const i=pt(()=>{const h=qr(t.to);return(!r||h!==s)&&(uu(h)||(r?Ie(`Invalid value for prop "to" in useLink()
- to:`,h,`
- previous to:`,s,`
- props:`,t):Ie(`Invalid value for prop "to" in useLink()
- to:`,h,`
- props:`,t)),s=h,r=!0),e.resolve(h)}),o=pt(()=>{const{matched:h}=i.value,{length:f}=h,p=h[f-1],g=n.matched;if(!p||!g.length)return-1;const v=g.findIndex(ts.bind(null,p));if(v>-1)return v;const P=P_(h[f-2]);return f>1&&P_(p)===P&&g[g.length-1].path!==P?g.findIndex(ts.bind(null,h[f-2])):v}),a=pt(()=>o.value>-1&&R2(n.params,i.value.params)),u=pt(()=>o.value>-1&&o.value===n.matched.length-1&&nT(n.params,i.value.params));function l(h={}){if(S2(h)){const f=e[qr(t.replace)?"replace":"push"](qr(t.to)).catch(Bo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}if(lr){const h=Ki();if(h){const f={route:i.value,isActive:a.value,isExactActive:u.value,error:null};h.__vrl_devtools=h.__vrl_devtools||[],h.__vrl_devtools.push(f),$S(()=>{f.route=i.value,f.isActive=a.value,f.isExactActive=u.value,f.error=uu(qr(t.to))?null:'Invalid "to" value'},{flush:"post"})}}return{route:i,href:pt(()=>i.value.href),isActive:a,isExactActive:u,navigate:l}}function b2(t){return t.length===1?t[0]:t}const A2=Ra({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:C_,setup(t,{slots:e}){const n=ba(C_(t)),{options:r}=Rn(bd),s=pt(()=>({[k_(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[k_(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&b2(e.default(n));return t.custom?i:e0("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cT=A2;function S2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function R2(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function P_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const k_=(t,e,n)=>t??e??n,C2=Ra({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){P2();const r=Rn(sf),s=pt(()=>t.route||r.value),i=Rn(R_,0),o=pt(()=>{let l=qr(i);const{matched:h}=s.value;let f;for(;(f=h[l])&&!f.components;)l++;return l}),a=pt(()=>s.value.matched[o.value]);Sc(R_,pt(()=>o.value+1)),Sc(w2,a),Sc(sf,s);const u=Vt();return Ns(()=>[u.value,a.value,t.name],([l,h,f],[p,g,v])=>{h&&(h.instances[f]=l,g&&g!==h&&l&&l===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),l&&h&&(!g||!ts(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return O_(n.default,{Component:p,route:l});const g=f.props[h],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=e0(p,xe({},v,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[h]=null)},ref:u}));if(lr&&R.ref){const D={depth:o.value,name:f.name,path:f.path,meta:f.meta};(an(R.ref)?R.ref.map(V=>V.i):[R.ref.i]).forEach(V=>{V.__vrv_devtools=D})}return O_(n.default,{Component:R,route:l})||R}}});function O_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uT=C2;function P2(){const t=Ki(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";Ie(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function Io(t,e){const n=xe({},t,{matched:t.matched.map(r=>$2(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function hc(t){return{_custom:{display:t}}}let k2=0;function O2(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=k2++;Ik({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((h,f)=>{h.instanceData&&h.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Io(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:h,componentInstance:f})=>{if(f.__vrv_devtools){const p=f.__vrv_devtools;h.tags.push({label:(p.name?`${p.name.toString()}: `:"")+p.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:lT})}an(f.__vrl_devtools)&&(f.__devtoolsApi=s,f.__vrl_devtools.forEach(p=>{let g=p.route.path,v=dT,P="",R=0;p.error?(g=p.error,v=M2,R=L2):p.isExactActive?(v=fT,P="This is exactly active"):p.isActive&&(v=hT,P="This link is active"),h.tags.push({label:g,textColor:R,tooltip:P,backgroundColor:v})}))}),Ns(e.currentRoute,()=>{u(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((h,f)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:f.fullPath,logType:"error",time:s.now(),data:{error:h},groupId:f.meta.__navigationId}})});let o=0;e.beforeEach((h,f)=>{const p={guard:hc("beforeEach"),from:Io(f,"Current Location during this navigation"),to:Io(h,"Target location")};Object.defineProperty(h.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:h.fullPath,data:p,groupId:h.meta.__navigationId}})}),e.afterEach((h,f,p)=>{const g={guard:hc("afterEach")};p?(g.failure={_custom:{type:Error,readOnly:!0,display:p?p.message:"",tooltip:"Navigation Failure",value:p}},g.status=hc("❌")):g.status=hc("✅"),g.from=Io(f,"Current Location during this navigation"),g.to=Io(h,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:h.fullPath,time:s.now(),data:g,logType:p?"warning":"default",groupId:h.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!l)return;const h=l;let f=n.getRoutes().filter(p=>!p.parent||!p.parent.record.components);f.forEach(gT),h.filter&&(f=f.filter(p=>of(p,h.filter.toLowerCase()))),f.forEach(p=>mT(p,e.currentRoute.value)),h.rootNodes=f.map(pT)}let l;s.on.getInspectorTree(h=>{l=h,h.app===t&&h.inspectorId===a&&u()}),s.on.getInspectorState(h=>{if(h.app===t&&h.inspectorId===a){const p=n.getRoutes().find(g=>g.record.__vd_id===h.nodeId);p&&(h.state={options:N2(p)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function D2(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function N2(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${D2(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const lT=15485081,hT=2450411,fT=8702998,V2=2282478,dT=16486972,x2=6710886,M2=16704226,L2=12131356;function pT(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:V2}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:dT}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:lT}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:fT}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:hT}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:x2});let r=n.__vd_id;return r==null&&(r=String(F2++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(pT)}}let F2=0;const U2=/^\/(.*)\/([a-z]*)$/;function mT(t,e){const n=e.matched.length&&ts(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>ts(r,t.record))),t.children.forEach(r=>mT(r,e))}function gT(t){t.__vd_match=!1,t.children.forEach(gT)}function of(t,e){const n=String(t.re).match(U2);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>of(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=xi(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>of(o,e))}function $2(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function B2(t){const e=h2(t.routes,t),n=t.parseQuery||E2,r=t.stringifyQuery||S_,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');const i=wo(),o=wo(),a=wo(),u=gA(Or);let l=Or;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=th.bind(null,L=>""+L),f=th.bind(null,Lk),p=th.bind(null,xi);function g(L,te){let ee,ie;return sT(L)?(ee=e.getRecordMatcher(L),ee||Ie(`Parent route "${String(L)}" not found when adding child route`,te),ie=te):ie=L,e.addRoute(ie,ee)}function v(L){const te=e.getRecordMatcher(L);te?e.removeRoute(te):Ie(`Cannot remove non-existent route "${String(L)}"`)}function P(){return e.getRoutes().map(L=>L.record)}function R(L){return!!e.getRecordMatcher(L)}function D(L,te){if(te=xe({},te||u.value),typeof L=="string"){const A=nh(n,L,te.path),N=e.resolve({path:A.path},te),B=s.createHref(A.fullPath);return B.startsWith("//")?Ie(`Location "${L}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):N.matched.length||Ie(`No match found for location with path "${L}"`),xe(A,N,{params:p(N.params),hash:xi(A.hash),redirectedFrom:void 0,href:B})}if(!uu(L))return Ie(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`,L),D({});let ee;if(L.path!=null)"params"in L&&!("name"in L)&&Object.keys(L.params).length&&Ie(`Path "${L.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),ee=xe({},L,{path:nh(n,L.path,te.path).path});else{const A=xe({},L.params);for(const N in A)A[N]==null&&delete A[N];ee=xe({},L,{params:f(A)}),te.params=f(te.params)}const ie=e.resolve(ee,te),Te=L.hash||"";Te&&!Te.startsWith("#")&&Ie(`A \`hash\` should always start with the character "#". Replace "${Te}" with "#${Te}".`),ie.params=h(p(ie.params));const We=$k(r,xe({},L,{hash:Vk(Te),path:ie.path})),y=s.createHref(We);return y.startsWith("//")?Ie(`Location "${L}" resolved to "${y}". A resolved location cannot start with multiple slashes.`):ie.matched.length||Ie(`No match found for location with path "${L.path!=null?L.path:L}"`),xe({fullPath:We,hash:Te,query:r===S_?T2(L.query):L.query||{}},ie,{redirectedFrom:void 0,href:y})}function M(L){return typeof L=="string"?nh(n,L,u.value.path):xe({},L)}function V(L,te){if(l!==L)return Mi(8,{from:te,to:L})}function z(L){return S(L)}function W(L){return z(xe(M(L),{replace:!0}))}function ae(L){const te=L.matched[L.matched.length-1];if(te&&te.redirect){const{redirect:ee}=te;let ie=typeof ee=="function"?ee(L):ee;if(typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=M(ie):{path:ie},ie.params={}),ie.path==null&&!("name"in ie))throw Ie(`Invalid redirect found:
${JSON.stringify(ie,null,2)}
 when navigating to "${L.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return xe({query:L.query,hash:L.hash,params:ie.path!=null?{}:L.params},ie)}}function S(L,te){const ee=l=D(L),ie=u.value,Te=L.state,We=L.force,y=L.replace===!0,A=ae(ee);if(A)return S(xe(M(A),{state:typeof A=="object"?xe({},Te,A.state):Te,force:We,replace:y}),te||ee);const N=ee;N.redirectedFrom=te;let B;return!We&&m_(r,ie,ee)&&(B=Mi(16,{to:N,from:ie}),ot(ie,ie,!0,!1)),(B?Promise.resolve(B):T(N,ie)).catch(F=>cr(F)?cr(F,2)?F:_t(F):he(F,N,ie)).then(F=>{if(F){if(cr(F,2))return m_(r,D(F.to),N)&&te&&(te._count=te._count?te._count+1:1)>30?(Ie(`Detected a possibly infinite redirection in a navigation guard when going from "${ie.fullPath}" to "${N.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):S(xe({replace:y},M(F.to),{state:typeof F.to=="object"?xe({},Te,F.to.state):Te,force:We}),te||N)}else F=C(N,ie,!0,y,Te);return w(N,ie,F),F})}function E(L,te){const ee=V(L,te);return ee?Promise.reject(ee):Promise.resolve()}function I(L){const te=Qt.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(L):L()}function T(L,te){let ee;const[ie,Te,We]=j2(L,te);ee=rh(ie.reverse(),"beforeRouteLeave",L,te);for(const A of ie)A.leaveGuards.forEach(N=>{ee.push(xr(N,L,te))});const y=E.bind(null,L,te);return ee.push(y),Mn(ee).then(()=>{ee=[];for(const A of i.list())ee.push(xr(A,L,te));return ee.push(y),Mn(ee)}).then(()=>{ee=rh(Te,"beforeRouteUpdate",L,te);for(const A of Te)A.updateGuards.forEach(N=>{ee.push(xr(N,L,te))});return ee.push(y),Mn(ee)}).then(()=>{ee=[];for(const A of We)if(A.beforeEnter)if(an(A.beforeEnter))for(const N of A.beforeEnter)ee.push(xr(N,L,te));else ee.push(xr(A.beforeEnter,L,te));return ee.push(y),Mn(ee)}).then(()=>(L.matched.forEach(A=>A.enterCallbacks={}),ee=rh(We,"beforeRouteEnter",L,te,I),ee.push(y),Mn(ee))).then(()=>{ee=[];for(const A of o.list())ee.push(xr(A,L,te));return ee.push(y),Mn(ee)}).catch(A=>cr(A,8)?A:Promise.reject(A))}function w(L,te,ee){a.list().forEach(ie=>I(()=>ie(L,te,ee)))}function C(L,te,ee,ie,Te){const We=V(L,te);if(We)return We;const y=te===Or,A=lr?history.state:{};ee&&(ie||y?s.replace(L.fullPath,xe({scroll:y&&A&&A.scroll},Te)):s.push(L.fullPath,Te)),u.value=L,ot(L,te,ee,y),_t()}let b;function Be(){b||(b=s.listen((L,te,ee)=>{if(!zt.listening)return;const ie=D(L),Te=ae(ie);if(Te){S(xe(Te,{replace:!0,force:!0}),ie).catch(Bo);return}l=ie;const We=u.value;lr&&Gk(__(We.fullPath,ee.delta),Gu()),T(ie,We).catch(y=>cr(y,12)?y:cr(y,2)?(S(xe(M(y.to),{force:!0}),ie).then(A=>{cr(A,20)&&!ee.delta&&ee.type===da.pop&&s.go(-1,!1)}).catch(Bo),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),he(y,ie,We))).then(y=>{y=y||C(ie,We,!1),y&&(ee.delta&&!cr(y,8)?s.go(-ee.delta,!1):ee.type===da.pop&&cr(y,20)&&s.go(-1,!1)),w(ie,We,y)}).catch(Bo)}))}let Ke=wo(),Ne=wo(),J;function he(L,te,ee){_t(L);const ie=Ne.list();return ie.length?ie.forEach(Te=>Te(L,te,ee)):(Ie("uncaught error during route navigation:"),console.error(L)),Promise.reject(L)}function we(){return J&&u.value!==Or?Promise.resolve():new Promise((L,te)=>{Ke.add([L,te])})}function _t(L){return J||(J=!L,Be(),Ke.list().forEach(([te,ee])=>L?ee(L):te()),Ke.reset()),L}function ot(L,te,ee,ie){const{scrollBehavior:Te}=t;if(!lr||!Te)return Promise.resolve();const We=!ee&&Qk(__(L.fullPath,0))||(ie||!ee)&&history.state&&history.state.scroll||null;return Zc().then(()=>Te(L,te,We)).then(y=>y&&Wk(y)).catch(y=>he(y,L,te))}const Ve=L=>s.go(L);let Re;const Qt=new Set,zt={currentRoute:u,listening:!0,addRoute:g,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:P,resolve:D,options:t,push:z,replace:W,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ne.add,isReady:we,install(L){const te=this;L.component("RouterLink",cT),L.component("RouterView",uT),L.config.globalProperties.$router=te,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>qr(u)}),lr&&!Re&&u.value===Or&&(Re=!0,z(s.location).catch(Te=>{Ie("Unexpected error when starting the router:",Te)}));const ee={};for(const Te in Or)Object.defineProperty(ee,Te,{get:()=>u.value[Te],enumerable:!0});L.provide(bd,te),L.provide(Ad,hE(ee)),L.provide(sf,u);const ie=L.unmount;Qt.add(L),L.unmount=function(){Qt.delete(L),Qt.size<1&&(l=Or,b&&b(),b=null,u.value=Or,Re=!1,J=!1),ie()},lr&&O2(L,te,e)}};function Mn(L){return L.reduce((te,ee)=>te.then(()=>I(ee)),Promise.resolve())}return zt}function j2(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ts(l,a))?r.push(a):n.push(a));const u=t.matched[o];u&&(e.matched.find(l=>ts(l,u))||s.push(u))}return[n,r,s]}function H2(t){return Rn(Ad)}const Sd=G0("locale",()=>{const t=Vt("en"),e={en:{home:"Home",about:"About",discord:"Discord",github:"GitHub",hero:{title:"NgodingSkuyy",subtitle:"Build the Future with Code",description:"Join our community of passionate developers. Learn, share, and grow together in the world of programming.",ctaJoin:"Join Community",ctaExplore:"Explore Projects"},features:{title:"Why Choose NgodingSkuyy?",collaboration:{title:"Collaboration",description:"Work together on exciting projects and learn from experienced developers."},learning:{title:"Learning",description:"Access to tutorials, workshops, and mentorship programs."},community:{title:"Community",description:"Be part of a supportive community that helps you grow."},opensource:{title:"Open Source",description:"Contribute to open source projects and make a difference."}},projects:{title:"Featured Projects",viewAll:"View All Projects",viewProject:"View Project"},cta:{title:"Ready to Start Your Journey?",description:"Join thousands of developers who are already part of our amazing community.",button:"Join Discord Community"},aboutHero:{title:"About NgodingSkuyy",subtitle:"Empowering Developers Worldwide",description:"We are a passionate community of developers dedicated to learning, sharing knowledge, and building amazing projects together."},mission:{title:"Our Mission",vision:{title:"Vision",description:"To be the leading community platform for developers in Indonesia and beyond."},values:{title:"Values",description:"We believe in collaboration, continuous learning, and making technology accessible to everyone."},impact:{title:"Impact",description:"Helping thousands of developers advance their careers and contribute to meaningful projects."}},stats:{members:"Active Members",projects:"Open Source Projects",events:"Events Hosted",countries:"Countries Reached"},team:{title:"Meet Our Team",founder:"Founder & Lead Developer",developer:"Full Stack Developer",designer:"UI/UX Designer"},values:{title:"Our Values",innovation:{title:"Innovation",description:"We embrace new technologies and encourage creative solutions to complex problems."},inclusivity:{title:"Inclusivity",description:"We welcome developers of all backgrounds and experience levels to join our community."},excellence:{title:"Excellence",description:"We strive for quality in everything we do, from code to community interactions."}},contact:{title:"Get in Touch",description:"Ready to join our community? Connect with us and start your journey today!",button:"Join Our Discord"},footer:{brandDescription:"A passionate community of developers building the future with code.",quickLinks:{title:"Quick Links",home:"Home",about:"About",discord:"Discord",projects:"Projects",contact:"Contact"},community:{title:"Community",github:"GitHub Organization",contact:"Get in Touch",contribute:"Contribute"},resources:{title:"Resources",projects:"Open Source Projects",documentation:"Documentation",bestPractices:"Best Practices"},bottom:{madeWith:"Made with ❤️ by the community.",builtWith:"Built with Vue.js & TypeScript"}}},id:{home:"Beranda",about:"Tentang",discord:"Discord",github:"GitHub",hero:{title:"NgodingSkuyy",subtitle:"Bangun Masa Depan dengan Kode",description:"Bergabunglah dengan komunitas developer yang penuh semangat. Belajar, berbagi, dan berkembang bersama di dunia pemrograman.",ctaJoin:"Gabung Komunitas",ctaExplore:"Jelajahi Proyek"},features:{title:"Mengapa Memilih NgodingSkuyy?",collaboration:{title:"Kolaborasi",description:"Bekerja sama dalam proyek-proyek menarik dan belajar dari developer berpengalaman."},learning:{title:"Pembelajaran",description:"Akses ke tutorial, workshop, dan program mentoring."},community:{title:"Komunitas",description:"Menjadi bagian dari komunitas yang mendukung pertumbuhan Anda."},opensource:{title:"Open Source",description:"Berkontribusi pada proyek open source dan membuat perbedaan."}},projects:{title:"Proyek Unggulan",viewAll:"Lihat Semua Proyek",viewProject:"Lihat Proyek"},cta:{title:"Siap Memulai Perjalanan Anda?",description:"Bergabunglah dengan ribuan developer yang sudah menjadi bagian dari komunitas luar biasa kami.",button:"Gabung Komunitas Discord"},aboutHero:{title:"Tentang NgodingSkuyy",subtitle:"Memberdayakan Developer di Seluruh Dunia",description:"Kami adalah komunitas developer yang penuh semangat, berdedikasi untuk belajar, berbagi pengetahuan, dan membangun proyek-proyek menakjubkan bersama."},mission:{title:"Misi Kami",vision:{title:"Visi",description:"Menjadi platform komunitas developer terdepan di Indonesia dan sekitarnya."},values:{title:"Nilai",description:"Kami percaya pada kolaborasi, pembelajaran berkelanjutan, dan membuat teknologi dapat diakses oleh semua orang."},impact:{title:"Dampak",description:"Membantu ribuan developer memajukan karir mereka dan berkontribusi pada proyek-proyek bermakna."}},stats:{members:"Anggota Aktif",projects:"Proyek Open Source",events:"Event yang Diselenggarakan",countries:"Negara yang Dijangkau"},team:{title:"Kenali Tim Kami",founder:"Pendiri & Lead Developer",developer:"Full Stack Developer",designer:"UI/UX Designer"},values:{title:"Nilai-Nilai Kami",innovation:{title:"Inovasi",description:"Kami merangkul teknologi baru dan mendorong solusi kreatif untuk masalah kompleks."},inclusivity:{title:"Inklusivitas",description:"Kami menyambut developer dari berbagai latar belakang dan tingkat pengalaman untuk bergabung dengan komunitas kami."},excellence:{title:"Keunggulan",description:"Kami berusaha untuk kualitas dalam segala hal yang kami lakukan, dari kode hingga interaksi komunitas."}},contact:{title:"Hubungi Kami",description:"Siap bergabung dengan komunitas kami? Terhubung dengan kami dan mulai perjalanan Anda hari ini!",button:"Gabung Discord Kami"},footer:{brandDescription:"Komunitas developer yang penuh semangat membangun masa depan dengan kode.",quickLinks:{title:"Tautan Cepat",home:"Beranda",about:"Tentang",discord:"Discord",projects:"Proyek",contact:"Kontak"},community:{title:"Komunitas",github:"Organisasi GitHub",contact:"Hubungi Kami",contribute:"Berkontribusi"},resources:{title:"Sumber Daya",projects:"Proyek Open Source",documentation:"Dokumentasi",bestPractices:"Praktik Terbaik"},bottom:{madeWith:"Dibuat dengan ❤️ oleh komunitas.",builtWith:"Dibangun dengan Vue.js & TypeScript"}}}},n=pt(()=>e[t.value]);return{currentLocale:t,t:n,setLocale:i=>{console.log("setLocale called with:",i,"current:",t.value),t.value=i,localStorage.setItem("locale",i),console.log("locale updated to:",t.value)},initLocale:()=>{const i=localStorage.getItem("locale");i&&(i==="en"||i==="id")?t.value=i:navigator.language.toLowerCase().startsWith("id")?t.value="id":t.value="en"}}}),q2=()=>{};var D_={};/**
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
 */const _T=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},z2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,l=u?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_T(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new K2;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class K2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W2=function(t){const e=_T(t);return yT.encodeByteArray(e,!0)},lu=function(t){return W2(t).replace(/\./g,"")},vT=function(t){try{return yT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function G2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Q2=()=>G2().__FIREBASE_DEFAULTS__,Y2=()=>{if(typeof process>"u"||typeof D_>"u")return;const t=D_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},J2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vT(t[1]);return e&&JSON.parse(e)},Qu=()=>{try{return q2()||Q2()||Y2()||J2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ET=t=>Qu()?.emulatorHosts?.[t],TT=t=>{const e=ET(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wT=()=>Qu()?.config,IT=t=>Qu()?.[`_${t}`];/**
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
 */class X2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Gs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function bT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[lu(JSON.stringify(n)),lu(JSON.stringify(o)),""].join(".")}const Ho={};function Z2(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ho))Ho[e]?t.emulator.push(e):t.prod.push(e);return t}function eO(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let N_=!1;function Cd(t,e){if(typeof window>"u"||typeof document>"u"||!Gs(window.location.host)||Ho[t]===e||Ho[t]||N_)return;Ho[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=Z2().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{N_=!0,o()},p}function h(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=eO(r),g=n("text"),v=document.getElementById(g)||document.createElement("span"),P=n("learnmore"),R=document.getElementById(P)||document.createElement("a"),D=n("preprendIcon"),M=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const V=p.element;a(V),h(R,P);const z=l();u(M,D),V.append(M,v,R,z),document.body.appendChild(V)}i?(v.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function nO(){const t=Qu()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iO(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oO(){return!nO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pd(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function ST(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const aO="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aO,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gn(s,a,r)}}function cO(t,e){return t.replace(uO,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uO=/\{\$([^}]+)}/g;function lO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $s(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(V_(i)&&V_(o)){if(!$s(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function V_(t){return t!==null&&typeof t=="object"}/**
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
 */function Oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hO(t,e){const n=new fO(t,e);return n.subscribe.bind(n)}class fO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dO(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sh),s.error===void 0&&(s.error=sh),s.complete===void 0&&(s.complete=sh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}/**
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
 */const pO=1e3,mO=2,gO=14400*1e3,_O=.5;function x_(t,e=pO,n=mO){const r=e*Math.pow(n,t),s=Math.round(_O*r*(Math.random()-.5)*2);return Math.min(gO,r+s)}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const yO={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},vO=be.INFO,EO={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},TO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=EO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=vO,this._logHandler=TO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}var af,M_,Yu=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},RT=function(t){if(document.readyState==="loading")return"loading";var e=Yu();if(e){if(t<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||t<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||t<e.domComplete)return"dom-content-loaded"}return"complete"},wO=function(t){var e=t.nodeName;return t.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},Od=function(t,e){var n="";try{for(;t&&t.nodeType!==9;){var r=t,s=r.id?"#"+r.id:wO(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+s.length>(e||100)-1)return n||s;if(n=n?s+">"+n:s,r.id)break;t=r.parentNode}}catch{}return n},CT=-1,IO=function(){return CT},Na=function(t){addEventListener("pageshow",function(e){e.persisted&&(CT=e.timeStamp,t(e))},!0)},Dd=function(){var t=Yu();return t&&t.activationStart||0},ns=function(t,e){var n=Yu(),r="navigate";return IO()>=0?r="back-forward-cache":n&&(document.prerendering||Dd()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:t,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},Qi=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver(function(s){Promise.resolve().then(function(){e(s.getEntries())})});return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch{}},rs=function(t,e,n,r){var s,i;return function(o){e.value>=0&&(o||r)&&((i=e.value-(s||0))||s===void 0)&&(s=e.value,e.delta=i,e.rating=function(a,u){return a>u[1]?"poor":a>u[0]?"needs-improvement":"good"}(e.value,n),t(e))}},Nd=function(t){requestAnimationFrame(function(){return requestAnimationFrame(function(){return t()})})},Ju=function(t){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&t()})},Vd=function(t){var e=!1;return function(){e||(t(),e=!0)}},vi=-1,L_=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},hu=function(t){document.visibilityState==="hidden"&&vi>-1&&(vi=t.type==="visibilitychange"?t.timeStamp:0,bO())},F_=function(){addEventListener("visibilitychange",hu,!0),addEventListener("prerenderingchange",hu,!0)},bO=function(){removeEventListener("visibilitychange",hu,!0),removeEventListener("prerenderingchange",hu,!0)},PT=function(){return vi<0&&(vi=L_(),F_(),Na(function(){setTimeout(function(){vi=L_(),F_()},0)})),{get firstHiddenTime(){return vi}}},xd=function(t){document.prerendering?addEventListener("prerenderingchange",function(){return t()},!0):t()},U_=[1800,3e3],AO=function(t,e){e=e||{},xd(function(){var n,r=PT(),s=ns("FCP"),i=Qi("paint",function(o){o.forEach(function(a){a.name==="first-contentful-paint"&&(i.disconnect(),a.startTime<r.firstHiddenTime&&(s.value=Math.max(a.startTime-Dd(),0),s.entries.push(a),n(!0)))})});i&&(n=rs(t,s,U_,e.reportAllChanges),Na(function(o){s=ns("FCP"),n=rs(t,s,U_,e.reportAllChanges),Nd(function(){s.value=performance.now()-o.timeStamp,n(!0)})}))})},$_=[.1,.25],SO=function(t,e){(function(n,r){r=r||{},AO(Vd(function(){var s,i=ns("CLS",0),o=0,a=[],u=function(h){h.forEach(function(f){if(!f.hadRecentInput){var p=a[0],g=a[a.length-1];o&&f.startTime-g.startTime<1e3&&f.startTime-p.startTime<5e3?(o+=f.value,a.push(f)):(o=f.value,a=[f])}}),o>i.value&&(i.value=o,i.entries=a,s())},l=Qi("layout-shift",u);l&&(s=rs(n,i,$_,r.reportAllChanges),Ju(function(){u(l.takeRecords()),s(!0)}),Na(function(){o=0,i=ns("CLS",0),s=rs(n,i,$_,r.reportAllChanges),Nd(function(){return s()})}),setTimeout(s,0))}))})(function(n){var r=function(s){var i,o={};if(s.entries.length){var a=s.entries.reduce(function(l,h){return l&&l.value>h.value?l:h});if(a&&a.sources&&a.sources.length){var u=(i=a.sources).find(function(l){return l.node&&l.node.nodeType===1})||i[0];u&&(o={largestShiftTarget:Od(u.node),largestShiftTime:a.startTime,largestShiftValue:a.value,largestShiftSource:u,largestShiftEntry:a,loadState:RT(a.startTime)})}}return Object.assign(s,{attribution:o})}(n);t(r)},e)},kT=0,ih=1/0,fc=0,RO=function(t){t.forEach(function(e){e.interactionId&&(ih=Math.min(ih,e.interactionId),fc=Math.max(fc,e.interactionId),kT=fc?(fc-ih)/7+1:0)})},OT=function(){return af?kT:performance.interactionCount||0},CO=function(){"interactionCount"in performance||af||(af=Qi("event",RO,{type:"event",buffered:!0,durationThreshold:0}))},vn=[],qo=new Map,DT=0,PO=function(){var t=Math.min(vn.length-1,Math.floor((OT()-DT)/50));return vn[t]},NT=[],kO=function(t){if(NT.forEach(function(s){return s(t)}),t.interactionId||t.entryType==="first-input"){var e=vn[vn.length-1],n=qo.get(t.interactionId);if(n||vn.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};qo.set(r.id,r),vn.push(r)}vn.sort(function(s,i){return i.latency-s.latency}),vn.length>10&&vn.splice(10).forEach(function(s){return qo.delete(s.id)})}}},Md=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=Vd(t),document.visibilityState==="hidden"?t():(n=e(t),Ju(t)),n},B_=[200,500],OO=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},xd(function(){var n;CO();var r,s=ns("INP"),i=function(a){Md(function(){a.forEach(kO);var u=PO();u&&u.latency!==s.value&&(s.value=u.latency,s.entries=u.entries,r())})},o=Qi("event",i,{durationThreshold:(n=e.durationThreshold)!==null&&n!==void 0?n:40});r=rs(t,s,B_,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),Ju(function(){i(o.takeRecords()),r(!0)}),Na(function(){DT=OT(),vn.length=0,qo.clear(),s=ns("INP"),r=rs(t,s,B_,e.reportAllChanges)}))}))},bi=[],Fr=[],cf=0,Ld=new WeakMap,Ai=new Map,uf=-1,DO=function(t){bi=bi.concat(t),VT()},VT=function(){uf<0&&(uf=Md(NO))},NO=function(){Ai.size>10&&Ai.forEach(function(o,a){qo.has(a)||Ai.delete(a)});var t=vn.map(function(o){return Ld.get(o.entries[0])}),e=Fr.length-50;Fr=Fr.filter(function(o,a){return a>=e||t.includes(o)});for(var n=new Set,r=0;r<Fr.length;r++){var s=Fr[r];xT(s.startTime,s.processingEnd).forEach(function(o){n.add(o)})}var i=bi.length-1-50;bi=bi.filter(function(o,a){return o.startTime>cf&&a>i||n.has(o)}),uf=-1};NT.push(function(t){t.interactionId&&t.target&&!Ai.has(t.interactionId)&&Ai.set(t.interactionId,t.target)},function(t){var e,n=t.startTime+t.duration;cf=Math.max(cf,t.processingEnd);for(var r=Fr.length-1;r>=0;r--){var s=Fr[r];if(Math.abs(n-s.renderTime)<=8){(e=s).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},Fr.push(e)),(t.interactionId||t.entryType==="first-input")&&Ld.set(t,e),VT()});var xT=function(t,e){for(var n,r=[],s=0;n=bi[s];s++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},VO=function(t,e){M_||(M_=Qi("long-animation-frame",DO)),OO(function(n){var r=function(s){var i=s.entries[0],o=Ld.get(i),a=i.processingStart,u=o.processingEnd,l=o.entries.sort(function(R,D){return R.processingStart-D.processingStart}),h=xT(i.startTime,u),f=s.entries.find(function(R){return R.target}),p=f&&f.target||Ai.get(i.interactionId),g=[i.startTime+i.duration,u].concat(h.map(function(R){return R.startTime+R.duration})),v=Math.max.apply(Math,g),P={interactionTarget:Od(p),interactionTargetElement:p,interactionType:i.name.startsWith("key")?"keyboard":"pointer",interactionTime:i.startTime,nextPaintTime:v,processedEventEntries:l,longAnimationFrameEntries:h,inputDelay:a-i.startTime,processingDuration:u-a,presentationDelay:Math.max(v-u,0),loadState:RT(i.startTime)};return Object.assign(s,{attribution:P})}(n);t(r)},e)},j_=[2500,4e3],oh={},xO=function(t,e){(function(n,r){r=r||{},xd(function(){var s,i=PT(),o=ns("LCP"),a=function(h){r.reportAllChanges||(h=h.slice(-1)),h.forEach(function(f){f.startTime<i.firstHiddenTime&&(o.value=Math.max(f.startTime-Dd(),0),o.entries=[f],s())})},u=Qi("largest-contentful-paint",a);if(u){s=rs(n,o,j_,r.reportAllChanges);var l=Vd(function(){oh[o.id]||(a(u.takeRecords()),u.disconnect(),oh[o.id]=!0,s(!0))});["keydown","click"].forEach(function(h){addEventListener(h,function(){return Md(l)},{once:!0,capture:!0})}),Ju(l),Na(function(h){o=ns("LCP"),s=rs(n,o,j_,r.reportAllChanges),Nd(function(){o.value=performance.now()-h.timeStamp,oh[o.id]=!0,s(!0)})})}})})(function(n){var r=function(s){var i={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:s.value};if(s.entries.length){var o=Yu();if(o){var a=o.activationStart||0,u=s.entries[s.entries.length-1],l=u.url&&performance.getEntriesByType("resource").filter(function(v){return v.name===u.url})[0],h=Math.max(0,o.responseStart-a),f=Math.max(h,l?(l.requestStart||l.startTime)-a:0),p=Math.max(f,l?l.responseEnd-a:0),g=Math.max(p,u.startTime-a);i={element:Od(u.element),timeToFirstByte:h,resourceLoadDelay:f-h,resourceLoadDuration:p-f,elementRenderDelay:g-p,navigationEntry:o,lcpEntry:u},u.url&&(i.url=u.url),l&&(i.lcpResourceEntry=l)}}return Object.assign(s,{attribution:i})}(n);t(r)},e)};class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bs="[DEFAULT]";/**
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
 */class MO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new X2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FO(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LO(t){return t===bs?void 0:t}function FO(t){return t.instantiationMode==="EAGER"}/**
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
 */class UO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}const $O=(t,e)=>e.some(n=>t instanceof n);let H_,q_;function BO(){return H_||(H_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jO(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MT=new WeakMap,lf=new WeakMap,LT=new WeakMap,ah=new WeakMap,Fd=new WeakMap;function HO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&MT.set(n,t)}).catch(()=>{}),Fd.set(e,t),e}function qO(t){if(lf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lf.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zO(t){hf=t(hf)}function KO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ch(this),e,...n);return LT.set(r,e.sort?e.sort():[e]),Gr(r)}:jO().includes(t)?function(...e){return t.apply(ch(this),e),Gr(MT.get(this))}:function(...e){return Gr(t.apply(ch(this),e))}}function WO(t){return typeof t=="function"?KO(t):(t instanceof IDBTransaction&&qO(t),$O(t,BO())?new Proxy(t,hf):t)}function Gr(t){if(t instanceof IDBRequest)return HO(t);if(ah.has(t))return ah.get(t);const e=WO(t);return e!==t&&(ah.set(t,e),Fd.set(e,t)),e}const ch=t=>Fd.get(t);function FT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Gr(o.result),u.oldVersion,u.newVersion,Gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const GO=["get","getKey","getAll","getAllKeys","count"],QO=["put","add","delete","clear"],uh=new Map;function z_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GO.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&u.done]))[0]};return uh.set(e,i),i}zO(t=>({...t,get:(e,n,r)=>z_(e,n)||t.get(e,n,r),has:(e,n)=>!!z_(e,n)||t.has(e,n)}));/**
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
 */class YO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JO(t){return t.getComponent()?.type==="VERSION"}const ff="@firebase/app",K_="0.14.0";/**
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
 */const yr=new Da("@firebase/app"),XO="@firebase/app-compat",ZO="@firebase/analytics-compat",eD="@firebase/analytics",tD="@firebase/app-check-compat",nD="@firebase/app-check",rD="@firebase/auth",sD="@firebase/auth-compat",iD="@firebase/database",oD="@firebase/data-connect",aD="@firebase/database-compat",cD="@firebase/functions",uD="@firebase/functions-compat",lD="@firebase/installations",hD="@firebase/installations-compat",fD="@firebase/messaging",dD="@firebase/messaging-compat",pD="@firebase/performance",mD="@firebase/performance-compat",gD="@firebase/remote-config",_D="@firebase/remote-config-compat",yD="@firebase/storage",vD="@firebase/storage-compat",ED="@firebase/firestore",TD="@firebase/ai",wD="@firebase/firestore-compat",ID="firebase",bD="12.0.0";/**
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
 */const df="[DEFAULT]",AD={[ff]:"fire-core",[XO]:"fire-core-compat",[eD]:"fire-analytics",[ZO]:"fire-analytics-compat",[nD]:"fire-app-check",[tD]:"fire-app-check-compat",[rD]:"fire-auth",[sD]:"fire-auth-compat",[iD]:"fire-rtdb",[oD]:"fire-data-connect",[aD]:"fire-rtdb-compat",[cD]:"fire-fn",[uD]:"fire-fn-compat",[lD]:"fire-iid",[hD]:"fire-iid-compat",[fD]:"fire-fcm",[dD]:"fire-fcm-compat",[pD]:"fire-perf",[mD]:"fire-perf-compat",[gD]:"fire-rc",[_D]:"fire-rc-compat",[yD]:"fire-gcs",[vD]:"fire-gcs-compat",[ED]:"fire-fst",[wD]:"fire-fst-compat",[TD]:"fire-vertex","fire-js":"fire-js",[ID]:"fire-js-all"};/**
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
 */const fu=new Map,SD=new Map,pf=new Map;function W_(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(pf.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,t);for(const n of fu.values())W_(n,t);for(const n of SD.values())W_(n,t);return!0}function Yi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new hs("app","Firebase",RD);/**
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
 */class CD{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Qs=bD;function UT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:df,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qr.create("bad-app-name",{appName:String(s)});if(n||(n=wT()),!n)throw Qr.create("no-options");const i=fu.get(s);if(i){if($s(n,i.options)&&$s(r,i.config))return i;throw Qr.create("duplicate-app",{appName:s})}const o=new UO(s);for(const u of pf.values())o.addComponent(u);const a=new CD(n,r,o);return fu.set(s,a),a}function Ud(t=df){const e=fu.get(t);if(!e&&t===df&&wT())return UT();if(!e)throw Qr.create("no-app",{appName:t});return e}function Mt(t,e,n){let r=AD[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(o.join(" "));return}mn(new cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const PD="firebase-heartbeat-database",kD=1,pa="firebase-heartbeat-store";let lh=null;function $T(){return lh||(lh=FT(PD,kD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),lh}async function OD(t){try{const n=(await $T()).transaction(pa),r=await n.objectStore(pa).get(BT(t));return await n.done,r}catch(e){if(e instanceof gn)yr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e?.message});yr.warn(n.message)}}}async function G_(t,e){try{const r=(await $T()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,BT(t)),await r.done}catch(n){if(n instanceof gn)yr.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n?.message});yr.warn(r.message)}}}function BT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DD=1024,ND=30;class VD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Q_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>ND){const s=LD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){yr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Q_(),{heartbeatsToSend:n,unsentEntries:r}=xD(this._heartbeatsCache.heartbeats),s=lu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return yr.warn(e),""}}}function Q_(){return new Date().toISOString().substring(0,10)}function xD(t,e=DD){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Y_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Y_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pd()?kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OD(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return G_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return G_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Y_(t){return lu(JSON.stringify({version:2,heartbeats:t})).length}function LD(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function FD(t){mn(new cn("platform-logger",e=>new YO(e),"PRIVATE")),mn(new cn("heartbeat",e=>new VD(e),"PRIVATE")),Mt(ff,K_,t),Mt(ff,K_,"esm2020"),Mt("fire-js","")}FD("");const jT="@firebase/installations",$d="0.6.19";/**
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
 */const HT=1e4,qT=`w:${$d}`,zT="FIS_v2",UD="https://firebaseinstallations.googleapis.com/v1",$D=3600*1e3,BD="installations",jD="Installations";/**
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
 */const HD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bs=new hs(BD,jD,HD);function KT(t){return t instanceof gn&&t.code.includes("request-failed")}/**
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
 */function WT({projectId:t}){return`${UD}/projects/${t}/installations`}function GT(t){return{token:t.token,requestStatus:2,expiresIn:zD(t.expiresIn),creationTime:Date.now()}}async function QT(t,e){const r=(await e.json()).error;return Bs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qD(t,{refreshToken:e}){const n=YT(t);return n.append("Authorization",KD(e)),n}async function JT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function zD(t){return Number(t.replace("s","000"))}function KD(t){return`${zT} ${t}`}/**
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
 */async function WD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=WT(t),s=YT(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:zT,appId:t.appId,sdkVersion:qT},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await JT(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:GT(l.authToken)}}else throw await QT("Create Installation",u)}/**
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
 */function XT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function GD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QD=/^[cdef][\w-]{21}$/,mf="";function YD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JD(t);return QD.test(n)?n:mf}catch{return mf}}function JD(t){return GD(t).substr(0,22)}/**
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
 */function Xu(t){return`${t.appName}!${t.appId}`}/**
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
 */const ZT=new Map;function e1(t,e){const n=Xu(t);t1(n,e),XD(n,e)}function t1(t,e){const n=ZT.get(t);if(n)for(const r of n)r(e)}function XD(t,e){const n=ZD();n&&n.postMessage({key:t,fid:e}),eN()}let Ss=null;function ZD(){return!Ss&&"BroadcastChannel"in self&&(Ss=new BroadcastChannel("[Firebase] FID Change"),Ss.onmessage=t=>{t1(t.data.key,t.data.fid)}),Ss}function eN(){ZT.size===0&&Ss&&(Ss.close(),Ss=null)}/**
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
 */const tN="firebase-installations-database",nN=1,js="firebase-installations-store";let hh=null;function Bd(){return hh||(hh=FT(tN,nN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(js)}}})),hh}async function du(t,e){const n=Xu(t),s=(await Bd()).transaction(js,"readwrite"),i=s.objectStore(js),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&e1(t,e.fid),e}async function n1(t){const e=Xu(t),r=(await Bd()).transaction(js,"readwrite");await r.objectStore(js).delete(e),await r.done}async function Zu(t,e){const n=Xu(t),s=(await Bd()).transaction(js,"readwrite"),i=s.objectStore(js),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&e1(t,a.fid),a}/**
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
 */async function jd(t){let e;const n=await Zu(t.appConfig,r=>{const s=rN(r),i=sN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===mf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rN(t){const e=t||{fid:YD(),registrationStatus:0};return r1(e)}function sN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=iN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oN(t)}:{installationEntry:e}}async function iN(t,e){try{const n=await WD(t,e);return du(t.appConfig,n)}catch(n){throw KT(n)&&n.customData.serverCode===409?await n1(t.appConfig):await du(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oN(t){let e=await J_(t.appConfig);for(;e.registrationStatus===1;)await XT(100),e=await J_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jd(t);return r||n}return e}function J_(t){return Zu(t,e=>{if(!e)throw Bs.create("installation-not-found");return r1(e)})}function r1(t){return aN(t)?{fid:t.fid,registrationStatus:0}:t}function aN(t){return t.registrationStatus===1&&t.registrationTime+HT<Date.now()}/**
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
 */async function cN({appConfig:t,heartbeatServiceProvider:e},n){const r=uN(t,n),s=qD(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:qT,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await JT(()=>fetch(r,a));if(u.ok){const l=await u.json();return GT(l)}else throw await QT("Generate Auth Token",u)}function uN(t,{fid:e}){return`${WT(t)}/${e}/authTokens:generate`}/**
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
 */async function Hd(t,e=!1){let n;const r=await Zu(t.appConfig,i=>{if(!s1(i))throw Bs.create("not-registered");const o=i.authToken;if(!e&&fN(o))return i;if(o.requestStatus===1)return n=lN(t,e),i;{if(!navigator.onLine)throw Bs.create("app-offline");const a=pN(i);return n=hN(t,a),a}});return n?await n:r.authToken}async function lN(t,e){let n=await X_(t.appConfig);for(;n.authToken.requestStatus===1;)await XT(100),n=await X_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Hd(t,e):r}function X_(t){return Zu(t,e=>{if(!s1(e))throw Bs.create("not-registered");const n=e.authToken;return mN(n)?{...e,authToken:{requestStatus:0}}:e})}async function hN(t,e){try{const n=await cN(t,e),r={...e,authToken:n};return await du(t.appConfig,r),n}catch(n){if(KT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await n1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await du(t.appConfig,r)}throw n}}function s1(t){return t!==void 0&&t.registrationStatus===2}function fN(t){return t.requestStatus===2&&!dN(t)}function dN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$D}function pN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function mN(t){return t.requestStatus===1&&t.requestTime+HT<Date.now()}/**
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
 */async function gN(t){const e=t,{installationEntry:n,registrationPromise:r}=await jd(e);return r?r.catch(console.error):Hd(e).catch(console.error),n.fid}/**
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
 */async function _N(t,e=!1){const n=t;return await yN(n),(await Hd(n,e)).token}async function yN(t){const{registrationPromise:e}=await jd(t);e&&await e}/**
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
 */function vN(t){if(!t||!t.options)throw fh("App Configuration");if(!t.name)throw fh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fh(t){return Bs.create("missing-app-config-values",{valueName:t})}/**
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
 */const i1="installations",EN="installations-internal",TN=t=>{const e=t.getProvider("app").getImmediate(),n=vN(e),r=Yi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wN=t=>{const e=t.getProvider("app").getImmediate(),n=Yi(e,i1).getImmediate();return{getId:()=>gN(n),getToken:s=>_N(n,s)}};function IN(){mn(new cn(i1,TN,"PUBLIC")),mn(new cn(EN,wN,"PRIVATE"))}IN();Mt(jT,$d);Mt(jT,$d,"esm2020");const Z_="@firebase/performance",gf="0.7.8";/**
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
 */const o1=gf,bN="FB-PERF-TRACE-START",AN="FB-PERF-TRACE-STOP",_f="FB-PERF-TRACE-MEASURE",a1="_wt_",c1="_fp",u1="_fcp",l1="_fid",h1="_lcp",SN="lcp_element",f1="_inp",RN="inp_interactionTarget",d1="_cls",CN="cls_largestShiftTarget",p1="@firebase/performance/config",m1="@firebase/performance/configexpire",PN="performance",g1="Performance";/**
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
 */const kN={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},Ot=new hs(PN,g1,kN);/**
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
 */const vr=new Da(g1);vr.logLevel=be.INFO;/**
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
 */let dh,_1;class ct{constructor(e){if(this.window=e,!e)throw Ot.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=xO,this.onINP=VO,this.onCLS=SO}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,r){!this.performance||!this.performance.measure||this.performance.measure(e,n,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!ST()?(vr.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Pd()?!0:(vr.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(s=>{for(const i of s.getEntries())n(i)}).observe({entryTypes:[e]})}static getInstance(){return dh===void 0&&(dh=new ct(_1)),dh}}function ON(t){_1=t}/**
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
 */let y1;function DN(t){const e=t.getId();return e.then(n=>{y1=n}),e}function qd(){return y1}function NN(t){const e=t.getToken();return e.then(n=>{}),e}/**
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
 */function ey(t,e){const n=t.length-e.length;if(n<0||n>1)throw Ot.create("invalid String merger input");const r=[];for(let s=0;s<t.length;s++)r.push(t.charAt(s)),e.length>s&&r.push(e.charAt(s));return r.join("")}/**
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
 */let ph;class jt{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=ey("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=ey("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return ph===void 0&&(ph=new jt),ph}}/**
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
 */var zo;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(zo||(zo={}));const VN=["firebase_","google_","ga_"],xN=new RegExp("^[a-zA-Z]\\w*$"),MN=40,LN=100;function FN(){const t=ct.getInstance().navigator;return t?.serviceWorker?t.serviceWorker.controller?2:3:1}function UN(){switch(ct.getInstance().document.visibilityState){case"visible":return zo.VISIBLE;case"hidden":return zo.HIDDEN;default:return zo.UNKNOWN}}function $N(){const e=ct.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function BN(t){return t.length===0||t.length>MN?!1:!VN.some(n=>t.startsWith(n))&&!!t.match(xN)}function jN(t){return t.length!==0&&t.length<=LN}/**
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
 */function v1(t){const e=t.options?.appId;if(!e)throw Ot.create("no app id");return e}function HN(t){const e=t.options?.projectId;if(!e)throw Ot.create("no project id");return e}function qN(t){const e=t.options?.apiKey;if(!e)throw Ot.create("no api key");return e}/**
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
 */const zN="0.0.1",Xt={loggingEnabled:!0},KN="FIREBASE_INSTALLATIONS_AUTH";function WN(t,e){const n=GN();return n?(ty(n),Promise.resolve()):JN(t,e).then(ty).then(r=>QN(r),()=>{})}function GN(){const t=ct.getInstance().localStorage;if(!t)return;const e=t.getItem(m1);if(!e||!XN(e))return;const n=t.getItem(p1);if(n)try{return JSON.parse(n)}catch{return}}function QN(t){const e=ct.getInstance().localStorage;!t||!e||(e.setItem(p1,JSON.stringify(t)),e.setItem(m1,String(Date.now()+jt.getInstance().configTimeToLive*60*60*1e3)))}const YN="Could not fetch config, will use default configs";function JN(t,e){return NN(t.installations).then(n=>{const r=HN(t.app),s=qN(t.app),i=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${s}`,o=new Request(i,{method:"POST",headers:{Authorization:`${KN} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:v1(t.app),app_version:o1,sdk_version:zN})});return fetch(o).then(a=>{if(a.ok)return a.json();throw Ot.create("RC response not ok")})}).catch(()=>{vr.info(YN)})}function ty(t){if(!t)return t;const e=jt.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=Xt.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):Xt.logSource&&(e.logSource=Xt.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:Xt.logEndPointUrl&&(e.logEndPointUrl=Xt.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:Xt.transportKey&&(e.transportKey=Xt.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):Xt.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=Xt.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):Xt.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=Xt.tracesSamplingRate),n.fpr_log_max_flush_size?e.logMaxFlushSize=Number(n.fpr_log_max_flush_size):Xt.logMaxFlushSize&&(e.logMaxFlushSize=Xt.logMaxFlushSize),e.logTraceAfterSampling=ny(e.tracesSamplingRate),e.logNetworkAfterSampling=ny(e.networkRequestsSamplingRate),t}function XN(t){return Number(t)>Date.now()}function ny(t){return Math.random()<=t}/**
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
 */let zd=1,mh;function E1(t){return zd=2,mh=mh||eV(t),mh}function ZN(){return zd===3}function eV(t){return tV().then(()=>DN(t.installations)).then(e=>WN(t,e)).then(()=>ry(),()=>ry())}function tV(){const t=ct.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function ry(){zd=3}/**
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
 */const T1=10*1e3,nV=5.5*1e3,rV=1e3,w1=3,sV=65536,iV=new TextEncoder;let Mc=w1,fn=[],sy=!1;function oV(){sy||(Kd(nV),sy=!0)}function Kd(t){setTimeout(()=>{Mc<=0||(fn.length>0&&aV(),Kd(T1))},t)}function aV(){const t=fn.splice(0,rV),e=yf(t);cV(e).then(()=>{Mc=w1}).catch(()=>{fn=[...t,...fn],Mc--,vr.info(`Tries left: ${Mc}.`),Kd(T1)})}function yf(t){const e=t.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:jt.getInstance().logSource,log_event:e};return JSON.stringify(n)}function cV(t){const e=jt.getInstance().getFlTransportFullUrl();return iV.encode(t).length<=sV&&navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t})}function uV(t){if(!t.eventTime||!t.message)throw Ot.create("invalid cc log");fn=[...fn,t]}function lV(t){return(...e)=>{const n=t(...e);uV({message:n,eventTime:Date.now()})}}function hV(){const t=jt.getInstance().getFlTransportFullUrl();for(;fn.length>0;){const e=fn.splice(-jt.getInstance().logMaxFlushSize),n=yf(e);if(!(navigator.sendBeacon&&navigator.sendBeacon(t,n))){fn=[...fn,...e];break}}if(fn.length>0){const e=yf(fn);fetch(t,{method:"POST",body:e}).catch(()=>{vr.info("Failed flushing queued events.")})}}/**
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
 */let Ko;function I1(t,e){Ko||(Ko={send:lV(pV),flush:hV}),Ko.send(t,e)}function dc(t){const e=jt.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||ct.getInstance().requiredApisAvailable()&&(ZN()?gh(t):E1(t.performanceController).then(()=>gh(t),()=>gh(t)))}function fV(){Ko&&Ko.flush()}function gh(t){if(!qd())return;const e=jt.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||I1(t,1)}function dV(t){const e=jt.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],s=e.flTransportEndpointUrl.split("?")[0];n===r||n===s||!e.loggingEnabled||!e.logNetworkAfterSampling||I1(t,0)}function pV(t,e){return e===0?mV(t):gV(t)}function mV(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:b1(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function gV(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const r={application_info:b1(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function b1(t){return{google_app_id:v1(t),app_instance_id:qd(),web_app_info:{sdk_version:o1,page_url:ct.getInstance().getUrl(),service_worker_status:FN(),visibility_state:UN(),effective_connection_type:$N()},application_process_state:0}}/**
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
 */function iy(t,e){const n=e;if(!n||n.responseStart===void 0)return;const r=ct.getInstance().getTimeOrigin(),s=Math.floor((n.startTime+r)*1e3),i=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,o=Math.floor((n.responseEnd-n.startTime)*1e3),a=n.name&&n.name.split("?")[0],u={performanceController:t,url:a,responsePayloadBytes:n.transferSize,startTimeUs:s,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};dV(u)}/**
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
 */const _V=100,yV="_",vV=[c1,u1,l1,h1,d1,f1];function EV(t,e){return t.length===0||t.length>_V?!1:e&&e.startsWith(a1)&&vV.indexOf(t)>-1||!t.startsWith(yV)}function TV(t){const e=Math.floor(t);return e<t&&vr.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class Li{constructor(e,n,r=!1,s){this.performanceController=e,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=ct.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${bN}-${this.randomId}-${this.name}`,this.traceStopMark=`${AN}-${this.randomId}-${this.name}`,this.traceMeasure=s||`${_f}-${this.randomId}-${this.name}`,s&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw Ot.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw Ot.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),dc(this)}record(e,n,r){if(e<=0)throw Ot.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw Ot.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes={...r.attributes}),r&&r.metrics)for(const s of Object.keys(r.metrics))isNaN(Number(r.metrics[s]))||(this.counters[s]=Math.floor(Number(r.metrics[s])));dc(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(EV(e,this.name))this.counters[e]=TV(n??0);else throw Ot.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const r=BN(e),s=jN(n);if(r&&s){this.customAttributes[e]=n;return}if(!r)throw Ot.create("invalid attribute name",{attributeName:e});if(!s)throw Ot.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return{...this.customAttributes}}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,r,s,i){const o=ct.getInstance().getUrl();if(!o)return;const a=new Li(e,a1+o,!0),u=Math.floor(ct.getInstance().getTimeOrigin()*1e3);a.setStartTime(u),n&&n[0]&&(a.setDuration(Math.floor(n[0].duration*1e3)),a.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),a.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),a.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const l="first-paint",h="first-contentful-paint";if(r){const f=r.find(g=>g.name===l);f&&f.startTime&&a.putMetric(c1,Math.floor(f.startTime*1e3));const p=r.find(g=>g.name===h);p&&p.startTime&&a.putMetric(u1,Math.floor(p.startTime*1e3)),i&&a.putMetric(l1,Math.floor(i*1e3))}this.addWebVitalMetric(a,h1,SN,s.lcp),this.addWebVitalMetric(a,d1,CN,s.cls),this.addWebVitalMetric(a,f1,RN,s.inp),dc(a),fV()}static addWebVitalMetric(e,n,r,s){s&&(e.putMetric(n,Math.floor(s.value*1e3)),s.elementAttribution&&e.putAttribute(r,s.elementAttribution))}static createUserTimingTrace(e,n){const r=new Li(e,n,!1,n);dc(r)}}/**
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
 */let Lc={},oy=!1,A1;function ay(t){qd()&&(setTimeout(()=>IV(t),0),setTimeout(()=>wV(t),0),setTimeout(()=>bV(t),0))}function wV(t){const e=ct.getInstance(),n=e.getEntriesByType("resource");for(const r of n)iy(t,r);e.setupObserver("resource",r=>iy(t,r))}function IV(t){const e=ct.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>_h(t)):e.document.addEventListener("unload",()=>_h(t)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&_h(t)}),e.onFirstInputDelay&&e.onFirstInputDelay(n=>{A1=n}),e.onLCP(n=>{Lc.lcp={value:n.value,elementAttribution:n.attribution?.element}}),e.onCLS(n=>{Lc.cls={value:n.value,elementAttribution:n.attribution?.largestShiftTarget}}),e.onINP(n=>{Lc.inp={value:n.value,elementAttribution:n.attribution?.interactionTarget}})}function bV(t){const e=ct.getInstance(),n=e.getEntriesByType("measure");for(const r of n)cy(t,r);e.setupObserver("measure",r=>cy(t,r))}function cy(t,e){const n=e.name;n.substring(0,_f.length)!==_f&&Li.createUserTimingTrace(t,n)}function _h(t){if(!oy){oy=!0;const e=ct.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{Li.createOobTrace(t,n,r,Lc,A1)},0)}}/**
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
 */class AV{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),ct.getInstance().requiredApisAvailable()?kd().then(n=>{n&&(oV(),E1(this).then(()=>ay(this),()=>ay(this)),this.initialized=!0)}).catch(n=>{vr.info(`Environment doesn't support IndexedDB: ${n}`)}):vr.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){jt.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return jt.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){jt.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return jt.getInstance().dataCollectionEnabled}}const SV="[DEFAULT]";function RV(t,e){return t=Xe(t),new Li(t,e)}const CV=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==SV)throw Ot.create("FB not default");if(typeof window>"u")throw Ot.create("no window");ON(window);const s=new AV(n,r);return s._init(e),s};function PV(){mn(new cn("performance",CV,"PUBLIC")),Mt(Z_,gf),Mt(Z_,gf,"esm2020")}PV();var kV="firebase",OV="12.0.0";/**
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
 */Mt(kV,OV,"app");function S1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DV=S1,R1=new hs("auth","Firebase",S1());/**
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
 */const pu=new Da("@firebase/auth");function NV(t,...e){pu.logLevel<=be.WARN&&pu.warn(`Auth (${Qs}): ${t}`,...e)}function Fc(t,...e){pu.logLevel<=be.ERROR&&pu.error(`Auth (${Qs}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Wd(t,...e)}function Gn(t,...e){return Wd(t,...e)}function C1(t,e,n){const r={...DV(),[e]:n};return new hs("auth","Firebase",r).create(e,{appName:t.name})}function mr(t){return C1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return R1.create(t,...e)}function ge(t,e,...n){if(!t)throw Wd(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fc(e),new Error(e)}function Er(t,e){t||fr(e)}/**
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
 */function vf(){return typeof self<"u"&&self.location?.href||""}function VV(){return uy()==="http:"||uy()==="https:"}function uy(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function xV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VV()||AT()||"connection"in navigator)?navigator.onLine:!0}function MV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=tO()||sO()}get(){return xV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(t,e){Er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class P1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UV=new Va(3e4,6e4);function fs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,s={}){return k1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Oa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:u,...i};return rO()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&Gs(t.emulatorConfig.host)&&(l.credentials="include"),P1.fetch()(await O1(t,t.config.apiHost,n,a),l)})}async function k1(t,e,n){t._canInitEmulator=!1;const r={...LV,...e};try{const s=new BV(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pc(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw C1(t,h,l);Vn(t,h)}}catch(s){if(s instanceof gn)throw s;Vn(t,"network-request-failed",{message:String(s)})}}async function xa(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&Vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function O1(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Gd(t.config,s):`${t.config.apiScheme}://${s}`;return FV.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function $V(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gn(this.auth,"network-request-failed")),UV.get())})}}function pc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gn(t,e,r);return s.customData._tokenResponse=n,s}function ly(t){return t!==void 0&&t.enterprise!==void 0}class jV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $V(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HV(t,e){return Ar(t,"GET","/v2/recaptchaConfig",fs(t,e))}/**
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
 */async function qV(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function mu(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zV(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=Qd(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Wo(yh(s.auth_time)),issuedAtTime:Wo(yh(s.iat)),expirationTime:Wo(yh(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function yh(t){return Number(t)*1e3}function Qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fc("JWT malformed, contained fewer than 3 sections"),null;try{const s=vT(n);return s?JSON.parse(s):(Fc("Failed to decode base64 JWT payload"),null)}catch(s){return Fc("Caught error parsing JWT payload as JSON",s?.toString()),null}}function hy(t){const e=Qd(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&KV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gu(t){const e=t.auth,n=await t.getIdToken(),r=await Fi(t,mu(e,{idToken:n}));ge(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?D1(s.providerUserInfo):[],o=QV(t.providerData,i),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!o?.length,l=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ef(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function GV(t){const e=Xe(t);await gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QV(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function D1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function YV(t,e){const n=await k1(t,{},async()=>{const r=Oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await O1(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&Gs(t.emulatorConfig.host)&&(u.credentials="include"),P1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JV(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",fs(t,e))}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=hy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YV(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
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
 */function Dr(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new WV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ef(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zV(this,e)}reload(){return GV(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(mr(this.auth));const e=await this.getIdToken();return await Fi(this,qV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,l=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:g,providerData:v,stsTokenManager:P}=n;ge(f&&P,e,"internal-error");const R=Si.fromJSON(this.name,P);ge(typeof f=="string",e,"internal-error"),Dr(r,e.name),Dr(s,e.name),ge(typeof p=="boolean",e,"internal-error"),ge(typeof g=="boolean",e,"internal-error"),Dr(i,e.name),Dr(o,e.name),Dr(a,e.name),Dr(u,e.name),Dr(l,e.name),Dr(h,e.name);const D=new In({uid:f,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:l,lastLoginAt:h});return v&&Array.isArray(v)&&(D.providerData=v.map(M=>({...M}))),u&&(D._redirectEventId=u),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?D1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Si;a.updateFromIdToken(r);const u=new In({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ef(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,l),u}}/**
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
 */const fy=new Map;function dr(t){Er(t instanceof Function,"Expected a class definition");let e=fy.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fy.set(t,e),e)}/**
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
 */class N1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}N1.type="NONE";const dy=N1;/**
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
 */function Uc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mu(this.auth,{idToken:e}).catch(()=>{});return n?In._fromGetAccountInfoResponse(this.auth,n,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(dr(dy),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dr(dy);const o=Uc(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){let f;if(typeof h=="string"){const p=await mu(e,{idToken:h}).catch(()=>{});if(!p)break;f=await In._fromGetAccountInfoResponse(e,p,h)}else f=In._fromJSON(e,h);l!==i&&(a=f),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ri(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ri(i,e,r))}}/**
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
 */function py(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U1(e))return"Blackberry";if($1(e))return"Webos";if(x1(e))return"Safari";if((e.includes("chrome/")||M1(e))&&!e.includes("edge/"))return"Chrome";if(F1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function V1(t=Lt()){return/firefox\//i.test(t)}function x1(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function M1(t=Lt()){return/crios\//i.test(t)}function L1(t=Lt()){return/iemobile/i.test(t)}function F1(t=Lt()){return/android/i.test(t)}function U1(t=Lt()){return/blackberry/i.test(t)}function $1(t=Lt()){return/webos/i.test(t)}function Yd(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XV(t=Lt()){return Yd(t)&&!!window.navigator?.standalone}function ZV(){return iO()&&document.documentMode===10}function B1(t=Lt()){return Yd(t)||F1(t)||$1(t)||U1(t)||/windows phone/i.test(t)||L1(t)}/**
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
 */function j1(t,e=[]){let n;switch(t){case"Browser":n=py(Lt());break;case"Worker":n=`${py(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qs}/${r}`}/**
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
 */class ex{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function tx(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",fs(t,e))}/**
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
 */const nx=6;class rx{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??nx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new my(this),this.idTokenSubscription=new my(this),this.beforeStateQueue=new ex(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mu(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(nn(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gu(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(mr(this));const n=e?Xe(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tx(this),n=new rx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JV(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&NV(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ys(t){return Xe(t)}class my{constructor(e){this.auth=e,this.observer=null,this.addObserver=hO(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let el={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ix(t){el=t}function H1(t){return el.loadJS(t)}function ox(){return el.recaptchaEnterpriseScript}function ax(){return el.gapiScript}function cx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ux{constructor(){this.enterprise=new lx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const hx="recaptcha-enterprise",q1="NO_RECAPTCHA";class fx{constructor(e){this.type=hx,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{HV(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new jV(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;ly(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(q1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ux().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ly(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ox();u.length!==0&&(u+=a),H1(u).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function gy(t,e,n,r=!1,s=!1){const i=new fx(t);let o;if(s)o=q1;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Tf(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function dx(t,e){const n=Yi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($s(i,e??{}))return s;Vn(s,"already-initialized")}return n.initialize({options:e})}function px(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(dr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function mx(t,e,n){const r=Ys(t);ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=z1(e),{host:o,port:a}=gx(e),u=a===null?"":`:${a}`,l={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ge(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ge($s(l,r.config.emulator)&&$s(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Gs(o)?(Rd(`${i}//${o}${u}`),Cd("Auth",!0)):_x()}function z1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gx(t){const e=z1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_y(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_y(o)}}}function _y(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _x(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function yx(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vx(t,e){return xa(t,"POST","/v1/accounts:signInWithPassword",fs(t,e))}/**
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
 */async function Ex(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}async function Tx(t,e){return xa(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}/**
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
 */class ma extends Jd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,n,"signInWithPassword",vx);case"emailLink":return Ex(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tf(e,r,"signUpPassword",yx);case"emailLink":return Tx(e,{idToken:n,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ci(t,e){return xa(t,"POST","/v1/accounts:signInWithIdp",fs(t,e))}/**
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
 */const wx="http://localhost";class Hs extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:wx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oa(n)}return e}}/**
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
 */function Ix(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bx(t){const e=Co(Po(t)).link,n=e?Co(Po(e)).deep_link_id:null,r=Co(Po(t)).deep_link_id;return(r?Co(Po(r)).link:null)||r||n||e||t}class Xd{constructor(e){const n=Co(Po(e)),r=n.apiKey??null,s=n.oobCode??null,i=Ix(n.mode??null);ge(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=bx(e);try{return new Xd(n)}catch{return null}}}/**
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
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xd.parseLink(n);return ge(r,"argument-error"),ma._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class K1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ma extends K1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends Ma{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class $r extends Ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
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
 */class Br extends Ma{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class jr extends Ma{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
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
 */async function Ax(t,e){return xa(t,"POST","/v1/accounts:signUp",fs(t,e))}/**
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
 */class qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=yy(r);return new qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yy(r);return new qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _u extends gn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _u(e,n,r,s)}}function W1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,i,e,r):i})}async function Sx(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qs._forOperation(t,"link",r)}/**
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
 */async function Rx(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(mr(r));const s="reauthenticate";try{const i=await Fi(t,W1(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=Qd(i.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(t.uid===a,r,"user-mismatch"),qs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Vn(r,"user-mismatch"),i}}/**
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
 */async function G1(t,e,n=!1){if(nn(t.app))return Promise.reject(mr(t));const r="signIn",s=await W1(t,r,e),i=await qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Cx(t,e){return G1(Ys(t),e)}/**
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
 */async function Q1(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Px(t,e,n){if(nn(t.app))return Promise.reject(mr(t));const r=Ys(t),o=await Tf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ax).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Q1(t),u}),a=await qs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kx(t,e,n){return nn(t.app)?Promise.reject(mr(t)):Cx(Xe(t),Ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Q1(t),r})}/**
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
 */async function Ox(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Dx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Xe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fi(r,Ox(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Nx(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function Vx(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function xx(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function Mx(t){return Xe(t).signOut()}const yu="__sak";/**
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
 */class Y1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Lx=1e3,Fx=10;class J1 extends Y1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ZV()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J1.type="LOCAL";const Ux=J1;/**
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
 */class X1 extends Y1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X1.type="SESSION";const Z1=X1;/**
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
 */function $x(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),u=await $x(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
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
 */function Zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const l=Zd("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qn(){return window}function jx(t){Qn().location.href=t}/**
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
 */function ew(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function Hx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qx(){return navigator?.serviceWorker?.controller||null}function zx(){return ew()?self:null}/**
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
 */const tw="firebaseLocalStorageDb",Kx=1,vu="firebaseLocalStorage",nw="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(t,e){return t.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function Wx(){const t=indexedDB.deleteDatabase(tw);return new La(t).toPromise()}function wf(){const t=indexedDB.open(tw,Kx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vu,{keyPath:nw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vu)?e(r):(r.close(),await Wx(),e(await wf()))})})}async function vy(t,e,n){const r=nl(t,!0).put({[nw]:e,value:n});return new La(r).toPromise()}async function Gx(t,e){const n=nl(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function Ey(t,e){const n=nl(t,!0).delete(e);return new La(n).toPromise()}const Qx=800,Yx=3;class rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(zx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Hx(),!this.activeServiceWorker)return;this.sender=new Bx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wf();return await vy(e,yu,"1"),await Ey(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nl(s,!1).getAll();return new La(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rw.type="LOCAL";const Jx=rw;new Va(3e4,6e4);/**
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
 */function Xx(t,e){return e?dr(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ep extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zx(t){return G1(t.auth,new ep(t),t.bypassAuthState)}function e4(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),Rx(n,new ep(t),t.bypassAuthState)}async function t4(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),Sx(n,new ep(t),t.bypassAuthState)}/**
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
 */class sw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zx;case"linkViaPopup":case"linkViaRedirect":return t4;case"reauthViaPopup":case"reauthViaRedirect":return e4;default:Vn(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const n4=new Va(2e3,1e4);class Ei extends sw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n4.get())};e()}}Ei.currentPopupAction=null;/**
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
 */const r4="pendingRedirect",$c=new Map;class s4 extends sw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const r=await i4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i4(t,e){const n=c4(e),r=a4(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function o4(t,e){$c.set(t._key(),e)}function a4(t){return dr(t._redirectPersistence)}function c4(t){return Uc(r4,t.config.apiKey,t.name)}async function u4(t,e,n=!1){if(nn(t.app))return Promise.reject(mr(t));const r=Ys(t),s=Xx(r,e),o=await new s4(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const l4=600*1e3;class h4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!iw(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Gn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ty(e))}saveEventToCache(e){this.cachedEventUids.add(Ty(e)),this.lastProcessedEventTime=Date.now()}}function Ty(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function f4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
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
 */async function d4(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const p4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m4=/^https?/;async function g4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d4(t);for(const n of e)try{if(_4(n))return}catch{}Vn(t,"unauthorized-domain")}function _4(t){const e=vf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m4.test(n))return!1;if(p4.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const y4=new Va(3e4,6e4);function wy(){const t=Qn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v4(t){return new Promise((e,n)=>{function r(){wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wy(),n(Gn(t,"network-request-failed"))},timeout:y4.get()})}if(Qn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Qn().gapi?.load)r();else{const s=cx("iframefcb");return Qn()[s]=()=>{gapi.load?r():n(Gn(t,"network-request-failed"))},H1(`${ax()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Bc=null,e})}let Bc=null;function E4(t){return Bc=Bc||v4(t),Bc}/**
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
 */const T4=new Va(5e3,15e3),w4="__/auth/iframe",I4="emulator/auth/iframe",b4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S4(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gd(e,I4):`https://${t.config.authDomain}/${w4}`,r={apiKey:e.apiKey,appName:t.name,v:Qs},s=A4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Oa(r).slice(1)}`}async function R4(t){const e=await E4(t),n=Qn().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:S4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gn(t,"network-request-failed"),a=Qn().setTimeout(()=>{i(o)},T4.get());function u(){Qn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const C4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P4=500,k4=600,O4="_blank",D4="http://localhost";class Iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N4(t,e,n,r=P4,s=k4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...C4,width:r.toString(),height:s.toString(),top:i,left:o},l=Lt().toLowerCase();n&&(a=M1(l)?O4:n),V1(l)&&(e=e||D4,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(XV(l)&&a!=="_self")return V4(e||"",a),new Iy(null);const f=window.open(e||"",a,h);ge(f,t,"popup-blocked");try{f.focus()}catch{}return new Iy(f)}function V4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const x4="__/auth/handler",M4="emulator/auth/handler",L4=encodeURIComponent("fac");async function by(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qs,eventId:s};if(e instanceof K1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ma){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),l=u?`#${L4}=${encodeURIComponent(u)}`:"";return`${F4(t)}?${Oa(a).slice(1)}${l}`}function F4({config:t}){return t.emulator?Gd(t,M4):`https://${t.authDomain}/${x4}`}/**
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
 */const vh="webStorageSupport";class U4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z1,this._completeRedirectFn=u4,this._overrideRedirectResult=o4}async _openPopup(e,n,r,s){Er(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await by(e,n,r,vf(),s);return N4(e,i,Zd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await by(e,n,r,vf(),s);return jx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R4(e),r=new h4(e);return n.register("authEvent",s=>(ge(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vh,{type:vh},s=>{const i=s?.[0]?.[vh];i!==void 0&&n(!!i),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B1()||x1()||Yd()}}const $4=U4;var Ay="@firebase/auth",Sy="1.11.0";/**
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
 */class B4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H4(t){mn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j1(t)},l=new sx(r,s,i,u);return px(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mn(new cn("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new B4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(Ay,Sy,j4(t)),Mt(Ay,Sy,"esm2020")}/**
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
 */const q4=300,z4=IT("authIdTokenMaxAge")||q4;let Ry=null;const K4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z4)return;const s=n?.token;Ry!==s&&(Ry=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function W4(t=Ud()){const e=Yi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dx(t,{popupRedirectResolver:$4,persistence:[Jx,Ux,Z1]}),r=IT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=K4(i.toString());Vx(n,o,()=>o(n.currentUser)),Nx(n,a=>o(a))}}const s=ET("auth");return s&&mx(n,`http://${s}`),n}function G4(){return document.getElementsByTagName("head")?.[0]??document}ix({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",G4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H4("Browser");var Cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,ow;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,E){function I(){}I.prototype=E.prototype,S.D=E.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(T,w,C){for(var b=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)b[Be-2]=arguments[Be];return E.prototype[w].apply(T,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,E,I){I||(I=0);var T=Array(16);if(typeof E=="string")for(var w=0;16>w;++w)T[w]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(w=0;16>w;++w)T[w]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=S.g[0],I=S.g[1],w=S.g[2];var C=S.g[3],b=E+(C^I&(w^C))+T[0]+3614090360&4294967295;E=I+(b<<7&4294967295|b>>>25),b=C+(w^E&(I^w))+T[1]+3905402710&4294967295,C=E+(b<<12&4294967295|b>>>20),b=w+(I^C&(E^I))+T[2]+606105819&4294967295,w=C+(b<<17&4294967295|b>>>15),b=I+(E^w&(C^E))+T[3]+3250441966&4294967295,I=w+(b<<22&4294967295|b>>>10),b=E+(C^I&(w^C))+T[4]+4118548399&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(w^E&(I^w))+T[5]+1200080426&4294967295,C=E+(b<<12&4294967295|b>>>20),b=w+(I^C&(E^I))+T[6]+2821735955&4294967295,w=C+(b<<17&4294967295|b>>>15),b=I+(E^w&(C^E))+T[7]+4249261313&4294967295,I=w+(b<<22&4294967295|b>>>10),b=E+(C^I&(w^C))+T[8]+1770035416&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(w^E&(I^w))+T[9]+2336552879&4294967295,C=E+(b<<12&4294967295|b>>>20),b=w+(I^C&(E^I))+T[10]+4294925233&4294967295,w=C+(b<<17&4294967295|b>>>15),b=I+(E^w&(C^E))+T[11]+2304563134&4294967295,I=w+(b<<22&4294967295|b>>>10),b=E+(C^I&(w^C))+T[12]+1804603682&4294967295,E=I+(b<<7&4294967295|b>>>25),b=C+(w^E&(I^w))+T[13]+4254626195&4294967295,C=E+(b<<12&4294967295|b>>>20),b=w+(I^C&(E^I))+T[14]+2792965006&4294967295,w=C+(b<<17&4294967295|b>>>15),b=I+(E^w&(C^E))+T[15]+1236535329&4294967295,I=w+(b<<22&4294967295|b>>>10),b=E+(w^C&(I^w))+T[1]+4129170786&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^w&(E^I))+T[6]+3225465664&4294967295,C=E+(b<<9&4294967295|b>>>23),b=w+(E^I&(C^E))+T[11]+643717713&4294967295,w=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(w^C))+T[0]+3921069994&4294967295,I=w+(b<<20&4294967295|b>>>12),b=E+(w^C&(I^w))+T[5]+3593408605&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^w&(E^I))+T[10]+38016083&4294967295,C=E+(b<<9&4294967295|b>>>23),b=w+(E^I&(C^E))+T[15]+3634488961&4294967295,w=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(w^C))+T[4]+3889429448&4294967295,I=w+(b<<20&4294967295|b>>>12),b=E+(w^C&(I^w))+T[9]+568446438&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^w&(E^I))+T[14]+3275163606&4294967295,C=E+(b<<9&4294967295|b>>>23),b=w+(E^I&(C^E))+T[3]+4107603335&4294967295,w=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(w^C))+T[8]+1163531501&4294967295,I=w+(b<<20&4294967295|b>>>12),b=E+(w^C&(I^w))+T[13]+2850285829&4294967295,E=I+(b<<5&4294967295|b>>>27),b=C+(I^w&(E^I))+T[2]+4243563512&4294967295,C=E+(b<<9&4294967295|b>>>23),b=w+(E^I&(C^E))+T[7]+1735328473&4294967295,w=C+(b<<14&4294967295|b>>>18),b=I+(C^E&(w^C))+T[12]+2368359562&4294967295,I=w+(b<<20&4294967295|b>>>12),b=E+(I^w^C)+T[5]+4294588738&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^w)+T[8]+2272392833&4294967295,C=E+(b<<11&4294967295|b>>>21),b=w+(C^E^I)+T[11]+1839030562&4294967295,w=C+(b<<16&4294967295|b>>>16),b=I+(w^C^E)+T[14]+4259657740&4294967295,I=w+(b<<23&4294967295|b>>>9),b=E+(I^w^C)+T[1]+2763975236&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^w)+T[4]+1272893353&4294967295,C=E+(b<<11&4294967295|b>>>21),b=w+(C^E^I)+T[7]+4139469664&4294967295,w=C+(b<<16&4294967295|b>>>16),b=I+(w^C^E)+T[10]+3200236656&4294967295,I=w+(b<<23&4294967295|b>>>9),b=E+(I^w^C)+T[13]+681279174&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^w)+T[0]+3936430074&4294967295,C=E+(b<<11&4294967295|b>>>21),b=w+(C^E^I)+T[3]+3572445317&4294967295,w=C+(b<<16&4294967295|b>>>16),b=I+(w^C^E)+T[6]+76029189&4294967295,I=w+(b<<23&4294967295|b>>>9),b=E+(I^w^C)+T[9]+3654602809&4294967295,E=I+(b<<4&4294967295|b>>>28),b=C+(E^I^w)+T[12]+3873151461&4294967295,C=E+(b<<11&4294967295|b>>>21),b=w+(C^E^I)+T[15]+530742520&4294967295,w=C+(b<<16&4294967295|b>>>16),b=I+(w^C^E)+T[2]+3299628645&4294967295,I=w+(b<<23&4294967295|b>>>9),b=E+(w^(I|~C))+T[0]+4096336452&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~w))+T[7]+1126891415&4294967295,C=E+(b<<10&4294967295|b>>>22),b=w+(E^(C|~I))+T[14]+2878612391&4294967295,w=C+(b<<15&4294967295|b>>>17),b=I+(C^(w|~E))+T[5]+4237533241&4294967295,I=w+(b<<21&4294967295|b>>>11),b=E+(w^(I|~C))+T[12]+1700485571&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~w))+T[3]+2399980690&4294967295,C=E+(b<<10&4294967295|b>>>22),b=w+(E^(C|~I))+T[10]+4293915773&4294967295,w=C+(b<<15&4294967295|b>>>17),b=I+(C^(w|~E))+T[1]+2240044497&4294967295,I=w+(b<<21&4294967295|b>>>11),b=E+(w^(I|~C))+T[8]+1873313359&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~w))+T[15]+4264355552&4294967295,C=E+(b<<10&4294967295|b>>>22),b=w+(E^(C|~I))+T[6]+2734768916&4294967295,w=C+(b<<15&4294967295|b>>>17),b=I+(C^(w|~E))+T[13]+1309151649&4294967295,I=w+(b<<21&4294967295|b>>>11),b=E+(w^(I|~C))+T[4]+4149444226&4294967295,E=I+(b<<6&4294967295|b>>>26),b=C+(I^(E|~w))+T[11]+3174756917&4294967295,C=E+(b<<10&4294967295|b>>>22),b=w+(E^(C|~I))+T[2]+718787259&4294967295,w=C+(b<<15&4294967295|b>>>17),b=I+(C^(w|~E))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+E&4294967295,S.g[1]=S.g[1]+(w+(b<<21&4294967295|b>>>11))&4294967295,S.g[2]=S.g[2]+w&4294967295,S.g[3]=S.g[3]+C&4294967295}r.prototype.u=function(S,E){E===void 0&&(E=S.length);for(var I=E-this.blockSize,T=this.B,w=this.h,C=0;C<E;){if(w==0)for(;C<=I;)s(this,S,C),C+=this.blockSize;if(typeof S=="string"){for(;C<E;)if(T[w++]=S.charCodeAt(C++),w==this.blockSize){s(this,T),w=0;break}}else for(;C<E;)if(T[w++]=S[C++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=E},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var E=1;E<S.length-8;++E)S[E]=0;var I=8*this.o;for(E=S.length-8;E<S.length;++E)S[E]=I&255,I/=256;for(this.u(S),S=Array(16),E=I=0;4>E;++E)for(var T=0;32>T;T+=8)S[I++]=this.g[E]>>>T&255;return S};function i(S,E){var I=a;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=E(S)}function o(S,E){this.h=E;for(var I=[],T=!0,w=S.length-1;0<=w;w--){var C=S[w]|0;T&&C==E||(I[w]=C,T=!1)}this.g=I}var a={};function u(S){return-128<=S&&128>S?i(S,function(E){return new o([E|0],0>E?-1:0)}):new o([S|0],0>S?-1:0)}function l(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return R(l(-S));for(var E=[],I=1,T=0;S>=I;T++)E[T]=S/I|0,I*=4294967296;return new o(E,0)}function h(S,E){if(S.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S.charAt(0)=="-")return R(h(S.substring(1),E));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=l(Math.pow(E,8)),T=f,w=0;w<S.length;w+=8){var C=Math.min(8,S.length-w),b=parseInt(S.substring(w,w+C),E);8>C?(C=l(Math.pow(E,C)),T=T.j(C).add(l(b))):(T=T.j(I),T=T.add(l(b)))}return T}var f=u(0),p=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-R(this).m();for(var S=0,E=1,I=0;I<this.g.length;I++){var T=this.i(I);S+=(0<=T?T:4294967296+T)*E,E*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(v(this))return"0";if(P(this))return"-"+R(this).toString(S);for(var E=l(Math.pow(S,6)),I=this,T="";;){var w=z(I,E).g;I=D(I,w.j(E));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=w,v(I))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function v(S){if(S.h!=0)return!1;for(var E=0;E<S.g.length;E++)if(S.g[E]!=0)return!1;return!0}function P(S){return S.h==-1}t.l=function(S){return S=D(this,S),P(S)?-1:v(S)?0:1};function R(S){for(var E=S.g.length,I=[],T=0;T<E;T++)I[T]=~S.g[T];return new o(I,~S.h).add(p)}t.abs=function(){return P(this)?R(this):this},t.add=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],T=0,w=0;w<=E;w++){var C=T+(this.i(w)&65535)+(S.i(w)&65535),b=(C>>>16)+(this.i(w)>>>16)+(S.i(w)>>>16);T=b>>>16,C&=65535,b&=65535,I[w]=b<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function D(S,E){return S.add(R(E))}t.j=function(S){if(v(this)||v(S))return f;if(P(this))return P(S)?R(this).j(R(S)):R(R(this).j(S));if(P(S))return R(this.j(R(S)));if(0>this.l(g)&&0>S.l(g))return l(this.m()*S.m());for(var E=this.g.length+S.g.length,I=[],T=0;T<2*E;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<S.g.length;w++){var C=this.i(T)>>>16,b=this.i(T)&65535,Be=S.i(w)>>>16,Ke=S.i(w)&65535;I[2*T+2*w]+=b*Ke,M(I,2*T+2*w),I[2*T+2*w+1]+=C*Ke,M(I,2*T+2*w+1),I[2*T+2*w+1]+=b*Be,M(I,2*T+2*w+1),I[2*T+2*w+2]+=C*Be,M(I,2*T+2*w+2)}for(T=0;T<E;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=E;T<2*E;T++)I[T]=0;return new o(I,0)};function M(S,E){for(;(S[E]&65535)!=S[E];)S[E+1]+=S[E]>>>16,S[E]&=65535,E++}function V(S,E){this.g=S,this.h=E}function z(S,E){if(v(E))throw Error("division by zero");if(v(S))return new V(f,f);if(P(S))return E=z(R(S),E),new V(R(E.g),R(E.h));if(P(E))return E=z(S,R(E)),new V(R(E.g),E.h);if(30<S.g.length){if(P(S)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var I=p,T=E;0>=T.l(S);)I=W(I),T=W(T);var w=ae(I,1),C=ae(T,1);for(T=ae(T,2),I=ae(I,2);!v(T);){var b=C.add(T);0>=b.l(S)&&(w=w.add(I),C=b),T=ae(T,1),I=ae(I,1)}return E=D(S,w.j(E)),new V(w,E)}for(w=f;0<=S.l(E);){for(I=Math.max(1,Math.floor(S.m()/E.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=l(I),b=C.j(E);P(b)||0<b.l(S);)I-=T,C=l(I),b=C.j(E);v(C)&&(C=p),w=w.add(C),S=D(S,b)}return new V(w,S)}t.A=function(S){return z(this,S).h},t.and=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],T=0;T<E;T++)I[T]=this.i(T)&S.i(T);return new o(I,this.h&S.h)},t.or=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],T=0;T<E;T++)I[T]=this.i(T)|S.i(T);return new o(I,this.h|S.h)},t.xor=function(S){for(var E=Math.max(this.g.length,S.g.length),I=[],T=0;T<E;T++)I[T]=this.i(T)^S.i(T);return new o(I,this.h^S.h)};function W(S){for(var E=S.g.length+1,I=[],T=0;T<E;T++)I[T]=S.i(T)<<1|S.i(T-1)>>>31;return new o(I,S.h)}function ae(S,E){var I=E>>5;E%=32;for(var T=S.g.length-I,w=[],C=0;C<T;C++)w[C]=0<E?S.i(C+I)>>>E|S.i(C+I+1)<<32-E:S.i(C+I);return new o(w,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ow=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=h,Yr=o}).apply(typeof Cy<"u"?Cy:typeof self<"u"?self:typeof window<"u"?window:{});var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aw,ko,cw,jc,If,uw,lw,hw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,m){return c==Array.prototype||c==Object.prototype||(c[d]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof mc=="object"&&mc];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var O=c[_];if(!(O in m))break e;m=m[O]}c=c[c.length-1],_=m[c],d=d(_),d!=_&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var m=0,_=!1,O={next:function(){if(!_&&m<c.length){var x=m++;return{value:d(x,c[x]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function l(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,m){return c.call.apply(c.bind,arguments)}function f(c,d,m){if(!c)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),c.apply(d,O)}}return function(){return c.apply(d,arguments)}}function p(c,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function v(c,d){function m(){}m.prototype=d.prototype,c.aa=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(_,O,x){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return d.prototype[O].apply(_,Z)}}function P(c){const d=c.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=c[_];return m}return[]}function R(c,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(u(_)){const O=c.length||0,x=_.length||0;c.length=O+x;for(let Z=0;Z<x;Z++)c[O+Z]=_[Z]}else c.push(_)}}class D{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function M(c){return/^[\s\xa0]*$/.test(c)}function V(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function z(c){return z[" "](c),c}z[" "]=function(){};var W=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function ae(c,d,m){for(const _ in c)d.call(m,c[_],_,c)}function S(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function E(c){const d={};for(const m in c)d[m]=c[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,d){let m,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(m in _)c[m]=_[m];for(let x=0;x<I.length;x++)m=I[x],Object.prototype.hasOwnProperty.call(_,m)&&(c[m]=_[m])}}function w(c){var d=1;c=c.split(":");const m=[];for(;0<d&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function C(c){a.setTimeout(()=>{throw c},0)}function b(){var c=we;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class Be{constructor(){this.h=this.g=null}add(d,m){const _=Ke.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var Ke=new D(()=>new Ne,c=>c.reset());class Ne{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let J,he=!1,we=new Be,_t=()=>{const c=a.Promise.resolve(void 0);J=()=>{c.then(ot)}};var ot=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(m){C(m)}var d=Ke;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}he=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Qt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return c}();function zt(c,d){if(Re.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(W){e:{try{z(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Mn[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&zt.aa.h.call(this)}}v(zt,Re);var Mn={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),te=0;function ee(c,d,m,_,O){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=O,this.key=++te,this.da=this.fa=!1}function ie(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,d,m,_,O){var x=c.toString();c=this.g[x],c||(c=this.g[x]=[],this.h++);var Z=y(c,d,_,O);return-1<Z?(d=c[Z],m||(d.fa=!1)):(d=new ee(d,this.src,x,!!_,O),d.fa=m,c.push(d)),d};function We(c,d){var m=d.type;if(m in c.g){var _=c.g[m],O=Array.prototype.indexOf.call(_,d,void 0),x;(x=0<=O)&&Array.prototype.splice.call(_,O,1),x&&(ie(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function y(c,d,m,_){for(var O=0;O<c.length;++O){var x=c[O];if(!x.da&&x.listener==d&&x.capture==!!m&&x.ha==_)return O}return-1}var A="closure_lm_"+(1e6*Math.random()|0),N={};function B(c,d,m,_,O){if(Array.isArray(d)){for(var x=0;x<d.length;x++)B(c,d[x],m,_,O);return null}return m=ce(m),c&&c[L]?c.K(d,m,l(_)?!!_.capture:!1,O):F(c,d,m,!1,_,O)}function F(c,d,m,_,O,x){if(!d)throw Error("Invalid event type");var Z=l(O)?!!O.capture:!!O,je=ue(c);if(je||(c[A]=je=new Te(c)),m=je.add(d,m,_,Z,x),m.proxy)return m;if(_=j(),m.proxy=_,_.src=c,_.listener=m,c.addEventListener)Qt||(O=Z),O===void 0&&(O=!1),c.addEventListener(d.toString(),_,O);else if(c.attachEvent)c.attachEvent(K(d.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function j(){function c(m){return d.call(c.src,c.listener,m)}const d=q;return c}function X(c,d,m,_,O){if(Array.isArray(d))for(var x=0;x<d.length;x++)X(c,d[x],m,_,O);else _=l(_)?!!_.capture:!!_,m=ce(m),c&&c[L]?(c=c.i,d=String(d).toString(),d in c.g&&(x=c.g[d],m=y(x,m,_,O),-1<m&&(ie(x[m]),Array.prototype.splice.call(x,m,1),x.length==0&&(delete c.g[d],c.h--)))):c&&(c=ue(c))&&(d=c.g[d.toString()],c=-1,d&&(c=y(d,m,_,O)),(m=-1<c?d[c]:null)&&G(m))}function G(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[L])We(d.i,c);else{var m=c.type,_=c.proxy;d.removeEventListener?d.removeEventListener(m,_,c.capture):d.detachEvent?d.detachEvent(K(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=ue(d))?(We(m,c),m.h==0&&(m.src=null,d[A]=null)):ie(c)}}}function K(c){return c in N?N[c]:N[c]="on"+c}function q(c,d){if(c.da)c=!0;else{d=new zt(d,this);var m=c.listener,_=c.ha||c.src;c.fa&&G(c),c=m.call(_,d)}return c}function ue(c){return c=c[A],c instanceof Te?c:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(c){return typeof c=="function"?c:(c[Y]||(c[Y]=function(d){return c.handleEvent(d)}),c[Y])}function oe(){Ve.call(this),this.i=new Te(this),this.M=this,this.F=null}v(oe,Ve),oe.prototype[L]=!0,oe.prototype.removeEventListener=function(c,d,m,_){X(this,c,d,m,_)};function pe(c,d){var m,_=c.F;if(_)for(m=[];_;_=_.F)m.push(_);if(c=c.M,_=d.type||d,typeof d=="string")d=new Re(d,c);else if(d instanceof Re)d.target=d.target||c;else{var O=d;d=new Re(_,c),T(d,O)}if(O=!0,m)for(var x=m.length-1;0<=x;x--){var Z=d.g=m[x];O=ke(Z,_,!0,d)&&O}if(Z=d.g=c,O=ke(Z,_,!0,d)&&O,O=ke(Z,_,!1,d)&&O,m)for(x=0;x<m.length;x++)Z=d.g=m[x],O=ke(Z,_,!1,d)&&O}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var m=c.g[d],_=0;_<m.length;_++)ie(m[_]);delete c.g[d],c.h--}}this.F=null},oe.prototype.K=function(c,d,m,_){return this.i.add(String(c),d,!1,m,_)},oe.prototype.L=function(c,d,m,_){return this.i.add(String(c),d,!0,m,_)};function ke(c,d,m,_){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,x=0;x<d.length;++x){var Z=d[x];if(Z&&!Z.da&&Z.capture==m){var je=Z.listener,Et=Z.ha||Z.src;Z.fa&&We(c.i,Z),O=je.call(Et,_)!==!1&&O}}return O&&!_.defaultPrevented}function Oe(c,d,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function yt(c){c.g=Oe(()=>{c.g=null,c.i&&(c.i=!1,yt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class It extends Ve{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(c){Ve.call(this),this.h=c,this.g={}}v(bt,Ve);var Yt=[];function Rr(c){ae(c.g,function(d,m){this.g.hasOwnProperty(m)&&G(d)},c),c.g={}}bt.prototype.N=function(){bt.aa.N.call(this),Rr(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ei=a.JSON.stringify,vt=a.JSON.parse,un=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ti(){}ti.prototype.h=null;function ro(c){return c.h||(c.h=c.i())}function Vp(){}var so={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sl(){Re.call(this,"d")}v(Sl,Re);function Rl(){Re.call(this,"c")}v(Rl,Re);var ms={},xp=null;function Ka(){return xp=xp||new oe}ms.La="serverreachability";function Mp(c){Re.call(this,ms.La,c)}v(Mp,Re);function io(c){const d=Ka();pe(d,new Mp(d))}ms.STAT_EVENT="statevent";function Lp(c,d){Re.call(this,ms.STAT_EVENT,c),this.stat=d}v(Lp,Re);function Ft(c){const d=Ka();pe(d,new Lp(d,c))}ms.Ma="timingevent";function Fp(c,d){Re.call(this,ms.Ma,c),this.size=d}v(Fp,Re);function oo(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function ao(){this.g=!0}ao.prototype.xa=function(){this.g=!1};function ub(c,d,m,_,O,x){c.info(function(){if(c.g)if(x)for(var Z="",je=x.split("&"),Et=0;Et<je.length;Et++){var De=je[Et].split("=");if(1<De.length){var At=De[0];De=De[1];var St=At.split("_");Z=2<=St.length&&St[1]=="type"?Z+(At+"="+De+"&"):Z+(At+"=redacted&")}}else Z=null;else Z=x;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+d+`
`+m+`
`+Z})}function lb(c,d,m,_,O,x,Z){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+d+`
`+m+`
`+x+" "+Z})}function ni(c,d,m,_){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+fb(c,m)+(_?" "+_:"")})}function hb(c,d){c.info(function(){return"TIMEOUT: "+d})}ao.prototype.info=function(){};function fb(c,d){if(!c.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var _=m[c];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var x=O[0];if(x!="noop"&&x!="stop"&&x!="close")for(var Z=1;Z<O.length;Z++)O[Z]=""}}}}return ei(m)}catch{return d}}var Wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Up={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cl;function Ga(){}v(Ga,ti),Ga.prototype.g=function(){return new XMLHttpRequest},Ga.prototype.i=function(){return{}},Cl=new Ga;function Cr(c,d,m,_){this.j=c,this.i=d,this.l=m,this.R=_||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $p}function $p(){this.i=null,this.g="",this.h=!1}var Bp={},Pl={};function kl(c,d,m){c.L=1,c.v=Xa(sr(d)),c.m=m,c.P=!0,jp(c,null)}function jp(c,d){c.F=Date.now(),Qa(c),c.A=sr(c.v);var m=c.A,_=c.R;Array.isArray(_)||(_=[String(_)]),nm(m.i,"t",_),c.C=0,m=c.j.J,c.h=new $p,c.g=Em(c.j,m?d:null,!c.m),0<c.O&&(c.M=new It(p(c.Y,c,c.g),c.O)),d=c.U,m=c.g,_=c.ca;var O="readystatechange";Array.isArray(O)||(O&&(Yt[0]=O.toString()),O=Yt);for(var x=0;x<O.length;x++){var Z=B(m,O[x],_||d.handleEvent,!1,d.h||d);if(!Z)break;d.g[Z.key]=Z}d=c.H?E(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),io(),ub(c.i,c.u,c.A,c.l,c.R,c.m)}Cr.prototype.ca=function(c){c=c.target;const d=this.M;d&&ir(c)==3?d.j():this.Y(c)},Cr.prototype.Y=function(c){try{if(c==this.g)e:{const St=ir(this.g);var d=this.g.Ba();const ii=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||um(this.g)))){this.J||St!=4||d==7||(d==8||0>=ii?io(3):io(2)),Ol(this);var m=this.g.Z();this.X=m;t:if(Hp(this)){var _=um(this.g);c="";var O=_.length,x=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gs(this),co(this);var Z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,c+=this.h.i.decode(_[d],{stream:!(x&&d==O-1)});_.length=0,this.h.g+=c,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=m==200,lb(this.i,this.u,this.A,this.l,this.R,St,m),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Et=this.g;if((je=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(je)){var De=je;break t}}De=null}if(m=De)ni(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dl(this,m);else{this.o=!1,this.s=3,Ft(12),gs(this),co(this);break e}}if(this.P){m=!0;let _n;for(;!this.J&&this.C<Z.length;)if(_n=db(this,Z),_n==Pl){St==4&&(this.s=4,Ft(14),m=!1),ni(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Bp){this.s=4,Ft(15),ni(this.i,this.l,Z,"[Invalid Chunk]"),m=!1;break}else ni(this.i,this.l,_n,null),Dl(this,_n);if(Hp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||Z.length!=0||this.h.h||(this.s=1,Ft(16),m=!1),this.o=this.o&&m,!m)ni(this.i,this.l,Z,"[Invalid Chunked Response]"),gs(this),co(this);else if(0<Z.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Fl(At),At.M=!0,Ft(11))}}else ni(this.i,this.l,Z,null),Dl(this,Z);St==4&&gs(this),this.o&&!this.J&&(St==4?gm(this.j,this):(this.o=!1,Qa(this)))}else kb(this.g),m==400&&0<Z.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),gs(this),co(this)}}}catch{}finally{}};function Hp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function db(c,d){var m=c.C,_=d.indexOf(`
`,m);return _==-1?Pl:(m=Number(d.substring(m,_)),isNaN(m)?Bp:(_+=1,_+m>d.length?Pl:(d=d.slice(_,_+m),c.C=_+m,d)))}Cr.prototype.cancel=function(){this.J=!0,gs(this)};function Qa(c){c.S=Date.now()+c.I,qp(c,c.I)}function qp(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=oo(p(c.ba,c),d)}function Ol(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Cr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hb(this.i,this.A),this.L!=2&&(io(),Ft(17)),gs(this),this.s=2,co(this)):qp(this,this.S-c)};function co(c){c.j.G==0||c.J||gm(c.j,c)}function gs(c){Ol(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Rr(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function Dl(c,d){try{var m=c.j;if(m.G!=0&&(m.g==c||Nl(m.h,c))){if(!c.K&&Nl(m.h,c)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)sc(m),nc(m);else break e;Ll(m),Ft(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=oo(p(m.Za,m),6e3));if(1>=Wp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ys(m,11)}else if((c.K||m.g==c)&&sc(m),!M(d))for(O=m.Da.g.parse(d),d=0;d<O.length;d++){let De=O[d];if(m.T=De[0],De=De[1],m.G==2)if(De[0]=="c"){m.K=De[1],m.ia=De[2];const At=De[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const St=De[4];St!=null&&(m.Aa=St,m.j.info("SVER="+m.Aa));const ii=De[5];ii!=null&&typeof ii=="number"&&0<ii&&(_=1.5*ii,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const _n=c.g;if(_n){const oc=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oc){var x=_.h;x.g||oc.indexOf("spdy")==-1&&oc.indexOf("quic")==-1&&oc.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Vl(x,x.h),x.h=null))}if(_.D){const Ul=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(_.ya=Ul,Ge(_.I,_.D,Ul))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var Z=c;if(_.qa=vm(_,_.J?_.ia:null,_.W),Z.K){Gp(_.h,Z);var je=Z,Et=_.L;Et&&(je.I=Et),je.B&&(Ol(je),Qa(je)),_.g=Z}else pm(_);0<m.i.length&&rc(m)}else De[0]!="stop"&&De[0]!="close"||ys(m,7);else m.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?ys(m,7):Ml(m):De[0]!="noop"&&m.l&&m.l.ta(De),m.v=0)}}io(4)}catch{}}var pb=class{constructor(c,d){this.g=c,this.map=d}};function zp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Wp(c){return c.h?1:c.g?c.g.size:0}function Nl(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Vl(c,d){c.g?c.g.add(d):c.h=d}function Gp(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}zp.prototype.cancel=function(){if(this.i=Qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Qp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.D);return d}return P(c.i)}function mb(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(u(c)){for(var d=[],m=c.length,_=0;_<m;_++)d.push(c[_]);return d}d=[],m=0;for(_ in c)d[m++]=c[_];return d}function gb(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(u(c)||typeof c=="string"){var d=[];c=c.length;for(var m=0;m<c;m++)d.push(m);return d}d=[],m=0;for(const _ in c)d[m++]=_;return d}}}function Yp(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(u(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var m=gb(c),_=mb(c),O=_.length,x=0;x<O;x++)d.call(void 0,_[x],m&&m[x],c)}var Jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _b(c,d){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var _=c[m].indexOf("="),O=null;if(0<=_){var x=c[m].substring(0,_);O=c[m].substring(_+1)}else x=c[m];d(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function _s(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof _s){this.h=c.h,Ya(this,c.j),this.o=c.o,this.g=c.g,Ja(this,c.s),this.l=c.l;var d=c.i,m=new ho;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Xp(this,m),this.m=c.m}else c&&(d=String(c).match(Jp))?(this.h=!1,Ya(this,d[1]||"",!0),this.o=uo(d[2]||""),this.g=uo(d[3]||"",!0),Ja(this,d[4]),this.l=uo(d[5]||"",!0),Xp(this,d[6]||"",!0),this.m=uo(d[7]||"")):(this.h=!1,this.i=new ho(null,this.h))}_s.prototype.toString=function(){var c=[],d=this.j;d&&c.push(lo(d,Zp,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(lo(d,Zp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(lo(m,m.charAt(0)=="/"?Eb:vb,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",lo(m,wb)),c.join("")};function sr(c){return new _s(c)}function Ya(c,d,m){c.j=m?uo(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Ja(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Xp(c,d,m){d instanceof ho?(c.i=d,Ib(c.i,c.h)):(m||(d=lo(d,Tb)),c.i=new ho(d,c.h))}function Ge(c,d,m){c.i.set(d,m)}function Xa(c){return Ge(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function uo(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function lo(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,yb),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Zp=/[#\/\?@]/g,vb=/[#\?:]/g,Eb=/[#\?]/g,Tb=/[#\?@]/g,wb=/#/g;function ho(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Pr(c){c.g||(c.g=new Map,c.h=0,c.i&&_b(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=ho.prototype,t.add=function(c,d){Pr(this),this.i=null,c=ri(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function em(c,d){Pr(c),d=ri(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function tm(c,d){return Pr(c),d=ri(c,d),c.g.has(d)}t.forEach=function(c,d){Pr(this),this.g.forEach(function(m,_){m.forEach(function(O){c.call(d,O,_,this)},this)},this)},t.na=function(){Pr(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const O=c[_];for(let x=0;x<O.length;x++)m.push(d[_])}return m},t.V=function(c){Pr(this);let d=[];if(typeof c=="string")tm(this,c)&&(d=d.concat(this.g.get(ri(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)d=d.concat(c[m])}return d},t.set=function(c,d){return Pr(this),this.i=null,c=ri(this,c),tm(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function nm(c,d,m){em(c,d),0<m.length&&(c.i=null,c.g.set(ri(c,d),P(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const x=encodeURIComponent(String(_)),Z=this.V(_);for(_=0;_<Z.length;_++){var O=x;Z[_]!==""&&(O+="="+encodeURIComponent(String(Z[_]))),c.push(O)}}return this.i=c.join("&")};function ri(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function Ib(c,d){d&&!c.j&&(Pr(c),c.i=null,c.g.forEach(function(m,_){var O=_.toLowerCase();_!=O&&(em(this,_),nm(this,O,m))},c)),c.j=d}function bb(c,d){const m=new ao;if(a.Image){const _=new Image;_.onload=g(kr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=g(kr,m,"TestLoadImage: error",!1,d,_),_.onabort=g(kr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(kr,m,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else d(!1)}function Ab(c,d){const m=new ao,_=new AbortController,O=setTimeout(()=>{_.abort(),kr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:_.signal}).then(x=>{clearTimeout(O),x.ok?kr(m,"TestPingServer: ok",!0,d):kr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),kr(m,"TestPingServer: error",!1,d)})}function kr(c,d,m,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(m)}catch{}}function Sb(){this.g=new un}function Rb(c,d,m){const _=m||"";try{Yp(c,function(O,x){let Z=O;l(O)&&(Z=ei(O)),d.push(_+x+"="+encodeURIComponent(Z))})}catch(O){throw d.push(_+"type="+encodeURIComponent("_badmap")),O}}function Za(c){this.l=c.Ub||null,this.j=c.eb||!1}v(Za,ti),Za.prototype.g=function(){return new ec(this.l,this.j)},Za.prototype.i=function(c){return function(){return c}}({});function ec(c,d){oe.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(ec,oe),t=ec.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,po(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function rm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?fo(this):po(this),this.readyState==3&&rm(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,fo(this))},t.Qa=function(c){this.g&&(this.response=c,fo(this))},t.ga=function(){this.g&&fo(this)};function fo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,po(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function po(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function sm(c){let d="";return ae(c,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function xl(c,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=sm(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Ge(c,d,m))}function Je(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Je,oe);var Cb=/^https?$/i,Pb=["POST","PUT"];t=Je.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cl.g(),this.v=this.o?ro(this.o):ro(Cl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(x){im(this,x);return}if(c=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)m.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())m.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),O=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Pb,d,void 0))||_||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,Z]of m)this.g.setRequestHeader(x,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cm(this),this.u=!0,this.g.send(c),this.u=!1}catch(x){im(this,x)}};function im(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,om(c),tc(c)}function om(c){c.A||(c.A=!0,pe(c,"complete"),pe(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,pe(this,"complete"),pe(this,"abort"),tc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tc(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?am(this):this.bb())},t.bb=function(){am(this)};function am(c){if(c.h&&typeof o<"u"&&(!c.v[1]||ir(c)!=4||c.Z()!=2)){if(c.u&&ir(c)==4)Oe(c.Ea,0,c);else if(pe(c,"readystatechange"),ir(c)==4){c.h=!1;try{const Z=c.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=Z===0){var O=String(c.D).match(Jp)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!Cb.test(O?O.toLowerCase():"")}m=_}if(m)pe(c,"complete"),pe(c,"success");else{c.m=6;try{var x=2<ir(c)?c.g.statusText:""}catch{x=""}c.l=x+" ["+c.Z()+"]",om(c)}}finally{tc(c)}}}}function tc(c,d){if(c.g){cm(c);const m=c.g,_=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||pe(c,"ready");try{m.onreadystatechange=_}catch{}}}function cm(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function ir(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),vt(d)}};function um(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function kb(c){const d={};c=(c.g&&2<=ir(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(M(c[_]))continue;var m=w(c[_]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=d[O]||[];d[O]=x,x.push(m)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function lm(c){this.Aa=0,this.i=[],this.j=new ao,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mo("baseRetryDelayMs",5e3,c),this.cb=mo("retryDelaySeedMs",1e4,c),this.Wa=mo("forwardChannelMaxRetries",2,c),this.wa=mo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new zp(c&&c.concurrentRequestLimit),this.Da=new Sb,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lm.prototype,t.la=8,t.G=1,t.connect=function(c,d,m,_){Ft(0),this.W=c,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=vm(this,null,this.W),rc(this)};function Ml(c){if(hm(c),c.G==3){var d=c.U++,m=sr(c.I);if(Ge(m,"SID",c.K),Ge(m,"RID",d),Ge(m,"TYPE","terminate"),go(c,m),d=new Cr(c,c.j,d),d.L=2,d.v=Xa(sr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Em(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Qa(d)}ym(c)}function nc(c){c.g&&(Fl(c),c.g.cancel(),c.g=null)}function hm(c){nc(c),c.u&&(a.clearTimeout(c.u),c.u=null),sc(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function rc(c){if(!Kp(c.h)&&!c.s){c.s=!0;var d=c.Ga;J||_t(),he||(J(),he=!0),we.add(d,c),c.B=0}}function Ob(c,d){return Wp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=oo(p(c.Ga,c,d),_m(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const O=new Cr(this,this.j,c);let x=this.o;if(this.S&&(x?(x=E(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(O.H=x,x=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=dm(this,O,d),m=sr(this.I),Ge(m,"RID",c),Ge(m,"CVER",22),this.D&&Ge(m,"X-HTTP-Session-Id",this.D),go(this,m),x&&(this.O?d="headers="+encodeURIComponent(String(sm(x)))+"&"+d:this.m&&xl(m,this.m,x)),Vl(this.h,O),this.Ua&&Ge(m,"TYPE","init"),this.P?(Ge(m,"$req",d),Ge(m,"SID","null"),O.T=!0,kl(O,m,null)):kl(O,m,d),this.G=2}}else this.G==3&&(c?fm(this,c):this.i.length==0||Kp(this.h)||fm(this))};function fm(c,d){var m;d?m=d.l:m=c.U++;const _=sr(c.I);Ge(_,"SID",c.K),Ge(_,"RID",m),Ge(_,"AID",c.T),go(c,_),c.m&&c.o&&xl(_,c.m,c.o),m=new Cr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),d&&(c.i=d.D.concat(c.i)),d=dm(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Vl(c.h,m),kl(m,_,d)}function go(c,d){c.H&&ae(c.H,function(m,_){Ge(d,_,m)}),c.l&&Yp({},function(m,_){Ge(d,_,m)})}function dm(c,d,m){m=Math.min(c.i.length,m);var _=c.l?p(c.l.Na,c.l,c):null;e:{var O=c.i;let x=-1;for(;;){const Z=["count="+m];x==-1?0<m?(x=O[0].g,Z.push("ofs="+x)):x=0:Z.push("ofs="+x);let je=!0;for(let Et=0;Et<m;Et++){let De=O[Et].g;const At=O[Et].map;if(De-=x,0>De)x=Math.max(0,O[Et].g-100),je=!1;else try{Rb(At,Z,"req"+De+"_")}catch{_&&_(At)}}if(je){_=Z.join("&");break e}}}return c=c.i.splice(0,m),d.D=c,_}function pm(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;J||_t(),he||(J(),he=!0),we.add(d,c),c.v=0}}function Ll(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=oo(p(c.Fa,c),_m(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,mm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=oo(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),nc(this),mm(this))};function Fl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function mm(c){c.g=new Cr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=sr(c.qa);Ge(d,"RID","rpc"),Ge(d,"SID",c.K),Ge(d,"AID",c.T),Ge(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ge(d,"TO",c.ja),Ge(d,"TYPE","xmlhttp"),go(c,d),c.m&&c.o&&xl(d,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=Xa(sr(d)),m.m=null,m.P=!0,jp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,nc(this),Ll(this),Ft(19))};function sc(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function gm(c,d){var m=null;if(c.g==d){sc(c),Fl(c),c.g=null;var _=2}else if(Nl(c.h,d))m=d.D,Gp(c.h,d),_=1;else return;if(c.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var O=c.B;_=Ka(),pe(_,new Fp(_,m)),rc(c)}else pm(c);else if(O=d.s,O==3||O==0&&0<d.X||!(_==1&&Ob(c,d)||_==2&&Ll(c)))switch(m&&0<m.length&&(d=c.h,d.i=d.i.concat(m)),O){case 1:ys(c,5);break;case 4:ys(c,10);break;case 3:ys(c,6);break;default:ys(c,2)}}}function _m(c,d){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*d}function ys(c,d){if(c.j.info("Error code "+d),d==2){var m=p(c.fb,c),_=c.Xa;const O=!_;_=new _s(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ya(_,"https"),Xa(_),O?bb(_.toString(),m):Ab(_.toString(),m)}else Ft(2);c.G=0,c.l&&c.l.sa(d),ym(c),hm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function ym(c){if(c.G=0,c.ka=[],c.l){const d=Qp(c.h);(d.length!=0||c.i.length!=0)&&(R(c.ka,d),R(c.ka,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.ra()}}function vm(c,d,m){var _=m instanceof _s?sr(m):new _s(m);if(_.g!="")d&&(_.g=d+"."+_.g),Ja(_,_.s);else{var O=a.location;_=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var x=new _s(null);_&&Ya(x,_),d&&(x.g=d),O&&Ja(x,O),m&&(x.l=m),_=x}return m=c.D,d=c.ya,m&&d&&Ge(_,m,d),Ge(_,"VER",c.la),go(c,_),_}function Em(c,d,m){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Je(new Za({eb:m})):new Je(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ic(){}ic.prototype.g=function(c,d){return new Jt(c,d)};function Jt(c,d){oe.call(this),this.g=new lm(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!M(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!M(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new si(this)}v(Jt,oe),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){Ml(this.g)},Jt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=ei(c),c=m);d.i.push(new pb(d.Ya++,c)),d.G==3&&rc(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,Ml(this.g),delete this.g,Jt.aa.N.call(this)};function wm(c){Sl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}v(wm,Sl);function Im(){Rl.call(this),this.status=1}v(Im,Rl);function si(c){this.g=c}v(si,Tm),si.prototype.ua=function(){pe(this.g,"a")},si.prototype.ta=function(c){pe(this.g,new wm(c))},si.prototype.sa=function(c){pe(this.g,new Im)},si.prototype.ra=function(){pe(this.g,"b")},ic.prototype.createWebChannel=ic.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,hw=function(){return new ic},lw=function(){return Ka()},uw=ms,If={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wa.NO_ERROR=0,Wa.TIMEOUT=8,Wa.HTTP_ERROR=6,jc=Wa,Up.COMPLETE="complete",cw=Up,Vp.EventType=so,so.OPEN="a",so.CLOSE="b",so.ERROR="c",so.MESSAGE="d",oe.prototype.listen=oe.prototype.K,ko=Vp,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,aw=Je}).apply(typeof mc<"u"?mc:typeof self<"u"?self:typeof window<"u"?window:{});const Py="@firebase/firestore",ky="4.9.0";/**
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
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
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
 */let Xi="12.0.0";/**
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
 */const zs=new Da("@firebase/firestore");function di(){return zs.logLevel}function re(t,...e){if(zs.logLevel<=be.DEBUG){const n=e.map(tp);zs.debug(`Firestore (${Xi}): ${t}`,...n)}}function Tr(t,...e){if(zs.logLevel<=be.ERROR){const n=e.map(tp);zs.error(`Firestore (${Xi}): ${t}`,...n)}}function Ks(t,...e){if(zs.logLevel<=be.WARN){const n=e.map(tp);zs.warn(`Firestore (${Xi}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{/**
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
 */function _e(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,fw(t,r,n)}function fw(t,e,n){let r=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Tr(r),new Error(r)}function Ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||fw(e,s,r)}function Ee(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class Q4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Y4{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string",31837,{l:r}),new dw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new kt(e)}}class J4{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class X4{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new J4(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z4{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ue(this.o===void 0,3512);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Oy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Oy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class rl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=eM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function bf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Eh(s)===Eh(i)?Ae(s,i):Eh(s)?1:-1}return Ae(t.length,e.length)}const tM=55296,nM=57343;function Eh(t){const e=t.charCodeAt(0);return e>=tM&&e<=nM}function Ui(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Dy="__name__";class jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&_e(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=jn.isNumericId(e),s=jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?jn.extractNumericId(e).compare(jn.extractNumericId(n)):bf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class He extends jn{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const rM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends jn{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return rM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dy}static keyField(){return new mt([Dy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(He.fromString(e))}static fromName(e){return new le(He.fromString(e).popFirst(5))}static empty(){return new le(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new He(e.slice()))}}/**
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
 */function mw(t,e,n){if(!n)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gw(t,e,n,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ny(t){if(!le.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vy(t){if(le.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _w(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sl(t);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function sM(t,e){if(e<=0)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function st(t,e){const n={typeString:t};return e&&(n.value=e),n}function Fa(t,e){if(!_w(t))throw new ne(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const xy=-62135596800,My=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*My);return new qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xy)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/My}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fa(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:st("string",qe._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new qe(0,0))}static max(){return new ve(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ga=-1;function iM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new ss(s,le.empty(),e)}function oM(t){return new ss(t.readTime,t.key,ga)}class ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ss(ve.min(),le.empty(),ga)}static max(){return new ss(ve.max(),le.empty(),ga)}}function aM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const cM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zi(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==cM)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;n(e[l]).next(h=>{o[l]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lM(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}il.ce=-1;/**
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
 */const np=-1;function ol(t){return t==null}function Eu(t){return t===0&&1/t==-1/0}function hM(t){return typeof t=="number"&&Number.isInteger(t)&&!Eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const yw="";function fM(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ly(e)),e=dM(t.get(n),e);return Ly(e)}function dM(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case yw:n+="";break;default:n+=i}}return n}function Ly(t){return t+yw+""}/**
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
 */function Fy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gc(this.root,e,this.comparator,!0)}}class gc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Tt.RED,this.left=s??Tt.EMPTY,this.right=i??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uy(this.data.getIterator())}getIteratorFrom(e){return new Uy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Uy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class on{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new on([])}unionWith(e){let n=new ut(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ew("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const pM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(t){if(Ue(!!t,39018),typeof t=="string"){let e=0;const n=pM.exec(t);if(Ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */const Tw="server_timestamp",ww="__type__",Iw="__previous_value__",bw="__local_write_time__";function rp(t){return(t?.mapValue?.fields||{})[ww]?.stringValue===Tw}function al(t){const e=t.mapValue.fields[Iw];return rp(e)?al(e):e}function _a(t){const e=is(t.mapValue.fields[bw].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class mM{constructor(e,n,r,s,i,o,a,u,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=h}}const Tu="(default)";class $i{constructor(e,n){this.projectId=e,this.database=n||Tu}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database===Tu}isEqual(e){return e instanceof $i&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Aw="__type__",gM="__max__",_c={mapValue:{}},Sw="__vector__",wu="value";function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rp(t)?4:yM(t)?9007199254740991:_M(t)?10:11:_e(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=is(s.timestampValue),a=is(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return os(s.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),a=Ze(i.doubleValue);return o===a?Eu(o)===Eu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Fy(o)!==Fy(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!tr(o[u],a[u])))return!1;return!0}(t,e);default:return _e(52216,{left:t})}}function ya(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ze(i.integerValue||i.doubleValue),u=Ze(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return $y(t.timestampValue,e.timestampValue);case 4:return $y(_a(t),_a(e));case 5:return bf(t.stringValue,e.stringValue);case 6:return function(i,o){const a=os(i),u=os(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=Ae(a[l],u[l]);if(h!==0)return h}return Ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ae(Ze(i.latitude),Ze(o.latitude));return a!==0?a:Ae(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return By(t.arrayValue,e.arrayValue);case 10:return function(i,o){const a=i.fields||{},u=o.fields||{},l=a[wu]?.arrayValue,h=u[wu]?.arrayValue,f=Ae(l?.values?.length||0,h?.values?.length||0);return f!==0?f:By(l,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===_c.mapValue&&o===_c.mapValue)return 0;if(i===_c.mapValue)return 1;if(o===_c.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=bf(u[f],h[f]);if(p!==0)return p;const g=Bi(a[u[f]],l[h[f]]);if(g!==0)return g}return Ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw _e(23264,{he:n})}}function $y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=is(t),r=is(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function By(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Bi(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function ji(t){return Af(t)}function Af(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=is(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Af(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Af(n.fields[o])}`;return s+"}"}(t.mapValue):_e(61005,{value:t})}function Hc(t){switch(as(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=al(t);return e?16+Hc(e):16;case 5:return 2*t.stringValue.length;case 6:return os(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Hc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ds(r.fields,(i,o)=>{s+=i.length+Hc(o)}),s}(t.mapValue);default:throw _e(13486,{value:t})}}function jy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sf(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function Hy(t){return!!t&&"nullValue"in t}function qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qc(t){return!!t&&"mapValue"in t}function _M(t){return(t?.mapValue?.fields||{})[Aw]?.stringValue===Sw}function Go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(t.arrayValue.values[n]);return e}return{...t}}function yM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gM}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Go(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(Go(this.value))}}function Rw(t){const e=[];return ds(t.fields,(n,r)=>{const s=new mt([n]);if(qc(r)){const i=Rw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new on(e)}/**
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
 */class Dt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,ve.min(),ve.min(),ve.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Dt(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new Dt(e,2,n,ve.min(),ve.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ve.min(),ve.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Iu{constructor(e,n){this.position=e,this.inclusive=n}}function zy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class va{constructor(e,n="asc"){this.field=e,this.dir=n}}function vM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Cw{}class rt extends Cw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TM(e,n,r):n==="array-contains"?new bM(e,r):n==="in"?new AM(e,r):n==="not-in"?new SM(e,r):n==="array-contains-any"?new RM(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wM(e,r):new IM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bi(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends Cw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new xn(e,n)}matches(e){return Pw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pw(t){return t.op==="and"}function kw(t){return EM(t)&&Pw(t)}function EM(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function Rf(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(kw(t))return t.filters.map(e=>Rf(e)).join(",");{const e=t.filters.map(n=>Rf(n)).join(",");return`${t.op}(${e})`}}function Ow(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&tr(r.value,s.value)}(t,e):t instanceof xn?function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ow(o,s.filters[a]),!0):!1}(t,e):void _e(19439)}function Dw(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${ji(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(Dw).join(" ,")+"}"}(t):"Filter"}class TM extends rt{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class wM extends rt{constructor(e,n){super(e,"in",n),this.keys=Nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IM extends rt{constructor(e,n){super(e,"not-in",n),this.keys=Nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nw(t,e){return(e.arrayValue?.values||[]).map(n=>le.fromName(n.referenceValue))}class bM extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&ya(n.arrayValue,this.value)}}class AM extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ya(this.value.arrayValue,n)}}class SM extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ya(this.value.arrayValue,n)}}class RM extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ya(this.value.arrayValue,r))}}/**
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
 */class CM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Wy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CM(t,e,n,r,s,i,o)}function ip(t){const e=Ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ji(r)).join(",")),e.Te=n}return e.Te}function op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ky(t.startAt,e.startAt)&&Ky(t.endAt,e.endAt)}function Cf(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class to{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PM(t,e,n,r,s,i,o,a){return new to(t,e,n,r,s,i,o,a)}function ap(t){return new to(t)}function Gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vw(t){return t.collectionGroup!==null}function Qo(t){const e=Ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(mt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new va(i,r))}),n.has(mt.keyField().canonicalString())||e.Ie.push(new va(mt.keyField(),r))}return e.Ie}function Yn(t){const e=Ee(t);return e.Ee||(e.Ee=kM(e,Qo(t))),e.Ee}function kM(t,e){if(t.limitType==="F")return Wy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new va(s.field,i)});const n=t.endAt?new Iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Iu(t.startAt.position,t.startAt.inclusive):null;return Wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pf(t,e){const n=t.filters.concat([e]);return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bu(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cl(t,e){return op(Yn(t),Yn(e))&&t.limitType===e.limitType}function xw(t){return`${ip(Yn(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Dw(s)).join(", ")}]`),ol(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ji(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ji(s)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function ul(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const l=zy(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Qo(r),s)||r.endAt&&!function(o,a,u){const l=zy(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Qo(r),s))}(t,e)}function OM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Mw(t){return(e,n)=>{let r=!1;for(const s of Qo(t)){const i=DM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DM(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?Bi(u,l):_e(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e(19790,{direction:t.dir})}}/**
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
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vw(this.inner)}size(){return this.innerSize}}/**
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
 */const NM=new Ye(le.comparator);function wr(){return NM}const Lw=new Ye(le.comparator);function Oo(...t){let e=Lw;for(const n of t)e=e.insert(n.key,n);return e}function Fw(t){let e=Lw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rs(){return Yo()}function Uw(){return Yo()}function Yo(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const VM=new Ye(le.comparator),xM=new ut(le.comparator);function Se(...t){let e=xM;for(const n of t)e=e.add(n);return e}const MM=new ut(Ae);function LM(){return MM}/**
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
 */function cp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function $w(t){return{integerValue:""+t}}function FM(t,e){return hM(e)?$w(e):cp(t,e)}/**
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
 */class ll{constructor(){this._=void 0}}function UM(t,e,n){return t instanceof Au?function(s,i){const o={fields:{[ww]:{stringValue:Tw},[bw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rp(i)&&(i=al(i)),i&&(o.fields[Iw]=i),{mapValue:o}}(n,e):t instanceof Ea?jw(t,e):t instanceof Ta?Hw(t,e):function(s,i){const o=Bw(s,i),a=Qy(o)+Qy(s.Ae);return Sf(o)&&Sf(s.Ae)?$w(a):cp(s.serializer,a)}(t,e)}function $M(t,e,n){return t instanceof Ea?jw(t,e):t instanceof Ta?Hw(t,e):n}function Bw(t,e){return t instanceof Su?function(r){return Sf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Au extends ll{}class Ea extends ll{constructor(e){super(),this.elements=e}}function jw(t,e){const n=qw(e);for(const r of t.elements)n.some(s=>tr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ta extends ll{constructor(e){super(),this.elements=e}}function Hw(t,e){let n=qw(e);for(const r of t.elements)n=n.filter(s=>!tr(s,r));return{arrayValue:{values:n}}}class Su extends ll{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Qy(t){return Ze(t.integerValue||t.doubleValue)}function qw(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BM(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ea&&s instanceof Ea||r instanceof Ta&&s instanceof Ta?Ui(r.elements,s.elements,tr):r instanceof Su&&s instanceof Su?tr(r.Ae,s.Ae):r instanceof Au&&s instanceof Au}(t.transform,e.transform)}class jM{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hl{}function zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new up(t.key,Pn.none()):new Ua(t.key,t.data,Pn.none());{const n=t.data,r=Wt.empty();let s=new ut(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new on(s.toArray()),Pn.none())}}function HM(t,e,n){t instanceof Ua?function(s,i,o){const a=s.value.clone(),u=Jy(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!zc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Jy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Kw(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Jo(t,e,n,r){return t instanceof Ua?function(i,o,a,u){if(!zc(i.precondition,o))return a;const l=i.value.clone(),h=Xy(i.fieldTransforms,u,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,a,u){if(!zc(i.precondition,o))return a;const l=Xy(i.fieldTransforms,u,o),h=o.data;return h.setAll(Kw(i)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return zc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function qM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Bw(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function Yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ui(r,s,(i,o)=>BM(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jy(t,e,n){const r=new Map;Ue(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,$M(o,a,n[s]))}return r}function Xy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,UM(i,o,e))}return r}class up extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zM extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KM{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Uw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=zw(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,r)=>Yy(n,r))&&Ui(this.baseMutations,e.baseMutations,(n,r)=>Yy(n,r))}}class lp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return VM}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lp(e,n,r,s)}}/**
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
 */class WM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class GM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,Ce;function QM(t){switch(t){case U.OK:return _e(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return _e(15467,{code:t})}}function Ww(t){if(t===void 0)return Tr("GRPC error has no .code"),U.UNKNOWN;switch(t){case nt.OK:return U.OK;case nt.CANCELLED:return U.CANCELLED;case nt.UNKNOWN:return U.UNKNOWN;case nt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case nt.INTERNAL:return U.INTERNAL;case nt.UNAVAILABLE:return U.UNAVAILABLE;case nt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case nt.NOT_FOUND:return U.NOT_FOUND;case nt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case nt.ABORTED:return U.ABORTED;case nt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case nt.DATA_LOSS:return U.DATA_LOSS;default:return _e(39323,{code:t})}}(Ce=nt||(nt={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YM(){return new TextEncoder}/**
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
 */const JM=new Yr([4294967295,4294967295],0);function Zy(t){const e=YM().encode(t),n=new ow;return n.update(e),new Uint8Array(n.digest())}function ev(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([s,i],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Yr.fromNumber(r)));return s.compare(JM)===1&&(s=new Yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Zy(e),[r,s]=ev(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Zy(e),[r,s]=ev(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fl(ve.min(),s,new Ye(Ae),wr(),Se())}}class $a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $a(r,n,Se(),Se(),Se())}}/**
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
 */class Kc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Gw{constructor(e,n){this.targetId=e,this.Ce=n}}class Qw{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tv{constructor(){this.ve=0,this.Fe=nv(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),n=Se(),r=Se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:_e(38017,{changeType:i})}}),new $a(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=nv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class XM{constructor(e){this.Ge=e,this.ze=new Map,this.je=wr(),this.Je=yc(),this.He=yc(),this.Ye=new Ye(Ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Cf(i))if(r===0){const o=new le(i.path);this.et(n,o,Dt.newNoDocument(o,ve.min()))}else Ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,l)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=os(r).toUint8Array()}catch(u){if(u instanceof Ew)return Ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new hp(o,s,i)}catch(u){return Ks(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Cf(a.target)){const u=new le(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Dt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Se();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new fl(e,n,this.Ye,this.je,r);return this.je=wr(),this.Je=yc(),this.He=yc(),this.Ye=new Ye(Ae),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new tv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ut(Ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ut(Ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function yc(){return new Ye(le.comparator)}function nv(){return new Ye(le.comparator)}const ZM={asc:"ASCENDING",desc:"DESCENDING"},eL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tL={and:"AND",or:"OR"};class nL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||ol(e)?e:{value:e}}function Ru(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rL(t,e){return Ru(t,e.toTimestamp())}function Jn(t){return Ue(!!t,49232),ve.fromTimestamp(function(n){const r=is(n);return new qe(r.seconds,r.nanos)}(t))}function fp(t,e){return Of(t,e).canonicalString()}function Of(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Jw(t){const e=He.fromString(t);return Ue(nI(e),10190,{key:e.toString()}),e}function Df(t,e){return fp(t.databaseId,e.path)}function Th(t,e){const n=Jw(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Zw(n))}function Xw(t,e){return fp(t.databaseId,e)}function sL(t){const e=Jw(t);return e.length===4?He.emptyPath():Zw(e)}function Nf(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zw(t){return Ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rv(t,e,n){return{name:Df(t,e),fields:n.value.mapValue.fields}}function iL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:_e(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,h){return l.useProto3Json?(Ue(h===void 0||typeof h=="string",58123),gt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),gt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const h=l.code===void 0?U.UNKNOWN:Ww(l.code);return new ne(h,l.message||"")}(o);n=new Qw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Th(t,r.document.name),i=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ve.min(),a=new Wt({mapValue:{fields:r.document.fields}}),u=Dt.newFoundDocument(s,i,o,a),l=r.targetIds||[],h=r.removedTargetIds||[];n=new Kc(l,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Th(t,r.document),i=r.readTime?Jn(r.readTime):ve.min(),o=Dt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Kc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Th(t,r.document),i=r.removedTargetIds||[];n=new Kc([],i,s,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new GM(s,i),a=r.targetId;n=new Gw(a,o)}}return n}function oL(t,e){let n;if(e instanceof Ua)n={update:rv(t,e.key,e.value)};else if(e instanceof up)n={delete:Df(t,e.key)};else if(e instanceof ps)n={update:rv(t,e.key,e.data),updateMask:mL(e.fieldMask)};else{if(!(e instanceof zM))return _e(16599,{Vt:e.type});n={verify:Df(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Au)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Su)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw _e(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e(27497)}(t,e.precondition)),n}function aL(t,e){return t&&t.length>0?(Ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Jn(s.updateTime):Jn(i);return o.isEqual(ve.min())&&(o=Jn(i)),new jM(o,s.transformResults||[])}(n,e))):[]}function cL(t,e){return{documents:[Xw(t,e.path)]}}function uL(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Xw(t,s);const i=function(l){if(l.length!==0)return tI(xn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(h=>function(p){return{field:mi(p.field),direction:fL(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=kf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ft:n,parent:s}}function lL(t){let e=sL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=eI(f);return p instanceof xn&&kw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(v){return new va(gi(v.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,ol(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new Iu(g,p)}(n.startAt));let l=null;return n.endAt&&(l=function(f){const p=!f.before,g=f.values||[];return new Iu(g,p)}(n.endAt)),PM(e,s,o,i,a,"F",u,l)}function hL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gi(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gi(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(gi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>eI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return _e(1026)}}(n.compositeFilter.op))}(t):_e(30097,{filter:t})}function fL(t){return ZM[t]}function dL(t){return eL[t]}function pL(t){return tL[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return mt.fromServerFormat(t.fieldPath)}function tI(t){return t instanceof rt?function(n){if(n.op==="=="){if(qy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(Hy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(Hy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:dL(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(s=>tI(s));return r.length===1?r[0]:{compositeFilter:{op:pL(n.op),filters:r}}}(t):_e(54877,{filter:t})}function mL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kr{constructor(e,n,r,s,i=ve.min(),o=ve.min(),a=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class gL{constructor(e){this.yt=e}}function _L(t){const e=lL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bu(e,e.limit,"L"):e}/**
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
 */class yL{constructor(){this.Cn=new vL}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ss.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class vL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(He.comparator)).toArray()}}/**
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
 */const sv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rI=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(rI,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class Hi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Hi(0)}static cr(){return new Hi(-1)}}/**
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
 */const iv="LruGarbageCollector",EL=1048576;function ov([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class TL{constructor(e){this.Ir=e,this.buffer=new ut(ov),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ov(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(iv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){eo(n)?re(iv,"Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Vr(3e5)})}}class IL{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(il.ce);const r=new TL(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(sv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,u,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(l=Date.now(),di()<=be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(l-u)+`ms
Total Duration: ${l-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function bL(t,e){return new IL(t,e)}/**
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
 */class AL{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Jo(r.mutation,s,on.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=Rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oo();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=wr();const o=Yo(),a=function(){return Yo()}();return n.forEach((u,l)=>{const h=r.get(l.key);s.has(l.key)&&(h===void 0||h.mutation instanceof ps)?i=i.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Jo(h.mutation,l,h.mutation.getFieldMask(),qe.now())):o.set(l.key,on.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>a.set(l,new SL(h,o.get(l)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Yo();let s=new Ye((o,a)=>o-a),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=r.get(u)||on.empty();h=a.applyToLocalView(l,h),r.set(u,h);const f=(s.get(a.batchId)||Se()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,f=Uw();h.forEach(p=>{if(!i.has(p)){const g=zw(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Rs());let a=ga,u=i;return o.next(l=>$.forEach(l,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,Se())).next(h=>({batchId:a,changes:Fw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,u=>{const l=function(f,p){return new to(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,l)=>{const h=l.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let a=Oo();return o.forEach((u,l)=>{const h=i.get(u);h!==void 0&&Jo(h.mutation,l,on.empty(),qe.now()),ul(n,l)&&(a=a.insert(u,l))}),a})}}/**
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
 */class CL{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:_L(s.bundledQuery),readTime:Jn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class PL{constructor(){this.overlays=new Ye(le.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rs();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Rs(),i=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=i.get(l.largestBatchId);h===null&&(h=Rs(),i=i.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Rs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=s)););return $.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WM(n,r));let i=this.qr.get(n);i===void 0&&(i=Se(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class kL{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class dp{constructor(){this.Qr=new ut(lt.$r),this.Ur=new ut(lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new lt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new le(new He([])),r=new lt(n,e),s=new lt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new le(new He([])),r=new lt(n,e),s=new lt(n,e+1);let i=Se();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new lt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return le.comparator(e.key,n.key)||Ae(e.Yr,n.Yr)}static Kr(e,n){return Ae(e.Yr,n.Yr)||le.comparator(e.key,n.key)}}/**
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
 */class OL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ut(lt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KM(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new lt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?np:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),s=new lt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ae);return n.forEach(s=>{const i=new lt(s,0),o=new lt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new lt(new le(i),0);let a=new ut(Ae);return this.Zr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.Yr)),!0)},o),$.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,s=>{const i=new lt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new lt(n,0),s=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DL{constructor(e){this.ri=e,this.docs=function(){return new Ye(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Dt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wr();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:h}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||aM(oM(h),r)<=0||(s.has(h.key)||ul(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){_e(9500)}ii(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NL(this)}getSize(e){return $.resolve(this.size)}}class NL extends AL{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class VL{constructor(e){this.persistence=e,this.si=new Js(n=>ip(n),op),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new dp,this.targetCount=0,this.ai=Hi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
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
 */class sI{constructor(e,n){this.ui={},this.overlays={},this.ci=new il(0),this.li=!1,this.li=!0,this.hi=new kL,this.referenceDelegate=e(this),this.Pi=new VL(this),this.indexManager=new yL,this.remoteDocumentCache=function(s){return new DL(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new gL(n),this.Ii=new CL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new OL(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new xL(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return $.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class xL extends uM{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.Ri=new dp,this.Vi=null}static mi(e){return new pp(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,r=>{const s=le.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Cu{constructor(e,n){this.persistence=e,this.pi=new Js(r=>fM(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=bL(this,n)}static mi(e,n){return new Cu(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return $.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ve.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hc(e.data.value)),n}br(e,n,r){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mp(e,n.fromCache,r,s)}}/**
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
 */class ML{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LL{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return oO()?8:lM(Lt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ML;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(di()<=be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(di()<=be.DEBUG&&re("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(di()<=be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):$.resolve())}ys(e,n){if(Gy(n))return $.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bu(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Ds(n,a);return this.Cs(n,l,o,u.readTime)?this.ys(e,bu(n,null,"F")):this.vs(e,l,n,u)}))})))}ws(e,n,r,s){return Gy(n)||s.isEqual(ve.min())?$.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(di()<=be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pi(n)),this.vs(e,o,n,iM(s,ga)).next(a=>a))})}Ds(e,n){let r=new ut(Mw(e));return n.forEach((s,i)=>{ul(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return di()<=be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",pi(n)),this.ps.getDocumentsMatchingQuery(e,n,ss.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const gp="LocalStore",FL=3e8;class UL{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ye(Ae),this.xs=new Js(i=>ip(i),op),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RL(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function $L(t,e,n,r){return new UL(t,e,n,r)}async function iI(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=Se();for(const l of s){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of i){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Ls:l,removedBatchIds:o,addedBatchIds:a}))})})}function BL(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,u,l,h){const f=l.batch,p=f.keys();let g=$.resolve();return p.forEach(v=>{g=g.next(()=>h.getEntry(u,v)).next(P=>{const R=l.docVersions.get(v);Ue(R!==null,48541),P.version.compareTo(R)<0&&(f.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),h.addEntry(P)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Se();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function oI(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function jL(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(gt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(P,R,D){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=FL?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,g,h)&&a.push(n.Pi.updateTargetData(i,g))});let u=wr(),l=Se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(HL(i,o,e.documentUpdates).next(h=>{u=h.ks,l=h.qs})),!r.isEqual(ve.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(f=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(n.Ms=s,i))}function HL(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wr();return n.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ve.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):re(gp,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{ks:o,qs:s}})}function qL(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=np),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zL(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Vf(t,e,n){const r=Ee(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!eo(o))throw o;re(gp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function av(t,e,n){const r=Ee(t);let s=ve.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,h){const f=Ee(u),p=f.xs.get(h);return p!==void 0?$.resolve(f.Ms.get(p)):f.Pi.getTargetData(l,h)}(r,o,Yn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:Se())).next(a=>(KL(r,OM(e),a),{documents:a,Qs:i})))}function KL(t,e,n){let r=t.Os.get(e)||ve.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class cv{constructor(){this.activeTargetIds=LM()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WL{constructor(){this.Mo=new cv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GL{Oo(e){}shutdown(){}}/**
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
 */const uv="ConnectivityMonitor";class lv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(uv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(uv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vc=null;function xf(){return vc===null?vc=function(){return 268435456+Math.round(2147483648*Math.random())}():vc++,"0x"+vc.toString(16)}/**
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
 */const wh="RestConnection",QL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YL{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Tu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=xf(),a=this.zo(e,n.toUriEncodedString());re(wh,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:l}=new URL(a),h=Gs(l);return this.Jo(e,a,u,r,h).then(f=>(re(wh,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ks(wh,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=QL[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class JL{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Rt="WebChannelConnection";class XL extends YL{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=xf();return new Promise((a,u)=>{const l=new aw;l.setWithCredentials(!0),l.listenOnce(cw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jc.NO_ERROR:const f=l.getResponseJson();re(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case jc.TIMEOUT:re(Rt,`RPC '${e}' ${o} timed out`),u(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const p=l.getStatus();if(re(Rt,`RPC '${e}' ${o} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g?.error;if(v&&v.status&&v.message){const P=function(D){const M=D.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(M)>=0?M:U.UNKNOWN}(v.status);u(new ne(P,v.message))}else u(new ne(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new ne(U.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{re(Rt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);re(Rt,`RPC '${e}' ${o} sending request:`,s),l.send(n,"POST",h,r,15)})}T_(e,n,r){const s=xf(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hw(),a=lw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");re(Rt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);this.I_(f);let p=!1,g=!1;const v=new JL({Yo:R=>{g?re(Rt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||(re(Rt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),re(Rt,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Zo:()=>f.close()}),P=(R,D,M)=>{R.listen(D,V=>{try{M(V)}catch(z){setTimeout(()=>{throw z},0)}})};return P(f,ko.EventType.OPEN,()=>{g||(re(Rt,`RPC '${e}' stream ${s} transport opened.`),v.o_())}),P(f,ko.EventType.CLOSE,()=>{g||(g=!0,re(Rt,`RPC '${e}' stream ${s} transport closed`),v.a_(),this.E_(f))}),P(f,ko.EventType.ERROR,R=>{g||(g=!0,Ks(Rt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),v.a_(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),P(f,ko.EventType.MESSAGE,R=>{if(!g){const D=R.data[0];Ue(!!D,16349);const M=D,V=M?.error||M[0]?.error;if(V){re(Rt,`RPC '${e}' stream ${s} received error:`,V);const z=V.status;let W=function(E){const I=nt[E];if(I!==void 0)return Ww(I)}(z),ae=V.message;W===void 0&&(W=U.INTERNAL,ae="Unknown error status: "+z+" with message "+V.message),g=!0,v.a_(new ne(W,ae)),f.close()}else re(Rt,`RPC '${e}' stream ${s} received:`,D),v.u_(D)}}),P(a,uw.STAT_EVENT,R=>{R.stat===If.PROXY?re(Rt,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===If.NOPROXY&&re(Rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.__()},0),v}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Ih(){return typeof document<"u"?document:null}/**
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
 */function dl(t){return new nL(t,!0)}/**
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
 */class aI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const hv="PersistentStream";class cI{constructor(e,n,r,s,i,o,a,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new aI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return re(hv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(re(hv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZL extends cI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=iL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Jn(o.readTime):ve.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Cf(u)?{documents:cL(i,u)}:{query:uL(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Yw(i,o.resumeToken);const l=kf(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=Ru(i,o.snapshotVersion.toTimestamp());const l=kf(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=hL(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.q_(n)}}class e3 extends cI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=aL(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oL(this.serializer,r))};this.q_(n)}}/**
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
 */class t3{}class n3 extends t3{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Of(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,Of(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class r3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tr(n),this.aa=!1):re("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ws="RemoteStore";class s3{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Xs(this)&&(re(Ws,"Restarting streams for network reachability change."),await async function(u){const l=Ee(u);l.Ea.add(4),await Ba(l),l.Ra.set("Unknown"),l.Ea.delete(4),await pl(l)}(this))})}),this.Ra=new r3(r,s)}}async function pl(t){if(Xs(t))for(const e of t.da)await e(!0)}async function Ba(t){for(const e of t.da)await e(!1)}function uI(t,e){const n=Ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ep(n)?vp(n):no(n).O_()&&yp(n,e))}function _p(t,e){const n=Ee(t),r=no(n);n.Ia.delete(e),r.O_()&&lI(n,e),n.Ia.size===0&&(r.O_()?r.L_():Xs(n)&&n.Ra.set("Unknown"))}function yp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}no(t).Y_(e)}function lI(t,e){t.Va.Ue(e),no(t).Z_(e)}function vp(t){t.Va=new XM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),no(t).start(),t.Ra.ua()}function Ep(t){return Xs(t)&&!no(t).x_()&&t.Ia.size>0}function Xs(t){return Ee(t).Ea.size===0}function hI(t){t.Va=void 0}async function i3(t){t.Ra.set("Online")}async function o3(t){t.Ia.forEach((e,n)=>{yp(t,e)})}async function a3(t,e){hI(t),Ep(t)?(t.Ra.ha(e),vp(t)):t.Ra.set("Unknown")}async function c3(t,e,n){if(t.Ra.set("Online"),e instanceof Qw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){re(Ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pu(t,r)}else if(e instanceof Kc?t.Va.Ze(e):e instanceof Gw?t.Va.st(e):t.Va.tt(e),!n.isEqual(ve.min()))try{const r=await oI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.Ia.get(l);h&&i.Ia.set(l,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const h=i.Ia.get(u);if(!h)return;i.Ia.set(u,h.withResumeToken(gt.EMPTY_BYTE_STRING,h.snapshotVersion)),lI(i,u);const f=new Kr(h.target,u,l,h.sequenceNumber);yp(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re(Ws,"Failed to raise snapshot:",r),await Pu(t,r)}}async function Pu(t,e,n){if(!eo(e))throw e;t.Ea.add(1),await Ba(t),t.Ra.set("Offline"),n||(n=()=>oI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re(Ws,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pl(t)})}function fI(t,e){return e().catch(n=>Pu(t,n,e))}async function ml(t){const e=Ee(t),n=cs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:np;for(;u3(e);)try{const s=await qL(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,l3(e,s)}catch(s){await Pu(e,s)}dI(e)&&pI(e)}function u3(t){return Xs(t)&&t.Ta.length<10}function l3(t,e){t.Ta.push(e);const n=cs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function dI(t){return Xs(t)&&!cs(t).x_()&&t.Ta.length>0}function pI(t){cs(t).start()}async function h3(t){cs(t).ra()}async function f3(t){const e=cs(t);for(const n of t.Ta)e.ea(n.mutations)}async function d3(t,e,n){const r=t.Ta.shift(),s=lp.from(r,e,n);await fI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ml(t)}async function p3(t,e){e&&cs(t).X_&&await async function(r,s){if(function(o){return QM(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();cs(r).B_(),await fI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ml(r)}}(t,e),dI(t)&&pI(t)}async function fv(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),re(Ws,"RemoteStore received new credentials");const r=Xs(n);n.Ea.add(3),await Ba(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pl(n)}async function m3(t,e){const n=Ee(t);e?(n.Ea.delete(2),await pl(n)):e||(n.Ea.add(2),await Ba(n),n.Ra.set("Unknown"))}function no(t){return t.ma||(t.ma=function(n,r,s){const i=Ee(n);return i.sa(),new ZL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:i3.bind(null,t),t_:o3.bind(null,t),r_:a3.bind(null,t),H_:c3.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Ep(t)?vp(t):t.Ra.set("Unknown")):(await t.ma.stop(),hI(t))})),t.ma}function cs(t){return t.fa||(t.fa=function(n,r,s){const i=Ee(n);return i.sa(),new e3(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:h3.bind(null,t),r_:p3.bind(null,t),ta:f3.bind(null,t),na:d3.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ml(t)):(await t.fa.stop(),t.Ta.length>0&&(re(Ws,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Tp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Tp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(t,e){if(Tr("AsyncQueue",`${e}: ${t}`),eo(t))return new ne(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Pi{static emptySet(e){return new Pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dv{constructor(){this.ga=new Ye(le.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,s,i,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Pi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class g3{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _3{constructor(){this.queries=pv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Ee(n),i=s.queries;s.queries=pv(),i.forEach((o,a)=>{for(const u of a.Sa)u.onError(r)})})(this,new ne(U.ABORTED,"Firestore shutting down"))}}function pv(){return new Js(t=>xw(t),cl)}async function mI(t,e){const n=Ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new g3,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=wp(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ip(n)}async function gI(t,e){const n=Ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function y3(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&Ip(n)}function v3(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ip(t){t.Ca.forEach(e=>{e.next()})}var Mf,mv;(mv=Mf||(Mf={})).Ma="default",mv.Cache="cache";class _I{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mf.Cache}}/**
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
 */class yI{constructor(e){this.key=e}}class vI{constructor(e){this.key=e}}class E3{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=Mw(e),this.tu=new Pi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new dv,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),g=ul(this.query,f)?f:null,v=!!p&&this.mutatedKeys.has(p.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;p&&g?p.data.isEqual(g.data)?v!==P&&(r.track({type:3,doc:g}),R=!0):this.su(p,g)||(r.track({type:2,doc:g}),R=!0,(u&&this.eu(g,u)>0||l&&this.eu(g,l)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),R=!0):p&&!g&&(r.track({type:1,doc:p}),R=!0,(u||l)&&(a=!0)),R&&(g?(o=o.add(g),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(g,v){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:R})}};return P(g)-P(v)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,l=u!==this.Za;return this.Za=u,o.length!==0||l?{snapshot:new qi(this.query,e.tu,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new vI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new yI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return qi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const bp="SyncEngine";class T3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w3{constructor(e){this.key=e,this.hu=!1}}class I3{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Js(a=>xw(a),cl),this.Iu=new Map,this.Eu=new Set,this.du=new Ye(le.comparator),this.Au=new Map,this.Ru=new dp,this.Vu={},this.mu=new Map,this.fu=Hi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function b3(t,e,n=!0){const r=AI(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await EI(r,e,n,!0),s}async function A3(t,e){const n=AI(t);await EI(n,e,!0,!1)}async function EI(t,e,n,r){const s=await zL(t.localStore,Yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await S3(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&uI(t.remoteStore,s),a}async function S3(t,e,n,r,s){t.pu=(f,p,g)=>async function(P,R,D,M){let V=R.view.ru(D);V.Cs&&(V=await av(P.localStore,R.query,!1).then(({documents:S})=>R.view.ru(S,V)));const z=M&&M.targetChanges.get(R.targetId),W=M&&M.targetMismatches.get(R.targetId)!=null,ae=R.view.applyChanges(V,P.isPrimaryClient,z,W);return _v(P,R.targetId,ae.au),ae.snapshot}(t,f,p,g);const i=await av(t.localStore,e,!0),o=new E3(e,i.Qs),a=o.ru(i.documents),u=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,u);_v(t,n,l.au);const h=new T3(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),l.snapshot}async function R3(t,e,n){const r=Ee(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!cl(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&_p(r.remoteStore,s.targetId),Lf(r,s.targetId)}).catch(Zi)):(Lf(r,s.targetId),await Vf(r.localStore,s.targetId,!0))}async function C3(t,e){const n=Ee(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_p(n.remoteStore,r.targetId))}async function P3(t,e,n){const r=M3(t);try{const s=await function(o,a){const u=Ee(o),l=qe.now(),h=a.reduce((g,v)=>g.add(v.key),Se());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=wr(),P=Se();return u.Ns.getEntries(g,h).next(R=>{v=R,v.forEach((D,M)=>{M.isValidDocument()||(P=P.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,v)).next(R=>{f=R;const D=[];for(const M of a){const V=qM(M,f.get(M.key).overlayedDocument);V!=null&&D.push(new ps(M.key,V,Rw(V.value.mapValue),Pn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,l,D,a)}).next(R=>{p=R;const D=R.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(g,R.batchId,D)})}).then(()=>({batchId:p.batchId,changes:Fw(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let l=o.Vu[o.currentUser.toKey()];l||(l=new Ye(Ae)),l=l.insert(a,u),o.Vu[o.currentUser.toKey()]=l}(r,s.batchId,n),await ja(r,s.changes),await ml(r.remoteStore)}catch(s){const i=wp(s,"Failed to persist write");n.reject(i)}}async function TI(t,e){const n=Ee(t);try{const r=await jL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ue(o.hu,14607):s.removedDocuments.size>0&&(Ue(o.hu,42227),o.hu=!1))}),await ja(n,r,e)}catch(r){await Zi(r)}}function gv(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=Ee(o);u.onlineState=a;let l=!1;u.queries.forEach((h,f)=>{for(const p of f.Sa)p.va(a)&&(l=!0)}),l&&Ip(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k3(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ye(le.comparator);o=o.insert(i,Dt.newNoDocument(i,ve.min()));const a=Se().add(i),u=new fl(ve.min(),new Map,new Ye(Ae),o,a);await TI(r,u),r.du=r.du.remove(i),r.Au.delete(e),Ap(r)}else await Vf(r.localStore,e,!1).then(()=>Lf(r,e,n)).catch(Zi)}async function O3(t,e){const n=Ee(t),r=e.batch.batchId;try{const s=await BL(n.localStore,e);II(n,r,null),wI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,s)}catch(s){await Zi(s)}}async function D3(t,e,n){const r=Ee(t);try{const s=await function(o,a){const u=Ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return u.mutationQueue.lookupMutationBatch(l,a).next(f=>(Ue(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(l,f))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>u.localDocuments.getDocuments(l,h))})}(r.localStore,e);II(r,e,n),wI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ja(r,s)}catch(s){await Zi(s)}}function wI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function II(t,e,n){const r=Ee(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Lf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||bI(t,r)})}function bI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(_p(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Ap(t))}function _v(t,e,n){for(const r of n)r instanceof yI?(t.Ru.addReference(r.key,e),N3(t,r)):r instanceof vI?(re(bp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||bI(t,r.key)):_e(19791,{wu:r})}function N3(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(re(bp,"New document in limbo: "+n),t.Eu.add(r),Ap(t))}function Ap(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new le(He.fromString(e)),r=t.fu.next();t.Au.set(r,new w3(n)),t.du=t.du.insert(n,r),uI(t.remoteStore,new Kr(Yn(ap(n.path)),r,"TargetPurposeLimboResolution",il.ce))}}async function ja(t,e,n){const r=Ee(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,u)=>{o.push(r.pu(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient){const h=l?!l.fromCache:n?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(l){s.push(l);const h=mp.As(u.targetId,l);i.push(h)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,l){const h=Ee(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(l,p=>$.forEach(p.Es,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>$.forEach(p.ds,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!eo(f))throw f;re(gp,"Failed to update sequence numbers: "+f)}for(const f of l){const p=f.targetId;if(!f.fromCache){const g=h.Ms.get(p),v=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(v);h.Ms=h.Ms.insert(p,P)}}}(r.localStore,i))}async function V3(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){re(bp,"User change. New user:",e.toKey());const r=await iI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(u=>{u.reject(new ne(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ja(n,r.Ls)}}function x3(t,e){const n=Ee(t),r=n.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let s=Se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function AI(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k3.bind(null,e),e.Pu.H_=y3.bind(null,e.eventManager),e.Pu.yu=v3.bind(null,e.eventManager),e}function M3(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D3.bind(null,e),e}class ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return $L(this.persistence,new LL,e.initialUser,this.serializer)}Cu(e){return new sI(pp.mi,this.serializer)}Du(e){return new WL}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ku.provider={build:()=>new ku};class L3 extends ku{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ue(this.persistence.referenceDelegate instanceof Cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wL(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new sI(r=>Cu.mi(r,n),this.serializer)}}class Ff{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V3.bind(null,this.syncEngine),await m3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _3}()}createDatastore(e){const n=dl(e.databaseInfo.databaseId),r=function(i){return new XL(i)}(e.databaseInfo);return function(i,o,a,u){return new n3(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new s3(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>gv(this.syncEngine,n,0),function(){return lv.v()?new lv:new GL}())}createSyncEngine(e,n){return function(s,i,o,a,u,l,h){const f=new I3(s,i,o,a,u,l);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=Ee(n);re(Ws,"RemoteStore shutting down."),r.Ea.add(5),await Ba(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ff.provider={build:()=>new Ff};/**
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
 */class SI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const us="FirestoreClient";class F3{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=rl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re(us,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re(us,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bh(t,e){t.asyncQueue.verifyOperationInProgress(),re(us,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await iI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await U3(t);re(us,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fv(e.remoteStore,s)),t._onlineComponents=e}async function U3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re(us,"Using user provided OfflineComponentProvider");try{await bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await bh(t,new ku)}}else re(us,"Using default OfflineComponentProvider"),await bh(t,new L3(void 0));return t._offlineComponents}async function RI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re(us,"Using user provided OnlineComponentProvider"),await yv(t,t._uninitializedComponentsProvider._online)):(re(us,"Using default OnlineComponentProvider"),await yv(t,new Ff))),t._onlineComponents}function $3(t){return RI(t).then(e=>e.syncEngine)}async function CI(t){const e=await RI(t),n=e.eventManager;return n.onListen=b3.bind(null,e.syncEngine),n.onUnlisten=R3.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A3.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=C3.bind(null,e.syncEngine),n}function B3(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const h=new SI({next:p=>{h.Nu(),o.enqueueAndForget(()=>gI(i,f));const g=p.docs.has(a);!g&&p.fromCache?l.reject(new ne(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?l.reject(new ne(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new _I(ap(a.path),h,{includeMetadataChanges:!0,qa:!0});return mI(i,f)}(await CI(t),t.asyncQueue,e,n,r)),r.promise}function j3(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const h=new SI({next:p=>{h.Nu(),o.enqueueAndForget(()=>gI(i,f)),p.fromCache&&u.source==="server"?l.reject(new ne(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new _I(a,h,{includeMetadataChanges:!0,qa:!0});return mI(i,f)}(await CI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function PI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vv=new Map;/**
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
 */const kI="firestore.googleapis.com",Ev=!0;class Tv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kI,this.ssl=Ev}else this.host=e.host,this.ssl=e.ssl??Ev;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EL)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pw;switch(r.type){case"firstParty":return new X4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vv.get(n);r&&(re("ComponentProvider","Removing Datastore"),vv.delete(n),r.terminate())}(this),Promise.resolve()}}function OI(t,e,n,r={}){t=er(t,gl);const s=Gs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Rd(`https://${a}`),Cd("Firestore",!0)),i.host!==kI&&i.host!==a&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!$s(u,o)&&(t._setSettings(u),r.mockUserToken)){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=kt.MOCK_USER;else{l=bT(r.mockUserToken,t._app?.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new ne(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new kt(f)}t._authCredentials=new Q4(new dw(l,h))}}/**
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
 */class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Fa(n,tt._jsonSchema))return new tt(e,r||null,new le(He.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:st("string",tt._jsonSchemaVersion),referencePath:st("string")};class _r extends Sr{constructor(e,n,r){super(e,n,ap(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new le(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function Uf(t,e,...n){if(t=Xe(t),mw("collection","path",e),t instanceof gl){const r=He.fromString(e,...n);return Vy(r),new _r(t,null,r)}{if(!(t instanceof tt||t instanceof _r))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Vy(r),new _r(t.firestore,null,r)}}function Xo(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=rl.newId()),mw("doc","path",e),t instanceof gl){const r=He.fromString(e,...n);return Ny(r),new tt(t,null,new le(r))}{if(!(t instanceof tt||t instanceof _r))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Ny(r),new tt(t.firestore,t instanceof _r?t.converter:null,new le(r))}}/**
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
 */const wv="AsyncQueue";class Iv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new aI(this,"async_queue_retry"),this._c=()=>{const r=Ih();r&&re(wv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ih();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new gr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!eo(e))throw e;re(wv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Tr("INTERNAL UNHANDLED ERROR: ",bv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Tp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&_e(47125,{Pc:bv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Zs extends gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Iv,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iv(e),this._firestoreClient=void 0,await e}}}function DI(t,e){const n=typeof t=="object"?t:Ud(),r=typeof t=="string"?t:Tu,s=Yi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=TT("firestore");i&&OI(s,...i)}return s}function _l(t){if(t._terminated)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||H3(t),t._firestoreClient}function H3(t){const e=t._freezeSettings(),n=function(s,i,o,a){return new mM(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,PI(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new F3(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
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
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(gt.fromBase64String(e))}catch(n){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fa(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:st("string",rn._jsonSchemaVersion),bytes:st("string")};/**
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
 */class Ha{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yl{constructor(e){this._methodName=e}}/**
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
 */class kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(Fa(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:st("string",kn._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fa(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new ne(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:st("string",On._jsonSchemaVersion),vectorValues:st("object")};/**
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
 */const q3=/^__.*__$/;class z3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}class NI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:t})}}class Sp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Sp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ou(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(VI(this.Ac)&&q3.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class K3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dl(e)}Cc(e,n,r,s=!1){return new Sp({Ac:e,methodName:n,Dc:r,path:mt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rp(t){const e=t._freezeSettings(),n=dl(t._databaseId);return new K3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W3(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Cp("Data must be an object, but it was:",o,r);const a=xI(r,o);let u,l;if(i.merge)u=new on(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=$f(e,f,n);if(!o.contains(p))throw new ne(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);LI(h,p)||h.push(p)}u=new on(h),l=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,l=o.fieldTransforms;return new z3(new Wt(a),u,l)}class vl extends yl{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vl}}function G3(t,e,n,r){const s=t.Cc(1,e,n);Cp("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();ds(r,(u,l)=>{const h=Pp(e,u,n);l=Xe(l);const f=s.yc(h);if(l instanceof vl)i.push(h);else{const p=qa(l,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new on(i);return new NI(o,a,s.fieldTransforms)}function Q3(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[$f(e,r,n)],u=[s];if(i.length%2!=0)throw new ne(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push($f(e,i[p])),u.push(i[p+1]);const l=[],h=Wt.empty();for(let p=a.length-1;p>=0;--p)if(!LI(l,a[p])){const g=a[p];let v=u[p];v=Xe(v);const P=o.yc(g);if(v instanceof vl)l.push(g);else{const R=qa(v,P);R!=null&&(l.push(g),h.set(g,R))}}const f=new on(l);return new NI(h,f,o.fieldTransforms)}function Y3(t,e,n,r=!1){return qa(n,t.Cc(r?4:3,e))}function qa(t,e){if(MI(t=Xe(t)))return Cp("Unsupported field value:",e,t),xI(t,e);if(t instanceof yl)return function(r,s){if(!VI(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=qa(a,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FM(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:Ru(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ru(s.serializer,i)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Yw(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(o,a){return{mapValue:{fields:{[Aw]:{stringValue:Sw},[wu]:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Sc("VectorValues must only contain numeric values.");return cp(a.serializer,l)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${sl(r)}`)}(t,e)}function xI(t,e){const n={};return vw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(r,s)=>{const i=qa(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function MI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof kn||t instanceof rn||t instanceof tt||t instanceof yl||t instanceof On)}function Cp(t,e,n){if(!MI(n)||!_w(n)){const r=sl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function $f(t,e,n){if((e=Xe(e))instanceof Ha)return e._internalPath;if(typeof e=="string")return Pp(t,e);throw Ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const J3=new RegExp("[~\\*/\\[\\]]");function Pp(t,e,n){if(e.search(J3)>=0)throw Ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ha(...e.split("."))._internalPath}catch{throw Ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ou(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new ne(U.INVALID_ARGUMENT,a+t+u)}function LI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class FI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(El("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X3 extends FI{data(){return super.data()}}function El(t,e){return typeof e=="string"?Pp(t,e):e instanceof Ha?e._internalPath:e._delegate._internalPath}/**
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
 */function Z3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class Tl extends kp{}function UI(t,e,...n){let r=[];e instanceof kp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof wl).length,a=i.filter(u=>u instanceof za).length;if(o>1||o>0&&a>0)throw new ne(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class za extends Tl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new za(e,n,r)}_apply(e){const n=this._parse(e);return HI(e._query,n),new Sr(e.firestore,e.converter,Pf(e._query,n))}_parse(e){const n=Rp(e.firestore);return function(i,o,a,u,l,h,f){let p;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ne(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Sv(f,h);const v=[];for(const P of f)v.push(Av(u,i,P));p={arrayValue:{values:v}}}else p=Av(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Sv(f,h),p=Y3(a,o,f,h==="in"||h==="not-in");return rt.create(l,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $I(t,e,n){const r=e,s=El("where",t);return za._create(s,r,n)}class wl extends kp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)HI(o,u),o=Pf(o,u)}(e._query,n),new Sr(e.firestore,e.converter,Pf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Il extends Tl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Il(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new va(i,o)}(e._query,this._field,this._direction);return new Sr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new to(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function BI(t,e="asc"){const n=e,r=El("orderBy",t);return Il._create(r,n)}class bl extends Tl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bl(e,n,r)}_apply(e){return new Sr(e.firestore,e.converter,bu(e._query,this._limit,this._limitType))}}function jI(t){return sM("limit",t),bl._create("limit",t,"F")}function Av(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new ne(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vw(e)&&n.indexOf("/")!==-1)throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!le.isDocumentKey(r))throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jy(t,new le(r))}if(n instanceof tt)return jy(t,n._key);throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sl(n)}.`)}function Sv(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HI(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qI{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[wu].arrayValue?.values?.map(r=>Ze(r.doubleValue));return new On(n)}convertGeoPoint(e){return new kn(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=al(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=is(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ue(nI(r),9688,{name:e});const s=new $i(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Tr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function e6(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jr extends FI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(El("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jr._jsonSchema={type:st("string",Jr._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class Zo extends Jr{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new Ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Zo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ti(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Zo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ti(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:t6(a.type),doc:u,oldIndex:l,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function t6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:t})}}/**
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
 */function zI(t){t=er(t,tt);const e=er(t.firestore,Zs);return B3(_l(e),t._key).then(n=>n6(e,t,n))}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:st("string",xs._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};class KI extends qI{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function WI(t){t=er(t,Sr);const e=er(t.firestore,Zs),n=_l(e),r=new KI(e);return Z3(t._query),j3(n,t._query).then(s=>new xs(e,r,t,s))}function GI(t,e,n,...r){t=er(t,tt);const s=er(t.firestore,Zs),i=Rp(s);let o;return o=typeof(e=Xe(e))=="string"||e instanceof Ha?Q3(i,"updateDoc",t._key,e,n,r):G3(i,"updateDoc",t._key,e),Al(s,[o.toMutation(t._key,Pn.exists(!0))])}function QI(t){return Al(er(t.firestore,Zs),[new up(t._key,Pn.none())])}function YI(t,e){const n=er(t.firestore,Zs),r=Xo(t),s=e6(t.converter,e);return Al(n,[W3(Rp(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Pn.exists(!1))]).then(()=>r)}function Al(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>P3(await $3(r),s,i)),i.promise}(_l(t),e)}function n6(t,e,n){const r=n.docs.get(e._key),s=new KI(t);return new Jr(t,s,e._key,r,new Ti(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Xi=s})(Qs),mn(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Zs(new Y4(r.getProvider("auth-internal")),new Z4(o,r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(l.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Mt(Py,ky,e),Mt(Py,ky,"esm2020")})();const r6=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:qI,Bytes:rn,CollectionReference:_r,DocumentReference:tt,DocumentSnapshot:Jr,FieldPath:Ha,FieldValue:yl,Firestore:Zs,FirestoreError:ne,GeoPoint:kn,Query:Sr,QueryCompositeFilterConstraint:wl,QueryConstraint:Tl,QueryDocumentSnapshot:Zo,QueryFieldFilterConstraint:za,QueryLimitConstraint:bl,QueryOrderByConstraint:Il,QuerySnapshot:xs,SnapshotMetadata:Ti,Timestamp:qe,VectorValue:On,_AutoId:rl,_ByteString:gt,_DatabaseId:$i,_DocumentKey:le,_EmptyAuthCredentialsProvider:pw,_FieldPath:mt,_cast:er,_logWarn:Ks,_validateIsNotUsedTogether:gw,addDoc:YI,collection:Uf,connectFirestoreEmulator:OI,deleteDoc:QI,doc:Xo,ensureFirestoreConfigured:_l,executeWrite:Al,getDoc:zI,getDocs:WI,getFirestore:DI,limit:jI,orderBy:BI,query:UI,updateDoc:GI,where:$I},Symbol.toStringTag,{value:"Module"}));/**
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
 */const JI="firebasestorage.googleapis.com",s6="storageBucket",i6=120*1e3,o6=600*1e3;/**
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
 */class rr extends gn{constructor(e,n,r=0){super(Ah(e),`Firebase Storage: ${n} (${Ah(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ah(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nr||(nr={}));function Ah(t){return"storage/"+t}function a6(){const t="An unknown error occurred, please check the error payload for server response.";return new rr(nr.UNKNOWN,t)}function c6(){return new rr(nr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function u6(){return new rr(nr.CANCELED,"User canceled the upload/download.")}function l6(t){return new rr(nr.INVALID_URL,"Invalid URL '"+t+"'.")}function h6(t){return new rr(nr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Rv(t){return new rr(nr.INVALID_ARGUMENT,t)}function XI(){return new rr(nr.APP_DELETED,"The Firebase app was deleted.")}function f6(t){return new rr(nr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class bn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=bn.makeFromUrl(e,n)}catch{return new bn(e,"")}if(r.path==="")return r;throw h6(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function l(z){z.path_=decodeURIComponent(z.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),v={bucket:1,path:3},P=n===JI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",D=new RegExp(`^https?://${P}/${s}/${R}`,"i"),V=[{regex:a,indices:u,postModify:i},{regex:g,indices:v,postModify:l},{regex:D,indices:{bucket:1,path:2},postModify:l}];for(let z=0;z<V.length;z++){const W=V[z],ae=W.regex.exec(e);if(ae){const S=ae[W.indices.bucket];let E=ae[W.indices.path];E||(E=""),r=new bn(S,E),W.postModify(r);break}}if(r==null)throw l6(e);return r}}class d6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function p6(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let l=!1;function h(...R){l||(l=!0,e.apply(null,R))}function f(R){s=setTimeout(()=>{s=null,t(g,u())},R)}function p(){i&&clearTimeout(i)}function g(R,...D){if(l){p();return}if(R){p(),h.call(null,R,...D);return}if(u()||o){p(),h.call(null,R,...D);return}r<64&&(r*=2);let V;a===1?(a=2,V=0):V=(r+Math.random())*1e3,f(V)}let v=!1;function P(R){v||(v=!0,p(),!l&&(s!==null?(R||(a=2),clearTimeout(s),f(0)):R||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function m6(t){t(!1)}/**
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
 */function g6(t){return t!==void 0}function Cv(t,e,n,r){if(r<e)throw Rv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rv(`Invalid value for '${t}'. Expected ${n} or less.`)}function _6(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Du;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Du||(Du={}));/**
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
 */function y6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class v6{constructor(e,n,r,s,i,o,a,u,l,h,f,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,P)=>{this.resolve_=v,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ec(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Du.NO_ERROR,u=i.getStatus();if(!a||y6(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Du.ABORT;r(!1,new Ec(!1,null,h));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Ec(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());g6(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=a6();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?XI():u6();o(u)}else{const u=c6();o(u)}};this.canceled_?n(!1,new Ec(!1,null,!0)):this.backoffId_=p6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&m6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ec{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function E6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function T6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function w6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function I6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function b6(t,e,n,r,s,i,o=!0,a=!1){const u=_6(t.urlParams),l=t.url+u,h=Object.assign({},t.headers);return w6(h,e),E6(h,n),T6(h,i),I6(h,r),new v6(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function A6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function S6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Nu{constructor(e,n){this._service=e,n instanceof bn?this._location=n:this._location=bn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nu(e,n)}get root(){const e=new bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return S6(this._location.path)}get storage(){return this._service}get parent(){const e=A6(this._location.path);if(e===null)return null;const n=new bn(this._location.bucket,e);return new Nu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw f6(e)}}function Pv(t,e){const n=e?.[s6];return n==null?null:bn.makeFromBucketSpec(n,t)}function R6(t,e,n,r={}){t.host=`${e}:${n}`;const s=Gs(e);s&&(Rd(`https://${t.host}/b`),Cd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bT(i,t.app.options.projectId))}class C6{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=JI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=i6,this._maxUploadRetryTime=o6,this._requests=new Set,s!=null?this._bucket=bn.makeFromBucketSpec(s,this._host):this._bucket=Pv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bn.makeFromBucketSpec(this._url,e):this._bucket=Pv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nu(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new d6(XI());{const o=b6(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const kv="@firebase/storage",Ov="0.14.0";/**
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
 */const ZI="storage";function P6(t=Ud(),e){t=Xe(t);const r=Yi(t,ZI).getImmediate({identifier:e}),s=TT("storage");return s&&k6(r,...s),r}function k6(t,e,n,r={}){R6(t,e,n,r)}function O6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new C6(n,r,s,e,Qs)}function D6(){mn(new cn(ZI,O6,"PUBLIC").setMultipleInstances(!0)),Mt(kv,Ov,""),Mt(kv,Ov,"esm2020")}D6();/**
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
 */const Dv="analytics",N6="firebase_id",V6="origin",x6=60*1e3,M6="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Op="https://www.googletagmanager.com/gtag/js";/**
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
 */const Gt=new Da("@firebase/analytics");/**
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
 */const L6={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new hs("analytics","Analytics",L6);/**
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
 */function F6(t){if(!t.startsWith(Op)){const e=dn.create("invalid-gtag-resource",{gtagURL:t});return Gt.warn(e.message),""}return t}function eb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function U6(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $6(t,e){const n=U6("firebase-js-sdk-policy",{createScriptURL:F6}),r=document.createElement("script"),s=`${Op}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function B6(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function j6(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await eb(n)).find(l=>l.measurementId===s);u&&await e[u.appId]}}catch(a){Gt.error(a)}t("config",s,i)}async function H6(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await eb(n);for(const u of o){const l=a.find(f=>f.measurementId===u),h=l&&e[l.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Gt.error(i)}}function q6(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,u]=o;await H6(t,e,n,a,u)}else if(i==="config"){const[a,u]=o;await j6(t,e,n,r,a,u)}else if(i==="consent"){const[a,u]=o;t("consent",a,u)}else if(i==="get"){const[a,u,l]=o;t("get",a,u,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Gt.error(a)}}return s}function z6(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=q6(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function K6(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Op)&&n.src.includes(t))return n;return null}/**
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
 */const W6=30,G6=1e3;class Q6{constructor(e={},n=G6){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tb=new Q6;function Y6(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function J6(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:Y6(n)},s=M6.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function X6(t,e=tb,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw dn.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw dn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tF;return setTimeout(async()=>{a.abort()},x6),nb({appId:r,apiKey:s,measurementId:i},o,a,e)}async function nb(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=tb){const{appId:i,measurementId:o}=t;try{await Z6(r,e)}catch(a){if(o)return Gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await J6(t);return s.deleteThrottleMetadata(i),a}catch(a){const u=a;if(!eF(u)){if(s.deleteThrottleMetadata(i),o)return Gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(u?.customData?.httpStatus)===503?x_(n,s.intervalMillis,W6):x_(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,h),Gt.debug(`Calling attemptFetch again in ${l} millis`),nb(t,h,r,s)}}function Z6(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eF(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class tF{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nF(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
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
 */async function rF(){if(Pd())try{await kd()}catch(t){return Gt.warn(dn.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Gt.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sF(t,e,n,r,s,i,o){const a=X6(t);a.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Gt.error(p)),e.push(a);const u=rF().then(p=>{if(p)return r.getId()}),[l,h]=await Promise.all([a,u]);K6(i)||$6(i,l.measurementId),s("js",new Date);const f=o?.config??{};return f[V6]="firebase",f.update=!0,h!=null&&(f[N6]=h),s("config",l.measurementId,f),l.measurementId}/**
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
 */class iF{constructor(e){this.app=e}_delete(){return delete ea[this.app.options.appId],Promise.resolve()}}let ea={},Nv=[];const Vv={};let Sh="dataLayer",oF="gtag",xv,rb,Mv=!1;function aF(){const t=[];if(AT()&&t.push("This is a browser extension environment."),ST()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=dn.create("invalid-analytics-context",{errorInfo:e});Gt.warn(n.message)}}function cF(t,e,n){aF();const r=t.options.appId;if(!r)throw dn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(ea[r]!=null)throw dn.create("already-exists",{id:r});if(!Mv){B6(Sh);const{wrappedGtag:i,gtagCore:o}=z6(ea,Nv,Vv,Sh,oF);rb=i,xv=o,Mv=!0}return ea[r]=sF(t,Nv,Vv,e,xv,Sh,n),new iF(t)}function uF(t,e,n,r){t=Xe(t),nF(rb,ea[t.app.options.appId],e,n,r).catch(s=>Gt.error(s))}const Lv="@firebase/analytics",Fv="0.10.18";function lF(){mn(new cn(Dv,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cF(r,s,n)},"PUBLIC")),mn(new cn("analytics-internal",t,"PRIVATE")),Mt(Lv,Fv),Mt(Lv,Fv,"esm2020");function t(e){try{const n=e.getProvider(Dv).getImmediate();return{logEvent:(r,s,i)=>uF(n,r,s,i)}}catch(n){throw dn.create("interop-component-reg-failed",{reason:n})}}}lF();const sb={apiKey:"AIzaSyCSO3Jw651S9CZH4Swz7BSKh2x_ydbALVs",authDomain:"ngodingskuyy-id.firebaseapp.com",projectId:"ngodingskuyy-id",storageBucket:"ngodingskuyy-id.firebasestorage.app",messagingSenderId:"140840415909",appId:"1:140840415909:web:446eb243c5f982bf88534c",measurementId:"G-FJDWL4TDR7"},hF=Object.values(sb).every(t=>t!=="");let Tc=null,$n=null,hn=null,ib=null,ob=null,Wc=null;if(hF)try{Tc=UT(sb),$n=W4(Tc),hn=DI(Tc),ib=P6(Tc),typeof window<"u",console.log("✅ Firebase initialized successfully")}catch(t){console.warn("⚠️ Firebase initialization failed:",t)}else console.warn("⚠️ Firebase not configured. Please set up environment variables."),console.log("📝 Create a .env file with your Firebase configuration"),console.log("📋 Copy from .env.example and fill in your Firebase project details");const fF=Object.freeze(Object.defineProperty({__proto__:null,get analytics(){return ob},get auth(){return $n},get db(){return hn},get performance(){return Wc},get storage(){return ib}},Symbol.toStringTag,{value:"Module"})),ab=()=>{const t=o=>{if(!Wc)return{start:()=>console.log(`🏃‍♂️ Performance trace started: ${o}`),stop:()=>console.log(`⏹️ Performance trace stopped: ${o}`),putAttribute:(u,l)=>console.log(`📊 Trace ${o} attribute: ${u} = ${l}`),putMetric:(u,l)=>console.log(`📈 Trace ${o} metric: ${u} = ${l}`)};const a=RV(Wc,o);return{start:()=>a.start(),stop:()=>a.stop(),putAttribute:(u,l)=>a.putAttribute(u,l),putMetric:(u,l)=>a.putMetric(u,l)}};return{createTrace:t,trackPageLoad:o=>{const a=t(`page_load_${o}`);a&&(a.start(),a.putAttribute("page_name",o),document.readyState==="complete"?a.stop():window.addEventListener("load",()=>{a.stop()}))},trackComponentMount:o=>{const a=Wc?Date.now():0,u=t(`component_mount_${o}`);return u&&(u.start(),u.putAttribute("component",o)),{finish:()=>{if(u){const l=Date.now()-a;u.putMetric("mount_time_ms",l),u.stop()}}}},trackAPICall:o=>{const a=Date.now(),u=t(`api_call_${o.replace(/[^a-zA-Z0-9]/g,"_")}`);return u&&(u.start(),u.putAttribute("endpoint",o)),{success:()=>{if(u){const l=Date.now()-a;u.putMetric("duration_ms",l),u.putAttribute("status","success"),u.stop()}},error:l=>{if(u){const h=Date.now()-a;u.putMetric("duration_ms",h),u.putAttribute("status","error"),l&&u.putAttribute("error_code",l),u.stop()}}}},trackUserAction:(o,a)=>{const u=t(`user_action_${o}`);u&&(u.start(),u.putAttribute("action",o),u.putAttribute("target",a),u.putAttribute("timestamp",new Date().toISOString()),setTimeout(()=>{u.stop()},100))},trackNavigation:(o,a)=>{const u=t("navigation");u&&(u.start(),u.putAttribute("from",o),u.putAttribute("to",a),setTimeout(()=>{u.stop()},500))}}},cb=()=>{const t=(o,a)=>{try{console.log("📊 Analytics (dev):",o,a)}catch(u){console.log("Analytics skipped in development:",u)}};return{trackEvent:t,trackPageView:o=>{t("page_view",{page_title:o,page_location:window.location.href,timestamp:new Date().toISOString()})},trackButtonClick:(o,a)=>{t("button_click",{button_name:o,location:a||"unknown",timestamp:new Date().toISOString()})},trackJoinCommunity:o=>{t("join_community",{source:o,timestamp:new Date().toISOString()})},trackProjectView:o=>{t("project_view",{project_name:o,timestamp:new Date().toISOString()})},trackPerformanceEvent:(o,a,u)=>{t(`perf_${o}`,{...u,...a,timestamp:new Date().toISOString()})}}},dF=Ra({__name:"AppFooter",setup(t,{expose:e}){e();const n=Sd(),{t:r}=wd(n),{trackComponentMount:s,trackUserAction:i}=ab(),{trackButtonClick:o}=cb(),a=new Date().getFullYear();Bu(async()=>{await s("AppFooter")});const h={localeStore:n,t:r,trackComponentMount:s,trackUserAction:i,trackButtonClick:o,currentYear:a,handleSocialClick:async(f,p)=>{await i("social_link_click",f),o(`${f}_footer`,"footer"),window.open(p,"_blank","noopener,noreferrer")},socialLinks:[{name:"GitHub",url:"https://github.com/ngodingskuyy",icon:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{name:"Discord",url:"https://discord.gg/uhZWnUeeW8",icon:"M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"},{name:"Email",url:"mailto:contact@ngodingskuyy.com",icon:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"}]};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),Dp=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},pF={class:"footer"},mF={class:"container"},gF={class:"footer-content"},_F={class:"footer-brand"},yF={class:"brand-description"},vF={class:"social-links"},EF=["title","onClick"],TF={width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},wF=["d"],IF={class:"footer-section"},bF={class:"section-title"},AF={class:"link-list"},SF={href:"https://discord.gg/uhZWnUeeW8",target:"_blank",class:"footer-link"},RF={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},CF={href:"mailto:contact@ngodingskuyy.com",class:"footer-link"},PF={class:"footer-section"},kF={class:"section-title"},OF={class:"link-list"},DF={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},NF={href:"mailto:contact@ngodingskuyy.com",class:"footer-link"},VF={href:"https://github.com/ngodingskuyy/ngodingskuyy.github.io",target:"_blank",class:"footer-link"},xF={class:"footer-section"},MF={class:"section-title"},LF={class:"link-list"},FF={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},UF={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},$F={href:"https://github.com/ngodingskuyy",target:"_blank",class:"footer-link"},BF={class:"footer-bottom"},jF={class:"footer-bottom-content"},HF={class:"copyright"},qF={class:"built-with"};function zF(t,e,n,r,s,i){const o=iS("RouterLink");return Tn(),wn("footer",pF,[k("div",mF,[k("div",gF,[k("div",_F,[e[0]||(e[0]=k("h3",{class:"brand-name"},"NgodingSkuyy",-1)),k("p",yF,de(r.t.footer.brandDescription),1),k("div",vF,[(Tn(),wn(tn,null,Oh(r.socialLinks,a=>k("a",{key:a.name,title:a.name,class:"social-link",onClick:So(u=>r.handleSocialClick(a.name,a.url),["prevent"])},[(Tn(),wn("svg",TF,[k("path",{d:a.icon},null,8,wF)]))],8,EF)),64))])]),k("div",IF,[k("h4",bF,de(r.t.footer.quickLinks.title),1),k("ul",AF,[k("li",null,[et(o,{to:"/",class:"footer-link"},{default:Mr(()=>[Oi(de(r.t.footer.quickLinks.home),1)]),_:1})]),k("li",null,[et(o,{to:"/about",class:"footer-link"},{default:Mr(()=>[Oi(de(r.t.footer.quickLinks.about),1)]),_:1})]),k("li",null,[k("a",SF,de(r.t.footer.quickLinks.discord),1)]),k("li",null,[k("a",RF,de(r.t.footer.quickLinks.projects),1)]),k("li",null,[k("a",CF,de(r.t.footer.quickLinks.contact),1)])])]),k("div",PF,[k("h4",kF,de(r.t.footer.community.title),1),k("ul",OF,[k("li",null,[k("a",DF,de(r.t.footer.community.github),1)]),k("li",null,[k("a",NF,de(r.t.footer.community.contact),1)]),k("li",null,[k("a",VF,de(r.t.footer.community.contribute),1)])])]),k("div",xF,[k("h4",MF,de(r.t.footer.resources.title),1),k("ul",LF,[k("li",null,[k("a",FF,de(r.t.footer.resources.projects),1)]),k("li",null,[k("a",UF,de(r.t.footer.resources.documentation),1)]),k("li",null,[k("a",$F,de(r.t.footer.resources.bestPractices),1)])])])]),k("div",BF,[k("div",jF,[k("p",HF,"© "+de(r.currentYear)+" NgodingSkuyy. "+de(r.t.footer.bottom.madeWith),1),k("p",qF,de(r.t.footer.bottom.builtWith),1)])])])])}const KF=Dp(dF,[["render",zF],["__scopeId","data-v-6704560a"],["__file","C:/Users/ilham/PROJECT/NODEJS/ngodingskuyy/src/components/AppFooter.vue"]]),WF=Ra({__name:"App",setup(t,{expose:e}){e();const n=H2(),r=pt(()=>n.name==="home"||n.path==="/"),s=Sd(),{currentLocale:i,t:o}=wd(s),{setLocale:a,initLocale:u}=s,l=Vt(!1),h=Vt(!1),f=Vt(!1),p=Vt(!1),g=()=>{l.value=!l.value,localStorage.setItem("darkMode",l.value.toString()),document.documentElement.classList.toggle("dark",l.value)},v=()=>{const z=i.value==="en"?"id":"en";console.log("Switching from",i.value,"to",z),a(z),f.value=!1},P=()=>{h.value=!h.value},R=()=>{f.value=!f.value,p.value=!1},D=()=>{p.value=!p.value,f.value=!1},M=()=>{f.value=!1,p.value=!1};Bu(()=>{u();const z=localStorage.getItem("darkMode");z!==null?l.value=z==="true":l.value=window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",l.value),document.addEventListener("click",W=>{W.target.closest(".navbar")||M()})});const V={route:n,isHomePage:r,localeStore:s,currentLocale:i,t:o,setLocale:a,initLocale:u,isDarkMode:l,isMobileMenuOpen:h,isLanguageMenuOpen:f,isResourcesMenuOpen:p,toggleDarkMode:g,toggleLanguage:v,toggleMobileMenu:P,toggleLanguageMenu:R,toggleResourcesMenu:D,closeMenus:M,get RouterLink(){return cT},get RouterView(){return uT},AppFooter:KF};return Object.defineProperty(V,"__isScriptSetup",{enumerable:!1,value:!0}),V}}),GF="/images/icons/android-chrome-192x192.png",QF={id:"app"},YF={class:"wrapper"},JF={class:"container"},XF={class:"title"},ZF={class:"navbar-title"},eU={class:"content"},tU={class:"content-body"},nU={"aria-labelledby":"main-nav-aria-label",class:"navbar-menu menu"},rU=["aria-expanded"],sU={class:"button-text"},iU={class:"flyout-menu"},oU={class:"menu-content"},aU={class:"menu-items"},cU={class:"menu-link"},uU=["aria-expanded"],lU={class:"button-text"},hU={class:"flyout-menu"},fU={class:"menu-content"},dU={class:"language-items"},pU={class:"language-title"},mU={class:"menu-link"},gU={class:"navbar-appearance appearance"},_U=["title","aria-checked"],yU={class:"switch-check"},vU={class:"switch-icon"},EU={key:0,class:"sun-icon"},TU={key:1,class:"moon-icon"},wU=["aria-expanded"],IU={class:"hamburger-container"},bU={class:"mobile-nav"},AU={class:"mobile-controls"};function SU(t,e,n,r,s,i){return Tn(),wn("div",QF,[k("header",{class:Bn(["vp-nav",{home:r.isHomePage}])},[k("div",{class:Bn(["navbar",{"navbar-home":r.isHomePage}])},[k("div",YF,[k("div",JF,[k("div",XF,[k("div",ZF,[et(r.RouterLink,{to:"/",class:"title-link",onClick:r.closeMenus},{default:Mr(()=>e[8]||(e[8]=[k("img",{src:GF,alt:"NgodingSkuyy",class:"logo"},null,-1),k("span",{class:"title-text"},"NgodingSkuyy",-1)])),_:1,__:[8]})])]),k("div",eU,[k("div",tU,[k("nav",nU,[e[13]||(e[13]=k("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),et(r.RouterLink,{to:"/",class:"navbar-menu-link",onClick:r.closeMenus},{default:Mr(()=>[k("span",null,de(r.t.home),1)]),_:1}),et(r.RouterLink,{to:"/about",class:"navbar-menu-link",onClick:r.closeMenus},{default:Mr(()=>[k("span",null,de(r.t.about),1)]),_:1}),k("div",{class:"flyout navbar-menu-group",onClick:e[0]||(e[0]=So(()=>{},["stop"]))},[k("button",{type:"button",class:"flyout-button","aria-haspopup":"true","aria-expanded":r.isResourcesMenuOpen,onClick:r.toggleResourcesMenu},[k("span",sU,[e[10]||(e[10]=k("span",null,"Resources",-1)),k("span",{class:Bn(["chevron-down",{rotated:r.isResourcesMenuOpen}])},e[9]||(e[9]=[k("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor"},[k("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)])],8,rU),Kl(k("div",iU,[k("div",oU,[k("div",aU,[k("div",cU,[k("a",{href:"https://discord.gg/uhZWnUeeW8",target:"_blank",rel:"noreferrer",onClick:r.closeMenus},[k("span",null,de(r.t.discord),1)])]),k("div",{class:"menu-link"},[k("a",{href:"https://github.com/ngodingskuyy",target:"_blank",rel:"noreferrer",onClick:r.closeMenus},e[11]||(e[11]=[k("span",null,"GitHub Organization",-1)]))]),k("div",{class:"menu-link"},[k("a",{href:"https://github.com/ngodingskuyy/ngodingskuyy.github.io",target:"_blank",rel:"noreferrer",onClick:r.closeMenus},e[12]||(e[12]=[k("span",null,"Contribute",-1)]))])])])],512),[[Cc,r.isResourcesMenuOpen]])])]),k("div",{class:"flyout navbar-translations translations",onClick:e[1]||(e[1]=So(()=>{},["stop"]))},[k("button",{type:"button",class:"flyout-button","aria-haspopup":"true","aria-expanded":r.isLanguageMenuOpen,"aria-label":"Change language",onClick:r.toggleLanguageMenu},[k("span",lU,[e[15]||(e[15]=k("span",{class:"language-icon"},[k("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[k("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})])],-1)),k("span",{class:Bn(["chevron-down",{rotated:r.isLanguageMenuOpen}])},e[14]||(e[14]=[k("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor"},[k("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)])],8,uU),Kl(k("div",hU,[k("div",fU,[k("div",dU,[k("p",pU,de(r.currentLocale==="en"?"English":"Indonesian"),1),k("div",mU,[k("a",{href:"#",onClick:So(r.toggleLanguage,["prevent"])},[k("span",null,de(r.currentLocale==="en"?"Indonesian":"English"),1)])])])])],512),[[Cc,r.isLanguageMenuOpen]])]),k("div",gU,[k("button",{class:"appearance-switch",type:"button",role:"switch",title:`Switch to ${r.isDarkMode?"light":"dark"} theme`,"aria-checked":r.isDarkMode,onClick:r.toggleDarkMode},[k("span",yU,[k("span",vU,[r.isDarkMode?(Tn(),wn("span",TU,e[17]||(e[17]=[k("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[k("path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"})],-1)]))):(Tn(),wn("span",EU,e[16]||(e[16]=[k("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[k("path",{d:"M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 1l3.5 3.5-2.121 2.121L12 5.243 10.621 6.62 8.5 4.5 12 1zM1 12l3.5-3.5 2.121 2.121L5.243 12l1.378 1.379L4.5 15.5 1 12zm22 0l-3.5 3.5-2.121-2.121L18.757 12l-1.378-1.379L19.5 8.5 23 12zM12 23l-3.5-3.5 2.121-2.121L12 18.757l1.379-1.378L15.5 19.5 12 23z"})],-1)])))])])],8,_U)]),e[18]||(e[18]=YE('<div class="navbar-social-links social-links" data-v-7a7a37b1><a href="https://github.com/ngodingskuyy" aria-label="github" target="_blank" rel="noopener" class="social-link" data-v-7a7a37b1><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-v-7a7a37b1><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-7a7a37b1></path></svg></a><a href="https://discord.gg/uhZWnUeeW8" aria-label="discord" target="_blank" rel="noopener" class="social-link" data-v-7a7a37b1><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" data-v-7a7a37b1><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" data-v-7a7a37b1></path></svg></a></div>',1)),k("button",{type:"button",class:"navbar-hamburger hamburger","aria-label":"mobile navigation","aria-expanded":r.isMobileMenuOpen,onClick:r.toggleMobileMenu},[k("span",IU,[k("span",{class:Bn(["hamburger-line top",{active:r.isMobileMenuOpen}])},null,2),k("span",{class:Bn(["hamburger-line middle",{active:r.isMobileMenuOpen}])},null,2),k("span",{class:Bn(["hamburger-line bottom",{active:r.isMobileMenuOpen}])},null,2)])],8,wU)])])])]),e[19]||(e[19]=k("div",{class:"divider"},[k("div",{class:"divider-line"})],-1))],2),Kl(k("div",{class:"mobile-menu",onClick:e[7]||(e[7]=o=>r.isMobileMenuOpen=!1)},[k("div",{class:"mobile-menu-content",onClick:e[6]||(e[6]=So(()=>{},["stop"]))},[k("nav",bU,[et(r.RouterLink,{to:"/",class:"mobile-nav-link",onClick:e[2]||(e[2]=o=>r.isMobileMenuOpen=!1)},{default:Mr(()=>[Oi(de(r.t.home),1)]),_:1}),et(r.RouterLink,{to:"/about",class:"mobile-nav-link",onClick:e[3]||(e[3]=o=>r.isMobileMenuOpen=!1)},{default:Mr(()=>[Oi(de(r.t.about),1)]),_:1}),k("a",{href:"https://discord.gg/uhZWnUeeW8",target:"_blank",class:"mobile-nav-link",onClick:e[4]||(e[4]=o=>r.isMobileMenuOpen=!1)},de(r.t.discord),1),k("a",{href:"https://github.com/ngodingskuyy",target:"_blank",class:"mobile-nav-link",onClick:e[5]||(e[5]=o=>r.isMobileMenuOpen=!1)}," GitHub ")]),k("div",AU,[k("button",{onClick:r.toggleLanguage,class:"mobile-control-btn"},de(r.currentLocale==="en"?"Switch to Indonesian":"Switch to English"),1),k("button",{onClick:r.toggleDarkMode,class:"mobile-control-btn"},de(r.isDarkMode?"Light Mode":"Dark Mode"),1)])])],512),[[Cc,r.isMobileMenuOpen]])],2),k("main",null,[et(r.RouterView)]),et(r.AppFooter)])}const RU=Dp(WF,[["render",SU],["__scopeId","data-v-7a7a37b1"],["__file","C:/Users/ilham/PROJECT/NODEJS/ngodingskuyy/src/App.vue"]]),CU="modulepreload",PU=function(t){return"/"+t},Uv={},Bf=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let u=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=u(n.map(l=>{if(l=PU(l),l in Uv)return;Uv[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":CU,h||(p.as="script"),p.crossOrigin="",p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),h)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},kU=(t,e)=>{console.warn(`Firebase ${e} error (normal di localhost):`,t)};class hi{static async create(e,n){if(!hn)throw new Error("Firestore not initialized");try{return(await YI(Uf(hn,e),{...n,createdAt:new Date,updatedAt:new Date})).id}catch(r){throw kU(r,"create"),r}}static async read(e,n){if(!hn)throw new Error("Firestore not initialized");try{const r=Xo(hn,e,n),s=await zI(r);return s.exists()?{id:s.id,...s.data()}:null}catch(r){throw console.error("Error getting document:",r),r}}static async getAll(e,n=[]){if(!hn)throw new Error("Firestore not initialized");try{const r=UI(Uf(hn,e),...n);return(await WI(r)).docs.map(i=>({id:i.id,...i.data()}))}catch(r){throw console.error("Error getting documents:",r),r}}static async update(e,n,r){if(!hn)throw new Error("Firestore not initialized");try{const s=Xo(hn,e,n);return await GI(s,{...r,updatedAt:new Date}),!0}catch(s){throw console.error("Error updating document:",s),s}}static async delete(e,n){if(!hn)throw new Error("Firestore not initialized");try{const r=Xo(hn,e,n);return await QI(r),!0}catch(r){throw console.error("Error deleting document:",r),r}}static where=$I;static orderBy=BI;static limit=jI}const OU={async getProjects(){return hi.getAll("projects",[hi.orderBy("createdAt","desc")])},async getProject(t){return hi.read("projects",t)},async createProject(t){return hi.create("projects",t)},async updateProject(t,e){return hi.update("projects",t,e)},async deleteProject(t){return hi.delete("projects",t)}},DU=Ra({__name:"HomeView",setup(t,{expose:e}){e();const n=Sd(),{t:r}=wd(n),{trackPageView:s,trackJoinCommunity:i}=cb(),{trackPageLoad:o,trackComponentMount:a,trackAPICall:u,trackUserAction:l}=ab(),h=Vt([]),f=Vt(!1),p=Vt([{name:"Web Development Starter",description:"A complete starter template for modern web applications",tech:["Vue.js","TypeScript","Vite"],link:"https://github.com/ngodingskuyy"},{name:"API Documentation",description:"Comprehensive API documentation and examples",tech:["Node.js","Express","MongoDB"],link:"https://github.com/ngodingskuyy"},{name:"UI Component Library",description:"Reusable UI components for faster development",tech:["Vue.js","CSS3","JavaScript"],link:"https://github.com/ngodingskuyy"}]),g=async()=>{const M=u("projects");try{f.value=!0;const V=await OU.getProjects();h.value=V.map(z=>({id:z.id,name:z.name||"Untitled Project",description:z.description||"No description available",tech:z.technologies||z.tech||[],link:z.githubUrl||z.link||"#",githubUrl:z.githubUrl,technologies:z.technologies,createdAt:z.createdAt,updatedAt:z.updatedAt})),M.success()}catch{console.log("Firebase projects not available, using static data"),M.error("firebase_unavailable")}finally{f.value=!1}},v=()=>{l("click","join_community_button"),i("hero_cta"),window.open("https://discord.gg/uhZWnUeeW8","_blank")},P=M=>{l("click",`project_${M.replace(/\s+/g,"_").toLowerCase()}`)},R=a("HomeView");Bu(()=>{o("home"),s("Home"),g(),R.finish()});const D={localeStore:n,t:r,trackPageView:s,trackJoinCommunity:i,trackPageLoad:o,trackComponentMount:a,trackAPICall:u,trackUserAction:l,firebaseProjects:h,loadingProjects:f,projects:p,loadFirebaseProjects:g,handleJoinCommunity:v,handleProjectClick:P,componentMountTracker:R};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}}),NU="/images/icons/android-chrome-512x512.png",VU={class:"main-content"},xU={class:"hero"},MU={class:"hero-container"},LU={class:"hero-content"},FU={class:"hero-title"},UU={class:"hero-subtitle"},$U={class:"hero-description"},BU={class:"hero-buttons"},jU={href:"https://github.com/ngodingskuyy",target:"_blank",class:"btn btn-secondary"},HU={class:"features"},qU={class:"container"},zU={class:"section-title"},KU={class:"features-grid"},WU={class:"feature-card"},GU={class:"feature-title"},QU={class:"feature-description"},YU={class:"feature-card"},JU={class:"feature-title"},XU={class:"feature-description"},ZU={class:"feature-card"},e9={class:"feature-title"},t9={class:"feature-description"},n9={class:"feature-card"},r9={class:"feature-title"},s9={class:"feature-description"},i9={class:"projects"},o9={class:"container"},a9={class:"section-title"},c9={class:"projects-grid"},u9={class:"project-content"},l9={class:"project-title"},h9={class:"project-description"},f9={class:"project-tech"},d9={class:"project-footer"},p9=["href","onClick"],m9={class:"cta"},g9={class:"container"},_9={class:"cta-content"},y9={class:"cta-title"},v9={class:"cta-description"},E9={class:"cta-buttons"},T9={href:"https://discord.gg/uhZWnUeeW8",target:"_blank",class:"btn btn-primary discord-btn"};function w9(t,e,n,r,s,i){return Tn(),wn("main",VU,[k("section",xU,[k("div",MU,[k("div",LU,[e[0]||(e[0]=k("div",{class:"hero-logo"},[k("img",{src:NU,alt:"NgodingSkuyy Logo",class:"logo-image"})],-1)),k("h1",FU,de(r.t.hero.title),1),k("p",UU,de(r.t.hero.subtitle),1),k("p",$U,de(r.t.hero.description),1),k("div",BU,[k("button",{onClick:r.handleJoinCommunity,class:"btn btn-primary"},de(r.t.hero.ctaJoin),1),k("a",jU,de(r.t.hero.ctaExplore),1)])]),e[1]||(e[1]=YE('<div class="hero-visual" data-v-b4e148ca><div class="code-window" data-v-b4e148ca><div class="window-header" data-v-b4e148ca><div class="window-controls" data-v-b4e148ca><span class="control red" data-v-b4e148ca></span><span class="control yellow" data-v-b4e148ca></span><span class="control green" data-v-b4e148ca></span></div><span class="window-title" data-v-b4e148ca>ngoding-skuyy.js</span></div><div class="code-content" data-v-b4e148ca><div class="code-line" data-v-b4e148ca><span class="keyword" data-v-b4e148ca>const </span><span class="variable" data-v-b4e148ca>community</span> = { </div><div class="code-line indent" data-v-b4e148ca><span class="property" data-v-b4e148ca>name</span>: <span class="string" data-v-b4e148ca>&#39;NgodingSkuyy&#39;</span>, </div><div class="code-line indent" data-v-b4e148ca><span class="property" data-v-b4e148ca>mission</span>: <span class="string" data-v-b4e148ca>&#39;Building Future&#39;</span>, </div><div class="code-line indent" data-v-b4e148ca><span class="property" data-v-b4e148ca>values</span>: [<span class="string" data-v-b4e148ca>&#39;Learn&#39;</span>, <span class="string" data-v-b4e148ca>&#39;Share&#39;</span>, <span class="string" data-v-b4e148ca>&#39;Grow&#39;</span>] </div><div class="code-line" data-v-b4e148ca>};</div></div></div></div>',1))])]),k("section",HU,[k("div",qU,[k("h2",zU,de(r.t.features.title),1),k("div",KU,[k("div",WU,[e[2]||(e[2]=k("div",{class:"feature-icon"},"🚀",-1)),k("h3",GU,de(r.t.features.collaboration.title),1),k("p",QU,de(r.t.features.collaboration.description),1)]),k("div",YU,[e[3]||(e[3]=k("div",{class:"feature-icon"},"👥",-1)),k("h3",JU,de(r.t.features.community.title),1),k("p",XU,de(r.t.features.community.description),1)]),k("div",ZU,[e[4]||(e[4]=k("div",{class:"feature-icon"},"📚",-1)),k("h3",e9,de(r.t.features.learning.title),1),k("p",t9,de(r.t.features.learning.description),1)]),k("div",n9,[e[5]||(e[5]=k("div",{class:"feature-icon"},"💡",-1)),k("h3",r9,de(r.t.features.opensource.title),1),k("p",s9,de(r.t.features.opensource.description),1)])])])]),k("section",i9,[k("div",o9,[k("h2",a9,de(r.t.projects.title),1),k("div",c9,[(Tn(!0),wn(tn,null,Oh(r.projects,o=>(Tn(),wn("div",{key:o.name,class:"project-card"},[k("div",u9,[k("h3",l9,de(o.name),1),k("p",h9,de(o.description),1),k("div",f9,[(Tn(!0),wn(tn,null,Oh(o.tech,a=>(Tn(),wn("span",{key:a,class:"tech-tag"},de(a),1))),128))])]),k("div",d9,[k("a",{href:o.link,target:"_blank",class:"project-link",onClick:a=>r.handleProjectClick(o.name)},de(r.t.projects.viewProject)+" → ",9,p9)])]))),128))])])]),k("section",m9,[k("div",g9,[k("div",_9,[k("h2",y9,de(r.t.cta.title),1),k("p",v9,de(r.t.cta.description),1),k("div",E9,[k("a",T9,[e[6]||(e[6]=k("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[k("path",{d:"M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})],-1)),Oi(" "+de(r.t.cta.button),1)]),e[7]||(e[7]=k("a",{href:"https://github.com/ngodingskuyy",target:"_blank",class:"btn btn-secondary"}," Join GitHub Organization ",-1)),e[8]||(e[8]=k("a",{href:"mailto:contact@ngodingskuyy.com",class:"btn btn-outline"}," Get in Touch ",-1))])])])])])}const I9=Dp(DU,[["render",w9],["__scopeId","data-v-b4e148ca"],["__file","C:/Users/ilham/PROJECT/NODEJS/ngodingskuyy/src/views/HomeView.vue"]]),b9=B2({history:Zk("/"),routes:[{path:"/",name:"home",component:I9},{path:"/about",name:"about",component:()=>Bf(()=>import("./AboutView-DvLJfSfX.js"),__vite__mapDeps([0,1]))}]}),A9=G0("auth",()=>{const t=Vt(null),e=Vt(!0),n=Vt(null),r=pt(()=>!!t.value),s=pt(()=>t.value?.displayName||t.value?.email||"User");return{user:t,loading:e,error:n,isAuthenticated:r,userDisplayName:s,login:async(h,f)=>{if(!$n)throw new Error("Firebase Auth not initialized");try{n.value=null,e.value=!0;const p=await kx($n,h,f);return t.value=p.user,p}catch(p){const g=p;throw n.value=g.message,p}finally{e.value=!1}},register:async(h,f,p)=>{if(!$n)throw new Error("Firebase Auth not initialized");try{n.value=null,e.value=!0;const g=await Px($n,h,f);return p&&g.user&&await Dx(g.user,{displayName:p}),t.value=g.user,g}catch(g){const v=g;throw n.value=v.message,g}finally{e.value=!1}},logout:async()=>{if(!$n)throw new Error("Firebase Auth not initialized");try{n.value=null,await Mx($n),t.value=null}catch(h){const f=h;throw n.value=f.message,h}},clearError:()=>{n.value=null},initAuth:()=>{if(!$n){console.warn("Firebase Auth not initialized, skipping auth state listener"),e.value=!1;return}xx($n,h=>{t.value=h,e.value=!1})}}}),S9=()=>{{const t=console.warn,e=console.error;console.warn=(...n)=>{const r=n.join(" ");r.includes("WebChannelConnection")||r.includes("transport errored")||r.includes("stream 0x")||r.includes("Failed to get document because the client is offline")||r.includes("Could not reach Cloud Firestore backend")||t.apply(console,n)},console.error=(...n)=>{const r=n.join(" ");r.includes("Failed to load resource")&&r.includes("400")||r.includes("WebChannelConnection")||r.includes("Firestore (")&&r.includes("transport errored")||e.apply(console,n)},console.log("🔧 Firebase development settings loaded - common localhost errors suppressed")}},R9=async()=>{try{const{db:t}=await Bf(async()=>{const{db:r}=await Promise.resolve().then(()=>fF);return{db:r}},void 0),{doc:e,getDoc:n}=await Bf(async()=>{const{doc:r,getDoc:s}=await Promise.resolve().then(()=>r6);return{doc:r,getDoc:s}},void 0);return t?(await n(e(t,"test","test")),console.log("✅ Firebase connection: OK"),!0):(console.log("⚠️ Firebase not configured"),!1)}catch{return console.log("⚠️  Firebase connection: Limited (normal di localhost)"),!1}},Np=FR(RU),C9=hk();Np.use(C9);Np.use(b9);S9(),setTimeout(R9,1e3);const P9=A9();P9.initAuth();Np.mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})});export{Dp as _,ab as a,cb as b,wn as c,Ra as d,k as e,Oi as f,Tn as g,Bu as o,wd as s,de as t,Sd as u};
