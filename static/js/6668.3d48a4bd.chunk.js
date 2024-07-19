/*! For license information please see 6668.3d48a4bd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[6668],{36668:function(t,e,n){n.d(e,{secp256k1:function(){return Nt}});var r={};function i(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function o(t,...e){if(!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}n.r(r),n.d(r,{dQ:function(){return $},ci:function(){return O},bytesToNumberBE:function(){return U},ty:function(){return L},eV:function(){return k},n$:function(){return V},ql:function(){return H},hexToBytes:function(){return q},tL:function(){return T},S5:function(){return N},iY:function(){return C},FF:function(){return Z}});const s={number:i,bool:function(t){if("boolean"!=typeof t)throw new Error(`Expected boolean, not ${t}`)},bytes:o,hash:function(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");i(t.outputLen),i(t.blockLen)},exists:function(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")},output:function(t,e){o(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}};var f=s;const a="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,u=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),c=(t,e)=>t<<32-e|t>>>e;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function l(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw new TypeError("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}class d{clone(){return this._cloneInto()}}function h(t){const e=e=>t().update(l(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function p(t=32){if(a&&"function"==typeof a.getRandomValues)return a.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}class w extends d{update(t){f.exists(this);const{view:e,buffer:n,blockLen:r}=this,i=(t=l(t)).length;for(let o=0;o<i;){const s=Math.min(r-this.pos,i-o);if(s!==r)n.set(t.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(e,0),this.pos=0);else{const e=u(t);for(;r<=i-o;o+=r)this.process(e,o)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){f.exists(this),f.output(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:i}=this;let{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(n,0),o=0);for(let f=o;f<r;f++)e[f]=0;(function(t,e,n,r){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,n,r);const i=BigInt(32),o=BigInt(4294967295),s=Number(n>>i&o),f=Number(n&o),a=r?4:0,u=r?0:4;t.setUint32(e+a,s,r),t.setUint32(e+u,f,r)})(n,r-8,BigInt(8*this.length),i),this.process(n,0);const s=u(t),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=a/4,l=this.get();if(c>l.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<c;f++)s.setUint32(4*f,l[f],i)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:i,destroyed:o,pos:s}=this;return t.length=r,t.pos=s,t.finished=i,t.destroyed=o,r%e&&t.buffer.set(n),t}constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=u(this.buffer)}}const g=(t,e,n)=>t&e^t&n^e&n,y=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),m=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),b=new Uint32Array(64);let E=class extends w{get(){const{A:t,B:e,C:n,D:r,E:i,F:o,G:s,H:f}=this;return[t,e,n,r,i,o,s,f]}set(t,e,n,r,i,o,s,f){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|r,this.E=0|i,this.F=0|o,this.G=0|s,this.H=0|f}process(t,e){for(let c=0;c<16;c++,e+=4)b[c]=t.getUint32(e,!1);for(let d=16;d<64;d++){const t=b[d-15],e=b[d-2],n=c(t,7)^c(t,18)^t>>>3,r=c(e,17)^c(e,19)^e>>>10;b[d]=r+b[d-7]+n+b[d-16]|0}let{A:n,B:r,C:i,D:o,E:s,F:f,G:a,H:u}=this;for(let d=0;d<64;d++){const t=u+(c(s,6)^c(s,11)^c(s,25))+((l=s)&f^~l&a)+y[d]+b[d]|0,e=(c(n,2)^c(n,13)^c(n,22))+g(n,r,i)|0;u=a,a=f,f=s,s=o+t|0,o=i,i=r,r=n,n=t+e|0}var l;n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,o=o+this.D|0,s=s+this.E|0,f=f+this.F|0,a=a+this.G|0,u=u+this.H|0,this.set(n,r,i,o,s,f,a,u)}roundClean(){b.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}constructor(){super(64,32,8,!1),this.A=0|m[0],this.B=0|m[1],this.C=0|m[2],this.D=0|m[3],this.E=0|m[4],this.F=0|m[5],this.G=0|m[6],this.H=0|m[7]}},B=class extends E{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}};const x=h((()=>new E)),v=(h((()=>new B)),BigInt(0),BigInt(1)),S=BigInt(2),A=t=>t instanceof Uint8Array,I=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));function O(t){if(!A(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=I[t[n]];return e}function R(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);return BigInt(""===t?"0":`0x${t}`)}function q(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);if(t.length%2)throw new Error("hex string is invalid: unpadded "+t.length);const e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++){const r=2*n,i=t.slice(r,r+2),o=Number.parseInt(i,16);if(Number.isNaN(o)||o<0)throw new Error("invalid byte sequence");e[n]=o}return e}function U(t){return R(O(t))}function L(t){if(!A(t))throw new Error("Uint8Array expected");return R(O(Uint8Array.from(t).reverse()))}const T=(t,e)=>q(t.toString(16).padStart(2*e,"0")),N=(t,e)=>T(t,e).reverse();function H(t,e,n){let r;if("string"==typeof e)try{r=q(e)}catch(o){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${o}`)}else{if(!A(e))throw new Error(`${t} must be hex string or Uint8Array`);r=Uint8Array.from(e)}const i=r.length;if("number"==typeof n&&i!==n)throw new Error(`${t} expected ${n} bytes, got ${i}`);return r}function k(...t){const e=new Uint8Array(t.reduce(((t,e)=>t+e.length),0));let n=0;return t.forEach((t=>{if(!A(t))throw new Error("Uint8Array expected");e.set(t,n),n+=t.length})),e}function C(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}const $=t=>(S<<BigInt(t-1))-v,D=t=>new Uint8Array(t),F=t=>Uint8Array.from(t);function V(t,e,n){if("number"!=typeof t||t<2)throw new Error("hashLen must be a number");if("number"!=typeof e||e<2)throw new Error("qByteLen must be a number");if("function"!=typeof n)throw new Error("hmacFn must be a function");let r=D(t),i=D(t),o=0;const s=()=>{r.fill(1),i.fill(0),o=0},f=(...t)=>n(i,r,...t),a=(t=D())=>{i=f(F([0]),t),r=f(),0!==t.length&&(i=f(F([1]),t),r=f())},u=()=>{if(o++>=1e3)throw new Error("drbg: tried 1000 values");let t=0;const n=[];for(;t<e;){r=f();const e=r.slice();n.push(e),t+=r.length}return k(...n)};return(t,e)=>{let n;for(s(),a(t);!(n=e(u()));)a();return s(),n}}const P={bigint:t=>"bigint"==typeof t,function:t=>"function"==typeof t,boolean:t=>"boolean"==typeof t,string:t=>"string"==typeof t,isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>"function"==typeof t&&Number.isSafeInteger(t.outputLen)};function Z(t,e,n={}){const r=(e,n,r)=>{const i=P[n];if("function"!=typeof i)throw new Error(`Invalid validator "${n}", expected function`);const o=t[e];if(!(r&&void 0===o||i(o,t)))throw new Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${n}`)};for(const[i,o]of Object.entries(e))r(i,o,!1);for(const[i,o]of Object.entries(n))r(i,o,!0);return t}const _=BigInt(0),z=BigInt(1),j=BigInt(2),K=BigInt(3),Y=BigInt(4),W=BigInt(5),G=BigInt(8);BigInt(9),BigInt(16);function M(t,e){const n=t%e;return n>=_?n:e+n}function X(t,e,n){if(n<=_||e<_)throw new Error("Expected power/modulo > 0");if(n===z)return _;let r=z;for(;e>_;)e&z&&(r=r*t%n),t=t*t%n,e>>=z;return r}function Q(t,e,n){let r=t;for(;e-- >_;)r*=r,r%=n;return r}function J(t,e){if(t===_||e<=_)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=M(t,e),r=e,i=_,o=z,s=z,f=_;for(;n!==_;){const t=r/n,e=r%n,a=i-s*t,u=o-f*t;r=n,n=e,i=s,o=f,s=a,f=u}if(r!==z)throw new Error("invert: does not exist");return M(i,e)}function tt(t){if(t%Y===K){const e=(t+z)/Y;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}if(t%G===W){const e=(t-W)/G;return function(t,n){const r=t.mul(n,j),i=t.pow(r,e),o=t.mul(n,i),s=t.mul(t.mul(o,j),i),f=t.mul(o,t.sub(s,t.ONE));if(!t.eql(t.sqr(f),n))throw new Error("Cannot find square root");return f}}return function(t){const e=(t-z)/j;let n,r,i;for(n=t-z,r=0;n%j===_;n/=j,r++);for(i=j;i<t&&X(i,e,t)!==t-z;i++);if(1===r){const e=(t+z)/Y;return function(t,n){const r=t.pow(n,e);if(!t.eql(t.sqr(r),n))throw new Error("Cannot find square root");return r}}const o=(n+z)/j;return function(t,s){if(t.pow(s,e)===t.neg(t.ONE))throw new Error("Cannot find square root");let f=r,a=t.pow(t.mul(t.ONE,i),n),u=t.pow(s,o),c=t.pow(s,n);for(;!t.eql(c,t.ONE);){if(t.eql(c,t.ZERO))return t.ZERO;let e=1;for(let r=t.sqr(c);e<f&&!t.eql(r,t.ONE);e++)r=t.sqr(r);const n=t.pow(a,z<<BigInt(f-e-1));a=t.sqr(n),u=t.mul(u,n),c=t.mul(c,a),f=e}return u}}(t)}const et=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function nt(t){return Z(t,et.reduce(((t,e)=>(t[e]="function",t)),{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"}))}function rt(t,e){const n=void 0!==e?e:t.toString(2).length;return{nBitLength:n,nByteLength:Math.ceil(n/8)}}const it=BigInt(0),ot=BigInt(1);function st(t){return nt(t.Fp),Z(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...rt(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}const{bytesToNumberBE:ft,hexToBytes:at}=r,ut={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(t){const{Err:e}=ut;if(t.length<2||2!==t[0])throw new e("Invalid signature integer tag");const n=t[1],r=t.subarray(2,n+2);if(!n||r.length!==n)throw new e("Invalid signature integer: wrong length");if(128&r[0])throw new e("Invalid signature integer: negative");if(0===r[0]&&!(128&r[1]))throw new e("Invalid signature integer: unnecessary leading zero");return{d:ft(r),l:t.subarray(n+2)}},toSig(t){const{Err:e}=ut,n="string"==typeof t?at(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let r=n.length;if(r<2||48!=n[0])throw new e("Invalid signature tag");if(n[1]!==r-2)throw new e("Invalid signature: incorrect length");const{d:i,l:o}=ut._parseInt(n.subarray(2)),{d:s,l:f}=ut._parseInt(o);if(f.length)throw new e("Invalid signature: left bytes after parsing");return{r:i,s:s}},hexFromSig(t){const e=t=>8&Number.parseInt(t[0],16)?"00"+t:t,n=t=>{const e=t.toString(16);return 1&e.length?`0${e}`:e},r=e(n(t.s)),i=e(n(t.r)),o=r.length/2,s=i.length/2,f=n(o),a=n(s);return`30${n(s+o+4)}02${a}${i}02${f}${r}`}},ct=BigInt(0),lt=BigInt(1),dt=BigInt(2),ht=BigInt(3),pt=BigInt(4);function wt(t){const e=function(t){const e=st(t);Z(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:r,a:i}=e;if(n){if(!r.eql(i,r.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=typeof n||"bigint"!=typeof n.beta||"function"!=typeof n.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}(t),{Fp:n}=e,r=e.toBytes||((t,e,r)=>{const i=e.toAffine();return k(Uint8Array.from([4]),n.toBytes(i.x),n.toBytes(i.y))}),i=e.fromBytes||(t=>{const e=t.subarray(1);return{x:n.fromBytes(e.subarray(0,n.BYTES)),y:n.fromBytes(e.subarray(n.BYTES,2*n.BYTES))}});function o(t){const{a:r,b:i}=e,o=n.sqr(t),s=n.mul(o,t);return n.add(n.add(s,n.mul(t,r)),i)}if(!n.eql(n.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function s(t){return"bigint"==typeof t&&ct<t&&t<e.n}function f(t){if(!s(t))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function a(t){const{allowedPrivateKeyLengths:n,nByteLength:r,wrapPrivateKey:i,n:o}=e;if(n&&"bigint"!=typeof t){if(t instanceof Uint8Array&&(t=O(t)),"string"!=typeof t||!n.includes(t.length))throw new Error("Invalid key");t=t.padStart(2*r,"0")}let s;try{s="bigint"==typeof t?t:U(H("private key",t,r))}catch(a){throw new Error(`private key must be ${r} bytes, hex or bigint, not ${typeof t}`)}return i&&(s=M(s,o)),f(s),s}const u=new Map;function c(t){if(!(t instanceof l))throw new Error("ProjectivePoint expected")}let l=class t{static fromAffine(e){const{x:r,y:i}=e||{};if(!e||!n.isValid(r)||!n.isValid(i))throw new Error("invalid affine point");if(e instanceof t)throw new Error("projective point not allowed");const o=t=>n.eql(t,n.ZERO);return o(r)&&o(i)?t.ZERO:new t(r,i,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(e){const r=n.invertBatch(e.map((t=>t.pz)));return e.map(((t,e)=>t.toAffine(r[e]))).map(t.fromAffine)}static fromHex(e){const n=t.fromAffine(i(H("pointHex",e)));return n.assertValidity(),n}static fromPrivateKey(e){return t.BASE.multiply(a(e))}_setWindowSize(t){this._WINDOW_SIZE=t,u.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:t,y:r}=this.toAffine();if(!n.isValid(t)||!n.isValid(r))throw new Error("bad point: x or y not FE");const i=n.sqr(r),s=o(t);if(!n.eql(i,s))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:t}=this.toAffine();if(n.isOdd)return!n.isOdd(t);throw new Error("Field doesn't support isOdd")}equals(t){c(t);const{px:e,py:r,pz:i}=this,{px:o,py:s,pz:f}=t,a=n.eql(n.mul(e,f),n.mul(o,i)),u=n.eql(n.mul(r,f),n.mul(s,i));return a&&u}negate(){return new t(this.px,n.neg(this.py),this.pz)}double(){const{a:r,b:i}=e,o=n.mul(i,ht),{px:s,py:f,pz:a}=this;let u=n.ZERO,c=n.ZERO,l=n.ZERO,d=n.mul(s,s),h=n.mul(f,f),p=n.mul(a,a),w=n.mul(s,f);return w=n.add(w,w),l=n.mul(s,a),l=n.add(l,l),u=n.mul(r,l),c=n.mul(o,p),c=n.add(u,c),u=n.sub(h,c),c=n.add(h,c),c=n.mul(u,c),u=n.mul(w,u),l=n.mul(o,l),p=n.mul(r,p),w=n.sub(d,p),w=n.mul(r,w),w=n.add(w,l),l=n.add(d,d),d=n.add(l,d),d=n.add(d,p),d=n.mul(d,w),c=n.add(c,d),p=n.mul(f,a),p=n.add(p,p),d=n.mul(p,w),u=n.sub(u,d),l=n.mul(p,h),l=n.add(l,l),l=n.add(l,l),new t(u,c,l)}add(r){c(r);const{px:i,py:o,pz:s}=this,{px:f,py:a,pz:u}=r;let l=n.ZERO,d=n.ZERO,h=n.ZERO;const p=e.a,w=n.mul(e.b,ht);let g=n.mul(i,f),y=n.mul(o,a),m=n.mul(s,u),b=n.add(i,o),E=n.add(f,a);b=n.mul(b,E),E=n.add(g,y),b=n.sub(b,E),E=n.add(i,s);let B=n.add(f,u);return E=n.mul(E,B),B=n.add(g,m),E=n.sub(E,B),B=n.add(o,s),l=n.add(a,u),B=n.mul(B,l),l=n.add(y,m),B=n.sub(B,l),h=n.mul(p,E),l=n.mul(w,m),h=n.add(l,h),l=n.sub(y,h),h=n.add(y,h),d=n.mul(l,h),y=n.add(g,g),y=n.add(y,g),m=n.mul(p,m),E=n.mul(w,E),y=n.add(y,m),m=n.sub(g,m),m=n.mul(p,m),E=n.add(E,m),g=n.mul(y,E),d=n.add(d,g),g=n.mul(B,E),l=n.mul(b,l),l=n.sub(l,g),g=n.mul(b,y),h=n.mul(B,h),h=n.add(h,g),new t(l,d,h)}subtract(t){return this.add(t.negate())}is0(){return this.equals(t.ZERO)}wNAF(e){return h.wNAFCached(this,u,e,(e=>{const r=n.invertBatch(e.map((t=>t.pz)));return e.map(((t,e)=>t.toAffine(r[e]))).map(t.fromAffine)}))}multiplyUnsafe(r){const i=t.ZERO;if(r===ct)return i;if(f(r),r===lt)return this;const{endo:o}=e;if(!o)return h.unsafeLadder(this,r);let{k1neg:s,k1:a,k2neg:u,k2:c}=o.splitScalar(r),l=i,d=i,p=this;for(;a>ct||c>ct;)a&lt&&(l=l.add(p)),c&lt&&(d=d.add(p)),p=p.double(),a>>=lt,c>>=lt;return s&&(l=l.negate()),u&&(d=d.negate()),d=new t(n.mul(d.px,o.beta),d.py,d.pz),l.add(d)}multiply(r){f(r);let i,o,s=r;const{endo:a}=e;if(a){const{k1neg:e,k1:r,k2neg:f,k2:u}=a.splitScalar(s);let{p:c,f:l}=this.wNAF(r),{p:d,f:p}=this.wNAF(u);c=h.constTimeNegate(e,c),d=h.constTimeNegate(f,d),d=new t(n.mul(d.px,a.beta),d.py,d.pz),i=c.add(d),o=l.add(p)}else{const{p:t,f:e}=this.wNAF(s);i=t,o=e}return t.normalizeZ([i,o])[0]}multiplyAndAddUnsafe(e,n,r){const i=t.BASE,o=(t,e)=>e!==ct&&e!==lt&&t.equals(i)?t.multiply(e):t.multiplyUnsafe(e),s=o(this,n).add(o(e,r));return s.is0()?void 0:s}toAffine(t){const{px:e,py:r,pz:i}=this,o=this.is0();null==t&&(t=o?n.ONE:n.inv(i));const s=n.mul(e,t),f=n.mul(r,t),a=n.mul(i,t);if(o)return{x:n.ZERO,y:n.ZERO};if(!n.eql(a,n.ONE))throw new Error("invZ was invalid");return{x:s,y:f}}isTorsionFree(){const{h:n,isTorsionFree:r}=e;if(n===lt)return!0;if(r)return r(t,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:n,clearCofactor:r}=e;return n===lt?this:r?r(t,this):this.multiplyUnsafe(e.h)}toRawBytes(e=!0){return this.assertValidity(),r(t,this,e)}toHex(t=!0){return O(this.toRawBytes(t))}constructor(t,e,r){if(this.px=t,this.py=e,this.pz=r,null==t||!n.isValid(t))throw new Error("x required");if(null==e||!n.isValid(e))throw new Error("y required");if(null==r||!n.isValid(r))throw new Error("z required")}};l.BASE=new l(e.Gx,e.Gy,n.ONE),l.ZERO=new l(n.ZERO,n.ONE,n.ZERO);const d=e.nBitLength,h=function(t,e){const n=(t,e)=>{const n=e.negate();return t?n:e},r=t=>({windows:Math.ceil(e/t)+1,windowSize:2**(t-1)});return{constTimeNegate:n,unsafeLadder(e,n){let r=t.ZERO,i=e;for(;n>it;)n&ot&&(r=r.add(i)),i=i.double(),n>>=ot;return r},precomputeWindow(t,e){const{windows:n,windowSize:i}=r(e),o=[];let s=t,f=s;for(let r=0;r<n;r++){f=s,o.push(f);for(let t=1;t<i;t++)f=f.add(s),o.push(f);s=f.double()}return o},wNAF(e,i,o){const{windows:s,windowSize:f}=r(e);let a=t.ZERO,u=t.BASE;const c=BigInt(2**e-1),l=2**e,d=BigInt(e);for(let t=0;t<s;t++){const e=t*f;let r=Number(o&c);o>>=d,r>f&&(r-=l,o+=ot);const s=e,h=e+Math.abs(r)-1,p=t%2!=0,w=r<0;0===r?u=u.add(n(p,i[s])):a=a.add(n(w,i[h]))}return{p:a,f:u}},wNAFCached(t,e,n,r){const i=t._WINDOW_SIZE||1;let o=e.get(t);return o||(o=this.precomputeWindow(t,i),1!==i&&e.set(t,r(o))),this.wNAF(i,o,n)}}}(l,e.endo?Math.ceil(d/2):d);return{CURVE:e,ProjectivePoint:l,normPrivateKeyToScalar:a,weierstrassEquation:o,isWithinCurveOrder:s}}function gt(t){const e=function(t){const e=st(t);return Z(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}(t),{Fp:n,n:r}=e,i=n.BYTES+1,o=2*n.BYTES+1;function s(t){return M(t,r)}function f(t){return J(t,r)}const{ProjectivePoint:a,normPrivateKeyToScalar:u,weierstrassEquation:c,isWithinCurveOrder:l}=wt({...e,toBytes(t,e,r){const i=e.toAffine(),o=n.toBytes(i.x),s=k;return r?s(Uint8Array.from([e.hasEvenY()?2:3]),o):s(Uint8Array.from([4]),o,n.toBytes(i.y))},fromBytes(t){const e=t.length,r=t[0],s=t.subarray(1);if(e!==i||2!==r&&3!==r){if(e===o&&4===r)return{x:n.fromBytes(s.subarray(0,n.BYTES)),y:n.fromBytes(s.subarray(n.BYTES,2*n.BYTES))};throw new Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)}{const t=U(s);if(!(ct<(f=t)&&f<n.ORDER))throw new Error("Point is not on curve");const e=c(t);let i=n.sqrt(e);return 1==(1&r)!==((i&lt)===lt)&&(i=n.neg(i)),{x:t,y:i}}var f}}),d=t=>O(T(t,e.nByteLength));function h(t){return t>r>>lt}const p=(t,e,n)=>U(t.slice(e,n));let w=class t{static fromCompact(n){const r=e.nByteLength;return n=H("compactSignature",n,2*r),new t(p(n,0,r),p(n,r,2*r))}static fromDER(e){const{r:n,s:r}=ut.toSig(H("DER",e));return new t(n,r)}assertValidity(){if(!l(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!l(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(e){return new t(this.r,this.s,e)}recoverPublicKey(t){const{r:r,s:i,recovery:o}=this,u=b(H("msgHash",t));if(null==o||![0,1,2,3].includes(o))throw new Error("recovery id invalid");const c=2===o||3===o?r+e.n:r;if(c>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const l=0==(1&o)?"02":"03",h=a.fromHex(l+d(c)),p=f(c),w=s(-u*p),g=s(i*p),y=a.BASE.multiplyAndAddUnsafe(h,w,g);if(!y)throw new Error("point at infinify");return y.assertValidity(),y}hasHighS(){return h(this.s)}normalizeS(){return this.hasHighS()?new t(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return q(this.toDERHex())}toDERHex(){return ut.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return q(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}constructor(t,e,n){this.r=t,this.s=e,this.recovery=n,this.assertValidity()}};const g={isValidPrivateKey(t){try{return u(t),!0}catch(e){return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const t=function(t,e,n=!1){const r=(t=H("privateHash",t)).length,i=rt(e).nByteLength+8;if(i<24||r<i||r>1024)throw new Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${r}`);return M(n?L(t):U(t),e-z)+z}(e.randomBytes(n.BYTES+8),r);return T(t,e.nByteLength)},precompute:(t=8,e=a.BASE)=>(e._setWindowSize(t),e.multiply(BigInt(3)),e)};function y(t){const e=t instanceof Uint8Array,n="string"==typeof t,r=(e||n)&&t.length;return e?r===i||r===o:n?r===2*i||r===2*o:t instanceof a}const m=e.bits2int||function(t){const n=U(t),r=8*t.length-e.nBitLength;return r>0?n>>BigInt(r):n},b=e.bits2int_modN||function(t){return s(m(t))},E=$(e.nBitLength);function B(t){if("bigint"!=typeof t)throw new Error("bigint expected");if(!(ct<=t&&t<E))throw new Error(`bigint expected < 2^${e.nBitLength}`);return T(t,e.nByteLength)}const x={lowS:e.lowS,prehash:!1},v={lowS:e.lowS,prehash:!1};return a.BASE._setWindowSize(8),{CURVE:e,getPublicKey:function(t,e=!0){return a.fromPrivateKey(t).toRawBytes(e)},getSharedSecret:function(t,e,n=!0){if(y(t))throw new Error("first arg must be private key");if(!y(e))throw new Error("second arg must be public key");return a.fromHex(e).multiply(u(t)).toRawBytes(n)},sign:function(t,r,i=x){const{seed:o,k2sig:c}=function(t,r,i=x){if(["recovered","canonical"].some((t=>t in i)))throw new Error("sign() legacy options not supported");const{hash:o,randomBytes:c}=e;let{lowS:d,prehash:p,extraEntropy:g}=i;null==d&&(d=!0),t=H("msgHash",t),p&&(t=H("prehashed msgHash",o(t)));const y=b(t),E=u(r),v=[B(E),B(y)];if(null!=g){const t=!0===g?c(n.BYTES):g;v.push(H("extraEntropy",t,n.BYTES))}const S=k(...v),A=y;return{seed:S,k2sig:function(t){const e=m(t);if(!l(e))return;const n=f(e),r=a.BASE.multiply(e).toAffine(),i=s(r.x);if(i===ct)return;const o=s(n*s(A+i*E));if(o===ct)return;let u=(r.x===i?0:2)|Number(r.y&lt),c=o;return d&&h(o)&&(c=function(t){return h(t)?s(-t):t}(o),u^=1),new w(i,c,u)}}}(t,r,i);return V(e.hash.outputLen,e.nByteLength,e.hmac)(o,c)},verify:function(t,n,r,i=v){const o=t;if(n=H("msgHash",n),r=H("publicKey",r),"strict"in i)throw new Error("options.strict was renamed to lowS");const{lowS:u,prehash:c}=i;let l,d;try{if("string"==typeof o||o instanceof Uint8Array)try{l=w.fromDER(o)}catch(x){if(!(x instanceof ut.Err))throw x;l=w.fromCompact(o)}else{if("object"!=typeof o||"bigint"!=typeof o.r||"bigint"!=typeof o.s)throw new Error("PARSE");{const{r:t,s:e}=o;l=new w(t,e)}}d=a.fromHex(r)}catch(S){if("PARSE"===S.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(u&&l.hasHighS())return!1;c&&(n=e.hash(n));const{r:h,s:p}=l,g=b(n),y=f(p),m=s(g*y),E=s(h*y),B=a.BASE.multiplyAndAddUnsafe(d,m,E)?.toAffine();return!!B&&s(B.x)===h},ProjectivePoint:a,Signature:w,utils:g}}const yt=U;function mt(t,e){if(t<0||t>=1<<8*e)throw new Error(`bad I2OSP call: value=${t} length=${e}`);const n=Array.from({length:e}).fill(0);for(let r=e-1;r>=0;r--)n[r]=255&t,t>>>=8;return new Uint8Array(n)}function bt(t,e){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t[r]^e[r];return n}function Et(t){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected")}function Bt(t){if(!Number.isSafeInteger(t))throw new Error("number expected")}function xt(t,e,n){Z(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:r,k:i,m:o,hash:s,expand:f,DST:a}=n;Et(t),Bt(e);const u=function(t){if(t instanceof Uint8Array)return t;if("string"==typeof t)return C(t);throw new Error("DST must be Uint8Array or string")}(a),c=r.toString(2).length,l=Math.ceil((c+i)/8),d=e*o*l;let h;if("xmd"===f)h=function(t,e,n,r){Et(t),Et(e),Bt(n),e.length>255&&(e=r(k(C("H2C-OVERSIZE-DST-"),e)));const{outputLen:i,blockLen:o}=r,s=Math.ceil(n/i);if(s>255)throw new Error("Invalid xmd length");const f=k(e,mt(e.length,1)),a=mt(0,o),u=mt(n,2),c=new Array(s),l=r(k(a,t,u,mt(0,1),f));c[0]=r(k(l,mt(1,1),f));for(let d=1;d<=s;d++){const t=[bt(l,c[d-1]),mt(d+1,1),f];c[d]=r(k(...t))}return k(...c).slice(0,n)}(t,u,d,s);else if("xof"===f)h=function(t,e,n,r,i){if(Et(t),Et(e),Bt(n),e.length>255){const t=Math.ceil(2*r/8);e=i.create({dkLen:t}).update(C("H2C-OVERSIZE-DST-")).update(e).digest()}if(n>65535||e.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return i.create({dkLen:n}).update(t).update(mt(n,2)).update(e).update(mt(e.length,1)).digest()}(t,u,d,i,s);else{if("_internal_pass"!==f)throw new Error('expand must be "xmd" or "xof"');h=t}const p=new Array(e);for(let w=0;w<e;w++){const t=new Array(o);for(let e=0;e<o;e++){const n=l*(e+w*o),i=h.subarray(n,n+l);t[e]=M(yt(i),r)}p[w]=t}return p}let vt=class extends d{update(t){return f.exists(this),this.iHash.update(t),this}digestInto(t){f.exists(this),f.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:i,blockLen:o,outputLen:s}=this;return t.finished=r,t.destroyed=i,t.blockLen=o,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}constructor(t,e){super(),this.finished=!1,this.destroyed=!1,f.hash(t);const n=l(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?t.create().update(n).digest():n);for(let o=0;o<i.length;o++)i[o]^=54;this.iHash.update(i),this.oHash=t.create();for(let o=0;o<i.length;o++)i[o]^=106;this.oHash.update(i),i.fill(0)}};const St=(t,e,n)=>new vt(t,e).update(n).digest();function At(t){return{hash:t,hmac:(e,...n)=>St(t,e,function(...t){if(!t.every((t=>t instanceof Uint8Array)))throw new Error("Uint8Array list expected");if(1===t.length)return t[0];const e=t.reduce(((t,e)=>t+e.length),0),n=new Uint8Array(e);for(let r=0,i=0;r<t.length;r++){const e=t[r];n.set(e,i),i+=e.length}return n}(...n)),randomBytes:p}}St.create=(t,e)=>new vt(t,e);const It=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ot=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Rt=BigInt(1),qt=BigInt(2),Ut=(t,e)=>(t+e/qt)/e;function Lt(t){const e=It,n=BigInt(3),r=BigInt(6),i=BigInt(11),o=BigInt(22),s=BigInt(23),f=BigInt(44),a=BigInt(88),u=t*t*t%e,c=u*u*t%e,l=Q(c,n,e)*c%e,d=Q(l,n,e)*c%e,h=Q(d,qt,e)*u%e,p=Q(h,i,e)*h%e,w=Q(p,o,e)*p%e,g=Q(w,f,e)*w%e,y=Q(g,a,e)*g%e,m=Q(y,f,e)*w%e,b=Q(m,n,e)*c%e,E=Q(b,s,e)*p%e,B=Q(E,r,e)*u%e,x=Q(B,qt,e);if(!Tt.eql(Tt.sqr(x),t))throw new Error("Cannot find square root");return x}const Tt=function(t,e,n=!1,r={}){if(t<=_)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:i,nByteLength:o}=rt(t,e);if(o>2048)throw new Error("Field lengths over 2048 bytes are not supported");const s=tt(t),f=Object.freeze({ORDER:t,BITS:i,BYTES:o,MASK:$(i),ZERO:_,ONE:z,create:e=>M(e,t),isValid:e=>{if("bigint"!=typeof e)throw new Error("Invalid field element: expected bigint, got "+typeof e);return _<=e&&e<t},is0:t=>t===_,isOdd:t=>(t&z)===z,neg:e=>M(-e,t),eql:(t,e)=>t===e,sqr:e=>M(e*e,t),add:(e,n)=>M(e+n,t),sub:(e,n)=>M(e-n,t),mul:(e,n)=>M(e*n,t),pow:(t,e)=>function(t,e,n){if(n<_)throw new Error("Expected power > 0");if(n===_)return t.ONE;if(n===z)return e;let r=t.ONE,i=e;for(;n>_;)n&z&&(r=t.mul(r,i)),i=t.sqr(i),n>>=z;return r}(f,t,e),div:(e,n)=>M(e*J(n,t),t),sqrN:t=>t*t,addN:(t,e)=>t+e,subN:(t,e)=>t-e,mulN:(t,e)=>t*e,inv:e=>J(e,t),sqrt:r.sqrt||(t=>s(f,t)),invertBatch:t=>function(t,e){const n=new Array(e.length),r=e.reduce(((e,r,i)=>t.is0(r)?e:(n[i]=e,t.mul(e,r))),t.ONE),i=t.inv(r);return e.reduceRight(((e,r,i)=>t.is0(r)?e:(n[i]=t.mul(e,n[i]),t.mul(e,r))),i),n}(f,t),cmov:(t,e,n)=>n?e:t,toBytes:t=>n?N(t,o):T(t,o),fromBytes:t=>{if(t.length!==o)throw new Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);return n?L(t):U(t)}});return Object.freeze(f)}(It,void 0,void 0,{sqrt:Lt}),Nt=function(t,e){const n=e=>gt({...t,...At(e)});return Object.freeze({...n(e),create:n})}({a:BigInt(0),b:BigInt(7),Fp:Tt,n:Ot,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Ot,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Rt*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),o=n,s=BigInt("0x100000000000000000000000000000000"),f=Ut(o*t,e),a=Ut(-r*t,e);let u=M(t-f*n-a*i,e),c=M(-f*r-a*o,e);const l=u>s,d=c>s;if(l&&(u=e-u),d&&(c=e-c),u>s||c>s)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:l,k1:u,k2neg:d,k2:c}}}},x),Ht=BigInt(0),kt=t=>"bigint"==typeof t&&Ht<t&&t<It,Ct={};function $t(t,...e){let n=Ct[t];if(void 0===n){const e=x(Uint8Array.from(t,(t=>t.charCodeAt(0))));n=k(e,e),Ct[t]=n}return x(k(n,...e))}const Dt=t=>t.toRawBytes(!0).slice(1),Ft=t=>M(t,It),Vt=Nt.ProjectivePoint;function Pt(t){if(!kt(t))throw new Error("bad x: need 0 < x < p");const e=Ft(t*t);let n=Lt(Ft(e*t+BigInt(7)));n%qt!==Ht&&(n=Ft(-n));const r=new Vt(t,n,Rt);return r.assertValidity(),r}Nt.utils.randomPrivateKey;const Zt=function(t,e){const n=e.map((t=>Array.from(t).reverse()));return(e,r)=>{const[i,o,s,f]=n.map((n=>n.reduce(((n,r)=>t.add(t.mul(n,e),r)))));return e=t.div(i,o),r=t.mul(r,t.div(s,f)),{x:e,y:r}}}(Tt,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map((t=>t.map((t=>BigInt(t)))))),_t=function(t,e){if(nt(t),!t.isValid(e.A)||!t.isValid(e.B)||!t.isValid(e.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=function(t,e){const n=t.ORDER;let r=ct;for(let d=n-lt;d%dt===ct;d/=dt)r+=lt;const i=r,o=(n-lt)/dt**i,s=(o-lt)/dt,f=dt**i-lt,a=dt**(i-lt),u=t.pow(e,o),c=t.pow(e,(o+lt)/dt);let l=(e,n)=>{let r=u,o=t.pow(n,f),l=t.sqr(o);l=t.mul(l,n);let d=t.mul(e,l);d=t.pow(d,s),d=t.mul(d,o),o=t.mul(d,n),l=t.mul(d,e);let h=t.mul(l,o);d=t.pow(h,a);let p=t.eql(d,t.ONE);o=t.mul(l,c),d=t.mul(h,r),l=t.cmov(o,l,p),h=t.cmov(d,h,p);for(let s=i;s>lt;s--){let e=dt**(s-dt),n=t.pow(h,e);const i=t.eql(n,t.ONE);o=t.mul(l,r),r=t.mul(r,r),n=t.mul(h,r),l=t.cmov(o,l,i),h=t.cmov(n,h,i)}return{isValid:p,value:l}};if(t.ORDER%pt===ht){const n=(t.ORDER-ht)/pt,r=t.sqrt(t.neg(e));l=(e,i)=>{let o=t.sqr(i);const s=t.mul(e,i);o=t.mul(o,s);let f=t.pow(o,n);f=t.mul(f,s);const a=t.mul(f,r),u=t.mul(t.sqr(f),i),c=t.eql(u,e);return{isValid:c,value:t.cmov(a,f,c)}}}return l}(t,e.Z);if(!t.isOdd)throw new Error("Fp.isOdd is not implemented!");return r=>{let i,o,s,f,a,u,c,l;i=t.sqr(r),i=t.mul(i,e.Z),o=t.sqr(i),o=t.add(o,i),s=t.add(o,t.ONE),s=t.mul(s,e.B),f=t.cmov(e.Z,t.neg(o),!t.eql(o,t.ZERO)),f=t.mul(f,e.A),o=t.sqr(s),u=t.sqr(f),a=t.mul(u,e.A),o=t.add(o,a),o=t.mul(o,s),u=t.mul(u,f),a=t.mul(u,e.B),o=t.add(o,a),c=t.mul(i,s);const{isValid:d,value:h}=n(o,u);l=t.mul(i,r),l=t.mul(l,h),c=t.cmov(c,s,d),l=t.cmov(l,h,d);const p=t.isOdd(r)===t.isOdd(l);return l=t.cmov(t.neg(l),l,p),c=t.div(c,f),{x:c,y:l}}}(Tt,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Tt.create(BigInt("-11"))}),{hashToCurve:zt,encodeToCurve:jt}=function(t,e,n){if("function"!=typeof e)throw new Error("mapToCurve() must be defined");return{hashToCurve(r,i){const o=xt(r,2,{...n,DST:n.DST,...i}),s=t.fromAffine(e(o[0])),f=t.fromAffine(e(o[1])),a=s.add(f).clearCofactor();return a.assertValidity(),a},encodeToCurve(r,i){const o=xt(r,1,{...n,DST:n.encodeDST,...i}),s=t.fromAffine(e(o[0])).clearCofactor();return s.assertValidity(),s}}}(Nt.ProjectivePoint,(t=>{const{x:e,y:n}=_t(Tt.create(t[0]));return Zt(e,n)}),{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Tt.ORDER,m:1,k:128,expand:"xmd",hash:x})}}]);
//# sourceMappingURL=6668.3d48a4bd.chunk.js.map